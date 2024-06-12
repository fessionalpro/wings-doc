---
isOriginal: true
icon: folder-tree
category:
  - Slardar
  - Property
---

# 3L.Hazelcast Properties

Properties of  Hazelcast in Slardar.

* <https://docs.hazelcast.com/imdg/4.2/system-properties>
* <https://docs.hazelcast.com/imdg/4.2/management/diagnostics>

## 3L.1.wings-prop-promotion.cnf

* spring.session.hazelcast.map-name
* wings.slardar.hazelcast.cluster-name
* spring.boot.admin.hazelcast.event-store
* spring.boot.admin.hazelcast.sent-notifications
* hazelcast.jmx
* hazelcast.diagnostics.enabled
* hazelcast.diagnostics.metric.level
* hazelcast.diagnostics.pending.invocations.period.seconds
* hazelcast.diagnostics.slowoperations.period.seconds
* hazelcast.diagnostics.directory
* hazelcast.diagnostics.filename.prefix
* hazelcast.diagnostics.max.rolled.file.size.mb
* hazelcast.diagnostics.max.rolled.file.count
* hazelcast.diagnostics.metrics.period.seconds
* hazelcast.diagnostics.invocation.sample.period.seconds
* hazelcast.diagnostics.invocation.slow.threshold.seconds
* hazelcast.diagnostics.invocation-profiler.period.seconds
* hazelcast.diagnostics.operation-profiler.period.seconds
* hazelcast.diagnostics.memberinfo.period.second
* hazelcast.diagnostics.event.queue.period.seconds
* hazelcast.diagnostics.event.queue.threshold
* hazelcast.diagnostics.event.queue.samples
* hazelcast.diagnostics.systemlog.enabled
* hazelcast.diagnostics.systemlog.partitions
* hazelcast.diagnostics.storeLatency.period.seconds
* hazelcast.diagnostics.storeLatency.reset.period.seconds
* hazelcast.diagnostics.operation-heartbeat.seconds
* hazelcast.diagnostics.operation-heartbeat.max-deviation-percentage
* hazelcast.diagnostics.member-heartbeat.seconds
* hazelcast.diagnostics.member-heartbeat.max-deviation-percentage
* hazelcast.diagnostics.operationthreadsamples.period.seconds
* hazelcast.diagnostics.operationthreadsamples.sampler.period.millis
* hazelcast.diagnostics.operationthreadsamples.includeName
* hazelcast.diagnostics.wan.period.seconds

## 3L.2.spring-hazelcast-77.properties

If you use spring variables in xml, you need to use wings-prop-promotion.cnf to put them into system.
Resource, `file:/data/xxx`, `http://www`, `classpath:/xxx`

### spring.hazelcast.config

* `classpath:/extra-conf/hazelcast-client.xml` - client config
* `classpath:/extra-conf/hazelcast-server.xml` - server config

## 3L.3.spring-session-77.properties

When hazelcast is imported, the session is managed by Hazelcast, and the
number 77 has a higher priority than the default.

### spring.session.store-type

`String`=`hazelcast`

## 3L.4.wings-hazelcast-77.properties

Hazelcast default value for monitoring and diagnostics.

* <https://docs.hazelcast.com/imdg/4.2/management/diagnostics>
* <https://codecentric.github.io/spring-boot-admin/current/#clustering-support>

### wings.slardar.hazelcast.cluster-name

`String`=`wings-${git.commit.id.full}`, Change the cluster name by yourself.

Since there is no security setting in the community version, anyone can join by cluster name, so it
is recommended to use a password-like name, such as a 32-character random number, to avoid scanning.

### wings.slardar.hazelcast.diagnostics.period-seconds

`Integer`=`600`, diagnostics period.

### spring.boot.admin.hazelcast.event-store

`String`=`spring-boot-admin-event-store`

Name of the Hazelcast-map to store the events

### spring.boot.admin.hazelcast.sent-notifications

`String`=`spring-boot-admin-sent-notifications`

Name of the Hazelcast-map used to deduplicate the notifications.

### hazelcast.jmx

`Boolean`=`${spring.jmx.enabled:false}`, whether to enable jmx

### hazelcast.diagnostics.enabled

`Boolean`=`false`, disable by default, due to high CPU usage.

### hazelcast.diagnostics others

Set spring property to Hazelcast through property promoting.

* `hazelcast.diagnostics.metric.level`=`info`
* `hazelcast.diagnostics.filename.prefix`=`${spring.application.name:wings-default}`
* `hazelcast.diagnostics.pending.invocations.period.seconds`=`${wings.slardar.hazelcast.diagnostics.period-seconds}`
* `hazelcast.diagnostics.slowoperations.period.seconds`=`${wings.slardar.hazelcast.diagnostics.period-seconds}`
* `hazelcast.diagnostics.metrics.period.seconds`=`${wings.slardar.hazelcast.diagnostics.period-seconds}`
* `hazelcast.diagnostics.invocation.sample.period.seconds`=`${wings.slardar.hazelcast.diagnostics.period-seconds}`
* `hazelcast.diagnostics.invocation-profiler.period.seconds`=`${wings.slardar.hazelcast.diagnostics.period-seconds}`
* `hazelcast.diagnostics.operation-profiler.period.seconds`=`${wings.slardar.hazelcast.diagnostics.period-seconds}`
* `hazelcast.diagnostics.memberinfo.period.second`=`${wings.slardar.hazelcast.diagnostics.period-seconds}`
* `hazelcast.diagnostics.storeLatency.period.seconds`=`${wings.slardar.hazelcast.diagnostics.period-seconds}`
* `hazelcast.diagnostics.operationthreadsamples.period.seconds`=`${wings.slardar.hazelcast.diagnostics.period-seconds}`
