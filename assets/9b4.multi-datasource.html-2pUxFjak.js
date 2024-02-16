import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as n,o as r,c as i,b as e,e as t,d as l,f as s}from"./app-RvkmO4dA.js";const c={},u=e("h1",{id:"_9b4-multiple-datasource",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_9b4-multiple-datasource"},[e("span",null,"9B4.Multiple DataSource")])],-1),d=e("p",null,"Wings uses single data source by default, when there are multiple data sources, the ideas and considerations of using Jooq.",-1),p=e("h2",{id:"_9b4-1-springboot-manually",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_9b4-1-springboot-manually"},[e("span",null,"9B4.1.SpringBoot Manually")])],-1),h=e("p",null,"Features: Manual control, control every operation.",-1),m=e("blockquote",null,[e("p",null,"If you need to use jOOQ with multiple data sources, you should create your own DSLContext for each one. See JooqAutoConfiguration for more details."),e("p",null,"In particular, JooqExceptionTranslator and SpringTransactionProvider can be reused to provide similar features to what the auto-configuration does with a single DataSource.")],-1),g={href:"https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#howto.data-access.configure-jooq-with-multiple-datasources",target:"_blank",rel:"noopener noreferrer"},f=s('<p>However, you cannot use the default Dao injection, because it uses the @Primary data source by default. operations on data.</p><ul><li>Use DSLContext to manipulate data</li><li>first new Dao, then setConfiguration(dsl.configuration())</li></ul><h2 id="_9b4-2-jooq-automatically" tabindex="-1"><a class="header-anchor" href="#_9b4-2-jooq-automatically"><span>9B4.2.Jooq Automatically</span></a></h2><p>Features: Batch control via the thread context, CURD type, SQL parameters.</p><blockquote><p>void start(ExecuteContext ctx); Overridable attributes in ExecuteContext:</p><p>ExecuteContext.connectionProvider(ConnectionProvider): The connection provider used for execution. This may be particularly interesting if a Query was de-serialised and is thus lacking the underlying connection</p></blockquote><p>Switch datasource at execution time using ExecuteListener, the steps are as follows</p><ul><li>Define the ConnectionProvider for multiple datasources</li><li>Implement ExecuteListener.start(ExecuteContext)</li><li>Set the execution datasource ExecuteContext.connectionProvider()</li></ul><h2 id="_9b4-3-shardingsphere-automatically" tabindex="-1"><a class="header-anchor" href="#_9b4-3-shardingsphere-automatically"><span>9B4.3.ShardingSphere Automatically</span></a></h2><p>Features: Switch data sources according to the idea of R/W separation.</p><p>Automatically switch data at runtime without changing the code, using ShardingSphere configuration.</p>',10);function y(b,_){const o=n("ExternalLinkIcon");return r(),i("div",null,[u,d,p,h,m,e("p",null,[t("According to"),e("a",g,[t("Configure jOOQ with Two DataSources"),l(o)]),t(", Just set multiple DSLContext.")]),f])}const w=a(c,[["render",y],["__file","9b4.multi-datasource.html.vue"]]),B=JSON.parse('{"path":"/9-example/9b.spring-boot/9b4.multi-datasource.html","title":"9B4.Multiple DataSource","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"leaf","category":["Practice","Knowledge"],"description":"9B4.Multiple DataSource Wings uses single data source by default, when there are multiple data sources, the ideas and considerations of using Jooq. 9B4.1.SpringBoot Manually Fea...","GIT_REPO_HEAD":"2024-02-16 3fdd45de377187002fd49a06332fb14346c10eb1","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/9-example/9b.spring-boot/9b4.multi-datasource.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/9-example/9b.spring-boot/9b4.multi-datasource.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"9B4.Multiple DataSource"}],["meta",{"property":"og:description","content":"9B4.Multiple DataSource Wings uses single data source by default, when there are multiple data sources, the ideas and considerations of using Jooq. 9B4.1.SpringBoot Manually Fea..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-18T08:37:26.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2023-06-18T08:37:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9B4.Multiple DataSource\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-18T08:37:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"9B4.1.SpringBoot Manually","slug":"_9b4-1-springboot-manually","link":"#_9b4-1-springboot-manually","children":[]},{"level":2,"title":"9B4.2.Jooq Automatically","slug":"_9b4-2-jooq-automatically","link":"#_9b4-2-jooq-automatically","children":[]},{"level":2,"title":"9B4.3.ShardingSphere Automatically","slug":"_9b4-3-shardingsphere-automatically","link":"#_9b4-3-shardingsphere-automatically","children":[]}],"git":{"createdTime":1680228107000,"updatedTime":1687077446000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":3}]},"readingTime":{"minutes":0.77,"words":232},"filePathRelative":"9-example/9b.spring-boot/9b4.multi-datasource.md","localizedDate":"March 31, 2023","autoDesc":true}');export{w as comp,B as data};
