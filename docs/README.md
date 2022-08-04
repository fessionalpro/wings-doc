---
home: true
icon: home
heroImage: /logo.png
heroText: BKB+飞鞋+SpringBoot
tagline: 🎉快速交付 🧩安全重构 🍵低技术债
actions:
  - text: 项目规约 🔖
    link: /0-wings/0a-code-style.html
    type: primary

  - text: 数据版本 💡
    link: /2-faceless/2a-flywave.html

  - text: 属性配置 🧭
    link: /0-wings/0h-prop-index.html

features:
  - icon: config
    title: 分隔和层叠配置
    details: 配置项可以按模块，功能，自由组成独立的配置文件
    link: /1-silence/1a-wings-conf.html

  - icon: language
    title: 多国语和多时区
    details: 自动配置及校对时区，静态及动态的多国语配置及转化
    link: /1-silence/1b-wings-i18n.html

  - icon: mysql
    title: 表及数据的版本管理
    details: 基于flywave工具，用git和sql管理表结构和数据变化
    link: /2-faceless/2a-flywave.html

  - icon: software
    title: 强类型的SqlMapping
    details: 快速实现业务目标，快速偿还技术债务，安全的面对重构
    link: /2-faceless/2b-jooq.html

  - icon: storage
    title: 分布式ID及分表分库
    details: 高效的分布式ID及加密算法，按需按业务灵活分表分库策略
    link: /2-faceless/2c-shard.html

  - icon: json
    title: 工程化Jackson配置
    details: 对数字，日期时间，时区等业务类型做了兼容约定及安全检查
    link: /3-slardar/3a-jackson.html

  - icon: extend
    title: Host继承和URL重载
    details: 不用反向代理rewrite，MVC中实现URL的继承和重载，换肤
    link: /3-slardar/3c-host-ext.html

  - icon: token
    title: 分布式session和多种认证
    details: 基于Hazel分布式Session，Cookie的加密，别名
    link: /3-slardar/3e-auth-session.html

  - icon: stack
    title: Jvm及分布式的缓存、锁和对象
    details: 基于Caffeine和hazelcast实现的Jvm及分布式对象，锁和事件
    link: /3-slardar/3f-cache-event.html

  - icon: compare
    title: 防连击，防抖，防篡改
    details: 后端请求防抖，服务防连击，编辑内容放防篡改，请求验证码等
    link: /3-slardar/3g-fun-server.html

  - icon: command
    title: 第三方登录，角色权限管理
    details: 集成Oauth登录，可按应用，功能，来源等细粒度的管理权限
    link: /4-warlock/4c-security.html

  - icon: more
    title: 开箱即用的功能，可插拔模块
    details: 开箱即用的功能，可插拔模块，devops脚本和手册，代码自动生成器
    link: /8-radiant/
---

<!-- markdownlint-disable MD025 -->
# 🥾 纹丝不忒

> WingsBoot(代号神翼)=BKB+飞鞋+SpringBoot，如果你也喜欢过Dota，你懂的。  
> 我们主张防御式编程风格，May The `false` Be With You !

![mirana](/mirana_minimap_icon.png)
![meepo](/meepo_minimap_icon.png)
![silencer](/silencer_minimap_icon.png)
![faceless](/faceless_minimap_icon.png)
![slardar](/slardar_minimap_icon.png)
![warlock](/warlock_minimap_icon.png)
![batrider](/batrider_minimap_icon.png)

适合成长型团队在成长型业务中平稳的实现，技术过渡，团队拉扯和业务升级。
其核心价值是：①快速交付业务目标；②及时偿还技术债务；③安全重构程序和业务。
例如从单应用起，到分表分库，再到服务治理及云化等项目阶段，团队都能够，

* 快速的重构业务及其代码，变更的变更数据模型 - 强类型和团队哲学，可插拔的模块和工具
* 用git和sql对数据表及表数据做好版本管理 - Flywave工具（非Flyweight）
* 对线上数据变化的追溯，复盘，恢复 - 日志体系及跟踪策略

## 📦 技术体系

<!-- markdownlint-disable MD013 -->
* [![SpringBoot](https://img.shields.io/badge/springboot-2.6-green?logo=springboot)](https://spring.io/projects/spring-boot) 框架哲学和约定下的无入侵性增强 🌱 [Apache2]
* [![Java11](https://img.shields.io/badge/java-11-gold)](https://adoptium.net/temurin/releases/?version=11) 主要业务语言，OpenJDK长期运行 ☕️ [GPLv2+CE]
* [![Kotlin1.6](https://img.shields.io/badge/kotlin-1.6-gold)](https://kotlinlang.org/docs/reference/) 辅助语音，做更好的Java [Apache2]
* [![Jooq](https://img.shields.io/badge/jooq-3.14-cyan)](https://www.jooq.org/download/)  主要的强类型SqlMapping 🏅 [Apache2]
* [![QueryDsl](https://img.shields.io/badge/querydsl-5.0-cyan)](https://querydsl.com/static/querydsl/5.0.0/reference/html_single) 支持但未使用的Jooq备用选择 [Apache2]
* [![Mysql](https://img.shields.io/badge/mysql-8.0-blue)](https://dev.mysql.com/downloads/mysql/) 主要的业务数据库，支持5.7，推荐8体系 💡 [GPLv2]
* [![H2Database](https://img.shields.io/badge/h2db-2.0-blue)](https://h2database.com/html/main.html) 单机数据库，以离线及断线业务 [MPL2]或[EPL1]
* [![Hazelcast](https://img.shields.io/badge/hazelcast-4.2-violet)](https://hazelcast.org/imdg/) IMDG，分布式缓存，消息，流等 [Apache2]
* [![ServiceComb](https://img.shields.io/badge/servicecomb-2.7-violet)](https://servicecomb.apache.org) 更工程化和紧凑的Cloud方案 [Apache2]

[Apache2]: https://www.apache.org/licenses/LICENSE-2.0
[GPLv2+CE]: https://openjdk.org/legal/gplv2+ce.html
[GPLv2]: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
[MPL2]: https://www.mozilla.org/MPL/2.0
[EPL1]: https://opensource.org/licenses/eclipse-1.0.php

## 🐵 无脑使用

直接作为parent，通过OSS获得发布的Snapshot

```xml
<parent>
    <groupId>pro.fessional</groupId>
    <artifactId>wings</artifactId>
    <version>${wings.version}</version>
</parent>
```

## 🦁 积极动手

建议动手搞定代码，避免低水平使用，无法发挥潜力实现初衷。

```bash
# ① 国内镜像，成功后进入项目目录
git clone https://gitee.com/trydofor/pro.fessional.wings.git
# ② 安装依赖，可跳过，支持java8编译
# sdk use java 8.0.332-zulu
git submodule update
(cd observe/meepo && mvn package install)
(cd observe/mirana && mvn package install)
# ③ 安装wings，java-11
sdk use java 11.0.2-open
mvn package install
```
