---
isOriginal: true
icon: mysql
category:
  - 虚空
  - 数据
---

# 2.虚空假面

![faceless_void](/faceless_icon.png)

`Void`，J8脸, `public static void main`  
他是来自超维视界的一名访客，一个时间之外的境域。

可对MySql系(mysql及分支,h2)做Sharding，表结构和数据做版本管理。

* 可切换的分表分库功能(ShardingJdbc/PlainDataSource)
* 高效递增非连续的分布式主键(LightId)
* 从数据库自动生成enum和i18n代码, constantEnum,i18nEnum
* 轻量SCHEMA版本管理(fly-wave @flywave)
* DATA版本管理和追踪(journal/$log @flywave)
* 全备份dump现有数据库的表结构和记录(@flywave)
* 从数据库自动生成jooq代码，pojo, table, dao (@jooq)

## 2.1.飞波(flywave)是一个实践

工程实际中，我们响应变化，应当变更，都有成熟的工具，源代码由git管理，任务由jira管理，
那么静态的表结构变更，运行时的数据变更，我们怎么管理和记录，跟踪和调查，分支和回滚呢？

* 项目从零开始，需求逐渐浮现，如果管理每周迭代中的字段新增，废弃和修改
* local, develop, product的代码应该对应哪个schema和data
* 线上一个订单数据错误，由哪个even引起，同一even都更新了哪些条数据
* sql搞错where，发现时已晚，如何确认受影响数据，快速恢复到更新前
* 项目一点点变大，从单库单表，平滑的过度到，读写分离，分表分库
* 需要离线功能，同样代码可以跑本地h2database，云端mysql

具体内容，移步到子工程[时间结界(flywave)](2a-flywave.md)

## 2.2.强类型(jooq)数据库操作

推荐使用SqlMapping，因为ORM太重了，工程内使用Jooq和JdbcTemplate

MyBatis虽是大部分项目的首选，固有其优秀之处，但开发人员的懒惰或约束力量的不足，
使得项目不高效，偶尔很难维护，项目中容易蔓生出以下问题。

* 经常被 `select *`，带有大量无用信息。
* 很容易写出复杂的大SQL，使得服务难以拆分。
* 字符串及弱类型，IDE的眷顾有限。

使用Jooq，强类型，编程高于配置，并且SQL友好，又恰好有限制能力的能力。

具体内容，移步到子工程[时间漫游(jooq)](2b-jooq.md)

## 2.3.数据膨胀后的分表分库(shard)

有时候需要保留分表分库的能力，但当前还不需要分。所以，

* 在只有一个`DataSource`并且没有分表配置时，暴露普通数据源，
* 有分表分库需要时，暴露`Sharding`数据源。
* 所有普通数据源在`FacelessDataSources`中获得。

用ShardingSphere实现，具体内容，移步到子工程[时间膨胀(shard)](2c-shard.md)

