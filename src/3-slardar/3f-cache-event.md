---
isOriginal: true
icon: emmet
category:
  - Slardar
  - Caching
  - Event
---

# 3F.Multiple Caching and Event

Based on Cache2k and Hazelcast, Wings provides hierarchical caching,
local and distributed caching, and distributed objects.

## 3F.1.Multilevel Caching

By default, two CacheManagers, Memory and Server, with the following names and implementations,
are provided under the JCache convention,

* MemoryCacheManager - Cache2kCacheManager
* ServerCacheManager - such as hazelcast/redis and other

Because the CacheManager has been injected, it will make SpringBoot's auto configuration does
not meet the conditions and invalid.

> If you have not defined a bean of type CacheManager or
> a CacheResolver named cacheResolver (see CachingConfigurer),
> Spring Boot tries to detect the following providers (in the indicated order):

Three different cache level prefixes with a different ttl,idle,size

* `program.` - program level, lifetime of the program or service
* `general.` - default configuration, 1 day
* `service.` - service-level, 1 hour
* `session.` - session-level, 10 minutes

A cache with the same prefix will use the same configuration items (ttl,idle,size).

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

The naming requirements for cacheName are no special characters. currently separated by `~` and
ending with `!` means Resolve extension,

* <https://github.com/cache2k/cache2k/issues/201>
* WingsCache - naming rules for specific definitions

Resolve extension means when specifying `cacheResolver` and ignoring `cacheManager` in the `@Cache*` annotation,
If cacheNames ends with `!`, it will be appended with the full class name, see CacheConst for details.
Its use is to unify cache names at the code level, and change them at runtime to the impl class.

```java
@CacheConfig(cacheNames = CacheName, cacheResolver = CacheResolver)
public class WarlockPermServiceImpl implements WarlockPermService 
```

The code shown above has CacheName=`WarlockPermService!` and the full class name is `a.b.c.WarlockPermServiceImpl`,
then the final cache name is `WarlockPermService!a.b.c.WarlockPermServiceImpl`.

## 3F.2.Multilevel Event

EventPublishHelper provides 3 types of event publishing by default, implementing
synchronous/asynchronous/standalone/clustered events,

* SyncSpring - synchronous, within the Spring jvm
* AsyncSpring - asynchronous, within the Spring jvm, using slardarEventExecutor thread pool
* AsyncGlobal - asynchronous, topic-based publish-subscribe mechanism

Note that SpringBoot by default is synchronous and withou exception handling, so that it can be well
synchronized to handle business etc. SlardarAsyncConfiguration checks this mechanism at startup and
will log a Warn if it is broken.

* ApplicationEventMulticaster - the underlying processing mechanism
* AbstractApplicationContext#initApplicationEventMulticaster() - default bean
* AbstractApplicationContext#publishEvent(Object, ResolvableType) - entry
* SimpleApplicationEventMulticaster - default implementation, no TaskExecutor, no ErrorHandler

## 3F.3.Data CUD Event

jooq-based listener that handles CUD events for specific tables and fields.
Posted by default via AsyncGlobal, available for table and field related cache evictions

set via `TableCudListener` and `wings.faceless.jooq.cud.table`, using RuntimeConf as an example
`[win_conf_runtime]`=`key,current,handler`, when doing Insert/Update/Delete,
the TableChangeEvent with the set field value is published within the cluster.

The following code can be used to listen and process, and the following code is used to clear the cache
according to the authentication table changes,

```java
// RuntimeConfServiceImpl.java 137-147
@EventListener
@CacheEvict(allEntries = true, condition = "#result")
public boolean evictAllConfCache(TableChangeEvent event) {
    final String tb = CacheEventHelper.receiveTable(event, EventTables, DELETE | UPDATE);
    if (tb != null) {
        log.info("evictAllConfCache by {}, {}", tb, event.getChange());
        return true;
    }

    return false;
}
```

TableChangeEvent can be triggered automatically by tables and fields in `wings.faceless.jooq.cud.table`.
It can be triggered manually by injecting WingsTableCudHandler. But if there is an automatic trigger,
the manual trigger will be ignored.

Note that the `@Cacheable` series of annotations, default enhanced by proxy-based AOP, is only available for proxy objects,
the following cases can not access the proxy object.

* Internal calls - methods within a class are called from within the class.
* Inheritance calls - `default` methods on an interface call `abstarct` methods.
* Static methods - Enhancements cannot be applied to static methods.

The following programming pattern can get the self reference inside the object,

* independent caching component, see `WarlockPermServiceImpl`
* inject and invoke itself, see `RuntimeConfServiceImpl`

```java
// cache self-invoke
@Setter(onMethod_ = {@Autowired, @Lazy})
protected RuntimeConfServiceImpl selfLazy;
// interface method
@Override
public <T> T getObject(String key, TypeDescriptor type) {
    // @Cacheable method with Cache surfix
    return selfLazy.getObjectCache(key, type);
}
```
