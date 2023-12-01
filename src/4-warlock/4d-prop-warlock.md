---
isOriginal: true
icon: enum
category:
  - Warlock
  - Property
---

# 4D.Warlock Properties

Properties of loing and authn/authz in Warlock.

## 4D.1.wings-enabled-77.properties

override the simple implementation

* wings.enabled.faceless.simple-journal=false
* wings.enabled.faceless.simple-flakeid=false

### wings.enabled.warlock.watching

`Boolean`=`false`, whether to enable timing watching and analysis.

### wings.enabled.warlock.sec-web-auto

`Boolean`=`true`, whether to enable Web auto config, eg. firewall, debug, etc.

### wings.enabled.warlock.sec-http-bind

`Boolean`=`true`, whether to support "warlock security http wing bind".

### wings.enabled.warlock.sec-http-auth

`Boolean`=`true`, whether to support "warlock security http wing auth".

### wings.enabled.warlock.sec-http-base

`Boolean`=`true`, whether to support "warlock security http base auth".

### wings.enabled.warlock.sec-http-auto

`Boolean`=`true`, whether to support "warlock security http auto".

### wings.enabled.warlock.sec-http-chain

`Boolean`=`true`, whether to support SecurityFilterChain.

### wings.enabled.warlock.dummy-service

`Boolean`=`false`, whether to enable security dummy service.

### wings.enabled.warlock.mvc-auth

`Boolean`=`true`, whether to enable the default auth Controller.

### wings.enabled.warlock.mvc-login

`Boolean`=`true`, whether to enable the default login page Controller.

### wings.enabled.warlock.mvc-proc

`Boolean`=`true`, whether to enable document-only login/out proc that processed by filter.

### wings.enabled.warlock.mvc-user

`Boolean`=`true`, whether to enable the default user Controller.

### wings.enabled.warlock.mvc-mock

`Boolean`=`true`, whether to enable the default mock Controller.

### wings.enabled.warlock.mvc-test

`Boolean`=`true`, whether to enable the default test Controller.

### wings.enabled.warlock.mvc-tweak

`Boolean`=`false`, whether to enable the default TweakController.

### wings.enabled.warlock.mvc-oauth

`Boolean`=`true`, whether to enable the default OauthController.

## 4D.2.wings-flywave-fit-79.properties

### wings.faceless.flywave.fit.warlock-enum-i18n

Check and automatically install the database dependencies for warlock-enum-i18n.

* `path`=`classpath*:/wings-flywave/branch/feature/01-enum-i18n/*.sql`
* `revi`=`2019_0521_01L`
* `lost`=`WARN`

### wings.faceless.flywave.fit.warlock-user-auth

Check and automatically install the database dependencies for warlock-user-auth.

* `path`=`classpath*:/wings-flywave/master/04-auth/*.sql`
* `revi`=`2020_1024_01L, 2020_1024_02L`
* `lost`=`WARN`

### wings.faceless.flywave.fit.warlock-conf-mode

Check and automatically install the database dependencies for warlock-conf-mode.

* `path`=`classpath*:/wings-flywave/master/05-conf/*.sql`
* `revi`=`2020_1025_01L`
* `lost`=`WARN`

## 4D.3.wings-warlock-justauth-77.properties

Oauth login support, use just-auth.

### wings.warlock.just-auth.cache-size

`Integer`=`5000`, cache capacity

### wings.warlock.just-auth.cache-live

`Integer`=`300`, ttl seconds, expireAfterWrite

### wings.warlock.just-auth.safe-state

`Map<String, String>`, default `/login`=`{1}/#{0}{2}`

Set secure state, get content by key, perform redirects (starting with `http` or `/`) or write-back.
The content supports a placeholder template in `MessageFormat` format, with `{0}` as the key.
If it starts with `http`, then it detects if it is safe-host.

### wings.warlock.just-auth.safe-host

`Set<String>`=`localhost:8080,localhost:8081`

Set secure host, reduce cross-domain when dev, can raise `redirect_uri_mismatch` error.

