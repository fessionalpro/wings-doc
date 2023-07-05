---
isOriginal: true
icon: enum
category:
  - WingsGod
  - Home
---

# 0H.Properties Index

Config is recommended in the properties flavor because it is easy to separate, cascade and lookup.
Each `*.properties` has a strong type key mapping`*Prop.java`.

[Properties File Format](https://docs.oracle.com/cd/E23095_01/Platform.93/ATGProgGuide/html/s0204propertiesfileformat01.html)

## 0H.1.Properties File

In Silencer, the default config naming rules are as follows.

* `wings-auto-config.cnf` - Silencer config
* `wings-conf-block-list.cnf` - Block list of config
* `wings-prop-promotion.cnf` - Promote config items to system variables
* `spring-*.properties` - Spring config
* `wings-*.properties` - Wings config

## 0H.2.Item Annotation

To improve recognition and readability, the following annotations are included in the document.

* `String` - `NotNull` type of `String`
* `String?` - `Nullable` type of `String`
* `Boolean` - The primitive type and its wrapper class, non-null.
* `=` - Means `empty`, eg. `key=` means `key` is empty

The config value in the properties is usually a single line, and the multiple lines syntax as follows

* `\` - Backslash escape the new line
* `\n\` - Generate a line break in the prop to improve readability.

## 0H.3.Properties Files

* [Silencer Properties](../1-silencer/1d-prop-silencer.md) - Autoload default utility and feature
* [Faceless Properties](../2-faceless/2i-prop-faceless.md) - Database Acess, basic I18n configuration
* [Flywave Properties](../2-faceless/2j-prop-flywave.md) - Flywave's config for schema management
* [Jooq Properties](../2-faceless/2k-prop-jooq.md) - Jooq config
* [Slardar Properties](../3-slardar/3i-prop-slardar.md) - Basic config of Slardar and Spring
* [WebMvc Properties](../3-slardar/3j-prop-webmvc.md) - Basic config of Spring WebMvc
* [WebFun Properties](../3-slardar/3k-prop-function.md) - Basic config of Spring Web
* [Hazelcast Properties](../3-slardar/3l-prop-hazelcast.md) - Hazelcast config
* [Warlock Properties](../4-warlock/4d-prop-warlock.md) - Warlock login autnn config
* [TinyTask Properties](../8-radiant/8b-prop-tinytask.md) - TinyTask config
* [TinyMail Properties](../8-radiant/8d-prop-tinymail.md) - TinyMail config
