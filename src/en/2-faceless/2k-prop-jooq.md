---
isOriginal: true
icon: enum
category:
  - Faceless
  - Porperty
---

# 2K.Jooq Properties

有Flywave关于schema管理的配置。

## 2K.1.spring-wings-enabled-79.properties

Flywave功能的默认开关，如下

### spring.wings.faceless.jooq.enabled.module

`Boolean`=`true`，是否开启jooq配置

### spring.wings.faceless.jooq.enabled.auto-qualify

`Boolean`=`true`，是否jooq自动设置qualify

### spring.wings.faceless.jooq.enabled.batch-mysql

`Boolean`=`true`，执行dao的批量插入时，使用高效的mysql语法

### spring.wings.faceless.jooq.enabled.converter

`Boolean`=`false`，是否注入全局converter，推荐Table中注入

### spring.wings.faceless.jooq.enabled.journal-delete

`Boolean`=`false`，delete且有commit_id时，是否先update再delete

### spring.wings.faceless.jooq.enabled.listen-table-cud

`Boolean`=`true`，是否监听table的create, update, delete

### spring.wings.faceless.jooq.enabled.render-group-concat

`Boolean`=`false`, Whether the jOOQ `GROUP_CONCAT` function should be overflow-protected by setting
the `@@group_concat_max_len` session variable in MySQL style database

MySQL truncates <`GROUP_CONCAT` results after a certain length, which may be way
too small for jOOQ's usage, especially when using the `MULTISET` emulation. By
default, jOOQ sets a session variable to the highest possible value prior to executing a
query containing `GROUP_CONCAT`. This flag can be used to opt out of this.

* <https://github.com/jOOQ/jOOQ/issues/12092>
* <https://blog.jooq.org/mysqls-allowmultiqueries-flag-with-jdbc-and-jooq/>
* <https://www.jooq.org/doc/3.17/manual/sql-building/dsl-context/custom-settings/settings-group-concat/>

### spring.wings.faceless.jooq.enabled.render-catalog

`Boolean`=`false`, Whether any catalog name should be rendered at all.
Use this for single-catalog environments, or when all objects are made
available using synonyms

### spring.wings.faceless.jooq.enabled.render-schema

`Boolean`=`false`, Whether any schema name should be rendered at all.
Setting this to false also implicitly sets "renderCatalog" to false.
Use this for single-schema environments, or when all objects are made
available using synonyms

## 2K.2.wings-jooq-cud-79.properties

jooq的CUD监听设置

### wings.faceless.jooq.cud.insert

`Boolean`=`true`，是否监听insert

### wings.faceless.jooq.cud.update

`Boolean`=`true`，是否监听update

### wings.faceless.jooq.cud.delete

`Boolean`=`true`，是否监听delete

### wings.faceless.jooq.cud.table

`Map<String, Set<String>>`，监听表及其字段。

cud监听的表及字段，表和字段都区分大小写，默认

* `win_order`=`id,order_num`

### wings.faceless.jooq.cud.diff

`Map<String, Set<String>>`，JournalDiff默认的忽略字段

表区分大小写，字段不区分大小写，default表示所有表，否则为具体表。

* `default`=`create_dt,modify_dt,delete_dt,commit_id`
