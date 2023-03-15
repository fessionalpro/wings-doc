---
isOriginal: true
icon: emmet
category:
  - Slardar
  - Caching
  - Event
---
# 3B.Hazelcast Middleware

使用hazelcast作为session，cache和message中间件，包括，

* spring session - Hazelcast4IndexedSessionRepository
* server cache - WingsHazelcast
* global lock -  HazelcastGlobalLock
* global event - HazelcastSyncPublisher
* snowflake id - FlakeIdHazelcastImpl

## 3B.1.默认配置

* ClassNotFound - 需要设置user-code-deployment
* 重连机制，在client端，需要设置重连时间
* 数据持久化，社区版需要自行MapStore和MapLoader
* 默认开启multicast，组播地址224.0.0.1

在实际部署时，建议独立配置好hazelcast集群，使用client端链接。
集群配置，可以是`app+1`的形式，这样可保证至少一个独立存活。

一般在同一网段，内网间可以使用组播，但建议使用tcp-ip方式组网。
通过 spring.hazelcast.config 选择不同的配置文件，建议xml。

hazelcast的3和4差异很大，在SpringBoot 2.2和2.4是不兼容的。

## 3B.2.分布式锁

hazelcast提供了3类锁，推荐使用CP系统，但集群要求至少3台，默认0为单机unsafe模式。

* FencedLock - Raft的分布式锁，在CP系统(4.x)
* IMap.lock - 自动GC，干净简洁
* ILock.lock - 遵循j.u.c.Lock约定（3.12移除）

不同的工程中，需要分开设置cluster-name，避免不同项目的同名缓存出现干扰。
slardar采用了springboot默认的配置方式，client和server的配置文件如下。

* extra-conf/hazelcast-client.xml
* extra-conf/hazelcast-server.xml

若是需要独立定制，可以编程的形式暴露ClientConfig或Config Bean

参考资料如下，

* <https://hazelcast.com/blog/hazelcast-imdg-3-12-introduces-cp-subsystem/>
* <https://hazelcast.com/blog/long-live-distributed-locks/>

## 3B.3.分布式缓存

通过hazelcastCacheManager用hazelcast实现ServerCacheManager

对于hazelcast的MapConfig若无配置，则wings会根据level自动配置以下MapConf。

```xml
<time-to-live-seconds>3600</time-to-live-seconds>
<max-idle-seconds>0</max-idle-seconds>
<eviction size="5000"/>
```

## 3B.4.消息订阅

hazelcast的topic(#HazelcastTopic)按SpringEvent模式进行了包装，方便在IDE中在代码间导航，

* Event 有哪些生产者/发布
* Event 有哪些消费者/订阅
