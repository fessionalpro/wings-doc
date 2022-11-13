import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as t,o as i,c as l,b as n,e as s,d as a,f as o}from"./app.3a3f8823.js";const c={},p=n("h1",{id:"_9c2-\u8BB0\u5F55\u548C\u91CD\u653E\u8BF7\u6C42",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_9c2-\u8BB0\u5F55\u548C\u91CD\u653E\u8BF7\u6C42","aria-hidden":"true"},"#"),s(" 9C2.\u8BB0\u5F55\u548C\u91CD\u653E\u8BF7\u6C42")],-1),d=n("p",null,"\u5728\u6B63\u5F0F\u73AF\u5883\u4E0B\uFF0C\u9700\u6C42\u5BF9\u67D0\u4E9Bhttp\u8BF7\u6C42\u8FDB\u884C\u8BB0\u5F55\u548C\u91CD\u653E\u3002 \u7B80\u5355\u6613\u884C\u7684\u7B56\u7565\u6709\uFF0CNginx\u7684mirror\u590D\u5236\u5230GoReplay\u6216wiremock\u3002",-1),u=n("p",null,"\u53C2\u8003\u8D44\u6599\u5982\u4E0B\uFF0C\u672C\u624B\u518C\u4EE5mirror\u5FAE\u4FE1\u8BF7\u6C42\u5230mocklab\u4E91\u670D\u52A1\u548CGor\u672C\u5730\u670D\u52A1\u4E3A\u4F8B",-1),k={href:"https://nginx.org/en/docs/http/ngx_http_mirror_module.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://wiremock.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/buger/goreplay/wiki",target:"_blank",rel:"noopener noreferrer"},_=n("h2",{id:"_9c2-1-mocklab\u670D\u52A1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_9c2-1-mocklab\u670D\u52A1","aria-hidden":"true"},"#"),s(" 9C2.1.mocklab\u670D\u52A1")],-1),b=n("p",null,"\u4F7F\u7528github\u7533\u8BF7free\u8D26\u53F7\uFF0C\u83B7\u5F97Mock APIs\u7684URL\u548CToken\uFF0C\u5982 Settings/Usage examples\u4E2D\u7684curl\u4F8B\u5B50\u4E2D\u6709\u76F8\u5E94\u5B57\u6BB5\uFF0C\u5982\u4E0B\u7279\u5F81\uFF0C",-1),h={href:"https://xxxx.mocklab.io/",target:"_blank",rel:"noopener noreferrer"},g=n("li",null,"Token 14ef56fxxxx24fba5",-1),x=o(`<p>\u6700\u540E\uFF0C\u53EF\u4EE5\u5728 Request Log \u4E2D\u83B7\u5F97\u6240\u6709\u8BF7\u6C42\uFF0C\u5E76Convert to stub\u4EE5\u4FBF\u6D4B\u8BD5\u4F7F\u7528\u3002</p><h2 id="_9c2-2-gor\u672C\u5730\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_9c2-2-gor\u672C\u5730\u670D\u52A1" aria-hidden="true">#</a> 9C2.2.gor\u672C\u5730\u670D\u52A1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://github.com/buger/goreplay/releases/download/1.3.3/gor_1.3.3_x64.tar.gz
<span class="token function">tar</span> -xzf gor_1.3.3_x64.tar.gz
<span class="token comment"># \u5F00\u542F\u5E76\u76D1\u542C 18081\uFF0C\u82E5\u662Fattach\u5230\u5176\u4ED6\u670D\u52A1\u7AEF\u53E3\uFF0C\u5219\u4E0D\u9700\u8981http-pprof</span>
<span class="token function">tee</span> gor.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
gor_file=weixin-%Y%m%d.gor
cur_file=$(date +$gor_file)
test -f &quot;$cur_file&quot; &amp;&amp; mv $cur_file $cur_file.$(date +%H%M%S)
./gor --http-pprof :18081 \\
--input-raw :18081 \\
--output-file $gor_file \\
--output-file-append
EOF</span>
<span class="token function">chmod</span> +x gor.sh
<span class="token function">sudo</span> <span class="token function">nohup</span> ./gor.sh <span class="token operator">&amp;</span>
<span class="token comment"># test</span>
<span class="token function">curl</span> http://127.0.0.1:18081/debug/pprof/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),f={href:"https://github.com/buger/goreplay/blob/master/output_file.go",target:"_blank",rel:"noopener noreferrer"},y=o(`<ul><li>output-file-append\u65E0\u6548\uFF0C\u91CD\u542Fgor\u65F6\u4F1A\u8986\u76D6gor\u6587\u4EF6\uFF0C\u9700\u8981\u6CE8\u610F\u5907\u4EFD</li><li>output-file \u4E0D\u4F1A\u81EA\u52A8flush\uFF0C\u53EA\u80FDbuff\u6EE1\u6216\u5173\u95EDgor</li><li>\u82E5\u9700\u8981\u5B9E\u65F6\u89C2\u6D4B\uFF0C\u5EFA\u8BAE\u4F7F\u7528 output-stdout</li></ul><h2 id="_9c2-3-nginx\u7684mirror" tabindex="-1"><a class="header-anchor" href="#_9c2-3-nginx\u7684mirror" aria-hidden="true">#</a> 9C2.3.nginx\u7684mirror</h2><blockquote><p>The ngx_http_mirror_module module (1.13.4) implements mirroring of an original request by creating background mirror subrequests. Responses to mirror subrequests are ignored.</p></blockquote><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /weixin/geteway.api</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">mirror</span> /__mirror_mock</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">mirror</span> /__mirror_gor</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://xxxx</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">location</span> = /__mirror_mock</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">internal</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">resolver</span> 8.8.8.8</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> https://xxx.mocklab.io<span class="token variable">$request_uri</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Authorization <span class="token string">&quot;Token 14exxxxxxxba5&quot;</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">location</span> = /__mirror_gor</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">internal</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:18081<span class="token variable">$request_uri</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9c2-4-\u4F7F\u7528\u5EFA\u8BAE" tabindex="-1"><a class="header-anchor" href="#_9c2-4-\u4F7F\u7528\u5EFA\u8BAE" aria-hidden="true">#</a> 9C2.4.\u4F7F\u7528\u5EFA\u8BAE</h2><p>gor\u548Cmocklab\u8BBE\u7F6E\u5176\u4E00\u5373\u53EF\uFF0C\u6839\u636E\u60C5\u51B5\u53D6\u820D\uFF0Cdev\u73AF\u5883\u5EFA\u8BAEmocklab\uFF0C\u4FBF\u4E8E\u751F\u6210test\u3002</p>`,6),w=n("code",null,"resolver 8.8.8.8",-1),q={href:"http://xxx.mocklab.io",target:"_blank",rel:"noopener noreferrer"};function $(R,C){const e=t("ExternalLinkIcon");return i(),l("div",null,[p,d,u,n("ul",null,[n("li",null,[n("a",k,[s("Nginx/mirror"),a(e)])]),n("li",null,[n("a",v,[s("wiremock/mocklab"),a(e)])]),n("li",null,[n("a",m,[s("GoReplay/Gor"),a(e)])])]),_,b,n("ul",null,[n("li",null,[n("a",h,[s("https://xxxx.mocklab.io/"),a(e)])]),g]),x,n("p",null,[s("\u6CE8\u610F\uFF0Cgor 2.0\u76EE\u524D\u8FD8\u5728rc\u9636\u6BB5\uFF0C1.3\u5B9E\u6D4B\u4E2D\u5B58\u5728\u4E00\u4E9B\u95EE\u9898\uFF0C\u6BD4\u5982\u4FDD\u5B58\u6587\u4EF6\u65F6 "),n("a",f,[s("https://github.com/buger/goreplay/blob/master/output_file.go"),a(e)])]),y,n("p",null,[s("\u82E5mirror\u6CA1\u6709\u8F6C\u53D1\uFF0C\u53EF\u89C2\u6D4Bnginx error\u65E5\u5FD7\uFF0C\u4E0A\u4F8B\u4E2D\u7684"),w,s("\u89E3\u51B3\u4E00\u4E0B\u95EE\u9898\uFF0C no resolver defined to resolve "),n("a",q,[s("xxx.mocklab.io"),a(e)]),s(', request: "POST ..."')])])}const E=r(c,[["render",$],["__file","9c2.request-record-replay.html.vue"]]);export{E as default};