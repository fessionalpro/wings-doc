import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,e as l}from"./app-DjJWubZm.js";const e={},n=l(`<h1 id="_9c4-使用docker和启动脚本" tabindex="-1"><a class="header-anchor" href="#_9c4-使用docker和启动脚本"><span>9C4.使用Docker和启动脚本</span></a></h1><p>Wings提供两种方式，用来发布和启动应用，</p><ul><li>script - 基于shell脚本的发布和管理</li><li>docker - 基于docker的发布和管理</li></ul><h2 id="_9c4-1-script方式" tabindex="-1"><a class="header-anchor" href="#_9c4-1-script方式"><span>9C4.1.Script方式</span></a></h2><ul><li>release.sh - 拉取、打包、推送的脚本</li><li>starter.sh - 启动、停止和监控的脚本</li></ul><p>以上脚本，都支持<code>&lt;同名&gt;.env</code>的配置来覆盖默认参数。</p><h3 id="_1a-发布脚本" tabindex="-1"><a class="header-anchor" href="#_1a-发布脚本"><span>1a.发布脚本</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 使用app名字，软连接到脚本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ln</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> wings-release.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> winx-admin.sh</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 建立同名配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> winx-admin.env</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 从git上拉取代码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./winx-admin.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pull</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 使用mvn或web打包</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./winx-admin.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pack</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 推送成果物到应用服务器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./winx-admin.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 查看更多帮助</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./winx-admin.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> help</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1b-启动脚本" tabindex="-1"><a class="header-anchor" href="#_1b-启动脚本"><span>1b.启动脚本</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 使用app名字，软连接到脚本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ln</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> wings-starter.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> winx-admin.sh</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 建立同名配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> winx-admin.env</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 安全启动</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./winx-admin.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 查看状态</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./winx-admin.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 安全停止</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./winx-admin.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stop</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 查看更多帮助</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./winx-admin.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> help</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9c4-2-docker方式" tabindex="-1"><a class="header-anchor" href="#_9c4-2-docker方式"><span>9C4.2.Docker方式</span></a></h2><p>Docker管理的好处是不依赖服务器环境配置，简单和统一。 以下的功能及lib可不需要，在构建前或工程中移除。</p><ul><li><code>spring-boot-devtools-*.jar</code></li><li><code>spring-boot-docker-compose-*.jar</code></li><li><code>spring-boot-admin-*.jar</code></li><li>spring <code>actuator-*</code></li></ul><h3 id="_2a-分层构建" tabindex="-1"><a class="header-anchor" href="#_2a-分层构建"><span>2a.分层构建</span></a></h3><p>SpringBoot工程在repackage后，通常会有100+M之多，而其中的lib占比95+%， 因此，实践中docker被分成2个layer，一个是<code>dep</code>，一个是<code>app</code>。</p><ul><li>docker-dep - 排除<code>*-SNAPSHOT.jar</code>后的工程依赖<code>*.jar</code></li><li>docker-app - <code>*-SNAPSHOT.jar</code>和工程文件（<code>classes/</code>,<code>resources/</code>）</li></ul><p>相当于<code>java -Djarmode=layertools -jar target/*.jar extract</code>后，</p><ul><li>dependencies - docker-dep</li><li>spring-boot-loader - 可忽略，main-class比JarLauncher启动快</li><li>snapshot-dependencies - docker-app</li><li>application - docker-app</li></ul><p>这样，<code>docker-dep</code>编译一次即可，而每次编译<code>docker-app</code>体积都很小。</p><h3 id="_2b-构建方式" tabindex="-1"><a class="header-anchor" href="#_2b-构建方式"><span>2b.构建方式</span></a></h3><p>构建docker，大概有以下三种实践，</p><ul><li>docker.sh - 基于Dockerfile的构建，比较灵活</li><li>jib maven - OCI格式，不需要Dockerfile，可不需要docker</li><li>buildpack maven - OCI格式，不需要Dockerfile，需要docker</li></ul><h3 id="_2c-docker-sh构建" tabindex="-1"><a class="header-anchor" href="#_2c-docker-sh构建"><span>2c.docker.sh构建</span></a></h3><p>使用<code>wings-docker.sh</code>，保留springboot默认结构，使用JarLauncher启动。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 使用spring打包成fatjar</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mvn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clean</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> package</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 解压 fatjar 构建 docker-dep</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wings-docker.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> unzip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> target/winx-admin-3.2.110-SNAPSHOT.jar</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wings-docker.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> target/winx-admin-3.2.110-SNAPSHOT.jar</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 从 docker-dep，构建 docker-app</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wings-docker.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> unzip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> app</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> target/winx-admin-3.2.110-SNAPSHOT.jar</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wings-docker.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> app</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> target/winx-admin-3.2.110-SNAPSHOT.jar</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 一步构建 docker-all</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wings-docker.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> all</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> target/winx-admin-3.2.110-SNAPSHOT.jar</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建成功后，其docker内<code>/app/</code>目录布局如下，</p><ul><li><code>BOOT-INF/{classes,lib,...}</code> - 代码及依赖</li><li><code>META-INF/{services,spring.components,...}</code> - 配置及属性</li><li><code>org</code> - Spring JarLauncher</li><li><code>{conf,data,logs}</code> - VOLUME</li></ul><p>springboot repackage时会对lib进行优化，比如</p><ul><li>移除<code>spring-boot-autoconfigure-processor.jar</code><ul><li>编译时生成spring-autoconfigure-metadata.properties</li></ul></li><li>移除<code>spring-boot-configuration-processor.jar</code><ul><li>编译时生成spring-configuration-metadata.json</li></ul></li><li>移除<code>spring-boot-starter-*.jar</code><ul><li>按springboot约定是空包</li></ul></li><li>增加<code>spring-boot-jarmode-layertools.jar</code><ul><li>以能够按层解包 <code>java -Djarmode=layertools</code></li></ul></li></ul><h3 id="_2d-docker启动" tabindex="-1"><a class="header-anchor" href="#_2d-docker启动"><span>2d.docker启动</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## bridge network</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">WINGS_DOCKER_NET</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">wings-app</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 创建目录和配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {data,conf,logs}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">conf/application.properties</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">## mysql host</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">winx.database.host=host.docker.internal:51487</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">## boot admin host</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">spring.boot.admin.client.url=http://host.docker.internal:8093</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">## jdbc debug</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">logging.level.com.zaxxer.hikari.HikariConfig=DEBUG</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## docker 启动选项</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">WINGS_DOCKER_OPTS</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">--network</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $WINGS_DOCKER_NET</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -e</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> TZ</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Asia/Shanghai</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./data:/app/data</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./conf:/app/conf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./logs:/app/logs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 8091:8080</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> network</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> create</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --driver</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bridge</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $WINGS_DOCKER_NET</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 进入 docker shell</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -it</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --rm</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> \${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">WINGS_DOCKER_OPTS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[@]</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --entrypoint</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /bin/bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> winx-admin:3.2.110-SNAPSHOT</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 启动 spring 应用</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -it</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --rm</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> \${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">WINGS_DOCKER_OPTS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[@]</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> winx-admin:3.2.110-SNAPSHOT</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述脚本以 <code>winx-admin</code> 为例，在配置 <code>winx-devops</code>时，把<code>8091</code>变为<code>8093</code>。 分别启动 admin和devops两个docker容器后，可以访问以下URL测试，</p><ul><li>admin swagger <a href="http://localhost:8091/swagger-ui/index.html" target="_blank" rel="noopener noreferrer">http://localhost:8091/swagger-ui/index.html</a></li><li>devops boot-admin <a href="http://localhost:8093/login" target="_blank" rel="noopener noreferrer">http://localhost:8093/login</a><ul><li>用户为 <code>boot-admin-server</code></li><li>密码为<code>$DING_TALK_TOKEN</code>，</li><li>否则为<code>!!!YOU_MUST_USE_STRONG_PASSWORD_HERE!!!</code></li></ul></li></ul><h3 id="_2e-jib构建oci" tabindex="-1"><a class="header-anchor" href="#_2e-jib构建oci"><span>2e.Jib构建OCI</span></a></h3><p><a href="https://github.com/GoogleContainerTools/jib/tree/master/jib-maven-plugin#quickstart" target="_blank" rel="noopener noreferrer">Jib</a> 可不依赖于docker，默认构建OCI格式</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 编译并安装到本地</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mvn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clean</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 使用 docker daemon</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mvn</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -P</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;docker,docker-dep&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> jib:dockerBuild</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -Ddocker.to.prefix=fessional/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mvn</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -P</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;docker,docker-app&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> jib:dockerBuild</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -Ddocker.to.prefix=fessional/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -Ddocker.from.prefix=docker://fessional/</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#mvn -P&#39;docker,docker-app&#39; jib:build -Ddocker.to.prefix=fessional/ -Ddocker.from.prefix=fessional/</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 使用 docker registry</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mvn</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -P</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;docker,docker-dep&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> jib:dockerBuild</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -Ddocker.to.prefix=docker.io/fessional/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mvn</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -P</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;docker,docker-app&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> jib:dockerBuild</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -Ddocker.to.prefix=docker.io/fessional/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -Ddocker.from.prefix=docker.io/fessional/</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 一步构建 docker-all</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mvn</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -P</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;docker&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> jib:dockerBuild</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -Ddocker.to.prefix=fessional/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，两种构建方式存在以下不同，</p><ul><li><code>jib:dockerBuild</code> - 依赖本地Docker</li><li><code>jib:build</code> - 不依赖本地Docker，默认推送到docker hub</li></ul><p>构建成功后，其docker内<code>/app/</code>目录布局如下，</p><ul><li><code>{classes,libs}</code> - 代码及依赖</li><li><code>resources/META-INF/spring.components</code> - 配置及属性</li><li><code>jib-classpath-file</code> - java类路径</li><li><code>jib-main-class-file</code> - java主函数</li><li><code>{conf,data,logs}</code> - VOLUME</li></ul><h3 id="_2f-jib启动" tabindex="-1"><a class="header-anchor" href="#_2f-jib启动"><span>2f.Jib启动</span></a></h3><p>同docker启动，不过增加了<code>fessional</code>前缀，以便区分。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## docker 启动选项</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">WINGS_DOCKER_OPTS</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">--network</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $WINGS_DOCKER_NET</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -e</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> TZ</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Asia/Shanghai</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./data:/app/data</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./conf:/app/conf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./logs:/app/logs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 8093:8080</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 进入 docker shell</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -it</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --rm</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> \${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">WINGS_DOCKER_OPTS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[@]</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --entrypoint</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /bin/bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> fessional/winx-devops:3.2.110-SNAPSHOT</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 启动 spring 应用</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -it</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --rm</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> \${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">WINGS_DOCKER_OPTS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[@]</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> fessional/winx-devops:3.2.110-SNAPSHOT</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2g-buildpack构建" tabindex="-1"><a class="header-anchor" href="#_2g-buildpack构建"><span>2g.buildpack构建</span></a></h3><p>通常需要根据项目的实际需要，自定义CNB的以下属性。</p><ul><li><code>builder</code> - 默认 paketobuildpacks/builder-jammy-base:latest</li><li><code>runImage</code> - 默认未指定</li><li><code>env</code> - 构建环境</li><li><code>buildpacks</code> - 建议自定义</li></ul><p>默认构建不区分<code>dep</code>和<code>app</code>，仅用作示例。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 编译并安装到本地</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mvn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clean</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 本地构建</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mvn</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -P</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;image-paketo&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> spring-boot:build-image</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建成功后，其<code>app-root</code>是<code>/workspace/</code>（硬编码，如何改变？）结构同 fatjar，</p><ul><li><code>BOOT-INF/{classes,lib,...}</code> - 代码及依赖</li><li><code>META-INF/{services,spring.components,...}</code> - 配置及属性</li><li><code>org</code> - Spring JarLauncher</li><li><code>/app/{conf,data,logs}</code> - VOLUME</li></ul>`,50),t=[n];function h(k,d){return a(),s("div",null,t)}const c=i(e,[["render",h],["__file","9c4.docker-starter.html.vue"]]),o=JSON.parse('{"path":"/zh/9-example/9c.server-manual/9c4.docker-starter.html","title":"9C4.使用Docker和启动脚本","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"fab fa-dev","category":["Practice","Docker","Operation"],"description":"9C4.使用Docker和启动脚本 Wings提供两种方式，用来发布和启动应用， script - 基于shell脚本的发布和管理 docker - 基于docker的发布和管理 9C4.1.Script方式 release.sh - 拉取、打包、推送的脚本 starter.sh - 启动、停止和监控的脚本 以上脚本，都支持<同名>.env的配置来覆盖...","GIT_REPO_HEAD":"2024-08-31 14ebccb0d5142c697c8e1c26714477f1e205282c","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/9-example/9c.server-manual/9c4.docker-starter.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/9-example/9c.server-manual/9c4.docker-starter.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"9C4.使用Docker和启动脚本"}],["meta",{"property":"og:description","content":"9C4.使用Docker和启动脚本 Wings提供两种方式，用来发布和启动应用， script - 基于shell脚本的发布和管理 docker - 基于docker的发布和管理 9C4.1.Script方式 release.sh - 拉取、打包、推送的脚本 starter.sh - 启动、停止和监控的脚本 以上脚本，都支持<同名>.env的配置来覆盖..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9C4.使用Docker和启动脚本\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"9C4.1.Script方式","slug":"_9c4-1-script方式","link":"#_9c4-1-script方式","children":[{"level":3,"title":"1a.发布脚本","slug":"_1a-发布脚本","link":"#_1a-发布脚本","children":[]},{"level":3,"title":"1b.启动脚本","slug":"_1b-启动脚本","link":"#_1b-启动脚本","children":[]}]},{"level":2,"title":"9C4.2.Docker方式","slug":"_9c4-2-docker方式","link":"#_9c4-2-docker方式","children":[{"level":3,"title":"2a.分层构建","slug":"_2a-分层构建","link":"#_2a-分层构建","children":[]},{"level":3,"title":"2b.构建方式","slug":"_2b-构建方式","link":"#_2b-构建方式","children":[]},{"level":3,"title":"2c.docker.sh构建","slug":"_2c-docker-sh构建","link":"#_2c-docker-sh构建","children":[]},{"level":3,"title":"2d.docker启动","slug":"_2d-docker启动","link":"#_2d-docker启动","children":[]},{"level":3,"title":"2e.Jib构建OCI","slug":"_2e-jib构建oci","link":"#_2e-jib构建oci","children":[]},{"level":3,"title":"2f.Jib启动","slug":"_2f-jib启动","link":"#_2f-jib启动","children":[]},{"level":3,"title":"2g.buildpack构建","slug":"_2g-buildpack构建","link":"#_2g-buildpack构建","children":[]}]}],"git":{"createdTime":1709342386000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":3}]},"readingTime":{"minutes":4.2,"words":1259},"filePathRelative":"zh/9-example/9c.server-manual/9c4.docker-starter.md","localizedDate":"2024年3月2日","autoDesc":true}');export{c as comp,o as data};
