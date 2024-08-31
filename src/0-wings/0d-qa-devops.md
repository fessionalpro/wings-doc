---
isOriginal: true
icon: fab fa-dev
category:
  - WingsGod
  - Topic
---

# 0D.DevOps Topic

Coding, developing, operating online, and more.

## 0D.01.getHostName() takes a long time

>InetAddress.getLocalHost().getHostName() took 5004 milliseconds to respond.
>Please verify your network configuration (macOS machines may need to add entries to /etc/hosts)

```bash
hostname
# output trydofors-Hackintosh.local

cat /etc/hosts
# insert trydofors-Hackintosh.local after localhost
127.0.0.1     localhost trydofors-Hackintosh.local
```

## 0D.02.How to Create a Project

```bash
git clone https://github.com/trydofor/professional-wings.git
cd professional-wings
observe/scripts/wings-init-project.sh

# compile and run it yourself without bash script
cd cd example/winx-devops/src/test/java
com/moilioncircle/wings/devops/init/WingsInitProjectSwing.java
```

## 0D.03.Jackson and Fastjson

In wings, as in springboot, jackson is used by default for json and xml binding.
However, wings has special conventions for json format, such as date and number are passed as string.
When exchanging data with external APIs, the format may not match, so you need to use an alternative solution.

* Use 2 sets of jackson configuration
* Use jackson annotation @JsonRawValue
* Use fastjson2

When using Jackson and FastJson, the following conventions are followed for security and compatibility reasons,

* FastJson is used for ① reading and writing in a secure environment, ② insecure writing, not reading the external json.
* FastJson is used in static environments, i.e. where Jackson cannot be gracefully injected.
* In addition, everyone should use Jackson.

Fastjson has been replaced by Fastjson2 in wings. note the following lib dependencies

* JustAuth-1.16.5 - fastjson-1.2.83 no AutoType, parse with default features

Given the current Fastjson-2.0.18 compatibility and stability is still very problematic and should be avoided.

* FastJsonHelper - internal or transient data, static method
* JacksonHelper - non-web tier, without timezone/i18n auto convertion, static method
* ObjectMapper - web tier, timezone/i18n auto convertion, inject Bean

NOTE: json format has compatibility issues, the following are the diff, see JsonHelperCompatibleTest for details.

* Jackson Default
  - `transient` output
  - `@Transient` No output
  - `byte[]` as base64, `[]` as `""`
  - `char[]` as String, `[]` as `""`
  - WRITE_DATES_AS_TIMESTAMPS as timestamp UTC
  - `ZonedDateTime` parse as `2023-04-04T21:07:08Z` lost timezone
  - `OffsetDateTime` parse as `2023-04-05T10:07:08Z` lost timezone
* Jackson Wings Help
  - `transient` No output
  - WRITE_DATES_AS_TIMESTAMPS = false
  - `LocalDateTime` as `"2023-04-05T06:07:08"`
  - `ZonedDateTime` as `"2023-04-05T06:07:08[America/New_York]"` keep timezone
  - `OffsetDateTime` as `"2023-04-05T06:07:08-04:00"` keep timezone
* Jackson Wings Bean
  - `LocalDateTime` as `"2023-04-05 06:07:08"`
  - `ZonedDateTime` as `"2023-04-05 06:07:08 Asia/Shanghai"`
  - `OffsetDateTime` as `"2023-04-05 06:07:08 +08:00"`
  - `float`,`double` as `"3.14159"`
  - `BigDecimal`,`BigInteger` as `"299792458"`
* Fastjson Default
  - `transient` No output
  - `@Transient` output
  - `LocalDateTime` as `"2023-04-05 06:07:08"`
  - `ZonedDateTime` as `"2023-04-05T06:07:08[America/New_York]"`
  - `OffsetDateTime` as `"2023-04-05T06:07:08-04:00"`

## 0D.04.Comparison of Bean Mapping

According to the following article, it is recommended to use the static type-safe of `MapStruct`.

