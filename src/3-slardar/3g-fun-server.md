---
isOriginal: true
icon: shield-heart
category:
  - Slardar
  - Protection
  - Backend
---

# 3G.Backend Protection

Provide some protection and control for backsend services.

## 3G.1.Backend Debounce

Similar to the frontend Lodash, but the backend business takes precedence and only supports
the leading style debounce of call first and wait later. That is, the business is processing
on the first request, and the subsequent request arrives, the following processing is supported,

* Directly return the preset response (default 208 Already Reported) if no reuse of the leading result. otherwise,
* Wait for specified milliseconds, and timeout or wake up by leading process. then,
* Reuse if there is a leading result; otherwise, return the preset response.

`@Debounce` is based on HandlerInterceptor, request stream reuse and response stream caching.
Acts on Controller layer, Session level, with URL and parameters as the basis for judging duplication.

```java
@PostMapping("/test/debounce-body.json")
@Debounce(waiting = 600, header = {"User-Agent"}, body = true, reuse = true)
public R<Object> debounceBody(@RequestParam String p, @RequestBody Q<String> q) {
    return R.ok(p + "::" + seq.getAndIncrement() + "::" + q.getQ());
}
```

For more examples, see the Debounce doc or the testcase `TestDebounceController.java`

## 3G.2.Double Kill

`@DoubleKill` is different from Debounce, which is a Cacheable-like AOP for Service layer to
prevent concurrent processes. The underlying layer is based on business locks, not time intervals,
acquiring locks at the beginning and releasing them at the end, and requests that do not get locks are killed.

The name is from Dota, but the meaning is different, it is kill the second, implemented by Jvm global lock and DoubleKillException.

Can be used but not recommended for Controller layer, you should explicitly specify parameters by Spel, such as @RequestParam.
This is session level control, can be handled with @Bean and returns 202 Accepted by default.

DoubleKillException returns a fixed json by default, which can be replaced by injecting DoubleKillExceptionResolver.
Must pay attention to the Order of ExceptionResolver or ExceptionHandler to avoid exception catching hierarchy errors.

```java
@DoubleKill(expression = "#type + '-' + #p1 * 1000")
public String sleepSecondExp(String type, int s) {
}

@DoubleKill(expression = "@httpSessionIdResolver.resolveSessionIds(#p0)")
public R<String> doubleKill(HttpServletRequest request) throws InterruptedException {
    Thread.sleep(10_000);
    return R.ok("login page");
}
```

For detailed usage, see the source code or the test code,

