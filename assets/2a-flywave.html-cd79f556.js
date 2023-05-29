import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as l,c as d,b as e,e as a,d as i,f as n}from"./app-76302e33.js";const c={},r=n('<h1 id="_2a-table-data-versioning" tabindex="-1"><a class="header-anchor" href="#_2a-table-data-versioning" aria-hidden="true">#</a> 2A.Table/Data Versioning</h1><blockquote><p>Time Lock, The strike of the Faceless Void lands with dimension shifting force.</p></blockquote><p>Sql-based and Git-like schema and data version management. commit schema and code to git, easily diff and merge.</p><h2 id="_2a-1-flywave-is-practice" tabindex="-1"><a class="header-anchor" href="#_2a-1-flywave-is-practice" aria-hidden="true">#</a> 2A.1.Flywave is Practice</h2><p>In real-world software development, we have great tools for adapting to and managing change, such as Git for source code and Jira for tasks. But when it comes to changes to static tables and runtime data, how do we manage, record, track, investigate, branch, and rollback?</p><ul><li>When you start a project from scratch, requirements emerge gradually. How do you manage field additions, deprecations, and changes in each weekly iteration?</li><li>Which schema and data should correspond to the code for local, develop, product?</li><li>An online order error occurred , what event caused it and what data was updated?</li><li>When it&#39;s to late to stop executing sql with a wrong where clause, How to confirm the affected records and roll them back?</li><li>The project gets bigger and bigger, how to smoothly transition from a single app, single database to rw-separation, data-sharding and more?</li><li>Network break, network resume, same code can run on both local H2 and cloud MySQL.</li></ul><p>If your project has the above database and data problems, Flywave&#39;s ideas (not limited to Wings) are for you.</p><p>Not applicable scenarios and risk WARNING: <strong>Data is Very Important</strong>, important operation need professional <code>DoubleCheck</code></p><ul><li>Online data is so hot or so large that there is no one-size-fits-all upgrade solution and flywave is not up to the task.</li><li>Online table renaming, etc. it is recommended to use other professional solution, eg. pt-online-schema-change strategy</li></ul><p>In the real startup project, the schema structure changes very often, and you need to control the version and iteration pace of local/develop/product. <code>flyway</code> is a good choice, but using it may be overkill, so a new wheel called <code>flywave</code> is created, which is feasible.</p><ul><li>use <code>/wings-flywave/master/**/*.sql</code> to manage databases and data</li><li>use <code>/wings-flywave/branch/**/*.sql</code> to manage branches of sql</li><li>use <code>sys_schema_version</code> table to control database version, upgrade/downgrade</li><li>use <code>sys_schema_journal</code> table to automatic log data changes</li><li>The actual scan path pattern is <code>/**/*.sql</code>, so the subdir level has no effect on the version ordering and only indicates order and business meaning</li></ul><p>sql files are managed by git, if not necessary, do not engage in complex branching, single timeline is the best practice. The goal of branch here is file management, not database and data management. This means that the database is in one master timeline while local sql files can be in multiple timelines.</p><p>In real project practice, the database should only store data, not business logic. Therefore, only basic SQL and database features should be used, including tables, indexes, triggers, excluding views, logic procedures, foreign key constraints and database special functions.</p><p>The following conventions and concepts exist within the Flywave system, and understanding them will help clarify the business architecture.</p><p>There are 2 types of JDBC (DataSource), they exist in the <code>DataSourceContext</code>.</p><ul><li>Current DataSource (current) - Injected by Spring, plain or shard DataSource</li><li>Underlying DataSource (backend) - plain DataSource directly to database instance</li><li>plain - ordinary database, no logical processing of sql and data</li><li>shard - logical database, algorithmically sharded across multiple plain databases</li></ul><p><code>flywave</code> can automatically(or manually) execute DDL and DML on different data sources. This depends on the following scenario rules.</p><p>According to the use and scenarios, semantically, there are 3 types of data tables (Table).</p><ul><li><code>plain</code> table, i.e. ordinary table, the normal naming, alphanumeric, underscores, or even unicode chars</li><li><code>shard</code> table, <code>plain</code> table + <code>_#</code> suffix, <code>#</code> for the modulo N (0..N-1) (no 0 padding on the left)</li><li><code>trace</code> table, i.e. log table, shadow table. <code>plain</code>/<code>shard</code> + <code>__\\w+</code>, <code>__</code> is separator</li><li><code>nut</code> means <code>plain</code> and <code>shard</code> table; <code>log</code> means <code>trace</code> table</li></ul><p>These three table types follow the following rules and keep up with <code>plain</code> table.</p><ul><li>Plain table must exist to maintain the original table structure, even if there are shard tables</li><li>Shard table has the same structure as plain table, including indexes and triggers, and synchronized updates</li><li>Trace table has the same structure as nut table (plain and shard), including column and type, and synchronized updates</li><li>Trace table is used for triggers and contains some meta columns named in <code>_*</code> style</li><li>The above 3 type tables must have the same structure (name, type, column order) and be updated synchronously</li></ul><p><code>$</code> is a special character in naming that defines the <code>trace</code> table, but it needs to be escaped in many environments, such as shell, regexp. The rules for writing sql are detailed in the [Database Conventions] chapter. Due to cloud database compatibility, <code>__</code> is used instead of <code>$</code> after wings2.6.6.</p><p>It is very important that a <strong>SQL block must end with the delimiter</strong>, even in the comment block. because flywave does not do sql syntax analysis, it cannot determine if the delimiter is in a special string.</p><p>Table definitions should avoid <code>nullable</code>, it is recommended to use default values instead, such as the <code>EmptyValue</code> convention.</p><p>For the<code>/wings-flywave/</code> directory, there are some handy operations.</p><ul><li>The <code>fulldump/{db}/</code> is used to manage the latest schema of the current primary db</li><li>The <code>master/00-init/</code> is used for the initial scripts at the beginning</li><li>The <code>master/01-##/</code> is used to manage change by milestone or year/month</li><li>A <code>branch/##/##/</code> is used as the git-flow naming convention, with the following built-in, <ul><li>feature components can be added as options on demand</li><li>support such as temporary data maintenance, investigation</li><li>somefix including patch, bugfix, hotfix</li></ul></li></ul><h2 id="_2a-2-data-versioning-journal" tabindex="-1"><a class="header-anchor" href="#_2a-2-data-versioning-journal" aria-hidden="true">#</a> 2A.2.Data Versioning (journal)</h2><p><code>Logical delete</code> has become an industry standard, but it is not a better solution if the deleted data is only used for investigation (useless for the normal business)</p><ul><li>Breaks query indexes - every query has<code>is_deleted=0</code> with 80+% data being true</li><li>Breaks unique constraints - duplicate deletions make unique constraints invalid</li></ul><p>The only reason for <code>logical delete</code> in wings is for data <code>tracing</code>, otherwise it should be deleted directly. It is also called <code>mark delete</code>, similar to java&#39;s GC, and is deleted (immediately or in batch) when the reference count reaches 0.</p><p>Any data changes should have the <code>commit_id</code>, which records the event information (user, event, business info, etc.). The latest data remains in the <code>plain</code> table and the old data is inserted into the <code>trace</code> table via <code>trigger</code>. The trace table is also called the <code>$log</code> table, which is form the original naming convention (plain table + <code>$log</code> suffix), but then due to some tool defect, mistakenly treats <code>$</code> as a variable, allthough <code>$</code> is a mysql official legal character, flywave adjusted <code>$</code> to double underscore <code>__</code> suffix after version 210.</p><p><code>journal</code> generates <code>trace</code> tables and <code>triggers</code> via <code>sys_schema_journal</code>.</p><ul><li>Create <code>after insert</code> trigger based on <code>log_insert</code></li><li>Create <code>after update</code> trigger based on <code>log_update</code></li><li>Create <code>before delete</code> trigger based on <code>log_delete</code></li></ul><p>Define the DDL by specifying a template in the config file, the default settings refer to <code>wings-flywave.properties</code>. The default shard-table has its own <code>log table</code> (<code>TABLE_#$log</code>), and all triggers in one table share this log table. In the template, the following DDL variables are predefined, avoiding spring variable substitution, using the mustache <code>{{}}</code> style, with all names capitalized.</p><ul><li><code>{{PLAIN_NAME}}</code> The <code>plain</code> table name of the target table</li><li><code>{{TABLE_NAME}}</code> Target table name, can be <code>plain</code>, <code>shard</code>, <code>trace</code> table</li><li><code>{{TABLE_BONE}}</code> Bone columns of the target table (name, type, comment, at least), without indexes and constraints</li><li><code>{{TABLE_PKEY}}</code> PK columns of the target table, used to create a normal index against the original primary key</li></ul><p>It is not possible to gracefully set <code>commit_id</code> for deleting data at this point, if you need the journal, you have to update it and then delete. Currently there are 2 ways provided as follows, without using sql annotation or parsing, and the manual way is recommended over auto intercept.</p><ul><li>Manually invoke <code>delete##</code> using the <code>JournalHelp</code> utility</li><li>Auto intercept <code>delete from ## where id=? and commit_id=?</code> style sql</li></ul><p>The auto intercept is disabled by default in <code>spring.wings.faceless.jooq.enabled.journal-delete</code>. This is because it violates the <code>static over dynamic, compile-time over run-time</code> team rule, and performance and limits are not well controlled.</p><p>The session-level variable <code>DISABLE_FLYWAVE</code> can be set to disable triggers, such as data recovery and other no-trigger cases.</p><ul><li>disable - when <code>SET @DISABLE_FLYWAVE = 1;</code>, trigger is disabled</li><li>enable - when the session close, the trigger is auto enable by default.</li><li>enable - <code>SET @DISABLE_FLYWAVE = NULL;</code></li></ul><p>Reference</p>',41),u={href:"https://dev.mysql.com/doc/refman/8.0/en/trigger-syntax.html",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"_2a-3-comment-directive",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2a-3-comment-directive","aria-hidden":"true"},"#"),a(" 2A.3.Comment Directive")],-1),h=e("p",null,[a("flywave provides the following sql comments with special functions, called "),e("code",null,"comment directive")],-1),m=n("<li>Formatted as <code>prefix</code> + <code>plain</code>? + <code>ds</code>? + <code>target</code>? + <code>error</code>? + <code>confirm</code>? <ul><li><code>prefix</code> = <code>^\\s*-{2,}\\s+</code>, i.e., single line comment + <code>space</code></li><li><code>plain</code> = <code>[^@ \\t]+</code>, i.e., legal table name</li><li><code>ds</code> = <code>@plain</code>|<code>@shard</code>, fixed values for data source</li><li><code>target</code> = <code>\\s+apply@[^@ \\t]+</code>, i.e., fixed value, RegExp</li><li><code>error</code> = <code>\\s+error@(skip|stop)</code>, i.e., whether to stop or continue on error</li><li><code>confirm</code> = <code>\\s+ask@[^@ \\t]+</code>, i.e., confirmation statements, such as danger</li><li><code>trigger</code> = <code>@trigger</code>, i.e., does it affect the trigger, false if none.</li></ul></li><li>SQL with <code>plain table</code> specified will not auto parse</li><li>If the specified <code>plain table</code> does not exist in the SQL statement, it does not affect the SQL execution, but just ignores the <code>trace table</code> replacement</li><li><code>target table</code> is case-insensitive, all matches. Where the following shorthand is built in <ul><li>empty, default matches all, plain + shard + trace tables</li><li><code>apply@nut</code> matches only plain + shard tables <code>[_0-9]*</code></li><li><code>apply@log</code> matches only to the trace table <code>__[a-z]*</code></li><li>Note that the target table is not an if statement and not checked as a condition</li></ul></li><li><code>error</code> default <code>stop</code> ends with an exception, <code>skip</code> means ignore the exception and continue execution</li>",5),g=e("code",null,"confirm",-1),b={href:"http://std.in",target:"_blank",rel:"noopener noreferrer"},f=e("li",null,[a("Annotated RegExp is "),e("code",null,"([^@ \\t]+)? @([^@ \\t]+)")],-1),y=n(`<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- ask@drop-database</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> sys_schema_version<span class="token punctuation">;</span>
<span class="token comment">-- @shard shard data source, plain table is sys_light_sequence auto</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">\`</span>sys_light_sequence<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
<span class="token comment">-- @plain plain data source, plain table is sys_commit_journal auto</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">\`</span>sys_commit_journal<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
<span class="token comment">-- wgs_order@plain plain data source and specified plain table is wgs_order.</span>
<span class="token keyword">DROP</span> <span class="token keyword">TRIGGER</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">\`</span>wgs_order$bd<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
<span class="token comment">-- apply@win_admin[_0-0]* error@skip auto parse plain table, apply to shard tables, and ignore errors</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>win_admin<span class="token punctuation">\`</span></span> <span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> ix_login_name<span class="token punctuation">;</span>
<span class="token comment">-- apply@nut error@skip same as previous sentence</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>win_admin<span class="token punctuation">\`</span></span> <span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> ix_login_name<span class="token punctuation">;</span>
<span class="token comment">-- apply@log error@skip apply to tracke table only</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>win_admin<span class="token punctuation">\`</span></span> <span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> ix_login_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>About comments, due to simple requirements, no syntax analysis is used, only at the RegExp and string replacement level.</p><ul><li>Only parse and ignore whole lines, do not handle tail or inline comments</li><li>The contents of strings enclosed in single and double quotes is ignored and not replaced</li><li>Single line comments <code>--</code> are recommended, and the multi-line comments <code>/* */</code> may not be placed in lines</li></ul><h2 id="_2a-4-auto-revision-check" tabindex="-1"><a class="header-anchor" href="#_2a-4-auto-revision-check" aria-hidden="true">#</a> 2A.4.Auto Revision Check</h2><p>With <code>wings.faceless.flywave.fit.*</code> you can automatically check for revision dependencies. Since it is not possible to check the CREATE permission, wings use WARN by default.</p><ul><li>If you need to disable the check, you can set SKIP as the log message said.</li><li>If you need to publish the revision, just replace SKIP with EXEC.</li><li>FAIL or EXEC is recommended for important revisions.</li></ul><p>The built-in revision has nothing to do with the real date, mainly between 2019 and 2021, only indicates the order.</p><ul><li><code>2019</code> - basic features and services</li><li><code>2020</code> - business features, general business functions</li><li><code>2021</code> - branch functions, can be in orderless</li></ul><p>The revision numbers currently in use are,</p><ul><li>2019_0512_01 - master/00-init/2019-05-12v01-version-journal.sql</li><li>2019_0512_02 - branch/somefix/01-v227-fix/2019-05-12v02-version-add-column.sql</li><li>2019_0520_01 - master/01-light/2019-05-20v01-light-commit.sql</li><li>2019_0521_01 - branch/feature/01-enum-i18n/2019-05-21v01-enum-i18n.sql</li><li>2020_1023_01 - master/03-enum/2020-10-23v01-auth_enum.sql</li><li>2020_1024_01 - master/04-auth/2020-10-24v01-user_login.sql</li><li>2020_1024_02 - master/04-auth/2020-10-24v02-role_permit.sql</li><li>2020_1025_01 - master/05-conf/2020-10-25v01-conf_runtime.sql</li><li>2020_1026_01 - master/06-task/2020-10-26v01-tiny_task.sql</li><li>2020_1027_01 - master/07-mail/2020-10-27v01-tiny_mail.sql</li><li>2021_0918_01 - branch/somefix/01-authn-fix/2021-09-18v01-rename-authn.sql</li><li>2021_1220_01 - branch/somefix/02-v242-201/2021-12-20v01-journal-trg-insert.sql</li></ul><h2 id="_2a-5-database-convention" tabindex="-1"><a class="header-anchor" href="#_2a-5-database-convention" aria-hidden="true">#</a> 2A.5.Database Convention</h2><p>This convention is based on experience and is a better practice in the current scenario. In addition, the data versioning and tracing features are strictly dependent on it.</p><ul><li>All structure changes must be done through sql, even for static data.</li><li>All sql files are executed in the following order (incremental order)</li></ul><h3 id="revision-number" tabindex="-1"><a class="header-anchor" href="#revision-number" aria-hidden="true">#</a> Revision Number</h3><ul><li><code>revision</code> = <code>version</code> number + <code>build</code> number</li><li>The first <code>revision</code> is <code>2019051201</code> and any lower value is ignored.</li></ul><h3 id="version-number" tabindex="-1"><a class="header-anchor" href="#version-number" aria-hidden="true">#</a> Version Number</h3><p>The <code>version</code> is the major number, 8 digits yyyyMMdd style. <code>_</code> or <code>-</code> can separate the digits for human readability, e.g. <code>yyyyy-MM-dd</code>.</p><p>The <code>version</code> number must be strictly incremental, but not consecutive.</p><p>If there are multiple people, or multiple version in the same day, you should communicate well and unify the version.</p><h3 id="build-number" tabindex="-1"><a class="header-anchor" href="#build-number" aria-hidden="true">#</a> Build Number</h3><p>The <code>build</code> is the minor number, 2 digits from <code>01</code> to <code>99</code>.</p><p>It is strictly incremental, but not consecutive.</p><h3 id="flag-part" tabindex="-1"><a class="header-anchor" href="#flag-part" aria-hidden="true">#</a> Flag Part</h3><p>The <code>flag</code> char indicates the behavior, lower case, currently <code>v</code> means upgrade(version) and <code>u</code> means downgrade(undo).</p><h3 id="info-part" tabindex="-1"><a class="header-anchor" href="#info-part" aria-hidden="true">#</a> Info Part</h3><p><code>-</code> + English message, separated by <code>_</code> or <code>-</code> between words is recommended. This part is optional and used only for the file comment, ignored by the program during processing.</p><h3 id="file-name" tabindex="-1"><a class="header-anchor" href="#file-name" aria-hidden="true">#</a> File Name</h3><p>The filename consists of <code>version</code> + <code>flag</code> + <code>build</code> + <code>info</code>, with <code>.sql</code> extension, all lowercase.</p><ul><li>20190521u01-my_test.sql</li><li>20190521v01-enum-i18n.sql</li></ul><h3 id="upgrade-script" tabindex="-1"><a class="header-anchor" href="#upgrade-script" aria-hidden="true">#</a> Upgrade Script</h3><p>Upgrade is denoted by <code>v</code>, which stands for version (also called upto), required.</p><p><code>20190509_v_01.sql</code> means upgrade version.</p><h3 id="downgrade-script" tabindex="-1"><a class="header-anchor" href="#downgrade-script" aria-hidden="true">#</a> Downgrade Script</h3><p>Downgrade is denoted by <code>u</code>, which means undo, optional.</p><p><code>20190509_u_01.sql</code> is a downgrade from <code>20190509_v_01.sql</code>.</p><p>The downgrade requires an <code>exists</code> check to ensure fault tolerance. and is run first by default (before its upgrade).</p><h2 id="_2a-6-sql-formatting" tabindex="-1"><a class="header-anchor" href="#_2a-6-sql-formatting" aria-hidden="true">#</a> 2A.6.SQL Formatting</h2><ul><li>One line for one field, no line breaks</li><li>Tables and fields should have comments</li><li>Statement should end with the <code>;</code> delimiter</li><li>Blank line between each complete statement</li><li>All table names, fields, indexes, trigger names, can have backquote escapes</li><li>Valid naming characters are <code>A-Z</code>, <code>0-9</code>, <code>_</code>, but <code>$</code> is not recommended</li><li>Database, table, field names are recommended all lowercase, SQL keywords, etc. are all uppercase to distinguish user-defined</li><li>SQL segment separated by blank lines is an execution unit</li><li>one execution unit must have only one SQL statement</li></ul><h2 id="_2a-7-testcase-and-sample" tabindex="-1"><a class="header-anchor" href="#_2a-7-testcase-and-sample" aria-hidden="true">#</a> 2A.7.TestCase and Sample</h2><p>The test cases in <code>kotlin</code> are mainly for demo purposed. They should be run individually to ensure success. If they are run together, springboot will not reinitialize <code>context</code> all the time in order to reuse resources efficiently. This will cause some <code>ApplicationListener</code> not to fire and some TestCase to fail.</p>`,40);function v(w,_){const o=s("ExternalLinkIcon");return l(),d("div",null,[r,e("ul",null,[e("li",null,[e("a",u,[a("https://dev.mysql.com/doc/refman/8.0/en/trigger-syntax.html"),i(o)])])]),p,h,e("ul",null,[m,e("li",null,[g,a(" default std.out output, wait for confirm input at "),e("a",b,[a("std.in"),i(o)])]),f]),y])}const T=t(c,[["render",v],["__file","2a-flywave.html.vue"]]);export{T as default};
