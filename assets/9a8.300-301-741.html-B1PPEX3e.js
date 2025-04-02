import{_ as t}from"./bountyhunter_minimap_icon-C264DgNC.js";import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{e as a,g as i,o as s}from"./app-q0R425qv.js";const r={};function o(l,e){return s(),a("div",null,e[0]||(e[0]=[i('<h1 id="_9a8-升迁-300-301-741-手册" tabindex="-1"><a class="header-anchor" href="#_9a8-升迁-300-301-741-手册"><span>9A8.升迁 300.301.741 手册</span></a></h1><p>在已升级到<code>3.3.140</code>后，从<code>300.301.741</code>开始的升级手册，包括，</p><ul><li>Bounty Hunter 赏金 <ul><li>300.301.741</li></ul></li></ul><h2 id="_9a8-1-bounty-hunter-赏金" tabindex="-1"><a class="header-anchor" href="#_9a8-1-bounty-hunter-赏金"><span><img src="'+t+`" alt="BountyHunter" title="BountyHunter"> 9A8.1.Bounty Hunter 赏金</span></a></h2><p>使用SemVer，有SpringBoot和wingsDev合成，包括了很多破坏性重构。</p><h3 id="_300-301-741-oauth-noncecheck" tabindex="-1"><a class="header-anchor" href="#_300-301-741-oauth-noncecheck"><span>300.301.741 Oauth nonceCheck</span></a></h3><p><a href="https://github.com/trydofor/professional-wings/issues/337" target="_blank" rel="noopener noreferrer">#337</a> ⚠️ 运行时 - AuthCheckController#nonceCheck</p><p>rename to <code>JustAuthRequestManager</code></p><p><a href="https://github.com/trydofor/professional-wings/issues/346" target="_blank" rel="noopener noreferrer">#346</a> 💥 编译时 - JustAuthRequestBuilder</p><div class="language-diff line-numbers-mode" data-highlighter="shiki" data-ext="diff" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">- * @return {401} token is not-found, expired, or failed</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">+ * @return {200 | Result(false))</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">- * @return {200 | Result(false, message=&#39;authing&#39;)} in authing</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">+ * @return {200 | Result(false, code=&#39;authing&#39;, message=&#39;authing&#39;)} in authing</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">- * @return {200 | Result(true, data=sessionId)}</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">+ * @return {200 | Result(true, code=&#39;session&#39;, data=sessionId)}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const u=n(r,[["render",o],["__file","9a8.300-301-741.html.vue"]]),d=JSON.parse('{"path":"/zh/9-example/9a.wings-change/9a8.300-301-741.html","title":"9A8.升迁 300.301.741 手册","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"circle-up","category":["实战","升迁"],"description":"9A8.升迁 300.301.741 手册 在已升级到3.3.140后，从300.301.741开始的升级手册，包括， Bounty Hunter 赏金 300.301.741 BountyHunter 9A8.1.Bounty Hunter 赏金 使用SemVer，有SpringBoot和wingsDev合成，包括了很多破坏性重构。 300.301....","GIT_REPO_HEAD":"2025-04-02 da9b4e04fc94cbc914e3a6d86b8766465737f2f7","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/9-example/9a.wings-change/9a8.300-301-741.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/9-example/9a.wings-change/9a8.300-301-741.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"9A8.升迁 300.301.741 手册"}],["meta",{"property":"og:description","content":"9A8.升迁 300.301.741 手册 在已升级到3.3.140后，从300.301.741开始的升级手册，包括， Bounty Hunter 赏金 300.301.741 BountyHunter 9A8.1.Bounty Hunter 赏金 使用SemVer，有SpringBoot和wingsDev合成，包括了很多破坏性重构。 300.301...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://wings.fessional.pro/bountyhunter_minimap_icon.png \\"BountyHunter\\""}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-03-28T09:55:28.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-28T09:55:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9A8.升迁 300.301.741 手册\\",\\"image\\":[\\"https://wings.fessional.pro/bountyhunter_minimap_icon.png \\\\\\"BountyHunter\\\\\\"\\"],\\"dateModified\\":\\"2025-03-28T09:55:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"git":{"createdTime":1742806406000,"updatedTime":1743155728000,"contributors":[{"name":"trydofor","username":"trydofor","email":"trydofor@gmail.com","commits":2,"url":"https://github.com/trydofor"}]},"readingTime":{"minutes":0.45,"words":134},"filePathRelative":"zh/9-example/9a.wings-change/9a8.300-301-741.md","localizedDate":"2025年3月24日","autoDesc":true}');export{u as comp,d as data};
