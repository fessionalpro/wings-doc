---
isOriginal: true
icon: setting
category:
  - Silencer
  - Config
---

# 1A.Auto Cascade Config

Supports `split`, `override`, `disable` and `profile` of config files, which is more conducive to engineering management.

* Split - config items can be freely separated in the file by module, function, or profile.
* Override - config file can be overridden with a certain priority (loading order)
* Disable - disable config  loading by  block-list
* Profile,  just like Spring rules.

The way Wings handles profiles is `cascading` and `filtering`, with configurations ordered by path order and file number.

* Cascading - sorting by priority (higher in front), higher overrides lower
* Filtering - filtering by profile

## 1A.1.Split Config

In actual project development, there is only one big `application.*`, which is not conducive to teamwork of division
and collaboration. Any big things should be broken down.

* spring-datasource.properties
* spring-mail-79.properties
* logger-logback-79.properties

Using `EnvironmentPostProcessor` to scan `/wings-conf/**/*. *` in the application `paths` , same rules as
[Externalized Configuration](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#features.external-config),
and the `paths` related to the config file are as follows, the latter with high priority
(for consistency with the Spring docs, the program is executed in reverse order, FIFO priority).

1. in the path, load all `application.*` first, then `wings-conf/**/*. *`.
2. path ending with `/` is a directory, otherwise a file
3. not `classpath:` or `classpath*:` is scanned with `file:`
4. `classpath:/` will be scanned with `classpath*:/`
5. default `classpath:/,classpath:/config/,file:. /,file:. /config/`
6. OS environment variables. `SPRING_CONFIG_LOCATION`.
7. Java System properties `spring.config.location`
8. command line arguments. `--spring.config.location

Each config filename is made up of `dirname` + `basename` + `seq` + `profile` + `extname`.
For example, `classpath:/wings-conf/` + `wings-mirana` + `-79` + `@dev` + `.properties`.

Currently, only `*.yml`, `*.yaml`, `*.xml`, `*.properties` configs are loaded.
The default config `seq` is set to `-79` to easily override according to the filename sorting.

The same `basename` means the same configuration. no `seq` means its `seq` is `70`,
higher than the default `79`,will override the default configuration.
Config file as Resource, first sorted by scan order, then grouped by basename,
adjusted by `seq` in ascending order (item override related).

Config files are UTF8 encoded, can better support unicode, can write unicode comments or content directly.
Wings automatically escapes non-ascii when loading config to be compatible with Spring's default read-by-byte behavior.

## 1A.2.Config Profile

The `basename` must not contain `@` and the `profile` name must not contain `.`
to avoid parsing errors. Compare with spring as follows.

* `application.properties`
* `application-{profile}.properties`
* `wings-conf/wings-test-module-79.properties`
* `wings-conf/wings-test-module-79@{profile}.properties`

The configs with the same `basename` are treated as the same group and the inactive profile is removed from the configs.
Distinguish profiles by `@`, because the presence of `-` in wings config is incompatible with the spring format.
When using `spring.profiles.active`, make sure that the configuration files are loaded according to Spring conventions.

There is also a difference in the processing of wings and spring. By default wings takes precedence over spring.

* application-{profile}, wings scan and sort, then spring process
* wings-conf/layered-config@{profile}, wings scan and process
* with-profile overlay without-profile, multiple active profiles cascading overlay
* Dont put `application.*` in wings-conf/, double processing by spring and wings

SpringBoot supports only one application in multi-profile form, so the config file has only path priority.
In the case of multiple profiles, the processing order is ① exclude inactive ② active charset ordered
(the latter takes precedence) ③ no profile at the end.

Wings supports multiple configs and multiple profiles, and its path priority and profile priority are
consistent with Spring. In the multi-config priority, the processing order is ①profile ②path ③file seq
④charset order (the former takes precedence)

## 1A.3.Loading BlockList

Filenames that exist in `/wings-conf/wings-conf-block-list.cnf` will not be loaded.

* One filename per line, case sensitive
* Line starting with `#` is comment, auto ignore first and last whitespace
* Use `String.endWith` to determine, full path exact match
* Block single `@profile`, need to specify separately

## 1A.4.Config Item Promotion

Some non-Spring features are configured through System.getProperties.
So you need to put the required config items from Spring into System.properties.

* Put if System does not exist, i.e. `-Dkey=value` has the highest priority
* Variable names are stored in `/wings-conf/wings-prop-promotion.cnf`.
* One property name per line, case sensitive, `#` for comments

## 1A.5.logging/logback

推荐使用`wings-starter.sh`启动，用`wings-starter.env`设置基础参数。

See `wings-logging-79.properties`, use springboot configuration by default.

* Only console output (eg. inside docker) no additional settings needed
* Need both console and file, add `logging.file.name=/tmp/wings-example.log`.
* Need only file, add `logging.config=classpath:logback-fileonly.xml`.
* Configure appender level by name, if FILE exists, CONSOLE will auto switch to WARN (logback only)

Recommended logging config, INFO default, DEBUG for specified package name

* logging.level.root=INFO
* logging.level.org.springframework.web=DEBUG
* logging.level.org.jooq=DEBUG
* logging.level.{package.path}=OFF

It is recommended to use `wings-starter.sh` to start, use `wings-starter.env` to pass args.

## 1A.6.Dynamic Tweaking

Triggers thread-level logging output based on business requirements and under certain conditions.

* TweakLogger - supports logback only, done through LogbackFilter
* TweakClock - global or thread level  time adjustment
* TweakStack - global or thread level whether to output Stack

## 1A.7.References

[docs.spring.io](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/)

* "4.1.6. Application Events and Listeners"
* "4.2. Externalized Configuration"
* "9.2.3. Change the Location of External Properties of an Application"
* "9.1.3. Customize the Environment or ApplicationContext Before It Starts"
