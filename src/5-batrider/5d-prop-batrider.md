---
isOriginal: true
icon: folder-tree
category:
  - Batrider
  - Property
---

# 5D.Batrider Properties

Properties of servicecomb as microservices.

## 5D.1.spring-servicecomb-79.properties

Apache ServiceComb [Official Document](https://servicecomb.apache.org/references/java-chassis/en_US/) Configuration.

### servicecomb.service.application

`String`=`${spring.application.name:batrider}` the name of the application that microservices belongs to.

### servicecomb.service.name

`String`=`${spring.application.name:batrider}` microservice names, which should be unique within the application.

### servicecomb.service.version

`String`=`0.0.1`, microservice version.

### servicecomb.service.zero-config.enabled

`Boolean`=`true`, whether to use zero-config as the service-center.

### servicecomb.service.zero-config.multicast.address

`String`=`0.0.0.0:6666`, address for UDP.

### servicecomb.service.zero-config.multicast.group

`String`=`225.6.7.8`, multicast group address of UDP.

### servicecomb.service.registry.address

`List<String>`=`http://localhost:30100`, service center address,
multiple addresses separated by commas.

### servicecomb.rest.address

`String`=`${server.address:localhost}:${server.port}`, service listen address,
must be configured as the same as the web container.

### servicecomb.rest.servlet.urlPattern

`String`=`/servcomber/*`, coexisting paths with springMvc.

### server.servlet.path

`String`=`/`, default path of SpringMvc, in case of conflict `/mvc/` is recommended.

### servicecomb.provider.rest.scanRestController

`Boolean`=`false`, whether to scan the RestController, i.e. not distinguish from @RestSchema.

### servicecomb.handler.chain.Consumer.default

`List<String>`=`loadbalance, auth-consumer`, default handler chain of Consumer.

### servicecomb.handler.chain.Provider.default

`List<String>`=`auth9-provider`, default handler chain of Provider.

## 5D.2.wings-enabled-79.properties

## 5D.3.wings-servicecomb-79.properties

### wings.batrider.handler.auth-skip-schema

`Set<String>`=`scb-discovery`, which schemaId skip to auth.

## 5D.4.wings-warlock-security-79.properties

### wings.warlock.security.web-ignore

`Map<String, String>`, `servicecomb`=`/servcomber/**`, RestSchema URLs without servlet processing.
