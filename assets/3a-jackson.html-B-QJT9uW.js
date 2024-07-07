import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as a,e as s}from"./app-BcJ4NaN5.js";const n={},t=s(`<h1 id="_3a-jackson-convention" tabindex="-1"><a class="header-anchor" href="#_3a-jackson-convention"><span>3A.Jackson Convention</span></a></h1><p>Conversion of common data types in Mvc server.</p><h2 id="_3a-1-common-type-conventions" tabindex="-1"><a class="header-anchor" href="#_3a-1-common-type-conventions"><span>3A.1.Common Type Conventions</span></a></h2><p>Given the differences between java and js, data transfer, and functionality, the convention is as follows.</p><ul><li>float number to java.BigDecimal and js.string to pass each other</li><li>java.null not to pass each other in Json</li><li>java.integer, interpass with js.number/string</li><li>java.datetime, including <code>util.Date</code>, <code>sql.Date</code>, <code>time.Local*|Zoned*|Instant</code></li><li>java.datetime, in timestamp format with js.number</li><li>java.datetime, in <code>yyyy-MM-dd HH:mm:ss</code> format with js.string</li><li>java.timezone, both in ZoneId string format with js.string</li><li>object key cannot be a variable, <code>{steve:15}</code> is <code>{name:&#39;steve&#39;,age:15}</code></li></ul><h2 id="_3a-2-lost-precision-and-trait" tabindex="-1"><a class="header-anchor" href="#_3a-2-lost-precision-and-trait"><span>3A.2.Lost Precision and Trait</span></a></h2><p>Because of the character of js, there will be precision and character (type, sorting, etc.) loss problems, such as the key of object may lose the original order.</p><ul><li>It is better to have only 2 basic data types in Json: boolean and string</li><li>Js does not handle numeric calculations with precision, and should only be responsible for displaying the results of server-side calculations.</li><li>Due to the special nature of time, there are timezones and daylight saving time, readability is preferred when guaranteeing accuracy</li><li>53bits of long, must use string, because IEE754 cannot be correctly represented</li><li>integer and long, use number by default, consider typescript compatibility</li><li>Ensure jsr310 format compatibility, e.g. rely on <code>jackson-datatype-jsr310</code></li><li>ZoneId should prefer <code>IANA TZDB</code> format, e.g. <code>America/New_York</code></li><li>Serialization and deserialization process with time zone (<code>Z</code>) will lose daylight saving time information</li></ul><p>Note: The property name prefix cannot be a single letter, Wings recommends more than 3 letters. Because <code>sCount</code> will lead to parsing errors, see test OkHttpClientHelperTest.testPostBad</p><h2 id="_3a-3-i18n-of-content" tabindex="-1"><a class="header-anchor" href="#_3a-3-i18n-of-content"><span>3A.3.I18n of Content</span></a></h2><p>Auto I18n conversion of content by annotation and type to string output.</p><ul><li><code>I18nString</code> type is automatically converted</li><li><code>CharSequence</code> with <code>@JsonI18nString</code> annotation is converted as message_code</li><li><code>@JsonI18nString(false)</code> disables auto-conversion</li><li><code>R.I&lt;T&gt;</code> is the common return type and will auto replace <code>message</code> with i18n when <code>i18nCode</code> is present, Auto-conversion uses the injected <code>messageSource</code> and <code>WingsI18nContext</code> to get the appropriate language</li></ul><h2 id="_3a-4-datetime-format" tabindex="-1"><a class="header-anchor" href="#_3a-4-datetime-format"><span>3A.4.DateTime Format</span></a></h2><p>Supports the following date format customizations in java.time, including Json and Spring.</p><ul><li>LocalDate, LocalTime, LocalDateTime, multiple input formats, single output format customization.</li><li>ZonedDateTime, same as <code>Local*</code> support auto-switching to user timezone, off by default.</li><li>OffsetDateTime, same as \`Local* support auto-switching to user timezone, on by default</li></ul><p>For example, the default configuration of wings-datetime-79.properties in the LocalDate support,</p><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># output in 2021-01-30 format</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">wings.slardar.datetime.date.format</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">yyyy[-MM][-dd]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># input support 2021-01-30 and Jan/30/2021, etc.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">wings.slardar.datetime.date.parser</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">\\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">,yyyy[-][/][.][M][-][/][.][d]\\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">,[MMMM][MMM][M][-][/][.][d][-][/][.][yyyy][yy]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># see SmartFormatter.java testcase</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3a-5-number-format" tabindex="-1"><a class="header-anchor" href="#_3a-5-number-format"><span>3A.5.Number Format</span></a></h2><p>Int,Long,Float,Double,BigDecimal support (Json) customization of output format and rounding format. Note that in the actual project, Float and Double should be avoided and BigDecimal should be used. Within Wings convention, the only commonly Number types should be Int, Long and BigDecimal.</p><p>For example, the default configuration of Decimal support in wings-number-79.properties is,</p><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># Keep 2 decimal places, Floor mode</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">wings.slardar.number.decimal.format</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">#.00</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">wings.slardar.number.decimal.round</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">FLOOR</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">wings.slardar.number.decimal.separator</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">,</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also set, according to Chinese custom, every 4 digits separated by <code>_</code>, add CNY symbol,</p><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">wings.slardar.number.decimal.format</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">￥,</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">####.00</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">wings.slardar.number.decimal.separator</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">_</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># see DecimalFormatTest.java</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>digital=auto</code> auto switches between number and string when the JS numeric value exceeds Number.M##_SAFE_INTEGER. By default configuration, <code>auto</code> is used only for int32 and int64, need to be used with caution, check type or disable <code>auto</code>(<code>false</code>)</p><h2 id="_3a-6-empty-data-handling" tabindex="-1"><a class="header-anchor" href="#_3a-6-empty-data-handling"><span>3A.6.Empty Data Handling</span></a></h2><p>This feature is enabled by default and will cause inconsistencies in the serialization and deserialization. Must handle the difference yourself.</p><ul><li>Empty date is considered null, not output to avoid a lot of 1000-01-01 data</li><li>Array/Collection/Map is not output if it is empty</li></ul><h2 id="_3a-7-common-jackson-annotations" tabindex="-1"><a class="header-anchor" href="#_3a-7-common-jackson-annotations"><span>3A.7.Common Jackson Annotations</span></a></h2><ul><li>@JsonRawValue - number not to string, string not escaped</li><li>@JsonFormat - specify the format</li><li>@JsonIgnore/JsonProperty - ignore the field</li><li>@JsonProperty - rename the field</li><li>@JsonNaming - naming rules</li><li>@JsonRootName(value = &quot;user&quot;) - add a root name</li><li>@JsonUnwrapped - without wrapper class</li><li>@JsonSerialize(as=BasicType.class) - output as other</li><li>@JsonView - filter properties with different views (works on RequestMapping)</li></ul><p>Avoid global type filters and mixins in general, session-level annotations are recommended.</p><ul><li>Same pojo, different property names for different scenarios, eg. password and secret</li><li>Same pojo with different values for different scenarios, eg. yyyy-MM-dd and MMM-dd,yyyy</li></ul><p>For the above scenarios, it is still important to follow the principles of static and strong typing, and the following suggestions can usually be used</p><ul><li>Own classes, use @JsonView + different getter to distinguish different scenarios</li><li>3rd classes, using Override subclasses + MapStruct to copy properties</li><li>Custom JsonSerialize or Converter, not recommended</li><li>Custom ResponseBodyAdvice, not recommended</li></ul><p>By default configuration, only @JsonView can act on RequestMapping, other annotations should be noted on Pojo. see,</p><ul><li><a href="https://www.baeldung.com/jackson-annotations" target="_blank" rel="noopener noreferrer">baeldung example</a></li><li><a href="https://github.com/FasterXML/jackson-annotations/wiki/Jackson-Annotations" target="_blank" rel="noopener noreferrer">jackson annotation</a></li><li><a href="https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#howto.spring-mvc.customize-jackson-objectmapper" target="_blank" rel="noopener noreferrer">spring customize jackson</a></li></ul><h2 id="_3a-8-generic-in-deserialization" tabindex="-1"><a class="header-anchor" href="#_3a-8-generic-in-deserialization"><span>3A.8.Generic in Deserialization</span></a></h2><p>Jackson includes generic types, and parameter types are a necessary skill.</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">TypeReference</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> ref </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> TypeReference</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">() { }</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// TypeFactory has a rich set of type constructs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">JavaType</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> type </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> mapper</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getTypeFactory</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">constructCollectionType</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">class</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Foo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">class</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38),o=[t];function l(r,d){return a(),e("div",null,o)}const c=i(n,[["render",l],["__file","3a-jackson.html.vue"]]),k=JSON.parse('{"path":"/3-slardar/3a-jackson.html","title":"3A.Jackson Convention","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"feather","category":["Slardar","Convention","Json"],"description":"3A.Jackson Convention Conversion of common data types in Mvc server. 3A.1.Common Type Conventions Given the differences between java and js, data transfer, and functionality, th...","GIT_REPO_HEAD":"2024-07-07 fbb1f4817448a18f6c9bd497c9b5837508d2198e","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/3-slardar/3a-jackson.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/3-slardar/3a-jackson.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"3A.Jackson Convention"}],["meta",{"property":"og:description","content":"3A.Jackson Convention Conversion of common data types in Mvc server. 3A.1.Common Type Conventions Given the differences between java and js, data transfer, and functionality, th..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3A.Jackson Convention\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"3A.1.Common Type Conventions","slug":"_3a-1-common-type-conventions","link":"#_3a-1-common-type-conventions","children":[]},{"level":2,"title":"3A.2.Lost Precision and Trait","slug":"_3a-2-lost-precision-and-trait","link":"#_3a-2-lost-precision-and-trait","children":[]},{"level":2,"title":"3A.3.I18n of Content","slug":"_3a-3-i18n-of-content","link":"#_3a-3-i18n-of-content","children":[]},{"level":2,"title":"3A.4.DateTime Format","slug":"_3a-4-datetime-format","link":"#_3a-4-datetime-format","children":[]},{"level":2,"title":"3A.5.Number Format","slug":"_3a-5-number-format","link":"#_3a-5-number-format","children":[]},{"level":2,"title":"3A.6.Empty Data Handling","slug":"_3a-6-empty-data-handling","link":"#_3a-6-empty-data-handling","children":[]},{"level":2,"title":"3A.7.Common Jackson Annotations","slug":"_3a-7-common-jackson-annotations","link":"#_3a-7-common-jackson-annotations","children":[]},{"level":2,"title":"3A.8.Generic in Deserialization","slug":"_3a-8-generic-in-deserialization","link":"#_3a-8-generic-in-deserialization","children":[]}],"git":{"createdTime":1655901635000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":6}]},"readingTime":{"minutes":2.81,"words":842},"filePathRelative":"3-slardar/3a-jackson.md","localizedDate":"June 22, 2022","autoDesc":true}');export{c as comp,k as data};
