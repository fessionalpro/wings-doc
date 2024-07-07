---
isOriginal: true
icon: cloud-sun
category:
  - 蝙蝠
  - 消费者
---

# 5B.服务消费者

优先使用Rpc消费服务，也可用RestTemplate简化调用

## 5B.1.消费者约定

* 令`microserviceName`为`${servicecomb.service.name}`
* 令`path`为Mapping的全路径，如`/full/path/`
* Rpc以`SchemaId`和接口定位服务
* Mvc以rest风格的url定位 `cse://microserviceName/path?querystring`
* 接口可打包成lib共享，也可自己定义，只要方法签名一致即可
* `@RpcReference`推荐setter注入(2.8.0)，也可用`Invoker.createProxy`

## 5B.2.消费方式转换

以调用winx-api的sayHello为例，其配置如下，

* `servicecomb.service.name`=`winx-api`
* `schemaId`为`@RestSchema(schemaId = "winx-hello")`
* base path为`@RequestMapping(path = "/")`
* path为`@RequestMapping(path = "/winx-hello/say-hello")`

其自动生成的swagger摘要信息如下

```yml
basePath: "/"
schemes:
- "http"
paths:
  /winx-hello/say-hello:
    get:
      operationId: "sayHello"
      produces:
      - "text/plain"
      parameters:
      - name: "name"
        in: "query"
        required: true
        type: "string"
```

以下的调用方式都可以访问此服务，

* `@RpcReference(microserviceName = "winx-api", schemaId = "winx-hello")`
* restTemplate `cse://winx-api/winx-hello/say-hello?name=bbb`
* 有验证 `http://localhost:8095/servcomber/winx-hello/say-hello?name=null`
* 无验证 `http://localhost:8085/servcomber/batrider-hello/say-hello?name=undefined`

通过观察`OperationLocator`可以确认，他们的区别如下，

* Rpc根据microserviceName和schemaId以及方法operationId定位
* restTemplate通过microserviceName和path定位
* broswer http 通过endpoint的ip端口，rest前缀和path定位
* path为`basePath`+`paths`，basePath默认为`/`
