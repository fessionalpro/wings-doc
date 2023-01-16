---
isOriginal: true
icon: enum
category:
  - 邮件
  - 属性
---

# 8D.TinyMail的属性

## 8D.1.spring-mail-79.properties

spring-boot-starter-mail的配置，分为账号类和属性类

### spring.mail.host

`String`，邮件主机，如smtp.qq.com

### spring.mail.username

`String`，登录名，一般与发件人一致，否则会有发送错误

### spring.mail.password

`String`，登录密码

### spring.mail.protocol

`String`=`smtp`，邮件协议，默认smtp

### spring.mail.port

`int`=`465`，端口号

### spring.mail.properties.mail.smtp.auth

`String`=`true|false`，是否进行smtp验证，基本都需要。

### spring.mail.properties.mail.smtp.starttls.enable

`String`=`true|false`，是否使用tls，一般都需要。

### spring.mail.properties.mail.smtp.ssl.enable

`String`=`true|false`，是否使用ssl，试邮件服务商是否支持。

### spring.mail.properties.mail.smtp.connectiontimeout

`String`=`90000`，链接超时毫秒数，默认90秒

### spring.mail.properties.mail.smtp.timeout

`String`=`90000`，读超时毫秒数，默认90秒

### spring.mail.properties.mail.smtp.writetimeout

`String`=`90000`，写超时毫秒数，默认90秒

## 8D.2.spring-wings-enabled-79.properties

### wings.tiny.mail.enabled.dryrun

`Boolean`=`false`，是否干跑，仅记录日志不真正执行任务

### wings.tiny.mail.enabled.controller-list

`Boolean`=`true`，是否开启 MailListController

### wings.tiny.mail.enabled.controller-send

`Boolean`=`true`，是否开启 MailSendController

## 8D.3.wings-flywave-fit-79.properties

### wings.faceless.flywave.fit.tiny-mail

数据库依赖，引入此lib后，自动执行次脚本

* `path`=`classpath*:/wings-flywave/master/07-mail/*.sql`
* `revi`=`2020_1027_01L`
* `lost`=`EXEC`

## 8D.4.wings-tinymail-config-79.properties

配置默认账号，及多个发送账号，`TinyMailConfig`类型，继承`spring.mail`，
默认配置名为`default`，自动复用`spring.mail`的值，为其他账号，提供默认配置。

默认配置项，仅当其他配置项是无效值时才使用，并且对于`properties.*`值，仅key存在时使用。

### wings.tiny.mail.config.default.from

`String`，默认发件人

### wings.tiny.mail.config.default.to

`String[]`，默认收件人，字符串数组，逗号分隔

### wings.tiny.mail.config.default.cc

`String[]`，默认抄送，字符串数组，逗号分隔

### wings.tiny.mail.config.default.bcc

`String[]`，默认暗送，字符串数组，逗号分隔

### wings.tiny.mail.config.default.reply

`String`，默认回复，字符串

### wings.tiny.mail.config.default.html

`Boolean`=`true`，默认是否发送html邮件(text/html)，否则纯文本(text/plain)

### gmail参考配置

推荐使用app专用密码，不要使用登录密码。
`properties.*`仅为空时，使用默认值，不存在的key不使用默认值。
如`properties.mail.debug`被注释掉，不会使用default的值。

> wings.tiny.mail.config.gmail.host=smtp.gmail.com
> wings.tiny.mail.config.gmail.username=${GMAIL_USER:}
> wings.tiny.mail.config.gmail.password=${GMAIL_PASS:}
> wings.tiny.mail.config.gmail.protocol=
> wings.tiny.mail.config.gmail.port=587
> wings.tiny.mail.config.gmail.properties.mail.smtp.auth=
> wings.tiny.mail.config.gmail.properties.mail.smtp.starttls.enable=
> #wings.tiny.mail.config.gmail.properties.mail.debug=

## 8D.5.wings-tinymail-sender-79.properties

### wings.tiny.mail.sender.biz-id

`String`=`X-Biz-Id`，biz-id的Header，业务侧定位邮件，默认为mail的主键

### wings.tiny.mail.sender.biz-mark

`String`=`X-Biz-Mark`，biz-mark的Header，业务侧定位数据，比如订单号等

### wings.tiny.mail.sender.err-send

`Duration`=`5m`，发送失败 MailSendException 时，默认等待多少时间，默认5分钟

### wings.tiny.mail.sender.err-auth

`Duration`=`1h`，认证失败 MailAuthenticationException 时，默认等待多少时间，默认1小时

### wings.tiny.mail.sender.err-host

