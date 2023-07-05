---
isOriginal: true
icon: enum
category:
  - 术士
  - 属性
---

# 4D.术士的属性

有关Warlock登录授权的设置

## 4D.1.spring-wings-enabled-77.properties

设置以下属性，

* spring.wings.faceless.enabled.enumi18n=true
* spring.wings.faceless.flywave.enabled.module=true

### spring.wings.warlock.enabled.autoconf

`Boolean`=`true`，是否启动自动配置。

### spring.wings.warlock.enabled.security-auto

`Boolean`=`true`，是否支持 warlock security web and http配置

### spring.wings.warlock.enabled.security-web-autos

`Boolean`=`true`，是否支持 Web 自动配置，firewall，debug等

### spring.wings.warlock.enabled.security-http-bind

`Boolean`=`true`，是否支持 warlock security http wing bind

### spring.wings.warlock.enabled.security-http-auth

`Boolean`=`true`，是否支持 warlock security http wing auth

### spring.wings.warlock.enabled.security-http-base

`Boolean`=`true`，是否支持 warlock security http base 验证

### spring.wings.warlock.enabled.security-http-auto

`Boolean`=`true`，是否支持 warlock security http auto

### spring.wings.warlock.enabled.security-http-chain

`Boolean`=`true`，是否配置默认的 SecurityFilterChain

### spring.wings.warlock.enabled.security-bean

`Boolean`=`true`，是否支持 warlock security Bean配置

### spring.wings.warlock.enabled.global-lock

`Boolean`=`true`，是否注入 wings的全局锁

### spring.wings.warlock.enabled.jooq-autogen

`Boolean`=`true`，是否注入 jooq dao

### spring.wings.warlock.enabled.combo-list-all-login-page

`Boolean`=`true`，是否注入 ListAllLoginPageCombo

### spring.wings.warlock.enabled.combo-nonce-user-details

`Boolean`=`true`，是否注入 NonceUserDetailsCombo

### spring.wings.warlock.enabled.just-auth

`Boolean`=`true`，是否支持 just auth

### spring.wings.warlock.enabled.combo-just-auth-login-page

`Boolean`=`true`，是否注入 JustAuthLoginPageCombo

### spring.wings.warlock.enabled.combo-just-auth-user-details

`Boolean`=`true`，是否注入 JustAuthUserDetailsCombo

### spring.wings.warlock.enabled.combo-just-auth-autoreg

`Boolean`=`true`，是否注入 JustAuthUserAuthnAutoReg

### spring.wings.warlock.enabled.zone-perm-check

`Boolean`=`false`，是否支持 AuthZonePermChecker

### spring.wings.warlock.enabled.app-perm-check

`Boolean`=`true`，是否支持 AuthAppPermChecker

### spring.wings.warlock.enabled.default-exception-handler

`Boolean`=`true`，是否注入 DefaultExceptionResolver

### spring.wings.warlock.enabled.bind-exception-advice

`Boolean`=`true`，是否注入 BindExceptionAdvice

### spring.wings.warlock.enabled.check-database

`Boolean`=`true`，是否检查mysql和本机timezone兼容性

### spring.wings.warlock.enabled.swagger-rule

`Boolean`=`true`，是否支持为Docket全局注入AlternateTypeRule

### spring.wings.warlock.enabled.swagger-jsr310

`Boolean`=`true`，是否支持为Docket全局注入"java.time.Local*"

### spring.wings.warlock.enabled.table-change

`Boolean`=`true`，是否开启table CUD 监听

### spring.wings.warlock.enabled.controller-auth

`Boolean`=`true`，是否开启默认的auth Controller

### spring.wings.warlock.enabled.controller-proc

`Boolean`=`true`，是否开启由filter处理仅做文档的login/out proc

### spring.wings.warlock.enabled.controller-user

`Boolean`=`true`，是否开启默认的user Controller

### spring.wings.warlock.enabled.controller-mock

`Boolean`=`true`，是否开启默认的mock Controller

### spring.wings.warlock.enabled.controller-test

`Boolean`=`true`，是否开启默认的test Controller

### spring.wings.warlock.enabled.controller-tweak

`Boolean`=`false`，是否开启默认的TweakController

### spring.wings.warlock.enabled.controller-oauth

`Boolean`=`true`，是否开启默认的OauthController

### spring.wings.warlock.enabled.watching

`Boolean`=`false`，是否支持计时分析

### spring.wings.warlock.enabled.uniauth

