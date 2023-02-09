import{_ as t,W as c,X as o,Z as n,a0 as s,$ as e,a3 as i,a2 as l,F as p}from"./framework-f37db9b8.js";const d={},r=l(`<h1 id="_9-实战演示" tabindex="-1"><a class="header-anchor" href="#_9-实战演示" aria-hidden="true">#</a> 9.实战演示</h1><p>运行<code>wings-init-project.sh</code>生成一个样板工程。</p><h2 id="_9-1-前置条件" tabindex="-1"><a class="header-anchor" href="#_9-1-前置条件" aria-hidden="true">#</a> 9.1.前置条件</h2><p>基本知识及动手能力</p><ul><li>了解 <code>maven</code>，缺什么，补什么。</li><li>了解 <code>spring*</code>，<code>看官方文档</code> x 3！</li><li>了解 <code>mysql*</code>数据库，mysql</li></ul><p>目录约定</p><ul><li><code>WINGS_DIR</code> - wings_boot的工程根目录</li><li><code>WINGS_BIN</code> - <code>WINGS_DIR</code>/observe/scripts</li><li><code>PROJECT_DIR</code> - 示例工程的目录，例如<code>good-demo</code></li><li><code>PROJECT_PCD</code> - 示例工程的CodeName，例如<code>good</code></li></ul><h2 id="_9-2-自建环境" tabindex="-1"><a class="header-anchor" href="#_9-2-自建环境" aria-hidden="true">#</a> 9.2.自建环境</h2><p>新建工程及打包的示例脚本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sdk use <span class="token function">java</span> <span class="token number">17.0</span>.6-tem <span class="token comment"># 切换JDK版本</span>
mvn <span class="token parameter variable">-v</span> <span class="token comment"># 显示maven和java版本</span>
<span class="token comment">#&gt; Apache Maven 3.8.7 (b89d5959fcde851dcb1c8946a785a163f14e1e29)</span>
<span class="token comment">#&gt; Java version: 17.0.6, vendor: Eclipse Adoptium</span>

<span class="token assign-left variable">WINGS_DIR</span><span class="token operator">=~</span>/Workspace/github.com/pro.fessional.wings
<span class="token assign-left variable">WINGS_BIN</span><span class="token operator">=</span><span class="token variable">$WINGS_BOOT</span>/observe/scripts
<span class="token assign-left variable">PROJECT_DIR</span><span class="token operator">=~</span>/Workspace/good-demo
<span class="token assign-left variable">PROJECT_PCD</span><span class="token operator">=</span>good

<span class="token comment"># 使用模板初始化工程</span>
<span class="token variable">$WINGS_BIN</span>/wings-init-project.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据库，默认采用H2演示，可自建Docker演示Mysql，示例脚本如下。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置变量</span>
<span class="token assign-left variable">PASS</span><span class="token operator">=</span>S4f3_Password@MoilionCircle

<span class="token comment"># 创建一个mysql数据库</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> good-mysql-8.0 <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_DATABASE</span><span class="token operator">=</span>wings_example <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token variable">\${PASS}</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\\</span>
mysql:8.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-3-程序部署" tabindex="-1"><a class="header-anchor" href="#_9-3-程序部署" aria-hidden="true">#</a> 9.3.程序部署</h2><p>软连接(<code>ln -s</code>)wings-starter.sh到某个执行位置，以good-devops为例。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">$PROJECT_DIR</span>
<span class="token comment"># 建立启动脚本，一个boot.jar对应一组.sh和.env</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> <span class="token variable">$WINGS_BIN</span>/wings-starter.sh <span class="token variable">\${PROJECT_PCD}</span>-devops-starter.sh
<span class="token comment"># 复制 wings-starter.env内容，与启动脚本同名(扩展名不同)</span>
<span class="token function">cp</span> <span class="token variable">$WINGS_BIN</span>/wings-starter.env <span class="token variable">\${PROJECT_PCD}</span>-devops-starter.env
<span class="token comment"># good为默认项目代号，若已调整则要修改，否则找不到jar</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;&#39;</span> <span class="token string">&quot;s:../../:./:&quot;</span> <span class="token variable">\${PROJECT_PCD}</span>-devops-starter.env
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;&#39;</span> <span class="token string">&quot;s:winx-:./<span class="token variable">\${PROJECT_PCD}</span>-:g&quot;</span> <span class="token variable">\${PROJECT_PCD}</span>-devops-starter.env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在env中，port,jar,log容易理解，按项目需要配置即可。 BOOT_CNF是用来替换默认配置的运行时配置，结构如下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── application.properties // 程序级设置
├── wings-conf // 自动配置，按需覆盖内部文件
│     └── spring-datasource.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-4-反向代理" tabindex="-1"><a class="header-anchor" href="#_9-4-反向代理" aria-hidden="true">#</a> 9.4.反向代理</h2><p>通常的配置参考，包括强制https，保护误操作.git，前后端分离。</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> good_admin</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">ip_hash</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> good_appser_01:8090</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> good_appser_02:8090</span><span class="token punctuation">;</span>
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
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://good_admin</span><span class="token punctuation">;</span>
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
        <span class="token directive"><span class="token keyword">root</span> /data/static/good-admin-spa/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$request_filename</span> ~* \\.(html|htm)$)</span><span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">add_header</span> Cache-Control no-cache,no-store,max-age=0,must-revalidate</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-5-压力测试" tabindex="-1"><a class="header-anchor" href="#_9-5-压力测试" aria-hidden="true">#</a> 9.5.压力测试</h2><p>压力测试，必须<code>ulimit -n</code>在10k以上，同一内网以忽略带宽限制。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">$PROJECT_DIR</span>
<span class="token comment"># 打包和启动</span>
mvn <span class="token parameter variable">-U</span> clean package
./<span class="token variable">\${PROJECT_PCD}</span>-devops-starter.sh start
<span class="token comment"># Ctrl-C停止日志输出</span>
./<span class="token variable">\${PROJECT_PCD}</span>-devops-starter.sh stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用jmeter 模拟10K*50请求</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-n</span> <span class="token number">45535</span>
<span class="token assign-left variable">JVM_ARGS</span><span class="token operator">=</span><span class="token string">&quot;-Xmx8G -XX:+UseG1GC -XX:MaxGCPauseMillis=100 -XX:G1ReservePercent=20&quot;</span>

<span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">\${PROJECT_PCD}</span>-devops/target/load-test/ <span class="token operator">&amp;&amp;</span><span class="token punctuation">\\</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">\${PROJECT_PCD}</span>-devops/target/load-test/report

jmeter <span class="token parameter variable">-n</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-t</span> <span class="token variable">\${PROJECT_PCD}</span>-devops/src/test/jmeter/load-test.jmx <span class="token punctuation">\\</span>
<span class="token parameter variable">-l</span> <span class="token variable">\${PROJECT_PCD}</span>-devops/target/load-test/load-test.jtl <span class="token punctuation">\\</span>
<span class="token parameter variable">-j</span> <span class="token variable">\${PROJECT_PCD}</span>-devops/target/load-test/load-test.log <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token parameter variable">-o</span> <span class="token variable">\${PROJECT_PCD}</span>-devops/target/load-test/report
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-6-安全选项" tabindex="-1"><a class="header-anchor" href="#_9-6-安全选项" aria-hidden="true">#</a> 9.6.安全选项</h2><p>wings工程中的默认密码均为<code>\${random.uuid}</code>或环境变量。实际生产中，有些需要设置为固定密码。 密码强度，必须在32位以上的随机字符，字母数字大小写混合最好。</p>`,27),v=n("li",null,[n("code",null,"DING_TALK_TOKEN"),s(" - 系统变量，boot-admin登录密码")],-1),u=n("li",null,[n("code",null,"wings.silencer.encrypt.leap-code"),s(" - 伪随机数，可不更换")],-1),m=n("li",null,[n("code",null,"wings.silencer.encrypt.crc8-long"),s(" - 数字增加crc校验，可不更换")],-1),k=n("code",null,"wings.silencer.encrypt.aes-key.*",-1),b=n("code",null,"wings.slardar.hazelcast.cluster-name",-1),_=n("p",null,[s("example中的配置，默认以"),n("code",null,"DING_TALK_TOKEN"),s("为密码")],-1),h=n("code",null,"spring.boot.admin.client.username",-1),g=n("code",null,"spring.boot.admin.client.password",-1),f=n("code",null,"spring.boot.admin.client.instance.metadata.user.name",-1),y=n("code",null,"spring.boot.admin.client.instance.metadata.user.password",-1),x=l(`<p>上述全部配置项的默认值，以对应的配置项的手册或源代码为准，避免文档过期影响安全性。</p><h2 id="_9-7-启动参数" tabindex="-1"><a class="header-anchor" href="#_9-7-启动参数" aria-hidden="true">#</a> 9.7.启动参数</h2><p>在springboot3，即java17后，必须正确设置<code>add-opens</code>，以避免<code>illegal-access</code>。 Wings在pom.xml和starter.sh中已进行了正确的设置，其文件及变量名字如下，</p><ul><li><code>/pom.xml</code> - <code>wings.java-opens</code> 有原因说明</li><li><code>/observe/scripts/wings-starter.sh</code> - <code>JDK9_ARG</code></li></ul><p><code>add-opens</code>的具体内容如下，使用时按需处理换行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--add-modules java.se
--add-exports java.base/jdk.internal.ref=ALL-UNNAMED
--add-opens java.base/java.lang=ALL-UNNAMED
--add-opens=java.base/java.lang.invoke=ALL-UNNAMED
--add-opens=java.base/java.util=ALL-UNNAMED
--add-opens java.base/java.io=ALL-UNNAMED
--add-opens java.base/java.nio=ALL-UNNAMED
--add-opens java.base/sun.nio.ch=ALL-UNNAMED
--add-opens java.management/sun.management=ALL-UNNAMED
--add-opens jdk.management/com.sun.management.internal=ALL-UNNAMED
--add-opens=java.base/sun.security.x509=ALL-UNNAMED
--add-opens=jdk.unsupported/sun.misc=ALL-UNNAMED
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function w(C,N){const a=p("Badge");return c(),o("div",null,[r,n("ul",null,[v,u,m,n("li",null,[k,s(" - "),e(a,{type:"tip",vertical:"top"},{default:i(()=>[s("建议")]),_:1}),s("更换")]),n("li",null,[b,s(" - hazelcast集群名，"),e(a,{type:"info",vertical:"top"},{default:i(()=>[s("必须")]),_:1}),s("更换")])]),_,n("ul",null,[n("li",null,[h,s(" - boot.admin server端用户，"),e(a,{type:"tip",vertical:"top"},{default:i(()=>[s("建议")]),_:1}),s("更换")]),n("li",null,[g,s(" - boot.admin server端密码，"),e(a,{type:"info",vertical:"top"},{default:i(()=>[s("必须")]),_:1}),s("更换")]),n("li",null,[f,s(" - client端用户，"),e(a,{type:"tip",vertical:"top"},{default:i(()=>[s("建议")]),_:1}),s("更换")]),n("li",null,[y,s(" - client端密码，"),e(a,{type:"info",vertical:"top"},{default:i(()=>[s("必须")]),_:1}),s("更换")])]),x])}const D=t(d,[["render",w],["__file","index.html.vue"]]);export{D as default};
