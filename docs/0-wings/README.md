---
isOriginal: true
icon: discover
category:
  - 神翼
  - 首页
---

# 0.纹丝不忒

![wings ti6](/wings-ti6-champion.png)

WingsBoot(代号神翼)是SpringBoot的一个脚手架，没有魔法和定制，主要有以下特点：

* 提供了多语言多时区真实的解决方案（动态语言包，时区，夏令时，闰秒）
* 提供了数据库版本和数据的版本管理（表变更变多了，数据维护多了）
* 安排了一套呆的约定和笨的工程实践（枚举类，配置文件，模板等约定）
* 解决了软件开发中最难的命名问题（允许使用中文命名，解决行业黑话）
* 英雄池很深，对技能有独到的理解（读3遍官方文档，debug部分源码）
* 不懂代码的看文档，都不看的，别用（这是你的homework，及格线）

其目标是使小创业团队，平稳的实现从单应用，到分表分库，到服务化的演变。
在任何项目阶段和业务规模下，能够，

* 安全快速的重构业务，变更数据模型
* 对业务和数据有版本管理，保证兼容性
* 运行时的数据变化亦可追溯，复盘，恢复
* 对抗业务变化快，设计不足的技术债务

## 0.1.版本号说明

Wings版本号为`4段`，前3段为SpringBoot版本，第4段是build号。
build号为3位数字，首位是大版本，表示不兼容性；后2位是小版本，表示基本兼容或容易适配。

例如，`2.4.2.100-SNAPSHOT`，表示基于boot2.4.2，是wings的`1##`的系列。

wings使用了`revision`和`changelist`的CI占位属性，Maven需要3.5.0以上。

## 0.2.项目结构

Wings由多个子项目构成，都采用了Dota有关的命名，主要包括以下，

* 沉默术士 wings/silencer - springboot的工程化装配，I18n等
* 虚空假面 wings/faceless - 数据层，分表分库，数据及库的版本管理
* 鱼人守卫 wings/slardar - Servlet体系的WebMvc基础约定和封装
* 术士大叔 wings/warlock - 综合以上的基础业务模块和功能脚手架
* 蝙蝠骑士 wings/batrider - RPC和微服化
* 演示例子 example - 集成以上的样板工程和例子
* 旁观阵线 observe - 生态内关联项目
* 天辉阵线 radiant - 开箱即用的插拔功能模块

## 0.3.技术选型

遵循Unix哲学，部分回答了`为什么`和`为什么不`？

* SpringBoot - 事实标准，从业人员基数大，容易拉扯队伍和技术衔接。
* Jooq/QueryDsl - 基于`限制的艺术`，看重其强类型而放弃流行的mybatis体系。
  jooq强类型，可以受到IDE加持；不能写成过于复杂的SQL，有利于分库，分服务。
* Kotlin - 比`scala`更胜任`更好的java`，目前仅在flywave支撑性项目中用了kotlin，
  而在主要业务场景，仍然主张【少吃糖，写好java】
* WebMvc - 尽管`webflux`在模型和性能好于serverlet体系，但当前更多的是阻塞IO，多线程场景。
* Lombok - 简化代码，使用了Experimental功能，开发时，需要自己在pom中引入。
* Git-flow - git管理的最佳实践。
* Guava, commons-lang3, commons-io - 进阶必备的工具包.
* ShardingSphere - 分表分库，足以解决90%的`数据大`的问题。
* Hazelcast - 相比于Redis，Hazelcast更简单，集成度更高。
* ServiceComb - 更工程化和更紧凑的

## 0.4.模块依赖

`lib`格式为依赖lib，否则为Wings模块或功能，无歧义时会简写，如curse, flywave等

* silencer ← mirana | `boot-starter` | Spring自动配置
* silencer-curse ← silencer | `aop` | Wings基本功能
* faceless ← curse | meepo | `jdbc` | 类型主键
* faceless-autogen ← faceless | 自动生成的代码
* faceless-awesome ← faceless-autogen | 依赖自动生成代码的功能
* faceless-codegen ← faceless-jooq | `jooq-codegen` | 代码生成
* faceless-flywave ← faceless | `kotlin` | 版本管理
* faceless-jooq ← faceless-awesome | `jooq` | Jooq定制
* faceless-shard ← faceless-awesome | `shardingsphere` | 分表分库
* slardar ← curse | `jackson` | `fastjson` | `okhttp` | `cache` | `sentry` | 业务基础
* slardar-hazel-caching ← slardar | `hazelcast` | 多级缓存
* slardar-hazel-session ← hazel-caching | slardar-webmvc | 分布式会话
* slardar-webmvc ← slardar | `starter-json` | `starter-web` | `undertow` | `security-web` | `springdoc` | Web增强
* slardar-sprint ← hazel-caching | hazel-session | slardar-webmvc | `starter-security` | `starter-actuator` | `boot-admin` | Web集成
* warlock ← slardar | faceless-jooq | Db基础
* warlock-autogen ← slardar | 自动生成的代码
* warlock-awesome ← slardar-autogen | 依赖自动生成代码的功能
* warlock-codegen ← warlock-awesome | faceless-codegen | flywave
* warlock-shadow ← slardar-sprint | warlock-awesome | `JustAuth` | Db|Web|权限
* warlock-bond ← warlock-shadow` | `auth-perm体系`

## 0.5.更多章节

* [编码风格](0a-code-style.md) -  价值观，编码哲学，编码风格
* [RestHalf规范](0b-rest-half.md) - 场景化业务的URL规范
* [开发工具](0c-dev-tool.md) - 工欲善其事，必先利其器
* [开发运维](0d-qa-devops.md) - 编码开发，线上运行等话题
* [配置话题](0e-qa-config.md) - maven，properties，spring的配置话题
* [其他话题](0f-qa-others.md) - 未归类的话题
* [幽灵船模型](0g-ghost-ship.md) - wings功能的基本构建模型
