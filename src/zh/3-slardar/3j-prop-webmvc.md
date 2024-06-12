---
isOriginal: true
icon: folder-tree
category:
  - 大鱼
  - 属性
---

# 3J.WebMvc的属性

有关Slardar中提供的Spring WebMvc的基本设置

## 3J.1.wings-cookie-79.properties

以下所有name设置，均为原始名字，即没有prefix和alias之前

### wings.slardar.cookie.prefix

`String=`，Cookie前缀，默认空

### wings.slardar.cookie.alias

`Map<String, String>`，cookie别名，受前缀影响，如

`session`=`o_0`，最后把`session`变为`${prefix}o_0`

### wings.slardar.cookie.coder

`String`=`aes`, cookie编码，默认

* `aes` - aes256
* `b64` - base64
* `nop` - 不加密

相同配置name时，编码优先级 `aes` > `b64` > `nop`

### wings.slardar.cookie.nop

`Set<String>`=`${server.servlet.session.cookie.name}`

### wings.slardar.cookie.b64

`Set<String>=`

### wings.slardar.cookie.aes

`Set<String>=`

### wings.slardar.cookie.http-only

`Map<Boolean, Set<String>>=`

HttpOnly，js无法读取，不设置时不处理

### wings.slardar.cookie.secure

`Map<Boolean, Set<String>>=`

https 下发送，不设置时不处理

### wings.slardar.cookie.domain

`Map<String, Set<String>>=`，为cookie设置指定domain

如 `wings.slardar.cookie.domain[a.com]`=`b,c`，
表示`name`为`b`或`c`的cookie，设置其`domain`为`a.com`

### wings.slardar.cookie.path

`Map<String, Set<String>>=`，为cookie设置指定path

如 `wings.slardar.cookie.path[/admin]`=`b,c`，
表示`name`为`b`或`c`的cookie，设置`path`为`/admin`

## 3J.2.wings-datetime-79.properties

json和bind中，支持更宽松的日期，时间和时区格式。

### wings.slardar.datetime.date.format

`String`=`yyyy[-MM][-dd]`，LocalDate的输出格式

### wings.slardar.datetime.date.parser

`List<String>`，LocalDate输入的解析格式

```text
,yyyy[-][/][.][M][-][/][.][d]\
,[MMMM][MMM][M][-][/][.][d][-][/][.][yyyy][yy]
```

### wings.slardar.datetime.time.format

`String`=`HH[:mm][:ss]`，LocalTime的输出格式

### wings.slardar.datetime.time.parser

`List<String>`，LocalTime输入的解析格式

```text
H[:m][:s][.SSS]
```

### wings.slardar.datetime.datetime.auto

`Boolean`=`false`，LocalDateTime是否自动转换时区

### wings.slardar.datetime.datetime.format

`String`=`yyyy[-MM][-dd][ ][HH][:mm][:ss]`，LocalDateTime的输出格式

### wings.slardar.datetime.datetime.parser

`List<String>`，LocalDate输入的解析格式

```text
,yyyy[-][/][.][M][-][/][.][d][ ]['T'][H][:m][:s][.SSS]\
,[MMMM][MMM][M][-][/][.][d][-][/][.][yyyy][yy][ ]['T'][H][:m][:s][.SSS]
```

### wings.slardar.datetime.zoned.auto

`Boolean`=`false`，ZonedDateTime是否自动转换时区

### wings.slardar.datetime.zoned.format

`String`=`yyyy[-MM][-dd][ ][HH][:mm][:ss][ ][VV]`，ZonedDateTime的输出格式

### wings.slardar.datetime.zoned.parser

`List<String>`，ZonedDateTime输入的解析格式

```text
,yyyy[-][/][.][M][-][/][.][d][ ]['T'][H][:m][:s][.SSS][XXXXX][XXXX][XXX][XX][X]['['][ ][VV][']']\
,[MMMM][MMM][M][-][/][.][d][-][/][.][yyyy][yy][ ]['T'][H][:m][:s][.SSS][XXXXX][XXXX][XXX][XX][X]['['][ ][VV][']']
```

