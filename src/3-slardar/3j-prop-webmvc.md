---
isOriginal: true
icon: folder-tree
category:
  - Slardar
  - Property
---

# 3J.WebMvc Properties

Properties of Spring WebMvc in Slardar

## 3J.1.wings-cookie-79.properties

All the following name settings are the original, that is, without prefix and alias.

### wings.slardar.cookie.prefix

`String=`, Cookie prefix, empty by default.

### wings.slardar.cookie.alias

`Map<String, String>`, cookie alias, affected by the prefix, eg.

`session`=`o_0`, `session` eventually is `${prefix}o_0`

### wings.slardar.cookie.coder

`String`=`aes`, cookie encoding, default

* `aes` - aes256
* `b64` - base64
* `nop` - no encoding

For the same config name, the encoding priority `aes` > `b64` > `nop`

### wings.slardar.cookie.nop

`Set<String>`=`${server.servlet.session.cookie.name}`

### wings.slardar.cookie.b64

`Set<String>=`

### wings.slardar.cookie.aes

`Set<String>=`

### wings.slardar.cookie.http-only

`Map<Boolean, Set<String>>=`

HttpOnly, js cannot be read, do not process if not set

### wings.slardar.cookie.secure

`Map<Boolean, Set<String>>=`

transfer by https, do not process if not set

### wings.slardar.cookie.domain

`Map<String, Set<String>>=`, bind domain to cookie,

eg. `wings.slardar.cookie.domain[a.com]`=`b,c`,
means cookie with `name` of `b` or `c`, its `domain` is `a.com`

### wings.slardar.cookie.path

`Map<String, Set<String>>=`, bind cookie to path

eg. `wings.slardar.cookie.path[/admin]`=`b,c`,
means cookie with `name` of `b` or `c`, its `path` is `/admin`

## 3J.2.wings-datetime-79.properties

In json and bind, more relaxed date, time and timezone formats are supported.

### wings.slardar.datetime.date.format

`String`=`yyyy[-MM][-dd]`, LocalDate output format

### wings.slardar.datetime.date.parser

`List<String>`, LocalDate input format of parsing

```text
,yyyy[-][/][.][M][-][/][.][d]\
,[MMMM][MMM][M][-][/][.][d][-][/][.][yyyy][yy]
```

### wings.slardar.datetime.time.format

`String`=`HH[:mm][:ss]`, LocalTime output format

### wings.slardar.datetime.time.parser

`List<String>`, LocalTime input format of parsing

```text
H[:m][:s][.SSS]
```

### wings.slardar.datetime.datetime.auto

`Boolean`=`false`, LocalDateTime whether to auto switch timezones

### wings.slardar.datetime.datetime.format

`String`=`yyyy[-MM][-dd][ ][HH][:mm][:ss]`, LocalDateTime output format

### wings.slardar.datetime.datetime.parser

`List<String>`, LocalDate input format of parsing

```text
,yyyy[-][/][.][M][-][/][.][d][ ]['T'][H][:m][:s][.SSS]\
,[MMMM][MMM][M][-][/][.][d][-][/][.][yyyy][yy][ ]['T'][H][:m][:s][.SSS]
```

### wings.slardar.datetime.zoned.auto

`Boolean`=`false`, ZonedDateTime whether to auto switch timezones

### wings.slardar.datetime.zoned.format

`String`=`yyyy[-MM][-dd][ ][HH][:mm][:ss][ ][VV]`, ZonedDateTime output format

### wings.slardar.datetime.zoned.parser

`List<String>`, ZonedDateTime input format of parsing

```text
,yyyy[-][/][.][M][-][/][.][d][ ]['T'][H][:m][:s][.SSS][XXXXX][XXXX][XXX][XX][X]['['][ ][VV][']']\
,[MMMM][MMM][M][-][/][.][d][-][/][.][yyyy][yy][ ]['T'][H][:m][:s][.SSS][XXXXX][XXXX][XXX][XX][X]['['][ ][VV][']']
```

