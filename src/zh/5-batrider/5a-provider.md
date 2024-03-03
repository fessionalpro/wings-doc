---
isOriginal: true
icon: cache
category:
  - 蝙蝠
  - 提供者
---

# 5A.服务提供者

使用SpringMvc注解提供服务，并支持同WebMvc同时提供服务

## 5A.1.提供者约定

* 纯接口和pojo定义契约，避免Overloading，如`HelloContract`
* `SchemaId`和`path`均为烤串命名法，即小写连字符
* 包工头`@RestSchema`实现契约，如`HelloContractor`
* 若有Overloading，以不同的path后缀区分，path全局唯一
* 仅使用`@RestSchema`，禁止扫描`@RestController`

## 5A.2.数据类型约定

数据类型，以Wings的Json约定为准，避免使用复杂类型及结构。

纯String作为body时，Request的`consumes`和Response的`produces`
都需要使用`MediaType.TEXT_PLAIN_VALUE`，这一点和Spring不同。

## 5A.3.契约风格约定

契约有Mvc和Rpc两种风格，都可以方便定位和理解。

### 3a.Mvc风格，basePath为根路径

同wings中Controller及RequestMapping约定一致。

* 类上的basePath为`/`或`/v1`，即根路径或版本号
* 方法的`@RequestMapping`为全路径，以`SchemaId`开头

```java
@RestSchema(schemaId = "batrider-hello")
@RequestMapping(path = "/")
public class BatriderContractor implements HelloContract {

    @RequestMapping(path = "/batrider-hello/say-hello", 
    method = RequestMethod.GET, produces = MediaType.TEXT_PLAIN_VALUE)
    @ResponseBody
    @Override
    public String sayHello(@RequestParam(name = "name") String name) {
        return "Batrider: Hello " + name;
    }
}
```

### 3b.Rpc风格，basePath指定SchemaId

通过IDE联想更容易定位，把SchemaId置于契约接口中，

```java
public interface HelloContract {
    String SchemaId = "winx-hello";
    String sayHello(String name);
}
```

在实现类，提供者直接使用契约上的SchemaId

```java
@RestSchema(schemaId = HelloContract.SchemaId)
@RequestMapping(path = HelloContract.SchemaId)
public class HelloContractor implements HelloContract {

    @RequestMapping(path = "/say-hello", 
    method = RequestMethod.GET, produces = MediaType.TEXT_PLAIN_VALUE)
    @ResponseBody
    @Override
    public String sayHello(@RequestParam(name = "name") String name) {
        return "Winx: Hello " + name;
    }
}
```
