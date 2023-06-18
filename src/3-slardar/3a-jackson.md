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

* @JsonRawValue - number not to string, string not escaped
* @JsonFormat - specify the format
* @JsonIgnore/JsonProperty - ignore the field
* @JsonProperty - rename the field
* @JsonNaming - naming rules
* @JsonRootName(value = "user") - add a root name
* @JsonUnwrapped - without wrapper class
* @JsonSerialize(as=BasicType.class) - output as other
* @JsonView - filter properties with different views (works on RequestMapping)

Avoid global type filters and mixins in general, session-level annotations are recommended.

* Same pojo, different property names for different scenarios, eg. password and secret
* Same pojo with different values for different scenarios, eg. yyyy-MM-dd and MMM-dd,yyyy

For the above scenarios, it is still important to follow the principles of static and strong typing,
and the following suggestions can usually be used

* Own classes, use @JsonView + different getter to distinguish different scenarios
* 3rd classes, using Override subclasses + MapStruct to copy properties
* Custom JsonSerialize or Converter, not recommended
* Custom ResponseBodyAdvice, not recommended

By default configuration, only @JsonView can act on RequestMapping, other annotations should be noted on Pojo.
see,

* [baeldung example](https://www.baeldung.com/jackson-annotations)
* [jackson annotation](https://github.com/FasterXML/jackson-annotations/wiki/Jackson-Annotations)
* [spring customize jackson](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#howto.spring-mvc.customize-jackson-objectmapper)

## 3A.8.Generic in Deserialization

Jackson includes generic types, and parameter types are a necessary skill.

```java
TypeReference ref = new TypeReference<List<Integer>>() { };
// TypeFactory has a rich set of type constructs
JavaType type = mapper.getTypeFactory().constructCollectionType(List.class, Foo.class)
```
