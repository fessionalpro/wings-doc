---
isOriginal: true
icon: speed
category:
  - 鱼人
  - 首页
---

# 3.鱼人守卫

![slardar](/slardar_icon.png)

> 大鱼人，是一个水手，他会星星点灯。

SpringMvc(不支持WebFlux)封装和扩展，如多语言，多时区，安全，缓存，会话等。

## 3.1.模块划分

* slardar - 缓存，事件，序列化等基本功能
* slardar-hazel-caching - 基于hazelcast的分布式缓存
* slardar-hazel-session - 基于hazelcast的分布式session
* slardar-webmvc - webmvc, session, security-web
* slardar-sprint - hazelcast, security-conf, admin, actuator
* slardar-test - 测试包，基础的登录

## 3.2.方案及配置

Slardar按以下配置，架构及性能指标，进行了默认配置。

* Nginx反向代理，提供post+json为主的服务
* `Undertow`为默认的Servlet容器
* `Hazelcast`作为`Cache`及`Session`方案
* 业务层在80%可以`30ms`结束，阻塞系数`0.9`
* `8核3GHz`云主机，模拟`10k*50`请求，单应用
* `95th`，response=`2s`，`tps`=`2k-5k`

## 3.3.Mvc的封装加强

Slardar基于SpringMvc做了工具级封装和加强，有些仅提供能力，有些开箱即用，主要包括，

* 并发控制，多级缓存，事件的发布和订阅
* spring-boot-admin及actuator管理和监控能力
* sentry 日志收集能力
* Terminal和Security的Context
* 登录，权限，会话，令牌等控制力

## 3.4.线程池

SlardarAsyncConfiguration提供了6个Ttl配置的线程池，前缀和用途分别如下，

* `exec-` - `spring.task.execution.`配置
  - 用于 `@Async` method
  - `app-exec-` `Callable` RequestMapping
  - `lit-exec-` AsyncHelper手动执行异步
* `task-` - `spring.task.scheduling.`配置，用于`@Scheduled`
* `event-` - `wings.slardar.async.event.`配置，Spring的Event
* `fast-` - `wings.slardar.async.fast.`配置，Wings轻任务线程

参考资料，

* <https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-ann-async.html>
* <https://docs.spring.io/spring-framework/reference/integration/scheduling.html>
* <https://docs.spring.io/spring-boot/reference/features/task-execution-and-scheduling.html>

## 3.5.更多章节

* [Jackson格式约定](./3a-jackson.md) - Json格式约定，国际化处理
* [Hazelcast中间件](./3b-hazelcast.md) - 作为session，缓存和消息中间件
* [Host继承和URL重载](./3c-host-ext.md) - URL的Override，实现多Host和换肤
* [多国语和多时区](./3d-i18n-zone.md) - DateTime, Validation, Locale
* [Session和认证](./3e-auth-session.md) - 多种登录，多种凭证，分级权限
* [多级缓存及事件](./3f-cache-event.md) - 多级缓存，多级锁，多级消息
* [后端防护功能](./3g-fun-server.md) - 后端防抖，防连击，验证码，防篡改
* [后端常见话题](./3h-qa-slardar.md) - 后端话题和资料
