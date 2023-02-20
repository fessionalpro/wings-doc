import{_ as r}from"./faceless_icon-66e76779.js";import{_ as c,X as d,Y as h,$ as a,a1 as e,a0 as l,a4 as i,a3 as s,F as n}from"./framework-e2173353.js";const u={},_=s('<h1 id="_2-虚空假面" tabindex="-1"><a class="header-anchor" href="#_2-虚空假面" aria-hidden="true">#</a> 2.虚空假面</h1><p><img src="'+r+'" alt="faceless_void"></p><blockquote><p><code>Void</code>，J8脸, <code>public static void main</code><br> 他是来自超维视界的一名访客，一个时间之外的境域。</p></blockquote><p>数据层（MySql兼容系，如H2)封装。支持表和数据的版本管理，强类型支持，分表分库能力。</p><h2 id="_2-1-模块划分" tabindex="-1"><a class="header-anchor" href="#_2-1-模块划分" aria-hidden="true">#</a> 2.1.模块划分</h2><ul><li>faceless - 数据库基本功能和定义：锁，类型，enum和i18n等</li><li>faceless-flywave - 数据库版本管理</li><li>faceless-jooq - 基于Jooq的数据库访问层</li><li>faceless-jooqggen - jooq 代码生成</li><li>faceless-shard - 基于shardingsphere的分表分库配置</li><li>faceless-test - 测试包，含数据源</li></ul><h2 id="_2-2-分布式主键-lightid" tabindex="-1"><a class="header-anchor" href="#_2-2-分布式主键-lightid" aria-hidden="true">#</a> 2.2.分布式主键(LightId)</h2>',7),f=a("code",null,"snowflake",-1),p=a("code",null,"LightId",-1),m={href:"https://github.com/trydofor/pro.fessional.mirana",target:"_blank",rel:"noopener noreferrer"},v=s('<p>实现了基于JDBC的LightId，在Jooq生成pojo时，自动继承<code>LightIdAware</code>，可以当作key使用。 具体细节参考<code>LightIdService</code>的实现。</p><h2 id="_2-3-数据库enum类和多国语" tabindex="-1"><a class="header-anchor" href="#_2-3-数据库enum类和多国语" aria-hidden="true">#</a> 2.3.数据库Enum类和多国语</h2><p>schema版本2019_0521_01，定义了enum和i18n表，分别定义业务级枚举code，如状态， 可以使用<code>ConstantEnumGenerate</code>自动生成java类，保持db和java代码的一致。</p><p>i18n可以使用CombinableMessageSource动态添加，处理service内消息的多国语。</p><h2 id="_2-4-事件服务eventservice" tabindex="-1"><a class="header-anchor" href="#_2-4-事件服务eventservice" aria-hidden="true">#</a> 2.4.事件服务EventService</h2><p>单进程的异步和解耦，guava的EventBus和Spring的Event都可以胜任。 为单Jvm，多Jvm提高一个基于数据库的Event服务，主要用来，</p><ul><li>the event should extend ApplicationEvent</li><li>the publisher should inject an ApplicationEventPublisher object</li><li>the listener should implement the ApplicationListener interface</li><li>@EventListener 和 @TransactionalEventListener</li></ul>',7),b={href:"https://github.com/alibaba/transmittable-thread-local",target:"_blank",rel:"noopener noreferrer"},g=a("h2",{id:"_2-5-更多章节",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_2-5-更多章节","aria-hidden":"true"},"#"),e(" 2.5.更多章节")],-1);function q(x,E){const o=n("ExternalLinkIcon"),t=n("RouterLink");return d(),h("div",null,[_,a("p",null,[e("分布式主键有"),f,e("方案可选，但"),p,e("支持CRC8做伪随机编码使用。 参考"),a("a",m,[e("pro.fessioinal.mirana"),l(o)]),e("项目。")]),v,a("p",null,[e("对应线程池直接传递上下文，可使用"),a("a",b,[e("transmittable-thread-local"),l(o)])]),g,a("ul",null,[a("li",null,[l(t,{to:"/2-faceless/2a-flywave.html"},{default:i(()=>[e("表和数据的版本")]),_:1}),e(" - 以Sql和Git为核心，绑定表结构和代码关系")]),a("li",null,[l(t,{to:"/2-faceless/2b-jooq.html"},{default:i(()=>[e("强类型及DSL能力")]),_:1}),e(" - 从数据库生成强类型代码：pojo, dao")]),a("li",null,[l(t,{to:"/2-faceless/2c-shard.html"},{default:i(()=>[e("按需分表分库")]),_:1}),e(" - 完成数据的分表分库功能，平稳处理大数据量")]),a("li",null,[l(t,{to:"/2-faceless/2d-mysql-h2.html"},{default:i(()=>[e("Mysql体系的知识")]),_:1}),e(" - Mysql系数据库有关知识")]),a("li",null,[l(t,{to:"/2-faceless/2e-qa-flywave.html"},{default:i(()=>[e("Flywave话题")]),_:1}),e(" - Flywave版本及日志表有关")]),a("li",null,[l(t,{to:"/2-faceless/2f-qa-jooq.html"},{default:i(()=>[e("Jooq使用话题")]),_:1}),e(" - Jooq有关的话题")]),a("li",null,[l(t,{to:"/2-faceless/2g-qa-shard.html"},{default:i(()=>[e("分表分库话题")]),_:1}),e(" - Sharding有关的话题")]),a("li",null,[l(t,{to:"/2-faceless/2h-time-zone.html"},{default:i(()=>[e("分表分库话题")]),_:1}),e(" - 和数据库有关的时间和时区")])])])}const j=c(u,[["render",q],["__file","index.html.vue"]]);export{j as default};
