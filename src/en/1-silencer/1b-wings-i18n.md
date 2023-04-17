---
isOriginal: true
icon: language
category:
  - Silencer
  - I18n
---

# 1B.Auto I18n Message

Multinational language (I18n) is a more important feature in the Wings.

* Can be separated and cascaded as Conf
* Dynamic business message with Ii8nString and I18nException
* Consider I18n and timezone together

## 1B.1.Language and Timezone

The locale and zoneid of the system can be changed at wings startup by the following config,
and the empty value means do nothing.

* wings.silencer.i18n.locale=zh_CN
* wings.silencer.i18n.zoneid=Asia/Shanghai
* wings.silencer.i18n.bundle=classpath*:/wings-i18n/**/*.properties

Also, Spring itself has good support for I18N, and can be better engineered with a little customization.

* Auto scan for `wings.silencer.i18n.bundle` config (comma separated paths)
* Load separated i18n messages, path priority cascading like auto-config

## 1B.2.Sping Mechanism

Spring's loading MessageSource is different from that of configuration, and does not require Unicode escaping.

Language configuration starts with `spring.messages.basename=messages,basic`, separated by commas.
Chars after basename is considered a language tag, which can exist in a variety of formats
(do not contain `.`, it will be replaced with `/` to scan)

* message.properties - must exist, with the default of bundle name
* message_en.properties - Recommend, without country, for all english
* message_en_US.properties
* message_en_US_UNIX.properties

## 1B.3.Dynamic Message

In addition to the static configuration, wings provides CombinableMessageSource.
You can programmatically add I18n messages dynamically, such as loading from database.
