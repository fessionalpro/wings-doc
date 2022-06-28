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

Silence的入口配置，定义了Silence的自动加载的路径和模式。

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

## 1D.2.logback-fileonly.xml

`logback`仅file-appender的默认配置。

## 1D.3.spring-wings-enabled-79.properties

Silence功能的默认开关，如下

### spring.wings.silencer.enabled.verbose

`Boolean`=`false`，是否显示wings的conditional信息

### spring.wings.silencer.enabled.message

`Boolean`=`true`，是否自动加载`/wings-i18n/`

### spring.wings.silencer.enabled.scanner

`Boolean`=`true`，是否自动载所有classpath下的`**/spring/bean/**`

### spring.wings.silencer.enabled.auto-log

`Boolean`=`true`，是否在有log-file时，console自动ERROR

### spring.wings.silencer.enabled.mirana

`Boolean`=`true`，是否在自动配置mirana

## 1D.4.spring-logging-79.properties

为spring的logging提供了以下配置项。

* `logging.logback.rollingpolicy.max-file-size`=`500MB`
* `logging.logback.rollingpolicy.max-history`=`30`
* `logging.level.root`=`INFO`

## 1D.5.spring-message-79.properties

为spring.messages提供以下默认项。

* `spring.messages.always-use-message-format`=`false`
* `spring.messages.basename`=`∅`
* `spring.messages.cache-duration`=`∅`
* `spring.messages.encoding`=`UTF-8`
* `spring.messages.fallback-to-system-locale`=`true`
* `spring.messages.use-code-as-default-message`=`true`

## 1D.6.wings-i18n-79.properties

对默认语言和默认时区，已经语言资源的设置。

### wings.silencer.i18n.locale

`String`=`∅`，格式为`en_US`, `zh_CN`。默认系统语言。

对应系统变量的`user.language`, `user.country`

### wings.silencer.i18n.zoneid=

`String`=`∅`，默认系统时区，如`UTC`, `GMT+8,` `Asia/Shanghai`

对应系统变量的`user.timezone`

### wings.silencer.i18n.bundle

`List<String>`=`classpath*:/wings-i18n/**/*.properties`

默认的resource配置，逗号分隔的AntPath格式。

## 1D.7.wings-mirana-79.properties

mirana功能的默认配置，建议修改

### wings.silencer.mirana.code.leap-code

`String`=`BY2AH0IC9SX4UTV7GP5LNR6FK1WOE8ZQD3JM`

LeapCode的默认seed，强安全需求时建议修改。^建议^

### wings.silencer.mirana.code.crc8-long

`String`=`15,13,11,9,7,5,3,1`

Crc8Long的默认seed，强安全需求时建议修改。^建议^

### wings.silencer.mirana.auto-log.level

`String`=`WARN`，Slf4j格式

自动设置日志的级别，如`WARN`，`INFO`，`DEBUG`

### wings.silencer.mirana.auto-log.target

`Set<String>`=`CONSOLE,STDOUT`

可被mirana自动被调整的appender名字，逗号分隔

### wings.silencer.mirana.auto-log.exists

`Set<String>`=`FILE`

当存在以上appender出现的时候，进行自动日志调整。
