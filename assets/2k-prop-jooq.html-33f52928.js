import{_ as e,X as a,Y as o,a3 as d}from"./framework-e2173353.js";const s={},n=d('<h1 id="_2k-jooq的属性" tabindex="-1"><a class="header-anchor" href="#_2k-jooq的属性" aria-hidden="true">#</a> 2K.Jooq的属性</h1><p>有Flywave关于schema管理的配置。</p><h2 id="_2k-1-spring-wings-enabled-79-properties" tabindex="-1"><a class="header-anchor" href="#_2k-1-spring-wings-enabled-79-properties" aria-hidden="true">#</a> 2K.1.spring-wings-enabled-79.properties</h2><p>Flywave功能的默认开关，如下</p><h3 id="spring-wings-faceless-jooq-enabled-module" tabindex="-1"><a class="header-anchor" href="#spring-wings-faceless-jooq-enabled-module" aria-hidden="true">#</a> spring.wings.faceless.jooq.enabled.module</h3><p><code>Boolean</code>=<code>true</code>，是否开启jooq配置</p><h3 id="spring-wings-faceless-jooq-enabled-auto-qualify" tabindex="-1"><a class="header-anchor" href="#spring-wings-faceless-jooq-enabled-auto-qualify" aria-hidden="true">#</a> spring.wings.faceless.jooq.enabled.auto-qualify</h3><p><code>Boolean</code>=<code>true</code>，是否jooq自动设置qualify</p><h3 id="spring-wings-faceless-jooq-enabled-batch-mysql" tabindex="-1"><a class="header-anchor" href="#spring-wings-faceless-jooq-enabled-batch-mysql" aria-hidden="true">#</a> spring.wings.faceless.jooq.enabled.batch-mysql</h3><p><code>Boolean</code>=<code>true</code>，执行dao的批量插入时，使用高效的mysql语法</p><h3 id="spring-wings-faceless-jooq-enabled-converter" tabindex="-1"><a class="header-anchor" href="#spring-wings-faceless-jooq-enabled-converter" aria-hidden="true">#</a> spring.wings.faceless.jooq.enabled.converter</h3><p><code>Boolean</code>=<code>false</code>，是否注入全局converter，推荐Table中注入</p><h3 id="spring-wings-faceless-jooq-enabled-journal-delete" tabindex="-1"><a class="header-anchor" href="#spring-wings-faceless-jooq-enabled-journal-delete" aria-hidden="true">#</a> spring.wings.faceless.jooq.enabled.journal-delete</h3><p><code>Boolean</code>=<code>false</code>，delete且有commit_id时，是否先update再delete</p><h3 id="spring-wings-faceless-jooq-enabled-listen-table-cud" tabindex="-1"><a class="header-anchor" href="#spring-wings-faceless-jooq-enabled-listen-table-cud" aria-hidden="true">#</a> spring.wings.faceless.jooq.enabled.listen-table-cud</h3><p><code>Boolean</code>=<code>true</code>，是否监听table的create, update, delete</p><h2 id="_2k-2-wings-jooq-cud-79-properties" tabindex="-1"><a class="header-anchor" href="#_2k-2-wings-jooq-cud-79-properties" aria-hidden="true">#</a> 2K.2.wings-jooq-cud-79.properties</h2><p>jooq的CUD监听设置</p><h3 id="wings-faceless-jooq-cud-insert" tabindex="-1"><a class="header-anchor" href="#wings-faceless-jooq-cud-insert" aria-hidden="true">#</a> wings.faceless.jooq.cud.insert</h3><p><code>Boolean</code>=<code>true</code>，是否监听insert</p><h3 id="wings-faceless-jooq-cud-update" tabindex="-1"><a class="header-anchor" href="#wings-faceless-jooq-cud-update" aria-hidden="true">#</a> wings.faceless.jooq.cud.update</h3><p><code>Boolean</code>=<code>true</code>，是否监听update</p><h3 id="wings-faceless-jooq-cud-delete" tabindex="-1"><a class="header-anchor" href="#wings-faceless-jooq-cud-delete" aria-hidden="true">#</a> wings.faceless.jooq.cud.delete</h3><p><code>Boolean</code>=<code>true</code>，是否监听delete</p><h3 id="wings-faceless-jooq-cud-table" tabindex="-1"><a class="header-anchor" href="#wings-faceless-jooq-cud-table" aria-hidden="true">#</a> wings.faceless.jooq.cud.table</h3><p><code>Map&lt;String, Set&lt;String&gt;&gt;</code>，监听表及其字段。</p><p>cud监听的表及字段，表和字段都区分大小写，默认</p><ul><li><code>win_order</code>=<code>id,order_num</code></li></ul><h3 id="wings-faceless-jooq-cud-diff" tabindex="-1"><a class="header-anchor" href="#wings-faceless-jooq-cud-diff" aria-hidden="true">#</a> wings.faceless.jooq.cud.diff</h3><p><code>Map&lt;String, Set&lt;String&gt;&gt;</code>，JournalDiff默认的忽略字段</p><p>表区分大小写，字段不区分大小写，default表示所有表，否则为具体表。</p><ul><li><code>default</code>=<code>create_dt,modify_dt,delete_dt,commit_id</code></li></ul>',32),i=[n];function c(r,l){return a(),o("div",null,i)}const h=e(s,[["render",c],["__file","2k-prop-jooq.html.vue"]]);export{h as default};
