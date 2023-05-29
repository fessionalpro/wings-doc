import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,f as n}from"./app-76302e33.js";const i={},s=n('<h1 id="_8b-tinytask-properties" tabindex="-1"><a class="header-anchor" href="#_8b-tinytask-properties" aria-hidden="true">#</a> 8B.TinyTask Properties</h1><h2 id="_8b-1-spring-wings-enabled-79-properties" tabindex="-1"><a class="header-anchor" href="#_8b-1-spring-wings-enabled-79-properties" aria-hidden="true">#</a> 8B.1.spring-wings-enabled-79.properties</h2><h3 id="spring-wings-tiny-task-enabled-autoconf" tabindex="-1"><a class="header-anchor" href="#spring-wings-tiny-task-enabled-autoconf" aria-hidden="true">#</a> spring.wings.tiny.task.enabled.autoconf</h3><p><code>Boolean</code>=<code>true</code>, whether to enable auto config.</p><h3 id="spring-wings-tiny-task-enabled-autorun" tabindex="-1"><a class="header-anchor" href="#spring-wings-tiny-task-enabled-autorun" aria-hidden="true">#</a> spring.wings.tiny.task.enabled.autorun</h3><p><code>Boolean</code>=<code>true</code>, whether to auto register TinyTask.Auto.</p><h3 id="spring-wings-tiny-task-enabled-dryrun" tabindex="-1"><a class="header-anchor" href="#spring-wings-tiny-task-enabled-dryrun" aria-hidden="true">#</a> spring.wings.tiny.task.enabled.dryrun</h3><p><code>Boolean</code>=<code>false</code>, whether to dry run, log only without realy exec the task.</p><h3 id="spring-wings-tiny-task-enabled-controller-conf" tabindex="-1"><a class="header-anchor" href="#spring-wings-tiny-task-enabled-controller-conf" aria-hidden="true">#</a> spring.wings.tiny.task.enabled.controller-conf</h3><p><code>Boolean</code>=<code>true</code>, whether to enable TaskConfController.</p><h3 id="spring-wings-tiny-task-enabled-controller-exec" tabindex="-1"><a class="header-anchor" href="#spring-wings-tiny-task-enabled-controller-exec" aria-hidden="true">#</a> spring.wings.tiny.task.enabled.controller-exec</h3><p><code>Boolean</code>=<code>true</code>, whether to enable TaskExecController.</p><h3 id="spring-wings-tiny-task-enabled-controller-list" tabindex="-1"><a class="header-anchor" href="#spring-wings-tiny-task-enabled-controller-list" aria-hidden="true">#</a> spring.wings.tiny.task.enabled.controller-list</h3><p><code>Boolean</code>=<code>true</code>, whether to enable TaskListController.</p><h2 id="_8b-2-wings-flywave-fit-79-properties" tabindex="-1"><a class="header-anchor" href="#_8b-2-wings-flywave-fit-79-properties" aria-hidden="true">#</a> 8B.2.wings-flywave-fit-79.properties</h2><h3 id="wings-faceless-flywave-fit-tiny-task" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-fit-tiny-task" aria-hidden="true">#</a> wings.faceless.flywave.fit.tiny-task</h3><p>Database dependency, after import this lib, the script will be auto executed.</p><ul><li><code>path</code>=<code>classpath*:/wings-flywave/master/06-task/*.sql</code></li><li><code>revi</code>=<code>2020_1026_01L</code></li><li><code>lost</code>=<code>EXEC</code></li></ul><h2 id="_8b-3-wings-tinytask-beat-79-properties" tabindex="-1"><a class="header-anchor" href="#_8b-3-wings-tinytask-beat-79-properties" aria-hidden="true">#</a> 8B.3.wings-tinytask-beat-79.properties</h2><p>TinyTask&#39;s own tasks, clearing logs and healthy heartbeat.</p><h3 id="wings-tiny-task-define-tinytaskcleanresult" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-tinytaskcleanresult" aria-hidden="true">#</a> wings.tiny.task.define[TinyTaskCleanResult]</h3><p><code>timing-cron</code>=<code>0 1 2 * * *</code></p><h3 id="wings-tiny-task-define-tinytaskcheckhealth" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-tinytaskcheckhealth" aria-hidden="true">#</a> wings.tiny.task.define[TinyTaskCheckHealth]</h3><p>Check health status every 300 seconds of idle time.</p><ul><li><code>timing-idle</code>=<code>300</code></li><li><code>notice-when</code>=<code>tail,done</code></li></ul><h2 id="_8b-4-wings-tinytask-define-79-properties" tabindex="-1"><a class="header-anchor" href="#_8b-4-wings-tinytask-define-79-properties" aria-hidden="true">#</a> 8B.4.wings-tinytask-define-79.properties</h2><p><code>Default</code> config of task <code>wings.tiny.task.define[default]</code></p><h3 id="wings-tiny-task-define-default-enabled" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-enabled" aria-hidden="true">#</a> wings.tiny.task.define[default].enabled</h3><p><code>Boolean</code>=<code>true</code>, whether to register and execute, not use Default config.</p><h3 id="wings-tiny-task-define-default-autorun" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-autorun" aria-hidden="true">#</a> wings.tiny.task.define[default].autorun</h3><p><code>Boolean</code>=<code>true</code>, whether to auto register and start, not use Default config.</p><h3 id="wings-tiny-task-define-default-version" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-version" aria-hidden="true">#</a> wings.tiny.task.define[default].version</h3><p><code>Integer</code>=<code>0</code>, version number, higher version config overrides lower one, not use Default config.</p><h3 id="wings-tiny-task-define-default-tasker-bean" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-tasker-bean" aria-hidden="true">#</a> wings.tiny.task.define[default].tasker-bean</h3><p><code>String</code>, Beans annotated by TinyTasker, formatted as Class#method, automatically recognized by default, not use Default config.</p><h3 id="wings-tiny-task-define-default-tasker-para" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-tasker-para" aria-hidden="true">#</a> wings.tiny.task.define[default].tasker-para</h3><p><code>String</code>=<code>null</code>, Parameters of the task, object array in json format, default null or no parameters, not use Default config.</p><h3 id="wings-tiny-task-define-default-tasker-name" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-tasker-name" aria-hidden="true">#</a> wings.tiny.task.define[default].tasker-name</h3><p><code>String</code>, Task name, used for notifice and log, better readability, default is <code>[shortClassName#method]</code>, not use Default config.</p><h3 id="wings-tiny-task-define-default-task-fast" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-task-fast" aria-hidden="true">#</a> wings.tiny.task.define[default].task-fast</h3><p><code>Boolean</code>=<code>true</code>, Whether it is a light task, fast execution, completed in seconds, not use Default config.</p><h3 id="wings-tiny-task-define-default-tasker-apps" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-tasker-apps" aria-hidden="true">#</a> wings.tiny.task.define[default].tasker-apps</h3><p><code>String</code>=<code>${spring.application.name}</code>, The app it belongs to, comma separated, use Default config if null or empty.</p><h3 id="wings-tiny-task-define-default-tasker-runs" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-tasker-runs" aria-hidden="true">#</a> wings.tiny.task.define[default].tasker-runs</h3><p><code>String</code>, RunMode(product|test|develop|local), Comma separated, ignore case, default all, use Default config if null or empty.</p><h3 id="wings-tiny-task-define-default-notice-bean" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-notice-bean" aria-hidden="true">#</a> wings.tiny.task.define[default].notice-bean</h3><p><code>String</code>=<code>pro.fessional.wings.slardar.notice.DingTalkNotice</code></p><p>Notice bean, SmallNotice type, fullpath of Class, no notice by default. use Default config if null or empty.</p><h3 id="wings-tiny-task-define-default-notice-when" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-notice-when" aria-hidden="true">#</a> wings.tiny.task.define[default].notice-when</h3><p><code>String</code>=<code>fail</code>, Timing of notice, exec|fail|done|feed, comma separated ignoring case, default fail. use Default config if null or empty.</p><ul><li>timing is roughly expressed: exec;try{run...;done}catch{fail}</li><li>exec - init task; done - success; fail - failed; feed - non-empty return.</li></ul><h3 id="wings-tiny-task-define-default-notice-conf" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-notice-conf" aria-hidden="true">#</a> wings.tiny.task.define[default].notice-conf</h3><p><code>String</code>, The config name of the notice bean, automatic by default. use Default config if empty.</p><h3 id="wings-tiny-task-define-default-timing-zone" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-zone" aria-hidden="true">#</a> wings.tiny.task.define[default].timing-zone</h3><p><code>String</code>, timezone of scheduling , default system timezone, use Default config if null or empty.</p><h3 id="wings-tiny-task-define-default-timing-type" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-type" aria-hidden="true">#</a> wings.tiny.task.define[default].timing-type</h3><p><code>String</code>=<code>cron</code>, scheduling expression type, affects how timingCron is parsed, defaults to spring cron format, use Default config if null or empty.</p><h3 id="wings-tiny-task-define-default-timing-cron" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-cron" aria-hidden="true">#</a> wings.tiny.task.define[default].timing-cron</h3><p><code>String</code>, Scheduling expression content, highest priority, affected by timingType, default spring cron format (second minute hour day month week), not use Default config.</p><h3 id="wings-tiny-task-define-default-timing-idle" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-idle" aria-hidden="true">#</a> wings.tiny.task.define[default].timing-idle</h3><p><code>Integer</code>=<code>0</code>, Fixed idle interval (seconds), lower priority than timingCron, equal to fixedDelay, end to start, 0 means disable, not use Default config.</p><h3 id="wings-tiny-task-define-default-timing-rate" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-rate" aria-hidden="true">#</a> wings.tiny.task.define[default].timing-rate</h3><p><code>Integer</code>=<code>0</code>, Fixed frequency interval (seconds), lower priority than timingIdle, equal to fixedRate, start to start, 0 means disable, not use Default config.</p><h3 id="wings-tiny-task-define-default-timing-miss" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-miss" aria-hidden="true">#</a> wings.tiny.task.define[default].timing-miss</h3><p><code>Integer</code>=<code>0</code>, Within how many seconds of a misfire, execution is required, 0 means no execution. not use Default config.</p><h3 id="wings-tiny-task-define-default-timing-beat" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-beat" aria-hidden="true">#</a> wings.tiny.task.define[default].timing-beat</h3><p><code>Integer</code>=<code>0</code>, the interval seconds of heartbeat, if the task&#39;s last_exec is more than 2 heartbeats away from now, it is considered as an exception. default auto to take rate or idle maximum, cron needs to specify it by itself, not use Default config.</p><h3 id="wings-tiny-task-define-default-during-from" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-during-from" aria-hidden="true">#</a> wings.tiny.task.define[default].during-from</h3><p><code>String</code>, schedule start datetime at timingZone, in yyyy-MM-dd HH:mm:ss format, 0 means disable, not use Default config.</p><h3 id="wings-tiny-task-define-default-during-stop" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-during-stop" aria-hidden="true">#</a> wings.tiny.task.define[default].during-stop</h3><p><code>String</code>, schedule stop datetime at timingZone, in yyyy-MM-dd HH:mm:ss format, 0 means disable, not use Default config.</p><h3 id="wings-tiny-task-define-default-during-exec" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-during-exec" aria-hidden="true">#</a> wings.tiny.task.define[default].during-exec</h3><p><code>Integer</code>=<code>0</code>, stop schedule after how many total executions, not use Default config.</p><h3 id="wings-tiny-task-define-default-during-fail" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-during-fail" aria-hidden="true">#</a> wings.tiny.task.define[default].during-fail</h3><p><code>Integer</code>=<code>0</code>, stop schedule after how many consecutive failures, not use Default config.</p><h3 id="wings-tiny-task-define-default-during-done" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-during-done" aria-hidden="true">#</a> wings.tiny.task.define[default].during-done</h3><p><code>Integer</code>=<code>0</code>, stop schedule after how many successful executions, not use Default config.</p><h3 id="wings-tiny-task-define-default-during-boot-0" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-during-boot-0" aria-hidden="true">#</a> wings.tiny.task.define[default].during-boot=0</h3><p><code>Integer</code>=<code>0</code>, recount each time the app is started, and stop schedule after how many successful executions, disable by default, not use Default config.</p><h3 id="wings-tiny-task-define-default-result-keep" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-result-keep" aria-hidden="true">#</a> wings.tiny.task.define[default].result-keep</h3><p><code>Integer</code>=<code>60</code>, how many days to save the execution results, default 60 days, 0 means not save, use Default configuration if null.</p><h2 id="_8b-5-wings-tinytask-urlmap-79-properties" tabindex="-1"><a class="header-anchor" href="#_8b-5-wings-tinytask-urlmap-79-properties" aria-hidden="true">#</a> 8B.5.wings-tinytask-urlmap-79.properties</h2><p>URL of builtin features.</p><h3 id="wings-tiny-task-urlmap-task-running" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-running" aria-hidden="true">#</a> wings.tiny.task.urlmap.task-running</h3><p><code>String</code>=<code>/admin/task/task-running.json</code>, list of running tasks.</p><h3 id="wings-tiny-task-urlmap-task-defined" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-defined" aria-hidden="true">#</a> wings.tiny.task.urlmap.task-defined</h3><p><code>String</code>=<code>/admin/task/task-defined.json</code>, list of defined tasks.</p><h3 id="wings-tiny-task-urlmap-task-result" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-result" aria-hidden="true">#</a> wings.tiny.task.urlmap.task-result</h3><p><code>String</code>=<code>/admin/task/task-result.json</code>, list of task results.</p><h3 id="wings-tiny-task-urlmap-task-cancel" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-cancel" aria-hidden="true">#</a> wings.tiny.task.urlmap.task-cancel</h3><p><code>String</code>=<code>/admin/task/task-cancel.json</code>, cancle a task.</p><h3 id="wings-tiny-task-urlmap-task-launch" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-launch" aria-hidden="true">#</a> wings.tiny.task.urlmap.task-launch</h3><p><code>String</code>=<code>=/admin/task/task-launch.json</code>, start a task.</p><h3 id="wings-tiny-task-urlmap-task-force" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-force" aria-hidden="true">#</a> wings.tiny.task.urlmap.task-force</h3><p><code>String</code>=<code>/admin/task/task-force.json</code>, force to start a task.</p><h3 id="wings-tiny-task-urlmap-task-enable" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-enable" aria-hidden="true">#</a> wings.tiny.task.urlmap.task-enable</h3><p><code>String</code>=<code>/admin/task/task-enable.json</code>, enable or disable a task.</p><h3 id="wings-tiny-task-urlmap-task-prop-save" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-prop-save" aria-hidden="true">#</a> wings.tiny.task.urlmap.task-prop-save</h3><p><code>String</code>=<code>/admin/task/task-prop-save.json</code>, update the task config.</p><h3 id="wings-tiny-task-urlmap-task-prop-load" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-prop-load" aria-hidden="true">#</a> wings.tiny.task.urlmap.task-prop-load</h3><p><code>String</code>=<code>/admin/task/task-prop-load.json</code>, load the task config.</p><h3 id="wings-tiny-task-urlmap-task-prop-conf" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-prop-conf" aria-hidden="true">#</a> wings.tiny.task.urlmap.task-prop-conf</h3><p><code>String</code>=<code>/admin/task/task-prop-conf.json</code>, show the prop of task conf.</p><h3 id="wings-tiny-task-urlmap-task-prop-diff" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-prop-diff" aria-hidden="true">#</a> wings.tiny.task.urlmap.task-prop-diff</h3><p><code>String</code>=<code>/admin/task/task-prop-diff.json</code>, show the diff of task conf.</p>',105),d=[s];function r(o,c){return a(),t("div",null,d)}const h=e(i,[["render",r],["__file","8b-prop-tinytask.html.vue"]]);export{h as default};