`Boolean`=`false`，是否支持联合登录

## 4D.2.wings-flywave-fit-79.properties

### wings.faceless.flywave.fit.warlock-enum-i18n

检查并自动安装，warlock-enum-i18n的数据库依赖

* `path`=`classpath*:/wings-flywave/branch/feature/01-enum-i18n/*.sql`
* `revi`=`2019_0521_01L`
* `lost`=`WARN`

### wings.faceless.flywave.fit.warlock-user-auth

检查并自动安装，warlock-user-auth的数据库依赖

* `path`=`classpath*:/wings-flywave/master/04-auth/*.sql`
* `revi`=`2020_1024_01L, 2020_1024_02L`
* `lost`=`WARN`

### wings.faceless.flywave.fit.warlock-conf-mode

检查并自动安装，warlock-conf-mode的数据库依赖

* `path`=`classpath*:/wings-flywave/master/05-conf/*.sql`
* `revi`=`2020_1025_01L`
* `lost`=`WARN`

## 4D.3.wings-warlock-justauth-77.properties

Oauth登录支持，使用just-auth

### wings.warlock.just-auth.cache-size

`Integer`=`5000`，缓存capacity数量

### wings.warlock.just-auth.cache-live

`Integer`=`300`，ttl秒数，expireAfterWrite

### wings.warlock.just-auth.safe-state

`Map<String, String>`，默认，`/login`=`{1}/#{0}{2}`

设定安全的state，通过key获取内容，执行重定向(`http`或`/`开头)或回写。
内容支持`MessageFormat`格式的占位符模板，`{0}`为key，
若是http开头，则检测是否为safe-host

### wings.warlock.just-auth.safe-host

`Set<String>`=`localhost:8080,localhost:8081`

设定安全的host，减少dev时的跨域，可引发`redirect_uri_mismatch`错误

### wings.warlock.just-auth.auth-type

`Map<String, AuthConfig>`，key同`wings.warlock.security.auth-type.*`，
支持`{host}`,`{scheme}`,`{authType}`,`{authZone}`变量，根据request的参数。

* `github.client-id`=`Iv1.561a1b1940c77d3a`
* `github.client-secret`=`${GITHUB_OAUTH_SECRET}`
* `github.redirect-uri`=`{scheme}://{host}/auth/github/login.json`

### wings.warlock.just-auth.http-conf

`Map<String, Http>`，如果不需要代理，设置proxy-type=DIRECT或host=空即可

* `github.timeout`=`10`，此处为秒，与just-auth的毫秒不同。
* `github.proxy-type`=`SOCKS`
* `github.proxy-host`=`127.0.0.1`
* `github.proxy-port`=`1081`

## 4D.4.wings-warlock-check-77.properties

是否做时区的检查

### wings.warlock.check.tz-offset

`Integer`=`5`，秒，数据库和jvm时间差，绝对值的最大值

### wings.warlock.check.tz-fail

`Boolean`=`true`，时间差异过大时，是终止还是log

## 4D.5.wings-warlock-cud-77.properties

Jooq对配置和授权表的CUD监听，`empty`表示不记录字段，`-`表示忽略此表。

* `wings.faceless.jooq.cud.table[win_perm_entry]=`
* `wings.faceless.jooq.cud.table[win_role_entry]=`
* `wings.faceless.jooq.cud.table[win_conf_runtime]`=`key,current,handler`

## 4D.6.wings-warlock-error-77.properties

全局异常控制。default为默认配置，兜底处理所以异常并为其他同类型提供默认值。

### wings.warlock.error.default-exception

* `http-status`=`200`
* `content-type`=`application/json;charset=UTF-8`
* `response-body`=`{"success":false,"message":"unknown error"}`

## 4D.7.wings-warlock-i18n-77.properties

### wings.warlock.i18n.zoneid-enum

`Set<String>`=`pro.fessional.wings.faceless.enums.autogen.StandardTimezone`

初始化的ZoneId的StandardTimezoneEnum类

### wings.warlock.i18n.locale-enum

`Set<String>`=`pro.fessional.wings.faceless.enums.autogen.StandardLanguage`

初始化的Locale的StandardLanguageEnum类

## 4D.8.wings-warlock-lock-77.properties

全局锁设置

### wings.warlock.lock.hazelcast-cp

`Boolean`=`true`，在hazelcast的GlobalLock中，是否使用 useCpIfSafe

## 4D.9.wings-warlock-security-77.properties

