---
isOriginal: true
icon: fab fa-dev
category:
  - 神翼
  - 话题
---

# 0D.开发运维

编码开发，线上运行等话题。

## 0D.01.getHostName()很长时间

>InetAddress.getLocalHost().getHostName() took 5004 milliseconds to respond.
>Please verify your network configuration (macOS machines may need to add entries to /etc/hosts)

```bash
hostname
# 输出 trydofors-Hackintosh.local

cat /etc/hosts
# 在localhost后面，填上 trydofors-Hackintosh.local
127.0.0.1     localhost trydofors-Hackintosh.local
```

## 0D.02.如何创建一个工程

```bash
git clone https://github.com/trydofor/professional-wings.git
cd professional-wings
observe/scripts/wings-init-project.sh

# 如果不能执行bash，那么自行编译和执行
cd cd example/winx-devops/src/test/java
com/moilioncircle/wings/devops/init/WingsInitProjectSwing.java
```

## 0D.03.jackson和fastjson

wings中和springboot一样，默认采用了jackson进行json和xml绑定。
不过wings的中对json的格式有特殊约定，比如日期格式，数字以字符串传递。
再与外部api交换数据时可能格式不匹配，这时需要用有备选方案。

* 使用2套jackson配置
* 使用jackson注解 @JsonRawValue
* 使用fastjson2

在Jackson和Fastjson的使用上，考虑到安全及兼容性，遵循以下约定

* FastJson用于①安全环境的读写，②对不安全的写，不读入外部json
* FastJson用于静态环境，即不能优雅注入jackson的情况
* 此外，都应该使用Jackson

在wings中，以Fastjson2替代了fastjson。注意以下lib依赖

* JustAuth-1.16.5 - fastjson-1.2.83 无AutoType，默认features的parse

考虑到当前Fastjson-2.0.18的兼容性和稳定性仍存在很大问题，必须避免使用。

* FastJsonHelper - 内部或瞬时数据，静态方法
* JacksonHelper - 非Web层，不涉及时区及多国语的自动转换，静态方法
* ObjectMapper - Web层，会自动转换时区及多国语，注入Bean

需要注意的是，json格式有兼容性问题，以下是json格式的差异，详见JsonHelperCompatibleTest

* Jackson Default
  - `transient` 输出
  - `@Transient` 不输出
  - `byte[]` 用base64编码，`[]` 为 `""`
  - `char[]` 用String编码，`[]` 为 `""`
  - WRITE_DATES_AS_TIMESTAMPS 用零时区时间戳
  - `ZonedDateTime` 解析为 `2023-04-04T21:07:08Z` 丢时区
  - `OffsetDateTime` 解析为 `2023-04-05T10:07:08Z` 丢时区
* Jackson Wings Help
  - `transient` 不输出
  - WRITE_DATES_AS_TIMESTAMPS = false
  - `LocalDateTime` 为 `"2023-04-05T06:07:08"`
  - `ZonedDateTime` 为 `"2023-04-05T06:07:08[America/New_York]"` 留时区
  - `OffsetDateTime` 为 `"2023-04-05T06:07:08-04:00"` 留时区
* Jackson Wings Bean
  - `LocalDateTime` 为 `"2023-04-05 06:07:08"`
  - `ZonedDateTime` 为 `"2023-04-05 06:07:08 Asia/Shanghai"`
  - `OffsetDateTime` 为 `"2023-04-05 06:07:08 +08:00"`
  - `float`,`double` 为 `"3.14159"`
  - `BigDecimal`,`BigInteger` 为 `"299792458"`
* Fastjson Default
  - `transient` 不输出
  - `@Transient` 输出
  - `LocalDateTime` 为 `"2023-04-05 06:07:08"`
  - `ZonedDateTime` 为 `"2023-04-05T06:07:08[America/New_York]"`
  - `OffsetDateTime` 为 `"2023-04-05T06:07:08-04:00"`

## 0D.04.类型间Mapping比较

根据以下文章，推荐使用静态性的`MapStruct`。

