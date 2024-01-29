import{_ as c}from"./slardar_icon-1attlClE.js";import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as d,o as r,c as t,b as a,d as s,w as o,e,f as n}from"./app-mN42Vc4a.js";const h={},u=n('<h1 id="_3-鱼人守卫" tabindex="-1"><a class="header-anchor" href="#_3-鱼人守卫"><span>3.鱼人守卫</span></a></h1><p><img src="'+c+'" alt="slardar"></p><blockquote><p>大鱼人，是一个水手，他会星星点灯。</p></blockquote><p>SpringMvc(不支持WebFlux)封装和扩展，如多语言，多时区，安全，缓存，会话等。</p><h2 id="_3-1-模块划分" tabindex="-1"><a class="header-anchor" href="#_3-1-模块划分"><span>3.1.模块划分</span></a></h2><ul><li>slardar - 缓存，事件，序列化等基本功能</li><li>slardar-hazel-caching - 基于hazelcast的分布式缓存</li><li>slardar-hazel-session - 基于hazelcast的分布式session</li><li>slardar-webmvc - webmvc, session, security-web</li><li>slardar-sprint - hazelcast, security-conf, admin, actuator</li><li>slardar-test - 测试包，基础的登录</li></ul><h2 id="_3-2-方案及配置" tabindex="-1"><a class="header-anchor" href="#_3-2-方案及配置"><span>3.2.方案及配置</span></a></h2><p>Slardar按以下配置，架构及性能指标，进行了默认配置。</p><ul><li>Nginx反向代理，提供post+json为主的服务</li><li><code>Undertow</code>为默认的Servlet容器</li><li><code>Hazelcast</code>作为<code>Cache</code>及<code>Session</code>方案</li><li>业务层在80%可以<code>30ms</code>结束，阻塞系数<code>0.9</code></li><li><code>8核3GHz</code>云主机，模拟<code>10k*50</code>请求，单应用</li><li><code>95th</code>，response=<code>2s</code>，<code>tps</code>=<code>2k-5k</code></li></ul><h2 id="_3-3-mvc的封装加强" tabindex="-1"><a class="header-anchor" href="#_3-3-mvc的封装加强"><span>3.3.Mvc的封装加强</span></a></h2><p>Slardar基于SpringMvc做了工具级封装和加强，有些仅提供能力，有些开箱即用，主要包括，</p><ul><li>并发控制，多级缓存，事件的发布和订阅</li><li>spring-boot-admin及actuator管理和监控能力</li><li>sentry 日志收集能力</li><li>Terminal和Security的Context</li><li>登录，权限，会话，令牌等控制力</li></ul><h2 id="_3-4-线程池" tabindex="-1"><a class="header-anchor" href="#_3-4-线程池"><span>3.4.线程池</span></a></h2><p>SlardarAsyncConfiguration提供了4个Ttl配置的线程池，前缀和用途分别如下，</p><ul><li><code>win-async-</code> - <code>spring.task.execution.</code>配置，用于<code>@Async</code></li><li><code>win-task-</code> - <code>spring.task.scheduling.</code>配置，用于<code>@Scheduled</code></li><li><code>win-event-</code> - <code>wings.slardar.async.event.</code>配置，Spring的Event</li><li><code>win-heavy-</code> - <code>wings.slardar.async.heavy.</code>配置，Wings重任务线程</li></ul><h2 id="_3-5-更多章节" tabindex="-1"><a class="header-anchor" href="#_3-5-更多章节"><span>3.5.更多章节</span></a></h2>',16);function p(_,m){const l=d("RouterLink");return r(),t("div",null,[u,a("ul",null,[a("li",null,[s(l,{to:"/zh/3-slardar/3a-jackson.html"},{default:o(()=>[e("Jackson格式约定")]),_:1}),e(" - Json格式约定，国际化处理")]),a("li",null,[s(l,{to:"/zh/3-slardar/3b-hazelcast.html"},{default:o(()=>[e("Hazelcast中间件")]),_:1}),e(" - 作为session，缓存和消息中间件")]),a("li",null,[s(l,{to:"/zh/3-slardar/3c-host-ext.html"},{default:o(()=>[e("Host继承和URL重载")]),_:1}),e(" - URL的Override，实现多Host和换肤")]),a("li",null,[s(l,{to:"/zh/3-slardar/3d-i18n-zone.html"},{default:o(()=>[e("多国语和多时区")]),_:1}),e(" - DateTime, Validation, Locale")]),a("li",null,[s(l,{to:"/zh/3-slardar/3e-auth-session.html"},{default:o(()=>[e("Session和认证")]),_:1}),e(" - 多种登录，多种凭证，分级权限")]),a("li",null,[s(l,{to:"/zh/3-slardar/3f-cache-event.html"},{default:o(()=>[e("多级缓存及事件")]),_:1}),e(" - 多级缓存，多级锁，多级消息")]),a("li",null,[s(l,{to:"/zh/3-slardar/3g-fun-server.html"},{default:o(()=>[e("后端防护功能")]),_:1}),e(" - 后端防抖，防连击，验证码，防篡改")]),a("li",null,[s(l,{to:"/zh/3-slardar/3h-qa-slardar.html"},{default:o(()=>[e("后端常见话题")]),_:1}),e(" - 后端话题和资料")])])])}const z=i(h,[["render",p],["__file","index.html.vue"]]);export{z as default};
