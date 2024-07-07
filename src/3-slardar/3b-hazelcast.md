---
isOriginal: true
icon: layer-group
category:
  - Slardar
  - Caching
  - Event
---
# 3B.Hazelcast Middleware

Using hazelcast as session, cache and messaging middleware, including,

* spring session - Hazelcast4IndexedSessionRepository
* server cache - WingsHazelcast
* global lock -  HazelcastGlobalLock
* global event - HazelcastSyncPublisher
* snowflake id - FlakeIdHazelcastImpl

## 3B.1.Default Configuration

* ClassNotFound - user-code-deployment must be set
* Reconnection mechanism, set the reconnection time on the client side
* Data persistence, the community version requires DIY MapStore and MapLoader
* Multicast is enabled by default, address is 224.0.0.1

In the actual, it is recommended to deploy hazelcast cluster independently and use the client to connect.
Cluster configuration should be `app+1`, so that at least one survives.

Generally in the same network, you can use multicast between intranets, but it is recommended to use the tcp-ip
method of networking. Choose a different configuration file via spring.hazelcast.config, xml is recommended.

hazelcast 3 and 4 are very different and are not compatible in SpringBoot 2.2 and 2.4.

## 3B.2.Distributed Lock

Hazelcast provides 3 types of locks, CP system is recommended, but the cluster needs at least 3 units,
the default 0 is single unsafe mode.

* FencedLock - Raft's distributed lock, in CP system (4.x)
* IMap.lock - automatic GC, clean and simple
* ILock.lock - follow j.u.c.Lock convention (removed in 3.12)

Different projects need to set cluster-name separately to avoid interference from caches with the same name
in different projects. slardar uses the default springboot configuration, the client and server configuration
files are as follows.

* extra-conf/hazelcast-client.xml
* extra-conf/hazelcast-server.xml

If independent customization is required, the ClientConfig or Config bean can be exposed programmatically,
See the following.

* <https://hazelcast.com/blog/hazelcast-imdg-3-12-introduces-cp-subsystem/>
* <https://hazelcast.com/blog/long-live-distributed-locks/>

## 3B.3.Distributed Cache

Implement ServerCacheManager with hazelcast through hazelcastCacheManager

For hazelcast's MapConfig, if there is no configuration, wings will automatically configure
the following MapConf according to the level.

```xml
<time-to-live-seconds>3600</time-to-live-seconds>
<max-idle-seconds>0</max-idle-seconds>
<eviction size="5000"/>
```

## 3B.4.Message Subscription

Hazelcast's topic (#HazelcastTopic) is wrapped in the SpringEvent pattern for easy navigation between code in the IDE, and

* What producers/publishers does the Event has
* What consumers/subscribers the Event has
