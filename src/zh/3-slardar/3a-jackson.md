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
* java.日时，包括`util.Date`, `sql.Date`, `time.Local*|Zoned*|Instant`
* java.日时，以时间戳形式与js.number互传
* java.日时，都以`yyyy-MM-dd HH:mm:ss`格式与js.string互传
* java.时区，以ZoneId字符串格式与js.string互传
* 对象key，不可以是变量，`{steve:15}`为`{name:'steve',age:15}`

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
