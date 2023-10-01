import{_ as c}from"./wings-ti6-champion-e8a8ca29.js";import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as r,c as t,b as l,d as o,w as a,e,f as n}from"./app-371aab79.js";const h={},u=n('<h1 id="_0-纹丝不忒" tabindex="-1"><a class="header-anchor" href="#_0-纹丝不忒" aria-hidden="true">#</a> 0.纹丝不忒</h1><p><img src="'+c+'" alt="wings ti6"></p><p>WingsBoot(代号神翼)是SpringBoot的一个脚手架，没有魔法和定制，主要有以下特点：</p><ul><li>提供了多语言多时区真实的解决方案（动态语言包，时区，夏令时，闰秒）</li><li>提供了数据库版本和数据的版本管理（安全的表变更，安全的数据维护）</li><li>安排了一套保守约定和稳健工程实践（枚举类，配置文件，模板等约定）</li><li>解决了软件开发中最难的命名问题（允许使用中文命名，解决行业黑话）</li><li>英雄池很深，对技能有独到的理解（读3遍官方文档，debug部分源码）</li><li>不懂代码的看文档，都不看的，别用（这是你的homework，及格线）</li></ul><p>其目标是使小创业团队，平稳的实现从单应用，到分表分库，到服务化的演变。 在任何项目阶段和业务规模下，能够，</p><ul><li>安全快速的重构业务，变更数据模型</li><li>对业务和数据有版本管理，保证兼容性</li><li>运行时的数据变化亦可追溯，复盘，恢复</li><li>对抗业务变化快，设计不足的技术债务</li></ul><h2 id="_0-1-版本号说明" tabindex="-1"><a class="header-anchor" href="#_0-1-版本号说明" aria-hidden="true">#</a> 0.1.版本号说明</h2><p>Wings版本号为<code>4段</code>，前3段为SpringBoot版本，第4段是build号。 build号为3位数字，首位是大版本，表示不兼容性；后2位是小版本，表示基本兼容或容易适配。</p><p>例如，<code>2.4.2.100-SNAPSHOT</code>，表示基于boot2.4.2，是wings的<code>1##</code>的系列。</p><p>wings使用了<code>revision</code>和<code>changelist</code>的CI占位属性，Maven需要3.5.0以上。</p><h2 id="_0-2-项目结构" tabindex="-1"><a class="header-anchor" href="#_0-2-项目结构" aria-hidden="true">#</a> 0.2.项目结构</h2><p>Wings由多个子项目构成，都采用了Dota有关的命名，主要包括以下，</p><ul><li>沉默术士 wings/silencer - springboot的工程化装配，I18n等</li><li>虚空假面 wings/faceless - 数据层，分表分库，数据及库的版本管理</li><li>鱼人守卫 wings/slardar - Servlet体系的WebMvc基础约定和封装</li><li>术士大叔 wings/warlock - 综合以上的基础业务模块和功能脚手架</li><li>蝙蝠骑士 wings/batrider - RPC和微服化</li><li>演示例子 example - 集成以上的样板工程和例子</li><li>旁观阵线 observe - 生态内关联项目</li><li>天辉阵线 radiant - 开箱即用的插拔功能模块</li></ul><h2 id="_0-3-技术选型" tabindex="-1"><a class="header-anchor" href="#_0-3-技术选型" aria-hidden="true">#</a> 0.3.技术选型</h2><p>遵循Unix哲学，部分回答了<code>为什么</code>和<code>为什么不</code>？</p><ul><li>SpringBoot - 事实标准，从业人员基数大，容易拉扯队伍和技术衔接。</li><li>Jooq/QueryDsl - 基于<code>限制的艺术</code>，看重其强类型而放弃流行的mybatis体系。 jooq强类型，可以受到IDE加持；不能写成过于复杂的SQL，有利于分库，分服务。</li><li>Kotlin - 比<code>scala</code>更胜任<code>更好的java</code>，目前仅在flywave支撑性项目中用了kotlin， 而在主要业务场景，仍然主张【少吃糖，写好java】</li><li>WebMvc - 尽管<code>webflux</code>在模型和性能好于servlet体系，但当前更多的是阻塞IO，多线程场景。</li><li>Lombok - 简化代码，使用了Experimental功能，开发时，需要自己在pom中引入。</li><li>Git-flow - git管理的最佳实践。</li><li>Guava, commons-lang3, commons-io - 进阶必备的工具包.</li><li>ShardingSphere - 分表分库，足以解决90%的<code>数据大</code>的问题。</li><li>Hazelcast - 相比于Redis，Hazelcast更简单，集成度更高。</li><li>ServiceComb - 更工程化和更紧凑的</li></ul><h2 id="_0-4-模块依赖" tabindex="-1"><a class="header-anchor" href="#_0-4-模块依赖" aria-hidden="true">#</a> 0.4.模块依赖</h2><p><code>lib</code>格式为依赖lib，否则为Wings模块或功能，无歧义时会简写，如curse, flywave等</p><ul><li>silencer ← mirana | <code>boot-starter</code> | Spring自动配置</li><li>silencer-curse ← silencer | <code>aop</code> | Wings基本功能</li><li>faceless ← curse | meepo | <code>jdbc</code> | 类型主键</li><li>faceless-autogen ← faceless | 自动生成的代码</li><li>faceless-awesome ← faceless-autogen | 依赖自动生成代码的功能</li><li>faceless-codegen ← faceless-jooq | <code>jooq-codegen</code> | 代码生成</li><li>faceless-flywave ← faceless | <code>kotlin</code> | 版本管理</li><li>faceless-jooq ← faceless-awesome | <code>jooq</code> | Jooq定制</li><li>faceless-shard ← faceless-awesome | <code>shardingsphere</code> | 分表分库</li><li>slardar ← curse | <code>jackson</code> | <code>fastjson</code> | <code>okhttp</code> | <code>cache</code> | <code>sentry</code> | 业务基础</li><li>slardar-hazel-caching ← slardar | <code>hazelcast</code> | 多级缓存</li><li>slardar-hazel-session ← hazel-caching | slardar-webmvc | 分布式会话</li><li>slardar-webmvc ← slardar | <code>starter-json</code> | <code>starter-web</code> | <code>undertow</code> | <code>security-web</code> | <code>springdoc</code> | Web增强</li><li>slardar-sprint ← hazel-caching | hazel-session | slardar-webmvc | <code>starter-security</code> | <code>starter-actuator</code> | <code>boot-admin</code> | Web集成</li><li>warlock ← slardar | faceless-jooq | Db基础</li><li>warlock-autogen ← slardar | 自动生成的代码</li><li>warlock-awesome ← slardar-autogen | 依赖自动生成代码的功能</li><li>warlock-codegen ← warlock-awesome | faceless-codegen | flywave</li><li>warlock-shadow ← slardar-sprint | warlock-awesome | <code>JustAuth</code> | Db|Web|权限</li><li>warlock-bond ← warlock-shadow | auth-perm体系</li></ul><h2 id="_0-5-更多章节" tabindex="-1"><a class="header-anchor" href="#_0-5-更多章节" aria-hidden="true">#</a> 0.5.更多章节</h2>',20);function f(g,p){const i=d("RouterLink");return r(),t("div",null,[u,l("ul",null,[l("li",null,[o(i,{to:"/zh/0-wings/0a-code-style.html"},{default:a(()=>[e("编码风格")]),_:1}),e(" - 价值观，编码哲学，编码风格")]),l("li",null,[o(i,{to:"/zh/0-wings/0b-rest-half.html"},{default:a(()=>[e("RestHalf规范")]),_:1}),e(" - 场景化业务的URL规范")]),l("li",null,[o(i,{to:"/zh/0-wings/0c-dev-tool.html"},{default:a(()=>[e("开发工具")]),_:1}),e(" - 工欲善其事，必先利其器")]),l("li",null,[o(i,{to:"/zh/0-wings/0d-qa-devops.html"},{default:a(()=>[e("开发运维")]),_:1}),e(" - 编码开发，线上运行等话题")]),l("li",null,[o(i,{to:"/zh/0-wings/0e-qa-config.html"},{default:a(()=>[e("配置话题")]),_:1}),e(" - maven，properties，spring的配置话题")]),l("li",null,[o(i,{to:"/zh/0-wings/0f-qa-others.html"},{default:a(()=>[e("其他话题")]),_:1}),e(" - 未归类的话题")]),l("li",null,[o(i,{to:"/zh/0-wings/0g-ghost-ship.html"},{default:a(()=>[e("幽灵船模型")]),_:1}),e(" - wings功能的基本构建模型")]),l("li",null,[o(i,{to:"/zh/0-wings/0h-prop-index.html"},{default:a(()=>[e("属性配置")]),_:1}),e(" - wings所有的属性配置")])])])}const b=s(h,[["render",f],["__file","index.html.vue"]]);export{b as default};