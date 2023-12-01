---
isOriginal: true
icon: git
category:
  - Faceless
  - Version
  - Topic
---

# 2E.Flywave Faq Topic

Topic about flywave, schema/data versioning, journal data.

## 2E.01.Customize journalService

Inject high priority `journalService`, see `SecurityJournalService` of example project

## 2E.02.No chemaRevisionManager

After 2.2.6, `wings.enabled.faceless.flywave=false` is disabled by default.
needs to enable during initialization, for example by adding a temporary turn on in test
`@SpringBootTest(properties = "wings.enabled.faceless.flywave=true")`

## 2E.03.Missing Branches Error

After 2.2.7, sys_schema_version supports branch, in previous versions, it needed to be maintained manually.
Just execute `2019_0512_02` in `branch/somefix/v227-fix`.

## 2E.04.Testcase or Examples for Flywave

* SchemaJournalManagerTest - shard and track test
* SchemaRevisionMangerTest - basic versioning test
* SchemaShardingManagerTest - shard and data migration test

* WingsFlywaveInitDatabaseSample - database versioning example
* ConstantEnumGenSample - enum code generation example
* JooqJavaCodeGenSample - jooq code generation example
* WingsSchemaDumper - schema and data dump example
* WingsSchemaJournal - track table control example

## 2E.05.Confirm Dangerous Sql in Flywave

* sql with `ask@*` annotation to force confirmation
* undo statement confirms `wings.faceless.flywave.ver.ask-undo=true`
* drop statement validation `wings.faceless.flywave.ver.ask-drop=true`
* drop statement definition `wings.faceless.flywave.ver.drop-reg[drop-table]`

If console has no output in UnitTest, you need to open `console` in the IDE, e.g.
in Idea `-Deditable.java.test.console=true` (Help/Edit Custom VM Options...)

## 2E.06.No Index Required for Trace Tables

If an existing index is updated to trace tables and it affects write performance,
or a unique constraint, check it out with the following sql.

```sql
SELECT
  DISTINCT CONCAT('DROP INDEX ',INDEX_NAME,' ON ',TABLE_NAME, ';')
FROM
  INFORMATION_SCHEMA.STATISTICS
WHERE
  TABLE_SCHEMA = DATABASE()
  AND INDEX_NAME NOT IN ('PRIMARY','RAW_TABLE_PK')
  AND (TABLE_NAME LIKE '%$%' OR TABLE_NAME LIKE '%__%');
```

Specify the table to be updated with the `apply@` statement. For example,
the following updates plain tables and shard tables without trace tables

```sql
-- @plain apply@nut error@skip
ALTER TABLE `win_user`
  DROP INDEX `ft_auth_set`,
  DROP INDEX `ft_role_set`;
```

## 2E.07.List All Plain/Shard/Trace Tables

```sql
-- only trace
SELECT 
  reverse(substring(reverse(table_name),length(substring_index(table_name,'__',-1))+1)) as tbl,
  group_concat(SUBSTRING_INDEX(table_name,'__',-1)) as log
FROM INFORMATION_SCHEMA.TABLES
WHERE table_schema = DATABASE()
  AND table_name RLIKE '__'
  GROUP BY tbl;

SELECT
  table_name,
  CONCAT('DROP TABLE IF EXISTS ',table_name,';')
FROM INFORMATION_SCHEMA.TABLES
WHERE table_schema = DATABASE()
  AND table_name RLIKE '\\$|__';

-- only shard
SELECT 
  reverse(substring(reverse(table_name),length(substring_index(table_name,'_',-1))+1)) as tbl,
  group_concat(SUBSTRING_INDEX(table_name,'_',-1)) as num
FROM INFORMATION_SCHEMA.TABLES
WHERE table_schema = DATABASE()
  AND table_name RLIKE '_[0-9]+$'
  group by tbl;

SELECT
  table_name,
  CONCAT('DROP TABLE IF EXISTS ',table_name,';')
FROM INFORMATION_SCHEMA.TABLES
WHERE table_schema = DATABASE()
  AND table_name RLIKE '_[0-9]+$';

-- only plain
SELECT table_name
FROM INFORMATION_SCHEMA.TABLES
WHERE table_schema = DATABASE()
  AND table_name NOT REGEXP '_[0-9]+$'
  AND table_name NOT RLIKE '\\$|__';
```

## 2E.08.Flywave for Legacy Project

For legacy projects, to keep the original schema and data, you may not be able to use the naming of wings,
divided into the following cases.

* Without `sys_schema_*` table, you can set your own table in wings-flywave-79.properties,
  and create the same structure table manually.
* With the `sys_schema_*` table, you can replace 1ST_SCHEMA with a new name.
* Without `rename` the table, you can use the initialization script in the `branch` and `forceExecuteSql` to execute it.

Of the above methods, we recommend using the last one, after doing the manual initialization,
then managing the database version through flywave.

Except for the initial version, which is executed during checkAndInit, other versions need to be published or executed

## 2E.09.List or Delete All Triggers

