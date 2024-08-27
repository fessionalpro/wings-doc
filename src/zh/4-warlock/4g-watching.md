---
isOriginal: true
icon: bug-slash
category:
  - 术士
  - 调试
---

# 4G.调用计时

开箱即用的简单的性能分析，慢请求记录，属于调试功能，默认关闭。

* 模块开关 - wings.enabled.warlock.watching=false
* 数据层 - wings.warlock.watching.jooq-threshold=60
* 服务层 - wings.warlock.watching.service-threshold=200
* Web层 - wings.warlock.watching.controller-threshold=2000

通过以上配置文件，设置模块是否开启，以及各层的慢响应的阈值，
`-1`表示关闭，而`0`表示全部开启，其他正式值是slow的阈值，毫秒数。

## 4G.1.实现原理

各层面的`计时`功能，分散在不同的工程模块中，在Warlock实现了自动配置。

* Controller层，基于Interceptor实现，默认对全部URL生效
* Service层，基于AOP实现，需要手动使用@Watching注解标记方法
* Database层，基于Jooq的ExecuteListener，对所有jooq生效

`计时`在Wings体系的Context自动开启，以调用的计数为基础，计数为0则视为结束。
不管是运行中还是已结束，都可以在日志中输出如下统计，默认会自动在结束时输出。

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

* 第1列为耗时，最多999秒，精确到ns
* 第2列为占比，以百分比显示，基数为level0的耗时之和
* 第3列为线程，计时所在的线程
* 第4列为`区间关系`及名字备注，用于分析调用关系

`计时`按照`开始时间`到`结束时间`形成`区间关系`，并以树状结构显示，
在线性调用中，`区间关系`也等于执行关系。但多线程下需要按线程分类。

## 4G.2.使用方法

首先要开启watching模块，以便Warlock自动配置，然后设置各个threshold，非负时为开启。

默认的WebMvc体系中，`Controller`，`Service`，`Database`属于包含关系，
因此简单的慢响应分析，掌控Controller和Database即可。

假设，在Controller层定义3秒为阈值，在Database层定义100ms为阈值，直接设置配置即可。

当需要对Service层统计时，需要手动为需要关注的方法加上`@Watching`注解。

计时结果，默认输出到日志，可通过Watches.setWatchHandler设置其他方式。

## 4G.3.注意事项

此功能具有一定的入侵性，主要用在开发过程中的调优，当线上产品建议关闭，避免无意义的资源消耗。

无入侵的动态的程序诊断，推荐使用[Arthas](https://github.com/alibaba/arthas)
