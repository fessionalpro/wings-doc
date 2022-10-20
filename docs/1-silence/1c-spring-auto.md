---
isOriginal: true
icon: leaf
category:
  - 沉默
  - 配置
---

# 1C.自动配置机制

利用SpringBoot的特性，完成自动配置。

## 1C.1.自动规则和命名

有特殊功能的spring命名，主要集中在以下（后续目录结构有详解）

* `/wings-conf/` 自动加载，分割的配置文件
* `/wings-i18n/` 自动加载，分割的多国语的信息文件
* `**/spring/boot/` 手动加载，Boot有关的配置，如`spring.factories`
* `**/spring/bean/` 自动加载，比如@ComponentScan指定
* `**/spring/conf/` 自动或手动加载，需要暴露的properties的配置
* `*Configuration.java` 条件加载，配置项以`spring.wings.`为前缀

使用`idea`开发时，会有黄色警告或提示，不影响运行，但看着碍眼

* 提示Application context not configured for this file，
  在`Project Structure`/`Facets`/`Spring`手动添加`boot/WingsAutoConfiguration`一个即可。
* 提示 annotation processing的设置，在`Settings`/`Annotation Processors`/`Enable annotation processing`
  注意：在`@Configuration`中的内部类，`static class`是按独立类处理的，不受外层约束。

在wings工程中，会存在`spring-wings-enabled.properties`配置，作为功能开关。
可以设置`spring.wings.silencer.enabled.verbose=true` 通过日志的INFO查看。

## 1C.2.属性bind和meta提示

属性类统一用`*Prop.java`和`@Data`，经过配置后，可以自动提示。

* 手动添加 additional-spring-configuration-metadata.json
* 自动生成 spring-configuration-metadata.json

参考资料

* <https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#configuration-metadata>
* <https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-Configuration-Binding>
* <https://github.com/spring-projects/spring-boot/wiki/IDE-binding-features#simple-pojo>

## 1C.3.按条件配置事项

* 配置类为`*Configuration.java`在`/spring/bean/`中
* 属性类为`*Prop.java`在`/spring/prop/`中
* 嵌套配置不继承`@Conditional`
  - 要合并为`@ConditionalOnExpression`
  - 或自定义一个`@Conditional`

The `@Conditional` annotation may be used in any of the following ways:

* as a type-level annotation on any class directly or
  indirectly annotated with `@Component`, including
  `@Configuration` classes
* as a meta-annotation, for the purpose of composing
  custom stereotype annotations
* as a method-level annotation on any `@Bean` method

If a `@Configuration` class is marked with `@Conditional`,all of the
`@Bean` methods, `@Import` annotations, and `@ComponentScan` annotations
associated with that class will be subject to the conditions.

NOTE: Inheritance of `@Conditional` annotations is not supported;
any conditions from superclasses or from overridden methods will not be considered.

<https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.developing-auto-configuration>