---
isOriginal: true
icon: bolt
category:
  - 虚空
  - Jooq
  - 话题
---

# 2F.Jooq使用话题

Jooq有关的话题

## 2F.01.jooq执行plain sql

在执行plain sql时，可以使用jdbcTemplate/SqlQuery/jooq，jooq的好处是，会进行parse（性能），进行兼容性调整（如果需要）。
所以，在运行时，不考虑兼容性，推荐用 jdbcTemplate，在需要语法分析或合并等场景，使用jooq。

* <https://www.jooq.org/doc/3.12/manual/sql-building/plain-sql/>
* <https://www.jooq.org/doc/3.12/manual/sql-building/plain-sql-templating/>
* <https://www.jooq.org/doc/3.12/manual/sql-building/queryparts/plain-sql-queryparts/>
* <https://www.jooq.org/doc/3.12/manual/sql-building/bind-values/>
* <https://www.jooq.org/doc/3.12/manual/sql-building/sql-parser/sql-parser-grammar/>
* <https://blog.jooq.org/2020/03/05/using-java-13-text-blocks-for-plain-sql-with-jooq/>
* <https://docs.oracle.com/cd/E13157_01/wlevs/docs30/jdbc_drivers/sqlescape.html>
* <https://docs.spring.io/spring-framework/docs/6.0.x/reference/html/data-access.html>

```java
class SelectPlain {
public void test(){
// 其中的 {0}是，0-base的，直接字符串替换的。使用不当会构成sql注入
Field<Integer> count = val(3);
Field<String> string = val("abc");
field("replace(substr(quote(zeroblob(({0} + 1) / 2)), 3, {0}), '0', {1})", String.class, count, string);
//                                     ^                  ^          ^                   ^^^^^  ^^^^^^
//                                     |                  |          |                     |       |
// argument "count" is repeated twice: \------------------+----------|---------------------/       |
// argument "string" is used only once:                              \-----------------------------/

// Plain SQL using bind values. The value 5 is bound to the first variable, "Animal Farm" to the second variable:
create.selectFrom(BOOK).where(
    "BOOK.ID = ? AND TITLE = ?",     // The SQL string containing bind value placeholders ("?")
    5,                               // The bind value at index 1
    "Animal Farm"                    // The bind value at index 2
).fetch();

// Plain SQL using embeddable QueryPart placeholders (counting from zero).
// The QueryPart "index" is substituted for the placeholder {0}, the QueryPart "title" for {1}
Field<Integer> id   = val(5);
Field<String> title = val("Animal Farm");
create.selectFrom(BOOK).where(
    "BOOK.ID = {0} AND TITLE = {1}", // The SQL string containing QueryPart placeholders ("{N}")
    id,                              // The QueryPart at index 0
    title                            // The QueryPart at index 1
).fetch();

// 模板中支持，java和sql注释，placeholder和variable-binding
query(
  "SELECT /* In a comment, this is not a placeholder: {0}. And this is not a bind variable: ? */ title AS `title {1} ?` " +
  "-- Another comment without placeholders: {2} nor bind variables: ?" +
  "FROM book " +
  "WHERE title = 'In a string literal, this is not a placeholder: {3}. And this is not a bind variable: ?'"
);
}}
```

Plain SQL templating specification
Templating with QueryPart placeholders (or bind value placeholders)
requires a simple parsing logic to be applied to SQL strings.
The jOOQ template parser behaves according to the following rules:

