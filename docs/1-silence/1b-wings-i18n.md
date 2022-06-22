---
isOriginal: true
icon: flower
category:
  - 沉默
  - 配置
---

# 1B.I18n自动配置

多国语（I18n），是wings体系中，比较重要的功能点。

* 可以与Conf一样进行分隔，叠加
* 以Ii8nString和I18nException做动态messages
* 把I18n和时区一并考虑

## 1B.1.语言和时区

wings启动时，可以修改系统默认locale和zoneid，通过以下配置，空置表示维持系统默认。

* wings.silencer.i18n.locale=zh_CN
* wings.silencer.i18n.zoneid=Asia/Shanghai
* wings.silencer.i18n.bundle=classpath*:/wings-i18n/**/*.properties

同时，spring自身对多国语(I18N)支持的很好，稍加组织就可利用，就可以更好的工程化。
自动扫描`wings.silencer.i18n.bundle`配置项（逗号分隔多个路径），加载分隔成多份的配置。

## 1B.2.sping的机制

spring对MessageSource的加载与configuration的机制不同，不需要unicode转义。

spring默认以如下配置为入口，逗号分隔，保留不带国家地区的bundle格式名。
`spring.messages.basename=messages,basic`
这样可以在classpath下存在以下格式的文件，命名避免使用`.`(会被换成`/`扫描)

* message.properties  必须存在，以bundle名的默认文件
* message_en.properties 推荐这种，不带国家，为所有en提供默认值
* message_en_US.properties
* message_en_US_UNIX.properties

## 1B.3.动态添加配置

除了静态的配置外，wings提供CombinableMessageSource可以动态（如从数据库）添加多国语信息。
