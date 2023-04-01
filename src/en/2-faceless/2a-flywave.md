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

## 2A.1.Flywave is Practice

In real-world software development, we have great tools for adapting to and managing change,
such as Git for source code and Jira for tasks. But when it comes to changes to static tables
and runtime data, how do we manage, record, track, investigate, branch, and rollback?

* When you start a project from scratch, requirements emerge gradually.
  How do you manage field additions, deprecations, and changes in each weekly iteration?
* Which schema and data should correspond to the code for local, develop, product?
* An online order error occurred , what event caused it and what data was updated?
* When it's to late to stop executing sql with a wrong where clause,
  How to confirm the affected records and roll them back?
* The project gets bigger and bigger, how to  smoothly transition from a single app,
  single database to rw-separation, data-sharding and more?
* Network break, network resume, same code can run on both local H2 and cloud MySQL.

If your project has the above database and data problems,
Flywave's ideas (not limited to Wings) are for you.

Not applicable scenarios and risk WARNING: **Data is Very Important**,
important operation need professional `DoubleCheck`

* Online data is so hot or so large that there is no one-size-fits-all
  upgrade solution and flywave is not up to the task.
* Online table renaming, etc. it is recommended to use other professional
  solution, eg. pt-online-schema-change strategy

In the real startup project, the schema structure changes very often, and you need to control
the version and iteration pace of local/develop/product. `flyway` is a good choice, but using it
may be overkill, so a new wheel called `flywave` is created, which is feasible.

* use `/wings-flywave/master/**/*.sql` to manage databases and data
* use `/wings-flywave/branch/**/*.sql` to manage branches of sql
* use `sys_schema_version` table to control database version, upgrade/downgrade
* use `sys_schema_journal` table to automatic log data changes
* The actual scan path pattern is `/**/*.sql`, so the subdir level has no effect on
  the version ordering and only indicates order and business meaning

sql files are managed by git, if not necessary, do not engage in complex branching,
single timeline is the best practice. The goal of branch here is file management,
not database and data management. This means that the database is in one master timeline
while local sql files can be in multiple timelines.

In real project practice, the database should only store data, not business logic.
Therefore, only basic SQL and database features should be used, including tables, indexes, triggers,
excluding views, logic procedures, foreign key constraints and database special functions.

The following conventions and concepts exist within the Flywave system,
and understanding them will help clarify the business architecture.

There are 2 types of JDBC (DataSource), they exist in the `DataSourceContext`.

* Current DataSource (current) - Injected by Spring, plain or shard DataSource
* Underlying DataSource (backend) - plain DataSource directly to database instance
* plain - ordinary database, no logical processing of sql and data
* shard - logical database, algorithmically sharded across multiple plain databases

`flywave` can automatically(or manually) execute DDL and DML on different data sources.
This depends on the following scenario rules.

According to the use and scenarios, semantically, there are 3 types of data tables (Table).

* `plain` table, i.e. ordinary table, the normal naming, alphanumeric, underscores, or even unicode chars
* `shard` table, `plain` table + `_#` suffix, `#` for the modulo N (0..N-1) (no 0 padding on the left)
* `trace` table, i.e. log table, shadow table. `plain`/`shard` + `\$\w+`, `$` is separator
* `nut` means `plain` and `shard` table; `log` means `trace` table

These three table types follow the following rules and keep up with `plain` table.

* Plain table must exist to maintain the original table structure, even if there are shard tables
* Shard table has the same structure as plain table, including indexes and triggers, and synchronized updates
* Trace table has the same structure as nut table (plain and shard), including column and type, and synchronized updates
* Trace table is used for triggers and contains some meta columns named in `_*` style
* The above 3  type tables must have the same structure (name, type, column order) and be updated synchronously

`$` is a special character in naming that defines the `trace` table, but it needs to be escaped
in many environments, such as shell, regexp. The rules for writing sql are detailed in the [Database Conventions] chapter.
Due to cloud database compatibility, `__` is used instead of `$` after wings2.6.6.

It is very important that a **SQL block must end with the delimiter**, even in the comment block.
because flywave does not do sql syntax analysis, it cannot determine if the delimiter is in a special string.

Table definitions should avoid `nullable`, it is recommended to use default values instead,
such as the `EmptyValue` convention.

For the`/wings-flywave/` directory, there are some handy operations.

