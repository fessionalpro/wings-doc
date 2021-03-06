---
isOriginal: true
icon: setting
category:
  - 沉默
  - 配置
---

# 1A.Conf自动配置

支持配置文件的`分割`，`覆盖`，`禁用`和`profile`，更有利于工程化的管理。

* 分隔，指配置项可以按模块，功能，自由组成独立的配置文件。
* 覆盖，配置项按一定的优先级（加载顺序）可以覆盖
* 禁用，可以通过block-list，禁止某配置文件加载
* profile，同spring规则。

wings对配置文件的处理方式，是层叠和过滤，配置以路径顺序和编号大小排序。

* 层叠，排序的配置，按高优先级（前面的高）覆盖值。
* 过滤，通过profile进行排他过滤。

## 1A.1.分割Config

实际项目开发中，只有一个 `application.*`不利于分工和管理的，应该是，

* shardingsphere-datasource-79.properties
* shardingsphere-sharding-79.properties
* logger-logback-79.properties

通过`EnvironmentPostProcessor`扫描`各路径`中`/wings-conf/**/*.*`，规则同
[features.external-config](https://docs.spring.io/spring-boot/docs/2.6.6/reference/htmlsingle/#features.external-config)
，和配置文件有关的`各路径`如下，其后者优先级高（为与spring文档叙述一致，程序中倒序执行，FIFO优先级）。

0. 路径中，优先加载`application.*`，次之`wings-conf/**/*.*`
1. 以`/`结尾的当做目录，否则作为文件
2. 任何非`classpath:`,`classpath*:`的，都以`file:`扫描
3. `classpath:/`会被以`classpath*:/`扫描
4. default `classpath:/,classpath:/config/,file:./,file:./config/`
5. OS environment variables. `SPRING_CONFIG_LOCATION`
6. Java System properties `spring.config.location`
7. Command line arguments. `--spring.config.location

目前只加载 `*.yml`, `*.yaml`,`*.xml`, `*.properties`扩展名的配置文件。
工程提供的默认配置，文件名字后面都会加上`-79`，方便根据文件名排序设置默认值。

每个配置文件都由一下几部分构成:`dirname`+`basename`+`seq`+`profile`+`extname`.
例如，`classpath:/wings-conf`+`/`+`wings-mirana`+`-`+`79`+`.`+`properties`
相同`basename`为同一配置，无序号的配置，视序号为`70`，比默认的`79`高，会覆盖默认配置。

配置文件，以Resource首先按扫码顺序排序，然后按base归类，按seq升序调整（值覆盖有关）。

所有配置文件必须UTF8编码，这样才可以更好的支持unicode，可以直接写中文。
自动配置时对非ascii进行自动转义，以支持spring默认的按byte读取行为。

## 1A.2.配置Profile

支持`profile`格式，但是从命名上，要求`profile`用`.`标识，和spring对比如下。
文件名不建议使用`@`，`profile`不包括`.`，否则会造成解析错误。

* `application.properties`
* `application-{profile}.properties`
* `wings-conf/shardingsphere-datasource-79.properties`
* `wings-conf/shardingsphere-datasource-79@{profile}.properties`

相同`basename`+`seq`的config是同一组，会移除掉非活动的profile
以`@`区分profile主要是因为，wings-conf文件名中存在`-`，避免造成误解析。
在使用`spring.profiles.active`时，要确保配置文件按spring约定加载。

wings和spring的profile在处理上也有区别，默认wings有些于spring处理。

* application-{profile}，wings扫描排序，spring处理。
* wings-conf/layered-config@{profile}，wings扫描及处理。
* 有profile覆盖无profile的配置，多个激活profile层叠覆盖。
* 避免在wings-conf路径中，以application命名配置，会有spring和wings混合处理。

spring boot目前仅支持application单配置，多profile形式，所以配置文件上仅有路径优先级。
但多profile①排除非激活profile②激活profile按字符顺序，后者优先③无profile的垫底。

而wing中存在多配置，多profile，其路径优先级和profile优先级与spring一致。
在多配置优先级，是①profile②路径③文件序号④字符顺序，前者优先进行的。

## 1A.3.加载黑名单

存在于`/wings-conf/wings-conf-block-list.cnf`的文件名，不会自动加载。

* 一行一个文件名，区分大小写。
* `#`开头标识注释，自动忽略首尾空白。
* 以`String.endWith`判断，全路径精确匹配。
* `profile`格式的配置文件，需要单独

## 1A.4.配置项提升

有些非Spring体系的功能，通过System.getProperties获得属性。
因此需要把部分spring下的配置写入System.properties。

* System中不存在时写入，即 `-Dkey=value`优先级最高。
* 变量名保存在`/wings-conf/wings-prop-promotion.cnf`中
* 文件格式说明同`配置禁用`

## 1A.5.logging/logback

参考`wings-logging-79.properties`配置，默认使用springboot配置。

* 只需要console输出（如果docker内）不需要额外设置。
* 同时需要console和file，则增加以下配置`logging.file.name=/tmp/wings-example.log`
* 只需要file，则再增加`logging.config=classpath:logback-fileonly.xml`
* 可按名字配置appender日志级别，默认存在FILE时，CONSOLE自动切到WARN以上(仅logback)

推荐的logging配置，默认INFO，指定包名的DEBUG

* logging.level.root=INFO
* logging.level.org.springframework.web=DEBUG
* logging.level.org.jooq=DEBUG
* logging.level.忽略的包路径=OFF

推荐使用`wings-starter.sh`启动，`wings-starter.env`配置基础参数。

## 1A.6.参考资料

[参考资料 docs.spring.io](https://docs.spring.io/spring-boot/docs/2.6.6/reference/htmlsingle/)

* "4.1.6. Application Events and Listeners"
* "4.2. Externalized Configuration"
* "9.2.3. Change the Location of External Properties of an Application"
* "9.1.3. Customize the Environment or ApplicationContext Before It Starts"
