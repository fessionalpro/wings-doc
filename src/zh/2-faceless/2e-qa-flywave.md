---
isOriginal: true
icon: code-compare
category:
  - 虚空
  - 版本
  - 话题
---

# 2E.Flywave话题

Flywave版本及日志表有关的话题

## 2E.01.如何自定义journalService

使用高优先级注入`journalService`，参考 example工程的 `SecurityJournalService`

## 2E.02.找不到SchemaRevisionManager

在2.2.6以后，默认关闭了`wings.enabled.faceless.flywave=false`
初始化的时候需要打开，例如在test中增加临时打开
`@SpringBootTest(properties = "wings.enabled.faceless.flywave=true")`

## 2E.03.缺少branches的异常

在2.2.7版后，对sys_schema_version增加了分支支持，之前的版本需要手动维护。
执行`branch/somefix/v227-fix`的`2019_0512_02`即可。

## 2E.04.哪些测试或例子适合了解flywave

* SchemaJournalManagerTest - 包含了shard和track的例子测试
* SchemaRevisionMangerTest - 基本的版本管理测试
* SchemaShardingManagerTest - shard和数据迁移测试

* WingsFlywaveInitDatabaseSample - 管理数据库版本例子
* ConstantEnumGenSample - enum类生成例子
* JooqJavaCodeGenSample - jooq类生成例子
* WingsSchemaDumper - schema和数据dump例子
* WingsSchemaJournal - track表控制例子

## 2E.05.flywave中确认危险语句

* 带有`ask@*`注解的sql，强制确认
* undo 语句确认 `wings.faceless.flywave.ver.ask-undo=true`
* drop 类语句确认 `wings.faceless.flywave.ver.ask-drop=true`
* drop 类语句定义 `wings.faceless.flywave.ver.drop-reg[drop-table]`

如果UnitTest中控制台中无响应，需要在IDE中打开`console`，如在Idea中
`-Deditable.java.test.console=true` (Help/Edit Custom VM Options...)

## 2E.06.跟踪表不需要增加index

如果已有索引更新到了跟踪表，并影响了写入性能，或唯一索引，通过以下sql查看。

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

通过 `apply@` 语句指定被更新的表。比如，以下更新本表和分表，不更新跟踪表

```sql
-- @plain apply@nut error@skip
ALTER TABLE `win_user`
  DROP INDEX `ft_auth_set`,
  DROP INDEX `ft_role_set`;
```

## 2E.07.列出所有本表，分表，跟踪表

```sql
-- 仅跟踪表
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

-- 仅分表
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

-- 仅主表
SELECT table_name
FROM INFORMATION_SCHEMA.TABLES
WHERE table_schema = DATABASE()
  AND table_name NOT REGEXP '_[0-9]+$'
  AND table_name NOT RLIKE '\\$|__';
```

## 2E.08.如果使用flywave管理老工程

对于老工程，需要保留原来的表结构和数据，可能无法使用wings的命名，分作以下情况。

* 不能用`sys_schema_*`表，可以通过wings-flywave-79.properties配置设置对于表，并手工创建同结构表
* 希望用`sys_schema_*`表，也希望版本连续，可通过replace方法把1ST_SCHEMA改名为新名字
* 不希望rename的，可以使用branch分支管理初始化脚本，使用forceExecuteSql方法执行

以上方法，推荐使用最后一种，做好手工初始化后，后续通过flywave管理数据库版本。

除了初始版本，会在checkAndInit时执行外，其他版本必须显示的publish或execute

## 2E.09.如果获得或删除所有trigger

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

-- 获取创建trigger的SQL;
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

-- 符合flywave命名规则的
SELECT
  TRIGGER_NAME,
  concat('DROP TRIGGER IF EXISTS ',TRIGGER_NAME,';')
FROM
  INFORMATION_SCHEMA.TRIGGERS
WHERE
  EVENT_OBJECT_SCHEMA = DATABASE()
  AND TRIGGER_NAME RLIKE '^(bi|ai|bu|au|bd|ad)__';
```

## 2E.10.获取trace表的数据量

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

## 2E.11.手动修复历史trace模板

```sql
ALTER TABLE `{{TABLE_NAME}}__`
  MODIFY COLUMN `_id` BIGINT NOT NULL AUTO_INCREMENT FIRST,
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

## 2E.12.根据trace表，局部恢复数据

使用动态SQL，从trace表获得最新数据，并REPLACE INTO的主表，
期间需要关闭 Trigger @DISABLE_FLYWAVE = 1;

为了避免业务干扰，可把log的max_id写入临时表，或固化的sql

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

## 2E.13.如何手工生成日志表和trigger

使用flywave，可以有更好的提示，记录。但也可以通过手工sql来完成.

```sql
-- 生成trace表
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
' `_id` BIGINT NOT NULL AUTO_INCREMENT, ',
' `_dt` DATETIME(3) NOT NULL DEFAULT \'1000-01-01 00:00:00\', ',
' `_tp` CHAR(1) NOT NULL DEFAULT \'Z\', ',
@cols, ', '
' PRIMARY KEY (`_id`), ',
' KEY `RAW_TABLE_PK` (', @prik, ')',
 ') ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;');

SELECT @tracerSql;

PREPARE stmt FROM @tracerSql;
EXECUTE stmt;

-- 生成trigger sql
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

## 2E.14.工具或DB不支持`$`命名怎么办

从210版本开始，wings以双下划线`__`命名，取代Dollar`$`命名。

英数美刀下划线(`[0-9,a-z,A-Z$_]`)都是mysql官方允许的合法的[命名字符](https://dev.mysql.com/doc/refman/5.7/en/identifiers.html)
但某些不完备的云DB或工具，未做好处理，但wings需要避开外来的功能缺陷。

若无法更换DB或工具，可以修改wings的默认约定及实现。
此选项，为隐藏功能，通过基本测试，通常情况下不建议使用。

* 变更后缀的分隔符，如`__`，两个下划线。
* 使用前缀，如`_`，以下划线开头。

每个方案，都会影响flywave的配表及脚本，需要逐一修改。
使用前缀时，还会影响表名排序，视觉上无法直观的看到主表是否有跟踪表。

简单的方式是修改`wings.faceless.flywave.ver.format-`配置。

原理是修改 SqlSegmentProcessor.setXXXFormat方法，设置表达式，
要求表达式必须精准，避免误判主表，分表，跟踪表的关系。
以`XXX`表示主表，`#`表示字母，SqlSegmentProcessor 默认提供了3种表达式

* TRACE_DOLLAR - 以dollar`$`后缀分隔，如`XXX$#`
* TRACE_SU2_LINE - 以双下划线`__`后缀分隔，如`XXX__#`
* TRACE_PRE_LINE - 以单下划线`_`前缀分隔，如`_XXX`或`_#_XXX`
