import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as l,f as i}from"./app-DeKKb_dP.js";const n={},t=i(`<h1 id="b5-函数列表" tabindex="-1"><a class="header-anchor" href="#b5-函数列表"><span>B5.函数列表</span></a></h1><p>函数的用法，详情参看【字典引擎引擎 map】的管道约定和函数规则。<br> 函数全名和别名均以<code>fun:</code>为前缀。在不冲突时，管道符内前缀可省略。</p><p>在示例说明中，描述函数时，存在以下约定，</p><ul><li><code>obj</code> - 特指管道输出，没有时为null</li><li><code>arg...</code> - arg为可变参数。</li><li><code>arg?</code> - arg可以null，</li><li><code>&amp;opt</code> - opt选项是默认值</li><li><code>String:javaEval</code> - 返回类型String，函数类型是javaEval</li></ul><p>可在模板中，进行以下形式的使用</p><ul><li><code>{{ now }}</code> - 直接使用</li><li><code>{{ index | mod even odd | BIG_SNAKE }}</code> - 管道符链接</li></ul><h2 id="b5-1-时间类型" tabindex="-1"><a class="header-anchor" href="#b5-1-时间类型"><span>B5.1.时间类型</span></a></h2><p>以日期和时间为核心</p><h3 id="_1a-当前日时-now" tabindex="-1"><a class="header-anchor" href="#_1a-当前日时-now"><span>1a.当前日时 now</span></a></h3><p>类型用途：String:javaEval，输出指定格式的当前日期时间<br> 用法说明：fun:now ptn?</p><ul><li>obj - 若是<code>java.util.Date</code>或<code>TemporalAccessor</code>，则格式化</li><li>若是null或其他，则为<code>LocalDateTime.now()</code></li><li>ptn - 为<code>DateTimeFormatter</code>格式，</li><li><code>now</code> - 无参数，则为<code>yyyy-MM-dd HH:mm:ss</code></li><li><code>now.date</code> - 无参数，输出<code>yyyy-MM-dd</code></li><li><code>now.time</code> - 无参数 输出<code>HH:mm:ss</code></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># ptn含空格，用引号包围
{{ now &#39;yyyy-MM-dd HH:mm:ss&#39; }}
# 输出 2021-01-05 10:01:31
// RNA:USE /date/fun:now/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="b5-2-数值类型" tabindex="-1"><a class="header-anchor" href="#b5-2-数值类型"><span>B5.2.数值类型</span></a></h2><p>以数值为核心，主要以Long和BigDecimal为核心</p><h3 id="_2a-取余-mod" tabindex="-1"><a class="header-anchor" href="#_2a-取余-mod"><span>2a.取余 mod</span></a></h3><p>类型用途：String:javaEval，以MOD(obj, args.length)作为索引(0-based)，获得args中索引的值<br> 用法说明：fun:mod obj arg... 返回类型：以取模值为key获取context的值或key字符串</p><ul><li>obj - 可转换为Number，取intValue，对arg.length取余 <ul><li>Boolean, false=0, true=1</li><li>Number, intValue</li><li>Else, toString, BigDecimal</li></ul></li><li>arg - 必须有值，可为字符串或数字。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># index = 3; count = 4;
{{ index | mod even odd }}
{{ count | mod even &quot;&quot; }}
# 输出 odd even
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2b-绝对值-abs" tabindex="-1"><a class="header-anchor" href="#_2b-绝对值-abs"><span>2b.绝对值 abs</span></a></h3><p>类型用途：String:javaEval，对数值取绝对值 用法说明：fun:abs obj 返回类型：Long或BigDecimal类型的绝对值</p><ul><li>obj - 可转换为Number，返回Long或BigDecimal</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># npi = -3.14; count = 4;
{{ npi | abs }}
{{ count | abs }}
# 输出 3.14 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="b5-3-格式化-fmt" tabindex="-1"><a class="header-anchor" href="#b5-3-格式化-fmt"><span>B5.3.格式化 fmt</span></a></h2><p>对象格式化为字符串形式</p><h3 id="_3a-全格式printf" tabindex="-1"><a class="header-anchor" href="#_3a-全格式printf"><span>3a.全格式printf</span></a></h3><p>类型用途：String:javaEval，调用String.printf格式化对象<br> 用法说明：fun:fmt obj ptn 返回类型：字符串</p><ul><li>obj - 为任意对象</li><li>ptn - 为java格式化，调用String.format(ptn,obj)</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># amount = 1000
{{ amount | fmt &#39;$%,d&#39; }}
# 输出 $1,000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="b5-4-字符串类型" tabindex="-1"><a class="header-anchor" href="#b5-4-字符串类型"><span>B5.4.字符串类型</span></a></h2><p>以字符串为核心</p><h3 id="_4a-风格变换" tabindex="-1"><a class="header-anchor" href="#_4a-风格变换"><span>4a.风格变换</span></a></h3><p>类型用途：String:javaEval，对obj进行命名风格转换<br> 用法说明：fun:### obj arg?，其中 ### 为以下函数名和别名 返回类型：字符串</p><ul><li>upperCase 全部大写，支持 locale 参数</li><li>lowerCase 全部小写，支持 locale 参数</li><li>dotCase 逗点分隔，可定制大小写，如 try.do.for</li><li>kebabCase, kebab-case 减号分隔，可定制大小写，如 try-do-for</li><li>bigKebab, BIG-KEBAB 减号分隔，全大写，如 TRY-DO-FOR</li><li>camelCase 驼峰首字小写，如 tryDoFor</li><li>pascalCase, PascalCase 驼峰首字大写，如 TryDoFor</li><li>snakeCase, snake_case 下划线分隔，可定制大小写，如 try_do_for</li><li>bigSnake, BIG_SNAKE 下划线分隔，全大写，如 TRY_DO_FOR</li></ul><p>参数说明</p><ul><li>obj - String, 否则toString，null返回空串</li><li>arg - 在upperCase,lowerCase中，为locale格式</li><li>arg - 在dotCase,snakeCase,kebabCase中，为lower,upper,keep</li><li>其余函数无arg，不支持定制大小写</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># author = try&amp;DO&amp;for
{{ author | upperCase zh-cn }} #输出 TRY&amp;DO&amp;FOR
{{ author | lowerCase zh-cn }} #输出 try&amp;do&amp;for
{{ author | dotCase }}         #输出 try.do.for
{{ author | dotCase lower }}   #输出 try.do.for
{{ author | dotCase upper }}   #输出 TRY.DO.FOR
{{ author | dotCase keep }}    #输出 try.DO.for
{{ author | kebab-case }}      #输出 try-do-for
{{ author | BIG-KEBAB }}       #输出 TRY-DO-FOR
{{ author | camelCase }}       #输出 tryDoFor
{{ author | PascalCase }}      #输出 TryDoFor
{{ author | snake_case }}      #输出 try_do_for
{{ author | BIG_SNAKE }}       #输出 TRY_DO_FOR
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="b5-5-条件控制" tabindex="-1"><a class="header-anchor" href="#b5-5-条件控制"><span>B5.5.条件控制</span></a></h2><p>一些简单的条件控制输出</p><h3 id="_5a-输出可见-see" tabindex="-1"><a class="header-anchor" href="#_5a-输出可见-see"><span>5a.输出可见 see</span></a></h3><p>类型用途：String:javaEval，args输出第一个可见的值<br> 用法说明：fun:see obj arg... 返回类型：obj或arg中第一个非null或非空字符串空的值。</p><ul><li>obj - 任意对象</li><li>arg - 字符串或其他对象。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># ctx.put(&quot;nil&quot;, null);
#  ctx.put(&quot;empty&quot;, &quot;&quot;);
#  ctx.put(&quot;value&quot;, &quot;got&quot;);
{{ fun:see nil empty value }}
{{ nil | fun:see empty value }}
# 输出 got
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42),r=[t];function o(d,s){return a(),l("div",null,r)}const p=e(n,[["render",o],["__file","b5.function.html.vue"]]),m=JSON.parse('{"path":"/zh/b-meepo/b5.function.html","title":"B5.函数列表","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"palette","category":["米波","模板"],"description":"B5.函数列表 函数的用法，详情参看【字典引擎引擎 map】的管道约定和函数规则。 函数全名和别名均以fun:为前缀。在不冲突时，管道符内前缀可省略。 在示例说明中，描述函数时，存在以下约定， obj - 特指管道输出，没有时为null arg... - arg为可变参数。 arg? - arg可以null， &opt - opt选项是默认值 Stri...","GIT_REPO_HEAD":"2024-03-03 5d1e37643747355f7e7c87e8c0daf88979c5f90a","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/b-meepo/b5.function.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/b-meepo/b5.function.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"B5.函数列表"}],["meta",{"property":"og:description","content":"B5.函数列表 函数的用法，详情参看【字典引擎引擎 map】的管道约定和函数规则。 函数全名和别名均以fun:为前缀。在不冲突时，管道符内前缀可省略。 在示例说明中，描述函数时，存在以下约定， obj - 特指管道输出，没有时为null arg... - arg为可变参数。 arg? - arg可以null， &opt - opt选项是默认值 Stri..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-02T02:16:40.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-03-02T02:16:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"B5.函数列表\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-02T02:16:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"B5.1.时间类型","slug":"b5-1-时间类型","link":"#b5-1-时间类型","children":[{"level":3,"title":"1a.当前日时 now","slug":"_1a-当前日时-now","link":"#_1a-当前日时-now","children":[]}]},{"level":2,"title":"B5.2.数值类型","slug":"b5-2-数值类型","link":"#b5-2-数值类型","children":[{"level":3,"title":"2a.取余 mod","slug":"_2a-取余-mod","link":"#_2a-取余-mod","children":[]},{"level":3,"title":"2b.绝对值 abs","slug":"_2b-绝对值-abs","link":"#_2b-绝对值-abs","children":[]}]},{"level":2,"title":"B5.3.格式化 fmt","slug":"b5-3-格式化-fmt","link":"#b5-3-格式化-fmt","children":[{"level":3,"title":"3a.全格式printf","slug":"_3a-全格式printf","link":"#_3a-全格式printf","children":[]}]},{"level":2,"title":"B5.4.字符串类型","slug":"b5-4-字符串类型","link":"#b5-4-字符串类型","children":[{"level":3,"title":"4a.风格变换","slug":"_4a-风格变换","link":"#_4a-风格变换","children":[]}]},{"level":2,"title":"B5.5.条件控制","slug":"b5-5-条件控制","link":"#b5-5-条件控制","children":[{"level":3,"title":"5a.输出可见 see","slug":"_5a-输出可见-see","link":"#_5a-输出可见-see","children":[]}]}],"git":{"createdTime":1687077446000,"updatedTime":1709345800000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":2}]},"readingTime":{"minutes":3.19,"words":956},"filePathRelative":"zh/b-meepo/b5.function.md","localizedDate":"2023年6月18日","autoDesc":true}');export{p as comp,m as data};
