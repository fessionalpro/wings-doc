import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.b895f419.js";const i={},t=e(`<h1 id="_9-\u5B9E\u6218\u6F14\u793A" tabindex="-1"><a class="header-anchor" href="#_9-\u5B9E\u6218\u6F14\u793A" aria-hidden="true">#</a> 9.\u5B9E\u6218\u6F14\u793A</h1><p>\u8FD0\u884C<code>wings-init-project.sh</code>\u751F\u6210\u4E00\u4E2A\u6837\u677F\u5DE5\u7A0B\u3002</p><h2 id="_9-1-\u524D\u7F6E\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#_9-1-\u524D\u7F6E\u6761\u4EF6" aria-hidden="true">#</a> 9.1.\u524D\u7F6E\u6761\u4EF6</h2><ul><li>\u4E86\u89E3 <code>maven</code>\uFF0C\u7F3A\u4EC0\u4E48\uFF0C\u8865\u4EC0\u4E48\u3002</li><li>\u4E86\u89E3 <code>spring*</code>\uFF0C<code>\u770B\u5B98\u65B9\u6587\u6863\uFF0C\u4E0D\u8981\u767E\u5EA6</code> x 3\uFF01</li><li>\u4E86\u89E3 <code>mysql*</code>\u6570\u636E\u5E93\uFF0Cmysql</li></ul><h2 id="_9-2-\u81EA\u5EFA\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#_9-2-\u81EA\u5EFA\u73AF\u5883" aria-hidden="true">#</a> 9.2.\u81EA\u5EFA\u73AF\u5883</h2><p>\u9ED8\u8BA4\u91C7\u7528H2\u5185\u5B58\u6570\u636E\u5E93\u6F14\u793A\uFF0C\u53EF\u81EA\u5EFADocker\u6F14\u793AMysql\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BBE\u7F6E\u53D8\u91CF</span>
<span class="token assign-left variable">PASS</span><span class="token operator">=</span>S4f3_Password@MoilionCircle

