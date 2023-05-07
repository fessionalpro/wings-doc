import{_ as e,Y as a,Z as s,a4 as n}from"./framework-9e4b0469.js";const i={},d=n(`<h1 id="_2i-faceless-properties" tabindex="-1"><a class="header-anchor" href="#_2i-faceless-properties" aria-hidden="true">#</a> 2I.Faceless Properties</h1><p>Basic properties about database, data manipulation, Db level I18n.</p><h2 id="_2i-1-spring-wings-enabled-79-properties" tabindex="-1"><a class="header-anchor" href="#_2i-1-spring-wings-enabled-79-properties" aria-hidden="true">#</a> 2I.1.spring-wings-enabled-79.properties</h2><p>The default switch for Faceless is,</p><h3 id="spring-wings-faceless-enabled-autoconf" tabindex="-1"><a class="header-anchor" href="#spring-wings-faceless-enabled-autoconf" aria-hidden="true">#</a> spring.wings.faceless.enabled.autoconf</h3><p><code>Boolean</code>=<code>true</code>, Whether to start auto-configuration</p><h3 id="spring-wings-faceless-enabled-lightid" tabindex="-1"><a class="header-anchor" href="#spring-wings-faceless-enabled-lightid" aria-hidden="true">#</a> spring.wings.faceless.enabled.lightid</h3><p><code>Boolean</code>=<code>true</code>, Whether to inject lingthid</p><h3 id="spring-wings-faceless-enabled-journal" tabindex="-1"><a class="header-anchor" href="#spring-wings-faceless-enabled-journal" aria-hidden="true">#</a> spring.wings.faceless.enabled.journal</h3><p><code>Boolean</code>=<code>true</code>, Whether to inject journal</p><h3 id="spring-wings-faceless-enabled-enumi18n" tabindex="-1"><a class="header-anchor" href="#spring-wings-faceless-enabled-enumi18n" aria-hidden="true">#</a> spring.wings.faceless.enabled.enumi18n</h3><p><code>Boolean</code>=<code>false</code>, Whether to inject StandardI18nService</p><h2 id="_2i-2-spring-hikari-79-properties" tabindex="-1"><a class="header-anchor" href="#_2i-2-spring-hikari-79-properties" aria-hidden="true">#</a> 2I.2.spring-hikari-79.properties</h2><p>Properties of spring.datasource.hikari as follows,</p><ul><li><code>spring.datasource.hikari.pool-name</code>=<code>wings-hikari-cp</code></li><li><code>spring.datasource.hikari.maximum-pool-size</code>=<code>20</code></li><li><code>spring.datasource.hikari.auto-commit</code>=<code>true</code></li><li><code>spring.datasource.hikari.connection-timeout</code>=<code>30000</code></li><li><code>spring.datasource.hikari.idle-timeout</code>=<code>600000</code></li><li><code>spring.datasource.hikari.max-lifetime</code>=<code>1800000</code></li><li><code>spring.datasource.hikari.leak-detection-threshold</code>=<code>15000</code></li></ul><h2 id="_2i-3-wings-flywave-fit-79-properties" tabindex="-1"><a class="header-anchor" href="#_2i-3-wings-flywave-fit-79-properties" aria-hidden="true">#</a> 2I.3.wings-flywave-fit-79.properties</h2><p>Do database version checking for faceless-id-log dependencies via flywave.</p><h3 id="wings-faceless-flywave-fit-faceless-id-log-path" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-fit-faceless-id-log-path" aria-hidden="true">#</a> wings.faceless.flywave.fit.faceless-id-log.path</h3><p><code>Set&lt;String&gt;</code>=<code>classpath*:/wings-flywave/master/01-light/*.sql</code></p><p>sql scan pattern, comma separated. PathMatchingResourcePatternResolver format</p><h3 id="wings-faceless-flywave-fit-faceless-id-log-revi" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-fit-faceless-id-log-revi" aria-hidden="true">#</a> wings.faceless.flywave.fit.faceless-id-log.revi</h3><p><code>Set&lt;String&gt;</code>=<code>2019_0520_01L</code>. revision, comma separated.</p><h3 id="wings-faceless-flywave-fit-faceless-id-log-lost" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-fit-faceless-id-log-lost" aria-hidden="true">#</a> wings.faceless.flywave.fit.faceless-id-log.lost</h3><p><code>String</code>=<code>WARN</code>. <code>SKIP</code>-skip|<code>WARN</code>-warn|<code>FAIL</code>-exception|<code>EXEC</code>-force to exec</p><p>Post check, if the specified revi is not applied, only upgrade can be performed, not downgrade to avoid dangerous delete.</p><h2 id="_2i-4-wings-lightid-79-properties" tabindex="-1"><a class="header-anchor" href="#_2i-4-wings-lightid-79-properties" aria-hidden="true">#</a> 2I.4.wings-lightid-79.properties</h2><p>The setting for the distributed PK- lightid. default transaction is Propagation.REQUIRES_NEW</p><h3 id="wings-faceless-lightid-insert-auto" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-insert-auto" aria-hidden="true">#</a> wings.faceless.lightid.insert.auto</h3><p><code>Boolean</code>=<code>true</code>, If the current ID of name and block does not exist, insert new one or throw an exception.</p><h3 id="wings-faceless-lightid-insert-next" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-insert-next" aria-hidden="true">#</a> wings.faceless.lightid.insert.next</h3><p><code>Long</code>=1000, The first value when auto-insert, recommended to start with 1000, as the value below is used manually.</p><h3 id="wings-faceless-lightid-insert-step" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-insert-step" aria-hidden="true">#</a> wings.faceless.lightid.insert.step</h3><p><code>Long</code>=100, The step value when auto-insert.</p><h3 id="wings-faceless-lightid-loader-timeout" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-loader-timeout" aria-hidden="true">#</a> wings.faceless.lightid.loader.timeout</h3><p><code>Long</code>=5000, timeout millis of loading.</p><h3 id="wings-faceless-lightid-loader-max-error" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-loader-max-error" aria-hidden="true">#</a> wings.faceless.lightid.loader.max-error</h3><p><code>Integer</code>=5, max error count of loading.</p><h3 id="wings-faceless-lightid-loader-max-count" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-loader-max-count" aria-hidden="true">#</a> wings.faceless.lightid.loader.max-count</h3><p><code>Integer</code>=10000, max id count of per loading.</p><h3 id="wings-faceless-lightid-loader-err-alive" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-loader-err-alive" aria-hidden="true">#</a> wings.faceless.lightid.loader.err-alive</h3><p><code>Long</code>=120000, no attempt in number of millis if error exists.</p><h3 id="wings-faceless-lightid-provider-block-type" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-provider-block-type" aria-hidden="true">#</a> wings.faceless.lightid.provider.block-type</h3><p><code>String</code>=<code>sql</code>, method to provide blockId</p><ul><li><code>sql</code> - query database, return the id</li><li><code>fix</code> - fixed number, int</li><li><code>biz</code> - use a custom business bean</li></ul><h3 id="wings-faceless-lightid-provider-block-para" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-provider-block-para" aria-hidden="true">#</a> wings.faceless.lightid.provider.block-para</h3><p><code>String</code>, parameters of the provide method, select for sql, and number for fix.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> block_id
<span class="token keyword">FROM</span> sys_light_sequence 
<span class="token keyword">WHERE</span> seq_name <span class="token operator">=</span> <span class="token string">&#39;singleton_lightid_blockid&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-faceless-lightid-provider-sequence-insert" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-provider-sequence-insert" aria-hidden="true">#</a> wings.faceless.lightid.provider.sequence-insert</h3><p><code>String</code>, insert statement for JdbcTemplate.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> sys_light_sequence
<span class="token punctuation">(</span>seq_name<span class="token punctuation">,</span> block_id<span class="token punctuation">,</span> next_val<span class="token punctuation">,</span> step_val<span class="token punctuation">,</span> comments<span class="token punctuation">)</span> 
<span class="token keyword">VALUES</span> <span class="token punctuation">(</span>?<span class="token punctuation">,</span>?<span class="token punctuation">,</span>?<span class="token punctuation">,</span>?<span class="token punctuation">,</span>?<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>See <code>LightSequenceModifyJdbc</code> for details, the parameters are,</p><ul><li><code>String</code> seq_name - sequence name</li><li><code>int</code> block_id - data block id</li><li><code>long</code> next_val - next seq</li><li><code>int</code> step_val - step value</li><li><code>String</code> comments - description</li></ul><h3 id="wings-faceless-lightid-provider-sequence-update" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-provider-sequence-update" aria-hidden="true">#</a> wings.faceless.lightid.provider.sequence-update</h3><p><code>String</code>, update statement for JdbcTemplate.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">UPDATE</span> sys_light_sequence 
<span class="token keyword">SET</span> next_val<span class="token operator">=</span>? 
<span class="token keyword">WHERE</span> block_id<span class="token operator">=</span>? <span class="token operator">AND</span> seq_name<span class="token operator">=</span>? <span class="token operator">AND</span> next_val<span class="token operator">=</span>?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>See <code>LightSequenceModifyJdbc</code> for details, the parameters are,</p><ul><li><code>long</code> next_val_new - new seq value</li><li><code>int</code> block_id - data block id</li><li><code>String</code> seq_name - sequence name</li><li><code>long</code> next_val_old - old seq value</li></ul><h3 id="wings-faceless-lightid-provider-sequence-get-one" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-provider-sequence-get-one" aria-hidden="true">#</a> wings.faceless.lightid.provider.sequence-get-one</h3><p><code>String</code>, fetch one sql for JdbcTemplate.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> next_val<span class="token punctuation">,</span> step_val 
<span class="token keyword">FROM</span> sys_light_sequence 
<span class="token keyword">WHERE</span> block_id<span class="token operator">=</span>? <span class="token operator">AND</span> seq_name<span class="token operator">=</span>? <span class="token keyword">FOR</span> <span class="token keyword">UPDATE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>See <code>LightSequenceSelectJdbc</code> for details, the parameters are,</p><ul><li><code>int</code> block_id - data block id</li><li><code>String</code> seq_name - sequence name</li></ul><h3 id="wings-faceless-lightid-provider-sequence-get-all" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-provider-sequence-get-all" aria-hidden="true">#</a> wings.faceless.lightid.provider.sequence-get-all</h3><p><code>String</code>, fetch all sql for JdbcTemplate.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> seq_name<span class="token punctuation">,</span> next_val<span class="token punctuation">,</span> step_val 
<span class="token keyword">FROM</span> sys_light_sequence 
<span class="token keyword">WHERE</span> block_id<span class="token operator">=</span>? <span class="token keyword">FOR</span> <span class="token keyword">UPDATE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>See <code>LightSequenceSelectJdbc</code> for details, the parameters are,</p><ul><li><code>int</code> block_id - data block id</li></ul><h3 id="wings-faceless-lightid-provider-sequence-adjust" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-provider-sequence-adjust" aria-hidden="true">#</a> wings.faceless.lightid.provider.sequence-adjust</h3><p><code>String</code>, try to verify and adjust the id in the database to make it correct. Set to <code>∅</code> to ignore this feature.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> table_name<span class="token punctuation">,</span> column_name 
<span class="token keyword">FROM</span> INFORMATION_SCHEMA<span class="token punctuation">.</span><span class="token keyword">COLUMNS</span> 
<span class="token keyword">WHERE</span> table_schema <span class="token operator">=</span> <span class="token keyword">DATABASE</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token operator">AND</span> UPPER<span class="token punctuation">(</span>column_key<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;PRI&#39;</span> 
<span class="token operator">AND</span> UPPER<span class="token punctuation">(</span>column_type<span class="token punctuation">)</span> <span class="token operator">like</span> <span class="token string">&#39;%INT%&#39;</span> 
<span class="token operator">AND</span> table_name <span class="token operator">=</span> ?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Enter <code>table name</code> (as sequence name), return <code>table name</code> and <code>column name</code> in the database.</p><h3 id="wings-faceless-lightid-layout-block-bits" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-layout-block-bits" aria-hidden="true">#</a> wings.faceless.lightid.layout.block-bits</h3><p><code>Integer</code>=<code>∅</code>, the number of block bytes, in the range [3,23], empty by default. LightId is 9 by default, so 2^9=512 zones.</p><h3 id="wings-faceless-lightid-layout-block-first" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-layout-block-first" aria-hidden="true">#</a> wings.faceless.lightid.layout.block-first</h3><p><code>Boolean</code>=<code>∅</code>, sequence layout, whether Block precedes Sequence, empty by default. LightId is true by default</p>`,75),o=[d];function t(l,c){return a(),s("div",null,o)}const p=e(i,[["render",t],["__file","2i-prop-faceless.html.vue"]]);export{p as default};
