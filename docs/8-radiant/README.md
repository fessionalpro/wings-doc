---
isOriginal: true
icon: ubuntu
category:
  - 天辉
---

# 8.天辉全明星

基于邮轮模型，提供了可插拔的业务场景和组合功能，简称组件。

## 8.1.基本使用

工程把组件作为dependency时，组件功能会被自动激活，比如spring配置，数据表。

创建数据表属于危险操作，默认关闭，依赖于faceless-flywave的RevisionFitness，

* 引入faceless-flywave依赖，建议scope=test
* 设置spring.wings.faceless.flywave.enabled.module=true
* 在当前工程启动springboot app，建议scope=test

## 8.2.相关项目

* [小小任务](8a-tinytask.md) - 以Database为核心可启停的任务
* [任务的属性](8b-prop-tinytask.md) - TinyTask的配置
* [小小邮件](8c-tinymail.md) - 以Database为核心有事务的邮件
* [邮件的属性](8d-prop-tinymail.md) - TinyMail的配置