<span class="token comment"># \u521B\u5EFA\u4E00\u4E2Amysql\u6570\u636E\u5E93</span>
<span class="token function">docker</span> run -d <span class="token punctuation">\\</span>
--name winx-mysql-8.0 <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MYSQL_DATABASE</span><span class="token operator">=</span>wings_example <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token variable">\${PASS}</span> <span class="token punctuation">\\</span>
-p <span class="token number">3306</span>:3306 <span class="token punctuation">\\</span>
mysql:8.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-3-\u7A0B\u5E8F\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#_9-3-\u7A0B\u5E8F\u90E8\u7F72" aria-hidden="true">#</a> 9.3.\u7A0B\u5E8F\u90E8\u7F72</h2><p>\u590D\u5236<code>ln -s</code> wings-starter.sh\u548C<code>*.env</code>\u6587\u4EF6\uFF0C\u4EE5winx-admin\u4E3A\u4F8B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5EFA\u7ACB\u542F\u52A8\u811A\u672C\uFF0C\u4E00\u4E2Aboot\u4E00\u4E2A</span>
<span class="token function">ln</span> -s wings-starter.sh winx-admin.sh
<span class="token comment"># \u590D\u5236 wings-starter.env\u5185\u5BB9\uFF0C\u4E0E\u542F\u52A8\u811A\u672C\u540C\u540D(\u6269\u5C55\u540D\u4E0D\u540C)</span>
<span class="token function">vi</span> winx-admin.env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728env\u4E2D\uFF0Cport,jar,log\u5BB9\u6613\u7406\u89E3\uFF0C\u6309\u9879\u76EE\u9700\u8981\u914D\u7F6E\u5373\u53EF\u3002 BOOT_CNF\u662F\u7528\u6765\u66FF\u6362\u9ED8\u8BA4\u914D\u7F6E\u7684\u8FD0\u884C\u65F6\u914D\u7F6E\uFF0C\u7ED3\u6784\u5982\u4E0B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 application.properties // \u7A0B\u5E8F\u7EA7\u8BBE\u7F6E
\u251C\u2500\u2500 wings-conf // \u81EA\u52A8\u914D\u7F6E\uFF0C\u6309\u9700\u8986\u76D6\u5185\u90E8\u6587\u4EF6
\u2502     \u2514\u2500\u2500 spring-datasource.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-4-\u53CD\u5411\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#_9-4-\u53CD\u5411\u4EE3\u7406" aria-hidden="true">#</a> 9.4.\u53CD\u5411\u4EE3\u7406</h2><p>\u901A\u5E38\u7684\u914D\u7F6E\u53C2\u8003\uFF0C\u5305\u62EC\u5F3A\u5236https\uFF0C\u4FDD\u62A4\u8BEF\u64CD\u4F5C.git\uFF0C\u524D\u540E\u7AEF\u5206\u79BB\u3002</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> winx_admin</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">ip_hash</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> winx_appser_01:8090</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> winx_appser_02:8090</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">keepalive</span> <span class="token number">300</span></span><span class="token punctuation">;</span> <span class="token comment"># \u957F\u8FDE\u63A5</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">443</span> ssl</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  admin.moilioncircle.com</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">access_log</span> /data/logs/nginx/admin.moilioncircle.com-access.log</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">error_log</span>  /data/logs/nginx/admin.moilioncircle.com-error.log</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">ssl_certificate</span>     /data/nginx/cert/moilioncircle.com/fullchain.pem</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_certificate_key</span> /data/nginx/cert/moilioncircle.com/privkey.pem</span><span class="token punctuation">;</span>

    <span class="token comment">#if ($scheme = http) {</span>
    <span class="token comment">#    return 301 https://$host$request_uri;</span>
    <span class="token comment">#}</span>
    
    <span class="token comment"># \u9632\u5FA1\u6027\u8BBE\u7F6E\uFF0C\u7981\u6B62\u53D1\u5E03git\u5DE5\u7A0B</span>
    <span class="token directive"><span class="token keyword">location</span> .git</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">access_log</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">log_not_found</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">deny</span> all</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># \u540E\u7AEF\u5206\u6D41\uFF0C\u8D44\u6E90\u7C7B\u9075\u5FAAres-id-{base64_urlsafe}.{pdf}\u683C\u5F0F</span>
    <span class="token directive"><span class="token keyword">location</span> ~* (\\.json|/res-id-[\\-=_0-9a-z]+\\.[0-9a-z]+)$</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://winx_admin</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_http_version</span>  1.1</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_cache_bypass</span>  <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>
    
        <span class="token directive"><span class="token keyword">proxy_set_header</span>  Connection   <span class="token string">&quot;&quot;</span></span><span class="token punctuation">;</span>            <span class="token comment"># \u957F\u8FDE\u63A5</span>
        <span class="token comment">#proxy_set_header Connection   &quot;upgrade&quot;;     # ws</span>
        <span class="token comment">#proxy_set_header Upgrade      $http_upgrade; # ws</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span>  Host         <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span>  X-Real-IP    <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_redirect</span>    http://      <span class="token variable">$scheme</span>://</span><span class="token punctuation">;</span>    <span class="token comment"># https</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># \u524D\u7AEF\u5206\u6D41</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token comment">#add_header &#39;Access-Control-Allow-Origin&#39; &#39;*&#39;; #\u5141\u8BB8\u8DE8\u57DF</span>
        <span class="token directive"><span class="token keyword">root</span> /data/static/winx-admin-spa/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$request_filename</span> ~* \\.(html|htm)$)</span><span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">add_header</span> Cache-Control no-cache,no-store,max-age=0,must-revalidate</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-5-\u538B\u529B\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_9-5-\u538B\u529B\u6D4B\u8BD5" aria-hidden="true">#</a> 9.5.\u538B\u529B\u6D4B\u8BD5</h2><p>\u538B\u529B\u6D4B\u8BD5\uFF0C\u5FC5\u987B<code>ulimit -n</code>\u572810k\u4EE5\u4E0A\uFF0C\u540C\u4E00\u5185\u7F51\u4EE5\u5FFD\u7565\u5E26\u5BBD\u9650\u5236\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6253\u5305\u548C\u542F\u52A8</span>
mvn -U clean package
wings-starter.sh start
<span class="token comment"># Ctrl-C\u505C\u6B62\u65E5\u5FD7\u8F93\u51FA</span>
wings-starter.sh stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528jmeter \u6A21\u62DF10K*50\u8BF7\u6C42</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">ulimit</span> -n <span class="token number">50000</span>

<span class="token assign-left variable">JVM_ARGS</span><span class="token operator">=</span><span class="token string">&quot;-Xmx4G -XX:+UseG1GC -XX:MaxGCPauseMillis=100 -XX:G1ReservePercent=20&quot;</span>

<span class="token function">rm</span> -rf winx-devops/target/load-test/ <span class="token operator">&amp;&amp;</span><span class="token punctuation">\\</span>
<span class="token function">mkdir</span> -p winx-devops/target/load-test/report

jmeter -n <span class="token punctuation">\\</span>
-t winx-devops/src/test/jmeter/load-test.jmx <span class="token punctuation">\\</span>
-l winx-devops/target/load-test/load-test.jtl <span class="token punctuation">\\</span>
-j winx-devops/target/load-test/load-test.log <span class="token punctuation">\\</span>
-e -o winx-devops/target/load-test/report
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),l=[t];function c(p,o){return s(),a("div",null,l)}const v=n(i,[["render",c],["__file","index.html.vue"]]);export{v as default};