### wings.slardar.datetime.offset.auto

`Boolean`=`false`，OffsetDateTime是否自动转换时区

### wings.slardar.datetime.offset.format

`String`=`yyyy[-MM][-dd][ ][HH][:mm][:ss][ ][xxx]`，OffsetDateTime的输出格式

### wings.slardar.datetime.offset.parser

`List<String>`，OffsetDateTime输入的解析格式

```text
,yyyy[-][/][.][M][-][/][.][d][ ]['T'][H][:m][:s][.SSS][XXXXX][XXXX][XXX][XX][X]['['][ ][VV][']']\
,[MMMM][MMM][M][-][/][.][d][-][/][.][yyyy][yy][ ]['T'][H][:m][:s][.SSS][XXXXX][XXXX][XXX][XX][X]['['][ ][VV][']']
```

### wings.slardar.datetime.clock-offset

`long`=`0`，设置系统时钟偏移的offset毫秒数。

## 3J.3.wings-jackson-79.properties

以下会造成序列化和反序列化不一致。

### wings.slardar.jackson.empty-date

`String`=`1000-01-01`，`空`日期不输出，空表示忽略此功能。

支持LocalDate，LocalDateTime，ZonedDateTime，OffsetDateTime，util.Date

### wings.slardar.jackson.empty-date-offset

`Integer`=12，考虑时区影响，和系统时间相差正负[12]小时内，认为`空`

### wings.slardar.jackson.empty-list

`Boolean`=`false`，当`空`时，是否不输出。

包括Array和java.util.Collection的`空`。第三方不友好，默认关闭，
如spring-boot-admin在js中以`.length`和`key`检查而无前置判断。

### wings.slardar.jackson.empty-map

`Boolean`=`false`，当`空`时，是否不输出，包括java.util.Map。

### wings.slardar.jackson.i18n-result

`Boolean`=`true`，是否处理I18nResult的message

## 3J.4.wings-locale-resolver-79.properties

### Locale或Language

分别通过param，cookie和header的key获得语言

* `wings.slardar.locale.locale-param`=`locale`
* `wings.slardar.locale.locale-cookie`=`Wings-Locale`
* `wings.slardar.locale.locale-header`=`Accept-Language`

### Timezone或Zoneid

分别通过param，cookie和header的key获得时区

* `wings.slardar.locale.zoneid-param`=`zoneid`
* `wings.slardar.locale.zoneid-cookie`=`Wings-Zoneid`
* `wings.slardar.locale.zoneid-header`=`Zone-Id`

## 3J.5.wings-number-79.properties

可定制Number的精度和格式，支持JsonFormat的pattern，
需使用BigDecimal替换Float和Double，避免精度丢失

### wings.slardar.number.integer.format

`String`=`#`，Integer, Long的格式，`空`表示关闭。

千分位用`,`占位，在separator设置中会被正确替换。

### wings.slardar.number.integer.round=FLOOR

`RoundingMode`=`FLOOR`，舍入模式。

### wings.slardar.number.integer.separator

`String`=`,`，当Shape==ANY时，整数位分隔符，如千分位。

### wings.slardar.number.integer.digital

`String`=`auto`，数值以js的string还是number输出

* `auto` - 自动适配，52bit以下number，以上string
* `true` - 强制number，忽略WRITE_NUMBERS_AS_STRINGS
* `false` - 强制string，避免丢失精度

是否忽略WRITE_NUMBERS_AS_STRINGS，强制写number，需要注意format是否兼容。
例如，在js中用bigint，设置为auto时，边界（含）时会自动切换number和string

### wings.slardar.number.floats.format

`String=`，如`#.00`，Float, Double的格式，`空`表示关闭。

