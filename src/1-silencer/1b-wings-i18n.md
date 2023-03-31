---
isOriginal: true
icon: language
category:
  - 沉默
  - 多国语
---

# 1B.I18n自动配置

多国语（I18n），是wings体系中，比较重要的功能点。

* 可以同Conf一样进行分隔，层叠
* 以Ii8nString和I18nException做动态业务信息
* 把I18n和timezone一并考虑

## 1B.1.语言和时区

可在wings启动时，通过以下配置项，修改系统的locale和zoneid，空值为不修改系统默认。

* wings.silencer.i18n.locale=zh_CN
* wings.silencer.i18n.zoneid=Asia/Shanghai
* wings.silencer.i18n.bundle=classpath*:/wings-i18n/**/*.properties

同时，spring自身对多国语(I18N)支持的很好，稍加组织就可以更好的工程化。

* 自动扫描`wings.silencer.i18n.bundle`配置项（逗号分隔多个路径）
* 加载分隔成多份的配置，路径优先级层叠配置

## 1B.2.sping的机制

spring对MessageSource的加载与configuration的机制不同，不需要unicode转义。

语言配置从`spring.messages.basename=messages,basic`入手，逗号分隔，
basename后视为语言标记，可以存在多种格式的文件（命名中不要有`.`，会被换成`/`扫描)

* message.properties  必须存在，以bundle名的默认文件
* message_en.properties 推荐这种，不带国家，为所有en提供默认值
* message_en_US.properties
* message_en_US_UNIX.properties

## 1B.3.动态添加配置

除了静态的配置外，wings提供了CombinableMessageSource，
可以用编程的方式，动态的添加多国语信息，如从数据库加载。
