---
isOriginal: true
icon: proxy
category:
  - 蝙蝠
  - 首页
---

# 5.蝙蝠骑士

![batrider](/batrider_icon.png)

> 只要翱翔于天空，可以从四面八方发动攻势。

ServiceComb是一种更紧凑和工程化的微服务及云实现。

## 微服务基本约定

* 通讯模型在SpringMvc中为`RestOverServlet`
* 编程模型，提供者为`SpringMvc`，消费者为`Rpc`
* 公钥认证 handler-publickey-auth
* 注册中心为 registry-zero-config
* 默认不对外提供网关
* 提供者在`provider`包，类似于`controller`
* 消费者在`consumer`包，类似于`servcomber`
* SpringMvc共存时，urlPattern为`/servcomber/*`

## 服务提供者

使用SpringMvc注解提供服务，并支持同Mvc同时提供服务

* `SchemaId`首字大写，不包含`.`字符（破坏纯yaml的契约配置）
* 建议定义服务接口，再由`@RestSchema`实现
* RequestMapping的path为全路径，不可多个
* 禁止扫描`@RestController`，仅使用`@RestSchema`
* 纯String作为body时，需要使用`MediaType.TEXT_PLAIN_VALUE`
  - consumes = MediaType.TEXT_PLAIN_VALUE
  - produces = MediaType.TEXT_PLAIN_VALUE
* Rpc类命名以java约定为准，如驼峰
* path类命名以url约定为准，如小写
* 数据类型，以json约定为准，避免使用复杂类型
  
## 服务消费者

优先使用Rpc消费服务，也可用RestTemplate简化调用

* 令`microserviceName`为`${servicecomb.service.name}`
* 令`path`为Mapping的全路径，如`/full/path/`
* Rpc以`SchemaId`和接口定位
* Rest以path定，`cse://microserviceName/path?querystring`
* 接口可为lib共享或自定义，方法签名一直即可
* `@RpcReference`只能field注入，可用`Invoker.createProxy`

## 基本工程演示

可以启动 winx-api和batrider-test工程，然后通过swagger演示

* <http://127.0.0.1:8085/swagger-ui/index.html> - swagger页面
* #/batrider-controller/batriderHello - batrider调用batrider
* #/batrider-controller/winxApiHello - batrider调用winxApi
