import{_ as r,W as o,X as i,Z as e,a0 as s,$ as c,a2 as a,F as n}from"./framework-f37db9b8.js";const t={},l=a('<h1 id="_3k-webfun的属性" tabindex="-1"><a class="header-anchor" href="#_3k-webfun的属性" aria-hidden="true">#</a> 3K.WebFun的属性</h1><p>有关Slardar中提供的Spring Web加强功能的设置</p><h2 id="_3k-1-wings-cache-79-properties" tabindex="-1"><a class="header-anchor" href="#_3k-1-wings-cache-79-properties" aria-hidden="true">#</a> 3K.1.wings-cache-79.properties</h2><p>默认 LRU (Least Recently Used)，单位seconds, 0=infinitely</p><h3 id="wings-slardar-cache-primary" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cache-primary" aria-hidden="true">#</a> wings.slardar.cache.primary</h3><p><code>String</code>=<code>MemoryCacheManager</code>，哪个CacheManager为primary</p><ul><li><code>MemoryCacheManager</code> - Cache2k的Jvm缓存</li><li><code>ServerCacheManager</code> - Hazelcast的分布式缓存</li></ul><h3 id="wings-slardar-cache-expand" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cache-expand" aria-hidden="true">#</a> wings.slardar.cache.expand</h3><p><code>Boolean</code>=<code>true</code>，是否对cache name的进行Resolve扩展，即追加所在类</p><h3 id="wings-slardar-cache-null-size" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cache-null-size" aria-hidden="true">#</a> wings.slardar.cache.null-size</h3><p><code>Integer</code>=<code>1000</code>，原则上不缓存null，但可对null统一处理。</p><ul><li><code>正数</code> - 缓存大小</li><li><code>0</code> - 不缓存null</li><li><code>负数</code> - 不统一处理</li></ul><h3 id="wings-slardar-cache-null-live-300" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cache-null-live-300" aria-hidden="true">#</a> wings.slardar.cache.null-live=300</h3><p><code>Integer</code>=<code>300</code>，默认300s</p><h3 id="wings-slardar-cache-common" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cache-common" aria-hidden="true">#</a> wings.slardar.cache.common</h3><p>level之外的默认配置</p><ul><li><code>max-live</code>=<code>3600</code>，expireAfterWrite(Time To Live)</li><li><code>max-idle</code>=<code>0</code>，expireAfterAccess(Time To Idle)</li><li><code>max-size</code>=<code>50000</code>，缓存大小</li></ul><h3 id="wings-slardar-cache-level" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cache-level" aria-hidden="true">#</a> wings.slardar.cache.level</h3><p>注意，Server使用hazelcast时，忽略common设置，避免非缓存IMap错误 level设置，需要使用通配符，如<code>program~*</code>，参考WingsCache命名及分隔符</p><ul><li><code>wings.slardar.cache.level.program.max-live</code>=<code>0</code></li><li><code>wings.slardar.cache.level.program.max-idle</code>=<code>0</code></li><li><code>wings.slardar.cache.level.program.max-size</code>=<code>0</code></li><li><code>wings.slardar.cache.level.general.max-live</code>=<code>86400</code></li><li><code>wings.slardar.cache.level.general.max-idle</code>=<code>0</code></li><li><code>wings.slardar.cache.level.general.max-size</code>=<code>0</code></li><li><code>wings.slardar.cache.level.service.max-live</code>=<code>3600</code></li><li><code>wings.slardar.cache.level.service.max-idle</code>=<code>0</code></li><li><code>wings.slardar.cache.level.service.max-size</code>=<code>0</code></li><li><code>wings.slardar.cache.level.session.max-live</code>=<code>600</code></li><li><code>wings.slardar.cache.level.session.max-idle</code>=<code>0</code></li><li><code>wings.slardar.cache.level.session.max-size</code>=<code>0</code></li></ul><h2 id="_3k-2-wings-debounce-79-properties" tabindex="-1"><a class="header-anchor" href="#_3k-2-wings-debounce-79-properties" aria-hidden="true">#</a> 3K.2.wings-debounce-79.properties</h2><p>后端防抖设置</p><h3 id="wings-slardar-debounce-capacity" tabindex="-1"><a class="header-anchor" href="#wings-slardar-debounce-capacity" aria-hidden="true">#</a> wings.slardar.debounce.capacity</h3><p><code>Integer</code>=<code>10000</code>，等待区大小</p><h3 id="wings-slardar-debounce-max-wait" tabindex="-1"><a class="header-anchor" href="#wings-slardar-debounce-max-wait" aria-hidden="true">#</a> wings.slardar.debounce.max-wait</h3><p><code>Integer</code>=<code>300</code>，最大等待秒</p><h3 id="wings-slardar-debounce-http-status" tabindex="-1"><a class="header-anchor" href="#wings-slardar-debounce-http-status" aria-hidden="true">#</a> wings.slardar.debounce.http-status</h3><p><code>Integer</code>=<code>208</code>，告知发生防抖的http-status</p><h3 id="wings-slardar-debounce-content-type" tabindex="-1"><a class="header-anchor" href="#wings-slardar-debounce-content-type" aria-hidden="true">#</a> wings.slardar.debounce.content-type</h3><p><code>String</code>=<code>application/json;charset=UTF-8</code></p><p>告知发生防抖的content-type</p><h3 id="wings-slardar-debounce-response-body" tabindex="-1"><a class="header-anchor" href="#wings-slardar-debounce-response-body" aria-hidden="true">#</a> wings.slardar.debounce.response-body</h3><p><code>String</code>=<code>{&quot;success&quot;:false,&quot;message&quot;:&quot;debounced&quot;}</code></p><p>告知发生防抖的回复文本内容</p><h2 id="_3k-3-wings-domain-extend-79-properties" tabindex="-1"><a class="header-anchor" href="#_3k-3-wings-domain-extend-79-properties" aria-hidden="true">#</a> 3K.3.wings-domain-extend-79.properties</h2><p>Host继承和Url重载</p><h3 id="wings-slardar-domain-extend-cache-size" tabindex="-1"><a class="header-anchor" href="#wings-slardar-domain-extend-cache-size" aria-hidden="true">#</a> wings.slardar.domain-extend.cache-size</h3><p><code>Integer</code>=<code>4096</code>，匹配和未匹配的url缓存size，restfull慎用</p><h3 id="wings-slardar-domain-extend-prefix" tabindex="-1"><a class="header-anchor" href="#wings-slardar-domain-extend-prefix" aria-hidden="true">#</a> wings.slardar.domain-extend.prefix</h3><p><code>String</code>=<code>/domain/</code>，mapping和resource的URL统一的domain的前缀</p><h3 id="wings-slardar-domain-extend-host" tabindex="-1"><a class="header-anchor" href="#wings-slardar-domain-extend-host" aria-hidden="true">#</a> wings.slardar.domain-extend.host</h3><p><code>Map&lt;String, Set&lt;String&gt;&gt;</code>，host映射关系。</p><p>FilenameUtils.wildcardMatch，如<code>trydofor</code>=<code>*.trydofor.com, trydofor.com</code></p><h3 id="wings-slardar-domain-extend-other-url" tabindex="-1"><a class="header-anchor" href="#wings-slardar-domain-extend-other-url" aria-hidden="true">#</a> wings.slardar.domain-extend.other-url</h3><p><code>List&lt;String&gt;</code>，不自动探测的指定domain url。</p><p>支持ant风格，如，<code>other-url</code>=<code>/trydofor/b/c.html</code></p><h2 id="_3k-4-wings-doublekill-79-properties" tabindex="-1"><a class="header-anchor" href="#_3k-4-wings-doublekill-79-properties" aria-hidden="true">#</a> 3K.4.wings-doublekill-79.properties</h2><p>double-kill, DoubleKillExceptionResolver的设置，支持变量 {key} 和 {ttl}</p><h3 id="wings-slardar-double-kill-http-status" tabindex="-1"><a class="header-anchor" href="#wings-slardar-double-kill-http-status" aria-hidden="true">#</a> wings.slardar.double-kill.http-status</h3><p><code>Integer</code>=<code>202</code>，回复的http-status</p><h3 id="wings-slardar-double-kill-content-type" tabindex="-1"><a class="header-anchor" href="#wings-slardar-double-kill-content-type" aria-hidden="true">#</a> wings.slardar.double-kill.content-type</h3><p><code>String</code>=<code>application/json;charset=UTF-8</code>，回复的content-type</p><h3 id="wings-slardar-double-kill-response-body" tabindex="-1"><a class="header-anchor" href="#wings-slardar-double-kill-response-body" aria-hidden="true">#</a> wings.slardar.double-kill.response-body</h3><p><code>String</code>=<code>{&quot;success&quot;:false,&quot;message&quot;:&quot;Request Too Busy, Take A Coffee&quot;, &quot;data&quot;:{&quot;key&quot;:&quot;{key}&quot;,&quot;ttl&quot;:{ttl}}}</code>，回复的文本内容</p><h2 id="_3k-5-wings-firstblood-79-properties" tabindex="-1"><a class="header-anchor" href="#_3k-5-wings-firstblood-79-properties" aria-hidden="true">#</a> 3K.5.wings-firstblood-79.properties</h2><p>资源保护功能，如验证码</p><h3 id="wings-slardar-first-blood-client-ticket-key" tabindex="-1"><a class="header-anchor" href="#wings-slardar-first-blood-client-ticket-key" aria-hidden="true">#</a> wings.slardar.first-blood.client-ticket-key</h3><p><code>String</code>=<code>Client-Ticket</code>，识别用户时使用的header和session的key</p><h3 id="wings-slardar-first-blood-quest-captcha-key" tabindex="-1"><a class="header-anchor" href="#wings-slardar-first-blood-quest-captcha-key" aria-hidden="true">#</a> wings.slardar.first-blood.quest-captcha-key</h3><p><code>String</code>=<code>quest-captcha-image</code>，生成图形验证码的参数，时间戳或特定前缀</p><h3 id="wings-slardar-first-blood-check-captcha-key" tabindex="-1"><a class="header-anchor" href="#wings-slardar-first-blood-check-captcha-key" aria-hidden="true">#</a> wings.slardar.first-blood.check-captcha-key</h3><p><code>String</code>=<code>check-captcha-image</code>，图形验证验证码的参数，客户输入的验证码</p><h3 id="wings-slardar-first-blood-base64-captcha-key" tabindex="-1"><a class="header-anchor" href="#wings-slardar-first-blood-base64-captcha-key" aria-hidden="true">#</a> wings.slardar.first-blood.base64-captcha-key</h3><p><code>String</code>=<code>base64</code>，图片以base64返回的key，用在fresh-captcha-image=base64+时间戳</p><h3 id="wings-slardar-first-blood-base64-captcha-body" tabindex="-1"><a class="header-anchor" href="#wings-slardar-first-blood-base64-captcha-body" aria-hidden="true">#</a> wings.slardar.first-blood.base64-captcha-body</h3><p><code>String</code>=<code>data:image/jpeg;base64,{base64}</code></p><p>图片以base64返回的格式，{base64} 占位符， 默认配置，会输出 <code>data:image/jpeg;base64,/9j/4AAQSkZ.....</code></p><h3 id="wings-slardar-first-blood-chinese-captcha" tabindex="-1"><a class="header-anchor" href="#wings-slardar-first-blood-chinese-captcha" aria-hidden="true">#</a> wings.slardar.first-blood.chinese-captcha</h3><p><code>Boolean</code>=<code>true</code>，是否使用中文验证码</p><h3 id="wings-slardar-first-blood-case-ignore" tabindex="-1"><a class="header-anchor" href="#wings-slardar-first-blood-case-ignore" aria-hidden="true">#</a> wings.slardar.first-blood.case-ignore</h3><p><code>Boolean</code>=<code>true</code>，是否忽略大小写</p><h3 id="wings-slardar-first-blood-captcha-prefix" tabindex="-1"><a class="header-anchor" href="#wings-slardar-first-blood-captcha-prefix" aria-hidden="true">#</a> wings.slardar.first-blood.captcha-prefix</h3><p><code>String</code>=<code>image</code>，默认图形验证码的scene前缀</p><h3 id="wings-slardar-first-blood-http-status" tabindex="-1"><a class="header-anchor" href="#wings-slardar-first-blood-http-status" aria-hidden="true">#</a> wings.slardar.first-blood.http-status</h3><p><code>Integer</code>=<code>406</code>，告知需要验证的http-status</p><h3 id="wings-slardar-first-blood-content-type" tabindex="-1"><a class="header-anchor" href="#wings-slardar-first-blood-content-type" aria-hidden="true">#</a> wings.slardar.first-blood.content-type</h3><p><code>String</code>=<code>application/json;charset=UTF-8</code>，告知需要验证的content-type</p><h3 id="wings-slardar-first-blood-response-body" tabindex="-1"><a class="header-anchor" href="#wings-slardar-first-blood-response-body" aria-hidden="true">#</a> wings.slardar.first-blood.response-body</h3><p><code>String</code>=<code>{&quot;success&quot;:false,&quot;message&quot;:&quot;need a verify code&quot;}</code>，告知验证码的回复文本内容</p><h2 id="_3k-6-wings-monitor-79-properties" tabindex="-1"><a class="header-anchor" href="#_3k-6-wings-monitor-79-properties" aria-hidden="true">#</a> 3K.6.wings-monitor-79.properties</h2><p>程序自身的简单监控设置，阈值中，<code>-1</code>表示忽略此项。</p><h3 id="wings-slardar-monitor-cron" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-cron" aria-hidden="true">#</a> wings.slardar.monitor.cron</h3><p><code>String</code>=<code>0 */10 * * * ?</code></p><p>monitor自身的cron，<code>-</code>表示停止此cron，默认频率10分钟</p><h3 id="wings-slardar-monitor-hook" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-hook" aria-hidden="true">#</a> wings.slardar.monitor.hook</h3><p><code>Boolean</code>=<code>true</code>，对自身的是否对jvm的启动和停止增加hook通知</p><h3 id="wings-slardar-monitor-jvm-system-cent" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-jvm-system-cent" aria-hidden="true">#</a> wings.slardar.monitor.jvm.system-cent</h3><p><code>Integer</code>=<code>90</code>，警报阈值，系统Cpu Load按核数折算成整个系统的百分比，范围<code>[0，100]</code>。</p><h3 id="wings-slardar-monitor-jvm-system-load" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-jvm-system-load" aria-hidden="true">#</a> wings.slardar.monitor.jvm.system-load</h3><p><code>Integer</code>=<code>-1</code>，系统Cpu Load未折算，范围<code>[0，100*核数]</code></p><h3 id="wings-slardar-monitor-jvm-process-cent" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-jvm-process-cent" aria-hidden="true">#</a> wings.slardar.monitor.jvm.process-cent</h3><p><code>Integer</code>=<code>-1</code>，进程Cpu Load，按核数折算成整个系统的百分比，范围<code>[0，100]</code></p><h3 id="wings-slardar-monitor-jvm-process-load" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-jvm-process-load" aria-hidden="true">#</a> wings.slardar.monitor.jvm.process-load</h3><p><code>Integer</code>=<code>150</code>，进程Cpu load 未折算，范围<code>[0，100*核数]</code></p><h3 id="wings-slardar-monitor-jvm-memory-load" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-jvm-memory-load" aria-hidden="true">#</a> wings.slardar.monitor.jvm.memory-load</h3><p><code>Integer</code>=<code>85</code>，进程Mem Load，范围<code>[0,100]</code></p><h3 id="wings-slardar-monitor-jvm-thread-count" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-jvm-thread-count" aria-hidden="true">#</a> wings.slardar.monitor.jvm.thread-count</h3><p><code>Integer</code>=<code>-1</code>，jvm内线程总数</p><p>推算公式 threads = <code>Available Cores</code> / (1 - <code>Blocking Coefficient</code>)， <code>Blocking Coefficient</code>(阻塞系数) = 阻塞时间／（阻塞时间 + 使用CPU的时间）</p><h3 id="wings-slardar-monitor-jvm-thread-load" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-jvm-thread-load" aria-hidden="true">#</a> wings.slardar.monitor.jvm.thread-load</h3><p><code>Integer</code>=<code>50</code>，jvm内线程总数除以核数</p><h3 id="wings-slardar-monitor-log-default-enable" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-log-default-enable" aria-hidden="true">#</a> wings.slardar.monitor.log.default.enable</h3><p><code>Boolean</code>=<code>true</code>，是否开启，日志文件的监控</p><p>修改defualt的值，会影响size有关默认值，方便其他rule简化配置</p><h3 id="wings-slardar-monitor-log-default-file" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-log-default-file" aria-hidden="true">#</a> wings.slardar.monitor.log.default.file</h3><p><code>String</code>=<code>${logging.file.name}</code></p><p>监控的日志文件，默认wings方式，文件不存在表示不监控</p><h3 id="wings-slardar-monitor-log-default-min-grow" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-log-default-min-grow" aria-hidden="true">#</a> wings.slardar.monitor.log.default.min-grow</h3><p><code>DataSize</code>=<code>-1</code>，每扫描周期最小增长量，继承default</p><h3 id="wings-slardar-monitor-log-default-max-grow" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-log-default-max-grow" aria-hidden="true">#</a> wings.slardar.monitor.log.default.max-grow</h3><p><code>DataSize</code>=<code>10MB</code>，每扫描周期最大增长量，继承default</p><h3 id="wings-slardar-monitor-log-default-max-size" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-log-default-max-size" aria-hidden="true">#</a> wings.slardar.monitor.log.default.max-size</h3><p><code>DataSize</code>=<code>=1GB</code>，日志最大文件体量（每天归档），继承default</p><h3 id="wings-slardar-monitor-log-default-bound" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-log-default-bound" aria-hidden="true">#</a> wings.slardar.monitor.log.default.bound</h3><p><code>Integer</code>=<code>40</code>，日志基本和内容的大概分隔线，分隔byte数（ascii等于char数）</p><h3 id="wings-slardar-monitor-log-default-level" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-log-default-level" aria-hidden="true">#</a> wings.slardar.monitor.log.default.level</h3><p><code>Set&lt;String&gt;</code>=<code>&#39; WARN &#39;,&#39; ERROR &#39;</code>，日志级别的关键词。</p><p>关键词，执行时会自动trim掉一组成对的头尾双引号。 如<code>&#39; ERROR &#39;</code>等于<code>ERROR</code>，<code>&#39;&#39; WARN &#39;&#39;</code>等于<code>&#39; WARN &#39;</code></p><h3 id="wings-slardar-monitor-log-default-keyword" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-log-default-keyword" aria-hidden="true">#</a> wings.slardar.monitor.log.default.keyword</h3><p><code>Set&lt;String&gt;</code>=<code>∅</code>，日志内容（级别后面）关键词</p><h3 id="wings-slardar-monitor-log-default-charset" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-log-default-charset" aria-hidden="true">#</a> wings.slardar.monitor.log.default.charset</h3><p><code>String</code>=<code>UTF8</code>，日志字符集</p><h3 id="wings-slardar-monitor-log-default-clean" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-log-default-clean" aria-hidden="true">#</a> wings.slardar.monitor.log.default.clean</h3><p><code>Integer</code>=<code>30</code>，清除N天以上的扫描文件，-1 表示不清理</p><h3 id="wings-slardar-monitor-log-console" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-log-console" aria-hidden="true">#</a> wings.slardar.monitor.log.console</h3><p><code>Map&lt;String, LogMetric.Rule&gt;</code>，对console输出监控</p><ul><li><code>file</code>=<code>${wings.console.out}</code></li><li><code>level</code>=<code>&#39;WARNING&#39;</code></li><li><code>keyword</code>=<code>&#39;reflective access&#39;</code></li></ul><h3 id="wings-slardar-monitor-view-enable" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-view-enable" aria-hidden="true">#</a> wings.slardar.monitor.view.enable</h3><p><code>Boolean</code>=<code>true</code>，是否开启警报文件查看器</p><h3 id="wings-slardar-monitor-view-mapping" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-view-mapping" aria-hidden="true">#</a> wings.slardar.monitor.view.mapping</h3><p><code>String</code>=<code>/api/log/warn-view.htm</code>，UrlMapping，GET请求，仅一个id参数</p><h3 id="wings-slardar-monitor-view-alive" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-view-alive" aria-hidden="true">#</a> wings.slardar.monitor.view.alive</h3><p><code>Duration</code>=<code>36H</code>，默认存活时间</p><h3 id="wings-slardar-monitor-view-length" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-view-length" aria-hidden="true">#</a> wings.slardar.monitor.view.length</h3><p><code>DataSize</code>=<code>1MB</code>，默认输出日志前多少byte，日志中不要记录敏感信息</p><h3 id="wings-slardar-monitor-view-domain" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-view-domain" aria-hidden="true">#</a> wings.slardar.monitor.view.domain</h3><p><code>String</code>=<code>http://${server.address:localhost}:${server.port:80}</code>，外部访问的主机,ip等</p><h3 id="wings-slardar-monitor-view-ignore" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-view-ignore" aria-hidden="true">#</a> wings.slardar.monitor.view.ignore</h3><p><code>Map&lt;String, String&gt;</code>，日志中可以忽略警报的字符串</p><ul><li><code>JacksonKotlin</code>=<code>com.fasterxml.jackson.module:jackson-module-kotlin</code></li><li><code>CP-Subsystem</code>=<code>CP Subsystem is not enabled</code></li><li><code>Swagger-DataTypeClass</code>=<code>dataTypeClass: class java.lang.Void</code></li><li><code>AutoLog-Switch</code>=<code>Auto Switch the following Appender Level to</code></li><li><code>No-MessageSource</code>=<code>not found for MessageSource</code></li><li><code>Jpa-Persistence</code>=<code>javax.persistence.spi::No valid providers found</code></li><li><code>UT005071-CONNECT</code>=<code>UT005071: Undertow request failed HttpServerExchange{ CONNECT</code></li></ul><h3 id="wings-slardar-monitor-ding-notice" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-ding-notice" aria-hidden="true">#</a> wings.slardar.monitor.ding-notice</h3><p><code>String</code>=<code>monitor</code>，默认使用钉钉机器人通知，使用的key为<code>monitor</code>， 详见wings-dingnotice-79.properties熟悉</p><h2 id="_3k-7-wings-okhttp-79-properties" tabindex="-1"><a class="header-anchor" href="#_3k-7-wings-okhttp-79-properties" aria-hidden="true">#</a> 3K.7.wings-okhttp-79.properties</h2>',143),h={href:"https://docs.spring.io/spring-boot/docs/2.7.7/reference/htmlsingle/#boot-features-resttemplate-customization",target:"_blank",rel:"noopener noreferrer"},g=a('<h3 id="wings-slardar-okhttp-timeout-conn" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-timeout-conn" aria-hidden="true">#</a> wings.slardar.okhttp.timeout-conn</h3><p><code>Integer</code>=<code>60</code>，链接超时秒数</p><h3 id="wings-slardar-okhttp-timeout-read" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-timeout-read" aria-hidden="true">#</a> wings.slardar.okhttp.timeout-read</h3><p><code>Integer</code>=<code>180</code>，读取超时秒数</p><h3 id="wings-slardar-okhttp-timeout-write" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-timeout-write" aria-hidden="true">#</a> wings.slardar.okhttp.timeout-write</h3><p><code>Integer</code>=<code>300</code>，写入超时秒数</p><h3 id="wings-slardar-okhttp-ping-interval" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-ping-interval" aria-hidden="true">#</a> wings.slardar.okhttp.ping-interval</h3><p><code>Integer</code>=<code>0</code>，ping的间隔秒数，<code>0</code>为关闭</p><h3 id="wings-slardar-okhttp-cache-megabyte" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-cache-megabyte" aria-hidden="true">#</a> wings.slardar.okhttp.cache-megabyte</h3><p><code>Integer</code>=<code>0</code>，缓存大小<code>Mb</code>，<code>0</code>表示不缓存</p><h3 id="wings-slardar-okhttp-cache-directory" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-cache-directory" aria-hidden="true">#</a> wings.slardar.okhttp.cache-directory</h3><p><code>File</code>，缓存目录，默认在temp下创建 <code>wings-okhttp-cache</code></p><h3 id="wings-slardar-okhttp-follow-redirect-ssl" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-follow-redirect-ssl" aria-hidden="true">#</a> wings.slardar.okhttp.follow-redirect-ssl</h3><p><code>Boolean</code>=<code>true</code>，是否跟着跳转</p><h3 id="wings-slardar-okhttp-follow-redirect" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-follow-redirect" aria-hidden="true">#</a> wings.slardar.okhttp.follow-redirect</h3><p><code>Boolean</code>=<code>true</code>，是否跟着跳转</p><h3 id="wings-slardar-okhttp-retry-failure" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-retry-failure" aria-hidden="true">#</a> wings.slardar.okhttp.retry-failure</h3><p><code>Boolean</code>=<code>true</code>，conn失败是否重试</p><h3 id="wings-slardar-okhttp-max-idle" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-max-idle" aria-hidden="true">#</a> wings.slardar.okhttp.max-idle</h3><p><code>Integer</code>=<code>5</code>，最大空闲conn数量</p><h3 id="wings-slardar-okhttp-keep-alive" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-keep-alive" aria-hidden="true">#</a> wings.slardar.okhttp.keep-alive</h3><p><code>Integer</code>=<code>300</code>，keep-alive秒数</p><h3 id="wings-slardar-okhttp-ssl-trust-all" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-ssl-trust-all" aria-hidden="true">#</a> wings.slardar.okhttp.ssl-trust-all</h3><p><code>Boolean</code>=<code>true</code>，是否信任所有证书</p><h3 id="wings-slardar-okhttp-host-cookie" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-host-cookie" aria-hidden="true">#</a> wings.slardar.okhttp.host-cookie</h3><p><code>Boolean</code>=<code>true</code>，是否以host为单位保留cookie</p><h3 id="wings-slardar-okhttp-redirect-nop" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-redirect-nop" aria-hidden="true">#</a> wings.slardar.okhttp.redirect-nop</h3><p><code>Boolean</code>=<code>false</code>，是否在follow-redirect时，暂时不follow</p><h2 id="_3k-8-wings-overload-79-properties" tabindex="-1"><a class="header-anchor" href="#_3k-8-wings-overload-79-properties" aria-hidden="true">#</a> 3K.8.wings-overload-79.properties</h2><p>过载保护过滤器，如何处理快请求和慢响应。默认关闭。</p><h3 id="wings-slardar-overload-logger-interval" tabindex="-1"><a class="header-anchor" href="#wings-slardar-overload-logger-interval" aria-hidden="true">#</a> wings.slardar.overload.logger-interval</h3><p><code>Long</code>=<code>5000</code>，日志的记录间隔（毫秒）</p><h3 id="wings-slardar-overload-fallback-code" tabindex="-1"><a class="header-anchor" href="#wings-slardar-overload-fallback-code" aria-hidden="true">#</a> wings.slardar.overload.fallback-code</h3><p><code>Integer</code>=<code>200</code>，过载熔断时，返回的status code</p><h3 id="wings-slardar-overload-fallback-body" tabindex="-1"><a class="header-anchor" href="#wings-slardar-overload-fallback-body" aria-hidden="true">#</a> wings.slardar.overload.fallback-body</h3><p><code>String</code>=<code>{&quot;success&quot;:false,&quot;message&quot;:&quot;Request Too Busy, Take A Coffee&quot;}</code>，过载熔断时，默认返回的http body</p><h3 id="wings-slardar-overload-request-capacity" tabindex="-1"><a class="header-anchor" href="#wings-slardar-overload-request-capacity" aria-hidden="true">#</a> wings.slardar.overload.request-capacity</h3><p><code>Integer</code>=<code>9000</code>，快请求容量，注意，共享ip的容易误判。</p><ul><li><code>&lt;0</code> - 无限制，处理中的的最大请求数量</li><li><code>&gt;0</code> - 用户根据压力测试结果推算的值</li><li><code>0</code> - 自动调整，初始值为 cpu核心数 x 300</li></ul><h3 id="wings-slardar-overload-request-interval" tabindex="-1"><a class="header-anchor" href="#wings-slardar-overload-request-interval" aria-hidden="true">#</a> wings.slardar.overload.request-interval</h3><p><code>Long</code>=<code>1000</code>，在<code>interval</code>毫秒内，同ip的处理中的请求不能超过<code>calmdown</code>个。<code>&lt;=0</code>表示无限制</p><h3 id="wings-slardar-overload-request-calmdown" tabindex="-1"><a class="header-anchor" href="#wings-slardar-overload-request-calmdown" aria-hidden="true">#</a> wings.slardar.overload.request-calmdown</h3><p><code>Integer</code>=<code>50</code>，在<code>interval</code>毫秒内，同ip的处理中的请求不能超过<code>calmdown</code>个。<code>&lt;=0</code>表示无限制</p><h3 id="wings-slardar-overload-request-permit" tabindex="-1"><a class="header-anchor" href="#wings-slardar-overload-request-permit" aria-hidden="true">#</a> wings.slardar.overload.request-permit</h3><p><code>Map&lt;String, String&gt;</code>，请求ip白名单，分号分割，前部匹配</p><ul><li><code>local-127</code>=<code>127.</code></li><li><code>local-192</code>=<code>192.</code></li></ul><h3 id="wings-slardar-overload-response-warn-slow" tabindex="-1"><a class="header-anchor" href="#wings-slardar-overload-response-warn-slow" aria-hidden="true">#</a> wings.slardar.overload.response-warn-slow</h3><p><code>Long</code>=<code>5000</code>，慢响应（毫秒数），超过时，记录WARN日志，<code>&lt;0</code>表示关闭</p><h3 id="wings-slardar-overload-response-info-stat" tabindex="-1"><a class="header-anchor" href="#wings-slardar-overload-response-info-stat" aria-hidden="true">#</a> wings.slardar.overload.response-info-stat</h3><p><code>Long</code>=<code>1000</code>，每多少个请求记录一次INFO日志，<code>&lt;0</code>表示关闭</p><h2 id="_3k-9-wings-righter-79-properties" tabindex="-1"><a class="header-anchor" href="#_3k-9-wings-righter-79-properties" aria-hidden="true">#</a> 3K.9.wings-righter-79.properties</h2><p>防篡改，编辑越权，设置</p><h3 id="wings-slardar-righter-header" tabindex="-1"><a class="header-anchor" href="#wings-slardar-righter-header" aria-hidden="true">#</a> wings.slardar.righter.header</h3><p><code>String</code>=<code>Right-Editor</code>，埋点header中的key</p><h3 id="wings-slardar-righter-http-status" tabindex="-1"><a class="header-anchor" href="#wings-slardar-righter-http-status" aria-hidden="true">#</a> wings.slardar.righter.http-status</h3><p><code>Integer</code>=<code>409</code>，告知编辑越权的http-status</p><h3 id="wings-slardar-righter-content-type" tabindex="-1"><a class="header-anchor" href="#wings-slardar-righter-content-type" aria-hidden="true">#</a> wings.slardar.righter.content-type</h3><p><code>String</code>=<code>application/json;charset=UTF-8</code>，告知编辑越权的content-type</p><h3 id="wings-slardar-righter-response-body" tabindex="-1"><a class="header-anchor" href="#wings-slardar-righter-response-body" aria-hidden="true">#</a> wings.slardar.righter.response-body</h3><p><code>String</code>=<code>{&quot;success&quot;:false,&quot;message&quot;:&quot;forgery of editor&quot;}</code>，告知编辑越权的回复文本内容</p><h2 id="_3k-a-wings-swagger-79-properties" tabindex="-1"><a class="header-anchor" href="#_3k-a-wings-swagger-79-properties" aria-hidden="true">#</a> 3K.A.wings-swagger-79.properties</h2><p>Swagger文档设置</p><h3 id="wings-slardar-swagger-title" tabindex="-1"><a class="header-anchor" href="#wings-slardar-swagger-title" aria-hidden="true">#</a> wings.slardar.swagger.title</h3><p><code>String</code>=<code>${spring.application.name:wings-default}</code></p><h3 id="wings-slardar-swagger-description" tabindex="-1"><a class="header-anchor" href="#wings-slardar-swagger-description" aria-hidden="true">#</a> wings.slardar.swagger.description</h3><p><code>String</code>=<code>user=${user.name}, os=${os.name}, tz=${user.timezone}, branch=${git.branch}, commit=${git.commit.id.full}</code></p><h3 id="wings-slardar-swagger-version" tabindex="-1"><a class="header-anchor" href="#wings-slardar-swagger-version" aria-hidden="true">#</a> wings.slardar.swagger.version</h3><p><code>String</code>=<code>${build.version} ${build.time}</code></p><h3 id="wings-slardar-swagger-param" tabindex="-1"><a class="header-anchor" href="#wings-slardar-swagger-param" aria-hidden="true">#</a> wings.slardar.swagger.param</h3><p><code>Map&lt;String, EnabledParameter&gt;</code>，key采用java命名,作为<code>$ref</code>使用，in支持<code>cookie</code>|<code>header</code>|<code>query</code>|<code>path</code></p><ul><li><code>headLanguage.enable</code>=<code>false</code></li><li><code>headLanguage.name</code>=<code>Accept-Language</code></li><li><code>headLanguage.in</code>=<code>header</code></li><li><code>headLanguage.description</code>=<code>用户语言</code></li><li><code>headLanguage.example</code>=<code>zh-CN</code></li><li><code>headZoneId.enable</code>=<code>true</code></li><li><code>headZoneId.name</code>=<code>Zone-Id</code></li><li><code>headZoneId.in</code>=<code>header</code></li><li><code>headZoneId.description</code>=<code>用户时区</code></li><li><code>headZoneId.example</code>=<code>Asia/Shanghai</code></li></ul><h3 id="wings-slardar-swagger-accept" tabindex="-1"><a class="header-anchor" href="#wings-slardar-swagger-accept" aria-hidden="true">#</a> wings.slardar.swagger.accept</h3><p><code>Map&lt;String, String&gt;</code>，对Accept/MediaType复制，以出现多个请求方式</p><ul><li><code>text/plain</code>=<code>*/*</code></li><li><code>application/json</code>=<code>*/*</code></li></ul><h3 id="wings-slardar-swagger-flat-pagequery" tabindex="-1"><a class="header-anchor" href="#wings-slardar-swagger-flat-pagequery" aria-hidden="true">#</a> wings.slardar.swagger.flat-pagequery</h3><p><code>Boolean</code>=<code>true</code>，是否把PageQuery扁平化，作为querystring参数</p><h2 id="_3k-b-wings-dingnotice-79-properties" tabindex="-1"><a class="header-anchor" href="#_3k-b-wings-dingnotice-79-properties" aria-hidden="true">#</a> 3K.B.wings-dingnotice-79.properties</h2><h3 id="wings-slardar-ding-notice-default-access-token" tabindex="-1"><a class="header-anchor" href="#wings-slardar-ding-notice-default-access-token" aria-hidden="true">#</a> wings.slardar.ding-notice.default.access-token</h3><p><code>String</code>=<code>∅</code>，警报时，使用钉钉通知的access_token，<code>空</code>表示不使用</p><h3 id="wings-slardar-ding-notice-default-digest-secret" tabindex="-1"><a class="header-anchor" href="#wings-slardar-ding-notice-default-digest-secret" aria-hidden="true">#</a> wings.slardar.ding-notice.default.digest-secret</h3><p><code>String</code>=<code>∅</code>，消息签名，<code>空</code>表示不使用</p><h3 id="wings-slardar-ding-notice-default-notice-keyword" tabindex="-1"><a class="header-anchor" href="#wings-slardar-ding-notice-default-notice-keyword" aria-hidden="true">#</a> wings.slardar.ding-notice.default.notice-keyword</h3><p><code>String</code>=<code>WARNING</code>，自定义关键词，消息中至少包含1个关键词才可以发送成功。</p><h3 id="wings-slardar-ding-notice-default-notice-mobiles" tabindex="-1"><a class="header-anchor" href="#wings-slardar-ding-notice-default-notice-mobiles" aria-hidden="true">#</a> wings.slardar.ding-notice.default.notice-mobiles</h3><p><code>Set&lt;String&gt;</code>，被通知人的手机号，非群内成员手机号会被脱敏。会自动添加到正文@155xxxx</p><h3 id="wings-slardar-ding-notice-default-webhook-url" tabindex="-1"><a class="header-anchor" href="#wings-slardar-ding-notice-default-webhook-url" aria-hidden="true">#</a> wings.slardar.ding-notice.default.webhook-url</h3><p><code>String</code>=<code>https://oapi.dingtalk.com/robot/send?access_token=</code>，钉钉通知的URL模板</p><h3 id="wings-slardar-ding-notice-default-msg-type" tabindex="-1"><a class="header-anchor" href="#wings-slardar-ding-notice-default-msg-type" aria-hidden="true">#</a> wings.slardar.ding-notice.default.msg-type</h3><p><code>String</code>=<code>markdown</code>，消息类型，支持 text, markdown</p>',89);function p(w,u){const d=n("ExternalLinkIcon");return o(),i("div",null,[l,e("p",null,[e("a",h,[s("SpringBoot RestTemplate定制"),c(d)])]),g])}const f=r(t,[["render",p],["__file","3k-prop-function.html.vue"]]);export{f as default};
