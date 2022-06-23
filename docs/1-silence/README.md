---
isOriginal: true
icon: define
category:
  - 沉默
  - 首页
---

# 1.沉默术士

![silencer](/silencer_icon.png)

> silence fool，一切魔法，遭遇了他，都将归于寂静。

最小化依赖springboot，提供以下自动配置和叠加能力

## 1.1.层叠和分隔配置

wings中主张按功能或项目，把application的大配置，分隔成独立的小配置。
并且，提供80%情况适用的默认值，利用配置文件加载的优先级，层叠配置项。

与CSS（层叠样式表）类似，同一个key的配置，可能存在多个配置文件，多个值，
最终，以最高优先级的值作为系统配置值。

## 1.2.更多章节

* [Conf自动配置](1a-wings-conf.md) - 配置文件的分割，覆盖，禁用和profile
* [I18n自动配置](1b-wings-i18n.md) - 同Conf一样，自动配置I18n，或动态调整
* [自动配置机制](1c-spring-auto.md) - 利用SpringBoot的特性，完成自动配置
