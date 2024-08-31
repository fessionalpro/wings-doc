import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as h,c as p,b as i,d as s,f as n,w as l,e,o as k}from"./app-DjJWubZm.js";const d={},r=e(`<h1 id="_9-实战演示" tabindex="-1"><a class="header-anchor" href="#_9-实战演示"><span>9.实战演示</span></a></h1><p>运行<code>wings-init-project.sh</code>生成一个样板工程。</p><h2 id="_9-1-前置条件" tabindex="-1"><a class="header-anchor" href="#_9-1-前置条件"><span>9.1.前置条件</span></a></h2><p>基本知识及动手能力</p><ul><li>了解 <code>maven</code>，缺什么，补什么。</li><li>了解 <code>spring*</code>，<code>看官方文档</code> x 3！</li><li>了解 <code>mysql*</code>数据库，mysql</li></ul><p>目录约定</p><ul><li><code>WINGS_DIR</code> - wings_boot的工程根目录</li><li><code>WINGS_BIN</code> - <code>WINGS_DIR</code>/observe/scripts</li><li><code>PROJECT_DIR</code> - 示例工程的目录，例如<code>good-demo</code></li><li><code>PROJECT_PCD</code> - 示例工程的CodeName，例如<code>good</code></li></ul><h2 id="_9-2-自建环境" tabindex="-1"><a class="header-anchor" href="#_9-2-自建环境"><span>9.2.自建环境</span></a></h2><p>新建工程及打包的示例脚本</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># asdf shell java temurin-17.0.9+9</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mvn</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -v</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> # 显示maven和java版本</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#&gt; Apache Maven 3.8.7 (b89d5959fcde851dcb1c8946a785a163f14e1e29)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#&gt; Java version: 17.0.9, vendor: Eclipse Adoptium</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">WINGS_DIR</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">~/Workspace/github.com/professional-wings</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">WINGS_BIN</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$WINGS_BOOT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/observe/scripts</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PROJECT_DIR</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">~/Workspace/good-demo</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PROJECT_PCD</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">good</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 使用模板初始化工程</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$WINGS_BIN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/wings-init-project.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据库，默认采用H2演示，可自建Docker演示Mysql，示例脚本如下。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 设置变量</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PASS</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">S4f3_Password@MoilionCircle</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 创建一个mysql数据库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--name </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">good-mysql-8.0</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-e </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">MYSQL_DATABASE=wings_example</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-e </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">MYSQL_ROOT_PASSWORD=</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PASS</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-p </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">3306:3306</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">mysql:8.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-3-程序部署" tabindex="-1"><a class="header-anchor" href="#_9-3-程序部署"><span>9.3.程序部署</span></a></h2><p>软连接(<code>ln -s</code>)wings-starter.sh到某个执行位置，以good-devops为例。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $PROJECT_DIR</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 建立启动脚本，一个boot.jar对应一组.sh和.env</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ln</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $WINGS_BIN</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/wings-starter.sh</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> \${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PROJECT_PCD</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">-devops-starter.sh</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 复制 wings-starter.env内容，与启动脚本同名(扩展名不同)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cp</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $WINGS_BIN</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/wings-starter.env</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> \${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PROJECT_PCD</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">-devops-starter.env</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># good为默认项目代号，若已调整则要修改，否则找不到jar</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sed</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;s:../../:./:&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> \${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PROJECT_PCD</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">-devops-starter.env</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sed</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;s:winx-:./</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PROJECT_PCD</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">-:g&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> \${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PROJECT_PCD</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">-devops-starter.env</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在env中，port,jar,log容易理解，按项目需要配置即可。 BOOT_CNF是用来替换默认配置的运行时配置，结构如下。</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>├── application.properties // 程序级设置</span></span>
<span class="line"><span>├── wings-conf // 自动配置，按需覆盖内部文件</span></span>
<span class="line"><span>│     └── spring-datasource.properties</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-4-反向代理" tabindex="-1"><a class="header-anchor" href="#_9-4-反向代理"><span>9.4.反向代理</span></a></h2><p>通常的配置参考，包括强制https，保护误操作.git，前后端分离。</p><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">upstream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> good_admin {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    ip_hash</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> good_appser_01:8090;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> good_appser_02:8090;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    keepalive </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">300</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 长连接</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    listen </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">      80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    listen </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">      443</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ssl;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    server_name </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> admin.moilioncircle.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    access_log </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/data/logs/nginx/admin.moilioncircle.com-access.log;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    error_log </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /data/logs/nginx/admin.moilioncircle.com-error.log;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    ssl_certificate </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    /data/nginx/cert/moilioncircle.com/fullchain.pem;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    ssl_certificate_key </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/data/nginx/cert/moilioncircle.com/privkey.pem;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    #if ($scheme = http) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    #    return 301 https://$host$request_uri;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    #}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    # 防御性设置，禁止发布git工程</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> .git {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        access_log </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">off</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        log_not_found </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">off</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        deny </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">all</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    # 后端分流，资源类遵循res-id-{base64_urlsafe}.{pdf}格式</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ~* </span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">(\\.json|/res-id-[\\-=_0-9a-z]+\\.[0-9a-z]+)$ </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        proxy_pass </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">http://good_admin;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        proxy_http_version </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1.1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        proxy_cache_bypass </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">http_upgrade</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Connection   </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;            </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 长连接</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        #proxy_set_header Connection   &quot;upgrade&quot;;     # ws</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        #proxy_set_header Upgrade      $http_upgrade; # ws</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Host         $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">host</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> X-Real-IP    $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">remote_addr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        proxy_redirect </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   http://      $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">scheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">://;    </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># https</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    # 前端分流</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> / {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        #add_header &#39;Access-Control-Allow-Origin&#39; &#39;*&#39;; #允许跨域</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        root </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/data/static/good-admin-spa/;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ($</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">request_filename</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ~* \\.(html|htm)$){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            add_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Cache-Control no-cache,no-store,max-age=0,must-revalidate;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-5-压力测试" tabindex="-1"><a class="header-anchor" href="#_9-5-压力测试"><span>9.5.压力测试</span></a></h2><p>压力测试，必须<code>ulimit -n</code>在10k以上，同一内网以忽略带宽限制。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $PROJECT_DIR</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 打包和启动</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mvn</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -U</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clean</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> package</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{PROJECT_PCD}</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-devops-starter.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># Ctrl-C停止日志输出</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{PROJECT_PCD}</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-devops-starter.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stop</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用jmeter 模拟10K*50请求</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">ulimit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 45535</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">JVM_ARGS</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;-Xmx8G -XX:+UseG1GC -XX:MaxGCPauseMillis=100 -XX:G1ReservePercent=20&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -rf</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> \${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PROJECT_PCD</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">-devops/target/load-test/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> \${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PROJECT_PCD</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">-devops/target/load-test/report</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">jmeter</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-t </span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PROJECT_PCD</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">-devops/src/test/jmeter/load-test.jmx</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-l </span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PROJECT_PCD</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">-devops/target/load-test/load-test.jtl</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-j </span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PROJECT_PCD</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">-devops/target/load-test/load-test.log</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-e </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-o</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> \${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PROJECT_PCD</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">-devops/target/load-test/report</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-6-安全选项" tabindex="-1"><a class="header-anchor" href="#_9-6-安全选项"><span>9.6.安全选项</span></a></h2><p>wings工程中的默认密码均为<code>\${random.uuid}</code>或环境变量。实际生产中，有些需要设置为固定密码。 密码强度，必须在32位以上的随机字符，字母数字大小写混合最好。</p>`,27),c=i("li",null,[i("code",null,"DING_TALK_TOKEN"),s(" - 系统变量，boot-admin登录密码")],-1),o=i("li",null,[i("code",null,"wings.silencer.encrypt.leap-code"),s(" - 伪随机数，可不更换")],-1),g=i("li",null,[i("code",null,"wings.silencer.encrypt.crc8-long"),s(" - 数字增加crc校验，可不更换")],-1),A=i("code",null,"wings.silencer.encrypt.aes-key.*",-1),y=i("code",null,"wings.slardar.hazelcast.cluster-name",-1),v=i("p",null,[s("example中的配置，默认以"),i("code",null,"DING_TALK_TOKEN"),s("为密码")],-1),m=i("code",null,"spring.boot.admin.client.username",-1),B=i("code",null,"spring.boot.admin.client.password",-1),u=i("code",null,"spring.boot.admin.client.instance.metadata.user.name",-1),b=i("code",null,"spring.boot.admin.client.instance.metadata.user.password",-1),F=e(`<p>上述全部配置项的默认值，以对应的配置项的手册或源代码为准，避免文档过期影响安全性。</p><h2 id="_9-7-启动参数" tabindex="-1"><a class="header-anchor" href="#_9-7-启动参数"><span>9.7.启动参数</span></a></h2><p>在springboot3，即java17后，必须正确设置<code>add-opens</code>，以避免<code>illegal-access</code>。 Wings在pom.xml和starter.sh中已进行了正确的设置，其文件及变量名字如下，</p><ul><li><code>/pom.xml</code> - <code>javaopenArgLine</code> 有原因说明</li><li><code>/observe/scripts/wings-starter.sh</code> - <code>JDK9_ARG</code></li><li><code>&lt;arg&gt;</code> - 参数必须使用<code>=</code>指定。在shell解析中支持空格分隔</li></ul><p><code>add-opens</code>的具体内容如下，使用时按需处理换行</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>--add-modules=java.se</span></span>
<span class="line"><span>--add-exports=java.base/jdk.internal.ref=ALL-UNNAMED</span></span>
<span class="line"><span>--add-opens=java.base/java.io=ALL-UNNAMED</span></span>
<span class="line"><span>--add-opens=java.base/java.lang.invoke=ALL-UNNAMED</span></span>
<span class="line"><span>--add-opens=java.base/java.lang=ALL-UNNAMED</span></span>
<span class="line"><span>--add-opens=java.base/java.net=ALL-UNNAMED</span></span>
<span class="line"><span>--add-opens=java.base/java.nio=ALL-UNNAMED</span></span>
<span class="line"><span>--add-opens=java.base/java.util=ALL-UNNAMED</span></span>
<span class="line"><span>--add-opens=java.base/sun.nio.ch=ALL-UNNAMED</span></span>
<span class="line"><span>--add-opens=java.base/sun.security.x509=ALL-UNNAMED</span></span>
<span class="line"><span>--add-opens=java.management/sun.management=ALL-UNNAMED</span></span>
<span class="line"><span>--add-opens=jdk.management/com.sun.management.internal=ALL-UNNAMED</span></span>
<span class="line"><span>--add-opens=jdk.unsupported/sun.misc=ALL-UNNAMED</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function C(_,E){const a=h("Badge");return k(),p("div",null,[r,i("ul",null,[c,o,g,i("li",null,[A,s(" - "),n(a,{type:"tip",vertical:"top"},{default:l(()=>[s("建议")]),_:1}),s("更换")]),i("li",null,[y,s(" - hazelcast集群名，"),n(a,{type:"info",vertical:"top"},{default:l(()=>[s("必须")]),_:1}),s("更换")])]),v,i("ul",null,[i("li",null,[m,s(" - boot.admin server端用户，"),n(a,{type:"tip",vertical:"top"},{default:l(()=>[s("建议")]),_:1}),s("更换")]),i("li",null,[B,s(" - boot.admin server端密码，"),n(a,{type:"info",vertical:"top"},{default:l(()=>[s("必须")]),_:1}),s("更换")]),i("li",null,[u,s(" - client端用户，"),n(a,{type:"tip",vertical:"top"},{default:l(()=>[s("建议")]),_:1}),s("更换")]),i("li",null,[b,s(" - client端密码，"),n(a,{type:"info",vertical:"top"},{default:l(()=>[s("必须")]),_:1}),s("更换")])]),F])}const x=t(d,[["render",C],["__file","index.html.vue"]]),N=JSON.parse('{"path":"/zh/9-example/","title":"9.实战演示","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"circle-play","category":["实战"],"description":"9.实战演示 运行wings-init-project.sh生成一个样板工程。 9.1.前置条件 基本知识及动手能力 了解 maven，缺什么，补什么。 了解 spring*，看官方文档 x 3！ 了解 mysql*数据库，mysql 目录约定 WINGS_DIR - wings_boot的工程根目录 WINGS_BIN - WINGS_DIR/obs...","GIT_REPO_HEAD":"2024-08-31 14ebccb0d5142c697c8e1c26714477f1e205282c","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/9-example/"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/9-example/"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"9.实战演示"}],["meta",{"property":"og:description","content":"9.实战演示 运行wings-init-project.sh生成一个样板工程。 9.1.前置条件 基本知识及动手能力 了解 maven，缺什么，补什么。 了解 spring*，看官方文档 x 3！ 了解 mysql*数据库，mysql 目录约定 WINGS_DIR - wings_boot的工程根目录 WINGS_BIN - WINGS_DIR/obs..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9.实战演示\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"9.1.前置条件","slug":"_9-1-前置条件","link":"#_9-1-前置条件","children":[]},{"level":2,"title":"9.2.自建环境","slug":"_9-2-自建环境","link":"#_9-2-自建环境","children":[]},{"level":2,"title":"9.3.程序部署","slug":"_9-3-程序部署","link":"#_9-3-程序部署","children":[]},{"level":2,"title":"9.4.反向代理","slug":"_9-4-反向代理","link":"#_9-4-反向代理","children":[]},{"level":2,"title":"9.5.压力测试","slug":"_9-5-压力测试","link":"#_9-5-压力测试","children":[]},{"level":2,"title":"9.6.安全选项","slug":"_9-6-安全选项","link":"#_9-6-安全选项","children":[]},{"level":2,"title":"9.7.启动参数","slug":"_9-7-启动参数","link":"#_9-7-启动参数","children":[]}],"git":{"createdTime":1655901635000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":6}]},"readingTime":{"minutes":3.55,"words":1064},"filePathRelative":"zh/9-example/README.md","localizedDate":"2022年6月22日","autoDesc":true}');export{x as comp,N as data};