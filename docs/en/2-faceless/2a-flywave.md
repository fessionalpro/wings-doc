---
isOriginal: true
icon: git
category:
  - Faceless
  - Version
---

# 2A.Table/Data Versioning

> Time Lock, The strike of the Faceless Void lands with dimension shifting force.

Sql-based and Git-like schema and data version management.
commit schema and code to git, easily diff and merge.

## 2A.1.飞波(Flywave)是一个实践

工程实际中，我们响应变化，应对变更，都有成熟的工具，源代码由git管理，任务由jira管理，
那么静态的表结构变更，运行时的数据变更，我们怎么管理和记录，跟踪和调查，分支和回滚呢？

* 项目从零开始，需求逐渐浮现，如何管理每周迭代中的字段新增，废弃和修改
* local, develop, product的代码应该对应哪个schema和data
* 线上一个订单数据错误，由哪个事件引起的，他都更新了哪些条数据
* sql搞错where，发现时已晚，如何确认受影响数据，快速恢复到更新前
* 项目一点点变大，从单库单表，平滑的过度到，读写分离，分表分库
* 网络中断，联网续传，一套代码可以跑本地H2和云端MySql

如果你的项目遇到了以上的数据库及数据的问题，flywave的思想（不限于Wings）适合你。

不适用场景及风险提示，**数据十分重要**，重要操作需要专业人士 `DoubleCheck`

* 线上数据很热或非常大，以至于没有一刀切的升级方案，flywave无法胜任
* 涉及线上表rename等，建议专业人士介入，采用pt-online-schema-change思路

实际项目中，schema结构的变更十分频繁，需要控制好local/develop/product的版本和节奏。
`flyway`是个不错的选择，但用它有点牛刀杀鸡，所以新造个轮子叫`flywave`，可以，

* 根据 `/wings-flywave/master/**/*.sql` 数据库和数据的统一管理
* 根据 `/wings-flywave/branch/**/*.sql` sql的分支管理
* 根据 `sys_schema_version`表，控制数据库版本，升级和降级
* 根据 `sys_schema_journal`表，完成自动记录数据变更
* 实际扫描`/**/*.sql`，因此次级目录表序表意为上，结构层次不影响版本排序

sql文件都受git管理，如无必须，勿搞复杂分支，单时间线是实践最佳。
这里的branch，目标是sql管理，而非数据库和数据管理。
就是说，数据库中只有master一条线，而本地sql可以有多条线。

实际项目经验中，数据库只存储数据，不存业务逻辑。所以，必须使用基本的SQL和数据库功能。
这些功能包括，表，索引，触发器。不包括，视图，存储过程，外键约束及数据库特性。

`flywave`体系下，有以下约定和概念，理解这些约定，有利于清晰业务架构。

JDBC数据源(DataSource)，分为两种，他们会存在于`DataSourceContext`中，

* 当前数据源(current) - 通过Spring注入获得的，plain或shard数据源
* 后端数据源(backend) - plain数据源，直接操作普通数据库实例
* plain - 普通数据库，对sql和数据没有逻辑处理
* shard - 逻辑数据库，通过算法对多个plain数据库进行分片

`flywave`根据后续的场景规则，可自动或手动使用不同的数据源执行DDL和DML等。

数据表(Table)，语义上有三种表，用来表示用途和使用场景。

* 本表(plain)，也叫普通表，正常的命名，如英数下划线，甚至中文
* 分表(shard)，本表+`_#`后缀，`#`为对N取模(0..N-1)（左侧无0填充）
* 跟踪表(trace)，也叫log表，影子表。本表或分表+`\$\w+`，`$`视为分隔符
* 以`nut`表示，本表+分表；以`log`表示，跟踪表

这三种表，满足以下规定，并且跟本表保持同步更新。

* 本表一定存在，即便存在分表时，也会存在一个本表，用来保持原始表结构
* 分表，具有和本表一样的表结构，索引和触发器，同步更新
* 跟踪表具有和本表(staff，对应的本表和分表)相同的字段和类型，同步更新
* 跟踪表为触发器使用，包含了一些标记字段，建议以`_*`格式
* 三种表，一定会保持相同的表结构（名字，类型，前后关系），同步更新

`$`是命名中的特殊字符，定义`跟踪表`，但它在很多环境中需要转义，如shell，regexp。
sql的书写规则详见【数据库约定】章节。

尤其重要的是，一个 **SQL块必须有delimiter收尾**，哪怕是注释部分也需要。
因为flywave不对sql做语法分析，故无法判断delimiter是否在特殊的字符串中。

表定义要避免`nullable`，建议用默认值代替，如`EmptyValue`类约定

关于`/wings-flywave/`目录，有以下几种实践操作。

* 存在`fulldump/{db}/`目录，用来管理当前主要db的最新schema
* 存在`master/00-init/`目录，最开始的初始化脚本
* 存在`master/01-##/`目录，用来按里程碑或年月管理变更脚本
* 存在`branch/##/##/`目录，可以以git-flow的命名实践，内建如下
  - feature 功能组件，可以作为选择项，按需添加
  - support 支撑型，如临时数据维护，调查
  - somefix 包括patch, bugfix, hotfix