### wings.slardar.datetime.offset.auto

`Boolean`=`false`, OffsetDateTime whether to auto switch timezones

### wings.slardar.datetime.offset.format

`String`=`yyyy[-MM][-dd][ ][HH][:mm][:ss][ ][xxx]`, OffsetDateTime output format

### wings.slardar.datetime.offset.parser

`List<String>`, OffsetDateTime input format of parsing

```text
,yyyy[-][/][.][M][-][/][.][d][ ]['T'][H][:m][:s][.SSS][XXXXX][XXXX][XXX][XX][X]['['][ ][VV][']']\
,[MMMM][MMM][M][-][/][.][d][-][/][.][yyyy][yy][ ]['T'][H][:m][:s][.SSS][XXXXX][XXXX][XXX][XX][X]['['][ ][VV][']']
```

### wings.slardar.datetime.clock-offset

`long`=`0`, set the offset to the system clock in milliseconds.

## 3J.3.wings-jackson-79.properties

The following will cause serialization and deserialization inconsistencies.

### wings.slardar.jackson.empty-date

`String`=`1000-01-01`, `empty` date is not output, empty means ignore this.

support LocalDate, LocalDateTime, ZonedDateTime, OffsetDateTime, util.Date

### wings.slardar.jackson.empty-date-offset

`Integer`=12, considering the time zone offset, and the system time difference
within plus or minus 12 hours, it is treated as `empty`.

### wings.slardar.jackson.empty-list

`Boolean`=`false`, whether to output `empty` list.

Includes `empty` of Array and java.util.Collection. disabled by default for 3rd unfriendly.
eg. spring-boot-admin's js use `.length` and `key` to check value existence.

### wings.slardar.jackson.empty-map

`Boolean`=`false`, whether to output `empty` map, includes java.util.Map

### wings.slardar.jackson.i18n-result

`Boolean`=`true`, whether to handle message of I18nResult

### wings.slardar.jackson.i18n-result-compatible

`Integer=`, whether to set 1st error to message in R.

* 0, null - disable
* 1 - only message
* 2 - message, i18nCode and i18nArgs

## 3J.4.wings-locale-resolver-79.properties

### Locale or Language

Get the language by key from param, cookie and header respectively

* `wings.slardar.locale.locale-param`=`locale`
* `wings.slardar.locale.locale-cookie`=`Wings-Locale`
* `wings.slardar.locale.locale-header`=`Accept-Language`

### Timezone or Zoneid

Get the timezone by key from param, cookie and header respectively

* `wings.slardar.locale.zoneid-param`=`zoneid`
* `wings.slardar.locale.zoneid-cookie`=`Wings-Zoneid`
* `wings.slardar.locale.zoneid-header`=`Zone-Id`

## 3J.5.wings-number-79.properties

Customizable precision and format of Number, support JsonFormat pattern.
Must use BigDecimal instead of Float and Double to avoid precision loss.

### wings.slardar.number.integer.format

`String`=`#`, format of Integer, Long. `empty` means disable.

The thousandth separator uses `,`, which can be replaced to other
at runtime according to the separator setting.

### wings.slardar.number.integer.round=FLOOR

`RoundingMode`=`FLOOR`, rounding mode.

### wings.slardar.number.integer.separator

`String`=`,`, When Shape==ANY, integer separator, eg. thousandths.

### wings.slardar.number.integer.digital

`String`=`auto`, whether the value is output as a string or a number in js

* `auto` - auto-match, number below 52bit, string above
* `true` - force number, ignore WRITE_NUMBERS_AS_STRINGS
* `false` - force string, avoid loss of precision.

Whether to ignore WRITE_NUMBERS_AS_STRINGS, force to write number, need to pay attention to the
format compatibility. For example, using bigint in js and setting is auto, the boundary (inclusive)
will automatically switch between number and string.

### wings.slardar.number.floats.format

`String=`, eg. `#.00`, format of Float, Double. `empty` means disable.

The thousandth separator uses `,`, which can be replaced to other
at runtime according to the separator setting.