### wings.warlock.just-auth.auth-type

`Map<String, AuthConfig>`, key use `wings.warlock.security.auth-type.*`,
support `{host}`,`{scheme}`,`{authType}`,`{authZone}` variables, according to request.

* `github.client-id`=`Iv1.561a1b1940c77d3a`
* `github.client-secret`=`${GITHUB_OAUTH_SECRET}`
* `github.redirect-uri`=`{scheme}://{host}/auth/github/login.json`

### wings.warlock.just-auth.http-conf

`Map<String, Http>`, if you don't need a proxy, just set proxy-type=DIRECT or host=null.

* `github.timeout`=`10`, in seconds, NOT just-auth's millis.
* `github.proxy-type`=`SOCKS`
* `github.proxy-host`=`127.0.0.1`
* `github.proxy-port`=`1081`

## 4D.4.wings-warlock-check-77.properties

whether to check timezone.

### wings.warlock.check.tz-offset

`Integer`=`5`, seconds, database and JVM time offset, absolute maximum.

### wings.warlock.check.tz-fail

`Boolean`=`true`, whether to terminate or to log only when the time offset is exceeded.

## 4D.5.wings-warlock-cud-77.properties

Jooq's CUD listening on conf and auth tables. `empty` means no fields are recorded, `-` means this table is ignored.

* `wings.faceless.jooq.cud.table[win_perm_entry]=`
* `wings.faceless.jooq.cud.table[win_role_entry]=`
* `wings.faceless.jooq.cud.table[win_conf_runtime]`=`key,current,handler`

## 4D.6.wings-warlock-error-77.properties

Global Exception handling. `default` handles all exceptions and provides defaults for other similar types.

### wings.warlock.error.default-exception

* `http-status`=`200`
* `content-type`=`application/json;charset=UTF-8`
* `response-body`=`{"success":false,"message":"unknown error"}`

## 4D.7.wings-warlock-i18n-77.properties

### wings.warlock.i18n.zoneid-enum

`Set<String>`=`pro.fessional.wings.faceless.enums.autogen.StandardTimezone`

init ZoneId by StandardTimezoneEnum.

### wings.warlock.i18n.locale-enum

`Set<String>`=`pro.fessional.wings.faceless.enums.autogen.StandardLanguage`

init Locale by StandardLanguageEnum.

## 4D.8.wings-warlock-security-77.properties

Spring Security setting.

### wings.warlock.security.web-debug

`Boolean`=`false`, whether to enable WebSecurity.debug

### wings.warlock.security.authority-role

`Boolean`=`true`, whether to use Role in AuthX.

### wings.warlock.security.authority-perm

`Boolean`=`true`, whether to use Perm in AuthX.

### wings.warlock.security.login-forward

`Boolean`=`true`, true to forward in servlet, otherwise redirect(302)

### wings.warlock.security.login-page

`String`=`/auth/login-page.json`, the redirect page when not login, need to have controller to handle.

### wings.warlock.security.login-proc-url

`String`=`/auth/{authType}/login.json`

loginProcessingUrl, the Ant style URL for processing login, handled by filter, no controller required.
Support `authType` and `authZone` variables, which can be obtained via param or path (PathPattern)

### wings.warlock.security.login-proc-method

`Set<String>`=`POST,GET`, Spring is POST only to better follow RESTful, but Oauth has Get.

### wings.warlock.security.logout-url

`String`=`/auth/logout.json`, logout url, handled by filter, no controller required.

### wings.warlock.security.login-success-redirect

`Boolean`=`false`, whether to redirect after successful login.

### wings.warlock.security.login-success-redirect-param

`String`=`redirectTo`, redirect parameters if redirect after successful login.

### wings.warlock.security.login-success-redirect-default

`String`=`/`, default address if redirect after successful login.

### wings.warlock.security.login-success-body

`String`=`{"success":true,"message":"login success"}`, the response body if no redirect after successful login.

### wings.warlock.security.login-failure-body

`String`=`{"success":false,"message":"{message}"}`, the response body if login fail.

