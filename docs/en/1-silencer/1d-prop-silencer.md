---
isOriginal: true
icon: enum
category:
  - Silencer
  - Property
---

# 1D.Silencer Properties

有关自动加载，默认工具和行为的属性。

## 1D.1.wings-auto-config.cnf

Silencer的入口配置，定义了Silencer的自动加载的路径和模式。

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

Silencer功能的默认开关，如下

### spring.wings.silencer.enabled.autoconf

`Boolean`=`true`，是否启动自动配置

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
* `logging.pattern.dateformat`=`yyyy-MM-dd HH:mm:ss.SSS`

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

## 1D.7.wings-autolog-79.properties

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

### wings.silencer.tweak.code-stack

`Boolean`=`false`，初始CodeException的Global有栈或无栈

### wings.silencer.tweak.clock-offset

`Long`=`0`，初始系统时钟 offset ms

### wings.silencer.tweak.mdc-threshold

`Boolean`=`true`，是否配置WingsMdcThresholdFilter

## 1D.A.wings-runtime-77.properties

### wings.silencer.runtime.run-mode

`RunMode`=`Local`，默认的运行模式

### wings.silencer.runtime.api-mode

`ApiMode`=`Nothing`，默认的Api模式

## 1D.B.wings-inspect-79.properties

### wings.silencer.inspect.properties

`Boolean`=`false`，是否审视properties的key,value,所在文件及层叠关系
