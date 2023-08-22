---
isOriginal: true
icon: code
category:
  - 神翼
  - 规范
---

# 0J.编码模式

收集Wings编码实践中常见的代码模式。

## 0J01.Config/Script的注释

在Config (`*.properties`)和Script(`*.sh`)中的注释，按用途分为两类，

* 功能开关，但保留代码。使用单个注释，如 `#`
* 帮助文档，和功能无关。使用双倍注释，如 `##`

这个规则的好处在于

* 明确确认注释的用途
* 可以快速切换功能开关，比如使用快捷键或列编辑
* 双倍注释，可以避免被错误开启

## 0J02.Swagger的Api文档

参考 [0A.9.Api测试及文档约定](./0a-code-style.md#0a9api测试及文档约定)，
以`jsdoc`和`markdown`格式书写文档。

```java
@SuppressWarnings("UastIncorrectHttpHeaderInspection")
@Operation(summary = "Verify that the one-time token is valid", description = """
        # Usage
        Use Oauth2 state as the token and require the same ip, agent and other header as the original client.
        After successful verification, the session and cookie are in the header as a normal login
        ## Params
        * @param token - RequestHeader Oauth2 state as token
        ## Returns
        * @return {401} token is not-found, expired, or failed
        * @return {200 | Result(false, message='authing')} in verifying
        * @return {200 | Result(true, data=sessionId)} success
        """)
@PostMapping(value = "${" + WarlockUrlmapProp.Key$authNonceCheck + "}")
```
