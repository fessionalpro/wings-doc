import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,e}from"./app.def9aef9.js";const t={},o=e(`<h1 id="_3d-\u591A\u56FD\u8BED\u548C\u591A\u65F6\u533A" tabindex="-1"><a class="header-anchor" href="#_3d-\u591A\u56FD\u8BED\u548C\u591A\u65F6\u533A" aria-hidden="true">#</a> 3D.\u591A\u56FD\u8BED\u548C\u591A\u65F6\u533A</h1><p>\u5728silence\u7684\u914D\u7F6E\u4E2D\uFF0C\u6240\u6709I18n\u6709\u4E2A\u7684\u8D44\u6E90\uFF0C\u653E\u7F6E\u5728 wigns-i18n/\u5373\u53EF\u81EA\u52A8\u52A0\u8F7D</p><h2 id="_3d-1-\u52A0\u8F7D\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#_3d-1-\u52A0\u8F7D\u987A\u5E8F" aria-hidden="true">#</a> 3D.1.\u52A0\u8F7D\u987A\u5E8F</h2><p>\u901A\u8FC7<code>LocaleContextResolver</code>\uFF0C\u6309\u4EE5\u4E0B\u4F18\u5148\u7EA7\uFF0C\u83B7\u5F97\u5F53\u524Dlocale\u8BBE\u7F6E\u3002</p><ol><li>request\u4E2D\u88AB\u8BBE\u7F6E\u7684<code>WINGS.I18N_CONTEXT</code></li><li>query string <code>locale</code>, <code>zoneid</code></li><li>http header <code>Accept-Language</code>,<code>Zone-Id</code></li><li>cookie <code>Wings-Locale</code>, <code>Wings-Zoneid</code></li><li>\u767B\u5F55\u7528\u6237\u7684SecurityContext\u4E2D\u83B7\u5F97wings\u8BBE\u7F6E</li><li>\u7CFB\u7EDF\u9ED8\u8BA4\u503C</li></ol><p>\u6CE8\u610F\uFF1A\u5728\u6570\u636E\u5E93\u548C\u914D\u7F6E\u4E2D<code>zoneid</code>\u89C6\u4E3A\u4E00\u4E2A\u8BCD\uFF0C\u800Cjava\u4E2D<code>ZoneId</code>\u662F\u4E00\u4E2A\u7C7B\uFF08I\u5927\u5199\uFF09\uFF0C \u6240\u4EE5\uFF0C\u5F53\u4ECEDb\u4E2D\u53D6\u503C\uFF0C\u5E76\u901A\u8FC7\u53CD\u5C04\u8D4B\u503C\u65F6\uFF0C\u5BB9\u6613\u56E0\u533A\u5206\u5927\u5C0F\u5199\u800C\u9519\u8FC7ZoneId\u7684\u8D4B\u503C\u3002</p><h2 id="_3d-2-locale\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#_3d-2-locale\u89E3\u6790" aria-hidden="true">#</a> 3D.2.Locale\u89E3\u6790</h2><p>\u6B64\u5904\u4E3A\u884C\u4E3A\u7EA6\u5B9A\uFF0C\u57FA\u4E8Eservlet\u6216webflux\u7684\u5177\u4F53\u5B9E\u73B0\u3002<code>WingsLocaleResolver</code>\u662F\u4E00\u4E2A\u5B9E\u73B0\u3002</p><p>\u7528\u6237\u767B\u5F55\u540E\uFF0C\u81EA\u52A8\u751F\u6210\u65F6\u533A\u548CI18n\u6709\u5173\u7684Context\u3002 \u901A\u8FC7<code>SecurityContextUtil</code>\u83B7\u5F97\u76F8\u5173\u7684Context\u3002</p><p><code>WingsTerminalContext.Context</code>\u64CD\u4F5C\u7EC8\u7AEF\u6709\u5173\u7684\uFF0C\u901A\u8FC7TerminalInterceptor\u5B8C\u6210\u3002</p><p>\u591A\u65F6\u533A\u65B9\u9762\uFF0C\u901A\u8FC7enum\u7C7B\uFF0C\u81EA\u52A8\u751F\u6210\u4E1A\u52A1\u4E0A\u7684\u6807\u51C6\u65F6\u533A\uFF0C\u4EE5\u4F9B\u89E3\u6790\u548C\u4F7F\u7528\u3002</p><p>\u5728\u7F16\u7801\u547D\u540D\u4E0A\uFF0C\u7C7B\u578B\u5173\u7CFB\u548C\u547D\u540D\u7EA6\u5B9A\u5982\u4E0B</p><ul><li>language - \u5BF9\u5E94 StandardLanguageEnum</li><li>timezone - \u5BF9\u5E94 StandardTimezoneEnum</li><li>locale - \u5BF9\u5E94 java.util.Locale</li><li>zoneid - \u5BF9\u5E94 java.time.ZoneId</li></ul><p>\u5728js\u73AF\u5883\u4E2D\uFF0C\u53EF\u4EE5\u7528<code>Intl.DateTimeFormat().resolvedOptions().timeZone</code>\u83B7\u5F97\u3002 \u5F53client\u7AEF\u65E0\u6CD5\u83B7\u5F97zoneid\u65F6\uFF0C\u53EF\u4EE5\u53D6\u5F97\u670D\u52A1\u5668\u652F\u6301\u7684zone\u53CA\u5176offset,country\u81EA\u884C\u5224\u65AD\u3002</p><h2 id="_3d-3-\u591A\u56FD\u8BEDi18n\u7684\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3d-3-\u591A\u56FD\u8BEDi18n\u7684\u683C\u5F0F" aria-hidden="true">#</a> 3D.3.\u591A\u56FD\u8BEDI18n\u7684\u683C\u5F0F</h2><p>\u5728@Valid\u7684JavaBean Validation\u9A8C\u8BC1\u4E2D\uFF0C \u652F\u6301Unified Expression Language (JSR 341) \u4F7F\u7528<code>\${}</code>\u8BBF\u95EE\u5916\u90E8\u53D8\u91CF\uFF0C\u4F7F\u7528<code>{}</code>\u8303\u56F4annotation\u5185\u53D8\u91CF\uFF0C\u5982\u4EE5\u4E0B\u4F8B\u5B50</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Size</span><span class="token punctuation">(</span> min <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token number">14</span><span class="token punctuation">,</span> message <span class="token operator">=</span> <span class="token string">&quot;{common.email.size}&quot;</span><span class="token punctuation">)</span>
# \u5728 i18n\u4FE1\u606F\u4E2D\u8BBE\u7F6E
common<span class="token punctuation">.</span>email<span class="token punctuation">.</span>size<span class="token operator">=</span><span class="token class-name">The</span> author email &#39;$<span class="token punctuation">{</span>validatedValue<span class="token punctuation">}</span>&#39; must be between <span class="token punctuation">{</span>min<span class="token punctuation">}</span> and <span class="token punctuation">{</span>max<span class="token punctuation">}</span> characters <span class="token keyword">long</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u800C\u5728 Message\u7684ResourceBundle\u4E2D\uFF0C\u9ED8\u8BA4\u4F7F\u7528java.text.MessageFormat\u7684\u6570\u7EC4<code>{0}</code>\u683C\u5F0F\u3002</p><h2 id="_3d-4-\u9879\u76EE\u4E2Di18n\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#_3d-4-\u9879\u76EE\u4E2Di18n\u5B9E\u8DF5" aria-hidden="true">#</a> 3D.4.\u9879\u76EE\u4E2DI18n\u5B9E\u8DF5</h2><p>\u9879\u76EE\u652F\u6301I18n\uFF0C\u9664\u4E86\u4E3A\u9759\u6001Message\u5B9A\u4E49Code\u5916\uFF0C\u66F4\u5927\u7684\u5DE5\u4F5C\u91CF\u5728\u4E8E\u5904\u7406\u52A8\u6001\u7684\u4E1A\u52A1\u6D88\u606F\u3002 \u6BD4\u8F83\u5E38\u89C1\u7684\u5982\u8F93\u5165\u53C2\u6570\u7684\u68C0\u67E5\uFF0C\u8FD0\u884C\u72B6\u6001\u7684\u6821\u9A8C\uFF0C\u8F93\u51FA\u7ED3\u679C\u7684\u786E\u8BA4\u7B49\u3002</p><h3 id="\u524D\u7F6E\u6761\u4EF6\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F6E\u6761\u4EF6\u68C0\u67E5" aria-hidden="true">#</a> \u524D\u7F6E\u6761\u4EF6\u68C0\u67E5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u629B\u51FA\u65E0\u5806\u6808\u7684CodeException</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/test/code-exception.json&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">codeException</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">ArgsAssert</span><span class="token punctuation">.</span><span class="token function">isTrue</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token class-name">CommonErrorEnum<span class="token punctuation">.</span>AssertEmpty1</span><span class="token punctuation">,</span><span class="token string">&quot;args&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">CodeException</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token class-name">CommonErrorEnum<span class="token punctuation">.</span>AssertEmpty1</span><span class="token punctuation">,</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528Validation\u6CE8\u89E3</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Ins</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@NotBlank</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;{test.name.empty}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Email</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;{test.email.invalid}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/test/binding-error-from.json&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">R</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">bindingErrorFrom</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Valid</span> <span class="token class-name">Ins</span> ins<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;&gt;&gt;&gt;&quot;</span> <span class="token operator">+</span> ins<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">R</span><span class="token punctuation">.</span><span class="token function">okData</span><span class="token punctuation">(</span>ins<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8FD0\u884C\u65F6\u72B6\u6001\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u65F6\u72B6\u6001\u68C0\u67E5" aria-hidden="true">#</a> \u8FD0\u884C\u65F6\u72B6\u6001\u68C0\u67E5</h3><p>\u9884\u5B9A\u4E49CodeEnum\uFF0C\u5173\u8054Message\u8D44\u6E90\uFF0C\u901A\u8FC7\u5168\u5C40\u7684\u5F02\u5E38\u5904\u7406\u8F93\u51FAI18n\u4FE1\u606F</p><ul><li><code>StateAssert</code> - \u540CArgsAssert\uFF0C\u629B\u51FA\u65E0\u5806\u6808\u5F02\u5E38</li><li><code>MessageException</code> - \u629B\u51FA\u5E26\u6709code\u7684\u65E0\u5806\u6808\u5F02\u5E38</li><li><code>CodeException</code> - \u9ED8\u8BA4\u4E3A\u6709\u5806\u6808\u5F02\u5E38</li><li><code>I18nString</code> - \u901A\u8FC7json\u81EA\u52A8\u8F6C\u6362\u4E3AString\u7C7B\u578B\u8F93\u51FA</li><li><code>@JsonI18nString</code> - \u6CE8\u89E3\u5B57\u6BB5\uFF0C\u5B9E\u73B0\u81EA\u52A8json\u8F6C\u6362</li></ul><h2 id="_3d-5-\u4E09\u79CDdatetime" tabindex="-1"><a class="header-anchor" href="#_3d-5-\u4E09\u79CDdatetime" aria-hidden="true">#</a> 3D.5.\u4E09\u79CDDateTime</h2><p>\u591A\u65F6\u533A\uFF0C\u8981\u517C\u987E\u6570\u636E\u53EF\u8BFB\u6027\u548C\u7F16\u7801\u4FBF\u5229\u6027\uFF0C\u5728slardar\u4E2D\u7EDF\u4E00\u7EA6\u5B9A\u5982\u4E0B\u3002</p><ul><li><code>\u7CFB\u7EDF\u65F6\u533A</code> - \u7CFB\u7EDF\u8FD0\u884C\u65F6\u533A\uFF0C\u5176\u5728Jvm\uFF0CDb\u4E0A\u662F\u7EDF\u4E00\u7684\u3002</li><li><code>\u6570\u636E\u65F6\u533A</code> - \u6570\u636E\u6D41\u52A8\u65F6\uFF0C\u53C2\u4E0E\u8005\u6240\u5728\u7684\u65F6\u533A\u3002</li><li><code>\u7528\u6237\u65F6\u533A</code> - \u6570\u636E\u4F7F\u7528\u8005\uFF0C\u9605\u8BFB\u6570\u636E\u65F6\u5E0C\u671B\u770B\u5230\u7684\u65F6\u533A\u3002</li></ul><p>\u5728\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u6B64\u4E09\u8005\u662F\u7EDF\u4E00\u7684\uFF0C\u6BD4\u5982\u90FD\u5728\u5317\u4EAC\u65F6\u95F4\uFF0CGMT+8\u3002 \u5728\u65F6\u533A\u4E0D\u654F\u611F\u7684\u6570\u636E\u4E0A\uFF0C\u4E00\u822C\u76F4\u63A5\u4F7F\u7528LocalDateTime\uFF0C\u5FFD\u7565\u65F6\u533A\u3002</p><p>\u5728slardar\u7684\u9002\u7528\u7684\u4E1A\u52A1\u573A\u666F\u4E2D\uFF0C\u5728\u4E1A\u52A1\u5C42\u7EDF\u4E00\u4F7F\u7528\u7CFB\u7EDF\u65F6\u533A\uFF0C\u7528LocalDateTime\u3002 \u800C\u5728Controller\u5C42\uFF0C\u8D1F\u8D23\u8FDB\u884C\u7CFB\u7EDF\u548C\u7528\u6237\u65F6\u533A\u7684\u53CC\u5411\u8F6C\u6362\uFF0C\u4F7F\u7528ZonedDateTime\u3002</p><ul><li>\u65F6\u533A\u4E0D\u654F\u611F\u6216\u53EA\u505A\u672C\u5730\u65F6\u95F4\u6807\u7B7E\u7684\u60C5\u51B5\uFF0C\u7EDF\u4E00\u4F7F\u7528LocalDateTime\uFF0C</li><li>\u65F6\u533A\u654F\u611F\u65F6\uFF0C\u5728Jackson\u548CRequestParam\u4E2D\u81EA\u52A8\u8F6C\u6362\u3002 <ul><li>Request\u65F6\uFF0C\u81EA\u52A8\u628A\u7528\u6237\u65F6\u95F4\u8C03\u81F3\u7CFB\u7EDF\u65F6\u533A\u3002</li><li>Response\u65F6\uFF0C\u81EA\u52A8\u628A\u7CFB\u7EDF\u65F6\u95F4\u8C03\u81F3\u7528\u6237\u65F6\u533A\u3002</li></ul></li><li>\u81EA\u52A8\u8F6C\u6362\u7C7B\u578B\uFF0C\u76EE\u524D\u53EA\u6709\u4E00\u4E0B2\u4E2D\uFF0C\u5176\u4E2D\u3002 <ul><li>ZonedDatetime \u9ED8\u8BA4\u5173\u95ED</li><li>OffsetDateTime \u9ED8\u8BA4\u5F00\u542F</li></ul></li></ul><p>\u6CE8\u610F\uFF0C\u56E0util.Date\u7684\u7F3A\u9677\uFF0C\u5728wings\u4E2D\uFF0C\u9ED8\u8BA4\u7981\u7528\u5176\u4F7F\u7528\uFF0C\u9700\u8981\u4F7F\u7528java.time.*</p>`,32),p=[o];function i(c,l){return a(),s("div",null,p)}const r=n(t,[["render",i],["__file","3d-i18n-zone.html.vue"]]);export{r as default};