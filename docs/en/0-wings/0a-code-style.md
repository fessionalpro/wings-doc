---
isOriginal: true
icon: linter
category:
  - WingsGod
  - standards
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

Url naming is mainly scenario-based prefixes, see [RestHalf](0b-rest-half.md).

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
* `@return {200|Result(Dto)} success response，status=200` - Parentheses indicate generic (to avoid escaping)
* `@return {200|Result(false)} failure response，status=200`- Parentheses indicate simple convention parameters

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

以跨境电商场景为例，服务器群采用`UTC`时区（系统时间），中国用户`Asia/Shanghai`（用户时间）,
纽约NY商家`America/New_York`（数据时间），洛杉矶LA商家`America/Los_Angeles`（数据时间）。

本地日时，必须有`时区`配合，又分为`用户时间`和`数据时间`，命名后缀如下，

* `时区` - 以`_tz`或`_zid`为后缀，内容为`ZoneId`的字符串名字
* `日时` -系统/用户/数据，分别以`_dt`/`_udt`/`_ldt`结尾
* `日期` -系统/用户/数据，分别以`_dd`/`_udd`/`_ldd`结尾
* `时间` - 系统/用户/数据，分别以`_tm`/`_utm`/`_ltm`结尾

举例，北京时间`2020-08-09 01:00:00`，中国用户C1，分表在NY和LA商家下单。

* Sys_dt(UTC) = `2020-08-08 17:00:00`
* C1_udt(Asia/Shanghai, UTC+8) = `2020-08-09 01:00:00`
* NY_ldt(America/New_York, UTC-4) = `2020-08-08 13:00:00`
* LA_ldt(America/Los_Angeles, UTC-7) = `2020-08-08 10:00:00`

哎，不对啊，记得纽约是`西五区`啊，应该`UTC-5`啊，怎么时间不对呢？
系统中不要使用`UTC-5`，所以需要city标志`zoneid`，
因为同一经线上国家很多，并且时区本非按经线换分，有些区域存在`夏令时`。

系统时区，推荐为核心用户所在时区，要考虑UTC是否为最优解。

于是，以下场景时，我们会用到不同的时间，

* 当跟踪系统日志时，我们使用`Sys_dt`，可以保证统一的时间线
* 当统计北美商家`上午`的营运报表时，我们使用`*_ldt`
* 当追求用户体验，用户不关心时区时，用户看到的所有时间都是`C1_udt`
* 有些行业惯例（航空，物流）使用本地时间，我们使用`*_ldt`

按数据的读写比例，处理时间存储时，要考虑。

* 统计类业务，通常写入时转化，存入用户本地时间（和时区），读取时不转换
* 协作类业务，通常写入时，使用系统时间，读取时转换

如果需要转换时间，需要在用户界面统一（如controller）处理。

对应java7过来的选手，参考以下替代关系。

* Instant 代替 Date
* LocalDateTime 代替 Calendar
* DateTimeFormatter 代替 SimpleDateFormat

## 0A.G.不是科学家就别用浮点型

wings中不应该有浮点类型float/double，而只有整数(int/long)，小数用BigDecimal，
他们对应的数据库类型分别为 INT/BIGINT/DECIMAL。

但在实践过程中，因科普不到位，一些外部惯性未被消除而污染wings代码，尤其在js体系中更为明显。

* `0.1` + `0.2` = `0.30000000000000004`
* `0.12` - `0.02` = `0.099999999999999`

其根本原因在用IEEE754格式，浮点型不适合非科学计算场景，除科学家外普通人慎用。
`Effective Java`是java从业人员必备知识，在此不做赘述，参考以下章节：
Avoid Float and Double If Exact Answers Are Required

## 0A.H.实际中如何优雅的消除null

如同【攻城狮朋友圈】代码的坏味道所讲，wings工程实际，基本上以empty取代了null。

* 若null是业务有效值，需要首先做业务判断。
* 若null是业务无效值，应该采用PreCheck或以@NotNull及empty取代
* 业务方法，一般提供get()和get(boolean)两类方法
  - get()用于获取NotNull的业务对象，等同于get(true)，肯定语义
  - get(false)用于获取可以为null的业务对象，即否定语义

分情况讲，尽管我们都主张避免使null变成业务有效值，但有时系统外的因素不可控。
常见的数据库，API，JNI，都可能导致null进入数据流。此时，应该在进入业务流之前拦截，
或显示的做null判断，比如 `Objects.equals`，`foo == null`等。

需要注意的是，业界流传一种『高级』秘籍，流行到被视为高级程序猿标配。

* `!"foo".equals(bar)` 可以安全的处理，bar是null的情况
* `null != foo`，null前置，变成左值。

这两个小技巧在工程中很容易挖坑，应当引起警觉或避免，大概的不好之处如下。

* equals和hashCode的实现，有基本要求的，并非equals都对null友好。
* 混淆了逻辑，容易搞丢逻辑分支，`!=null`和`!=foo`是两个分支。
  - 若null是业务值，应该采用`Objects.equals`显示的合并分支；
  - 否则应assert或PreCheck，null进入业务逻辑，就意味着沦陷了。
* null变左值，破坏一致性，好比Junit中expected和actual互换，攻城狮应该维护一致性。

理论归理论，实际中都有取舍和无奈，要尊重历史，遵守团队约定。在wings中，这样做，

* `EmptyValue`和`EmptySugar`，在业务中确立了empty值及工具类
* Collection，Map，Array等集合或容器类型，都需要以Empty返回
* `Null`类，定义了用来代替null的类型和检查方法，包括enum等
* 方法签名尽量使用`@NotNull`注解，是IDE辅助检查，编译时解决
* `ArgsAssert`和`StateAssert`进行业务assert，支持多国语

## 0A.I.类型系统的逆变/协变/PECS

```java
// ① 字段使用具体类型，还是抽象类型
private List<E> field1 = new ArrayList<>();
private ArrayList<E> field2 = new ArrayList<>();

// ② 方法返回值
public Map<String, ?> provide1();
public TreeMap<String, Object> provide2();

// ③ 方法输入参数
public void consume1(List<String> list);
public void consume2(Collection<? extends CharSequence> list);

// ④ Map的方法签名
replaceAll(BiFunction<? super K, ? super V, ? extends V> function)
```

Wings在编码中鼓励，在保证兼容性（主要是行为特性）的情况下，接口（以嘴做比喻）

* 吃的时候 - 输入项尽量抽象，尽量吃的更广
* 吐的时候 - 输出项尽量具体，尽量嚼的更碎
* 内部东西 - 保持原样，用的人知道特征

以Map举例来说，输入时，使用Map+superK+extendsV来，
输出时，不要抹杀特征，比如是否SortedMap及RandomAccess，
比如TreeMap是字典序，LinkedHashMap是插入序，HashMap是乱序等。

## 0A.J.类和方法的泄露（副作用）

Wings把非以下特征的方法，统称为泄露或者副作用

* Pure functions（纯函数）
* referential transparency（透明引用）
* Side Effects(副作用）

变成中，尽量避免方法泄露，规避隐式变量
