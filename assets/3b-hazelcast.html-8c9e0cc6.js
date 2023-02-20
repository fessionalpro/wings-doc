import{_ as l,X as c,Y as o,$ as a,a1 as s,a0 as n,a3 as t,F as i}from"./framework-e2173353.js";const p={},r=t('<h1 id="_3b-hazelcast中间件" tabindex="-1"><a class="header-anchor" href="#_3b-hazelcast中间件" aria-hidden="true">#</a> 3B.Hazelcast中间件</h1><p>使用hazelcast作为session，cache和message中间件，包括，</p><ul><li>spring session - Hazelcast4IndexedSessionRepository</li><li>server cache - WingsHazelcast</li><li>global lock - HazelcastGlobalLock</li><li>global event - HazelcastSyncPublisher</li><li>snowflake id - FlakeIdHazelcastImpl</li></ul><h2 id="_3b-1-默认配置" tabindex="-1"><a class="header-anchor" href="#_3b-1-默认配置" aria-hidden="true">#</a> 3B.1.默认配置</h2><ul><li>ClassNotFound - 需要设置user-code-deployment</li><li>重连机制，在client端，需要设置重连时间</li><li>数据持久化，社区版需要自行MapStore和MapLoader</li><li>默认开启multicast，组播地址224.0.0.1</li></ul><p>在实际部署时，建议独立配置好hazelcast集群，使用client端链接。 集群配置，可以是<code>app+1</code>的形式，这样可保证至少一个独立存活。</p><p>一般在同一网段，内网间可以使用组播，但建议使用tcp-ip方式组网。 通过 spring.hazelcast.config 选择不同的配置文件，建议xml。</p><p>hazelcast的3和4差异很大，在SpringBoot 2.2和2.4是不兼容的。</p><h2 id="_3b-2-分布式锁" tabindex="-1"><a class="header-anchor" href="#_3b-2-分布式锁" aria-hidden="true">#</a> 3B.2.分布式锁</h2><p>hazelcast提供了3类锁，推荐使用CP系统，但集群要求至少3台，默认0为单机unsafe模式。</p><ul><li>FencedLock - Raft的分布式锁，在CP系统(4.x)</li><li>IMap.lock - 自动GC，干净简洁</li><li>ILock.lock - 遵循j.u.c.Lock约定（3.12移除）</li></ul><p>不同的工程中，需要分开设置cluster-name，避免不同项目的同名缓存出现干扰。 slardar采用了springboot默认的配置方式，client和server的配置文件如下。</p><ul><li>extra-conf/hazelcast-client.xml</li><li>extra-conf/hazelcast-server.xml</li></ul><p>若是需要独立定制，可以编程的形式暴露ClientConfig或Config Bean</p><p>参考资料如下，</p>',15),d={href:"https://hazelcast.com/blog/hazelcast-imdg-3-12-introduces-cp-subsystem/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://hazelcast.com/blog/long-live-distributed-locks/",target:"_blank",rel:"noopener noreferrer"},h=t(`<h2 id="_3b-3-分布式缓存" tabindex="-1"><a class="header-anchor" href="#_3b-3-分布式缓存" aria-hidden="true">#</a> 3B.3.分布式缓存</h2><p>通过hazelcastCacheManager用hazelcast实现ServerCacheManager</p><p>对于hazelcast的MapConfig若无配置，则wings会根据level自动配置以下MapConf。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time-to-live-seconds</span><span class="token punctuation">&gt;</span></span>3600<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>time-to-live-seconds</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>max-idle-seconds</span><span class="token punctuation">&gt;</span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>max-idle-seconds</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>eviction</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5000<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3b-4-消息订阅" tabindex="-1"><a class="header-anchor" href="#_3b-4-消息订阅" aria-hidden="true">#</a> 3B.4.消息订阅</h2><p>hazelcast的topic(#HazelcastTopic)按SpringEvent模式进行了包装，方便在IDE中在代码间导航，</p><ul><li>Event 有哪些生产者/发布</li><li>Event 有哪些消费者/订阅</li></ul>`,7);function g(k,m){const e=i("ExternalLinkIcon");return c(),o("div",null,[r,a("ul",null,[a("li",null,[a("a",d,[s("https://hazelcast.com/blog/hazelcast-imdg-3-12-introduces-cp-subsystem/"),n(e)])]),a("li",null,[a("a",u,[s("https://hazelcast.com/blog/long-live-distributed-locks/"),n(e)])])]),h])}const _=l(p,[["render",g],["__file","3b-hazelcast.html.vue"]]);export{_ as default};
