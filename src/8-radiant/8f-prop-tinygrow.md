---
isOriginal: true
icon: folder-tree
category:
  - Tiny
  - Track
  - Property
---

# 8F.TinyGrow Properties

## 8F.1.wings-flywave-fit-79.properties

### wings.faceless.flywave.fit.tiny-task

Database dependency, after import this lib, the script will be auto executed.

* `path`=`classpath*:/wings-flywave/master/08-grow/*.sql`
* `revi`=`2020_1028_01L`
* `lost`=`EXEC`

## 8F.2.wings-tinytrack-omit-79.properties

When data tracking, how to omit some property.

### wings.tiny.grow.track.omit.clazz

`Map<String, Class>`, omit the property if it is `instance of`. empty means disable.

* `jakarta.ServletRequest` = `jakarta.servlet.ServletRequest`
* `jakarta.ServletResponse` = `jakarta.servlet.ServletResponse`
* `io.InputStream` = `java.io.InputStream`
* `io.OutputStream` = `java.io.OutputStream`

### wings.tiny.grow.track.omit.equal

`Map<String, String>`, omit the property if its name equals. empty means disable. e.g.

* `password=` - clean `password` config to disable it

### wings.tiny.grow.track.omit.regex

`Map<String, String>`, omit the property if its name match regex. empty means disable. e.g.

* `pass`=`(?i)pass` - case-insensitive pass
* `pass=` - clean `pass` config to disable it
