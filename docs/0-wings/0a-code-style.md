---
isOriginal: true
icon: linter
category:
  - 神翼
  - 规范
---

# 0A.编码风格

Wings项目实践中，主张防御式编程，秉承以下价值观和哲学，

* 静态优于动态 - 能编码的，就不要反射
* 强类型优于弱类型 - 能class或enum，就不要map或const
* 编译时优于运行时 - 能编译时解决的，就不要到运行时处理
* IDE优于Editor - 有上下文语法的，就不要字符串查找
* 奥卡姆剃刀 - 能简单的就不要复杂，能明示的就不要暗示
* 命名必须明确 - 明确业务语义，可读性优先，不怕长，不怕怪
* 边界外参数不可信 - 边界层做验证和转换，边界内则都可信

防御式编程，处处考虑边界和异常，May The `false` Be With You !

## 0A.1.Java代码可读性优先

遵循标准的java规范（Idea提示即可），但可读性优先。

* `static final` 不必全大写。如`log`比`LOG`可读性好
* `BIG_SNAKE`可使用`PascalNaming`，因为大写单词不如小写易读
* 全大写名词（缩写或专有）只首字母大写驼峰法。`Json`,`Html`,`Id`
* 前缀，后缀及缩写，必须2个字母起，建议3个字母（驼峰法）
* 英文无法明确的行业黑话，可使用中文，但不建议用拼音。
* 要求4-8字母的单词都记住，命名采用动宾或副词结构。
* 以Empty消除null，Set/List/Array/Map用empty
* 显示标注@NotNull，@Nullable，@Contract，声明null约束
* 正向的业务语义，使用正向的词汇，参数等，如true

