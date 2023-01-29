---
isOriginal: true
icon: emmet
category:
  - 鱼人
  - 缓存
  - 事件
---

# 3F.多级缓存及事件

基于Cache2k和Hazelcast，提供了分级缓存，本地及分布式缓存，分布式对象。

## 3F.1.分级缓存

默认提供JCache约定下的Memory和Server两个CacheManager，名字和实现如下，

* MemoryCacheManager - Cache2kCacheManager
* ServerCacheManager - 如hazelcast/redis等具体实现

因为已注入了CacheManager，会使SpringBoot的自动配置不满足条件而无效。

> If you have not defined a bean of type CacheManager or
> a CacheResolver named cacheResolver (see CachingConfigurer),
> Spring Boot tries to detect the following providers (in the indicated order):

三种不同缓存级别前缀，分别定义不同的ttl,idle,size

* `program.` - 程序级，程序或服务运行期间
* `general.` - 标准配置，1天
* `service.` - 服务级的，1小时
* `session.` - 会话级的，10分钟

具有相同前缀的cache，会采用相同的配置项(ttl,idle,size)。

```java
@CacheConfig(cacheManager = Manager.Memory, 
cacheNames = Level.General + "OperatorService")

@Cacheable(key = "'all'", 
cacheNames = Level.General + "StandardRegion", 
cacheManager = Manager.Server)

@CacheEvict(key = "'all'", 
cacheNames = Level.General + "StandardRegion", 
cacheManager = Manager.Server)
```

cacheName的命名要求，不可使用特殊字符，当前以`~`分隔，以`!`结尾表示Resolve扩展

* <https://github.com/cache2k/cache2k/issues/201>
* WingsCache - 具体定义的命名规则

Resolve扩展，指在`@Cache*`注解指定`cacheResolver`，忽略`cacheManager`时，
若cacheNames以`!`结尾，则会在其后追加所在类的全类名，详情参考 CacheConst，
其用途在于代码层面统一缓存名，运行时换成按impl类独立。

```java
@CacheConfig(cacheNames = CacheName, cacheResolver = CacheResolver)
public class WarlockPermServiceImpl implements WarlockPermService 
```
若上示代码中，CacheName=`WarlockPermService!`，全类名为`a.b.c.WarlockPermServiceImpl`，
则最终的缓存名为`WarlockPermService!a.b.c.WarlockPermServiceImpl`


## 3F.2.多级事件

EventPublishHelper默认提供了3种事件发布机制，可实现，同步/异步/单机/集群的事件

* SyncSpring - 同步，spring原生的jvm内
* AsyncSpring - 异步，spring原生的jvm内，使用slardarEventExecutor线程池
* AsyncGlobal - 异步，基于topic的发布订阅机制

注意，SpringBoot默认为同步的不处理异常的，以便能够很好的同步处理业务等。
SlardarAsyncConfiguration在启动后，检查这个机制，若被破坏，则以Warn输出到日志。

* ApplicationEventMulticaster - 底层处理机制
* AbstractApplicationContext#initApplicationEventMulticaster() - 默认Bean
* AbstractApplicationContext#publishEvent(Object, ResolvableType) - 入口
* SimpleApplicationEventMulticaster - 默认实现，无TaskExecutor，无ErrorHandler

## 3F.3.数据CUD事件

基于jooq的listener，可获得特定表和字段的CUD事件，
默认通过AsyncGlobal发布，可供表和字段有关缓存evict

通过`TableCudListener`和`wings.faceless.jooq.cud.table`设置，以Authn为例，
`[win_user_authn]`=`user_id,username,auth_type`，当对win_user_authn进行
Insert/Update/Delete时，都会在集群内发布携带设定的字段值TableChangeEvent。

通过以下代码，即可监听和处理，以下是根据认证表变更，而清空缓存的代码

```java
// ComboWarlockAuthnService.java 72-81
@EventListener
@CacheEvict(allEntries = true, condition = "#result")
public boolean evictAllAuthnCache(TableChangeEvent event) {
    final String tb = CacheEventHelper.fire(event, EventTables, DELETE | UPDATE);
    if (tb != null) {
        log.info("evictAllAuthnCache by {}, {}", tb, event == null ? -1 : event.getChange());
        return true;
    }
    return false;
}
```
