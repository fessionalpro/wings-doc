---
isOriginal: true
icon: linter
category:
  - WingsGod
  - Standard
---

# 0A.Coding Style

The Wings practice advocates defensive programming with the following values and philosophies.

* Static over Dynamic - don't reflect if you can code
* StrongType over WeakType - typed class/enum is better than magic map/const
* Compile-time over Runtime - troubleshoot at compile-time instead of runtime
* IDE over Editor - contextual lookup instead of string lookup
* Occam's Razor - Don't complicate what can be simple, don't imply what can be explicit
* Naming Must be Clear - precise business meaning, readability first, not afraid of long or weird
* Outside is Untrusted - validate and convert at the boundary, while  inside is trusted

Defensive programming considers boundary and exception everywhere, May The `false` Be With You !

## 0A.1.Readability First Java Coding

Follow the standard Java coding spec (idea hints are fine), but readability takes precedence.

* `static final` don't have to be all-caps, `log` is preferred to `LOG`
* `BIG_SNAKE` could be`PascalNaming`, lowercase is readbale than uppercase
* All-caps (abbr. or proper) should use PascalNaming. `Json`, `Html`, `Id`
* Prefix/suffix/abbr must be 2+ letters, 3 letters recommended (camalNaming)
* Local language can be used for industry jargon that has no common English name.
* Remember words with 4-8 letters. Use verb-object or adverb to name
* Null-safe, use empty instead of null, Set/List/Array/Map
* Declare nullability using @NotNull, @Nullable, @Contract
* Positive business meaning, positive words, parameters. such as true
* using `@Param.InOut/Out` and suffix annotation modified param

