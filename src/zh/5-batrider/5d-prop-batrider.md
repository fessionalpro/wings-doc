---
isOriginal: true
icon: folder-tree
category:
  - 蝙蝠
  - 属性
---

# 5D.蝙蝠的属性

有关Batrider微服务的设置

## 5D.1.spring-servicecomb-79.properties

Apache ServiceComb [官方文档](https://servicecomb.apache.org/references/java-chassis/zh_CN/)中的配置

### servicecomb.service.application

`String`=`${spring.application.name:batrider}` 微服务所属的应用名

### servicecomb.service.name

`String`=`${spring.application.name:batrider}` 微服务名, 应确保应用内部唯一

### servicecomb.service.version

`String`=`0.0.1` 微服务版本号

### servicecomb.service.zero-config.enabled

`Boolean`=`true` 是否使用zero-config作为服务中心

### servicecomb.service.zero-config.multicast.address

`String`=`0.0.0.0:6666` UDP的本地bind地址

### servicecomb.service.zero-config.multicast.group

`String`=`225.6.7.8` UDP multicast多播group地址

### servicecomb.service.registry.address

`List<String>`=`http://localhost:30100` 服务中心的地址信息，可以配置多个，用逗号分隔

### servicecomb.rest.address

`String`=`${server.address:localhost}:${server.port}` 服务监听地址，必须配置为与web容器监听相同

### servicecomb.rest.servlet.urlPattern

`String`=`/servcomber/*` 与springMvc同时存在路径

### server.servlet.path

`String`=`/` SpringMvc默认的路径，冲突时设置，推荐`/mvc/`

### servicecomb.provider.rest.scanRestController

`Boolean`=`false` 是否扫描RestController，即不和@RestSchema区分

### servicecomb.handler.chain.Consumer.default

`List<String>`=`loadbalance, auth-consumer` 消费者默认处理链

### servicecomb.handler.chain.Provider.default

`List<String>`=`auth9-provider` 提供者默认处理链

## 5D.2.wings-enabled-79.properties

## 5D.3.wings-servicecomb-79.properties

### wings.batrider.handler.auth-skip-schema

`Set<String>`=`scb-discovery` 不需要验证的schemaId

## 5D.4.wings-warlock-security-79.properties

### wings.warlock.security.web-ignore

`Map<String, String>`类型，`servicecomb`=`/servcomber/**` RestSchema的URL不需要servlet处理
