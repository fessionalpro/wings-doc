import{_ as e,W as a,X as n,a2 as i}from"./framework-f37db9b8.js";const t={},d=i('<h1 id="_8b-小任务属性" tabindex="-1"><a class="header-anchor" href="#_8b-小任务属性" aria-hidden="true">#</a> 8B.小任务属性</h1><h2 id="_8b-1-spring-wings-enabled-79-properties" tabindex="-1"><a class="header-anchor" href="#_8b-1-spring-wings-enabled-79-properties" aria-hidden="true">#</a> 8B.1.spring-wings-enabled-79.properties</h2><h3 id="spring-wings-tiny-task-enabled-autoconf" tabindex="-1"><a class="header-anchor" href="#spring-wings-tiny-task-enabled-autoconf" aria-hidden="true">#</a> spring.wings.tiny.task.enabled.autoconf</h3><p><code>Boolean</code>=<code>true</code>，是否启动自动配置</p><h3 id="spring-wings-tiny-task-enabled-autorun" tabindex="-1"><a class="header-anchor" href="#spring-wings-tiny-task-enabled-autorun" aria-hidden="true">#</a> spring.wings.tiny.task.enabled.autorun</h3><p><code>Boolean</code>=<code>true</code>，是否允许自动注册TinyTask.Auto</p><h3 id="spring-wings-tiny-task-enabled-dryrun" tabindex="-1"><a class="header-anchor" href="#spring-wings-tiny-task-enabled-dryrun" aria-hidden="true">#</a> spring.wings.tiny.task.enabled.dryrun</h3><p><code>Boolean</code>=<code>false</code>，是否干跑，仅记录日志不真正执行任务</p><h3 id="spring-wings-tiny-task-enabled-controller-conf" tabindex="-1"><a class="header-anchor" href="#spring-wings-tiny-task-enabled-controller-conf" aria-hidden="true">#</a> spring.wings.tiny.task.enabled.controller-conf</h3><p><code>Boolean</code>=<code>true</code>，是否开启 TaskConfController</p><h3 id="spring-wings-tiny-task-enabled-controller-exec" tabindex="-1"><a class="header-anchor" href="#spring-wings-tiny-task-enabled-controller-exec" aria-hidden="true">#</a> spring.wings.tiny.task.enabled.controller-exec</h3><p><code>Boolean</code>=<code>true</code>，是否开启 TaskExecController</p><h3 id="spring-wings-tiny-task-enabled-controller-list" tabindex="-1"><a class="header-anchor" href="#spring-wings-tiny-task-enabled-controller-list" aria-hidden="true">#</a> spring.wings.tiny.task.enabled.controller-list</h3><p><code>Boolean</code>=<code>true</code>，是否开启 TaskListController</p><h2 id="_8b-2-wings-flywave-fit-79-properties" tabindex="-1"><a class="header-anchor" href="#_8b-2-wings-flywave-fit-79-properties" aria-hidden="true">#</a> 8B.2.wings-flywave-fit-79.properties</h2><h3 id="wings-faceless-flywave-fit-tiny-task" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-fit-tiny-task" aria-hidden="true">#</a> wings.faceless.flywave.fit.tiny-task</h3><p>数据库依赖，引入此lib后，自动执行次脚本</p><ul><li><code>path</code>=<code>classpath*:/wings-flywave/master/06-task/*.sql</code></li><li><code>revi</code>=<code>2020_1026_01L</code></li><li><code>lost</code>=<code>EXEC</code></li></ul><h2 id="_8b-3-wings-tinytask-beat-79-properties" tabindex="-1"><a class="header-anchor" href="#_8b-3-wings-tinytask-beat-79-properties" aria-hidden="true">#</a> 8B.3.wings-tinytask-beat-79.properties</h2><p>TinyTask自身任务，清理日志和心跳健康</p><h3 id="wings-tiny-task-define-tinytaskcleanresult" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-tinytaskcleanresult" aria-hidden="true">#</a> wings.tiny.task.define[TinyTaskCleanResult]</h3><p><code>timing-cron</code>=<code>0 1 2 * * *</code></p><h3 id="wings-tiny-task-define-tinytaskcheckhealth" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-tinytaskcheckhealth" aria-hidden="true">#</a> wings.tiny.task.define[TinyTaskCheckHealth]</h3><p>每空闲300秒，检查一下健康状态</p><ul><li><code>timing-idle</code>=<code>300</code></li><li><code>notice-when</code>=<code>tail,done</code></li></ul><h2 id="_8b-4-wings-tinytask-define-79-properties" tabindex="-1"><a class="header-anchor" href="#_8b-4-wings-tinytask-define-79-properties" aria-hidden="true">#</a> 8B.4.wings-tinytask-define-79.properties</h2><p>任务的默认配置 <code>wings.tiny.task.define[default]</code></p><h3 id="wings-tiny-task-define-default-enabled" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-enabled" aria-hidden="true">#</a> wings.tiny.task.define[default].enabled</h3><p><code>Boolean</code>=<code>true</code>，是否可以注册及执行，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-autorun" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-autorun" aria-hidden="true">#</a> wings.tiny.task.define[default].autorun</h3><p><code>Boolean</code>=<code>true</code>，是否可以自动注册并启动，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-version" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-version" aria-hidden="true">#</a> wings.tiny.task.define[default].version</h3><p><code>Integer</code>=<code>0</code>，版本号，版本高的配置覆盖版本低的，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-tasker-bean" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-tasker-bean" aria-hidden="true">#</a> wings.tiny.task.define[default].tasker-bean</h3><p><code>String</code>，由TinyTasker注解的Bean，格式为Class#method，默认自动识别，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-tasker-para" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-tasker-para" aria-hidden="true">#</a> wings.tiny.task.define[default].tasker-para</h3><p><code>String</code>=<code>null</code>，任务的参数，对象数组的json格式，默认null或空无参数，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-tasker-name" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-tasker-name" aria-hidden="true">#</a> wings.tiny.task.define[default].tasker-name</h3><p><code>String</code>，任务名字，用于通知和日志，可读性好一些，默认为&#39;[短类名#方法名]&#39;，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-task-fast" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-task-fast" aria-hidden="true">#</a> wings.tiny.task.define[default].task-fast</h3><p><code>Boolean</code>=<code>true</code>，是否为轻任务，执行快，秒级完成，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-tasker-apps" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-tasker-apps" aria-hidden="true">#</a> wings.tiny.task.define[default].tasker-apps</h3><p><code>String</code>=<code>${spring.application.name}</code>，所属程序，逗号分隔，null及空时使用Default配置</p><h3 id="wings-tiny-task-define-default-tasker-runs" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-tasker-runs" aria-hidden="true">#</a> wings.tiny.task.define[default].tasker-runs</h3><p><code>String</code>，执行模式，RunMode(product|test|develop|local)，逗号分隔忽略大小写，默认所有，null及空时使用Default配置</p><h3 id="wings-tiny-task-define-default-notice-bean" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-notice-bean" aria-hidden="true">#</a> wings.tiny.task.define[default].notice-bean</h3><p><code>String</code>=<code>pro.fessional.wings.slardar.notice.DingTalkNotice</code></p><p>通知Bean，SmallNotice类型，格式为Class，默认无通知。null及空时使用Default配置</p><h3 id="wings-tiny-task-define-default-notice-when" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-notice-when" aria-hidden="true">#</a> wings.tiny.task.define[default].notice-when</h3><p><code>String</code>=<code>fail</code>，通知的时机，exec|fail|done|feed，逗号分隔忽略大小写，默认fail。null及空时使用Default配置</p><ul><li>时机大概表述为：exec;try{run...;done}catch{fail}</li><li>exec - 初始任务；done - 执行成功；fail - 执行失败；feed - 方法返回非空</li></ul><h3 id="wings-tiny-task-define-default-notice-conf" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-notice-conf" aria-hidden="true">#</a> wings.tiny.task.define[default].notice-conf</h3><p><code>String</code>，通知Bean的配置文件名字，默认自动，空时使用Default配置</p><h3 id="wings-tiny-task-define-default-timing-zone" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-zone" aria-hidden="true">#</a> wings.tiny.task.define[default].timing-zone</h3><p><code>String</code>，调度时区的ZoneId格式，默认系统时区，null及空时使用Default配置</p><h3 id="wings-tiny-task-define-default-timing-type" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-type" aria-hidden="true">#</a> wings.tiny.task.define[default].timing-type</h3><p><code>String</code>=<code>cron</code>，调度表达式类型，影响timingCron的解析方式，默认为spring cron格式，null及空时使用Default配置</p><h3 id="wings-tiny-task-define-default-timing-cron" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-cron" aria-hidden="true">#</a> wings.tiny.task.define[default].timing-cron</h3><p><code>String</code>，调度表达式内容，最高优先级，受timingType影响，默认spring cron格式（秒分时日月周），不会使用Default配置</p><h3 id="wings-tiny-task-define-default-timing-idle" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-idle" aria-hidden="true">#</a> wings.tiny.task.define[default].timing-idle</h3><p><code>Integer</code>=<code>0</code>，固定空闲相连（秒），优先级次于timingCron，相当于fixedDelay，结束到开始，0为无效，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-timing-rate" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-rate" aria-hidden="true">#</a> wings.tiny.task.define[default].timing-rate</h3><p><code>Integer</code>=<code>0</code>，固定频率开始（秒），优先级次于timingIdle，相当于fixedRate，开始到开始，0为无效，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-timing-miss" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-miss" aria-hidden="true">#</a> wings.tiny.task.define[default].timing-miss</h3><p><code>Integer</code>=<code>0</code>，错过调度（misfire）多少秒内，需要补救执行，0表示不补救，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-timing-beat" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-beat" aria-hidden="true">#</a> wings.tiny.task.define[default].timing-beat</h3><p><code>Integer</code>=<code>0</code>，心跳间隔秒数，last_exec距今超过2个心态任务task异常，默认自动。取rate或idle最大值，cron需要自行指定，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-during-from" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-during-from" aria-hidden="true">#</a> wings.tiny.task.define[default].during-from</h3><p><code>String</code>，调度开始的日期时间，timingZone时区，yyyy-MM-dd HH:mm:ss，0表示无效，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-during-stop" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-during-stop" aria-hidden="true">#</a> wings.tiny.task.define[default].during-stop</h3><p><code>String</code>，调度结束的日期时间，timingZone时区，yyyy-MM-dd HH:mm:ss，0表示无效，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-during-exec" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-during-exec" aria-hidden="true">#</a> wings.tiny.task.define[default].during-exec</h3><p><code>Integer</code>=<code>0</code>，总计初始执行多少次后，结束调度，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-during-fail" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-during-fail" aria-hidden="true">#</a> wings.tiny.task.define[default].during-fail</h3><p><code>Integer</code>=<code>0</code>，连续失败多少次后，结束调度，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-during-done" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-during-done" aria-hidden="true">#</a> wings.tiny.task.define[default].during-done</h3><p><code>Integer</code>=<code>0</code>，总计成功执行多少次后，结束调度，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-during-boot-0" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-during-boot-0" aria-hidden="true">#</a> wings.tiny.task.define[default].during-boot=0</h3><p><code>Integer</code>=<code>0</code>，每应用每启动时重新计数，总计成功执行多少次后，结束调度，默认无效，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-result-keep" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-result-keep" aria-hidden="true">#</a> wings.tiny.task.define[default].result-keep</h3><p><code>Integer</code>=<code>60</code>，执行结果保存的天数，0为不保存，默认60天，0为不保存，null时使用Default配置</p><h2 id="_8b-5-wings-tinytask-urlmap-79-properties" tabindex="-1"><a class="header-anchor" href="#_8b-5-wings-tinytask-urlmap-79-properties" aria-hidden="true">#</a> 8B.5.wings-tinytask-urlmap-79.properties</h2><p>内置功能的URL</p><h3 id="wings-tiny-task-urlmap-task-running" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-running" aria-hidden="true">#</a> wings.tiny.task.urlmap.task-running</h3><p><code>String</code>=<code>/admin/task/task-running.json</code>，运行中的任务列表</p><h3 id="wings-tiny-task-urlmap-task-defined" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-defined" aria-hidden="true">#</a> wings.tiny.task.urlmap.task-defined</h3><p><code>String</code>=<code>/admin/task/task-defined.json</code>，定义的任务列表</p><h3 id="wings-tiny-task-urlmap-task-result" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-result" aria-hidden="true">#</a> wings.tiny.task.urlmap.task-result</h3><p><code>String</code>=<code>/admin/task/task-result.json</code>，任务历史列表</p><h3 id="wings-tiny-task-urlmap-task-cancel" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-cancel" aria-hidden="true">#</a> wings.tiny.task.urlmap.task-cancel</h3><p><code>String</code>=<code>/admin/task/task-cancel.json</code>，取消一个任务</p><h3 id="wings-tiny-task-urlmap-task-launch" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-launch" aria-hidden="true">#</a> wings.tiny.task.urlmap.task-launch</h3><p><code>String</code>=<code>=/admin/task/task-launch.json</code>，启动任务</p><h3 id="wings-tiny-task-urlmap-task-force" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-force" aria-hidden="true">#</a> wings.tiny.task.urlmap.task-force</h3><p><code>String</code>=<code>/admin/task/task-force.json</code>，强制执行任务</p><h3 id="wings-tiny-task-urlmap-task-enable" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-enable" aria-hidden="true">#</a> wings.tiny.task.urlmap.task-enable</h3><p><code>String</code>=<code>/admin/task/task-enable.json</code>，启动或禁用任务</p><h3 id="wings-tiny-task-urlmap-task-prop-save" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-prop-save" aria-hidden="true">#</a> wings.tiny.task.urlmap.task-prop-save</h3><p><code>String</code>=<code>/admin/task/task-prop-save.json</code>，更新任务配置</p><h3 id="wings-tiny-task-urlmap-task-prop-load" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-prop-load" aria-hidden="true">#</a> wings.tiny.task.urlmap.task-prop-load</h3><p><code>String</code>=<code>/admin/task/task-prop-load.json</code>，任务载入属性</p><h3 id="wings-tiny-task-urlmap-task-prop-conf" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-prop-conf" aria-hidden="true">#</a> wings.tiny.task.urlmap.task-prop-conf</h3><p><code>String</code>=<code>/admin/task/task-prop-conf.json</code>，任务配置属性</p><h3 id="wings-tiny-task-urlmap-task-prop-diff" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-prop-diff" aria-hidden="true">#</a> wings.tiny.task.urlmap.task-prop-diff</h3><p><code>String</code>=<code>/admin/task/task-prop-diff.json</code>，任务属性差异</p>',105),s=[d];function r(o,c){return a(),n("div",null,s)}const h=e(t,[["render",r],["__file","8b-prop-tinytask.html.vue"]]);export{h as default};