* [Quick Guide to MapStruct](https://www.baeldung.com/mapstruct)
* [Mapping Collections with MapStruct](https://www.baeldung.com/java-mapstruct-mapping-collections)
* [MapStruct ide&mvn支持](https://mapstruct.org/documentation/installation/)

在编码过程中，我们经常要处理各种O的转换，赋值，比如DTO，PO，VO，POJO。
同时我们又希望强类型，以便可以通过IDE提示提供效率，并把错误暴露在编译时。
这样就一定要避免弱类型(map,json)和反射（bean copy）,势必需要代码生成工具。

对于比较复杂的mapping，使用expression，qualifiedByName，spring注入。
自动生成的代码位于`target/generated-sources/annotations/`

在wings中，推荐使用列编辑和正则（分享视频有讲），

* 在业务层代码，推荐MapStruct或列编辑和正则（分享视频有讲）手工制品。
* 在jdbc中推荐手工RowMapper，避免使用`BeanPropertyRowMapper`。
* 在jooq中推荐jooq自动生成的record，目前不需要其他mapper。

使用MapStruct时，wings提供了`wgmp`和`wgme`模板(live template)做`A$B`的转换。

* `wgmp` - 映射`A`和`B`
* `wgme` - 映射`A`自身
* 如果在`A`内部，`$$`表示`A`，`$B`表示`B`

纯wings中的converter以`-or`结尾(convertor)，以和其他框架的converter区分。
包名以converter为准，类名以目的区分，通常纯wings的使用`-or`，其他用`-er`。

根据以下JMH的benchmark评测，对应动态Mapper也可以考虑。

* [MapStruct 性能比较](https://www.baeldung.com/java-performance-mapping-frameworks)
* [java-object-mapper-benchmark](https://github.com/arey/java-object-mapper-benchmark)

主要比较项目的活跃程度，使用方式，依赖复杂度，issues解决量等。

* `SimpleFlatMapper` 不在活跃
* `ModelMapper` 体积过大，暂时不推荐使用
* `JMapper` 性能及使用都非常优秀，但项目不在活跃
* `bull` 支持bean和map的映射，比较活跃，使用简单，但性能一般

升级了java-object-mapper-benchmark的依赖，以java在笔记本上简单执行

```text
Benchmark          (type)   Mode  Cnt         Score         Error  Units
Mapper             Manual  thrpt   25  27226210.883 ± 1350138.859  ops/s
Mapper    MapStruct-1.5.3  thrpt   25  23601713.316 ± 1247240.366  ops/s
Mapper          Selma-1.0  thrpt   25  24161620.968 ±  923848.147  ops/s
Mapper  JMapper-1.6.1.CR2  thrpt   25  19632956.722 ±  963388.556  ops/s
Mapper        datus-1.5.0  thrpt   25  13925750.428 ±  670830.594  ops/s
Mapper        Orika-1.5.4  thrpt   25   2950142.922 ±  203656.089  ops/s
Mapper  ModelMapper-3.1.0  thrpt   25    121694.578 ±   13540.111  ops/s
Mapper   BULL-2.1.2-jdk11  thrpt   25    127806.434 ±   12011.688  ops/s
Mapper        Dozer-6.5.2  thrpt   25     83840.654 ±    3225.088  ops/s
Mapper        ReMap-4.2.6  thrpt   25    505843.993 ±   25950.082  ops/s
```

## 0D.05.文件系统和对象存储

需要权限才能访问的文件资源，不可以放到CDN，需要自建对象存储或使用物理文件系统，
当使用本地FS时，需要注意子文件或子目录的数量限制，一般控制在30k以下，理由如下，

* The ext2/ext3 filesystems have a hard limit of 31998 links.
* 数量过多时，ls读取巨慢，索引也会慢。

如果自建对象存储，推荐以下方案

* <https://docs.min.io/cn/> 推荐使用
* <https://github.com/happyfish100/fastdfs>

## 0D.06.客户端和服务器信息

收集用户画像，需要获得UA信息，可使用以下工具包

* <https://www.bitwalker.eu/software/user-agent-utils> 浏览器（停止维护）
* <https://github.com/browscap/browscap/wiki/Using-Browscap> 浏览器工具家族
* <https://github.com/blueconic/browscap-java> 浏览器（推荐）

获取服务器运行信息，使用以下工具包

* <https://github.com/oshi/oshi> 系统信息

## 0D.07.用户密码的安全性

* 密码长度不可设置上限，一般要求8位以上
* 支持中文密码，标点，全角半角，建议中文密码
* 不发送明文密码，密码初级散列策略为md5(pass+':'+pass).toUpperCase(Hex大写)
* js侧md5需要支持UTF8，如 <https://github.com/emn178/js-md5>
* 有敏感数据的请求，必须是https或其他安全通道

## 0D.08.关于内网穿透和Oauth调试

在Oauth，支付等第三方集成调试时，需要有公网ip或域名，然后把公网请求转发到开发机调试。

* 临时用 ssh - `ssh -R 9988:127.0.0.1:8080 user@remote`
* 持久用 frp - <https://gofrp.org/docs/>
* 简单用 netapp - <https://natapp.cn/>

以 local.moilioncircle.com 为例，临时使用 ssh + nginx 以下转发

* 本地端口 8080
* 公网域名 local.moilioncircle.com
* 公网端口 9988, 及 http(80), 443 https(443)
* 转发公网的请求到 localhost:8080

```nginx
# ssh -R 9988:127.0.0.1:8080 ubuntu@local.moilioncircle.com
server {
    listen       80;
    listen       443 ssl;
    server_name  local.moilioncircle.com;

    access_log /data/logs/nginx/local.moilioncircle.com-access.log;
    error_log  /data/logs/nginx/local.moilioncircle.com-error.log;

    ssl_certificate     /data/nginx/cert/moilioncircle.com/fullchain.pem;
    ssl_certificate_key /data/nginx/cert/moilioncircle.com/privkey.pem;

    location / {
      proxy_pass                      http://127.0.0.1:9988;
      proxy_http_version              1.1;
      proxy_cache_bypass              $http_upgrade;
      proxy_set_header    Upgrade     $http_upgrade;
      proxy_set_header    Connection  $http_connection;
      proxy_set_header    Host        localhost;
      proxy_set_header    X-Real-IP   $remote_addr;
      proxy_redirect      http://     $scheme://;
    }
}
```

## 0D.09.IDEA提示component/scanned

导入wings工程，Idea会无法处理spring.factories中的WingsAutoConfiguration，会报类似以下信息

Not registered via @EnableConfigurationProperties, marked as Spring component,
or scanned via @ConfigurationPropertiesScan

此时在，Project Structure中的Facets中的spring，对每个主工程，
导入`Code based configuration`，选择WingsAutoConfiguration，即可。

## 0D.10.Jooq隐秘的NullPointerException

在jooq映射enum类型时，如果converter错误，可能会出现以下NPE，不能通过stack定位问题，需要分析SQL

```text
java.lang.NullPointerException
at org.jooq.impl.DefaultExecuteContext.exception(DefaultExecuteContext.java:737)
at org.springframework.boot.autoconfigure.jooq.JooqExceptionTranslator.handle(JooqExceptionTranslator.java:83)
at org.springframework.boot.autoconfigure.jooq.JooqExceptionTranslator.exception(JooqExceptionTranslator.java:55)
at org.jooq.impl.ExecuteListeners.exception(ExecuteListeners.java:274)
at org.jooq.impl.AbstractQuery.execute(AbstractQuery.java:390)
```

## 0D.11.错误`Input length = 1`

```text
Failed to execute goal org.apache.maven.plugins:maven-resources-plugin:3.2.0:resources
(default-resources) on project xxx-common: Input length = 1
```

原因是maven-resources-plugin的filter目录中存在非文本文件(不可按字符串读取)，
不要降级到3.1.0，在nonFilteredFileExtension添加扩展名即可。

[Automatic Property Expansion Using Maven](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#howto-properties-and-configuration)

## 0D.12.通过mysql客户端能找到，wings查询不到数据

wings本身是时区敏感的，一般要求jvm和mysql在同一时区，主要体现在，
flywave版本管理和journal的delete_dt时，都采用了时间，可以快速发现问题。

Warlock启动时自动检查jvm，jdbc和mysql的时区，不一致时，在控制台以Error形式输出。

更多信息，参考[时间和时区](../2-faceless/2h-time-zone.md)

## 0D.13.无外网mysql如何执行flywave版本管理

建议在double check的情况下，手动执行和监控脚本。所以使用ssh Tunnel做端口转发。

`ssh -N -L 3336:127.0.0.1:3306 [USER]@[SERVER_IP]`

* `-N` Tells SSH not to execute a remote command.
* `-L` 3336:127.0.0.1:3306 本地端口，远端ip，远端端口

## 0D.14.swagger的问题

**从210版本，以SpringDoc取代SpringFox后**，使用swagger3.0，部分问题已不存在

`😱 Could not render n, see the console.`
是swagger前端js错误，可能是response对象层级过深，导致swagger扫描时间太长。

`Unable to find a model that matches key ...` 如，

* ModelKey{qualifiedModelName=ModelName{namespace='java.time', name='Instant'}
* ModelKey{qualifiedModelName=ModelName{namespace='java.time', name='LocalDateTime'}

springfox的swagger3.0.0有bug，会在3.0.1修复，
<https://github.com/springfox/springfox/issues/3452>

wings中可以通过暴露AlternateTypeRule bean，自动注入所以Docket中。

## 0D.15.反序列化时ClassCastException或Enum比较失败

涉及的反序列化lib包括，hazelcast, kryo, cache

* 完全一样的class，但是在反序列化时却抛出 ClassCastException
* 同一个Enum的hash和equals不同，导致比较或map失败

大概率是，开发时项目使用了spring-boot-devtools，导致IDE和jar处在不同的classloader。
IDE使用了devtools的`restart`, 而非IDE内的jar则是`base`。

* 方案一，wings中始终使用`spring.hazelcast.config`配置hazelcast
* 方案二，自己暴露Config或ClientConfig，并设置好classloader
* 方案三，配置spring-devtools.properties（不推荐）

不推荐在product环境使用devtool，参考springboot官方文档的[Known Limitations](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#using.devtools.restart.limitations)

## 0D.16.Hazelcast的OutOfMemoryError及CallerNotMemberException

当内存紧张时，hazelcast会出现OutOfMemoryError，然后集群以CallerNotMemberException拒绝此实例。

通常并发量级不过万，为实例jvm分配2-4G，主机预留一个1个实例的物理内存空闲可适用大部分场景。

> For this reason, we recommend that you plan to use only 60% of available memory,
> with 40% headroom to handle member failure or shutdown.

* <https://hazelcast.com/blog/how-much-memory-do-i-need-for-my-data/>
* <https://docs.hazelcast.com/hazelcast/5.1/configuration/understanding-configuration>

## 0D.17.建表时的`Table doesn't exist`

错误信息`Error Code: 1146. Table xxx doesn't exist`
这是个矛盾的现象，创建table，就是因为不存在啊，怎么不让我create呢。

这和文件系统的大小写有关，根据wings的Sql风格，建议全小写，snake_case。
此外，也建议在 mysqld 的配置上，增加 `lower_case_table_names=1`

<https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_lower_case_table_names>

## 0D.18.如何解压springboot生成的jar

通过executable=true生成的boot.jar，不能使用`jar -xzf`解压，需要`unzip`。
任何时候都推荐使用unzip解压，兼容性好，命令行简洁。

不能使用jar解压，是因为spring按executable zip的格式重新打包。

```bash
# 显示文件列表
unzip -l demo-example-1.0.0-SNAPSHOT.jar
# 查看文件内容
head demo-example-1.0.0-SNAPSHOT.jar
#!/bin/bash
#
#    .   ____          _            __ _ _
#   /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
#  ( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
#   \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
#    '  |____| .__|_| |_|_| |_\__, | / / / /
#   =========|_|==============|___/=/_/_/_/
#   :: Spring Boot Startup Script ::
#
```

## 0D.19.not eligible for auto-proxying

is not eligible for getting processed by all BeanPostProcessors
(for example: not eligible for auto-proxying)

Bean在spring中有载入顺序，`Processor`，`framework`和业务Bean应该分开。
若某些Bean因为依赖关系在Processor前加载，则不会被正确处理，可能影响业务。

若是经过排查后，对业务没有影响，那么可忽略该INFO级别的Warning。

## 0D.20.时区检查失败，无法启动应用

* 根据异常的提醒，设置正确的时区
* 确认jdbc驱动 mysql-connector版本不小于8.0.23
* 若不希望检查，设置`wings.warlock.check.tz-fail=false`
* 按提示，统一jdbc，wings的时区即可

## 0D.21.如何清理运行工程日志和临时文件

```bash
# 清理log和tmp文件
find . -name '*.log' -o -name '*.tmp'  | xargs rm -f
# 重新flatten
find . -name '.pom.xml' | xargs rm -f
```

## 0D.22.json的泛型和泛型类的反序列化

spring中，使用`ResolvableType`和`TypeDescriptor`描述类型。
Wings中，用`TypeSugar`来简化代码行并缓存结果。

```java
// Map<List<List<Long[]>>, String>
var c0 = ResolvableType.forClassWithGenerics(Map.class,
    ResolvableType.forClassWithGenerics(List.class,
        ResolvableType.forClassWithGenerics(List.class, Long[].class)
    ),
    ResolvableType.forClass(String.class)
);
var c1 = TypeSugar.resolve(Map.class, List.class, List.class, Long[].class, String.class);

Assertions.assertEquals(c0, c1);

var c2 = TypeDescriptor.map(Map.class,
    TypeDescriptor.collection(List.class,
        TypeDescriptor.collection(List.class, TypeDescriptor.valueOf(Long[].class))
    ),
    TypeDescriptor.valueOf(String.class)
);
var c3 = TypeSugar.describe(Map.class, List.class, List.class, Long[].class, String.class);

Assertions.assertEquals(c2, c3);
```

在Wings-3.2.130后，移除了fastjson和jackson的`TypeReference`，直接使用`Type`。

```java
// tp0,tp1,tp2  http://gafter.blogspot.com/2006/12/super-type-tokens.html
// TypeReference 一定要单行声明，避免自动推导的丢失类型。
Type tp0 = new com.google.common.reflect.TypeToken<List<String>>(){}.getType();
Type tp1 = new com.alibaba.fastjson2.TypeReference<List<String>>() {}.getType();
Type tp2 = new com.fasterxml.jackson.core.type.TypeReference<List<String>>() {}.getType();
// spring way
Type tp3 = ResolvableType.forClassWithGenerics(List.class, String.class).getType();
Type tp4 = TypeDescriptor.collection(List.class, TypeDescriptor.valueOf(String.class)).getResolvableType().getType();
// sugar
Type tp5 = TypeSugar.type(List.class, String.class);

Assertions.assertEquals(tp0, tp1);
Assertions.assertEquals(tp0, tp2);
Assertions.assertEquals(tp0, tp3);
Assertions.assertEquals(tp0, tp4);
Assertions.assertEquals(tp0, tp5);
```

## 0D.23.kotlin可能编译失败

* kotlin-maven-plugin 插件，要同时编译java和kotlin
* kotlin-stdlib-jdk8 这是最新的stdlib
* mvn profile中的maven.compiler.target 优先与pom.xml
* JAVA_HOME是否指定正确的jdk版本
* `wings-kotlin-*`的profile，在有`src/*/kotlin/`时自动生效

## 0D.24.ApplicationContextHelper空指针

Silencer的ApplicationContextHelper提供了静态的Ioc能力，有空指针情况

* 在SpringBoot生命周期的`PreparedEvent`之前使用
* 在不同的classloader中使用，比如devtool的`restart`

## 0D.25.IDEA无法打开工程，错误ClassFormatError

IDEA无法正常显示项目，关闭后也无法打开，但命令行下mvn正常。
Errors中有以下信息，升级IDEA或避免其Maven插件升级。

```text
java.lang.ClassFormatError:
Illegal exception table range in class file
kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns
```

## 0D.26.IDEA下properties文件乱码

在`Preferences` | `Editor` | `File Encodings` 下，
Default encoding for properties files 选择`UTF8`

若已经是UTF8，但仍有部分文件乱码，可以先切到iso8859在切回utf8

## 0D.27.编译正常，但IDEA说找不到类

可以在IDEA中清空当前工程的缓存和索引，File菜单下

* Cache Recovery / Rescan或Refresh试一下，若不好用，则
* Invalidate Caches and Restart，若仍不好用，则
* 删除工程，清理`.idea`等文件，重新import

## 0D.28.Jooq try-with-resources Warn

Jooq的DSL代码是try-with-resources安全的，若IDE代码审查出现以下警告，可以安全关闭。

选择`ignore AutoCloseable returned by this method`即可按类别关闭。

> Warning:(62, 18) 'SelectSelectStep<Record2<Long, String>>'
> used without 'try'-with-resources statement

## 0D.29.Statement with empty body

若IDE代码审查出现以下警告，可编辑器规则，挑选`Comments count as content`

## 0D.30.IDEA inspect code

排除 observer下的submodlue内容，尤其docs中的node内容。

Custom Scope `WingsCode`，Pattern设置如下，

`!file:*/docs//*&&!file:*/meepo//*&&!file:*/mirana//*`

## 0D.31.lombok错误 cannot find symbol

> cannot find symbol
> symbol:   method onMethod_()
> location: @interface lombok.Setter

当发生莫奇名秒的lombok编译错误时，需要按以下步骤排查，

* 首先排除IDE影响，确认纯控制台下的mvn是否正常
* 优先解决非lombok的编译错误
* 优先解决静态编写的代码的错误

## 0D.32.maven错误 Non-resolvable parent POM

> FATAL Non-resolvable parent POM for com.x.xx:xxx:${revision}:
> Could not find artifact pro.fessional:wings:pom:2.6.6.210-SNAPSHOT
> and 'parent.relativePath' points at wrong local POM

以上错误一般在首次安装中，原因是repository中找不到wings的pom，尝试以下方法，

* 若存在历史repo，设定$MVN_HOME/conf/settings.xml的localRepository指向
* 在当前pom中设置wings的ossrh-snapshots。非最新wings
* 自行 `maven install` wings工程到本地，最新wings

```xml
<repository>
    <id>ossrh-snapshots</id>
    <url>https://oss.sonatype.org/content/repositories/snapshots</url>
    <snapshots><enabled>true</enabled></snapshots>
    <releases><enabled>false</enabled></releases>
</repository>
```

## 0D.33.jackson Unrecognized field

> com.fasterxml.jackson.databind.exc.UnrecognizedPropertyException: Unrecognized field
> class ..., not marked as ignorable 2 known properties:

wings中默认配置jackson如下，mapper影响大小写，deserialization决定是否报错。

* mapper.ACCEPT_CASE_INSENSITIVE_PROPERTIES=false ([default false](https://github.com/FasterXML/jackson-databind/wiki/Mapper-Features))
* deserialization.FAIL_ON_UNKNOWN_PROPERTIES=false ([default true](https://github.com/FasterXML/jackson-databind/wiki/Deserialization-Features#jackson-onoff-features-deserializationfeature))

以上两者为`(false, true)`即默认值时，会出现Unrecognized field，通过以下方法可解决.

* 在类上`@JsonFormat(with = ACCEPT_CASE_INSENSITIVE_PROPERTIES)`
* 在属性上`@JsonProperty("Amount")`
* 调整wings配置（不推荐），CASE_INSENSITIVE有性能损耗，推延命名问题的发现
* 根据jackson2ObjectMapperBuilder，新建并配置Mapper

## 0D.34.javax.annotation.meta.When.MAYBE

> java: unknown enum constant javax.annotation.meta.When.MAYBE
> reason: class file for javax.annotation.meta.When not found

`When.MAYBE` 位于 `com.google.code.findbugs:jsr305:3.0.2`，
被`org.springframework.lang.Nullable`使用，但wings不依赖此包。

当使用`@Nullable`和`NxxNull`时，必须是`org.jetbrains.annotations`

## 0D.35.StackOverflowError 无限循环

* [StackOverflowError infinite loop](https://github.com/trydofor/professional-wings/issues/138)
* [StackOverflowError endless loop](https://github.com/trydofor/professional-wings/issues/158)

`401` 或 `403`的 forward 到 “secured” 的登录页面会触发无限循环，wings默认，

* `wings.warlock.security.anonymous` - 禁止 anonymous
* `wings.enabled.warlock.sec-check-url` - 检查URL冲突

## 0D.36.SpringMvc常见拦截的区别

* `Filter` - 作用于servlet (a)
* `Aop` - 作用于方法 (b)
* `HandlerInterceptor` - 作用于 `@Controller` (a)
* `@ControllerAdvice` - 仅定义 `@Component`
* `RequestBodyAdvice` -  仅作用于 `@RequestBody` (c)
* `ResponseBodyAdvice` - 仅作用于 `@ResponseBody` (c)

其中，需要注意的地方有，

* (a) 如读取输入流，会引发流读尽(EOF)的问题
* (b) 可直接获取参数，避免输入流读尽的问题
* (c) 无输入流读尽问题

## 0D.37.显示或隐藏异常堆栈

有些异常，不需要堆栈，比如用户输入错误，仅返回提示信息即可。
有些异常，需要记录日志，以便调查或统计。那么如何微调这些情况呢？

* CodeException - 是否填充堆栈（默认无堆栈）
  - 全局属性 `wings.silencer.tweak.code-stack=false`
  - 线程级 `TweakStack.tweakXxx()`
  - 业务级 `TweakStack.tweakCode()`
* DefaultExceptionResolver - 以下默认不打印堆栈
  - HttpStatusException
  - TerminalContextException
  - CodeException
  - DataResult
  - AuthenticationException
  - AccessDeniedException

若需要微调以上堆栈配置，可以自定义 `DefaultExceptionResolver.Handler`。

## 0D.38.缺少DAO, "Skipping DAO generation"

jooq生成代码后，没有`Dao`，但是有`Pojo`，有 `Skipping DAO generation`日志，
需要检查数据表，是否没有主键，其相关日志和代码如下，

```java
// JavaGenerator -- Skipping DAO generation
UniqueKeyDefinition key = table.getPrimaryKey();
if (key == null) {
    log.info("Skipping DAO generation", out.file().getName());
    return;
}
```

## 0D.39.@Transactional在接口还是具体类

[官方文档](https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html)建议放到具体类上，Wings建议都放置，接口上的为说明锲约，实现类上的为功能实现。

当接口中存在`default`方法时，会导致`@Transactional`失效，原因和内部调用一样。此时，

* `Override`每个方法，在class 上`@Transactional`
* 编程方式实现事务方法，如 `TransactionHelper`, `TransactionTemplate`

## 0D.40.git submodule HEAD detached

工程默认以 shallow 检出 main 分支，submodule的commit为 detached 状态，

当 commit 在 main 分支时，以 docs 为例，此时 `fetch origin` 可以获取分支。

```bash
git status
#> HEAD detached at c30360b
#> nothing to commit, working tree clean

git fetch origin
git checkout main
#> Switched to branch 'main'
#> Your branch is up to date with 'origin/main'.
```

当 commit 在 develop 时，以 mirana 为例，需要切换分支，但 `fetch --all` 却无法获取分支。

```bash
## branch = main shallow = true
git branch -r
#> origin/HEAD -> origin/main
#> origin/main

## fetch --all # 无效，仅有main分支
# git fetch --all -v
#> From github.com:trydofor/professional-mirana
#>  = [up to date] main -> origin/main

## 查看远程分支
git ls-remote -h origin
#> 4468526dab9 refs/heads/develop
#> 96d19eb57d3 refs/heads/main

## 检出 fetch 设置
git config --get-all remote.origin.fetch
#> +refs/heads/main:refs/remotes/origin/main
git remote set-branches origin '*'
## 获取并检出
git fetch origin -av
git checkout -t origin/develop

## 反初始 mirana 子模块
#git submodule deinit -f -- observe/mirana
## 重新初始 mirana 子模块
#git submodule update --remote --init -- observe/mirana
```

## 0D.41.快速而优雅的停机

wings的线程池，默认配置如下，会等待任务（执行中及队列中）结束或超时，

* shutdown.await-termination=true
* shutdown.await-termination-period=###

如果不需要等待，可参考以下功能，监听shutdown，取消队列中任务，

* spring `@Scheduled` - 会misfire
* tiny mail - 有misfire检查
* tiny task - 有misfire检查

当 await-termination=false时，线程池会发中断信息到所有线程，

* 执行中任务，可执行结束或被中断（如有sleep,wait,join或检查中断状态）
* 队列中任务，被动丢失，会主动取消

所以，当处理异步或未来任务时，需要考虑中断，取消和关闭的情况，

* 可丢失型，await-termination=false
* 可恢复型，await-termination=true，主动处理中断或取消

## 0D.42.git fixup 提交

```bash
git log --oneline -n 5 | cat -n # check commit history
# 1  86f226c 📝 changelog of 337, 346
# 2  0fccb54 ✨ ssh+nginx to test Oauth
# 3  32d98bc 📝 changelog of 301.741
# 4  fb31cf0 📝 semver detail meaning
# 5  0fb5232 📝 typo Wings TerminalContext
git add . # add all changes
git status # check changes

## fixup by hash or ^4
git commit --fixup=fb31cf0 # HEAD^4
git rebase -i --autosquash fb31cf0^ # HEAD^5
git push -f
```
