import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,c as o,b as s,d as i,f as r,w as l,e,o as p}from"./app-BcJ4NaN5.js";const d={},h=e('<h1 id="_0j-code-pattern" tabindex="-1"><a class="header-anchor" href="#_0j-code-pattern"><span>0J.Code Pattern</span></a></h1><p>Collection of common code patterns in Wings coding practices.</p><h2 id="_0j01-comments-in-config-script" tabindex="-1"><a class="header-anchor" href="#_0j01-comments-in-config-script"><span>0J01.Comments in Config/Script</span></a></h2><p>There are 2 types of comment in Config (<code>*.properties</code>) and Script (<code>*.sh</code>) according to their purpose.</p><ul><li>Toggle code, related to functionality. Use single comments like <code>#</code>.</li><li>Just doc, unrelated to functionality. Use double comments, like <code>##</code>.</li></ul><p>The benefits of this rule are,</p><ul><li>Clearly identifies the purpose of the comments</li><li>Functional code can be toggled quickly, e.g, shortcuts or column editing</li><li>Avoid double comments to be turned on by mistake</li></ul><h2 id="_0j02-swagger-api-doc" tabindex="-1"><a class="header-anchor" href="#_0j02-swagger-api-doc"><span>0J02.Swagger Api Doc</span></a></h2>',8),c=s("code",null,"jsdoc",-1),k=s("code",null,"markdown",-1),g=e(`<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">SuppressWarnings</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;UastIncorrectHttpHeaderInspection&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Operation</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">summary</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;Verify that the one-time token is valid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> description</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        # Usage</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        Use Oauth2 state as the token and require the same ip, agent and other header as the original client.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        After successful verification, the session and cookie are in the header as a normal login</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        ## Params</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        * @param token - RequestHeader Oauth2 state as token</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        ## Returns</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        * @return {401} token is not-found, expired, or failed</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        * @return {200 | Result(false, message=&#39;authing&#39;)} in verifying</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        * @return {200 | Result(true, data=sessionId)} success</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &quot;&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">PostMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;\${&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> WarlockUrlmapProp</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Key$authNonceCheck</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function m(u,y){const t=a("RouteLink");return p(),o("div",null,[h,s("p",null,[i("Refer to "),r(t,{to:"/0-wings/0a-code-style.html#0a9api-testing-and-docs-convention"},{default:l(()=>[i("0A.9.Api Testing and Docs Convention")]),_:1}),i(", Write documents in "),c,i(" and "),k,i(" formats.")]),g])}const v=n(d,[["render",m],["__file","0j-code-pattern.html.vue"]]),_=JSON.parse('{"path":"/0-wings/0j-code-pattern.html","title":"0J.Code Pattern","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"brush","category":["WingsGod","Standard"],"description":"0J.Code Pattern Collection of common code patterns in Wings coding practices. 0J01.Comments in Config/Script There are 2 types of comment in Config (*.properties) and Script (*....","GIT_REPO_HEAD":"2024-07-07 fbb1f4817448a18f6c9bd497c9b5837508d2198e","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/0-wings/0j-code-pattern.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/0-wings/0j-code-pattern.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"0J.Code Pattern"}],["meta",{"property":"og:description","content":"0J.Code Pattern Collection of common code patterns in Wings coding practices. 0J01.Comments in Config/Script There are 2 types of comment in Config (*.properties) and Script (*...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"0J.Code Pattern\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"0J01.Comments in Config/Script","slug":"_0j01-comments-in-config-script","link":"#_0j01-comments-in-config-script","children":[]},{"level":2,"title":"0J02.Swagger Api Doc","slug":"_0j02-swagger-api-doc","link":"#_0j02-swagger-api-doc","children":[]}],"git":{"createdTime":1692237469000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":3}]},"readingTime":{"minutes":0.67,"words":201},"filePathRelative":"0-wings/0j-code-pattern.md","localizedDate":"August 17, 2023","autoDesc":true}');export{v as comp,_ as data};
