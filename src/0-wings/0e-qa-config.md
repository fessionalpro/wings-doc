---
isOriginal: true
icon: gear
category:
  - WingsGod
  - Config
---

# 0E.Config Topic

Project configuration, such as maven, properties, spring and other settings.

## 0E.01.Where are Enabled Configs

```bash
## find all enabled properties files
find . -name 'wings-enabled*.properties' \
| egrep -v -E 'target/|example/|-test/'

## find all enabled java
find . -name '*EnabledProp.java' \
| egrep -v -E 'example/'

## find all qualified properties
find . -name 'additional-spring-configuration-metadata.json' \
| egrep -v -E 'target/|example/'
```

## 0E.02.Customize Springboot version and dependency

Wings only handles the loading of configuration files, in the SpringBoot standard lifecycle,
without relying on a specific version. For those who do not want to follow along with wings to
upgrade spring and its dependencies, just make wings as a dependency, not a parent and import.

Wings always follows the upgrade to the next level stable version of SpringBoot for the purpose of
testing sharding-jdbc and jooq compatibility. And for binary compatibility, wings version 210 is
compiled with a target of java=11, kotlin=1.6

For maven inheritance dependencies there are parent and import two, the important difference is the property override.

* parent - you can also override individual dependencies by overriding a property in your own project
* import - does not let you override individual dependencies by using properties,
  as explained above. To achieve the same result, you need to add entries in the dependencyManagement
  section of your project before the spring-boot-dependencies entry.
* <https://docs.spring.io/spring-boot/docs/3.0.3/maven-plugin/reference/htmlsingle/#using.parent-pom>
* <https://docs.spring.io/spring-boot/docs/3.0.3/maven-plugin/reference/htmlsingle/#using-import>

For spring-boot versions lower than wings, generally, specify the jooq version to completely work.

## 0E.03.The Difference Between Lib and Boot projects

The SpringBoot package executable boot.jar, not the normal lib.jar

```xml
<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
    <configuration>
        <executable>true</executable>
    </configuration>
</plugin>
```

For the lib project configuration, skip the `repackage` and refer to the example project.

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

Wings recommended project structure is the `project/build/plugins` entry in the parent's pom.xml.
Default settings for `configuration` of the following `plugin`.

* spring-boot-maven-plugin - executable=true
* maven-deploy-plugin - skip=true
* maven-install-plugin - skip=true

In this way, all submodules, with boot project provide default build (boot packing, no deploy, no install).
Skip boot packaging in the lib submodule, ie. skip=true in repackage.

## 0E.04.Missing Mirana and Meepo dependency

Due to The Big Wing Project for Non-Foodies (once named), some `SNAPSHOT` dependencies need to be
compiled and installed locally by yourself. Occasionally can be found on `sonatype`, you need to
add your own `repository`, such as `~/.m2/settings.xml`

```xml
<repository>
    <id>ossrh-snapshots</id>
    <url>https://oss.sonatype.org/content/repositories/snapshots</url>
    <snapshots><enabled>true</enabled></snapshots>
    <releases><enabled>false</enabled></releases>
</repository>
```

## 0E.05.Placeholder for Config and Inject

* In Hard code, @Autowired
  - PropertyResolver - Get or parse a string value  by key
  - StringValueResolver - parse a value string
* In properties, use `${VAR}`
* In @Value and @RequestMapping, use `${VAR}`

## 0E.06.Removing Tomcat or Hazelcast

When using wings as a parent through dependencyManagement, the default inheritance of wings does not need to be changed.
However, if you donot inherit the wings, the following two items may be changed by yourself depending on the situation.

* spring-boot-starter-web/spring-boot-starter-tomcat, because the default use of undertow
* spring-session-hazelcast/hazelcast, use the latest version

## 0E.07.Java and Kotlin Version

Set the compilation version of java and kotlin by pom, if there is compilation failure in IDE,
it is likely that the compilation version is not correct. Since 210, wings is fully adapted to java 11,
kotlin is automatically updated to 1.6, but no java8 certificate compatibility test is done.

