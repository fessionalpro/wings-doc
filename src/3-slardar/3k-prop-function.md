---
isOriginal: true
icon: enum
category:
  - 大鱼
  - 属性
---

# 3K.WebFun的属性

有关Slardar中提供的Spring Web加强功能的设置

## 3K.1.wings-cache-79.properties

默认 LRU (Least Recently Used)，单位seconds, 0=infinitely

### wings.slardar.cache.primary

`String`=`MemoryCacheManager`，哪个CacheManager为primary

* `MemoryCacheManager` - Cache2k的Jvm缓存
* `ServerCacheManager` - Hazelcast的分布式缓存

### wings.slardar.cache.expand

`Boolean`=`true`，是否对cache name的进行Resolve扩展，即追加所在类

### wings.slardar.cache.null-size

`Integer`=`1000`，原则上不缓存null，但可对null统一处理。

* `正数` - 缓存大小
* `0` - 不缓存null
* `负数` - 不统一处理

### wings.slardar.cache.null-live=300

`Integer`=`300`，默认300s

### wings.slardar.cache.common

level之外的默认配置

* `max-live`=`3600`，expireAfterWrite(Time To Live)
* `max-idle`=`0`，expireAfterAccess(Time To Idle)
* `max-size`=`50000`，缓存大小

### wings.slardar.cache.level

注意，Server使用hazelcast时，忽略common设置，避免非缓存IMap错误
level设置，需要使用通配符，如`program~*`，参考WingsCache命名及分隔符

* `wings.slardar.cache.level.program.max-live`=`0`
* `wings.slardar.cache.level.program.max-idle`=`0`
* `wings.slardar.cache.level.program.max-size`=`0`
* `wings.slardar.cache.level.general.max-live`=`86400`
* `wings.slardar.cache.level.general.max-idle`=`0`
* `wings.slardar.cache.level.general.max-size`=`0`
* `wings.slardar.cache.level.service.max-live`=`3600`
* `wings.slardar.cache.level.service.max-idle`=`0`
* `wings.slardar.cache.level.service.max-size`=`0`
* `wings.slardar.cache.level.session.max-live`=`600`
* `wings.slardar.cache.level.session.max-idle`=`0`
* `wings.slardar.cache.level.session.max-size`=`0`

## 3K.2.wings-debounce-79.properties

后端防抖设置

### wings.slardar.debounce.capacity

`Integer`=`10000`，等待区大小

### wings.slardar.debounce.max-wait

`Integer`=`300`，最大等待秒

### wings.slardar.debounce.http-status

`Integer`=`208`，告知发生防抖的http-status

### wings.slardar.debounce.content-type

`String`=`application/json;charset=UTF-8`

告知发生防抖的content-type

### wings.slardar.debounce.response-body

`String`=`{"success":false,"message":"debounced"}`

告知发生防抖的回复文本内容

## 3K.3.wings-domain-extend-79.properties

Host继承和Url重载

### wings.slardar.domain-extend.cache-size

`Integer`=`4096`，匹配和未匹配的url缓存size，RESTful慎用

### wings.slardar.domain-extend.prefix

`String`=`/domain/`，mapping和resource的URL统一的domain的前缀

### wings.slardar.domain-extend.host

`Map<String, Set<String>>`，host映射关系。

FilenameUtils.wildcardMatch，如`trydofor`=`*.trydofor.com, trydofor.com`

### wings.slardar.domain-extend.other-url

`List<String>`，不自动探测的指定domain url。

支持ant风格，如，`other-url`=`/trydofor/b/c.html`

## 3K.4.wings-doublekill-79.properties

double-kill, DoubleKillExceptionResolver的设置，支持变量 `{key}` 和 `{ttl}`

### wings.slardar.double-kill.http-status

`Integer`=`202`，回复的http-status

### wings.slardar.double-kill.content-type

`String`=`application/json;charset=UTF-8`，回复的content-type

### wings.slardar.double-kill.response-body

`String`=`{"success":false,"message":"Request Too Busy, Take A Coffee", "data":{"key":"{key}","ttl":{ttl}}}`，回复的文本内容

