---
isOriginal: true
icon: layer-group
category:
  - Faceless
  - Sharding
  - Separation
---

# 2C.Separation and Sharding

> Add a state to the inflated data, stop the time, divide and conquer, and combine.

Use ShardingJdbc to handle RW separation, data sharding to handle large data smoothly.
Wings uses shard to broadly represent DataSharding, ReadWrite Splitting/Separation.

## 2C.1.Shortcoming of Sharding

Because `ShardingJdbc` has some SQL parsing problems (index,trigger) when executing SCHEMA changes.
So when doing SCHEMA and `journal` operation, use `plain` datasource and finish it with `flywave`.
[Reference SQL parsing engine](https://shardingsphere.apache.org/document/current/cn/features/sharding/principle/parse/)

It may not be necessary to consider shard tables at the beginning of the business, when needed,
you can use `flywave` to generate tables and migrate data.

By default, DDL, DCL use `plain` datasource, DML etc. use `shard`  datasource to execute.
You can also specify the datasource manually to accomplish customized data operations.

## 2C.2.Things in SQL Execution

[DDL - Data Definition Statements](https://dev.mysql.com/doc/refman/8.0/en/sql-syntax-data-definition.html)

* `ALTER TABLE`
* `CREATE INDEX`
* `CREATE TABLE`
* `CREATE TRIGGER`
* `DROP INDEX`
* `DROP TABLE` can only be one table at a time
* `DROP TRIGGER` specify `plain` table manually, according to `shard` table naming rules to execute
* `TRUNCATE TABLE`

Among them, except for the system-generated trigger for `journal`, manual deletion will cause data inconsistency.

[DML - Data Manipulation Statements](https://dev.mysql.com/doc/refman/8.0/en/sql-syntax-data-manipulation.html)

* `DELETE`
* `INSERT`
* `REPLACE`
* `UPDATE`

For SQL other than the above types, please use a comment to force to specify `datasource`
and `plain` table to skip the SQL auto parsing. Theoretically, you should not use flywave to
execute SQL other than DDL,DCL and DML, which is outside the scope of versioning.
