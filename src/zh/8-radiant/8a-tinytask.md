---
isOriginal: true
icon: clock
category:
  - 小小
  - 任务
---

# 8A.小任务模块

基于Spring Schedule提供了以database为中心的任务调度

* 自动发现和执行
* 中途取消，启动，修改配置
* 设置任务通知
* 查询任务执行历史

## 8A.1.设计要求

TinyTask设计为强类型，静态的，因此默认限制了动态添加任务。

* 任务对象必须是SpringBean
* 使用@TinyTask.Auto注解的类可自动发现
* 入口方法必须使用@TinyTask注解标注
* 通过配置文件设置任务属性
* 最终配置以database为准，除非version覆盖
* 任务仅在限定的app和run mode中启动
* 任务自身可进行并发控制(Jvm及Database)

## 8A.2.配置覆盖

任务可自动或手动添加，以@TinyTask.Auto注解的Bean会自动开始，
此外，通过TinyTaskService.schedule方法手动开始。

任务的配置会首先进行合并，优先级为从高到低依次为。

* 任务自身key的属性值
* 任务的default值
* annotation注解值

以上合并后的配置文件，成为tasks的property，会和database中当前值比较version
以version大者优先，相等时，以database（win_task_define表）优先。

## 8A.3.任务调度

任务按执行时间，分为`fast`和`@Scheduled`默认任务，对应2个的线程池。
一般任务秒级完成的为轻任务，在fast线程池中执行，否则为默认任务。

一个任务必须设置cron/idle/rate中任意一个值，以进行任务调度，
如果同时设置，则cron高于idle，idle高于rate覆盖。

## 8A.4.任务控制

TinyTask默认提供了控制的Controller

* task-running - 运行中的任务列表
* task-defined - 定义的任务列表
* task-result - 任务历史列表
* task-cancel - 取消一个任务
* task-launch - 启动任务
* task-force - 强制执行任务
* task-enable - 启动或禁用任务
* task-prop-save - 更新任务配置
* task-prop-load - 任务载入属性
* task-prop-conf - 任务配置属性
* task-prop-diff - 任务属性差异

推荐在编码中进行任务控制，比较安全和强类型

* TinyTaskConfService - 配置相关服务
* TinyTaskExecService - 执行相关服务
* TinyTaskService - 调度任务入口

## 8A.5.执行流程

通常排定 (launch)

@startuml
TinyTaskExecService -> TinyTaskExecService: launch(id), remove Cancel
TinyTaskExecService -> JvmGlobalLock: lock(id)
TinyTaskExecService -> WinTaskDefineDao: load WinTaskDefine by id
TinyTaskExecService -> TinyTaskExecService: calcNext if enable && app && run
TinyTaskExecService -> WinTaskDefineDao: save NextExec temp
TinyTaskExecService --> ThreadPoolTaskScheduler: schedule(task, next)
ThreadPoolTaskScheduler -> TaskerExec: getTaskerBean
ThreadPoolTaskScheduler -> NoticeExec: starting notice
ThreadPoolTaskScheduler -> TaskerExec : invoke task method
ThreadPoolTaskScheduler -> NoticeExec: result notice, done/fail
ThreadPoolTaskScheduler -> WinTaskDefineDao: saveResult, clean NextExec
ThreadPoolTaskScheduler -> TinyTaskExecService: relaunch if schedule
@enduml

强制执行 (force)

@startuml
TinyTaskExecService -> TinyTaskExecService: force(id)
TinyTaskExecService -> WinTaskDefineDao: load WinTaskDefine by id
TinyTaskExecService --> ThreadPoolTaskScheduler: schedule(task, next)
ThreadPoolTaskScheduler -> TaskerExec: getTaskerBean
ThreadPoolTaskScheduler -> NoticeExec: starting notice
ThreadPoolTaskScheduler -> TaskerExec : invoke task method
ThreadPoolTaskScheduler -> NoticeExec: result notice, done/fail
ThreadPoolTaskScheduler -> WinTaskDefineDao: saveResult, clean NextExec
@enduml
