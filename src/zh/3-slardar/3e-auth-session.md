---
isOriginal: true
icon: key
category:
  - 鱼人
  - 认证
  - 授权
---

# 3E.Session和认证

* 同时支持header-token, cookie-session
* 安全不高的url-string的凭证类ticket
* 用户可管理session，控制登录，踢人
* 可配置的cookie-name，token-name
* 不同级别的控制并发登录，如财务只许单端登录
* 集成第三方登录，验证码登录，凭证登录
* 管理端马甲，超级用户身份切换
* session别名，附加token

## 3E.1.header和cookie

默认通过server.servlet.session.cookie.name设置token的名字，
在WingsSessionIdResolver中，同时支持header和cookie两种resolver。
header和cookie同名，默认都是`session`。

实施建议，

* 不建议使用rememberMe，可设置session的timeout和cookie的maxAge较长时间
* 如果没有特殊要求，建议使用cookie体系，因其生态成熟

## 3E.2.cookie的定制功能

cookie体系下，可通过定制Filter和Wrapper实现以下功能。

* cookie前缀，适用同domain同path下，多个应用共享一套Session-cookie体系的情况
* cookie别名，用于混淆发布时cookie key的情况，受前缀影响
* cookie编码，用于可读性粒度控制
  - noop - 不加密，明文，如随机token，没必要消耗计算资源
  - b64 - base64,spring默认的加密机制，只用了防止特殊字符干扰
  - aes - aes256,非敏感数据的初级加密，基本的防偷窥功能
* 定制 http-only, secure, domain, path

其中需要注意的是，

* http-only会使js无法读取，有时需要放开（注意CSRF攻击）
* session的设置，应该在spring-session-79.properties 中设置

## 3E.3.多验证及登录

加强了SpringSecurity的userPassword登录，通过继承或替换以下类，实现无缝替代。

* WingsBindLoginConfigurer : FormLoginConfigurer
* WingsBindAuthenticationToken : UsernamePasswordAuthenticationToken
* WingsBindAuthenticationFilter : UsernamePasswordAuthenticationFilter
* WingsBindAuthenticationProvider : DaoAuthenticationProvider
* WingsUserDetail : UserDetails
* WingsUserDetailService : UserDetailsService

使用时，建议直接以bindLogin替换formLogin配置，如果共存，则必须bind的order在前面，
因为Token是继承关系，要保证WingsProvider在DaoAuthenticationProvider前处理。

举例，实现短信验证或第三方绑定时，只需实现WingsUserDetailService，处理验证类型。

* 短信验证，UserDetailsService在缓存中取得passwordEncoder加密后的短信
* 第三方绑定，推荐justAuth，设置loginProcessingUrl为callback地址，通过，
  - 在AuthnDetailsSource构造的请求中的Authentication.details
  - 在AuthnProvider先UserDetailsService.load，NotFound时尝试创建用户
  - 尤其Oauth这种2次获取detail的，强依赖AuthnDetailsSource获取Detail

在使用WingsBindAuthnProvider代替默认的DaoAuthenticationProvider时，有以下方法，

* 继承configure(AuthenticationManagerBuilder)，通过wingsHelper手动构建
* 无上述继承，直接声明WingsBindAuthnProvider的Bean，自动全局配置（推荐）
* 无AuthenticationProvider，有WingsUserDetailsService，自动配置Wings全套（默认）

当手动配置userDetailsService，和默认配置一样，会自动new一个Provider添加进去。
如果不需要添加Provider，可设置wingsBindAuthnProvider(false)，与原始spring不同。

## 3E.4.实现原理

在spring session加持下，spring security可以完成api预授信和token登录

* [PreAuthenticatedProcessingFilter](https://docs.spring.io/spring-security/site/docs/current/reference/html5/#servlet-preauth)
* [UsernamePasswordAuthenticationFilter](https://docs.spring.io/spring-security/site/docs/current/reference/html5/#servlet-preauth)
* SwitchUserFilter - linux su - 全局套马甲
* RunAsManager - 单方法临时套马甲

作为提高话题，以下技术点需要阅读源码和定制。

* SessionRepositoryFilter
* UsernamePasswordAuthenticationFilter
* RememberMeAuthenticationFilter
* SwitchUserFilter
* FilterComparator

Session和SecurityContext的调用关系如下

@startuml
SessionRepositoryFilter -> SessionRepositoryRequestWrapper: doFilterInternal()
SecurityContextPersistenceFilter -> SecurityContextRepository: loadContext()
SecurityContextRepository -> SessionRepositoryRequestWrapper: getSession()
SecurityContextPersistenceFilter -> SecurityContextHolder: setContext()
SecurityContextPersistenceFilter -> FilterChain: doFilter()
SecurityContextPersistenceFilter -> SecurityContextHolder: clearContext()
SecurityContextPersistenceFilter -> SecurityContextRepository: saveContext()
SessionManagementFilter -> SecurityContextRepository: containsContext()
SessionManagementFilter -> SecurityContextRepository: saveContext()
@enduml

## 3E.5.相关知识

* RequestContextHolder - SecurityContextHolder
* CookieSerializer HttpSessionIdResolver
* SessionEventHttpSessionListenerAdapter - HttpSessionEventPublisher
* rememberMe - SpringSessionRememberMeServices

默认使用Hazelcast实现，全默认配置，正式环境需要自行调整

若使用`@Enable*HttpSession`表示手动配置，则`spring.session.*`不会自动配置。
`springSessionRepositoryFilter`会置顶，以便wrap掉原始的HttpRequest和HttpSession
