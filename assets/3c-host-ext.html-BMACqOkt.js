import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as t,o as a}from"./app-CCOA2OJI.js";const n={};function l(o,e){return a(),s("div",null,e[0]||(e[0]=[t(`<h1 id="_3c-host-extend-and-url-override" tabindex="-1"><a class="header-anchor" href="#_3c-host-extend-and-url-override"><span>3C.Host Extend and URL Override</span></a></h1><p>Based on Mvc features to achieve the same backend app multiple different frontend host tenant function. Unlike reverse proxy (nginx) rewrite,</p><ul><li>extend - the child domain has all the URLs of the parent domain</li><li>override - the child domain can override the URL of the parent domain</li><li>child domains have their own separate URLs</li><li>domain inheritance is based on host</li></ul><h2 id="_3c-1-scenario-example" tabindex="-1"><a class="header-anchor" href="#_3c-1-scenario-example"><span>3C.1.Scenario Example</span></a></h2><p>Assuming that <code>a.com</code> is a fully functional website, an example would include the following 3 URLs,</p><ul><li>GET /user-list.json - controller based</li><li>GET /css/main.css - static resource</li><li>GET /login.html - controller based</li></ul><p>At this point, we have a franchisee <code>b.com</code>, which is all the same as <code>a.com</code> except for the skin, and its own domain. Later on, <code>b.com</code> has its own requirements, and some of function and Url are different from <code>a.com</code>. The different functions are implemented independently and put under the convention prefix, at this time the URLs are distributed as follows.</p><ul><li>GET /login.html - <code>a.com</code>(parent), <code>b.com</code>(child)</li><li>GET /user-list.json - <code>a.com</code>(parent)</li><li>GET /css/main.css - <code>a.com</code>(parent)</li><li>GET /domain/b/user-list.json - <code>b.com</code>(child)</li><li>GET /domain/b/css/main.css - <code>b.com</code>(child)</li></ul><p>When the user visits the following URL, according to the parent-child override rules of Java, the following is called,</p><ul><li><code>a.com/login.html</code> - /login.html(parent)</li><li><code>a.com/user-list.json</code> - /user-info.list(parent)</li><li><code>a.com/css/main.css</code> - /css/main.css(parent)</li><li><code>b.com/login.html</code> - /login.html(parent)</li><li><code>b.com/user-list.json</code> - /domain/b/user-list.json(child)</li><li><code>b.com/css/main.css</code> - /domain/b/css/main.css(child)</li></ul><p>In the actual project, the above scenario mostly happens in the Mapping of resource and controller.</p><ul><li>Resource usually has a <code>**</code> match, use reflection in ResourceHttpRequestHandler.getResource to check</li><li>If not ResourceHttpRequestHandler and match <code>**</code>, you need to try the resource exists by yourself</li><li>temporarily do not support viewTemplate, but also suggest that templates must use the full path</li></ul><p>According to Wings mapping convention, avoid using relative paths, so b.com be prefixed at the class level</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Controller</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">RequestMapping</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/domain/b&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> UserController</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">GetMapping</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/user-info.json&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> fetchUserInfo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // View has no support and must be set manually</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;/domain/b/user-info&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3c-2-underlying-principle" tabindex="-1"><a class="header-anchor" href="#_3c-2-underlying-principle"><span>3C.2.Underlying Principle</span></a></h2><p>In SpringMvc system, a request enters the servlet container in the worker thread,</p><ul><li>Filter#doFilter <code>before</code> chain.doFilter</li><li>DispatcherServlet#doService <code>call</code> doDispatch</li><li>Filter#doFilter <code>after</code> chain.doFilter</li></ul><p>Wings use WingsDomainFilter, first check the host, if it is an inherited domain, then construct the subdomain full path url. By checking the cache and the HandlerMapping in DispatchServlet, construct a RequestWrapper.</p><p>For example, the user visits the URL /user/login.json, assuming that the domain is inheritance and the host is trydofor. The actual resource accessed on the server side is /prefix/trydofor/user/login.json</p><p>That is, the path <code>/\${prefix}/\${host}</code> is added before the client request the URI. Knowledge extension.</p><ul><li>Request is available before the FilterChain.doFilter call, and Response is available afterwards, with thread safety and performance in mind.</li><li>Default static resources in the classpath <code>/static</code>, <code>/public</code>, <code>/resources</code>, <code>/META-INF/resources</code></li></ul>`,21)]))}const d=i(n,[["render",l],["__file","3c-host-ext.html.vue"]]),h=JSON.parse('{"path":"/3-slardar/3c-host-ext.html","title":"3C.Host Extend and URL Override","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"feather","category":["Slardar","Tenant"],"description":"3C.Host Extend and URL Override Based on Mvc features to achieve the same backend app multiple different frontend host tenant function. Unlike reverse proxy (nginx) rewrite, ext...","GIT_REPO_HEAD":"2025-02-06 a8fb043a36c51604d1078076241b71fc4a4529a1","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/3-slardar/3c-host-ext.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/3-slardar/3c-host-ext.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"3C.Host Extend and URL Override"}],["meta",{"property":"og:description","content":"3C.Host Extend and URL Override Based on Mvc features to achieve the same backend app multiple different frontend host tenant function. Unlike reverse proxy (nginx) rewrite, ext..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3C.Host Extend and URL Override\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"3C.1.Scenario Example","slug":"_3c-1-scenario-example","link":"#_3c-1-scenario-example","children":[]},{"level":2,"title":"3C.2.Underlying Principle","slug":"_3c-2-underlying-principle","link":"#_3c-2-underlying-principle","children":[]}],"git":{"createdTime":1655981049000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","username":"trydofor","email":"trydofor@gmail.com","commits":7,"url":"https://github.com/trydofor"}]},"readingTime":{"minutes":1.55,"words":464},"filePathRelative":"3-slardar/3c-host-ext.md","localizedDate":"June 23, 2022","autoDesc":true}');export{d as comp,h as data};
