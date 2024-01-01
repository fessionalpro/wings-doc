---
home: true
icon: home
heroImage: /logo.png
heroText: BKB+飞鞋+SpringBoot
tagline: 🎉快速交付 🧩安全重构 🍵低技术债
actions:
  - text: 项目规约 🔖
    link: ./0-wings/0a-code-style.html
    type: primary

  - text: 数据版本 💡
    link: ./2-faceless/2a-flywave.html

  - text: 属性配置 🧭
    link: ./0-wings/0h-prop-index.html

features:
  - icon: config
    title: 分隔和层叠配置
    details: 配置项可按模块分成独立文件，按其优先级层叠后生效
    link: ./1-silencer/1a-wings-conf.html

  - icon: language
    title: 多国语和多时区
    details: 自动配置及校对时区，静态及动态的多国语配置及转化
    link: ./1-silencer/1b-wings-i18n.html

  - icon: mysql
    title: 库及数据的版本管理
    details: 基于flywave工具，用git和sql管理表结构和数据变化
    link: ./2-faceless/2a-flywave.html

  - icon: software
    title: 强类型的SqlMapping
    details: 快速实现业务目标，快速偿还技术债务，安全的面对重构
    link: ./2-faceless/2b-jooq.html

  - icon: storage
    title: 分布式ID及分表分库
    details: 高效的分布式ID及加密算法，按需按业务灵活分表分库策略
    link: ./2-faceless/2c-shard.html

  - icon: json
    title: 工程化Jackson配置
    details: 对数字，日期时间，时区等业务类型做了兼容约定及安全检查
    link: ./3-slardar/3a-jackson.html

  - icon: extend
    title: Host继承和URL重载
    details: 无需反向代理rewrite，MVC实现URL继承和重载，按域换肤
    link: ./3-slardar/3c-host-ext.html

  - icon: token
    title: 分布式session和多种认证
    details: 基于Hazelcast的分布式Session，Cookie可加密，别名
    link: ./3-slardar/3e-auth-session.html

  - icon: stack
    title: Jvm及分布式的缓存、锁和对象
    details: 基于Cache2k和hazelcast实现的Jvm及分布式对象，锁和事件
    link: ./3-slardar/3f-cache-event.html

  - icon: compare
    title: 防连击，防抖，防篡改
    details: 后端的请求防抖，服务防连击，编辑内容防篡改，验证码保护等
    link: ./3-slardar/3g-fun-server.html

  - icon: command
    title: 第三方登录，角色权限管理
    details: 集成Oauth登录，可按应用，功能，来源等细粒度的管理权限
    link: ./4-warlock/4c-security.html

  - icon: more
    title: 开箱即用的功能，可插拔模块
    details: 开箱即用的功能，可插拔模块，devops脚本和手册，代码自动生成器
    link: ./8-radiant/
---

<!-- markdownlint-disable MD025 -->
# 🥾 纹丝不忒

> WingsBoot(代号神翼)=BKB+飞鞋+SpringBoot，若你也喜欢过Dota，你懂的。  
> 我们主张防御式编程，May The `false` Be With You !

![mirana](/mirana_minimap_icon.png)
![meepo](/meepo_minimap_icon.png)
![silencer](/silencer_minimap_icon.png)
![faceless](/faceless_minimap_icon.png)
![slardar](/slardar_minimap_icon.png)
![warlock](/warlock_minimap_icon.png)
![batrider](/batrider_minimap_icon.png)
![tiny](/tiny_minimap_icon.png)

适合成长型团队在成长型业务中平稳的实现，技术过渡，团队拉扯和业务升级。
其核心价值是：①快速实现业务目标；②及时偿还技术债务；③安全重构程序和业务。
例如从单应用起，到分表分库，再到服务治理及云化等项目阶段，团队都能够，

* 快速的重构业务及其代码，安全的变更数据模型 - 强类型和防御式风格
* 用git和sql对数据表及表数据做好版本管理 - Flywave工具（非Flyway）
* 对线上数据变化的追溯，复盘，恢复 - 日志体系及跟踪策略

## 📦 技术体系

<!-- markdownlint-disable MD013 -->
* [![SpringBoot-3.0](https://img.shields.io/badge/springboot-3.0-green?logo=springboot)](https://spring.io/projects/spring-boot) 框架哲学和约定下的无入侵性增强 🌱 [Apache2]
* [![Java-17](https://img.shields.io/badge/java-17-gold)](https://adoptium.net/temurin/releases/?version=17) 主要业务语言，OpenJDK长期运行 ☕️ [GPLv2+CE]
* [![Kotlin-1.7](https://img.shields.io/badge/kotlin-1.7-gold)](https://kotlinlang.org/docs/reference/) 辅助语音，做更好的Java [Apache2]
* [![Jooq-3.17](https://img.shields.io/badge/jooq-3.17-cyan)](https://www.jooq.org/download/)  主要的强类型SqlMapping 🏅 [Apache2]
* [![Mysql-8](https://img.shields.io/badge/mysql-8.0-blue)](https://dev.mysql.com/downloads/mysql/) 主要的业务数据库，推荐8，兼容5.7 💡 [GPLv2]
* [![H2Database-2.1](https://img.shields.io/badge/h2db-2.1-blue)](https://h2database.com/html/main.html) 单机数据库，以离线及断线业务 [MPL2]或[EPL1]
* [![Hazelcast-5.1](https://img.shields.io/badge/hazelcast-5.1-violet)](https://docs.hazelcast.com/hazelcast/) 分布式缓存，消息，流等 [Apache2]
* [![ServiceComb-2.8](https://img.shields.io/badge/servicecomb-2.8-violet)](https://servicecomb.apache.org) 更工程化和紧凑的Cloud方案 [Apache2]
* [![ShardingSphere-5.3](https://img.shields.io/badge/shardingsphere-5.3-violet)](https://shardingsphere.apache.org) 数据库的分表分片弹性伸缩方案 [Apache2]

[Apache2]: https://www.apache.org/licenses/LICENSE-2.0
[GPLv2+CE]: https://openjdk.org/legal/gplv2+ce.html
[GPLv2]: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
[MPL2]: https://www.mozilla.org/MPL/2.0
[EPL1]: https://opensource.org/licenses/eclipse-1.0.php

## 🐵 无脑使用

直接作为parent使用，可通过OSS获得不定期发布的`SNAPSHOT`版本。

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
git clone --depth 1 https://github.com/\
trydofor/professional-wings.git
# ② 安装依赖，可跳过，支持java8编译
# sdk use java 8.0.352-tem
git submodule update --remote --init
(cd observe/meepo && mvn package install)
(cd observe/mirana && mvn package install)
# ③ 安装wings，java-17
sdk use java 17.0.6-tem
mvn package install
```

🚀 Built on <a :href="'https://github.com/fessionalpro/wings-doc/commits/' + $frontmatter.GIT_REPO_HEAD.substring(11)" target="_blank"> {{ $frontmatter.GIT_REPO_HEAD.substring(0, 21) }} </a> Commit
