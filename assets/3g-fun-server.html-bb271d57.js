import{_ as o,Y as i,Z as p,a0 as n,a2 as e,a1 as a,a4 as t,C as l}from"./framework-3a8f5b7b.js";const c={},r=t(`<h1 id="_3g-backend-protection" tabindex="-1"><a class="header-anchor" href="#_3g-backend-protection" aria-hidden="true">#</a> 3G.Backend Protection</h1><p>Provide some protection and control for backsend services.</p><h2 id="_3g-1-backend-debounce" tabindex="-1"><a class="header-anchor" href="#_3g-1-backend-debounce" aria-hidden="true">#</a> 3G.1.Backend Debounce</h2><p>Similar to the frontend Lodash, but the backend business takes precedence and only supports the leading style debounce of call first and wait later. That is, the business is processing on the first request, and the subsequent request arrives, the following processing is supported,</p><ul><li>Directly return the preset response (default 208 Already Reported) if no reuse of the leading result. otherwise,</li><li>Wait for specified milliseconds, and timeout or wake up by leading process. then,</li><li>Reuse if there is a leading result; otherwise, return the preset response.</li></ul><p><code>@Debounce</code> is based on HandlerInterceptor, request stream reuse and response stream caching. Acts on Controller layer, Session level, with URL and parameters as the basis for judging duplication.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/test/debounce-body.json&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Debounce</span><span class="token punctuation">(</span>waiting <span class="token operator">=</span> <span class="token number">600</span><span class="token punctuation">,</span> header <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> body <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> reuse <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">R</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">debounceBody</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">String</span> p<span class="token punctuation">,</span> <span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Q</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> q<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">R</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span>p <span class="token operator">+</span> <span class="token string">&quot;::&quot;</span> <span class="token operator">+</span> seq<span class="token punctuation">.</span><span class="token function">getAndIncrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;::&quot;</span> <span class="token operator">+</span> q<span class="token punctuation">.</span><span class="token function">getQ</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For more examples, see the Debounce doc or the testcase <code>TestDebounceController.java</code></p><h2 id="_3g-2-double-kill" tabindex="-1"><a class="header-anchor" href="#_3g-2-double-kill" aria-hidden="true">#</a> 3G.2.Double Kill</h2><p><code>@DoubleKill</code> is different from Debounce, which is a Cacheable-like AOP for Service layer to prevent concurrent processes. The underlying layer is based on business locks, not time intervals, acquiring locks at the beginning and releasing them at the end, and requests that do not get locks are killed.</p><p>The name is from Dota, but the meaning is different, it is kill the second, implemented by Jvm global lock and DoubleKillException.</p><p>Can be used but not recommended for Controller layer, you should explicitly specify parameters by Spel, such as @RequestParam. This is session level control, can be handled with @Bean and returns 202 Accepted by default.</p><p>DoubleKillException returns a fixed json by default, which can be replaced by injecting DoubleKillExceptionResolver. Must pay attention to the Order of ExceptionResolver or ExceptionHandler to avoid exception catching hierarchy errors.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@DoubleKill</span><span class="token punctuation">(</span>expression <span class="token operator">=</span> <span class="token string">&quot;#type + &#39;-&#39; + #p1 * 1000&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sleepSecondExp</span><span class="token punctuation">(</span><span class="token class-name">String</span> type<span class="token punctuation">,</span> <span class="token keyword">int</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@DoubleKill</span><span class="token punctuation">(</span>expression <span class="token operator">=</span> <span class="token string">&quot;@httpSessionIdResolver.resolveSessionIds(#p0)&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">R</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">doubleKill</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10_000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">R</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token string">&quot;login page&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For detailed usage, see the source code or the test code,</p>`,15),u={href:"https://github.com/trydofor/pro.fessional.wings/blob/master/wings/slardar/src/test/java/pro/fessional/wings/slardar/controller/TestDoubleKillController.java",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/trydofor/pro.fessional.wings/blob/master/wings/slardar/src/test/java/pro/fessional/wings/slardar/service/DoubleKillService.java",target:"_blank",rel:"noopener noreferrer"},h=t(`<h2 id="_3g-3-captcha" tabindex="-1"><a class="header-anchor" href="#_3g-3-captcha" aria-hidden="true">#</a> 3G.3.CAPTCHA</h2><p>For protected resources, captcha is used to sometimes to delay time and sometimes to distinguish behavior. Captcha loading and validation can be done via header or param (default param).</p><p>In SpringSecurity, the conventions for 401 and 403 are as follows, so CAPTCHA uses 406 (Not Acceptable)</p><ul><li>401 - Unauthorized identity not identified</li><li>403 - Forbidden/Access Denied Authentication passed, insufficient authorization</li></ul><p>Slardar&#39;s CAPTCHA is image based and today&#39;s AI can recognize up to 90% or more, so it is not secure and is a low level protection for gentlemen only. The default support for Chinese, is 1 Chinese + 3 Alphanum, can be turned off in the configuration. For sensitive information or advanced protection, it is recommended to purchase a 3rd CAPTCHA service.</p><p>Put <code>@FirstBlood</code> on the MappingMethod, usage and workflow is as follows.</p><ul><li>Client normally accesses the URL, such as /test/captcha.json (support GET in order to get the image)</li><li>If the server requires a captcha, it returns a json with 406 (Not Acceptable)</li><li>Client gets Client-Ticket token from header or cookie, and sends it each time</li><li>Client appends quest-captcha-image=\${vcode} to the URL to get the CAPTCHA image (can be used directly) <ul><li>Distinguish the image form by <code>accept</code>, <code>base64</code> is in base64, all others are binary streams</li><li>When <code>vcode</code> is the captcha and passed, return the empty body, otherwise return the new verification image</li></ul></li><li>Client appends check-captcha-image=\${vcode} to the URL, submit the captcha</li><li>Server auto checks Client-Ticket and check-captcha-image to complete validation</li></ul><p>If you need to integrate other CAPTCHAs, such as 3rd services or message CAPTCHAs, just implement and inject FirstBloodHandler.</p><h2 id="_3g-4-anti-forgery" tabindex="-1"><a class="header-anchor" href="#_3g-4-anti-forgery" aria-hidden="true">#</a> 3G.4.Anti Forgery</h2><p>Set a signature for the message to be edited in the http header to prevent tampering by the client. Default returns 409(Conflict). See wings-righter-79.properties and RighterContext for details. the Underlying principle and usage are,</p><ul><li>Use the Righter annotation to edit data (false) and commit data (true)</li><li>Set the signature header in the RighterContext when getting the edited data</li><li>When committing, this signature must be submitted and verified, return 409 if wrong signature</li><li>After the signature is passed, the data is obtained through the RighterContext and the program itself checks the data items for consistency.</li></ul><h2 id="_3g-5-terminal-information" tabindex="-1"><a class="header-anchor" href="#_3g-5-terminal-information" aria-hidden="true">#</a> 3G.5.Terminal Information</h2><p>Through HandlerInterceptor, Terminal information is set in the current thread and request.</p><p>TerminalContext mainly includes ip, agent, locale and timezone etc.</p><h2 id="_3g-6-request-reuse-and-response-caching" tabindex="-1"><a class="header-anchor" href="#_3g-6-request-reuse-and-response-caching" aria-hidden="true">#</a> 3G.6.Request Reuse and Response Caching</h2><p>WingsReuseStreamFilter implements circular reading of request stream, and caching of response. When using the following filter, bytes are duplicated and space is wasted, so it is recommended to Override it by yourself.</p><ul><li>CommonsRequestLoggingFilter</li><li>ShallowEtagHeaderFilter</li></ul><p>ReuseStream provides circular reading and is disabled by default, without space or performance loss if not used. It is only used by the filter, interceptor, advice and other mechanisms to enable circular reading when needed.</p><p>You must be aware of the filter order to ensure the wrapper is complete before using it.</p><h2 id="_3g-7-request-and-response-loging" tabindex="-1"><a class="header-anchor" href="#_3g-7-request-and-response-loging" aria-hidden="true">#</a> 3G.7.Request and Response Loging</h2><p>Request and response logging can be implemented by injecting RequestResponseLogging into WingsReuseStreamFilter. Unlike CommonsRequestLoggingFilter, this feature is used on demand and supports both request and response.</p><p>Just implement the AbstractRequestResponseLogging bean, the reference code is as follows.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The principle is that the following steps are auto implemented when WingsReuseStreamFilter is configured.</p><ul><li>@AutoConfigureBefore(SlardarRestreamConfiguration.class)</li><li>Get WingsReuseStreamFilter, then setRequestResponseLogging</li></ul><p>Note that <code>POST</code> commits a traditional form data, of the following 2 types, including parameters and files</p><ul><li><code>application/x-www-form-urlencoded</code></li><li><code>multipart/form-data</code></li></ul><p>Because the underlying parameter parsing and get stream is a choose one of two, that is, first parsing then stream exhausted, read stream then parameters are empty. So, if you need to record Payload for these two requests, there are the following differences</p><ul><li>form-urlencoded, which contains query parameters because of the post-constructed body</li><li>form-data, the body is the same as above, the file needs to implement buildRequestPayload to get the pars record</li></ul><h2 id="_3g-8-rest-and-client" tabindex="-1"><a class="header-anchor" href="#_3g-8-rest-and-client" aria-hidden="true">#</a> 3G.8.Rest and Client</h2><p>The restTemplate use OkHttp as underlying in wings. Follow SpringBoot official docs and code conventions, OkHttpClient Can Autowired and use directly, the default <strong>trust all ssl certificates</strong>, but in high security, you need to disable it.</p><p>For scope customization use RestTemplateBuilder, for global customization use RestTemplateCustomizer.</p>`,32),k={href:"https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#io.rest-client.resttemplate.customization",target:"_blank",rel:"noopener noreferrer"},g=t('<p>In springboot 2.x, use http 3.x by default, and just-auth needs 4.x, so you need to manually set okhttp3.version property</p><h2 id="_3g-9-overloadfilter" tabindex="-1"><a class="header-anchor" href="#_3g-9-overloadfilter" aria-hidden="true">#</a> 3G.9.OverloadFilter</h2><p>OverloadFilter can limit request concurrency, default <code>spring.wings.slardar.enabled.overload=false</code></p><ul><li>Set <code>max concurrent requests</code> automatically or manually, and perform <code>fallback</code> when exceeded.</li><li>Log slow response URIs and running status without affecting performance.</li><li>Elegantly stop the server and block all new requests.</li><li>Perform fallback if same IP requests are too frequent.</li></ul><p><code>max concurrent requests</code>, which refers to requests that have been processed by the Controller but not completed.</p><p>Among them, the <code>fast requests</code> or <code>slow requests</code> can be disabled with the following settings.</p><ul><li><code>fast requests</code> - <code>wings.slardar.overload.request-capacity=-1</code></li><li><code>slow request</code> - <code>wings.slardar.overload.response-warn-slow=0</code></li></ul><h2 id="_3g-10-pagination-query" tabindex="-1"><a class="header-anchor" href="#_3g-10-pagination-query" aria-hidden="true">#</a> 3G.10.Pagination Query</h2><p>PageQuery and PageDefault are used in Wings instead of Pagable in SpringData.</p><ul><li>PageQuery can only be passed using the QueryString method and is not part of the RequesBody section.</li><li><code>@ParameterObject</code> PageQuery pq</li><li><code>@ParameterObject</code> <code>@PageDefault(size=30)</code> PageQuery pq</li></ul><p>The @ParameterObject annotation is used so that Swagger can automatically recognize it as a Param type</p><p>As with PageQuery, the pagination return uses PageResult as the container and Wings has the responsive tool class.</p>',12);function m(b,f){const s=l("ExternalLinkIcon");return i(),p("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[e("TestDoubleKillController.java"),a(s)])]),n("li",null,[n("a",d,[e("DoubleKillService.java"),a(s)])])]),h,n("p",null,[n("a",k,[e("RestTemplate Customization"),a(s)]),e(" org.springframework.boot.autoconfigure.web.client.RestTemplateAutoConfiguration")]),g])}const y=o(c,[["render",m],["__file","3g-fun-server.html.vue"]]);export{y as default};
