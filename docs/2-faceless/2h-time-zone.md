---
isOriginal: true
icon: time
category:
  - 虚空
  - 时间
  - 约定
---

# 2H.时间和时区

数据库有关的时间，时区，零值约定。

是`TimeZone`还是`timezone`，是大`Z`还是小`z`，这是一个问题 :)

首先，java中`TimeZone`和`ZoneId`都是中间大写的，两个词的。
但是，为了命名转换中不出现`time_zone`或`time-zone`，
Wings在配置和数据层，全做一词处理，即`timezone`和`Zoneid`。

同样的处理方式，有时也出现在`DateTime`上。

## 2H.1.日时零值和时区

执行环境和数据库要在同一时区，否则jooq和jdbc在以下过程会自动转换时区，引发问题。

如果服务器和执行环境时区不一致，可以通过以下方式协调。

* 通过wings的参数设置时区 `wings.silencer.i18n.zoneid=Asia/Shanghai`
* java的启动参数 `-Duser.timezone=Asia/Shanghai`
* mysql的jdbc的url参数 `connectionTimeZone=%2B08:00&forceConnectionTimeZoneToSession=true`
* java的代码参数 `TimeZone.setDefault(TimeZone.getTimeZone("Asia/Shanghai"));`

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

* jooq - 使用timestamp作为localDatetime的值，设置preparedStatement
* jdbc - setTimestamp(int parameterIndex, Timestamp x),
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

## 2H.2.数据库和Jvm时区

常用的时区有2中格式，不管那种，都推荐使用稳定时区，如政策不会变，没有夏令时。

* 容易理解的ZoneId形式 - 地理城市 `Asia/Shanghai`，`America/New_York`
* 规则稳定的Offset形式 - 相对于UTC的时差，`UTC`，`+08:00`

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

* connectionTimeZone和forceConnectionTimeZoneToSession同时使用
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

>wings_test?connectionTimeZone=+08:00
>Invalid ID for region-based ZoneId, invalid format:  08:00
