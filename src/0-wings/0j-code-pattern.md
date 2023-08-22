---
isOriginal: true
icon: code
category:
  - WingsGod
  - Standard
---

# 0J.Code Pattern

Collection of common code patterns in Wings coding practices.

## 0J01.Comments in Config/Script

There are 2 types of comment in Config (`*.properties`) and Script (`*.sh`) according to their purpose.

* Toggle code, related to functionality. Use single comments like `#`.
* Just doc, unrelated to functionality. Use double comments, like `##`.

The benefits of this rule are,

* Clearly identifies the purpose of the comments
* Functional code can be toggled quickly, e.g, shortcuts or column editing
* Avoid double comments to be turned on by mistake

## 0J02.Swagger Api Doc

Refer to [0A.9.Api Testing and Docs Convention](./0a-code-style.md#0a9api-testing-and-docs-convention),
Write documents in `jsdoc` and `markdown` formats.

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
