---
isOriginal: true
icon: debug
category:
  - Warlock
  - Tweaking
---

# 4G.Time Watching

Out-of-the-box simple performance analysis, slow request logging, which is a debugging feature, disabled by default.

* Module switch - wings.enabled.warlock.watching=false
* Data layer - wings.warlock.watching.jooq-threshold=60
* Service layer - wings.warlock.watching.service-threshold=200
* Web layer - wings.warlock.watching.controller-threshold=2000

With the above configuration file, set whether the module is on or off, and the threshold for slow response for each layer.
`-1` means off, while `0` means all on, and the other formal values are thresholds for slow, milliseconds.

## 4G.1.Underlying Principle

The `timing` functions at each level, placed in different project modules, and Warlock to auto config them.

* Controller layer, based on the Interceptor, works for all URLs by default
* Service layer, based on AOP, requires @Watching annotations to mark methods manually
* Database layer, based on Jooq's ExecuteListener, works for all jooq by default

`Timing` is automatically enabled in the Context of the Wings, based on the call count, and 0 is
considered as finished. Whether it is running or finished, the following statistics will
automatically output in the log at the end of call by default.

```text
+--s--ms------ns-+---%-+---------------+---------------
|  1,426,497,039 | 100 | thread  | task and timing 
|    922,167,066 |  64 | XNIO-4  | /test/watching.json
|    504,329,973 |  35 | wings-1 | AsyncWatch.BadSelect
|    504,059,463 |  35 | wings-1 | ¦-AsyncWatch.sleep
|    663,100,505 |  46 | XNIO-4  | ¦-Service#normalFetch
|    128,767,339 |   9 | XNIO-4  | ¦-¦-JooqSlowSql:SelectQuery
|    213,964,147 |  14 | XNIO-4  | ¦-Service#errorFetch
|    199,774,730 |  14 | XNIO-4  | ¦-¦-JooqSlowSql:SelectQuery
```

* Column 1 is the elapsed time, up to 999 seconds, accurate to ns
* Column 2 is the percentage, based on the sum of the elapsed time of level 0.
* Column 3 is the thread, where the time is spent
* Column 4 is the `call relationship` and remark, used to analyze the call relationship

`timing` forms `call relations` according to `start time` to `end time`, and is displayed in a tree structure.
In a linear call, the `call relationship` is also equal to the execution relationship.
However, with multi-threading, it is necessary to sort by threads.

## 4G.2.Usage

First of all, you should enable the Watching module so that Warlock can config it automatically,
and then set each threshold to be on if it is not negative.

In the default WebMvc, `Controller`, `Service` and `Database` belong to the containing relationship.
Therefore, a simple slow response analysis is on Controller and Database.

Suppose, in the Controller layer, we define 3 seconds as the threshold, and in the Database layer,
we define 100ms as the threshold, and set the configuration directly.

If you need to count the Service layer, you need to manually add the `@Watching` annotation
to the methods to be watched.

## 4G.3.Caution

This feature is somewhat invasive and is mainly used for tuning during development,
it is recommended to close it in the online products to avoid wasting unnecessary resources.

Non-invasive and dynamic program diagnosis, recommended to use [Arthas](https://github.com/alibaba/arthas)
