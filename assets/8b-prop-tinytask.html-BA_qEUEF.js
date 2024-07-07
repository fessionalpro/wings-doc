import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as t,e as i}from"./app-BcJ4NaN5.js";const a={},s=i('<h1 id="_8b-小任务属性" tabindex="-1"><a class="header-anchor" href="#_8b-小任务属性"><span>8B.小任务属性</span></a></h1><h2 id="_8b-1-wings-tinytask-exec-79-properties" tabindex="-1"><a class="header-anchor" href="#_8b-1-wings-tinytask-exec-79-properties"><span>8B.1.wings-tinytask-exec-79.properties</span></a></h2><h3 id="wings-tiny-task-exec-dryrun" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-exec-dryrun"><span>wings.tiny.task.exec.dryrun</span></a></h3><p><code>Boolean</code>=<code>false</code>，是否干跑，仅记录日志不真正执行任务</p><h2 id="_8b-2-wings-flywave-fit-79-properties" tabindex="-1"><a class="header-anchor" href="#_8b-2-wings-flywave-fit-79-properties"><span>8B.2.wings-flywave-fit-79.properties</span></a></h2><h3 id="wings-faceless-flywave-fit-tiny-task" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-fit-tiny-task"><span>wings.faceless.flywave.fit.tiny-task</span></a></h3><p>数据库依赖，引入此lib后，自动执行此脚本</p><ul><li><code>path</code>=<code>classpath*:/wings-flywave/master/06-task/*.sql</code></li><li><code>revi</code>=<code>2020_1026_01L</code></li><li><code>lost</code>=<code>EXEC</code></li></ul><h2 id="_8b-3-wings-tinytask-beat-79-properties" tabindex="-1"><a class="header-anchor" href="#_8b-3-wings-tinytask-beat-79-properties"><span>8B.3.wings-tinytask-beat-79.properties</span></a></h2><p>TinyTask自身任务，清理日志和心跳健康</p><h3 id="wings-tiny-task-define-tinytaskcleanresult" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-tinytaskcleanresult"><span>wings.tiny.task.define[TinyTaskCleanResult]</span></a></h3><p><code>timing-cron</code>=<code>0 1 2 * * *</code></p><h3 id="wings-tiny-task-define-tinytaskcheckhealth" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-tinytaskcheckhealth"><span>wings.tiny.task.define[TinyTaskCheckHealth]</span></a></h3><p>每空闲300秒，检查一下健康状态</p><ul><li><code>timing-idle</code>=<code>300</code></li><li><code>notice-when</code>=<code>tail,done</code></li></ul><h2 id="_8b-4-wings-tinytask-define-79-properties" tabindex="-1"><a class="header-anchor" href="#_8b-4-wings-tinytask-define-79-properties"><span>8B.4.wings-tinytask-define-79.properties</span></a></h2><p>任务的Default配置 <code>wings.tiny.task.define[default]</code></p><h3 id="wings-tiny-task-define-default-enabled" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-enabled"><span>wings.tiny.task.define[default].enabled</span></a></h3><p><code>Boolean</code>=<code>true</code>，是否可以注册及执行，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-autorun" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-autorun"><span>wings.tiny.task.define[default].autorun</span></a></h3><p><code>Boolean</code>=<code>true</code>，是否可以自动注册并启动，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-version" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-version"><span>wings.tiny.task.define[default].version</span></a></h3><p><code>Integer</code>=<code>0</code>，配置版本号，高版本的配置覆盖低版本的，相等时配置文件覆盖数据库，不会使用Default配置。</p><h3 id="wings-tiny-task-define-default-tasker-bean" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-tasker-bean"><span>wings.tiny.task.define[default].tasker-bean</span></a></h3><p><code>String</code>，由TinyTasker注解的Bean，格式为Class#method，默认自动识别，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-tasker-para" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-tasker-para"><span>wings.tiny.task.define[default].tasker-para</span></a></h3><p><code>String</code>=<code>null</code>，任务的参数，对象数组的json格式，默认null或空无参数，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-tasker-name" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-tasker-name"><span>wings.tiny.task.define[default].tasker-name</span></a></h3><p><code>String</code>，任务名字，用于通知和日志，可读性好一些，默认为<code>[短类名#方法名]</code>，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-task-fast" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-task-fast"><span>wings.tiny.task.define[default].task-fast</span></a></h3><p><code>Boolean</code>=<code>true</code>，是否为轻任务，执行快，秒级完成，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-tasker-apps" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-tasker-apps"><span>wings.tiny.task.define[default].tasker-apps</span></a></h3><p><code>String</code>=<code>${spring.application.name}</code>，所属程序，逗号分隔，null及空时使用Default配置</p><h3 id="wings-tiny-task-define-default-tasker-runs" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-tasker-runs"><span>wings.tiny.task.define[default].tasker-runs</span></a></h3><p><code>String</code>，执行模式，RunMode(product|test|develop|local)，<code>!test</code>，<code>-test</code>为一票否决<code>test</code>， 逗号分隔忽略大小写，默认所有，null及空时使用Default配置</p><h3 id="wings-tiny-task-define-default-notice-bean" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-notice-bean"><span>wings.tiny.task.define[default].notice-bean</span></a></h3><p><code>String</code>=<code>pro.fessional.wings.slardar.notice.DingTalkNotice</code></p><p>通知Bean，SmallNotice类型，格式为Class，默认无通知。null及空时使用Default配置</p><h3 id="wings-tiny-task-define-default-notice-when" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-notice-when"><span>wings.tiny.task.define[default].notice-when</span></a></h3><p><code>String</code>=<code>fail</code>，通知的时机，exec|fail|done|feed，逗号分隔忽略大小写，默认fail。null及空时使用Default配置</p><ul><li>时机大概表述为：exec;try{run...;done}catch{fail}</li><li>exec - 初始任务；done - 执行成功；fail - 执行失败；feed - 方法返回非空</li></ul><h3 id="wings-tiny-task-define-default-notice-conf" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-notice-conf"><span>wings.tiny.task.define[default].notice-conf</span></a></h3><p><code>String</code>，通知Bean的配置文件名字，默认自动，空时使用Default配置</p><h3 id="wings-tiny-task-define-default-timing-zone" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-zone"><span>wings.tiny.task.define[default].timing-zone</span></a></h3><p><code>String</code>，调度时区的ZoneId格式，默认系统时区，null及空时使用Default配置</p><h3 id="wings-tiny-task-define-default-timing-type" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-type"><span>wings.tiny.task.define[default].timing-type</span></a></h3><p><code>String</code>=<code>cron</code>，调度表达式类型，影响timingCron的解析方式，默认为spring cron格式，null及空时使用Default配置</p><h3 id="wings-tiny-task-define-default-timing-cron" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-cron"><span>wings.tiny.task.define[default].timing-cron</span></a></h3><p><code>String</code>，调度表达式内容，最高优先级，受timingType影响，默认spring cron格式（秒分时日月周），不会使用Default配置</p><h3 id="wings-tiny-task-define-default-timing-idle" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-idle"><span>wings.tiny.task.define[default].timing-idle</span></a></h3><p><code>Integer</code>=<code>0</code>，固定空闲相连（秒），优先级次于timingCron，相当于fixedDelay，结束到开始，0为无效，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-timing-rate" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-rate"><span>wings.tiny.task.define[default].timing-rate</span></a></h3><p><code>Integer</code>=<code>0</code>，固定频率开始（秒），优先级次于timingIdle，相当于fixedRate，开始到开始，0为无效，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-timing-tune" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-tune"><span>wings.tiny.task.define[default].timing-tune</span></a></h3><p><code>Integer</code>=<code>0</code>，提前或延迟tune秒执行任务，不会使用Default配置，像<code>Scheduled.initialDelay</code>，但，</p><ul><li>rate - 当前 jvm 上第一次执行</li><li>idle - 当前 jvm 上第一次执行</li><li>cron - 每次执行</li></ul><h3 id="wings-tiny-task-define-default-timing-miss" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-miss"><span>wings.tiny.task.define[default].timing-miss</span></a></h3><p><code>Integer</code>=<code>0</code>，错过调度（misfire）多少秒内，需要补救执行，0表示不补救，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-timing-beat" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-beat"><span>wings.tiny.task.define[default].timing-beat</span></a></h3><p><code>Integer</code>=<code>0</code>，心跳及健康检查间隔秒数，不会使用Default配置。若任务的last_exec距now超过2个心跳，视其为异常，</p><ul><li><code>&lt;0</code> - 禁止</li><li><code>0</code> - 自动计算， <ul><li>cron时，以 last_exec 计算的 next_exec</li><li>否则，取rate或idle最大值</li></ul></li><li><code>&gt;0</code> - fixed positive seconds</li></ul><h3 id="wings-tiny-task-define-default-during-from" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-during-from"><span>wings.tiny.task.define[default].during-from</span></a></h3><p><code>String</code>，调度开始的日期时间，timingZone时区，yyyy-MM-dd HH:mm:ss，0表示无效，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-during-stop" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-during-stop"><span>wings.tiny.task.define[default].during-stop</span></a></h3><p><code>String</code>，调度结束的日期时间，timingZone时区，yyyy-MM-dd HH:mm:ss，0表示无效，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-during-exec" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-during-exec"><span>wings.tiny.task.define[default].during-exec</span></a></h3><p><code>Integer</code>=<code>0</code>，总计初始执行多少次后，结束调度，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-during-fail" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-during-fail"><span>wings.tiny.task.define[default].during-fail</span></a></h3><p><code>Integer</code>=<code>0</code>，连续失败多少次后，结束调度，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-during-done" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-during-done"><span>wings.tiny.task.define[default].during-done</span></a></h3><p><code>Integer</code>=<code>0</code>，总计成功执行多少次后，结束调度，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-during-boot-0" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-during-boot-0"><span>wings.tiny.task.define[default].during-boot=0</span></a></h3><p><code>Integer</code>=<code>0</code>，每应用每启动时重新计数，总计成功执行多少次后，结束调度，默认无效，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-result-keep" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-result-keep"><span>wings.tiny.task.define[default].result-keep</span></a></h3><p><code>Integer</code>=<code>60</code>，执行结果保存的天数，默认60天，0为不保存，null时使用Default配置</p><h2 id="_8b-5-wings-tinytask-urlmap-79-properties" tabindex="-1"><a class="header-anchor" href="#_8b-5-wings-tinytask-urlmap-79-properties"><span>8B.5.wings-tinytask-urlmap-79.properties</span></a></h2><p>内置功能的URL</p><h3 id="wings-tiny-task-urlmap-task-running" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-running"><span>wings.tiny.task.urlmap.task-running</span></a></h3><p><code>String</code>=<code>/admin/task/task-running.json</code>，运行中的任务列表</p><h3 id="wings-tiny-task-urlmap-task-defined" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-defined"><span>wings.tiny.task.urlmap.task-defined</span></a></h3><p><code>String</code>=<code>/admin/task/task-defined.json</code>，定义的任务列表</p><h3 id="wings-tiny-task-urlmap-task-result" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-result"><span>wings.tiny.task.urlmap.task-result</span></a></h3><p><code>String</code>=<code>/admin/task/task-result.json</code>，任务历史列表</p><h3 id="wings-tiny-task-urlmap-task-cancel" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-cancel"><span>wings.tiny.task.urlmap.task-cancel</span></a></h3><p><code>String</code>=<code>/admin/task/task-cancel.json</code>，取消一个任务</p><h3 id="wings-tiny-task-urlmap-task-launch" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-launch"><span>wings.tiny.task.urlmap.task-launch</span></a></h3><p><code>String</code>=<code>=/admin/task/task-launch.json</code>，启动任务</p><h3 id="wings-tiny-task-urlmap-task-force" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-force"><span>wings.tiny.task.urlmap.task-force</span></a></h3><p><code>String</code>=<code>/admin/task/task-force.json</code>，强制执行任务</p><h3 id="wings-tiny-task-urlmap-task-enable" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-enable"><span>wings.tiny.task.urlmap.task-enable</span></a></h3><p><code>String</code>=<code>/admin/task/task-enable.json</code>，启动或禁用任务</p><h3 id="wings-tiny-task-urlmap-task-prop-save" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-prop-save"><span>wings.tiny.task.urlmap.task-prop-save</span></a></h3><p><code>String</code>=<code>/admin/task/task-prop-save.json</code>，更新任务配置</p><h3 id="wings-tiny-task-urlmap-task-prop-load" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-prop-load"><span>wings.tiny.task.urlmap.task-prop-load</span></a></h3><p><code>String</code>=<code>/admin/task/task-prop-load.json</code>，任务载入属性</p><h3 id="wings-tiny-task-urlmap-task-prop-conf" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-prop-conf"><span>wings.tiny.task.urlmap.task-prop-conf</span></a></h3><p><code>String</code>=<code>/admin/task/task-prop-conf.json</code>，任务配置属性</p><h3 id="wings-tiny-task-urlmap-task-prop-diff" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-prop-diff"><span>wings.tiny.task.urlmap.task-prop-diff</span></a></h3><p><code>String</code>=<code>/admin/task/task-prop-diff.json</code>，任务属性差异</p>',99),d=[s];function l(r,f){return t(),n("div",null,d)}const g=e(a,[["render",l],["__file","8b-prop-tinytask.html.vue"]]),k=JSON.parse('{"path":"/zh/8-radiant/8b-prop-tinytask.html","title":"8B.小任务属性","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"folder-tree","category":["任务","属性"],"description":"8B.小任务属性 8B.1.wings-tinytask-exec-79.properties wings.tiny.task.exec.dryrun Boolean=false，是否干跑，仅记录日志不真正执行任务 8B.2.wings-flywave-fit-79.properties wings.faceless.flywave.fit.tiny-...","GIT_REPO_HEAD":"2024-07-07 fbb1f4817448a18f6c9bd497c9b5837508d2198e","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/8-radiant/8b-prop-tinytask.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/8-radiant/8b-prop-tinytask.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"8B.小任务属性"}],["meta",{"property":"og:description","content":"8B.小任务属性 8B.1.wings-tinytask-exec-79.properties wings.tiny.task.exec.dryrun Boolean=false，是否干跑，仅记录日志不真正执行任务 8B.2.wings-flywave-fit-79.properties wings.faceless.flywave.fit.tiny-..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-24T08:47:29.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-24T08:47:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"8B.小任务属性\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-24T08:47:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"8B.1.wings-tinytask-exec-79.properties","slug":"_8b-1-wings-tinytask-exec-79-properties","link":"#_8b-1-wings-tinytask-exec-79-properties","children":[{"level":3,"title":"wings.tiny.task.exec.dryrun","slug":"wings-tiny-task-exec-dryrun","link":"#wings-tiny-task-exec-dryrun","children":[]}]},{"level":2,"title":"8B.2.wings-flywave-fit-79.properties","slug":"_8b-2-wings-flywave-fit-79-properties","link":"#_8b-2-wings-flywave-fit-79-properties","children":[{"level":3,"title":"wings.faceless.flywave.fit.tiny-task","slug":"wings-faceless-flywave-fit-tiny-task","link":"#wings-faceless-flywave-fit-tiny-task","children":[]}]},{"level":2,"title":"8B.3.wings-tinytask-beat-79.properties","slug":"_8b-3-wings-tinytask-beat-79-properties","link":"#_8b-3-wings-tinytask-beat-79-properties","children":[{"level":3,"title":"wings.tiny.task.define[TinyTaskCleanResult]","slug":"wings-tiny-task-define-tinytaskcleanresult","link":"#wings-tiny-task-define-tinytaskcleanresult","children":[]},{"level":3,"title":"wings.tiny.task.define[TinyTaskCheckHealth]","slug":"wings-tiny-task-define-tinytaskcheckhealth","link":"#wings-tiny-task-define-tinytaskcheckhealth","children":[]}]},{"level":2,"title":"8B.4.wings-tinytask-define-79.properties","slug":"_8b-4-wings-tinytask-define-79-properties","link":"#_8b-4-wings-tinytask-define-79-properties","children":[{"level":3,"title":"wings.tiny.task.define[default].enabled","slug":"wings-tiny-task-define-default-enabled","link":"#wings-tiny-task-define-default-enabled","children":[]},{"level":3,"title":"wings.tiny.task.define[default].autorun","slug":"wings-tiny-task-define-default-autorun","link":"#wings-tiny-task-define-default-autorun","children":[]},{"level":3,"title":"wings.tiny.task.define[default].version","slug":"wings-tiny-task-define-default-version","link":"#wings-tiny-task-define-default-version","children":[]},{"level":3,"title":"wings.tiny.task.define[default].tasker-bean","slug":"wings-tiny-task-define-default-tasker-bean","link":"#wings-tiny-task-define-default-tasker-bean","children":[]},{"level":3,"title":"wings.tiny.task.define[default].tasker-para","slug":"wings-tiny-task-define-default-tasker-para","link":"#wings-tiny-task-define-default-tasker-para","children":[]},{"level":3,"title":"wings.tiny.task.define[default].tasker-name","slug":"wings-tiny-task-define-default-tasker-name","link":"#wings-tiny-task-define-default-tasker-name","children":[]},{"level":3,"title":"wings.tiny.task.define[default].task-fast","slug":"wings-tiny-task-define-default-task-fast","link":"#wings-tiny-task-define-default-task-fast","children":[]},{"level":3,"title":"wings.tiny.task.define[default].tasker-apps","slug":"wings-tiny-task-define-default-tasker-apps","link":"#wings-tiny-task-define-default-tasker-apps","children":[]},{"level":3,"title":"wings.tiny.task.define[default].tasker-runs","slug":"wings-tiny-task-define-default-tasker-runs","link":"#wings-tiny-task-define-default-tasker-runs","children":[]},{"level":3,"title":"wings.tiny.task.define[default].notice-bean","slug":"wings-tiny-task-define-default-notice-bean","link":"#wings-tiny-task-define-default-notice-bean","children":[]},{"level":3,"title":"wings.tiny.task.define[default].notice-when","slug":"wings-tiny-task-define-default-notice-when","link":"#wings-tiny-task-define-default-notice-when","children":[]},{"level":3,"title":"wings.tiny.task.define[default].notice-conf","slug":"wings-tiny-task-define-default-notice-conf","link":"#wings-tiny-task-define-default-notice-conf","children":[]},{"level":3,"title":"wings.tiny.task.define[default].timing-zone","slug":"wings-tiny-task-define-default-timing-zone","link":"#wings-tiny-task-define-default-timing-zone","children":[]},{"level":3,"title":"wings.tiny.task.define[default].timing-type","slug":"wings-tiny-task-define-default-timing-type","link":"#wings-tiny-task-define-default-timing-type","children":[]},{"level":3,"title":"wings.tiny.task.define[default].timing-cron","slug":"wings-tiny-task-define-default-timing-cron","link":"#wings-tiny-task-define-default-timing-cron","children":[]},{"level":3,"title":"wings.tiny.task.define[default].timing-idle","slug":"wings-tiny-task-define-default-timing-idle","link":"#wings-tiny-task-define-default-timing-idle","children":[]},{"level":3,"title":"wings.tiny.task.define[default].timing-rate","slug":"wings-tiny-task-define-default-timing-rate","link":"#wings-tiny-task-define-default-timing-rate","children":[]},{"level":3,"title":"wings.tiny.task.define[default].timing-tune","slug":"wings-tiny-task-define-default-timing-tune","link":"#wings-tiny-task-define-default-timing-tune","children":[]},{"level":3,"title":"wings.tiny.task.define[default].timing-miss","slug":"wings-tiny-task-define-default-timing-miss","link":"#wings-tiny-task-define-default-timing-miss","children":[]},{"level":3,"title":"wings.tiny.task.define[default].timing-beat","slug":"wings-tiny-task-define-default-timing-beat","link":"#wings-tiny-task-define-default-timing-beat","children":[]},{"level":3,"title":"wings.tiny.task.define[default].during-from","slug":"wings-tiny-task-define-default-during-from","link":"#wings-tiny-task-define-default-during-from","children":[]},{"level":3,"title":"wings.tiny.task.define[default].during-stop","slug":"wings-tiny-task-define-default-during-stop","link":"#wings-tiny-task-define-default-during-stop","children":[]},{"level":3,"title":"wings.tiny.task.define[default].during-exec","slug":"wings-tiny-task-define-default-during-exec","link":"#wings-tiny-task-define-default-during-exec","children":[]},{"level":3,"title":"wings.tiny.task.define[default].during-fail","slug":"wings-tiny-task-define-default-during-fail","link":"#wings-tiny-task-define-default-during-fail","children":[]},{"level":3,"title":"wings.tiny.task.define[default].during-done","slug":"wings-tiny-task-define-default-during-done","link":"#wings-tiny-task-define-default-during-done","children":[]},{"level":3,"title":"wings.tiny.task.define[default].during-boot=0","slug":"wings-tiny-task-define-default-during-boot-0","link":"#wings-tiny-task-define-default-during-boot-0","children":[]},{"level":3,"title":"wings.tiny.task.define[default].result-keep","slug":"wings-tiny-task-define-default-result-keep","link":"#wings-tiny-task-define-default-result-keep","children":[]}]},{"level":2,"title":"8B.5.wings-tinytask-urlmap-79.properties","slug":"_8b-5-wings-tinytask-urlmap-79-properties","link":"#_8b-5-wings-tinytask-urlmap-79-properties","children":[{"level":3,"title":"wings.tiny.task.urlmap.task-running","slug":"wings-tiny-task-urlmap-task-running","link":"#wings-tiny-task-urlmap-task-running","children":[]},{"level":3,"title":"wings.tiny.task.urlmap.task-defined","slug":"wings-tiny-task-urlmap-task-defined","link":"#wings-tiny-task-urlmap-task-defined","children":[]},{"level":3,"title":"wings.tiny.task.urlmap.task-result","slug":"wings-tiny-task-urlmap-task-result","link":"#wings-tiny-task-urlmap-task-result","children":[]},{"level":3,"title":"wings.tiny.task.urlmap.task-cancel","slug":"wings-tiny-task-urlmap-task-cancel","link":"#wings-tiny-task-urlmap-task-cancel","children":[]},{"level":3,"title":"wings.tiny.task.urlmap.task-launch","slug":"wings-tiny-task-urlmap-task-launch","link":"#wings-tiny-task-urlmap-task-launch","children":[]},{"level":3,"title":"wings.tiny.task.urlmap.task-force","slug":"wings-tiny-task-urlmap-task-force","link":"#wings-tiny-task-urlmap-task-force","children":[]},{"level":3,"title":"wings.tiny.task.urlmap.task-enable","slug":"wings-tiny-task-urlmap-task-enable","link":"#wings-tiny-task-urlmap-task-enable","children":[]},{"level":3,"title":"wings.tiny.task.urlmap.task-prop-save","slug":"wings-tiny-task-urlmap-task-prop-save","link":"#wings-tiny-task-urlmap-task-prop-save","children":[]},{"level":3,"title":"wings.tiny.task.urlmap.task-prop-load","slug":"wings-tiny-task-urlmap-task-prop-load","link":"#wings-tiny-task-urlmap-task-prop-load","children":[]},{"level":3,"title":"wings.tiny.task.urlmap.task-prop-conf","slug":"wings-tiny-task-urlmap-task-prop-conf","link":"#wings-tiny-task-urlmap-task-prop-conf","children":[]},{"level":3,"title":"wings.tiny.task.urlmap.task-prop-diff","slug":"wings-tiny-task-urlmap-task-prop-diff","link":"#wings-tiny-task-urlmap-task-prop-diff","children":[]}]}],"git":{"createdTime":1672191701000,"updatedTime":1719218849000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":6}]},"readingTime":{"minutes":4.14,"words":1241},"filePathRelative":"zh/8-radiant/8b-prop-tinytask.md","localizedDate":"2022年12月28日","autoDesc":true}');export{g as comp,k as data};
