---
isOriginal: true
icon: folder-tree
category:
  - Slardar
  - Property
---

# 3I.Slardar Properties

Basic properties of Slardar and Spring

## 3I.1.wings-enabled-79.properties

### wings.enabled.slardar.double-kill

`Boolean`=`true`, whether to enable DoubleKill default AOP

### wings.enabled.slardar.monitor-jvm

`Boolean`=`true`, whether to enable Jvm monitor

### wings.enabled.slardar.monitor-log

`Boolean`=`true`, whether to enable Log monitor

### wings.enabled.slardar.hazelcast-standalone

`Boolean`=`false`, start as standalone at devtool to reduce cluster impact.
see <https://github.com/hazelcast/hazelcast-simulator/blob/master/README.md>

### wings.enabled.slardar.cookie

`Boolean`=`false`, whether to enable cookie customization

### wings.enabled.slardar.debounce

`Boolean`=`true`, whether to enable Interceptor of debounce

### wings.enabled.slardar.domainx

`Boolean`=`false`, whether to enable domain-extend

### wings.enabled.slardar.first-blood

`Boolean`=`false`, whether to enable Interceptor of FirstBlood

### wings.enabled.slardar.first-blood-image

`Boolean`=`true`, whether to enable image captcha Interceptor of FirstBlood

### wings.enabled.slardar.jackson-datetime

`Boolean`=`true`, whether to enable webmvc date / time converter of Wings

### wings.enabled.slardar.jackson-empty

`Boolean`=`true`, whether to enable webmvc empty converter of Wings

### wings.enabled.slardar.jackson-number

`Boolean`=`true`, whether to enable the Jackson precision limit of wings for Double, Float, BigDecimal

### wings.enabled.slardar.jackson-resource

`Boolean`=`true`, whether to enable serialization of the resource into a readable URL with Wings' Jackson config

### wings.enabled.slardar.jackson-result

`Boolean`=`true`, whether to enable webmvc result converter of Wings

### wings.enabled.slardar.pagequery

`Boolean`=`true`, whether to enable PageQuery webmvc resolver of Wings

### wings.enabled.slardar.restream

`Boolean`=`true`, whether to enable reuse stream filter

### wings.enabled.slardar.righter

`Boolean`=`true`, whether to prevent forgery editing

### wings.enabled.slardar.session

`Boolean`=`true`, whether to enable session default config

### wings.enabled.slardar.swagger

`Boolean`=`true`, whether to enable swagger config

### wings.enabled.slardar.terminal

`Boolean`=`true`, whether to enable WingsTerminalContext

## 3I.2.wings-prop-promotion.cnf

* `spring.session.timeout`
* `wings.slardar.cache.common.max-live`
* `wings.slardar.cache.common.max-idle`
* `wings.slardar.cache.common.max-size`
* `sentry.properties.file`

## 3I.3.spring-actuator-77.properties

