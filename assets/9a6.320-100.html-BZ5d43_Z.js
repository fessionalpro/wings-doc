import{b as a,a as i,_ as l}from"./bane_minimap_icon-CBdTZu5h.js";import{_ as t}from"./batrider_minimap_icon-T-_vOa2U.js";import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as o,o as s}from"./app-CCOA2OJI.js";const c={};function d(p,e){return s(),r("div",null,e[0]||(e[0]=[o('<h1 id="_9a6-升迁3-2-100手册" tabindex="-1"><a class="header-anchor" href="#_9a6-升迁3-2-100手册"><span>9A6.升迁3.2.100手册</span></a></h1><p>在已升级到<code>3.0.6-300</code>后，从<code>3.2.100</code>开始的升级手册，包括，</p><ul><li>3.2.101 AntiMage 敌法</li><li>3.2.110 ArcWarden 电狗</li><li>3.2.120 Bane 祸乱之源</li><li>3.2.130 Batrider 蝙蝠骑士</li></ul><h2 id="_9a6-1-antimage-敌法-3-2-101" tabindex="-1"><a class="header-anchor" href="#_9a6-1-antimage-敌法-3-2-101"><span><img src="'+a+'" alt="Anti-Mage"> 9A6.1.AntiMage 敌法 3.2.101</span></a></h2><p>version变为<code>3.2.101</code>，标准的<a href="https://semver.org" target="_blank" rel="noopener noreferrer">3段式</a>版本号。 此次包括java从17到21，springboot从3.0到3.2的重大升级。</p><h3 id="_1a-springboot-升级" tabindex="-1"><a class="header-anchor" href="#_1a-springboot-升级"><span>1a.SpringBoot 升级</span></a></h3><ul><li><a href="https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.1-Release-Notes" target="_blank" rel="noopener noreferrer">Spring-Boot-3.1-Release-Notes</a></li><li><a href="https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.2-Release-Notes" target="_blank" rel="noopener noreferrer">Spring-Boot-3.2-Release-Notes</a></li></ul><p>注意，不要开启 <code>spring.threads.virtual.enabled</code>，因未充分测试。</p><h3 id="_1b-依赖变更" tabindex="-1"><a class="header-anchor" href="#_1b-依赖变更"><span>1b.依赖变更</span></a></h3><ul><li>ShardingSphere - 上游未适配Jakarta EE。</li><li>ServiceComb - Wings未做充分测试，推荐使用RPC模式。</li><li>kryo - 移除过时的serializers，使用新版默认</li></ul><h2 id="_9a6-2-arcwarden-电狗-3-2-110" tabindex="-1"><a class="header-anchor" href="#_9a6-2-arcwarden-电狗-3-2-110"><span><img src="'+i+'" alt="Arc Warden"> 9A6.2.ArcWarden 电狗 3.2.110</span></a></h2><ul><li>spring boot 3.2.2</li><li>以java config 取代 jooq-codegen-faceless.xml</li><li>合并 awesome 和 autogen 模块到主模块</li><li>删除HttpHelper，使用HttpSecurity.with</li><li>为JDBC设定table白名单，如 JournalJdbcHelper</li></ul><h3 id="_2a-功能开关" tabindex="-1"><a class="header-anchor" href="#_2a-功能开关"><span>2a.功能开关</span></a></h3><p>新增 FeatureFlag 和 TweakFeature，同时有以下破坏性修改，</p><ul><li><code>wings.silencer.conditional</code> 改为 <code>wings.feature</code></li><li><code>SilencerConditionalProp</code> 改为 <code>SilencerFeatureProp</code></li><li><code>WingsEnabledCondition.Prefix</code> 改为 <code>WingsEnabledContext.PrefixEnabled</code></li></ul><h3 id="_2b-依赖变更" tabindex="-1"><a class="header-anchor" href="#_2b-依赖变更"><span>2b.依赖变更</span></a></h3><ul><li>移除 <code>spring-boot-properties-migrator</code></li></ul><h2 id="_9a6-3-bane-祸乱之源-3-2-120" tabindex="-1"><a class="header-anchor" href="#_9a6-3-bane-祸乱之源-3-2-120"><span><img src="'+l+'" alt="Bane"> 9A6.3.Bane 祸乱之源 3.2.120</span></a></h2><h3 id="_3a-重构async和ttl" tabindex="-1"><a class="header-anchor" href="#_3a-重构async和ttl"><span>3a.重构Async和TTL</span></a></h3><ul><li>LightTasker 变为 FastScheduler</li><li>HeavyTasker 变为 ScheduledScheduler</li><li>移除 execute, referScheduler 等方法</li><li><code>wings.slardar.async.heavy.</code> 变为 <code>.fast.</code></li></ul><h2 id="_9a6-4-batrider-蝙蝠骑士-3-2-130" tabindex="-1"><a class="header-anchor" href="#_9a6-4-batrider-蝙蝠骑士-3-2-130"><span><img src="'+t+'" alt="Batrider"> 9A6.4.Batrider 蝙蝠骑士 3.2.130</span></a></h2><h3 id="_4a-mapstruct-live-template-wgme" tabindex="-1"><a class="header-anchor" href="#_4a-mapstruct-live-template-wgme"><span>4a.MapStruct live template wgme</span></a></h3><ul><li><code>wgmp</code> 中的 <code>into()</code> 改名 <code>to()</code> 和 <code>of()</code></li><li>影响 <code>AuthnDetailsMapper</code></li></ul><h3 id="_4b-loginsuccesshandler-引入state类" tabindex="-1"><a class="header-anchor" href="#_4b-loginsuccesshandler-引入state类"><span>4b.LoginSuccessHandler 引入State类</span></a></h3><ul><li>变更NonceLoginSuccessHandler.onResponse的参数列表为对象</li></ul><h3 id="_4c-ifnotxxx-从-emptysugar-移到-settersugar" tabindex="-1"><a class="header-anchor" href="#_4c-ifnotxxx-从-emptysugar-移到-settersugar"><span>4c.IfNotXxx 从 EmptySugar 移到 SetterSugar</span></a></h3><ul><li>EmptySugar 仅处理空，为pojo增加 setIf 风格</li></ul><h3 id="_4d-mirana-的破坏性变更" tabindex="-1"><a class="header-anchor" href="#_4d-mirana-的破坏性变更"><span>4d.mirana 的破坏性变更</span></a></h3><ul><li>移动 R.NG/.OK 到 Immutable.NG/.OK</li><li>R.NG()/.OK() 返回 Immutable.NG/.OK</li><li>Z.notNullSure 用于默认value</li><li>Z.notNullSafe 用于默认suppler</li></ul><h3 id="_4e-编码风格-continuation-indent-size" tabindex="-1"><a class="header-anchor" href="#_4e-编码风格-continuation-indent-size"><span>4e.编码风格 CONTINUATION_INDENT_SIZE</span></a></h3><ul><li>重新导入 wings-idea-style.xml</li><li>重新导入 wings-idea-live.xml</li><li>格式化 java 源码</li><li>CONTINUATION_INDENT_SIZE 从 8 变 4</li><li>SPACE_WITHIN_ARRAY_INITIALIZER_BRACES 启用</li><li>ALIGN_MULTILINE_TERNARY_OPERATION 无操作</li></ul><h3 id="_4f-jooq-支持-dto" tabindex="-1"><a class="header-anchor" href="#_4f-jooq-支持-dto"><span>4f.jooq 支持 dto</span></a></h3><ul><li>SelectWhereOrder从内部类变为正常类</li></ul><h3 id="_4g-jackson-和-fastjson" tabindex="-1"><a class="header-anchor" href="#_4g-jackson-和-fastjson"><span>4g.jackson 和 fastjson</span></a></h3><ul><li>变 LocaleZoneIdUtil.Xxx 从 Supplier 为 method</li><li>删除 FastJsonFilters, FastJsonReaders</li><li>JacksonHelper 不支持时区自动转换</li><li>JacksonHelper 配置 <code>Plain</code> 兼容wings</li><li>JacksonHelper 删除 TypeReference</li><li>FastjsonHelper 删除 enableXxx</li><li>FastjsonHelper 删除 TypeReference</li></ul><h3 id="_4h-表结构变更" tabindex="-1"><a class="header-anchor" href="#_4h-表结构变更"><span>4h.表结构变更</span></a></h3><ul><li>维护数据 2021-10-26v02-task-tune.sql</li><li>表结构 2021-10-26v03-conf-size.sql</li><li>表结构 2021-10-26v05-journal-elapse.sql</li><li>修复编译错误</li><li><code>INT(11)</code> 变为 <code>INT</code></li><li><code>BIGINT(20)</code> 变为 <code>BIGINT</code></li><li><code>TINYINT(1)</code> 变为 <code>BOOLEAN</code></li></ul><h3 id="_4i-silencer-重构" tabindex="-1"><a class="header-anchor" href="#_4i-silencer-重构"><span>4i.silencer 重构</span></a></h3><ul><li><code>spring.help.CommonPropHelper</code> 变为 <code>support.PropHelper</code></li><li><code>SubclassSpringLoader</code> 变为 <code>SubclassGather</code></li><li><code>enhance.TypeSugar</code> 变为 <code>support.TypeSugar</code></li></ul><h3 id="_4j-mail-接口签名" tabindex="-1"><a class="header-anchor" href="#_4j-mail-接口签名"><span>4j.mail 接口签名</span></a></h3><ul><li><code>send</code> - 保持且同步单个发送，返回， <ul><li><code>false</code>， 如果检查失败</li><li>throw 如果发送失败， MailRetryException 为异步重试</li><li><code>true</code>，以上之外为成功</li></ul></li><li><code>post</code> - 保持且同步单个发送，发送即不管，无异常抛出，返回， <ul><li><code>-2</code>，如果抛出非MailRetryException</li><li><code>-1</code>，如果检查错误</li><li><code>0</code>，发送成功</li><li><code>&gt;now()</code>，如果失败，异步重试的时间</li></ul></li><li><code>emit</code> - 异步批量发送，无异常抛出。自动批量发送，返回， <ul><li><code>-2</code>，如果抛出非MailRetryException</li><li><code>-1</code>，如果检查错误</li><li><code>&gt;now()</code>，如果失败，异步重试的时间</li></ul></li></ul>',41)]))}const m=n(c,[["render",d],["__file","9a6.320-100.html.vue"]]),f=JSON.parse('{"path":"/zh/9-example/9a.wings-change/9a6.320-100.html","title":"9A6.升迁3.2.100手册","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"circle-up","category":["实战","升迁"],"description":"9A6.升迁3.2.100手册 在已升级到3.0.6-300后，从3.2.100开始的升级手册，包括， 3.2.101 AntiMage 敌法 3.2.110 ArcWarden 电狗 3.2.120 Bane 祸乱之源 3.2.130 Batrider 蝙蝠骑士 Anti-Mage 9A6.1.AntiMage 敌法 3.2.101 version变...","GIT_REPO_HEAD":"2025-02-06 a8fb043a36c51604d1078076241b71fc4a4529a1","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/9-example/9a.wings-change/9a6.320-100.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/9-example/9a.wings-change/9a6.320-100.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"9A6.升迁3.2.100手册"}],["meta",{"property":"og:description","content":"9A6.升迁3.2.100手册 在已升级到3.0.6-300后，从3.2.100开始的升级手册，包括， 3.2.101 AntiMage 敌法 3.2.110 ArcWarden 电狗 3.2.120 Bane 祸乱之源 3.2.130 Batrider 蝙蝠骑士 Anti-Mage 9A6.1.AntiMage 敌法 3.2.101 version变..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://wings.fessional.pro/antimage_minimap_icon.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-17T01:41:26.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-17T01:41:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9A6.升迁3.2.100手册\\",\\"image\\":[\\"https://wings.fessional.pro/antimage_minimap_icon.png\\",\\"https://wings.fessional.pro/arcwarden_minimap_icon.png\\",\\"https://wings.fessional.pro/bane_minimap_icon.png\\",\\"https://wings.fessional.pro/batrider_minimap_icon.png\\"],\\"dateModified\\":\\"2025-01-17T01:41:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"9A6.1.AntiMage 敌法 3.2.101","slug":"_9a6-1-antimage-敌法-3-2-101","link":"#_9a6-1-antimage-敌法-3-2-101","children":[{"level":3,"title":"1a.SpringBoot 升级","slug":"_1a-springboot-升级","link":"#_1a-springboot-升级","children":[]},{"level":3,"title":"1b.依赖变更","slug":"_1b-依赖变更","link":"#_1b-依赖变更","children":[]}]},{"level":2,"title":"9A6.2.ArcWarden 电狗 3.2.110","slug":"_9a6-2-arcwarden-电狗-3-2-110","link":"#_9a6-2-arcwarden-电狗-3-2-110","children":[{"level":3,"title":"2a.功能开关","slug":"_2a-功能开关","link":"#_2a-功能开关","children":[]},{"level":3,"title":"2b.依赖变更","slug":"_2b-依赖变更","link":"#_2b-依赖变更","children":[]}]},{"level":2,"title":"9A6.3.Bane 祸乱之源 3.2.120","slug":"_9a6-3-bane-祸乱之源-3-2-120","link":"#_9a6-3-bane-祸乱之源-3-2-120","children":[{"level":3,"title":"3a.重构Async和TTL","slug":"_3a-重构async和ttl","link":"#_3a-重构async和ttl","children":[]}]},{"level":2,"title":"9A6.4.Batrider 蝙蝠骑士 3.2.130","slug":"_9a6-4-batrider-蝙蝠骑士-3-2-130","link":"#_9a6-4-batrider-蝙蝠骑士-3-2-130","children":[{"level":3,"title":"4a.MapStruct live template wgme","slug":"_4a-mapstruct-live-template-wgme","link":"#_4a-mapstruct-live-template-wgme","children":[]},{"level":3,"title":"4b.LoginSuccessHandler 引入State类","slug":"_4b-loginsuccesshandler-引入state类","link":"#_4b-loginsuccesshandler-引入state类","children":[]},{"level":3,"title":"4c.IfNotXxx 从 EmptySugar 移到 SetterSugar","slug":"_4c-ifnotxxx-从-emptysugar-移到-settersugar","link":"#_4c-ifnotxxx-从-emptysugar-移到-settersugar","children":[]},{"level":3,"title":"4d.mirana 的破坏性变更","slug":"_4d-mirana-的破坏性变更","link":"#_4d-mirana-的破坏性变更","children":[]},{"level":3,"title":"4e.编码风格 CONTINUATION_INDENT_SIZE","slug":"_4e-编码风格-continuation-indent-size","link":"#_4e-编码风格-continuation-indent-size","children":[]},{"level":3,"title":"4f.jooq 支持 dto","slug":"_4f-jooq-支持-dto","link":"#_4f-jooq-支持-dto","children":[]},{"level":3,"title":"4g.jackson 和 fastjson","slug":"_4g-jackson-和-fastjson","link":"#_4g-jackson-和-fastjson","children":[]},{"level":3,"title":"4h.表结构变更","slug":"_4h-表结构变更","link":"#_4h-表结构变更","children":[]},{"level":3,"title":"4i.silencer 重构","slug":"_4i-silencer-重构","link":"#_4i-silencer-重构","children":[]},{"level":3,"title":"4j.mail 接口签名","slug":"_4j-mail-接口签名","link":"#_4j-mail-接口签名","children":[]}]}],"git":{"createdTime":1703561529000,"updatedTime":1737078086000,"contributors":[{"name":"trydofor","username":"trydofor","email":"trydofor@gmail.com","commits":20,"url":"https://github.com/trydofor"}]},"readingTime":{"minutes":2.31,"words":692},"filePathRelative":"zh/9-example/9a.wings-change/9a6.320-100.md","localizedDate":"2023年12月26日","autoDesc":true}');export{m as comp,f as data};
