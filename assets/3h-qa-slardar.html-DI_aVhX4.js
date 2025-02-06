import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as i,o as r}from"./app-CCOA2OJI.js";const n={};function s(o,e){return r(),a("div",null,e[0]||(e[0]=[i(`<h1 id="_3h-backend-faq-topic" tabindex="-1"><a class="header-anchor" href="#_3h-backend-faq-topic"><span>3H.Backend Faq Topic</span></a></h1><h2 id="_3h-01-error-creating-hazelcastinstance" tabindex="-1"><a class="header-anchor" href="#_3h-01-error-creating-hazelcastinstance"><span>3H.01.Error creating &#39;hazelcastInstance&#39;</span></a></h2><blockquote><p>Error creating bean with name &#39;hazelcastInstance&#39; Invalid content was found starting with element &#39;cluster-name&#39;</p></blockquote><p>The above message means a compatibility issue between hazelcast 3 and 4 configuration, boot-2.2.x uses hazelcast 3.12.x.</p><h2 id="_3h-02-modify-servlet-container" tabindex="-1"><a class="header-anchor" href="#_3h-02-modify-servlet-container"><span>3H.02.Modify Servlet Container</span></a></h2><p>slardar uses undertow by default and provides spring-servlet-server-79.properties configuration</p><h2 id="_3h-03-session-solution" tabindex="-1"><a class="header-anchor" href="#_3h-03-session-solution"><span>3H.03.Session Solution</span></a></h2><p>In fact, hazelcast is a good choice, if you use redis, remember to set <code>requirepass</code>. Finally, I switched from redis+redisson to hazelcast. The reasons are as follows.</p><ul><li>simplicity of single application evolution, hazelcast is zero dependency</li><li>performance, availability, operations and maintenance perspective, the two 50-50</li></ul><p>About hazelcast and spring, the main management scenarios are cache, session, security</p><ul><li>springboot first tries to as client, then an embedded server</li><li>spring session using @Enable*HttpSession manual configuration</li></ul><p>The documentation is hazelcast3 configuration, the actual support 4. The examples in the documentation are configured by coding, but can actually be configured by xml. The system provides the multicast configuration for server and client by default.</p><h2 id="_3h-04-exception-handling" tabindex="-1"><a class="header-anchor" href="#_3h-04-exception-handling"><span>3H.04.Exception Handling</span></a></h2><p>You need to customize a mechanism according to spring conventions and actual needs. But don&#39;t use <code>spring.mvc.throw-exception-if-no-handler-found=true</code>. This is why exceptions are called exceptions, they can&#39;t be handled as normal and avoid being used to handle normal things.</p><ul><li>controller layer exceptions with <code>@ControllerAdvice</code> or <code>@ExceptionHandler</code></li><li>service layer exceptions, do your own business processing, or AOP logging</li><li>Static, src/main/resources/public/error/404.html</li><li>Template, src/main/resources/templates/error/5xx.ftl</li><li><code>class MyErrorPageRegistrar implements ErrorPageRegistrar</code></li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">ControllerAdvice</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">basePackageClasses</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> AcmeController</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">class</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> AcmeControllerAdvice</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ResponseEntityExceptionHandler</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// ///////</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E06C75;">public </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ModelAndView</span><span style="--shiki-light:#C18401;--shiki-dark:#E06C75;"> resolveErrorView(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">HttpServletRequest</span><span style="--shiki-light:#C18401;--shiki-dark:#E06C75;"> request</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF;">,</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#web.servlet.spring-mvc.error-handling" target="_blank" rel="noopener noreferrer">Error Handling</a></p><h2 id="_3h-05-warn-ut026010-at-startup" tabindex="-1"><a class="header-anchor" href="#_3h-05-warn-ut026010-at-startup"><span>3H.05.Warn UT026010 at startup</span></a></h2><p>Undertow uses the default buffer when websocket is not configured, the warning will appears. You need to customize <code>websocketServletWebServerCustomizer</code></p><p>in line 68 <code>io.undertow.websockets.jsr.Bootstrap</code>, if <code>buffers == null</code><code>UT026010: Buffer pool was not set on WebSocketDeploymentInfo, the default pool will be used</code> DefaultByteBufferPool(directBuffers, 1024, 100, 12);</p><h2 id="_3h-06-oauth2-references" tabindex="-1"><a class="header-anchor" href="#_3h-06-oauth2-references"><span>3H.06.OAuth2 References</span></a></h2><ul><li><a href="https://projects.spring.io/spring-security-oauth/docs/oauth2.html" target="_blank" rel="noopener noreferrer">OAuth 2 Developers Guide</a></li><li><a href="https://docs.spring.io/spring-security-oauth2-boot/docs/current/reference/htmlsingle/" target="_blank" rel="noopener noreferrer">OAuth2 boot</a></li><li><a href="https://docs.spring.io/spring-security/site/docs/current/reference/htmlsingle/" target="_blank" rel="noopener noreferrer">Spring Security</a></li></ul><h2 id="_3h-07-configure-security" tabindex="-1"><a class="header-anchor" href="#_3h-07-configure-security"><span>3H.07.Configure Security</span></a></h2><p>Security must be the most important part of the system, and also the focus of penetration and attack, so slardar no default configuration.</p><p>Order can be used in the configuration to provide multiple HttpSecurity.</p><h2 id="_3h-08-securitycontext-in-multi-thread" tabindex="-1"><a class="header-anchor" href="#_3h-08-securitycontext-in-multi-thread"><span>3H.08.SecurityContext in Multi-Thread</span></a></h2><ul><li>DelegatingSecurityContext</li><li>transmittable-thread-local</li></ul><h2 id="_3h-09-redirect-after-login" tabindex="-1"><a class="header-anchor" href="#_3h-09-redirect-after-login"><span>3H.09.Redirect After Login</span></a></h2><p>SavedRequestAwareAuthenticationSuccessHandler and RequestCache can be combined. In the case of frontend and backend separation, no backend control is needed, so RequestCache should be disabled.</p><ul><li>HTTP Referrer header - some browsers don&#39;t give refer</li><li>saving the original request in the session - need session support</li><li>base64 original URL to the redirected login URL - the usual SSO impl</li></ul><p>However, spring security does not support the third one by default. If you want to customize it, you need to look at ExceptionTranslationFilter, in sendStartAuthentication method, customize the requestCache or authenticationEntryPoint. You can also customize the loginPage through the interceptor.</p><ul><li><a href="https://www.baeldung.com/spring-security-redirect-login" target="_blank" rel="noopener noreferrer">https://www.baeldung.com/spring-security-redirect-login</a></li><li><a href="https://www.baeldung.com/spring-security-redirect-logged-in" target="_blank" rel="noopener noreferrer">https://www.baeldung.com/spring-security-redirect-logged-in</a></li></ul><h2 id="_3h-10-pass-array-object-by-kv" tabindex="-1"><a class="header-anchor" href="#_3h-10-pass-array-object-by-kv"><span>3H.10.Pass Array/Object by KV</span></a></h2><p>In the http protocol, there is no explicitly specified method for passing arrays and objects, so in practice, there are different default rules under spring and js systems.</p><ul><li><code>a=1&amp;a=2&amp;a=3</code>, servlet support, spring support, js/qs need <code>{ indices: false }</code> (recommended)</li><li><code>a[]=1&amp;a[]=2&amp;a[]=3</code>, spring support, js/qs need <code>{ arrayFormat: &#39;brackets&#39; }</code></li><li><code>a[0]=1&amp;a[1]=2&amp;a[2]=3</code>, spring support, js/qs default format</li></ul><p>servlet support mean @RequestParam also takes effect; spring support means the DataBinding</p><p>Reference,</p><ul><li><a href="https://github.com/ljharb/qs#stringifying" target="_blank" rel="noopener noreferrer">qs#stringifying</a></li><li><a href="https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-beans-conventions" target="_blank" rel="noopener noreferrer">Basic and Nested Properties</a></li><li><a href="https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc-ann-matrix-variables" target="_blank" rel="noopener noreferrer">Matrix Variables</a></li></ul>`,38)]))}const h=t(n,[["render",s],["__file","3h-qa-slardar.html.vue"]]),d=JSON.parse(`{"path":"/3-slardar/3h-qa-slardar.html","title":"3H.Backend Faq Topic","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"circle-question","category":["Slardar","Topic","Backend"],"description":"3H.Backend Faq Topic 3H.01.Error creating 'hazelcastInstance' Error creating bean with name 'hazelcastInstance' Invalid content was found starting with element 'cluster-name' Th...","GIT_REPO_HEAD":"2025-02-06 a8fb043a36c51604d1078076241b71fc4a4529a1","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/3-slardar/3h-qa-slardar.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/3-slardar/3h-qa-slardar.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"3H.Backend Faq Topic"}],["meta",{"property":"og:description","content":"3H.Backend Faq Topic 3H.01.Error creating 'hazelcastInstance' Error creating bean with name 'hazelcastInstance' Invalid content was found starting with element 'cluster-name' Th..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-09T11:57:11.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-09T11:57:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3H.Backend Faq Topic\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-09T11:57:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"3H.01.Error creating 'hazelcastInstance'","slug":"_3h-01-error-creating-hazelcastinstance","link":"#_3h-01-error-creating-hazelcastinstance","children":[]},{"level":2,"title":"3H.02.Modify Servlet Container","slug":"_3h-02-modify-servlet-container","link":"#_3h-02-modify-servlet-container","children":[]},{"level":2,"title":"3H.03.Session Solution","slug":"_3h-03-session-solution","link":"#_3h-03-session-solution","children":[]},{"level":2,"title":"3H.04.Exception Handling","slug":"_3h-04-exception-handling","link":"#_3h-04-exception-handling","children":[]},{"level":2,"title":"3H.05.Warn UT026010 at startup","slug":"_3h-05-warn-ut026010-at-startup","link":"#_3h-05-warn-ut026010-at-startup","children":[]},{"level":2,"title":"3H.06.OAuth2 References","slug":"_3h-06-oauth2-references","link":"#_3h-06-oauth2-references","children":[]},{"level":2,"title":"3H.07.Configure Security","slug":"_3h-07-configure-security","link":"#_3h-07-configure-security","children":[]},{"level":2,"title":"3H.08.SecurityContext in Multi-Thread","slug":"_3h-08-securitycontext-in-multi-thread","link":"#_3h-08-securitycontext-in-multi-thread","children":[]},{"level":2,"title":"3H.09.Redirect After Login","slug":"_3h-09-redirect-after-login","link":"#_3h-09-redirect-after-login","children":[]},{"level":2,"title":"3H.10.Pass Array/Object by KV","slug":"_3h-10-pass-array-object-by-kv","link":"#_3h-10-pass-array-object-by-kv","children":[]}],"git":{"createdTime":1655981049000,"updatedTime":1736423831000,"contributors":[{"name":"trydofor","username":"trydofor","email":"trydofor@gmail.com","commits":11,"url":"https://github.com/trydofor"},{"name":"robbietree8","username":"robbietree8","email":"wangzg1988@gmail.com","commits":1,"url":"https://github.com/robbietree8"}]},"readingTime":{"minutes":2.04,"words":612},"filePathRelative":"3-slardar/3h-qa-slardar.md","localizedDate":"June 23, 2022","autoDesc":true}`);export{h as comp,d as data};