## 3K.5.wings-firstblood-79.properties

资源保护功能，如验证码

### wings.slardar.first-blood.client-ticket-key

`String`=`Client-Ticket`，识别用户时使用的header和session的key

### wings.slardar.first-blood.quest-captcha-key

`String`=`quest-captcha-image`，生成图形验证码的key，时间戳或特定前缀

### wings.slardar.first-blood.check-captcha-key

`String`=`check-captcha-image`，验证图形验证码的key，客户输入的验证码

### wings.slardar.first-blood.base64-captcha-key

`String`=`base64`，图片以base64返回的key，用在fresh-captcha-image=base64+时间戳

### wings.slardar.first-blood.base64-captcha-body

`String`=`data:image/jpeg;base64,{base64}`

图片以base64返回的格式，`{base64}`占位符，
默认配置，会输出 `data:image/jpeg;base64,/9j/4AAQSkZ.....`

### wings.slardar.first-blood.chinese-captcha

`Boolean`=`true`，是否使用中文验证码

### wings.slardar.first-blood.case-ignore

`Boolean`=`true`，是否忽略大小写

### wings.slardar.first-blood.captcha-prefix

`String`=`image`，默认图形验证码的scene前缀

### wings.slardar.first-blood.http-status

`Integer`=`406`，告知需要验证的http-status

### wings.slardar.first-blood.content-type

`String`=`application/json;charset=UTF-8`，告知需要验证的content-type

### wings.slardar.first-blood.response-body

`String`=`{"success":false,"message":"need a verify code"}`，告知验证码的回复文本内容

## 3K.6.wings-monitor-79.properties

程序自身的简单监控设置，阈值中，`-1`表示忽略此项。

### wings.slardar.monitor.cron

`String`=`0 */10 * * * ?`

monitor自身的cron，`-`表示停止此cron，默认频率10分钟

### wings.slardar.monitor.hook

`Boolean`=`true`，是否对自身的jvm的启动和停止发送hook通知

### wings.slardar.monitor.jvm.system-cent

`Integer`=`90`，警报阈值，系统Cpu Load按核数折算成整个系统的百分比，范围`[0，100]`。

### wings.slardar.monitor.jvm.system-load

`Integer`=`-1`，系统Cpu Load未折算，范围`[0，100*核数]`

### wings.slardar.monitor.jvm.process-cent

`Integer`=`-1`，进程Cpu Load，按核数折算成整个系统的百分比，范围`[0，100]`

### wings.slardar.monitor.jvm.process-load

`Integer`=`150`，进程Cpu load 未折算，范围`[0，100*核数]`

### wings.slardar.monitor.jvm.memory-load

`Integer`=`85`，进程Mem Load，范围`[0,100]`

### wings.slardar.monitor.jvm.thread-count

`Integer`=`-1`，jvm内线程总数

推算公式 threads = `Available Cores` / (1 - `Blocking Coefficient`)，
`Blocking Coefficient`(阻塞系数) = 阻塞时间／（阻塞时间 + 使用CPU的时间）

### wings.slardar.monitor.jvm.thread-load

`Integer`=`50`，jvm内线程总数除以核数

### wings.slardar.monitor.log.default.enable

`Boolean`=`true`，是否开启，日志文件的监控。`default`为其他规则提供默认项。

### wings.slardar.monitor.log.default.file

`String`=`${logging.file.name}`

监控的日志文件，文件不存在表示不监控

### wings.slardar.monitor.log.default.min-grow

`DataSize`=`-1`，每扫描周期最小增长量，可被沿用

### wings.slardar.monitor.log.default.max-grow

`DataSize`=`10MB`，每扫描周期最大增长量，可被沿用

### wings.slardar.monitor.log.default.max-size

`DataSize`=`=1GB`，日志最大文件体量（每天归档），可被沿用

### wings.slardar.monitor.log.default.bound

`Integer`=`40`，日志头和内容的大概分隔线，分隔byte数（ascii时等于char数）

### wings.slardar.monitor.log.default.level

`Set<String>`=`' WARN ',' ERROR '`，日志级别的关键词。

