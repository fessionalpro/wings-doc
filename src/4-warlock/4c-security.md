---
isOriginal: true
icon: command
category:
  - Warlock
  - Security
---

# 4C.Customize Security

All Wings projects, features can be customized by configuring `*.properties` and declaring `@Bean`.
However, there may be complex dependencies between features that require users to take care of, even to read the code.

## 4C.1.Customize Login

The difference between the login page `login-page*` (with `page`) and the processing interface `*login*`, is as follows

* login-page - the login page displayed to the user, typically an automatic 302 redirect at 401
* login - for the processing or callback interface after submitting credentials, executed by filter

The default login page and returned results provided by Warlock can be modified in the following 4 ways

* expose ComboWingsAuthPageHandler.Combo to add processing details
* expose WingsAuthPageHandler to replace the processing details
* expose wings.warlock.security.login-page to redirect to a custom page
* expose AuthenticationSuccessHandler, AuthenticationFailureHandler to handle login events
* expose LogoutSuccessHandler to handle logout events

In the default implementation, the sessionId is placed in the cookie and header when login,
and the session is deleted when logout.

Note that the http protocol has case issues with header and cookies, so all lowercase is recommended.

* header RFC2616 *not* case-sensitive, some agents or tools will automatically convert to all-lowercase
* cookie RFC2019 case sensitive, generally preserved as it is
* Known header is automatically lowercase by default swagger-ui and webpack-dev-server (node http)

NonceLoginSuccessHandler with NonceTokenSessionHelper implements the function of oauth one-time token for session.
So if you need this feature, you must implement your own AuthenticationSuccessHandler to inherit NonceLoginSuccessHandler.

Oauth can redirect customization by host and state parameters, see AuthStateBuilder for details.

* Redirects - 302, starting with `http` or `/`
* Write-back - non-empty content, write back directly to response
* For security reasons, the above must be preset in the configuration, see `wings.warlock.just-auth.safe-*`

Note that `safe-host` has restrictions on the following features.

* check the `{host}` of redirect-uri if request with host parameter, and construct uri if it passes
* When redirect in state starts with http, check for host, and if it not pass, write back directly instead of redirecting.

## 4C.2.Customize Authz

* expose ComboWingsAuthDetailsSource.Combo to add processing details
* expose WingsAuthDetailsSource to replace the processing details
* expose ComboWingsUserDetailsService.Combo to add loading details
* expose WingsUserDetailsService to replace the user loading

## 4C.3.Customize Authn

In addition to the default implementation of the User, Role, and Perm system,
Warlock supports the following fine-grained customization of users and permissions

* NonceUserDetailsCombo - one-time login
* MemoryUserDetailsCombo - Mount users and perm by uid, login name, login method
* NonceTokenSessionHelper - out of oauth2 process, get SessionId by one-time state

## 4C.4.Verify Perm at Login

Wings users and permissions are managed in a single database. If different apps need different permissions,
For example, in admin page, you must have ROLE_ADMIN to access, otherwise after successful login,
all features are 403, which is not friendly.

So when logging in, use authType prefix, you can directly check ROLE_ADMIN permissions, if not, the login will fail.

```properties
wings.warlock.security.zone-perm.admin=ROLE_ADMIN
## Support `authType` and `authZone`, via param or path (PathPattern)
wings.warlock.security.login-proc-url=/auth/{authType}-{authZone}/login.json
## Better compatibility, supports both authType and authZone via path
#/auth/{authType:[^-]+}{splitter:-?}{authZone:[^-]*}/login.json
```

The following URLs can all pass authZone, QueryString is recommended,
and PathVariable is used when QueryString NOT supported.

* QueryString - /auth/username/login.json?authZone=admin
* PathVariable - /auth/username-admin/login.json

In addition, it is also possible to use authedPerm to authenticate permissions after a successful login,
which also has automatic logout functionality, with the difference that

* authZone returns as login failure, no session is written, it is a general login action,
  i.e. loading information and verification.
* authedPerm first login successfully, writes session, and then logout if there is no permission,
  which is two actions of login + logout.

## 4C.5.Authn by AppName

This feature is not implemented by default, and the following basic principles must be
followed when enabling it to prevent misuse.

* Security viewpoint, the authorization should not be expanded, and should be minimized.
* Usage viewpoint, the data structure of the permission should be simple,
  each app should be independent, mixed use leads to complex.

ComboWarlockAuthzService.Combo should be customized to adjust permissions according to spring.application.name.

## 4C.6.Authn by Ip

Login or perms can be controlled via remote ip. However, dynamic ip,
such as proxies and mobile networks should be considered.
