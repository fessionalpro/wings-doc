---
isOriginal: true
icon: screwdriver-wrench
category:
  - 蝙蝠
  - 首页
---

# 5.蝙蝠骑士

![batrider](/batrider_icon.png)

> 只要翱翔于天空，可以从四面八方发动攻势。

ServiceComb是一种更紧凑和工程化的微服务及云实现。

## 5.1.模块划分

* batrider - 基于servicecomb的基本设置
* batrider-zero - 组播的registry-zero-config
* batrider-test - 测试包，混合rest和rpc

## 5.2.微服务基本约定

* 通讯模型，与SpringMvc共存时为`RestOverServlet`
* 编程模型，提供者为`SpringMvc`，消费者为`Rpc`
* 身份验证，为公私钥`handler-publickey-auth`
* rest.urlPattern为`/servcomber/*`
* 契约为纯`interface`，后缀为`Contract`（相对于`Service`）
* 提供者，后缀为`Contractor`（对比`Controller`），包为`contractor`
* 消费者，后缀为`Contract`的接口及注入字段
* 默认`registry-zero-config`，推荐`servicecomb-service-center`
* 默认不对外提供网关，与springMvc共存
* 异步仅在消费者端实现，提供者默认都是同步服务

## 5.3.基本工程演示

可以启动`winx-api`和`batrider-test`工程，然后通过swagger演示

* <http://localhost:8085/swagger-ui/index.html#/batrider-controller> - swagger页面
* /batrider/batx-hello-pxy - 通过Invoker调用batrider服务
* /batrider/winx-hello-cse - 通过Rest的cse调用winx服务
* /batrider/winx-hello-rpc - 通过Rpc调用winx服务