关键词，执行时会自动trim掉一组成对的头尾引号。
如`' ERROR '`等于` ERROR `，`'' WARN ''`等于`' WARN '`

### wings.slardar.monitor.log.default.keyword

`Set<String>`=`∅`，日志内容（级别后面）关键词

### wings.slardar.monitor.log.default.charset

`String`=`UTF8`，日志字符集

### wings.slardar.monitor.log.default.clean

`Integer`=`30`，清除N天以上的扫描文件，`-1`表示不清理

### wings.slardar.monitor.log.console

`Map<String, LogMetric.Rule>`，对console输出监控

* `file`=`${wings.console.out}`
* `level`=`'WARNING'`
* `keyword`=`'reflective access'`

### wings.slardar.monitor.view.enable

`Boolean`=`true`，是否开启警报文件查看器

### wings.slardar.monitor.view.mapping

`String`=`/api/log/warn-view.htm`，UrlMapping，GET请求，仅一个id参数

### wings.slardar.monitor.view.alive

`Duration`=`36H`，默认存活时间

### wings.slardar.monitor.view.length

`DataSize`=`1MB`，默认输出当前日志的前多少byte，日志中不要记录敏感信息

### wings.slardar.monitor.view.domain

`String`=`http://${server.address:localhost}:${server.port:80}`，外部访问的主机,ip等

### wings.slardar.monitor.view.ignore

`Map<String, String>`，日志中可以忽略警报的字符串

* `JacksonKotlin`=`com.fasterxml.jackson.module:jackson-module-kotlin`
* `CP-Subsystem`=`CP Subsystem is not enabled`
* `Swagger-DataTypeClass`=`dataTypeClass: class java.lang.Void`
* `AutoLog-Switch`=`Auto Switch the following Appender Level to`
* `No-MessageSource`=`not found for MessageSource`
* `Jpa-Persistence`=`javax.persistence.spi::No valid providers found`
* `UT005071-CONNECT`=`UT005071: Undertow request failed HttpServerExchange{ CONNECT`

### wings.slardar.monitor.ding-notice

`String`=`monitor`，默认使用钉钉机器人通知，使用的key为`monitor`，
详见wings-dingnotice-79.properties熟悉

## 3K.7.wings-okhttp-79.properties

