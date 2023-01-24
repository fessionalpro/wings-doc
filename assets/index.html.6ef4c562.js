import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.d80c21d5.js";const i={},t=e(`<h1 id="_9-实战演示" tabindex="-1"><a class="header-anchor" href="#_9-实战演示" aria-hidden="true">#</a> 9.实战演示</h1><p>运行<code>wings-init-project.sh</code>生成一个样板工程。</p><h2 id="_9-1-前置条件" tabindex="-1"><a class="header-anchor" href="#_9-1-前置条件" aria-hidden="true">#</a> 9.1.前置条件</h2><ul><li>了解 <code>maven</code>，缺什么，补什么。</li><li>了解 <code>spring*</code>，<code>看官方文档，不要百度</code> x 3！</li><li>了解 <code>mysql*</code>数据库，mysql</li></ul><h2 id="_9-2-自建环境" tabindex="-1"><a class="header-anchor" href="#_9-2-自建环境" aria-hidden="true">#</a> 9.2.自建环境</h2><p>默认采用H2内存数据库演示，可自建Docker演示Mysql。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置变量</span>
<span class="token assign-left variable">PASS</span><span class="token operator">=</span>S4f3_Password@MoilionCircle

<span class="token comment"># 创建一个mysql数据库</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> winx-mysql-8.0 <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_DATABASE</span><span class="token operator">=</span>wings_example <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token variable">\${PASS}</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\\</span>
mysql:8.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-3-程序部署" tabindex="-1"><a class="header-anchor" href="#_9-3-程序部署" aria-hidden="true">#</a> 9.3.程序部署</h2><p>复制<code>ln -s</code> wings-starter.sh和<code>*.env</code>文件，以winx-admin为例。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 建立启动脚本，一个boot一个</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> wings-starter.sh winx-admin.sh
<span class="token comment"># 复制 wings-starter.env内容，与启动脚本同名(扩展名不同)</span>
<span class="token function">vi</span> winx-admin.env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在env中，port,jar,log容易理解，按项目需要配置即可。 BOOT_CNF是用来替换默认配置的运行时配置，结构如下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── application.properties // 程序级设置
├── wings-conf // 自动配置，按需覆盖内部文件
│     └── spring-datasource.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-4-反向代理" tabindex="-1"><a class="header-anchor" href="#_9-4-反向代理" aria-hidden="true">#</a> 9.4.反向代理</h2><p>通常的配置参考，包括强制https，保护误操作.git，前后端分离。</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> winx_admin</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">ip_hash</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> winx_appser_01:8090</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> winx_appser_02:8090</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">keepalive</span> <span class="token number">300</span></span><span class="token punctuation">;</span> <span class="token comment"># 长连接</span>
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
    
    <span class="token comment"># 防御性设置，禁止发布git工程</span>
    <span class="token directive"><span class="token keyword">location</span> .git</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">access_log</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">log_not_found</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">deny</span> all</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 后端分流，资源类遵循res-id-{base64_urlsafe}.{pdf}格式</span>
    <span class="token directive"><span class="token keyword">location</span> ~* (\\.json|/res-id-[\\-=_0-9a-z]+\\.[0-9a-z]+)$</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://winx_admin</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_http_version</span>  1.1</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_cache_bypass</span>  <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>
    
        <span class="token directive"><span class="token keyword">proxy_set_header</span>  Connection   <span class="token string">&quot;&quot;</span></span><span class="token punctuation">;</span>            <span class="token comment"># 长连接</span>
        <span class="token comment">#proxy_set_header Connection   &quot;upgrade&quot;;     # ws</span>
        <span class="token comment">#proxy_set_header Upgrade      $http_upgrade; # ws</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span>  Host         <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span>  X-Real-IP    <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_redirect</span>    http://      <span class="token variable">$scheme</span>://</span><span class="token punctuation">;</span>    <span class="token comment"># https</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 前端分流</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token comment">#add_header &#39;Access-Control-Allow-Origin&#39; &#39;*&#39;; #允许跨域</span>
        <span class="token directive"><span class="token keyword">root</span> /data/static/winx-admin-spa/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$request_filename</span> ~* \\.(html|htm)$)</span><span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">add_header</span> Cache-Control no-cache,no-store,max-age=0,must-revalidate</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-5-压力测试" tabindex="-1"><a class="header-anchor" href="#_9-5-压力测试" aria-hidden="true">#</a> 9.5.压力测试</h2><p>压力测试，必须<code>ulimit -n</code>在10k以上，同一内网以忽略带宽限制。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打包和启动</span>
mvn <span class="token parameter variable">-U</span> clean package
wings-starter.sh start
<span class="token comment"># Ctrl-C停止日志输出</span>
wings-starter.sh stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用jmeter 模拟10K*50请求</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-n</span> <span class="token number">50000</span>

<span class="token assign-left variable">JVM_ARGS</span><span class="token operator">=</span><span class="token string">&quot;-Xmx4G -XX:+UseG1GC -XX:MaxGCPauseMillis=100 -XX:G1ReservePercent=20&quot;</span>

<span class="token function">rm</span> <span class="token parameter variable">-rf</span> winx-devops/target/load-test/ <span class="token operator">&amp;&amp;</span><span class="token punctuation">\\</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> winx-devops/target/load-test/report

jmeter <span class="token parameter variable">-n</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-t</span> winx-devops/src/test/jmeter/load-test.jmx <span class="token punctuation">\\</span>
<span class="token parameter variable">-l</span> winx-devops/target/load-test/load-test.jtl <span class="token punctuation">\\</span>
<span class="token parameter variable">-j</span> winx-devops/target/load-test/load-test.log <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token parameter variable">-o</span> winx-devops/target/load-test/report
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),l=[t];function p(c,o){return s(),a("div",null,l)}const v=n(i,[["render",p],["__file","index.html.vue"]]);export{v as default};