To improve coding quality and enhance your programming skills, go to [NotBad Review](https://java-code-review.moilioncircle.com)

## 0A.2.Sql using snake_case

All lowercase with underscore split. in practice, lowercase is easier to recognize than uppercase.

* Database, table, field, all lowercase
* SQL keywords, built-ins, all uppercase, user-defined
* Prefix `ix_`,`uq_`,`ft_`,`pk_` to `index` by its type
* Prefix `(ai|au|db)__` to `trigger` by its event

Wings advocates the SQL-ization of business tables, which means using SQL to manage tables and data,
with GUI or object mapping as a helper tool. SQL is well known and easy to edit, compare,
document and version, including management of architecture, documentation and execution.

* table `number/name:explain` - 105/const:auto-gen enum
* column `comment/explain:opt1|opt2` - verify account/identification:email|phone

The number is planned by the business architecture, e.g. 10x for system, 11x for application,
12x for user, 13x for permission, 2xx for product, 3xx for order, etc.

## 0A.3.Properties First in Configuration

Recommand `properties`, as the indentation of `yml` is difficult to edit, copy, and share in parts.

* Group related properties in a separate `properties` file,
  split the large file  into smaller ones for easy management and versioning
* `spring-wings-enabled.properties` is used for ConditionalOnProperty
  - Use `spring.wings.**.enabled.*=true|false` as a standard format.
  - When multi-module, the module itself is `spring.wings.**.enabled.module=true`
* `spring-*` is used for the spring official configuration
* `wings-*` is used for the wings configuration,
  - Use the codename of project/module, e.g. `wings.slardar.*`
  - Provide the default configuration with `-79` serial number
* Recommend `kebab-caseae` naming, i.e. `key` is all lowercase, `-` splitted
* document-type comments, using double one-line comments, such as `##` in Properties
* function-type comments, using a single one-line comment, such as `#` in Properties

## 0A.4.Spring Injection Notes

* `constructor` injection first, using `@RequiredArgsConstructor` of `lombok`
* `setter` injection second, using `@Setter(onMethod_ = {@Autowired})` of `lombok`
  or `@Autowired lateinit var` of `kotlin`
* Avoid `Field` injection, you can google why not
* Typically, constructor means required, setter means optional
* However, too many injections makes the parameters too long to understand and use,
  then use setter injection and `afterPropertiesSet` checking instead.

The use of `@Resource`, `@Inject`, and `@Autowired` has some differences,

* Resource is processed by CommonAnnotationBeanPostProcessor.
  The search order is ①BeanName ②BeanType ③Qualifier
* Autowired and Inject are processed by AutowiredAnnotationBeanPostProcessor,
  The search order is ①BeanType ②Qualifier ③BeanName
* by-type injection uses Autowired and Inject,
  by-name injection uses Resource (fine-grained, hard to control)
* recommend `@Autowired` in spring, use `@Inject` for compatibility

Injection rules when extending a parent class (the class cannot know its subclass)

* If @Setter injection in the parent, the fields should protected than private
* If deny override, use `final setter` to make DI in the parent
* If the parent has setter DI, override it need to make sure subclass DI
* Subclass override and inject itself can instead parent DI

## 0A.5.RequestMapping Style

Url naming is mainly scenario-based prefixes, see [RestHalf](./0b-rest-half.md).

* Full path on method `@RequestMapping("/a/b/c.html")`
* Version on the controller `@RequestMapping("/v1")`
* Do not use relative path, so can search directly by URL match
* Do not use prefix to concat path (view, url) to avoid meaningless fragmentation
* The url must have an extension to identify the MIME or to filter, whether REST or otherwise.

## 0A.6.Service and Dto Convention

When using annotation on the interface, see the following,

* `@Component`-like, not on interface, on the implementation
* Functional annotation, on he interface, eg. `@Transactional`

Service is interface and its Dto is its inner class, these are contract.
Conversion and copying between Dto, use code tool to generate static mapping helper.
Prohibit the use of reflection, not only because of performance loss,
but mainly because of the dynamics, out of compile-time checking.

Direct one-way output model objects, you can use map, otherwise must be strongly typed class.
```java
public interface TradeService {

    @Getter
    @RequiredArgsConstructor
    enum Err implements CodeEnum {
        RateFailed("fedex.rate.unknown", "Failed to get Fedex quote"),
        ;

        private final String code;
        private final String hint;
    }

    @Data
    class TradeInfo {
        private long orderId;
        private BigDecimal amountOrder;
        // others
    }

    /* docs */
    void transfer(@NotNull MoneyInfo ai, @NotNull TradeInfo ti, @NotNull Journal journal);
}
```

## 0A.7.Enum, Code and Const

Because of the strong type principle, all magic code and const should be
converted to enum and passed between business layers.

* In the service layer, the enum is autogen by template, and converted by `*EnumUtil`
* In the db layer, reading and writing with basic types (int,varchar)
* In the user layer, display the enum content in an i18n format
* Magic values that cannot be converted to enum, marked with `@MagicConstant`

## 0A.8.Maven Management Convention

* Multi-module has main project (parent|packaging=pom) and sub-projects (module|packaging=jar)
* The main project defines libs in dependencyManagement and does not manage specific dependencies
* the sbproject manage its own dependencies and cannot redefine version number
* In dependency conflicts, Maven follows the shortest path principle, so redefining the project in the closest

## 0A.9.Api Testing and Docs Convention

Wings enable swagger by default, the path is `/swagger-ui/index.html`

As swagger annotations will make the in-code doc complex and SpringDoc does a more intelligent derivation.
So it is recommended to simplify the annotation when you can express it clearly, see the following annotations.

* @Operation use tag, summary and description
* @Schema, input and output object
* @Parameter, input param
* @ApiResponse, if complex response

the description supports Markdown, use jsdoc can make the docs more clear,

* see param <https://jsdoc.app/tags-param.html>
* see returns <https://jsdoc.app/tags-returns.html>
* `@param [name=trydofor] - Somebody's name.`  -
* `@return {200|Result(Dto)} success response, status=200` - Parentheses indicate generic (to avoid escaping)
* `@return {200|Result(false)} failure response, status=200`- Parentheses indicate simple convention parameters

Do not use weak passwords in swagger, and should disable swagger in the live product with the following properties

* springdoc.api-docs.enabled=true
* springdoc.swagger-ui.enabled=true

## 0A.A.Resource Structure

Files or packages, usually prefixed with wings or codename.
The prefix indicates a unified service and the codename is project specific.

```text
src/main/resources
├── META-INF - spring auto config entrance
│   └── spring.factories - EnableAutoConfiguration
├── extra-conf/ - non-auto loading config
├── wings-conf/ - wings auto config, xml|yml|yaml|properties
├── wings-flywave/ - flywave manage data and schema version,
│   ├── branch/* - branch scripts, such as maintenance, functions
│   └── master/* - mainline script, online
└── wings-i18n/ - wings auto config bundle
│   ├── base-validator_en.properties - english
│   └── base-validator_ja.properties - japanese
└── application.properties - spring config can override wings
```

## 0A.B.Auto Conf Structure

Wings handle`spring/bean` special, can auto apply `@ComponentScan`

```text
src/**/spring - all spring config
├── bean/ - auto scan to produce `@Bean` to be `@Autowired`
│   └── WingsLightIdConfiguration.java - prefix codename internally and Wings externally
├── boot/ - spring boot config, not produce bean
│   └── WingsAutoConfiguration.java - IDE and starter compatible entrance
├── conf/ - Config helper, eg. Configurer
├── help/ - Helper
└── prop/ - property, autogen spring-configuration-metadata.json
    └── FacelessEnabledProp.java - toggle feature
```

When config `@Bean` in the `@Configuration`, the DI principle as follows,

* use constructor+final first
* use parameters of methods to declare bean
* can use Field inection in Config
* avoid setter injection in Config, because the dependency error is too late
* Autowired method for tool initialization

## 0A.C.Common Naming Convention

* The default impl is `Default*`
* Adapter class is `*Adapter`

Common naming group, word order and meaning should be consistent, and readability first,

* Ins/Out
* Query/Reply

```java
// enum in Journal Service
enum Jane {
    Create, // insert
    Modify, // update
    Remove, // logic delete
    Delete, // real delete
}
```

## 0A.D.Sync Internal Event First

* Internal Event, Internal Publish, Internal Listen
* If can listen internally, don't subscribe externally
* If can synchronize, don't asynchronize

## 0A.E.Over-design and Tech-debt

Due to the progressively detailed requirements and external environmental changes,
almost all business systems are developed in an evolutionary manner.

Based on the above facts, in actual delivery, over-design for perfection will
easily lead to mistakes and should follow the following rules.

* Do only 10% of the challenge above your ability, less than 20% of the further vision
* Any compromise must not sacrifice quality, and things must not be done carelessly
* Pay back 10-20% of tech debt with each iteration

## 0A.F.Time is Godlike Type

There're 2 types of time `system` and `local` in wings. mapping on database and java,

* `datetime` - `DATETIME` or `DATETIME(3)` to `LocalDateTime`
* `date` - `DATE` to `LocalDate`
* `time` - `TIME` or `TIME(3)` to `LocalTime`
* `timezone` - `VARCHAR(40)` or `INT(11)` to `ZoneId`
* Special scenario, stored as `BIGINT(20)` or `VARCHAR(20)`

For example, in the cross-border e-commerce scenario, the servers run in the `UTC` time zone (system time),
the Chinese customer (C1) in`Asia/Shanghai` (user time), New York merchant (NY) in `America/New_York` (data time),
Los Angeles merchant (LA) in `America/Los_Angeles` (data time).

The local datetime, which must have a `timezone` to match, is further divided into `UserTime` and `DataTime`,
named with the following suffixes.

* `timezone` - string ,`_tz` or `_zid` as suffix and `ZoneId` as content.
* `datetime` - system/user/data time end with `_dt`/`_udt`/`_ldt` respectively
* `date` - system/user/data time end with `_dd`/`_udd`/`_ldd` respectively
* `time` - system/user/data time end with `_tm`/`_utm`/`_ltm` respectively

E.g. at BST `2020-08-09 01:00:00 +08:00`, Chinese customer C1, places an order at NY and LA merchants respectively.

* Sys_dt(UTC) = `2020-08-08 17:00:00`
* C1_udt(Asia/Shanghai, UTC+8) = `2020-08-09 01:00:00`
* NY_ldt(America/New_York, UTC-4) = `2020-08-08 13:00:00`
* LA_ldt(America/Los_Angeles, UTC-7) = `2020-08-08 10:00:00`

Ahh, it's not right, I remember New York is `Western 5 Zone`, it should be `UTC-5`, `UTC-4` is wrong.
We don't use `UTC-5` in the system, we have to use the city `zoneid`.
Because there are many countries on the same longitude, and the time zone is not divided by the longitude,
and some regions have `Daylight Saving Time`.

It's recommended to use the main user's timezone as the system timezone,
and should consider whether UTC is the best solution.

So, we will use different time in the following scenarios,

* When tracking system logs, we use `Sys_dt` to ensure the consistent timeline.
* When counting North American merchant `AM` operating reports, We use `*_ldt`.
* When for user experience or timezone insensitive, all time for C1 is `C1_udt`.
* Some industry practices (airlines, logistics) use local time, we use `*_ldt`.

According to the reading and writing ratio, when storing datetime, should consider,

* Statistical services, usually converte on write, store the user localtime (and timezone), not converted on read
* Collaborative operations, typically using system time on write and convert on read

If time conversion is required, it should to be handled uniformly in the user interface (e.g. controller).

For players coming from java7, see the following alternative relationships.

* Instant instead of Date
* LocalDateTime instead of Calendar
* DateTimeFormatter instead of SimpleDateFormat

## 0A.G.Non-Scientist Dont Use Float

In Wings there is no float/double, only integer (int/long) and BigDecimal. Their database types are INT/BIGINT/DECIMAL.

However, in practice, due to the lack of technology transfer, some external inertia is not change and pollute wings code,
especially in the js ecosystem.

* `0.1` + `0.2` = `0.30000000000000004`
* `0.12` - `0.02` = `0.099999999999999`

The main reason for this is the IEEE754 format, floating point is not suitable for non-scientific scenarios,
our normal developer should avoid using it.

`Effective Java` is a necessary knowledge for java developers, here without further ado, see the following sections.

"Avoid Float and Double If Exact Answers Are Required"

## 0A.H.Business Data Type

The following types are recommended in Wings, mainly considering the compatibility of sql and json,
sql is mainly mysql and h2database.

| JAVA | MYSQL/H2 | JS/JSON |
| ---- | --- | ------- |
| Boolean/boolean | TINYINT(1)/BOOLEAN | boolean |
| Integer/int | INT/INT(11) | number |
| Long/long | BIGINT/BIGINT(20) | BigInt/bigint |
| BigDecimal | DECIMAL(M,D) | string |
| String | CHAR(N)/VARCHAR(N)/TEXT | string |
| LocalDateTime | DATETIME(3) | string |
| LocalDate | DATE | string |
| LocalTime | TIME(3) | string |
| byte[] | BLOB | string(base64_urlsafe) |

## 0A.I.Graceful null-safety in Practice

As "MoilionCircle" "bad code smell" said, wings practically use `empty` instead of `null`.

* If null is a valid business value, you must first perform a business check.
* If null is an invalid business value, should PreCheck or @NotNull and use empty instead.
* Business methods, generally provide get() and get(boolean) of two types,
  - get() is used to get NotNull value, equivalent to get(true), positive semantics.
  - get(false) is used to get Nullable value, negative semantics.

Speaking from different situations, although we all advocate avoiding making `null` a valid business value,
sometimes factors outside the system are uncontrollable. Common databases, APIs, and JNI can all cause `null`
to enter the data flow. At this time, it should be intercepted before entering the business flow,
or `null` should be explicitly checked, such as using `Objects.equals`, `foo == null`, etc.

It should be noted that there is a "advanced" trick in the industry,
which has become popular and is considered a standard for advanced programmers.

* `!"foo".equals(bar)` safe to handle the case that bar is null.
* `null != foo`, prepend null as a left-hand value.

These two tricks can easily create pitfalls, should be with caution or avoided. The potential drawbacks are

* equals and hashCode have basic requirements, not all equals are null-safe.
* Confusing the logic, easy to lose logic branches, `!=null` and `!=foo` are two branches.
  - If null is a business value, `Objects.equals` should be used.
  - Otherwise it should assert/PreCheck, null in the logic flow means fallen.
* null as the left-hand value breaks consistency, as if expected and actual are swapped in Junit.

Theory is theory, in practice we often make compromise or have no  choice,
we should respect history and team conventions. In wings,

* `EmptyValue` and `EmptySugar`, provide empty values and utility for biz.
* Collection/Container type like List/Map/Array/Option use Empty instead of null.
* The `Null` class defines the value and validation to handle null, including enum, etc.
* Use `@NotNull` on method signatures, IDE and compile time checking.
* `AssertArgs` and `AssertState` for business assert with i18n support.

## 0A.J.Contravariance/Covariance/PECS in TypeSystem

```java
// ① field should use a concrete type or an abstract type
private List<E> field1 = new ArrayList<>();
private ArrayList<E> field2 = new ArrayList<>();

// ② return type
public Map<String, ?> provide1();
public TreeMap<String, Object> provide2();

// ③ input parameters
public void consume1(List<String> list);
public void consume2(Collection<? extends CharSequence> list);

// ④ Method Signature of Map
replaceAll(BiFunction<? super K, ? super V, ? extends V> function)
```

In wings coding, ensure the compatibility first, the interface (using the mouth as an analogy) should,

* For input - as abstract as possible, try to eat more.
* For output - as specific as possible, try to say detail.
* For internal variable - keep it as it is, those who use it know it.

Take Map as an example. For input, use Map+superK+extendsV.
For output, keep the details like SortedMap or RandomAccess.

* TreeMap is dictionary order
* LinkedHashMap is insertion order
* HashMap is chaotic order.

## 0A.K.Leak of Class/Method (SideEffects)

Wings refers to methods without the following characteristics as leak or side effect

* Pure functions
* referential transparency
* Side Effects

Avoid using leaking methods and implicit variables as much as possible in programming.
