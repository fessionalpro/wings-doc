import{_ as l,Y as d,Z as c,a0 as e,a2 as i,a1 as s,a4 as o,C as n}from"./framework-3a8f5b7b.js";const t={},p=o('<h1 id="_2a-表和数据的版本" tabindex="-1"><a class="header-anchor" href="#_2a-表和数据的版本" aria-hidden="true">#</a> 2A.表和数据的版本</h1><blockquote><p>时间结界，在时空中创造一个泡状遮罩，将所有位于其中的单位定住。</p></blockquote><p>以Sql和Git为核心，管理数据和代码关系，可以方便的Diff和Merge</p><h2 id="_2a-1-飞波-flywave-是一个实践" tabindex="-1"><a class="header-anchor" href="#_2a-1-飞波-flywave-是一个实践" aria-hidden="true">#</a> 2A.1.飞波(Flywave)是一个实践</h2><p>工程实际中，我们响应变化，应对变更，都有成熟的工具，源代码由git管理，任务由jira管理， 那么静态的表结构变更，运行时的数据变更，我们怎么管理和记录，跟踪和调查，分支和回滚呢？</p><ul><li>项目从零开始，需求逐渐浮现，如何管理每周迭代中的字段新增，废弃和修改</li><li>local, develop, product的代码应该对应哪个schema和data</li><li>线上一个订单数据错误，由哪个事件引起的，他都更新了哪些条数据</li><li>sql搞错where，发现时已晚，如何确认受影响数据，快速恢复到更新前</li><li>项目一点点变大，从单库单表，平滑的过度到，读写分离，分表分库</li><li>网络中断，联网续传，一套代码可以跑本地H2和云端MySql</li></ul><p>如果你的项目遇到了以上的数据库及数据的问题，flywave的思想（不限于Wings）适合你。</p><p>不适用场景及风险提示：<strong>数据十分重要</strong>，重要操作需要专业人士 <code>DoubleCheck</code></p><ul><li>线上数据很热或非常大，以至于没有一刀切的升级方案，flywave无法胜任</li><li>涉及线上表rename等，建议专业人士介入，采用pt-online-schema-change思路</li></ul><p>实际项目中，schema结构的变更十分频繁，需要控制好local/develop/product的版本和节奏。 <code>flyway</code>是个不错的选择，但用它有点牛刀杀鸡，所以新造个轮子叫<code>flywave</code>，可以，</p><ul><li>根据 <code>/wings-flywave/master/**/*.sql</code> 数据库和数据的统一管理</li><li>根据 <code>/wings-flywave/branch/**/*.sql</code> sql的分支管理</li><li>根据 <code>sys_schema_version</code>表，控制数据库版本，升级和降级</li><li>根据 <code>sys_schema_journal</code>表，完成自动记录数据变更</li><li>实际扫描<code>/**/*.sql</code>，因此次级目录表序表意为上，结构层次不影响版本排序</li></ul><p>sql文件都受git管理，如无必须，勿搞复杂分支，单时间线是实践最佳。 这里的branch，目标是sql管理，而非数据库和数据管理。 就是说，数据库中只有master一条线，而本地sql可以有多条线。</p><p>实际项目经验中，数据库只存储数据，不存业务逻辑。所以，必须使用基本的SQL和数据库功能。 这些功能包括，表，索引，触发器。不包括，视图，存储过程，外键约束及数据库特性。</p><p><code>flywave</code>体系下，有以下约定和概念，理解这些约定，有利于清晰业务架构。</p><p>JDBC数据源(DataSource)，分为两种，他们会存在于<code>DataSourceContext</code>中，</p><ul><li>当前数据源(current) - 通过Spring注入获得的，plain或shard数据源</li><li>后端数据源(backend) - plain数据源，直接操作普通数据库实例</li><li>plain - 普通数据库，对sql和数据没有逻辑处理</li><li>shard - 逻辑数据库，通过算法对多个plain数据库进行分片</li></ul><p><code>flywave</code>根据后续的场景规则，可自动或手动使用不同的数据源执行DDL和DML等。</p><p>数据表(Table)，语义上有三种表，用来表示用途和使用场景。</p><ul><li>本表(plain)，也叫普通表，正常的命名，如英数下划线，甚至中文</li><li>分表(shard)，本表+<code>_#</code>后缀，<code>#</code>为对N取模(0..N-1)（左侧无0填充）</li><li>跟踪表(trace)，也叫log表，影子表。本表或分表+<code>__\\w+</code>，<code>__</code>视为分隔符</li><li>以<code>nut</code>表示，本表+分表；以<code>log</code>表示，跟踪表</li></ul><p>这三种表，满足以下规定，并且跟本表保持同步更新。</p><ul><li>本表一定存在，即便存在分表时，也会存在一个本表，用来保持原始表结构</li><li>分表，具有和本表一样的表结构，索引和触发器，同步更新</li><li>跟踪表具有和本表(nut，对应的本表和分表)相同的字段和类型，同步更新</li><li>跟踪表为触发器使用，包含了一些标记字段，建议以<code>_*</code>格式</li><li>三种表，一定会保持相同的表结构（名字，类型，前后关系），同步更新</li></ul><p><code>$</code>是命名中的特殊字符，定义<code>跟踪表</code>，但它在很多环境中需要转义，如shell，regexp。 sql的书写规则详见【数据库约定】章节。因云数据库的兼容性，在wings2.6.6后用<code>__</code>替代<code>$</code>。</p><p>尤其重要的是，一个 <strong>SQL块必须有delimiter收尾</strong>，哪怕是注释部分也需要。 因为flywave不对sql做语法分析，故无法判断delimiter是否在特殊的字符串中。</p><p>表定义要避免<code>nullable</code>，建议用默认值代替，如<code>EmptyValue</code>类约定</p><p>关于<code>/wings-flywave/</code>目录，有以下几种实践操作。</p><ul><li>存在<code>fulldump/{db}/</code>目录，用来管理当前主要db的最新schema</li><li>存在<code>master/00-init/</code>目录，最开始的初始化脚本</li><li>存在<code>master/01-##/</code>目录，用来按里程碑或年月管理变更脚本</li><li>存在<code>branch/##/##/</code>目录，可以以git-flow的命名实践，内建如下 <ul><li>feature 功能组件，可以作为选择项，按需添加</li><li>support 支撑型，如临时数据维护，调查</li><li>somefix 包括patch, bugfix, hotfix</li></ul></li></ul><h2 id="_2a-2-数据的版本管理-journal" tabindex="-1"><a class="header-anchor" href="#_2a-2-数据的版本管理-journal" aria-hidden="true">#</a> 2A.2.数据的版本管理(journal)</h2><p><code>逻辑删除</code>已成为行业标配，但如果删除数据只在调查时使用（对正常业务没用），则不是最优解。</p><ul><li>破坏查询索引 - 每个查询都要<code>is_deleted=0</code>，且80%以上数据为true</li><li>破坏唯一约束 - 重复的逻辑删除，使得unique约束无效</li></ul><p><code>逻辑删除</code>在wings中存在的唯一理由是为了数据<code>溯源</code>，否则应该直接删除。 它也叫<code>标记删除</code>，类似java的GC，在引用计数为0时，会被(立即或批处理)删除。</p><p>任何数据变动，都应该有<code>commit_id</code>，记录下事件信息（人，事件，业务信息等）。 最新的数据留在<code>本表</code>，旧数据通过<code>trigger</code>插入<code>跟踪表</code>。跟踪表也称<code>$log</code>表， 因最初的命名规则是，本表+<code>$log</code>后缀，但后因某些工具缺陷，误把<code>$</code>当做变量处理， 尽管其是mysql官方合法字符，flywave在210版后调整为双下划线<code>__</code>后缀。</p><p><code>journal</code>通过<code>sys_schema_journal</code>生成<code>跟踪表</code>和<code>触发器</code>。</p><ul><li>根据<code>log_insert</code>创建 <code>after insert</code> 触发器</li><li>根据<code>log_update</code>创建 <code>after update</code> 触发器</li><li>根据<code>log_delete</code>创建 <code>before delete</code> 触发器</li></ul><p>通过配置文件指定模板来定义DDL，默认设置参考<code>wings-flywave.properties</code>。 默认分表有自己的<code>log表</code>(<code>TABLE_#$log</code>)，一个table的触发器共用一个log表。 模板中，预定义以下DDL变量，避开spring变量替换，使用胡子<code>{{}}</code>表示法，名字全大写。</p><ul><li><code>{{PLAIN_NAME}}</code> 目标表的<code>本表</code>名字</li><li><code>{{TABLE_NAME}}</code> 目标表名字，可能是本表，分表，跟踪表</li><li><code>{{TABLE_BONE}}</code> 目标表字段(至少包含名字，类型，注释)，不含索引和约束</li><li><code>{{TABLE_PKEY}}</code> 目标表的主键中字段名，用来创建原主键的普通索引</li></ul><p>对于删除的数据，无法优雅的设置<code>commit_id</code>，此时若是需要journal，则要先更新再删除。 目前，在不使用sql标记或解析的情况下，提供了2种方法，手工类优先于自动拦截。</p><ul><li>通过工具类<code>JournalHelp</code>，手动执行<code>delete##</code></li><li>自动对<code>delete from ## where id=? and commit_id=?</code>格式进行拦截</li></ul><p>自动拦截<code>spring.wings.faceless.jooq.enabled.journal-delete</code>默认关闭。 因为违反<code>静态高于动态，编译时高于运行时</code>团队规则，且性能和限制不好控制。</p><p>可设置session级变量<code>DISABLE_FLYWAVE</code>使trigger失效，如数据恢复等无trigger情况。</p><ul><li>disable - <code>SET @DISABLE_FLYWAVE = 1;</code>时，trigger无效</li><li>enable - 当session结束时，trigger自动恢复有效</li><li>enable - <code>SET @DISABLE_FLYWAVE = NULL;</code></li></ul><p>参考资料</p>',41),r={href:"https://dev.mysql.com/doc/refman/8.0/en/trigger-syntax.html",target:"_blank",rel:"noopener noreferrer"},u=o(`<h2 id="_2a-3-注解指令" tabindex="-1"><a class="header-anchor" href="#_2a-3-注解指令" aria-hidden="true">#</a> 2A.3.注解指令</h2><p>flywave提供了以下有特殊功能的<code>sql注释</code>，称为<code>注解指令</code></p><ul><li>格式为 <code>特征前缀</code> + <code>本表</code>? + <code>数据源</code>? + <code>目标表</code>? + <code>错误处理</code>? + <code>确认语句</code>? <ul><li><code>特征前缀</code> = <code>^\\s*-{2,}\\s+</code>，即，单行注释 + <code>空格</code></li><li><code>本表</code> = <code>[^@ \\t]+</code>，即，合法表名</li><li><code>数据源</code> = <code>@plain</code>|<code>@shard</code>，固定值</li><li><code>目标表</code> = <code>\\s+apply@[^@ \\t]+</code>，即，固定值，正则</li><li><code>错误处理</code> = <code>\\s+error@(skip|stop)</code>，即，出错时停止还是继续</li><li><code>确认语句</code> = <code>\\s+ask@[^@ \\t]+</code>，即，确认语句，比如危险</li><li><code>触发器影响</code> = <code>@trigger</code>，即，是否影响trigger，无则false</li></ul></li><li>指定了<code>本表</code>的SQL，不会尝试解析</li><li>指定的<code>本表</code>在SQL语句中不存在时，不影响SQL执行，只是忽略<code>跟踪表</code>替换</li><li><code>目标表</code> 不区分大小写，全匹配。其中内定以下简写 <ul><li>空，默认适配全部，本表+分表+跟踪表</li><li><code>apply@nut</code> 只适配本表和分表 <code>[_0-9]*</code></li><li><code>apply@log</code> 只适配跟踪表 <code>__[a-z]*</code></li><li>注意，目标表不是if语句，不作为条件检查</li></ul></li><li><code>错误处理</code> 默认<code>stop</code>以抛异常结束，<code>skip</code>表示忽略异常继续执行</li><li><code>确认语句</code> 默认std.out输出，在std.in等待确认输入</li><li>注解的表达式为 <code>([^@ \\t]+)?@([^@ \\t]+)</code></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- ask@drop-database</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> sys_schema_version<span class="token punctuation">;</span>
<span class="token comment">-- @shard 强制使用shard数据源，自动解析本表为 sys_light_sequence</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">\`</span>sys_light_sequence<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
<span class="token comment">-- @plain 强制使用原始数据源，自动解析本表为sys_commit_journal</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">\`</span>sys_commit_journal<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
<span class="token comment">-- wgs_order@plain 强制使用原始数据源，并直接指定本表为wgs_order，因为语法中没有本表。</span>
<span class="token keyword">DROP</span> <span class="token keyword">TRIGGER</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">\`</span>wgs_order$bd<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
<span class="token comment">-- apply@win_admin[_0-0]* error@skip 可以解析本表，应用分表，忽略错误</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>win_admin<span class="token punctuation">\`</span></span> <span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> ix_login_name<span class="token punctuation">;</span>
<span class="token comment">-- apply@nut error@skip 等效于上一句</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>win_admin<span class="token punctuation">\`</span></span> <span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> ix_login_name<span class="token punctuation">;</span>
<span class="token comment">-- apply@log error@skip 只适应于跟踪表</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>win_admin<span class="token punctuation">\`</span></span> <span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> ix_login_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于注释，因需求简单，未使用语法分析，仅为正则和字符串替换层面的。</p><ul><li>只解析和忽略整行的，不处理行尾或行中的注释</li><li>单双引号内括起来的字符串内容会被忽略，不会被替换的</li><li>推荐使用单行注释<code>--</code>，对应多行注释<code>/* */</code>不可置于行中</li></ul><h2 id="_2a-4-自动检查" tabindex="-1"><a class="header-anchor" href="#_2a-4-自动检查" aria-hidden="true">#</a> 2A.4.自动检查</h2><p>通过<code>wings.faceless.flywave.fit.*</code>可以自动检查revision的依赖。 因无法确认程序执行账号是否具有CREATE权限，wings默认是WARN。</p><ul><li>若需要关闭检查，可以根据log提示设置SKIP</li><li>若需要执行Revision，把SKIP替换成EXEC即可</li><li>建议重要版本为FAIL或EXEC</li></ul><p>wings的内置Revision和真实日期无关，主要集中在2019至2021，仅表示顺序。</p><ul><li><code>2019</code> - 一般为基础功能，是Wings的服务基础</li><li><code>2020</code> - 业务功能，一般性的业务功能</li><li><code>2021</code> - 分支功能，可以不要考虑顺序</li></ul><p>目前已使用的版本号有，</p><ul><li>2019_0512_01 - master/00-init/2019-05-12v01-version-journal.sql</li><li>2019_0512_02 - branch/somefix/01-v227-fix/2019-05-12v02-version-add-column.sql</li><li>2019_0520_01 - master/01-light/2019-05-20v01-light-commit.sql</li><li>2019_0521_01 - branch/feature/01-enum-i18n/2019-05-21v01-enum-i18n.sql</li><li>2020_1023_01 - master/03-enum/2020-10-23v01-auth_enum.sql</li><li>2020_1024_01 - master/04-auth/2020-10-24v01-user_login.sql</li><li>2020_1024_02 - master/04-auth/2020-10-24v02-role_permit.sql</li><li>2020_1025_01 - master/05-conf/2020-10-25v01-conf_runtime.sql</li><li>2020_1026_01 - master/06-task/2020-10-26v01-tiny_task.sql</li><li>2020_1027_01 - master/07-mail/2020-10-27v01-tiny_mail.sql</li><li>2021_0918_01 - branch/somefix/01-authn-fix/2021-09-18v01-rename-authn.sql</li><li>2021_1220_01 - branch/somefix/02-v242-201/2021-12-20v01-journal-trg-insert.sql</li></ul><h2 id="_2a-5-数据库约定" tabindex="-1"><a class="header-anchor" href="#_2a-5-数据库约定" aria-hidden="true">#</a> 2A.5.数据库约定</h2><p>本约定基于经验的积累，属于当前场景下的较优实践。 并且，数据版本的管理，数据跟踪的功能严格依赖此约定。</p><ul><li>所有结构变更，都必须通过sql进行。静态数据建议使用sql</li><li>所有sql文件，按以下约定的顺序（增序）执行</li></ul><h3 id="版本号" tabindex="-1"><a class="header-anchor" href="#版本号" aria-hidden="true">#</a> 版本号</h3><ul><li><code>版本号</code>(revision)=<code>版本号</code>+<code>修订号</code>。</li><li><code>版本号</code>的初始值是<code>2019051201</code>，任何小于此值都被忽略。</li></ul><h3 id="主版号" tabindex="-1"><a class="header-anchor" href="#主版号" aria-hidden="true">#</a> 主版号</h3><p><code>主版号</code>(version/major)，使用yyyyMMdd的方式表述，一共8位数字。 数字部分，支持<code>_</code>或<code>-</code>分隔数字，以增加人眼识别度，如<code>yyyy-MM-dd</code>。</p><p>版本号要求严格递增，但不要求连续。</p><p>同一天内若有多人或多次修改，应做好沟通，统一修改。</p><h3 id="修订号" tabindex="-1"><a class="header-anchor" href="#修订号" aria-hidden="true">#</a> 修订号</h3><p><code>修订号</code>(build)，是小版本号，2位数字从<code>01</code>到<code>99</code>。</p><p>严格递增，不要求连续。</p><h3 id="标志位" tabindex="-1"><a class="header-anchor" href="#标志位" aria-hidden="true">#</a> 标志位</h3><p><code>标志位</code>用来表示行为，小写字母，目前只有<code>v</code>表示执行（升级），<code>u</code>表示撤销（降级）。</p><h3 id="信息部" tabindex="-1"><a class="header-anchor" href="#信息部" aria-hidden="true">#</a> 信息部</h3><p><code>-</code>+英文信息，单词间以<code>_</code>或<code>-</code>分隔为好。 该部分为可选项，只用来人工识别文件用，程序处理时忽略。</p><h3 id="文件名" tabindex="-1"><a class="header-anchor" href="#文件名" aria-hidden="true">#</a> 文件名</h3><p>文件名由<code>版本号</code>+<code>标志位</code>+<code>修订号</code>+<code>信息部</code>构成，<code>.sql</code>扩展名，全小写。</p><ul><li>20190521u01-my_test.sql</li><li>20190521v01-enum-i18n.sql</li></ul><h3 id="升级脚本" tabindex="-1"><a class="header-anchor" href="#升级脚本" aria-hidden="true">#</a> 升级脚本</h3><p>升级用<code>v</code>表示，是version的意思（也叫upto），必须存在。</p><p><code>20190509_v_01.sql</code>表示升级版本。</p><h3 id="降级脚本" tabindex="-1"><a class="header-anchor" href="#降级脚本" aria-hidden="true">#</a> 降级脚本</h3><p>降级用<code>u</code>表示，是undo的意思，可以不存在。</p><p><code>20190509_u_01.sql</code>是<code>20190509_v_01.sql</code>的降级。</p><p>降级需要做 <code>exists</code> 检测，以保证容错能力。</p><p>执行时，默认先执行降级脚本。</p><h2 id="_2a-6-sql格式化" tabindex="-1"><a class="header-anchor" href="#_2a-6-sql格式化" aria-hidden="true">#</a> 2A.6.SQL格式化</h2><ul><li>一个字段放一行，不换行</li><li>表和字段要有注释</li><li>脚本要有分隔符<code>;</code></li><li>完整语句间留有空行</li><li>所有表名，字段，索引，触发器名，可以有反引号转义</li><li>有效命名字符有<code>A-Z</code>,<code>0-9</code>，<code>_</code>，但不建议使用<code>$</code></li><li>数据库，表，字段名，建议全小写，SQL关键字等全大写，以区分</li><li>以空行分开的SQL段，是一个执行单元</li><li>要求一个执行单元，只有一条SQL语句</li></ul><h2 id="_2a-7-测试用例" tabindex="-1"><a class="header-anchor" href="#_2a-7-测试用例" aria-hidden="true">#</a> 2A.7.测试用例</h2><p><code>kotlin</code>中的测试用例，主要是场景演示。需要单个执行，确保成功。 统一执行时，springboot为了有效使用资源，不会全部重新初始化<code>context</code>， 这样会使有些<code>ApplicationListener</code>得不到触发，可能导致部分TestCase失败。</p>`,44);function h(_,m){const a=n("ExternalLinkIcon");return d(),c("div",null,[p,e("ul",null,[e("li",null,[e("a",r,[i("https://dev.mysql.com/doc/refman/8.0/en/trigger-syntax.html"),s(a)])])]),u])}const v=l(t,[["render",h],["__file","2a-flywave.html.vue"]]);export{v as default};