```sql
SELECT
  EVENT_OBJECT_TABLE,
  TRIGGER_NAME,
  ACTION_TIMING,
  EVENT_MANIPULATION,
  ACTION_STATEMENT
FROM
  INFORMATION_SCHEMA.TRIGGERS
WHERE
  EVENT_OBJECT_SCHEMA = database();

-- get create sql of trigger;
-- DELIMITER ;;
SELECT
  TRIGGER_NAME,
  CONCAT('DROP TRIGGER IF EXISTS ',TRIGGER_NAME,';'),
  CONCAT('CREATE TRIGGER `', TRIGGER_NAME, '` ',
    ACTION_TIMING, ' ', EVENT_MANIPULATION, ' ON `', EVENT_OBJECT_TABLE, '` FOR EACH ROW ',
    ACTION_STATEMENT, ';;')
FROM
  INFORMATION_SCHEMA.TRIGGERS
WHERE
  EVENT_OBJECT_SCHEMA = database();

-- as flywave naming rules
SELECT
  TRIGGER_NAME,
  concat('DROP TRIGGER IF EXISTS ',TRIGGER_NAME,';')
FROM
  INFORMATION_SCHEMA.TRIGGERS
WHERE
  EVENT_OBJECT_SCHEMA = DATABASE()
  AND TRIGGER_NAME RLIKE '^(bi|ai|bu|au|bd|ad)__';
```

## 2E.10.Record Count of Trace Table

```sql
SELECT
  table_schema,
  concat('delete from ',table_name,' where _dt < \'2020-07-01\';'),
  CEILING(data_length / 1024 / 1024) AS data_mb,
  CEILING(index_length / 1024 / 1024) AS index_mb,
  CEILING((data_length + index_length) / 1024 / 1024) AS all_mb,
  table_rows
FROM
  information_schema.tables
WHERE
  table_name RLIKE '\\$|__'
  and table_schema = DATABASE()
ORDER BY table_schema , all_mb DESC;
```

## 2E.11.Manually Repair Trace Template

```sql
ALTER TABLE `{{TABLE_NAME}}__`
  MODIFY COLUMN `_id` BIGINT(20) NOT NULL AUTO_INCREMENT FIRST,
  ADD COLUMN `_dt` DATETIME(3) NOT NULL DEFAULT '1000-01-01 00:00:00' AFTER `_id`,
  ADD COLUMN `_tp` CHAR(1) NOT NULL DEFAULT 'Z' AFTER `_dt`;

DELIMITER ;;
CREATE TRIGGER `ai__{{TABLE_NAME}}` AFTER INSERT ON `{{TABLE_NAME}}`
  FOR EACH ROW BEGIN
  IF (@DISABLE_FLYWAVE IS NULL) THEN
    INSERT INTO `{{TABLE_NAME}}__` SELECT NULL, NOW(3), 'C', t.* FROM `{{TABLE_NAME}}` t
    WHERE t.id = NEW.id ;
  END IF;
END;;

CREATE TRIGGER `au__{{TABLE_NAME}}` AFTER UPDATE ON `{{TABLE_NAME}}`
  FOR EACH ROW BEGIN
  IF (@DISABLE_FLYWAVE IS NULL) THEN
    INSERT INTO `{{TABLE_NAME}}__` SELECT NULL, NOW(3), 'U', t.* FROM `{{TABLE_NAME}}` t
    WHERE t.id = NEW.id ;
  END IF;
END;;

CREATE TRIGGER `bd__{{TABLE_NAME}}` BEFORE DELETE ON `{{TABLE_NAME}}`
  FOR EACH ROW BEGIN
  IF (@DISABLE_FLYWAVE IS NULL) THEN
    INSERT INTO `{{TABLE_NAME}}__` SELECT NULL, NOW(3), 'D', t.* FROM `{{TABLE_NAME}}` t
    WHERE t.id = OLD.id ;
  END IF;
END;;
DELIMITER ;
```

## 2E.12.Partial Recovery Data by Trace Table

Using dynamic SQL, get the latest data from the log table and REPLACE INTO the main table.
During this time, you must disable the Trigger with `@DISABLE_FLYWAVE = 1`.

To avoid business interruption, write the max_id of log to a temporary table, or a static sql.

```sql
-- SET @group_concat_max_len = @@global.max_allowed_packet;
SET @tabl = 'win_user_basis';
SET @cols = (
  SELECT CONCAT('`',GROUP_CONCAT(COLUMN_NAME SEPARATOR '`, `'), '`') 
  FROM INFORMATION_SCHEMA.COLUMNS 
  WHERE TABLE_SCHEMA = database() AND TABLE_NAME = @tabl
  ORDER BY ORDINAL_POSITION
);
SET @restoreSql = CONCAT(
-- 'REPLACE INTO ', @tabl,
' SELECT ', @cols,' FROM ', @tabl,'__ WHERE (_id,id) IN (',
' SELECT max(_id), id FROM ', @tabl,'__ ',
' WHERE _tp in (\'D\')'
' GROUP BY id',
')');

SELECT @restoreSql;
-- 

SET @DISABLE_FLYWAVE = 1;
PREPARE stmt FROM @restoreSql;
EXECUTE stmt;
SET @DISABLE_FLYWAVE = NULL;
```

