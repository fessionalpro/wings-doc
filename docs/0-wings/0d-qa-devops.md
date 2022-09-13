---
isOriginal: true
icon: repair
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
git clone https://gitee.com/trydofor/pro.fessional.wings.git
cd pro.fessional.wings
example/wings-init-project.sh

# 如果不能执行bash，那么自行编译和执行
cd example/src/test/java/
pro/fessional/wings/example/exec/Wings0InitProject.java
```

## 0D.03.jackson和fastjson

wings中和springboot一样，默认采用了jackson进行json和xml绑定。
不过wings的中对json的格式有特殊约定，比如日期格式，数字以字符串传递。
再与外部api交换数据时可能格式不匹配，这时需要用有background

* 使用2套jackson配置
* 使用jackson注解 @JsonRawValue
* 使用fastjson(不推荐，需1.2.83+，SafeMode, 安全漏洞)

在Jackson和Fastjson的使用上，考虑到安全及兼容性，遵循以下约定

* FastJson用于①安全环境的读写，②对不安全的写，不读入外部json
* FastJson用于静态环境，即不能优雅注入jackson的情况
* 此外，都应该使用Jackson

在wings中，以Fastjson2及其兼容包替代了fastjson。注意以下lib依赖

* JustAuth - fastjson 1.2.83 无AutoType，默认features的parse

## 0D.04.类型间Mapping比较

根据以下文章，推荐使用静态性的`MapStruct`和简单的`SimpleFlatMapper`。

* [Quick Guide to MapStruct](https://www.baeldung.com/mapstruct)
* [Mapping Collections with MapStruct](https://www.baeldung.com/java-mapstruct-mapping-collections)
* [MapStruct 性能比较](https://www.baeldung.com/java-performance-mapping-frameworks)
* [MapStruct ide&mvn支持](https://mapstruct.org/documentation/installation/)
* [Jdbc-Performance](https://github.com/arnaudroger/SimpleFlatMapper/wiki/Jdbc-Performance-Local-Mysql)

在编码过程中，我们经常要处理各种O的转换，赋值，比如DTO，PO，VO，POJO。
同时我们又希望强类型，以便可以通过IDE提示提供效率，并把错误暴露在编译时。
这样就一定要避免弱类型(map,json)和反射（bean copy）,势必需要代码生成工具。

对于比较复杂的mapping，使用expression，qualifiedByName，spring注入。
自动生成的代码位于`target/generated-sources/annotations/`

在wings中，推荐使用列编辑和正则（分享视频有讲），对于使用MapStruct的时候，
可以使用wings提供的`wgmp`(live template)做`A2B`的into生成器。

* 在业务层代码，推荐MapStruct或列编辑和正则（分享视频有讲）手工制品。
* 在jdbc中推荐`SimpleFlatMapper`或手工RowMapper，避免使用`BeanPropertyRowMapper`。
* 在jooq中推荐jooq自动生成的record，或SimpleFlatMapper。

纯wings中的converter以`-or`结尾(convertor)，以和其他框架的converter区分。  
包名以converter为准，类名以目的区分，通常纯wings的使用`-or`，其他用`-er`。

## 0D.05.文件系统或对象存储

需要权限才能访问的文件资源，不可以放到CDN，需要自建对象存储或使用物理文件系统，
当使用本地FS是，需要注意子文件或子目录的数量限制，一般控制在30k以下，理由。

* The ext2/ext3 filesystems have a hard limit of 31998 links.
* 数量过多时，ls读取巨慢，索引也会慢。

如果自建对象存储，推荐以下方案

* <https://docs.min.io/cn/> 推荐使用
* <https://github.com/happyfish100/fastdfs>

## 0D.06.客户端或服务器信息

收集用户画像，需要获得UA信息，可使用以下工具包

* <https://www.bitwalker.eu/software/user-agent-utils> 浏览器（停止维护）
* <https://github.com/browscap/browscap/wiki/Using-Browscap> 浏览器工具家族
* <https://github.com/blueconic/browscap-java> 浏览器（推荐）

获取服务器运行信息，使用以下工具包

* <https://github.com/oshi/oshi> 系统信息

## 0D.08.关于http密码安全

* 密码长度不可设置上限，一般要求8位以上
* 支持中文密码，标点，全角半角
* 不发送明文密码，密码初级散列策略为md5(pass+':'+pass).toUpperCase(Hex大写)
* js侧md5需要支持UTF8，如 <https://github.com/emn178/js-md5>

## 0D.09.关于内网穿透，第三方集成调试

在Oauth，支付等第三方集成调试时，需要有公网ip或域名，然后把公网请求转发到开发机调试。

* 临时用 ssh - `ssh -R 9988:127.0.0.1:8080 user@remote`
* 持久用 frp - <https://gofrp.org/docs/>
* 简单用 netapp - <https://natapp.cn/>

## 0D.10.IDEA提示component/scanned

导入wings工程，Idea会无法处理spring.factories中的WingsAutoConfiguration，会报类似以下信息

Not registered via @EnableConfigurationProperties, marked as Spring component,
or scanned via @ConfigurationPropertiesScan

此时在，Project Structure中的Facets中的spring，对每个主工程，
导入`Code based configuration`，选择WingsAutoConfiguration，即可。

## 0D.11.Jooq隐秘的NullPointerException

在jooq映射enum类型是，如果converter错误，可能会出现以下NPE，不能通过stack定位问题，需要分析SQL

```text
java.lang.NullPointerException
at org.jooq.impl.DefaultExecuteContext.exception(DefaultExecuteContext.java:737)
at org.springframework.boot.autoconfigure.jooq.JooqExceptionTranslator.handle(JooqExceptionTranslator.java:83)
at org.springframework.boot.autoconfigure.jooq.JooqExceptionTranslator.exception(JooqExceptionTranslator.java:55)
at org.jooq.impl.ExecuteListeners.exception(ExecuteListeners.java:274)
at org.jooq.impl.AbstractQuery.execute(AbstractQuery.java:390)
```

## 0D.12.错误`Input length = 1`

```text
 Failed to execute goal org.apache.maven.plugins:maven-resources-plugin:3.2.0:resources
  (default-resources) on project xxx-common: Input length = 1
