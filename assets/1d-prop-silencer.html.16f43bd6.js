import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as a,f as n}from"./app.9a05138f.js";const o={},r=n('<h1 id="_1d-沉默的属性" tabindex="-1"><a class="header-anchor" href="#_1d-沉默的属性" aria-hidden="true">#</a> 1D.沉默的属性</h1><p>有关自动加载，默认工具和行为的属性。</p><h2 id="_1d-1-wings-auto-config-cnf" tabindex="-1"><a class="header-anchor" href="#_1d-1-wings-auto-config-cnf" aria-hidden="true">#</a> 1D.1.wings-auto-config.cnf</h2><p>Silence的入口配置，定义了Silence的自动加载的路径和模式。</p><h3 id="wings-boot-more" tabindex="-1"><a class="header-anchor" href="#wings-boot-more" aria-hidden="true">#</a> wings.boot.more</h3><p><code>List&lt;String&gt;</code>=<code>application*.*, wings-conf/**/*.*</code></p><p>多协议路径下查找，不支持协议头，同名可多次加载，按优先级覆盖。</p><h3 id="wings-boot-once" tabindex="-1"><a class="header-anchor" href="#wings-boot-once" aria-hidden="true">#</a> wings.boot.once</h3><p><code>List&lt;String&gt;</code>=<code>git.properties, META-INF/build-info.properties</code></p><p>多协议路径下查找，不支持协议头，同名仅按优先级加载一次，后续不会覆盖。</p><h3 id="wings-boot-block" tabindex="-1"><a class="header-anchor" href="#wings-boot-block" aria-hidden="true">#</a> wings.boot.block</h3><p><code>String</code>=<code>wings-conf-block-list.cnf</code></p><p>黑名单文件名</p><h3 id="wings-boot-promo" tabindex="-1"><a class="header-anchor" href="#wings-boot-promo" aria-hidden="true">#</a> wings.boot.promo</h3><p><code>String</code>=<code>wings-prop-promotion.cnf</code></p><p>变量提示文件名</p><h2 id="_1d-2-logback-fileonly-xml" tabindex="-1"><a class="header-anchor" href="#_1d-2-logback-fileonly-xml" aria-hidden="true">#</a> 1D.2.logback-fileonly.xml</h2><p><code>logback</code>仅file-appender的默认配置。</p><h2 id="_1d-3-spring-wings-enabled-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-3-spring-wings-enabled-79-properties" aria-hidden="true">#</a> 1D.3.spring-wings-enabled-79.properties</h2><p>Silence功能的默认开关，如下</p><h3 id="spring-wings-silencer-enabled-verbose" tabindex="-1"><a class="header-anchor" href="#spring-wings-silencer-enabled-verbose" aria-hidden="true">#</a> spring.wings.silencer.enabled.verbose</h3><p><code>Boolean</code>=<code>false</code>，是否显示wings的conditional信息</p><h3 id="spring-wings-silencer-enabled-message" tabindex="-1"><a class="header-anchor" href="#spring-wings-silencer-enabled-message" aria-hidden="true">#</a> spring.wings.silencer.enabled.message</h3><p><code>Boolean</code>=<code>true</code>，是否自动加载<code>/wings-i18n/</code></p><h3 id="spring-wings-silencer-enabled-scanner" tabindex="-1"><a class="header-anchor" href="#spring-wings-silencer-enabled-scanner" aria-hidden="true">#</a> spring.wings.silencer.enabled.scanner</h3><p><code>Boolean</code>=<code>true</code>，是否自动载所有classpath下的<code>**/spring/bean/**</code></p><h3 id="spring-wings-silencer-enabled-auto-log" tabindex="-1"><a class="header-anchor" href="#spring-wings-silencer-enabled-auto-log" aria-hidden="true">#</a> spring.wings.silencer.enabled.auto-log</h3><p><code>Boolean</code>=<code>true</code>，是否在有log-file时，console自动ERROR</p><h3 id="spring-wings-silencer-enabled-mirana" tabindex="-1"><a class="header-anchor" href="#spring-wings-silencer-enabled-mirana" aria-hidden="true">#</a> spring.wings.silencer.enabled.mirana</h3><p><code>Boolean</code>=<code>true</code>，是否在自动配置mirana</p><h2 id="_1d-4-spring-logging-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-4-spring-logging-79-properties" aria-hidden="true">#</a> 1D.4.spring-logging-79.properties</h2><p>为spring的logging提供了以下配置项。</p><ul><li><code>logging.logback.rollingpolicy.max-file-size</code>=<code>500MB</code></li><li><code>logging.logback.rollingpolicy.max-history</code>=<code>30</code></li><li><code>logging.level.root</code>=<code>INFO</code></li></ul><h2 id="_1d-5-spring-message-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-5-spring-message-79-properties" aria-hidden="true">#</a> 1D.5.spring-message-79.properties</h2><p>为spring.messages提供以下默认项。</p><ul><li><code>spring.messages.always-use-message-format</code>=<code>false</code></li><li><code>spring.messages.basename</code>=<code>∅</code></li><li><code>spring.messages.cache-duration</code>=<code>∅</code></li><li><code>spring.messages.encoding</code>=<code>UTF-8</code></li><li><code>spring.messages.fallback-to-system-locale</code>=<code>true</code></li><li><code>spring.messages.use-code-as-default-message</code>=<code>true</code></li></ul><h2 id="_1d-6-wings-i18n-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-6-wings-i18n-79-properties" aria-hidden="true">#</a> 1D.6.wings-i18n-79.properties</h2><p>对默认语言和默认时区，已经语言资源的设置。</p><h3 id="wings-silencer-i18n-locale" tabindex="-1"><a class="header-anchor" href="#wings-silencer-i18n-locale" aria-hidden="true">#</a> wings.silencer.i18n.locale</h3><p><code>String</code>=<code>∅</code>，格式为<code>en_US</code>, <code>zh_CN</code>。默认系统语言。</p><p>对应系统变量的<code>user.language</code>, <code>user.country</code></p><h3 id="wings-silencer-i18n-zoneid" tabindex="-1"><a class="header-anchor" href="#wings-silencer-i18n-zoneid" aria-hidden="true">#</a> wings.silencer.i18n.zoneid=</h3><p><code>String</code>=<code>∅</code>，默认系统时区，如<code>UTC</code>, <code>GMT+8,</code> <code>Asia/Shanghai</code></p><p>对应系统变量的<code>user.timezone</code></p><h3 id="wings-silencer-i18n-bundle" tabindex="-1"><a class="header-anchor" href="#wings-silencer-i18n-bundle" aria-hidden="true">#</a> wings.silencer.i18n.bundle</h3><p><code>List&lt;String&gt;</code>=<code>classpath*:/wings-i18n/**/*.properties</code></p><p>默认的resource配置，逗号分隔的AntPath格式。</p><h2 id="_1d-7-wings-mirana-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-7-wings-mirana-79-properties" aria-hidden="true">#</a> 1D.7.wings-mirana-79.properties</h2><p>mirana功能的默认配置，建议修改</p><h3 id="wings-silencer-mirana-code-leap-code" tabindex="-1"><a class="header-anchor" href="#wings-silencer-mirana-code-leap-code" aria-hidden="true">#</a> wings.silencer.mirana.code.leap-code</h3><p><code>String</code>=<code>BY2AH0IC9SX4UTV7GP5LNR6FK1WOE8ZQD3JM</code></p><p>LeapCode的默认seed，强安全需求时建议修改。<sup>建议</sup></p><h3 id="wings-silencer-mirana-code-crc8-long" tabindex="-1"><a class="header-anchor" href="#wings-silencer-mirana-code-crc8-long" aria-hidden="true">#</a> wings.silencer.mirana.code.crc8-long</h3><p><code>String</code>=<code>15,13,11,9,7,5,3,1</code></p><p>Crc8Long的默认seed，强安全需求时建议修改。<sup>建议</sup></p><h3 id="wings-silencer-mirana-auto-log-level" tabindex="-1"><a class="header-anchor" href="#wings-silencer-mirana-auto-log-level" aria-hidden="true">#</a> wings.silencer.mirana.auto-log.level</h3><p><code>String</code>=<code>WARN</code>，Slf4j格式</p><p>自动设置日志的级别，如 ALL, TRACE, DEBUG, INFO, WARN, ERROR, OFF</p><h3 id="wings-silencer-mirana-auto-log-target" tabindex="-1"><a class="header-anchor" href="#wings-silencer-mirana-auto-log-target" aria-hidden="true">#</a> wings.silencer.mirana.auto-log.target</h3><p><code>Set&lt;String&gt;</code>=<code>CONSOLE,STDOUT</code></p><p>可被mirana自动被调整的appender名字，逗号分隔</p><h3 id="wings-silencer-mirana-auto-log-exists" tabindex="-1"><a class="header-anchor" href="#wings-silencer-mirana-auto-log-exists" aria-hidden="true">#</a> wings.silencer.mirana.auto-log.exists</h3><p><code>Set&lt;String&gt;</code>=<code>FILE</code></p><p>当存在以上appender出现的时候，进行自动日志调整。</p><h2 id="_1d-8-wings-tweak-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-8-wings-tweak-79-properties" aria-hidden="true">#</a> 1D.8.wings-tweak-79.properties</h2><h3 id="wings-silencer-tweak-code-stack" tabindex="-1"><a class="header-anchor" href="#wings-silencer-tweak-code-stack" aria-hidden="true">#</a> wings.silencer.tweak.code-stack</h3><p><code>Boolean</code>=<code>false</code>，初始CodeException的Global有栈或无栈</p><h3 id="wings-silencer-tweak-clock-offset" tabindex="-1"><a class="header-anchor" href="#wings-silencer-tweak-clock-offset" aria-hidden="true">#</a> wings.silencer.tweak.clock-offset</h3><p><code>Long</code>=<code>0</code>，初始系统时钟 offset ms</p><h3 id="wings-silencer-tweak-mdc-threshold" tabindex="-1"><a class="header-anchor" href="#wings-silencer-tweak-mdc-threshold" aria-hidden="true">#</a> wings.silencer.tweak.mdc-threshold</h3><p><code>Boolean</code>=<code>true</code>，是否配置WingsMdcThresholdFilter</p>',71),d=[r];function s(c,l){return i(),a("div",null,d)}const h=e(o,[["render",s],["__file","1d-prop-silencer.html.vue"]]);export{h as default};
