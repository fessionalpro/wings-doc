import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as n,o as c,c as d,b as a,e,d as l,w as o,f as s}from"./app.3a3f8823.js";const h="/faceless_icon.png",u={},_=s('<h1 id="_2-\u865A\u7A7A\u5047\u9762" tabindex="-1"><a class="header-anchor" href="#_2-\u865A\u7A7A\u5047\u9762" aria-hidden="true">#</a> 2.\u865A\u7A7A\u5047\u9762</h1><p><img src="'+h+'" alt="faceless_void"></p><blockquote><p><code>Void</code>\uFF0CJ8\u8138, <code>public static void main</code><br> \u4ED6\u662F\u6765\u81EA\u8D85\u7EF4\u89C6\u754C\u7684\u4E00\u540D\u8BBF\u5BA2\uFF0C\u4E00\u4E2A\u65F6\u95F4\u4E4B\u5916\u7684\u5883\u57DF\u3002</p></blockquote><p>\u6570\u636E\u5C42\uFF08MySql\u517C\u5BB9\u7CFB\uFF0C\u5982H2)\u5C01\u88C5\u3002\u652F\u6301\u8868\u548C\u6570\u636E\u7684\u7248\u672C\u7BA1\u7406\uFF0C\u5F3A\u7C7B\u578B\u652F\u6301\uFF0C\u5206\u8868\u5206\u5E93\u80FD\u529B\u3002</p><h2 id="_2-1-\u6A21\u5757\u5212\u5206" tabindex="-1"><a class="header-anchor" href="#_2-1-\u6A21\u5757\u5212\u5206" aria-hidden="true">#</a> 2.1.\u6A21\u5757\u5212\u5206</h2><ul><li>faceless - \u6570\u636E\u5E93\u57FA\u672C\u529F\u80FD\u548C\u5B9A\u4E49\uFF1A\u9501\uFF0C\u7C7B\u578B\uFF0Cenum\u548Ci18n\u7B49</li><li>faceless-flywave - \u6570\u636E\u5E93\u7248\u672C\u7BA1\u7406</li><li>faceless-jooq - \u57FA\u4E8EJooq\u7684\u6570\u636E\u5E93\u8BBF\u95EE\u5C42</li><li>faceless-jooqggen - jooq \u4EE3\u7801\u751F\u6210</li><li>faceless-shard - \u57FA\u4E8Eshardingsphere\u7684\u5206\u8868\u5206\u5E93\u914D\u7F6E</li><li>faceless-test - \u6D4B\u8BD5\u5305\uFF0C\u542B\u6570\u636E\u6E90</li></ul><h2 id="_2-2-\u5206\u5E03\u5F0F\u4E3B\u952E-lightid" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5206\u5E03\u5F0F\u4E3B\u952E-lightid" aria-hidden="true">#</a> 2.2.\u5206\u5E03\u5F0F\u4E3B\u952E(LightId)</h2>',7),f=a("code",null,"snowflake",-1),p=a("code",null,"LightId",-1),m={href:"https://github.com/trydofor/pro.fessional.mirana",target:"_blank",rel:"noopener noreferrer"},v=s('<p>\u5B9E\u73B0\u4E86\u57FA\u4E8EJDBC\u7684LightId\uFF0C\u5728Jooq\u751F\u6210pojo\u65F6\uFF0C\u81EA\u52A8\u7EE7\u627F<code>LightIdAware</code>\uFF0C\u53EF\u4EE5\u5F53\u4F5Ckey\u4F7F\u7528\u3002 \u5177\u4F53\u7EC6\u8282\u53C2\u8003<code>LightIdService</code>\u7684\u5B9E\u73B0\u3002</p><h2 id="_2-3-\u6570\u636E\u5E93enum\u7C7B\u548C\u591A\u56FD\u8BED" tabindex="-1"><a class="header-anchor" href="#_2-3-\u6570\u636E\u5E93enum\u7C7B\u548C\u591A\u56FD\u8BED" aria-hidden="true">#</a> 2.3.\u6570\u636E\u5E93Enum\u7C7B\u548C\u591A\u56FD\u8BED</h2><p>schema\u7248\u672C2019_0521_01\uFF0C\u5B9A\u4E49\u4E86enum\u548Ci18n\u8868\uFF0C\u5206\u522B\u5B9A\u4E49\u4E1A\u52A1\u7EA7\u679A\u4E3Ecode\uFF0C\u5982\u72B6\u6001\uFF0C \u53EF\u4EE5\u4F7F\u7528<code>ConstantEnumGenerate</code>\u81EA\u52A8\u751F\u6210java\u7C7B\uFF0C\u4FDD\u6301db\u548Cjava\u4EE3\u7801\u7684\u4E00\u81F4\u3002</p><p>i18n\u53EF\u4EE5\u4F7F\u7528CombinableMessageSource\u52A8\u6001\u6DFB\u52A0\uFF0C\u5904\u7406service\u5185\u6D88\u606F\u7684\u591A\u56FD\u8BED\u3002</p><h2 id="_2-4-\u4E8B\u4EF6\u670D\u52A1eventservice" tabindex="-1"><a class="header-anchor" href="#_2-4-\u4E8B\u4EF6\u670D\u52A1eventservice" aria-hidden="true">#</a> 2.4.\u4E8B\u4EF6\u670D\u52A1EventService</h2><p>\u5355\u8FDB\u7A0B\u7684\u5F02\u6B65\u548C\u89E3\u8026\uFF0Cguava\u7684EventBus\u548CSpring\u7684Event\u90FD\u53EF\u4EE5\u80DC\u4EFB\u3002 \u4E3A\u5355Jvm\uFF0C\u591AJvm\u63D0\u9AD8\u4E00\u4E2A\u57FA\u4E8E\u6570\u636E\u5E93\u7684Event\u670D\u52A1\uFF0C\u4E3B\u8981\u7528\u6765\uFF0C</p><ul><li>the event should extend ApplicationEvent</li><li>the publisher should inject an ApplicationEventPublisher object</li><li>the listener should implement the ApplicationListener interface</li><li>@EventListener \u548C @TransactionalEventListener</li></ul>',7),b={href:"https://github.com/alibaba/transmittable-thread-local",target:"_blank",rel:"noopener noreferrer"},g=a("h2",{id:"_2-5-\u66F4\u591A\u7AE0\u8282",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_2-5-\u66F4\u591A\u7AE0\u8282","aria-hidden":"true"},"#"),e(" 2.5.\u66F4\u591A\u7AE0\u8282")],-1);function q(x,E){const i=n("ExternalLinkIcon"),t=n("RouterLink");return c(),d("div",null,[_,a("p",null,[e("\u5206\u5E03\u5F0F\u4E3B\u952E\u6709"),f,e("\u65B9\u6848\u53EF\u9009\uFF0C\u4F46"),p,e("\u652F\u6301CRC8\u505A\u4F2A\u968F\u673A\u7F16\u7801\u4F7F\u7528\u3002 \u53C2\u8003"),a("a",m,[e("pro.fessioinal.mirana"),l(i)]),e("\u9879\u76EE\u3002")]),v,a("p",null,[e("\u5BF9\u5E94\u7EBF\u7A0B\u6C60\u76F4\u63A5\u4F20\u9012\u4E0A\u4E0B\u6587\uFF0C\u53EF\u4F7F\u7528"),a("a",b,[e("transmittable-thread-local"),l(i)])]),g,a("ul",null,[a("li",null,[l(t,{to:"/2-faceless/2a-flywave.html"},{default:o(()=>[e("\u8868\u548C\u6570\u636E\u7684\u7248\u672C")]),_:1}),e(" - \u4EE5Sql\u548CGit\u4E3A\u6838\u5FC3\uFF0C\u7ED1\u5B9A\u8868\u7ED3\u6784\u548C\u4EE3\u7801\u5173\u7CFB")]),a("li",null,[l(t,{to:"/2-faceless/2b-jooq.html"},{default:o(()=>[e("\u5F3A\u7C7B\u578B\u53CADSL\u80FD\u529B")]),_:1}),e(" - \u4ECE\u6570\u636E\u5E93\u751F\u6210\u5F3A\u7C7B\u578B\u4EE3\u7801\uFF1Apojo, dao")]),a("li",null,[l(t,{to:"/2-faceless/2c-shard.html"},{default:o(()=>[e("\u6309\u9700\u5206\u8868\u5206\u5E93")]),_:1}),e(" - \u5B8C\u6210\u6570\u636E\u7684\u5206\u8868\u5206\u5E93\u529F\u80FD\uFF0C\u5E73\u7A33\u5904\u7406\u5927\u6570\u636E\u91CF")]),a("li",null,[l(t,{to:"/2-faceless/2d-mysql-h2.html"},{default:o(()=>[e("Mysql\u4F53\u7CFB\u7684\u77E5\u8BC6")]),_:1}),e(" - Mysql\u7CFB\u6570\u636E\u5E93\u6709\u5173\u77E5\u8BC6")]),a("li",null,[l(t,{to:"/2-faceless/2e-qa-flywave.html"},{default:o(()=>[e("Flywave\u8BDD\u9898")]),_:1}),e(" - Flywave\u7248\u672C\u53CA\u65E5\u5FD7\u8868\u6709\u5173")]),a("li",null,[l(t,{to:"/2-faceless/2f-qa-jooq.html"},{default:o(()=>[e("Jooq\u4F7F\u7528\u8BDD\u9898")]),_:1}),e(" - Jooq\u6709\u5173\u7684\u8BDD\u9898")]),a("li",null,[l(t,{to:"/2-faceless/2g-qa-shard.html"},{default:o(()=>[e("\u5206\u8868\u5206\u5E93\u8BDD\u9898")]),_:1}),e(" - Sharding\u6709\u5173\u7684\u8BDD\u9898")]),a("li",null,[l(t,{to:"/2-faceless/2h-time-zone.html"},{default:o(()=>[e("\u5206\u8868\u5206\u5E93\u8BDD\u9898")]),_:1}),e(" - \u548C\u6570\u636E\u5E93\u6709\u5173\u7684\u65F6\u95F4\u548C\u65F6\u533A")])])])}const j=r(u,[["render",q],["__file","index.html.vue"]]);export{j as default};