* Single-line comments (starting with `--` in all databases (or #) in MySQL)
  are rendered without modification. Any bind variable or QueryPart
  placeholders in such comments are ignored.
* Multi-line comments (starting with `/*` and ending with `*/` in
  all databases) are rendered without modification. Any bind variable
  or QueryPart placeholders in such comments are ignored.
* String literals (starting and ending with `'` in all databases,
  where all databases support escaping of the quote character by duplication
  as such: `''`, or in MySQL by escaping as such: `\'` (if Settings.backslashEscaping
  is turned on)) are rendered without modification. Any bind variable or
  QueryPart placeholders in such comments are ignored.

* Quoted names (starting and ending with `"` in most databases,
  with \` in MySQL, or with `[` and `]` in T-SQL databases) are
  rendered without modification. Any bind variable or QueryPart
  placeholders in such comments are ignored.
* JDBC escape syntax (`{fn ...}`, `{d ...}`, `{t ...}`, `{ts ...}`)
  is rendered without modification. Any bind variable or QueryPart
  placeholders in such comments are ignored.
* Bind variable placeholders (? or :name for named bind variables)
  are replaced by the matching bind value in case inlining is activated,
  e.g. through Settings.statementType == STATIC_STATEMENT.
* QueryPart placeholders (`{number}`) are replaced by the matching QueryPart.
* Keywords (`{identifier}`) are treated like keywords and rendered in
  the correct case according to Settings.renderKeywordStyle.

## 2F.02.如何禁用Jooq功能

禁用jooq没有任何影响，不影响flywave，lightid，enum, i18n的使用。

运行时禁用，设置 `wings.enabled.pro.fessional.wings.faceless.spring.conf.FacelessJooqAutoConfiguration=false`
但如果有jooq自动生成的代码，是带有`@Repository`，需要禁止spring注入。

```java
@ComponentScan(excludeFilters =
@Filter(type = FilterType.ASSIGNABLE_TYPE, classes = WingsJooqDaoImpl.class))
```

## 2F.03.常见的jooq查询操作

更多信息，参考[官方文档](https://www.jooq.org/doc/latest/manual/sql-execution/fetching/)
和sample代码`pro.fessional.wings.faceless.sample`

在wings中，^推荐^使用Dao做各种查询，避免使用静态表或注入DSL。

```java
class SelectFetch {
// Fetching only book titles (the two calls are equivalent):
List<String> titles1 = create.select().from(BOOK).fetch().getValues(BOOK.TITLE);
List<String> titles2 = create.select().from(BOOK).fetch(BOOK.TITLE);
String[]     titles3 = create.select().from(BOOK).fetchArray(BOOK.TITLE);

// Fetching only book IDs, converted to Long
List<Long> ids1 = create.select().from(BOOK).fetch().getValues(BOOK.ID, Long.class);
List<Long> ids2 = create.select().from(BOOK).fetch(BOOK.ID, Long.class);
Long[]     ids3 = create.select().from(BOOK).fetchArray(BOOK.ID, Long.class);

// Fetching book IDs and mapping each ID to their records or titles
Map<Integer, BookRecord> map1 = create.selectFrom(BOOK).fetch().intoMap(BOOK.ID);
Map<Integer, BookRecord> map2 = create.selectFrom(BOOK).fetchMap(BOOK.ID);
Map<Integer, String>     map3 = create.selectFrom(BOOK).fetch().intoMap(BOOK.ID, BOOK.TITLE);
Map<Integer, String>     map4 = create.selectFrom(BOOK).fetchMap(BOOK.ID, BOOK.TITLE);

// Group by AUTHOR_ID and list all books written by any author:
Map<Integer, Result<BookRecord>> group1 = create.selectFrom(BOOK).fetch().intoGroups(BOOK.AUTHOR_ID);
Map<Integer, Result<BookRecord>> group2 = create.selectFrom(BOOK).fetchGroups(BOOK.AUTHOR_ID);
Map<Integer, List<String>>       group3 = create.selectFrom(BOOK).fetch().intoGroups(BOOK.AUTHOR_ID, BOOK.TITLE);
Map<Integer, List<String>>       group4 = create.selectFrom(BOOK).fetchGroups(BOOK.AUTHOR_ID, BOOK.TITLE);
}
```

## 2F.04.分页查询jooq

分页查询中，count结果根据需要，可以进行缓存，或业务侧不要求必须精确，这样可以避免每次执行。
通过WingsPageHelper工具类，可以构造2类分页查询，count+select 和 wrap select，参考

* JooqMostSelectSample #test6PageJooq, #test7PageJdbc
* [count(*)和count(1)谁快](https://blog.jooq.org/2019/09/19/whats-faster-count-or-count1/)

在SpringMvc的`@RequestMapping`中构建`PageQuery`，可以把`@ModelAttribute`放在参数上，

* pageNumber，大于等于1的整数
* pageSize，大于等于1的整数
* sortBy，字符串

参考Spring的`Pageable`和SQL的 order by，以下参数是效果相同的

* PageQuery - page=100&page=3&sortBy=id,-name
* Pageable - size=100&page=3&sort=id,asc&sort=name,desc
* SQL - order by id asc, name desc

## 2F.05.如何转换sql语法

* sql到sql，不同语法间转换，<https://www.jooq.org/translate/> (需要翻墙)
* sql到jooq，可以使用any2dto插件，做了简单的select语法映射
* jooq到sql，调用toSql方法，或开启debug，在日志中查看

## 2F.06.TINYINT映射Boolean,Byte,Integer

* 在mysql中TINYINT是1byte空间，范围是-128到127，在jooq中，默认映射为Byte类型
* 在[jdbc文档](https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-type-conversions.html) 中其类型是Boolean，Integer
* 而在jooq-codegen-faceless.xml中，TINYINT(1)为Boolean，其他为Integer

若要调整，可以WingsCodeGenerator.forcedType()

## 2F.07.枚举类的映射

在wings实践中，以强类型为基础，因此数据库中的类别类型，通常在service层使用`enum`类。
在jooq中，可以通过forcedType，使用converter自动映射类型，在MapStruct中也可。

```java
// 每个表，每个字段映射，变更数据类型
.forcedType(new ForcedType()
        .withUserType("pro.fessional.wings.faceless.enums.autogen.StandardLanguage")
        .withConverter("pro.fessional.wings.faceless.database.jooq.StandardLanguageConverter")
        .withExpression("tst_sharding.language")
)
```

但对于某些情况，并不能在code generate时做类型转换，全局或局部的ConverterProvider。
可以使用wings的配置约定，声明ConverterProvider或Converter的bean，即可完成全局注入。

```java
// 单select，局部类型转换
DataType<StandardLanguage> lang = SQLDataType.INTEGER.asConvertedDataType(new StandardLanguageConverter());
dao.ctx()
   .select(t.Id, DSL.field(t.Language.getName(), lang))
```

```java
@Mapper
public interface Record22EnumDto {
    @Named("languageConverter")
    static StandardLanguage int2Enum(Integer id) {
        return ConstantEnumUtil.idOrNull(id, StandardLanguage.values());
    }
}
```

<https://blog.jooq.org/tag/converter/>

## 2F.08.H2Database的兼容性

* 手动指定 spring.jooq.sql-dialect=mysql
* 数据库指定 jdbc:h2:~/studies;MODE=MySQL

## 2F.09.OSS版Jooq的授权和注意点

Jooq有[开源版和商业版](https://www.jooq.org/download/)，两者的区别在于功能多寡和强弱上。
如 Lukas Eder – Founder and CEO 在邮件中回复到，

> You can use the jOOQ Open Source Edition for anything you like, including for MySQL 5.7.
> There are no legal limitations to such usage, as it is all ASL 2.0 licensed.
> However, unlike the jOOQ Professional Edition, we do not integration test that edition with MySQL 5.7,
> so there are likely limitations that you will run into.

以MySql为例，OSS版仅提供了最新版(8.0)的Dialect，而商业版提供了5.6, 5.7, 8.0三个版本。
而8.0的Dialect对于5.7存在一定的向后兼容，比如`FROM DUAL`移除。详见一下issue

* <https://github.com/jOOQ/jOOQ/issues/7421>
* <https://github.com/jOOQ/jOOQ/issues/11827>

因此，若开发中存在兼容问题，或需要更多功能或便利，推荐使用商业授权，从[FAQ: Commercial Licensing](https://www.jooq.org/legal/licensing)
中可见（本人仅做FAQ的部分节选，不对其正确性负任何责任）

* One for every developer workstation which is used to write jOOQ code.
* only charge for developer workstations, not server workstations.
* This does not affect your build, test, and production servers,
  however, which will be licensed for free forever, in any price plan.

## 2F.10.Jooq的性能及线程安全

jOOQ's overhead compared to plain JDBC is typically less than 1ms per query.
以上与纯JDBC对比，而任何SqlMapping都具有动态性，离不开字符串解析和拼接，反射构造等损耗，估相差不大。

* Configuration 初始化后就不要动了。
* DSLContext 在spring中Autowired和Dao中获取都可安全使用。
* <https://www.jooq.org/doc/3.14/manual/sql-execution/performance-considerations/>
* <https://www.jooq.org/doc/3.14/manual/sql-building/dsl-context/thread-safety/>

## 2F.11.Jooq 3.16的Jakarta EE 9+

> @lukaseder commented on Dec 9, 2019
> The Java EE `javax.*` namespace has not been donated to Jakarta EE

以上原因，jooq先行以`jakarta.*`取代了`javax.*`，其与springboot的不兼容。
springboot 可能在3.0中停止支持jooq，摘要如下，详情看issue链接。

> @wilkinsona commented on Dec 1, 2021
> Spring Boot 2.x is stuck on jOOQ 3.14 by default due to 3.15's move to Java 11 by default.
>
> For Boot 2.x users that want to upgrade jOOQ's version, switching to the `jakarta.xml.bind.*`
> classes may cause problems if other parts of their app use `javax.xml.bind.*`. This is
> compounded by the fact that the jakarta.xml.bind:jakarta.xml.bind-api coordinates can provide
> either the `jakarta.*` classes or the `javax.xml.bind.*` classes depending on the version you use.
> This makes it hard to have both on the classpath if that's something you can tolerate.

* <https://github.com/jOOQ/jOOQ/issues/9641>
* <https://github.com/spring-projects/spring-boot/issues/28821>

## 2F.12.Jooq group_concat

当使用mysql的group_concat时，若出现以下错误，

> You have an error in your SQL syntax; check the manual that
> corresponds to yourMySQL server version for the right syntax
> to use near 'set @@group_concat_max_len = 4294967295;

是因为jooq在render时，会增加session级的变量设置，以避免超长，SQL大概如下，

```sql
SET @T = @@GROUP_CONCAT_MAX_LEN;
SET @@GROUP_CONCAT_MAX_LEN = 4294967295;
SELECT GROUP_CONCAT(TITLE SEPARATOR ', ')
FROM BOOK;
SET @@GROUP_CONCAT_MAX_LEN = @T;
```

wings默认通过spring.wings.faceless.jooq.enabled.render-group-concat=false 关闭了次功能，
因为在推荐的mysqld配置中，以进行了global的设置。

千万不可使用 jdbc:mysql://localhost/test?allowMultiQueries=true，会有sql注入风险。
若不能设置mysql服务器变量，可使用 DataSourceInitializer 在获取Connection时设置。

* <https://github.com/jOOQ/jOOQ/issues/12092>
* <https://www.jooq.org/doc/3.17/manual/sql-building/dsl-context/custom-settings/settings-group-concat/>
* <https://blog.jooq.org/mysqls-allowmultiqueries-flag-with-jdbc-and-jooq/>
