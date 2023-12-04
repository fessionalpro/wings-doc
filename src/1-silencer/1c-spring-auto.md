---
isOriginal: true
icon: leaf
category:
  - Silencer
  - Config
---

# 1C.Auto Config Mechanism

Take advantage of SpringBoot to complete the auto config.

## 1C.1.Naming and Rule

There are special features of Spring naming, mainly focused on the following
(the directory structure will be explained in detail later)

* `/wings-conf/` autoload, splitted config files
* `/wings-i18n/` autoload, splitted I18n files
* `**/spring/boot/` manual load, Boot-related config, like `spring.facts`
* `**/spring/bean/` produce bean, as specified by @ComponentScan
* `**/spring/conf/` Configurer or AutoConfiguration
* `**/spring/prop/` Property mapping
* `**/spring/help/` Configuration helper
* `*Configuration.java` conditional load, with config items prefixed by `wings.enabled.`

When developing with `idea`, there will be yellow warnings or prompts,
that do not affect the operation, but look like an eyesore.

* Prompting "Application context not configured for this file"
  Just add `boot/WingsAutoConfiguration` manually in `Project Structure`/`Facets`/`Spring`.
* Prompting "annotation processing", check in `Settings`/`Annotation Processors`/`Enable annotation processing`
* Note: The inner classes in `@Configuration`, `static class` are treated as independent and not bound by the outer.

In Wings project, there will be a `wings-enabled.properties` to toggle the feature.
Set `wings.enabled.silencer.verbose=true` to view the INFO of the log message.

## 1C.2.Property Bind and Prompt

Properties classes are unified with `*Prop.java` and `@Data`, which can be auto prompted after configuration.

* manually add additional-spring-configuration-metadata.json
* auto-generated spring-configuration-metadata.json

References,

* <https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#appendix.configuration-metadata>
* <https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-Configuration-Binding>
* <https://github.com/spring-projects/spring-boot/wiki/IDE-binding-features#simple-pojo>

## 1C.3.Configuring by Condition

* Configuration is `*Configuration.java` in `/spring/bean/`
* Property is `*Prop.java` in `/spring/prop/`
* Nested configurations do not inherit from `@Conditional`
  - merged into `@ConditionalOnExpression`
  - or customize a `@Conditional`
* multiple `@Conditional` are `and` logic
* multiple `Condition` are `and` logic

Javadoc of `Conditional`

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

## 1C.4.ConditionalOnClass No Effect

The following code, ConditionalOnClass placed on the same type of bean declaration,
will report a NoClassDefFoundError

```java
@Bean
@ConditionalOnClass(SomeService.class)
public SomeService someService() {
    return new SomeService();
}
```

Need to change to something like the following, inner class-driven configuration,

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

See [Creating Your Own Auto-configuration](https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#features.developing-auto-configuration)

## 1C.5.Disable any `@Component`

In the Spring `@Conditional` auto configuration, the `On*Bean` depends on the registration order
of the beans, which makes it difficult to detect problems. Therefore, in Wings, we move the problem
to the early startup phase to detect bean conflicts as early as possible.
By setting property files, we can disable unnecessary features.

On `@Configuration`, `@Bean` and any `@Component`, using `@ConditionalWingsEnabled`
and the `qualified-key` can disable any Component and Bean,

`qualified-key` = `Prefix.` + `ClassName` + `.beanMethod`? = `true|false`

* Prefix - default wings.enabled
* ClassName - e.g. pro.fessional.wings.silencer.spring.boot.WingsEnabledCondition
* beanMethod - e.g. crc8Long

`@*Configuration` naming rules are as follows,

* `*AutoConfiguration` - `@AutoConfiguration` `@Import` `@Configuration`
* `*Configuration` - top `@Configuration` and its `@Bean`
* `*Event` - inner `@Configuration` and its `@EventListener`
* `*Wired` - inner `@Configuration` and its `@Autowired`
* `*Bean` - inner `@Configuration` and wrap its single `@Bean *`
* `*Scan` - inner `@Configuration` for `@ComponentScan`

`@ConditionalWingsEnabled` has the following enhancements

* abs - `absolute-key`, without prefix, priority lower then `qualified-key`
* key - `relative-key`, with prefix, priority lower then `absolute-key`
* value - default value, the lowest priority, if no key found
* and, not - `this && and1 && and2 && !not1 && !not2`

where `qualified-key` is equivalent to `id`, globally unique and the highest priority,
`absolute-key` and `relative-key` are equivalent to `alias`, can be shared without uniqueness.
and the priority of these 3 keys is from highest to lowest.

* qualified-key = `prefix` + `ClassName` + `methodName`?
* absolute-key = `abs()`
* relative-key = `prefix` + `key()`
* default = `value()`

In addition to the precise control of annotations,
the following props can impl the `ant-matcher` control of `qualified-key`.

* wings.silencer.conditional.error
* wings.silencer.conditional.prefix
* wings.silencer.conditional.enable

```properties
## ... is short for the package

## @ConditionalWingsEnabled(prefix = "catty.enabled")
## disable @Bean catBean in WingsEnabledCatConfiguration
catty.enabled.pro...WingsEnabledCatConfiguration.catBean=false
## disable InnerCatConfiguration and its Bean
catty.enabled.pro...WingsEnabledCatConfiguration$InnerCatConfiguration=false

## @Conditional(WingsEnabledCondition.class) or @ConditionalWingsEnabled
## disable @Bean dogBean in WingsEnabledDogConfiguration
wings.enabled.pro...WingsEnabledDogConfiguration.dogBean=false
## disable InnerDogConfiguration and its Bean
wings.enabled.pro...WingsEnabledDogConfiguration$InnerDogConfiguration=false
```
