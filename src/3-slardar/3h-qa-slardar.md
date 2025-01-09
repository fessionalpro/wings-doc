---
isOriginal: true
icon: circle-question
category:
  - Slardar
  - Topic
  - Backend
---

# 3H.Backend Faq Topic

## 3H.01.Error creating 'hazelcastInstance'

> Error creating bean with name 'hazelcastInstance'
> Invalid content was found starting with element 'cluster-name'

The above message means a compatibility issue between hazelcast 3 and 4 configuration,
boot-2.2.x uses hazelcast 3.12.x.

## 3H.02.Modify Servlet Container

slardar uses undertow by default and provides spring-servlet-server-79.properties configuration

## 3H.03.Session Solution

In fact, hazelcast is a good choice, if you use redis, remember to set `requirepass`.
Finally, I switched from redis+redisson to hazelcast. The reasons are as follows.

* simplicity of single application evolution, hazelcast is zero dependency
* performance, availability, operations and maintenance perspective, the two 50-50

About hazelcast and spring, the main management scenarios are cache, session, security

* springboot first tries to as client, then an embedded server
* spring session using @Enable*HttpSession manual configuration

The documentation is hazelcast3 configuration, the actual support 4.
The examples in the documentation are configured by coding, but can actually be configured by xml.
The system provides the multicast configuration for server and client by default.

## 3H.04.Exception Handling

You need to customize a mechanism according to spring conventions and actual needs.
But don't use `spring.mvc.throw-exception-if-no-handler-found=true`.
This is why exceptions are called exceptions, they can't be handled as normal and
avoid being used to handle normal things.

* controller layer exceptions with `@ControllerAdvice` or `@ExceptionHandler`
* service layer exceptions, do your own business processing, or AOP logging
* Static, src/main/resources/public/error/404.html
* Template, src/main/resources/templates/error/5xx.ftl
* `class MyErrorPageRegistrar implements ErrorPageRegistrar`

```java
@ControllerAdvice(basePackageClasses = AcmeController.class)
public class AcmeControllerAdvice extends ResponseEntityExceptionHandler
// ///////
public ModelAndView resolveErrorView(HttpServletRequest request,
```

[Error Handling](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#web.servlet.spring-mvc.error-handling)

## 3H.05.Warn UT026010 at startup

Undertow uses the default buffer when websocket is not configured, the warning will appears.
You need to customize `websocketServletWebServerCustomizer`

in line 68 `io.undertow.websockets.jsr.Bootstrap`, if `buffers == null`
`UT026010: Buffer pool was not set on WebSocketDeploymentInfo, the default pool will be used`
DefaultByteBufferPool(directBuffers, 1024, 100, 12);

## 3H.06.OAuth2 References

* [OAuth 2 Developers Guide](https://projects.spring.io/spring-security-oauth/docs/oauth2.html)
* [OAuth2 boot](https://docs.spring.io/spring-security-oauth2-boot/docs/current/reference/htmlsingle/)
* [Spring Security](https://docs.spring.io/spring-security/site/docs/current/reference/htmlsingle/)

## 3H.07.Configure Security

Security must be the most important part of the system, and also the focus
of penetration and attack, so slardar no default configuration.

Order can be used in the configuration to provide multiple HttpSecurity.

## 3H.08.SecurityContext in Multi-Thread

* DelegatingSecurityContext
* transmittable-thread-local

## 3H.09.Redirect After Login

SavedRequestAwareAuthenticationSuccessHandler and RequestCache can be combined.
In the case of frontend and backend separation, no backend control is needed,
so RequestCache should be disabled.

* HTTP Referrer header - some browsers don't give refer
* saving the original request in the session - need session support
* base64 original URL to the redirected login URL - the usual SSO impl

However, spring security does not support the third one by default. If you want to customize it,
you need to look at ExceptionTranslationFilter, in sendStartAuthentication method, customize the
requestCache or authenticationEntryPoint. You can also customize the loginPage through the interceptor.

* <https://www.baeldung.com/spring-security-redirect-login>
* <https://www.baeldung.com/spring-security-redirect-logged-in>

## 3H.10.Pass Array/Object by KV

In the http protocol, there is no explicitly specified method for passing arrays and objects,
so in practice, there are different default rules under spring and js systems.

* `a=1&a=2&a=3`, servlet support, spring support, js/qs need `{ indices: false }` (recommended)
* `a[]=1&a[]=2&a[]=3`, spring support, js/qs need `{ arrayFormat: 'brackets' }`
* `a[0]=1&a[1]=2&a[2]=3`, spring support, js/qs default format

servlet support mean @RequestParam also takes effect; spring support means the DataBinding

Reference,

* [qs#stringifying](https://github.com/ljharb/qs#stringifying)
* [Basic and Nested Properties](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-beans-conventions)
* [Matrix Variables](https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc-ann-matrix-variables)
