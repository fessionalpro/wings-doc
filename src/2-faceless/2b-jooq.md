---
isOriginal: true
icon: ability
category:
  - Faceless
  - TypeSafe
  - Jooq
---
# 2B.Typesafe DSL SqlMapping

> Time Walk, Rushes to a target location while backtracking any damage taken in the last 2 seconds.
> Faceless Void is invulnerable during Time Walk.

* Auto generate the Jooq code, eg. pojo, table, dao.
* Typesafe Jooq ensures the stability of the data changes and refactorings.

## 2B.1.Typesafe Database Operation

SqlMapping is recommended because the ORM is too heavy, and Jooq and JdbcTemplate are welcome in the project.

MyBatis is the first choice for most projects in China, inherent in its excellence,
but its lack of constraint power and the laziness of developers makes string-based
sql difficult to refactory safely, and the following problems will come easily.

* Often `select *` queries with lots of useless fields
* Easy to write large complex SQL to difficult to split the service
* String-based and weak type limit the intelligent refactoring of the IDE

Jooq and its strong types make programming better than configuration, syntax better than
strings, SQL expression friendly and just the right amount of ability to limit the ability
to do the right things.

Use `WingsCodeGenerator` to auto generate jooq code programmatically (without maven).
By convention, the generated code is under `database/autogen/` and the manual code
is under `database/manual/`.

If you encounter a compilation error caused by wings or jooq and cannot generate code in
the current project, you need to create a new small project, only rely on the new version
of wings, and run the code generation tool.

Automatically generated `*Dao` have a lot of usable methods. They can be used to manipulate
the database directly.

* `getAlias` get the alias used for select, `Table as az`
  - At runtime, the Table is unique, named by the excel index format
  - When self-naming, use numeric endings to avoid conflicts with the system.
* `getTable` get the table for modification without alias, `Table`
* Bulk insert and update large amounts of data, using batch of PreparedStatement
* Use mysql special syntax, `insert ignore` or `replace into` to handle duplicate data
* Partially update of unique records using `on duplicate key update` or `select+insert+update`.

Important note, when using alias table and plain table together, you must guarantee that
they are come from the same Dao instance, otherwise a syntax error will be thrown.

```kotlin
val da = dao.alias
// val rd = dao.fetch(da.Id.eq(id))
// alias and table are different ref, syntax error thrown.
// select * from win_user where `y8`.`id` = ?

val rd = dao.fetch(da, da.Id.eq(id))
```

When there are complex data operations and the code must be written by hand, the following conventions are used.

* Any database operations should be done inside the `database` package
* DSLContext and DataSource should not leave the database layer
* `single/` package, means single table, can contain simple conditional subqueries, one package name for one table
* `couple/` package, means multiple tables, usually join queries or subqueries, package name is named using the main table
* Coupled operations, suggest tagging `@CouplingSelect`, `@CouplingModify`
* `select|modify` correspond to database operations respectively
* Also `select|insert|update|delete` can be classified, but with lots of @Autowired
* Data transfer ends with Dto and  is placed closest to the use
* Dto exists as a static inner class, use lombok @Value or @Data
* `forUpdate` with lock operation, method name ends with `Lock`
* Class name should be in `TableName`+`Insert|Modify`
* jooq `Record` is equivalent to `Dao` should not be used externally, it should be `Pojo` or `Dto` to transfer data
* Mainly use Dao, just do the DSL and other related operations

In naming, the interface should be named directly , without prefix and suffix, Dto are placed
inside the interface as a part of the contract. Implementation classes, placed inside the
`impl/` package, with a suffix to indicate a different way of implementation.

* `Jooq` - Jooq implementation
* `Jdbc` - JdbcTemplate implementation
* `Impl` - Mixed implementation

When forcing the use of the master in read/write separation, you can use `@MasterRouteOnly`, eg. `LightId`

