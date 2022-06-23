---
isOriginal: true
icon: emmet
category:
  - 鱼人
  - 缓存
  - 事件
---

# 3F.多级缓存及事件

基于Caffeine和Hazelcast，提供了多级缓存，本地及分布式缓存，分布式对象。

## 3F.1.分级缓存

默认提供JCache约定下的Memory和Server两个CacheManager，名字和实现如下，

* MemoryCacheManager caffeineCacheManager
* ServerCacheManager 如hazelcast/redis等具体实现

因为已注入了CacheManager，会使spring-boot的自动配置不满足条件而无效。 If you have not defined a bean of
type CacheManager or a CacheResolver named cacheResolver (see CachingConfigurer)
, Spring Boot tries to detect the following providers (in the indicated order):

三种不同缓存级别前缀，分别定义不同的ttl,idle,size

* `program.` - 程序级，程序或服务运行期间
* `general.` - 标准配置，1天
* `service.` - 服务级的，1小时
* `session.` - 会话级的，10分钟

具有相同前缀的cache，会采用相同的配置项(ttl,idle,size)。

```java
@CacheConfig(cacheManager = Manager.Memory, 
cacheNames = Level.GENERAL + "OperatorService")

@Cacheable(key = "'all'", 
cacheNames = Level.GENERAL + "StandardRegion", 
cacheManager = Manager.Server)

@CacheEvict(key = "'all'", 
cacheNames = Level.GENERAL + "StandardRegion", 
cacheManager = Manager.Server)
```

## 3F.2.多级事件

EventPublishHelper默认提供了3种事件发布机制，可实现，同步/异步/单机/集群的事件

* SyncSpring - 同步，spring原生的jvm内
* AsyncSpring - 异步，spring原生的jvm内，使用slardarEventExecutor线程池
* AsyncGlobal - 异步，基于topic的发布订阅机制

## 3F.3.数据CUD事件

基于jooq的listener，可获得特定表和字段的CUD事件，
默认通过AsyncGlobal发布，可供表和字段有关缓存evict