```

原因是maven-resources-plugin的filter目录中存在非文本文件(不可按字符串读取)，
不要降级到3.1.0，在nonFilteredFileExtension添加扩展名即可。

[Automatic Property Expansion Using Maven](https://docs.spring.io/spring-boot/docs/2.6.6/reference/htmlsingle/#howto-properties-and-configuration)

## 0D.13.通过mysql客户端能找到，wings查询不到数据

wings本身是时区敏感的，一般要求jvm和mysql在同一时区，主要体现在，
flywave版本管理和journal的delete_dt时，都采用了时间，可以快速发现问题。

Warlock启动时自动检查jvm，jdbc和mysql的时区，不一致时，在控制台以Error形式输出。

更多信息，参考[时间和时区](../2-faceless/2h-time-zone.md)

## 0D.14.无外网mysql如何执行flywave版本管理

建议在double check的情况下，手动执行和监控脚本。所以使用ssh Tunnel做端口转发。

`ssh -N -L 3336:127.0.0.1:3306 [USER]@[SERVER_IP]`

* -N Tells SSH not to execute a remote command.
* -L 3336:127.0.0.1:3306 本地端口，远端ip，远端端口

## 0D.15.swagger的问题

**从210版本，以SpringDoc取代SpringFox后**，使用swagger3.0，部分问题已不存在

`😱 Could not render n, see the console.`
是swagger前端js错误，可能是response对象层级过深，导致swagger扫描时间太长。

`Unable to find a model that matches key ...` 如，

* ModelKey{qualifiedModelName=ModelName{namespace='java.time', name='Instant'}
* ModelKey{qualifiedModelName=ModelName{namespace='java.time', name='LocalDateTime'}

springfox的swagger3.0.0有bug，会在3.0.1修复，
<https://github.com/springfox/springfox/issues/3452>

wings中可以通过暴露AlternateTypeRule bean，自动注入所以Docket中。

## 0D.16.反序列化时ClassCastException或Enum比较失败

涉及的反序列化lib包括，hazelcast, kryo, cache

* 完全一样的class，但是在序列化时却抛出 ClassCastException。
* 同一个Enum的hash和equals不同，导致比较或map失败。

大概率是，开发时项目使用了spring-boot-devtools，导致IDE和jar处在不同的classloader。
IDE使用了devtools的`restart`, 而非IDE内的jar则是`base`。

* 方案一，wings中始终使用`spring.hazelcast.config`配置hazelcast
* 方案二，自己暴露Config或ClientConfig，并设置好classloader
* 方案三，配置spring-devtools.properties（不推荐，wings采用）

在开发wings自身时，因为序列化需要，demo工程对wings的依赖，都希望devtools造成干扰，

不推荐在product环境使用devtool，参考springboot官方文档的[Known Limitations](https://docs.spring.io/spring-boot/docs/2.6.6/reference/htmlsingle/#using.devtools.restart.limitations)

## 0D.17.Hazelcast的`OutOfMemoryError`及`CallerNotMemberException`

当内存紧张时，hazelcast会出现OutOfMemoryError，然后集群以CallerNotMemberException拒绝此实例。

通常并发量级不过万，为实例jvm分配2-4G，主机预留一个1个实例的物理内存空闲可适用大部分场景。

> For this reason, we recommend that you plan to use only 60% of available memory,
> with 40% headroom to handle member failure or shutdown.

* <https://hazelcast.com/blog/how-much-memory-do-i-need-for-my-data/>
* <https://docs.hazelcast.org/docs/4.0.3/manual/html-single/index.html#sizing-practices>

## 0D.18.建表时的`Table doesn't exist`

