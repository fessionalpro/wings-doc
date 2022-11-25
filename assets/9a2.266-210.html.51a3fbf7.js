import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as o,b as a,e as n,d as e,f as t,r as i}from"./app.9a05138f.js";const c={},r=t(`<h1 id="_9a2-迁移2-6-6-210手册" tabindex="-1"><a class="header-anchor" href="#_9a2-迁移2-6-6-210手册" aria-hidden="true">#</a> 9A2.迁移2.6.6.210手册</h1><p>build版从201升级210，有以下重点不兼容影响。</p><ul><li>java以11取代8，其编译及启动参数变化</li><li>boot以2.6取代2.4，其webmvc，路径匹配有变</li><li>shardingsphere以5.1取代4.1，其结构更优</li><li>flywave以<code>__</code>取代<code>$</code>机制，以兼容云db功能</li><li>swagger以springdoc取代springfox，以兼容boot2.6</li><li>fastjson替换为fastjson2</li></ul><h2 id="_9a2-1-修改pom-xml" tabindex="-1"><a class="header-anchor" href="#_9a2-1-修改pom-xml" aria-hidden="true">#</a> 9A2.1.修改pom.xml</h2><p>210开始，所有artifactId并入pro.fessional.wings组内。 以下是parent和普通依赖的修改方法。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 把【wings-project】变为【wings】--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- &lt;groupId&gt;pro.fessional&lt;/groupId&gt; --&gt;</span>
    <span class="token comment">&lt;!-- &lt;artifactId&gt;wings-project&lt;/artifactId&gt; --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>pro.fessional<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>wings<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.6.6.210-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 把【wings-】从artifactId 变为 groupId的【.wings】 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- &lt;groupId&gt;pro.fessional&lt;/groupId&gt; --&gt;</span>
  <span class="token comment">&lt;!-- &lt;artifactId&gt;wings-silencer&lt;/artifactId&gt; --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>pro.fessional.wings<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>silencer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${wings.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9a2-2-迁移到java11" tabindex="-1"><a class="header-anchor" href="#_9a2-2-迁移到java11" aria-hidden="true">#</a> 9A2.2.迁移到java11</h2>`,7),d={href:"https://jdk.java.net/archive/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://sdkman.io/",target:"_blank",rel:"noopener noreferrer"},k=a("code",null,"JDK8_HOME",-1),g=a("code",null,"JDK11_HOME",-1),m=t("<p>IDEA或maven启动java程序及TestCast时，需要响应的增加add-opens或add-exports参数</p><ul><li>maven-compiler-plugin - add-exports 编译</li><li>maven-surefire-plugin - add-opens 运行</li><li>IDEA运行TestCase - 自动获取surefire配置</li><li>IDEA运行Java和Boot - 手工设置启动参数模板，</li></ul><p>其中启动参数为<code>${wings.java-opens}</code>内容，不推荐全局变量，如JAVA_TOOL_OPTIONS。 IDEA中需要在<code>Run/Debug Configuration Templates</code>中分别设置<code>Application</code>和<code>Spring Boot</code></p><p>参考资料</p>",4),v={href:"https://stackoverflow.com/questions/44056405",target:"_blank",rel:"noopener noreferrer"},b={href:"https://stackoverflow.com/questions/70196098",target:"_blank",rel:"noopener noreferrer"},h=t(`<h2 id="_9a2-3-日志表命名" tabindex="-1"><a class="header-anchor" href="#_9a2-3-日志表命名" aria-hidden="true">#</a> 9A2.3.日志表命名</h2><p>主要是log表，从dollar变为double underline体系，trigger后缀表前缀。</p><ul><li>log表从<code>table$log</code> 变为<code>table__</code></li><li>trigger从<code>table$ai</code> 变为<code>ai__table</code></li></ul><p>操作步骤如下，</p><ul><li>执行 JournalManager.manageTriggers(table, true) 删除旧trigger</li><li>执行 JournalManager.checkAndInitDdl(table, cid) 以新配置替换旧配置</li><li>手工rename journal table</li><li>执行 JournalManager.publishInsert/Update/Delete(table,true, cid) 生成新trigger</li></ul><p>如果数据为mysql8，且符合wings规范，可以采用以下sql测试。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  TABLE_NAME <span class="token keyword">as</span> TRACE_TBL<span class="token punctuation">,</span>
  <span class="token keyword">REPLACE</span><span class="token punctuation">(</span>TABLE_NAME<span class="token punctuation">,</span><span class="token string">&#39;$log&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> PLAIN_TBL<span class="token punctuation">,</span>
  CONCAT<span class="token punctuation">(</span><span class="token string">&#39;ALTER TABLE &#39;</span><span class="token punctuation">,</span>table_name<span class="token punctuation">,</span><span class="token string">&#39; RENAME TO &#39;</span><span class="token punctuation">,</span> <span class="token keyword">REPLACE</span><span class="token punctuation">(</span>table_name<span class="token punctuation">,</span> <span class="token string">&#39;$log&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;__&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;;;&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> RENAME_DDL
<span class="token keyword">FROM</span> INFORMATION_SCHEMA<span class="token punctuation">.</span><span class="token keyword">TABLES</span>
<span class="token keyword">WHERE</span> table_schema <span class="token operator">=</span> <span class="token keyword">DATABASE</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token operator">AND</span> table_name <span class="token operator">REGEXP</span> <span class="token string">&#39;\\\\$log&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">SELECT</span>
  TRIGGER_NAME <span class="token keyword">as</span> OLD_NAME<span class="token punctuation">,</span>
  REGEXP_REPLACE<span class="token punctuation">(</span>TRIGGER_NAME<span class="token punctuation">,</span><span class="token string">&#39;^(.+)\\\\$(.+)$&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;$2__$1&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> NEW_NAME<span class="token punctuation">,</span>
  CONCAT<span class="token punctuation">(</span><span class="token string">&#39;DROP TRIGGER IF EXISTS &#39;</span><span class="token punctuation">,</span>TRIGGER_NAME<span class="token punctuation">,</span><span class="token string">&#39;;;&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> DROP_DDL<span class="token punctuation">,</span>
  <span class="token keyword">REPLACE</span><span class="token punctuation">(</span>CONCAT<span class="token punctuation">(</span><span class="token string">&#39;CREATE TRIGGER \`&#39;</span><span class="token punctuation">,</span> REGEXP_REPLACE<span class="token punctuation">(</span>TRIGGER_NAME<span class="token punctuation">,</span><span class="token string">&#39;^(.+)\\\\$(.+)$&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;$2__$1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;\` &#39;</span><span class="token punctuation">,</span>
    ACTION_TIMING<span class="token punctuation">,</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> EVENT_MANIPULATION<span class="token punctuation">,</span> <span class="token string">&#39; ON \`&#39;</span><span class="token punctuation">,</span> EVENT_OBJECT_TABLE<span class="token punctuation">,</span> <span class="token string">&#39;\` FOR EACH ROW &#39;</span><span class="token punctuation">,</span>
    ACTION_STATEMENT<span class="token punctuation">,</span> <span class="token string">&#39;;;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;$log&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;__&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> CREATE_DDL
<span class="token keyword">FROM</span>
  INFORMATION_SCHEMA<span class="token punctuation">.</span>TRIGGERS
<span class="token keyword">WHERE</span>
  EVENT_OBJECT_SCHEMA <span class="token operator">=</span> <span class="token keyword">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">--</span>
<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token comment">-- 复制以上 DROP_DDL, RENAME_DDL, CREATE_DDL，依次执行即可。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9a2-4-lombok移除var" tabindex="-1"><a class="header-anchor" href="#_9a2-4-lombok移除var" aria-hidden="true">#</a> 9A2.4.lombok移除var</h2><p>import lombok.var;</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&#39;*.java&#39;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> <span class="token parameter variable">-r</span> fl<span class="token punctuation">;</span> <span class="token keyword">do</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;&#39;</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;s/import lombok.var;//g&#39;</span> <span class="token variable">$fl</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9a2-5-swagger3-0注解" tabindex="-1"><a class="header-anchor" href="#_9a2-5-swagger3-0注解" aria-hidden="true">#</a> 9A2.5.Swagger3.0注解</h2>`,11),f={href:"https://springdoc.org/#migrating-from-springfox",target:"_blank",rel:"noopener noreferrer"},_=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看 swagger2的注解</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&#39;*.java&#39;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> <span class="token parameter variable">-r</span> fl<span class="token punctuation">;</span> <span class="token keyword">do</span>
<span class="token function">grep</span> <span class="token string">&#39;import io.swagger.annotations&#39;</span> <span class="token variable">$fl</span> <span class="token operator">&gt;&gt;</span> /tmp/swagger.log
<span class="token keyword">done</span>
<span class="token function">sort</span> /tmp/swagger.log <span class="token operator">|</span> <span class="token function">uniq</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> /tmp/swagger.log