* The `fulldump/{db}/` is used to manage the latest schema of the current primary db
* The `master/00-init/` is used for the initial scripts at the beginning
* The `master/01-##/` is used to manage change by milestone or year/month
* A `branch/##/##/` is used as the git-flow naming convention, with the following built-in,
  - feature components can be added as options on demand
  - support such as temporary data maintenance, investigation
  - somefix including patch, bugfix, hotfix

## 2A.2.Data Versioning (journal)

`Logical delete` has become an industry standard, but it is not a better solution
if the deleted data is only used for investigation (useless for the normal business)

* Breaks query indexes - every query has`is_deleted=0` with 80+% data being true
* Breaks unique constraints - duplicate deletions make unique constraints invalid

The only reason for `logical delete` in wings is for data `tracing`, otherwise it should be deleted directly.
It is also called `mark delete`, similar to java's GC, and is deleted (immediately or in batch)
when the reference count reaches 0.

Any data changes should have the `commit_id`, which records the event information (user, event, business info, etc.).
The latest data remains in the `plain` table and the old data is inserted into the `trace` table via `trigger`.
The trace table is also called the `$log` table, which is form the original naming convention (plain table + `$log` suffix),
but then due to some tool defect, mistakenly treats `$` as a variable, allthough `$` is a mysql official legal character,
flywave adjusted `$` to double underscore `__` suffix after version 210.

`journal` generates `trace` tables and `triggers` via `sys_schema_journal`.

* Create `after insert` trigger based on `log_insert`
* Create `after update` trigger based on `log_update`
* Create `before delete` trigger based on `log_delete`

Define the DDL by specifying a template in the config file, the default settings refer to `wings-flywave.properties`.
The default shard-table has its own `log table` (`TABLE_#$log`), and all triggers in one table share this log table.
In the template, the following DDL variables are predefined, avoiding spring variable substitution,
using the mustache `{{}}` style, with all  names capitalized.

* `{{PLAIN_NAME}}` The `plain` table name of the target table
* `{{TABLE_NAME}}` Target table name, can be `plain`, `shard`, `trace` table
* `{{TABLE_BONE}}` Bone columns of the target table (name, type, comment, at least), without indexes and constraints
* `{{TABLE_PKEY}}` PK columns of the target table, used to create a normal index against the original primary key

It is not possible to gracefully set `commit_id` for deleting data at this point, if you need the journal,
you have to update it and then delete. Currently  there are 2 ways provided as follows,
without using sql annotation or parsing, and the manual way is recommended over auto intercept.

* Manually invoke `delete##` using the `JournalHelp` utility
* Auto intercept `delete from ## where id=? and commit_id=?` style sql

The auto intercept is disabled  by default in `spring.wings.faceless.jooq.enabled.journal-delete`.
This is because it violates the `static over dynamic, compile-time over run-time` team rule,
and performance and limits are not well controlled.

The session-level variable `DISABLE_FLYWAVE` can be set to disable triggers,
such as data recovery and other no-trigger cases.

* disable - when `SET @DISABLE_FLYWAVE = 1;`, trigger is disabled
* enable - when the session close, the trigger is auto enable by default.
* enable - `SET @DISABLE_FLYWAVE = NULL;`

Reference

* <https://dev.mysql.com/doc/refman/8.0/en/trigger-syntax.html>

## 2A.3.Comment Directive

flywave provides the following sql comments with special functions, called `comment directive`

* Formatted as `prefix` + `plain`? + `ds`? + `target`? + `error`? + `confirm`?
  - `prefix` = `^\s*-{2,}\s+`, i.e., single line comment + `space`
  - `plain` = `[^@ \t]+`, i.e., legal table name
  - `ds` = `@plain`|`@shard`, fixed values for data source
  - `target` = `\s+apply@[^@ \t]+`, i.e., fixed value, RegExp
  - `error` = `\s+error@(skip|stop)`, i.e., whether to stop or continue on error
  - `confirm` = `\s+ask@[^@ \t]+`, i.e., confirmation statements, such as danger
  - `trigger` = `@trigger`, i.e., does it affect the trigger, false if none.
* SQL with `plain table` specified will not auto parse
* If the specified `plain table` does not exist in the SQL statement,
  it does not affect the SQL execution, but just ignores the `trace table` replacement
* `target table` is case-insensitive, all matches. Where the following shorthand is built in
  - empty, default matches all, plain + shard + trace tables
  - `apply@nut` matches only plain + shard tables `[_0-9]*`
  - `apply@log` matches only to the trace table `__[a-z]*`
  - Note that the target table is not an if statement and not checked as a condition
