---
isOriginal: true
icon: ability
category:
  - 虚空
  - 类型
  - Jooq
---

# 2B.强类型及DSL能力

> 时间漫游，冲到目标位置，并取消最近2.0秒内受到的任何伤害。
> 虚空假面在时间漫游过程中为无敌状态。

* 从数据库自动生成jooq代码，pojo, table, dao
* 通过jooq的强类型，保证数据层面的变更和重构稳定

## 2B.1.强类型的数据库操作

推荐使用SqlMapping，因为ORM太重了，工程内使用Jooq和JdbcTemplate

MyBatis是国内大部分项目的首选，固有其优秀之处，但其约束力量的不够，
开发者的懒惰，使得基于字符串的sql难于安全重构，项目中容易蔓生以下问题，

* 经常被`select *`，查询带有大量无用信息
* 很容易写出复杂的大SQL，使得服务难以拆分
* 字符串及弱类型，重构时，IDE的支持有限

使用Jooq，有了强类型，使得编程优于配置，语法优于字符串，
并且其SQL表达友好，有恰到好处的限制能力的能力。

使用`WingsCodeGenerator`以编程的方式进行（不用maven）自动生成jooq代码。
按约定，生成代码在`database/autogen/`下，手动代码在`database/manual/`下。

若碰到wings或jooq的导致编译错误，无法在当前工程生成代码时，
需要建立一个新的小工程，仅依赖wings新版，执行代码生成工具即可。

自动生成的`*Dao`，有大量可直接使用的数据库操作方法，

* `getAlias` 获得select用的别名表，`Table as az`
  - 运行时，Table唯一，采用excel格式的az进制表示
  - 自命名时，采用数字结尾，避免与系统发生冲突。
* `getTable` 获得modify用的不使用别名的表 `Table`
* 使用preparedStatement的batch批量插入和更新大量数据
* 使用mysql特效，`insert ignore`和`replace into`处理重复数据
* 使用`on duplicate key update`或`select+insert+update`部分更新唯一记录。

值得注意的是，在Dao中使用alias表和本表时，必须保持同源，否则报语法错误。

```kotlin
val da = dao.alias
// val rd = dao.fetch(da.Id.eq(id)) 别名和本表不同源，语法错误
// select * from win_user where `y8`.`id` = ?

val rd = dao.fetch(da, da.Id.eq(id))
```

当有复杂数据操作，必须手写代码时，遵循以下约定，

* 任何对数据库的操作，都应该在`database`包内进行
* DSLContext和DataSource不应该离开database层
* `single/`包，表示单表，可含简单的条件子查询，一个包名一个表
* `couple/`包， 表示多表，一般为join查询或子查询，包名以主表命名
* 耦合操作，建议标记`@CouplingSelect`, `@CouplingModify`
* `select|modify`分别对应数据库操作
* 也可以`select|insert|update|delete`分类，只是@Autowired时比较多
* 数据传递以Dto结尾，放到最临近使用的位子
* Dto以静态内类形似存在，用lombok做@Value或@Data
* `forUpdate`这种带锁操作，方法名以`Lock`结尾
* 类名以`表名`+`Insert|Modify`
* jooq `Record`等同于`Dao`不应该在外部使用，应该用`Pojo`或`Dto`
* 主要使用Dao，完成dsl等相关操作即可

命名上，接口直接命名，不需要前后缀，Dto放在接口之内。
实现类，放到`impl/`包内，用后缀表示实现方式不同。

* `Jooq` - Jooq实现
* `Jdbc` - JdbcTemplate实现
* `Impl` - 混合实现

如`LightId`在读写分离时，需要强制master，可使用`@MasterRouteOnly`。

JdbcTemplate用于功能性的或复杂的数据库操作。若工程中有大量jdbc操作，
且感觉jdbcTemplate偏底层，可考虑[JDBI](http://jdbi.org)

## 2B.2.Sharding的兼容问题

`flywave`包装了jooq的`Dao`，可按类型分为了`reader`和`writer`表，跟踪表。

强烈建议，使用`Dao`完成基础的CRUD操作，参见`JooqShardingTest.kt`。
使用dsl构造复杂的sql时，要考虑读写分离。更复杂的sql建议使用jdbcTemplate。

jooq生成代码，默认使用`table.column`限定列名，而ShardingJdbc做当前版本不支持。
最优解决办法是使ShardingJdbc支持，当前最简单的办法是修改Jooq生成策略，参考以下Issue。

* [JOOQ#8893 Add Settings.renderTable](https://github.com/jOOQ/jOOQ/issues/8893)
* [JOOQ#9055 should NO table qualify if NO table alias](https://github.com/jOOQ/jOOQ/pull/9055)
* [ShardingSphere#2859 `table.column` can not sharding](https://github.com/apache/incubator-shardingsphere/issues/2859)
* [ShardingSphere#5330 replace into](https://github.com/apache/shardingsphere/issues/5330)
* [ShardingSphere#5210 on duplicate key update](https://github.com/apache/shardingsphere/issues/5210)

在jooq`3.18`版本之前，使用`spring.wings.faceless.jooq.enabled.auto-qualify=true`，
完成限定名的自动处理，其规则是，`不存在alias时，不增加限定名`。

使用Jooq的主要原因是其`限制的艺术`，可避免写出难以拆分的SQL，

* 鼓励单表操作，放在`single`包内，使用`本名`(如，WinUserLoginTable)
* 操作多表时，`别名`(如，WinUserLoginTable.asA2)优于`本名`
* INSERT 使用`本名`，不可使用`别名`
* DELETE 使用`本名`，不可使用`别名`
* UPDATE 使用`别名`优先于`本名`
* SELECT 单表时，用`本名`；多表时，`别名`优先于`本名`
* **不要** 使用中文表名，例子代码只是极端测试。

## 2B.3.Record Mapper

jooq 默认有2中Mapper都区分大小写，对应的功能如下

* DefaultRecordMapper 负责Record#into(Class), Result#into(Class)
* DefaultRecordUnmapper 负责DSL.newRecord(Table, Object), Record#from(Object)

SimpleFlatMapper的mapper更为宽松，不区分大小写，但有以下不足。

* [intoArray的bug](https://github.com/arnaudroger/SimpleFlatMapper/issues/764)
* 不支持primitive type，如int.class，仅Integer.class

官方在2020-05-11最后一次提交后，有2年多没有活跃了，wings于2022年10月已将其移除。

ModelMapper也比较优秀，但其体积过大（4.5M），目前没有必要使用，也未做充分测试。

## 2B.4.参考资料

* [Jooq patch](https://github.com/trydofor/jOOQ/commit/0be23d2e90a1196def8916b9625fbe2ebffd4753)
* [批量操作 record](https://www.jooq.org/doc/3.12/manual/sql-execution/crud-with-updatablerecords/batch-execution-for-crud/)
* [批量操作 jdbc](https://www.jooq.org/doc/3.12/manual/sql-execution/batch-execution/)
* [使用别名，支持分表](https://www.jooq.org/doc/3.12/manual/sql-building/table-expressions/aliased-tables/)
* [SQL的执行](https://www.jooq.org/doc/3.12/manual/sql-execution/)