## 0E.08.Config logger and log groups

SpringBoot built-in [Log Groups](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#features.logging.log-groups)

* org.springframework.core.codec
* org.springframework.http
* org.springframework.web
* org.springframework.boot.actuate.endpoint.web
* org.springframework.boot.web.servlet.ServletContextInitializerBeans
* org.springframework.jdbc.core
* org.jooq.tools.LoggerListener

> Spring Boot uses Commons Logging for all internal logging
> but leaves the underlying log implementation open

Wings follows this practice, `@Configuration` and other spring feature use CommonsLogging,
And the business code using lombok `@Slf4j` configured as `static` `log`

## 0E.09.Mvn Resources Filtering

Note: After version 210, the mvn variable is replaced by the spring variable and the filter is no longer needed.

Because the variable `@project.version@` is used in the swagger configuration, it will be configured
build/resources/resource/filtering=true so that mvn replaces it automatically.

However, enabling filter can cause replacement to fail, such as binary files, and wings ignores some binaries by default.

## 0E.10.SPA and Reverse Proxy Cache Cettings

By default, Springboot automatically adds the following Response Header,
`Cache-Control`=`no-cache,no-store,max-age=0,must-revalidate` so that the reverse proxy
does not need to be set. However, for SPA pages, manual settings are required,
such as nginx configuration.

```nginx
location / {
    #add_header 'Access-Control-Allow-Origin' '*'; #CORS
    root /data/static/demo-admin-spa/;
    if ($request_filename ~* \.(html|htm)$){
        add_header Cache-Control no-cache,no-store,max-age=0,must-revalidate;
    }
}
```

## 0E.11.How to Ignore a Config Entry

In wings principle, the config entry must have default value, and sometimes the default key or value need to be ignored.

* `String` invalid value - `empty` or `-` is the default invalid value
* `Map<String, String>` - the value of the invalid key
* `Map<String, Set<String>>` - the value of overrided key

## 0E.12.Execution Order in Spring

In the Spring lifecycle, using @Configuration as an example, the following order of execution is as follows,
where `spring.facts` means spring boot [lifecirle events](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#features.spring-application.application-events-and-listeners)

* ApplicationEnvironmentPreparedEvent(spring.factories)
* ApplicationContextInitializedEvent(spring.factories)
* ApplicationPreparedEvent(spring.factories)
* Constructor - constructor are executed first
* @Autowired - dependency injection
* @PostConstruct - executed after dependency injection, no parameters
* afterPropertiesSet - InitializingBean interface
* @Bean - On-demand or sequential execution
* ContextRefreshedEvent(spring.factories)
* ApplicationStartedEvent - Started, event parameter
* CommandLineRunner - Runner, injected dependencies
* ApplicationReadyEvent - Ready, event parameter

The common configuration methods and order in Wings are as follows.

* Constructor - global, required dependency, injected as a final by constructor
* @Autowired - local, optional dependency, injected as a setter
* @PostConstruct - Executes the end of the current configuration, without parameters.
* ApplicationStartedEventRunner - before app/cmd runners initialize Helper
* ApplicationRunnerOrdered - custom ordered ApplicationRunner
* CommandLineRunnerOrdered - custom ordered CommandLineRunner
* ApplicationInspectRunner - LOWEST_PRECEDENCE ApplicationRunner
* ApplicationReadyEventRunner - after app/cmd runners called

Helper will be initialized when ApplicationStartedEvent. configuration and common beans are defined by constants

* WingsBeanNaming - name of important bean
* WingsBeanOrdered - Order and cascading

## 0E.13.Log Format in Spring Config

In Configuration's CommonsLogging, the log follows the following common log.info format

* `@Bean` - {ModuleName} spring-bean {BeanName}
* `@Autowired` - {ModuleName} spring-auto {MethodName}
* `@PostConstruct` - {ModuleName} spring-auto {MethodName}
* `CommandLineRunner` - {ModuleName} spring-runs {BeanName}
* `Bean*PostProcessor` - {ModuleName} spring-proc {BeanName}
* Process log - {ModuleName} conf
