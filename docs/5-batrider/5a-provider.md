---
isOriginal: true
icon: proxy
category:
  - 蝙蝠
  - 提供者
---

# 5A.服务提供者

使用SpringMvc注解提供服务，并支持同Mvc同时提供服务

## 5A.1.提供者约定

* 纯接口和pojo定义契约，避免多态，如`HelloContract`
* `SchemaId`和`path`均为烤串命名法，即小写连字符
* 包工头`@RestSchema`实现契约，如`HelloContractor`
* 类的`@RequestMapping(path = "/")`为basePath
* 方法的`@RequestMapping`为全路径，以`SchemaId`开头
* 若有多态方法，以不同的path后缀区分，path全局唯一
* 仅使用`@RestSchema`，禁止扫描`@RestController`

## 5A.2.契约类型约定

* 纯String作为body时，需要使用`MediaType.TEXT_PLAIN_VALUE`
  - consumes = MediaType.TEXT_PLAIN_VALUE
  - produces = MediaType.TEXT_PLAIN_VALUE
* 数据类型，以wings中json约定为准，避免使用复杂类型