错误信息 Error Code: 1146. Table xxx doesn't exist
这其中有些有趣的现象，结果就是我创建table，就是因为不存在啊，怎么不让我create呢。

和文件系统的大小写有关，根据wings的Sql风格，建议全小写，snake_case。
此外，也建议在 mysqld 的配置上，增加 `lower_case_table_names=1`

<https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_lower_case_table_names>

## 0D.19.如何解压springboot生成的jar

制作executable=true的boot.jar时，不能使用`jar -xzf`解压，需要`unzip`。
任何时候都推荐使用unzip解压，因为 jar本身也是zip格式。

为什么 executable jar 不能使用jar解压呢，因为spring按executable zip的格式重新打包。

```bash
# 显示文件列表
unzip -l demo-exmaple-1.0.0-SNAPSHOT.jar
# 查看文件内容
head demo-exmaple-1.0.0-SNAPSHOT.jar
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

## 0D.20.not eligible for auto-proxying

is not eligible for getting processed by all BeanPostProcessors
(for example: not eligible for auto-proxying)

spring的Bean在其生命周期有载入顺序，Processor，framework和业务Bean应该分开。
若某些Bean因为依赖关系在Processor前加载，则不会被Process，可能影响业务。

若是经过排查后，对业务没有影响，那么可忽略该INFO级别的Warning。

## 0D.21.时区检查失败 DIFF TIMEZONE，应用无法启动

* 根据异常的提醒，设置正确的时区
* 确认jdbc驱动 mysql-connector版本不小于8.0.23
* 若不希望检查，设置`wings.warlock.check.tz-fail=false`

## 0D.22.如何清理运行工程日志和临时文件

```bash
# 清理log和tmp文件
find . -name '*.log' -o -name '*.tmp'  | xargs rm -f 
# 重新flatten
find . -name '.pom.xml' | xargs rm -f
```

## 0D.23.json的泛型，深度泛型类的反序列化

spring中，使用ResolvableType和TypeDescriptor描述类型。
```java
TypeDescriptor.map(Map.class, strTd, strTd)
TypeDescriptor.collection(List.class, strTd)
ResolvableType.forClassWithGenerics(R.class, Dto.class)
```

FastJson中，使用com.alibaba.fastjson.TypeReference，
注意，TypeReference一定要单行声明，避免自动推导，而丢失类型。
```java
// 以下类型等价，
Type tp1 = new TypeReference<R<Dto>>(){}.getType();
Type tp2 = ResolvableType.forClassWithGenerics(R.class, Dto.class).getType();
```

## 0D.24.kotlin可能编译失败

* kotlin-maven-plugin 插件，要同时编译java和kotlin
* kotlin-stdlib-jdk8 这是最新的stdlib
* mvn profile中的maven.compiler.target 优先与pom.xml
* JAVA_HOME是否指定正确的jdk版本

## 0D.25.ApplicationContextHelper空指针

Silencer的ApplicationContextHelper提供了静态的Ioc能力，有空指针情况

* 在SpringBoot生命周期的PreparedEvent之前使用
* 在不同的classloader中使用，比如devtool的restart

## 0D.26.IDEA无法打开工程，错误ClassFormatError

IDEA无法正常显示项目，关闭后也无法打开，但命令行下mvn正常。
Errors中有以下信息，升级IDEA或避免其Maven插件升级。

```text
java.lang.ClassFormatError: 
Illegal exception table range in class file 
kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns
```

## 0D.27.IDEA下properties文件乱码

在`Preferences` | `Editor` | `File Encodings` 下，
Default encoding for properties files 选择`UTF8`