<span class="token comment"># 替换常用标签，自行修改格式偏差引发的编译错误</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&#39;*.java&#39;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> <span class="token parameter variable">-r</span> fl<span class="token punctuation">;</span> <span class="token keyword">do</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;&#39;</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;s/import io.swagger.annotations.ApiModel;/import io.swagger.v3.oas.annotations.media.Schema;/g&#39;</span> <span class="token variable">$fl</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;&#39;</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;s/import io.swagger.annotations.ApiModelProperty;/import io.swagger.v3.oas.annotations.media.Schema;/g&#39;</span> <span class="token variable">$fl</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;&#39;</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;s/import io.swagger.annotations.Api;/import io.swagger.v3.oas.annotations.tags.Tag;/g&#39;</span> <span class="token variable">$fl</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;&#39;</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;s/import io.swagger.annotations.ApiOperation;/import io.swagger.v3.oas.annotations.Operation;/g&#39;</span> <span class="token variable">$fl</span>

<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;&#39;</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;s/@ApiModel\\((.*)\\)/@Schema(description = \\1)/g&#39;</span> <span class="token variable">$fl</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;&#39;</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;s/@ApiModelProperty\\((.*)\\)/@Schema(description = \\1)/g&#39;</span> <span class="token variable">$fl</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;&#39;</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;s/@Api\\((.*)\\)/@Tag(name = \\1)/g&#39;</span> <span class="token variable">$fl</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;&#39;</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;s/@ApiOperation\\((.*)\\)/@Operation(summary = \\1)/g&#39;</span> <span class="token variable">$fl</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9a2-6-升级mysql8-0" tabindex="-1"><a class="header-anchor" href="#_9a2-6-升级mysql8-0" aria-hidden="true">#</a> 9A2.6.升级mysql8.0</h2>`,2),E={href:"https://dev.mysql.com/doc/refman/8.0/en/upgrade-binary-package.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://dev.mysql.com/blog-archive/inplace-upgrade-from-mysql-5-7-to-mysql-8-0",target:"_blank",rel:"noopener noreferrer"},w={href:"https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-utilities-upgrade.html",target:"_blank",rel:"noopener noreferrer"},A=t(`<p>wings工程使用jooq，避免复杂sql，仅为sql基本功能，一般无兼容性。可使用mysql shell检查</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 方法一，需要安装 mysql shell</span>
mysqlsh -- util checkForServerUpgrade root@wings-sql-dev5:3306 --target-version<span class="token operator">=</span><span class="token number">8.0</span>.26 --output-format<span class="token operator">=</span>JSON
<span class="token comment"># 方法二，使用mysql-client 8.0</span>
mysqlcheck <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> <span class="token parameter variable">--protocol</span><span class="token operator">=</span>tcp <span class="token parameter variable">-h</span> kite-sql-dev5 --all-databases --check-upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原地（In-Place）升级，即使用5.7的原data目录，直接启动mysql8，对其数据结构自动调整。 简单数据库（单机，单容器）推荐使用，如使用docker启动mysql8.0，按以下2项，即可自动升级。</p><ul><li>其data指向mysql5.7的data。</li><li>mysqld中配置upgrade=FORCE</li></ul><p>逻辑（logical）升级，指先dump在restore，复杂数据库（云，主从，集群）推荐使用。 直接恢复5.7的FullDump到8.0，需要设置<code>upgrade=FORCE</code>参数的权限，以完全最后升级， 否则会出现用户能够登录，但Access denied问题，使支撑类用户和功能不好用。</p><p>因此建议在有mysql8 client的机器上，分别dump业务用户和业务库，然后restore。</p><ul><li>dump mysql5.7 业务用户，业务库</li><li>restore mysql 8.0 先用户再库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 生成配置文件</span>
<span class="token function">cat</span> <span class="token operator">&gt;&gt;</span>kite-sql.cnf<span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[client]
protocol=tcp
port=3306
user=trydofor
password=moilioncircle
EOF</span>

