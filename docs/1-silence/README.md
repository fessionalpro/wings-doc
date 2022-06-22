---
isOriginal: true
icon: flower
category:
  - 沉默
  - 配置
---

# 1.沉默术士

![silencer](/silencer_icon.png)

silence fool，一切魔法，遭遇了他，都将归于寂静。

最小化依赖springboot，提供以下自动配置和叠加能力

* 自动加载SpringBoot配置(wings-conf)
* properties中的直接写中文，不需要unicode转码。
* 自动加载i8n配置(wings-i18n)
* 自动加载`**/spring/bean/`，配置console logger

## 1.1.层叠和分隔配置

wings中主张按功能或项目，把application的大配置，分隔成独立的小配置。
并且，提供80%情况适用的默认值，利用配置文件加载的优先级，层叠配置项。

与CSS（层叠样式表）类似，同一个key的配置，可能存在多个配置文件，多个值，
最终，以最高优先级的值作为系统配置值。

## 1.2.spring自动装配

wings中的spring命名，主要集中在以下（后续目录结构有详解）

* `/wings-conf/` 自动加载，放置拆分的配置文件，按字母顺序加载和覆盖。
* `/wings-i18n/` 自动加载，放置拆分的多国语的信息文件。
* `*Configuration` 必须都条件加载，前缀`spring.wings.`，可以关闭。
* `**/spring/boot/` 手动加载，boot有关的配置，如`spring.factories`
* `**/spring/bean/`  自动加载，比如@ComponentScan指定。
* `**/spring/conf/` 自动或手动加载，需要暴露的properties的配置。

使用`idea`开发时，会有黄色警告或提示，不影响运行，但看着碍眼

* 提示Application context not configured for this file，
  在`Project Structure`/`Facets`/`Spring`手动添加`boot/WingsAutoConfiguration`一个即可。
* 提示 annotation processing的设置，在`Settings`/`Annotation Processors`/`Enable annotation processing`
  注意：在`@Configuration`中的内部类，`static class`是按独立类处理的，不受外层约束。

在wings工程中，会存在`spring-wings-enabled.properties`配置，作为功能开关
可以通过属性`spring.wings.silencer.enabled.verbose=true` 通过日志INFO查看。

## 1.3.配置bind和meta提示

配置类，统一使用`*Prop`和@Data，经过配置后，可以自动提示。

* 手动添加 additional-spring-configuration-metadata.json
* 自动生成 spring-configuration-metadata.json

参考资料

* <https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#configuration-metadata>
* <https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-Configuration-Binding>
* <https://github.com/spring-projects/spring-boot/wiki/IDE-binding-features#simple-pojo>
