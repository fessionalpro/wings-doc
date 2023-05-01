---
isOriginal: true
icon: json
category:
  - Slardar
  - Convention
  - Json
---

# 3A.Jackson Convention

Conversion of common data types in Mvc server.

## 3A.1.Common Type Conventions

Given the differences between java and js, data transfer, and functionality, the convention is as follows.

* float number to java.BigDecimal and js.string to pass each other
* java.null not to pass each other in Json
* java.integer, interpass with js.number/string
* java.datetime, including `util.Date`,`sql.Date`,`time.Local*|Zoned*|Instant`
* java.datetime, in timestamp format with js.number
* java.datetime, in `yyyy-MM-dd HH:mm:ss` format with js.string
* java.timezone, both in ZoneId string format with js.string

## 3A.2.Lost Precision and Trait

Because of the character of js, there will be precision and character (type, sorting, etc.) loss problems,
such as the key of object may lose the original order.

* It is better to have only 2 basic data types in Json: boolean and string
* Js does not handle numeric calculations with precision, and should only be
  responsible for displaying the results of server-side calculations.
* Due to the special nature of time, there are timezones and daylight saving time,
  readability is preferred when guaranteeing accuracy
* 53bits of long, must use string, because IEE754 cannot be correctly represented
* integer and long, use number by default, consider typescript compatibility
* Ensure jsr310 format compatibility, e.g. rely on `jackson-datatype-jsr310`
* ZoneId should prefer `IANA TZDB` format, e.g. `America/New_York`
* Serialization and deserialization process with time zone (`Z`) will lose daylight saving time information

Note: The property name prefix cannot be a single letter, Wings recommends more than 3 letters.
Because `sCount` will lead to parsing errors, see test OkHttpClientHelperTest.testPostBad

## 3A.3.I18n of Content

Auto I18n conversion of content by annotation and type to string output.

* `I18nString` type is automatically converted
* `CharSequence` with `@JsonI18nString` annotation is converted as message_code
* `@JsonI18nString(false)` disables auto-conversion
* `R.I<T>` is the common return type and will auto replace `message` with i18n when `i18nCode` is present,
  Auto-conversion uses the injected `messageSource` and `WingsI18nContext` to get the appropriate language

## 3A.4.DateTime Format

Supports the following date format customizations in java.time, including Json and Spring.

* LocalDate, LocalTime, LocalDateTime, multiple input formats, single output format customization.
* ZonedDateTime, same as `Local*` support auto-switching to user timezone, off by default.
* OffsetDateTime, same as `Local* support auto-switching to user timezone, on by default

For example, the default configuration of wings-datetime-79.properties in the LocalDate support,

```properties
# output in 2021-01-30 format
wings.slardar.datetime.date.format=yyyy[-MM][-dd]
# input support 2021-01-30 and Jan/30/2021, etc.
wings.slardar.datetime.date.parser=\
,yyyy[-][/][.][M][-][/][.][d]\
,[MMMM][MMM][M][-][/][.][d][-][/][.][yyyy][yy]
# see SmartFormatter.java testcase
```

## 3A.5.Number Format

Int,Long,Float,Double,BigDecimal support (Json) customization of output format and rounding format.
Note that in the actual project, Float and Double should be avoided and BigDecimal should be used.
Within Wings convention, the only commonly Number types should be Int, Long and BigDecimal.

For example, the default configuration of Decimal support in wings-number-79.properties is,

```properties
# Keep 2 decimal places, Floor mode
wings.slardar.number.decimal.format=#.00
wings.slardar.number.decimal.round=FLOOR
wings.slardar.number.decimal.separator=,
```

You can also set, according to Chinese custom, every 4 digits separated by `_`, add CNY symbol,

```properties
wings.slardar.number.decimal.format=￥,####.00
wings.slardar.number.decimal.separator=_
# see DecimalFormatTest.java
```

`digital=auto` auto switches between number and string when the JS numeric value exceeds
Number.M##_SAFE_INTEGER. By default configuration, `auto` is used only for int32 and int64,
need to be used with caution, check type or disable `auto`(`false`)

## 3A.6.Empty Data Handling

This feature is enabled by default and will cause inconsistencies in the serialization
and deserialization. Must handle the difference yourself.

* Empty date is considered null, not output to avoid a lot of 1000-01-01 data
* Array/Collection/Map is not output if it is empty

## 3A.7.Common Jackson Annotations

* @JsonRawValue - number不变字符串，字符串不转义
* @JsonFormat - 指定格式
* @JsonIgnore/JsonProperty - 忽略该字段
* @JsonProperty - 重命名
* @JsonNaming - 命名规则
* @JsonRootName(value = "user") - 增加一个头key
* @JsonUnwrapped - 干掉包装类
* @JsonSerialize(as=BasicType.class) - 以别人的样子输出
* @JsonView - 以不同视图过滤属性（可作用在RequestMapping）

通常要避免全局类型的Filter和MixIn，推荐Session级的注解。

* 同一pojo，不同场景的属性名不同，比如password和secret
* 同一pojo，不同场景的属性值不同，比如yyyy-MM-dd和MMM-dd,yyyy

对于以上场景，仍然要遵循静态性和强类型原则，通常可以采用以下建议，

* 自己的类，使用@JsonView + 不同的getter区分不同场景
* 第三方类，使用Override子类 + MapStruct复制属性
* 自定义JsonSerialize或Converter，不推荐
* 自定义 ResponseBodyAdvice，不推荐

默认配置下，仅有@JsonView可作用于RequestMapping，其他注解要注到Pojo上。参考资料，

* [baeldung 示例](https://www.baeldung.com/jackson-annotations)
* [jackson注解](https://github.com/FasterXML/jackson-annotations/wiki/Jackson-Annotations)
* [spring定制jackson](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#howto.spring-mvc.customize-jackson-objectmapper)

## 3A.8.反序列化泛型

Jackson中涉及到泛型，参数类型，必备技能

```java
TypeReference ref = new TypeReference<List<Integer>>() { };
// TypeFactory 中有很丰富的类型构造
JavaType type = mapper.getTypeFactory().constructCollectionType(List.class, Foo.class)
```
