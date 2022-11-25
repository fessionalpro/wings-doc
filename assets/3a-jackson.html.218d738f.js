import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as l,b as a,e as n,d as s,f as t,r as c}from"./app.9a05138f.js";const r={},p=t(`<h1 id="_3a-jackson格式约定" tabindex="-1"><a class="header-anchor" href="#_3a-jackson格式约定" aria-hidden="true">#</a> 3A.Jackson格式约定</h1><p>在Mvc对外服务时，约定常见数据类型的转换关系。</p><h2 id="_3a-1-常用类型约定" tabindex="-1"><a class="header-anchor" href="#_3a-1-常用类型约定" aria-hidden="true">#</a> 3A.1.常用类型约定</h2><p>考虑到java和js的差异，数据传递和功能上，约定如下，</p><ul><li>浮点数值，以java.BigDecimal与js.string互传</li><li>java.null 不输在Json中互传</li><li>java.整数，与js.number/string互传</li><li>java.日时，包括<code>util.Date</code>,<code>sql.Date</code>,<code>time.Local*|Zoned*|Instant</code></li><li>java.日时，以时间戳形式与js.number互传</li><li>java.日时，都以<code>yyyy-MM-dd HH:mm:ss</code>格式与js.string互传</li><li>java.时区，以ZoneId字符串格式与js.string互传</li></ul><h2 id="_3a-2-精度及特性丢失" tabindex="-1"><a class="header-anchor" href="#_3a-2-精度及特性丢失" aria-hidden="true">#</a> 3A.2.精度及特性丢失</h2><p>因为js的特殊性，会出现精度和特性（类型，排序等）丢失问题，比如object的key可丢失原顺序。</p><ul><li>Json中最好只有2种基本数据类型：boolean,string</li><li>Js不处理有精度要求的数值计算，只应负责显示服务器端计算结果</li><li>因为时间的特殊性，还有时区和夏令时，在保证精度下可读性优先</li><li>53bits位的long，必须使用string，因为IEE754无法正确表示</li><li>integer和long，默认使用number，考虑typescript兼容性</li><li>确保jsr310格式兼容，如依赖<code>jackson-datatype-jsr310</code></li><li>ZoneId应首选<code>IANA TZDB</code>格式，如<code>America/New_York</code></li><li>带时区(<code>Z</code>)的序列化与反序列化过程，会丢失夏令时信息</li></ul><p>注意：属性名前缀不可以单字母，wings规范建议3字母以上。 因为<code>sCount</code>会导致解析错误，见测试 OkHttpClientHelperTest.testPostBad</p><h2 id="_3a-3-内容的国际化" tabindex="-1"><a class="header-anchor" href="#_3a-3-内容的国际化" aria-hidden="true">#</a> 3A.3.内容的国际化</h2><p>通过注解和类型自动对内容进行i18n转换，以字符串输出。</p><ul><li><code>I18nString</code>类型会自动转换</li><li><code>@JsonI18nString</code>注解的<code>CharSequence</code>当做message_code转化</li><li><code>@JsonI18nString(false)</code>可以关闭自动转换</li><li><code>R.I&lt;T&gt;</code>为常用返回值类型，当存在<code>i18nCode</code>时，会用i18n信息自动替换<code>message</code> 自动转化使用注入的<code>messageSource</code>和<code>WingsI18nContext</code>获得相应语言</li></ul><h2 id="_3a-4-日期时间的格式" tabindex="-1"><a class="header-anchor" href="#_3a-4-日期时间的格式" aria-hidden="true">#</a> 3A.4.日期时间的格式</h2><p>支持java.time中以下日期格式的定制，包括Json和Spring。</p><ul><li>LocalDate，LocalTime，LocalDateTime，多个输入格式，单个输出格式定制。</li><li>ZonedDateTime，同<code>Local*</code>功能。可支持自动切换到用户时区，默认关闭。</li><li>OffsetDateTime，同<code>Local*</code>功能，可支持自动切换到用户时区，默认打开</li></ul><p>例如，默认配置 wings-datetime-79.properties 中的LocalDate支持</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 输出时以 2021-01-30格式</span>
<span class="token key attr-name">wings.slardar.datetime.date.format</span><span class="token punctuation">=</span><span class="token value attr-value">yyyy[-MM][-dd]</span>
<span class="token comment"># 输入的时候，支持 2021-01-30 和 Jan/30/2021等多种</span>
<span class="token key attr-name">wings.slardar.datetime.date.parser</span><span class="token punctuation">=</span><span class="token value attr-value">\\
,yyyy[-][/][.][M][-][/][.][d]\\
,[MMMM][MMM][M][-][/][.][d][-][/][.][yyyy][yy]</span>
<span class="token comment"># 参考 SmartFormatter.java 测试</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3a-5-数字的格式" tabindex="-1"><a class="header-anchor" href="#_3a-5-数字的格式" aria-hidden="true">#</a> 3A.5.数字的格式</h2><p>对Int,Long,Float,Double,BigDecimal支持（Json）输出时格式和舍入格式的定制 需要注意的是，实际项目中，应该避免使用Float和Double，应该使用BigDecimal。 在wings约定内，常用的Number类型，应该只有Int，Long和BigDecimal。</p><p>例如，默认配置 wings-number-79.properties 中的Decimal支持，</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 以Floor方式，保留2位小数</span>
<span class="token key attr-name">wings.slardar.number.decimal.format</span><span class="token punctuation">=</span><span class="token value attr-value">#.00</span>
<span class="token key attr-name">wings.slardar.number.decimal.round</span><span class="token punctuation">=</span><span class="token value attr-value">FLOOR</span>
<span class="token key attr-name">wings.slardar.number.decimal.separator</span><span class="token punctuation">=</span><span class="token value attr-value">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以设置，按中国人习惯，每4位用<code>_</code>分隔，增加CNY符号</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">wings.slardar.number.decimal.format</span><span class="token punctuation">=</span><span class="token value attr-value">￥,####.00</span>
<span class="token key attr-name">wings.slardar.number.decimal.separator</span><span class="token punctuation">=</span><span class="token value attr-value">_</span>
<span class="token comment"># 参考 DecimalFormatTest.java</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当JS场景数字value超越 Number.M##_SAFE_INTEGER时，<code>digital=auto</code>自动切换number和string。 默认配置中，仅对int32和int64使用了auto，需要谨慎使用，检查类型或关闭auto(false)</p><h2 id="_3a-6-空empty数据处理" tabindex="-1"><a class="header-anchor" href="#_3a-6-空empty数据处理" aria-hidden="true">#</a> 3A.6.空Empty数据处理</h2><p>此功能默认开启，会造成正反序列化的不一致。需要自行处理差异</p><ul><li>日期empty视为null，不输出，避免出现很多1000-01-01的数据</li><li>array/Collection/Map为empty时，不输出</li></ul><h2 id="_3a-7-常用jackson注解" tabindex="-1"><a class="header-anchor" href="#_3a-7-常用jackson注解" aria-hidden="true">#</a> 3A.7.常用Jackson注解</h2><ul><li>@JsonRawValue - number不变字符串，字符串不转义</li><li>@JsonFormat - 指定格式</li><li>@JsonIgnore/JsonProperty - 忽略该字段</li><li>@JsonProperty - 重命名</li><li>@JsonNaming - 命名规则</li><li>@JsonRootName(value = &quot;user&quot;) - 增加一个头key</li><li>@JsonUnwrapped - 干掉包装类</li><li>@JsonSerialize(as=BasicType.class) - 以别人的样子输出</li><li>@JsonView - 以不同视图过滤属性（可作用在RequestMapping）</li></ul><p>通常要避免全局类型的Filter和MixIn，推荐Session级的注解。</p><ul><li>同一pojo，不同场景的属性名不同，比如password和secret</li><li>同一pojo，不同场景的属性值不同，比如yyyy-MM-dd和MMM-dd,yyyy</li></ul><p>对于以上场景，仍然要遵循静态性和强类型原则，通常可以采用以下建议，</p><ul><li>自己的类，使用@JsonView + 不同的getter区分不同场景</li><li>第三方类，使用Override子类 + MapStruct复制属性</li><li>自定义JsonSerialize或Converter，不推荐</li><li>自定义 ResponseBodyAdvice，不推荐</li></ul><p>默认配置下，仅有@JsonView可作用于RequestMapping，其他注解要注到Pojo上。参考资料，</p>`,34),d={href:"https://www.baeldung.com/jackson-annotations",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/FasterXML/jackson-annotations/wiki/Jackson-Annotations",target:"_blank",rel:"noopener noreferrer"},m={href:"https://docs.spring.io/spring-boot/docs/2.6.6/reference/htmlsingle/howto-customize-the-jackson-objectmapper",target:"_blank",rel:"noopener noreferrer"},k=t(`<h2 id="_3a-8-反序列化泛型" tabindex="-1"><a class="header-anchor" href="#_3a-8-反序列化泛型" aria-hidden="true">#</a> 3A.8.反序列化泛型</h2><p>Jackson中涉及到泛型，参数类型，必备技能</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">TypeReference</span> ref <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TypeReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// TypeFactory 中有很丰富的类型构造</span>
<span class="token class-name">JavaType</span> type <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">getTypeFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">constructCollectionType</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">Foo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function v(h,g){const e=c("ExternalLinkIcon");return o(),l("div",null,[p,a("ul",null,[a("li",null,[a("a",d,[n("baeldung 示例"),s(e)])]),a("li",null,[a("a",u,[n("jackson注解"),s(e)])]),a("li",null,[a("a",m,[n("spring定制jackson"),s(e)])])]),k])}const _=i(r,[["render",v],["__file","3a-jackson.html.vue"]]);export{_ as default};
