---
isOriginal: true
icon: safe
category:
  - 术士
  - 验证
---

# 4A.集成登录

支持多种登录，如用户名密码，Basic扩展，Oauth第三方等，可以安全且方便的控制用户来源。

## 4A.1.集成Github

因为Github最广泛和最简单，以其作为Oauth登录的演示。

在github上设置，需要`App ID`，`Client ID`和`Client secret`，注意不要外泄。
设置入口如下，`Settings` | `Developer settings` | `GitHub Apps`

* Homepage URL - <http://127.0.0.1:8084>
* Callback URL - <http://127.0.0.1:8084/auth/github/login.json>

## 4A.2.是401还是302

当请求禁止访问 UNAUTHORIZED 时，spring会抛出AccessDeniedException，
再由ExceptionTranslationFilter选择合适的AuthenticationEntryPoint。

wings中，默认存在2个AuthenticationEntryPoint，

* LoginUrlAuthenticationEntryPoint - 用户侧的通常登录
* BasicAuthenticationEntryPoint - 监控侧的basic验证

对于LoginUrl可以配置login-forward，选择以何种形式提供给用户端登录。

在EntryPoint的选择上，可以通过设置http header以满足匹配规则。
以跳过basic为例，详见 HttpBasicConfigurer.registerDefaults

* 不含：X-Requested-With: XMLHttpRequest
* `Accept`中包括以下任意即可
  - application/xhtml+xml
  - image/*
  - text/html
  - text/plain

## 4A.3.OpenAPI3特点

在 OpenAPI3 规范中 `Accept`，`Content-Type`和`Authorization`不许修改。

<https://swagger.io/docs/specification/describing-parameters/#header-parameters>

> Note: Header parameters named Accept, Content-Type and Authorization
> are not allowed. To describe these headers, use the corresponding OpenAPI keywords:

wings默认配置swagger，提供了text和json类型，分别对应LoginUrl和Basic的EntryPoint。
注意到302时，swagger自动导向目标页面，最终以200显示。此过程可以debug或curl看到。

```bash
curl -vX 'POST' \
  'http://127.0.0.1:8084/user/authed-user.json' \
  -H 'accept: text/html'
```
