---
isOriginal: true
icon: language
category:
  - WingsGod
  - Home
---

# 0I.I18n Message

As `*.Properties`, Wings enhances the default messages.properties with a separated configuration.

## 0I.1.Matching Rule

rules of matching i18n language are `lang_region` > `lang` > `default`

| Message \ lang_region   | zh_CN | zh_TW | en_US | zh |
| ----------------------- | ----- | ----- | ----- | -- |
|message.properties       | N     | N     | Y     | N  |
|message_zh.properties    | Y     | N     | N     | Y  |
|message_zh_TW.properties | N     | Y     | N     | N  |

## 0I.2.Builtin Message

```bash
# find wings-i18n path
find . -type d -name 'wings-i18n'| egrep -v -E 'target/|test/'
```

### 2a.AnthnErrorEnum slardar-webmvc

authn error of spring security.

* error.authn.onlySupports
* error.authn.badCredentials
* error.authn.locked
* error.authn.disabled
* error.authn.expired
* error.authn.credentialsExpired
* error.authn.failureWaiting

### 2b.CommonErrorEnum warlock

common error, eg. assert.

* error.common.assert.empty
* error.common.assert.format
* error.common.assert.notfound
* error.common.assert.existed
* error.common.assert.state
* error.common.assert.param
* error.common.data.notfound
* error.common.data.existed
* error.common.message.unreadable