* `error` default `stop` ends with an exception, `skip` means ignore the exception and continue execution
* `confirm` default std.out output, wait for confirm input at std.in
* Annotated RegExp is `([^@ \t]+)? @([^@ \t]+)`

```sql
-- ask@drop-database
DROP TABLE sys_schema_version;
-- @shard shard data source, plain table is sys_light_sequence auto
DROP TABLE IF EXISTS `sys_light_sequence`;
-- @plain plain data source, plain table is sys_commit_journal auto
DROP TABLE IF EXISTS `sys_commit_journal`;
-- wgs_order@plain plain data source and specified plain table is wgs_order.
DROP TRIGGER IF EXISTS `wgs_order$bd`;
-- apply@win_admin[_0-0]* error@skip auto parse plain table, apply to shard tables, and ignore errors
ALTER TABLE `win_admin` DROP INDEX ix_login_name;
-- apply@nut error@skip same as previous sentence
ALTER TABLE `win_admin` DROP INDEX ix_login_name;
-- apply@log error@skip apply to tracke table only
ALTER TABLE `win_admin` DROP INDEX ix_login_name;
```

About comments, due to simple requirements, no syntax analysis is used, only at the RegExp and string replacement level.

* Only parse and ignore whole lines, do not handle tail or inline comments
* The contents of strings enclosed in single and double quotes is ignored and not replaced
* Single line comments `--` are recommended, and the multi-line comments `/* */` may not be placed in lines

## 2A.4.Auto Revision Check

With `wings.faceless.flywave.fit.*` you can automatically check for revision dependencies.
Since it is not possible to check the CREATE permission, wings use WARN by default.

* If you need to disable the check, you can set SKIP as the log message said.
* If you need to publish the revision, just replace SKIP with EXEC.
* FAIL or EXEC is recommended for important revisions.

The built-in revision has nothing to do with the real date,
mainly between 2019 and 2021, only indicates the order.

* `2019` - basic features and services
* `2020` - business features, general business functions
* `2021` - branch functions, can be in orderless

The revision numbers currently in use are,

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

## 2A.5.Database Convention

This convention is based on experience and is a better practice in the current scenario.
In addition, the data versioning and tracing features are strictly dependent on it.

* All structure changes must be done through sql, even for static data.
* All sql files are executed in the following order (incremental order)

### Revision Number

* `revision` = `version` number + `build` number
* The first `revision` is `2019051201` and any lower value  is ignored.

### Version Number

The `version` is the major number, 8 digits yyyyMMdd style.
`_` or `-` can separate the digits for human readability, e.g. `yyyyy-MM-dd`.

The `version` number must be strictly incremental, but not consecutive.

If there are multiple people, or multiple version in the same day,
you should communicate well and unify the version.

### Build Number

The `build` is the minor number, 2 digits from `01` to `99`.

It is strictly incremental, but not consecutive.

### Flag Part

The `flag` char indicates the behavior, lower case,
currently `v` means upgrade(version) and `u` means  downgrade(undo).

### Info Part

`-` + English message, separated by `_` or `-` between words is recommended.
This part is optional and used only for the file comment, ignored by the program during processing.

### File Name

The filename consists of `version` + `flag` + `build` + `info`,
with `.sql` extension, all lowercase.

* 20190521u01-my_test.sql
* 20190521v01-enum-i18n.sql

### Upgrade Script

Upgrade is denoted by `v`, which stands for version (also called upto), required.

`20190509_v_01.sql` means upgrade version.

### Downgrade Script

Downgrade is denoted by `u`, which means undo, optional.

`20190509_u_01.sql` is a downgrade from `20190509_v_01.sql`.

The downgrade requires an `exists` check to ensure fault tolerance.
and is run first by default (before its upgrade).

## 2A.6.SQL Formatting

* One line for one field, no line breaks
* Tables and fields should have comments
* Statement should end with the `;` delimiter
* Blank line between each complete statement
* All table names, fields, indexes, trigger names, can have backquote escapes
* Valid naming characters are `A-Z`, `0-9`, `_`, but `$` is not recommended
* Database, table, field names are recommended all lowercase, SQL keywords, etc. are all uppercase to distinguish user-defined
* SQL segment separated by blank lines is an execution unit
* one execution unit must have only one SQL statement

## 2A.7.TestCase and Sample

The test cases in `kotlin` are mainly for demo purposed. They should be run individually to ensure success.
If they are run together, springboot will not reinitialize `context` all the time in order to reuse resources efficiently.
This will cause some `ApplicationListener` not to fire  and some TestCase to fail.
