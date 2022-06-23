---
isOriginal: true
icon: speed
category:
  - 鱼人
  - Mvc
---

# 3.鱼人守卫

![slardar](/slardar_icon.png)

> 大鱼人，是一个水手，他会星星点灯。

为SpringMvc(不支持WebFlux)提供i18n和security,cache,session的基础支持和封装。

## 3.1.默认方案及配置

Slardar按以下配置和架构，进行了默认优化和配置。

* `Undertow`为默认的Servlet容器
* `Hazelcast`作为`Cache`及`Session`方案
* `4核8G`的普通云服务器或容器
* 同步Service在80%情况下`30ms`完成业务
* 单机单应用TPS，99th-pct约`3k`，最高`8k`
* Nginx反向代理，提供post+json为主的服务

## 3.2.Mvc的封装加强

Slardar基于SpringMvc做了工具级封装和加强，有些仅提供能力，有些开箱即用，主要包括，

* 并发控制，多级缓存，事件的发布和订阅
* spring-boot-admin及actuator管理和监控能力
* sentry 日志收集能力
* Terminal和Security的Context
* 登录，权限，会话，令牌等控制力

## 3.3.更多章节

* [Jackson格式约定](3a-jackson.md) - Json格式约定，国际化处理
* [Hazelcast中间件](3b-hazelcast.md) - 作为session，缓存和消息中间件
* [Host继承和URL重载](3c-host-ext.md) - URL的Override，实现多Host和换肤
* [多国语和多时区](3d-i18n-zone.md) - DateTime, Validation, Locale
* [Session和认证](3e-auth-session.md) - 多种登录，多种凭证，分级权限
* [多级缓存及事件](3f-cache-event.md) - 多级缓存，多级锁，多级消息
* [后端防护功能](3g-fun-server.md) - 后端防抖，防连击，验证码，防篡改
* [后端常见话题](3h-qa-slardar.md) - 后端话题和资料
