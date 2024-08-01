---
isOriginal: true
icon: piggy-bank
category:
  - Tiny
  - Track
---

# 8E.TinyGrow Component

Simple data tracking and growth analysis, with async collect, store in DB by default.

* AOP track method inputs, outputs, and exceptions
* Manual track in code block
* Global or method-level ignore some property

## 8E.1.Data Tracking

Collect data from methods or code blocks, async store it in DB.

### Auto AOP Method

use `@TinyTracker` annotation, auto track method by AOP.

```java
@TinyTracker
public TestTrackData track(long id, String str) {
  return new TestTrackData(id, str);
}
```

To edit Tracking before collecting, define a mix method within this AOP class.

```java
// The parameter list is TinyTracking added before the AOP parameters.
protected void track(TinyTracking trk, long id, String str) {
  trk.setDataKey(id);
  trk.setCodeKey(str);
}
```

To omit specified types of property (HttpServletRequest),
set the global omit config or the annotation for the method.

```java
@TinyTracker(omitClass = HttpServletRequest.class)
public TestTrackData track(long id, String str, HttpServletRequest ignore) {
    return new TestTrackData(id, str);
}
```

### Manual Code Block

Within method, use `TinyTrackHelper.track` to get block-level track.

By lambda, auto set `elapse`, and set `out`, `err` if it was null.

```java
return TinyTrackHelper.track(key, trk -> {
    trk.setIns(id, str);
    //trk.setOut(out); set lambda's return if getOut() is null
    //trk.setErr(e); set lambda's throw if getErr() is null
    return new TestTrackData(id, str);
});
```

By try-catch, manully set all properties except `elapse`.

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
