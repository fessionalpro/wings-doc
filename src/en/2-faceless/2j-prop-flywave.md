---
isOriginal: true
icon: enum
category:
  - Faceless
  - Porperty
---

# 2J.Flywave Properties

有Flywave关于schema管理的配置。

## 2J.1.spring-wings-enabled-79.properties

Flywave功能的默认开关，如下

### spring.wings.faceless.flywave.enabled.module

`Boolean`=`false`，是否注入Flywave相关Bean。

### spring.wings.faceless.flywave.enabled.checker

`Boolean`=`true`，flywave是否进行数据库的版本检查。

## 2J.2.wings-flywave-fit-79.properties

Flywave对依赖的`flywave-init`版本进行检查。

### wings.faceless.flywave.auto-init

`Boolean`=`false`，是否允许自动初始化，非空数据库，最好手工初始化

### wings.faceless.flywave.fit.flywave-init.path

`String`=`classpath*:/wings-flywave/master/00-init/*.sql`

sql扫描pattern，逗号分隔。PathMatchingResourcePatternResolver格式

### wings.faceless.flywave.fit.flywave-init.revi

`String`=`2019_0512_01L`，revision，逗号分隔

### wings.faceless.flywave.fit.flywave-init.lost

`String`=`WARN`

补漏行为，任一指定revi未应用时，只升级不能降级，避免危险的删除动作。
`SKIP`-跳过|`WARN`-警告|`FAIL`-异常|`EXEC`-强制执行

## 2J.3.wings-flywave-sql-79.properties

Flywave的Sql解析设置

### wings.faceless.flywave.sql.dialect

`String`=`mysql`，sql方言，当前只支持`mysql`

### wings.faceless.flywave.sql.delimiter-default

`String`=`;`，原始分隔符，必须存在。

### wings.faceless.flywave.sql.delimiter-command

`String`=`DELIMITER`，重定义的分隔符的命令。

### wings.faceless.flywave.sql.comment-single

`String`=`--`，单行注释

### wings.faceless.flywave.sql.comment-multiple

`String`=`/* */`，多行注释，开头和结束以空格分开表示

修改表模式，参考 SqlSegmentProcessor.setShardFormat

### wings.faceless.flywave.sql.format-shard

`String`=`XXX_[0-9]+`，设置分表格式

### wings.faceless.flywave.sql.format-trace

`String`=`XXX(_[0-9]+)?__+[a-z]+`，设置跟踪表格式

## 2j.4.wings-flywave-ver-79.properties

Flywave对version和journal表的设置。

* `{{PLAIN_NAME}}` 目标表的`本表`名字
* `{{TABLE_NAME}}` 目标表名字，可能是本表，分表，跟踪表
* `{{TABLE_BONE}}` 目标表字段(至少包含名字，类型，注释)，不含索引和约束
* `{{TABLE_PKEY}}` 目标表的主键中字段名，用来创建原主键的普通索引

### wings.faceless.flywave.ver.schema-version-table

`String`=`sys_schema_version`，版本管理表名

### wings.faceless.flywave.ver.schema-journal-table

`String`=`=sys_schema_journal`，数据日志表名

### wings.faceless.flywave.ver.drop-reg

`Map<String, String>`，视为drop语句的正则，以做危险提示。

* `drop-table`=`^drop\\s+table`
* `truncate-table`=`^truncate\\s+table`

### wings.faceless.flywave.ver.journal-insert

AfterInsert的跟踪表（建立原主键索引），`String`，默认

```sql
CREATE TABLE `{{TABLE_NAME}}__` (
    `_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
    `_dt` DATETIME(3) NOT NULL DEFAULT '1000-01-01 00:00:00',
    `_tp` CHAR(1) NOT NULL DEFAULT 'Z',
    {{TABLE_BONE}},
    PRIMARY KEY (`_id`),
    KEY `RAW_TABLE_PK` ({{TABLE_PKEY}})
) ENGINE=INNODB DEFAULT CHARSET=UTF8MB4
```

### wings.faceless.flywave.ver.trigger-insert

AfterInsert Trigger，`String`，默认

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

AfterUpdate的跟踪表（建立原主键索引），`String`，默认

```sql
CREATE TABLE `{{TABLE_NAME}}__` (
    `_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
    `_dt` DATETIME(3) NOT NULL DEFAULT '1000-01-01 00:00:00',
    `_tp` CHAR(1) NOT NULL DEFAULT 'Z',
    {{TABLE_BONE}},
    PRIMARY KEY (`_id`),
    KEY `RAW_TABLE_PK` ({{TABLE_PKEY}})
) ENGINE=INNODB DEFAULT CHARSET=UTF8MB4
```

### wings.faceless.flywave.ver.trigger-update

AfterUpdate Trigger，`String`，默认

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

BeforeDelete 的跟踪表（建立原主键索引），`String`，默认

```sql
CREATE TABLE `{{TABLE_NAME}}__` (
    `_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
    `_dt` DATETIME(3) NOT NULL DEFAULT '1000-01-01 00:00:00',
    `_tp` CHAR(1) NOT NULL DEFAULT 'Z',
    {{TABLE_BONE}},
    PRIMARY KEY (`_id`),
    KEY `RAW_TABLE_PK` ({{TABLE_PKEY}})
) ENGINE=INNODB DEFAULT CHARSET=UTF8MB4
```

### wings.faceless.flywave.ver.trigger-delete

BeforeDelete Trigger，`String`，默认

```sql
CREATE TRIGGER `bd__{{TABLE_NAME}}` BEFORE DELETE ON `{{TABLE_NAME}}`
FOR EACH ROW BEGIN
  IF (@DISABLE_FLYWAVE IS NULL) THEN 
    INSERT INTO `{{TABLE_NAME}}__` SELECT NULL, NOW(3), 'D', t.* FROM `{{TABLE_NAME}}` t
    WHERE t.id = OLD.id ;
  END IF; 
END
```
