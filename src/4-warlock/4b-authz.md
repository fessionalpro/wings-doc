---
isOriginal: true
icon: token
category:
  - Warlock
  - Authz
---

# 4B.Combined Authz

Authorization is a combination of permissions (Perm) and roles (Role). Both are defined in db and
auto generated into java classes through templates.

* Function permission - role inheritance and extension, id sudo, temp add/drop, superuser
* Data isolation - scope isolation, function inheritance, assistant extension, temp authz

## 4B.1 Perm(ission)

`Perm` consists of scope and action, both are `.` separated and `all lowercase` naming rule, see java variable naming.

The format is `scope + ('.' + scope )* + '.' + action`, i.e. multiple level scopes, and the last is action

* scope is a noun that supports affiliation, using `.` separates, `system.menu` belongs to `system`
* the first scope cannot be ROLE prefix (spring default is ROLE_)
* action is a verb that supports scope affiliation, e.g. `system.menu.read` belongs to `system.read`
* `*` means that it contains all actions, and is only used to configure the affiliation relationship,
  and cannot be used on specific methods

`Perm` is mainly used for method-level authentication, i.e. annotations added to methods, such as `@Secured`, `@Pre*`.

```java
// https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html

// recommended, invoke hasAnyAuthority via SecuredAuthorizationManager
@Secured(PermConstant.System.User.read)

// JSR250 only work for role
@RolesAllowed @PermitAll @DenyAll

// Not recommended because it's longer, and SpEL is too powerful
@PreAuthorize(hasAuthority + PermConstant.System.Perm.create + End)
@PreAuthorize("hasAuthority('" + PermConstant.System.Perm.create + "')")
@PreAuthorize("hasAnyAuthority(T(pro.fessional.wings.warlock.security.autogen.PermConstant$System$User).read)")
```

## 4B.2.Role

`Role` does not support inheritance, it is `all-caps` unseparated naming rule
(to distinguish permissions), see java variable naming.

* The `ROLE_` prefix as spring is used in the auto generated java code.
* Role is flat, but can be configured for affiliation, e.g. LEADER includes MEMBER
* No separator, meaning words separated by `_` are treated as one word.
* Prefix is not recommended in db, the default prefix is added automatically on load (Spring default is ROLE_)

`Role` is mainly used in filter-level configuration, such as url permissions.
Of course, it can also be used at method level. When used in configuration,
you need to add the prefix, and it is recommended to use the prefix to distinguish Perm.

## 4B.3.Working Mechanism

Warlock loads the Perm and Role associated with the user after the user has passed the authn (renew),
and flattens their affiliation and inheritance relationships, and loads them all into the SecurityContext.

When the string of `Perm` and `Role` (with prefix) starts with `-`,
it means that this permission is excluded and has the highest priority.

You can configure `mem-auth` and then change the user's permissions for different login methods.
For example, implementing ComboWarlockAuthzService.Combo also allows you to change permissions by condition.

## 4B.4.Data Permission

Data permissions, including user, department, and company, are visible at three levels.

* User (User), based on user_id, also includes sub-accounts
* Department (Dept), based on dept_id, including departments relationship
* Corp (Corp), based on corp_id, usually related to domain
* Tenant (Saas), based on saas_id, usually in SaaS system