### wings.warlock.security.logout-success-body

`String`=`{"success":true,"message":"logout success"}`,
the response body after successful logout, no handler is injected when empty.

### wings.warlock.security.session-maximum

`Integer`=`-1`, maximum sessions for concurrent logins. `-1` means no limit.

### wings.warlock.security.session-expired-body

`String`=`{"success":false,"message":"session has been expired, possibly due to multiple logins"}`,
the response body when session expired.

### wings.warlock.security.username-para

`String`=`username`, Username Parameter.

### wings.warlock.security.password-para

`String`=`password`, Password Parameter.

### wings.warlock.security.role-prefix

`String`=`ROLE_`, GrantedAuthorityDefaults, suggest keeping the same with spring, do not edit.

### wings.warlock.security.web-ignore

The order of config is from loose to strict.
`webIgnore` > `PermitAll` > `Authenticated` > `Authority` > `AnyRequest` at the end.
if value is `-` or `empty`, means ignore this key.

①ignored items, `Map<String, String>`, antMatcher, no need of SecurityFilter, such as static resources.

* `assets`=`/assets/**`
* `webjars`=`/webjars/**`
* `swagger-ui`=`/swagger-ui/**`
* `swagger-api`=`/v3/api-docs/**`

### wings.warlock.security.permit-all

②allow all, `Map<String, String>`, antMatcher.

* `error`=`/error`
* `auth`=`/auth/**`
* `test`=`/test/**`

### wings.warlock.security.authenticated

③authed only, `Map<String, String>`, antMatcher.

* `user`=`/user/**`

### wings.warlock.security.authority

④has authority, `Map<String, String>`, antMatcher.
merge authority by URL grouping, and finally set the URL in reverse ASCII order,
i.e., the English number comes before the `*`, and the loose rule comes after.

* `ROLE_ACTUATOR`=`/actuator/**`

### wings.warlock.security.any-request

⑤defaults, `String`, support the followings.

* `permitAll`|`authenticated`|`anonymous`|`fullyAuthenticated`
* any non-empty, non-above string, considered as `Authority`, use `comma` or `blank` to separate multiple ones.

### wings.warlock.security.auth-type-default

`String`=`pro.fessional.wings.warlock.service.auth.WarlockAuthType#USERNAME`

Supported validation types, enum full path, one-to-one, otherwise reverse parsing problem;
no `-`, `default` is a special value used when there is no match.

### wings.warlock.security.auth-type

`Map<String, String>`, login auth-type and enum mapping, must be one-to-one.

* `username`=`pro.fessional.wings.warlock.service.auth.WarlockAuthType#USERNAME`
* `mobile`=`pro.fessional.wings.warlock.service.auth.WarlockAuthType#MOBILE`
* `email`=`pro.fessional.wings.warlock.service.auth.WarlockAuthType#EMAIL`
* `github`=`me.zhyd.oauth.config.AuthDefaultSource#GITHUB`
* `weibo`=`me.zhyd.oauth.config.AuthDefaultSource#WEIBO`

### wings.warlock.security.zone-perm

`Map<String, Set<String>>`=`admin=ROLE_ADMIN`

Map permissions to authZone, if you have one of them, you can login,
otherwise, it will fail with wrong username and password.

### wings.warlock.security.app-perm

`Map<String, Set<String>>`=`wings-warlock=ROLE_ADMIN`

Map permissions to spring.application.name, if you have one of them, you can login,
otherwise, it will fail with wrong username and password. Support AntPath, eg. `wings-*`,
merge all matching permissions, wings default app is `wings-default`.

### wings.warlock.security.nonce-auth-type

`Set<String>`=`username,mobile,email`, which auth-type support Nonce auth.

### wings.warlock.security.nonce-cache-manager

`String`=`MemoryCacheManager`, bean name of cache-manager, same as `wings.slardar.cache.primary`.

### wings.warlock.security.nonce-cache-level

`String`=`service`, cache level, see `wings.slardar.cache.level.`

### wings.warlock.security.autoreg-auth-type

