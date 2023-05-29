import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as s,b as e,e as t,d as n,f as a}from"./app-76302e33.js";const c={},l=a('<h1 id="_3k-webfun-properties" tabindex="-1"><a class="header-anchor" href="#_3k-webfun-properties" aria-hidden="true">#</a> 3K.WebFun Properties</h1><p>Properties of Spring Web enhancements in Slardar.</p><h2 id="_3k-1-wings-cache-79-properties" tabindex="-1"><a class="header-anchor" href="#_3k-1-wings-cache-79-properties" aria-hidden="true">#</a> 3K.1.wings-cache-79.properties</h2><p>LRU (Least Recently Used) default, unit is second, 0=infinitely</p><h3 id="wings-slardar-cache-primary" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cache-primary" aria-hidden="true">#</a> wings.slardar.cache.primary</h3><p><code>String</code>=<code>MemoryCacheManager</code>, which CacheManager is primary</p><ul><li><code>MemoryCacheManager</code> - Cache2k Jvm cache</li><li><code>ServerCacheManager</code> - Hazelcast distributed cache</li></ul><h3 id="wings-slardar-cache-expand" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cache-expand" aria-hidden="true">#</a> wings.slardar.cache.expand</h3><p><code>Boolean</code>=<code>true</code>, whether to Resolve the cache name, that is, to append the concrete class name</p><h3 id="wings-slardar-cache-null-size" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cache-null-size" aria-hidden="true">#</a> wings.slardar.cache.null-size</h3><p><code>Integer</code>=<code>1000</code>, in principle, null is not cached. However, it can be handled uniformly.</p><ul><li><code>positive</code> - cache size</li><li><code>0</code> - do not cache null</li><li><code>negative</code> - no uniform processing</li></ul><h3 id="wings-slardar-cache-null-live-300" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cache-null-live-300" aria-hidden="true">#</a> wings.slardar.cache.null-live=300</h3><p><code>Integer</code>=<code>300</code>, default 300s</p><h3 id="wings-slardar-cache-common" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cache-common" aria-hidden="true">#</a> wings.slardar.cache.common</h3><p>default configuration other than level</p><ul><li><code>max-live</code>=<code>3600</code>, expireAfterWrite(Time To Live)</li><li><code>max-idle</code>=<code>0</code>, expireAfterAccess(Time To Idle)</li><li><code>max-size</code>=<code>50000</code>, cache size</li></ul><h3 id="wings-slardar-cache-level" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cache-level" aria-hidden="true">#</a> wings.slardar.cache.level</h3><p>Note, Server using hazelcast will ignore the common setting to avoid non-cache IMap errors. level setting, you need to use wildcard like <code>program~*</code>, see WingsCache naming and separator</p><ul><li><code>wings.slardar.cache.level.program.max-live</code>=<code>0</code></li><li><code>wings.slardar.cache.level.program.max-idle</code>=<code>0</code></li><li><code>wings.slardar.cache.level.program.max-size</code>=<code>0</code></li><li><code>wings.slardar.cache.level.general.max-live</code>=<code>86400</code></li><li><code>wings.slardar.cache.level.general.max-idle</code>=<code>0</code></li><li><code>wings.slardar.cache.level.general.max-size</code>=<code>0</code></li><li><code>wings.slardar.cache.level.service.max-live</code>=<code>3600</code></li><li><code>wings.slardar.cache.level.service.max-idle</code>=<code>0</code></li><li><code>wings.slardar.cache.level.service.max-size</code>=<code>0</code></li><li><code>wings.slardar.cache.level.session.max-live</code>=<code>600</code></li><li><code>wings.slardar.cache.level.session.max-idle</code>=<code>0</code></li><li><code>wings.slardar.cache.level.session.max-size</code>=<code>0</code></li></ul><h2 id="_3k-2-wings-debounce-79-properties" tabindex="-1"><a class="header-anchor" href="#_3k-2-wings-debounce-79-properties" aria-hidden="true">#</a> 3K.2.wings-debounce-79.properties</h2><p>backend debounce</p><h3 id="wings-slardar-debounce-capacity" tabindex="-1"><a class="header-anchor" href="#wings-slardar-debounce-capacity" aria-hidden="true">#</a> wings.slardar.debounce.capacity</h3><p><code>Integer</code>=<code>10000</code>, waiting capacity.</p><h3 id="wings-slardar-debounce-max-wait" tabindex="-1"><a class="header-anchor" href="#wings-slardar-debounce-max-wait" aria-hidden="true">#</a> wings.slardar.debounce.max-wait</h3><p><code>Integer</code>=<code>300</code>, max waiting seconds.</p><h3 id="wings-slardar-debounce-http-status" tabindex="-1"><a class="header-anchor" href="#wings-slardar-debounce-http-status" aria-hidden="true">#</a> wings.slardar.debounce.http-status</h3><p><code>Integer</code>=<code>208</code>, http-status of response.</p><h3 id="wings-slardar-debounce-content-type" tabindex="-1"><a class="header-anchor" href="#wings-slardar-debounce-content-type" aria-hidden="true">#</a> wings.slardar.debounce.content-type</h3><p><code>String</code>=<code>application/json;charset=UTF-8</code>, content-type of response.</p><h3 id="wings-slardar-debounce-response-body" tabindex="-1"><a class="header-anchor" href="#wings-slardar-debounce-response-body" aria-hidden="true">#</a> wings.slardar.debounce.response-body</h3><p><code>String</code>=<code>{&quot;success&quot;:false,&quot;message&quot;:&quot;debounced&quot;}</code>, body of response.</p><h2 id="_3k-3-wings-domain-extend-79-properties" tabindex="-1"><a class="header-anchor" href="#_3k-3-wings-domain-extend-79-properties" aria-hidden="true">#</a> 3K.3.wings-domain-extend-79.properties</h2><p>Host Extend and URL Override.</p><h3 id="wings-slardar-domain-extend-cache-size" tabindex="-1"><a class="header-anchor" href="#wings-slardar-domain-extend-cache-size" aria-hidden="true">#</a> wings.slardar.domain-extend.cache-size</h3><p><code>Integer</code>=<code>4096</code>, cache size of matched and unmatched url, caution when RESTful</p><h3 id="wings-slardar-domain-extend-prefix" tabindex="-1"><a class="header-anchor" href="#wings-slardar-domain-extend-prefix" aria-hidden="true">#</a> wings.slardar.domain-extend.prefix</h3><p><code>String</code>=<code>/domain/</code>, the uniform domain prefix of the mapping and resource Url.</p><h3 id="wings-slardar-domain-extend-host" tabindex="-1"><a class="header-anchor" href="#wings-slardar-domain-extend-host" aria-hidden="true">#</a> wings.slardar.domain-extend.host</h3><p><code>Map&lt;String, Set&lt;String&gt;&gt;</code>, host mapping</p><p>FilenameUtils.wildcardMatch, eg. <code>trydofor</code>=<code>*.trydofor.com, trydofor.com</code></p><h3 id="wings-slardar-domain-extend-other-url" tabindex="-1"><a class="header-anchor" href="#wings-slardar-domain-extend-other-url" aria-hidden="true">#</a> wings.slardar.domain-extend.other-url</h3><p><code>List&lt;String&gt;</code>, specified domain url that is not automatically detected.</p><p>ant match style, eg. <code>other-url</code>=<code>/trydofor/b/c.html</code></p><h2 id="_3k-4-wings-doublekill-79-properties" tabindex="-1"><a class="header-anchor" href="#_3k-4-wings-doublekill-79-properties" aria-hidden="true">#</a> 3K.4.wings-doublekill-79.properties</h2><p>config for double-kill, DoubleKillExceptionResolver, support <code>{key}</code> and <code>{ttl}</code></p><h3 id="wings-slardar-double-kill-http-status" tabindex="-1"><a class="header-anchor" href="#wings-slardar-double-kill-http-status" aria-hidden="true">#</a> wings.slardar.double-kill.http-status</h3><p><code>Integer</code>=<code>202</code>, http-status of response</p><h3 id="wings-slardar-double-kill-content-type" tabindex="-1"><a class="header-anchor" href="#wings-slardar-double-kill-content-type" aria-hidden="true">#</a> wings.slardar.double-kill.content-type</h3><p><code>String</code>=<code>application/json;charset=UTF-8</code>, content-type of response</p><h3 id="wings-slardar-double-kill-response-body" tabindex="-1"><a class="header-anchor" href="#wings-slardar-double-kill-response-body" aria-hidden="true">#</a> wings.slardar.double-kill.response-body</h3><p><code>String</code>=<code>{&quot;success&quot;:false,&quot;message&quot;:&quot;Request Too Busy, Take A Coffee&quot;, &quot;data&quot;:{&quot;key&quot;:&quot;{key}&quot;,&quot;ttl&quot;:{ttl}}}</code>, body of response.</p><h2 id="_3k-5-wings-firstblood-79-properties" tabindex="-1"><a class="header-anchor" href="#_3k-5-wings-firstblood-79-properties" aria-hidden="true">#</a> 3K.5.wings-firstblood-79.properties</h2><p>Resource protection features, such as CAPTCHA</p><h3 id="wings-slardar-first-blood-client-ticket-key" tabindex="-1"><a class="header-anchor" href="#wings-slardar-first-blood-client-ticket-key" aria-hidden="true">#</a> wings.slardar.first-blood.client-ticket-key</h3><p><code>String</code>=<code>Client-Ticket</code>, key of the header and session used to identify the user.</p><h3 id="wings-slardar-first-blood-quest-captcha-key" tabindex="-1"><a class="header-anchor" href="#wings-slardar-first-blood-quest-captcha-key" aria-hidden="true">#</a> wings.slardar.first-blood.quest-captcha-key</h3><p><code>String</code>=<code>quest-captcha-image</code>, key to generate image CAPTCHA, timestamp or specific prefix.</p><h3 id="wings-slardar-first-blood-check-captcha-key" tabindex="-1"><a class="header-anchor" href="#wings-slardar-first-blood-check-captcha-key" aria-hidden="true">#</a> wings.slardar.first-blood.check-captcha-key</h3><p><code>String</code>=<code>check-captcha-image</code>, key to verify image CAPTCHA, client input the code.</p><h3 id="wings-slardar-first-blood-base64-captcha-key" tabindex="-1"><a class="header-anchor" href="#wings-slardar-first-blood-base64-captcha-key" aria-hidden="true">#</a> wings.slardar.first-blood.base64-captcha-key</h3><p><code>String</code>=<code>base64</code>, key to return image in base64, used in fresh-captcha-image=base64+timestamp</p><h3 id="wings-slardar-first-blood-base64-captcha-body" tabindex="-1"><a class="header-anchor" href="#wings-slardar-first-blood-base64-captcha-body" aria-hidden="true">#</a> wings.slardar.first-blood.base64-captcha-body</h3><p><code>String</code>=<code>data:image/jpeg;base64,{base64}</code></p><p>format of returned base64 image, with <code>{base64}</code> placeholder. The default configuration will output <code>data:image/jpeg;base64,/9j/4AAQSkZ.....</code></p><h3 id="wings-slardar-first-blood-chinese-captcha" tabindex="-1"><a class="header-anchor" href="#wings-slardar-first-blood-chinese-captcha" aria-hidden="true">#</a> wings.slardar.first-blood.chinese-captcha</h3><p><code>Boolean</code>=<code>true</code>, whether to use Chinese char.</p><h3 id="wings-slardar-first-blood-case-ignore" tabindex="-1"><a class="header-anchor" href="#wings-slardar-first-blood-case-ignore" aria-hidden="true">#</a> wings.slardar.first-blood.case-ignore</h3><p><code>Boolean</code>=<code>true</code>, whether to ignore case.</p><h3 id="wings-slardar-first-blood-captcha-prefix" tabindex="-1"><a class="header-anchor" href="#wings-slardar-first-blood-captcha-prefix" aria-hidden="true">#</a> wings.slardar.first-blood.captcha-prefix</h3><p><code>String</code>=<code>image</code>, scene prefix for image graphic captcha.</p><h3 id="wings-slardar-first-blood-http-status" tabindex="-1"><a class="header-anchor" href="#wings-slardar-first-blood-http-status" aria-hidden="true">#</a> wings.slardar.first-blood.http-status</h3><p><code>Integer</code>=<code>406</code>, http-status of response.</p><h3 id="wings-slardar-first-blood-content-type" tabindex="-1"><a class="header-anchor" href="#wings-slardar-first-blood-content-type" aria-hidden="true">#</a> wings.slardar.first-blood.content-type</h3><p><code>String</code>=<code>application/json;charset=UTF-8</code>, content-type of response.</p><h3 id="wings-slardar-first-blood-response-body" tabindex="-1"><a class="header-anchor" href="#wings-slardar-first-blood-response-body" aria-hidden="true">#</a> wings.slardar.first-blood.response-body</h3><p><code>String</code>=<code>{&quot;success&quot;:false,&quot;message&quot;:&quot;need a verify code&quot;}</code>, body of response.</p><h2 id="_3k-6-wings-monitor-79-properties" tabindex="-1"><a class="header-anchor" href="#_3k-6-wings-monitor-79-properties" aria-hidden="true">#</a> 3K.6.wings-monitor-79.properties</h2><p>Setting of app builtin simple monitoring, <code>-1</code> in the threshold value means ignore.</p><h3 id="wings-slardar-monitor-cron" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-cron" aria-hidden="true">#</a> wings.slardar.monitor.cron</h3><p><code>String</code>=<code>0 */10 * * * ?</code></p><p>Monitor its own cron, <code>-</code> means stop this cron, default 10 minutes.</p><h3 id="wings-slardar-monitor-hook" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-hook" aria-hidden="true">#</a> wings.slardar.monitor.hook</h3><p><code>Boolean</code>=<code>true</code>, whether to send notice for the start and stop of its own jvm hook</p><h3 id="wings-slardar-monitor-jvm-system-cent" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-jvm-system-cent" aria-hidden="true">#</a> wings.slardar.monitor.jvm.system-cent</h3><p><code>Integer</code>=<code>90</code>, alarm threshold, system Cpu Load with percentage to the entire system with all cores, range <code>[0, 100]</code></p><h3 id="wings-slardar-monitor-jvm-system-load" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-jvm-system-load" aria-hidden="true">#</a> wings.slardar.monitor.jvm.system-load</h3><p><code>Integer</code>=<code>-1</code>, System Cpu Load without percentage, range <code>[0, 100*cores]</code></p><h3 id="wings-slardar-monitor-jvm-process-cent" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-jvm-process-cent" aria-hidden="true">#</a> wings.slardar.monitor.jvm.process-cent</h3><p><code>Integer</code>=<code>-1</code>, process system Cpu Load with percentage to the entire system with all cores, range <code>[0, 100]</code></p><h3 id="wings-slardar-monitor-jvm-process-load" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-jvm-process-load" aria-hidden="true">#</a> wings.slardar.monitor.jvm.process-load</h3><p><code>Integer</code>=<code>150</code>, process Cpu Load without percentage, range <code>[0, 100*cores]</code></p><h3 id="wings-slardar-monitor-jvm-memory-load" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-jvm-memory-load" aria-hidden="true">#</a> wings.slardar.monitor.jvm.memory-load</h3><p><code>Integer</code>=<code>85</code>, process Mem Load, range <code>[0,100]</code></p><h3 id="wings-slardar-monitor-jvm-thread-count" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-jvm-thread-count" aria-hidden="true">#</a> wings.slardar.monitor.jvm.thread-count</h3><p><code>Integer</code>=<code>-1</code>, total threads in jvm.</p><p>formula: threads = <code>Available Cores</code> / (1 - <code>Blocking Coefficient</code>), <code>Blocking Coefficient</code> = Blocking time / (blocking time + calculation time)</p><h3 id="wings-slardar-monitor-jvm-thread-load" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-jvm-thread-load" aria-hidden="true">#</a> wings.slardar.monitor.jvm.thread-load</h3><p><code>Integer</code>=<code>50</code>, total jvm threads divided by total cores</p><h3 id="wings-slardar-monitor-log-default-enable" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-log-default-enable" aria-hidden="true">#</a> wings.slardar.monitor.log.default.enable</h3><p><code>Boolean</code>=<code>true</code>, whether to turn on, log file monitoring. <code>default</code> provides default value for other rules.</p><h3 id="wings-slardar-monitor-log-default-file" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-log-default-file" aria-hidden="true">#</a> wings.slardar.monitor.log.default.file</h3><p><code>String</code>=<code>${logging.file.name}</code></p><p>Monitored log file, no monitoring if file not found.</p><h3 id="wings-slardar-monitor-log-default-min-grow" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-log-default-min-grow" aria-hidden="true">#</a> wings.slardar.monitor.log.default.min-grow</h3><p><code>DataSize</code>=<code>-1</code>, min growth per scan cycle, can be inherited</p><h3 id="wings-slardar-monitor-log-default-max-grow" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-log-default-max-grow" aria-hidden="true">#</a> wings.slardar.monitor.log.default.max-grow</h3><p><code>DataSize</code>=<code>10MB</code>, max growth per scan cycle, can be inherited</p><h3 id="wings-slardar-monitor-log-default-max-size" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-log-default-max-size" aria-hidden="true">#</a> wings.slardar.monitor.log.default.max-size</h3><p><code>DataSize</code>=<code>=1GB</code>, max file size of log (archived daily), can be inherited</p><h3 id="wings-slardar-monitor-log-default-bound" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-log-default-bound" aria-hidden="true">#</a> wings.slardar.monitor.log.default.bound</h3><p><code>Integer</code>=<code>40</code>, approximate separator of log header and content, separating byte numbers (char numbers if ASCII)</p><h3 id="wings-slardar-monitor-log-default-level" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-log-default-level" aria-hidden="true">#</a> wings.slardar.monitor.log.default.level</h3><p><code>Set&lt;String&gt;</code>=<code>&#39; WARN &#39;,&#39; ERROR &#39;</code>, log level keyword.</p><p>keywords will automatically trim a pair of leading and trailing quotes when executed. For example, <code>&#39; ERROR &#39;</code> becomes <code>ERROR</code>, <code>&#39;&#39; WARN &#39;&#39;</code> becomes <code>&#39; WARN &#39;</code>.</p><h3 id="wings-slardar-monitor-log-default-keyword" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-log-default-keyword" aria-hidden="true">#</a> wings.slardar.monitor.log.default.keyword</h3><p><code>Set&lt;String&gt;</code>=<code>∅</code>, log content (after level) keywords</p><h3 id="wings-slardar-monitor-log-default-charset" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-log-default-charset" aria-hidden="true">#</a> wings.slardar.monitor.log.default.charset</h3><p><code>String</code>=<code>UTF8</code>, log charset</p><h3 id="wings-slardar-monitor-log-default-clean" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-log-default-clean" aria-hidden="true">#</a> wings.slardar.monitor.log.default.clean</h3><p><code>Integer</code>=<code>30</code>, delete scanned files older than N days, <code>-1</code> means no cleaning</p><h3 id="wings-slardar-monitor-log-console" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-log-console" aria-hidden="true">#</a> wings.slardar.monitor.log.console</h3><p><code>Map&lt;String, LogMetric.Rule&gt;</code>, monitor console output.</p><ul><li><code>file</code>=<code>${wings.console.out}</code></li><li><code>level</code>=<code>&#39;WARNING&#39;</code></li><li><code>keyword</code>=<code>&#39;reflective access&#39;</code></li></ul><h3 id="wings-slardar-monitor-view-enable" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-view-enable" aria-hidden="true">#</a> wings.slardar.monitor.view.enable</h3><p><code>Boolean</code>=<code>true</code>, whether to enable the alert file viewer</p><h3 id="wings-slardar-monitor-view-mapping" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-view-mapping" aria-hidden="true">#</a> wings.slardar.monitor.view.mapping</h3><p><code>String</code>=<code>/api/log/warn-view.htm</code>, UrlMapping, GET request, one <code>id</code> parameter only.</p><h3 id="wings-slardar-monitor-view-alive" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-view-alive" aria-hidden="true">#</a> wings.slardar.monitor.view.alive</h3><p><code>Duration</code>=<code>36H</code>, default alive time.</p><h3 id="wings-slardar-monitor-view-length" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-view-length" aria-hidden="true">#</a> wings.slardar.monitor.view.length</h3><p><code>DataSize</code>=<code>1MB</code>, how many bytes before current log is output by default, do not record sensitive data in the log.</p><h3 id="wings-slardar-monitor-view-domain" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-view-domain" aria-hidden="true">#</a> wings.slardar.monitor.view.domain</h3><p><code>String</code>=<code>http://${server.address:localhost}:${server.port:80}</code>, host or ip for external access.</p><h3 id="wings-slardar-monitor-view-ignore" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-view-ignore" aria-hidden="true">#</a> wings.slardar.monitor.view.ignore</h3><p><code>Map&lt;String, String&gt;</code>, ignored alert string in logs.</p><ul><li><code>JacksonKotlin</code>=<code>com.fasterxml.jackson.module:jackson-module-kotlin</code></li><li><code>CP-Subsystem</code>=<code>CP Subsystem is not enabled</code></li><li><code>Swagger-DataTypeClass</code>=<code>dataTypeClass: class java.lang.Void</code></li><li><code>AutoLog-Switch</code>=<code>Auto Switch the following Appender Level to</code></li><li><code>No-MessageSource</code>=<code>not found for MessageSource</code></li><li><code>Jpa-Persistence</code>=<code>javax.persistence.spi::No valid providers found</code></li><li><code>UT005071-CONNECT</code>=<code>UT005071: Undertow request failed HttpServerExchange{ CONNECT</code></li></ul><h3 id="wings-slardar-monitor-ding-notice" tabindex="-1"><a class="header-anchor" href="#wings-slardar-monitor-ding-notice" aria-hidden="true">#</a> wings.slardar.monitor.ding-notice</h3><p><code>String</code>=<code>monitor</code>, use DingTalk bot by default with the key <code>monitor</code>. See wings-dingnotice-79.properties for details</p><h2 id="_3k-7-wings-okhttp-79-properties" tabindex="-1"><a class="header-anchor" href="#_3k-7-wings-okhttp-79-properties" aria-hidden="true">#</a> 3K.7.wings-okhttp-79.properties</h2>',140),h={href:"https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#io.rest-client.resttemplate.customization",target:"_blank",rel:"noopener noreferrer"},g=a('<h3 id="wings-slardar-okhttp-timeout-conn" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-timeout-conn" aria-hidden="true">#</a> wings.slardar.okhttp.timeout-conn</h3><p><code>Integer</code>=<code>60</code>, connect timeout in seconds.</p><h3 id="wings-slardar-okhttp-timeout-read" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-timeout-read" aria-hidden="true">#</a> wings.slardar.okhttp.timeout-read</h3><p><code>Integer</code>=<code>180</code>, read timeout in seconds.</p><h3 id="wings-slardar-okhttp-timeout-write" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-timeout-write" aria-hidden="true">#</a> wings.slardar.okhttp.timeout-write</h3><p><code>Integer</code>=<code>300</code>, write timeout in seconds.</p><h3 id="wings-slardar-okhttp-ping-interval" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-ping-interval" aria-hidden="true">#</a> wings.slardar.okhttp.ping-interval</h3><p><code>Integer</code>=<code>0</code>, ping interval in seconds, <code>0</code> means disable</p><h3 id="wings-slardar-okhttp-cache-megabyte" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-cache-megabyte" aria-hidden="true">#</a> wings.slardar.okhttp.cache-megabyte</h3><p><code>Integer</code>=<code>0</code>, cache size in <code>Mb</code>, <code>0</code> means disable</p><h3 id="wings-slardar-okhttp-cache-directory" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-cache-directory" aria-hidden="true">#</a> wings.slardar.okhttp.cache-directory</h3><p><code>File</code>, Cache directory, created under temp by default, <code>wings-okhttp-cache</code></p><h3 id="wings-slardar-okhttp-follow-redirect-ssl" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-follow-redirect-ssl" aria-hidden="true">#</a> wings.slardar.okhttp.follow-redirect-ssl</h3><p><code>Boolean</code>=<code>true</code>, whether to follow the https redirect.</p><h3 id="wings-slardar-okhttp-follow-redirect" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-follow-redirect" aria-hidden="true">#</a> wings.slardar.okhttp.follow-redirect</h3><p><code>Boolean</code>=<code>true</code>, whether to follow the http redirect.</p><h3 id="wings-slardar-okhttp-retry-failure" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-retry-failure" aria-hidden="true">#</a> wings.slardar.okhttp.retry-failure</h3><p><code>Boolean</code>=<code>true</code>, whether to retry if connect failed.</p><h3 id="wings-slardar-okhttp-max-idle" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-max-idle" aria-hidden="true">#</a> wings.slardar.okhttp.max-idle</h3><p><code>Integer</code>=<code>5</code>, max count of idle connection.</p><h3 id="wings-slardar-okhttp-keep-alive" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-keep-alive" aria-hidden="true">#</a> wings.slardar.okhttp.keep-alive</h3><p><code>Integer</code>=<code>300</code>, keep-alive in seconds.</p><h3 id="wings-slardar-okhttp-ssl-trust-all" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-ssl-trust-all" aria-hidden="true">#</a> wings.slardar.okhttp.ssl-trust-all</h3><p><code>Boolean</code>=<code>true</code>, whether to trust all ssl certs.</p><h3 id="wings-slardar-okhttp-host-cookie" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-host-cookie" aria-hidden="true">#</a> wings.slardar.okhttp.host-cookie</h3><p><code>Boolean</code>=<code>true</code>, whether to keep cookies by host.</p><h3 id="wings-slardar-okhttp-redirect-nop" tabindex="-1"><a class="header-anchor" href="#wings-slardar-okhttp-redirect-nop" aria-hidden="true">#</a> wings.slardar.okhttp.redirect-nop</h3><p><code>Boolean</code>=<code>false</code>, whether to temporarily do nothing when follow-redirect.</p><h2 id="_3k-8-wings-overload-79-properties" tabindex="-1"><a class="header-anchor" href="#_3k-8-wings-overload-79-properties" aria-hidden="true">#</a> 3K.8.wings-overload-79.properties</h2><p>Overload protection filter, how to handle fast requests and slow responses. disable by default, not recommended as it requires more detailed config to avoid false positives.</p><h3 id="wings-slardar-overload-log-interval" tabindex="-1"><a class="header-anchor" href="#wings-slardar-overload-log-interval" aria-hidden="true">#</a> wings.slardar.overload.log-interval</h3><p><code>Long</code>=<code>5000</code>, Logging interval in millis.</p><h3 id="wings-slardar-overload-fallback-code" tabindex="-1"><a class="header-anchor" href="#wings-slardar-overload-fallback-code" aria-hidden="true">#</a> wings.slardar.overload.fallback-code</h3><p><code>Integer</code>=<code>200</code>, http status of response when overload</p><h3 id="wings-slardar-overload-fallback-body" tabindex="-1"><a class="header-anchor" href="#wings-slardar-overload-fallback-body" aria-hidden="true">#</a> wings.slardar.overload.fallback-body</h3><p><code>String</code>=<code>{&quot;success&quot;:false,&quot;message&quot;:&quot;Request Too Busy, Take A Coffee&quot;}</code>, body of response when overload</p><h3 id="wings-slardar-overload-request-capacity" tabindex="-1"><a class="header-anchor" href="#wings-slardar-overload-request-capacity" aria-hidden="true">#</a> wings.slardar.overload.request-capacity</h3><p><code>Integer</code>=<code>9000</code>, fast request capacity, note that shared IP&#39;s can be easily misjudged.</p><ul><li><code>&lt;0</code> - unlimited, max number of requests to process</li><li><code>&gt;0</code> - user defined value based on stress test results</li><li><code>0</code> - auto-tuning, initial value is cpu cores x 300</li></ul><h3 id="wings-slardar-overload-request-interval" tabindex="-1"><a class="header-anchor" href="#wings-slardar-overload-request-interval" aria-hidden="true">#</a> wings.slardar.overload.request-interval</h3><p><code>Long</code>=<code>1000</code>, within <code>interval</code> milliseconds, no more than <code>calmdown</code> requests can be processed for the same ip. <code>&lt;=0</code> means no limit.</p><h3 id="wings-slardar-overload-request-calmdown" tabindex="-1"><a class="header-anchor" href="#wings-slardar-overload-request-calmdown" aria-hidden="true">#</a> wings.slardar.overload.request-calmdown</h3><p><code>Integer</code>=<code>50</code>, within <code>interval</code> milliseconds, no more than <code>calmdown</code> requests can be processed for the same ip. <code>&lt;=0</code> means no limit.</p><h3 id="wings-slardar-overload-request-permit" tabindex="-1"><a class="header-anchor" href="#wings-slardar-overload-request-permit" aria-hidden="true">#</a> wings.slardar.overload.request-permit</h3><p><code>Map&lt;String, String&gt;</code>, request ip whitelist, match by start-with</p><ul><li><code>local-127</code>=<code>127.</code></li><li><code>local-192</code>=<code>192.</code></li></ul><h3 id="wings-slardar-overload-response-warn-slow" tabindex="-1"><a class="header-anchor" href="#wings-slardar-overload-response-warn-slow" aria-hidden="true">#</a> wings.slardar.overload.response-warn-slow</h3><p><code>Long</code>=<code>5000</code>, slow response in millis, if exceeded, log WARN, <code>&lt;0</code> means disable</p><h3 id="wings-slardar-overload-response-info-stat" tabindex="-1"><a class="header-anchor" href="#wings-slardar-overload-response-info-stat" aria-hidden="true">#</a> wings.slardar.overload.response-info-stat</h3><p><code>Long</code>=<code>1000</code>, log INFO once for each number of requests, <code>&lt;0</code> means disable</p><h2 id="_3k-9-wings-righter-79-properties" tabindex="-1"><a class="header-anchor" href="#_3k-9-wings-righter-79-properties" aria-hidden="true">#</a> 3K.9.wings-righter-79.properties</h2><p>Anti forgery editing, prevent editor privilege upgrade.</p><h3 id="wings-slardar-righter-header" tabindex="-1"><a class="header-anchor" href="#wings-slardar-righter-header" aria-hidden="true">#</a> wings.slardar.righter.header</h3><p><code>String</code>=<code>Right-Editor</code>, key in header.</p><h3 id="wings-slardar-righter-http-status" tabindex="-1"><a class="header-anchor" href="#wings-slardar-righter-http-status" aria-hidden="true">#</a> wings.slardar.righter.http-status</h3><p><code>Integer</code>=<code>409</code>, http-status of response.</p><h3 id="wings-slardar-righter-content-type" tabindex="-1"><a class="header-anchor" href="#wings-slardar-righter-content-type" aria-hidden="true">#</a> wings.slardar.righter.content-type</h3><p><code>String</code>=<code>application/json;charset=UTF-8</code>, content-type of response.</p><h3 id="wings-slardar-righter-response-body" tabindex="-1"><a class="header-anchor" href="#wings-slardar-righter-response-body" aria-hidden="true">#</a> wings.slardar.righter.response-body</h3><p><code>String</code>=<code>{&quot;success&quot;:false,&quot;message&quot;:&quot;forgery of editor&quot;}</code>, body of response.</p><h2 id="_3k-a-wings-swagger-79-properties" tabindex="-1"><a class="header-anchor" href="#_3k-a-wings-swagger-79-properties" aria-hidden="true">#</a> 3K.A.wings-swagger-79.properties</h2><p>Swagger document.</p><h3 id="wings-slardar-swagger-title" tabindex="-1"><a class="header-anchor" href="#wings-slardar-swagger-title" aria-hidden="true">#</a> wings.slardar.swagger.title</h3><p><code>String</code>=<code>${spring.application.name:wings-default}</code></p><h3 id="wings-slardar-swagger-description" tabindex="-1"><a class="header-anchor" href="#wings-slardar-swagger-description" aria-hidden="true">#</a> wings.slardar.swagger.description</h3><p><code>String</code>=<code>user=${user.name}, os=${os.name}, tz=${user.timezone}, branch=${git.branch}, commit=${git.commit.id.full}</code></p><h3 id="wings-slardar-swagger-version" tabindex="-1"><a class="header-anchor" href="#wings-slardar-swagger-version" aria-hidden="true">#</a> wings.slardar.swagger.version</h3><p><code>String</code>=<code>${build.version} ${build.time}</code>, need enable build info.</p><h3 id="wings-slardar-swagger-param" tabindex="-1"><a class="header-anchor" href="#wings-slardar-swagger-param" aria-hidden="true">#</a> wings.slardar.swagger.param</h3><p><code>Map&lt;String, EnabledParameter&gt;</code>, key in java naming rule, used as <code>$ref</code>, <code>in</code> support <code>cookie</code>|<code>header</code>|<code>query</code>|<code>path</code>.</p><ul><li><code>headLanguage.enable</code>=<code>false</code></li><li><code>headLanguage.name</code>=<code>Accept-Language</code></li><li><code>headLanguage.in</code>=<code>header</code></li><li><code>headLanguage.description</code>=<code>user language</code></li><li><code>headLanguage.example</code>=<code>zh-CN</code></li><li><code>headZoneId.enable</code>=<code>true</code></li><li><code>headZoneId.name</code>=<code>Zone-Id</code></li><li><code>headZoneId.in</code>=<code>header</code></li><li><code>headZoneId.description</code>=<code>user timezone</code></li><li><code>headZoneId.example</code>=<code>Asia/Shanghai</code></li></ul><h3 id="wings-slardar-swagger-accept" tabindex="-1"><a class="header-anchor" href="#wings-slardar-swagger-accept" aria-hidden="true">#</a> wings.slardar.swagger.accept</h3><p><code>Map&lt;String, String&gt;</code>, copy Accept/MediaType to make multiple requests.</p><ul><li><code>text/plain</code>=<code>*/*</code></li><li><code>application/json</code>=<code>*/*</code></li></ul><h3 id="wings-slardar-swagger-flat-pagequery" tabindex="-1"><a class="header-anchor" href="#wings-slardar-swagger-flat-pagequery" aria-hidden="true">#</a> wings.slardar.swagger.flat-pagequery</h3><p><code>Boolean</code>=<code>true</code>, whether to flatten the PageQuery, as querystring parameter.</p><h2 id="_3k-b-wings-dingnotice-79-properties" tabindex="-1"><a class="header-anchor" href="#_3k-b-wings-dingnotice-79-properties" aria-hidden="true">#</a> 3K.B.wings-dingnotice-79.properties</h2><h3 id="wings-slardar-ding-notice-default-access-token" tabindex="-1"><a class="header-anchor" href="#wings-slardar-ding-notice-default-access-token" aria-hidden="true">#</a> wings.slardar.ding-notice.default.access-token</h3><p><code>String</code>=<code>∅</code>, the DingTalk access_token used to send the alert, <code>empty</code> means disable.</p><h3 id="wings-slardar-ding-notice-default-digest-secret" tabindex="-1"><a class="header-anchor" href="#wings-slardar-ding-notice-default-digest-secret" aria-hidden="true">#</a> wings.slardar.ding-notice.default.digest-secret</h3><p><code>String</code>=<code>∅</code>, secret of message digest, <code>empty</code> means disable.</p><h3 id="wings-slardar-ding-notice-default-notice-keyword" tabindex="-1"><a class="header-anchor" href="#wings-slardar-ding-notice-default-notice-keyword" aria-hidden="true">#</a> wings.slardar.ding-notice.default.notice-keyword</h3><p><code>String</code>=<code>WARNING</code>, custom keywords, to successfully send message must contain at least 1 keyword.</p><h3 id="wings-slardar-ding-notice-default-notice-mobiles" tabindex="-1"><a class="header-anchor" href="#wings-slardar-ding-notice-default-notice-mobiles" aria-hidden="true">#</a> wings.slardar.ding-notice.default.notice-mobiles</h3><p><code>Map&lt;String, String&gt;</code>, notified person and his phone number, non-member&#39;s phone number will be desensitized. It is automatically added to the text eg. @155xxxx</p><h3 id="wings-slardar-ding-notice-default-webhook-url" tabindex="-1"><a class="header-anchor" href="#wings-slardar-ding-notice-default-webhook-url" aria-hidden="true">#</a> wings.slardar.ding-notice.default.webhook-url</h3><p><code>String</code>=<code>https://oapi.dingtalk.com/robot/send?access_token=</code>, template of DingTalk webhook URL.</p><h3 id="wings-slardar-ding-notice-default-msg-type" tabindex="-1"><a class="header-anchor" href="#wings-slardar-ding-notice-default-msg-type" aria-hidden="true">#</a> wings.slardar.ding-notice.default.msg-type</h3><p><code>String</code>=<code>markdown</code>, message type, support <code>text</code>|<code>markdown</code></p>',89);function p(u,w){const r=o("ExternalLinkIcon");return i(),s("div",null,[l,e("p",null,[e("a",h,[t("RestTemplate Customization"),n(r)])]),g])}const b=d(c,[["render",p],["__file","3k-prop-function.html.vue"]]);export{b as default};
