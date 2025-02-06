import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,b as t,d as e,e as s,f as r,g as l,r as p,o as d}from"./app-CCOA2OJI.js";const h={};function c(k,i){const n=p("RouteLink");return d(),o("div",null,[i[7]||(i[7]=t('<h1 id="_0j-code-pattern" tabindex="-1"><a class="header-anchor" href="#_0j-code-pattern"><span>0J.Code Pattern</span></a></h1><p>Collection of common code patterns in Wings coding practices.</p><h2 id="_0j01-comments-in-config-script" tabindex="-1"><a class="header-anchor" href="#_0j01-comments-in-config-script"><span>0J01.Comments in Config/Script</span></a></h2><p>There are 2 types of comment in Config (<code>*.properties</code>) and Script (<code>*.sh</code>) according to their purpose.</p><ul><li>Toggle code, related to functionality. Use single comments like <code>#</code>.</li><li>Just doc, unrelated to functionality. Use double comments, like <code>##</code>.</li></ul><p>The benefits of this rule are,</p><ul><li>Clearly identifies the purpose of the comments</li><li>Functional code can be toggled quickly, e.g, shortcuts or column editing</li><li>Avoid double comments to be turned on by mistake</li></ul><h2 id="_0j02-swagger-api-doc" tabindex="-1"><a class="header-anchor" href="#_0j02-swagger-api-doc"><span>0J02.Swagger Api Doc</span></a></h2>',8)),e("p",null,[i[1]||(i[1]=s("Refer to ")),r(n,{to:"/0-wings/0a-code-style.html#0a9api-testing-and-docs-convention"},{default:l(()=>i[0]||(i[0]=[s("0A.9.Api Testing and Docs Convention")])),_:1}),i[2]||(i[2]=s(", Write documents in ")),i[3]||(i[3]=e("code",null,"jsdoc",-1)),i[4]||(i[4]=s(" and ")),i[5]||(i[5]=e("code",null,"markdown",-1)),i[6]||(i[6]=s(" formats."))]),i[8]||(i[8]=t(`<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">SuppressWarnings</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;UastIncorrectHttpHeaderInspection&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Operation</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">summary</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Verify that the one-time token is valid&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> description</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        # Usage</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        Use Oauth2 state as the token and require the same ip, agent and other header as the original client.</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        After successful verification, the session and cookie are in the header as a normal login</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        ## Params</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        * @param token - RequestHeader Oauth2 state as token</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        ## Returns</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        * @return {401} token is not-found, expired, or failed</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        * @return {200 | Result(false, message=&#39;authing&#39;)} in verifying</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        * @return {200 | Result(true, data=sessionId)} success</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &quot;&quot;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">PostMapping</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">value</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;\${&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> WarlockUrlmapProp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">Key$authNonceCheck</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;}&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1))])}const u=a(h,[["render",c],["__file","0j-code-pattern.html.vue"]]),y=JSON.parse('{"path":"/0-wings/0j-code-pattern.html","title":"0J.Code Pattern","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"brush","category":["WingsGod","Standard"],"description":"0J.Code Pattern Collection of common code patterns in Wings coding practices. 0J01.Comments in Config/Script There are 2 types of comment in Config (*.properties) and Script (*....","GIT_REPO_HEAD":"2025-02-06 a8fb043a36c51604d1078076241b71fc4a4529a1","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/0-wings/0j-code-pattern.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/0-wings/0j-code-pattern.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"0J.Code Pattern"}],["meta",{"property":"og:description","content":"0J.Code Pattern Collection of common code patterns in Wings coding practices. 0J01.Comments in Config/Script There are 2 types of comment in Config (*.properties) and Script (*...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"0J.Code Pattern\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"0J01.Comments in Config/Script","slug":"_0j01-comments-in-config-script","link":"#_0j01-comments-in-config-script","children":[]},{"level":2,"title":"0J02.Swagger Api Doc","slug":"_0j02-swagger-api-doc","link":"#_0j02-swagger-api-doc","children":[]}],"git":{"createdTime":1692237469000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","username":"trydofor","email":"trydofor@gmail.com","commits":3,"url":"https://github.com/trydofor"}]},"readingTime":{"minutes":0.67,"words":201},"filePathRelative":"0-wings/0j-code-pattern.md","localizedDate":"August 17, 2023","autoDesc":true}');export{u as comp,y as data};
