---
isOriginal: true
icon: tree
category:
  - Faceless
  - Database
  - Topic
---

# 2G.Sharding Faq Topic

有关数据库和数据操作的话题

## 2G.01. No implementation SPI

No implementation class load from SPI with type `null`

命名中避免使用中文，边界测试时，发现shardingsphere可以直接中文表名，但对其他命名会截断错误。
如`sharding-algorithms.[中文也分表-inline]`，会截断错误，使其`.type=null`，从而报错，
No implementation class load from SPI `org.apache.shardingsphere.sharding.spi.ShardingAlgorithm` with type `null`

## 2G.02.ON DUPLICATE KEY UPDATE

INSERT INTO ... ON DUPLICATE KEY UPDATE can not support update for sharding column

then append sharding column and value to WHERE Clause

<https://github.com/apache/shardingsphere/issues/14025>

此功能大概在 5.1.0发布