`Map<BigDecimal, String>`，包括以下异常信息时，对此host进行多少秒的等待。
秒为key，以小数部分仅用来区分key，负数为建议停止重发。

* `3600.001`=`frequency limited`

### wings.tiny.mail.sender.err-mail

`Map<BigDecimal, String>`，包括以下异常信息时，对此邮件的重发进行多少秒的等待。
秒为key，以小数部分仅用来区分key，负数为建议停止重发。

* `-501001.001`=`from address must be same as authorization user`

`501`为错误号，`001`为host编号，`.001`为区别位

### wings.tiny.mail.sender.per-idle

`Map<String, Duration>`，同一邮件host每次登录的间隔，避免限频，0为无视。

`smtp.qq.com`=`500ms`，如qq邮箱，间隔500毫秒

### wings.tiny.mail.sender.max-idle

`Map<String, Duration>`，同一邮件host最多等待时间，小于时等待，否则抛出MailWaitException，0为无视

* `smtp.qq.com`=`5s`，如qq邮箱，等待超过5秒时，抛出MailWaitException

### wings.tiny.mail.sender.force-to

`String[]`，强制替换真实的to，字符串数组，逗号分隔

### wings.tiny.mail.sender.force-cc

`String[]`，强制替换真实的cc，字符串数组，逗号分隔

wings.tiny.mail.sender.force-bcc

`String[]`，强制替换真实的bcc，字符串数组，逗号分隔

wings.tiny.mail.sender.force-prefix

`String`，强制增加真实的subject前缀

## 8D.6.wings-tinymail-service-79.properties

### wings.tiny.mail.service.max-fail

`Integer`=`3`，同一邮件最大失败次数

wings.tiny.mail.service.max-done

`Integer`=`1`，同一邮件最大成功次数

### wings.tiny.mail.service.max-next

`Duration`=`1d`，超过多少时间的邮件不需要发送，默认1天

### wings.tiny.mail.service.try-next

`Duration`=`1m`，失败后多久进行重试，默认1分钟

### wings.tiny.mail.service.batch-size

`Integer`=`10`，批量发送时，一次发的最大件数

### wings.tiny.mail.service.warn-size

`Integer`=`50`，超过此容量时，以Warn记录日志

### wings.tiny.mail.service.boot-scan

`Duration`=`60s`，启动后多少秒，扫描未发送的邮件，`0`为不扫描

### wings.tiny.mail.service.only-app

`Boolean`=`false`，是否仅发送本app的邮件

### wings.tiny.mail.service.only-run

`Boolean`=`true`，是否仅发送本RumMode的邮件

## 8D.7.wings-tinymail-urlmap-79.properties

### wings.tiny.mail.urlmap.list-all

`String`=`/admin/mail/list-all.json`，获取全部邮件的简要信息，默认倒序

### wings.tiny.mail.urlmap.list-failed

`String`=`/admin/mail/list-failed.json`，获取失败邮件的简要信息，默认倒序

### wings.tiny.mail.urlmap.list-undone

`String`=`/admin/mail/list-undone.json`，获取未成功邮件的简要信息，默认倒序

### wings.tiny.mail.urlmap.by-bizmark

`String`=`/admin/mail/by-bizmark.json`，根据Biz-Mark获取邮件的简要信息，默认倒序

### wings.tiny.mail.urlmap.by-recipient

`String`=`/admin/mail/by-recipient.json`，根据正则比较收件人to/cc/bcc获取邮件的简要信息，默认倒序

### wings.tiny.mail.urlmap.by-sender

`String`=`/admin/mail/by-sender.json`，根据收件人from获取邮件的简要信息，默认倒序

### wings.tiny.mail.urlmap.by-subject

`String`=`/admin/mail/by-subject.json`，根据正则比较邮件标题获取邮件的简要信息，默认倒序

### wings.tiny.mail.urlmap.load-detail

`String`=`/admin/mail/load-detail.json`，获取邮件详情

### wings.tiny.mail.urlmap.send-mail

`String`=`/admin/mail/send-mail.json`，新建或编辑邮件，并同步立即或异步定时发送

### wings.tiny.mail.urlmap.send-save

`String`=`/admin/mail/send-save.json`，仅新建或编辑邮件，但并不发送

### wings.tiny.mail.urlmap.send-retry

`String`=`/admin/mail/send-retry.json`，同步重试失败的邮件，发送成功或失败，或异常

### wings.tiny.mail.urlmap.send-scan

`String`=`/admin/mail/send-scan.json`，同步扫需要描补发的邮件，并异步发送，返回补发的件数
