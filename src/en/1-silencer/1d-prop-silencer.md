---
isOriginal: true
icon: enum
category:
  - Silencer
  - Property
---

# 1D.Silencer Properties

Properties about autoloading, default tools and behavior.

## 1D.1.wings-auto-config.cnf

Silencer's entry configuration, which defines the path and mode of Silencer's autoload.

### wings.boot.more

`List<String>`=`application*.*, wings-conf/**/*.*`

Scan path under multi-protocol, so no protocol header,
same name can be loaded multiple times, override by priority.

### wings.boot.once

`List<String>`=`git.properties, META-INF/build-info.properties`

Scan path under multi-protocol, so no protocol header,
same name loaded only once by priority, no subsequent override.

### wings.boot.block

`String`=`wings-conf-block-list.cnf`

Filename of the block-list config

### wings.boot.promo

`String`=`wings-prop-promotion.cnf`

Filename of the promotion config

## 1D.2.logback-fileonly.xml

`logback` default configuration for file-appender only.

## 1D.3.spring-wings-enabled-79.properties

The default switch for toggling the Silencer feature, as follows

### spring.wings.silencer.enabled.autoconf

`Boolean`=`true`, Whether to automatically configure

### spring.wings.silencer.enabled.verbose

`Boolean`=`false`, Whether to display the conditional information of wings

### spring.wings.silencer.enabled.message

`Boolean`=`true`, Whether to automatically load /wings-i18n/ messages

### spring.wings.silencer.enabled.scanner

`Boolean`=`true`, Whether to automatically load all classpaths `**/spring/bean/**`

### spring.wings.silencer.enabled.auto-log

`Boolean`=`true`, Whether to automatically switch the console log level when a log file is available

### spring.wings.silencer.enabled.encrypt

`Boolean`=`true`, Whether to automatically config mirana

## 1D.4.spring-logging-79.properties

Default configuration for spring logging

* `logging.logback.rollingpolicy.max-file-size`=`500MB`
* `logging.logback.rollingpolicy.max-history`=`30`
* `logging.level.root`=`INFO`
* `logging.pattern.dateformat`=`yyyy-MM-dd HH:mm:ss.SSS`

## 1D.5.spring-message-79.properties

Default configuration for spring message

* `spring.messages.always-use-message-format`=`false`
* `spring.messages.basename`=`∅`
* `spring.messages.cache-duration`=`∅`
* `spring.messages.encoding`=`UTF-8`
* `spring.messages.fallback-to-system-locale`=`true`
* `spring.messages.use-code-as-default-message`=`true`

## 1D.6.wings-i18n-79.properties

Set default language and timezone for the app, as well as i18n messages.

### wings.silencer.i18n.locale

`String`=`∅`, in the format `en_US`, `zh_CN`. Default system language.

Corresponds to `user.language`, `user.country` of the system variable

### wings.silencer.i18n.zoneid=

`String`=`∅`, such as `UTC`, `GMT+8,` `Asia/Shanghai`. Default system timezone.

corresponding to `user.timezone` of the system variable

### wings.silencer.i18n.bundle

`List<String>`=`classpath*:/wings-i18n/**/*.properties`

The default resource configuration, in comma-separated AntPath format.

## 1D.7.wings-autolog-79.properties

Automatically switch log levels for appender

### wings.silencer.autolog.level

`String`=`WARN`, Slf4j format

Automatically set the log level, such as ALL, TRACE, DEBUG, INFO, WARN, ERROR, OFF

### wings.silencer.autolog.target

`Set<String>`=`CONSOLE,STDOUT`

The names of the appender to adjust, commas separated

### wings.silencer.autolog.exists

`Set<String>`=`FILE`

If the following appenders exist, the above log level is automatically adjusted.

## 1D.8.wings-encrypt-79.properties

Automatic configuration of encryption features.

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
