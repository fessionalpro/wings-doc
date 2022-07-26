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

与前端(LodashJs)相似，不同的是后端业务优先，只支持先调用后等待的leading防抖。
即在第一个请求时处理业务，有后续请求出现时，可以有以下处理方式

* 不复用leading结果时，直接返回预设的response(默认208 Already Reported)。否则，
* 等待waiting毫秒数，超时或被leading唤醒。然后，
* 若有leading有response，则复用；否则，返回预设response。

`@Debounce`底层基于HandlerInterceptor和，request流复用和response流缓存。
作用于Controller层，Session级，以URL特征及参数为判断重复的依据。

```java
@PostMapping("/test/debounce-body.json")
@Debounce(waiting = 600, header = {"User-Agent"}, body = true, reuse = true)
public R<Object> debounceBody(@RequestParam String p, @RequestBody Q<String> q) {
    return R.ok(p + "::" + seq.getAndIncrement() + "::" + q.getQ());
}
```

更多示例参考Debounce代码文档或测试代码[TestDebounceController.java](https://gitee.com/trydofor/pro.fessional.wings/blob/master/wings/slardar/src/test/java/pro/fessional/wings/slardar/controller/TestDebounceController.java)

## 3G.2.防止连击

与Debounce不同，`@DoubleKill`类似Cacheable采用AOP方式，主要用于Service层防同时计算。
此防抖不是基于时间间隔，而是依赖于前一个处理是否结束，仅当前一个处理中时，才kill后续。

虽沿用Dota命名，但却保留一除掉二，通过Jvm全局锁和DoubleKillException完成重复检查和流程控制。

也可以作用于Controller层，需要显示使用并通过Spel指定参数，如@RequestParam等参数。
默认是session级别的控制，可使用@bean进行处理。默认返回202 Accepted

默认对DoubleKillException返回固定的json字符串，注入DoubleKillExceptionResolver可替换，
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

* [TestDoubleKillController.java](https://gitee.com/trydofor/pro.fessional.wings/blob/master/wings/slardar/src/test/java/pro/fessional/wings/slardar/controller/TestDoubleKillController.java)
* [DoubleKillService.java](https://gitee.com/trydofor/pro.fessional.wings/blob/master/wings/slardar/src/test/java/pro/fessional/wings/slardar/service/DoubleKillService.java)

## 3G.3.验证码

对于受保护的资源，要采取一定的验证码，有时是为了延缓时间，有时是为了区分行为。
验证码可以header或param进行校验（默认param）去请求验证码图片等。

在spring Security中，对401和403有以下约定，所以验证码使用406(Not Acceptable)

* 401 - Unauthorized 身份未鉴别
* 403 - Forbidden/Access Denied 鉴权通过，授权不够

slardar验证码的默认是基于图片的，在现今的AI算法识别上，识别成功率应该在90%以上。
因此，仅限于初级的防人工的资源保护上。若是敏感信息或高级防护，建议采购第三方验证码服务。

默认支持中文验证码，一般是一个汉字，3个英数，可以在配置中关闭。

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

通过在http header中设置信息，进行编辑保护，防止客户端篡改。默认返回409(Conflict)。
详见 wings-righter-79.properties 和 RighterContext。实现原理和使用方法是，

* 使用Righter注解编辑数据(false)和提交数据(true)的方法
* 获得编辑数据时，在RighterContext中设置签名的数据header
* 提交时需要提交此签名，并被校验，签名错误时直接409
* 签名通过后，通过RighterContext获取数据，程序自行检验数据项是否一致

## 3G.5.终端信息

通过handlerInterceptor，在当前线程和request中设置terminal信息

TerminalContext保存了，远程ip，agent信息，locale和timezone

## 3G.6.请求复用和应答缓存

WingsReuseStreamFilter 实行了request流的循环读，和response的缓存。
在使用以下filter时，会出现bytes重复复制而浪费空间，建议自行Override。

* CommonsRequestLoggingFilter
* ShallowEtagHeaderFilter

ReuseStream的流仅提供了复用功能，默认不开启，不使用时无空间和性能损失。
仅在需要时，由filter，interceptor，advice等机制在使用其开启复用功能。

需要注意filter的order，以保证该filter在使用之前完成wrapper。

## 3G.7.请求及应答日志

通过WingsReuseStreamFilter注入RequestResponseLogging可实现请求应答日志。
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
            logger.warn(message);
        }
    };
}
```

其原理是，WingsReuseStreamFilter配置时，自动实现了以下步骤。

* @AutoConfigureBefore(SlardarRestreamConfiguration.class)
* 获取 WingsReuseStreamFilter，然后setRequestResponseLogging

## 3G.8.Rest和Client

默认使用okhttp3作为restTemplate的实现。按spring boot官方文档和源码约定。并可以 Autowired OkHttpClient
直接使用，默认**信任所有ssl证书**，如安全高，需要关闭。
如果需要按scope定制，使用RestTemplateBuilder，全局应用使用RestTemplateCustomizer。

[RestTemplate 定制](https://docs.spring.io/spring-boot/docs/2.6.6/reference/htmlsingle/#boot-features-resttemplate-customization)
org.springframework.boot.autoconfigure.web.client.RestTemplateAutoConfiguration

在springboot默认是3.x，而just-auth需要4.x，所以需要手动okhttp3.version属性

## 3G.9.负载过滤器

OverloadFilter可限定请求并发，默认`spring.wings.slardar.enabled.overload=false`

* 自动或手动设置`最大同时进行请求数`。超过时，执行`fallback`。
* 不影响性能的情况下，记录慢响应URI和运行状态。
* 优雅停止服务器，阻断所有新请求。
* 相同IP请求过于频繁，执行fallback。

`最大同时进行请求数`，指已经由Controller处理，但未完成的请求。

其中，关闭`快请求`或`慢请求`功能，可以通过以下设置关闭，

* `快请求` - `wings.slardar.overload.request-capacity=-1`
* `慢请求` - `wings.slardar.overload.response-warn-slow=0`
