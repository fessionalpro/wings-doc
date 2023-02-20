import{_ as n,X as r,Y as a,$ as e,a1 as o,a0 as i,a3 as s,F as c}from"./framework-e2173353.js";const l={},d=e("h1",{id:"_9b4-多数据源操作",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_9b4-多数据源操作","aria-hidden":"true"},"#"),o(" 9B4.多数据源操作")],-1),u=e("p",null,"Wings默认单数据源，当出现多数据源需求时，Jooq使用的思路和注意事项。",-1),h=e("h2",{id:"_9b4-1-springboot手动",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_9b4-1-springboot手动","aria-hidden":"true"},"#"),o(" 9B4.1.SpringBoot手动")],-1),p=e("p",null,"特点：手动控制，掌控每一个操作。",-1),_=e("blockquote",null,[e("p",null,"If you need to use jOOQ with multiple data sources, you should create your own DSLContext for each one. See JooqAutoConfiguration for more details."),e("p",null,"In particular, JooqExceptionTranslator and SpringTransactionProvider can be reused to provide similar features to what the auto-configuration does with a single DataSource.")],-1),x={href:"https://docs.spring.io/spring-boot/docs/3.0.2/reference/htmlsingle/#howto.data-access.configure-jooq-with-multiple-datasources",target:"_blank",rel:"noopener noreferrer"},f=s('<p>但不能使用默认注入Dao操作，因其默认使用@Primary数据源。对数据的操作，</p><ul><li>使用DSLContext操作数据</li><li>先new Dao，然后setConfiguration(dsl.configuration())</li></ul><h2 id="_9b4-2-jooq自动" tabindex="-1"><a class="header-anchor" href="#_9b4-2-jooq自动" aria-hidden="true">#</a> 9B4.2.Jooq自动</h2><p>特点：可根据线程上下文，CURD类型，SQL参数，批量控制。</p><blockquote><p>void start(ExecuteContext ctx); Overridable attributes in ExecuteContext:</p><p>ExecuteContext.connectionProvider(ConnectionProvider): The connection provider used for execution. This may be particularly interesting if a Query was de-serialised and is thus lacking the underlying connection</p></blockquote><p>通过ExecuteListener执行时切换数据源，步骤如下，</p><ul><li>定义多数据源的ConnectionProvider</li><li>实现 ExecuteListener.start(ExecuteContext)</li><li>设置执行数据源 ExecuteContext.connectionProvider()</li></ul><h2 id="_9b4-3-shardingsphere自动" tabindex="-1"><a class="header-anchor" href="#_9b4-3-shardingsphere自动" aria-hidden="true">#</a> 9B4.3.ShardingSphere自动</h2><p>特点：依照分库的思路，切换数据源。</p><p>在不改变代码的情况下，使用ShardingSphere配置，在运行时自动切换数据。</p>',10);function b(g,m){const t=c("ExternalLinkIcon");return r(),a("div",null,[d,u,h,p,_,e("p",null,[o("根据"),e("a",x,[o("Configure jOOQ with Two DataSources"),i(t)]),o("，设置多个DSLContext即可。")]),f])}const S=n(l,[["render",b],["__file","9b4.multi-datasource.html.vue"]]);export{S as default};
