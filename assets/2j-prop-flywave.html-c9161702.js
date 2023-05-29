import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,f as e}from"./app-76302e33.js";const p={},t=e('<h1 id="_2j-飞波的属性" tabindex="-1"><a class="header-anchor" href="#_2j-飞波的属性" aria-hidden="true">#</a> 2J.飞波的属性</h1><p>有Flywave关于schema管理的配置。</p><h2 id="_2j-1-spring-wings-enabled-79-properties" tabindex="-1"><a class="header-anchor" href="#_2j-1-spring-wings-enabled-79-properties" aria-hidden="true">#</a> 2J.1.spring-wings-enabled-79.properties</h2><p>Flywave功能的默认开关，如下</p><h3 id="spring-wings-faceless-flywave-enabled-module" tabindex="-1"><a class="header-anchor" href="#spring-wings-faceless-flywave-enabled-module" aria-hidden="true">#</a> spring.wings.faceless.flywave.enabled.module</h3><p><code>Boolean</code>=<code>false</code>，是否注入Flywave相关Bean。</p><h3 id="spring-wings-faceless-flywave-enabled-checker" tabindex="-1"><a class="header-anchor" href="#spring-wings-faceless-flywave-enabled-checker" aria-hidden="true">#</a> spring.wings.faceless.flywave.enabled.checker</h3><p><code>Boolean</code>=<code>true</code>，flywave是否进行数据库的版本检查。</p><h2 id="_2j-2-wings-flywave-fit-79-properties" tabindex="-1"><a class="header-anchor" href="#_2j-2-wings-flywave-fit-79-properties" aria-hidden="true">#</a> 2J.2.wings-flywave-fit-79.properties</h2><p>Flywave对依赖的<code>flywave-init</code>版本进行检查。</p><h3 id="wings-faceless-flywave-auto-init" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-auto-init" aria-hidden="true">#</a> wings.faceless.flywave.auto-init</h3><p><code>Boolean</code>=<code>false</code>，是否允许自动初始化，非空数据库，最好手工初始化</p><h3 id="wings-faceless-flywave-fit-flywave-init-path" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-fit-flywave-init-path" aria-hidden="true">#</a> wings.faceless.flywave.fit.flywave-init.path</h3><p><code>String</code>=<code>classpath*:/wings-flywave/master/00-init/*.sql</code></p><p>sql扫描pattern，逗号分隔。PathMatchingResourcePatternResolver格式</p><h3 id="wings-faceless-flywave-fit-flywave-init-revi" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-fit-flywave-init-revi" aria-hidden="true">#</a> wings.faceless.flywave.fit.flywave-init.revi</h3><p><code>String</code>=<code>2019_0512_01L</code>，revision，逗号分隔</p><h3 id="wings-faceless-flywave-fit-flywave-init-lost" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-fit-flywave-init-lost" aria-hidden="true">#</a> wings.faceless.flywave.fit.flywave-init.lost</h3><p><code>String</code>=<code>WARN</code></p><p>补漏行为，任一指定revi未应用时，只升级不能降级，避免危险的删除动作。 <code>SKIP</code>-跳过|<code>WARN</code>-警告|<code>FAIL</code>-异常|<code>EXEC</code>-强制执行</p><h2 id="_2j-3-wings-flywave-sql-79-properties" tabindex="-1"><a class="header-anchor" href="#_2j-3-wings-flywave-sql-79-properties" aria-hidden="true">#</a> 2J.3.wings-flywave-sql-79.properties</h2><p>Flywave的Sql解析设置</p><h3 id="wings-faceless-flywave-sql-dialect" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-dialect" aria-hidden="true">#</a> wings.faceless.flywave.sql.dialect</h3><p><code>String</code>=<code>mysql</code>，sql方言，当前只支持<code>mysql</code></p><h3 id="wings-faceless-flywave-sql-delimiter-default" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-delimiter-default" aria-hidden="true">#</a> wings.faceless.flywave.sql.delimiter-default</h3><p><code>String</code>=<code>;</code>，原始分隔符，必须存在。</p><h3 id="wings-faceless-flywave-sql-delimiter-command" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-delimiter-command" aria-hidden="true">#</a> wings.faceless.flywave.sql.delimiter-command</h3><p><code>String</code>=<code>DELIMITER</code>，重定义的分隔符的命令。</p><h3 id="wings-faceless-flywave-sql-comment-single" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-comment-single" aria-hidden="true">#</a> wings.faceless.flywave.sql.comment-single</h3><p><code>String</code>=<code>--</code>，单行注释</p><h3 id="wings-faceless-flywave-sql-comment-multiple" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-comment-multiple" aria-hidden="true">#</a> wings.faceless.flywave.sql.comment-multiple</h3><p><code>String</code>=<code>/* */</code>，多行注释，开头和结束以空格分开表示</p><h3 id="wings-faceless-flywave-sql-format-shard" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-format-shard" aria-hidden="true">#</a> wings.faceless.flywave.sql.format-shard</h3><p><code>String</code>=<code>XXX_[0-9]+</code>，设置分表格式，参考 SqlSegmentProcessor.setShardFormat</p><h3 id="wings-faceless-flywave-sql-format-trace" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-format-trace" aria-hidden="true">#</a> wings.faceless.flywave.sql.format-trace</h3><p><code>String</code>=<code>XXX(_[0-9]+)?__+[a-z]+</code>，设置跟踪表格式，参考 SqlSegmentProcessor.setTraceFormat</p><h2 id="_2j-4-wings-flywave-ver-79-properties" tabindex="-1"><a class="header-anchor" href="#_2j-4-wings-flywave-ver-79-properties" aria-hidden="true">#</a> 2j.4.wings-flywave-ver-79.properties</h2><p>Flywave对version和journal表的设置。</p><ul><li><code>{{PLAIN_NAME}}</code> 目标表的<code>本表</code>名字</li><li><code>{{TABLE_NAME}}</code> 目标表名字，可能是本表，分表，跟踪表</li><li><code>{{TABLE_BONE}}</code> 目标表字段(至少包含名字，类型，注释)，不含索引和约束</li><li><code>{{TABLE_PKEY}}</code> 目标表的主键中字段名，用来创建原主键的普通索引</li></ul><h3 id="wings-faceless-flywave-ver-schema-version-table" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-schema-version-table" aria-hidden="true">#</a> wings.faceless.flywave.ver.schema-version-table</h3><p><code>String</code>=<code>sys_schema_version</code>，版本管理表名</p><h3 id="wings-faceless-flywave-ver-schema-journal-table" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-schema-journal-table" aria-hidden="true">#</a> wings.faceless.flywave.ver.schema-journal-table</h3><p><code>String</code>=<code>=sys_schema_journal</code>，数据日志表名</p><h3 id="wings-faceless-flywave-ver-drop-reg" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-drop-reg" aria-hidden="true">#</a> wings.faceless.flywave.ver.drop-reg</h3><p><code>Map&lt;String, String&gt;</code>，视为drop语句的正则，以做危险提示。</p><ul><li><code>drop-table</code>=<code>^drop\\\\s+table</code></li><li><code>truncate-table</code>=<code>^truncate\\\\s+table</code></li></ul><h3 id="wings-faceless-flywave-ver-journal-insert" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-journal-insert" aria-hidden="true">#</a> wings.faceless.flywave.ver.journal-insert</h3><p>AfterInsert的跟踪表（建立原主键索引），<code>String</code>，默认</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}__<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_id<span class="token punctuation">`</span></span> <span class="token keyword">BIGINT</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_dt<span class="token punctuation">`</span></span> <span class="token keyword">DATETIME</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;1000-01-01 00:00:00&#39;</span><span class="token punctuation">,</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_tp<span class="token punctuation">`</span></span> <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;Z&#39;</span><span class="token punctuation">,</span>\n    {{TABLE_BONE}}<span class="token punctuation">,</span>\n    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">`</span>RAW_TABLE_PK<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>{{TABLE_PKEY}}<span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">INNODB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>UTF8MB4\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-faceless-flywave-ver-trigger-insert" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-trigger-insert" aria-hidden="true">#</a> wings.faceless.flywave.ver.trigger-insert</h3><p>AfterInsert Trigger，<code>String</code>，默认</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> <span class="token identifier"><span class="token punctuation">`</span>ai__{{TABLE_NAME}}<span class="token punctuation">`</span></span> <span class="token keyword">AFTER</span> <span class="token keyword">INSERT</span> <span class="token keyword">ON</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}<span class="token punctuation">`</span></span>\n<span class="token keyword">FOR EACH ROW</span> <span class="token keyword">BEGIN</span>\n  <span class="token keyword">IF</span> <span class="token punctuation">(</span><span class="token variable">@DISABLE_FLYWAVE</span> <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span> <span class="token keyword">THEN</span> \n    <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}__<span class="token punctuation">`</span></span> <span class="token keyword">SELECT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}<span class="token punctuation">`</span></span> t\n    <span class="token keyword">WHERE</span> t<span class="token punctuation">.</span>id <span class="token operator">=</span> NEW<span class="token punctuation">.</span>id <span class="token punctuation">;</span>\n  <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span> \n<span class="token keyword">END</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-faceless-flywave-ver-journal-update" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-journal-update" aria-hidden="true">#</a> wings.faceless.flywave.ver.journal-update</h3><p>AfterUpdate的跟踪表（建立原主键索引），<code>String</code>，默认</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}__<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_id<span class="token punctuation">`</span></span> <span class="token keyword">BIGINT</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_dt<span class="token punctuation">`</span></span> <span class="token keyword">DATETIME</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;1000-01-01 00:00:00&#39;</span><span class="token punctuation">,</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_tp<span class="token punctuation">`</span></span> <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;Z&#39;</span><span class="token punctuation">,</span>\n    {{TABLE_BONE}}<span class="token punctuation">,</span>\n    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">`</span>RAW_TABLE_PK<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>{{TABLE_PKEY}}<span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">INNODB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>UTF8MB4\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-faceless-flywave-ver-trigger-update" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-trigger-update" aria-hidden="true">#</a> wings.faceless.flywave.ver.trigger-update</h3><p>AfterUpdate Trigger，<code>String</code>，默认</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> <span class="token identifier"><span class="token punctuation">`</span>au__{{TABLE_NAME}}<span class="token punctuation">`</span></span> <span class="token keyword">AFTER</span> <span class="token keyword">UPDATE</span> <span class="token keyword">ON</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}<span class="token punctuation">`</span></span>\n<span class="token keyword">FOR EACH ROW</span> <span class="token keyword">BEGIN</span>\n  <span class="token keyword">IF</span> <span class="token punctuation">(</span><span class="token variable">@DISABLE_FLYWAVE</span> <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span> <span class="token keyword">THEN</span> \n    <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}__<span class="token punctuation">`</span></span> <span class="token keyword">SELECT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;U&#39;</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}<span class="token punctuation">`</span></span> t\n    <span class="token keyword">WHERE</span> t<span class="token punctuation">.</span>id <span class="token operator">=</span> NEW<span class="token punctuation">.</span>id <span class="token punctuation">;</span>\n  <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span> \n<span class="token keyword">END</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-faceless-flywave-ver-journal-delete" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-journal-delete" aria-hidden="true">#</a> wings.faceless.flywave.ver.journal-delete</h3><p>BeforeDelete 的跟踪表（建立原主键索引），<code>String</code>，默认</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}__<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_id<span class="token punctuation">`</span></span> <span class="token keyword">BIGINT</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_dt<span class="token punctuation">`</span></span> <span class="token keyword">DATETIME</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;1000-01-01 00:00:00&#39;</span><span class="token punctuation">,</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_tp<span class="token punctuation">`</span></span> <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;Z&#39;</span><span class="token punctuation">,</span>\n    {{TABLE_BONE}}<span class="token punctuation">,</span>\n    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">`</span>RAW_TABLE_PK<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>{{TABLE_PKEY}}<span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">INNODB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>UTF8MB4\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-faceless-flywave-ver-trigger-delete" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-trigger-delete" aria-hidden="true">#</a> wings.faceless.flywave.ver.trigger-delete</h3><p>BeforeDelete Trigger，<code>String</code>，默认</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> <span class="token identifier"><span class="token punctuation">`</span>bd__{{TABLE_NAME}}<span class="token punctuation">`</span></span> BEFORE <span class="token keyword">DELETE</span> <span class="token keyword">ON</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}<span class="token punctuation">`</span></span>\n<span class="token keyword">FOR EACH ROW</span> <span class="token keyword">BEGIN</span>\n  <span class="token keyword">IF</span> <span class="token punctuation">(</span><span class="token variable">@DISABLE_FLYWAVE</span> <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span> <span class="token keyword">THEN</span> \n    <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}__<span class="token punctuation">`</span></span> <span class="token keyword">SELECT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;D&#39;</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}<span class="token punctuation">`</span></span> t\n    <span class="token keyword">WHERE</span> t<span class="token punctuation">.</span>id <span class="token operator">=</span> OLD<span class="token punctuation">.</span>id <span class="token punctuation">;</span>\n  <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span> \n<span class="token keyword">END</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',64),o=[t];function c(l,i){return n(),a("div",null,o)}const u=s(p,[["render",c],["__file","2j-prop-flywave.html.vue"]]);export{u as default};
