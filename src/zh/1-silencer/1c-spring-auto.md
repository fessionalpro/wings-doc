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
* `**/spring/conf/` Configurer或AutoConfiguration
* `**/spring/prop/` properties的映射
* `**/spring/help/` 配置助手
* `*Configuration.java` 条件加载，配置项以`wings.enabled.`为前缀

使用`idea`开发时，会有黄色警告或提示，不影响运行，但看着碍眼

* 提示Application context not configured for this file，
  在`Project Structure`/`Facets`/`Spring`手动添加`boot/WingsAutoConfiguration`一个即可。
* 提示 annotation processing的设置，在`Settings`/`Annotation Processors`/`Enable annotation processing`
* 注意：在`@Configuration`中的内部类，`static class`是按独立类处理的，不受外层约束。

在wings工程中，会存在`wings-enabled.properties`配置，作为功能开关。
可以设置`wings.enabled.silencer.verbose=true` 通过日志的INFO查看。

## 1C.2.属性bind和meta提示

属性类统一用`*Prop.java`和`@Data`，经过配置后，可以自动提示。

* 手动添加 additional-spring-configuration-metadata.json
* 自动生成 spring-configuration-metadata.json

参考资料

* <https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#appendix.configuration-metadata>
* <https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-Configuration-Binding>
* <https://github.com/spring-projects/spring-boot/wiki/IDE-binding-features#simple-pojo>

## 1C.3.按条件配置事项

* 配置类为`*Configuration.java`在`/spring/bean/`中
* 属性类为`*Prop.java`在`/spring/prop/`中
* 嵌套配置不继承`@Conditional`
  - 要合并为`@ConditionalOnExpression`
  - 或自定义一个`@Conditional`
* 多个`@Conditional`为`and`逻辑
* 多个`Condition`为`and`逻辑

以下为`Conditional` javadoc

> The `@Conditional` annotation may be used in any of the following ways:
>
> * as a type-level annotation on any class directly or
>   indirectly annotated with `@Component`, including
>   `@Configuration` classes
> * as a meta-annotation, for the purpose of composing
>   custom stereotype annotations
> * as a method-level annotation on any `@Bean` method
>
> If a `@Configuration` class is marked with `@Conditional`,all of the
> `@Bean` methods, `@Import` annotations, and `@ComponentScan` annotations
> associated with that class will be subject to the conditions.
>
> NOTE: Inheritance of `@Conditional` annotations is not supported;
> any conditions from superclasses or from overridden methods will not be considered.

## 1C.4.ConditionalOnClass无效

如下代码，ConditionalOnClass置于同类型的Bean声明上，会报错 NoClassDefFoundError

```java
@Bean
@ConditionalOnClass(SomeService.class)
public SomeService someService() {
    return new SomeService();
}
```

需要改为如下这种，内类控制的Configuration

```java
@Configuration(proxyBeanMethods = false)
@ConditionalOnClass(SomeService.class)
public static class SomeServiceConfiguration {
    @Bean
    public SomeService someService() {
        return new SomeService();
    }
}
```

参考[Creating Your Own Auto-configuration](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#features.developing-auto-configuration)

## 1C.5.禁用任意 `@Component`

在spring的`@Conditional`自动配置体系中，`On*Bean` 依赖于Bean的注册顺序，很难发现问题。
所以在wings中，把问题提前到启动阶段，尽早发现Bean冲突，可通过设置属性文件关闭不需要功能。

在`@Configuration`, `@Bean`和任何`@Component`上，使用以下`@ConditionalWingsEnabled`
并指定`限定key`，可以禁用任意Component和Bean，

`限定key` = `前缀.` + `全类名` + `.方法名`? = `true|false`

* 前缀 - 默认 wings.enabled
* 全类名 - 比如 pro.fessional.wings.silencer.spring.boot.WingsEnabledCondition
* 方法名 - 比如 crc8Long

`@*Configuration` 的命名规则如下，

* `*AutoConfiguration` - `@AutoConfiguration` `@Import` `@Configuration`
* `*Configuration` - 顶级 `@Configuration` 及其 `@Bean`
* `*Event` - 内类 `@Configuration` 及其 `@EventListener`
* `*Wired` - 内类 `@Configuration` 及其 `@Autowired`
* `*Bean` - 内类 `@Configuration` 及其包装的单一 `@Bean *`
* `*Scan` - 内类 `@Configuration` 用来 `@ComponentScan`

`@ConditionalWingsEnabled` 具有以下增强功能

* abs - `绝对key`，无视前缀，优先级低于`限定key`
* key - `相对key`，使用前缀，优先级低于`绝对key`
* value - 默认值，最低优先级，key不存在时使用
* and, not - `this && and1 && and2 && !not1 && !not2`

其中，`限定key`相当于id，全局唯一，具有最高优先级，`绝对key`和`相对key`相当于别名，
不需要唯一，可以多处共用。这三种key的优先级从高到低如下，

* 限定key = `prefix` + `ClassName` + `methodName`?
* 绝对key = `abs()`
* 相对key = `prefix` + `key()`
* 默认值 = `value()`

除了注解的精确控制，也可以通过以下属性，对`限定key`实现`ant-matcher`规则的控制。

* wings.silencer.conditional.error
* wings.silencer.conditional.prefix
* wings.silencer.conditional.enable

```properties
## ... 为包名缩写

## @ConditionalWingsEnabled(prefix = "catty.enabled")
## 禁用 @Bean catBean 于 WingsEnabledCatConfiguration
catty.enabled.pro...WingsEnabledCatConfiguration.catBean=false
## 禁用 InnerCatConfiguration 及其 Bean
catty.enabled.pro...WingsEnabledCatConfiguration$InnerCatConfiguration=false

## @Conditional(WingsEnabledCondition.class) or @ConditionalWingsEnabled
## 禁用 @Bean dogBean 于 WingsEnabledDogConfiguration
wings.enabled.pro...WingsEnabledDogConfiguration.dogBean=false
## 禁用 InnerDogConfiguration 及其 Bean
wings.enabled.pro...WingsEnabledDogConfiguration$InnerDogConfiguration=false
```
