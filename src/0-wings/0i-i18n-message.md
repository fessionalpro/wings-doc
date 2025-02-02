---
isOriginal: true
icon: language
category:
  - WingsGod
  - Home
---

# 0I.I18n Message

As `*.properties`, Wings enhances the default messages.properties with a separated configuration.

## 0I.1.Matching Rule

`*.properties` filename is `_` separated lang-tag and `-` separated names.
rules of matching i18n language `my-message` are `lang_region` > `lang` > `default`

| Message \ lang_region       | zh_CN | zh_TW | en_US | zh |
| --------------------------- | ----- | ----- | ----- | -- |
| my-message.properties       | N     | N     | Y     | N  |
| my-message_zh.properties    | Y     | N     | N     | Y  |
| my-message_zh_TW.properties | N     | Y     | N     | N  |

## 0I.2.Ii8nCode Naming

use CodeEnum to define 18nCode, whose name should follow the rules

* `.` separated keys, each key has the business meaning
* The key is camelCase, case sensitive
* The first key is the level, error, warn, info
* The last key has a numeric suffix indicating the param count, 0 is ignored.

## 0I.3.Builtin Message

```bash
## find wings-i18n path
find . -type d -name 'wings-i18n'| egrep -v -E 'target|test' | sort

#./wings/faceless/src/main/resources/wings-i18n
#./wings/silencer-curse/src/main/resources/wings-i18n
#./wings/slardar/src/main/resources/wings-i18n
#./wings/warlock/src/main/resources/wings-i18n
```

### 3a.CrudErrorEnum faceless

CrudErrorEnum: crud-error.properties

* error.crud.createEqRecord1=must create exactly {0} record(s)
* error.crud.selectEqRecord1=must select exactly {0} record(s)
* error.crud.updateEqRecord1=must update exactly {0} record(s)
* error.crud.deleteEqRecord1=must delete exactly {0} record(s)
* error.crud.createNeRecord1=must not create {0} record(s)
* error.crud.selectNeRecord1=must not select {0} record(s)
* error.crud.updateNeRecord1=must not update {0} record(s)
* error.crud.deleteNeRecord1=must not delete {0} record(s)
* error.crud.createGtRecord1=must create more than {0} record(s)
* error.crud.selectGtRecord1=must select more than {0} record(s)
* error.crud.updateGtRecord1=must update more than {0} record(s)
* error.crud.deleteGtRecord1=must delete more than {0} record(s)
* error.crud.createGeRecord1=must create at least {0} record(s)
* error.crud.selectGeRecord1=must select at least {0} record(s)
* error.crud.updateGeRecord1=must update at least {0} record(s)
* error.crud.deleteGeRecord1=must delete at least {0} record(s)
* error.crud.createLtRecord1=must create fewer than {0} record(s)
* error.crud.selectLtRecord1=must select fewer than {0} record(s)
* error.crud.updateLtRecord1=must update fewer than {0} record(s)
* error.crud.deleteLtRecord1=must delete fewer than {0} record(s)
* error.crud.createLeRecord1=must create at most {0} record(s)
* error.crud.selectLeRecord1=must select at most {0} record(s)
* error.crud.updateLeRecord1=must update at most {0} record(s)
* error.crud.deleteLeRecord1=must delete at most {0} record(s)

### 3b. silencer-curse

AssertErrorEnum: assert-error.properties

* error.assert.true=must be true
* error.assert.false=must be false
* error.assert.null=must be null
* error.assert.notNull=must not be null
* error.assert.empty=must be empty
* error.assert.notEmpty=must not be empty
* error.assert.equal1=must equal {0}
* error.assert.notEqual1=must not equal {0}
* error.assert.greaterEqual1=must be greater than or equal to {0}
* error.assert.greater1=must be greater than {0}
* error.assert.lessEqual1=must be less than or equal to {0}
* error.assert.less1=must be less than {0}
* error.assert.true1={0} must be true
* error.assert.false1={0} must be false
* error.assert.null1={0} must be null
* error.assert.notNull1={0} must not be null
* error.assert.empty1={0} must be empty
* error.assert.notEmpty1={0} must not be empty
* error.assert.equal2={0} must equal {1}
* error.assert.notEqual2={0} must not equal {1}
* error.assert.greaterEqual2={0} must be greater than or equal to {1}
* error.assert.greater2={0} must be greater than {1}
* error.assert.lessEqual2={0} must be less than or equal to {1}
* error.assert.less2={0} must be less than {1}

### 3c.AuthnErrorEnum slardar

AuthnErrorEnum: authn-error.properties

* error.authn.unauthorized=unauthorized request
* error.authn.onlyUserPass=support username password only
* error.authn.badCredentials=bad credentials
* error.authn.locked=user account is locked
* error.authn.disabled=user account is disabled
* error.authn.expired=user account has expired
* error.authn.credentialsExpired=user credentials have expired
* error.authn.failureWaiting1=bad credentials, retry after {0}s

AuthzErrorEnum: authz-error.properties

* error.authz.accessDenied=Access is denied

### 3d.CommonErrorEnum warlock

CommonErrorEnum: common-error.properties

* error.common.assert.empty1={0} should not be empty
* error.common.assert.format1=invalid format for {0}
* error.common.assert.notfound1={0} not found
* error.common.assert.existed1={0} already exists
* error.common.assert.state2=invalid state: name={0}, value={1}
* error.common.assert.param2=invalid parameter: name={0}, value={1}
* error.common.data.notfound=data not found
* error.common.data.existed=data already exists
* error.common.message.unreadable=message not readable
