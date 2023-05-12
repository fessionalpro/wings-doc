---
isOriginal: true
icon: enum
category:
  - Warlock
  - Property
---

# 4D.Warlock Properties

Properties of loing and authn/authz in Warlock.

## 4D.1.spring-wings-enabled-77.properties

### spring.wings.faceless.enabled.enumi18n

`Boolean`=`true`, whether to enable enumi18n.

### spring.wings.faceless.flywave.enabled.module

`Boolean`=`true`, whether to enable flywave module.

### spring.wings.warlock.enabled.security-auto

`Boolean`=`true`, whether to support "warlock security web and http".

### spring.wings.warlock.enabled.security-web-autos

`Boolean`=`true`, whether to enable Web auto config, eg. firewall, debug, etc.

### spring.wings.warlock.enabled.security-http-bind

`Boolean`=`true`, whether to support "warlock security http wing bind".

### spring.wings.warlock.enabled.security-http-auth

`Boolean`=`true`, whether to support "warlock security http wing auth".

### spring.wings.warlock.enabled.security-http-base

`Boolean`=`true`, whether to support "warlock security http base auth".

### spring.wings.warlock.enabled.security-http-auto

`Boolean`=`true`, whether to support "warlock security http auto".

### spring.wings.warlock.enabled.security-http-chain

`Boolean`=`true`, whether to support SecurityFilterChain.

### spring.wings.warlock.enabled.security-bean

`Boolean`=`true`, whether to support warlock security Bean.

### spring.wings.warlock.enabled.global-lock

`Boolean`=`true`, whether to inject wings global lock.

### spring.wings.warlock.enabled.jooq-autogen

`Boolean`=`true`, whether to inject jooq dao.

### spring.wings.warlock.enabled.combo-list-all-login-page

`Boolean`=`true`, whether to inject ListAllLoginPageCombo.

### spring.wings.warlock.enabled.combo-nonce-user-details

`Boolean`=`true`, whether to inject NonceUserDetailsCombo.

### spring.wings.warlock.enabled.just-auth

`Boolean`=`true`, whether to support just auth.

### spring.wings.warlock.enabled.combo-just-auth-login-page

`Boolean`=`true`, whether to inject JustAuthLoginPageCombo.

### spring.wings.warlock.enabled.combo-just-auth-user-details

`Boolean`=`true`, whether to inject JustAuthUserDetailsCombo.

### spring.wings.warlock.enabled.combo-just-auth-autoreg

`Boolean`=`true`, whether to inject JustAuthUserAuthnAutoReg.

### spring.wings.warlock.enabled.zone-perm-check

`Boolean`=`false`, whether to support AuthZonePermChecker.

### spring.wings.warlock.enabled.app-perm-check

`Boolean`=`true`, whether to support AuthAppPermChecker.

### spring.wings.warlock.enabled.all-exception-handler

`Boolean`=`true`, whether to inject AllExceptionResolver.

### spring.wings.warlock.enabled.code-exception-handler

`Boolean`=`true`, whether to inject CodeExceptionResolver.

### spring.wings.warlock.enabled.bind-exception-advice

`Boolean`=`true`, whether to inject BindExceptionAdvice.

### spring.wings.warlock.enabled.check-database

`Boolean`=`true`, whether to check mysql and local timezone compatibility.

### spring.wings.warlock.enabled.swagger-rule

`Boolean`=`true`, whether to support global inject AlternateTypeRule into Docket.

### spring.wings.warlock.enabled.swagger-jsr310

`Boolean`=`true`, whether to support global inject "java.time.Local*" into Docket.

### spring.wings.warlock.enabled.table-change

`Boolean`=`true`, whether to enable table CUD listener.

### spring.wings.warlock.enabled.controller-auth

`Boolean`=`true`, whether to enable the default auth Controller.

### spring.wings.warlock.enabled.controller-proc

`Boolean`=`true`, whether to enable document-only login/out proc that processed by filter.

### spring.wings.warlock.enabled.controller-user

`Boolean`=`true`, whether to enable the default user Controller.

### spring.wings.warlock.enabled.controller-mock

`Boolean`=`true`, whether to enable the default mock Controller.

### spring.wings.warlock.enabled.controller-test

`Boolean`=`true`, whether to enable the default test Controller.

### spring.wings.warlock.enabled.controller-tweak

`Boolean`=`false`, whether to enable the default TweakController.

### spring.wings.warlock.enabled.controller-oauth

`Boolean`=`true`, whether to enable the default OauthController.

### spring.wings.warlock.enabled.watching

`Boolean`=`false`, whether to enable timing watching and analysis.

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

Jooq's CUD listening on user and auth related tables.

* `wings.faceless.jooq.cud.table[win_perm_entry]`=`id`
* `wings.faceless.jooq.cud.table[win_role_entry]`=`id`
* `wings.faceless.jooq.cud.table[win_role_grant]`=`refer_role`
* `wings.faceless.jooq.cud.table[win_user_grant]`=`refer_user`
* `wings.faceless.jooq.cud.table[win_conf_runtime]`=`key`
* `wings.faceless.jooq.cud.table[win_user_authn]`=`user_id,username,auth_type`
* `wings.faceless.jooq.cud.table[win_user_basis]`=`id`

