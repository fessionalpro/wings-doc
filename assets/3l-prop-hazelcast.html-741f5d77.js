import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as n,c as d,b as e,e as a,d as i,f as o}from"./app-76302e33.js";const r={},l=e("h1",{id:"_3l-hazelcast-properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3l-hazelcast-properties","aria-hidden":"true"},"#"),a(" 3L.Hazelcast Properties")],-1),h=e("p",null,"Properties of Hazelcast in Slardar.",-1),p={href:"https://docs.hazelcast.com/imdg/4.2/system-properties",target:"_blank",rel:"noopener noreferrer"},g={href:"https://docs.hazelcast.com/imdg/4.2/management/diagnostics",target:"_blank",rel:"noopener noreferrer"},m=o('<h2 id="_3l-1-wings-prop-promotion-cnf" tabindex="-1"><a class="header-anchor" href="#_3l-1-wings-prop-promotion-cnf" aria-hidden="true">#</a> 3L.1.wings-prop-promotion.cnf</h2><ul><li>spring.session.hazelcast.map-name</li><li>wings.slardar.hazelcast.cluster-name</li><li>spring.boot.admin.hazelcast.event-store</li><li>spring.boot.admin.hazelcast.sent-notifications</li><li>hazelcast.jmx</li><li>hazelcast.diagnostics.enabled</li><li>hazelcast.diagnostics.metric.level</li><li>hazelcast.diagnostics.pending.invocations.period.seconds</li><li>hazelcast.diagnostics.slowoperations.period.seconds</li><li>hazelcast.diagnostics.directory</li><li>hazelcast.diagnostics.filename.prefix</li><li>hazelcast.diagnostics.max.rolled.file.size.mb</li><li>hazelcast.diagnostics.max.rolled.file.count</li><li>hazelcast.diagnostics.metrics.period.seconds</li><li>hazelcast.diagnostics.invocation.sample.period.seconds</li><li>hazelcast.diagnostics.invocation.slow.threshold.seconds</li><li>hazelcast.diagnostics.invocation-profiler.period.seconds</li><li>hazelcast.diagnostics.operation-profiler.period.seconds</li><li>hazelcast.diagnostics.memberinfo.period.second</li><li>hazelcast.diagnostics.event.queue.period.seconds</li><li>hazelcast.diagnostics.event.queue.threshold</li><li>hazelcast.diagnostics.event.queue.samples</li><li>hazelcast.diagnostics.systemlog.enabled</li><li>hazelcast.diagnostics.systemlog.partitions</li><li>hazelcast.diagnostics.storeLatency.period.seconds</li><li>hazelcast.diagnostics.storeLatency.reset.period.seconds</li><li>hazelcast.diagnostics.operation-heartbeat.seconds</li><li>hazelcast.diagnostics.operation-heartbeat.max-deviation-percentage</li><li>hazelcast.diagnostics.member-heartbeat.seconds</li><li>hazelcast.diagnostics.member-heartbeat.max-deviation-percentage</li><li>hazelcast.diagnostics.operationthreadsamples.period.seconds</li><li>hazelcast.diagnostics.operationthreadsamples.sampler.period.millis</li><li>hazelcast.diagnostics.operationthreadsamples.includeName</li><li>hazelcast.diagnostics.wan.period.seconds</li></ul><h2 id="_3l-2-spring-hazelcast-77-properties" tabindex="-1"><a class="header-anchor" href="#_3l-2-spring-hazelcast-77-properties" aria-hidden="true">#</a> 3L.2.spring-hazelcast-77.properties</h2><p>If you use spring variables in xml, you need to use wings-prop-promotion.cnf to put them into system. Resource, <code>file:/data/xxx</code>, <code>http://www</code>, <code>classpath:/xxx</code></p><h3 id="spring-hazelcast-config" tabindex="-1"><a class="header-anchor" href="#spring-hazelcast-config" aria-hidden="true">#</a> spring.hazelcast.config</h3><ul><li><code>classpath:/extra-conf/hazelcast-client.xml</code> - client config</li><li><code>classpath:/extra-conf/hazelcast-server.xml</code> - server config</li></ul><h2 id="_3l-3-spring-session-77-properties" tabindex="-1"><a class="header-anchor" href="#_3l-3-spring-session-77-properties" aria-hidden="true">#</a> 3L.3.spring-session-77.properties</h2><p>When hazelcast is imported, the session is managed by Hazelcast, and the number 77 has a higher priority than the default.</p><h3 id="spring-session-store-type" tabindex="-1"><a class="header-anchor" href="#spring-session-store-type" aria-hidden="true">#</a> spring.session.store-type</h3><p><code>String</code>=<code>hazelcast</code></p><h2 id="_3l-4-wings-hazelcast-77-properties" tabindex="-1"><a class="header-anchor" href="#_3l-4-wings-hazelcast-77-properties" aria-hidden="true">#</a> 3L.4.wings-hazelcast-77.properties</h2><p>Hazelcast default value for monitoring and diagnostics.</p>',12),z={href:"https://docs.hazelcast.com/imdg/4.2/management/diagnostics",target:"_blank",rel:"noopener noreferrer"},u={href:"https://codecentric.github.io/spring-boot-admin/current/#clustering-support",target:"_blank",rel:"noopener noreferrer"},f=o('<h3 id="wings-slardar-hazelcast-cluster-name" tabindex="-1"><a class="header-anchor" href="#wings-slardar-hazelcast-cluster-name" aria-hidden="true">#</a> wings.slardar.hazelcast.cluster-name</h3><p><code>String</code>=<code>wings-${git.commit.id.full}</code>, Change the cluster name by yourself.</p><p>Since there is no security setting in the community version, anyone can join by cluster name, so it is recommended to use a password-like name, such as a 32-character random number, to avoid scanning.</p><h3 id="wings-slardar-hazelcast-diagnostics-period-seconds" tabindex="-1"><a class="header-anchor" href="#wings-slardar-hazelcast-diagnostics-period-seconds" aria-hidden="true">#</a> wings.slardar.hazelcast.diagnostics.period-seconds</h3><p><code>Integer</code>=<code>600</code>, diagnostics period.</p><h3 id="spring-boot-admin-hazelcast-event-store" tabindex="-1"><a class="header-anchor" href="#spring-boot-admin-hazelcast-event-store" aria-hidden="true">#</a> spring.boot.admin.hazelcast.event-store</h3><p><code>String</code>=<code>spring-boot-admin-event-store</code></p><p>Name of the Hazelcast-map to store the events</p><h3 id="spring-boot-admin-hazelcast-sent-notifications" tabindex="-1"><a class="header-anchor" href="#spring-boot-admin-hazelcast-sent-notifications" aria-hidden="true">#</a> spring.boot.admin.hazelcast.sent-notifications</h3><p><code>String</code>=<code>spring-boot-admin-sent-notifications</code></p><p>Name of the Hazelcast-map used to deduplicate the notifications.</p><h3 id="hazelcast-jmx" tabindex="-1"><a class="header-anchor" href="#hazelcast-jmx" aria-hidden="true">#</a> hazelcast.jmx</h3><p><code>Boolean</code>=<code>${spring.jmx.enabled:false}</code>, whether to enable jmx</p><h3 id="hazelcast-diagnostics-enabled" tabindex="-1"><a class="header-anchor" href="#hazelcast-diagnostics-enabled" aria-hidden="true">#</a> hazelcast.diagnostics.enabled</h3><p><code>Boolean</code>=<code>false</code>, disable by default, due to high CPU usage.</p><h3 id="hazelcast-diagnostics-others" tabindex="-1"><a class="header-anchor" href="#hazelcast-diagnostics-others" aria-hidden="true">#</a> hazelcast.diagnostics others</h3><p>Set spring property to Hazelcast through property promoting.</p><ul><li><code>hazelcast.diagnostics.metric.level</code>=<code>info</code></li><li><code>hazelcast.diagnostics.filename.prefix</code>=<code>${spring.application.name:wings-default}</code></li><li><code>hazelcast.diagnostics.pending.invocations.period.seconds</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li><li><code>hazelcast.diagnostics.slowoperations.period.seconds</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li><li><code>hazelcast.diagnostics.metrics.period.seconds</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li><li><code>hazelcast.diagnostics.invocation.sample.period.seconds</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li><li><code>hazelcast.diagnostics.invocation-profiler.period.seconds</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li><li><code>hazelcast.diagnostics.operation-profiler.period.seconds</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li><li><code>hazelcast.diagnostics.memberinfo.period.second</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li><li><code>hazelcast.diagnostics.storeLatency.period.seconds</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li><li><code>hazelcast.diagnostics.operationthreadsamples.period.seconds</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li></ul>',18);function b(_,x){const s=c("ExternalLinkIcon");return n(),d("div",null,[l,h,e("ul",null,[e("li",null,[e("a",p,[a("https://docs.hazelcast.com/imdg/4.2/system-properties"),i(s)])]),e("li",null,[e("a",g,[a("https://docs.hazelcast.com/imdg/4.2/management/diagnostics"),i(s)])])]),m,e("ul",null,[e("li",null,[e("a",z,[a("https://docs.hazelcast.com/imdg/4.2/management/diagnostics"),i(s)])]),e("li",null,[e("a",u,[a("https://codecentric.github.io/spring-boot-admin/current/#clustering-support"),i(s)])])]),f])}const y=t(r,[["render",b],["__file","3l-prop-hazelcast.html.vue"]]);export{y as default};