[Actuator Endpoints](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#actuator.endpoints)

* `spring.jmx.enabled=true` enable local JMX by default, ssh tunnel for remote
* `management.endpoints.jmx.exposure.include=*`
* `management.endpoints.web.exposure.include=*`

[Actuator Properties](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#appendix.application-properties.actuator)

* `management.endpoint.health.show-details`=`always`
* `management.info.git.mode`=`full`
* `management.info.java.enabled`=`true`
* `management.metrics.tags.application`=`${spring.application.name:wings-default}`

Wings related endpoint

* `management.endpoint.flyway.enabled`=`false`
* `management.endpoint.wingscache.enabled`=`true`

## 3I.4.spring-jackson-79.properties

[SpringBoot Customize Jackson](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#howto.spring-mvc.customize-jackson-objectmapper)

com.fasterxml.jackson.databind.DeserializationFeature

* `spring.jackson.deserialization.FAIL_ON_UNKNOWN_PROPERTIES`=`false`
* `spring.jackson.deserialization.FAIL_ON_NUMBERS_FOR_ENUMS`=`true`
* `spring.jackson.deserialization.FAIL_ON_MISSING_CREATOR_PROPERTIES`=`true`
* `spring.jackson.deserialization.ACCEPT_SINGLE_VALUE_AS_ARRAY`=`true`
* `spring.jackson.deserialization.READ_UNKNOWN_ENUM_VALUES_USING_DEFAULT_VALUE`=`true`

com.fasterxml.jackson.core.JsonGenerator.Feature

* `spring.jackson.generator.WRITE_BIGDECIMAL_AS_PLAIN`=`true`

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

* `spring.jackson.serialization.WRITE_DATES_AS_TIMESTAMPS`=`false` default true
* `spring.jackson.serialization.FAIL_ON_EMPTY_BEANS`=`false` default true
* `spring.jackson.serialization.CLOSE_CLOSEABLE`=`true`

com.fasterxml.jackson.annotation.JsonInclude.Include

* `spring.jackson.default-property-inclusion`=`non_null`

## 3I.5.spring-servlet-server-79.properties

[Common Application Properties](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#appendix.application-properties)

graceful shutdown

* `server.shutdown`=`graceful`
* `spring.lifecycle.timeout-per-shutdown-phase`=`30s`

Servlet upload files, no size limit

* `spring.servlet.multipart.max-file-size`=`-1`
* `spring.servlet.multipart.max-request-size`=`-1`

Default tomcat settings, but undertow is better measured by 8 cores 3Ghz, 30ms response.

* `server.tomcat.max-connections`=`10000`
* `server.tomcat.threads.max`=`1000`

Undertow setting, see io.undertow.Undertow.java#L429

* `server.undertow.threads.io=` - Processor count
* `server.undertow.threads.worker=` - io-threads * 8
* `server.undertow.direct-buffers`=`true`

buffer setting, 4k, 8k for most request

```text
tcp_mem:low, pressure, high
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

`Long`=2592000, default unit is second, with 30 days by default

**MUST** use unit seconds (S) and numbers, for hazelcast session references.

### Other Default Config

* `spring.session.store-type`=`none`
* `server.servlet.session.timeout`=`${spring.session.timeout}`
* `spring.session.hazelcast.flush-mode`=`on-save`
* `spring.session.hazelcast.map-name`=`spring:session:sessions`
* `spring.session.hazelcast.save-mode`=`on-set-attribute`

### Header and Cookie

> SessionAutoConfiguration, header is case-insensitive, but cookie is not

name (all lowercase recommended) is used in both cookies and header, providing the key for WingsSessionIdResolver.

* `server.servlet.session.cookie.name`=`session`
* `server.servlet.session.cookie.max-age`=`${spring.session.timeout}`

## 3I.7.spring-springdoc-79.properties

### [SpringDoc Config](https://springdoc.org/#properties)

* `springdoc.api-docs.enabled`=`true`
* `springdoc.swagger-ui.enabled`=`true`
* `springdoc.show-actuator`=`false`
* `springdoc.writer-with-default-pretty-printer`=`true`
* `springdoc.use-fqn`=`true`

### Swagger Config

* `springdoc.swagger-ui.path`=`/swagger-ui.html`
* `springdoc.swagger-ui.filter`=`true`
* `springdoc.swagger-ui.operations-sorter`=`alpha`
* `springdoc.swagger-ui.tags-sorter`=`alpha`

## 3I.8.spring-task-79.properties

[Task Execution and Scheduling](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#features.task-execution-and-scheduling)

### Execution Threadpool Config

Related to @EnableAsync and @Async

* `spring.task.execution.pool.core-size`=`8`
* `spring.task.execution.pool.keep-alive`=`60s`
* `spring.task.execution.pool.max-size`=`64`
* `spring.task.execution.pool.queue-capacity`=`4096`
* `spring.task.execution.shutdown.await-termination`=`true`
* `spring.task.execution.shutdown.await-termination-period`=`30s`
* `spring.task.execution.thread-name-prefix`=`exec-`

### Scheduling Threadpool Config

Related to @EnableScheduling @Scheduled threadPoolTaskScheduler.
Cannot set @Primary, otherwise @Async thread pool will be overridden.

* `spring.task.scheduling.pool.size`=`8`
* `spring.task.scheduling.shutdown.await-termination`=`true`
* `spring.task.scheduling.shutdown.await-termination-period`=`180s`
* `spring.task.scheduling.thread-name-prefix`=`task-`

## 3I.9.wings-async-79.properties

### Event Threadpool Config

* wings.slardar.async.event.pool.core-size=8
* wings.slardar.async.event.pool.keep-alive=60s
* wings.slardar.async.event.pool.max-size=64
* wings.slardar.async.event.pool.queue-capacity=2048
* wings.slardar.async.event.shutdown.await-termination=true
* wings.slardar.async.event.shutdown.await-termination-period=60s
* wings.slardar.async.event.thread-name-prefix=event-

### Fast Threadpool Config

* wings.slardar.async.fast.pool.size=8
* wings.slardar.async.fast.shutdown.await-termination=true
* wings.slardar.async.fast.shutdown.await-termination-period=60s
* wings.slardar.async.fast.thread-name-prefix=fast-

### Execution Prefix

Based on `spring.task.execution.*`, set ThreadPool prefix,

* wings.slardar.async.exec-prefix.lite=`lit-exec-`
* wings.slardar.async.exec-prefix.application=`app-exec-`
