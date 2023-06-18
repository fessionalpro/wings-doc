---
isOriginal: true
icon: time
category:
  - Faceless
  - Time
  - Convension
---

# 2H.Datetime and Timezone

Database related time, timezone, zero-value conventions.

`TimeZone` or `timezone`?, upper `Z` or lower `z`, it's a question :)

First of all, `TimeZone` and `ZoneId` in java are both capitalized in the middle, they are two words combined.
However, to avoid having `time_zone` or `time-zone` in the name conversion, Wings does all the word processing
for `timezone` and `Zoneid` at the config and data layer.

The same treatment is sometimes applied to `DateTime`.

## 2H.1. Zero Daytime and Timezone

The execution environment and the database should be in the same timezone, otherwise jooq and jdbc
will automatically switch timezone during the following process and cause problems.

If timezones are not the same, you can coordinate them in the following way.

* Set the timezone through  wings config `wings.silencer.i18n.zoneid=Asia/Shanghai`
* java's startup parameter `-Duser.timezone=Asia/Shanghai`
* url parameter for mysql jdbc `-connectionTimeZone=%2B08:00&forceConnectionTimeZoneToSession=true`
* java hardcode parameter `TimeZone.setDefault(TimeZone.getTimeZone("Asia/Shanghai"));`

```properties
wings.silencer.i18n.zoneid=Asia/Shanghai
# Frequently used jdbc parameters
spring.datasource.url=jdbc:mysql://localhost:3306/wings_example\
  ?autoReconnect=true&useSSL=false&allowPublicKeyRetrieval=true\
  &useUnicode=true&characterEncoding=UTF-8\
  &connectionTimeZone=Asia/Shanghai
```

The cause of the problem, currently, is the jdbc and timestamp history problems
(after wings 210  with mysql8, the problem has been fixed)

* jooq - convert localDatetime to timestamp, then pass to preparedStatement
* jdbc - setTimestamp(int parameterIndex, Timestamp x),
  the JDBC driver uses the time zone of the virtual machine
  to calculate the date and time of the timestamp in that time zone.

The following SQL can examine the DB execution on the mysql client.

```sql
--  check timezone of system, server, session 
SELECT @@system_time_zone,  @@global.time_zone, @@session.time_zone;
-- @@system_time_zone, @@global.time_zone, @@session.time_zone
-- UTC, Asia/Shanghai, Asia/Shanghai

-- mysql exec log (UTC)
select `id` from `win_user` where `delete_dt` <= '0999-12-31 16:00:00.0';
-- jooq sql log (GMT+8)
select `id` from `win_user` where `delete_dt` <= '1000-01-01 00:00:00.0';

-- turn on log, argument is blob
SET GLOBAL log_output = 'TABLE';SET GLOBAL general_log = 'ON';
SELECT * from mysql.general_log ORDER BY event_time DESC;
-- turn off log and clean all
SET GLOBAL log_output = 'TABLE'; SET GLOBAL general_log = 'OFF';
truncate table mysql.general_log;
```

The session time zone setting affects display and storage of time values that are zone-sensitive.
This includes the values displayed by functions such as NOW() or CURTIME(),
and values stored in and retrieved from TIMESTAMP columns. Values for TIMESTAMP columns are converted
from the session time zone to UTC for storage, and from UTC to the session time zone for retrieval.

For mysql, NOW(fsp) is recommended, as it is short and cached, SYSDATE(fsp) is not necessary, see,

* <https://dev.mysql.com/doc/refman/8.0/en/time-zone-support.html#time-zone-variables>
* <https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_now>
* <https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-configuration-properties.html>
* <https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-connp-props-datetime-types-processing.html>

## 2H.2.Timezone of DB and Jvm

There are 2 types of timezones, whichever type, it is recommended to use stable time zones,
such as stable policies  and without daylight saving time.

* geographic ZoneId - `Asia/Shanghai`, `America/New_York`
* Rule Offset - time offset to UTC, `UTC`, `+08:00`

Wings uses DatabaseChecker to check whether the following ② ③ ④ are consistent,
it is recommended that they are all consistent.

* ①system_time_zone - mysql host machine
* ②time_zone - mysql current time zone
* ③connectionTimeZone - jdbc connectionTimeZone/serverTimezone
* ④jvm TimeZone - jvm DefaultTimeZone
* ⑤host TimeZone - java host machine

Among them, ③ is only for jdbc, similar to session timezone, but more powerful than `SET time_zone = timezone`.
If ③ and ④ are consistent, it does not affect the usage, but in the non-wings environment,
if ③ is not set will cause mysql to use ② by default, there will be a timezone problem.

Be aware of the timezone when using NOW() and TIMESTAMP, they are affected by ③.

> The session time zone setting affects display and storage of time values that are zone-sensitive.
> This includes the values displayed by functions such as NOW() or CURTIME(),
> and values stored in and retrieved from TIMESTAMP columns.
> Values for TIMESTAMP columns are converted from the session time zone to UTC for storage,
> and from UTC to the session time zone for retrieval.

Try using DATE, TIME, DATETIME, they are timezone independent.

> The session time zone setting does not affect values displayed by functions such as UTC_TIMESTAMP()
> or values in DATE, TIME, or DATETIME columns. Nor are values in those data types stored in UTC;
> the time zone applies for them only when converting from TIMESTAMP values.
> If you want locale-specific arithmetic for DATE, TIME, or DATETIME values,
> convert them to UTC, perform the arithmetic, and then convert back.

The above are attention to the database, while the following are the points in the jdbc and java systems.

* connectionTimeZone and forceConnectionTimeZoneToSession are used together
* Offset form is recommended for connectionTimeZone , `UTC`, `-40:00`, `+80:00`.
* In the jdbc url, you need to escape `+` to `%2B08:00` for `+80:00`
* ZoneId form is for business side, and Offset form is for mysql configuration.

connectionTimeZone parameter (before 8.0 is serverTimezone) can coordinate the time zone of Jvm and Mysql.
Using connectionTimeZone alone will not change the session-level time_zone.
You must use forceConnectionTimeZoneToSession to achieve the effect of consistent session and jdbc.

Although the above settings can meet the project requirements, the unified timezone should be preferred
because the scope of action is not as stable and reliable as the unified timezone.
In addition, in mysql configuration, it is recommended to use offset format timezone,
while the business side uses ZoneId format.

When configuring JdbcUrl, if `+` is used (as shown below), a DateTimeException will occur
because `+` identifies a space in the URL. It must be escaped to `%2B`, i.e. the correct format
is connectionTimeZone=%2B08:00

>wings?connectionTimeZone=+08:00
>Invalid ID for region-based ZoneId, invalid format:  08:00
