---
isOriginal: true
icon: enum
category:
  - 大鱼
  - 属性
---

# 3I.大鱼的属性

有关Slardar，Spring的基本设置

## 3I.1.spring-wings-enabled-79.properties

### spring.wings.slardar.enabled.jackson

`Boolean`=`true`，是否默认配置jackson

### spring.wings.slardar.enabled.okhttp

`Boolean`=`true`，是否默认配置okhttp3

### spring.wings.slardar.enabled.caching

`Boolean`=`true`，是否开启cache配置

### spring.wings.slardar.enabled.caching-aop

`Boolean`=`true`，是否开启cache配置的替换

### spring.wings.slardar.enabled.cookie

`Boolean`=`false`，是否实现cookie定制

### spring.wings.slardar.enabled.session

`Boolean`=`true`，是否默认配置session

### spring.wings.slardar.enabled.session-hazelcast

`Boolean`=`true`，是否默认配置session hazelcast

### spring.wings.slardar.enabled.async

`Boolean`=`true`，是否spring Async和线程池配置

### spring.wings.slardar.enabled.righter

`Boolean`=`true`，是否防范编辑权限提升

### spring.wings.slardar.enabled.debounce

`Boolean`=`true`，是否开启Debounce默认的Interceptor

### spring.wings.slardar.enabled.restream

`Boolean`=`true`，是否开启reuse stream filter

### spring.wings.slardar.enabled.first-blood

`Boolean`=`true`，是否开启FirstBlood默认的Interceptor

### spring.wings.slardar.enabled.first-blood-image

`Boolean`=`true`，是否开启FirstBlood的Interceptor图形验证码

### spring.wings.slardar.enabled.double-kill

`Boolean`=`true`，是否开启DoubleKill默认的AOP

### spring.wings.slardar.enabled.pagequery

`Boolean`=`true`，是否开启wings的PageQuery webmvc resolver

### spring.wings.slardar.enabled.datetime

`Boolean`=`true`，是否开启wings的 webmvc local datetime converter

### spring.wings.slardar.enabled.number

`Boolean`=`true`，是否开启wings的jackson对Double，Float，BigDecimal的精度限定

### spring.wings.slardar.enabled.undertow-ws

`Boolean`=`true`，是否配置undertow ws for UT026010: Buffer pool

### spring.wings.slardar.enabled.remote

`Boolean`=`true`，是否开启terminal Resolver

### spring.wings.slardar.enabled.locale

`Boolean`=`true`，是否开启i18n Resolver

### spring.wings.slardar.enabled.terminal

`Boolean`=`true`，是否解析 WingsTerminalContext

### spring.wings.slardar.enabled.captcha

`Boolean`=`false`，是否开启captcha配置

### spring.wings.slardar.enabled.overload

`Boolean`=`false`，是否开启熔断设置

### spring.wings.slardar.enabled.domain-extend

`Boolean`=`false`，是否支持 domain-extend

### spring.wings.slardar.enabled.swagger

`Boolean`=`true`，是否开启swagger配置

### spring.wings.slardar.enabled.monitor

`Boolean`=`true`，是否开开启监控

### spring.wings.slardar.enabled.monitor-jvm

`Boolean`=`true`，是否开启Jvm监控

### spring.wings.slardar.enabled.monitor-log

`Boolean`=`true`，是否开启Log监控

### spring.wings.slardar.enabled.boot-admin

`Boolean`=`true`，是否开启SpringBootAdmin配置

### spring.wings.slardar.enabled.tweaking

`Boolean`=`true`，是否支持动态调试

## 3I.2.wings-prop-promotion.cnf

* `spring.session.timeout`
* `wings.slardar.cache.common.max-live`
* `wings.slardar.cache.common.max-idle`
* `wings.slardar.cache.common.max-size`
* `sentry.properties.file`

## 3I.3.spring-actuator-77.properties

[actuator endpoints 设置文档](https://docs.spring.io/spring-boot/docs/2.6.6/reference/htmlsingle/#actuator.endpoints)

* `spring.jmx.enabled=true` 默认开启本地JMX，远程用ssh tunnel
* `management.endpoints.jmx.exposure.include=*`
* `management.endpoints.web.exposure.include=*`

[actuator properties 设置文档](https://docs.spring.io/spring-boot/docs/2.6.6/reference/htmlsingle/#application-properties.actuator)

* `management.endpoint.health.show-details`=`always`
* `management.info.git.mode`=`full`
* `management.info.java.enabled`=`true`
* `management.metrics.tags.application`=`${spring.application.name:wings-default}`

wings有关的endpoint

* `management.endpoint.flyway.enabled`=`false`
* `management.endpoint.wingscache.enabled`=`true`

## 3I.4.spring-jackson-79.properties

[SpringBoot自定义jackson](https://docs.spring.io/spring-boot/docs/2.6.6/reference/htmlsingle/#howto-customize-the-jackson-objectmapper)

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

[SpringBoot默认属性](https://docs.spring.io/spring-boot/docs/2.6.6/reference/htmlsingle/#common-application-properties)

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
tcp_mem：low, pressure, high
net.ipv4.tcp_wmem = 4096 87380 4161536
net.ipv4.tcp_rmem = 4096 87380 4161536
net.ipv4.tcp_mem = 786432 2097152 3145728
```

* `server.undertow.buffer-size`=`8192`
* `server.undertow.max-headers`=`4096`
* `server.undertow.max-parameters`=`4096`

## 3I.6.spring-session-79.properties

[SpringBoot session 设置](https://docs.spring.io/spring-boot/docs/2.6.6/reference/htmlsingle/#boot-features-session)

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

### execution的线程池设置

* `spring.task.execution.pool.core-size`=`8`
* `spring.task.execution.pool.keep-alive`=`60s`
* `spring.task.execution.pool.max-size`=`64`
* `spring.task.execution.pool.queue-capacity`=`4096`
* `spring.task.execution.shutdown.await-termination`=`true`
* `spring.task.execution.shutdown.await-termination-period`=`30s`
* `spring.task.execution.thread-name-prefix`=`wings-task-`

### scheduling的线程池设置

* `spring.task.scheduling.pool.size`=`8`
* `spring.task.scheduling.shutdown.await-termination`=`true`
* `spring.task.scheduling.shutdown.await-termination-period`=`30s`
* `spring.task.scheduling.thread-name-prefix`=`wings-cron-`