* [Quick Guide to MapStruct](https://www.baeldung.com/mapstruct)
* [Mapping Collections with MapStruct](https://www.baeldung.com/java-mapstruct-mapping-collections)
* [MapStruct ide&mvn Support](https://mapstruct.org/documentation/installation/)

While coding, we often have to deal with various O-data mapping and assignment like DTO, PO, VO, POJO.
At the same time we want strongly typed data so that IDE hints  are efficient and errors are detected at compile time.
This must avoid weak typing (map, json) and reflection (bean copy), which inevitably require code generation tools.

For more complex mapping, use expression, qualifiedByName, spring injection.
The automatically generated code is located in `target/generated-sources/annotations/`

In wings, it is recommended to use the column editor or RegExp (talked in video share),

* In the business layer code, we recommend MapStruct or column editing or RegExp replacement to do data mapping.
* In jdbc recommended manual RowMapper, avoid using `BeanPropertyRowMapper`.
* In jooq recommended jooqgen generated record, currently do not need other mapper.

for using MapStruct, wings have `wgmp` and `wgme` live template to do `A$B` conversion,

* `wgmp` - mapping of `A` and `B`,
* `wgme` - mapping of `A` itself
* if inside `A`, `$$` to `A`, `$B` to `B`

The converters in pure wings end with `-or` (convertor) to distinguish from other framework converters.
Package names are based on the converter, and class names are distinguished by purpose,
usually using `-or` for pure wings and `-er` for others.

According to the following benchmark review of JMH, corresponding to dynamic Mapper can also be considered.

* [MapStruct Performance](https://www.baeldung.com/java-performance-mapping-frameworks)
* [java-object-mapper-benchmark](https://github.com/arey/java-object-mapper-benchmark)

The main comparison includes project activity, usage type, dependency complexity and resolved issues count.

* `SimpleFlatMapper` is not active
* `ModelMapper` is too large, not recommended for now
* `JMapper` performance and use are very good, but the project is not active
* `bull` support bean and map mapping, more active, easy to use, but the performance is general

upgraded java-object-mapper-benchmark dependency to java on the laptop simple execution.

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

## 0D.05.File System and Object Storage

File resources that require access permissions should not be placed on the CDN,
and should be stored in your own object storage or physical file system.
When using local FS, you need to be aware of the limit of the number of subfiles,
which is usually controlled below 30k, for the following reasons.

* The ext2/ext3 filesystems have a hard limit of 31998 links.
* When the number is too large, reads and indexes are too slow.

If you build your own object storage, the following solution is recommended

* <https://docs.min.io/cn/> Recommended
* <https://github.com/happyfish100/fastdfs>

## 0D.06.Client and Server Info

To collect user profiles, parse UA information, use the following,

* <https://www.bitwalker.eu/software/user-agent-utils> Browser (discontinued)
* <https://github.com/browscap/browscap/wiki/Using-Browscap> Browser Tool Family
* <https://github.com/blueconic/browscap-java> Browser (recommended)

To get information about server, use the following,

* <https://github.com/oshi/oshi>

## 0D.07.Security of Password

* Do NOT limit the max length of password, generally more than 8 chars
* Support Unicode chars, punctuation, full/half chars, eg. Chinese password
* Do not send in plaintext, simple password hash strategy is md5(pass+':'+pass).toUpperCase(Hex capitalization)
* js side md5 must support UTF8, eg. <https://github.com/emn178/js-md5>
* Secure data request must be https or other secure channel

## 0D.08.NAT and Oauth Debug

When debugging third-party integrations such as Oauth, payments, etc., you need to have a public ip or domain
to forward public requests to the development machine for debugging.

* Temporarily with ssh - `ssh -R 9988:127.0.0.1:8080 user@remote`
* persistent with frp - <https://gofrp.org/docs/>
* Simple with netapp - <https://natapp.cn/>

## 0D.09.IDEA Hits Component/Scanned

When importing the Wings project, IDEA cannot be able to handle the WingsAutoConfiguration in spring.factsories,
and will report a message similar to the following,

Not registered via @EnableConfigurationProperties, marked as Spring component,
or scanned via @ConfigurationPropertiesScan

At this point, in the Project Structure/Facets/spring, for each main project import `Code based configuration`,
select WingsAutoConfiguration.

## 0D.10.Hidden NullPointerException in Jooq

When mapping enum types in jooq, if the converter is wrong, the following NPE may occur,
and the problem cannot be located by stack, and need to analyze the SQL

```text
java.lang.NullPointerException
at org.jooq.impl.DefaultExecuteContext.exception(DefaultExecuteContext.java:737)
at org.springframework.boot.autoconfigure.jooq.JooqExceptionTranslator.handle(JooqExceptionTranslator.java:83)
at org.springframework.boot.autoconfigure.jooq.JooqExceptionTranslator.exception(JooqExceptionTranslator.java:55)
at org.jooq.impl.ExecuteListeners.exception(ExecuteListeners.java:274)
at org.jooq.impl.AbstractQuery.execute(AbstractQuery.java:390)
```

## 0D.11.`Input length = 1` Error

```text
 Failed to execute goal org.apache.maven.plugins:maven-resources-plugin:3.2.0:resources
  (default-resources) on project xxx-common: Input length = 1
```

The reason is that there are non-text files (not readable by string) in the filter directory of the maven-resources-plugin.
Do not downgrade to 3.1.0, just add the extension name in nonFilteredFileExtension.

[Automatic Property Expansion Using Maven](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#howto-properties-and-configuration)

## 0D.12.Data Can Be Selected, But Wings Cannot

Wings is timezone sensitive and generally requires jvm and mysql to be in the same timezone,
mainly because, flywave's version management and journal's delete_dt time use datetime,
which can quickly find the time difference problem.

Warlock automatically checks the timezone between jvm, jdbc and mysql at startup,
and prints an error to console if they do not match.

For more information, see [Time and Time Zone](../2-faceless/2h-time-zone.md)

## 0D.13.How To Flywave The Internal Mysql

It is recommended to run and monitor the script manually with double check.
So use ssh Tunnel to do the port forwarding.

`ssh -N -L 3336:127.0.0.1:3306 [USER]@[SERVER_IP]`

* `-N` Tells SSH not to execute a remote command.
* `-L` 3336:127.0.0.1:3306 local-port, remote-ip, remote-port

## 0D.14.Swagger's Problem

**After version 210, replacing SpringFox with SpringDoc**, using swagger 3.0, some problems no longer exist.

`😱 Could not render n, see the console.`
It is swagger front-end js error, may be the response object level is too deep,
resulting in swagger scan time is too long.

`Unable to find a model that matches key ...`

* ModelKey{qualifiedModelName=ModelName{namespace='java.time', name='Instant'}
* ModelKey{qualifiedModelName=ModelName{namespace='java.time', name='LocalDateTime'}

springfox swagger 3.0.0 has bugs that will be fixed in 3.0.1.
<https://github.com/springfox/springfox/issues/3452>

Wings can automatically inject the exposed AlternateTypeRule bean into the docket.

## 0D.15.ClassCastException or Enum Comparison Failure During Deserialization

The deserialization libs involved include, hazelcast, kryo, cache

* Exactly the same class, but throwing ClassCastException on deserialization
* The hash and equals of the same Enum are different, causing the compare or map to fail

Most likely, the project uses spring-boot-devtools during development, which causes the IDE and jar to be in different classloaders.
The IDE uses `restart` of devtools, while the non-IDE jar is `base`.

* Option 1, always use `spring.hazelcast.config` in wings to configure hazelcast
* Option 2, expose your own Config or ClientConfig, and set up a classloader
* Option 3, configure spring-devtools.properties (not recommended)

not recommended in the product environment using devtool, refer to the springboot official documentation
[Known Limitations](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#) using.devtools.restart.limitations)

## 0D.16.OutOfMemoryError/CallerNotMemberException in Hazelcast

If memory is low, hazelcast will throw OutOfMemoryError and then the cluster will
reject the instance with CallerNotMemberException.

Usually the concurrency level is not more than 10,000, allocating 2-4G for instance jvm and reserving
a physical memory free for 1 instance in the host can be suitable for most scenarios.

> For this reason, we recommend that you plan to use only 60% of available memory,
> with 40% headroom to handle member failure or shutdown.

* <https://hazelcast.com/blog/how-much-memory-do-i-need-for-my-data/>
* <https://docs.hazelcast.com/hazelcast/5.1/configuration/understanding-configuration>

## 0D.17.`Table doesn't exist` When Creating Table

Error message `Error Code: 1146. table xxx doesn't exist`.
This is a contradiction, creating a table just because it does not exist, why won't it allow me to create it.

This is related to the case-sensitive file system, wings Sql style recommends all lowercase, snake_case.
In addition, it is also recommended to add `lower_case_table_names=1` to the mysqld configuration

<https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_lower_case_table_names>

## 0D.18.How to Unpack the Springboot Jar

The boot.jar generated by executable=true cannot be extracted using `jar -xzf`, it needs `unzip`.
It is always recommended to use unzip for compatibility and command line simplicity.

You can't use jar to unzip because spring repacks in the executable zip format.

```bash
# show the file list
unzip -l demo-exmaple-1.0.0-SNAPSHOT.jar
# show the content
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

## 0D.19.Not Eligible for Auto-proxying

is not eligible for getting processed by all BeanPostProcessors
(for example: not eligible for auto-proxying)

There is a loading order for beans in spring, `Processor`, `framework` and business beans should be separated.
If some beans are loaded before the Processor because of dependencies,
they will not be processed correctly and may affect the business.

If there is no impact on the business after troubleshooting, then the INFO level Warning can be ignored.

## 0D.20.Timezone check failed on application startup

* Set the correct timezone according to the alert of the exception
* Make sure the jdbc driver mysql-connector version is not lower than 8.0.23
* Set `wings.warlock.check.tz-fail=false` if you don't want the check
* Just follow the prompts and unify the time zones of jdbc and wings

## 0D.21.Clean the Log/Tmp Files

```bash
# clean log and tmp
find . -name '*.log' -o -name '*.tmp'  | xargs rm -f
# clean flattened pom
find . -name '.pom.xml' | xargs rm -f
```

## 0D.22.Generics in Json and Deserialization

In spring, the type is described by `ResolvableType` and `TypeDescriptor`.
in Wings, use `TypeSugar` to simple code and cache the result.

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

After Wings-3.2.130, remove `TypeReference` of fastjson and jackson, use `Type` directly.

```java
// tp0,tp1,tp2  http://gafter.blogspot.com/2006/12/super-type-tokens.html
// TypeReference must be a single line to avoid type loss during auto derivation.
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

## 0D.23.Kotlin May Fail to Compile

* kotlin-maven-plugin, to compile both java and kotlin
* kotlin-stdlib-jdk8 This is the latest stdlib
* maven.compiler.target in the mvn profile takes precedence over pom.xml
* whether JAVA_HOME specifies the correct jdk version
* `wings-kotlin-*` profile is auto active if `src/*/kotlin/` is available

## 0D.24.ApplicationContextHelper's NullPointerException

Silencer's ApplicationContextHelper provides a static Ioc capability with a NPE case,

* Use before `PreparedEvent` in SpringBoot lifecycle
* Used in different classloaders, such as devtool's `restart`

## 0D.25.ClassFormatError, IDEA cannot open the project

IDEA does not display the project properly and cannot be opened after closing it, but mvn works fine in the command line.
Errors has the following message, upgrade IDEA or avoid its Maven plugin upgrade.

```text
java.lang.ClassFormatError:
Illegal exception table range in class file
kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns
```

## 0D.26.Garbled Chars in properties under IDEA

in `Preferences` | `Editor` | `File Encodings` set
Default encoding for properties files to `UTF8`

If it is already UTF8, but some files are still garbled,
you can switch to iso8859 and then back to utf8.

## 0D.27.Compile Fine, but IDEA says: Class not found

You can clear the cache and index of the current project in IDEA, under the File menu

* try Cache Recovery / Rescan or Refresh, if it doesn't work well, then
* Invalidate Caches and Restart, if it still doesn't work, then
* Delete the project, clean up the `.idea` and other files, re-import

## 0D.28.Jooq try-with-resources Warn

Jooq's DSL code is try-with-resources safe. it can safely close the following warning appears in the IDE code check.

Select `ignore AutoCloseable returned by this method` to close it by category.

> Warning:(62, 18) 'SelectSelectStep<Record2<Long, String>>'
> used without 'try'-with-resources statement

## 0D.29.Statement with empty body

If the following warning appears in the IDE code review,
you can edit the rule and pick `Comments count as content`

## 0D.30.IDEA Inspect Code

Exclude the submodlue content under observer, especially the node content in docs.

Custom Scope `WingsCode`, Pattern is set as follows.

`!file:*/docs//*&&!file:*/meepo//*&&!file:*/mirana//*`

## 0D.31.Lombok Error: cannot find symbol

> cannot find symbol
> symbol:   method onMethod_()
> location: @interface lombok.Setter

When a lombok compilation error occurs, you need to follow these steps to troubleshoot it.

* First exclude the IDE influence, and confirm that mvn works well under the console
* Prioritize fixing non-lombok compilation errors
* Prioritize fixing errors in statically written code

## 0D.32.maven Error: Non-resolvable parent POM

> FATAL Non-resolvable parent POM for com.x.xx:xxx:${revision}:
> Could not find artifact pro.fessional:wings:pom:2.6.6.210-SNAPSHOT
> and 'parent.relativePath' points at wrong local POM

The above error is usually in the first installation, the reason is the repository
can't find the wings pom, try the following,

* If the repo exists, set the localRepository in $MVN_HOME/conf/settings.xml to it
* set ossrh-snapshots for wings in the current pom. non-latest wings
* DIY `maven install` wings project to local, use latest wings

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

The wings jackson config is as follows, mapper affects case, and deserialization affects errors.

* mapper.ACCEPT_CASE_INSENSITIVE_PROPERTIES=false ([default false](https://github.com/FasterXML/jackson-databind/wiki/Mapper-Features))
* deserialization.FAIL_ON_UNKNOWN_PROPERTIES=false ([default true](https://github.com/FasterXML/jackson-databind/wiki/Deserialization-Features#jackson-onoff-features-deserializationfeature))

When the above is `(false, true)` (by default), the Unrecognized field will appear, resolved by,

* `@JsonFormat(with = ACCEPT_CASE_INSENSITIVE_PROPERTIES)` on Class
* `@JsonProperty("Amount")` on Field
* change wings config (not recommended), CASE_INSENSITIVE has additional
  performance overhead, delays detection of naming problems
* build and config new Mapper based on Jackson2ObjectMapperBuilder

## 0D.34.javax.annotation.meta.When.MAYBE

> java: unknown enum constant javax.annotation.meta.When.MAYBE
> reason: class file for javax.annotation.meta.When not found

`When.MAYBE` is from `com.google.code.findbugs:jsr305:3.0.2`,
used by `org.springframework.lang.Nullable`, but NOT dependened by wings.

when using `@Nullable` and `NxxNull`, MUST be from `org.jetbrains.annotations`

## 0D.35.StackOverflowError endless loop

* [StackOverflowError infinite loop](https://github.com/trydofor/professional-wings/issues/138)
* [StackOverflowError endless loop](https://github.com/trydofor/professional-wings/issues/158)

`401` or `403` forward to the “secured” login page may cause the endless loop. wings by default,

* `wings.warlock.security.anonymous` - disable anonymous
* `wings.enabled.warlock.sec-check-url` - check url conflict

## 0D.36.SpringMvc Interception Difference

* `Filter` - on servlet  (a)
* `Aop` - on methods (b)
* `HandlerInterceptor` - on `@Controller` (a)
* `@ControllerAdvice` - defines `@Component` only
* `RequestBodyAdvice` - only on `@RequestBody` (c)
* `ResponseBodyAdvice` - only on `@ResponseBody` (c)

things to be care of,

* (a) EOF error if read InputStream
* (b) directly read the paramete to avoid the EOF error
* (c) no EOF error

## 0D.37. Show/Hide the Exception StackTrace

Some exceptions don't require a stack, such as user input errors,
which only return a hint message. Some exceptions need to be logged for
investigation or statistics. So how do you fine-tune these cases?

* CodeException - whether to populate the stack (no stack by default)
  - Global property `wings.silencer.tweak.code-stack=false`
  - Thread level `TweakStack.tweakXxx()`
  - business level `TweakStack.tweakCode()`
* DefaultExceptionResolver - the following defaults dont log the stack
  - HttpStatusException
  - TerminalContextException
  - CodeException
  - DataResult
  - AuthenticationException
  - AccessDeniedException

If you need to fine-tune the above stack configuration,
you can customize `DefaultExceptionResolver.Handler`.

## 0D.38.Missing DAO, "Skipping DAO generation"

After jooq generates the code, there is no `Dao`, but has `Pojo` and
`Skipping DAO generation` in the log. Need to check the table structure,
whether no primary key, the related logs and code as follows,

```java
// JavaGenerator -- Skipping DAO generation
UniqueKeyDefinition key = table.getPrimaryKey();
if (key == null) {
    log.info("Skipping DAO generation", out.file().getName());
    return;
}
```

## 0D.39.@Transactional on interface or impl

[Official Doc](https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html) suggest on concrete class,
Wings suggest on both, on interface for contract, on impl for functional implementation.

If there are `default` methods in the interface, `@Transactional` may fail for the same reason as an internal call. At this point.

* `Override` all methods, put `@Transactional` on the class
* Programmatic transaction, e.g. `TransactionHelper`, `TransactionTemplate`

## 0D.40.git submodule HEAD detached

Project checkout the main branch in shallow by default, and the submodule's commit is detached.

When the commit is on the main branch, such as docs, `fetch origin` can retrieve the branch.

```bash
git status
#> HEAD detached at c30360b
#> nothing to commit, working tree clean

git fetch origin
git checkout main
#> Switched to branch 'main'
#> Your branch is up to date with 'origin/main'.
```

When the commit is on the develop branch, such as mirana, needs to switch branch,
but `git fetch --all` does NOT retrieve it.

```bash
## branch = main shallow = true
git branch -r
#> origin/HEAD -> origin/main
#> origin/main

## fetch --all # NOT work, only main
# git fetch --all -v
#> From github.com:trydofor/professional-mirana
#>  = [up to date] main -> origin/main

## check remote branch
git ls-remote -h origin
#> 4468526dab9 refs/heads/develop
#> 96d19eb57d3 refs/heads/main

## check fetch setting
git config --get-all remote.origin.fetch
#> +refs/heads/main:refs/remotes/origin/main
git remote set-branches origin '*'
## fetch and checkout
git fetch origin -av
git checkout -t origin/develop

## deinit mirana submodule
#git submodule deinit -f -- observe/mirana
## reinit mirana submodule
#git submodule update --remote --init -- observe/mirana
```

## 0D.41.Fast and graceful shutdown

wings threadpool has the following default config, which will wait for
tasks (running or in queque) to complete or timeout,

* shutdown.await-termination=true
* shutdown.await-termination-period=###

if no need to wait, see the following, listen shutdown to cancel the quequed tasks,

* spring `@Scheduled` - cancel, will misfire
* tiny mail - cancel, check misfire
* tiny task - cancel, check misfire

when await-termination=false, threadpool set interrupt to all threads,

* running task, complete or interrupted (if has sleep, wait, join or check interruption)
* quequed task, passively lost, or actively canceled.

so, when handling async/future tasks, interrupt, cancel and shutdown need to be considered,

* Tolerant of loss, await-termination=false
* Recoverable, await-termination=true, actively interrupt or cancel
