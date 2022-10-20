---
isOriginal: true
icon: tree
category:
  - 虚空
  - 分表
---

# 2C.按需分表分库

> 对膨胀的数据增加一个状态，时间在此停止，分而治之，合而用之。

使用ShardingJdbc完成数据的分表分库功能，平稳处理大数据量。

## 2C.1.分表分库的不足

因为`ShardingJdbc`在执行SCHEMA变更时，存在一定的SQL解析问题(index,trigger)，
所以在做SCHEMA和`journal`功能时，使用普通数据源，通过`flywave`完成。
[参考SQL解析引擎](https://shardingsphere.apache.org/document/current/cn/features/sharding/principle/parse/)

业务开始可能不必须考虑分表，当需要时，可使用`flywave`工具生成表和迁移数据。
~~DQL,DML,DDL,TCL,DAL,DCL,GENERAL中，DDL和DCL使用真实数据源，其他使用sharding数据源。~~
默认下，DDL,DCL使用`plain数据源`，DML等使用`shard数据源`执行，
也可以手动指定数据源，以完成定制的数据操作。

## 2C.2.执行SQL中的事项

[DDL - Data Definition Statements](https://dev.mysql.com/doc/refman/8.0/en/sql-syntax-data-definition.html)

* `ALTER TABLE`
* `CREATE INDEX`
* `CREATE TABLE`
* `CREATE TRIGGER`
* `DROP INDEX`
* `DROP TABLE` 只可以一次一个table
* `DROP TRIGGER` 需要手动指定本表，系统根据本表和分表命名规则执行
* `TRUNCATE TABLE`

 其中，除系统为`journal`生成的trigger外，手写删除容易出现数据不一致。
  
[DML - Data Manipulation Statements](https://dev.mysql.com/doc/refman/8.0/en/sql-syntax-data-manipulation.html)

* `DELETE`
* `INSERT`
* `REPLACE`
* `UPDATE`

以上类型之外的SQL，请使用注解来强制指定`数据源`和`本表名`，跳过SQL自动解析。
理论上，不应该使用flywave执行DDL,DCL和DML之外的SQL，不属于版本管理范围。
