import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as c,c as p,b as n,e as s,d as e,w as i,f as t}from"./app-cb212eee.js";const d={},r=t(`<h1 id="_9-practice-and-sample" tabindex="-1"><a class="header-anchor" href="#_9-practice-and-sample" aria-hidden="true">#</a> 9.Practice and Sample</h1><p>Execute <code>wings-init-project.sh</code> to generate a template project.</p><h2 id="_9-1-pre-requisite" tabindex="-1"><a class="header-anchor" href="#_9-1-pre-requisite" aria-hidden="true">#</a> 9.1.Pre-Requisite</h2><p>Basic knowledge and hands-on ability,</p><ul><li>Understand <code>maven</code>, what is missing, what to learn.</li><li>Understand <code>spring*</code>, <code>see official documentation</code> x 3!</li><li>Understand <code>mysql*</code> mysql database</li></ul><p>Directory conventions</p><ul><li><code>WINGS_DIR</code> - the project root of wings_boot</li><li><code>WINGS_BIN</code> - <code>WINGS_DIR</code>/observe/scripts</li><li><code>PROJECT_DIR</code> - the directory of the sample project, e.g. <code>good-demo</code></li><li><code>PROJECT_PCD</code> - CodeName of the sample project, e.g. <code>good</code></li></ul><h2 id="_9-2-diy-environment" tabindex="-1"><a class="header-anchor" href="#_9-2-diy-environment" aria-hidden="true">#</a> 9.2.DIY Environment</h2><p>Sample scripts for new project and command to package,</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sdk use <span class="token function">java</span> <span class="token number">17.0</span>.6-tem <span class="token comment"># switch JDK to 17</span>
mvn <span class="token parameter variable">-v</span> <span class="token comment"># show version of maven and java</span>
<span class="token comment">#&gt; Apache Maven 3.8.7 (b89d5959fcde851dcb1c8946a785a163f14e1e29)</span>
<span class="token comment">#&gt; Java version: 17.0.6, vendor: Eclipse Adoptium</span>

<span class="token assign-left variable">WINGS_DIR</span><span class="token operator">=~</span>/Workspace/github.com/pro.fessional.wings
<span class="token assign-left variable">WINGS_BIN</span><span class="token operator">=</span><span class="token variable">$WINGS_BOOT</span>/observe/scripts
<span class="token assign-left variable">PROJECT_DIR</span><span class="token operator">=~</span>/Workspace/good-demo
<span class="token assign-left variable">PROJECT_PCD</span><span class="token operator">=</span>good

<span class="token comment"># create new project by template</span>
<span class="token variable">$WINGS_BIN</span>/wings-init-project.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Database, default H2, you can build Mysql Docker, the sample script as follows,</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># set env</span>
<span class="token assign-left variable">PASS</span><span class="token operator">=</span>S4f3_Password@MoilionCircle

<span class="token comment"># create a mysql docker</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> good-mysql-8.0 <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_DATABASE</span><span class="token operator">=</span>wings_example <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token variable">\${PASS}</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\\</span>
mysql:8.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-3-app-deployment" tabindex="-1"><a class="header-anchor" href="#_9-3-app-deployment" aria-hidden="true">#</a> 9.3.App Deployment</h2><p>Softlink(<code>ln -s</code>) wings-starter.sh to some execution location, using <code>good-devops</code> as an example.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">$PROJECT_DIR</span>
<span class="token comment"># Create a boot script, one boot.jar corresponds to one pair of \`.sh\` and \`.env\`</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> <span class="token variable">$WINGS_BIN</span>/wings-starter.sh <span class="token variable">\${PROJECT_PCD}</span>-devops-starter.sh
<span class="token comment"># Copy the content of wings-starter.env and </span>
<span class="token comment"># save it with the same name as the boot script (different extname)</span>
<span class="token function">cp</span> <span class="token variable">$WINGS_BIN</span>/wings-starter.env <span class="token variable">\${PROJECT_PCD}</span>-devops-starter.env
<span class="token comment"># good is the default codename, if it has been changed, it must be modified,</span>
<span class="token comment"># otherwise the jar cannot be found</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;&#39;</span> <span class="token string">&quot;s:../../:./:&quot;</span> <span class="token variable">\${PROJECT_PCD}</span>-devops-starter.env
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;&#39;</span> <span class="token string">&quot;s:winx-:./<span class="token variable">\${PROJECT_PCD}</span>-:g&quot;</span> <span class="token variable">\${PROJECT_PCD}</span>-devops-starter.env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In env, port,jar,log is easy to understand and can be configured according to project needs. BOOT_CNF is used to replace the default config at runtime, the structure is as follows.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── application.properties // application level config
├── wings-conf // auto config, override on demand
│     └── spring-datasource.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-4-reverse-proxy" tabindex="-1"><a class="header-anchor" href="#_9-4-reverse-proxy" aria-hidden="true">#</a> 9.4.Reverse Proxy</h2><p>The general config, including forced https, .git protection, and frontend and backend separation.</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> good_admin</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">ip_hash</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> good_appser_01:8090</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> good_appser_02:8090</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">keepalive</span> <span class="token number">300</span></span><span class="token punctuation">;</span> <span class="token comment"># long conn</span>
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
    
    <span class="token comment"># Defensive settings to protect .git</span>
    <span class="token directive"><span class="token keyword">location</span> .git</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">access_log</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">log_not_found</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">deny</span> all</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># backend, resource url in res-id-{base64_urlsafe}.{pdf} format</span>
    <span class="token directive"><span class="token keyword">location</span> ~* (\\.json|/res-id-[\\-=_0-9a-z]+\\.[0-9a-z]+)$</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://good_admin</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_http_version</span>  1.1</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_cache_bypass</span>  <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>
    
        <span class="token directive"><span class="token keyword">proxy_set_header</span>  Connection   <span class="token string">&quot;&quot;</span></span><span class="token punctuation">;</span>            <span class="token comment"># long conn</span>
        <span class="token comment">#proxy_set_header Connection   &quot;upgrade&quot;;     # ws</span>
        <span class="token comment">#proxy_set_header Upgrade      $http_upgrade; # ws</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span>  Host         <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span>  X-Real-IP    <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_redirect</span>    http://      <span class="token variable">$scheme</span>://</span><span class="token punctuation">;</span>    <span class="token comment"># https</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># frontend</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token comment">#add_header &#39;Access-Control-Allow-Origin&#39; &#39;*&#39;; #Allow CORS</span>
        <span class="token directive"><span class="token keyword">root</span> /data/static/good-admin-spa/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$request_filename</span> ~* \\.(html|htm)$)</span><span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">add_header</span> Cache-Control no-cache,no-store,max-age=0,must-revalidate</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-5-stress-testing" tabindex="-1"><a class="header-anchor" href="#_9-5-stress-testing" aria-hidden="true">#</a> 9.5.Stress Testing</h2><p>Stress test, must be <code>ulimit -n</code> above 10k, same intranet to ignore bandwidth limit.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">$PROJECT_DIR</span>
<span class="token comment"># package and start</span>
mvn <span class="token parameter variable">-U</span> clean package
./<span class="token variable">\${PROJECT_PCD}</span>-devops-starter.sh start
<span class="token comment"># Ctrl-C to stop log output</span>
./<span class="token variable">\${PROJECT_PCD}</span>-devops-starter.sh stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Using jmeter to simulate 10K*50 requests</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-n</span> <span class="token number">45535</span>
<span class="token assign-left variable">JVM_ARGS</span><span class="token operator">=</span><span class="token string">&quot;-Xmx8G -XX:+UseG1GC -XX:MaxGCPauseMillis=100 -XX:G1ReservePercent=20&quot;</span>

<span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">\${PROJECT_PCD}</span>-devops/target/load-test/ <span class="token operator">&amp;&amp;</span><span class="token punctuation">\\</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">\${PROJECT_PCD}</span>-devops/target/load-test/report

jmeter <span class="token parameter variable">-n</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-t</span> <span class="token variable">\${PROJECT_PCD}</span>-devops/src/test/jmeter/load-test.jmx <span class="token punctuation">\\</span>
<span class="token parameter variable">-l</span> <span class="token variable">\${PROJECT_PCD}</span>-devops/target/load-test/load-test.jtl <span class="token punctuation">\\</span>
<span class="token parameter variable">-j</span> <span class="token variable">\${PROJECT_PCD}</span>-devops/target/load-test/load-test.log <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token parameter variable">-o</span> <span class="token variable">\${PROJECT_PCD}</span>-devops/target/load-test/report
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-6-security-option" tabindex="-1"><a class="header-anchor" href="#_9-6-security-option" aria-hidden="true">#</a> 9.6.Security Option</h2><p>The default password in wings project is <code>\${random.uuid}</code> or environment variable. In actual production, some need to set to fixed password. Password strength, must be more than 32-bit random characters, alphanumeric case mix is best.</p>`,27),v=n("li",null,[n("code",null,"DING_TALK_TOKEN"),s(" - System variable, boot-admin login password")],-1),u=n("li",null,[n("code",null,"wings.silencer.encrypt.leap-code"),s(" - Pseudo-random number, can keep it")],-1),m=n("li",null,[n("code",null,"wings.silencer.encrypt.crc8-long"),s(" - Add crc checksum to number, can keep it")],-1),k=n("code",null,"wings.silencer.encrypt.aes-key.*",-1),b=n("code",null,"wings.slardar.hazelcast.cluster-name",-1),h=n("p",null,[s("In example project, use "),n("code",null,"DING_TALK_TOKEN"),s(" as default password")],-1),g=n("code",null,"spring.boot.admin.client.username",-1),_=n("code",null,"spring.boot.admin.client.password",-1),f=n("code",null,"spring.boot.admin.client.instance.metadata.user.name",-1),w=n("code",null,"spring.boot.admin.client.instance.metadata.user.password",-1),y=t(`<p>The default values for all of the above config items should be based on the corresponding manual or source code to avoid the security implications of outdated documentation.</p><h2 id="_9-7-start-up-args" tabindex="-1"><a class="header-anchor" href="#_9-7-start-up-args" aria-hidden="true">#</a> 9.7.Start-up Args</h2><p>In springboot3(after java17), <code>add-opens</code> must be set correctly to avoid <code>illegal-access</code>. Wings set correctly in pom.xml and starter.sh, with the following files and variable names.</p><ul><li><code>/pom.xml</code> - <code>wings.java-opens</code> with reason</li><li><code>/observe/scripts/wings-starter.sh</code> - <code>JDK9_ARG</code></li><li><code>&lt;arg&gt;</code> - must be specified with <code>=</code>, space is supported in shell</li></ul><p>The details of <code>add-opens</code> are as follows, handle line breaks when using</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--add-modules=java.se
--add-exports=java.base/jdk.internal.ref=ALL-UNNAMED
--add-opens=java.base/java.io=ALL-UNNAMED
--add-opens=java.base/java.lang.invoke=ALL-UNNAMED
--add-opens=java.base/java.lang=ALL-UNNAMED
--add-opens=java.base/java.net=ALL-UNNAMED
--add-opens=java.base/java.nio=ALL-UNNAMED
--add-opens=java.base/java.util=ALL-UNNAMED
--add-opens=java.base/sun.nio.ch=ALL-UNNAMED
--add-opens=java.base/sun.security.x509=ALL-UNNAMED
--add-opens=java.management/sun.management=ALL-UNNAMED
--add-opens=jdk.management/com.sun.management.internal=ALL-UNNAMED
--add-opens=jdk.unsupported/sun.misc=ALL-UNNAMED
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function x(C,D){const a=l("Badge");return c(),p("div",null,[r,n("ul",null,[v,u,m,n("li",null,[k,s(" - "),e(a,{type:"tip",vertical:"top"},{default:i(()=>[s("SHOULD")]),_:1}),s(" change")]),n("li",null,[b,s(" - hazelcast clust name, "),e(a,{type:"info",vertical:"top"},{default:i(()=>[s("MUST")]),_:1}),s(" change")])]),h,n("ul",null,[n("li",null,[g,s(" - boot.admin server-side username, "),e(a,{type:"tip",vertical:"top"},{default:i(()=>[s("SHOULD")]),_:1}),s(" change")]),n("li",null,[_,s(" - boot.admin server-side password, "),e(a,{type:"info",vertical:"top"},{default:i(()=>[s("MUST")]),_:1}),s(" change")]),n("li",null,[f,s(" - client-side username, "),e(a,{type:"tip",vertical:"top"},{default:i(()=>[s("SHOULD")]),_:1}),s(" change")]),n("li",null,[w,s(" - client-side password, "),e(a,{type:"info",vertical:"top"},{default:i(()=>[s("MUST")]),_:1}),s(" change")])]),y])}const j=o(d,[["render",x],["__file","index.html.vue"]]);export{j as default};
