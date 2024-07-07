---
isOriginal: true
icon: folder-tree
category:
  - Slardar
  - Property
---

# 3K.WebFun Properties

Properties of Spring Web enhancements in Slardar.

## 3K.1.wings-cache-79.properties

LRU (Least Recently Used) default, unit is second, 0=infinitely

### wings.slardar.cache.primary

`String`=`MemoryCacheManager`, which CacheManager is primary

* `MemoryCacheManager` - Cache2k Jvm cache
* `ServerCacheManager` - Hazelcast distributed cache

### wings.slardar.cache.expand

`Boolean`=`true`, whether to Resolve the cache name, that is, to append the concrete class name

### wings.slardar.cache.null-size

`Integer`=`1000`, in principle, null is not cached. However, it can be handled uniformly.

* `positive` - cache size
* `0` - do not cache null
* `negative` - no uniform processing

### wings.slardar.cache.null-live=300

`Integer`=`300`, default 300s

### wings.slardar.cache.common

default configuration other than level

* `max-live`=`3600`, expireAfterWrite(Time To Live)
* `max-idle`=`0`, expireAfterAccess(Time To Idle)
* `max-size`=`50000`, cache size

### wings.slardar.cache.level

Note, Server using hazelcast will ignore the common setting to avoid non-cache IMap errors.
level setting, you need to use wildcard like `program~*`, see WingsCache naming and separator

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

backend debounce

### wings.slardar.debounce.capacity

`Integer`=`10000`, waiting capacity.

### wings.slardar.debounce.max-wait

`Integer`=`300`, max waiting seconds.

### wings.slardar.debounce.http-status

`Integer`=`208`, http-status of response.

### wings.slardar.debounce.content-type

`String`=`application/json;charset=UTF-8`, content-type of response.

### wings.slardar.debounce.response-body

`String`=`{"success":false,"message":"debounced"}`, body of response.

## 3K.3.wings-domain-extend-79.properties

Host Extend and URL Override.

### wings.slardar.domain-extend.cache-size

`Integer`=`4096`, cache size of matched and unmatched url, caution when RESTful

### wings.slardar.domain-extend.prefix

`String`=`/domain/`, the uniform domain prefix of  the mapping and resource Url.

### wings.slardar.domain-extend.host

`Map<String, Set<String>>`, host mapping

FilenameUtils.wildcardMatch, eg. `trydofor`=`*.trydofor.com, trydofor.com`

### wings.slardar.domain-extend.other-url

`List<String>`, specified domain url that is not automatically detected.

ant match style, eg. `other-url`=`/trydofor/b/c.html`

## 3K.4.wings-doublekill-79.properties

config for double-kill, DoubleKillExceptionResolver, support `{key}` and `{ttl}`

### wings.slardar.double-kill.http-status

`Integer`=`202`, http-status of response

### wings.slardar.double-kill.content-type

`String`=`application/json;charset=UTF-8`, content-type of response

### wings.slardar.double-kill.response-body

`String`=`{"success":false,"message":"Request Too Busy, Take A Coffee", "data":{"key":"{key}","ttl":{ttl}}}`,
body of response.

## 3K.5.wings-firstblood-79.properties

Resource protection features, such as CAPTCHA

### wings.slardar.first-blood.client-ticket-key

`String`=`Client-Ticket`, key of the header and session used to identify the user.

### wings.slardar.first-blood.quest-captcha-key

`String`=`quest-captcha-image`, key to generate image CAPTCHA, timestamp or specific prefix.

### wings.slardar.first-blood.check-captcha-key

`String`=`check-captcha-image`, key to verify image CAPTCHA, client input the code.

### wings.slardar.first-blood.base64-captcha-key

`String`=`base64`, key to return image in base64, used in fresh-captcha-image=base64+timestamp

### wings.slardar.first-blood.base64-captcha-body

`String`=`data:image/jpeg;base64,{base64}`

format of returned base64 image, with `{base64}` placeholder.
The default configuration will output `data:image/jpeg;base64,/9j/4AAQSkZ.....`

### wings.slardar.first-blood.chinese-captcha

`Boolean`=`true`, whether to use Chinese char.

### wings.slardar.first-blood.case-ignore

`Boolean`=`true`, whether to ignore case.

### wings.slardar.first-blood.captcha-prefix

`String`=`image`, scene prefix for image graphic captcha.

### wings.slardar.first-blood.http-status

`Integer`=`406`, http-status of response.

### wings.slardar.first-blood.content-type

`String`=`application/json;charset=UTF-8`, content-type of response.

### wings.slardar.first-blood.response-body

`String`=`{"success":false,"message":"need a verify code"}`, body  of response.

## 3K.6.wings-monitor-79.properties

Setting of app builtin simple monitoring, `-1` in the threshold value means ignore.

### wings.slardar.monitor.cron

`String`=`0 */10 * * * ?`

Monitor its own cron, `-` means stop this cron, default 10 minutes.

### wings.slardar.monitor.hook

`Boolean`=`true`, whether to send notice for the start and stop of its own jvm hook

### wings.slardar.monitor.jvm.system-cent

