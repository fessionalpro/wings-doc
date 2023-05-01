---
isOriginal: true
icon: language
category:
  - Slardar
  - Timezone
  - I18n
---

# 3D.Multiple Time and Lang

In Silencer configuration, all I18n messages located in `wigns-i18n/` are automatically loaded.

## 3D.1.Loading Order

With `LocaleContextResolver`, the current locale are set in the following order of priority.

1. the `WINGS.I18N_CONTEXT` attr in the request
2. query string `locale`, `zoneid`
3. http header `Accept-Language`, `Zone-Id`
4. cookie `Wings-Locale`, `Wings-Zoneid`
5. login user's SecurityContext to get Wings settings
6. system default value

Note: `zoneid` is a word in DB and config, while `ZoneId` is a class (I capitalized) in java.
So, when selecting from Db and geting it by reflection, it is easy to miss the assignment of
ZoneId due to case sensitive.

## 3D.2.Locale Resolver

`WingsLocaleResolver` is a servlet implementation and does not support webflux.

* After user login, Locale and ZoneId is automatically generated in the Context
* `SecurityContextUtil` gets the Context in the Mvc layer, implemented by Filter
* `WingsTerminalContext` is used in the Service layer, implemented by TerminalInterceptor

For multiple timezones, the Enum is used to automatically generate the standard timezones to parse and use.
In terms of encoding naming, the type relationships and naming conventions are as follows.

* language - corresponds to StandardLanguageEnum
* timezone - corresponds to StandardTimezoneEnum
* locale - corresponds to java.util.
* zoneid - corresponds to java.time.

In js environment, use `Intl.DateTimeFormat().resolvedOptions().timeZone` to get the timezone.
If the client cannot get the zoneid, it can get the zone info from server,
use its offset, country to determine by itself.

## 3D.3.I18n Placeholder

`@Valid` of JavaBean Validation supports the Unified Expression Language (JSR 341).
Use `${}` to access external variables and `{}` to access variables within annotation,
as in the following example

```java
@Size( min = 5, max = 14, message = "{common.email.size}")
# Set in the i18n message
common.email.size = The author email '${validatedValue}' must be between {min} and {max}
```

And in `Message's ResourceBundle`, it use the array `{0}` format of java.text by default.

## 3D.4.I18n Practice

For I18n supported project , in addition to defining Code for static Message, the greater workload is
handling dynamic business messages. The more common ones are such as input parameter checking,
execution state checking, output result confirmation, etc.

### Pre-condition check

```java
// throw stackless CodeException
@RequestMapping("/test/code-exception.json")
public String codeException() {
    ArgsAssert.isTrue(false, CommonErrorEnum.AssertEmpty1, "args");
    throw new CodeException(false, CommonErrorEnum.AssertEmpty1, "test");
}

// use Validation annotation
@Data
public static class Ins {
    @NotBlank(message = "{test.name.empty}")
    private String name;
    @Email(message = "{test.email.invalid}")
    private String email;
}

@RequestMapping("/test/binding-error-from.json")
public R<?> bindingErrorFrom(@Valid Ins ins) {
    return R.okData(ins);
}
```

### R/W Group Verification

In Mvc practice, the recommended pattern is to use groups to distinguish between insert and update validation

```java
// FormData, containing all fields, more concise, but note the use of
// Inherited pattern OutSkuUpd extends OutSkuAdd, verbose but typesafe
@Data
public class OutSkuForm {
    @NotNull(message = "{form.validate.updateoutsku.id}", groups = {Update.class})
    @Schema(description = "Spec id, required for updates")
    private Long id;
}

// Controller use @Validated group
@Operation(summary = "modify Spec")
@PostMapping("/wh/outsku/update-outsku.json")
public R<Object> updateOutSku(@RequestBody @Validated(value = {Update.class}) OutSkuForm ins) {
    // ...
    return R.ok();
}
```

### Execution State Check

Predefined CodeEnum, associated Message resource, output I18n message via global exception handling

* `StateAssert` - like ArgsAssert, throws stackless exceptions
* `MessageException` - throws a stackless exception with code
* `CodeException` - by default throws a stacked exception
* `I18nString` - automatically convert to String output via json
* `@JsonI18nString` - annotate the field for automatic json conversion

## 3D.5.Three Kinds of DateTime

Multiple timezones, for data readability and coding convenience, slardar use the following conventions.

* `system timezone` (system) - application/system run, unified on Jvm and Db
* `data timezone` (origin) - the data or users are located
* `user timezone` (client) - the user wants to see when reading the data

In general, these three are unified, e.g. all in Beijing time `GMT+8`. For data that is not timezone sensitive,
LocalDateTime is usually a good choice, without the timezone.

In the slardar business scenarios, the system timezone is used uniformly in the business layer, using LocalDateTime.
And in the Controller layer, it is responsible for the two-way conversion of system and user timezones, using ZonedDateTime.

* Uniformly use `LocalDateTime` for timezone insensitive or localtime only cases
* Automatic conversion in Jackson and RequestParam if timezone is sensitive
  - When Request, auto converts user time to the system timezone
  - When Response, auto converts system time to the user timezone
* The following three types of auto-conversion are available, 
  - `LocalDateTime` disabled by default, not recommended to convert
  - `ZonedDatetime` disabled by default, historical compatibility
  - `OffsetDateTime` enabled by default
* Use the `@AutoTimeZone` to specify the conversion behavior of the 3 types of dates
  - Use on Dto's Field to auto convert in RequestBody and ResponseBody
  - Work with Spring's @RequestParam for Param
* Use AutoDtoHelper to replace Dto properties outside of Spring administration, currently the following annotations are supported
  - @AutoDtoAble - traverses internal properties
  - @AutoTimeZone - auto convert 3 types of dates
  - @AutoI18nString - auto convert String or I18nString

Note: due to a defect in util.Date, in wings, you have to use the `java.time.*` instead .

For example, the 3 timezones are not the same, for more testcases see `DateTimeConverterTest.java`

Example A: An online classroom application, Chinese student and NewYork teacher, schedule a class time. then.

* Assume that the system is on UTC time, i.e. system=`UTC+0`
* the student and teacher client are `Asia/Shanghai` and `America/New_York` respectively
* When making an appointment, you need to display the time by client separately to improve the appointment experience

Example B: A cross-border e-commerce application, NewYork users, via overseas shipping warehouse, buy things in xxBao. then.

* Assume that xxBao is on East 8, i.e. system=`UTC+8`
* NY user's (client) is `America/New_York`
* LA shipping warehouse, i.e. (origin) is `America/Los_Angeles`
* Order information, which will be displayed in client time
* Logistics information displayed in local time(origin) without conversion
* Statistical information, usually also displayed in data/origin time
