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

* 提供了多语言多时区真实解决方案（动态语言包，时区，夏令时，闰秒）
* 提供了数据库版本和数据版本管理（表变更变多了，数据维护多了）
* 安排了一套油腻的约定和工程实践（枚举类，配置文件，模板等约定）
* 解决了软件开发中最难的命名问题（允许使用中文命名，解决行业黑话）
* 功能池很深，对功能有独到的理解（读3遍官方文档，debug部分源码）
* 不懂代码的看文档，都看不懂别用（这是你的homework，及格线）

其目标是使小创业团队，平稳的实现从单应用，到分表分库，到服务化的演变。在任何项目阶段和规模下能够，

* 安全快速的重构业务，变更数据模型及服务，管理版本及兼容性。
* 运行时的数据变化亦可追溯，复盘，恢复。
* 对抗业务变化快，设计不足的技术债务。

## 0.1.版本号说明

Wings版本号为`4段`，前3段为spring-boot版本，第4段是build号。
build是3位数字，第1位为大版本，意味着不兼容性；后2位是小版本，意味着基本兼容或容易适配。

例如，`2.4.2.100-SNAPSHOT`，表示基于boot2.4.2，是wings的`1##`的系列。
因为wings使用了`revision`和`changelist`的CI占位属性，所以需要Maven 3.5.0 以上。

## 0.2.项目结构

Wings由多个子项目构成，都采用了Dota相关的命名，主要包括以下，

* 沉默术士 wings/silencer - springboot的工程化装配，I18n等
* 虚空假面 wings/faceless - 数据层，分表分库，数据及库的版本管理
* 鱼人守卫 wings/slardar - Servlet体系的WebMvc基础约定和封装
* 术士大叔 wings/warlock - 综合以上的基础业务模块和功能脚手架
* 演示例子 example - 集成以上的样板工程和例子
* 旁观阵线 observe - 生态内关联项目
* 天辉阵线 radiant - 开箱即用的插拔功能模块

## 0.3.技术选型

技术选型，遵循Unix哲学，部分回答了`为什么`和`为什么不`？

* SpringBoot - 事实标准，从业人员基数大，容易拉扯队伍和技术衔接。
* Jooq/QueryDsl - 基于`限制的艺术`，看重其强类型而放弃留下的mybatis体系。
  jooq强类型，可以受到IDE加持；不能写成过于复杂的SQL，有利于分库，分服务。
* kotlin - 比`scala`更胜任`更好的java`，目前仅在flywave支撑性项目中用了kotlin，
  而在主要业务场景，仍然主张【少吃糖，写好java】
* webmvc - 尽管`webflux`在模型和性能好于serverlet体系，但当前更多的是阻塞IO，多线程场景。
* lombok - 简化代码，使用了Experimental功能，开发时，需要自己在pom中引入。
* git-flow - git管理的最佳实践。
* Guava, commons-lang3, commons-io - 进阶必备的工具包.
* ShardingSphere - 分表分库，足以解决90%的`数据大`的问题。
* Hazelcast - 相比于Redist，Hazelcast更简单，集成度更高。

## 0.4.更多章节

* [编码风格](0a-code-style.md) -  价值观，编码哲学，编码风格
* [RestHalf规范](0b-rest-half.md) - 场景化业务的URL规范
* [开发工具](0c-dev-tool.md) - 工欲善其事，必先利其器
* [开发运维](0d-qa-devops.md) - 编码开发，线上运行等话题
* [配置话题](0e-qa-config.md) - maven，properties，spring的配置话题
* [其他话题](0f-qa-others.md) - 未归类的话题
* [幽灵船模型](0g-ghost-ship.md) - wings功能的基本构建模型
