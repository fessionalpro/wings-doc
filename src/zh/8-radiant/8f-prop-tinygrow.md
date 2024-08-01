---
isOriginal: true
icon: folder-tree
category:
  - 小小
  - 跟踪
  - 属性
---

# 8F.成长的烦恼

## 8F.1.wings-flywave-fit-79.properties

### wings.faceless.flywave.fit.tiny-task

数据库依赖，引入此lib后，自动执行此脚本

* `path`=`classpath*:/wings-flywave/master/08-grow/*.sql`
* `revi`=`2020_1028_01L`
* `lost`=`EXEC`

## 8F.2.wings-tinytrack-omit-79.properties

数据跟踪时，如何忽略一些属性。

### wings.tiny.grow.track.omit.clazz

`Map<String, Class>`, 以属性对象做`instance of`判断，空时表示无效。

* `jakarta.ServletRequest` = `jakarta.servlet.ServletRequest`
* `jakarta.ServletResponse` = `jakarta.servlet.ServletResponse`
* `io.InputStream` = `java.io.InputStream`
* `io.OutputStream` = `java.io.OutputStream`

### wings.tiny.grow.track.omit.equal

`Map<String, String>`, 以属性名做`equal`判断，空时表示无效。例如，

* `password=` - 清空`password`的配置，使之无效

### wings.tiny.grow.track.omit.regex

`Map<String, String>`, 以属性名做`regex`正则判断，空时表示无效。例如，

* `pass`=`(?i)pass` - 忽略大小写的pass
* `pass=` - 清空`pass`的配置，使之无效