* [TestDoubleKillController.java](https://github.com/trydofor/professional-wings/blob/master/wings/slardar/src/test/java/pro/fessional/wings/slardar/controller/TestDoubleKillController.java)
* [DoubleKillService.java](https://github.com/trydofor/professional-wings/blob/master/wings/slardar/src/test/java/pro/fessional/wings/slardar/service/DoubleKillService.java)

## 3G.3.CAPTCHA

For protected resources, captcha is used to sometimes to delay time and sometimes to distinguish behavior.
Captcha loading and validation can be done via header or param (default param).

In SpringSecurity, the conventions for 401 and 403 are as follows, so CAPTCHA uses 406 (Not Acceptable)

* 401 - Unauthorized identity not identified
* 403 - Forbidden/Access Denied Authentication passed, insufficient authorization

Slardar's CAPTCHA is image based and today's AI can recognize up to 99.9% or more, so it is not secure and
is a low level protection for gentlemen only. The default support for Chinese, is 1 Chinese + 3 Alphanum,
can be turned off in the configuration. For sensitive information or advanced protection, it is recommended
to purchase a 3rd CAPTCHA service.

Put `@FirstBlood` on the MappingMethod, usage and workflow is as follows.

* Client normally accesses the URL, such as /test/captcha.json (support GET in order to get the image)
* If the server requires a captcha, it returns a json with 406 (Not Acceptable)
* Client gets Client-Ticket token from header or cookie, and sends it each time
* Client appends quest-captcha-image=${vcode} to the URL to get the CAPTCHA image (can be used directly)
  - Distinguish the image form by `accept`, `base64` is in base64, all others are binary streams
  - When `vcode` is the captcha and passed, return the empty body, otherwise return the new verification image
* Client appends check-captcha-image=${vcode} to the URL, submit the captcha
* Server auto checks Client-Ticket and check-captcha-image to complete validation

If you need to integrate other CAPTCHAs, such as 3rd services or message CAPTCHAs,
just implement and inject FirstBloodHandler.

## 3G.4.Anti Forgery

Set a signature for the message to be edited in the http header to prevent tampering by the client.
Default returns 409(Conflict). See wings-righter-79.properties and RighterContext for details.
the Underlying principle and usage are,

* Use the Righter annotation to edit data (false) and commit data (true)
* Set the signature header in the RighterContext when getting the edited data
* When committing, this signature must be submitted and verified, return 409 if wrong signature
* After the signature is passed, the data is obtained through the RighterContext and
  the program itself checks the data items for consistency.

## 3G.5.Terminal Info

Terminal info (eg. ip, agent, locale and timezone) is set in the current thread (and request) via,

* `HandlerInterceptor` -  Controller
* `AuthenticationEventPublisher` -  Filter (login/logout)

## 3G.6.Request Reuse and Response Caching

WingsReuseStreamFilter implements circular reading of request stream, and caching of response.
When using the following filter, bytes are duplicated and space is wasted,
so it is recommended to Override it by yourself.

* CommonsRequestLoggingFilter
* ShallowEtagHeaderFilter

ReuseStream provides circular reading and is disabled by default, without space or performance loss if not used.
It is only used by the filter, interceptor, advice and other mechanisms to enable circular reading when needed.

You must be aware of the filter order to ensure the wrapper is complete before using it.

## 3G.7.Request and Response Loging

Request and response logging can be implemented by injecting RequestResponseLogging into WingsReuseStreamFilter.
Unlike CommonsRequestLoggingFilter, this feature is used on demand and supports both request and response.

Just implement the AbstractRequestResponseLogging bean, the reference code is as follows.

```java
@Bean
public RequestResponseLogging requestResponseLogging() {
    return new AbstractRequestResponseLogging() {
        @Override
        public Condition loggingConfig(@NotNull ReuseStreamRequestWrapper req) {
            if (!req.getRequestURI().contains("/test/debounce")) return null;

            final Condition cond = new Condition();
            cond.setRequestEnable(true);
            cond.setRequestPayload(true);
            cond.setRequestHeader(s -> s.contains("User-Agent"));

            cond.setResponseEnable(true);
            cond.setResponsePayload(true);
            return cond;
        }

        @Override
        protected void logging(@NotNull String message) {
            log.warn(message);
        }
    };
}
```

The principle is that the following steps are auto implemented when WingsReuseStreamFilter is configured.

* @AutoConfigureBefore(SlardarRestreamConfiguration.class)
* Get WingsReuseStreamFilter, then setRequestResponseLogging

Note that `POST` commits a traditional form data, of the following 2 types, including parameters and files

* `application/x-www-form-urlencoded`
* `multipart/form-data`

Because the underlying parameter parsing and get stream is a choose one of two, that is,
first parsing then stream exhausted, read stream then parameters are empty.
So, if you need to record Payload for these two requests, there are the following differences

* form-urlencoded, which contains query parameters because of the post-constructed body
* form-data, the body is the same as above, the file needs to implement buildRequestPayload to get the pars record

## 3G.8.Rest and Client

The restTemplate use OkHttp as underlying in wings. Follow SpringBoot official docs and code conventions,
OkHttpClient Can Autowired and use directly, the default **trust all ssl certificates**, but in high security,
you need to disable it.

For scope customization use RestTemplateBuilder, for global customization use RestTemplateCustomizer.

[RestTemplate Customization](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#io.rest-client.resttemplate.customization)
org.springframework.boot.autoconfigure.web.client.RestTemplateAutoConfiguration

In springboot 2.x, use http  3.x by default, and just-auth needs 4.x, so you need to manually set okhttp3.version property

## 3G.9.OverloadFilter

OverloadFilter can limit request concurrency, default `false`

* Set `max concurrent requests` automatically or manually, and perform `fallback` when exceeded.
* Log slow response URIs and running status without affecting performance.
* Elegantly stop the server and block all new requests.
* Perform fallback if same IP requests are too frequent.

`max concurrent requests`, which refers to requests that have been processed by the Controller but not completed.

Among them, the `fast requests` or `slow requests` can be disabled with the following settings.

* `fast requests` - `wings.slardar.overload.request-capacity=-1`
* `slow request` - `wings.slardar.overload.response-warn-slow=0`

## 3G.10.Pagination Query

PageQuery and PageDefault are used in Wings instead of Pagable in SpringData.

* PageQuery can only be passed using the QueryString method and is not part of the RequesBody section.
* `@ParameterObject` PageQuery pq
* `@ParameterObject` `@PageDefault(size=30)` PageQuery pq

The @ParameterObject annotation is used so that Swagger can automatically recognize it as a Param type

As with PageQuery, the pagination return uses PageResult as the container and Wings has tool to handle it.

When PageQuery is used as @RequesBody, it usually looks like this

* as super `Ins extends PageQuery`
* as field `private PageQuery pagable`

cannot use PageDefault and aliases, and is handled by the following classes, just like a normal json pojo.

* RequestResponseBodyMethodProcessor
* HttpMessageConverter

Due to aliasing requirements, generally used for compatibility with older systems, so not customized
Jackson Deserializer and HandlerMethodArgumentResolver
