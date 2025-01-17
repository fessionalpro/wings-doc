import{_ as e,a,b as i}from"./bane_minimap_icon-BWt7_-9t.js";import{_ as n}from"./batrider_minimap_icon-T-_vOa2U.js";import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,o as r,e as o}from"./app-DEdToB0k.js";const s={},c=o('<h1 id="_9a6-upgrade-3-2-100" tabindex="-1"><a class="header-anchor" href="#_9a6-upgrade-3-2-100"><span>9A6.Upgrade 3.2.100</span></a></h1><p>Upgrade manual from <code>3.2.100</code> after having upgraded to <code>3.0.6-300</code>, including,</p><ul><li>3.2.101 AntiMage</li><li>3.2.110 ArcWarden</li><li>3.2.120 Bane</li><li>3.2.130 Batrider</li></ul><h2 id="_9a6-1-antimage-3-2-101" tabindex="-1"><a class="header-anchor" href="#_9a6-1-antimage-3-2-101"><span><img src="'+e+'" alt="Anti-Mage"> 9A6.1.AntiMage 3.2.101</span></a></h2><p>version change to <code>3.2.101</code>, standard <a href="https://semver.org" target="_blank" rel="noopener noreferrer">3-segment</a> format. This includes major upgrades of java 17 to 21 and springboot 3.0 to 3.2.</p><h3 id="_1a-springboot-upgrade" tabindex="-1"><a class="header-anchor" href="#_1a-springboot-upgrade"><span>1a.SpringBoot Upgrade</span></a></h3><ul><li><a href="https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.1-Release-Notes" target="_blank" rel="noopener noreferrer">Spring-Boot-3.1-Release-Notes</a></li><li><a href="https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.2-Release-Notes" target="_blank" rel="noopener noreferrer">Spring-Boot-3.2-Release-Notes</a></li></ul><p>NOTE, do NOT enable <code>spring.threads.virtual.enabled</code>, due to not fully testing.</p><h3 id="_1b-dependency-change" tabindex="-1"><a class="header-anchor" href="#_1b-dependency-change"><span>1b.Dependency Change</span></a></h3><ul><li>ShardingSphere - upstream not adapted to Jakarta EE.</li><li>ServiceComb - not fully tested in wings, RPC mode is recommended.</li><li>kryo - remove outdated serializers, use new version defaults.</li></ul><h2 id="_9a6-2-arcwarden-3-2-110" tabindex="-1"><a class="header-anchor" href="#_9a6-2-arcwarden-3-2-110"><span><img src="'+a+'" alt="Arc Warden"> 9A6.2.ArcWarden 3.2.110</span></a></h2><ul><li>spring boot 3.2.2</li><li>java config instead of jooq-codegen-faceless.xml</li><li>merge awesome and autogen into the main module</li><li>delete HttpHelper, use HttpSecurity.with</li><li>safe table for JDBC，e.g. JournalJdbcHelper</li></ul><h3 id="_2a-feature-flags" tabindex="-1"><a class="header-anchor" href="#_2a-feature-flags"><span>2a.Feature Flags</span></a></h3><p>Add <code>FeatureFlag</code> and <code>TweakFeature</code> with the following breaking changes,</p><ul><li><code>wings.silencer.conditional</code> to <code>wings.feature</code></li><li><code>SilencerConditionalProp</code> to <code>SilencerFeatureProp</code></li><li><code>WingsEnabledCondition.Prefix</code> to <code>WingsEnabledContext.PrefixEnabled</code></li></ul><h3 id="_2b-dependency-change" tabindex="-1"><a class="header-anchor" href="#_2b-dependency-change"><span>2b.Dependency Change</span></a></h3><ul><li>remove <code>spring-boot-properties-migrator</code></li></ul><h2 id="_9a6-3-bane-3-2-120" tabindex="-1"><a class="header-anchor" href="#_9a6-3-bane-3-2-120"><span><img src="'+i+'" alt="Bane"> 9A6.3.Bane 3.2.120</span></a></h2><h3 id="_3a-refactor-async-ttl" tabindex="-1"><a class="header-anchor" href="#_3a-refactor-async-ttl"><span>3a.Refactor Async,TTL</span></a></h3><ul><li>LightTasker to FastScheduler</li><li>HeavyTasker to ScheduledScheduler</li><li>remove execute, referScheduler etc.</li><li><code>wings.slardar.async.heavy.</code> to <code>.fast.</code></li></ul><h2 id="_9a6-4-batrider-3-2-130" tabindex="-1"><a class="header-anchor" href="#_9a6-4-batrider-3-2-130"><span><img src="'+n+'" alt="Batrider"> 9A6.4.Batrider 3.2.130</span></a></h2><h3 id="_4a-mapstruct-live-template-wgme" tabindex="-1"><a class="header-anchor" href="#_4a-mapstruct-live-template-wgme"><span>4a.MapStruct live template wgme</span></a></h3><ul><li>rename <code>into()</code> in <code>wgmp</code> to <code>to()</code> and <code>of()</code></li><li>affect <code>AuthnDetailsMapper</code></li></ul><h3 id="_4b-loginsuccesshandler-state-class" tabindex="-1"><a class="header-anchor" href="#_4b-loginsuccesshandler-state-class"><span>4b.LoginSuccessHandler State class</span></a></h3><ul><li>change NonceLoginSuccessHandler.onResponse params list to object</li></ul><h3 id="_4c-move-ifnotxxx-from-emptysugar-to-settersugar" tabindex="-1"><a class="header-anchor" href="#_4c-move-ifnotxxx-from-emptysugar-to-settersugar"><span>4c.move IfNotXxx from EmptySugar to SetterSugar</span></a></h3><ul><li>EmptySugar only for empty, add setIf style to pojo</li></ul><h3 id="_4d-mirana-breaking-change" tabindex="-1"><a class="header-anchor" href="#_4d-mirana-breaking-change"><span>4d.mirana breaking change</span></a></h3><ul><li>remove R.NG/.OK to Immutable.NG/.OK</li><li>R.NG()/.OK() return Immutable.NG/.OK</li><li>Z.notNullSure for default value</li><li>Z.notNullSafe for default suppler</li></ul><h3 id="_4e-codestyle-continuation-indent-size" tabindex="-1"><a class="header-anchor" href="#_4e-codestyle-continuation-indent-size"><span>4e.codestyle CONTINUATION_INDENT_SIZE</span></a></h3><ul><li>reimport wings-idea-style.xml</li><li>reimport wings-idea-live.xml</li><li>reformat java code</li><li>CONTINUATION_INDENT_SIZE from default 8 to 4</li><li>SPACE_WITHIN_ARRAY_INITIALIZER_BRACES true</li><li>ALIGN_MULTILINE_TERNARY_OPERATION nop</li></ul><h3 id="_4f-jooq-supporter-dto" tabindex="-1"><a class="header-anchor" href="#_4f-jooq-supporter-dto"><span>4f.jooq supporter dto</span></a></h3><ul><li>change SelectWhereOrder from inner to normal class</li></ul><h3 id="_4g-jackson-and-fastjson" tabindex="-1"><a class="header-anchor" href="#_4g-jackson-and-fastjson"><span>4g.jackson and fastjson</span></a></h3><ul><li>change LocaleZoneIdUtil.Xxx from Supplier to method</li><li>delete FastJsonFilters, FastJsonReaders</li><li>JacksonHelper do NOT auto timezone</li><li>JacksonHelper config <code>Plain</code> as wings</li><li>JacksonHelper delete TypeReference</li><li>FastjsonHelper delete enableXxx</li><li>FastjsonHelper delete TypeReference</li></ul><h3 id="_4h-schema-change" tabindex="-1"><a class="header-anchor" href="#_4h-schema-change"><span>4h.schema change</span></a></h3><ul><li>schema and data 2021-10-26v02-task-tune.sql</li><li>schema 2021-10-26v03-conf-size.sql</li><li>schema 2021-10-26v05-journal-elapse.sql</li><li>schema 2021-10-26v06-lazy-mail.sql</li><li>fix compile error</li><li><code>INT(11)</code> to <code>INT</code></li><li><code>BIGINT(20)</code> to <code>BIGINT</code></li><li><code>TINYINT(1)</code> to <code>BOOLEAN</code></li></ul><h3 id="_4i-silencer-refactor" tabindex="-1"><a class="header-anchor" href="#_4i-silencer-refactor"><span>4i.silencer refactor</span></a></h3><ul><li><code>spring.help.CommonPropHelper</code> to <code>support.PropHelper</code></li><li><code>SubclassSpringLoader</code> to <code>SubclassGather</code></li><li><code>enhance.TypeSugar</code> to <code>support.TypeSugar</code></li></ul><h3 id="_4j-mail-service-signature" tabindex="-1"><a class="header-anchor" href="#_4j-mail-service-signature"><span>4j.mail service signature</span></a></h3><ul><li><code>send</code> - save and sync single send. and return, <ul><li><code>false</code>, if check fail.</li><li>throw if send fail, MailRetryException if async retry.</li><li><code>true</code>, otherwise.</li></ul></li><li><code>post</code> - save and sync single send, fire and forget, no exception throw. and return, <ul><li><code>-2</code>, if throw non MailRetryException.</li><li><code>-1</code>, if check fail.</li><li><code>0</code>, if send success.</li><li><code>&gt;now()</code>, estimated retry time if fail and async retry</li></ul></li><li><code>emit</code> - async batch send, no exception throw. auto in batch send. and return, <ul><li><code>-2</code>, if throw non MailRetryException.</li><li><code>-1</code>, if check fail.</li><li><code>&gt;now()</code>, estimated retry time if fail and async retry</li></ul></li></ul>',41),d=[c];function p(h,g){return r(),l("div",null,d)}const b=t(s,[["render",p],["__file","9a6.320-100.html.vue"]]),y=JSON.parse('{"path":"/9-example/9a.wings-change/9a6.320-100.html","title":"9A6.Upgrade 3.2.100","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"circle-up","category":["Practice","Upgrade"],"description":"9A6.Upgrade 3.2.100 Upgrade manual from 3.2.100 after having upgraded to 3.0.6-300, including, 3.2.101 AntiMage 3.2.110 ArcWarden 3.2.120 Bane 3.2.130 Batrider Anti-Mage 9A6.1.A...","GIT_REPO_HEAD":"2025-01-17 e638e7035dc7958e3f145793e37c871eb02f12d5","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/9-example/9a.wings-change/9a6.320-100.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/9-example/9a.wings-change/9a6.320-100.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"9A6.Upgrade 3.2.100"}],["meta",{"property":"og:description","content":"9A6.Upgrade 3.2.100 Upgrade manual from 3.2.100 after having upgraded to 3.0.6-300, including, 3.2.101 AntiMage 3.2.110 ArcWarden 3.2.120 Bane 3.2.130 Batrider Anti-Mage 9A6.1.A..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://wings.fessional.pro/antimage_minimap_icon.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-17T01:41:26.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2025-01-17T01:41:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9A6.Upgrade 3.2.100\\",\\"image\\":[\\"https://wings.fessional.pro/antimage_minimap_icon.png\\",\\"https://wings.fessional.pro/arcwarden_minimap_icon.png\\",\\"https://wings.fessional.pro/bane_minimap_icon.png\\",\\"https://wings.fessional.pro/batrider_minimap_icon.png\\"],\\"dateModified\\":\\"2025-01-17T01:41:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"9A6.1.AntiMage 3.2.101","slug":"_9a6-1-antimage-3-2-101","link":"#_9a6-1-antimage-3-2-101","children":[{"level":3,"title":"1a.SpringBoot Upgrade","slug":"_1a-springboot-upgrade","link":"#_1a-springboot-upgrade","children":[]},{"level":3,"title":"1b.Dependency Change","slug":"_1b-dependency-change","link":"#_1b-dependency-change","children":[]}]},{"level":2,"title":"9A6.2.ArcWarden 3.2.110","slug":"_9a6-2-arcwarden-3-2-110","link":"#_9a6-2-arcwarden-3-2-110","children":[{"level":3,"title":"2a.Feature Flags","slug":"_2a-feature-flags","link":"#_2a-feature-flags","children":[]},{"level":3,"title":"2b.Dependency Change","slug":"_2b-dependency-change","link":"#_2b-dependency-change","children":[]}]},{"level":2,"title":"9A6.3.Bane 3.2.120","slug":"_9a6-3-bane-3-2-120","link":"#_9a6-3-bane-3-2-120","children":[{"level":3,"title":"3a.Refactor Async,TTL","slug":"_3a-refactor-async-ttl","link":"#_3a-refactor-async-ttl","children":[]}]},{"level":2,"title":"9A6.4.Batrider 3.2.130","slug":"_9a6-4-batrider-3-2-130","link":"#_9a6-4-batrider-3-2-130","children":[{"level":3,"title":"4a.MapStruct live template wgme","slug":"_4a-mapstruct-live-template-wgme","link":"#_4a-mapstruct-live-template-wgme","children":[]},{"level":3,"title":"4b.LoginSuccessHandler State class","slug":"_4b-loginsuccesshandler-state-class","link":"#_4b-loginsuccesshandler-state-class","children":[]},{"level":3,"title":"4c.move IfNotXxx from EmptySugar to SetterSugar","slug":"_4c-move-ifnotxxx-from-emptysugar-to-settersugar","link":"#_4c-move-ifnotxxx-from-emptysugar-to-settersugar","children":[]},{"level":3,"title":"4d.mirana breaking change","slug":"_4d-mirana-breaking-change","link":"#_4d-mirana-breaking-change","children":[]},{"level":3,"title":"4e.codestyle CONTINUATION_INDENT_SIZE","slug":"_4e-codestyle-continuation-indent-size","link":"#_4e-codestyle-continuation-indent-size","children":[]},{"level":3,"title":"4f.jooq supporter dto","slug":"_4f-jooq-supporter-dto","link":"#_4f-jooq-supporter-dto","children":[]},{"level":3,"title":"4g.jackson and fastjson","slug":"_4g-jackson-and-fastjson","link":"#_4g-jackson-and-fastjson","children":[]},{"level":3,"title":"4h.schema change","slug":"_4h-schema-change","link":"#_4h-schema-change","children":[]},{"level":3,"title":"4i.silencer refactor","slug":"_4i-silencer-refactor","link":"#_4i-silencer-refactor","children":[]},{"level":3,"title":"4j.mail service signature","slug":"_4j-mail-service-signature","link":"#_4j-mail-service-signature","children":[]}]}],"git":{"createdTime":1703561529000,"updatedTime":1737078086000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":6}]},"readingTime":{"minutes":1.58,"words":474},"filePathRelative":"9-example/9a.wings-change/9a6.320-100.md","localizedDate":"December 26, 2023","autoDesc":true}');export{b as comp,y as data};