<span class="token comment"># 使用 mysqlpump，以支持更多的选项，全部使用mysql8的client</span>
mysqlpump --defaults-extra-file<span class="token operator">=</span>kite-sql.cnf <span class="token parameter variable">-h</span> kite-sql-dev5 <span class="token punctuation">\\</span>
--all-databases --exclude-databases<span class="token operator">=</span>information_schema,mysql,performance_schema,sys <span class="token punctuation">\\</span>
--set-gtid-purged<span class="token operator">=</span>OFF <span class="token operator">&gt;</span> mysql-5.7-data.sql

mysqlpump --defaults-extra-file<span class="token operator">=</span>kite-sql.cnf <span class="token parameter variable">-h</span> kite-sql-dev5 <span class="token punctuation">\\</span>
<span class="token parameter variable">--users</span> --exclude-users<span class="token operator">=</span>root,%backup <span class="token punctuation">\\</span>
--exclude-databases<span class="token operator">=</span>% --set-gtid-purged<span class="token operator">=</span>OFF <span class="token operator">&gt;</span> mysql-5.7-user.sql

<span class="token builtin class-name">echo</span> <span class="token string">&quot;flush privileges;&quot;</span> <span class="token operator">&gt;&gt;</span> mysql-5.7-user.sql

<span class="token comment"># 如果dump是没有忽略innodb_*_status，需要使用--force跳过错误</span>
<span class="token function">cat</span> mysql-5.7-user.sql mysql-5.7-data.sql <span class="token punctuation">\\</span>
<span class="token operator">|</span> mysql --defaults-extra-file<span class="token operator">=</span>kite-sql.cnf <span class="token parameter variable">-h</span> kite-sql-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9a2-7-破坏性影响" tabindex="-1"><a class="header-anchor" href="#_9a2-7-破坏性影响" aria-hidden="true">#</a> 9A2.7.破坏性影响</h2><ul><li>wings-project不在依赖devtools，估以此为parent的项目需要自行dependency。</li><li>warlock security的url权限配置，从List变为Map，明确了由宽松到严谨的覆盖关系。</li><li>mirana重写DateLocaling方法名，编译错误时，可依靠参数列表，批量替换方法名。</li><li>Warlock1SchemaManager 重命名方法</li><li>@JsonI18nString变为@AutoI18nString</li></ul><h2 id="_9a2-8-jooqdao不兼容" tabindex="-1"><a class="header-anchor" href="#_9a2-8-jooqdao不兼容" aria-hidden="true">#</a> 9A2.8.JooqDao不兼容</h2><p>原静态引用的方式不建议使用了。</p><ul><li>val t = dao.getTable()</li><li>val a = dao.getAlias()</li></ul><p>推荐以dao.getTable及getAlias定义局部变量取代静态全局表 原fetch(Condition)签名，可变为以下形式</p><ul><li>fetch(Table, Condition)</li><li>fetch(t -&gt; Fn.of(t.Id.eq(1L)))</li></ul><h2 id="_9a2-9-外部api兼容性" tabindex="-1"><a class="header-anchor" href="#_9a2-9-外部api兼容性" aria-hidden="true">#</a> 9A2.9.外部Api兼容性</h2><ul><li><p>mysql8没有password函数，采用以下组合替换。 SELECT CONCAT(&#39;*&#39;, UPPER(SHA1(UNHEX(SHA1(&#39;trydofor&#39;))))), password(&#39;trydofor&#39;);</p></li><li><p>java11中DateTimeFormatter的调整，如 Offset X原来的<code>XXX</code>不能代表<code>XXXX</code>和<code>XXXXX</code>，以此类推。</p></li><li><p>fastjson2，应该直接以<code>com.alibaba.fastjson2.</code>替换<code>com.alibaba.fastjson.</code>即可。 若对fastjson依赖过于重和复杂，请务必审查工程质量，确认用法安全。</p></li></ul><h2 id="_9a2-a-anthn拼写错误" tabindex="-1"><a class="header-anchor" href="#_9a2-a-anthn拼写错误" aria-hidden="true">#</a> 9A2.A.Anthn拼写错误</h2><p>通过Flywave执行<code>2021-09-18v01</code>，修复<code>win_user_anthn</code>拼写错误</p><h3 id="执行sql脚本" tabindex="-1"><a class="header-anchor" href="#执行sql脚本" aria-hidden="true">#</a> 执行sql脚本</h3><p>在未分表且无影子表时，可手动执行升级sql。 否则建议使用flywave执行，避免遗漏。</p><ul><li>rename win_user_anthn</li><li>update sys_light_sequence</li><li>update shard table_#</li><li>update trace table$log</li><li>update triggers</li></ul><h3 id="替换java文件" tabindex="-1"><a class="header-anchor" href="#替换java文件" aria-hidden="true">#</a> 替换java文件</h3><p>全工程的java文件，替换以下字符串</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/user_anthn/user_authn/g&#39;</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/UserAnthn/UserAuthn/g&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9a2-b-拆分warlockbond工程" tabindex="-1"><a class="header-anchor" href="#_9a2-b-拆分warlockbond工程" aria-hidden="true">#</a> 9A2.B.拆分WarlockBond工程</h2><p>用户权限的默认数据库实现，拆分为warlock-bond工程，</p><ul><li>不需要此实现的，dependency warlock，</li><li>否则，dependency warlock-bond</li></ul><p>同时增加<code>2020-10-23v01</code>，以消除flywave-fit警报。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">IGNORE</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">\`</span>sys_schema_version<span class="token punctuation">\`</span></span> 
<span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>revision<span class="token punctuation">\`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">\`</span>commit_id<span class="token punctuation">\`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">\`</span>apply_dt<span class="token punctuation">\`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">\`</span>comments<span class="token punctuation">\`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">\`</span>upto_sql<span class="token punctuation">\`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">\`</span>undo_sql<span class="token punctuation">\`</span></span><span class="token punctuation">)</span> 
<span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2020102302</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9a2-c-拆分codegen工程" tabindex="-1"><a class="header-anchor" href="#_9a2-c-拆分codegen工程" aria-hidden="true">#</a> 9A2.C.拆分CodeGen工程</h2><p>代码生成工具，分离为独立工程，分别为faceless-jooqgen和warlock-codegen， 实际使用中，直接依赖warlock-codegen即可，示例maven配置如下</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>pro.fessional.wings<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>warlock-codegen<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9a2-d-多国语功能调整" tabindex="-1"><a class="header-anchor" href="#_9a2-d-多国语功能调整" aria-hidden="true">#</a> 9A2.D.多国语功能调整</h2><p><code>sys_standard_i18n</code>中<code>ukey</code>语义为，约束确认唯一数据或enum类定位成员</p><ul><li><code>id</code>类型 - <code>id.</code> + id</li><li><code>code</code>类型 - type + <code>.</code> + code</li><li>java的enum，则为包名，类名，name构成</li></ul><p>修改内容包括，数据记录和codegen代码的多国语功能，</p><ul><li>替换数据，如 2019-05-21v01-enum-i18n.sql</li><li>重新生成模板代码，如 StandardLanguage</li></ul><h2 id="_9a2-e-配置属性的变更" tabindex="-1"><a class="header-anchor" href="#_9a2-e-配置属性的变更" aria-hidden="true">#</a> 9A2.E.配置属性的变更</h2><h3 id="wings-monitor-79-properties" tabindex="-1"><a class="header-anchor" href="#wings-monitor-79-properties" aria-hidden="true">#</a> wings-monitor-79.properties</h3><ul><li><code>report-keyword</code> 变为 <code>notice-keyword</code></li></ul>`,41);function q(I,T){const s=i("ExternalLinkIcon");return l(),o("div",null,[r,a("p",null,[n("当前使用的java11为"),a("a",d,[n("openjdk build 11.0.2+9"),e(s)]),n("， 推荐以"),a("a",u,[n("sdkman"),e(s)]),n("管理java8及java11环境，并在shell中设置"),k,n("和"),g,n("变量。")]),m,a("ul",null,[a("li",null,[a("a",v,[n("What's the difference between --add-exports and --add-opens ..."),e(s)])]),a("li",null,[a("a",b,[n("How can I specify --add-opens from a project level ..."),e(s)])])]),h,a("p",null,[n("springdoc全面使用OpenApi/Swagger3.0，因此springfox的Swagger2.0注解需要替换 具体细节参考 "),a("a",f,[n("https://springdoc.org/#migrating-from-springfox"),e(s)])]),_,a("ul",null,[a("li",null,[a("a",E,[n("先全备再恢复 Logical Upgrade"),e(s)])]),a("li",null,[a("a",y,[n("原地data升级 In-Place Upgrade"),e(s)])]),a("li",null,[a("a",w,[n("检查工具 mysql shell"),e(s)])])]),A])}const O=p(c,[["render",q],["__file","9a2.266-210.html.vue"]]);export{O as default};