## 2E.13.Manually Create Trace Tables and Triggers

With flywave you can have better hints, logging. But it can also be done by manual sql.

```sql
-- generate trace table
SET @tabl = 'owt_lading_main';
SET @cols = (
SELECT
  GROUP_CONCAT(CONCAT('`',COLUMN_NAME, '` ', COLUMN_TYPE,' COMMENT \'', replace(COLUMN_COMMENT,'\'','\\\''),'\''))
FROM
  INFORMATION_SCHEMA.COLUMNS
WHERE
  TABLE_SCHEMA = database()
  AND TABLE_NAME = @tabl
  ORDER BY ORDINAL_POSITION
);
SET @prik = (
SELECT
  GROUP_CONCAT(CONCAT('`',COLUMN_NAME, '`'))
FROM
  INFORMATION_SCHEMA.COLUMNS
WHERE
  TABLE_SCHEMA = database()
  AND TABLE_NAME = @tabl
    AND COLUMN_KEY = 'PRI'
  ORDER BY ORDINAL_POSITION
);

SET @tracerSql = CONCAT(
'CREATE TABLE ', @tabl, '__ (',
' `_id` BIGINT(20) NOT NULL AUTO_INCREMENT, ',
' `_dt` DATETIME(3) NOT NULL DEFAULT \'1000-01-01 00:00:00\', ',
' `_tp` CHAR(1) NOT NULL DEFAULT \'Z\', ',
@cols, ', '
' PRIMARY KEY (`_id`), ',
' KEY `RAW_TABLE_PK` (', @prik, ')',
 ') ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;');

SELECT @tracerSql;

PREPARE stmt FROM @tracerSql;
EXECUTE stmt;

-- generate trigger sql
SET @tabl = 'win_user_basis';
SET @triggerSql = CONCAT(
   'DELIMITER ;;\n',
   'CREATE TRIGGER `ai__', @tabl, '` AFTER INSERT ON `', @tabl,'` FOR EACH ROW BEGIN',
   ' IF (@DISABLE_FLYWAVE IS NULL) THEN',
   ' INSERT INTO `',@tabl ,'__` SELECT NULL, NOW(3), \'C\', t.* FROM `',@tabl ,'` t WHERE t.id = NEW.id ;',
   ' END IF;',
   'END;;\n',
   'CREATE TRIGGER `au__', @tabl, '` AFTER UPDATE ON `', @tabl,'` FOR EACH ROW BEGIN',
   ' IF (@DISABLE_FLYWAVE IS NULL) THEN',
   ' INSERT INTO `',@tabl ,'__` SELECT NULL, NOW(3), \'U\', t.* FROM `',@tabl ,'` t WHERE t.id = NEW.id ;',
   ' END IF;',
   'END;;\n',
   'CREATE TRIGGER `bd__', @tabl, '` BEFORE DELETE ON `', @tabl,'` FOR EACH ROW BEGIN',
   ' IF (@DISABLE_FLYWAVE IS NULL) THEN',
   ' INSERT INTO `',@tabl ,'__` SELECT NULL, NOW(3), \'D\', t.* FROM `',@tabl ,'` t WHERE t.id = OLD.id ;',
   ' END IF;',
   'END;;\n'
   );

select @triggerSql;
```

## 2E.14.What if Not Support `$` Naming

After version 210, wings are named with a double underscore `__`,
which replaces the dollar`$` naming convention.

The alphanum, dollar and underscore (`[0-9,a-z,A-Z$_]`) are all officially legal
[naming characters](https://dev.mysql.com/doc/refman/5.7/en/identifiers.html).

However, some incompatible cloud DB or tools are not well handled, but wings must avoid the 3rd functional defects.

If the DB or tool cannot be replaced, the default convention and implementation of wings can be modified.
This option is a hidden feature, passes basic testing, and is generally not recommended.

* Change the suffix separator, e.g. `__`, two underscores.
* Use prefixes, like `_`, starting with an underscore.

Each option that affects flywave's matching tables and scripts, must be changed on a case-by-case basis.
When using prefixes, it also affects the sorting of the table name, and it is not easy to visually see
if the plain table has a trace table.

The simple way is to change the `wings.faceless.flywave.ver.format-` configuration.

The principle is to modify the SqlSegmentProcessor.setXXXFormat method to set the expression.
The expression must be precise to avoid mismatching the relationship between plain, shard and trace tables.

With `XXX` for the plain table and `#` for the letter, SqlSegmentProcessor provides 3 types of expressions by default

* TRACE_DOLLAR - separated by a dollar`$` suffix, such as `XXX$#`
* TRACE_SU2_LINE - separated by a double underscore `__` suffix, e.g. `XXX__#`
* TRACE_PRE_LINE - separated by a single underscore `_` prefix, e.g. `_XXX` or `_#_XXX`