## 4D.6.wings-warlock-error-77.properties

Global Exception handling. `CodeException` supports variable `{message}`.
`default` handles all exceptions and provides defaults for other similar types.

### wings.warlock.error.default-exception

* `http-status`=`200`
* `content-type`=`application/json;charset=UTF-8`
* `message-body`=`{"success":false,"message":"{message}"}`
* `response-body`=`{"success":false,"message":"unknown error"}`

### wings.warlock.error.code-exception

Same as default-exception.

## 4D.7.wings-warlock-i18n-77.properties

### wings.warlock.i18n.zoneid-enum

`Set<String>`=`pro.fessional.wings.faceless.enums.autogen.StandardTimezone`

init ZoneId by StandardTimezoneEnum.

### wings.warlock.i18n.locale-enum

`Set<String>`=`pro.fessional.wings.faceless.enums.autogen.StandardLanguage`

init Locale by StandardLanguageEnum.

## 4D.8.wings-warlock-lock-77.properties

Global lock.

### wings.warlock.lock.hazelcast-cp

`Boolean`=`true`, whether to use useCpIfSafe in hazelcast GlobalLock.

## 4D.9.wings-warlock-security-77.properties

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
Support  `authType` and `authZone` variables, which can be obtained via param or path (PathPattern)

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

`Set<String>`=`username,mobile,email`, which auth-type support Nonce anth.

### wings.warlock.security.nonce-cache-manager

`String`=`MemoryCacheManager`, bean name of cache-manager, same as `wings.slardar.cache.primary`.

### wings.warlock.security.nonce-cache-level

`String`=`service`, cache level, see `wings.slardar.cache.level.`

### wings.warlock.security.autoreg-auth-type

`Set<String>`=`∅`, which auth-type support to auto register new user. eg. `github,weibo`

### wings.warlock.security.autoreg-max-failed

`Integer`=`5`, max mumber of consecutive failures for auto-registering users, and locking the account when reached.

### wings.warlock.security.autoreg-expired

`Duration`=`3652D`, credential expiration time for auto-registering users, default 3652 days (10 years)

### wings.warlock.security.mem-user

`Map<String, Mu>`, Configure memory user, usually used for special user login.

* key is the description, override if duplicate, suggest `username`+(`/`+`auth-type`)?
* auth-type=`∅`, to match all auth-type.
* For other settings, see WarlockAuthnService.Details and its defaults.

Take root as an example, note that it is just an example, not the real default.

* `root.auth-type`=`∅`
* `root.username`=`∅`
* `root.password`=`∅`
* `root.user-id`=`∅`
* `root.status`=`∅` ACTIVE by default.
* `root.nickname`=`∅` use username by default.
* `root.locale`=`∅` use Locale.getDefault() by default.
* `root.zone-id`=`∅` use ZoneId.systemDefault() by default.
* `root.passsalt`=`∅` empty by default.
* `root.expired`=`∅` use LocalDateTime.MAX by default.

### wings.warlock.security.mem-auth

`Map<String, Ma>`, Memory user permissions, key is the description,
override if duplicate, suggest naming by type and usage.

Take boot-admin as an example, note that it is just an example, not the real default.

* `boot-admin.user-id`=`∅`
* `boot-admin.username`=`∅`
* `boot-admin.auth-type`=`∅`
* `boot-admin.auth-role`=`∅`
* `boot-admin.auth-perm`=`∅`

## 4D.A.wings-warlock-urlmap-77.properties

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

`String`=`/mock/captcha.json`, mock reposne captcha.

### wings.warlock.urlmap.mock-doubler

`String`=`/mock/doubler.json`, mock double kill in 30 seconds.

### wings.warlock.urlmap.mock-righter

`String`=`/mock/righter.json`, mock anti fogery editing.

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

## 4D.B.wings-warlock-ticket-77.properties

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

## 4D.C.wings-warlock-apiauth-77.properties

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

* `http-status`=`401`
* `message-body`=`{"success":false,"message":"{message}"}`

### wings.warlock.apiauth.error-signature

* `http-status`=`403`
* `message-body`=`{"success":false,"message":"{message}"}`

### wings.warlock.apiauth.error-unhandled

* `http-status`=`200`
* `message-body`=`{"success":false,"message":"{message}"}`

## 4D.D.wings-warlock-watching-77.properties

code tracking , default `-1` means disable; `0` means fully enable.

* Controller layer is implemented by Interceptor
* Service dependency annotation @Watching
* Jooq layer, depends on lisenter

### wings.warlock.watching.jooq-threshold

`Long`=`-1`, Threshold millis for jooq execution.

### wings.warlock.watching.service-threshold

`Long`=`-1`, Threshold millis for Watching annotation.

### wings.warlock.watching.controller-threshold

`Long`=`-1`, Threshold millis for Controller.
