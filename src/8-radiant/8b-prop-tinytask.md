---
isOriginal: true
icon: enum
category:
  - Tiny
  - Task
  - Property
---

# 8B.TinyTask Properties

## 8B.1.spring-wings-enabled-79.properties

### spring.wings.tiny.task.enabled.autoconf

`Boolean`=`true`, whether to enable auto config.

### spring.wings.tiny.task.enabled.autorun

`Boolean`=`true`, whether to auto register TinyTask.Auto.

### spring.wings.tiny.task.enabled.dryrun

`Boolean`=`false`, whether to dry run, log only without realy exec the task.

### spring.wings.tiny.task.enabled.controller-conf

`Boolean`=`true`, whether to enable TaskConfController.

### spring.wings.tiny.task.enabled.controller-exec

`Boolean`=`true`, whether to enable TaskExecController.

### spring.wings.tiny.task.enabled.controller-list

`Boolean`=`true`, whether to enable TaskListController.

## 8B.2.wings-flywave-fit-79.properties

### wings.faceless.flywave.fit.tiny-task

Database dependency, after import this lib, the script will be auto executed.

* `path`=`classpath*:/wings-flywave/master/06-task/*.sql`
* `revi`=`2020_1026_01L`
* `lost`=`EXEC`

## 8B.3.wings-tinytask-beat-79.properties

TinyTask's own tasks, clearing logs and healthy heartbeat.

### wings.tiny.task.define[TinyTaskCleanResult]

`timing-cron`=`0 1 2 * * *`

### wings.tiny.task.define[TinyTaskCheckHealth]

Check health status every 300 seconds of idle time.

* `timing-idle`=`300`
* `notice-when`=`tail,done`

## 8B.4.wings-tinytask-define-79.properties

`Default` config of task `wings.tiny.task.define[default]`

### wings.tiny.task.define[default].enabled

`Boolean`=`true`, whether to register and execute, not use Default config.

### wings.tiny.task.define[default].autorun

`Boolean`=`true`, whether to auto register and start, not use Default config.

### wings.tiny.task.define[default].version

`Integer`=`0`, version number, higher version config overrides lower one, not use Default config.

### wings.tiny.task.define[default].tasker-bean

`String`, Beans annotated by TinyTasker, formatted as Class#method,
automatically recognized by default, not use Default config.

### wings.tiny.task.define[default].tasker-para

`String`=`null`, Parameters of the task, object array in json format,
default null or no parameters, not use Default config.

### wings.tiny.task.define[default].tasker-name

`String`, Task name, used for notice and log, better readability,
default is `[shortClassName#method]`, not use Default config.

### wings.tiny.task.define[default].task-fast

`Boolean`=`true`, Whether it is a light task, fast execution, completed in seconds, not use Default config.

### wings.tiny.task.define[default].tasker-apps

`String`=`${spring.application.name}`, The app it belongs to, comma separated,
use Default config if null or empty.

### wings.tiny.task.define[default].tasker-runs

`String`, RunMode(product|test|develop|local), Comma separated, ignore case, default all,
use Default config if null or empty.

### wings.tiny.task.define[default].notice-bean

`String`=`pro.fessional.wings.slardar.notice.DingTalkNotice`

Notice bean, SmallNotice type, fullpath of Class, no notice by default.
use Default config if null or empty.

### wings.tiny.task.define[default].notice-when

`String`=`fail`, Timing of notice, exec|fail|done|feed, comma separated ignoring case, default fail.
use Default config if null or empty.

* timing is roughly expressed: exec;try{run...;done}catch{fail}
* exec - init task; done - success; fail - failed; feed - non-empty return.

### wings.tiny.task.define[default].notice-conf

`String`, The config name of the notice bean, automatic by default. use Default config if empty.

### wings.tiny.task.define[default].timing-zone

`String`, timezone of scheduling , default system timezone, use Default config if null or empty.

### wings.tiny.task.define[default].timing-type

`String`=`cron`, scheduling expression type, affects how timingCron is parsed,
defaults to spring cron format, use Default config if null or empty.

### wings.tiny.task.define[default].timing-cron

`String`, Scheduling expression content, highest priority, affected by timingType,
default spring cron format (second minute hour day month week), not use Default config.

### wings.tiny.task.define[default].timing-idle

`Integer`=`0`, Fixed idle interval (seconds), lower priority than timingCron,
equal to fixedDelay, end to start, 0 means disable, not use Default config.

### wings.tiny.task.define[default].timing-rate

`Integer`=`0`, Fixed frequency interval (seconds), lower priority than timingIdle,
equal to fixedRate, start to start, 0 means disable, not use Default config.

### wings.tiny.task.define[default].timing-miss

`Integer`=`0`, Within how many seconds of a misfire, execution is required,
0 means no execution. not use Default config.

### wings.tiny.task.define[default].timing-beat

`Integer`=`0`, the interval seconds of heartbeat, if the task's last_exec is more
than 2 heartbeats away from now, it is considered as an exception. default auto to
take rate or idle maximum, cron needs to specify it by itself, not use Default config.

### wings.tiny.task.define[default].during-from

`String`, schedule start datetime at timingZone, in yyyy-MM-dd HH:mm:ss format,
0 means disable, not use Default config.

### wings.tiny.task.define[default].during-stop

`String`, schedule stop datetime at timingZone, in yyyy-MM-dd HH:mm:ss format,
0 means disable, not use Default config.

### wings.tiny.task.define[default].during-exec

`Integer`=`0`, stop schedule after how many total executions, not use Default config.

### wings.tiny.task.define[default].during-fail

`Integer`=`0`, stop schedule after how many consecutive failures, not use Default config.

### wings.tiny.task.define[default].during-done

`Integer`=`0`, stop schedule after how many successful executions, not use Default config.

### wings.tiny.task.define[default].during-boot=0

`Integer`=`0`, recount each time the app is started, and stop schedule after how many
successful executions, disable by default, not use Default config.

### wings.tiny.task.define[default].result-keep

`Integer`=`60`, how many days to save the execution results, default 60 days,
0 means not save, use Default configuration if null.

## 8B.5.wings-tinytask-urlmap-79.properties

URL of builtin features.

### wings.tiny.task.urlmap.task-running

`String`=`/admin/task/task-running.json`, list of running tasks.

### wings.tiny.task.urlmap.task-defined

`String`=`/admin/task/task-defined.json`, list of defined tasks.

### wings.tiny.task.urlmap.task-result

`String`=`/admin/task/task-result.json`, list of task results.

### wings.tiny.task.urlmap.task-cancel

`String`=`/admin/task/task-cancel.json`, cancel a task.

### wings.tiny.task.urlmap.task-launch

`String`=`=/admin/task/task-launch.json`, start a task.

### wings.tiny.task.urlmap.task-force

`String`=`/admin/task/task-force.json`, force to start a task.

### wings.tiny.task.urlmap.task-enable

`String`=`/admin/task/task-enable.json`, enable or disable a task.

### wings.tiny.task.urlmap.task-prop-save

`String`=`/admin/task/task-prop-save.json`, update the task config.

### wings.tiny.task.urlmap.task-prop-load

`String`=`/admin/task/task-prop-load.json`, load the task config.

### wings.tiny.task.urlmap.task-prop-conf

`String`=`/admin/task/task-prop-conf.json`, show the prop of task conf.

### wings.tiny.task.urlmap.task-prop-diff

`String`=`/admin/task/task-prop-diff.json`, show the diff of task conf.