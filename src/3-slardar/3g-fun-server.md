---
isOriginal: true
icon: advance
category:
  - 鱼人
  - 防护
  - 后端
---

# 3G.后端防护功能

对后端服务，提供一定的保护和控制能力

## 3G.1.后端防抖

与前端的Lodash相似，不同的是后端业务优先，只支持先调用后等待的leading防抖。
即在第一个请求时处理业务，有后续请求出现时，支持以下处理方式，

* 不复用leading结果时，直接返回预设的response(默认208 Already Reported)。否则，
* 等待waiting毫秒数，或超时或被leading唤醒。然后，
* 若有leading有response，则复用；否则，返回预设response。

`@Debounce`基于HandlerInterceptor，request流复用和response流缓存。
作用于Controller层，是Session级，以URL特征及参数为判断重复的依据。

```java
@PostMapping("/test/debounce-body.json")
@Debounce(waiting = 600, header = {"User-Agent"}, body = true, reuse = true)
public R<Object> debounceBody(@RequestParam String p, @RequestBody Q<String> q) {
    return R.ok(p + "::" + seq.getAndIncrement() + "::" + q.getQ());
}
```

更多示例参考Debounce代码文档或测试代码`TestDebounceController.java`

## 3G.2.防止连击

`@DoubleKill`与Debounce不同，是类似Cacheable的AOP，用于Service层防止同时计算。
底层基于业务锁，而非时间间隔，开始时获取锁，结束时释放锁，得不到锁的请求会被kill。

命名是Dota的，但意思不同，是杀死第二个，由Jvm全局锁和DoubleKillException实现。

能够但不建议用于Controller层，此时需要显式的通过Spel指定参数，如@RequestParam。
默认是session级别的控制，可使用@Bean进行处理。默认返回202 Accepted

DoubleKillException默认返回固定的json，注入DoubleKillExceptionResolver可替换，
需要注意ExceptionResolver或ExceptionHandler的Order，避免异常捕获的层级错误。

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

详细用法，参考DoubleKill源码文档，或参考测试代码