数据库运维应该使用其他工具链，如[godbart](https://gitee.com/trydofor/godbart)由专业DBA执行。

## 2.4.分布式主键(LightId)

分布式主键有`snowflake`方案可选，但`LightId`支持CRC8做伪随机编码使用。
参考[pro.fessioinal.mirana](https://gitee.com/trydofor/pro.fessional.mirana)项目。

实现了基于JDBC的LightId，在Jooq生成pojo时，自动继承`LightIdAware`，可以当作key使用。
具体细节参考`LightIdService`的实现。

## 2.5.数据库Enum类和多国语

schema版本2019_0521_01，定义了enum和i18n表，分别定义业务级枚举code，如状态，
可以使用`ConstantEnumGenerate`自动生成java类，保持db和java代码的一致。

i18n可以使用CombinableMessageSource动态添加，处理service内消息的多国语。

## 2.6.事件服务EventService

单进程的异步和解耦，guava的EventBus和Spring的Event都可以胜任。
为单Jvm，多Jvm提高一个基于数据库的Event服务，主要用来。

* the event should extend ApplicationEvent
* the publisher should inject an ApplicationEventPublisher object
* the listener should implement the ApplicationListener interface
* @EventListener 和 @TransactionalEventListener

对应线程池直接传递上下文，可使用

<https://github.com/alibaba/transmittable-thread-local>

## 2.7.日时零值和时区

执行环境和数据库要在同一时区，否则jooq和jdbc在以下过程会自动转换时区，引发问题。

如果服务器和执行环境时区不一致，可以通过以下方式协调。

* 通过wings的参数设置时区 `wings.silencer.i18n.zoneid=Asia/Shanghai`
* java的启动参数， `-Duser.timezone=Asia/Shanghai`
* mysql的jdbc的url参数， `connectionTimeZone=%2B08:00&forceConnectionTimeZoneToSession=true`
* java的代码参数， `TimeZone.setDefault(TimeZone.getTimeZone("Asia/Shanghai"));`

在数据库和java配置上，需要统一时区和dev状态下的用户名和密码，一般团队一致。

```properties
wings.silencer.i18n.zoneid=Asia/Shanghai
# 常用jdbc参数
spring.datasource.url=jdbc:mysql://localhost:3306/wings_example\
  ?autoReconnect=true&useSSL=false\
  &useUnicode=true&characterEncoding=UTF-8\
  &connectionTimeZone=Asia/Shanghai
```

引发问题的原因，目前断定为jdbc和timestamp历史问题（wings210后统一mysql8，已统一解决）

* jooq，使用timestamp作为localDatetime的值，设置preparedStatement。
* jdbc，setTimestamp(int parameterIndex, Timestamp x),
  the JDBC driver uses the time zone of the virtual machine
  to calculate the date and time of the timestamp in that time zone.

通过以下SQL可以在mysql端调查数据库执行过程

```sql
-- 查看 系统，程序，会话时区
SELECT @@system_time_zone,  @@global.time_zone, @@session.time_zone;
-- @@system_time_zone, @@global.time_zone, @@session.time_zone
-- UTC, Asia/Shanghai, Asia/Shanghai

-- mysql 执行日志(UTC)
select `id` from `win_user` where `delete_dt` <= '0999-12-31 16:00:00.0';
-- jooq 绑定日志(GMT+8)
select `id` from `win_user` where `delete_dt` <= '1000-01-01 00:00:00.0';

-- 打开，日志，blob要
SET GLOBAL log_output = 'TABLE';SET GLOBAL general_log = 'ON';
SELECT * from mysql.general_log ORDER BY event_time DESC;
-- 关闭，清除
SET GLOBAL log_output = 'TABLE'; SET GLOBAL general_log = 'OFF';
truncate table mysql.general_log;
```

The session time zone setting affects display and storage of time values that are zone-sensitive.
This includes the values displayed by functions such as NOW() or CURTIME(),
and values stored in and retrieved from TIMESTAMP columns. Values for TIMESTAMP columns are converted
from the session time zone to UTC for storage, and from UTC to the session time zone for retrieval.

在mysql中，尽量使用NOW(fsp)，因为其短小明确有缓存，如无必须不可使用SYSDATE(fsp)，参考

* <https://dev.mysql.com/doc/refman/8.0/en/time-zone-support.html#time-zone-variables>
* <https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_now>
* <https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-configuration-properties.html>
* <https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-connp-props-datetime-types-processing.html>

## 2.8.数据库和Jvm时区统一

常用的时区有2中格式，不管那种，都推荐使用稳定时区，如政策不会变，没有夏令时。

* 容易理解的ZoneId形式 - 地理城市 Asia/Shanghai，America/New_York
* 规则稳定的Offset形式 - 相对于UTC的时差，UTC，+08:00

wings中使用DatabaseChecker检查以下②③④时差是否一致，推荐全部一致。

* ①system_time_zone - mysql host machine
* ②time_zone - mysql current time zone
* ③connectionTimeZone - jdbc connectionTimeZone/serverTimezone
* ④jvm TimeZone - jvm DefaultTimeZone
* ⑤host TimeZone - java host machine

其中③是jdbc中特有的，和session timezone类似，但比`SET time_zone = timezone`强大。
若③④一致则不影响使用，但若非wings环境，在未设置③导致mysql默认使用②时，就会出现时差问题。

使用NOW()及TIMESTAMP类型时要注意时区，他们受③的影响。

> The session time zone setting affects display and storage of time values that are zone-sensitive.
> This includes the values displayed by functions such as NOW() or CURTIME(),
> and values stored in and retrieved from TIMESTAMP columns.
> Values for TIMESTAMP columns are converted from the session time zone to UTC for storage,
> and from UTC to the session time zone for retrieval.

尽量使用 DATE, TIME, DATETIME类型，他们是时区无关的。

> The session time zone setting does not affect values displayed by functions such as UTC_TIMESTAMP()
> or values in DATE, TIME, or DATETIME columns. Nor are values in those data types stored in UTC;
> the time zone applies for them only when converting from TIMESTAMP values.
> If you want locale-specific arithmetic for DATE, TIME, or DATETIME values,
> convert them to UTC, perform the arithmetic, and then convert back.

以上是数据库层面需要注意的地方，而以下为jdbc及java体系中的注意点，

* connectionTimeZone和forceConnectionTimeZoneToSession同时使用。
* connectionTimeZone的值，建议使用offset形式，`UTC`, `-40:00`, `+80:00`
* 在jdbc url中，需要转义`+`，以`%2B08:00`表示`+80:00`
* 业务侧建议使用ZoneId形式，mysql配置项，建议是有offset形式

connectionTimeZone参数（8.0之前是serverTimezone）可以协调好jvm和mysql的时区，
单独使用connectionTimeZone，不会改变session级的time_zone，
需要配合forceConnectionTimeZoneToSession，才能达到session和jdbc一致的效果。

尽管以上设置可以满足项目要求，但因作用范围不如统一时区更稳定可靠，仍应避免使用。
此外在mysql配额中，建议使用offset格式时区，而业务侧使用ZoneId格式。

在配置JdbcUrl时，若使用`+`时（如下所示），会发生DateTimeException，因为在URL中`+`标识空格。
需要转义为`%2B`，即正确的格式为connectionTimeZone=%2B08:00

>wings_test?connectionTimeZone=+08:00`
>Invalid ID for region-based ZoneId, invalid format:  08:00
