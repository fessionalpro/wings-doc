---
isOriginal: true
icon: cloud-sun
category:
  - Batrider
  - Consumer
---

# 5B.Service Consumer

Prefer to use the Rpc to consum service, also use RestTemplate to simplify the call.

## 5B.1.Consumer Convention

* Let `microserviceName` be `${servicecomb.service.name}`
* Let `path` be the full path to the Mapping, e.g. `/full/path/`
* Rpc locates the service with `SchemaId` and interface
* Mvc locates the service with a rest-style url `cse://microserviceName/path?querystring`
* Interfaces can be packaged as lib shares or defined by yourself, just make sure the same method signatures
* `@RpcReference` recommends setter injection (2.8.0), also use `Invoker.createProxy`

## 5B.2.Consume Style Conversion

Take the call to winx-api's sayHello as an example, its configuration is as follows.

* `servicecomb.service.name`=`winx-api`
* `schemaId` is `@RestSchema(schemaId = "winx-hello")`
* base path is `@RequestMapping(path = "/")`
* path is `@RequestMapping(path = "/winx-hello/say-hello")`

The summary of the auto-generation swagger information is as follows,

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

This service can be accessed by the following call style.

* `@RpcReference(microserviceName = "winx-api", schemaId = "winx-hello")`
* restTemplate `cse://winx-api/winx-hello/say-hello?name=bbb`
* with auth `http://localhost:8095/servcomber/winx-hello/say-hello?name=null`
* witout auth `http://localhost:8085/servcomber/batrider-hello/say-hello?name=undefined`

Tracing the `OperationLocator`, we find the difference as follows.

* Rpc locates by microserviceName, schemaId and method operationId
* restTemplate is located by microserviceName and path
* broswer http is located by endpoint ip and port, rest prefix and path
* path is `basePath` + `paths`, basePath is `/` by default
