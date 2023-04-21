---
isOriginal: true
icon: tree
category:
  - Faceless
  - Sharding
  - Separation
---

# 2C.Separation and Sharding

> Add a state to the inflated data to stop the time. Divide and conquer, combine and use.

Use ShardingJdbc to complete the function of splitting data into tables and libraries to smoothly handle a large amount of data.

## 2C.1.The shortcomings of splitting tables and databases

Because `ShardingJdbc` has some SQL parsing problems (index,trigger) when executing SCHEMA changes.
So when doing SCHEMA and `journal` functions, we use common data source and finish it by `flywave`.
[Refer to SQL Parsing Engine](https://shardingsphere.apache.org/document/current/cn/features/sharding/principle/parse/)

It may not be necessary to consider table splitting at the beginning of the business, and when needed, you can use the `flywave` tool to generate tables and migrate data.
Among ~~DQL,DML,DDL,TCL,DAL,DCL,GENERAL, DDL and DCL use real data sources, while others use sharding data sources. ~~  

By default, DDL,DCL use `plain data source` and DML etc. use `shard data source` to execute.
You can also specify the data source manually to accomplish customized data operations.

## 2C.2.Execution of matters in SQL

[DDL - Data Definition Statements](https://dev.mysql.com/doc/refman/8.0/en/sql-syntax-data-definition.html)

* `ALTER TABLE`
* `CREATE INDEX`
* `CREATE TABLE`
* `CREATE TRIGGER`
* `DROP INDEX`
* `DROP TABLE` Only one table at a time
* `DROP TRIGGER` You need to specify this table manually, then the system will execute according to this table and sub-table naming rules
* `TRUNCATE TABLE`

Except for system-generated triggers for `journal`, handwritten deletions are prone to inconsistent data.
  
[DML - Data Manipulation Statements](https://dev.mysql.com/doc/refman/8.0/en/sql-syntax-data-manipulation.html)

* `DELETE`
* `INSERT`
* `REPLACE`
* `UPDATE`

For SQL other than the above types, please use a annotation to force specifying `data source` and `table name` to skip the SQL auto parsing.
Theoretically, you should not use flywave to execute SQL other than DDL,DCL and DML, which is not in the scope of version control.