`Integer`=`90`, alarm threshold, system Cpu Load with percentage to
the entire system with all cores, range `[0, 100]`

### wings.slardar.monitor.jvm.system-load

`Integer`=`-1`, System Cpu Load without percentage, range `[0, 100*cores]`

### wings.slardar.monitor.jvm.process-cent

`Integer`=`-1`, process system Cpu Load with percentage to
the entire system with all cores, range `[0, 100]`

### wings.slardar.monitor.jvm.process-load

`Integer`=`150`, process Cpu Load without percentage, range `[0, 100*cores]`

### wings.slardar.monitor.jvm.memory-load

`Integer`=`85`, process Mem Load, range `[0,100]`

### wings.slardar.monitor.jvm.thread-count

`Integer`=`-1`, total threads in jvm.

formula: threads = `Available Cores` / (1 - `Blocking Coefficient`),
`Blocking Coefficient` = Blocking time / (blocking time + calculation time)

### wings.slardar.monitor.jvm.thread-load

`Integer`=`50`, total jvm threads divided by total cores

### wings.slardar.monitor.log.default.enable

`Boolean`=`true`, whether to turn on, log file monitoring.
`default` provides default value for other rules.

### wings.slardar.monitor.log.default.file

`String`=`${logging.file.name}`

Monitored log file, no monitoring if file not found.

### wings.slardar.monitor.log.default.min-grow

`DataSize`=`-1`, min growth per scan cycle, can be inherited

### wings.slardar.monitor.log.default.max-grow

`DataSize`=`10MB`, max growth per scan cycle, can be inherited

### wings.slardar.monitor.log.default.max-size

`DataSize`=`=1GB`, max file size of log (archived daily), can be inherited

### wings.slardar.monitor.log.default.bound

`Integer`=`40`, approximate separator of log header and content, separating byte numbers (char numbers if ASCII)

### wings.slardar.monitor.log.default.level

`Set<String>`=`' WARN ',' ERROR '`, log level keyword.

keywords will automatically trim a pair of leading and trailing quotes when executed.
For example, `' ERROR '` becomes ` ERROR `, `'' WARN ''` becomes `' WARN '`.

### wings.slardar.monitor.log.default.keyword

`Set<String>=`, log content (after level) keywords

### wings.slardar.monitor.log.default.preview

`Integer`=`10`, preview lines after found keyword.

### wings.slardar.monitor.log.default.charset

`String`=`UTF8`, log charset

### wings.slardar.monitor.log.default.clean

`Integer`=`30`, delete scanned files older than N days, `-1` means no cleaning

### wings.slardar.monitor.log.console

`Map<String, LogMetric.Rule>`, monitor console output.

* `file`=`${wings.console.out}`
* `level`=`'WARNING'`
* `keyword`=`'reflective access'`

### wings.slardar.monitor.view.enable

`Boolean`=`true`, whether to enable the alert file viewer

### wings.slardar.monitor.view.mapping

`String`=`/api/log/warn-view.htm`, UrlMapping, GET request, one `id` parameter only.

### wings.slardar.monitor.view.alive

`Duration`=`36H`, default alive time.

### wings.slardar.monitor.view.length

`DataSize`=`1MB`, how many bytes before current log is output by default, do not record sensitive data in the log.

### wings.slardar.monitor.view.domain

`String`=`http://${server.address:localhost}:${server.port:80}`, host or ip for external access.

### wings.slardar.monitor.view.ignore

`Map<String, String>`, ignored alert string in logs.

* `JacksonKotlin`=`com.fasterxml.jackson.module:jackson-module-kotlin`
* `CP-Subsystem`=`CP Subsystem is not enabled`
* `Swagger-DataTypeClass`=`dataTypeClass: class java.lang.Void`
* `AutoLog-Switch`=`Auto Switch the following Appender Level to`
* `No-MessageSource`=`not found for MessageSource`
* `Jpa-Persistence`=`javax.persistence.spi::No valid providers found`
* `UT005071-CONNECT`=`UT005071: Undertow request failed HttpServerExchange{ CONNECT`

### wings.slardar.monitor.ding-notice

`String`=`monitor`, use DingTalk bot by default with the key `monitor`.
See wings-dingnotice-79.properties for details

## 3K.7.wings-okhttp-79.properties

