import{_ as t,X as c,Y as n,$ as e,a1 as a,a0 as i,a3 as o,C as d}from"./framework-a66c2b6a.js";const l={},r=e("h1",{id:"_3l-hazelcast-properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3l-hazelcast-properties","aria-hidden":"true"},"#"),a(" 3L.Hazelcast Properties")],-1),h=e("p",null,"有关Slardar中提供的Hazelcast的设置",-1),p={href:"https://docs.hazelcast.com/imdg/4.2/system-properties",target:"_blank",rel:"noopener noreferrer"},g={href:"https://docs.hazelcast.com/imdg/4.2/management/diagnostics",target:"_blank",rel:"noopener noreferrer"},z=o('<h2 id="_3l-1-wings-prop-promotion-cnf" tabindex="-1"><a class="header-anchor" href="#_3l-1-wings-prop-promotion-cnf" aria-hidden="true">#</a> 3L.1.wings-prop-promotion.cnf</h2><ul><li>spring.session.hazelcast.map-name</li><li>wings.slardar.hazelcast.cluster-name</li><li>spring.boot.admin.hazelcast.event-store</li><li>spring.boot.admin.hazelcast.sent-notifications</li><li>hazelcast.jmx</li><li>hazelcast.diagnostics.enabled</li><li>hazelcast.diagnostics.metric.level</li><li>hazelcast.diagnostics.pending.invocations.period.seconds</li><li>hazelcast.diagnostics.slowoperations.period.seconds</li><li>hazelcast.diagnostics.directory</li><li>hazelcast.diagnostics.filename.prefix</li><li>hazelcast.diagnostics.max.rolled.file.size.mb</li><li>hazelcast.diagnostics.max.rolled.file.count</li><li>hazelcast.diagnostics.metrics.period.seconds</li><li>hazelcast.diagnostics.invocation.sample.period.seconds</li><li>hazelcast.diagnostics.invocation.slow.threshold.seconds</li><li>hazelcast.diagnostics.invocation-profiler.period.seconds</li><li>hazelcast.diagnostics.operation-profiler.period.seconds</li><li>hazelcast.diagnostics.memberinfo.period.second</li><li>hazelcast.diagnostics.event.queue.period.seconds</li><li>hazelcast.diagnostics.event.queue.threshold</li><li>hazelcast.diagnostics.event.queue.samples</li><li>hazelcast.diagnostics.systemlog.enabled</li><li>hazelcast.diagnostics.systemlog.partitions</li><li>hazelcast.diagnostics.storeLatency.period.seconds</li><li>hazelcast.diagnostics.storeLatency.reset.period.seconds</li><li>hazelcast.diagnostics.operation-heartbeat.seconds</li><li>hazelcast.diagnostics.operation-heartbeat.max-deviation-percentage</li><li>hazelcast.diagnostics.member-heartbeat.seconds</li><li>hazelcast.diagnostics.member-heartbeat.max-deviation-percentage</li><li>hazelcast.diagnostics.operationthreadsamples.period.seconds</li><li>hazelcast.diagnostics.operationthreadsamples.sampler.period.millis</li><li>hazelcast.diagnostics.operationthreadsamples.includeName</li><li>hazelcast.diagnostics.wan.period.seconds</li></ul><h2 id="_3l-2-spring-hazelcast-77-properties" tabindex="-1"><a class="header-anchor" href="#_3l-2-spring-hazelcast-77-properties" aria-hidden="true">#</a> 3L.2.spring-hazelcast-77.properties</h2><p>若xml中使用spring变量，需要wings-prop-promotion.cnf提升到system Resource, <code>file:/data/xxx</code>, <code>http://www</code>, <code>classpath:/xxx</code></p><h3 id="spring-hazelcast-config" tabindex="-1"><a class="header-anchor" href="#spring-hazelcast-config" aria-hidden="true">#</a> spring.hazelcast.config</h3><ul><li><code>classpath:/extra-conf/hazelcast-client.xml</code> - 客户端配置</li><li><code>classpath:/extra-conf/hazelcast-server.xml</code> - 服务端配置</li></ul><h2 id="_3l-3-spring-session-77-properties" tabindex="-1"><a class="header-anchor" href="#_3l-3-spring-session-77-properties" aria-hidden="true">#</a> 3L.3.spring-session-77.properties</h2><p>引入hazelcast后，则默认使用Hazelcast管理session，编号77优先级高于默认。</p><h3 id="spring-session-store-type" tabindex="-1"><a class="header-anchor" href="#spring-session-store-type" aria-hidden="true">#</a> spring.session.store-type</h3><p><code>String</code>=<code>hazelcast</code></p><h2 id="_3l-4-wings-hazelcast-77-properties" tabindex="-1"><a class="header-anchor" href="#_3l-4-wings-hazelcast-77-properties" aria-hidden="true">#</a> 3L.4.wings-hazelcast-77.properties</h2><p>Hazelcast默认值，监控及诊断设置，</p>',12),m={href:"https://docs.hazelcast.com/imdg/4.2/management/diagnostics",target:"_blank",rel:"noopener noreferrer"},f={href:"https://codecentric.github.io/spring-boot-admin/current/#clustering-support",target:"_blank",rel:"noopener noreferrer"},u=o('<h3 id="wings-slardar-hazelcast-cluster-name" tabindex="-1"><a class="header-anchor" href="#wings-slardar-hazelcast-cluster-name" aria-hidden="true">#</a> wings.slardar.hazelcast.cluster-name</h3><p><code>String</code>=<code>wings-${git.commit.id.full}</code>，自行修改集群名字。</p><p>因社区版无安全设置，仅通过集群名便可加入，因此建议使用密码强度的名字，如32字符随机数，避开扫描。</p><h3 id="wings-slardar-hazelcast-diagnostics-period-seconds" tabindex="-1"><a class="header-anchor" href="#wings-slardar-hazelcast-diagnostics-period-seconds" aria-hidden="true">#</a> wings.slardar.hazelcast.diagnostics.period-seconds</h3><p><code>Integer</code>=<code>600</code>，diagnostics周期</p><h3 id="spring-boot-admin-hazelcast-event-store" tabindex="-1"><a class="header-anchor" href="#spring-boot-admin-hazelcast-event-store" aria-hidden="true">#</a> spring.boot.admin.hazelcast.event-store</h3><p><code>String</code>=<code>spring-boot-admin-event-store</code></p><p>Name of the Hazelcast-map to store the events</p><h3 id="spring-boot-admin-hazelcast-sent-notifications" tabindex="-1"><a class="header-anchor" href="#spring-boot-admin-hazelcast-sent-notifications" aria-hidden="true">#</a> spring.boot.admin.hazelcast.sent-notifications</h3><p><code>String</code>=<code>spring-boot-admin-sent-notifications</code></p><p>Name of the Hazelcast-map used to deduplicate the notifications.</p><h3 id="hazelcast-jmx" tabindex="-1"><a class="header-anchor" href="#hazelcast-jmx" aria-hidden="true">#</a> hazelcast.jmx</h3><p><code>Boolean</code>=<code>${spring.jmx.enabled:false}</code>，是否开启jmx</p><h3 id="hazelcast-diagnostics-enabled" tabindex="-1"><a class="header-anchor" href="#hazelcast-diagnostics-enabled" aria-hidden="true">#</a> hazelcast.diagnostics.enabled</h3><p><code>Boolean</code>=<code>false</code>，默认关闭，因CPU消耗过高</p><h3 id="hazelcast-diagnostics-其他设置" tabindex="-1"><a class="header-anchor" href="#hazelcast-diagnostics-其他设置" aria-hidden="true">#</a> hazelcast.diagnostics 其他设置</h3><p>通过属性提示，为Hazelcast设置spring设置的属性值。</p><ul><li><code>hazelcast.diagnostics.metric.level</code>=<code>info</code></li><li><code>hazelcast.diagnostics.filename.prefix</code>=<code>${spring.application.name:wings-default}</code></li><li><code>hazelcast.diagnostics.pending.invocations.period.seconds</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li><li><code>hazelcast.diagnostics.slowoperations.period.seconds</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li><li><code>hazelcast.diagnostics.metrics.period.seconds</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li><li><code>hazelcast.diagnostics.invocation.sample.period.seconds</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li><li><code>hazelcast.diagnostics.invocation-profiler.period.seconds</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li><li><code>hazelcast.diagnostics.operation-profiler.period.seconds</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li><li><code>hazelcast.diagnostics.memberinfo.period.second</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li><li><code>hazelcast.diagnostics.storeLatency.period.seconds</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li><li><code>hazelcast.diagnostics.operationthreadsamples.period.seconds</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li></ul>',18);function b(_,x){const s=d("ExternalLinkIcon");return c(),n("div",null,[r,h,e("ul",null,[e("li",null,[e("a",p,[a("https://docs.hazelcast.com/imdg/4.2/system-properties"),i(s)])]),e("li",null,[e("a",g,[a("https://docs.hazelcast.com/imdg/4.2/management/diagnostics"),i(s)])])]),z,e("ul",null,[e("li",null,[e("a",m,[a("https://docs.hazelcast.com/imdg/4.2/management/diagnostics"),i(s)])]),e("li",null,[e("a",f,[a("https://codecentric.github.io/spring-boot-admin/current/#clustering-support"),i(s)])])]),u])}const v=t(l,[["render",b],["__file","3l-prop-hazelcast.html.vue"]]);export{v as default};
