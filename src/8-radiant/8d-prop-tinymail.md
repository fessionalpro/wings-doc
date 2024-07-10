---
isOriginal: true
icon: folder-tree
category:
  - Tiny
  - Mail
  - Property
---

# 8D.TinyMail Properties

## 8D.1.spring-mail-79.properties

spring-boot-starter-mail config, divided into account type and property type.

### spring.mail.host

`String`, mail host, eg. smtp.qq.com

### spring.mail.username

`String`, mail username, usually the same as the sender, otherwise may get a sending error.

### spring.mail.password

`String`, mail password.

### spring.mail.protocol

`String`=`smtp`, mail protocol, default smtp.

### spring.mail.port

`int`=`465`, mail port.

### spring.mail.properties.mail.smtp.auth

`String`=`true|false`, whether to perform smtp authentication, most of it is true.

### spring.mail.properties.mail.smtp.starttls.enable

`String`=`true|false`, whether to use tls, most of it is true.

### spring.mail.properties.mail.smtp.ssl.enable

`String`=`true|false`, whether to use ssl, deps on email provider supports.

### spring.mail.properties.mail.smtp.connectiontimeout

`String`=`90000`, connection timeout in mills, default 90s.

### spring.mail.properties.mail.smtp.timeout

`String`=`90000`, read timeout in mills, default 90s.

### spring.mail.properties.mail.smtp.writetimeout

`String`=`90000`, write timeout in mills, default 90s.

## 8D.2.wings-enabled-79.properties

### wings.enabled.tiny.mail.mvc-list

`Boolean`=`true`, whether to enable MailListController

### wings.enabled.tiny.mail.mvc-send

`Boolean`=`true`, whether to enable MailSendController

## 8D.3.wings-flywave-fit-79.properties

### wings.faceless.flywave.fit.tiny-mail

Database dependency, after import this lib, the script will be auto executed.

* `path`=`classpath*:/wings-flywave/master/07-mail/*.sql`
* `revi`=`2020_1027_01L`
* `lost`=`EXEC`

## 8D.4.wings-tinymail-config-79.properties

Config default account and multiple sending accounts, `TinyMailConfig` extends `spring.mail`.
The default config name is `default`, which automatically reuses the value of
`spring.mail` to provide a default config for other accounts.

The default config item is only used if others are invalid, and for `properties.*` values, only if the key exists.

### wings.tiny.mail.config.default.dryrun

`String`=`[DRYRUN]`, dryrun prefix of subject. merge if null, `empty` means disable.

### wings.tiny.mail.config.default.from

`String`=`${MAIL_FROM:}`, default from, usually the sender.

### wings.tiny.mail.config.default.to

`String[]`=`${MAIL_TO:}`, default to, string arrays, comma separated.

### wings.tiny.mail.config.default.cc

`String[]`, default cc, string arrays, comma separated.

### wings.tiny.mail.config.default.bcc

`String[]`, default bcc, string arrays, comma separated.

### wings.tiny.mail.config.default.reply

`String`, default reply.

### wings.tiny.mail.config.default.html

`Boolean`=`true`, whether to send html email (text/html), otherwise plain text (text/plain).

### Gmail Config Reference

Recommend to use app-specific password, not login password.
Use Default values only If `properties.*` is empty, and the default value is not used if the key
does not exist. If `properties.mail.debug` is commented out, the default value is not used.

```properties
wings.tiny.mail.config.gmail.host=smtp.gmail.com
wings.tiny.mail.config.gmail.username=${GMAIL_USER:}
wings.tiny.mail.config.gmail.password=${GMAIL_PASS:}
wings.tiny.mail.config.gmail.protocol=
wings.tiny.mail.config.gmail.port=587
wings.tiny.mail.config.gmail.properties.mail.smtp.auth=
wings.tiny.mail.config.gmail.properties.mail.smtp.starttls.enable=
#wings.tiny.mail.config.gmail.properties.mail.debug=
```

## 8D.5.wings-tinymail-sender-79.properties

### wings.tiny.mail.sender.dryrun

`Boolean`=`false`, whether to dry run, log only without actually send.

### wings.tiny.mail.sender.biz-id

`String`=`X-Biz-Id`, biz-id Header to locate mail by business, default mail id.

### wings.tiny.mail.sender.biz-mark

`String`=`X-Biz-Mark`, biz-mark Header to locate data by business, eg. orderNumber.

### wings.tiny.mail.sender.err-send

`Duration`=`5m`, how much time to wait if MailSendException, default 5 minutes.

### wings.tiny.mail.sender.err-auth

`Duration`=`1h`, how much time to wait if MailAuthenticationException, default 1 hour.

### wings.tiny.mail.sender.err-host

`Map<BigDecimal, String>`, how many seconds to wait for the host if it contains the
following exception message. seconds is the key, the fraction is only used to make
key unique, negative number means stop resending.

* `3600.001`=`frequency limited`

### wings.tiny.mail.sender.err-mail

