---
isOriginal: true
icon: key
category:
  - Warlock
  - Authn
---

# 4A.Integrated Authn

Support multiple logins, such as username password, Basic extension, Oauth 3rd, etc.,
safe and easy to control the source of users.

## 4A.1.Integrate Github

Since Github is the most common and easiest, use it as a demo for Oauth login.

Set up and write down `App ID`, `Client ID` and `Client secret` on Github
`Settings` | `Developer settings` | `GitHub Apps`, and be careful not to leak them.

* start TestWarlockBondApplication
* visit <http://localhost:8084/auth/github/login-page.html> to redirect
* visit <http://localhost:8084/auth/github/login-page.json> to show json
* auth with github and check the response
* customize LoginSuccessHandler to response in other style

## 4A.2.Return 401 or 302

If access failed with `UNAUTHORIZED`, spring throws an AccessDeniedException.
The ExceptionTranslationFilter then selects the appropriate AuthenticationEntryPoint.

In Wings, there are 2 AuthenticationEntryPoint by default.

* LoginUrlAuthenticationEntryPoint - the user/pass login for common user
* BasicAuthenticationEntryPoint - basic authentication for monitoring

LoginUrl can select which form of login to provide to the user by login-forward setting.

On the EntryPoint selection, `http header` can be set to satisfy specific matching rules.
The following settings use basic authentication if any of the rules are met.
see [HttpBasicConfigurer.registerDefaults](https://github.com/spring-projects/spring-security/blob/39a80497c27b4cbab70f331f1f92eac7d555f502/config/src/main/java/org/springframework/security/config/annotation/web/configurers/HttpBasicConfigurer.java#L168-L187) for details

* X_REQUESTED_WITH - contains `X-Requested-With: XMLHttpRequest` header
* restNotHtmlMatcher - `Accept` dont contain `text/html`, and contains any of the following,
  - application/atom+xml
  - application/x-www-form-urlencoded
  - application/json
  - application/octet-stream
  - application/xml
  - multipart/form-data
  - text/xml
* allMatcher - `Accept` contains `*/*`

## 4A.3.OpenAPI3 Features

In the OpenAPI3 specification, `Accept`, `Content-Type` and `Authorization` are not allowed to be modified.

<https://swagger.io/docs/specification/describing-parameters/#header-parameters>

> Note: Header parameters named Accept, Content-Type and Authorization
> are not allowed. To describe these headers, use the corresponding OpenAPI keywords:

Wings default configuration of swagger provides text and json types,
corresponding to LoginUrl and Basic's EntryPoint respectively.

302 in swagger is automatically redirected to the target page,
and finally displayed in 200. This process can be seen in debug or curl.

```bash
curl -vX 'POST' \
  'http://localhost:8084/user/authed-user.json' \
  -H 'accept: text/html'
```