提高编码质量，升级编程技能，请左转至[攻城狮的Java代码审查](https://java-code-review.moilioncircle.com)

## 0A.2.Sql命名snake_case

即全小写，下划线分割。因实践中发现，小写词比大写容易识别。

* 数据库，表名，字段名，全小写。
* SQL关键词，内置词等建议`大写`，以区别。
* `index`以`ix_`,`uq_`,`ft_`,`pk_`区分索引类型。
* `trigger`以`(ai|au|db)__`表示触发的时机。

wings主张业务表SQL化，即使用SQL管理表及数据，而GUI或对象映射都是辅助功能。
SQL脚本可以很好的编辑，比较，文档化，包括业务表的分层，编号及注释格式。

* 表`编号/名字:解释` - 105/常量枚举:自动生成enum类
* 字段`注释/解释:选项1|选项2` - 验证账号/身份辨识:邮箱|手机|union_id|api_key

编号由业务层规划，如10x为系统，11x为应用，12x为用户，13x为权限，2xx为商品，3xx为订单等。

## 0A.3.配置类properties优先

尽量使用`properties`格式，因`yml`的缩进在局部编辑时，容易出现困扰。

* 一组有关联的属性，放在一个`properties`，分成文件便于版本管理
* `spring-wings-enabled.properties`用于ConditionalOnProperty配置
  - 统一使用`spring.wings.**.enabled.*=true|false`格式
  - 多模块时，模块本身为`spring.wings.**.enabled.module=true`
* `spring-*`放置spring官方配置key
* `wings-*`放置wings配置key，
  - 带有工程或模块代号，如`wings.slardar.*`
  - 提供默认配置，使用`-79`序号
* 推荐`kebab-caseae`命名，即`key`全小写，使用`-`分割

## 0A.4.spring注入注意事项

* 优先使用`constructor`注入，用`lombok`的`@RequiredArgsConstructor`
* 次之使用`setter`注入，用`lombok`的`@Setter(onMethod_ = {@Autowired})`
  或`kotlin`的`@Autowired lateinit var`
* 尽量避免使用`Field`注入，坏处自己搜一搜
* 通常required时constructor注入，optional时setter注入
* 但注入过多，使参数列表过长，影响理解和使用时，
  使用setter注入，加上`afterPropertiesSet`检查

使用`@Resource`，`@Inject`和`@Autowired`，有细微差别，

* Resource由CommonAnnotationBeanPostProcessor处理，
  查找顺序为①BeanName ②BeanType ③Qualifier
* Autowired和Inject由AutowiredAnnotationBeanPostProcessor处理，
  查找顺序为①BeanType ②Qualifier ③BeanName
* type优先用Autowired和Inject，name优先用Resource(细粒度，难控制)
* 在spring体系下推荐`@Autowired`，考虑兼容性用`@Inject`

继承父类时的注入规定（类无法得知是否被继承）

* 父类中有@Setter注入时，字段以protected替代private
* 不希望子类覆盖时，需要final setter，避免父类无法注入
* 继承时，一旦父类有setter，请不要override，除非确保DI无碍
* 继承时，不希望父类DI，可子类override，并自行注入

## 0A.5.RequestMapping风格

Url命名主要是场景化的前缀，参考[RestHalf](0b-rest-half.md)。

* 在方法上写全路径`@RequestMapping("/a/b/c.html")`
* 在controller上写版本号`@RequestMapping("/v1")`
* 不要相写相对路径，这样才可以通过URL直接搜索匹配
* 不要使用prefix拼接路径(view，url)，避免无意义的碎片
* 不管REST还是其他，url必须有扩展名，用来标识MIME和过滤

## 0A.6.Service和Dto约定

interface上使用annotation时，遵循以下规则，

* `@Component`类注解，不要放在接口上，放在具体实现上
* 功能约定类，放在接口上，如`@Transactional`

Service定义为接口，Service中的Dto，定义为内类，作为锲约。
Dto间的转换和复制，使用工具类生成Helper静态对拷属性。
禁止使用反射，不仅是因为性能损失，主要是动态性，脱离了编译时检查。

直接单向输出的model对象，可以使用map，否则一定强类型的class。

```java
public interface TradeService {

    @Getter
    @RequiredArgsConstructor
    enum Err implements CodeEnum {
        RateFailed("fedex.rate.unknown", "Fedex查询价格错误"),
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

## 0A.7.枚举类和code/const值

因强类型原则，所有code和const都应该变成enum，在业务层传递。

* 在service层，通过自动java模板生成enum，通过`*EnumUtil`，转换
* 在db层，以基本类型(int,varchar)读取和写入
* 在用户层，以多国语形式显示枚举内容
* 不能enum的魔法值，使用@MagicConstant标注

## 0A.8.maven管理的约定

* 多模块有主工程（parent|packaging=pom）和子工程（module|packaging=jar）
* 主工程在dependencyManagement定义lib，不管理具体dependency
* 子工程自己管理dependency，不可以重新定义版本号
* 依赖冲突时，maven遵循路径最短原则，所以在就近工程重新定义

## 0A.9.Api测试及文档约定

wings默认开启swagger，访问路径为`/swagger-ui/index.html`

因swagger注解容易使doc部分冗长，且SpringDoc做了比较智能的推导，
所以在能够表述清楚时，建议简化注解，参考以下注解。

* @Operation，以tag,summary,description等表述清楚
* @Schema，输入或输出对象
* @Parameter， 输入参数
* @ApiResponse，必要时使用

在description中，支持Markdown，辅助jsdoc，可使文档更加清晰。

* 参考param <https://jsdoc.app/tags-param.html>
* 参考returns <https://jsdoc.app/tags-returns.html>
* `@param [name=trydofor] - Somebody's name.`
* `@return {200|Result(Dto)} 正常返回对象，status=200` - 小括号表示泛型(避免转义)。
* `@return {200|Result(false)} 错误时返回，status=200` - 小括号表示简单约定参数。

使用swagger时，不可使用弱口令，在正式服上可通过以下属性关闭。  

* springdoc.api-docs.enabled=true
* springdoc.swagger-ui.enabled=true

## 0A.A.resource结构

文件或包，一般以wings或项目代号为前缀。前缀表示统一服务，项目代号为项目特有。

```text
src/main/resources
├── META-INF - spring 自动配置入口等
│   └── spring.factories - EnableAutoConfiguration入口
├── extra-conf/ - 非自动加载的其他配置
├── wings-conf/ - wings自动加载配置 xml|yml|yaml|properties
├── wings-flywave/ - flywave数据库版本管理，
│   ├── branch/* - 分支脚本，如维护，功能
│   └── master/* - 主线脚本，上线中
└── wings-i18n/ - wings自动加载 bundle
│   ├── base-validator_en.properties - 英文版
│   └── base-validator_ja.properties - 日文版
└── application.properties - spring 默认配置，用于覆盖wings
```

## 0A.B.自动配置结构

wings对`spring/bean`包有特殊处理，可以自动 @ComponentScan

```text
src/**/spring - spring有个配置
├── bean/ - 自动扫描，产生可被Autowired的Bean
│   └── WingsLightIdConfiguration.java - 内部用项目前缀，对外使用Wings前缀
├── boot/ - spring boot 配置用，不产生Bean
│   └── WingsAutoConfiguration.java - 兼容IDE和starter的配置入口
├── conf/ - 配置辅助类Configurer
├── help/ - 工具辅助类
└── prop/ - 属性类，自动生成spring-configuration-metadata.json
    └── FacelessEnabledProp.java - 开关类
```

在`@Configuration`类中配置`@Bean`时，对其依赖的注入，遵循以下原则，

* 优先使用Constructor+final形式
* 使用Bean声明方法的参数
* 可使用Config的Field注入
* 避免使用Config的Setter注入，因为不能及时暴露依赖错误
* 一般方法的Autowired用于工具类初始化

## 0A.C.常见的命名约定

* 接口默认实现为`Default*`
* 适配器类为`*Adapter`

常用命名组合，单词顺序和词义尽量保持一致，可读性优先。

* Ins/Out
* Query/Reply

```java
// Service中Journal 枚举类
enum Jane {
    Create, // 新建
    Modify, // 修改
    Remove, // 逻辑删除
    Delete, // 物理删除
}
```

## 0A.D.Event同步内部优先

* 内部Event，内部Publish，内部Listen
* 能内部Listen的，就不用外部的Subscribe
* 能同步的，就不用异步

## 0A.E.有关过度设计和技术债务

因为需求的渐进明细，外部的环境变化，几乎所有业务系统的开发都是演进式。
基于以上事实，在实际交付中，力求完美很容易误人误事，应该遵循以下规则：

* 仅做高出能力的10%的挑战，小于20%的远见
* 任何技术或方案的妥协都不得牺牲质量，做事不可糊弄
* 每次迭代，偿还10%-20%的技术债务

## 0A.F.时间是神奇的类型

系统内有2种时间`系统时间`和`本地时间`，数据库和java类型映射上，

* `日期时间`，以`DATETIME`或`DATETIME(3)`和`LocalDateTime`存储
* `日期`，以`DATE`和`LocalDate`存储
* `时间`，以`TIME`或`TIME(3)`和`LocalTime`存储
* `时区`，以`VARCHAR(40)`或`INT(11)`存储
* 特别场景，以`BIGINT(20)`或`VARCHAR(20)`存储

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
