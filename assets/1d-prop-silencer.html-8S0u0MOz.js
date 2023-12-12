import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as s,c as t,b as e,e as i,d as o,w as n,f as r}from"./app-T2f1rYfd.js";const l={},h=r('<h1 id="_1d-silencer-properties" tabindex="-1"><a class="header-anchor" href="#_1d-silencer-properties" aria-hidden="true">#</a> 1D.Silencer Properties</h1><p>Properties about autoloading, default tools and behavior.</p><h2 id="_1d-1-wings-auto-config-cnf" tabindex="-1"><a class="header-anchor" href="#_1d-1-wings-auto-config-cnf" aria-hidden="true">#</a> 1D.1.wings-auto-config.cnf</h2><p>Silencer&#39;s entry configuration, which defines the path and mode of Silencer&#39;s autoload. when exists multiple <code>wings-auto-config*.cnf</code>, sort by ascii, take the last one.</p><h3 id="wings-boot-more" tabindex="-1"><a class="header-anchor" href="#wings-boot-more" aria-hidden="true">#</a> wings.boot.more</h3><p><code>List&lt;String&gt;</code>=<code>application*.*, wings-conf/**/*.*</code></p><p>Scan path under multi-protocol, so no protocol header, same name can be loaded multiple times, override by priority.</p><h3 id="wings-boot-once" tabindex="-1"><a class="header-anchor" href="#wings-boot-once" aria-hidden="true">#</a> wings.boot.once</h3><p><code>List&lt;String&gt;</code>=<code>git.properties, META-INF/build-info.properties</code></p><p>Scan path under multi-protocol, so no protocol header, same name loaded only once by priority, no subsequent override.</p><h3 id="wings-boot-block" tabindex="-1"><a class="header-anchor" href="#wings-boot-block" aria-hidden="true">#</a> wings.boot.block</h3><p><code>String</code>=<code>wings-conf-block-list.cnf</code></p><p>Filename of the block-list config</p><h3 id="wings-boot-promo" tabindex="-1"><a class="header-anchor" href="#wings-boot-promo" aria-hidden="true">#</a> wings.boot.promo</h3><p><code>String</code>=<code>wings-prop-promotion.cnf</code></p><p>Filename of the promotion config</p><h2 id="_1d-2-wings-conditional-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-2-wings-conditional-79-properties" aria-hidden="true">#</a> 1D.2.wings-conditional-79.properties</h2><h3 id="wings-silencer-conditional-error" tabindex="-1"><a class="header-anchor" href="#wings-silencer-conditional-error" aria-hidden="true">#</a> wings.silencer.conditional.error</h3><p><code>Map&lt;String, Boolean&gt;</code>=<code>empty</code>, the mapping of qualified-key (ant-matcher) and its error handling.</p><ul><li><code>*</code>=<code>true</code> error as <code>match</code></li><li><code>pro.*</code>=<code>false</code> error as <code>notMatch</code></li></ul><h3 id="wings-silencer-conditional-prefix" tabindex="-1"><a class="header-anchor" href="#wings-silencer-conditional-prefix" aria-hidden="true">#</a> wings.silencer.conditional.prefix</h3><p><code>Map&lt;String, String&gt;</code>=<code>empty</code>, the mapping of qualified-key (ant-matcher) and its prefix.</p><ul><li><code>*</code>=<code>wings.enabled</code> redefine prefix for all.</li></ul><h3 id="wings-silencer-conditional-enable" tabindex="-1"><a class="header-anchor" href="#wings-silencer-conditional-enable" aria-hidden="true">#</a> wings.silencer.conditional.enable</h3><p><code>Map&lt;String, Boolean&gt;</code>=<code>empty</code>, the mapping of qualified-key (ant-matcher) and its enable.</p><ul><li><code>pro.fessional.wings.warlock.database.autogen.tables.daos.*</code>=<code>false</code></li></ul><h2 id="_1d-3-wings-enabled-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-3-wings-enabled-79-properties" aria-hidden="true">#</a> 1D.3.wings-enabled-79.properties</h2><p>toggling the Silencer feature.</p><h3 id="wings-enabled-silencer-autoconf" tabindex="-1"><a class="header-anchor" href="#wings-enabled-silencer-autoconf" aria-hidden="true">#</a> wings.enabled.silencer.autoconf</h3><p><code>Boolean</code>=<code>true</code>, Whether to automatically configure <code>wings-conf</code> and <code>wings-i18n</code></p><h3 id="wings-enabled-silencer-verbose" tabindex="-1"><a class="header-anchor" href="#wings-enabled-silencer-verbose" aria-hidden="true">#</a> wings.enabled.silencer.verbose</h3><p><code>Boolean</code>=<code>false</code>, Whether to display the conditional information of wings</p><h3 id="wings-enabled-silencer-scanner" tabindex="-1"><a class="header-anchor" href="#wings-enabled-silencer-scanner" aria-hidden="true">#</a> wings.enabled.silencer.scanner</h3><p><code>Boolean</code>=<code>false</code>, Whether to scan component from <code>**/spring/bean/**/*.class</code> on ApplicationPreparedEvent before <code>@AutoConfiguration</code></p><h3 id="wings-enabled-silencer-audit-prop" tabindex="-1"><a class="header-anchor" href="#wings-enabled-silencer-audit-prop" aria-hidden="true">#</a> wings.enabled.silencer.audit-prop</h3><p><code>Boolean</code>=<code>false</code>, Whether to audit the file and cascading relationship of properties key/value</p><h3 id="wings-enabled-silencer-mute-console" tabindex="-1"><a class="header-anchor" href="#wings-enabled-silencer-mute-console" aria-hidden="true">#</a> wings.enabled.silencer.mute-console</h3><p><code>Boolean</code>=<code>true</code>, Whether to automatically switch the console log level when a log file is available</p><h3 id="wings-enabled-silencer-tweak-clock" tabindex="-1"><a class="header-anchor" href="#wings-enabled-silencer-tweak-clock" aria-hidden="true">#</a> wings.enabled.silencer.tweak-clock</h3><p><code>Boolean</code>=<code>true</code>, Whether to tweak the clock in global or thread</p><h3 id="wings-enabled-silencer-tweak-logback" tabindex="-1"><a class="header-anchor" href="#wings-enabled-silencer-tweak-logback" aria-hidden="true">#</a> wings.enabled.silencer.tweak-logback</h3><p><code>Boolean</code>=<code>true</code>, Whether to tweak log level of logback in global or thread</p><h3 id="wings-enabled-silencer-tweak-stack" tabindex="-1"><a class="header-anchor" href="#wings-enabled-silencer-tweak-stack" aria-hidden="true">#</a> wings.enabled.silencer.tweak-stack</h3><p><code>Boolean</code>=<code>true</code>, Whether to tweak the CodeException stack in global or thread</p><h2 id="_1d-4-spring-logging-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-4-spring-logging-79-properties" aria-hidden="true">#</a> 1D.4.spring-logging-79.properties</h2><p>Default configuration for spring logging</p><ul><li><code>logging.logback.rollingpolicy.max-file-size</code>=<code>500MB</code></li><li><code>logging.logback.rollingpolicy.max-history</code>=<code>30</code></li><li><code>logging.level.root</code>=<code>INFO</code></li><li><code>logging.pattern.dateformat</code>=<code>yyyy-MM-dd HH:mm:ss.SSS</code></li></ul><h2 id="_1d-5-spring-message-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-5-spring-message-79-properties" aria-hidden="true">#</a> 1D.5.spring-message-79.properties</h2><p>Default configuration for spring message</p><ul><li><code>spring.messages.always-use-message-format</code>=<code>false</code></li><li><code>spring.messages.basename=</code></li><li><code>spring.messages.cache-duration=</code></li><li><code>spring.messages.encoding</code>=<code>UTF-8</code></li><li><code>spring.messages.fallback-to-system-locale</code>=<code>true</code></li><li><code>spring.messages.use-code-as-default-message</code>=<code>true</code></li></ul><h2 id="_1d-6-wings-i18n-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-6-wings-i18n-79-properties" aria-hidden="true">#</a> 1D.6.wings-i18n-79.properties</h2><p>Set default language and timezone for the app, as well as i18n messages.</p><h3 id="wings-silencer-i18n-locale" tabindex="-1"><a class="header-anchor" href="#wings-silencer-i18n-locale" aria-hidden="true">#</a> wings.silencer.i18n.locale</h3><p><code>String=</code>, in the format <code>en_US</code>, <code>zh_CN</code>. Default system language.</p><p>Corresponds to <code>user.language</code>, <code>user.country</code> of the system variable</p><h3 id="wings-silencer-i18n-zoneid" tabindex="-1"><a class="header-anchor" href="#wings-silencer-i18n-zoneid" aria-hidden="true">#</a> wings.silencer.i18n.zoneid=</h3><p><code>String=</code>, such as <code>UTC</code>, <code>GMT+8,</code> <code>Asia/Shanghai</code>. Default system timezone.</p><p>corresponding to <code>user.timezone</code> of the system variable</p><h3 id="wings-silencer-i18n-bundle" tabindex="-1"><a class="header-anchor" href="#wings-silencer-i18n-bundle" aria-hidden="true">#</a> wings.silencer.i18n.bundle</h3><p><code>List&lt;String&gt;</code>=<code>classpath*:/wings-i18n/**/*.properties</code></p><p>The default resource configuration, in comma-separated AntPath format.</p><h2 id="_1d-7-wings-autolog-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-7-wings-autolog-79-properties" aria-hidden="true">#</a> 1D.7.wings-autolog-79.properties</h2><p>Automatically switch log levels for appender</p><h3 id="wings-silencer-autolog-level" tabindex="-1"><a class="header-anchor" href="#wings-silencer-autolog-level" aria-hidden="true">#</a> wings.silencer.autolog.level</h3><p><code>String</code>=<code>WARN</code>, Slf4j format</p><p>Automatically set the log level, such as ALL, TRACE, DEBUG, INFO, WARN, ERROR, OFF</p><h3 id="wings-silencer-autolog-target" tabindex="-1"><a class="header-anchor" href="#wings-silencer-autolog-target" aria-hidden="true">#</a> wings.silencer.autolog.target</h3><p><code>Set&lt;String&gt;</code>=<code>CONSOLE,STDOUT</code></p><p>The names of the appender to adjust, commas separated</p><h3 id="wings-silencer-autolog-exists" tabindex="-1"><a class="header-anchor" href="#wings-silencer-autolog-exists" aria-hidden="true">#</a> wings.silencer.autolog.exists</h3><p><code>Set&lt;String&gt;</code>=<code>FILE</code></p><p>If the following appenders exist, the above log level is automatically adjusted.</p><h2 id="_1d-8-wings-encrypt-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-8-wings-encrypt-79-properties" aria-hidden="true">#</a> 1D.8.wings-encrypt-79.properties</h2><p>Automatic configuration of encryption features.</p><h3 id="wings-silencer-encrypt-leap-code" tabindex="-1"><a class="header-anchor" href="#wings-silencer-encrypt-leap-code" aria-hidden="true">#</a> wings.silencer.encrypt.leap-code</h3><p><code>String</code>=<code>BY2AH0IC9SX4UTV7GP5LNR6FK1WOE8ZQD3JM</code></p>',76),p=e("h3",{id:"wings-silencer-encrypt-crc8-long",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#wings-silencer-encrypt-crc8-long","aria-hidden":"true"},"#"),i(" wings.silencer.encrypt.crc8-long")],-1),g=e("p",null,[e("code",null,"String"),i("="),e("code",null,"15,13,11,9,7,5,3,1")],-1),u=r('<h3 id="wings-silencer-encrypt-aes-key" tabindex="-1"><a class="header-anchor" href="#wings-silencer-encrypt-aes-key" aria-hidden="true">#</a> wings.silencer.encrypt.aes-key</h3><p><code>Map&lt;String,String&gt;</code>, the default Aes256 encryption name and password <code>${random.uuid}${random.uuid}</code>.</p><ul><li><code>system</code> - system default, randomly generated at each startup</li><li><code>ticket</code> - used for Api Ticket, recommended to be unified within the cluster</li><li><code>cookie</code> - used for Http Cookies, recommended to be unified within the cluster</li><li><code>config</code> - used for sensitive data in configuration files, recommended to be fixed</li></ul><h2 id="_1d-9-wings-tweak-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-9-wings-tweak-79-properties" aria-hidden="true">#</a> 1D.9.wings-tweak-79.properties</h2><p>Tweaking of the Application</p><h3 id="wings-silencer-tweak-code-stack" tabindex="-1"><a class="header-anchor" href="#wings-silencer-tweak-code-stack" aria-hidden="true">#</a> wings.silencer.tweak.code-stack</h3><p><code>Boolean</code>=<code>false</code>, Whether the Global of CodeException has a stack.</p><h3 id="wings-silencer-tweak-clock-offset" tabindex="-1"><a class="header-anchor" href="#wings-silencer-tweak-clock-offset" aria-hidden="true">#</a> wings.silencer.tweak.clock-offset</h3><p><code>Long</code>=<code>0</code>, Initial system clock with offset ms</p><h3 id="wings-silencer-tweak-mdc-threshold" tabindex="-1"><a class="header-anchor" href="#wings-silencer-tweak-mdc-threshold" aria-hidden="true">#</a> wings.silencer.tweak.mdc-threshold</h3><p><code>Boolean</code>=<code>true</code>, Whether to configure WingsMdcThresholdFilter</p><h2 id="_1d-a-wings-runtime-77-properties" tabindex="-1"><a class="header-anchor" href="#_1d-a-wings-runtime-77-properties" aria-hidden="true">#</a> 1D.A.wings-runtime-77.properties</h2><p>Runtime Mode of the Application.</p><h3 id="wings-silencer-runtime-run-mode" tabindex="-1"><a class="header-anchor" href="#wings-silencer-runtime-run-mode" aria-hidden="true">#</a> wings.silencer.runtime.run-mode</h3><p><code>RunMode</code>=<code>Local</code>, RunMode of the application</p><h3 id="wings-silencer-runtime-api-mode" tabindex="-1"><a class="header-anchor" href="#wings-silencer-runtime-api-mode" aria-hidden="true">#</a> wings.silencer.runtime.api-mode</h3><p><code>ApiMode</code>=<code>Nothing</code>, ApiMode of the application</p><h2 id="_1d-b-wings-inspect-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-b-wings-inspect-79-properties" aria-hidden="true">#</a> 1D.B.wings-inspect-79.properties</h2><p>Inspect and audit the Application</p><h3 id="wings-silencer-inspect-properties" tabindex="-1"><a class="header-anchor" href="#wings-silencer-inspect-properties" aria-hidden="true">#</a> wings.silencer.inspect.properties</h3><p><code>Boolean</code>=<code>false</code>, Whether to audit the file and cascading relationship of properties key/value</p><h2 id="_1d-c-wings-scanner-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-c-wings-scanner-79-properties" aria-hidden="true">#</a> 1D.C.wings-scanner-79.properties</h2><h3 id="wings-silencer-scanner-bean" tabindex="-1"><a class="header-anchor" href="#wings-silencer-scanner-bean" aria-hidden="true">#</a> wings.silencer.scanner.bean</h3><p><code>List&lt;String&gt;</code>=<code>spring/bean</code>, scan component from <code>**/spring/bean/**/*.class</code> on ApplicationPreparedEvent</p>',24);function f(w,b){const a=c("Badge");return s(),t("div",null,[h,e("p",null,[i("Default seed of LeapCode, should change for security requirements. "),o(a,{type:"tip",vertical:"top"},{default:n(()=>[i("RECOMMENDED")]),_:1})]),p,g,e("p",null,[i("Default seed of Crc8Long, should change for security requirements. "),o(a,{type:"tip",vertical:"top"},{default:n(()=>[i("RECOMMENDED")]),_:1})]),u])}const x=d(l,[["render",f],["__file","1d-prop-silencer.html.vue"]]);export{x as default};
