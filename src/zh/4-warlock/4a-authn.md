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

因为Github最广泛也最简单，以其作为Oauth登录的演示。

在Github上设置并记下`App ID`，`Client ID`和`Client secret`，注意不要外泄。
设置入口为 `Settings` | `Developer settings` | `GitHub Apps`

* 启动 TestWarlockBondApplication
* 访问 <http://localhost:8084/auth/github/login-page.html> 重定向
* 访问 <http://localhost:8084/auth/github/login-page.json> 看数据
* 授权并检查 github 的响应
* 定制 LoginSuccessHandler 以实现不同的响应格式

## 4A.2.是401还是302

当发生禁止访问`UNAUTHORIZED`时，spring会抛出AccessDeniedException，
再由ExceptionTranslationFilter选择合适的AuthenticationEntryPoint。

wings中，默认存在2个AuthenticationEntryPoint，

* LoginUrlAuthenticationEntryPoint - 用户侧的通常登录
* BasicAuthenticationEntryPoint - 监控侧的basic验证

LoginUrl可以通过设置login-forward，选择以何种形式提供给用户端登录。

在EntryPoint的选择上，可以设置`http header`来满足特定的匹配规则。
以下设置可跳过basic验证规则，详见 HttpBasicConfigurer.registerDefaults

* 不含`X-Requested-With: XMLHttpRequest` header
* `Accept`中包括以下任意值
  - application/xhtml+xml
  - image/*
  - text/html
  - text/plain

## 4A.3.OpenAPI3特点

在OpenAPI3的规范中 不允许修改`Accept`，`Content-Type`和`Authorization`

<https://swagger.io/docs/specification/describing-parameters/#header-parameters>

> Note: Header parameters named Accept, Content-Type and Authorization
> are not allowed. To describe these headers, use the corresponding OpenAPI keywords:

wings默认配置swagger，提供了text和json类型，分别对应LoginUrl和Basic的EntryPoint。

swagger在302时会自动导向目标页面，最终以200显示。此过程可以debug或curl看到。

```bash
curl -vX 'POST' \
  'http://localhost:8084/user/authed-user.json' \
  -H 'accept: text/html'
```
