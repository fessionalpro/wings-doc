---
isOriginal: true
icon: clock
category:
  - 虚空
  - 首页
---

# 2.虚空假面

![faceless_void](/faceless_icon.png)

> `Void`，J8脸, `public static void main`
> 他是来自超维视界的一名访客，一个时间之外的境域。

数据层（MySql兼容系，如H2)封装。支持表和数据的版本管理，强类型支持，分表分库能力。

## 2.1.模块划分

* faceless - 数据库基本功能和定义：锁，类型，enum和i18n等
* faceless-flywave - 数据库版本管理
* faceless-jooq - 基于Jooq的数据库访问层
* faceless-jooqggen - jooq 代码生成
* faceless-shard - 基于shardingsphere的分表分库配置
* faceless-test - 测试包，含数据源

## 2.2.分布式主键(LightId)

分布式主键有`snowflake`方案可选，但`LightId`支持CRC8做伪随机编码使用。
参考[pro.fessioinal.mirana](https://github.com/trydofor/professional-mirana)项目。

实现了基于JDBC的LightId，在Jooq生成pojo时，自动继承`LightIdAware`，可以当作key使用。
具体细节参考`LightIdService`的实现。

## 2.3.数据库Enum类和多国语

schema版本2019_0521_01，定义了enum和i18n表，分别定义业务级枚举code，如状态，
可以使用`ConstantEnumGenerate`自动生成java类，保持db和java代码的一致。

i18n可以使用CombinableMessageSource动态添加，处理service内消息的多国语。

## 2.3.更多章节

* [表和数据的版本](./2a-flywave.md) -  以Sql和Git为核心，绑定表结构和代码关系
* [强类型及DSL能力](./2b-jooq.md) - 从数据库生成强类型代码：pojo, dao
* [按需分表分库](./2c-shard.md) - 完成数据的分表分库功能，平稳处理大数据量
* [Mysql体系的知识](./2d-mysql-h2.md) - Mysql系数据库有关知识
* [Flywave话题](./2e-qa-flywave.md) - Flywave版本及日志表有关
* [Jooq使用话题](./2f-qa-jooq.md) - Jooq有关的话题
* [分表分库话题](./2g-qa-shard.md) - Sharding有关的话题
* [时间和时区](./2h-time-zone.md) - 和数据库有关的时间和时区
