---
isOriginal: true
icon: ability
category:
  - Faceless
  - Jooq
  - Topic
---

# 2F.Jooq Faq Topic

Topic about Jooq and SQL

## 2F.01.Exec Plain SQL by Jooq

When executing plain sql, you can use jdbcTemplate/SqlQuery/jooq. The advantage of jooq is that
it parses (performance) and makes compatibility adjustments (if needed). So, at runtime, regardless
of compatibility, jdbcTemplate is recommended, and in scenarios where syntax parsing
or merging is required, etc., jooq is recommended.

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
// where {0} is, for 0-base, a direct string substitution. Improper use can  lead to sql injection
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

// Template support, java and sql annotations, placeholder and variable-binding
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

## 2F.02.Disable the Jooq Feature

Disabling jooq has no effect and does not affect the use of flywave, lightid, enum, i18n.

To disable it at runtime, set `wings.enabled.pro.fessional.wings.faceless.spring.conf.FacelessJooqAutoConfiguration=false`
However, if there is jooq auto-generated code with `@Repository`, you need to disable spring injection.

```java
@ComponentScan(excludeFilters = 
@Filter(type = FilterType.ASSIGNABLE_TYPE, classes = WingsJooqDaoImpl.class))  
```

## 2F.03.Common Jooq Query

For more information, refer to the [official documentation](https://www.jooq.org/doc/latest/manual/sql-execution/fetching/)
and the sample code `pro.fessional.wings.faceless.sample`

Wings ^RECOMMENDED^ to use Dao for various queries and avoid using static tables or injecting DSLs.

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

## 2F.04.Jooq Pagination Query

In paging queries, count results can be cached as needed, or the business side does not require them too exact,
so that each execution can be avoided. With the WingsPageHelper tool, you can construct 2 types of paging queries,
`count+select` and `wrap select`, see

* JooqMostSelectSample #test6PageJooq, #test7PageJdbc
* [whats faster count(*) or count(1)](https://blog.jooq.org/2019/09/19/whats-faster-count-or-count1/)

To build a `PageQuery` in SpringMvc's `@RequestMapping`, you can put `@ModelAttribute` on the parameter

* pageNumber, an integer greater than or equal to 1
* pageSize, an integer greater than or equal to 1
* sortBy, a string

Referring to Spring's `Pageable` and SQL's order by, the following parameters have the same effect,

* PageQuery - page=100&page=3&sortBy=id,-name
* Pageable - size=100&page=3&sort=id,asc&sort=name,desc
* SQL - order by id asc, name desc

## 2F.05.Convert Sql Syntax

* sql to sql, conversion between different syntaxes, <https://www.jooq.org/translate/> (need to FK the GFW)
* sql to jooq, can use any2dto plugin, did a simple select syntax mapping
* jooq to sql, call the toSql method, or enable debug and check the log

## 2F.06.TINYINT map Boolean/Byte/Integer

* In mysql TINYINT is 1byte space in the range of -128 to 127, in jooq it is mapped to Byte type by default
* In [jdbc documentation](https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-type-conversions.html)
  its type is Boolean, Integer
* And in jooq-codegen-faceless.xml, TINYINT(1) is Boolean and the others are Integer

To adjust, you can check WingsCodeGenerator.forcedType()

## 2F.07.Mapping of Enum

In Wings practice, strong type(or type safe) is used as the basis, so the code types in the database,
usually in the service layer, use the `enum`. In jooq, the types can be mapped automatically by forcedType,
using the converter, and in MapStruct.

```java
// Per table, per field mapping, change data type
.forcedType(new ForcedType()
        .withUserType("pro.fessional.wings.faceless.enums.autogen.StandardLanguage")
        .withConverter("pro.fessional.wings.faceless.database.jooq.StandardLanguageConverter")
        .withExpression("tst_sharding.language")
)
```

However, for some cases, it is not possible to do type conversion at code generate time,
global or local ConverterProvider. Global injection can be done by declaring the bean of the
ConverterProvider or Converter using the configuration conventions of Wings.

```java
// single select, locally convert
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

## 2F.08.H2Database Compatibility

* manually specify spring.jooq.sql-dialect=mysql
* database specify jdbc:h2:~/studies;MODE=MySQL

## 2F.09.OSS Version of Jooq License

Jooq is available in [open source and commercial versions](https://www.jooq.org/download/),
the difference between the two is in the number and strength of features.

As Lukas Eder - Founder and CEO said in an email reply

> You can use the jOOQ Open Source Edition for anything you like, including for MySQL 5.7.
> There are no legal limitations to such usage, as it is all ASL 2.0 licensed.
> However, unlike the jOOQ Professional Edition, we do not integration test that edition with MySQL 5.7,
> so there are likely limitations that you will run into.

Taking MySql as an example, the OSS version provides only the latest version (8.0) dialect,
while the commercial version provides three versions: 5.6, 5.7, 8.0. The 8.0 version of dialect
has some backward compatibility with 5.7, such as  the removal of `FROM DUAL`.
See the following issues for details,

* <https://github.com/jOOQ/jOOQ/issues/7421>
* <https://github.com/jOOQ/jOOQ/issues/11827>

Therefore, if there are compatibility issues in development, or if you need more features or convenience,
it is recommended to use the commercial license, as seen in [FAQ: Commercial Licensing](https://www.jooq.org/legal/licensing)
(I only make partial excerpts from the FAQ and take no responsibility for its correctness)

* One for every developer workstation which is used to write jOOQ code.
* only charge for developer workstations, not server workstations.
* This does not affect your build, test, and production servers,
  however, which will be licensed for free forever, in any price plan.

## 2F.10.Jooq Performance and Thread Safety

jOOQ's overhead compared to plain JDBC is typically less than 1ms per query.

* Configuration - do not change after initialization,
* DSLContext -  in spring Autowired and Dao can be safely get and used.
* <https://www.jooq.org/doc/3.14/manual/sql-execution/performance-considerations/>
* <https://www.jooq.org/doc/3.14/manual/sql-building/dsl-context/thread-safety/>

## 2F.11.Jooq 3.16 and Jakarta EE 9+

> @lukaseder commented on Dec 9, 2019
> The Java EE `javax.*` namespace has not been donated to Jakarta EE

For the above reasons, jooq first replaced `javax.*` with `jakarta.*`, which is incompatible with springboot 2.x.
Springboot may stop supporting jooq in 3.0, as summarized below, see the issue link for details.

> @wilkinsona commented on Dec 1, 2021
> Spring Boot 2.x is stuck on jOOQ 3.14 by default due to 3.15's move to Java 11 by default.
>
> For Boot 2.x users that want to upgrade jOOQ's version, switching to the `jakarta.xml.bind.*`
> classes may cause problems if other parts of their app use `javax.xml.bind.*`. This is
> compounded by the fact that the jakarta.xml.bind:jakarta.xml.bind-api coordinates can provide
> either the `jakarta.*` classes or the `javax.xml.bind.*` classes depending on theversion you use.
> This makes it hard to have both on the classpath if that's something you can tolerate.

* <https://github.com/jOOQ/jOOQ/issues/9641>
* <https://github.com/spring-projects/spring-boot/issues/28821>
