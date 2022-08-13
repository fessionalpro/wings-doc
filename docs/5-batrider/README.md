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

## 5.1.微服务基本约定

* 通讯模型在SpringMvc中为`RestOverServlet`
* 编程模型，提供者为`SpringMvc`，消费者为`Rpc`
* 公钥认证`handler-publickey-auth`
* 默认`registry-zero-config`，推荐`servicecomb-service-center`
* 默认不对外提供网关，于springMvc共存
* SpringMvc共存时，urlPattern为`/servcomber/*`
* 对外的Mvc包为`controller`，Comb为`servcomber`
* 对内的Comb包为`servcomb`，提供者为`provider`，消费者`consumer`

## 5.2.基本工程演示

可以启动`winx-api`和`batrider-test`工程，然后通过swagger演示

* <http://127.0.0.1:8085/swagger-ui/index.html> - swagger页面
* #/batrider-controller/batriderHello - batrider调用batrider
* #/batrider-controller/winxApiHello - batrider调用winxApi
