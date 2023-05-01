---
isOriginal: true
icon: question
category:
  - 鱼人
  - 话题
  - 后端
---

# 3H.后端常见话题

## 3H.01.Error creating 'hazelcastInstance'

> Error creating bean with name 'hazelcastInstance'
> Invalid content was found starting with element 'cluster-name'，

若是有以上信息，是hazelcast 3和4配置的兼容问题，boot-2.2.x为hazelcast 3.12.x

## 3H.02.修改Servlet容器

slardar 默认使用undertow，并提供 spring-servlet-server-79.properties 配置

## 3H.03.Session方案的选择

其实 hazelcast 是个不错的选择，若选用redis，切记redis必须`requirepass`。
最后，从redis+redisson的方案，切换成了hazelcast的方案。其理由如下。

* 单应用进化的简单性，hazelcast是零依赖
* 性能，可用性，运维角度，两者五五开

关于hazelcast和spring，主要的管理场景是cache,session,security

* spring-boot优先尝试创建client，不成则创建embedded server
* spring session 使用@Enable*HttpSession手动配置

文档中是hazelcast3的配置，实际支持4。
文档中的例子都是通过编码方式配置的，实际可以通过xml配置，交由boot处理。
系统默认提供了server和client的组播配置。

## 3H.04.异常处理或handler

需要根据spring约定和实际需要，自定义一套机制。
但是不要使用`spring.mvc.throw-exception-if-no-handler-found=true`，
因为，异常之所以叫异常，就不能当做正常，避免用来处理正常事情。

* controller层异常用`@ControllerAdvice`或`@ExceptionHandler`
* service层异常，自行做业务处理，或AOP日志
* 静态，src/main/resources/public/error/404.html
* 模板，src/main/resources/templates/error/5xx.ftl
* `class MyErrorPageRegistrar implements ErrorPageRegistrar`

```java
@ControllerAdvice(basePackageClasses = AcmeController.class)
public class AcmeControllerAdvice extends ResponseEntityExceptionHandler
// ///////
public ModelAndView resolveErrorView(HttpServletRequest request,
```

文档位于[Error Handling](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#web.servlet.spring-mvc.error-handling)

## 3H.05.启动时Warn UT026010

在未配置websocket时，undertow使用默认buffer，出现以下警告。
需要定制`websocketServletWebServerCustomizer`，或设置
`spring.wings.slardar.enabled.undertow-ws=true`即可

在`io.undertow.websockets.jsr.Bootstrap` 68行，`buffers == null` 时
`UT026010: Buffer pool was not set on WebSocketDeploymentInfo, the default pool will be used`
默认 DefaultByteBufferPool(directBuffers, 1024, 100, 12);

## 3H.06.OAuth2的参考资料

* [OAuth 2 Developers Guide](https://projects.spring.io/spring-security-oauth/docs/oauth2.html)
* [OAuth2 boot](https://docs.spring.io/spring-security-oauth2-boot/docs/current/reference/htmlsingle/)
* [Spring Security](https://docs.spring.io/spring-security/site/docs/current/reference/htmlsingle/)

## 3H.07.如何配置security

security一定是系统中最为重要的部分，也是所有渗透入侵的重点，所以slardar无默认配置。

配置中可以使用Order，提供多个HttpSecurity。

## 3H.08.多线程下的SecurityContext

* DelegatingSecurityContext
* transmittable-thread-local

## 3H.09.成功登陆后跳转

SavedRequestAwareAuthenticationSuccessHandler和RequestCache 进行搭配即可。
在前后端分离的情况下，不需要后端控制，所以应该关闭RequestCache。

* HTTP Referer header - 有些浏览器不给refer
* saving the original request in the session - 要session支持
* base64 original URL to the redirected login URL - 通常的SSO实现

不过，spring security默认不支持第三种。如果要定制的话，需要看ExceptionTranslationFilter，
在sendStartAuthentication方法中，对requestCache或authenticationEntryPoint上进行定制。
也可以通过interceptor对loginPage进行定制。

* <https://www.baeldung.com/spring-security-redirect-login>
* <https://www.baeldung.com/spring-security-redirect-logged-in>

## 3H.10.以KV传递数组及对象

在http协议中，没有明确的规定数组及对象的传递方法，因此实践中，spring及js体系下有不同的默认规则。

* `a=1&a=2&a=3`，servlet支持，spring支持，js的qs需要`{ indices: false }` (推荐)
* `a[]=1&a[]=2&a[]=3`，spring支持，js的qs需要`{ arrayFormat: 'brackets' }`
* `a[0]=1&a[1]=2&a[2]=3`，spring支持，js的qs默认格式

其中，servlet支持时，@RequestParam也生效；spring支持，指默认的DataBinding

参考资料

* [qs#stringifying](https://github.com/ljharb/qs#stringifying)
* [Basic and Nested Properties](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-beans-conventions)
* [Matrix Variables](https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc-ann-matrix-variables)
