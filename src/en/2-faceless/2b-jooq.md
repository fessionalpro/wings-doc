---
isOriginal: true
icon: ability
category:
  - Faceless
  - Type
  - Jooq
---
# 2B.Typesafe DSL SqlMapping
> Time Walk, teleport to the target location, and cancel any damage received in the last 2.0 seconds.  
> The Void Mask is invulnerable during the time walk.
* Automatically generate the JOOQ code, POJO, TABLE, DAO.
* The strongly type of JOOQ ensures the stability of the data changes and reconstruction.

## 2B.1.Strongly-typed Database Operations
It is recommended to use SqlMapping while the ORM is not that light. Using Jooq and JDBCTemplate in projects.  
Mybatis is the first choice for most domestic projects. Although it has excellent features, the constraints of their code are not rigorous enough.  
The laziness of the developer makes it difficult for the string-based SQL to be safely reconstructed. so the follwing problems will comes easily，

* The frequent use of `select *` makes the query with a lot of useless information
* Writing complex SQL makes it difficult for services to be splited.
* Strings and weak types, when restructuring, IDE's support is limited

Using stongly-typed Jooq makes programming better than configuration, grammar is better than string.
And its SQL expression is friendly and has the right ability about limitation.  
Using`WingsCodeGenerator`to generate Jooq code programmatically instead of maven;
According to the configuration, the destination of the generated code is `database/autogen/`, while the manual code is under the `database/manual/`.

While you encounter the compilation error caused by Wings or Jooq and you cannot generate code in the current project,you need to create a new temporary project which relies only on the new version of Wings to run the code generation tools.

The automatically generated `*Dao` has a large number of database operation methods that can be used directly,

* `getAlias` To get the alias of a table used for selection，`Table as az`
  - When running, the table, using an Excel format AZ in advance indicator, is unique
  - When naming it youself, use numbers to end to avoid conflicting with the system.
* `getTable` Obtaining a table that does not use aliases used for modification `Table`
* Use the batch of PreparedStatement for batch insertion or updates to large amounts of data
* Use mysql special tools: `Insert Ignore` and` Replace Into` to deal with duplicate data
* Use the `On Duplicate Key Update` or` Select+Insert+Update` to update the unique record.

It is worth noting that whether using an alias or not in DAO, the same source must be maintained, otherwise the grammatical error will be reported.

```kotlin
val da = dao.alias
// val rd = dao.fetch(da.Id.eq(id)) Alias and its origin table are different sources。 The grammar is wrong
// select * from win_user where `y8`.`id` = ?

val rd = dao.fetch(da, da.Id.eq(id))
```

When there are complex data operations and you have to deal with the SQL manually, follow the following agreement,

* Any operation about the database should be performed in the `database` package
* DSLContext and DataSource should not leave the DataBase layer
* `single/` package, which indicates single-table operations, can contain simple condition subquery,the package is named after each table.
* `Couple/` package, which indicates multi-table operations, generally in query or subquery, the package name is named after the main table.
* `@couplingselect`,`@couplingmodify` is commanded in coupling operation.
* `select | modify` corresponding to the database operation respectively
* You can also use `select | Insert | update | delete` for classification, but there will be a lot when autowired
* Transform data with DTO,and place it near where it is used
* DTO exists as a static inner class, and uses lombok (@Value or @data)
* Operations with locks like `forupdate`, the method name ended with`Lock`
* Class name's should be end with `{table name}`+`Insert | Modify`
* `Record` is equivalent to` dao`, and should not be used outside data access layer。but should be `pojo` or` dto`
* Mainly use DAO to complete operations about DSL

The interface naming does not require the front suffonon. DTO is placed in the interface.
The implementation class is placed in the `impl/` package. Use the suffix to represent the different implementation method.

* `Jooq` - Jooq implementation
* `Jdbc` - JDBCTEMPlate Realization
* `Impl` - Mixed implementation

Such as `Lightid`. When reading and writing is separated and you need to force the master, you can use`@MasterRouteOnly`.

JdbcTemplate is used for functional or complex database operations. If there are a large number of JDBC operations in the project, and feel that jdbcTemplate is at the bottom of the bottom, you can consider[JDBI](http://jdbi.org)

## 2B.2.Sharding's compatibility issues

`flywave` wraps Jooq's `Dao`，which can be divided into `reader` table、`writer` table and `tracking` table. It is strongly recommended to use `Dao` for basic CRUD operations, see `JooqShardingTest.kt`. When constructing complex SQL using DSL, consider read/write splitting. For more complex SQL, jdbcTemplate is recommended.

Jooq generates code that uses `table.column` qualified column names by default, which ShardingJdbc does not support in the current version.
The best solution is to make ShardingJdbc support, and the easiest way is to modify the Jooq generation policy, refer to the following issue.

* [JOOQ#8893 Add Settings.renderTable](https://github.com/jOOQ/jOOQ/issues/8893)
* [JOOQ#9055 should NO table qualify if NO table alias](https://github.com/jOOQ/jOOQ/pull/9055)
* [ShardingSphere#2859 `table.column` can not sharding](https://github.com/apache/incubator-shardingsphere/issues/2859)
* [ShardingSphere#5330 replace into](https://github.com/apache/shardingsphere/issues/5330)
* [ShardingSphere#5210 on duplicate key update](https://github.com/apache/shardingsphere/issues/5210)

Prior to jooq`3.18`, using `spring.wings.faceless.jooq.enabled.auto-qualify=true` so that the automatic processing of qualified names is completed, and the rule is, 'If there is no alias, do not add the qualified name'.

The main reason for using Jooq is that it has the 'art of limitation' and avoids writing SQL that is difficult to split,

* Encourage single-table operations, put in the `single` package, and use `real name` (e.g., WinUserLoginTable)
* In multi-table operations, `aliases` (e.g., WinUserLoginTable.asA2) are preferred over `real names`
* INSERT use `real name`, not `alias`
* DELETE use `real name`, not `alias`
* UPDATE use `alias` better than `real name`
* SELECT use `real name` when selecting a single table; But 'alias' takes precedence over 'real name' when selecting multiple tables
* **Don't** Use Chinese table names, the example code is just an extreme test

## 2B.3.Record Mapper

Jooq has 2 Mappers by default, both case-sensitive, and the corresponding functions are as follows

* DefaultRecordMapper for Record#into(Class), Result#into(Class)
* DefaultRecordUnmapper for DSL.newRecord(Table, Object), Record#from(Object)

SimpleFlatMapper's mapper is more permissive and case-insensitive, but has the following drawbacks.

* [bug about intoArray](https://github.com/arnaudroger/SimpleFlatMapper/issues/764)
* Primitive types, such as int.class, are not supported, only Integer.class

After the official submission on 2020-05-11, it has not been active for more than 2 years, and Wings has removed it in October 2022.

The Model Mapper is also excellent, but its size is too large (4.5M) to be used and it is also undertested.

## 2B.4.References

* [Jooq patch](https://github.com/trydofor/jOOQ/commit/0be23d2e90a1196def8916b9625fbe2ebffd4753)
* [Batch Execution record](https://www.jooq.org/doc/3.12/manual/sql-execution/crud-with-updatablerecords/batch-execution-for-crud/)
* [Batch Execution jdbc](https://www.jooq.org/doc/3.12/manual/sql-execution/batch-execution/)
* [Use aliases to support table spacing](https://www.jooq.org/doc/3.12/manual/sql-building/table-expressions/aliased-tables/)
* [Sql Execution](https://www.jooq.org/doc/3.12/manual/sql-execution/)