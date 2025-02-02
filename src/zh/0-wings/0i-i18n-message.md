---
isOriginal: true
icon: folder-tree
category:
  - 神翼
  - 首页
---

# 0I.多国语信息

同`*.properties`一样，Wings以分隔的配置来加强默认的messages.properties。

## 0I.1.匹配规则

`*.properties`文件名，以`_`分隔语言，以`-`分隔命名，
多国语匹配`my-message`的规则为 `lang_region` > `lang` > `default`，

| Message \ lang_region       | zh_CN | zh_TW | en_US | zh |
| --------------------------- | ----- | ----- | ----- | -- |
| my-message.properties       | N     | N     | Y     | N  |
| my-message_zh.properties    | Y     | N     | N     | Y  |
| my-message_zh_TW.properties | N     | Y     | N     | N  |

## 0I.2.多国语编码命名

建议用CodeEnum定义18nCode，其名字应该遵循以下规则

* 以`.`分隔key，每个key具有业务含义
* key采用驼峰命名，区分大小写
* 第一段为信息级别，error, warn, info
* 最后一个key有数字后缀，表示参数个数，0可忽略

## 0I.3.内置配置

```bash
## find wings-i18n path
find . -type d -name 'wings-i18n'| egrep -v -E 'target|test' | sort

#./wings/faceless/src/main/resources/wings-i18n
#./wings/silencer-curse/src/main/resources/wings-i18n
#./wings/slardar/src/main/resources/wings-i18n
#./wings/warlock/src/main/resources/wings-i18n
```

### 3a.CrudErrorEnum faceless

CrudErrorEnum: crud-error_zh.properties

* error.crud.createEqRecord1=必须仅创建{0}条记录
* error.crud.selectEqRecord1=必须仅获取{0}条记录
* error.crud.updateEqRecord1=必须仅更新{0}条记录
* error.crud.deleteEqRecord1=必须仅删除{0}条记录
* error.crud.createNeRecord1=绝不可创建{0}条记录
* error.crud.selectNeRecord1=绝不可获取{0}条记录
* error.crud.updateNeRecord1=绝不可更新{0}条记录
* error.crud.deleteNeRecord1=绝不可删除{0}条记录
* error.crud.createGtRecord1=必须创建超过{0}条记录
* error.crud.selectGtRecord1=必须获取超过{0}条记录
* error.crud.updateGtRecord1=必须更新超过{0}条记录
* error.crud.deleteGtRecord1=必须删除超过{0}条记录
* error.crud.createGeRecord1=必须创建至少{0}条记录
* error.crud.selectGeRecord1=必须获取至少{0}条记录
* error.crud.updateGeRecord1=必须更新至少{0}条记录
* error.crud.deleteGeRecord1=必须删除至少{0}条记录
* error.crud.createLtRecord1=必须创建少于{0}条记录
* error.crud.selectLtRecord1=必须获取少于{0}条记录
* error.crud.updateLtRecord1=必须更新少于{0}条记录
* error.crud.deleteLtRecord1=必须删除少于{0}条记录
* error.crud.createLeRecord1=必须创建至多{0}条记录
* error.crud.selectLeRecord1=必须获取至多{0}条记录
* error.crud.updateLeRecord1=必须更新至多{0}条记录
* error.crud.deleteLeRecord1=必须删除至多{0}条记录

### 3b. silencer-curse

AssertErrorEnum: assert-error_zh.properties

* error.assert.true=必须是true
* error.assert.false=必须是false
* error.assert.null=必须是null
* error.assert.notNull=必须不是null
* error.assert.empty=必须是空
* error.assert.notEmpty=必须不是空
* error.assert.equal1=必须等于{0}
* error.assert.notEqual1=必须不等于{0}
* error.assert.greaterEqual1=必须大于等于{0}
* error.assert.greater1=必须大于{0}
* error.assert.lessEqual1=必须小于等于{0}
* error.assert.less1=必须小于{0}
* error.assert.true1={0}必须是true
* error.assert.false1={0}必须是false
* error.assert.null1={0}必须是null
* error.assert.notNull1={0}必须不是null
* error.assert.empty1={0}必须是空
* error.assert.notEmpty1={0}必须不是空
* error.assert.equal2={0}必须等于{1}
* error.assert.notEqual2={0}必须不等于{1}
* error.assert.greaterEqual2={0}必须大于等于{1}
* error.assert.greater2={0}必须大于{1}
* error.assert.lessEqual2={0}必须小于等于{1}
* error.assert.less2={0}必须小于{1}

### 3c.AuthnErrorEnum slardar

AuthnErrorEnum: authn-error_zh.properties

* error.authn.unauthorized=未经授权的请求
* error.authn.onlyUserPass=仅支持账号密码方式登录
* error.authn.badCredentials=密码错误
* error.authn.locked=账号已锁定
* error.authn.disabled=账号已禁用
* error.authn.expired=账号已过期
* error.authn.credentialsExpired=密码已过期
* error.authn.failureWaiting1=密码错误，请{0}秒后重试

AuthzErrorEnum: authz-error_zh.properties

* error.authz.accessDenied=禁止访问

### 3d.CommonErrorEnum warlock

CommonErrorEnum: common-error_zh.properties

* error.common.assert.empty1={0}不能为空
* error.common.assert.format1={0}格式不正确
* error.common.assert.notfound1={0}不存在
* error.common.assert.existed1={0}已存在
* error.common.assert.state2=错误的状态：名字={0}，值={1}
* error.common.assert.param2=错误的参数：名字={0}，值={1}
* error.common.data.notfound=数据不存在
* error.common.data.existed=数据已存在
* error.common.message.unreadable=请求数据格式无法读取
