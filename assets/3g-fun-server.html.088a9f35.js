import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as p,o as l,c,b as n,d as e,e as t,f as s}from"./app.68cb4132.js";const i={},u=t(`<h1 id="_3g-\u540E\u7AEF\u9632\u62A4\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#_3g-\u540E\u7AEF\u9632\u62A4\u529F\u80FD" aria-hidden="true">#</a> 3G.\u540E\u7AEF\u9632\u62A4\u529F\u80FD</h1><p>\u5BF9\u540E\u7AEF\u670D\u52A1\uFF0C\u63D0\u4F9B\u4E00\u5B9A\u7684\u4FDD\u62A4\u548C\u63A7\u5236\u80FD\u529B</p><h2 id="_3g-1-\u540E\u7AEF\u9632\u6296" tabindex="-1"><a class="header-anchor" href="#_3g-1-\u540E\u7AEF\u9632\u6296" aria-hidden="true">#</a> 3G.1.\u540E\u7AEF\u9632\u6296</h2><p>\u4E0E\u524D\u7AEF(LodashJs)\u76F8\u4F3C\uFF0C\u4E0D\u540C\u7684\u662F\u540E\u7AEF\u4E1A\u52A1\u4F18\u5148\uFF0C\u53EA\u652F\u6301\u5148\u8C03\u7528\u540E\u7B49\u5F85\u7684leading\u9632\u6296\u3002 \u5373\u5728\u7B2C\u4E00\u4E2A\u8BF7\u6C42\u65F6\u5904\u7406\u4E1A\u52A1\uFF0C\u6709\u540E\u7EED\u8BF7\u6C42\u51FA\u73B0\u65F6\uFF0C\u53EF\u4EE5\u6709\u4EE5\u4E0B\u5904\u7406\u65B9\u5F0F</p><ul><li>\u4E0D\u590D\u7528leading\u7ED3\u679C\u65F6\uFF0C\u76F4\u63A5\u8FD4\u56DE\u9884\u8BBE\u7684response(\u9ED8\u8BA4208 Already Reported)\u3002\u5426\u5219\uFF0C</li><li>\u7B49\u5F85waiting\u6BEB\u79D2\u6570\uFF0C\u8D85\u65F6\u6216\u88ABleading\u5524\u9192\u3002\u7136\u540E\uFF0C</li><li>\u82E5\u6709leading\u6709response\uFF0C\u5219\u590D\u7528\uFF1B\u5426\u5219\uFF0C\u8FD4\u56DE\u9884\u8BBEresponse\u3002</li></ul><p><code>@Debounce</code>\u5E95\u5C42\u57FA\u4E8EHandlerInterceptor\u548C\uFF0Crequest\u6D41\u590D\u7528\u548Cresponse\u6D41\u7F13\u5B58\u3002 \u4F5C\u7528\u4E8EController\u5C42\uFF0CSession\u7EA7\uFF0C\u4EE5URL\u7279\u5F81\u53CA\u53C2\u6570\u4E3A\u5224\u65AD\u91CD\u590D\u7684\u4F9D\u636E\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/test/debounce-body.json&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Debounce</span><span class="token punctuation">(</span>waiting <span class="token operator">=</span> <span class="token number">600</span><span class="token punctuation">,</span> header <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> body <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> reuse <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">R</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">debounceBody</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">String</span> p<span class="token punctuation">,</span> <span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Q</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> q<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">R</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span>p <span class="token operator">+</span> <span class="token string">&quot;::&quot;</span> <span class="token operator">+</span> seq<span class="token punctuation">.</span><span class="token function">getAndIncrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;::&quot;</span> <span class="token operator">+</span> q<span class="token punctuation">.</span><span class="token function">getQ</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),r=s("\u66F4\u591A\u793A\u4F8B\u53C2\u8003Debounce\u4EE3\u7801\u6587\u6863\u6216\u6D4B\u8BD5\u4EE3\u7801"),d={href:"https://gitee.com/trydofor/pro.fessional.wings/blob/master/wings/slardar/src/test/java/pro/fessional/wings/slardar/controller/TestDebounceController.java",target:"_blank",rel:"noopener noreferrer"},k=s("TestDebounceController.java"),g=t(`<h2 id="_3g-2-\u9632\u6B62\u8FDE\u51FB" tabindex="-1"><a class="header-anchor" href="#_3g-2-\u9632\u6B62\u8FDE\u51FB" aria-hidden="true">#</a> 3G.2.\u9632\u6B62\u8FDE\u51FB</h2><p>\u4E0EDebounce\u4E0D\u540C\uFF0C<code>@DoubleKill</code>\u7C7B\u4F3CCacheable\u91C7\u7528AOP\u65B9\u5F0F\uFF0C\u4E3B\u8981\u7528\u4E8EService\u5C42\u9632\u540C\u65F6\u8BA1\u7B97\u3002 \u6B64\u9632\u6296\u4E0D\u662F\u57FA\u4E8E\u65F6\u95F4\u95F4\u9694\uFF0C\u800C\u662F\u4F9D\u8D56\u4E8E\u524D\u4E00\u4E2A\u5904\u7406\u662F\u5426\u7ED3\u675F\uFF0C\u4EC5\u5F53\u524D\u4E00\u4E2A\u5904\u7406\u4E2D\u65F6\uFF0C\u624Dkill\u540E\u7EED\u3002</p><p>\u867D\u6CBF\u7528Dota\u547D\u540D\uFF0C\u4F46\u5374\u4FDD\u7559\u4E00\u9664\u6389\u4E8C\uFF0C\u901A\u8FC7Jvm\u5168\u5C40\u9501\u548CDoubleKillException\u5B8C\u6210\u91CD\u590D\u68C0\u67E5\u548C\u6D41\u7A0B\u63A7\u5236\u3002</p><p>\u4E5F\u53EF\u4EE5\u4F5C\u7528\u4E8EController\u5C42\uFF0C\u9700\u8981\u663E\u793A\u4F7F\u7528\u5E76\u901A\u8FC7Spel\u6307\u5B9A\u53C2\u6570\uFF0C\u5982@RequestParam\u7B49\u53C2\u6570\u3002 \u9ED8\u8BA4\u662Fsession\u7EA7\u522B\u7684\u63A7\u5236\uFF0C\u53EF\u4F7F\u7528@bean\u8FDB\u884C\u5904\u7406\u3002\u9ED8\u8BA4\u8FD4\u56DE202 Accepted</p><p>\u9ED8\u8BA4\u5BF9DoubleKillException\u8FD4\u56DE\u56FA\u5B9A\u7684json\u5B57\u7B26\u4E32\uFF0C\u6CE8\u5165DoubleKillExceptionResolver\u53EF\u66FF\u6362\uFF0C \u9700\u8981\u6CE8\u610FExceptionResolver\u6216ExceptionHandler\u7684Order\uFF0C\u907F\u514D\u5F02\u5E38\u6355\u83B7\u7684\u5C42\u7EA7\u9519\u8BEF\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@DoubleKill</span><span class="token punctuation">(</span>expression <span class="token operator">=</span> <span class="token string">&quot;#type + &#39;-&#39; + #p1 * 1000&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sleepSecondExp</span><span class="token punctuation">(</span><span class="token class-name">String</span> type<span class="token punctuation">,</span> <span class="token keyword">int</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@DoubleKill</span><span class="token punctuation">(</span>expression <span class="token operator">=</span> <span class="token string">&quot;@httpSessionIdResolver.resolveSessionIds(#p0)&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">R</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">doubleKill</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10_000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">R</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token string">&quot;login page&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE6\u7EC6\u7528\u6CD5\uFF0C\u53C2\u8003DoubleKill\u6E90\u7801\u6587\u6863\uFF0C\u6216\u53C2\u8003\u6D4B\u8BD5\u4EE3\u7801</p>`,7),v={href:"https://gitee.com/trydofor/pro.fessional.wings/blob/master/wings/slardar/src/test/java/pro/fessional/wings/slardar/controller/TestDoubleKillController.java",target:"_blank",rel:"noopener noreferrer"},b=s("TestDoubleKillController.java"),m={href:"https://gitee.com/trydofor/pro.fessional.wings/blob/master/wings/slardar/src/test/java/pro/fessional/wings/slardar/service/DoubleKillService.java",target:"_blank",rel:"noopener noreferrer"},h=s("DoubleKillService.java"),f=t(`<h2 id="_3g-3-\u9A8C\u8BC1\u7801" tabindex="-1"><a class="header-anchor" href="#_3g-3-\u9A8C\u8BC1\u7801" aria-hidden="true">#</a> 3G.3.\u9A8C\u8BC1\u7801</h2><p>\u5BF9\u4E8E\u53D7\u4FDD\u62A4\u7684\u8D44\u6E90\uFF0C\u8981\u91C7\u53D6\u4E00\u5B9A\u7684\u9A8C\u8BC1\u7801\uFF0C\u6709\u65F6\u662F\u4E3A\u4E86\u5EF6\u7F13\u65F6\u95F4\uFF0C\u6709\u65F6\u662F\u4E3A\u4E86\u533A\u5206\u884C\u4E3A\u3002 \u9A8C\u8BC1\u7801\u53EF\u4EE5header\u6216param\u8FDB\u884C\u6821\u9A8C\uFF08\u9ED8\u8BA4param\uFF09\u53BB\u8BF7\u6C42\u9A8C\u8BC1\u7801\u56FE\u7247\u7B49\u3002</p><p>\u5728spring Security\u4E2D\uFF0C\u5BF9401\u548C403\u6709\u4EE5\u4E0B\u7EA6\u5B9A\uFF0C\u6240\u4EE5\u9A8C\u8BC1\u7801\u4F7F\u7528406(Not Acceptable)</p><ul><li>401 - Unauthorized \u8EAB\u4EFD\u672A\u9274\u522B</li><li>403 - Forbidden/Access Denied \u9274\u6743\u901A\u8FC7\uFF0C\u6388\u6743\u4E0D\u591F</li></ul><p>slardar\u9A8C\u8BC1\u7801\u7684\u9ED8\u8BA4\u662F\u57FA\u4E8E\u56FE\u7247\u7684\uFF0C\u5728\u73B0\u4ECA\u7684AI\u7B97\u6CD5\u8BC6\u522B\u4E0A\uFF0C\u8BC6\u522B\u6210\u529F\u7387\u5E94\u8BE5\u572890%\u4EE5\u4E0A\u3002 \u56E0\u6B64\uFF0C\u4EC5\u9650\u4E8E\u521D\u7EA7\u7684\u9632\u4EBA\u5DE5\u7684\u8D44\u6E90\u4FDD\u62A4\u4E0A\u3002\u82E5\u662F\u654F\u611F\u4FE1\u606F\u6216\u9AD8\u7EA7\u9632\u62A4\uFF0C\u5EFA\u8BAE\u91C7\u8D2D\u7B2C\u4E09\u65B9\u9A8C\u8BC1\u7801\u670D\u52A1\u3002</p><p>\u9ED8\u8BA4\u652F\u6301\u4E2D\u6587\u9A8C\u8BC1\u7801\uFF0C\u4E00\u822C\u662F\u4E00\u4E2A\u6C49\u5B57\uFF0C3\u4E2A\u82F1\u6570\uFF0C\u53EF\u4EE5\u5728\u914D\u7F6E\u4E2D\u5173\u95ED\u3002</p><p>\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\uFF0C\u5728MappingMethod\u4E0A\uFF0C\u653E\u7F6E<code>@FirstBlood</code> \u5373\u53EF\uFF0C\u5DE5\u4F5C\u6D41\u7A0B\u5982\u4E0B\u3002</p><ul><li>\u5BA2\u6237\u7AEF\u6B63\u5E38\u8BBF\u95EE\u6B64URL\uFF0C\u5982/test/captcha.json\uFF08\u9700\u8981\u652F\u6301GET\u65B9\u6CD5\uFF0C\u4EE5\u4FBF\u8FD4\u56DE\u56FE\u7247\uFF09</li><li>\u670D\u52A1\u5668\u9700\u8981\u9A8C\u8BC1\u7801\u65F6\uFF0C\u4EE5406(Not Acceptable)\u8FD4\u56DE\u63D0\u793Ajson</li><li>\u5BA2\u6237\u7AEF\u5728header\u548Ccookie\u4E2D\u83B7\u5F97Client-Ticket\u7684token\uFF0C\u5E76\u6BCF\u6B21\u90FD\u53D1\u9001</li><li>\u5BA2\u6237\u7AEF\u5728URL\u540E\u589E\u52A0quest-captcha-image=\${vcode}\u83B7\u53D6\u9A8C\u8BC1\u7801\u56FE\u7247\uFF08\u53EF\u76F4\u63A5\u4F7F\u7528\uFF09 <ul><li>\u4EE5<code>accept</code>\u533A\u5206\u56FE\u7247\u7684\u8FD4\u56DE\u5F62\u5F0F\uFF0C<code>base64</code>\u4E3Abase64\u683C\u5F0F\u7684\u56FE\uFF0C\u5176\u4ED6\u5747\u4E3A\u4E8C\u8FDB\u5236\u6D41</li><li>\u5F53<code>vcode</code>\u4E3A\u9A8C\u8BC1\u7801\uFF0C\u901A\u8FC7\u65F6\uFF0C\u8FD4\u56DE\u7A7Abody\uFF0C\u5426\u5219\u8FD4\u56DE\u65B0\u7684\u9A8C\u8BC1\u56FE\u7247</li></ul></li><li>\u5BA2\u6237\u7AEF\u5728URL\u540E\u589E\u52A0check-captcha-image=\${vcode}\u63D0\u4EA4\u9A8C\u8BC1\u7801</li><li>\u670D\u52A1\u5668\u7AEF\u81EA\u52A8\u6821\u9A8CClient-Ticket\u548Ccheck-captcha-image\uFF0C\u5B8C\u6210\u9A8C\u8BC1\u6216\u653E\u884C</li></ul><p>\u82E5\u9700\u96C6\u6210\u5176\u4ED6\u9A8C\u8BC1\u7801\uFF0C\u5982\u7B2C\u4E09\u65B9\u670D\u52A1\u6216\u6D88\u606F\u9A8C\u8BC1\u7801\uFF0C\u5B9E\u73B0\u5E76\u6CE8\u5165FirstBloodHandler\u5373\u53EF</p><h2 id="_3g-4-\u9632\u6B62\u7BE1\u6539" tabindex="-1"><a class="header-anchor" href="#_3g-4-\u9632\u6B62\u7BE1\u6539" aria-hidden="true">#</a> 3G.4.\u9632\u6B62\u7BE1\u6539</h2><p>\u901A\u8FC7\u5728http header\u4E2D\u8BBE\u7F6E\u4FE1\u606F\uFF0C\u8FDB\u884C\u7F16\u8F91\u4FDD\u62A4\uFF0C\u9632\u6B62\u5BA2\u6237\u7AEF\u7BE1\u6539\u3002\u9ED8\u8BA4\u8FD4\u56DE409(Conflict)\u3002 \u8BE6\u89C1 wings-righter-79.properties \u548C RighterContext\u3002\u5B9E\u73B0\u539F\u7406\u548C\u4F7F\u7528\u65B9\u6CD5\u662F\uFF0C</p><ul><li>\u4F7F\u7528Righter\u6CE8\u89E3\u7F16\u8F91\u6570\u636E(false)\u548C\u63D0\u4EA4\u6570\u636E(true)\u7684\u65B9\u6CD5</li><li>\u83B7\u5F97\u7F16\u8F91\u6570\u636E\u65F6\uFF0C\u5728RighterContext\u4E2D\u8BBE\u7F6E\u7B7E\u540D\u7684\u6570\u636Eheader</li><li>\u63D0\u4EA4\u65F6\u9700\u8981\u63D0\u4EA4\u6B64\u7B7E\u540D\uFF0C\u5E76\u88AB\u6821\u9A8C\uFF0C\u7B7E\u540D\u9519\u8BEF\u65F6\u76F4\u63A5409</li><li>\u7B7E\u540D\u901A\u8FC7\u540E\uFF0C\u901A\u8FC7RighterContext\u83B7\u53D6\u6570\u636E\uFF0C\u7A0B\u5E8F\u81EA\u884C\u68C0\u9A8C\u6570\u636E\u9879\u662F\u5426\u4E00\u81F4</li></ul><h2 id="_3g-5-\u7EC8\u7AEF\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_3g-5-\u7EC8\u7AEF\u4FE1\u606F" aria-hidden="true">#</a> 3G.5.\u7EC8\u7AEF\u4FE1\u606F</h2><p>\u901A\u8FC7handlerInterceptor\uFF0C\u5728\u5F53\u524D\u7EBF\u7A0B\u548Crequest\u4E2D\u8BBE\u7F6Eterminal\u4FE1\u606F</p><p>TerminalContext\u4FDD\u5B58\u4E86\uFF0C\u8FDC\u7A0Bip\uFF0Cagent\u4FE1\u606F\uFF0Clocale\u548Ctimezone</p><h2 id="_3g-6-\u8BF7\u6C42\u590D\u7528\u548C\u5E94\u7B54\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#_3g-6-\u8BF7\u6C42\u590D\u7528\u548C\u5E94\u7B54\u7F13\u5B58" aria-hidden="true">#</a> 3G.6.\u8BF7\u6C42\u590D\u7528\u548C\u5E94\u7B54\u7F13\u5B58</h2><p>WingsReuseStreamFilter \u5B9E\u884C\u4E86request\u6D41\u7684\u5FAA\u73AF\u8BFB\uFF0C\u548Cresponse\u7684\u7F13\u5B58\u3002 \u5728\u4F7F\u7528\u4EE5\u4E0Bfilter\u65F6\uFF0C\u4F1A\u51FA\u73B0bytes\u91CD\u590D\u590D\u5236\u800C\u6D6A\u8D39\u7A7A\u95F4\uFF0C\u5EFA\u8BAE\u81EA\u884COverride\u3002</p><ul><li>CommonsRequestLoggingFilter</li><li>ShallowEtagHeaderFilter</li></ul><p>ReuseStream\u7684\u6D41\u4EC5\u63D0\u4F9B\u4E86\u590D\u7528\u529F\u80FD\uFF0C\u9ED8\u8BA4\u4E0D\u5F00\u542F\uFF0C\u4E0D\u4F7F\u7528\u65F6\u65E0\u7A7A\u95F4\u548C\u6027\u80FD\u635F\u5931\u3002 \u4EC5\u5728\u9700\u8981\u65F6\uFF0C\u7531filter\uFF0Cinterceptor\uFF0Cadvice\u7B49\u673A\u5236\u5728\u4F7F\u7528\u5176\u5F00\u542F\u590D\u7528\u529F\u80FD\u3002</p><p>\u9700\u8981\u6CE8\u610Ffilter\u7684order\uFF0C\u4EE5\u4FDD\u8BC1\u8BE5filter\u5728\u4F7F\u7528\u4E4B\u524D\u5B8C\u6210wrapper\u3002</p><h2 id="_3g-7-\u8BF7\u6C42\u53CA\u5E94\u7B54\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#_3g-7-\u8BF7\u6C42\u53CA\u5E94\u7B54\u65E5\u5FD7" aria-hidden="true">#</a> 3G.7.\u8BF7\u6C42\u53CA\u5E94\u7B54\u65E5\u5FD7</h2><p>\u901A\u8FC7WingsReuseStreamFilter\u6CE8\u5165RequestResponseLogging\u53EF\u5B9E\u73B0\u8BF7\u6C42\u5E94\u7B54\u65E5\u5FD7\u3002 \u76F8\u6BD4\u4E8ECommonsRequestLoggingFilter\uFF0C\u6B64\u529F\u80FD\u6309\u9700\u590D\u7528\uFF0C\u540C\u65F6\u652F\u6301request\u548Cresponse\u3002</p><p>\u5B9E\u73B0AbstractRequestResponseLogging Bean\u5373\u53EF\uFF0C\u53C2\u8003\u4EE3\u7801\u5982\u4E0B\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">RequestResponseLogging</span> <span class="token function">requestResponseLogging</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">AbstractRequestResponseLogging</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token class-name">Condition</span> <span class="token function">loggingConfig</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">ReuseStreamRequestWrapper</span> req<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>req<span class="token punctuation">.</span><span class="token function">getRequestURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;/test/debounce&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

            <span class="token keyword">final</span> <span class="token class-name">Condition</span> cond <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Condition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            cond<span class="token punctuation">.</span><span class="token function">setRequestEnable</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            cond<span class="token punctuation">.</span><span class="token function">setRequestPayload</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            cond<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span>s <span class="token operator">-&gt;</span> s<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            cond<span class="token punctuation">.</span><span class="token function">setResponseEnable</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            cond<span class="token punctuation">.</span><span class="token function">setResponsePayload</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> cond<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">logging</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u539F\u7406\u662F\uFF0CWingsReuseStreamFilter\u914D\u7F6E\u65F6\uFF0C\u81EA\u52A8\u5B9E\u73B0\u4E86\u4EE5\u4E0B\u6B65\u9AA4\u3002</p><ul><li>@AutoConfigureBefore(SlardarRestreamConfiguration.class)</li><li>\u83B7\u53D6 WingsReuseStreamFilter\uFF0C\u7136\u540EsetRequestResponseLogging</li></ul><p>\u6CE8\u610F<code>POST</code>\u63D0\u4EA4\u4F20\u7EDF\u8868\u5355\u63D0\u4EA4\uFF0C\u4EE5\u4E0B2\u4E2D\u7C7B\u578B\uFF0C\u5305\u62EC\u53C2\u6570\u548C\u6587\u4EF6\uFF0C</p><ul><li><code>application/x-www-form-urlencoded</code></li><li><code>multipart/form-data</code></li></ul><p>\u56E0\u5E95\u5C42\u7684\u53C2\u6570\u89E3\u6790\u548C\u83B7\u53D6\u6D41\u662F\u4E8C\u9009\u4E00\u5173\u7CFB\uFF0C\u5373\u5148\u89E3\u6790\u5219\u6D41\u8BFB\u5C3D\uFF0C\u83B7\u53D6\u6D41\u5219\u53C2\u6570\u4E3A\u7A7A\u3002 \u6240\u4EE5\uFF0C\u5BF9\u5E94\u6B64\u4E24\u79CD\u8BF7\u6C42\u9700\u8981\u8BB0\u5F55Payload\u65F6\uFF0C\u4F1A\u5B58\u5728\u4EE5\u4E0B\u5DEE\u5F02</p><ul><li>form-urlencoded\uFF0C\u56E0\u540E\u7F6E\u6784\u9020body\uFF0C\u6240\u4EE5\u5176\u4E2D\u4F1A\u5305\u62ECquery\u53C2\u6570</li><li>form-data\uFF0Cbody\u540C\u4E0A\uFF0C\u6587\u4EF6\u9700\u8981\u5B9E\u73B0buildRequestPayload\u83B7\u53D6parts\u8BB0\u5F55</li></ul><h2 id="_3g-8-rest\u548Cclient" tabindex="-1"><a class="header-anchor" href="#_3g-8-rest\u548Cclient" aria-hidden="true">#</a> 3G.8.Rest\u548CClient</h2><p>\u9ED8\u8BA4\u4F7F\u7528okhttp3\u4F5C\u4E3ArestTemplate\u7684\u5B9E\u73B0\u3002\u6309spring boot\u5B98\u65B9\u6587\u6863\u548C\u6E90\u7801\u7EA6\u5B9A\u3002\u5E76\u53EF\u4EE5 Autowired OkHttpClient \u76F4\u63A5\u4F7F\u7528\uFF0C\u9ED8\u8BA4<strong>\u4FE1\u4EFB\u6240\u6709ssl\u8BC1\u4E66</strong>\uFF0C\u5982\u5B89\u5168\u9AD8\uFF0C\u9700\u8981\u5173\u95ED\u3002 \u5982\u679C\u9700\u8981\u6309scope\u5B9A\u5236\uFF0C\u4F7F\u7528RestTemplateBuilder\uFF0C\u5168\u5C40\u5E94\u7528\u4F7F\u7528RestTemplateCustomizer\u3002</p>`,32),_={href:"https://docs.spring.io/spring-boot/docs/2.6.6/reference/htmlsingle/#boot-features-resttemplate-customization",target:"_blank",rel:"noopener noreferrer"},R=s("RestTemplate \u5B9A\u5236"),q=s(" org.springframework.boot.autoconfigure.web.client.RestTemplateAutoConfiguration"),w=t('<p>\u5728springboot\u9ED8\u8BA4\u662F3.x\uFF0C\u800Cjust-auth\u9700\u89814.x\uFF0C\u6240\u4EE5\u9700\u8981\u624B\u52A8okhttp3.version\u5C5E\u6027</p><h2 id="_3g-9-\u8D1F\u8F7D\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#_3g-9-\u8D1F\u8F7D\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> 3G.9.\u8D1F\u8F7D\u8FC7\u6EE4\u5668</h2><p>OverloadFilter\u53EF\u9650\u5B9A\u8BF7\u6C42\u5E76\u53D1\uFF0C\u9ED8\u8BA4<code>spring.wings.slardar.enabled.overload=false</code></p><ul><li>\u81EA\u52A8\u6216\u624B\u52A8\u8BBE\u7F6E<code>\u6700\u5927\u540C\u65F6\u8FDB\u884C\u8BF7\u6C42\u6570</code>\u3002\u8D85\u8FC7\u65F6\uFF0C\u6267\u884C<code>fallback</code>\u3002</li><li>\u4E0D\u5F71\u54CD\u6027\u80FD\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BB0\u5F55\u6162\u54CD\u5E94URI\u548C\u8FD0\u884C\u72B6\u6001\u3002</li><li>\u4F18\u96C5\u505C\u6B62\u670D\u52A1\u5668\uFF0C\u963B\u65AD\u6240\u6709\u65B0\u8BF7\u6C42\u3002</li><li>\u76F8\u540CIP\u8BF7\u6C42\u8FC7\u4E8E\u9891\u7E41\uFF0C\u6267\u884Cfallback\u3002</li></ul><p><code>\u6700\u5927\u540C\u65F6\u8FDB\u884C\u8BF7\u6C42\u6570</code>\uFF0C\u6307\u5DF2\u7ECF\u7531Controller\u5904\u7406\uFF0C\u4F46\u672A\u5B8C\u6210\u7684\u8BF7\u6C42\u3002</p><p>\u5176\u4E2D\uFF0C\u5173\u95ED<code>\u5FEB\u8BF7\u6C42</code>\u6216<code>\u6162\u8BF7\u6C42</code>\u529F\u80FD\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u8BBE\u7F6E\u5173\u95ED\uFF0C</p><ul><li><code>\u5FEB\u8BF7\u6C42</code> - <code>wings.slardar.overload.request-capacity=-1</code></li><li><code>\u6162\u8BF7\u6C42</code> - <code>wings.slardar.overload.response-warn-slow=0</code></li></ul>',7);function y(x,C){const a=p("ExternalLinkIcon");return l(),c("div",null,[u,n("p",null,[r,n("a",d,[k,e(a)])]),g,n("ul",null,[n("li",null,[n("a",v,[b,e(a)])]),n("li",null,[n("a",m,[h,e(a)])])]),f,n("p",null,[n("a",_,[R,e(a)]),q]),w])}const D=o(i,[["render",y],["__file","3g-fun-server.html.vue"]]);export{D as default};