Spring Security设置

### wings.warlock.security.web-debug

`Boolean`=`false`，WebSecurity.debug

### wings.warlock.security.authority-role

`Boolean`=`true`，权限是否使用Role

### wings.warlock.security.authority-perm

`Boolean`=`true`，权限是否使用Perm

### wings.warlock.security.login-forward

`Boolean`=`true`，true以servlet的forward进行，否则redirect(302)跳转

### wings.warlock.security.login-page

`String`=`/auth/login-page.json`，未登录时跳转的页面，需要有controller处理

### wings.warlock.security.login-proc-url

`String`=`/auth/{authType}/login.json`

loginProcessingUrl，处理登录的Ant格式URL，由filter处理，不需要controller。
支持变量`authType`和`authZone`，可以通过param或path获得（PathPattern）

### wings.warlock.security.login-proc-method

`Set<String>`=`POST,GET`，spring默认仅POST，以更好的RESTful，但Oauth有Get

### wings.warlock.security.logout-url

`String`=`/auth/logout.json`

登出地址，由filter处理，不需要controller

### wings.warlock.security.login-success-redirect

`Boolean`=`false`，登录成功后是否重定向

### wings.warlock.security.login-success-redirect-param

`String`=`redirectTo`，登录成功的重定向参数

### wings.warlock.security.login-success-redirect-default

`String`=`/`，登录成功的重定向默认地址

### wings.warlock.security.login-success-body

`String`=`{"success":true,"message":"login success"}`，登录成功返回的body，非重定向时

### wings.warlock.security.login-failure-body

`String`=`{"success":false,"message":"{message}"}`，登录失败返回的body

### wings.warlock.security.logout-success-body

`String`=`{"success":true,"message":"logout success"}`，登出成功返回的body，空时不注入handler

### wings.warlock.security.session-maximum

`Integer`=`-1`，同时登陆的maximumSessions。`-1`为不限制

### wings.warlock.security.session-expired-body

`String`=`{"success":false,"message":"session has been expired, possibly due to multiple logins"}`，过期时返回的内容

### wings.warlock.security.username-para

`String`=`username`，Username Parameter，用户名参数

### wings.warlock.security.password-para

`String`=`password`，Password Parameter，密码参数

### wings.warlock.security.role-prefix

`String`=`ROLE_`，GrantedAuthorityDefaults建议和spring一致，不用动

### wings.warlock.security.web-ignore

配置顺序由宽松到严格的顺序，`webIgnore` > `PermitAll` > `Authenticated` > `Authority` > `AnyRequest`收尾。value是`-`或`空`，表示忽略此key。

①忽略项，`Map<String, String>`，antMatcher，无SecurityFilter流程及功能，如静态资源。

* `assets`=`/assets/**`
* `webjars`=`/webjars/**`
* `swagger-ui`=`/swagger-ui/**`
* `swagger-api`=`/v3/api-docs/**`

### wings.warlock.security.permit-all

②都允许，`Map<String, String>`，antMatcher。

* `error`=`/error`
* `auth`=`/auth/**`
* `test`=`/test/**`

### wings.warlock.security.authenticated

③仅登录，`Map<String, String>`，antMatcher。

* `user`=`/user/**`

### wings.warlock.security.authority

④有权限，`Map<String, String>`，antMatcher。
按URL分组合并权限，最后以URL的ascii倒序设置，即英数先于`*`，宽松规则在后。

* `ROLE_ACTUATOR`=`/actuator/**`

### wings.warlock.security.any-request

⑤默认项，`String`，支持以下。

* `permitAll`|`authenticated`|`anonymous`|`fullyAuthenticated`
* 任意非空，非以上字符串，认为是`Authority`，`逗号`或`空白`分割多个。

### wings.warlock.security.auth-type-default

`String`=`pro.fessional.wings.warlock.service.auth.WarlockAuthType#USERNAME`

支持的验证类型，enum全路径，一对一，否则反向解析有问题；
不含`-`，`default`是特殊值，表示没有匹配时使用。

### wings.warlock.security.auth-type

`Map<String, String>`，登录方式枚举映射，必须一对一映射。

* `username`=`pro.fessional.wings.warlock.service.auth.WarlockAuthType#USERNAME`
* `mobile`=`pro.fessional.wings.warlock.service.auth.WarlockAuthType#MOBILE`
* `email`=`pro.fessional.wings.warlock.service.auth.WarlockAuthType#EMAIL`
* `github`=`me.zhyd.oauth.config.AuthDefaultSource#GITHUB`
* `weibo`=`me.zhyd.oauth.config.AuthDefaultSource#WEIBO`

