---
isOriginal: true
icon: tree
category:
  - Faceless
  - Database
  - Topic
---

# 2G.Sharding Faq Topic

Topics about database sharding and splitting.

## 2G.01. No implementation SPI

No implementation class load from SPI with type `null`

Avoid using Chinese in naming, for boundary test, find shardingsphere can directly handle Chinese table name,
but for other naming will cause some parsing error.

Such as `sharding-algorithms.[sharding-inline]`, it will fail and make its `.type=null`, thus reporting an error.

No implementation class load from SPI `org.apache.shardingsphere.sharding.spi.ShardingAlgorithm` with type `null`

## 2G.02.ON DUPLICATE KEY UPDATE

INSERT INTO ... ON DUPLICATE KEY UPDATE can not support update for sharding column

then append sharding column and value to WHERE Clause

<https://github.com/apache/shardingsphere/issues/14025>

This feature was released around 5.1.0
