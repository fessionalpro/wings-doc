---
isOriginal: true
icon: enum
category:
  - Faceless
  - Porperty
---

# 2K.Jooq Properties

Properties about jooq.

## 2K.1.spring-wings-enabled-79.properties

The default switch for Jooq is,

### spring.wings.faceless.jooq.enabled.module

`Boolean`=`true`, whether to enable jooq config.

### spring.wings.faceless.jooq.enabled.auto-qualify

`Boolean`=`true`, whether to enable jooq auto qualify.

### spring.wings.faceless.jooq.enabled.batch-mysql

`Boolean`=`true`, whether to use efficient mysql syntax when performing bulk inserts via Dao.

### spring.wings.faceless.jooq.enabled.converter

`Boolean`=`false`, whether to inject global converters, recommended in Table.

### spring.wings.faceless.jooq.enabled.journal-delete

`Boolean`=`false`, when deleting with commit_id, whether to update first and then delete.

### spring.wings.faceless.jooq.enabled.listen-table-cud

`Boolean`=`true`, whether to listen to table's create/update/delete.

### spring.wings.faceless.jooq.enabled.render-group-concat

`Boolean`=`false`, whether the jOOQ `GROUP_CONCAT` function should be overflow-protected by setting
the `@@group_concat_max_len` session variable in MySQL style database

MySQL truncates <`GROUP_CONCAT` results after a certain length, which may be way
too small for jOOQ's usage, especially when using the `MULTISET` emulation. By
default, jOOQ sets a session variable to the highest possible value prior to executing a
query containing `GROUP_CONCAT`. This flag can be used to opt out of this.

* <https://github.com/jOOQ/jOOQ/issues/12092>
* <https://blog.jooq.org/mysqls-allowmultiqueries-flag-with-jdbc-and-jooq/>
* <https://www.jooq.org/doc/3.17/manual/sql-building/dsl-context/custom-settings/settings-group-concat/>

### spring.wings.faceless.jooq.enabled.render-catalog

`Boolean`=`false`, whether any catalog name should be rendered at all.
Use this for single-catalog environments, or when all objects are made
available using synonyms

### spring.wings.faceless.jooq.enabled.render-schema

`Boolean`=`false`, whether any schema name should be rendered at all.
Setting this to false also implicitly sets "renderCatalog" to false.
Use this for single-schema environments, or when all objects are made
available using synonyms

## 2K.2.wings-jooq-cud-79.properties

CUD listener settings for jooq.

### wings.faceless.jooq.cud.insert

`Boolean`=`true`, Whether to listen to insert

### wings.faceless.jooq.cud.update

`Boolean`=`true`, Whether to listen to update

### wings.faceless.jooq.cud.delete

`Boolean`=`true`, Whether to listen to delete

### wings.faceless.jooq.cud.table

`Map<String, Set<String>>`, Listening tables and their fields.

CUD listens to tables and fields, both tables and fields are case-sensitive, default,

* `win_order`=`id,order_num`

### wings.faceless.jooq.cud.diff

`Map<String, Set<String>>`, default fields to be ignored by JournalDiff.

Tables are case sensitive, fields are case insensitive, `default` means all tables, otherwise specific tables.

* `default`=`create_dt,modify_dt,delete_dt,commit_id`