JdbcTemplate is used for functional or complex database operations. If you have a lot of
jdbc operations in your project and jdbcTemplate is less powerful, you can consider [JDBI](http://jdbi.org)

## 2B.2.Sharding Compatibility

`flywave` extends and enhances jooq's `Dao` and splits by type into `reader` and `writer` tables, and tracking tables.

It is highly recommended to use `Dao` for basic CRUD operations, see `JooqShardingTest.kt`.
When constructing complex sql with DSL, read/write separation should be considered.
For more complex sql it is recommended to use jdbcTemplate.

Jooq generates code that uses `table.column` to qualify filed by default, but ShardingJdbc
does not currently support this . The best solution is to wait until ShardingJdbc
support it, and the easiest way at the moment is to change the Jooq generation policy, see
the following Issue.

* [JOOQ#8893 Add Settings.renderTable](https://github.com/jOOQ/jOOQ/issues/8893)
* [JOOQ#9055 should NO table qualify if NO table alias](https://github.com/jOOQ/jOOQ/pull/9055)
* [ShardingSphere#2859 `table.column` can not sharding](https://github.com/apache/incubator-shardingsphere/issues/2859)
* [ShardingSphere#5330 replace into](https://github.com/apache/shardingsphere/issues/5330)
* [ShardingSphere#5210 on duplicate key update](https://github.com/apache/shardingsphere/issues/5210)

Prior to jooq `3.18`, use `wings.faceless.jooq.conf.auto-qualify=true` to enable
the automatic processing of qualified names, with the rule that `no qualified name if no alias`.

The main reason for using Jooq is `The Art of Restraint`, which avoids writing hard SQL that is too hard to maintain.

* Encourage single table operations in the `single` package, using `plain` (eg. WinUserLoginTable)
* When operating on multiple tables, `alias` (eg. WinUserLoginTable.asA2) is preferred
* INSERT uses `plain`, not `alias`.
* DELETE uses `plain`, not `alias`.
* UPDATE uses `alias` over `plain`.
* SELECT use `plain` for single table; `alias` over `plain` for multiple tables
* **Don't** use Chinese table names, the example code is just an extreme test.

## 2B.3.Record Mapper

Jooq has Mappers by default, both case sensitive, as follows

* DefaultRecordMapper is for Record#into(Class), Result#into(Class)
* DefaultRecordUnmapper is for DSL.newRecord(Table, Object), Record#from(Object)

SimpleFlatMapper is more lenient and case-insensitive, but has the following shortcomings.

* [bug with intoArray](https://github.com/arnaudroger/SimpleFlatMapper/issues/764)
* No support for primitive type, such as int.class, only Integer.class

Officially inactive for more than 2 years after the last commit on 2020-05-11, wings has removed it in October 2022.

ModelMapper is also better, but its size is too large (4.5M), currently, there is no need
to use it, and it is not fully tested in wings.

## 2B.4.Mock Test Data

According to [Mocking Connection](https://www.jooq.org/doc/latest/manual/sql-execution/mocking-connection),
there are 2 Mock way in wings,

* `@Bean ConnectionProvider` - global inject, app level
* `Dao.setDslContext` - instance level (default singleton)

Refering the following source code,

```java
@Bean
@ConditionalOnProperty(name = "wings.faceless.testing.mock-jooq", havingValue = "true")
public ConnectionProvider mockConnectionProvider() {
    MockDataProvider provider = new MockTstNormalTableDataProvider();
    MockConnection connection = new MockConnection(provider);
    DefaultConnectionProvider delegate = new DefaultConnectionProvider(connection);
    return new MockConnectionProvider(delegate, provider);//
}

public void manualInstance() {
    var provider = new MockTstNormalTableDataProvider();
    // provider.setRecord(m);
    MockConnection connection = new MockConnection(provider);
    DSLContext dsl = DSL.using(connection, SQLDialect.MYSQL);
    tstNormalTableDao.setDslContext(() -> dsl);
    List<TstNormalTable> r2 = tstNormalTableDao.fetchById(1L);
    // clean
    tstNormalTableDao.setDslContext(null);
}
```

## 2B.9.References

* [Jooq patch](https://github.com/trydofor/jOOQ/commit/0be23d2e90a1196def8916b9625fbe2ebffd4753)
* [Batch Execution record](https://www.jooq.org/doc/3.12/manual/sql-execution/crud-with-updatablerecords/batch-execution-for-crud/)
* [Batch Execution jdbc](https://www.jooq.org/doc/3.12/manual/sql-execution/batch-execution/)
* [Aliases in table splitting](https://www.jooq.org/doc/3.12/manual/sql-building/table-expressions/aliased-tables/)
* [Sql Execution](https://www.jooq.org/doc/3.12/manual/sql-execution/)
