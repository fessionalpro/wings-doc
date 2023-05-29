import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as r,c as i,b as e,e as a,d as s,f as n}from"./app-76302e33.js";const l={},c=n('<h1 id="_2k-jooq-properties" tabindex="-1"><a class="header-anchor" href="#_2k-jooq-properties" aria-hidden="true">#</a> 2K.Jooq Properties</h1><p>Properties about jooq.</p><h2 id="_2k-1-spring-wings-enabled-79-properties" tabindex="-1"><a class="header-anchor" href="#_2k-1-spring-wings-enabled-79-properties" aria-hidden="true">#</a> 2K.1.spring-wings-enabled-79.properties</h2><p>The default switch for Jooq is,</p><h3 id="spring-wings-faceless-jooq-enabled-module" tabindex="-1"><a class="header-anchor" href="#spring-wings-faceless-jooq-enabled-module" aria-hidden="true">#</a> spring.wings.faceless.jooq.enabled.module</h3><p><code>Boolean</code>=<code>true</code>, whether to enable jooq config.</p><h3 id="spring-wings-faceless-jooq-enabled-auto-qualify" tabindex="-1"><a class="header-anchor" href="#spring-wings-faceless-jooq-enabled-auto-qualify" aria-hidden="true">#</a> spring.wings.faceless.jooq.enabled.auto-qualify</h3><p><code>Boolean</code>=<code>true</code>, whether to enable jooq auto qualify.</p><h3 id="spring-wings-faceless-jooq-enabled-batch-mysql" tabindex="-1"><a class="header-anchor" href="#spring-wings-faceless-jooq-enabled-batch-mysql" aria-hidden="true">#</a> spring.wings.faceless.jooq.enabled.batch-mysql</h3><p><code>Boolean</code>=<code>true</code>, whether to use efficient mysql syntax when performing bulk inserts via Dao.</p><h3 id="spring-wings-faceless-jooq-enabled-converter" tabindex="-1"><a class="header-anchor" href="#spring-wings-faceless-jooq-enabled-converter" aria-hidden="true">#</a> spring.wings.faceless.jooq.enabled.converter</h3><p><code>Boolean</code>=<code>false</code>, whether to inject global converters, recommended in Table.</p><h3 id="spring-wings-faceless-jooq-enabled-journal-delete" tabindex="-1"><a class="header-anchor" href="#spring-wings-faceless-jooq-enabled-journal-delete" aria-hidden="true">#</a> spring.wings.faceless.jooq.enabled.journal-delete</h3><p><code>Boolean</code>=<code>false</code>, when deleting with commit_id, whether to update first and then delete.</p><h3 id="spring-wings-faceless-jooq-enabled-listen-table-cud" tabindex="-1"><a class="header-anchor" href="#spring-wings-faceless-jooq-enabled-listen-table-cud" aria-hidden="true">#</a> spring.wings.faceless.jooq.enabled.listen-table-cud</h3><p><code>Boolean</code>=<code>true</code>, whether to listen to table&#39;s create/update/delete.</p><h3 id="spring-wings-faceless-jooq-enabled-render-group-concat" tabindex="-1"><a class="header-anchor" href="#spring-wings-faceless-jooq-enabled-render-group-concat" aria-hidden="true">#</a> spring.wings.faceless.jooq.enabled.render-group-concat</h3><p><code>Boolean</code>=<code>false</code>, whether the jOOQ <code>GROUP_CONCAT</code> function should be overflow-protected by setting the <code>@@group_concat_max_len</code> session variable in MySQL style database</p><p>MySQL truncates &lt;<code>GROUP_CONCAT</code> results after a certain length, which may be way too small for jOOQ&#39;s usage, especially when using the <code>MULTISET</code> emulation. By default, jOOQ sets a session variable to the highest possible value prior to executing a query containing <code>GROUP_CONCAT</code>. This flag can be used to opt out of this.</p>',19),h={href:"https://github.com/jOOQ/jOOQ/issues/12092",target:"_blank",rel:"noopener noreferrer"},g={href:"https://blog.jooq.org/mysqls-allowmultiqueries-flag-with-jdbc-and-jooq/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.jooq.org/doc/3.17/manual/sql-building/dsl-context/custom-settings/settings-group-concat/",target:"_blank",rel:"noopener noreferrer"},u=n('<h3 id="spring-wings-faceless-jooq-enabled-render-catalog" tabindex="-1"><a class="header-anchor" href="#spring-wings-faceless-jooq-enabled-render-catalog" aria-hidden="true">#</a> spring.wings.faceless.jooq.enabled.render-catalog</h3><p><code>Boolean</code>=<code>false</code>, whether any catalog name should be rendered at all. Use this for single-catalog environments, or when all objects are made available using synonyms</p><h3 id="spring-wings-faceless-jooq-enabled-render-schema" tabindex="-1"><a class="header-anchor" href="#spring-wings-faceless-jooq-enabled-render-schema" aria-hidden="true">#</a> spring.wings.faceless.jooq.enabled.render-schema</h3><p><code>Boolean</code>=<code>false</code>, whether any schema name should be rendered at all. Setting this to false also implicitly sets &quot;renderCatalog&quot; to false. Use this for single-schema environments, or when all objects are made available using synonyms</p><h2 id="_2k-2-wings-jooq-cud-79-properties" tabindex="-1"><a class="header-anchor" href="#_2k-2-wings-jooq-cud-79-properties" aria-hidden="true">#</a> 2K.2.wings-jooq-cud-79.properties</h2><p>CUD listener settings for jooq.</p><h3 id="wings-faceless-jooq-cud-insert" tabindex="-1"><a class="header-anchor" href="#wings-faceless-jooq-cud-insert" aria-hidden="true">#</a> wings.faceless.jooq.cud.insert</h3><p><code>Boolean</code>=<code>true</code>, Whether to listen to insert</p><h3 id="wings-faceless-jooq-cud-update" tabindex="-1"><a class="header-anchor" href="#wings-faceless-jooq-cud-update" aria-hidden="true">#</a> wings.faceless.jooq.cud.update</h3><p><code>Boolean</code>=<code>true</code>, Whether to listen to update</p><h3 id="wings-faceless-jooq-cud-delete" tabindex="-1"><a class="header-anchor" href="#wings-faceless-jooq-cud-delete" aria-hidden="true">#</a> wings.faceless.jooq.cud.delete</h3><p><code>Boolean</code>=<code>true</code>, Whether to listen to delete</p><h3 id="wings-faceless-jooq-cud-table" tabindex="-1"><a class="header-anchor" href="#wings-faceless-jooq-cud-table" aria-hidden="true">#</a> wings.faceless.jooq.cud.table</h3><p><code>Map&lt;String, Set&lt;String&gt;&gt;</code>, Listening tables and their fields.</p><p>CUD listens to tables and fields, both tables and fields are case-sensitive, default,</p><ul><li><code>win_order</code>=<code>id,order_num</code></li></ul><h3 id="wings-faceless-jooq-cud-diff" tabindex="-1"><a class="header-anchor" href="#wings-faceless-jooq-cud-diff" aria-hidden="true">#</a> wings.faceless.jooq.cud.diff</h3><p><code>Map&lt;String, Set&lt;String&gt;&gt;</code>, default fields to be ignored by JournalDiff.</p><p>Tables are case-sensitive, fields are case-insensitive, <code>default</code> means all tables, otherwise specific tables.</p><ul><li><code>default</code>=<code>create_dt,modify_dt,delete_dt,commit_id</code></li></ul>',20);function f(b,w){const o=d("ExternalLinkIcon");return r(),i("div",null,[c,e("ul",null,[e("li",null,[e("a",h,[a("https://github.com/jOOQ/jOOQ/issues/12092"),s(o)])]),e("li",null,[e("a",g,[a("https://blog.jooq.org/mysqls-allowmultiqueries-flag-with-jdbc-and-jooq/"),s(o)])]),e("li",null,[e("a",p,[a("https://www.jooq.org/doc/3.17/manual/sql-building/dsl-context/custom-settings/settings-group-concat/"),s(o)])])]),u])}const m=t(l,[["render",f],["__file","2k-prop-jooq.html.vue"]]);export{m as default};
