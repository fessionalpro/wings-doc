---
isOriginal: true
icon: time
category:
  - Faceless
  - Home
---

# 2.Faceless Void

![faceless_void](/faceless_icon.png)

> `Void` interface `public static void main`  
> a visitor from Claszureme, a realm outside of time.

Data layer (MySql compatible system, such as H2) utility. Support for table and data versioning,
strong typesafe sql mapping, rw-split and data sharding.

## 2.1.Module Project

* faceless - Data access utilty: locker, typesafe, enum and i18n
* faceless-flywave - Schema and data versioning
* faceless-jooq - Data access via Jooq
* faceless-jooqggen - jooq code generator
* faceless-shard - shardingsphere's rw-split, sharding
* faceless-test - testing utilty and config

## 2.2.Distributed Id (LightId)

Unlike other distributed Id solutions, eg. `snowflake`, `LightId` provides CRC8 pseudo-random encoding.
See [pro.fessioinal.mirana](https://github.com/trydofor/pro.fessional.mirana) project.

The default implementation of LightId is JDBC based. the autogen code by jooq implements `LightIdAware`
and can be used to get LightId. See the implementation of `LightIdService` for details.

## 2.3.Enum and I18n in Database

Revision 2019_0521_01 defines the enum and i18n tables for business-level codes, such as status.
use `ConstantEnumGenerate` to autogen java code to keep the Db and java enum consistent.

`CombinableMessageSource` can dynamically handle the i18n messages within service.

## 2.3.More Sections

* [Table/Data Versioning](2a-flywave.md) -  Sql-based and Git-like schema and data version management
* [Typesafe DSL SqlMapping](2b-jooq.md) - Generate strongly typed codes from database: pojo, dao
* [Separation and Sharding](2c-shard.md) - Separation and Sharding to smoothly handle large data
* [Mysql/H2 Knowledge](2d-mysql-h2.md) - Knowledge of Mysql-compatible database
* [Flywave Faq Topic](2e-qa-flywave.md) - Flywave schema revision and data journal
* [Jooq Faq Topic](2f-qa-jooq.md) - Jooq topic
* [Sharding Faq Topic](2g-qa-shard.md) - Sharding topic
* [Datetime and Timezone](2h-time-zone.md) - Datetime and timezone in database