## 2A.2.数据的版本管理(journal)

`逻辑删除`已成为行业标配，但如果删除数据只在调查时使用，则不是最优解。

* 破坏查询索引 - 每个查询都要`is_deleted=0`，且80%以上数据为true
* 破坏唯一约束 - 重复的逻辑删除，使得unique约束无效

`逻辑删除`在wings中存在的唯一理由是为了数据`溯源`，否则应该直接删除。
它也叫`标记删除`，类似java的GC，在引用计数为0时，会被(立即或批处理)删除。

任何数据变动，都应该有`commit_id`，记录下事件信息（人，事件，业务信息等）。
最新的数据留在`本表`，旧数据通过`trigger`插入`跟踪表`。跟踪表也称`$log`表，
因最初的命名规则是，本表+`$log`后缀，但后因某些工具缺陷，误把`$`当做变量处理，
尽管其是mysql官方合法字符，flywave在210版后调整为双下划线`__`后缀。

`journal`通过`sys_schema_journal`生成`跟踪表`和`触发器`。

* 根据`log_insert`创建 `after insert` 触发器
* 根据`log_update`创建 `after update` 触发器
* 根据`log_delete`创建 `before delete` 触发器

通过配置文件指定模板来定义DDL，默认设置参考`wings-flywave.properties`。
默认分表有自己的`log表`(`TABLE_#$log`)，一个table的触发器共用一个log表。
模板中，预定义以下DDL变量，避开spring变量替换，使用胡子`{{}}`表示法，名字全大写。

* `{{PLAIN_NAME}}` 目标表的`本表`名字
* `{{TABLE_NAME}}` 目标表名字，可能是本表，分表，跟踪表
* `{{TABLE_BONE}}` 目标表字段(至少包含名字，类型，注释)，不含索引和约束
* `{{TABLE_PKEY}}` 目标表的主键中字段名，用来创建原主键的普通索引

对于删除的数据，无法优雅的设置`commit_id`，此时若是需要journal，则要先更新再删除。
目前，在不使用sql标记或解析的情况下，提供了2种方法，手工类优先于自动拦截。

* 通过工具类`JournalHelp`，手动执行`delete##`
* 自动对`delete from ## where id=? and commit_id=?`格式进行拦截

自动拦截`spring.wings.faceless.jooq.enabled.journal-delete`默认关闭。
因为违反`静态高于动态，编译时高于运行时`团队规则，且性能和限制不好控制。

可设置session级变量`DISABLE_FLYWAVE`使trigger失效，如数据恢复等无trigger情况。

* disable - `SET @DISABLE_FLYWAVE = 1;`时，trigger无效
* enable - 当session结束时，trigger自动恢复有效
* enable - `SET @DISABLE_FLYWAVE = NULL;`

参考资料

* <https://dev.mysql.com/doc/refman/8.0/en/trigger-syntax.html>

## 2A.3.注解指令

flywave提供了以下有特殊功能的`sql注释`，称为`注解指令`

* 格式为 `特征前缀` + `本表`? + `数据源`? + `目标表`? + `错误处理`? + `确认语句`?
  - `特征前缀` = `^\s*-{2,}\s+`，即，单行注释 + `空格`
  - `本表` = `[^@ \t]+`，即，合法表名
  - `数据源` = `@plain`|`@shard`，固定值
  - `目标表` = `\s+apply@[^@ \t]+`，即，固定值，正则
  - `错误处理` = `\s+error@(skip|stop)`，即，出错时停止还是继续
  - `确认语句` = `\s+ask@[^@ \t]+`，即，确认语句，比如危险
  - `触发器影响` = `@trigger`，即，是否影响trigger
* 指定了`本表`的SQL，不会尝试解析
* 指定的`本表`在SQL语句中不存在时，不影响SQL执行，只是忽略`跟踪表`替换
* `目标表` 不区分大小写，全匹配。其中内定以下简写
  - 空，默认适配全部，本表+分表+跟踪表
  - `apply@nut` 只适配本表和分表 `[_0-9]*`
  - `apply@log` 只适配跟踪表 `__[a-z]*`
  - 注意，目标表不是if语句，不作为条件检查
* `错误处理` 默认`stop`以抛异常结束，`skip`表示忽略异常继续执行
* `确认语句` 默认std.out输出，在std.in等待确认输入
* 注解的表达式为 `([^@ \t]+)?@([^@ \t]+)`

```sql
-- ask@drop-database
DROP TABLE sys_schema_version;
-- @shard 强制使用shard数据源，自动解析本表为 sys_light_sequence
DROP TABLE IF EXISTS `sys_light_sequence`;
-- @plain 强制使用原始数据源，自动解析本表为sys_commit_journal
DROP TABLE IF EXISTS `sys_commit_journal`;
-- wgs_order@plain 强制使用原始数据源，并直接指定本表为wgs_order，因为语法中没有本表。
DROP TRIGGER IF EXISTS `wgs_order$bd`;
-- apply@win_admin[_0-0]* error@skip 可以解析本表，应用分表，忽略错误
ALTER TABLE `win_admin` DROP INDEX ix_login_name;
-- apply@nut error@skip 等效于上一句
ALTER TABLE `win_admin` DROP INDEX ix_login_name;
-- apply@log error@skip 只适应于跟踪表
ALTER TABLE `win_admin` DROP INDEX ix_login_name;
```

