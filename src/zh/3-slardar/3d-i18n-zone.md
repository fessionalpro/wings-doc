---
isOriginal: true
icon: language
category:
  - 鱼人
  - 时区
  - 多国语
---

# 3D.多国语和多时区

在Silencer配置中，所有位于`wings-i18n/`的I18n的消息，都会自动加载。

## 3D.1.加载顺序

通过`LocaleResolver`，按以下优先级，获得当前locale设置。

1. request中被设置的`WINGS.I18N_CONTEXT`
2. query string `locale`, `zoneid`
3. http header `Accept-Language`,`Zone-Id`
4. cookie `Wings-Locale`, `Wings-Zoneid`
5. 登录用户的SecurityContext中获得wings设置
6. 系统默认值

注意：在数据库和配置中`zoneid`视为一个词，而java中`ZoneId`是一个类（I大写），
所以，当从Db中取值，并通过反射赋值时，容易因区分大小写而错过ZoneId的赋值。

`LocaleResolver`作用在`doService`中，是在`doFilter`之后，因此`Filter`中没有Context.

## 3D.2.Locale解析

`WingsLocaleResolver`是一个servlet实现，不支持webflux。

* 用户登录后，自动生成Locale和ZoneId有关的Context
* `SecurityContextUtil`在Mvc层获取相关的Context，由Filter实现
* `WingsTerminalContext`在Service层使用，由TerminalInterceptor实现
* `LocaleZoneIdUtil` 基于 `WingsTerminalContext` 在非Spring Bean中使用
* `LocaleContextHolder` 是SpringMvc的，在Mvc中，无request时使用
* `RequestHelper` 在Mvc中，有request时使用

多时区方面，通过Enum类，自动生成业务上的标准时区，以供解析和使用。
在编码命名上，类型关系和命名约定如下，

* language - 对应 StandardLanguageEnum
* timezone - 对应 StandardTimezoneEnum
* locale - 对应 java.util.Locale
* zoneid - 对应 java.time.ZoneId

在js环境中，用`Intl.DateTimeFormat().resolvedOptions().timeZone`获得时区。
当客户端无法获得zoneid时，可以取得服务器支持的zone及其offset,country自行判断。

## 3D.3.多国语的占位符

JavaBean Validation的`@Valid`验证，支持Unified Expression Language (JSR 341)
使用`${}`访问外部变量，使用`{}`访问annotation内变量，如以下例子

```java
@Size( min = 5, max = 14, message = "{common.email.size}")
# 在 i18n信息中设置
common.email.size=The author email '${validatedValue}' must be between {min} and {max}
```

而在`Message的ResourceBundle`中，默认使用java.text.MessageFormat的数组`{0}`格式。

## 3D.4.项目中I18n实践

项目支持I18n，除了为静态Message定义Code外，更大的工作量在于处理动态的业务消息。
比较常见的如输入参数的检查，运行状态的校验，输出结果的确认等。

### 4a.前置条件检查

```java
// 抛出无堆栈的CodeException
@RequestMapping("/test/code-exception.json")
public String codeException() {
    AssertArgs.isTrue(false, CommonErrorEnum.AssertEmpty1, "args");
    throw new CodeException(false, CommonErrorEnum.AssertEmpty1, "test");
}

// 使用Validation注解
@Data
public static class Ins {
    @NotBlank(message = "{test.name.empty}")
    private String name;
    @Email(message = "{test.email.invalid}")
    private String email;
}

@RequestMapping("/test/binding-error-from.json")
public R<?> bindingErrorFrom(@Valid Ins ins) {
    return R.ok(ins);
}
```

注意，当方法参数中存在 `BindingResult`，则不会抛出异常，表示手工处理。

### 4b.读写分组验证

在Mvc实践中，推荐的模式是，用groups分组，以区分insert和update的验证

```java
// FormData，一个类包括全部字段，比较简洁，但注意使用
// 继承的模式 OutSkuUpd extends OutSkuAdd，比较啰嗦，但强类型
@Data
public class OutSkuForm {
    @NotNull(message = "{form.validate.updateoutsku.id}", groups = {Update.class})
    @Schema(description = "规格id，更新时需要")
    private Long id;
}

// Controller 采用 @Validated 分组
@Operation(summary = "修改出库规格")
@PostMapping("/wh/outsku/update-outsku.json")
public R<Object> updateOutSku(@RequestBody @Validated(value = {Update.class}) OutSkuForm ins) {
    // ...
    return R.OK();
}
```

### 4c.运行时状态检查

预定义CodeEnum，关联Message资源，通过全局的异常处理输出I18n信息

* `AssertState` - 同AssertArgs，抛出无堆栈异常
* `MessageException` - 抛出带有code的无堆栈异常
* `CodeException` - 默认为有堆栈异常
* `I18nString` - 通过json自动转换为String类型输出
* `@JsonI18nString` - 注解字段，实现自动json转换

### 4d.多国语信息设置

参考[多国语信息](../0-wings/0i-i18n-message.md)

## 3D.5.三种DateTime

多时区，要兼顾数据可读性和编码便利性，在slardar中统一约定如下，

* `系统时区` system - 系统运行的时区，其在Jvm，Db上是统一的
* `数据时区` origin - 数据产生的时区，参与者所在的时区
* `用户时区` client - 数据使用者，阅读数据时希望看到的时区

在一般情况下，此三者是统一的，比如都在北京时间`GMT+8`。
在时区不敏感的数据上，一般直接使用LocalDateTime，忽略时区。

在slardar的适用的业务场景中，在业务层统一使用系统时区，用LocalDateTime。
而在Controller层，负责进行系统和用户时区的双向转换，使用ZonedDateTime。

* 时区不敏感或只做本地时间标签的情况，统一使用`LocalDateTime`
* 时区敏感时，在Jackson和RequestParam中自动转换
  - Request时，自动把用户时间调至系统时区
  - Response时，自动把系统时间调至用户时区
* 自动转换类型，目前只有一下3种，其中
  - `LocalDateTime` 默认关闭，不建议转换
  - `ZonedDatetime` 默认关闭，历史兼容性
  - `OffsetDateTime` 默认开启
* 使用`@AutoTimeZone`标记，明确3种日期的转换行为
  - 用在Dto的Field上，可在RequestBody和ResponseBody中自动转换
  - 同Spring的@RequestParam一起作用于Param
* 使用 AutoDtoHelper 在Spring管理外替换Dto属性，目前支持以下注解
  - @AutoDtoAble - 遍历内部属性
  - @AutoTimeZone - 自动转换3种日期
  - @AutoI18nString - 自动转换String或I18nString

注意，因util.Date有缺陷，在wings中默认禁用，必须使用`java.time.*`类。

举例说明，3个时区的不一样，更多测试用例参考 `DateTimeConverterTest.java`

例A：一个在线约课应用，中国学生和纽约老师，约定上课时间。那么，

* 假设系统运行在UTC时间上，即system=`UTC+0`
* 学生和老师client时区，分别为`Asia/Shanghai`和`America/New_York`
* 约课时，需要分别按client显示时间，提高约课体验

例B：一个跨境电商应用，纽约用户，经海外发货仓，在某宝买东西。那么，

* 假设某宝运行在东八区上，即 system=`UTC+8`
* 纽约用户的client=`America/New_York`
* LA的发货仓，即 origin=`America/Los_Angeles`
* 订单信息，会以client时间显示
* 物流信息，会以origin时间显示，一般不做转换
* 统计类信息，一般也会以origin时间显示
