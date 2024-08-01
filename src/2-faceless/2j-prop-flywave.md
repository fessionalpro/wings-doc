---
isOriginal: true
icon: folder-tree
category:
  - Faceless
  - Porperty
---

# 2J.Flywave Properties

Flywave properties about schema management.

## 2J.1.wings-flywave-fit-79.properties

Flywave checks for dependent `flywave-init` versions.

### wings.faceless.flywave.auto-init

`Boolean`=`false`, whether to allow auto init, non-empty database, preferably manual init

### wings.faceless.flywave.checker

`Boolean`=`true`, whether flywave performs version checking for database.

### wings.faceless.flywave.fit.flywave-init.path

`String`=`classpath*:/wings-flywave/master/00-init/*.sql`

sql scan pattern, comma separated. PathMatchingResourcePatternResolver format

### wings.faceless.flywave.fit.flywave-init.revi

`String`=`2019_0512_01L`, revision, comma separated

### wings.faceless.flywave.fit.flywave-init.lost

`String`=`WARN`. `SKIP`-skip|`WARN`-warn|`FAIL`-exception|`EXEC`-force to exec

Post check, if the specified revi is not applied, only upgrade can be performed, not downgrade to avoid dangerous delete.

## 2J.2.wings-flywave-sql-79.properties

Sql parsing settings for Flywave.

### wings.faceless.flywave.sql.dialect

`String`=`mysql`, sql dialect, currently only supports `mysql`.

### wings.faceless.flywave.sql.delimiter-default

`String`=`;`, the original delimiter, required.

### wings.faceless.flywave.sql.delimiter-command

`String`=`DELIMITER`, the command to redefine the delimiter.

### wings.faceless.flywave.sql.comment-single

`String`=`--`, single line comment

### wings.faceless.flywave.sql.comment-multiple

`String`=`/* */`, multi-line comments, start and end with a space

### wings.faceless.flywave.sql.format-shard

`String`=`XXX_[0-9]+`, set the shard table format. see SqlSegmentProcessor.setShardFormat.

### wings.faceless.flywave.sql.format-trace

`String`=`XXX(_[0-9]+)?__+[a-z]+`, set the trace table format. see SqlSegmentProcessor.setTraceFormat

## 2j.3.wings-flywave-ver-79.properties

set version and journal table for Flywave.

* `{{PLAIN_NAME}}` The `plain` table name of the target table
* `{{TABLE_NAME}}` Target table name, can be plain, shard, trace table
* `{{TABLE_BONE}}` Target table field (at least name, type, comments), without indexes and constraints
* `{{TABLE_PKEY}}` The field name in PK of the target table, used to create a normal index copy from the original PK

### wings.faceless.flywave.ver.schema-version-table

`String`=`sys_schema_version`, table name of schema version.

### wings.faceless.flywave.ver.schema-journal-table

`String`=`=sys_schema_journal`, table name of journal.

### wings.faceless.flywave.ver.drop-reg

`Map<String, String>`, RegExp is treated as drop statements for dangerous confirm.

* `drop-table`=`^drop\\s+table`
* `truncate-table`=`^truncate\\s+table`

### wings.faceless.flywave.ver.journal-insert

Trace table for AfterInsert (create the original PK index), `String`, default

```sql
CREATE TABLE `{{TABLE_NAME}}__` (
    `_id` BIGINT NOT NULL AUTO_INCREMENT,
    `_dt` DATETIME(3) NOT NULL DEFAULT '1000-01-01 00:00:00',
    `_tp` CHAR(1) NOT NULL DEFAULT 'Z',
    {{TABLE_BONE}},
    PRIMARY KEY (`_id`),
    KEY `RAW_TABLE_PK` ({{TABLE_PKEY}})
) ENGINE=INNODB DEFAULT CHARSET=UTF8MB4
```

### wings.faceless.flywave.ver.trigger-insert

AfterInsert Trigger, `String`, default

```sql
CREATE TRIGGER `ai__{{TABLE_NAME}}` AFTER INSERT ON `{{TABLE_NAME}}`
FOR EACH ROW BEGIN
  IF (@DISABLE_FLYWAVE IS NULL) THEN
    INSERT INTO `{{TABLE_NAME}}__` SELECT NULL, NOW(3), 'C', t.* FROM `{{TABLE_NAME}}` t
    WHERE t.id = NEW.id ;
  END IF;
END
```

### wings.faceless.flywave.ver.journal-update

Trace table for AfterUpdate (create the original PK index), `String`, default

```sql
CREATE TABLE `{{TABLE_NAME}}__` (
    `_id` BIGINT NOT NULL AUTO_INCREMENT,
    `_dt` DATETIME(3) NOT NULL DEFAULT '1000-01-01 00:00:00',
    `_tp` CHAR(1) NOT NULL DEFAULT 'Z',
    {{TABLE_BONE}},
    PRIMARY KEY (`_id`),
    KEY `RAW_TABLE_PK` ({{TABLE_PKEY}})
) ENGINE=INNODB DEFAULT CHARSET=UTF8MB4
```

### wings.faceless.flywave.ver.trigger-update

AfterUpdate Trigger, `String`, default

```sql
CREATE TRIGGER `au__{{TABLE_NAME}}` AFTER UPDATE ON `{{TABLE_NAME}}`
FOR EACH ROW BEGIN
  IF (@DISABLE_FLYWAVE IS NULL) THEN
    INSERT INTO `{{TABLE_NAME}}__` SELECT NULL, NOW(3), 'U', t.* FROM `{{TABLE_NAME}}` t
    WHERE t.id = NEW.id ;
  END IF;
END
```

### wings.faceless.flywave.ver.journal-delete

Trace table for BeforeDelete (create the original PK index),`String`, default

```sql
CREATE TABLE `{{TABLE_NAME}}__` (
    `_id` BIGINT NOT NULL AUTO_INCREMENT,
    `_dt` DATETIME(3) NOT NULL DEFAULT '1000-01-01 00:00:00',
    `_tp` CHAR(1) NOT NULL DEFAULT 'Z',
    {{TABLE_BONE}},
    PRIMARY KEY (`_id`),
    KEY `RAW_TABLE_PK` ({{TABLE_PKEY}})
) ENGINE=INNODB DEFAULT CHARSET=UTF8MB4
```

### wings.faceless.flywave.ver.trigger-delete

BeforeDelete Trigger, `String`, default

```sql
CREATE TRIGGER `bd__{{TABLE_NAME}}` BEFORE DELETE ON `{{TABLE_NAME}}`
FOR EACH ROW BEGIN
  IF (@DISABLE_FLYWAVE IS NULL) THEN
    INSERT INTO `{{TABLE_NAME}}__` SELECT NULL, NOW(3), 'D', t.* FROM `{{TABLE_NAME}}` t
    WHERE t.id = OLD.id ;
  END IF;
END
```
