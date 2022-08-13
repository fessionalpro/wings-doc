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
