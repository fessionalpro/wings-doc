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
* `**/spring/bean/` autoload, as specified by @ComponentScan
* `**/spring/conf/` Configurer or configuration class
* `**/spring/prop/` Property mapping
* `**/spring/help/` Configuration helper
* `*Configuration.java` conditional load, with config items prefixed by `spring.wings.`

When developing with `idea`, there will be yellow warnings or prompts,
that do not affect the operation, but look like an eyesore.

* Prompting "Application context not configured for this file"
  Just add `boot/WingsAutoConfiguration` manually in `Project Structure`/`Facets`/`Spring`.
* Prompting "annotation processing", check in `Settings`/`Annotation Processors`/`Enable annotation processing`
* Note: The inner classes in `@Configuration`, `static class` are treated as independent and not bound by the outer.

In Wings project, there will be a `spring-wings-enabled.properties` to toggle the feature.
Set `spring.wings.silencer.enabled.verbose=true` to view the INFO of the log message.

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
