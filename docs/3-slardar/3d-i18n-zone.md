---
isOriginal: true
icon: language
category:
  - 鱼人
  - 时区
  - 多国语
---

# 3D.多国语和多时区

在silence的配置中，所有I18n有个的资源，放置在 wigns-i18n/即可自动加载

## 3D.1.加载顺序

通过`LocaleContextResolver`，按以下优先级，获得当前locale设置。

1. request中被设置的`WINGS.I18N_CONTEXT`
2. query string `locale`, `zoneid`
3. http header `Accept-Language`,`Zone-Id`
4. cookie `Wings-Locale`, `Wings-Zoneid`
5. 登录用户的SecurityContext中获得wings设置
6. 系统默认值

注意：在数据库和配置中`zoneid`视为一个词，而java中`ZoneId`是一个类（I大写），
所以，当从Db中取值，并通过反射赋值时，容易因区分大小写而错过ZoneId的赋值。

## 3D.2.Locale解析

此处为行为约定，基于servlet或webflux的具体实现。`WingsLocaleResolver`是一个实现。

用户登录后，自动生成时区和I18n有关的Context。 通过`SecurityContextUtil`获得相关的Context。

`WingsTerminalContext.Context`操作终端有关的，通过TerminalInterceptor完成。

多时区方面，通过enum类，自动生成业务上的标准时区，以供解析和使用。

在编码命名上，类型关系和命名约定如下

* language - 对应 StandardLanguageEnum
* timezone - 对应 StandardTimezoneEnum
* locale - 对应 java.util.Locale
* zoneid - 对应 java.time.ZoneId

在js环境中，可以用`Intl.DateTimeFormat().resolvedOptions().timeZone`获得。
当client端无法获得zoneid时，可以取得服务器支持的zone及其offset,country自行判断。

## 3D.3.多国语I18n的格式

在@Valid的JavaBean Validation验证中， 支持Unified Expression Language (JSR 341)
使用`${}`访问外部变量，使用`{}`范围annotation内变量，如以下例子

```java
@Size( min = 5, max = 14, message = "{common.email.size}")
# 在 i18n信息中设置
common.email.size=The author email '${validatedValue}' must be between {min} and {max} characters long
```

而在 Message的ResourceBundle中，默认使用java.text.MessageFormat的数组`{0}`格式。

## 3D.4.项目中I18n实践

项目支持I18n，除了为静态Message定义Code外，更大的工作量在于处理动态的业务消息。
比较常见的如输入参数的检查，运行状态的校验，输出结果的确认等。

### 前置条件检查

```java
// 抛出无堆栈的CodeException
@RequestMapping("/test/code-exception.json")
public String codeException() {
    ArgsAssert.isTrue(false, CommonErrorEnum.AssertEmpty1,"args");
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
    log.info(">>>" + ins.toString());
    return R.okData(ins);
}
```

### 运行时状态检查

预定义CodeEnum，关联Message资源，通过全局的异常处理输出I18n信息

* `StateAssert` - 同ArgsAssert，抛出无堆栈异常
* `MessageException` - 抛出带有code的无堆栈异常
* `CodeException` - 默认为有堆栈异常
* `I18nString` - 通过json自动转换为String类型输出
* `@JsonI18nString` - 注解字段，实现自动json转换

## 3D.5.三种DateTime

多时区，要兼顾数据可读性和编码便利性，在slardar中统一约定如下。

* `系统时区` - 系统运行时区，其在Jvm，Db上是统一的。
* `数据时区` - 数据流动时，参与者所在的时区。
* `用户时区` - 数据使用者，阅读数据时希望看到的时区。

在一般情况下，此三者是统一的，比如都在北京时间，GMT+8。
在时区不敏感的数据上，一般直接使用LocalDateTime，忽略时区。

在slardar的适用的业务场景中，在业务层统一使用系统时区，用LocalDateTime。
而在Controller层，负责进行系统和用户时区的双向转换，使用ZonedDateTime。

* 时区不敏感或只做本地时间标签的情况，统一使用LocalDateTime，
* 时区敏感时，在Jackson和RequestParam中自动转换。
  - Request时，自动把用户时间调至系统时区。
  - Response时，自动把系统时间调至用户时区。
* 自动转换类型，目前只有一下2中，其中。
  - ZonedDatetime 默认关闭
  - OffsetDateTime 默认开启

注意，因util.Date的缺陷，在wings中，默认禁用其使用，需要使用java.time.*
