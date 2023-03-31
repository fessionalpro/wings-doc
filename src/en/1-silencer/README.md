---
isOriginal: true
icon: define
category:
  - Silencer
  - Home
---

# 1.Silencer

![silencer](/silencer_icon.png)

> silence fool, All magic in front of him will be silenced.

Minimize deps on SpringBoot to provide auto and cascade configuration.

## 1.1.Module Project

* silencer - auto conf prop/yaml and i18n message
* silencer-curse - code, log, datetime utility
* silencer-test - test utility eg. i18n message

## 1.2.Cascade Config

Wings recommends splitting the large config(application.*) into separate smaller configs
grouped by feature or project. and provides default values that apply in 80% of cases.
use the priority and cascading of configs to provide the final effective configuration.

Similar to CSS (Cascading Style Sheets), multiple key-value configs can exist in different configs,
and the highest priority value is provided to the application as the configuration value.

## 1.3.More Sections

* [Auto Cascade Config](1a-wings-conf.md) - splitting, overriding, disabling and profiling
* [Auto I18n Message](1b-wings-i18n.md) - like Config, auto and dynamic config I18n
* [Auto Config Mechanism](1c-spring-auto.md) - how to auto config with SpringBoot's principle
