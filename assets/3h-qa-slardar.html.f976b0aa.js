import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as o,o as i,c as l,b as e,e as r,d as n,f as s}from"./app.7f604d8d.js";const c={},d=s(`<h1 id="_3h-\u540E\u7AEF\u5E38\u89C1\u8BDD\u9898" tabindex="-1"><a class="header-anchor" href="#_3h-\u540E\u7AEF\u5E38\u89C1\u8BDD\u9898" aria-hidden="true">#</a> 3H.\u540E\u7AEF\u5E38\u89C1\u8BDD\u9898</h1><h2 id="_3h-01-error-creating-hazelcastinstance" tabindex="-1"><a class="header-anchor" href="#_3h-01-error-creating-hazelcastinstance" aria-hidden="true">#</a> 3H.01.Error creating &#39;hazelcastInstance&#39;</h2><blockquote><p>Error creating bean with name &#39;hazelcastInstance&#39; Invalid content was found starting with element &#39;cluster-name&#39;\uFF0C</p></blockquote><p>\u82E5\u662F\u6709\u4EE5\u4E0A\u4FE1\u606F\uFF0C\u662Fhazelcast 3\u548C4\u914D\u7F6E\u7684\u517C\u5BB9\u95EE\u9898\uFF0Cboot-2.2.x\u4E3Ahazelcast 3.12.x</p><h2 id="_3h-02-\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3h-02-\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E" aria-hidden="true">#</a> 3H.02.\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E</h2><p>slardar\uFF0C\u4F7F\u7528undertow\uFF0C\u5E76\u63D0\u4F9B\u4E86\u4E00\u4E0B\u9ED8\u8BA4\u914D\u7F6E</p><h2 id="_3h-03-session\u65B9\u6848\u7684\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#_3h-03-session\u65B9\u6848\u7684\u9009\u62E9" aria-hidden="true">#</a> 3H.03.Session\u65B9\u6848\u7684\u9009\u62E9</h2><p>\u5176\u5B9E hazelcast \u662F\u4E2A\u4E0D\u9519\u7684\u9009\u62E9\uFF0C\u82E5\u9009\u7528redis\uFF0C\u5207\u8BB0redis\u5FC5\u987B<code>requirepass</code>\u3002 \u6700\u540E\uFF0C\u4ECEredis+redisson\u7684\u65B9\u6848\uFF0C\u5207\u6362\u6210\u4E86hazelcast\u7684\u65B9\u6848\u3002\u5176\u7406\u7531\u5982\u4E0B\u3002</p><ul><li>\u5355\u5E94\u7528\u8FDB\u5316\u7684\u7B80\u5355\u6027\uFF0Chazelcast\u662F\u96F6\u4F9D\u8D56</li><li>\u6027\u80FD\uFF0C\u53EF\u7528\u6027\uFF0C\u8FD0\u7EF4\u89D2\u5EA6\uFF0C\u4E24\u8005\u4E94\u4E94\u5F00</li></ul><p>\u5173\u4E8Ehazelcast\u548Cspring\uFF0C\u4E3B\u8981\u7684\u7BA1\u7406\u573A\u666F\u662Fcache,session,security</p><ul><li>spring-boot\u4F18\u5148\u5C1D\u8BD5\u521B\u5EFAclient\uFF0C\u4E0D\u6210\u5219\u521B\u5EFAembedded server</li><li>spring session \u4F7F\u7528@Enable*HttpSession\u624B\u52A8\u914D\u7F6E</li></ul><p>\u6587\u6863\u4E2D\u662Fhazelcast3\u7684\u914D\u7F6E\uFF0C\u5B9E\u9645\u652F\u63014\u3002 \u6587\u6863\u4E2D\u7684\u4F8B\u5B50\u90FD\u662F\u901A\u8FC7\u7F16\u7801\u65B9\u5F0F\u914D\u7F6E\u7684\uFF0C\u5B9E\u9645\u53EF\u4EE5\u901A\u8FC7xml\u914D\u7F6E\uFF0C\u4EA4\u7531boot\u5904\u7406\u3002 \u7CFB\u7EDF\u9ED8\u8BA4\u63D0\u4F9B\u4E86server\u548Cclient\u7684\u7EC4\u64AD\u914D\u7F6E\u3002</p><h2 id="_3h-04-\u5F02\u5E38\u5904\u7406\u6216handler" tabindex="-1"><a class="header-anchor" href="#_3h-04-\u5F02\u5E38\u5904\u7406\u6216handler" aria-hidden="true">#</a> 3H.04.\u5F02\u5E38\u5904\u7406\u6216handler</h2><p>\u9700\u8981\u6839\u636Espring\u7EA6\u5B9A\u548C\u5B9E\u9645\u9700\u8981\uFF0C\u81EA\u5B9A\u4E49\u4E00\u5957\u673A\u5236\u3002 \u4F46\u662F\u4E0D\u8981\u4F7F\u7528<code>spring.mvc.throw-exception-if-no-handler-found=true</code>\uFF0C \u56E0\u4E3A\uFF0C\u5F02\u5E38\u4E4B\u6240\u4EE5\u53EB\u5F02\u5E38\uFF0C\u5C31\u4E0D\u80FD\u5F53\u505A\u6B63\u5E38\uFF0C\u907F\u514D\u7528\u6765\u5904\u7406\u6B63\u5E38\u4E8B\u60C5\u3002</p><ul><li>controller\u5C42\u5F02\u5E38\u7528<code>@ControllerAdvice</code>\u6216<code>@ExceptionHandler</code></li><li>service\u5C42\u5F02\u5E38\uFF0C\u81EA\u884C\u505A\u4E1A\u52A1\u5904\u7406\uFF0C\u6216AOP\u65E5\u5FD7</li><li>\u9759\u6001\uFF0Csrc/main/resources/public/error/404.html</li><li>\u6A21\u677F\uFF0Csrc/main/resources/templates/error/5xx.ftl</li><li><code>class MyErrorPageRegistrar implements ErrorPageRegistrar</code></li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@ControllerAdvice</span><span class="token punctuation">(</span>basePackageClasses <span class="token operator">=</span> <span class="token class-name">AcmeController</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AcmeControllerAdvice</span> <span class="token keyword">extends</span> <span class="token class-name">ResponseEntityExceptionHandler</span>
<span class="token comment">// ///////</span>
<span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">resolveErrorView</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),h={href:"https://docs.spring.io/spring-boot/docs/2.6.6/reference/htmlsingle/#boot-features-error-handling",target:"_blank",rel:"noopener noreferrer"},p=s('<h2 id="_3h-05-\u542F\u52A8\u65F6warn-ut026010" tabindex="-1"><a class="header-anchor" href="#_3h-05-\u542F\u52A8\u65F6warn-ut026010" aria-hidden="true">#</a> 3H.05.\u542F\u52A8\u65F6Warn UT026010</h2><p>\u5728\u672A\u914D\u7F6Ewebsocket\u65F6\uFF0Cundertow\u4F7F\u7528\u9ED8\u8BA4buffer\uFF0C\u51FA\u73B0\u4EE5\u4E0B\u8B66\u544A\u3002 \u9700\u8981\u5B9A\u5236<code>websocketServletWebServerCustomizer</code>\uFF0C\u6216\u8BBE\u7F6E <code>spring.wings.slardar.enabled.undertow-ws=true</code>\u5373\u53EF</p><p>\u5728<code>io.undertow.websockets.jsr.Bootstrap</code> 68\u884C\uFF0C<code>buffers == null</code> \u65F6 <code>UT026010: Buffer pool was not set on WebSocketDeploymentInfo, the default pool will be used</code> \u9ED8\u8BA4 DefaultByteBufferPool(directBuffers, 1024, 100, 12);</p><h2 id="_3h-06-oauth2\u7684\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#_3h-06-oauth2\u7684\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> 3H.06.OAuth2\u7684\u53C2\u8003\u8D44\u6599</h2>',4),u={href:"https://projects.spring.io/spring-security-oauth/docs/oauth2.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://docs.spring.io/spring-security-oauth2-boot/docs/current/reference/htmlsingle/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://docs.spring.io/spring-security/site/docs/current/reference/htmlsingle/",target:"_blank",rel:"noopener noreferrer"},f=s('<h2 id="_3h-07-\u5982\u4F55\u914D\u7F6Esecurity" tabindex="-1"><a class="header-anchor" href="#_3h-07-\u5982\u4F55\u914D\u7F6Esecurity" aria-hidden="true">#</a> 3H.07.\u5982\u4F55\u914D\u7F6Esecurity</h2><p>security\u4E00\u5B9A\u662F\u7CFB\u7EDF\u4E2D\u6700\u4E3A\u91CD\u8981\u7684\u90E8\u5206\uFF0C\u4E5F\u662F\u6240\u6709\u6E17\u900F\u5165\u4FB5\u7684\u91CD\u70B9\uFF0C\u6240\u4EE5slardar\u65E0\u9ED8\u8BA4\u914D\u7F6E\u3002</p><p>\u914D\u7F6E\u4E2D\u53EF\u4EE5\u4F7F\u7528Order\uFF0C\u63D0\u4F9B\u591A\u4E2AHttpSecurity\u3002</p><h2 id="_3h-08-\u591A\u7EBF\u7A0B\u4E0B\u7684securitycontext" tabindex="-1"><a class="header-anchor" href="#_3h-08-\u591A\u7EBF\u7A0B\u4E0B\u7684securitycontext" aria-hidden="true">#</a> 3H.08.\u591A\u7EBF\u7A0B\u4E0B\u7684SecurityContext</h2><ul><li>DelegatingSecurityContext</li><li>transmittable-thread-local</li></ul><h2 id="_3h-09-\u6210\u529F\u767B\u9646\u540E\u8DF3\u8F6C" tabindex="-1"><a class="header-anchor" href="#_3h-09-\u6210\u529F\u767B\u9646\u540E\u8DF3\u8F6C" aria-hidden="true">#</a> 3H.09.\u6210\u529F\u767B\u9646\u540E\u8DF3\u8F6C</h2><p>SavedRequestAwareAuthenticationSuccessHandler\u548CRequestCache \u8FDB\u884C\u642D\u914D\u5373\u53EF\u3002 \u5728\u524D\u540E\u7AEF\u5206\u79BB\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u9700\u8981\u540E\u7AEF\u63A7\u5236\uFF0C\u6240\u4EE5\u5E94\u8BE5\u5173\u95EDRequestCache\u3002</p><ul><li>HTTP Referer header - \u6709\u4E9B\u6D4F\u89C8\u5668\u4E0D\u7ED9refer</li><li>saving the original request in the session - \u8981session\u652F\u6301</li><li>base64 original URL to the redirected login URL - \u901A\u5E38\u7684SSO\u5B9E\u73B0</li></ul><p>\u4E0D\u8FC7\uFF0Cspring security\u9ED8\u8BA4\u4E0D\u652F\u6301\u7B2C\u4E09\u79CD\u3002\u5982\u679C\u8981\u5B9A\u5236\u7684\u8BDD\uFF0C\u9700\u8981\u770BExceptionTranslationFilter\uFF0C \u5728sendStartAuthentication\u65B9\u6CD5\u4E2D\uFF0C\u5BF9requestCache\u6216authenticationEntryPoint\u4E0A\u8FDB\u884C\u5B9A\u5236\u3002 \u4E5F\u53EF\u4EE5\u901A\u8FC7interceptor\u5BF9loginPage\u8FDB\u884C\u5B9A\u5236\u3002</p>',9),m={href:"https://www.baeldung.com/spring-security-redirect-login",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.baeldung.com/spring-security-redirect-logged-in",target:"_blank",rel:"noopener noreferrer"},k=s('<h2 id="_3h-10-\u4EE5kv\u4F20\u9012\u6570\u7EC4\u53CA\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_3h-10-\u4EE5kv\u4F20\u9012\u6570\u7EC4\u53CA\u5BF9\u8C61" aria-hidden="true">#</a> 3H.10.\u4EE5KV\u4F20\u9012\u6570\u7EC4\u53CA\u5BF9\u8C61</h2><p>\u5728http\u534F\u8BAE\u4E2D\uFF0C\u6CA1\u6709\u660E\u786E\u7684\u89C4\u5B9A\u6570\u7EC4\u53CA\u5BF9\u8C61\u7684\u4F20\u9012\u65B9\u6CD5\uFF0C\u56E0\u6B64\u5B9E\u8DF5\u4E2D\uFF0Cspring\u53CAjs\u4F53\u7CFB\u4E0B\u6709\u4E0D\u540C\u7684\u9ED8\u8BA4\u89C4\u5219\u3002</p><ul><li><code>a=1&amp;a=2&amp;a=3</code>\uFF0Cservlet\u652F\u6301\uFF0Cspring\u652F\u6301\uFF0Cjs\u7684qs\u9700\u8981<code>{ indices: false }</code> (\u63A8\u8350)</li><li><code>a[]=1&amp;a[]=2&amp;a[]=3</code>\uFF0Cspring\u652F\u6301\uFF0Cjs\u7684qs\u9700\u8981<code>{ arrayFormat: &#39;brackets&#39; }</code></li><li><code>a[0]=1&amp;a[1]=2&amp;a[2]=3</code>\uFF0Cspring\u652F\u6301\uFF0Cjs\u7684qs\u9ED8\u8BA4\u683C\u5F0F</li></ul><p>\u5176\u4E2D\uFF0Cservlet\u652F\u6301\u65F6\uFF0C@RequestParam\u4E5F\u751F\u6548\uFF1Bspring\u652F\u6301\uFF0C\u6307\u9ED8\u8BA4\u7684DataBinding</p><p>\u53C2\u8003\u8D44\u6599</p>',5),v={href:"https://github.com/ljharb/qs#stringifying",target:"_blank",rel:"noopener noreferrer"},w={href:"https://docs.spring.io/spring-framework/docs/5.0.0.M4/spring-framework-reference/html/validation.html#beans-beans-conventions",target:"_blank",rel:"noopener noreferrer"},x={href:"https://docs.spring.io/spring-framework/docs/5.0.0.M4/spring-framework-reference/html/mvc.html#mvc-ann-matrix-variables",target:"_blank",rel:"noopener noreferrer"};function y(H,S){const a=o("ExternalLinkIcon");return i(),l("div",null,[d,e("p",null,[r("\u6587\u6863\u4F4D\u4E8E"),e("a",h,[r("error-handling"),n(a)])]),p,e("ul",null,[e("li",null,[e("a",u,[r("OAuth 2 Developers Guide"),n(a)])]),e("li",null,[e("a",g,[r("OAuth2 boot"),n(a)])]),e("li",null,[e("a",_,[r("Spring Security"),n(a)])])]),f,e("ul",null,[e("li",null,[e("a",m,[r("https://www.baeldung.com/spring-security-redirect-login"),n(a)])]),e("li",null,[e("a",b,[r("https://www.baeldung.com/spring-security-redirect-logged-in"),n(a)])])]),k,e("ul",null,[e("li",null,[e("a",v,[r("qs#stringifying"),n(a)])]),e("li",null,[e("a",w,[r("nested properties Conventions"),n(a)])]),e("li",null,[e("a",x,[r("@MatrixVariable"),n(a)])])])])}const A=t(c,[["render",y],["__file","3h-qa-slardar.html.vue"]]);export{A as default};