import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as l,c as r,b as e,e as o,d as a,f as n}from"./app-mN42Vc4a.js";const d={},i=n('<h1 id="_2k-jooq-properties" tabindex="-1"><a class="header-anchor" href="#_2k-jooq-properties"><span>2K.Jooq Properties</span></a></h1><p>Properties about jooq.</p><h2 id="_2k-1-wings-jooq-conf-79-properties" tabindex="-1"><a class="header-anchor" href="#_2k-1-wings-jooq-conf-79-properties"><span>2K.1.wings-jooq-conf-79.properties</span></a></h2><p>The default switch for Jooq is,</p><h3 id="wings-faceless-jooq-conf-auto-qualify" tabindex="-1"><a class="header-anchor" href="#wings-faceless-jooq-conf-auto-qualify"><span>wings.faceless.jooq.conf.auto-qualify</span></a></h3><p><code>Boolean</code>=<code>true</code>, whether to enable jooq auto qualify.</p><h3 id="wings-faceless-jooq-conf-batch-mysql" tabindex="-1"><a class="header-anchor" href="#wings-faceless-jooq-conf-batch-mysql"><span>wings.faceless.jooq.conf.batch-mysql</span></a></h3><p><code>Boolean</code>=<code>true</code>, whether to use efficient mysql syntax when performing bulk inserts via Dao.</p><h3 id="wings-faceless-jooq-conf-converter" tabindex="-1"><a class="header-anchor" href="#wings-faceless-jooq-conf-converter"><span>wings.faceless.jooq.conf.converter</span></a></h3><p><code>Boolean</code>=<code>false</code>, whether to inject global converters, recommended in Table.</p><h3 id="wings-faceless-jooq-conf-journal-delete" tabindex="-1"><a class="header-anchor" href="#wings-faceless-jooq-conf-journal-delete"><span>wings.faceless.jooq.conf.journal-delete</span></a></h3><p><code>Boolean</code>=<code>false</code>, when deleting with commit_id, whether to update first and then delete.</p><h3 id="wings-faceless-jooq-conf-listen-table-cud" tabindex="-1"><a class="header-anchor" href="#wings-faceless-jooq-conf-listen-table-cud"><span>wings.faceless.jooq.conf.listen-table-cud</span></a></h3><p><code>Boolean</code>=<code>true</code>, whether to listen to table&#39;s create/update/delete.</p><h3 id="wings-faceless-jooq-conf-render-group-concat" tabindex="-1"><a class="header-anchor" href="#wings-faceless-jooq-conf-render-group-concat"><span>wings.faceless.jooq.conf.render-group-concat</span></a></h3><p><code>Boolean</code>=<code>false</code>, whether the jOOQ <code>GROUP_CONCAT</code> function should be overflow-protected by setting the <code>@@group_concat_max_len</code> session variable in MySQL style database</p><p>MySQL truncates &lt;<code>GROUP_CONCAT</code> results after a certain length, which may be way too small for jOOQ&#39;s usage, especially when using the <code>MULTISET</code> emulation. By default, jOOQ sets a session variable to the highest possible value prior to executing a query containing <code>GROUP_CONCAT</code>. This flag can be used to opt out of this.</p>',17),h={href:"https://github.com/jOOQ/jOOQ/issues/12092",target:"_blank",rel:"noopener noreferrer"},f={href:"https://blog.jooq.org/mysqls-allowmultiqueries-flag-with-jdbc-and-jooq/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.jooq.org/doc/3.17/manual/sql-building/dsl-context/custom-settings/settings-group-concat/",target:"_blank",rel:"noopener noreferrer"},u=n('<h3 id="wings-faceless-jooq-conf-render-catalog" tabindex="-1"><a class="header-anchor" href="#wings-faceless-jooq-conf-render-catalog"><span>wings.faceless.jooq.conf.render-catalog</span></a></h3><p><code>Boolean</code>=<code>false</code>, whether any catalog name should be rendered at all. Use this for single-catalog environments, or when all objects are made available using synonyms</p><h3 id="wings-faceless-jooq-conf-render-schema" tabindex="-1"><a class="header-anchor" href="#wings-faceless-jooq-conf-render-schema"><span>wings.faceless.jooq.conf.render-schema</span></a></h3><p><code>Boolean</code>=<code>false</code>, whether any schema name should be rendered at all. Setting this to false also implicitly sets &quot;renderCatalog&quot; to false. Use this for single-schema environments, or when all objects are made available using synonyms</p><h3 id="wings-faceless-jooq-conf-render-table" tabindex="-1"><a class="header-anchor" href="#wings-faceless-jooq-conf-render-table"><span>wings.faceless.jooq.conf.render-table</span></a></h3>',5),g=e("code",null,"RenderTable",-1),q=e("code",null,"ALWAYS",-1),j={href:"https://github.com/jOOQ/jOOQ/issues/8893",target:"_blank",rel:"noopener noreferrer"},w=n('<h2 id="_2k-2-wings-jooq-cud-79-properties" tabindex="-1"><a class="header-anchor" href="#_2k-2-wings-jooq-cud-79-properties"><span>2K.2.wings-jooq-cud-79.properties</span></a></h2><p>CUD listener settings for jooq.</p><h3 id="wings-faceless-jooq-cud-create" tabindex="-1"><a class="header-anchor" href="#wings-faceless-jooq-cud-create"><span>wings.faceless.jooq.cud.create</span></a></h3><p><code>Boolean</code>=<code>true</code>, Whether to listen to create</p><h3 id="wings-faceless-jooq-cud-update" tabindex="-1"><a class="header-anchor" href="#wings-faceless-jooq-cud-update"><span>wings.faceless.jooq.cud.update</span></a></h3><p><code>Boolean</code>=<code>true</code>, Whether to listen to update</p><h3 id="wings-faceless-jooq-cud-delete" tabindex="-1"><a class="header-anchor" href="#wings-faceless-jooq-cud-delete"><span>wings.faceless.jooq.cud.delete</span></a></h3><p><code>Boolean</code>=<code>true</code>, Whether to listen to delete</p><h3 id="wings-faceless-jooq-cud-table" tabindex="-1"><a class="header-anchor" href="#wings-faceless-jooq-cud-table"><span>wings.faceless.jooq.cud.table</span></a></h3><p><code>Map&lt;String, Set&lt;String&gt;&gt;</code>, Listening tables and their fields.</p><p>CUD listens to tables and fields, both tables and fields are case-sensitive, default,</p><ul><li><code>win_order</code>=<code>id,order_num</code></li></ul><h3 id="wings-faceless-jooq-cud-diff" tabindex="-1"><a class="header-anchor" href="#wings-faceless-jooq-cud-diff"><span>wings.faceless.jooq.cud.diff</span></a></h3><p><code>Map&lt;String, Set&lt;String&gt;&gt;</code>, default fields to be ignored by JournalDiff.</p><p>Tables are case-sensitive, fields are case-insensitive, <code>default</code> means all tables, otherwise specific tables.</p><ul><li><code>default</code>=<code>create_dt,modify_dt,delete_dt,commit_id</code></li></ul>',16);function b(_,m){const s=c("ExternalLinkIcon");return l(),r("div",null,[i,e("ul",null,[e("li",null,[e("a",h,[o("https://github.com/jOOQ/jOOQ/issues/12092"),a(s)])]),e("li",null,[e("a",f,[o("https://blog.jooq.org/mysqls-allowmultiqueries-flag-with-jdbc-and-jooq/"),a(s)])]),e("li",null,[e("a",p,[o("https://www.jooq.org/doc/3.17/manual/sql-building/dsl-context/custom-settings/settings-group-concat/"),a(s)])])]),u,e("p",null,[g,o("="),q,o(", should keep default. there are some issues "),e("a",j,[o("jOOQ/jOOQ#8893"),a(s)]),o(".")]),w])}const O=t(d,[["render",b],["__file","2k-prop-jooq.html.vue"]]);export{O as default};
