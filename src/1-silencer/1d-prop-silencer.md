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
when exists multiple `wings-auto-config*.cnf`, sort by ascii, take the last one.

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

## 1D.2.wings-feature-79.properties

### wings.feature.error

`Map<String, Boolean>`=`empty`, the mapping of qualified-key (ant-matcher) and its error handling.

* `*`=`true` error as `match`
* `pro.*`=`false` error as `notMatch`

### wings.feature.prefix

`Map<String, String>`=`empty`, the mapping of qualified-key (ant-matcher) and its prefix.

* `*`=`wings.enabled` redefine prefix for all.

### wings.feature.enable

`Map<String, Boolean>`=`empty`, the mapping of qualified-key (ant-matcher) and its enable.

* `pro.fessional.wings.warlock.database.autogen.tables.daos.*`=`false`

## 1D.3.wings-enabled-79.properties

toggling the Silencer feature.

### wings.enabled.silencer.autoconf

`Boolean`=`true`, Whether to automatically configure `wings-conf` and `wings-i18n`

### wings.enabled.silencer.verbose

`Boolean`=`false`, Whether to display the conditional information of wings

### wings.enabled.silencer.scanner

`Boolean`=`false`, Whether to scan component from `**/spring/bean/**/*.class` on
ApplicationPreparedEvent before `@AutoConfiguration`

### wings.enabled.silencer.audit-prop

`Boolean`=`false`, Whether to audit the file and cascading relationship of properties key/value

### wings.enabled.silencer.mute-console

`Boolean`=`true`, Whether to automatically switch the console log level when a log file is available

### wings.enabled.silencer.tweak-clock

`Boolean`=`true`, Whether to tweak the clock in global or thread

### wings.enabled.silencer.tweak-logback

`Boolean`=`true`, Whether to tweak log level of logback in global or thread

### wings.enabled.silencer.tweak-stack

`Boolean`=`true`, Whether to tweak the CodeException stack in global or thread

### wings.enabled.silencer.bean-reorder

`Boolean`=`true`, Whether to enable bean reorder with `wings.reorder.*`

## 1D.4.spring-logging-79.properties

Default configuration for spring logging

* `logging.logback.rollingpolicy.max-file-size`=`500MB`
* `logging.logback.rollingpolicy.max-history`=`30`
* `logging.level.root`=`INFO`
* `logging.pattern.dateformat`=`yyyy-MM-dd HH:mm:ss.SSS`

## 1D.5.spring-message-79.properties

Default configuration for spring message

* `spring.messages.always-use-message-format`=`false`
* `spring.messages.basename=`
* `spring.messages.cache-duration=`
* `spring.messages.encoding`=`UTF-8`
* `spring.messages.fallback-to-system-locale`=`true`
* `spring.messages.use-code-as-default-message`=`true`

## 1D.6.wings-i18n-79.properties

Set default language and timezone for the app, as well as i18n messages.

### wings.silencer.i18n.locale

`String=`, in the format `en_US`, `zh_CN`. Default system language.

Corresponds to `user.language`, `user.country` of the system variable

### wings.silencer.i18n.zoneid=

`String=`, such as `UTC`, `GMT+8,` `Asia/Shanghai`. Default system timezone.

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

Default seed of LeapCode, should change for security requirements. ^RECOMMENDED^

### wings.silencer.encrypt.crc8-long

`String`=`15,13,11,9,7,5,3,1`

Default seed of Crc8Long, should change for security requirements. ^RECOMMENDED^

### wings.silencer.encrypt.aes-key

`Map<String,String>`, the default Aes256 encryption name and password `${random.uuid}${random.uuid}`.

* `system` - system default, randomly generated at each startup
* `ticket` - used for Api Ticket, recommended to be unified within the cluster
* `cookie` - used for Http Cookies, recommended to be unified within the cluster
* `config` - used for sensitive data in configuration files, recommended to be fixed

## 1D.9.wings-tweak-79.properties

Tweaking of the Application

### wings.silencer.tweak.code-stack

`Boolean`=`false`, Whether the Global of CodeException has a stack.

### wings.silencer.tweak.clock-offset

`Long`=`0`, Initial system clock with offset ms

### wings.silencer.tweak.mdc-threshold

`Boolean`=`true`, Whether to configure WingsMdcThresholdFilter

## 1D.A.wings-runtime-77.properties

Runtime Mode of the Application.

### wings.silencer.runtime.run-mode

`RunMode`=`Local`, RunMode of the application

### wings.silencer.runtime.api-mode

`ApiMode`=`Nothing`, ApiMode of the application

## 1D.B.wings-inspect-79.properties

Inspect and audit the Application

### wings.silencer.inspect.properties

`Boolean`=`false`, Whether to audit the file and cascading relationship of properties key/value

## 1D.C.wings-scanner-79.properties

### wings.silencer.scanner.bean

`List<String>`=`spring/bean`, scan component from `**/spring/bean/**/*.class` on ApplicationPreparedEvent