### wings.warlock.security.zone-perm

`Map<String, Set<String>>`=`admin=ROLE_ADMIN`

设置authZone对应的权限，若有任一权限则可登录，否则，以用户名密码错误返回

### wings.warlock.security.app-perm

`Map<String, Set<String>>`=`wings-warlock=ROLE_ADMIN`

设置spring.application.name对应的权限，若有任一权限则可登录，否则，以用户名密码错误返回。
支持AntPath，如`wings-*`，合并所有匹配的权限设置项，wings默认程序为`wings-default`

### wings.warlock.security.nonce-auth-type

`Set<String>`=`username,mobile,email`，支持Nonce的验证类型

### wings.warlock.security.nonce-cache-manager

`String`=`MemoryCacheManager`

cache-manager的bean name，同`wings.slardar.cache.primary`

### wings.warlock.security.nonce-cache-level

`String`=`service`，缓存level，参考`wings.slardar.cache.level.`

### wings.warlock.security.autoreg-auth-type

`Set<String>=`，支持自动注册用户的验证类型，如`github,weibo`

### wings.warlock.security.autoreg-max-failed

`Integer`=`5`，自动注册用户时，最大连续失败次数，到达后锁账户

### wings.warlock.security.autoreg-expired

`Duration`=`3652D`，自动注册用户时，凭证过期时间，默认3652天（10年）

### wings.warlock.security.mem-user

`Map<String, Mu>`，配置内存用户，一般用于特殊用户登录。

* key为用户说明，重复时覆盖，建议为`username`+(`/`+`auth-type`)?
* `auth-type=`时，为匹配全部auth-type。
* 其他设置，参考WarlockAuthnService.Details 的类型及默认值。

以root举例，注意，仅是举例，并非真实默认值。

* `root.auth-type=`
* `root.username=`
* `root.password=`
* `root.user-id=`
* `root.status=` 默认ACTIVE
* `root.nickname=` 默认使用username
* `root.locale=` 默认使用Locale.getDefault()
* `root.zone-id=` 默认使用ZoneId.systemDefault()
* `root.passsalt=` 默认空
* `root.expired=` 默认使用LocalDateTime.MAX

### wings.warlock.security.mem-auth

`Map<String, Ma>`，内存用户权限，key授权说明，重复时覆盖，建议以类型和用途命名。

以boot-admin举例，注意，仅是举例，并非真实默认值。

* `boot-admin.user-id=`
* `boot-admin.username=`
* `boot-admin.auth-type=`
* `boot-admin.auth-role=`
* `boot-admin.auth-perm=`

## 4D.A.wings-warlock-urlmap-77.properties

Controller中RequestMapping的URL常量

### wings.warlock.urlmap.auth-login-list

`String`=`/auth/login-list.{extName}`，集成登录默认页，默认返回支持的type列表，需要PathVar `{extName}`

### wings.warlock.urlmap.auth-login-page

`String`=`/auth/{authType}/login-page.{extName}`，具体验证登录默认页，根据content-type自动返回，需要PathVar `{extName}` `{authType}`

### wings.warlock.urlmap.auth-login-page2

`String`=`/auth/login-page.{extName}`，具体验证登录默认页，把authType变成RequestParam

### wings.warlock.urlmap.auth-nonce-check

`String`=`/auth/nonce-check.json`，验证一次性token是否有效，oauth2使用state作为token

### wings.warlock.urlmap.oauth-authorize

`String`=`/oauth/authorize`，简单的authorization code授权类型

### wings.warlock.urlmap.oauth-access-token

`String`=`/oauth/access-token`，简单的获取access-token

### wings.warlock.urlmap.oauth-revoke-token

`String`=`/oauth/revoke-token`，吊销authorize或access-token

### wings.warlock.urlmap.user-authed-user

`String`=`/user/authed-user.json`，获得登录用户的自身基本信息

### wings.warlock.urlmap.user-authed-perm

`String`=`/user/authed-perm.json`，检查登录用户的权限，不区分大小写比较

### wings.warlock.urlmap.user-list-session

`String`=`/user/list-session.json`，列出用户所有登录session

### wings.warlock.urlmap.user-drop-session

`String`=`/user/drop-session.json`，踢出用户登录session

