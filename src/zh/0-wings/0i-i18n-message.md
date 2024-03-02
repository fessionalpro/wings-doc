---
isOriginal: true
icon: enum
category:
  - 神翼
  - 首页
---

# 0I.多国语信息

同`*.Properties`一样，Wings以分隔的配置来加强默认的messages.properties。

## 0I.1.匹配规则

多国语匹配时，匹配message的规则为 `lang_region` > `lang` > `default`

| Message \ lang_region   | zh_CN | zh_TW | en_US | zh |
| ----------------------- | ----- | ----- | ----- | -- |
|message.properties       | N     | N     | Y     | N  |
|message_zh.properties    | Y     | N     | N     | Y  |
|message_zh_TW.properties | N     | Y     | N     | N  |

## 0I.2.内置配置

```bash
# find wings-i18n path
find . -type d -name 'wings-i18n'| egrep -v -E 'target/|test/'
```

### 2a.AnthnErrorEnum slardar-webmvc

spring security的验证错误

* error.authn.onlySupports
* error.authn.badCredentials
* error.authn.locked
* error.authn.disabled
* error.authn.expired
* error.authn.credentialsExpired
* error.authn.failureWaiting

### 2b.CommonErrorEnum warlock

通用错误，如assert

* error.common.assert.empty
* error.common.assert.format
* error.common.assert.notfound
* error.common.assert.existed
* error.common.assert.state
* error.common.assert.param
* error.common.data.notfound
* error.common.data.existed
* error.common.message.unreadable
