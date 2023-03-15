---
isOriginal: true
icon: proxy
category:
  - 术士
  - 首页
---

# 4.术士大叔

![warlock](/warlock_icon.png)

> 无视魔免的地狱火加上致命链接，可以瞬间改变局势。

基于Faceless和Slardar，提供了基本用户，鉴权授权，访问控制，数据隔离等功能。

## 4.1.模块划分

* warlock - 集成jooq和slardar
* warlock-shadow - 集成slardar-sprint
* warlock-bond - 集成登录授权的实现
* warlock-codegen - 工程代码生成
* warlock-test - 测试包，安全的登录

## 4.2.访问控制

Warlock的访问控制，聚焦在以下几个场景和技术层面，

* Filter(Url) - 粗粒度控制场景，如角色，职能
* Method(Aop) - 细粒度控制功能，如读取，写入，删除
* Data - 数据隔离，如对象控制，ACL

通过Url前缀特征，比较集中和简单，推荐使用。而Aop比较分散，粒度更细致。

在做Url的Matcher时，尽量避免规则交叉，特殊配置在前，AnyRequest在最后做默认配置，
当规则有交叉时，按FIFO匹配，spring中的调用关系如下，其底层数据结构是LinkedHashMap。

* FilterSecurityInterceptor.beforeInvocation
* DefaultFilterInvocationSecurityMetadataSource.getAttributes

wings配置顺序由宽松到严格(PermitAll > Authenticated > Authority)，最后AnyRequest收尾。
在Authority配置时，会按URL分组合并权限，以URL的ascii倒序排序，即英数先于`*`，宽松规则在后。

## 4.3.部分使用

Warlock提供了一套预定义的auth-perm-role体系，包括表结构，数据关系等。

默认实现的authn-authz和perm-role体系，依赖于全局UserId，具有一定限制。
任何系统中，登录及权限都有重要的安防和性能意义，通常有较高的集成度和复杂度。
所以，在部分使用此功能时，需要逐一排查配置项及注入的Bean。

默认实现中，读取及累积计数时，若数据库不存在对应表，则返回empty或忽略。

## 4.4.全部使用

WebSecurity在SpringBoot(3.0以前)需要继承Adapter实现配置，其约束很多，
因此在使用wings提供的自动配置功能时，需要注意以下特殊Bean的声明。

* WebSecurity - expose WebSecurityCustomizer Bean
* HttpWebSecurity - expose HttpSecurityCustomizer Bean

自定义WebSecurityConfigurerAdapter，需要注意Bean的生命周期和顺序关系。

> Is there an unresolvable circular reference?
> Error creating bean with name 'springSecurityFilterChain':
> Requested bean is currently in creation.

以上错误，会发生在注入WebSecurityConfiguration的`@Bean`时。
总之，WebSecurity有特殊Bean，Configurer的链式调用也有顺序要求。

## 4.5.更多章节

* [集成登录](4a-authn.md) - 多种登录方式，身份验证和令牌策略
* [组合授权](4b-authz.md) - 权限(Perm)和角色(Role)的令牌体系
* [安全定制](4c-security.md) - 定制登录，验证，授权
* [动态调试](4e-tweak.md) - 全局及线程级调试时间，日志和异常
* [对外Api](4f-api-oauth.md) - 限定功能的对外Api
* [调用计时](4g-watching.md) - 对慢请求做计时及日志
