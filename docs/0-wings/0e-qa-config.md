---
isOriginal: true
icon: config
category:
  - 神翼
  - 话题
---

# 0E.配置话题

工程配置，如maven，properties，spring等设置项。

## 0E.01.哪些参数是必须打开的

```bash
# 找到所有开关文件
find . -name 'spring-wings-enabled.properties' \
| egrep -v -E 'target/|example/' 

./slardar/src/main/resources/wings-conf/spring-wings-enabled.properties
./faceless/src/main/resources/wings-conf/spring-wings-enabled.properties
./silencer/src/main/resources/wings-conf/spring-wings-enabled.properties

# 找到所有false的开关
find . -name 'spring-wings-enabled.properties' \
| egrep -v -E 'target/|example/' \
| xargs grep 'false'

# 以下2个需要在flywave和enum时开启
spring.wings.faceless.flywave.enabled.module=false
spring.wings.faceless.enabled.enumi18n=false
```

## 0E.02.调整springboot版本和依赖

wings工程，仅对spring-boot的标准生命周期进行了配置文件加载的hook，非强依赖于任何固定版本。
对于不想跟随wings一同升级spring及其依赖的，只把wings做dependency，而不parent和import即可。

wings随时跟进升级spring boot的最新版本，目的是为了测试sharding-jdbc和jooq的兼容性。
而在二进制兼容方面，wings编译的版本是java=1.8，kotlin=1.4。

对于maven继承依赖有parent和import两种，其重要区别在于property覆盖。

* parent - you can also override individual dependencies by overriding a property in your own project
* import - does not let you override individual dependencies by using properties,
  as explained above. To achieve the same result, you need to add entries in the dependencyManagement
  section of your project before the spring-boot-dependencies entry.
* <https://docs.spring.io/spring-boot/docs/2.6.6/maven-plugin/reference/htmlsingle/#using-parent-pom>
* <https://docs.spring.io/spring-boot/docs/2.6.6/maven-plugin/reference/htmlsingle/#using-import>

对于低于wings的spring-boot版本，一般来讲指定一下jooq版本就可以完全正常。

## 0E.03.lib工程和boot工程的区别

Springboot的打包机制使boot.jar 不是普通的lib.jar

```xml
<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
    <configuration>
        <executable>true</executable>
    </configuration>
</plugin>
```

lib工程的配置，跳过repackage，参考example之外的工程

```xml
<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
    <executions>
        <execution>
            <id>repackage</id>
            <goals>
                <goal>repackage</goal>
            </goals>
            <configuration>
                <skip>true</skip>
            </configuration>
        </execution>
    </executions>
</plugin>
```

所以，wings推荐的工程结构是，在parent工程pom.xml的`project/build/plugins`中，
对以下`plugin`的`configuration`设置，

* spring-boot-maven-plugin executable=true
* maven-deploy-plugin skip=true
* maven-install-plugin skip=true

这样，为所以子模块，以boot工程提供默认的build（boot打包，不deploy，不install）。
在lib子模块中跳过boot打包，spring-boot-maven-plugin/repackage skip=true

## 0E.04.缺少mirana和meepo依赖lib

因是非吃货的大翅项目，一些`-SNAPSHOT`依赖，需要自行编译并本地安装。
偶尔可以在`sonatype`上找到，需要自行添加`repository`，如`~/.m2/settings.xml`

```xml
<repository>
    <id>ossrh-snapshots</id>
    <url>https://oss.sonatype.org/content/repositories/snapshots</url>
    <snapshots><enabled>true</enabled></snapshots>
    <releases><enabled>false</enabled></releases>
</repository>
```

## 0E.05.配置和注入时的占位符

* 编码中，autowired StringValueResolver
* properties配置中`${VAR}`
* @Value和@RequestMapping中`${VAR}`

## 0E.06.Tomcat和hazelcast的排除

使用wings为parent时通过dependencyManagement，继承wings默认不需要修改。
但若是没有继承wings依赖，以下2项视情况需要自行调整。

* spring-boot-starter-web/spring-boot-starter-tomcat，因默认使用undertow
* spring-session-hazelcast/hazelcast，使用最新版本。

## 0E.07.Java和Kotlin版本

目前编译目标是java 8，kotlin 1.4，如果在IDE中出现编译失败，很可能是编译版本不对。
从210起，wings全面适配java 11，kotlin自动更新为1.6，未做java8证兼性测试。

## 0E.08.如何配置logger和log groups

SpringBoot内置以下log groups [Log Groups](https://docs.spring.io/spring-boot/docs/2.6.6/reference/htmlsingle/#features.logging.log-groups)

* org.springframework.core.codec
* org.springframework.http
* org.springframework.web
* org.springframework.boot.actuate.endpoint.web
* org.springframework.boot.web.servlet.ServletContextInitializerBeans
* org.springframework.jdbc.core
* org.jooq.tools.LoggerListener

> Spring Boot uses Commons Logging for all internal logging
> but leaves the underlying log implementation open

Wings也遵循这一实践，`@Configuration`等spring功能为Commons Logging，
而业务代码中使用lombok的`@Slf4j`配置为`static` `log`

## 0E.09.mvn resources filtering

因为在swagger的配置中使用了变量`@project.version@`，所以会配置
build/resources/resource/filtering=true，以便mvn自动替换。

但是开启filter会引起错误替换，比如二进制文件等，wings默认忽略一些二进制文件
同时在210版后，以spring变量取代了mvn变量，因此不需要filter。

## 0E.10.SPA及反向代理的缓存设置

默认情况下springboot自动增加以下Response Header，使得反向代理无需设置
`Cache-Control`=`no-cache,no-store,max-age=0,must-revalidate`

但对于SPA页面，需要进行如下的手动设置。
```nginx
location / {
    #add_header 'Access-Control-Allow-Origin' '*'; #允许跨域
    root /data/static/demo-admin-spa/;
    if ($request_filename ~* \.(html|htm)$){
        add_header Cache-Control no-cache,no-store,max-age=0,must-revalidate;
    }
}
```

## 0E.11.如何忽略一个配置项

wings原则上，所以配置项都必有默认配置，而有时候需要忽略一些默认key或value。

* `String`无效值 - `空`或`-`是默认的无效值
* `Map<String, String>`  - 无效值key的value
* `Map<String, Set<String>>` - 全覆盖key的value
