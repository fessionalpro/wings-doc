---
isOriginal: true
icon: folder-tree
category:
  - 任务
  - 属性
---

# 8B.小任务属性

## 8B.1.wings-enabled-79.properties

### wings.enabled.tiny.task.autorun

`Boolean`=`true`, 是否自动注册 TinyTask.Auto.

### wings.enabled.tiny.task.mvc-conf

`Boolean`=`true`, 是否开启 TaskConfController.

### wings.enabled.tiny.task.mvc-exec

`Boolean`=`true`, 是否开启 TaskExecController.

### wings.enabled.tiny.task.mvc-list

`Boolean`=`true`, 是否开启 TaskListController.

## 8B.2.wings-tinytask-exec-79.properties

### wings.tiny.task.exec.dryrun

`Boolean`=`false`，是否干跑，仅记录日志不真正执行任务

## 8B.3.wings-flywave-fit-79.properties

### wings.faceless.flywave.fit.tiny-task

数据库依赖，引入此lib后，自动执行此脚本

* `path`=`classpath*:/wings-flywave/master/06-task/*.sql`
* `revi`=`2020_1026_01L`
* `lost`=`EXEC`

## 8B.4.wings-tinytask-beat-79.properties

TinyTask自身任务，清理日志和心跳健康

### wings.tiny.task.define[TinyTaskCleanResult]

`timing-cron`=`0 1 2 * * *`

### wings.tiny.task.define[TinyTaskCheckHealth]

每空闲300秒，检查一下健康状态

* `timing-idle`=`300`
* `notice-when`=`tail,done`

## 8B.5.wings-tinytask-define-79.properties

任务的Default配置 `wings.tiny.task.define[default]`

### wings.tiny.task.define[default].enabled

`Boolean`=`true`，是否可以注册及执行，不会使用Default配置

### wings.tiny.task.define[default].autorun

`Boolean`=`true`，是否可以自动注册并启动，不会使用Default配置

### wings.tiny.task.define[default].version

`Integer`=`0`，配置版本号，高版本的配置覆盖低版本的，相等时配置文件覆盖数据库，不会使用Default配置。

### wings.tiny.task.define[default].tasker-bean

`String`，由TinyTasker注解的Bean，格式为Class#method，默认自动识别，不会使用Default配置

### wings.tiny.task.define[default].tasker-para

`String`=`null`，任务的参数，对象数组的json格式，默认null或空无参数，不会使用Default配置

### wings.tiny.task.define[default].tasker-name

`String`，任务名字，用于通知和日志，可读性好一些，默认为`[短类名#方法名]`，不会使用Default配置

### wings.tiny.task.define[default].task-fast

`Boolean`=`true`，是否为轻任务，执行快，秒级完成，不会使用Default配置

### wings.tiny.task.define[default].tasker-apps

`String`=`${spring.application.name}`，所属程序，逗号分隔，null及空时使用Default配置

### wings.tiny.task.define[default].tasker-runs

`String`，执行模式，RunMode(product|test|develop|local)，`!test`，`-test`为一票否决`test`，
逗号分隔忽略大小写，默认所有，null及空时使用Default配置

### wings.tiny.task.define[default].notice-bean

`String`=`pro.fessional.wings.slardar.notice.DingTalkNotice`

通知Bean，SmallNotice类型，格式为Class，默认无通知。null及空时使用Default配置

### wings.tiny.task.define[default].notice-when

`String`=`fail`，通知的时机，exec|fail|done|feed，逗号分隔忽略大小写，默认fail。null及空时使用Default配置

* 时机大概表述为：exec;try{run...;done}catch{fail}
* exec - 初始任务；done - 执行成功；fail - 执行失败；feed - 方法返回非空

### wings.tiny.task.define[default].notice-conf

`String`，通知Bean的配置文件名字，默认自动，空时使用Default配置

### wings.tiny.task.define[default].timing-zone

`String`，调度时区的ZoneId格式，默认系统时区，null及空时使用Default配置

### wings.tiny.task.define[default].timing-type

