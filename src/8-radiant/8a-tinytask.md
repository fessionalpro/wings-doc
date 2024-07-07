---
isOriginal: true
icon: clock
category:
  - Tiny
  - Task
---

# 8A.TinyTask Component

Based on Spring Schedule, provides database-centric task scheduling.

* Auto discovery and execution
* Can cancel, start, change config at runtime
* Enable task notification
* Query task execution history

## 8A.1.Design Requirement

TinyTask is designed to be strongly typed and static, so by default it is limited to dynamically adding tasks.

* The task object must be a SpringBean
* Use @TinyTask.Auto to auto discover
* Entry methods must be annotated with @TinyTask
* Set task properties via configuration file
* Final configuration is based on database unless version overrides
* Tasks can only be started in restricted app and run modes
* Task itself can be concurrency controlled (Jvm and Database)

## 8A.2.Config Override

Tasks can be added automatically or manually. Beans with @TinyTask.Auto are started automatically.
They can also be started manually using the TinyTaskService.schedule method.

The task configuration is merged first, with priority from highest to lowest.

* property value of the task's own key
* default value of the task
* value from the annotation

The above merged config becomes the taks properties and will be compared with the current value
in the database. The larger version takes precedence, and if equal,
the database (win_task_define table) takes precedence.

## 8A.3.Task Schedule

Tasks by execution time are divided into `fast` and `@Scheduled`, corresponding to 2 thread pools.
Tasks that generally finish in seconds are fast tasks and run in the `fast` thread pool,
otherwise they run in the `@Scheduled` default.

A task must set one of cron/idle/rate for task scheduling.
If both are set, cron overrides idle, idle overrides rate.

## 8A.4.Task Control

TinyTask provides a Controller to control task by default

* task-running - list of running tasks
* task-defined - list of defined tasks
* task-result - list of task history
* task-cancel - cancels a task
* task-launch - starts a task
* task-force - forces a task to start
* task-enable - enable or disable a task
* task-prop-save - update a task's properties
* task-prop-load - load properties of a task
* task-prop-conf - task configuration properties
* task-prop-diff - task property differences

Recommended to control task in hardcoding, for more secure and strongly typed,

* TinyTaskConfService - configuration related service
* TinyTaskExecService - execute related services
* TinyTaskService - scheduling task entry

## 8A.5.execute flow

nomal schedule (launch)

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

force execute (force)

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
