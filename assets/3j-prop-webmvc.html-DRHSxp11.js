import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as r,e as s}from"./app-BcJ4NaN5.js";const i={},n=s('<h1 id="_3j-webmvc-properties" tabindex="-1"><a class="header-anchor" href="#_3j-webmvc-properties"><span>3J.WebMvc Properties</span></a></h1><p>Properties of Spring WebMvc in Slardar</p><h2 id="_3j-1-wings-cookie-79-properties" tabindex="-1"><a class="header-anchor" href="#_3j-1-wings-cookie-79-properties"><span>3J.1.wings-cookie-79.properties</span></a></h2><p>All the following name settings are the original, that is, without prefix and alias.</p><h3 id="wings-slardar-cookie-prefix" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cookie-prefix"><span>wings.slardar.cookie.prefix</span></a></h3><p><code>String=</code>, Cookie prefix, empty by default.</p><h3 id="wings-slardar-cookie-alias" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cookie-alias"><span>wings.slardar.cookie.alias</span></a></h3><p><code>Map&lt;String, String&gt;</code>, cookie alias, affected by the prefix, eg.</p><p><code>session</code>=<code>o_0</code>, <code>session</code> eventually is <code>${prefix}o_0</code></p><h3 id="wings-slardar-cookie-coder" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cookie-coder"><span>wings.slardar.cookie.coder</span></a></h3><p><code>String</code>=<code>aes</code>, cookie encoding, default</p><ul><li><code>aes</code> - aes256</li><li><code>b64</code> - base64</li><li><code>nop</code> - no encoding</li></ul><p>For the same config name, the encoding priority <code>aes</code> &gt; <code>b64</code> &gt; <code>nop</code></p><h3 id="wings-slardar-cookie-nop" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cookie-nop"><span>wings.slardar.cookie.nop</span></a></h3><p><code>Set&lt;String&gt;</code>=<code>${server.servlet.session.cookie.name}</code></p><h3 id="wings-slardar-cookie-b64" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cookie-b64"><span>wings.slardar.cookie.b64</span></a></h3><p><code>Set&lt;String&gt;=</code></p><h3 id="wings-slardar-cookie-aes" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cookie-aes"><span>wings.slardar.cookie.aes</span></a></h3><p><code>Set&lt;String&gt;=</code></p><h3 id="wings-slardar-cookie-http-only" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cookie-http-only"><span>wings.slardar.cookie.http-only</span></a></h3><p><code>Map&lt;Boolean, Set&lt;String&gt;&gt;=</code></p><p>HttpOnly, js cannot be read, do not process if not set</p><h3 id="wings-slardar-cookie-secure" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cookie-secure"><span>wings.slardar.cookie.secure</span></a></h3><p><code>Map&lt;Boolean, Set&lt;String&gt;&gt;=</code></p><p>transfer by https, do not process if not set</p><h3 id="wings-slardar-cookie-domain" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cookie-domain"><span>wings.slardar.cookie.domain</span></a></h3><p><code>Map&lt;String, Set&lt;String&gt;&gt;=</code>, bind domain to cookie,</p><p>eg. <code>wings.slardar.cookie.domain[a.com]</code>=<code>b,c</code>, means cookie with <code>name</code> of <code>b</code> or <code>c</code>, its <code>domain</code> is <code>a.com</code></p><h3 id="wings-slardar-cookie-path" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cookie-path"><span>wings.slardar.cookie.path</span></a></h3><p><code>Map&lt;String, Set&lt;String&gt;&gt;=</code>, bind cookie to path</p><p>eg. <code>wings.slardar.cookie.path[/admin]</code>=<code>b,c</code>, means cookie with <code>name</code> of <code>b</code> or <code>c</code>, its <code>path</code> is <code>/admin</code></p><h2 id="_3j-2-wings-datetime-79-properties" tabindex="-1"><a class="header-anchor" href="#_3j-2-wings-datetime-79-properties"><span>3J.2.wings-datetime-79.properties</span></a></h2><p>In json and bind, more relaxed date, time and timezone formats are supported.</p><h3 id="wings-slardar-datetime-date-format" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-date-format"><span>wings.slardar.datetime.date.format</span></a></h3><p><code>String</code>=<code>yyyy[-MM][-dd]</code>, LocalDate output format</p><h3 id="wings-slardar-datetime-date-parser" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-date-parser"><span>wings.slardar.datetime.date.parser</span></a></h3><p><code>List&lt;String&gt;</code>, LocalDate input format of parsing</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>,yyyy[-][/][.][M][-][/][.][d]\\</span></span>\n<span class="line"><span>,[MMMM][MMM][M][-][/][.][d][-][/][.][yyyy][yy]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-slardar-datetime-time-format" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-time-format"><span>wings.slardar.datetime.time.format</span></a></h3><p><code>String</code>=<code>HH[:mm][:ss]</code>, LocalTime output format</p><h3 id="wings-slardar-datetime-time-parser" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-time-parser"><span>wings.slardar.datetime.time.parser</span></a></h3><p><code>List&lt;String&gt;</code>, LocalTime input format of parsing</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>H[:m][:s][.SSS]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="wings-slardar-datetime-datetime-auto" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-datetime-auto"><span>wings.slardar.datetime.datetime.auto</span></a></h3><p><code>Boolean</code>=<code>false</code>, LocalDateTime whether to auto switch timezones</p><h3 id="wings-slardar-datetime-datetime-format" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-datetime-format"><span>wings.slardar.datetime.datetime.format</span></a></h3><p><code>String</code>=<code>yyyy[-MM][-dd][ ][HH][:mm][:ss]</code>, LocalDateTime output format</p><h3 id="wings-slardar-datetime-datetime-parser" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-datetime-parser"><span>wings.slardar.datetime.datetime.parser</span></a></h3><p><code>List&lt;String&gt;</code>, LocalDate input format of parsing</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>,yyyy[-][/][.][M][-][/][.][d][ ][&#39;T&#39;][H][:m][:s][.SSS]\\</span></span>\n<span class="line"><span>,[MMMM][MMM][M][-][/][.][d][-][/][.][yyyy][yy][ ][&#39;T&#39;][H][:m][:s][.SSS]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-slardar-datetime-zoned-auto" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-zoned-auto"><span>wings.slardar.datetime.zoned.auto</span></a></h3><p><code>Boolean</code>=<code>false</code>, ZonedDateTime whether to auto switch timezones</p><h3 id="wings-slardar-datetime-zoned-format" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-zoned-format"><span>wings.slardar.datetime.zoned.format</span></a></h3><p><code>String</code>=<code>yyyy[-MM][-dd][ ][HH][:mm][:ss][ ][VV]</code>, ZonedDateTime output format</p><h3 id="wings-slardar-datetime-zoned-parser" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-zoned-parser"><span>wings.slardar.datetime.zoned.parser</span></a></h3><p><code>List&lt;String&gt;</code>, ZonedDateTime input format of parsing</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>,yyyy[-][/][.][M][-][/][.][d][ ][&#39;T&#39;][H][:m][:s][.SSS][XXXXX][XXXX][XXX][XX][X][&#39;[&#39;][ ][VV][&#39;]&#39;]\\</span></span>\n<span class="line"><span>,[MMMM][MMM][M][-][/][.][d][-][/][.][yyyy][yy][ ][&#39;T&#39;][H][:m][:s][.SSS][XXXXX][XXXX][XXX][XX][X][&#39;[&#39;][ ][VV][&#39;]&#39;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-slardar-datetime-offset-auto" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-offset-auto"><span>wings.slardar.datetime.offset.auto</span></a></h3><p><code>Boolean</code>=<code>false</code>, OffsetDateTime whether to auto switch timezones</p><h3 id="wings-slardar-datetime-offset-format" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-offset-format"><span>wings.slardar.datetime.offset.format</span></a></h3><p><code>String</code>=<code>yyyy[-MM][-dd][ ][HH][:mm][:ss][ ][xxx]</code>, OffsetDateTime output format</p><h3 id="wings-slardar-datetime-offset-parser" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-offset-parser"><span>wings.slardar.datetime.offset.parser</span></a></h3><p><code>List&lt;String&gt;</code>, OffsetDateTime input format of parsing</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>,yyyy[-][/][.][M][-][/][.][d][ ][&#39;T&#39;][H][:m][:s][.SSS][XXXXX][XXXX][XXX][XX][X][&#39;[&#39;][ ][VV][&#39;]&#39;]\\</span></span>\n<span class="line"><span>,[MMMM][MMM][M][-][/][.][d][-][/][.][yyyy][yy][ ][&#39;T&#39;][H][:m][:s][.SSS][XXXXX][XXXX][XXX][XX][X][&#39;[&#39;][ ][VV][&#39;]&#39;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-slardar-datetime-clock-offset" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-clock-offset"><span>wings.slardar.datetime.clock-offset</span></a></h3><p><code>long</code>=<code>0</code>, set the offset to the system clock in milliseconds.</p><h2 id="_3j-3-wings-jackson-79-properties" tabindex="-1"><a class="header-anchor" href="#_3j-3-wings-jackson-79-properties"><span>3J.3.wings-jackson-79.properties</span></a></h2><p>The following will cause serialization and deserialization inconsistencies.</p><h3 id="wings-slardar-jackson-empty-date" tabindex="-1"><a class="header-anchor" href="#wings-slardar-jackson-empty-date"><span>wings.slardar.jackson.empty-date</span></a></h3><p><code>String</code>=<code>1000-01-01</code>, <code>empty</code> date is not output, empty means ignore this.</p><p>support LocalDate, LocalDateTime, ZonedDateTime, OffsetDateTime, util.Date</p><h3 id="wings-slardar-jackson-empty-date-offset" tabindex="-1"><a class="header-anchor" href="#wings-slardar-jackson-empty-date-offset"><span>wings.slardar.jackson.empty-date-offset</span></a></h3><p><code>Integer</code>=12, considering the time zone offset, and the system time difference within plus or minus 12 hours, it is treated as <code>empty</code>.</p><h3 id="wings-slardar-jackson-empty-list" tabindex="-1"><a class="header-anchor" href="#wings-slardar-jackson-empty-list"><span>wings.slardar.jackson.empty-list</span></a></h3><p><code>Boolean</code>=<code>false</code>, whether to output <code>empty</code> list.</p><p>Includes <code>empty</code> of Array and java.util.Collection. disabled by default for 3rd unfriendly. eg. spring-boot-admin&#39;s js use <code>.length</code> and <code>key</code> to check value existence.</p><h3 id="wings-slardar-jackson-empty-map" tabindex="-1"><a class="header-anchor" href="#wings-slardar-jackson-empty-map"><span>wings.slardar.jackson.empty-map</span></a></h3><p><code>Boolean</code>=<code>false</code>, whether to output <code>empty</code> map, includes java.util.Map</p><h3 id="wings-slardar-jackson-i18n-result" tabindex="-1"><a class="header-anchor" href="#wings-slardar-jackson-i18n-result"><span>wings.slardar.jackson.i18n-result</span></a></h3><p><code>Boolean</code>=<code>true</code>, whether to handle message of I18nResult</p><h2 id="_3j-4-wings-locale-resolver-79-properties" tabindex="-1"><a class="header-anchor" href="#_3j-4-wings-locale-resolver-79-properties"><span>3J.4.wings-locale-resolver-79.properties</span></a></h2><h3 id="locale-or-language" tabindex="-1"><a class="header-anchor" href="#locale-or-language"><span>Locale or Language</span></a></h3><p>Get the language by key from param, cookie and header respectively</p><ul><li><code>wings.slardar.locale.locale-param</code>=<code>locale</code></li><li><code>wings.slardar.locale.locale-cookie</code>=<code>Wings-Locale</code></li><li><code>wings.slardar.locale.locale-header</code>=<code>Accept-Language</code></li></ul><h3 id="timezone-or-zoneid" tabindex="-1"><a class="header-anchor" href="#timezone-or-zoneid"><span>Timezone or Zoneid</span></a></h3><p>Get the timezone by key from param, cookie and header respectively</p><ul><li><code>wings.slardar.locale.zoneid-param</code>=<code>zoneid</code></li><li><code>wings.slardar.locale.zoneid-cookie</code>=<code>Wings-Zoneid</code></li><li><code>wings.slardar.locale.zoneid-header</code>=<code>Zone-Id</code></li></ul><h2 id="_3j-5-wings-number-79-properties" tabindex="-1"><a class="header-anchor" href="#_3j-5-wings-number-79-properties"><span>3J.5.wings-number-79.properties</span></a></h2><p>Customizable precision and format of Number, support JsonFormat pattern. Must use BigDecimal instead of Float and Double to avoid precision loss.</p><h3 id="wings-slardar-number-integer-format" tabindex="-1"><a class="header-anchor" href="#wings-slardar-number-integer-format"><span>wings.slardar.number.integer.format</span></a></h3><p><code>String</code>=<code>#</code>, format of Integer, Long. <code>empty</code> means disable.</p><p>The thousandth separator uses <code>,</code>, which can be replaced to other at runtime according to the separator setting.</p><h3 id="wings-slardar-number-integer-round-floor" tabindex="-1"><a class="header-anchor" href="#wings-slardar-number-integer-round-floor"><span>wings.slardar.number.integer.round=FLOOR</span></a></h3><p><code>RoundingMode</code>=<code>FLOOR</code>, rounding mode.</p><h3 id="wings-slardar-number-integer-separator" tabindex="-1"><a class="header-anchor" href="#wings-slardar-number-integer-separator"><span>wings.slardar.number.integer.separator</span></a></h3><p><code>String</code>=<code>,</code>, When Shape==ANY, integer separator, eg. thousandths.</p><h3 id="wings-slardar-number-integer-digital" tabindex="-1"><a class="header-anchor" href="#wings-slardar-number-integer-digital"><span>wings.slardar.number.integer.digital</span></a></h3><p><code>String</code>=<code>auto</code>, whether the value is output as a string or a number in js</p><ul><li><code>auto</code> - auto-match, number below 52bit, string above</li><li><code>true</code> - force number, ignore WRITE_NUMBERS_AS_STRINGS</li><li><code>false</code> - force string, avoid loss of precision.</li></ul><p>Whether to ignore WRITE_NUMBERS_AS_STRINGS, force to write number, need to pay attention to the format compatibility. For example, using bigint in js and setting is auto, the boundary (inclusive) will automatically switch between number and string.</p><h3 id="wings-slardar-number-floats-format" tabindex="-1"><a class="header-anchor" href="#wings-slardar-number-floats-format"><span>wings.slardar.number.floats.format</span></a></h3><p><code>String=</code>, eg. <code>#.00</code>, format of Float, Double. <code>empty</code> means disable.</p><p>The thousandth separator uses <code>,</code>, which can be replaced to other at runtime according to the separator setting.</p><h3 id="wings-slardar-number-floats-round" tabindex="-1"><a class="header-anchor" href="#wings-slardar-number-floats-round"><span>wings.slardar.number.floats.round</span></a></h3><p><code>RoundingMode</code>=<code>FLOOR</code>, rounding mode.</p><h3 id="wings-slardar-number-floats-separator" tabindex="-1"><a class="header-anchor" href="#wings-slardar-number-floats-separator"><span>wings.slardar.number.floats.separator</span></a></h3><p><code>String</code>=<code>,</code>, When Shape==ANY, integer separator, eg. thousandths.</p><h3 id="wings-slardar-number-floats-digital" tabindex="-1"><a class="header-anchor" href="#wings-slardar-number-floats-digital"><span>wings.slardar.number.floats.digital</span></a></h3><p><code>String</code>=<code>false</code>, force string by default, to avoid precision loss.</p><h3 id="wings-slardar-number-decimal-format" tabindex="-1"><a class="header-anchor" href="#wings-slardar-number-decimal-format"><span>wings.slardar.number.decimal.format</span></a></h3><p><code>String=</code>, eg. <code>#.00</code>, format of BigDecimal, BigInteger. <code>empty</code> means disable.</p><p>The thousandth separator uses <code>,</code>, which can be replaced to other at runtime according to the separator setting.</p><h3 id="wings-slardar-number-decimal-round" tabindex="-1"><a class="header-anchor" href="#wings-slardar-number-decimal-round"><span>wings.slardar.number.decimal.round</span></a></h3><p><code>RoundingMode</code>=<code>FLOOR</code>, rounding mode.</p><h3 id="wings-slardar-number-decimal-separator" tabindex="-1"><a class="header-anchor" href="#wings-slardar-number-decimal-separator"><span>wings.slardar.number.decimal.separator</span></a></h3><p><code>String</code>=<code>,</code>, When Shape==ANY, integer separator, eg. thousandths.</p><h3 id="wings-slardar-number-decimal-digital" tabindex="-1"><a class="header-anchor" href="#wings-slardar-number-decimal-digital"><span>wings.slardar.number.decimal.digital</span></a></h3><p><code>String</code>=<code>false</code>, force string by default, to avoid precision loss.</p><h2 id="_3j-6-wings-pagequery-79-properties" tabindex="-1"><a class="header-anchor" href="#_3j-6-wings-pagequery-79-properties"><span>3J.6.wings-pagequery-79.properties</span></a></h2><p>Replace pagination in spring data.</p><h3 id="wings-slardar-pagequery-page" tabindex="-1"><a class="header-anchor" href="#wings-slardar-pagequery-page"><span>wings.slardar.pagequery.page</span></a></h3><p><code>Integer</code>=<code>1</code>, page number, default 1st page.</p><h3 id="wings-slardar-pagequery-size" tabindex="-1"><a class="header-anchor" href="#wings-slardar-pagequery-size"><span>wings.slardar.pagequery.size</span></a></h3><p><code>Integer</code>=<code>20</code>, page size</p><h3 id="wings-slardar-pagequery-page-alias" tabindex="-1"><a class="header-anchor" href="#wings-slardar-pagequery-page-alias"><span>wings.slardar.pagequery.page-alias</span></a></h3><p><code>List&lt;String&gt;</code>=<code>page,pageNumber</code>, alias of page number</p><h3 id="wings-slardar-pagequery-size-alias" tabindex="-1"><a class="header-anchor" href="#wings-slardar-pagequery-size-alias"><span>wings.slardar.pagequery.size-alias</span></a></h3><p><code>List&lt;String&gt;</code>=<code>size,pageSize</code>, alias of page size</p><h3 id="wings-slardar-pagequery-sort-alias" tabindex="-1"><a class="header-anchor" href="#wings-slardar-pagequery-sort-alias"><span>wings.slardar.pagequery.sort-alias</span></a></h3><p><code>List&lt;String&gt;</code>=<code>sort,sortBy</code>, alias of sort</p><h2 id="_3j-7-wings-passcoder-79-properties" tabindex="-1"><a class="header-anchor" href="#_3j-7-wings-passcoder-79-properties"><span>3J.7.wings-passcoder-79.properties</span></a></h2><p>Password encryption and salting.</p><h3 id="wings-slardar-passcoder-pass-encoder" tabindex="-1"><a class="header-anchor" href="#wings-slardar-passcoder-pass-encoder"><span>wings.slardar.passcoder.pass-encoder</span></a></h3><p><code>String</code>=<code>argon2</code>, default password encoder id.</p><p>support never|noop|bcrypt|pbkdf2|scrypt|argon2</p><h3 id="wings-slardar-passcoder-pass-decoder" tabindex="-1"><a class="header-anchor" href="#wings-slardar-passcoder-pass-decoder"><span>wings.slardar.passcoder.pass-decoder</span></a></h3><p><code>String</code>=<code>never</code>, default password decoder id.</p><p>support never|noop|bcrypt|pbkdf2|scrypt|argon2</p><p>setDefaultPasswordEncoderForMatches, If id does not match, use the default decoder.</p><h3 id="wings-slardar-passcoder-salt-encoder" tabindex="-1"><a class="header-anchor" href="#wings-slardar-passcoder-salt-encoder"><span>wings.slardar.passcoder.salt-encoder</span></a></h3><p><code>String</code>=<code>sha256</code>, default salting algorithm. support sha256|sha1|md5</p><h3 id="wings-slardar-passcoder-time-deviation-30" tabindex="-1"><a class="header-anchor" href="#wings-slardar-passcoder-time-deviation-30"><span>wings.slardar.passcoder.time-deviation=30</span></a></h3><p><code>Integer</code>=<code>30</code>, The max seconds of timestamp deviation of BasicPasswordEncoder.</p><h2 id="_3j-8-wings-remote-resolver-79-properties" tabindex="-1"><a class="header-anchor" href="#_3j-8-wings-remote-resolver-79-properties"><span>3J.8.wings-remote-resolver-79.properties</span></a></h2><h3 id="wings-slardar-remote-inner-ip" tabindex="-1"><a class="header-anchor" href="#wings-slardar-remote-inner-ip"><span>wings.slardar.remote.inner-ip</span></a></h3><p><code>Map&lt;String, String&gt;</code>, intranet segments not considered as remote ip</p><ul><li><code>local-127</code>=<code>127.</code></li><li><code>local-192</code>=<code>192.</code></li><li><code>local-0v6</code>=<code>0:0:0:0:0:0</code></li><li><code>local-0v4</code>=<code>0.0.0.</code></li></ul><h3 id="wings-slardar-remote-ip-header" tabindex="-1"><a class="header-anchor" href="#wings-slardar-remote-ip-header"><span>wings.slardar.remote.ip-header</span></a></h3><p><code>Map&lt;String, String&gt;</code>, which header to get the real ip when behind proxy.</p><ul><li><code>Real-IP</code>=<code>X-Real-IP</code></li><li><code>Forwarded-For</code>=<code>X-Forwarded-For</code></li></ul><h3 id="wings-slardar-remote-agent-header" tabindex="-1"><a class="header-anchor" href="#wings-slardar-remote-agent-header"><span>wings.slardar.remote.agent-header</span></a></h3><p><code>Map&lt;String, String&gt;</code>, which headers (use all) to get device info.</p><ul><li><code>User-Agent</code>=<code>User-Agent</code></li></ul><h2 id="_3j-9-wings-session-79-properties" tabindex="-1"><a class="header-anchor" href="#_3j-9-wings-session-79-properties"><span>3J.9.wings-session-79.properties</span></a></h2><h3 id="wings-slardar-session-header-name" tabindex="-1"><a class="header-anchor" href="#wings-slardar-session-header-name"><span>wings.slardar.session.header-name</span></a></h3><p><code>String</code>=<code>${server.servlet.session.cookie.name}</code></p><p>Use which name of header to resolve the session, empty means disable.</p><h3 id="wings-slardar-session-cookie-name" tabindex="-1"><a class="header-anchor" href="#wings-slardar-session-cookie-name"><span>wings.slardar.session.cookie-name</span></a></h3><p><code>String</code>=<code>${server.servlet.session.cookie.name}</code></p><p>Use which name of cookie to resolve the session, empty means disable.</p><h3 id="wings-slardar-session-cookie-base64" tabindex="-1"><a class="header-anchor" href="#wings-slardar-session-cookie-base64"><span>wings.slardar.session.cookie-base64</span></a></h3><p><code>Boolean</code>=<code>false</code>, whether to base64 encode the session.</p><h3 id="wings-slardar-session-cookie-route" tabindex="-1"><a class="header-anchor" href="#wings-slardar-session-cookie-route"><span>wings.slardar.session.cookie-route</span></a></h3><p><code>String=</code>, add jvm route to session, empty means disable.</p><h2 id="_3j-a-wings-terminal-79-properties" tabindex="-1"><a class="header-anchor" href="#_3j-a-wings-terminal-79-properties"><span>3J.A.wings-terminal-79.properties</span></a></h2><h3 id="wings-slardar-terminal-exclude-patterns" tabindex="-1"><a class="header-anchor" href="#wings-slardar-terminal-exclude-patterns"><span>wings.slardar.terminal.exclude-patterns</span></a></h3><p><code>Map&lt;String, String&gt;</code>, URLs not processed by TerminalInterceptor.</p><ul><li><code>error</code>=<code>/error</code></li><li><code>api</code>=<code>/api/**</code></li><li><code>oauth</code>=<code>/oauth/**</code></li></ul><h3 id="wings-slardar-terminal-include-patterns" tabindex="-1"><a class="header-anchor" href="#wings-slardar-terminal-include-patterns"><span>wings.slardar.terminal.include-patterns</span></a></h3><p><code>Map&lt;String, String&gt;</code>, exclude takes precedence over include</p><h3 id="wings-slardar-terminal-locale-request" tabindex="-1"><a class="header-anchor" href="#wings-slardar-terminal-locale-request"><span>wings.slardar.terminal.locale-request</span></a></h3><p><code>boolean</code>=<code>true</code>, whether to set locale from request first than server.</p><h3 id="wings-slardar-terminal-timezone-request" tabindex="-1"><a class="header-anchor" href="#wings-slardar-terminal-timezone-request"><span>wings.slardar.terminal.timezone-request</span></a></h3><p><code>boolean</code>=<code>false</code>, whether to set timezone from request first than server.</p>',174),t=[n];function d(o,l){return r(),a("div",null,t)}const g=e(i,[["render",d],["__file","3j-prop-webmvc.html.vue"]]),h=JSON.parse('{"path":"/3-slardar/3j-prop-webmvc.html","title":"3J.WebMvc Properties","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"folder-tree","category":["Slardar","Property"],"description":"3J.WebMvc Properties Properties of Spring WebMvc in Slardar 3J.1.wings-cookie-79.properties All the following name settings are the original, that is, without prefix and alias. ...","GIT_REPO_HEAD":"2024-07-07 fbb1f4817448a18f6c9bd497c9b5837508d2198e","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/3-slardar/3j-prop-webmvc.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/3-slardar/3j-prop-webmvc.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"3J.WebMvc Properties"}],["meta",{"property":"og:description","content":"3J.WebMvc Properties Properties of Spring WebMvc in Slardar 3J.1.wings-cookie-79.properties All the following name settings are the original, that is, without prefix and alias. ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3J.WebMvc Properties\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"3J.1.wings-cookie-79.properties","slug":"_3j-1-wings-cookie-79-properties","link":"#_3j-1-wings-cookie-79-properties","children":[{"level":3,"title":"wings.slardar.cookie.prefix","slug":"wings-slardar-cookie-prefix","link":"#wings-slardar-cookie-prefix","children":[]},{"level":3,"title":"wings.slardar.cookie.alias","slug":"wings-slardar-cookie-alias","link":"#wings-slardar-cookie-alias","children":[]},{"level":3,"title":"wings.slardar.cookie.coder","slug":"wings-slardar-cookie-coder","link":"#wings-slardar-cookie-coder","children":[]},{"level":3,"title":"wings.slardar.cookie.nop","slug":"wings-slardar-cookie-nop","link":"#wings-slardar-cookie-nop","children":[]},{"level":3,"title":"wings.slardar.cookie.b64","slug":"wings-slardar-cookie-b64","link":"#wings-slardar-cookie-b64","children":[]},{"level":3,"title":"wings.slardar.cookie.aes","slug":"wings-slardar-cookie-aes","link":"#wings-slardar-cookie-aes","children":[]},{"level":3,"title":"wings.slardar.cookie.http-only","slug":"wings-slardar-cookie-http-only","link":"#wings-slardar-cookie-http-only","children":[]},{"level":3,"title":"wings.slardar.cookie.secure","slug":"wings-slardar-cookie-secure","link":"#wings-slardar-cookie-secure","children":[]},{"level":3,"title":"wings.slardar.cookie.domain","slug":"wings-slardar-cookie-domain","link":"#wings-slardar-cookie-domain","children":[]},{"level":3,"title":"wings.slardar.cookie.path","slug":"wings-slardar-cookie-path","link":"#wings-slardar-cookie-path","children":[]}]},{"level":2,"title":"3J.2.wings-datetime-79.properties","slug":"_3j-2-wings-datetime-79-properties","link":"#_3j-2-wings-datetime-79-properties","children":[{"level":3,"title":"wings.slardar.datetime.date.format","slug":"wings-slardar-datetime-date-format","link":"#wings-slardar-datetime-date-format","children":[]},{"level":3,"title":"wings.slardar.datetime.date.parser","slug":"wings-slardar-datetime-date-parser","link":"#wings-slardar-datetime-date-parser","children":[]},{"level":3,"title":"wings.slardar.datetime.time.format","slug":"wings-slardar-datetime-time-format","link":"#wings-slardar-datetime-time-format","children":[]},{"level":3,"title":"wings.slardar.datetime.time.parser","slug":"wings-slardar-datetime-time-parser","link":"#wings-slardar-datetime-time-parser","children":[]},{"level":3,"title":"wings.slardar.datetime.datetime.auto","slug":"wings-slardar-datetime-datetime-auto","link":"#wings-slardar-datetime-datetime-auto","children":[]},{"level":3,"title":"wings.slardar.datetime.datetime.format","slug":"wings-slardar-datetime-datetime-format","link":"#wings-slardar-datetime-datetime-format","children":[]},{"level":3,"title":"wings.slardar.datetime.datetime.parser","slug":"wings-slardar-datetime-datetime-parser","link":"#wings-slardar-datetime-datetime-parser","children":[]},{"level":3,"title":"wings.slardar.datetime.zoned.auto","slug":"wings-slardar-datetime-zoned-auto","link":"#wings-slardar-datetime-zoned-auto","children":[]},{"level":3,"title":"wings.slardar.datetime.zoned.format","slug":"wings-slardar-datetime-zoned-format","link":"#wings-slardar-datetime-zoned-format","children":[]},{"level":3,"title":"wings.slardar.datetime.zoned.parser","slug":"wings-slardar-datetime-zoned-parser","link":"#wings-slardar-datetime-zoned-parser","children":[]},{"level":3,"title":"wings.slardar.datetime.offset.auto","slug":"wings-slardar-datetime-offset-auto","link":"#wings-slardar-datetime-offset-auto","children":[]},{"level":3,"title":"wings.slardar.datetime.offset.format","slug":"wings-slardar-datetime-offset-format","link":"#wings-slardar-datetime-offset-format","children":[]},{"level":3,"title":"wings.slardar.datetime.offset.parser","slug":"wings-slardar-datetime-offset-parser","link":"#wings-slardar-datetime-offset-parser","children":[]},{"level":3,"title":"wings.slardar.datetime.clock-offset","slug":"wings-slardar-datetime-clock-offset","link":"#wings-slardar-datetime-clock-offset","children":[]}]},{"level":2,"title":"3J.3.wings-jackson-79.properties","slug":"_3j-3-wings-jackson-79-properties","link":"#_3j-3-wings-jackson-79-properties","children":[{"level":3,"title":"wings.slardar.jackson.empty-date","slug":"wings-slardar-jackson-empty-date","link":"#wings-slardar-jackson-empty-date","children":[]},{"level":3,"title":"wings.slardar.jackson.empty-date-offset","slug":"wings-slardar-jackson-empty-date-offset","link":"#wings-slardar-jackson-empty-date-offset","children":[]},{"level":3,"title":"wings.slardar.jackson.empty-list","slug":"wings-slardar-jackson-empty-list","link":"#wings-slardar-jackson-empty-list","children":[]},{"level":3,"title":"wings.slardar.jackson.empty-map","slug":"wings-slardar-jackson-empty-map","link":"#wings-slardar-jackson-empty-map","children":[]},{"level":3,"title":"wings.slardar.jackson.i18n-result","slug":"wings-slardar-jackson-i18n-result","link":"#wings-slardar-jackson-i18n-result","children":[]}]},{"level":2,"title":"3J.4.wings-locale-resolver-79.properties","slug":"_3j-4-wings-locale-resolver-79-properties","link":"#_3j-4-wings-locale-resolver-79-properties","children":[{"level":3,"title":"Locale or Language","slug":"locale-or-language","link":"#locale-or-language","children":[]},{"level":3,"title":"Timezone or Zoneid","slug":"timezone-or-zoneid","link":"#timezone-or-zoneid","children":[]}]},{"level":2,"title":"3J.5.wings-number-79.properties","slug":"_3j-5-wings-number-79-properties","link":"#_3j-5-wings-number-79-properties","children":[{"level":3,"title":"wings.slardar.number.integer.format","slug":"wings-slardar-number-integer-format","link":"#wings-slardar-number-integer-format","children":[]},{"level":3,"title":"wings.slardar.number.integer.round=FLOOR","slug":"wings-slardar-number-integer-round-floor","link":"#wings-slardar-number-integer-round-floor","children":[]},{"level":3,"title":"wings.slardar.number.integer.separator","slug":"wings-slardar-number-integer-separator","link":"#wings-slardar-number-integer-separator","children":[]},{"level":3,"title":"wings.slardar.number.integer.digital","slug":"wings-slardar-number-integer-digital","link":"#wings-slardar-number-integer-digital","children":[]},{"level":3,"title":"wings.slardar.number.floats.format","slug":"wings-slardar-number-floats-format","link":"#wings-slardar-number-floats-format","children":[]},{"level":3,"title":"wings.slardar.number.floats.round","slug":"wings-slardar-number-floats-round","link":"#wings-slardar-number-floats-round","children":[]},{"level":3,"title":"wings.slardar.number.floats.separator","slug":"wings-slardar-number-floats-separator","link":"#wings-slardar-number-floats-separator","children":[]},{"level":3,"title":"wings.slardar.number.floats.digital","slug":"wings-slardar-number-floats-digital","link":"#wings-slardar-number-floats-digital","children":[]},{"level":3,"title":"wings.slardar.number.decimal.format","slug":"wings-slardar-number-decimal-format","link":"#wings-slardar-number-decimal-format","children":[]},{"level":3,"title":"wings.slardar.number.decimal.round","slug":"wings-slardar-number-decimal-round","link":"#wings-slardar-number-decimal-round","children":[]},{"level":3,"title":"wings.slardar.number.decimal.separator","slug":"wings-slardar-number-decimal-separator","link":"#wings-slardar-number-decimal-separator","children":[]},{"level":3,"title":"wings.slardar.number.decimal.digital","slug":"wings-slardar-number-decimal-digital","link":"#wings-slardar-number-decimal-digital","children":[]}]},{"level":2,"title":"3J.6.wings-pagequery-79.properties","slug":"_3j-6-wings-pagequery-79-properties","link":"#_3j-6-wings-pagequery-79-properties","children":[{"level":3,"title":"wings.slardar.pagequery.page","slug":"wings-slardar-pagequery-page","link":"#wings-slardar-pagequery-page","children":[]},{"level":3,"title":"wings.slardar.pagequery.size","slug":"wings-slardar-pagequery-size","link":"#wings-slardar-pagequery-size","children":[]},{"level":3,"title":"wings.slardar.pagequery.page-alias","slug":"wings-slardar-pagequery-page-alias","link":"#wings-slardar-pagequery-page-alias","children":[]},{"level":3,"title":"wings.slardar.pagequery.size-alias","slug":"wings-slardar-pagequery-size-alias","link":"#wings-slardar-pagequery-size-alias","children":[]},{"level":3,"title":"wings.slardar.pagequery.sort-alias","slug":"wings-slardar-pagequery-sort-alias","link":"#wings-slardar-pagequery-sort-alias","children":[]}]},{"level":2,"title":"3J.7.wings-passcoder-79.properties","slug":"_3j-7-wings-passcoder-79-properties","link":"#_3j-7-wings-passcoder-79-properties","children":[{"level":3,"title":"wings.slardar.passcoder.pass-encoder","slug":"wings-slardar-passcoder-pass-encoder","link":"#wings-slardar-passcoder-pass-encoder","children":[]},{"level":3,"title":"wings.slardar.passcoder.pass-decoder","slug":"wings-slardar-passcoder-pass-decoder","link":"#wings-slardar-passcoder-pass-decoder","children":[]},{"level":3,"title":"wings.slardar.passcoder.salt-encoder","slug":"wings-slardar-passcoder-salt-encoder","link":"#wings-slardar-passcoder-salt-encoder","children":[]},{"level":3,"title":"wings.slardar.passcoder.time-deviation=30","slug":"wings-slardar-passcoder-time-deviation-30","link":"#wings-slardar-passcoder-time-deviation-30","children":[]}]},{"level":2,"title":"3J.8.wings-remote-resolver-79.properties","slug":"_3j-8-wings-remote-resolver-79-properties","link":"#_3j-8-wings-remote-resolver-79-properties","children":[{"level":3,"title":"wings.slardar.remote.inner-ip","slug":"wings-slardar-remote-inner-ip","link":"#wings-slardar-remote-inner-ip","children":[]},{"level":3,"title":"wings.slardar.remote.ip-header","slug":"wings-slardar-remote-ip-header","link":"#wings-slardar-remote-ip-header","children":[]},{"level":3,"title":"wings.slardar.remote.agent-header","slug":"wings-slardar-remote-agent-header","link":"#wings-slardar-remote-agent-header","children":[]}]},{"level":2,"title":"3J.9.wings-session-79.properties","slug":"_3j-9-wings-session-79-properties","link":"#_3j-9-wings-session-79-properties","children":[{"level":3,"title":"wings.slardar.session.header-name","slug":"wings-slardar-session-header-name","link":"#wings-slardar-session-header-name","children":[]},{"level":3,"title":"wings.slardar.session.cookie-name","slug":"wings-slardar-session-cookie-name","link":"#wings-slardar-session-cookie-name","children":[]},{"level":3,"title":"wings.slardar.session.cookie-base64","slug":"wings-slardar-session-cookie-base64","link":"#wings-slardar-session-cookie-base64","children":[]},{"level":3,"title":"wings.slardar.session.cookie-route","slug":"wings-slardar-session-cookie-route","link":"#wings-slardar-session-cookie-route","children":[]}]},{"level":2,"title":"3J.A.wings-terminal-79.properties","slug":"_3j-a-wings-terminal-79-properties","link":"#_3j-a-wings-terminal-79-properties","children":[{"level":3,"title":"wings.slardar.terminal.exclude-patterns","slug":"wings-slardar-terminal-exclude-patterns","link":"#wings-slardar-terminal-exclude-patterns","children":[]},{"level":3,"title":"wings.slardar.terminal.include-patterns","slug":"wings-slardar-terminal-include-patterns","link":"#wings-slardar-terminal-include-patterns","children":[]},{"level":3,"title":"wings.slardar.terminal.locale-request","slug":"wings-slardar-terminal-locale-request","link":"#wings-slardar-terminal-locale-request","children":[]},{"level":3,"title":"wings.slardar.terminal.timezone-request","slug":"wings-slardar-terminal-timezone-request","link":"#wings-slardar-terminal-timezone-request","children":[]}]}],"git":{"createdTime":1656422147000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":9}]},"readingTime":{"minutes":3.91,"words":1172},"filePathRelative":"3-slardar/3j-prop-webmvc.md","localizedDate":"June 28, 2022","autoDesc":true}');export{g as comp,h as data};
