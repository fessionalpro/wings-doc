---
isOriginal: true
icon: folder-tree
category:
  - Faceless
  - Property
---

# 2I.Faceless Properties

Basic properties about database, data manipulation, Db level I18n.

## 2I.1.spring-hikari-79.properties

Properties of spring.datasource.hikari as follows,

* `spring.datasource.hikari.pool-name`=`wings-hikari-cp`
* `spring.datasource.hikari.maximum-pool-size`=`20`
* `spring.datasource.hikari.auto-commit`=`true`
* `spring.datasource.hikari.connection-timeout`=`30000`
* `spring.datasource.hikari.idle-timeout`=`600000`
* `spring.datasource.hikari.max-lifetime`=`1800000`
* `spring.datasource.hikari.leak-detection-threshold`=`15000`

## 2I.2.wings-flywave-fit-79.properties

Do database version checking for faceless-id-log dependencies via flywave.

### wings.faceless.flywave.fit.faceless-id-log.path

`Set<String>`=`classpath*:/wings-flywave/master/01-light/*.sql`

sql scan pattern, comma separated. PathMatchingResourcePatternResolver format

### wings.faceless.flywave.fit.faceless-id-log.revi

`Set<String>`=`2019_0520_01L`. revision, comma separated.

### wings.faceless.flywave.fit.faceless-id-log.lost

`String`=`WARN`. `SKIP`-skip|`WARN`-warn|`FAIL`-exception|`EXEC`-force to exec

Post check, if the specified revi is not applied, only upgrade can be performed, not downgrade to avoid dangerous delete.

## 2I.3.wings-journal-79.properties

## wings.faceless.journal.propagation

`Propagation`=`REQUIRES_NEW`, transaction to create new Journal

## wings.faceless.journal.alive

`Integer`=`300`, create new journal if the existing is older than alive seconds.

* `<0` - use the old
* `0`  - new one every time
* `>0` - new one if older

## 2I.4.wings-lightid-79.properties

The setting for the distributed PK- lightid. default transaction is Propagation.REQUIRES_NEW

### wings.faceless.lightid.insert.auto

`Boolean`=`true`, If the current ID of name and block does not exist, insert new one or throw an exception.

### wings.faceless.lightid.insert.next

`Long`=1000, The first value when auto-insert, recommended to start with 1000, as the  value below is used manually.

### wings.faceless.lightid.insert.step

`Long`=100, The step value when auto-insert.

### wings.faceless.lightid.provider.timeout

`Long`=5000, timeout millis of loading.

### wings.faceless.lightid.provider.max-error

`Integer`=5, max error count of loading.

### wings.faceless.lightid.provider.max-count

`Integer`=10000, max id count of per loading.

### wings.faceless.lightid.provider.err-alive

`Long`=120000, no attempt in number of millis if error exists.

### wings.faceless.lightid.provider.block-type

`String`=`sql`, method to provide blockId

* `sql` - query database, return the id
* `fix` - fixed number, int
* `biz` - use a custom business bean

### wings.faceless.lightid.provider.block-para

`String`, parameters of the provide method, select for sql, and number for fix.

```sql
SELECT block_id
FROM sys_light_sequence
WHERE seq_name = 'singleton_lightid_blockid'
```

### wings.faceless.lightid.provider.sequence-insert

`String`, insert statement for JdbcTemplate.

```sql
INSERT INTO sys_light_sequence
(seq_name, block_id, next_val, step_val, comments)
VALUES (?,?,?,?,?)
```

See `LightSequenceModifyJdbc` for details, the parameters are,

* `String` seq_name - sequence name
* `int` block_id - data block id
* `long` next_val - next seq
* `int` step_val - step value
* `String` comments - description

### wings.faceless.lightid.provider.sequence-update

`String`, update statement for JdbcTemplate.

```sql
UPDATE sys_light_sequence
SET next_val=?
WHERE block_id=? AND seq_name=? AND next_val=?
```

See `LightSequenceModifyJdbc` for details, the parameters are,

* `long` next_val_new - new seq value
* `int` block_id - data block id
* `String` seq_name - sequence name
* `long` next_val_old - old seq value

### wings.faceless.lightid.provider.sequence-get-one

`String`, fetch one sql for JdbcTemplate.

```sql
SELECT next_val, step_val
FROM sys_light_sequence
WHERE block_id=? AND seq_name=? FOR UPDATE
```

See `LightSequenceSelectJdbc` for details, the parameters are,

* `int` block_id - data block id
* `String` seq_name - sequence name

### wings.faceless.lightid.provider.sequence-get-all

`String`, fetch all sql for JdbcTemplate.

```sql
SELECT seq_name, next_val, step_val
FROM sys_light_sequence
WHERE block_id=? FOR UPDATE
```

See `LightSequenceSelectJdbc` for details, the parameters are,

* `int` block_id - data block id

### wings.faceless.lightid.provider.sequence-adjust

`String`, try to verify and adjust the id in the database to make it correct. Set to `empty` to ignore this feature.

```sql
SELECT table_name, column_name
FROM INFORMATION_SCHEMA.COLUMNS
WHERE table_schema = DATABASE()
AND UPPER(column_key) = 'PRI'
AND UPPER(column_type) like '%INT%'
AND table_name = ?
```

Enter `table name` (as sequence name), return `table name` and `column name` in the database.

### wings.faceless.lightid.provider.monotonic

`String`=`jvm`, the LightId monotonic increasing type,

* jvm - monotonic in the jvm
* db - monotonic in the database
* hz - monotonic in the hazelcast

### wings.faceless.lightid.layout.block-bits

`Integer=`, the number of block bytes, in the range [3,23], empty by default.
LightId is 9 by default, so 2^9=512 zones.

### wings.faceless.lightid.layout.block-first

`Boolean=`, sequence layout, whether Block precedes Sequence, empty by default.
LightId is true by default
