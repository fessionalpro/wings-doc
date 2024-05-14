---
isOriginal: true
icon: enum
category:
  - 沉默
  - 属性
---

# 1D.沉默的属性

有关自动加载，默认工具和行为的属性。

## 1D.1.wings-auto-config.cnf

Silencer的入口配置，定义了Silencer的自动加载的路径和模式。
存在多个`wings-auto-config*.cnf`时，按ascii排序，取最后。

### wings.boot.more

`List<String>`=`application*.*, wings-conf/**/*.*`

多协议路径下查找，不支持协议头，同名可多次加载，按优先级覆盖。

### wings.boot.once

`List<String>`=`git.properties, META-INF/build-info.properties`

多协议路径下查找，不支持协议头，同名仅按优先级加载一次，后续不会覆盖。

### wings.boot.block

`String`=`wings-conf-block-list.cnf`

黑名单文件名

### wings.boot.promo

`String`=`wings-prop-promotion.cnf`

变量提示文件名

## 1D.2.wings-wings.feature-79.properties

### wings.feature.error

`Map<String, Boolean>`=`empty`，映射限定key(ant-matcher)及其错误处理。

* `*`=`true` 错误以match处理
* `pro.*`=`false` 以notMatch处理

### wings.feature.prefix

`Map<String, String>`=`empty`，映射限定key(ant-matcher)及其前缀。

* `*`=`wings.enabled` 重定义所有前缀。

### wings.feature.enable

`Map<String, Boolean>`=`empty`，映射限定key(ant-matcher)及其是否匹配。

* `pro.fessional.wings.warlock.database.autogen.tables.daos.*`=`false`

## 1D.3.wings-enabled-79.properties

开关Silencer的功能。

### wings.enabled.silencer.autoconf

`Boolean`=`true`，是否启动自动配置 `wings-conf` 和 `wings-i18n`

### wings.enabled.silencer.verbose

`Boolean`=`false`，是否显示wings的conditional信息

### wings.enabled.silencer.scanner

`Boolean`=`false`，是否自动扫描`**/spring/bean/**/*.class`，在ApplicationPreparedEvent时触发，在`@AutoConfiguration`之前

### wings.enabled.silencer.audit-prop

`Boolean`=`false`，是否审计属性文件和级联关系

### wings.enabled.silencer.mute-console

`Boolean`=`true`, 是否在有file存在是，静默控制台日志

### wings.enabled.silencer.tweak-clock

`Boolean`=`true`, 是否支持全局或线程的时钟调整

### wings.enabled.silencer.tweak-logback

`Boolean`=`true`, 是否支持全局或线程的logback调整

### wings.enabled.silencer.tweak-stack

`Boolean`=`true`, 是否支持全局或线程的CodeException栈调整

### wings.enabled.silencer.bean-reorder

`Boolean`=`true`, 是否可以通过`wings.reorder.*`配置Bean的Order

## 1D.4.spring-logging-79.properties

为spring的logging提供了以下配置项。

* `logging.logback.rollingpolicy.max-file-size`=`500MB`
* `logging.logback.rollingpolicy.max-history`=`30`
* `logging.level.root`=`INFO`
* `logging.pattern.dateformat`=`yyyy-MM-dd HH:mm:ss.SSS`

## 1D.5.spring-message-79.properties

为spring.messages提供以下默认项。

* `spring.messages.always-use-message-format`=`false`
* `spring.messages.basename=`
* `spring.messages.cache-duration=`
* `spring.messages.encoding`=`UTF-8`
* `spring.messages.fallback-to-system-locale`=`true`
* `spring.messages.use-code-as-default-message`=`true`

## 1D.6.wings-i18n-79.properties

为应用设置默认语言和时区，以及多国语资源。

### wings.silencer.i18n.locale

`String=`，格式为`en_US`, `zh_CN`。默认系统语言。

对应系统变量的`user.language`, `user.country`

### wings.silencer.i18n.zoneid=

`String=`，默认系统时区，如`UTC`, `GMT+8,` `Asia/Shanghai`

对应系统变量的`user.timezone`

### wings.silencer.i18n.bundle

`List<String>`=`classpath*:/wings-i18n/**/*.properties`

默认的resource配置，逗号分隔的AntPath格式。

## 1D.7.wings-autolog-79.properties

自动切换appender的日志级别

### wings.silencer.autolog.level

`String`=`WARN`，Slf4j格式

自动设置日志的级别，如 ALL, TRACE, DEBUG, INFO, WARN, ERROR, OFF

### wings.silencer.autolog.target

`Set<String>`=`CONSOLE,STDOUT`

可被mirana自动被调整的appender名字，逗号分隔

### wings.silencer.autolog.exists

`Set<String>`=`FILE`

当存在以上appender出现的时候，进行自动日志调整。

## 1D.8.wings-encrypt-79.properties

自动配置加密功能

### wings.silencer.encrypt.leap-code

`String`=`BY2AH0IC9SX4UTV7GP5LNR6FK1WOE8ZQD3JM`

LeapCode的默认seed，强安全需求时建议修改。^建议^

### wings.silencer.encrypt.crc8-long

`String`=`15,13,11,9,7,5,3,1`

Crc8Long的默认seed，强安全需求时建议修改。^建议^

### wings.silencer.encrypt.aes-key

`Map<String,String>`，默认的Aes256加密名字和密码，默认`${random.uuid}${random.uuid}`。

* `system` - 系统默认，每次系统启动时随机生成，停机后消失
* `ticket` - 用于Api Ticket，建议集群内统一
* `cookie` - 用于 Http Cookie，建议集群内统一
* `config` - 用于 配置文件中敏感数据，建议固定

## 1D.9.wings-tweak-79.properties

应用调节

### wings.silencer.tweak.code-stack

`Boolean`=`false`，CodeException的Global有栈或无栈

### wings.silencer.tweak.clock-offset

`Long`=`0`，初始系统时钟 offset ms

### wings.silencer.tweak.mdc-threshold

`Boolean`=`true`，是否配置WingsMdcThresholdFilter

## 1D.A.wings-runtime-77.properties

运行时的应用模式

### wings.silencer.runtime.run-mode

`RunMode`=`Local`，默认的运行模式

### wings.silencer.runtime.api-mode

`ApiMode`=`Nothing`，默认的Api模式

## 1D.B.wings-inspect-79.properties

应用审查功能

### wings.silencer.inspect.properties

`Boolean`=`false`，是否审视properties的key,value,所在文件及层叠关系

## 1D.C.wings-scanner-79.properties

### wings.silencer.scanner.bean

`List<String>`=`spring/bean`，当 ApplicationPreparedEvent 时，从 `**/spring/bean/**/*.class` 扫描 component