千分位用`,`占位，在separator设置中会被正确替换。

### wings.slardar.number.floats.round

`RoundingMode`=`FLOOR`，舍入模式。

### wings.slardar.number.floats.separator

`String`=`,`，当Shape==ANY时，整数位分隔符，如千分位。

### wings.slardar.number.floats.digital

`String`=`false`，默认强制string，避免精度丢失。

### wings.slardar.number.decimal.format

`String=`，如`#.00`，BigDecimal, BigInteger的格式，`空`表示关闭。

千分位用`,`占位，在separator设置中会被正确替换。

### wings.slardar.number.decimal.round

`RoundingMode`=`FLOOR`，舍入模式。

### wings.slardar.number.decimal.separator

`String`=`,`，当Shape==ANY时，整数位分隔符，如千分位。

### wings.slardar.number.decimal.digital

`String`=`false`，默认强制string，避免精度丢失。

## 3J.6.wings-pagequery-79.properties

取代 spring data中的分页。

### wings.slardar.pagequery.page

`Integer`=`1`，默认页数，第一页

### wings.slardar.pagequery.size

`Integer`=`20`，默认每页大小

### wings.slardar.pagequery.page-alias

`List<String>`=`page,pageNumber`，别名

### wings.slardar.pagequery.size-alias

`List<String>`=`size,pageSize`，别名

### wings.slardar.pagequery.sort-alias

`List<String>`=`sort,sortBy`，别名

## 3J.7.wings-passcoder-79.properties

密码的加密和加盐配置

### wings.slardar.passcoder.pass-encoder

`String`=`argon2`，默认加密算法。

支持never|noop|bcrypt|pbkdf2|scrypt|argon2

### wings.slardar.passcoder.pass-decoder

`String`=`never`，默认解密算法。

支持never|noop|bcrypt|pbkdf2|scrypt|argon2

setDefaultPasswordEncoderForMatches，id不匹配时，默认解码算法。

### wings.slardar.passcoder.salt-encoder

`String`=`sha256`，默认加盐算法 sha256|sha1|md5

### wings.slardar.passcoder.time-deviation=30

`Integer`=`30`，BasicPasswordEncoder 时间戳偏差秒数。

## 3J.8.wings-remote-resolver-79.properties

### wings.slardar.remote.inner-ip

`Map<String, String>`，不作为remote ip考虑的内网网段

* `local-127`=`127.`
* `local-192`=`192.`
* `local-0v6`=`0:0:0:0:0:0`
* `local-0v4`=`0.0.0.`

### wings.slardar.remote.ip-header

`Map<String, String>`，使用代理时，通过哪些header获得真实ip

* `Real-IP`=`X-Real-IP`
* `Forwarded-For`=`X-Forwarded-For`

### wings.slardar.remote.agent-header

`Map<String, String>`，用户设备信息头，选择所有信息

* `User-Agent`=`User-Agent`

## 3J.9.wings-session-79.properties

### wings.slardar.session.header-name

`String`=`${server.servlet.session.cookie.name}`

使用header解析session的name，空表示不解析

### wings.slardar.session.cookie-name

`String`=`${server.servlet.session.cookie.name}`

使用cookie解析的session的name，空表示不解析

### wings.slardar.session.cookie-base64

`Boolean`=`false`，是否对session进行base64编码

### wings.slardar.session.cookie-route

`String=`，增加session的jvm route，空表示忽略。

## 3J.A.wings-terminal-79.properties

### wings.slardar.terminal.exclude-patterns

`Map<String, String>`，不需要TerminalInterceptor处理的URL

* `error`=`/error`
* `api`=`/api/**`
* `oauth`=`/oauth/**`

### wings.slardar.terminal.locale-request

`boolean`=`true`，是否从请求获得Locale，而非服务器

### wings.slardar.terminal.timezone-request

`boolean`=`false`，是否从请求获得Timezone，而非服务器
