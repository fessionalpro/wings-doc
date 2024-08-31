import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as s,e as t}from"./app-DjJWubZm.js";const l={},i=t(`<h1 id="_3b-hazelcast中间件" tabindex="-1"><a class="header-anchor" href="#_3b-hazelcast中间件"><span>3B.Hazelcast中间件</span></a></h1><p>使用hazelcast作为session，cache和message中间件，包括，</p><ul><li>spring session - Hazelcast4IndexedSessionRepository</li><li>server cache - WingsHazelcast</li><li>global lock - HazelcastGlobalLock</li><li>global event - HazelcastSyncPublisher</li><li>snowflake id - FlakeIdHazelcastImpl</li></ul><h2 id="_3b-1-默认配置" tabindex="-1"><a class="header-anchor" href="#_3b-1-默认配置"><span>3B.1.默认配置</span></a></h2><ul><li>ClassNotFound - 需要设置user-code-deployment</li><li>重连机制，在client端，需要设置重连时间</li><li>数据持久化，社区版需要自行MapStore和MapLoader</li><li>默认开启multicast，组播地址224.0.0.1</li></ul><p>在实际部署时，建议独立配置好hazelcast集群，使用client端链接。 集群配置，可以是<code>app+1</code>的形式，这样可保证至少一个独立存活。</p><p>一般在同一网段，内网间可以使用组播，但建议使用tcp-ip方式组网。 通过 spring.hazelcast.config 选择不同的配置文件，建议xml。</p><p>hazelcast的3和4差异很大，在SpringBoot 2.2和2.4是不兼容的。</p><h2 id="_3b-2-分布式锁" tabindex="-1"><a class="header-anchor" href="#_3b-2-分布式锁"><span>3B.2.分布式锁</span></a></h2><p>hazelcast提供了3类锁，推荐使用CP系统，但集群要求至少3台，默认0为单机unsafe模式。</p><ul><li>FencedLock - Raft的分布式锁，在CP系统(4.x)</li><li>IMap.lock - 自动GC，干净简洁</li><li>ILock.lock - 遵循j.u.c.Lock约定（3.12移除）</li></ul><p>不同的工程中，需要分开设置cluster-name，避免不同项目的同名缓存出现干扰。 slardar采用了springboot默认的配置方式，client和server的配置文件如下。</p><ul><li>extra-conf/hazelcast-client.xml</li><li>extra-conf/hazelcast-server.xml</li></ul><p>若是需要独立定制，可以编程的形式暴露ClientConfig或Config Bean</p><p>参考资料如下，</p><ul><li><a href="https://hazelcast.com/blog/hazelcast-imdg-3-12-introduces-cp-subsystem/" target="_blank" rel="noopener noreferrer">https://hazelcast.com/blog/hazelcast-imdg-3-12-introduces-cp-subsystem/</a></li><li><a href="https://hazelcast.com/blog/long-live-distributed-locks/" target="_blank" rel="noopener noreferrer">https://hazelcast.com/blog/long-live-distributed-locks/</a></li></ul><h2 id="_3b-3-分布式缓存" tabindex="-1"><a class="header-anchor" href="#_3b-3-分布式缓存"><span>3B.3.分布式缓存</span></a></h2><p>通过hazelcastCacheManager用hazelcast实现ServerCacheManager</p><p>对于hazelcast的MapConfig若无配置，则wings会根据level自动配置以下MapConf。</p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">time-to-live-seconds</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;3600&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">time-to-live-seconds</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">max-idle-seconds</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;0&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">max-idle-seconds</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">eviction</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;5000&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3b-4-消息订阅" tabindex="-1"><a class="header-anchor" href="#_3b-4-消息订阅"><span>3B.4.消息订阅</span></a></h2><p>hazelcast的topic(#HazelcastTopic)按SpringEvent模式进行了包装，方便在IDE中在代码间导航，</p><ul><li>Event 有哪些生产者/发布</li><li>Event 有哪些消费者/订阅</li></ul>`,23),n=[i];function r(o,c){return s(),a("div",null,n)}const d=e(l,[["render",r],["__file","3b-hazelcast.html.vue"]]),g=JSON.parse('{"path":"/zh/3-slardar/3b-hazelcast.html","title":"3B.Hazelcast中间件","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"layer-group","category":["鱼人","缓存","事件"],"description":"3B.Hazelcast中间件 使用hazelcast作为session，cache和message中间件，包括， spring session - Hazelcast4IndexedSessionRepository server cache - WingsHazelcast global lock - HazelcastGlobalLock glo...","GIT_REPO_HEAD":"2024-08-31 14ebccb0d5142c697c8e1c26714477f1e205282c","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/3-slardar/3b-hazelcast.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/3-slardar/3b-hazelcast.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"3B.Hazelcast中间件"}],["meta",{"property":"og:description","content":"3B.Hazelcast中间件 使用hazelcast作为session，cache和message中间件，包括， spring session - Hazelcast4IndexedSessionRepository server cache - WingsHazelcast global lock - HazelcastGlobalLock glo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3B.Hazelcast中间件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"3B.1.默认配置","slug":"_3b-1-默认配置","link":"#_3b-1-默认配置","children":[]},{"level":2,"title":"3B.2.分布式锁","slug":"_3b-2-分布式锁","link":"#_3b-2-分布式锁","children":[]},{"level":2,"title":"3B.3.分布式缓存","slug":"_3b-3-分布式缓存","link":"#_3b-3-分布式缓存","children":[]},{"level":2,"title":"3B.4.消息订阅","slug":"_3b-4-消息订阅","link":"#_3b-4-消息订阅","children":[]}],"git":{"createdTime":1655901635000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":2}]},"readingTime":{"minutes":1.58,"words":475},"filePathRelative":"zh/3-slardar/3b-hazelcast.md","localizedDate":"2022年6月22日","autoDesc":true}');export{d as comp,g as data};