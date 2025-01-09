---
isOriginal: true
icon: circle-user
category:
  - Warlock
  - Home
---

# 4.Warlock

![warlock](/warlock_icon.png)

> Hellfire Golem plus FatalBonds can change the situation instantly

Based on Faceless and Slardar, it provides basic user, authn/authz,
access control, data isolation, and other features.

## 4.1.Module Project

* warlock - integrate jooq and slardar
* warlock-shadow - integrate slardar-sprint
* warlock-bond - implement login, authn and authz
* warlock-codegen - codegen for the project
* warlock-test - testing utility and login

## 4.2.Access Control

Warlock's access control, focusing on the following scenarios and technical aspects,

* Filter(Url) - coarse-grained control scenarios, such as roles, functions
* Method(Aop) - fine-grained control functions, such as read, write, delete
* Data - data isolation, such as object control, ACL

it is more centralized and simple and recommended to use Url prefix,
while Aop is more decentralized and more granular.

When doing the Matcher of Url, try to avoid rule crossover, special rule in the first,
AnyRequest in the last as the default rule. If the rules have crossover, match by FIFO,
the calling relationship in spring is as follows, and the underlying data is LinkedHashMap.

* FilterSecurityInterceptor.beforeInvocation
* DefaultFilterInvocationSecurityMetadataSource.getAttributes

The order of wings config is from loose to strict (PermitAll > Authenticated > Authority),
and ends with AnyRequest. The Authority are grouped by URL, sorted in reverse order of
the ascii of the URL, i.e., the English number comes before `*` and the loose rule comes after.

## 4.3.Partial Usage

Warlock provides a predefined auth-perm-role system, including table structures, data relationships, etc.

The default implementation of authn-authz and perm-role system, which depends on the global UserId with certain limitations.
In any system, login and permissions have important security and performance implications,
usually with a high level of integration and complexity. Therefore, when partially using this feature,
you need to check the configuration items and the injected beans one by one.

In the default implementation, eg. reading and accumulating counts, if the depend table does not exist in the database,
it does nothing or returns empty.

## 4.4.Full Usage

WebSecurity in SpringBoot(before 3.0) needs to extend Adapter with many constraints.
Therefore, when using the auto-config feature provided by wings,
the following special bean should to be noted.

* WebSecurity - expose WebSecurityCustomizer Bean
* HttpWebSecurity - expose HttpSecurityCustomizer Bean

Customize WebSecurityConfigurerAdapter, you should pay attention to the lifecycle and order.

> Is there an unresolvable circular reference?
> Error creating bean with name 'springSecurityFilterChain':
> Requested bean is currently in creation.

The above error occurs when injecting the `@Bean` of WebSecurityConfiguration.
In short, WebSecurity has special beans and its chain calls has sequential requirements.

## 4.5.More Sections

* [Integrated Authn](./4a-authn.md) - Multiple login, authn and token policies
* [Combined Authz](./4b-authz.md) - Permission(Perm) and Role token system
* [Customize Security](./4c-security.md) - Customize login, authn and authz
* [Dynamic Tweaking](./4e-tweak.md) - Global and thread-level teak time, logging and exceptions
* [Open Api](./4f-api-oauth.md) - External Api with limited functions
* [Time Watching](./4g-watching.md) - Timing and logging of slow requests
* [Union Login](./4h-uni-auth.md) - Association login in wings app union