### wings.slardar.number.floats.round

`RoundingMode`=`FLOOR`, rounding mode.

### wings.slardar.number.floats.separator

`String`=`,`, When Shape==ANY, integer separator, eg. thousandths.

### wings.slardar.number.floats.digital

`String`=`false`, force string by default, to avoid precision loss.

### wings.slardar.number.decimal.format

`String=`, eg. `#.00`, format of BigDecimal, BigInteger. `empty` means disable.

The thousandth separator uses `,`, which can be replaced to other
at runtime according to the separator setting.

### wings.slardar.number.decimal.round

`RoundingMode`=`FLOOR`, rounding mode.

### wings.slardar.number.decimal.separator

`String`=`,`, When Shape==ANY, integer separator, eg. thousandths.

### wings.slardar.number.decimal.digital

`String`=`false`, force string by default, to avoid precision loss.

## 3J.6.wings-pagequery-79.properties

Replace pagination in spring data.

### wings.slardar.pagequery.page

`Integer`=`1`, page number, default 1st page.

### wings.slardar.pagequery.size

`Integer`=`20`, page size

### wings.slardar.pagequery.page-alias

`List<String>`=`page,pageNumber`, alias of page number

### wings.slardar.pagequery.size-alias

`List<String>`=`size,pageSize`, alias of page size

### wings.slardar.pagequery.sort-alias

`List<String>`=`sort,sortBy`, alias of sort

## 3J.7.wings-passcoder-79.properties

Password encryption and salting.

### wings.slardar.passcoder.pass-encoder

`String`=`argon2`, default password encoder id.

support never|noop|bcrypt|pbkdf2|scrypt|argon2

### wings.slardar.passcoder.pass-decoder

`String`=`never`, default password decoder id.

support never|noop|bcrypt|pbkdf2|scrypt|argon2

setDefaultPasswordEncoderForMatches, If id does not match, use the default decoder.

### wings.slardar.passcoder.salt-encoder

`String`=`sha256`, default salting algorithm. support sha256|sha1|md5

### wings.slardar.passcoder.time-deviation=30

`Integer`=`30`, The max seconds of timestamp deviation of BasicPasswordEncoder.

## 3J.8.wings-remote-resolver-79.properties

### wings.slardar.remote.inner-ip

`Map<String, String>`, intranet segments not considered as remote ip

* `local-127`=`127.`
* `local-192`=`192.`
* `local-0v6`=`0:0:0:0:0:0`
* `local-0v4`=`0.0.0.`

### wings.slardar.remote.ip-header

`Map<String, String>`, which header to get the real ip when behind proxy.

* `Real-IP`=`X-Real-IP`
* `Forwarded-For`=`X-Forwarded-For`

### wings.slardar.remote.agent-header

`Map<String, String>`, which headers (use all) to get device info.

* `User-Agent`=`User-Agent`

## 3J.9.wings-session-79.properties

### wings.slardar.session.header-name

`String`=`${server.servlet.session.cookie.name}`

Use which name of header to resolve the session, empty means disable.

### wings.slardar.session.cookie-name

`String`=`${server.servlet.session.cookie.name}`

Use which name of cookie to resolve the session, empty means disable.

### wings.slardar.session.cookie-base64

`Boolean`=`false`, whether to base64 encode the session.

### wings.slardar.session.cookie-route

`String=`, add jvm route to session, empty means disable.

## 3J.A.wings-terminal-79.properties

### wings.slardar.terminal.exclude-patterns

`Map<String, String>`, URLs not processed by TerminalInterceptor.

* `error`=`/error`
* `api`=`/api/**`
* `oauth`=`/oauth/**`

### wings.slardar.terminal.include-patterns

`Map<String, String>`, exclude takes precedence over include

### wings.slardar.terminal.locale-request

`boolean`=`true`, whether to set locale from request first than server.

### wings.slardar.terminal.timezone-request

`boolean`=`false`, whether to set timezone from request first than server.
