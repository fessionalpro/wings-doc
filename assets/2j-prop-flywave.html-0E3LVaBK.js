import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as e,e as a}from"./app-BcJ4NaN5.js";const l={},n=a('<h1 id="_2j-flywave-properties" tabindex="-1"><a class="header-anchor" href="#_2j-flywave-properties"><span>2J.Flywave Properties</span></a></h1><p>Flywave properties about schema management.</p><h2 id="_2j-1-wings-flywave-fit-79-properties" tabindex="-1"><a class="header-anchor" href="#_2j-1-wings-flywave-fit-79-properties"><span>2J.1.wings-flywave-fit-79.properties</span></a></h2><p>Flywave checks for dependent <code>flywave-init</code> versions.</p><h3 id="wings-faceless-flywave-auto-init" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-auto-init"><span>wings.faceless.flywave.auto-init</span></a></h3><p><code>Boolean</code>=<code>false</code>, whether to allow auto init, non-empty database, preferably manual init</p><h3 id="wings-faceless-flywave-checker" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-checker"><span>wings.faceless.flywave.checker</span></a></h3><p><code>Boolean</code>=<code>true</code>, whether flywave performs version checking for database.</p><h3 id="wings-faceless-flywave-fit-flywave-init-path" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-fit-flywave-init-path"><span>wings.faceless.flywave.fit.flywave-init.path</span></a></h3><p><code>String</code>=<code>classpath*:/wings-flywave/master/00-init/*.sql</code></p><p>sql scan pattern, comma separated. PathMatchingResourcePatternResolver format</p><h3 id="wings-faceless-flywave-fit-flywave-init-revi" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-fit-flywave-init-revi"><span>wings.faceless.flywave.fit.flywave-init.revi</span></a></h3><p><code>String</code>=<code>2019_0512_01L</code>, revision, comma separated</p><h3 id="wings-faceless-flywave-fit-flywave-init-lost" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-fit-flywave-init-lost"><span>wings.faceless.flywave.fit.flywave-init.lost</span></a></h3><p><code>String</code>=<code>WARN</code>. <code>SKIP</code>-skip|<code>WARN</code>-warn|<code>FAIL</code>-exception|<code>EXEC</code>-force to exec</p><p>Post check, if the specified revi is not applied, only upgrade can be performed, not downgrade to avoid dangerous delete.</p><h2 id="_2j-2-wings-flywave-sql-79-properties" tabindex="-1"><a class="header-anchor" href="#_2j-2-wings-flywave-sql-79-properties"><span>2J.2.wings-flywave-sql-79.properties</span></a></h2><p>Sql parsing settings for Flywave.</p><h3 id="wings-faceless-flywave-sql-dialect" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-dialect"><span>wings.faceless.flywave.sql.dialect</span></a></h3><p><code>String</code>=<code>mysql</code>, sql dialect, currently only supports <code>mysql</code>.</p><h3 id="wings-faceless-flywave-sql-delimiter-default" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-delimiter-default"><span>wings.faceless.flywave.sql.delimiter-default</span></a></h3><p><code>String</code>=<code>;</code>, the original delimiter, required.</p><h3 id="wings-faceless-flywave-sql-delimiter-command" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-delimiter-command"><span>wings.faceless.flywave.sql.delimiter-command</span></a></h3><p><code>String</code>=<code>DELIMITER</code>, the command to redefine the delimiter.</p><h3 id="wings-faceless-flywave-sql-comment-single" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-comment-single"><span>wings.faceless.flywave.sql.comment-single</span></a></h3><p><code>String</code>=<code>--</code>, single line comment</p><h3 id="wings-faceless-flywave-sql-comment-multiple" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-comment-multiple"><span>wings.faceless.flywave.sql.comment-multiple</span></a></h3><p><code>String</code>=<code>/* */</code>, multi-line comments, start and end with a space</p><h3 id="wings-faceless-flywave-sql-format-shard" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-format-shard"><span>wings.faceless.flywave.sql.format-shard</span></a></h3><p><code>String</code>=<code>XXX_[0-9]+</code>, set the shard table format. see SqlSegmentProcessor.setShardFormat.</p><h3 id="wings-faceless-flywave-sql-format-trace" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-format-trace"><span>wings.faceless.flywave.sql.format-trace</span></a></h3><p><code>String</code>=<code>XXX(_[0-9]+)?__+[a-z]+</code>, set the trace table format. see SqlSegmentProcessor.setTraceFormat</p><h2 id="_2j-3-wings-flywave-ver-79-properties" tabindex="-1"><a class="header-anchor" href="#_2j-3-wings-flywave-ver-79-properties"><span>2j.3.wings-flywave-ver-79.properties</span></a></h2><p>set version and journal table for Flywave.</p><ul><li><code>{{PLAIN_NAME}}</code> The <code>plain</code> table name of the target table</li><li><code>{{TABLE_NAME}}</code> Target table name, can be plain, shard, trace table</li><li><code>{{TABLE_BONE}}</code> Target table field (at least name, type, comments), without indexes and constraints</li><li><code>{{TABLE_PKEY}}</code> The field name in PK of the target table, used to create a normal index copy from the original PK</li></ul><h3 id="wings-faceless-flywave-ver-schema-version-table" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-schema-version-table"><span>wings.faceless.flywave.ver.schema-version-table</span></a></h3><p><code>String</code>=<code>sys_schema_version</code>, table name of schema version.</p><h3 id="wings-faceless-flywave-ver-schema-journal-table" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-schema-journal-table"><span>wings.faceless.flywave.ver.schema-journal-table</span></a></h3><p><code>String</code>=<code>=sys_schema_journal</code>, table name of journal.</p><h3 id="wings-faceless-flywave-ver-drop-reg" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-drop-reg"><span>wings.faceless.flywave.ver.drop-reg</span></a></h3><p><code>Map&lt;String, String&gt;</code>, RegExp is treated as drop statements for dangerous confirm.</p><ul><li><code>drop-table</code>=<code>^drop\\\\s+table</code></li><li><code>truncate-table</code>=<code>^truncate\\\\s+table</code></li></ul><h3 id="wings-faceless-flywave-ver-journal-insert" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-journal-insert"><span>wings.faceless.flywave.ver.journal-insert</span></a></h3><p>Trace table for AfterInsert (create the original PK index), <code>String</code>, default</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">{{TABLE_NAME}}__</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">` (</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    `_id`</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> BIGINT</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> AUTO_INCREMENT,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    `_dt`</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> DATETIME</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;1000-01-01 00:00:00&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    `_tp`</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> CHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;Z&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    {{TABLE_BONE}},</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    PRIMARY KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">`_id`</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    KEY</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> `RAW_TABLE_PK`</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ({{TABLE_PKEY}})</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) ENGINE</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">INNODB </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">DEFAULT</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> CHARSET</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">UTF8MB4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-faceless-flywave-ver-trigger-insert" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-trigger-insert"><span>wings.faceless.flywave.ver.trigger-insert</span></a></h3><p>AfterInsert Trigger, <code>String</code>, default</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> TRIGGER</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ai__{{TABLE_NAME}}</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">` </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">AFTER</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> INSERT</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> ON</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> `{{TABLE_NAME}}`</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">FOR</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> EACH </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">ROW</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> BEGIN</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  IF</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">@DISABLE_FLYWAVE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> IS</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">THEN</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    INSERT INTO</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> `{{TABLE_NAME}}__`</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">NOW</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">), </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;C&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, t.</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">*</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> `{{TABLE_NAME}}`</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> t</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    WHERE</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> t</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">id</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> NEW</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  END</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> IF</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">END</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-faceless-flywave-ver-journal-update" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-journal-update"><span>wings.faceless.flywave.ver.journal-update</span></a></h3><p>Trace table for AfterUpdate (create the original PK index), <code>String</code>, default</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">{{TABLE_NAME}}__</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">` (</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    `_id`</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> BIGINT</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> AUTO_INCREMENT,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    `_dt`</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> DATETIME</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;1000-01-01 00:00:00&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    `_tp`</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> CHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;Z&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    {{TABLE_BONE}},</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    PRIMARY KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">`_id`</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    KEY</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> `RAW_TABLE_PK`</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ({{TABLE_PKEY}})</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) ENGINE</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">INNODB </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">DEFAULT</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> CHARSET</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">UTF8MB4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-faceless-flywave-ver-trigger-update" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-trigger-update"><span>wings.faceless.flywave.ver.trigger-update</span></a></h3><p>AfterUpdate Trigger, <code>String</code>, default</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> TRIGGER</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">au__{{TABLE_NAME}}</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">` </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">AFTER</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> UPDATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> ON</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> `{{TABLE_NAME}}`</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">FOR</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> EACH </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">ROW</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> BEGIN</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  IF</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">@DISABLE_FLYWAVE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> IS</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">THEN</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    INSERT INTO</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> `{{TABLE_NAME}}__`</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">NOW</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">), </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;U&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, t.</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">*</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> `{{TABLE_NAME}}`</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> t</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    WHERE</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> t</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">id</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> NEW</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  END</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> IF</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">END</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-faceless-flywave-ver-journal-delete" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-journal-delete"><span>wings.faceless.flywave.ver.journal-delete</span></a></h3><p>Trace table for BeforeDelete (create the original PK index),<code>String</code>, default</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">{{TABLE_NAME}}__</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">` (</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    `_id`</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> BIGINT</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> AUTO_INCREMENT,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    `_dt`</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> DATETIME</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;1000-01-01 00:00:00&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    `_tp`</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> CHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;Z&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    {{TABLE_BONE}},</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    PRIMARY KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">`_id`</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    KEY</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> `RAW_TABLE_PK`</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ({{TABLE_PKEY}})</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) ENGINE</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">INNODB </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">DEFAULT</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> CHARSET</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">UTF8MB4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-faceless-flywave-ver-trigger-delete" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-trigger-delete"><span>wings.faceless.flywave.ver.trigger-delete</span></a></h3><p>BeforeDelete Trigger, <code>String</code>, default</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> TRIGGER</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">bd__{{TABLE_NAME}}</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">` </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">BEFORE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> DELETE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> ON</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> `{{TABLE_NAME}}`</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">FOR</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> EACH </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">ROW</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> BEGIN</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  IF</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">@DISABLE_FLYWAVE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> IS</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">THEN</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    INSERT INTO</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> `{{TABLE_NAME}}__`</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">NOW</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">), </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;D&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, t.</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">*</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> `{{TABLE_NAME}}`</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> t</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    WHERE</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> t</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">id</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> OLD</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  END</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> IF</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">END</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',60),t=[n];function h(r,p){return e(),i("div",null,t)}const g=s(l,[["render",h],["__file","2j-prop-flywave.html.vue"]]),c=JSON.parse('{"path":"/2-faceless/2j-prop-flywave.html","title":"2J.Flywave Properties","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"folder-tree","category":["Faceless","Porperty"],"description":"2J.Flywave Properties Flywave properties about schema management. 2J.1.wings-flywave-fit-79.properties Flywave checks for dependent flywave-init versions. wings.faceless.flywave...","GIT_REPO_HEAD":"2024-07-07 fbb1f4817448a18f6c9bd497c9b5837508d2198e","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/2-faceless/2j-prop-flywave.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/2-faceless/2j-prop-flywave.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"2J.Flywave Properties"}],["meta",{"property":"og:description","content":"2J.Flywave Properties Flywave properties about schema management. 2J.1.wings-flywave-fit-79.properties Flywave checks for dependent flywave-init versions. wings.faceless.flywave..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2J.Flywave Properties\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"2J.1.wings-flywave-fit-79.properties","slug":"_2j-1-wings-flywave-fit-79-properties","link":"#_2j-1-wings-flywave-fit-79-properties","children":[{"level":3,"title":"wings.faceless.flywave.auto-init","slug":"wings-faceless-flywave-auto-init","link":"#wings-faceless-flywave-auto-init","children":[]},{"level":3,"title":"wings.faceless.flywave.checker","slug":"wings-faceless-flywave-checker","link":"#wings-faceless-flywave-checker","children":[]},{"level":3,"title":"wings.faceless.flywave.fit.flywave-init.path","slug":"wings-faceless-flywave-fit-flywave-init-path","link":"#wings-faceless-flywave-fit-flywave-init-path","children":[]},{"level":3,"title":"wings.faceless.flywave.fit.flywave-init.revi","slug":"wings-faceless-flywave-fit-flywave-init-revi","link":"#wings-faceless-flywave-fit-flywave-init-revi","children":[]},{"level":3,"title":"wings.faceless.flywave.fit.flywave-init.lost","slug":"wings-faceless-flywave-fit-flywave-init-lost","link":"#wings-faceless-flywave-fit-flywave-init-lost","children":[]}]},{"level":2,"title":"2J.2.wings-flywave-sql-79.properties","slug":"_2j-2-wings-flywave-sql-79-properties","link":"#_2j-2-wings-flywave-sql-79-properties","children":[{"level":3,"title":"wings.faceless.flywave.sql.dialect","slug":"wings-faceless-flywave-sql-dialect","link":"#wings-faceless-flywave-sql-dialect","children":[]},{"level":3,"title":"wings.faceless.flywave.sql.delimiter-default","slug":"wings-faceless-flywave-sql-delimiter-default","link":"#wings-faceless-flywave-sql-delimiter-default","children":[]},{"level":3,"title":"wings.faceless.flywave.sql.delimiter-command","slug":"wings-faceless-flywave-sql-delimiter-command","link":"#wings-faceless-flywave-sql-delimiter-command","children":[]},{"level":3,"title":"wings.faceless.flywave.sql.comment-single","slug":"wings-faceless-flywave-sql-comment-single","link":"#wings-faceless-flywave-sql-comment-single","children":[]},{"level":3,"title":"wings.faceless.flywave.sql.comment-multiple","slug":"wings-faceless-flywave-sql-comment-multiple","link":"#wings-faceless-flywave-sql-comment-multiple","children":[]},{"level":3,"title":"wings.faceless.flywave.sql.format-shard","slug":"wings-faceless-flywave-sql-format-shard","link":"#wings-faceless-flywave-sql-format-shard","children":[]},{"level":3,"title":"wings.faceless.flywave.sql.format-trace","slug":"wings-faceless-flywave-sql-format-trace","link":"#wings-faceless-flywave-sql-format-trace","children":[]}]},{"level":2,"title":"2j.3.wings-flywave-ver-79.properties","slug":"_2j-3-wings-flywave-ver-79-properties","link":"#_2j-3-wings-flywave-ver-79-properties","children":[{"level":3,"title":"wings.faceless.flywave.ver.schema-version-table","slug":"wings-faceless-flywave-ver-schema-version-table","link":"#wings-faceless-flywave-ver-schema-version-table","children":[]},{"level":3,"title":"wings.faceless.flywave.ver.schema-journal-table","slug":"wings-faceless-flywave-ver-schema-journal-table","link":"#wings-faceless-flywave-ver-schema-journal-table","children":[]},{"level":3,"title":"wings.faceless.flywave.ver.drop-reg","slug":"wings-faceless-flywave-ver-drop-reg","link":"#wings-faceless-flywave-ver-drop-reg","children":[]},{"level":3,"title":"wings.faceless.flywave.ver.journal-insert","slug":"wings-faceless-flywave-ver-journal-insert","link":"#wings-faceless-flywave-ver-journal-insert","children":[]},{"level":3,"title":"wings.faceless.flywave.ver.trigger-insert","slug":"wings-faceless-flywave-ver-trigger-insert","link":"#wings-faceless-flywave-ver-trigger-insert","children":[]},{"level":3,"title":"wings.faceless.flywave.ver.journal-update","slug":"wings-faceless-flywave-ver-journal-update","link":"#wings-faceless-flywave-ver-journal-update","children":[]},{"level":3,"title":"wings.faceless.flywave.ver.trigger-update","slug":"wings-faceless-flywave-ver-trigger-update","link":"#wings-faceless-flywave-ver-trigger-update","children":[]},{"level":3,"title":"wings.faceless.flywave.ver.journal-delete","slug":"wings-faceless-flywave-ver-journal-delete","link":"#wings-faceless-flywave-ver-journal-delete","children":[]},{"level":3,"title":"wings.faceless.flywave.ver.trigger-delete","slug":"wings-faceless-flywave-ver-trigger-delete","link":"#wings-faceless-flywave-ver-trigger-delete","children":[]}]}],"git":{"createdTime":1656422147000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":5}]},"readingTime":{"minutes":1.98,"words":595},"filePathRelative":"2-faceless/2j-prop-flywave.md","localizedDate":"June 28, 2022","autoDesc":true}');export{g as comp,c as data};