### wings.warlock.urlmap.mock-captcha

`String`=`/mock/captcha.json`，直接返回验证码

### wings.warlock.urlmap.mock-doubler

`String`=`/mock/doubler.json`，30秒内防连击

### wings.warlock.urlmap.mock-righter

`String`=`/mock/righter.json`，防篡改

### wings.warlock.urlmap.mock-echo0o0

`String`=`/mock/echo0o0.json`，按输入返回

### wings.warlock.urlmap.test-run-mode

`String`=`/test/envs/run-mode.json`，查询运行模式，返回 Product, Test, Develop, Local

### wings.warlock.urlmap.test-system-mills

`String`=`/test/envs/test-system-mills.json`，查询服务器系统时间，1970毫秒

### wings.warlock.urlmap.test-thread-mills

`String`=`/test/envs/test-thread-mills.json`，查询服务器线程时间，1970毫秒

### wings.warlock.urlmap.admin-tweak-logger

`String`=`/admin/tweak/logger.json`，线程级设置用户的日志级别

### wings.warlock.urlmap.admin-tweak-stack

`String`=`/admin/tweak/stack.json`，线程级设置用户的异常栈有无

### wings.warlock.urlmap.admin-tweak-clock

`String`=`/admin/tweak/clock.json`，线程级设置用户的时钟

### wings.warlock.urlmap.admin-authn-danger

`String`=`/admin/authn/danger.json`, 切换用户danger状态，可重置failed计数

## 4D.B.wings-warlock-ticket-77.properties

### wings.warlock.ticket.pub-mod

`String`=`win`，ticket的PubMod

### wings.warlock.ticket.code-ttl

`Duration`=`60s`，authorization code 过期时间，默认60秒

### wings.warlock.ticket.code-max

`Integer`=`3`，有效authorization code的最大数量，默认3

### wings.warlock.ticket.token-ttl

`Duration`=`1H`，access token的过期时间，默认1小时

### wings.warlock.ticket.token-max

`Integer`=`5`，有效access token的最大数量，默认5

### wings.warlock.ticket.client

`Map<String, Pass>`，静态配置 client 登录信息。

* 测试 `wings-trydofor.user-id`=`79`
* 测试 `wings-trydofor.secret`=`wings-trydofor-secret`
* 测试 `wings-trydofor.hosts`=`localhost` 302的主机名，不要使用ipv6
* 测试 `wings-trydofor.scopes`=`api` 区分大小写，逗号分隔

## 4D.C.wings-warlock-apiauth-77.properties

### wings.warlock.apiauth.client-header

`String`=`Auth-Client`，Header name of Client Id

### wings.warlock.apiauth.signature-header

`String`=`Auth-Signature`，Header name of Message Signature

### wings.warlock.apiauth.timestamp-header

`String`=`Auth-Timestamp`，Header name of Request Timestamp

### wings.warlock.apiauth.digest-header

`String`=`Auth-Digest`，Header name of Response Body Digest

### wings.warlock.apiauth.digest-max

`DataSize`=`5MB`，超过此size不做digest，默认5M

### wings.warlock.apiauth.must-signature

`Boolean`=`true`，是否一定要签名，可兼容旧api

### wings.warlock.apiauth.file-json-body

`String`=`FILE_JSON_BODY`，既又文件又有json的时候，以此命名json body作为File提交

### wings.warlock.apiauth.error-client

Client错误时的应答，

* `http-status`=`401`
* `response-body`=`{"success":false,"code":"Client","message":"client error"}`

### wings.warlock.apiauth.error-signature

签名错误时的应答，支持`{code}`占位符。

* `http-status`=`403`
* `response-body`=`{"success":false,"code":"{code}","message":"{code} error"}`

### wings.warlock.apiauth.error-unhandled

未知错误时的应答，

* `http-status`=`200`
* `response-body`=`{"success":false,"code":"Unknown","message":"unknown error"}`

## 4D.D.wings-warlock-watching-77.properties

对代码进行跟踪，默认`-1`，表示关闭；`0`为全开启

* controller层由Interceptor实现
* service依赖注解 @Watching
* jooq层，依赖于listener

### wings.warlock.watching.jooq-threshold

`Long`=`-1`，jooq执行的阈值毫秒

### wings.warlock.watching.service-threshold

`Long`=`-1`，Watching注解的阈值毫秒

### wings.warlock.watching.controller-threshold

`Long`=`-1`，Controller的阈值毫秒