`Set<String>=`, which auth-type support to auto register new user. eg. `github,weibo`

### wings.warlock.security.autoreg-max-failed

`Integer`=`5`, max mumber of consecutive failures for auto-registering users, and locking the account when reached.

### wings.warlock.security.autoreg-expired

`Duration`=`3652D`, credential expiration time for auto-registering users, default 3652 days (10 years)

### wings.warlock.security.mem-user

`Map<String, Mu>`, Configure memory user, usually used for special user login.

* key is the description, override if duplicate, suggest `username`+(`/`+`auth-type`)?
* auth-type=`empty`, to match all auth-type.
* For other settings, see WarlockAuthnService.Details and its defaults.

Take root as an example, note that it is just an example, not the real default.

* `root.auth-type=`
* `root.username=`
* `root.password=`
* `root.user-id=`
* `root.status=` ACTIVE by default.
* `root.nickname=` use username by default.
* `root.locale=` use Locale.getDefault() by default.
* `root.zone-id=` use ZoneId.systemDefault() by default.
* `root.passsalt=` empty by default.
* `root.expired=` use LocalDateTime.MAX by default.

### wings.warlock.security.mem-auth

`Map<String, Ma>`, Memory user permissions, key is the description,
override if duplicate, suggest naming by type and usage.

Take boot-admin as an example, note that it is just an example, not the real default.

* `boot-admin.user-id=`
* `boot-admin.username=`
* `boot-admin.auth-type=`
* `boot-admin.auth-role=`
* `boot-admin.auth-perm=`

## 4D.9.wings-warlock-urlmap-77.properties

URL Constants of RequestMapping in Controller.

### wings.warlock.urlmap.auth-login-list

`String`=`/auth/login-list.{extName}`, integrated login default page,
list supported auth-type by default, requires PathVar `{extName}`

### wings.warlock.urlmap.auth-login-page

`String`=`/auth/{authType}/login-page.{extName}`, specific auth-type login default page,
automatically response based on content-type, requires PathVar `{extName}` `{authType}`

### wings.warlock.urlmap.auth-login-page2

`String`=`/auth/login-page.{extName}`, specific auth-type login default page, get authType by RequestParam

### wings.warlock.urlmap.auth-nonce-check

`String`=`/auth/nonce-check.json`, to verify the one-time token is valid, oauth2 uses state as token

### wings.warlock.urlmap.oauth-authorize

`String`=`/oauth/authorize`, simple authorization code.

### wings.warlock.urlmap.oauth-access-token

`String`=`/oauth/access-token`, simple get access-token.

### wings.warlock.urlmap.oauth-revoke-token

`String`=`/oauth/revoke-token`, revoke authorize or access-token.

### wings.warlock.urlmap.user-authed-user

`String`=`/user/authed-user.json`, get basic information of the current login user itself.

### wings.warlock.urlmap.user-authed-perm

`String`=`/user/authed-perm.json`, Check login user permissions, case-insensitive comparison.

### wings.warlock.urlmap.user-list-session

`String`=`/user/list-session.json`, list all session of login user.

### wings.warlock.urlmap.user-drop-session

`String`=`/user/drop-session.json`, dop the session of login user.

### wings.warlock.urlmap.mock-captcha

`String`=`/mock/captcha.json`, mock response captcha.

### wings.warlock.urlmap.mock-doubler

`String`=`/mock/doubler.json`, mock double kill in 30 seconds.

### wings.warlock.urlmap.mock-righter

`String`=`/mock/righter.json`, mock anti forgery editing.

### wings.warlock.urlmap.mock-echo0o0

`String`=`/mock/echo0o0.json`, mock echo to response what input.

### wings.warlock.urlmap.test-run-mode

`String`=`/test/envs/run-mode.json`, query run mode, return Product, Test, Develop, Local.

### wings.warlock.urlmap.test-system-mills

`String`=`/test/envs/test-system-mills.json`, query system timestamp, mills from 1970.

### wings.warlock.urlmap.test-thread-mills

`String`=`/test/envs/test-thread-mills.json`, query current thread timestamp, mills from 1970.

