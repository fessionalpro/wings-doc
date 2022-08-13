---
isOriginal: true
icon: proxy
category:
  - 蝙蝠
  - 消费者
---

# 5B.服务消费者

优先使用Rpc消费服务，也可用RestTemplate简化调用

## 5B.1.消费者约定

* 令`microserviceName`为`${servicecomb.service.name}`
* 令`path`为Mapping的全路径，如`/full/path/`
* Rpc以`SchemaId`和接口定位
* Rest以path定，`cse://microserviceName/path?querystring`
* 接口可为lib共享或自定义，方法签名一直即可
* `@RpcReference`只能field注入，可用`Invoker.createProxy`
