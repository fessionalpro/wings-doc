import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as n}from"./app-mN42Vc4a.js";const i={},l=n(`<h1 id="_2i-虚空的属性" tabindex="-1"><a class="header-anchor" href="#_2i-虚空的属性"><span>2I.虚空的属性</span></a></h1><p>有关数据库，数据操作，Db层面I18n的基本属性。</p><h2 id="_2i-1-spring-hikari-79-properties" tabindex="-1"><a class="header-anchor" href="#_2i-1-spring-hikari-79-properties"><span>2I.1.spring-hikari-79.properties</span></a></h2><p>为spring.datasource.hikari提供以下配置</p><ul><li><code>spring.datasource.hikari.pool-name</code>=<code>wings-hikari-cp</code></li><li><code>spring.datasource.hikari.maximum-pool-size</code>=<code>20</code></li><li><code>spring.datasource.hikari.auto-commit</code>=<code>true</code></li><li><code>spring.datasource.hikari.connection-timeout</code>=<code>30000</code></li><li><code>spring.datasource.hikari.idle-timeout</code>=<code>600000</code></li><li><code>spring.datasource.hikari.max-lifetime</code>=<code>1800000</code></li><li><code>spring.datasource.hikari.leak-detection-threshold</code>=<code>15000</code></li></ul><h2 id="_2i-2-wings-flywave-fit-79-properties" tabindex="-1"><a class="header-anchor" href="#_2i-2-wings-flywave-fit-79-properties"><span>2I.2.wings-flywave-fit-79.properties</span></a></h2><p>通过flywave对faceless-id-log依赖的做数据库版本检查。</p><h3 id="wings-faceless-flywave-fit-faceless-id-log-path" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-fit-faceless-id-log-path"><span>wings.faceless.flywave.fit.faceless-id-log.path</span></a></h3><p><code>Set&lt;String&gt;</code>=<code>classpath*:/wings-flywave/master/01-light/*.sql</code></p><p>sql扫描pattern，逗号分隔。PathMatchingResourcePatternResolver格式</p><h3 id="wings-faceless-flywave-fit-faceless-id-log-revi" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-fit-faceless-id-log-revi"><span>wings.faceless.flywave.fit.faceless-id-log.revi</span></a></h3><p><code>Set&lt;String&gt;</code>=<code>2019_0520_01L</code>。revision，逗号分隔。</p><h3 id="wings-faceless-flywave-fit-faceless-id-log-lost" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-fit-faceless-id-log-lost"><span>wings.faceless.flywave.fit.faceless-id-log.lost</span></a></h3><p><code>String</code>=<code>WARN</code>。<code>SKIP</code>-跳过|<code>WARN</code>-警告|<code>FAIL</code>-异常|<code>EXEC</code>-强制执行</p><p>补漏行为，任一指定revi未应用时，只升级不能降级，避免危险的删除动作</p><h2 id="_2i-3-wings-lightid-79-properties" tabindex="-1"><a class="header-anchor" href="#_2i-3-wings-lightid-79-properties"><span>2I.3.wings-lightid-79.properties</span></a></h2><p>对分布式主键lightid的设置。默认事务级别，Propagation.REQUIRES_NEW</p><h3 id="wings-faceless-lightid-insert-auto" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-insert-auto"><span>wings.faceless.lightid.insert.auto</span></a></h3><p><code>Boolean</code>=<code>true</code>，当前name和block的id不存在时，插入还是异常。</p><h3 id="wings-faceless-lightid-insert-next" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-insert-next"><span>wings.faceless.lightid.insert.next</span></a></h3><p><code>Long</code>=1000,自动insert时的首值，建议1000起，之下为手动生成。</p><h3 id="wings-faceless-lightid-insert-step" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-insert-step"><span>wings.faceless.lightid.insert.step</span></a></h3><p><code>Long</code>=100，自动insert时的步长。</p><h3 id="wings-faceless-lightid-provider-timeout" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-provider-timeout"><span>wings.faceless.lightid.provider.timeout</span></a></h3><p><code>Long</code>=5000，加载时视为超时的毫秒数</p><h3 id="wings-faceless-lightid-provider-max-error" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-provider-max-error"><span>wings.faceless.lightid.provider.max-error</span></a></h3><p><code>Integer</code>=5，加载错误时最大尝试次数</p><h3 id="wings-faceless-lightid-provider-max-count" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-provider-max-count"><span>wings.faceless.lightid.provider.max-count</span></a></h3><p><code>Integer</code>=10000，加载成功加载的最大数量</p><h3 id="wings-faceless-lightid-provider-err-alive" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-provider-err-alive"><span>wings.faceless.lightid.provider.err-alive</span></a></h3><p><code>Long</code>=120000，错误存在毫秒数，期间不尝试。</p><h3 id="wings-faceless-lightid-provider-block-type" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-provider-block-type"><span>wings.faceless.lightid.provider.block-type</span></a></h3><p><code>String</code>=<code>sql</code>，blockId提供方法</p><ul><li><code>sql</code> - 查询数据库，唯一返回值为id</li><li><code>fix</code> - 固定数字，int</li><li><code>biz</code> - 使用自定义的业务Bean</li></ul><h3 id="wings-faceless-lightid-provider-block-para" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-provider-block-para"><span>wings.faceless.lightid.provider.block-para</span></a></h3><p><code>String</code>，提供方式的参数，sql时为select，fix为数字。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> block_id
<span class="token keyword">FROM</span> sys_light_sequence 
<span class="token keyword">WHERE</span> seq_name <span class="token operator">=</span> <span class="token string">&#39;singleton_lightid_blockid&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-faceless-lightid-provider-sequence-insert" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-provider-sequence-insert"><span>wings.faceless.lightid.provider.sequence-insert</span></a></h3><p><code>String</code>，插入语句。JdbcTemplate的sql，</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> sys_light_sequence
<span class="token punctuation">(</span>seq_name<span class="token punctuation">,</span> block_id<span class="token punctuation">,</span> next_val<span class="token punctuation">,</span> step_val<span class="token punctuation">,</span> comments<span class="token punctuation">)</span> 
<span class="token keyword">VALUES</span> <span class="token punctuation">(</span>?<span class="token punctuation">,</span>?<span class="token punctuation">,</span>?<span class="token punctuation">,</span>?<span class="token punctuation">,</span>?<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详见<code>LightSequenceModifyJdbc</code>，参数分别是，</p><ul><li><code>String</code> seq_name - 序列名</li><li><code>int</code> block_id - 数据块id</li><li><code>long</code> next_val - 下一个seq</li><li><code>int</code> step_val - 步长</li><li><code>String</code> comments - 说明</li></ul><h3 id="wings-faceless-lightid-provider-sequence-update" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-provider-sequence-update"><span>wings.faceless.lightid.provider.sequence-update</span></a></h3><p><code>String</code>，更新语句。JdbcTemplate的sql，</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">UPDATE</span> sys_light_sequence 
<span class="token keyword">SET</span> next_val<span class="token operator">=</span>? 
<span class="token keyword">WHERE</span> block_id<span class="token operator">=</span>? <span class="token operator">AND</span> seq_name<span class="token operator">=</span>? <span class="token operator">AND</span> next_val<span class="token operator">=</span>?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详见<code>LightSequenceModifyJdbc</code>，参数分别是，</p><ul><li><code>long</code> next_val_new - 新的seq值</li><li><code>int</code> block_id - 数据块id</li><li><code>String</code> seq_name - 序列名</li><li><code>long</code> next_val_old - 旧的seq值</li></ul><h3 id="wings-faceless-lightid-provider-sequence-get-one" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-provider-sequence-get-one"><span>wings.faceless.lightid.provider.sequence-get-one</span></a></h3><p><code>String</code>，单次获取。JdbcTemplate的sql，</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> next_val<span class="token punctuation">,</span> step_val 
<span class="token keyword">FROM</span> sys_light_sequence 
<span class="token keyword">WHERE</span> block_id<span class="token operator">=</span>? <span class="token operator">AND</span> seq_name<span class="token operator">=</span>? <span class="token keyword">FOR</span> <span class="token keyword">UPDATE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详见<code>LightSequenceSelectJdbc</code>，参数分别是，</p><ul><li><code>int</code> block_id - 数据块id</li><li><code>String</code> seq_name - 序列名</li></ul><h3 id="wings-faceless-lightid-provider-sequence-get-all" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-provider-sequence-get-all"><span>wings.faceless.lightid.provider.sequence-get-all</span></a></h3><p><code>String</code>，全部获取。JdbcTemplate的sql，</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> seq_name<span class="token punctuation">,</span> next_val<span class="token punctuation">,</span> step_val 
<span class="token keyword">FROM</span> sys_light_sequence 
<span class="token keyword">WHERE</span> block_id<span class="token operator">=</span>? <span class="token keyword">FOR</span> <span class="token keyword">UPDATE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详见<code>LightSequenceSelectJdbc</code>，参数分别是，</p><ul><li><code>int</code> block_id - 数据块id</li></ul><h3 id="wings-faceless-lightid-provider-sequence-adjust" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-provider-sequence-adjust"><span>wings.faceless.lightid.provider.sequence-adjust</span></a></h3><p><code>String</code>，尝试校验并调整数据库中id，使其正确。设置为<code>empty</code>，表示忽略此功能。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> table_name<span class="token punctuation">,</span> column_name 
<span class="token keyword">FROM</span> INFORMATION_SCHEMA<span class="token punctuation">.</span><span class="token keyword">COLUMNS</span> 
<span class="token keyword">WHERE</span> table_schema <span class="token operator">=</span> <span class="token keyword">DATABASE</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token operator">AND</span> UPPER<span class="token punctuation">(</span>column_key<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;PRI&#39;</span> 
<span class="token operator">AND</span> UPPER<span class="token punctuation">(</span>column_type<span class="token punctuation">)</span> <span class="token operator">like</span> <span class="token string">&#39;%INT%&#39;</span> 
<span class="token operator">AND</span> table_name <span class="token operator">=</span> ?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入<code>表名</code>（作为序列名），返回数据库中的<code>表名</code>和<code>列名</code>。</p><h3 id="wings-faceless-lightid-provider-monotonic" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-provider-monotonic"><span>wings.faceless.lightid.provider.monotonic</span></a></h3><p><code>String</code>=<code>jvm</code>, lightid 的单调递增类型.</p><ul><li>jvm - 单jvm内单调递增</li><li>db - 数据库内单调递增</li><li>hz - hazelcast内单调递增</li></ul><h3 id="wings-faceless-lightid-layout-block-bits" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-layout-block-bits"><span>wings.faceless.lightid.layout.block-bits</span></a></h3><p><code>Integer=</code>，设置block字节数，范围[3,23]，配置项默认空。LightId默认为9，2^9=512个区</p><h3 id="wings-faceless-lightid-layout-block-first" tabindex="-1"><a class="header-anchor" href="#wings-faceless-lightid-layout-block-first"><span>wings.faceless.lightid.layout.block-first</span></a></h3><p><code>Boolean=</code>，序列布局，是否Block先于Sequence，配置项默认空。LightId默认为true</p>`,68),o=[l];function c(d,t){return s(),a("div",null,o)}const h=e(i,[["render",c],["__file","2i-prop-faceless.html.vue"]]);export{h as default};