* [TestDoubleKillController.java](https://github.com/trydofor/pro.fessional.wings/blob/master/wings/slardar/src/test/java/pro/fessional/wings/slardar/controller/TestDoubleKillController.java)
* [DoubleKillService.java](https://github.com/trydofor/pro.fessional.wings/blob/master/wings/slardar/src/test/java/pro/fessional/wings/slardar/service/DoubleKillService.java)

## 3G.3.验证码

对于受保护的资源，使用验证码防扒，有时是为了延缓时间，有时是为了区分行为。
验证码的加载和验证，可以通过header或param进行（默认param）。

在SpringSecurity中，对401和403有以下约定，所以验证码使用406(Not Acceptable)

* 401 - Unauthorized 身份未鉴别
* 403 - Forbidden/Access Denied 鉴权通过，授权不够

slardar的验证码是基于图片的，现今的AI算法识别率可达90%以上，因此并不安全，
仅限于初防君子的初级资源保护上。默认支持中文，一个汉字+3个英数，可以在配置中关闭。
若是敏感信息或高级防护，建议采购第三方验证码服务。

使用方法如下，在MappingMethod上，放置`@FirstBlood` 即可，工作流程如下。

* 客户端正常访问此URL，如/test/captcha.json（需要支持GET方法，以便返回图片）
* 服务器需要验证码时，以406(Not Acceptable)返回提示json
* 客户端在header和cookie中获得Client-Ticket的token，并每次都发送
* 客户端在URL后增加quest-captcha-image=${vcode}获取验证码图片（可直接使用）
  - 以`accept`区分图片的返回形式，`base64`为base64格式的图，其他均为二进制流
  - 当`vcode`为验证码，通过时，返回空body，否则返回新的验证图片
* 客户端在URL后增加check-captcha-image=${vcode}提交验证码
* 服务器端自动校验Client-Ticket和check-captcha-image，完成验证或放行

若需集成其他验证码，如第三方服务或消息验证码，实现并注入FirstBloodHandler即可

## 3G.4.防止篡改

通过http header中为要编辑的信息设置签名，防止客户端篡改。默认返回409(Conflict)。
详见 wings-righter-79.properties 和 RighterContext。实现原理和使用方法是，

* 使用Righter注解编辑数据(false)和提交数据(true)的方法
* 获得编辑数据时，在RighterContext中设置签名的数据header
* 提交时需要提交此签名，并被校验，签名错误时直接409
* 签名通过后，通过RighterContext获取数据，程序自行检验数据项是否一致

## 3G.5.终端信息

通过HandlerInterceptor，在当前线程和request中设置Terminal信息，

TerminalContext主要包括ip，agent，locale和timezone等

## 3G.6.请求复用和应答缓存

WingsReuseStreamFilter 实行了request流的循环读，和response的缓存。
在使用以下filter时，会出现bytes重复复制而浪费空间，建议自行Override。

* CommonsRequestLoggingFilter
* ShallowEtagHeaderFilter

ReuseStream的流仅提供了复用功能，默认不开启，不使用时无空间和性能损失。
仅在需要时，由filter，interceptor，advice等机制在使用其开启复用功能。

需要注意filter的order，以保证该filter在使用之前完成wrapper。

## 3G.7.请求及应答日志

通过为WingsReuseStreamFilter注入RequestResponseLogging可实现请求应答日志。
相比于CommonsRequestLoggingFilter，此功能按需复用，同时支持request和response。

实现AbstractRequestResponseLogging Bean即可，参考代码如下。

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

其原理是，WingsReuseStreamFilter配置时，自动实现了以下步骤。

* @AutoConfigureBefore(SlardarRestreamConfiguration.class)
* 获取 WingsReuseStreamFilter，然后setRequestResponseLogging

注意`POST`提交传统表单提交，以下2中类型，包括参数和文件，

* `application/x-www-form-urlencoded`
* `multipart/form-data`

因底层的参数解析和获取流是二选一关系，即先解析则流读尽，获取流则参数为空。
所以，对应此两种请求需要记录Payload时，会存在以下差异

* form-urlencoded，因后置构造body，所以其中会包括query参数
* form-data，body同上，文件需要实现buildRequestPayload获取parts记录

## 3G.8.Rest和Client

默认使用OkHttp作为restTemplate的实现。遵循SpringBoot官方文档和源码约定，
可以Autowired OkHttpClient直接使用，默认**信任所有ssl证书**，如安全高，需要关闭。
如果需要按scope定制，使用RestTemplateBuilder，全局应用使用RestTemplateCustomizer。

[RestTemplate 定制](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#io.rest-client.resttemplate.customization)
org.springframework.boot.autoconfigure.web.client.RestTemplateAutoConfiguration

在springboot2.x中okhttp默认是3.x，而just-auth需要4.x，所以需要手动okhttp3.version属性

## 3G.9.负载过滤器

OverloadFilter可限定请求并发，默认`spring.wings.slardar.enabled.overload=false`

* 自动或手动设置`最大同时进行请求数`，超过时，执行`fallback`。
* 不影响性能的情况下，记录慢响应URI和运行状态。
* 优雅停止服务器，阻断所有新请求。
* 相同IP请求过于频繁，执行fallback。

`最大同时进行请求数`，指已经由Controller处理，但未完成的请求。

其中，关闭`快请求`或`慢请求`功能，可以通过以下设置关闭，

* `快请求` - `wings.slardar.overload.request-capacity=-1`
* `慢请求` - `wings.slardar.overload.response-warn-slow=0`

## 3G.10.分页查询

Wings中使用PageQuery和PageDefault取代了SpringData中的Pagable。

* PageQuery只能使用QueryString方式传递，不属于RequesBody部分。
* `@ParameterObject` PageQuery pq
* `@ParameterObject` `@PageDefault(size=30)` PageQuery pq

使用@ParameterObject注解，是为了Swagger能自动识别为Param类型

同PageQuery一样，返回分页使用PageResult作为容器，Wings中有响应的工具类。