### wings.warlock.urlmap.admin-tweak-logger

`String`=`/admin/tweak/logger.json`, tweak log level of user in thread-level.

### wings.warlock.urlmap.admin-tweak-stack

`String`=`/admin/tweak/stack.json`, tweak stacktrace of user in thread-level.

### wings.warlock.urlmap.admin-tweak-clock

`String`=`/admin/tweak/clock.json`, tweak clock of user in thread-level.

### wings.warlock.urlmap.admin-authn-danger

`String`=`/admin/authn/danger.json`, toggle user danger status, and reset failed count

## 4D.A.wings-warlock-ticket-77.properties

### wings.warlock.ticket.pub-mod

`String`=`win`, PubMod of ticket.

### wings.warlock.ticket.code-ttl

`Duration`=`60s`, authorization code expired time, default 60 seconds.

### wings.warlock.ticket.code-max

`Integer`=`3`, max number of valid authorization codes, default 3.

### wings.warlock.ticket.token-ttl

`Duration`=`1H`, access token expired time, default 1 hour.

### wings.warlock.ticket.token-max

`Integer`=`5`, max number of valid access token, default 5.

### wings.warlock.ticket.client

`Map<String, Pass>`, static config of client login.

* test `wings-trydofor.user-id`=`79`
* test `wings-trydofor.secret`=`wings-trydofor-secret`
* test `wings-trydofor.hosts`=`localhost` host for 302 , do not use ipv6.
* test `wings-trydofor.scopes`=`api` case-sensitive, comma-separated.

## 4D.B.wings-warlock-apiauth-77.properties

### wings.warlock.apiauth.client-header

`String`=`Auth-Client`, Header name of Client Id.

### wings.warlock.apiauth.signature-header

`String`=`Auth-Signature`, Header name of Message Signature.

### wings.warlock.apiauth.timestamp-header

`String`=`Auth-Timestamp`, Header name of Request Timestamp.

### wings.warlock.apiauth.digest-header

`String`=`Auth-Digest`, Header name of Response Body Digest.

### wings.warlock.apiauth.digest-max

`DataSize`=`5MB`, no digest over this size, default 5M.

### wings.warlock.apiauth.must-signature

`Boolean`=`true`, whether it must be signed, compatible with the old api.

### wings.warlock.apiauth.file-json-body

`String`=`FILE_JSON_BODY`, if there is both a file and a json,
use this name for the json body and submit it as a File.

### wings.warlock.apiauth.error-client

response of client error.

* `http-status`=`401`
* `response-body`=`{"success":false,"code":"Client","message":"client error"}`

### wings.warlock.apiauth.error-signature

response of signature error, support `{code}` placeholder.

* `http-status`=`403`
* `response-body`=`{"success":false,"code":"{code}","message":"{code} error"}`

### wings.warlock.apiauth.error-unhandled

response of unhandled error.

* `http-status`=`200`
* `response-body`=`{"success":false,"code":"Unknown","message":"unknown error"}`

## 4D.C.wings-warlock-watching-77.properties

code tracking , default `-1` means disable; `0` means fully enable.

* Controller layer is implemented by Interceptor
* Service dependency annotation @Watching
* Jooq layer, depends on listener

### wings.warlock.watching.jooq-threshold

`Long`=`-1`, threshold millis for jooq execution.

### wings.warlock.watching.service-threshold

`Long`=`-1`, threshold millis for Watching annotation.

### wings.warlock.watching.controller-threshold

`Long`=`-1`, threshold millis for Controller.

## 4D.D.wings-warlock-danger-77.properties

### wings.warlock.danger.max-failure=true

`Boolean`=`true`, Whether to switch the account status to danger when the maximum failure is reached.

### wings.warlock.danger.retry-step

`Duration`=`5s`, Retry interval when bad badCredentials.

### wings.warlock.danger.block-size

`Integer`=`10000`, cache size for danger.

### wings.warlock.danger.block-ttl

`Duration`=`300s`, cache ttl for danger.