`String`=`cron`，调度表达式类型，影响timingCron的解析方式，默认为spring cron格式，null及空时使用Default配置

### wings.tiny.task.define[default].timing-cron

`String`，调度表达式内容，最高优先级，受timingType影响，默认spring cron格式（秒分时日月周），不会使用Default配置

### wings.tiny.task.define[default].timing-idle

`Integer`=`0`，固定空闲相连（秒），优先级次于timingCron，相当于fixedDelay，结束到开始，0为无效，不会使用Default配置

### wings.tiny.task.define[default].timing-rate

`Integer`=`0`，固定频率开始（秒），优先级次于timingIdle，相当于fixedRate，开始到开始，0为无效，不会使用Default配置

### wings.tiny.task.define[default].timing-tune

`Integer`=`0`，提前或延迟tune秒执行任务，不会使用Default配置，像`Scheduled.initialDelay`，但，

* rate - 当前 jvm 上第一次执行
* idle - 当前 jvm 上第一次执行
* cron - 每次执行

### wings.tiny.task.define[default].timing-miss

`Integer`=`0`，错过调度（misfire）多少秒内，需要补救执行，0表示不补救，不会使用Default配置

### wings.tiny.task.define[default].timing-beat

`Integer`=`0`，心跳及健康检查间隔秒数，不会使用Default配置。若任务的last_exec距now超过2个心跳，视其为异常，

* `<0` - 禁止
* `0` - 自动计算，
  - cron时，以 last_exec 计算的 next_exec
  - 否则，取rate或idle最大值
* `>0` - fixed positive seconds

### wings.tiny.task.define[default].during-from

`String`，调度开始的日期时间，timingZone时区，yyyy-MM-dd HH:mm:ss，0表示无效，不会使用Default配置

### wings.tiny.task.define[default].during-stop

`String`，调度结束的日期时间，timingZone时区，yyyy-MM-dd HH:mm:ss，0表示无效，不会使用Default配置

### wings.tiny.task.define[default].during-exec

`Integer`=`0`，总计初始执行多少次后，结束调度，不会使用Default配置

### wings.tiny.task.define[default].during-fail

`Integer`=`0`，连续失败多少次后，结束调度，不会使用Default配置

### wings.tiny.task.define[default].during-done

`Integer`=`0`，总计成功执行多少次后，结束调度，不会使用Default配置

### wings.tiny.task.define[default].during-boot

`Integer`=`0`，每应用每启动时重新计数，总计成功执行多少次后，结束调度，默认无效，不会使用Default配置

### wings.tiny.task.define[default].result-keep

`Integer`=`60`，执行结果保存的天数，默认60天，0为不保存，null时使用Default配置

## 8B.6.wings-tinytask-urlmap-79.properties

内置功能的URL

### wings.tiny.task.urlmap.task-running

`String`=`/admin/task/task-running.json`，运行中的任务列表

### wings.tiny.task.urlmap.task-defined

`String`=`/admin/task/task-defined.json`，定义的任务列表

### wings.tiny.task.urlmap.task-result

`String`=`/admin/task/task-result.json`，任务历史列表

### wings.tiny.task.urlmap.task-cancel

`String`=`/admin/task/task-cancel.json`，取消一个任务

### wings.tiny.task.urlmap.task-launch

`String`=`=/admin/task/task-launch.json`，启动任务

### wings.tiny.task.urlmap.task-force

`String`=`/admin/task/task-force.json`，强制执行任务

### wings.tiny.task.urlmap.task-enable

`String`=`/admin/task/task-enable.json`，启动或禁用任务

### wings.tiny.task.urlmap.task-prop-save

`String`=`/admin/task/task-prop-save.json`，更新任务配置

### wings.tiny.task.urlmap.task-prop-load

`String`=`/admin/task/task-prop-load.json`，任务载入属性

### wings.tiny.task.urlmap.task-prop-conf

`String`=`/admin/task/task-prop-conf.json`，任务配置属性

### wings.tiny.task.urlmap.task-prop-diff

`String`=`/admin/task/task-prop-diff.json`，任务属性差异
