---
isOriginal: true
icon: token
category:
  - 术士
  - 授权
---

# 4B.组合授权

授权由权限(Perm)和角色(Role)组合而成。都在db中定义，通过模板自动生成java类

* 功能权限 - role继承和扩展，身份马甲，临时增减，超级用户
* 数据隔离 - 管辖隔离，职能继承，助理扩展，临时授权

## 4B.1 权限Perm

`Perm`由scope和action构成，都采用`英句号`分隔`全小写`命名法，参考java变量命名。

格式为`scope + ('.' + scope )* + '.' + action`，即多个级联scope，最后一个action

* scope是一个名词，支持所属关系，使用`.`分隔，`system.menu`属于`system`
* 第一个scope不可以是ROLE前缀（spring默认是ROLE_）
* action是一个动词，支持scope的所属关系，如`system.menu.read`属于`system.read`
* `*`表示包含所有动作，仅用来配置所属关系，不能用在具体方法上

`Perm`主要用在方法级的鉴权上，即在方法上增加的注解，如`@Secured`，`@Pre*`。

```java
// 推荐
@Secured(PermConstant.System.User.read)
// 不推荐，因为比较长，且SpEL很强大
@PreAuthorize("hasAnyAuthority(T(pro.fessional.wings.warlock.security.autogen.PermConstant$System$User).read)")
```

## 4B.2.角色Role

`Role`不支持继承，是`全大写`无分隔的命名法（区分权限），参考java变量命名。

* 在自动生成的java类中，采用和spring相同的`ROLE_`前缀。
* Role是扁平的，但可配置隶属关系，如LEADER包括MEMBER
* 无分隔符，指以`_`连接的词，当做同一个词看待。
* db中不建议使用前缀，加载时是自动增加默认前缀的（Spring默认是ROLE_）

`Role`主要用在filter级的配置上，如在配置url权限时。当然也可用在方法级。
在配置文件中使用时，需要带上spring的前缀，建议使用前缀，以区分Perm。

## 4B.3.运行机制

Warlock在用户通过身份鉴别（renew）后，会分别加载同用户关联的Perm和Role，
并扁平化其各自的所属和继承关系，全部加载到SecurityContext中。

当`Perm`和`Role`(含前缀)的字符串以`-`开头时，表示排除此权限，其优先级最高。

可以通过配置`mem-auth`，进而修改用户不同登录方式的权限。
例如，实现ComboWarlockAuthzService.Combo 也可以按条件调整权限。

## 4B.4.数据权限

数据权限，包括了用户，部门，公司，三个层级的可见性。

* 用户(User)，以user_id为主，同时包括子账号
* 部门(Dept)，以dept_id为主，包括了部门间所属关系
* 公司(Corp)，以corp_id为主，通常和domain有关
* 租户(Saas)，以saas_id为主，通常在tenant的SaaS系统
