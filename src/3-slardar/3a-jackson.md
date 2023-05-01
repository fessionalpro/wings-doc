---
isOriginal: true
icon: json
category:
  - 鱼人
  - 约定
  - Json
---

# 3A.Jackson格式约定

在Mvc对外服务时，约定常见数据类型的转换关系。

## 3A.1.常用类型约定

考虑到java和js的差异，数据传递和功能上，约定如下，

* 浮点数值，以java.BigDecimal与js.string互传
* java.null 不在Json中互传
* java.整数，与js.number/string互传
* java.日时，包括`util.Date`,`sql.Date`,`time.Local*|Zoned*|Instant`
* java.日时，以时间戳形式与js.number互传
* java.日时，都以`yyyy-MM-dd HH:mm:ss`格式与js.string互传
* java.时区，以ZoneId字符串格式与js.string互传

## 3A.2.精度及特性丢失

因为js的特殊性，会出现精度和特性（类型，排序等）丢失问题，比如object的key可丢失原顺序。

* Json中最好只有2种基本数据类型：boolean,string
* Js不处理有精度要求的数值计算，只应负责显示服务器端计算结果
* 因为时间的特殊性，还有时区和夏令时，在保证精度下可读性优先
* 53bits位的long，必须使用string，因为IEE754无法正确表示
* integer和long，默认使用number，考虑typescript兼容性
* 确保jsr310格式兼容，如依赖`jackson-datatype-jsr310`
* ZoneId应首选`IANA TZDB`格式，如`America/New_York`
* 带时区(`Z`)的序列化与反序列化过程，会丢失夏令时信息

注意：属性名前缀不可以单字母，wings规范建议3字母以上。
因为`sCount`会导致解析错误，见测试 OkHttpClientHelperTest.testPostBad

## 3A.3.内容的国际化

通过注解和类型自动对内容进行i18n转换，以字符串输出。

* `I18nString`类型会自动转换
* `@JsonI18nString`注解的`CharSequence`当做message_code转化
* `@JsonI18nString(false)`可以关闭自动转换
* `R.I<T>`为常用返回值类型，当存在`i18nCode`时，会用i18n信息自动替换`message`
  自动转化使用注入的`messageSource`和`WingsI18nContext`获得相应语言

## 3A.4.日期时间的格式

支持java.time中以下日期格式的定制，包括Json和Spring。

* LocalDate，LocalTime，LocalDateTime，多个输入格式，单个输出格式定制。
* ZonedDateTime，同`Local*`功能。可支持自动切换到用户时区，默认关闭。
* OffsetDateTime，同`Local*`功能，可支持自动切换到用户时区，默认打开

例如，默认配置 wings-datetime-79.properties 中的LocalDate支持

```properties
# 输出时以 2021-01-30格式
wings.slardar.datetime.date.format=yyyy[-MM][-dd]
# 输入的时候，支持 2021-01-30 和 Jan/30/2021等多种
wings.slardar.datetime.date.parser=\
,yyyy[-][/][.][M][-][/][.][d]\
,[MMMM][MMM][M][-][/][.][d][-][/][.][yyyy][yy]
# 参考 SmartFormatter.java 测试
```

## 3A.5.数字的格式

对Int,Long,Float,Double,BigDecimal支持（Json）输出时格式和舍入格式的定制
需要注意的是，实际项目中，应该避免使用Float和Double，应该使用BigDecimal。
在wings约定内，常用的Number类型，应该只有Int，Long和BigDecimal。

例如，默认配置 wings-number-79.properties 中的Decimal支持，

```properties
# 以Floor方式，保留2位小数
wings.slardar.number.decimal.format=#.00
wings.slardar.number.decimal.round=FLOOR
wings.slardar.number.decimal.separator=,
```

也可以设置，按中国人习惯，每4位用`_`分隔，增加CNY符号

```properties
wings.slardar.number.decimal.format=￥,####.00
wings.slardar.number.decimal.separator=_
# 参考 DecimalFormatTest.java
```

当JS场景数字value超越 Number.M##_SAFE_INTEGER时，`digital=auto`自动切换number和string。
默认配置中，仅对int32和int64使用了auto，需要谨慎使用，检查类型或关闭auto(false)

## 3A.6.空Empty数据处理

此功能默认开启，会造成正反序列化的不一致。需要自行处理差异

* 日期empty视为null，不输出，避免出现很多1000-01-01的数据
* array/Collection/Map为empty时，不输出

## 3A.7.常用Jackson注解

* @JsonRawValue - number is not to string, string is not escaped
* @JsonFormat - specify the format
* @JsonIgnore/JsonProperty - ignore the field
* @JsonProperty - rename the field
* @JsonNaming - naming rules
* @JsonRootName(value = "user") - add a root key
* @JsonUnwrapped - no wrapper class
* @JsonSerialize(as=BasicType.class) - output as something else
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
