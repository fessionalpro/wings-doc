---
isOriginal: true
icon: piggy-bank
category:
  - 小小
  - 跟踪
---

# 8E.小成长模块

简单的数据跟踪和成长分析，异步收集，默认存于数据库。

* AOP拦截，自动跟踪方法的输入，输出和异常
* 手动编程，跟踪代码块
* 全局或方法级设置忽略的属性

## 8E.1.数据跟踪

收集方法或代码块的数据，异步分发至数据库。

### 自动AOP方法

以`@TinyTracker`注解，通过AOP对方法进行自动跟踪

```java
@TinyTracker
public TestTrackData track(long id, String str) {
  return new TestTrackData(id, str);
}
```

在收集之前，对Tracking进行编辑，可在本AOP类内，定义一个mix方法。

```java
// 参数列表，为AOP的参数前面增加 TinyTracking
protected void track(TinyTracking trk, long id, String str) {
  trk.setDataKey(id);
  trk.setCodeKey(str);
}
```

忽略指定类型的属性（HttpServletRequest），可设置全局omit属性或该方法的注解配置

```java
@TinyTracker(omitClass = HttpServletRequest.class)
public TestTrackData track(long id, String str, HttpServletRequest ignore) {
    return new TestTrackData(id, str);
}
```

### 手动代码块

在方法内，可以通过`TinyTrackHelper.track`实现代码块级跟踪

通过lambda，自动设置`elapse`, 当`out`,`err`为null时自动设置。

```java
return TinyTrackHelper.track(key, trk -> {
    trk.setIns(id, str);
    //trk.setOut(out); 设置为lambda的返回值，如果getOut()为null
    //trk.setErr(e); 设置为lambda的异常，如果getErr()为null
    return new TestTrackData(id, str);
});
```

通过 try-catch，手动设置除`elapse`外的属性。

```java
final var trk = TinyTrackHelper.track(key);
try {
    final TestTrackData out = new TestTrackData(id, str);
    trk.setIns(id, str);
    trk.setOut(out);

    return out;
}
catch (Throwable e) {
    trk.setErr(e);
    throw ThrowableUtil.runtime(e);
}
finally {
    trk.close();
}
```
