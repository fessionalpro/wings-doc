---
isOriginal: true
icon: enum
category:
  - 神翼
  - 首页
---

# 0H.属性配置

配置项推荐Properties形式，因为这样有利于分隔，层叠和查找。
每个`*.properties`都会对应一个`*Prop.java`，以强类型的Key映射。

[Properties File Format](https://docs.oracle.com/cd/E23095_01/Platform.93/ATGProgGuide/html/s0204propertiesfileformat01.html)

## 0H.1.属性文件名

在Silencer中，默认约定了配置文件的类型和命名规则。

* `wings-auto-config*.cnf` - Silencer功能配置
* `wings-conf-block-list.cnf` - 配置文件黑名单
* `wings-prop-promotion.cnf` - 配置项提升到系统变量
* `spring-*.properties` - spring的配置项
* `wings-*.properties` - wings的配置项

## 0H.2.配置项标记

在文档中，存在以下标记，以增加识别度和可读性。

* `String` - `NotNull`的类型`String`
* `String?` - `Nullable`的类型`String`
* `Boolean` - 包装类和原始类型等同，均非空。
* `empty` - 表示为`空`，即`key=`

在properties的配置值一般为单行，多行的语法如下

* `\` - 以其转义末尾的换行。
* `\n\` - 在prop中产生一个换行符，如配置sql时，增加可读性。

## 0H.3.配置项列表

* [沉默的属性](../1-silencer/1d-prop-silencer.md) - 自动加载，默认工具和行为
* [虚空的属性](../2-faceless/2i-prop-faceless.md) - 数据库及操作，I18n的基本配置
* [飞波的属性](../2-faceless/2j-prop-flywave.md) - Flywave关于schema管理的配置
* [Jooq的属性](../2-faceless/2k-prop-jooq.md) - Jooq相关的配置
* [大鱼的属性](../3-slardar/3i-prop-slardar.md) - 有关Slardar，Spring的基本设置
* [WebMvc的属性](../3-slardar/3j-prop-webmvc.md) - Spring WebMvc的基本设置
* [WebFun的属性](../3-slardar/3k-prop-function.md) - Spring Web加强功能的设置
* [Hazelcast的属性](../3-slardar/3l-prop-hazelcast.md) - Hazelcast的设置
* [术士的属性](../4-warlock/4d-prop-warlock.md) - 有关Warlock登录授权的设置
* [小任务属性](../8-radiant/8b-prop-tinytask.md) - TinyTask的设置
* [小邮件属性](../8-radiant/8d-prop-tinymail.md) - TinyMail的设置

## 0H.4.开关属性列表

`@ConditionalWingsEnabled` 以模块分组，按字母序排列，

* `empty` 表示默认为true
* `(false)` 表示默认为false
* `= key` 表示 `absolute-key`

属性列表，统一记录在[英文版](../../0-wings/0h-prop-index.md)