[RestTemplate Customization](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#io.rest-client.resttemplate.customization)

### wings.slardar.okhttp.timeout-conn

`Integer`=`60`，链接超时秒数

### wings.slardar.okhttp.timeout-read

`Integer`=`180`，读取超时秒数

### wings.slardar.okhttp.timeout-write

`Integer`=`300`，写入超时秒数

### wings.slardar.okhttp.ping-interval

`Integer`=`0`，ping的间隔秒数，`0`为关闭

### wings.slardar.okhttp.cache-megabyte

`Integer`=`0`，缓存大小`Mb`，`0`表示不缓存

### wings.slardar.okhttp.cache-directory

`File`，缓存目录，默认在temp下创建 `wings-okhttp-cache`

### wings.slardar.okhttp.follow-redirect-ssl

`Boolean`=`true`，是否跟着https跳转

### wings.slardar.okhttp.follow-redirect

`Boolean`=`true`，是否跟着http跳转

### wings.slardar.okhttp.retry-failure

`Boolean`=`true`，conn失败是否重试

### wings.slardar.okhttp.max-idle

`Integer`=`5`，最大空闲conn数量

### wings.slardar.okhttp.keep-alive

`Integer`=`300`，keep-alive秒数

### wings.slardar.okhttp.ssl-trust-all

`Boolean`=`true`，是否信任所有证书

### wings.slardar.okhttp.host-cookie

`Boolean`=`true`，是否以host为单位保留cookie

### wings.slardar.okhttp.redirect-nop

`Boolean`=`false`，是否在follow-redirect时，暂时不follow

## 3K.8.wings-overload-79.properties

过载保护过滤器，如何处理快请求和慢响应。默认关闭，因容易误杀，不推荐使用。

### wings.slardar.overload.logger-interval

`Long`=`5000`，日志的记录间隔（毫秒）

### wings.slardar.overload.fallback-code

`Integer`=`200`，过载熔断时，返回的status code

### wings.slardar.overload.fallback-body

`String`=`{"success":false,"message":"Request Too Busy, Take A Coffee"}`，过载熔断时，默认返回的http body

### wings.slardar.overload.request-capacity

`Integer`=`9000`，快请求容量，注意，共享ip的容易误判。

* `<0` - 无限制，处理中的的最大请求数量
* `>0` - 用户根据压力测试结果推算的值
* `0` - 自动调整，初始值为 cpu核心数 x 300

### wings.slardar.overload.request-interval

`Long`=`1000`，在`interval`毫秒内，同ip的处理中的请求不能超过`calmdown`个。`<=0`表示无限制

### wings.slardar.overload.request-calmdown

`Integer`=`50`，在`interval`毫秒内，同ip的处理中的请求不能超过`calmdown`个。`<=0`表示无限制

### wings.slardar.overload.request-permit

`Map<String, String>`，请求ip白名单，前部匹配

* `local-127`=`127.`
* `local-192`=`192.`

### wings.slardar.overload.response-warn-slow

`Long`=`5000`，慢响应（毫秒数），超过时，记录WARN日志，`<0`表示关闭

### wings.slardar.overload.response-info-stat

`Long`=`1000`，每多少个请求记录一次INFO日志，`<0`表示关闭

## 3K.9.wings-righter-79.properties

防篡改，编辑越权

### wings.slardar.righter.header

`String`=`Right-Editor`，埋点header中的key

### wings.slardar.righter.http-status

`Integer`=`409`，告知编辑越权的http-status

### wings.slardar.righter.content-type

`String`=`application/json;charset=UTF-8`，告知编辑越权的content-type

### wings.slardar.righter.response-body

`String`=`{"success":false,"message":"forgery of editor"}`，告知编辑越权的回复文本内容

## 3K.A.wings-swagger-79.properties

Swagger文档设置

### wings.slardar.swagger.title

`String`=`${spring.application.name:wings-default}`

### wings.slardar.swagger.description

`String`=`user=${user.name}, os=${os.name}, tz=${user.timezone}, branch=${git.branch}, commit=${git.commit.id.full}`

### wings.slardar.swagger.version

`String`=`${build.version} ${build.time}`

### wings.slardar.swagger.param

`Map<String, EnabledParameter>`，key采用java命名,作为`$ref`使用，`in`支持`cookie`|`header`|`query`|`path`

* `headLanguage.enable`=`false`
* `headLanguage.name`=`Accept-Language`
* `headLanguage.in`=`header`
* `headLanguage.description`=`用户语言`
* `headLanguage.example`=`zh-CN`
* `headZoneId.enable`=`true`
* `headZoneId.name`=`Zone-Id`
* `headZoneId.in`=`header`
* `headZoneId.description`=`用户时区`
* `headZoneId.example`=`Asia/Shanghai`

### wings.slardar.swagger.accept

`Map<String, String>`，对Accept/MediaType复制，以出现多个请求方式

* `text/plain`=`*/*`
* `application/json`=`*/*`

### wings.slardar.swagger.flat-pagequery

`Boolean`=`true`，是否把PageQuery扁平化，作为querystring参数

## 3K.B.wings-dingnotice-79.properties

### wings.slardar.ding-notice.default.access-token

`String`=`∅`，警报时，使用钉钉通知的access_token，`空`表示不使用

### wings.slardar.ding-notice.default.digest-secret

`String`=`∅`，消息签名，`空`表示不使用

### wings.slardar.ding-notice.default.notice-keyword

`String`=`WARNING`，自定义关键词，消息中至少包含1个关键词才可以发送成功。

### wings.slardar.ding-notice.default.notice-mobiles

`Map<String, String>`，被通知人及手机号，非群内成员手机号会被脱敏。会自动添加到正文，如@155xxxx

### wings.slardar.ding-notice.default.webhook-url

`String`=`https://oapi.dingtalk.com/robot/send?access_token=`，钉钉通知的URL模板

### wings.slardar.ding-notice.default.msg-type

`String`=`markdown`，消息类型，支持 `text`|`markdown`