[RestTemplate Customization](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#io.rest-client.resttemplate.customization)

### wings.slardar.okhttp.timeout-conn

`Integer`=`60`, connect timeout in seconds.

### wings.slardar.okhttp.timeout-read

`Integer`=`180`, read timeout in seconds.

### wings.slardar.okhttp.timeout-write

`Integer`=`300`, write timeout in seconds.

### wings.slardar.okhttp.ping-interval

`Integer`=`0`, ping interval in seconds, `0` means disable

### wings.slardar.okhttp.cache-megabyte

`Integer`=`0`, cache size in `Mb`, `0` means disable

### wings.slardar.okhttp.cache-directory

`File`, Cache directory, created under temp by default, `wings-okhttp-cache`

### wings.slardar.okhttp.follow-redirect-ssl

`Boolean`=`true`, whether to follow the https redirect.

### wings.slardar.okhttp.follow-redirect

`Boolean`=`true`, whether to follow the http redirect.

### wings.slardar.okhttp.retry-failure

`Boolean`=`true`, whether to retry if connect failed.

### wings.slardar.okhttp.max-idle

`Integer`=`5`, max count of idle connection.

### wings.slardar.okhttp.keep-alive

`Integer`=`300`, keep-alive in seconds.

### wings.slardar.okhttp.ssl-trust-all

`Boolean`=`true`, whether to trust all ssl certs.

### wings.slardar.okhttp.host-cookie

`Boolean`=`true`, whether to keep cookies by host.

### wings.slardar.okhttp.redirect-nop

`Boolean`=`false`, whether to temporarily do nothing when follow-redirect.

## 3K.8.wings-overload-79.properties

Overload protection filter, how to handle fast requests and slow responses. disable by
default, not recommended as it requires more detailed config to avoid false positives.

### wings.slardar.overload.log-interval

`Long`=`5000`, Logging interval in millis.

### wings.slardar.overload.fallback-code

`Integer`=`200`, http status of response when overload

### wings.slardar.overload.fallback-body

`String`=`{"success":false,"message":"Request Too Busy, Take A Coffee"}`, body of response when overload

### wings.slardar.overload.request-capacity

`Integer`=`9000`, fast request capacity, note that shared IP's can be easily misjudged.

* `<0` - unlimited, max number of requests to process
* `>0` - user defined value based on stress test results
* `0` - auto-tuning, initial value is cpu cores x 300

### wings.slardar.overload.request-interval

`Long`=`1000`, within `interval` milliseconds, no more than `calmdown` requests
can be processed for the same ip. `<=0` means no limit.

### wings.slardar.overload.request-calmdown

`Integer`=`50`, within `interval` milliseconds, no more than `calmdown` requests
can be processed for the same ip. `<=0` means no limit.

### wings.slardar.overload.request-permit

`Map<String, String>`, request ip whitelist, match by start-with

* `local-127`=`127.`
* `local-192`=`192.`

### wings.slardar.overload.response-warn-slow

`Long`=`5000`, slow response in millis, if exceeded, log WARN, `<0` means disable

### wings.slardar.overload.response-info-stat

`Long`=`1000`, log INFO once for each number of requests, `<0` means disable

## 3K.9.wings-righter-79.properties

Anti forgery editing, prevent editor privilege upgrade.

### wings.slardar.righter.header

`String`=`Right-Editor`, key in header.

### wings.slardar.righter.http-status

`Integer`=`409`, http-status of response.

### wings.slardar.righter.content-type

`String`=`application/json;charset=UTF-8`, content-type of response.

### wings.slardar.righter.response-body

`String`=`{"success":false,"message":"forgery of editor"}`, body  of response.

## 3K.A.wings-swagger-79.properties

Swagger document.

### wings.slardar.swagger.title

`String`=`${spring.application.name:wings-default}`

### wings.slardar.swagger.description

`String`=`user=${user.name}, os=${os.name}, tz=${user.timezone}, branch=${git.branch}, commit=${git.commit.id.full}`

### wings.slardar.swagger.version

`String`=`${build.version} ${build.time}`, need enable build info.

### wings.slardar.swagger.param

`Map<String, EnabledParameter>`, key in java naming rule, used as `$ref`,
`in` support `cookie`|`header`|`query`|`path`.

* `headLanguage.enable`=`false`
* `headLanguage.name`=`Accept-Language`
* `headLanguage.in`=`header`
* `headLanguage.description`=`user language`
* `headLanguage.example`=`zh-CN`
* `headZoneId.enable`=`true`
* `headZoneId.name`=`Zone-Id`
* `headZoneId.in`=`header`
* `headZoneId.description`=`user timezone`
* `headZoneId.example`=`Asia/Shanghai`

### wings.slardar.swagger.accept

`Map<String, String>`, copy Accept/MediaType to make multiple requests.

* `text/plain`=`*/*`
* `application/json`=`*/*`

### wings.slardar.swagger.flat-pagequery

`Boolean`=`true`, whether to flatten the PageQuery, as querystring parameter.

## 3K.B.wings-dingnotice-79.properties

### wings.slardar.ding-notice.default.dryrun

`String`=`[DRYRUN]`, dryrun prefix of subject. merge if null, `empty` means disable.

### wings.slardar.ding-notice.default.access-token

`String=`, the DingTalk access_token used to send the alert, `empty` means disable.

### wings.slardar.ding-notice.default.digest-secret

`String=`, secret of message digest, `empty` means disable.

### wings.slardar.ding-notice.default.notice-keyword

`String`=`WARNING`, custom keywords, to successfully send  message must contain at least 1 keyword.

### wings.slardar.ding-notice.default.notice-mobiles

`Map<String, String>`, notified person and his phone number, non-member's phone number will be desensitized.
It is automatically added to the text eg. @155xxxx

### wings.slardar.ding-notice.default.webhook-url

`String`=`https://oapi.dingtalk.com/robot/send?access_token=`, template of DingTalk webhook URL.

### wings.slardar.ding-notice.default.msg-type

`String`=`markdown`, message type, support `text`|`markdown`
