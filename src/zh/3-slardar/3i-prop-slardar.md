---
isOriginal: true
icon: enum
category:
  - 大鱼
  - 属性
---

# 3I.大鱼的属性

有关Slardar，Spring的基本设置

## 3I.1.wings-enabled-79.properties

### wings.enabled.slardar.double-kill

`Boolean`=`true`，是否开启DoubleKill默认的AOP

### wings.enabled.slardar.monitor-jvm

`Boolean`=`true`，是否开启Jvm监控

### wings.enabled.slardar.monitor-log

`Boolean`=`true`，是否开启Log监控

### wings.enabled.slardar.hazelcast-standalone

`Boolean`=`false`, 在devtool时，以standalone方式启动，可减少集群影响。
高级测试，参考 <https://github.com/hazelcast/hazelcast-simulator/blob/master/README.md>

### wings.enabled.slardar.cookie

`Boolean`=`false`，是否实现cookie定制

### wings.enabled.slardar.debounce

`Boolean`=`true`，是否开启Debounce默认的Interceptor

### wings.enabled.slardar.domainx

`Boolean`=`false`，是否支持 domain-extend

### wings.enabled.slardar.first-blood

`Boolean`=`false`，是否开启FirstBlood默认的Interceptor

### wings.enabled.slardar.first-blood-image

`Boolean`=`true`，是否开启FirstBlood的Interceptor图形验证码

### wings.enabled.slardar.jackson-datetime

`Boolean`=`true`，是否开启wings的 webmvc date/time 转换

### wings.enabled.slardar.jackson-empty

`Boolean`=`true`，是否开启wings的 webmvc empty 转换

### wings.enabled.slardar.jackson-number

`Boolean`=`true`，是否开启wings的jackson对Double，Float，BigDecimal的精度限定

### wings.enabled.slardar.jackson-resource

`Boolean`=`true`，是否开启wings的jackson对Resource序列化成可读性好的URL

### wings.enabled.slardar.jackson-result

`Boolean`=`true`，是否开启wings的 webmvc result 转换

### wings.enabled.slardar.pagequery

`Boolean`=`true`，是否开启wings的PageQuery webmvc resolver

### wings.enabled.slardar.restream

`Boolean`=`true`，是否开启reuse stream filter

### wings.enabled.slardar.righter

`Boolean`=`true`，是否防范编辑篡改

### wings.enabled.slardar.session

`Boolean`=`true`，是否默认配置session

### wings.enabled.slardar.swagger

`Boolean`=`true`，是否开启swagger配置

### wings.enabled.slardar.terminal

`Boolean`=`true`，是否支持WingsTerminalContext

## 3I.2.wings-prop-promotion.cnf

* `spring.session.timeout`
* `wings.slardar.cache.common.max-live`
* `wings.slardar.cache.common.max-idle`
* `wings.slardar.cache.common.max-size`
* `sentry.properties.file`

## 3I.3.spring-actuator-77.properties