`Map<BigDecimal, String>`, how many seconds to wait to resend this email if it contains the
following exception message. seconds is the key, the fraction is only used to make key unique,
negative number means stop resending.

* `-501001.001`=`from address must be same as authorization user`

`501` is error number, `001` is host number, `.001` is the unique bit.

### wings.tiny.mail.sender.per-idle

`Map<String, Duration>`, interval of each login of the same mailhost, avoid limit frequency, 0 is ignored.

`smtp.qq.com`=`500ms`, eg. qq mail, wait 500ms.

### wings.tiny.mail.sender.max-idle

`Map<String, Duration>`, max wait time for the same mailhost, if less then wait,
otherwise throw MailWaitException, 0 is ignored.

* `smtp.qq.com`=`5s`,  eg. qq mail, MailWaitException is thrown when waiting for more than 5 seconds.

### wings.tiny.mail.sender.force-to

`String[]`, force to replace the real "to", string arrays, comma separated.

### wings.tiny.mail.sender.force-cc

`String[]`, force to replace the real "cc", string arrays, comma separated.

### wings.tiny.mail.sender.force-bcc

`String[]`, force to replace the real "bcc", string arrays, comma separated.

### wings.tiny.mail.sender.force-prefix

`String`, force to add prefix to the real subject.

## 8D.6.wings-tinymail-service-79.properties

### wings.tiny.mail.service.max-fail

`Integer`=`3`, max failures for the same email.

wings.tiny.mail.service.max-done

`Integer`=`1`, max success for the same email.

### wings.tiny.mail.service.max-next

`Duration`=`1d`, the email does not need to be sent anymore as it has been a certain amount of time. default 1 day.

### wings.tiny.mail.service.try-next

`Duration`=`1m`, how soon to retry after failure, default 1 minute.

### wings.tiny.mail.service.batch-size

`Integer`=`10`, max number of bulk emails sent at one time.

### wings.tiny.mail.service.warn-size

`Integer`=`50`, if this capacity is exceeded, log it as Warn.

### wings.tiny.mail.service.boot-scan

`Duration`=`60s`, idle time after afterPropertiesSet to scan for unsent/misfired mail, `<=0` for disable.

### wings.tiny.mail.service.scan-idle

`Duration`=`5m`, idle time to scan for unsent/misfired mail. `<=0` for disable.

### wings.tiny.mail.service.only-app

`Boolean`=`false`, whether to send emails from this app only.

### wings.tiny.mail.service.only-run

`Boolean`=`true`, whether to send emails from this RumMode only.

### wings.tiny.mail.service.scheduler

Mail Threadpool Config, see `TaskSchedulingProperties`

* `wings.tiny.mail.service.scheduler.pool.size`=`2`
* `wings.tiny.mail.service.scheduler.shutdown.await-termination`=`true`
* `wings.tiny.mail.service.scheduler.shutdown.await-termination-period`=`60s`
* `wings.tiny.mail.service.scheduler.thread-name-prefix`=`mail-`

## 8D.7.wings-tinymail-urlmap-79.properties

### wings.tiny.mail.urlmap.list-all

`String`=`/admin/mail/list-all.json`, list summary of all messages, in reverse order by default.

### wings.tiny.mail.urlmap.list-failed

`String`=`/admin/mail/list-failed.json`, list summary of failed emails, in reverse order by default.

### wings.tiny.mail.urlmap.list-undone

`String`=`/admin/mail/list-undone.json`, list summary of unsuccessful emails, in reverse order by default.

### wings.tiny.mail.urlmap.by-bizmark

`String`=`/admin/mail/by-bizmark.json`, find summary of the email by Biz-Mark, in reverse order by default.

### wings.tiny.mail.urlmap.by-recipient

`String`=`/admin/mail/by-recipient.json`, find summary of the email by RegExp of to/cc/bcc, reverse order by default.

### wings.tiny.mail.urlmap.by-sender

`String`=`/admin/mail/by-sender.json`, find summary of the email by from, in reverse order by default.

### wings.tiny.mail.urlmap.by-subject

`String`=`/admin/mail/by-subject.json`, find summary of the email by RegExp of subject, reverse order by default.

### wings.tiny.mail.urlmap.load-detail

`String`=`/admin/mail/load-detail.json`, get mail detail.

### wings.tiny.mail.urlmap.send-mail

`String`=`/admin/mail/send-mail.json`, create or save an email, and send it immediately or asynchronously,
`-1` is failure, `0` is sync, otherwise it is async.

### wings.tiny.mail.urlmap.send-save

`String`=`/admin/mail/send-save.json`, only save messages, but do not send them.

### wings.tiny.mail.urlmap.send-retry

`String`=`/admin/mail/send-retry.json`, sync retry failed emails, send success or failure, or exceptions

### wings.tiny.mail.urlmap.send-scan

`String`=`/admin/mail/send-scan.json`, sync scan the emails that need to resend,
and send them async, return the number of resend emails.