关于注释，因需求简单，未使用语法分析，仅为正则和字符串替换层面的。

* 只解析和忽略整行的，不处理行尾或行中的注释
* 单双引号内括起来的字符串内容会被忽略，不会被替换的
* 推荐使用单行注释`--`，对应多行注释`/* */`不可置于行中

## 2A.4.自动检查

通过`wings.faceless.flywave.fit.*`可以自动检查revision的依赖。
因无法确认程序执行账号是否具有CREATE权限，wings默认是WARN。

* 若需要关闭检查，可以根据log提示设置SKIP
* 若需要执行Revision，把SKIP替换成EXEC即可
* 建议重要版本为FAIL或EXEC

wings的内置Revision和真实日期无关，主要集中在2019至2021，仅表示顺序。

* `2019` - 一般为基础功能，是Wings的服务基础
* `2020` - 业务功能，一般性的业务功能
* `2021` - 分支功能，可以不要考虑顺序

目前已使用的版本号有，

* 2019_0512_01 - master/00-init/2019-05-12v01-version-journal.sql
* 2019_0512_02 - branch/somefix/01-v227-fix/2019-05-12v02-version-add-column.sql
* 2019_0520_01 - master/01-light/2019-05-20v01-light-commit.sql
* 2019_0521_01 - branch/feature/01-enum-i18n/2019-05-21v01-enum-i18n.sql
* 2020_1023_01 - master/03-enum/2020-10-23v01-auth_enum.sql
* 2020_1024_01 - master/04-auth/2020-10-24v01-user_login.sql
* 2020_1024_02 - master/04-auth/2020-10-24v02-role_permit.sql
* 2020_1025_01 - master/05-conf/2020-10-25v01-conf_runtime.sql
* 2020_1026_01 - master/06-task/2020-10-26v01-tiny_task.sql
* 2020_1027_01 - master/07-mail/2020-10-27v01-tiny_mail.sql
* 2021_0918_01 - branch/somefix/01-authn-fix/2021-09-18v01-rename-authn.sql
* 2021_1220_01 - branch/somefix/02-v242-201/2021-12-20v01-journal-trg-insert.sql

## 2A.5.数据库约定

本约定基于经验的积累，属于当前场景下的较优实践。
并且，数据版本的管理，数据跟踪的功能严格依赖此约定。

* 所有结构变更，都必须通过sql进行。静态数据建议使用sql
* 所有sql文件，按以下约定的顺序（增序）执行

### 版本号

`版本号`(revision)=`版本号`+`修订号`。
`版本号`的初始值是`2019051201`，任何小于此值都被忽略。

### 主版号

`主版号`(version/major)，使用yyyyMMdd的方式表述，一共8位数字。
数字部分，支持`_`或`-`分隔数字，以增加人眼识别度，如`yyyy-MM-dd`。

版本号要求严格递增，但不要求连续。

同一天内若有多人或多次修改，应做好沟通，统一修改。

### 修订号

`修订号`(build)，是小版本号，2位数字从`01`到`99`。

严格递增，不要求连续。

### 标志位

`标志位`用来表示行为，小写字母，目前只有`v`表示执行（升级），`u`表示撤销（降级）。

### 信息部

`-`+英文信息，单词间以`_`或`-`分隔为好。
该部分为可选项，只用来人工识别文件用，程序处理时忽略。

### 文件名

文件名由`版本号`+`标志位`+`修订号`+`信息部`构成，`.sql`扩展名，全小写。

* 20190521u01-my_test.sql
* 20190521v01-enum-i18n.sql

### 升级脚本

升级用`v`表示，是version的意思（也叫upto），必须存在。

`20190509_v_01.sql`表示升级版本。

### 降级脚本

降级用`u`表示，是undo的意思，可以不存在。

`20190509_u_01.sql`是`20190509_v_01.sql`的降级。

降级需要做 `exists` 检测，以保证容错能力。

执行时，默认先执行降级脚本。

## 2A.6.SQL格式化

* 一个字段放一行，不换行
* 表和字段要有注释
* 脚本要有分隔符`;`
* 完整语句间留有空行
* 所有表名，字段，索引，触发器名，可以有反引号转义
* 有效命名字符有`A-Z`,`0-9`，`_`，但不建议使用`$`
* 数据库，表，字段名，建议全小写，SQL关键字等全大写，以区分
* 以空行分开的SQL段，是一个执行单元
* 要求一个执行单元，只有一条SQL语句

## 2A.7.测试用例

`kotlin`中的测试用例，主要是场景演示。需要单个执行，确保成功。
统一执行时，springboot为了有效使用资源，不会全部重新初始化`context`，
这样会使有些`ApplicationListener`得不到触发，可能导致部分TestCase失败。