[Actuator Endpoints](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#actuator.endpoints)

* `spring.jmx.enabled=true` 默认开启本地JMX，远程用ssh tunnel
* `management.endpoints.jmx.exposure.include=*`
* `management.endpoints.web.exposure.include=*`

[Actuator Properties](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#appendix.application-properties.actuator)

* `management.endpoint.health.show-details`=`always`
* `management.info.git.mode`=`full`
* `management.info.java.enabled`=`true`
* `management.metrics.tags.application`=`${spring.application.name:wings-default}`

wings有关的endpoint

* `management.endpoint.flyway.enabled`=`false`
* `management.endpoint.wingscache.enabled`=`true`

## 3I.4.spring-jackson-79.properties

[SpringBoot自定义jackson](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#howto.spring-mvc.customize-jackson-objectmapper)

com.fasterxml.jackson.databind.DeserializationFeature

* `spring.jackson.deserialization.FAIL_ON_UNKNOWN_PROPERTIES`=`false`
* `spring.jackson.deserialization.FAIL_ON_NUMBERS_FOR_ENUMS`=`true`
* `spring.jackson.deserialization.FAIL_ON_MISSING_CREATOR_PROPERTIES`=`true`
* `spring.jackson.deserialization.ACCEPT_SINGLE_VALUE_AS_ARRAY`=`true`
* `spring.jackson.deserialization.READ_UNKNOWN_ENUM_VALUES_USING_DEFAULT_VALUE`=`true`

com.fasterxml.jackson.core.JsonGenerator.Feature

* `spring.jackson.generator.WRITE_NUMBERS_AS_STRINGS`=`true`

com.fasterxml.jackson.databind.MapperFeature`

* `spring.jackson.mapper.PROPAGATE_TRANSIENT_MARKER`=`true`
* `spring.jackson.mapper.DEFAULT_VIEW_INCLUSION`=`true`
* `spring.jackson.mapper.ACCEPT_CASE_INSENSITIVE_PROPERTIES`=`true`
* `spring.jackson.mapper.ALLOW_EXPLICIT_PROPERTY_RENAMING`=`true`

com.fasterxml.jackson.core.JsonParser.Feature

* `spring.jackson.parser.ALLOW_COMMENTS`=`true`
* `spring.jackson.parser.ALLOW_YAML_COMMENTS`=`true`
* `spring.jackson.parser.ALLOW_UNQUOTED_FIELD_NAMES`=`true`
* `spring.jackson.parser.ALLOW_SINGLE_QUOTES`=`true`
* `spring.jackson.parser.ALLOW_BACKSLASH_ESCAPING_ANY_CHARACTER`=`false`
* `spring.jackson.parser.ALLOW_NUMERIC_LEADING_ZEROS`=`true`
* `spring.jackson.parser.ALLOW_MISSING_VALUES`=`true`
* `spring.jackson.parser.ALLOW_TRAILING_COMMA`=`true`

com.fasterxml.jackson.databind.SerializationFeature

* `spring.jackson.serialization.WRITE_DATES_AS_TIMESTAMPS`=`false`默认true
* `spring.jackson.serialization.CLOSE_CLOSEABLE`=`true`

com.fasterxml.jackson.annotation.JsonInclude.Include

* `spring.jackson.default-property-inclusion`=`non_null`

## 3I.5.spring-servlet-server-79.properties

[Common Application Properties](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#appendix.application-properties)

graceful shutdown

* `server.shutdown`=`graceful`
* `spring.lifecycle.timeout-per-shutdown-phase`=`30s`

servlet 上传文件，大小没有限制

* `spring.servlet.multipart.max-file-size`=`-1`
* `spring.servlet.multipart.max-request-size`=`-1`

默认tomcat设置，按8核3Ghz，30ms应答实测，undertow较优。

* `server.tomcat.max-connections`=`10000`
* `server.tomcat.threads.max`=`1000`

Undertow设置，参考io.undertow.Undertow.java#L429

* `server.undertow.threads.io=` - Processor count
* `server.undertow.threads.worker=` - io-threads * 8
* `server.undertow.direct-buffers`=`true`

缓存区设置，4k, 8k for most request

```text
tcp_mem: low, pressure, high
net.ipv4.tcp_wmem = 4096 87380 4161536
net.ipv4.tcp_rmem = 4096 87380 4161536
net.ipv4.tcp_mem = 786432 2097152 3145728
```

* `server.undertow.buffer-size`=`8192`
* `server.undertow.max-headers`=`4096`
* `server.undertow.max-parameters`=`4096`

## 3I.6.spring-session-79.properties

[Spring Session](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#web.spring-session)

### spring.session.timeout

`Long`=2592000，单位默认秒，默认30天

**必须**使用单位秒(S)且数字，以供hazelcast session引用

### 其他默认配置

* `spring.session.store-type`=`none`
* `server.servlet.session.timeout`=`${spring.session.timeout}`
* `spring.session.hazelcast.flush-mode`=`on-save`
* `spring.session.hazelcast.map-name`=`spring:session:sessions`
* `spring.session.hazelcast.save-mode`=`on-set-attribute`

### Header和Cookie设置

> SessionAutoConfiguration, header is case-insensitive, but cookie is not

name（建议全小写）在cookie和header中都会使用，为WingsSessionIdResolver提供key。

* `server.servlet.session.cookie.name`=`session`
* `server.servlet.session.cookie.max-age`=`${spring.session.timeout}`

## 3I.7.spring-springdoc-79.properties

### [SpringDoc设置](https://springdoc.org/#properties)

* `springdoc.api-docs.enabled`=`true`
* `springdoc.swagger-ui.enabled`=`true`
* `springdoc.show-actuator`=`false`
* `springdoc.writer-with-default-pretty-printer`=`true`
* `springdoc.use-fqn`=`true`

### Swagger设置

* `springdoc.swagger-ui.path`=`/swagger-ui.html`
* `springdoc.swagger-ui.filter`=`true`
* `springdoc.swagger-ui.operations-sorter`=`alpha`
* `springdoc.swagger-ui.tags-sorter`=`alpha`

## 3I.8.spring-task-79.properties

[Task Execution and Scheduling](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#features.task-execution-and-scheduling)

### execution的线程池设置

与 @EnableAsync @Async 有关

* `spring.task.execution.pool.core-size`=`8`
* `spring.task.execution.pool.keep-alive`=`60s`
* `spring.task.execution.pool.max-size`=`64`
* `spring.task.execution.pool.queue-capacity`=`4096`
* `spring.task.execution.shutdown.await-termination`=`true`
* `spring.task.execution.shutdown.await-termination-period`=`30s`
* `spring.task.execution.thread-name-prefix`=`exec-`

### scheduling的线程池设置

与 @EnableScheduling @Scheduled threadPoolTaskScheduler 有关。
不可以设置@Primary，否则@Async线程池被覆盖。

* `spring.task.scheduling.pool.size`=`8`
* `spring.task.scheduling.shutdown.await-termination`=`true`
* `spring.task.scheduling.shutdown.await-termination-period`=`30s`
* `spring.task.scheduling.thread-name-prefix`=`task-`

## 3I.9.wings-async-79.properties

### event 事件总线线程池

* wings.slardar.async.event.pool.core-size=8
* wings.slardar.async.event.pool.keep-alive=60s
* wings.slardar.async.event.pool.max-size=64
* wings.slardar.async.event.pool.queue-capacity=2048
* wings.slardar.async.event.shutdown.await-termination=true
* wings.slardar.async.event.shutdown.await-termination-period=60s
* wings.slardar.async.event.thread-name-prefix=event-

### heavy 重任务线程池

* wings.slardar.async.heavy.pool.size=8
* wings.slardar.async.heavy.shutdown.await-termination=true
* wings.slardar.async.heavy.shutdown.await-termination-period=60s
* wings.slardar.async.heavy.thread-name-prefix=heavy-
