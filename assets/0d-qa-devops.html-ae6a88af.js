import{_ as i,X as r,Y as p,$ as n,a1 as e,a0 as a,a4 as c,a3 as t,F as o}from"./framework-e2173353.js";const d={},u=t(`<h1 id="_0d-devops-topics" tabindex="-1"><a class="header-anchor" href="#_0d-devops-topics" aria-hidden="true">#</a> 0D.DevOps Topics</h1><p>编码开发，线上运行等话题。</p><h2 id="_0d-01-gethostname-很长时间" tabindex="-1"><a class="header-anchor" href="#_0d-01-gethostname-很长时间" aria-hidden="true">#</a> 0D.01.getHostName()很长时间</h2><blockquote><p>InetAddress.getLocalHost().getHostName() took 5004 milliseconds to respond. Please verify your network configuration (macOS machines may need to add entries to /etc/hosts)</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">hostname</span>
<span class="token comment"># 输出 trydofors-Hackintosh.local</span>

<span class="token function">cat</span> /etc/hosts
<span class="token comment"># 在localhost后面，填上 trydofors-Hackintosh.local</span>
<span class="token number">127.0</span>.0.1     localhost trydofors-Hackintosh.local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_0d-02-如何创建一个工程" tabindex="-1"><a class="header-anchor" href="#_0d-02-如何创建一个工程" aria-hidden="true">#</a> 0D.02.如何创建一个工程</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/trydofor/pro.fessional.wings.git
<span class="token builtin class-name">cd</span> pro.fessional.wings
observe/scripts/wings-init-project.sh

<span class="token comment"># 如果不能执行bash，那么自行编译和执行</span>
<span class="token builtin class-name">cd</span> <span class="token builtin class-name">cd</span> example/winx-devops/src/test/java
com/moilioncircle/wings/devops/init/WingsInitProjectSwing.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_0d-03-jackson和fastjson" tabindex="-1"><a class="header-anchor" href="#_0d-03-jackson和fastjson" aria-hidden="true">#</a> 0D.03.jackson和fastjson</h2><p>wings中和springboot一样，默认采用了jackson进行json和xml绑定。 不过wings的中对json的格式有特殊约定，比如日期格式，数字以字符串传递。 再与外部api交换数据时可能格式不匹配，这时需要用有备选方案。</p><ul><li>使用2套jackson配置</li><li>使用jackson注解 @JsonRawValue</li><li>使用fastjson2</li></ul><p>在Jackson和Fastjson的使用上，考虑到安全及兼容性，遵循以下约定</p><ul><li>FastJson用于①安全环境的读写，②对不安全的写，不读入外部json</li><li>FastJson用于静态环境，即不能优雅注入jackson的情况</li><li>此外，都应该使用Jackson</li></ul><p>在wings中，以Fastjson2替代了fastjson。注意以下lib依赖</p><ul><li>JustAuth-1.16.5 - fastjson-1.2.83 无AutoType，默认features的parse</li></ul><p>考虑到当前Fastjson-2.0.18的兼容性和稳定性仍存在很大问题，必须避免使用。</p><ul><li>FastJsonHelper - 对FastJson的兼容性全局配置，所有JSON都应该使用该类。</li><li>JacksonHelper - 对Jackson的全局配置，推荐静态使用。</li></ul><h2 id="_0d-04-类型间mapping比较" tabindex="-1"><a class="header-anchor" href="#_0d-04-类型间mapping比较" aria-hidden="true">#</a> 0D.04.类型间Mapping比较</h2><p>根据以下文章，推荐使用静态性的<code>MapStruct</code>。</p>`,18),h={href:"https://www.baeldung.com/mapstruct",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.baeldung.com/java-mapstruct-mapping-collections",target:"_blank",rel:"noopener noreferrer"},g={href:"https://mapstruct.org/documentation/installation/",target:"_blank",rel:"noopener noreferrer"},b=t("<p>在编码过程中，我们经常要处理各种O的转换，赋值，比如DTO，PO，VO，POJO。 同时我们又希望强类型，以便可以通过IDE提示提供效率，并把错误暴露在编译时。 这样就一定要避免弱类型(map,json)和反射（bean copy）,势必需要代码生成工具。</p><p>对于比较复杂的mapping，使用expression，qualifiedByName，spring注入。 自动生成的代码位于<code>target/generated-sources/annotations/</code></p><p>在wings中，推荐使用列编辑和正则（分享视频有讲），对于使用MapStruct的时候， 可以使用wings提供的<code>wgmp</code>(live template)做<code>A2B</code>的into生成器。</p><ul><li>在业务层代码，推荐MapStruct或列编辑和正则（分享视频有讲）手工制品。</li><li>在jdbc中推荐手工RowMapper，避免使用<code>BeanPropertyRowMapper</code>。</li><li>在jooq中推荐jooq自动生成的record，目前不需要其他mapper。</li></ul><p>纯wings中的converter以<code>-or</code>结尾(convertor)，以和其他框架的converter区分。<br> 包名以converter为准，类名以目的区分，通常纯wings的使用<code>-or</code>，其他用<code>-er</code>。</p><p>根据以下JMH的benchmark评测，对应动态Mapper也可以考虑。</p>",6),v={href:"https://www.baeldung.com/java-performance-mapping-frameworks",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/arey/java-object-mapper-benchmark",target:"_blank",rel:"noopener noreferrer"},_=t(`<p>主要比较项目的活跃程度，使用方式，依赖复杂度，issues解决量等。</p><ul><li><code>SimpleFlatMapper</code> 不在活跃</li><li><code>ModelMapper</code> 体积过大，暂时不推荐使用</li><li><code>JMapper</code> 性能及使用都非常优秀，但项目不在活跃</li><li><code>bull</code> 支持bean和map的映射，比较活跃，使用简单，但性能一般</li></ul><p>升级了java-object-mapper-benchmark的依赖，以java在笔记本上简单执行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Benchmark          (type)   Mode  Cnt         Score         Error  Units
Mapper             Manual  thrpt   25  27226210.883 ± 1350138.859  ops/s
Mapper    MapStruct-1.5.3  thrpt   25  23601713.316 ± 1247240.366  ops/s
Mapper          Selma-1.0  thrpt   25  24161620.968 ±  923848.147  ops/s
Mapper  JMapper-1.6.1.CR2  thrpt   25  19632956.722 ±  963388.556  ops/s
Mapper        datus-1.5.0  thrpt   25  13925750.428 ±  670830.594  ops/s
Mapper        Orika-1.5.4  thrpt   25   2950142.922 ±  203656.089  ops/s
Mapper  ModelMapper-3.1.0  thrpt   25    121694.578 ±   13540.111  ops/s
Mapper   BULL-2.1.2-jdk11  thrpt   25    127806.434 ±   12011.688  ops/s
Mapper        Dozer-6.5.2  thrpt   25     83840.654 ±    3225.088  ops/s
Mapper        ReMap-4.2.6  thrpt   25    505843.993 ±   25950.082  ops/s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_0d-05-文件系统和对象存储" tabindex="-1"><a class="header-anchor" href="#_0d-05-文件系统和对象存储" aria-hidden="true">#</a> 0D.05.文件系统和对象存储</h2><p>需要权限才能访问的文件资源，不可以放到CDN，需要自建对象存储或使用物理文件系统， 当使用本地FS时，需要注意子文件或子目录的数量限制，一般控制在30k以下，理由如下，</p><ul><li>The ext2/ext3 filesystems have a hard limit of 31998 links.</li><li>数量过多时，ls读取巨慢，索引也会慢。</li></ul><p>如果自建对象存储，推荐以下方案</p>`,8),f={href:"https://docs.min.io/cn/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/happyfish100/fastdfs",target:"_blank",rel:"noopener noreferrer"},w=n("h2",{id:"_0d-06-客户端和服务器信息",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0d-06-客户端和服务器信息","aria-hidden":"true"},"#"),e(" 0D.06.客户端和服务器信息")],-1),y=n("p",null,"收集用户画像，需要获得UA信息，可使用以下工具包",-1),j={href:"https://www.bitwalker.eu/software/user-agent-utils",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/browscap/browscap/wiki/Using-Browscap",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/blueconic/browscap-java",target:"_blank",rel:"noopener noreferrer"},M=n("p",null,"获取服务器运行信息，使用以下工具包",-1),q={href:"https://github.com/oshi/oshi",target:"_blank",rel:"noopener noreferrer"},S=n("h2",{id:"_0d-07-用户密码的安全性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0d-07-用户密码的安全性","aria-hidden":"true"},"#"),e(" 0D.07.用户密码的安全性")],-1),C=n("li",null,"密码长度不可设置上限，一般要求8位以上",-1),T=n("li",null,"支持中文密码，标点，全角半角，建议中文密码",-1),A=n("li",null,"不发送明文密码，密码初级散列策略为md5(pass+':'+pass).toUpperCase(Hex大写)",-1),I={href:"https://github.com/emn178/js-md5",target:"_blank",rel:"noopener noreferrer"},N=n("li",null,"有敏感数据的请求，必须是https或其他安全通道",-1),P=n("h2",{id:"_0d-08-关于内网穿透和oauth调试",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0d-08-关于内网穿透和oauth调试","aria-hidden":"true"},"#"),e(" 0D.08.关于内网穿透和Oauth调试")],-1),R=n("p",null,"在Oauth，支付等第三方集成调试时，需要有公网ip或域名，然后把公网请求转发到开发机调试。",-1),F=n("li",null,[e("临时用 ssh - "),n("code",null,"ssh -R 9988:127.0.0.1:8080 user@remote")],-1),O={href:"https://gofrp.org/docs/",target:"_blank",rel:"noopener noreferrer"},J={href:"https://natapp.cn/",target:"_blank",rel:"noopener noreferrer"},z=t(`<h2 id="_0d-09-idea提示component-scanned" tabindex="-1"><a class="header-anchor" href="#_0d-09-idea提示component-scanned" aria-hidden="true">#</a> 0D.09.IDEA提示component/scanned</h2><p>导入wings工程，Idea会无法处理spring.factories中的WingsAutoConfiguration，会报类似以下信息</p><p>Not registered via @EnableConfigurationProperties, marked as Spring component, or scanned via @ConfigurationPropertiesScan</p><p>此时在，Project Structure中的Facets中的spring，对每个主工程， 导入<code>Code based configuration</code>，选择WingsAutoConfiguration，即可。</p><h2 id="_0d-10-jooq隐秘的nullpointerexception" tabindex="-1"><a class="header-anchor" href="#_0d-10-jooq隐秘的nullpointerexception" aria-hidden="true">#</a> 0D.10.Jooq隐秘的NullPointerException</h2><p>在jooq映射enum类型是，如果converter错误，可能会出现以下NPE，不能通过stack定位问题，需要分析SQL</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java.lang.NullPointerException
at org.jooq.impl.DefaultExecuteContext.exception(DefaultExecuteContext.java:737)
at org.springframework.boot.autoconfigure.jooq.JooqExceptionTranslator.handle(JooqExceptionTranslator.java:83)
at org.springframework.boot.autoconfigure.jooq.JooqExceptionTranslator.exception(JooqExceptionTranslator.java:55)
at org.jooq.impl.ExecuteListeners.exception(ExecuteListeners.java:274)
at org.jooq.impl.AbstractQuery.execute(AbstractQuery.java:390)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_0d-11-错误input-length-1" tabindex="-1"><a class="header-anchor" href="#_0d-11-错误input-length-1" aria-hidden="true">#</a> 0D.11.错误<code>Input length = 1</code></h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> Failed to execute goal org.apache.maven.plugins:maven-resources-plugin:3.2.0:resources
  (default-resources) on project xxx-common: Input length = 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>原因是maven-resources-plugin的filter目录中存在非文本文件(不可按字符串读取)， 不要降级到3.1.0，在nonFilteredFileExtension添加扩展名即可。</p>`,10),H={href:"https://docs.spring.io/spring-boot/docs/3.0.2/reference/htmlsingle/#howto-properties-and-configuration",target:"_blank",rel:"noopener noreferrer"},L=n("h2",{id:"_0d-12-通过mysql客户端能找到-wings查询不到数据",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0d-12-通过mysql客户端能找到-wings查询不到数据","aria-hidden":"true"},"#"),e(" 0D.12.通过mysql客户端能找到，wings查询不到数据")],-1),B=n("p",null,"wings本身是时区敏感的，一般要求jvm和mysql在同一时区，主要体现在， flywave版本管理和journal的delete_dt时，都采用了时间，可以快速发现问题。",-1),U=n("p",null,"Warlock启动时自动检查jvm，jdbc和mysql的时区，不一致时，在控制台以Error形式输出。",-1),W=t('<h2 id="_0d-13-无外网mysql如何执行flywave版本管理" tabindex="-1"><a class="header-anchor" href="#_0d-13-无外网mysql如何执行flywave版本管理" aria-hidden="true">#</a> 0D.13.无外网mysql如何执行flywave版本管理</h2><p>建议在double check的情况下，手动执行和监控脚本。所以使用ssh Tunnel做端口转发。</p><p><code>ssh -N -L 3336:127.0.0.1:3306 [USER]@[SERVER_IP]</code></p><ul><li><code>-N</code> Tells SSH not to execute a remote command.</li><li><code>-L</code> 3336:127.0.0.1:3306 本地端口，远端ip，远端端口</li></ul><h2 id="_0d-14-swagger的问题" tabindex="-1"><a class="header-anchor" href="#_0d-14-swagger的问题" aria-hidden="true">#</a> 0D.14.swagger的问题</h2><p><strong>从210版本，以SpringDoc取代SpringFox后</strong>，使用swagger3.0，部分问题已不存在</p><p><code>😱 Could not render n, see the console.</code> 是swagger前端js错误，可能是response对象层级过深，导致swagger扫描时间太长。</p><p><code>Unable to find a model that matches key ...</code> 如，</p><ul><li>ModelKey{qualifiedModelName=ModelName{namespace=&#39;java.time&#39;, name=&#39;Instant&#39;}</li><li>ModelKey{qualifiedModelName=ModelName{namespace=&#39;java.time&#39;, name=&#39;LocalDateTime&#39;}</li></ul>',9),V={href:"https://github.com/springfox/springfox/issues/3452",target:"_blank",rel:"noopener noreferrer"},Q=t('<p>wings中可以通过暴露AlternateTypeRule bean，自动注入所以Docket中。</p><h2 id="_0d-15-反序列化时classcastexception或enum比较失败" tabindex="-1"><a class="header-anchor" href="#_0d-15-反序列化时classcastexception或enum比较失败" aria-hidden="true">#</a> 0D.15.反序列化时ClassCastException或Enum比较失败</h2><p>涉及的反序列化lib包括，hazelcast, kryo, cache</p><ul><li>完全一样的class，但是在序列化时却抛出 ClassCastException</li><li>同一个Enum的hash和equals不同，导致比较或map失败</li></ul><p>大概率是，开发时项目使用了spring-boot-devtools，导致IDE和jar处在不同的classloader。 IDE使用了devtools的<code>restart</code>, 而非IDE内的jar则是<code>base</code>。</p><ul><li>方案一，wings中始终使用<code>spring.hazelcast.config</code>配置hazelcast</li><li>方案二，自己暴露Config或ClientConfig，并设置好classloader</li><li>方案三，配置spring-devtools.properties（不推荐，wings采用）</li></ul>',6),G={href:"https://docs.spring.io/spring-boot/docs/3.0.2/reference/htmlsingle/#using.devtools.restart.limitations",target:"_blank",rel:"noopener noreferrer"},K=n("h2",{id:"_0d-16-hazelcast的outofmemoryerror及callernotmemberexception",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0d-16-hazelcast的outofmemoryerror及callernotmemberexception","aria-hidden":"true"},"#"),e(" 0D.16.Hazelcast的"),n("code",null,"OutOfMemoryError"),e("及"),n("code",null,"CallerNotMemberException")],-1),$=n("p",null,"当内存紧张时，hazelcast会出现OutOfMemoryError，然后集群以CallerNotMemberException拒绝此实例。",-1),X=n("p",null,"通常并发量级不过万，为实例jvm分配2-4G，主机预留一个1个实例的物理内存空闲可适用大部分场景。",-1),Y=n("blockquote",null,[n("p",null,"For this reason, we recommend that you plan to use only 60% of available memory, with 40% headroom to handle member failure or shutdown.")],-1),Z={href:"https://hazelcast.com/blog/how-much-memory-do-i-need-for-my-data/",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://docs.hazelcast.com/hazelcast/5.1/configuration/understanding-configuration",target:"_blank",rel:"noopener noreferrer"},en=n("h2",{id:"_0d-17-建表时的table-doesn-t-exist",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0d-17-建表时的table-doesn-t-exist","aria-hidden":"true"},"#"),e(" 0D.17.建表时的"),n("code",null,"Table doesn't exist")],-1),an=n("p",null,[e("错误信息"),n("code",null,"Error Code: 1146. Table xxx doesn't exist"),e(" 这是个矛盾的现象，创建table，就是因为不存在啊，怎么不让我create呢。")],-1),sn=n("p",null,[e("这和文件系统的大小写有关，根据wings的Sql风格，建议全小写，snake_case。 此外，也建议在 mysqld 的配置上，增加 "),n("code",null,"lower_case_table_names=1")],-1),tn={href:"https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_lower_case_table_names",target:"_blank",rel:"noopener noreferrer"},on=t(`<h2 id="_0d-18-如何解压springboot生成的jar" tabindex="-1"><a class="header-anchor" href="#_0d-18-如何解压springboot生成的jar" aria-hidden="true">#</a> 0D.18.如何解压springboot生成的jar</h2><p>通过executable=true生成的boot.jar，不能使用<code>jar -xzf</code>解压，需要<code>unzip</code>。 任何时候都推荐使用unzip解压，兼容性好，命令行简洁。</p><p>不能使用jar解压，是因为spring按executable zip的格式重新打包。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示文件列表</span>
<span class="token function">unzip</span> <span class="token parameter variable">-l</span> demo-exmaple-1.0.0-SNAPSHOT.jar
<span class="token comment"># 查看文件内容</span>
<span class="token function">head</span> demo-exmaple-1.0.0-SNAPSHOT.jar
<span class="token comment">#!/bin/bash</span>
<span class="token comment">#</span>
<span class="token comment">#    .   ____          _            __ _ _</span>
<span class="token comment">#   /\\\\ / ___&#39;_ __ _ _(_)_ __  __ _ \\ \\ \\ \\</span>
<span class="token comment">#  ( ( )\\___ | &#39;_ | &#39;_| | &#39;_ \\/ _\` | \\ \\ \\ \\</span>
<span class="token comment">#   \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )</span>
<span class="token comment">#    &#39;  |____| .__|_| |_|_| |_\\__, | / / / /</span>
<span class="token comment">#   =========|_|==============|___/=/_/_/_/</span>
<span class="token comment">#   :: Spring Boot Startup Script ::</span>
<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_0d-19-not-eligible-for-auto-proxying" tabindex="-1"><a class="header-anchor" href="#_0d-19-not-eligible-for-auto-proxying" aria-hidden="true">#</a> 0D.19.not eligible for auto-proxying</h2><p>is not eligible for getting processed by all BeanPostProcessors (for example: not eligible for auto-proxying)</p><p>Bean在spring中有载入顺序，<code>Processor</code>，<code>framework</code>和业务Bean应该分开。 若某些Bean因为依赖关系在Processor前加载，则不会被正确处理，可能影响业务。</p><p>若是经过排查后，对业务没有影响，那么可忽略该INFO级别的Warning。</p><h2 id="_0d-20-时区检查失败-无法启动应用" tabindex="-1"><a class="header-anchor" href="#_0d-20-时区检查失败-无法启动应用" aria-hidden="true">#</a> 0D.20.时区检查失败，无法启动应用</h2><ul><li>根据异常的提醒，设置正确的时区</li><li>确认jdbc驱动 mysql-connector版本不小于8.0.23</li><li>若不希望检查，设置<code>wings.warlock.check.tz-fail=false</code></li><li>按提示，统一jdbc，wings的时区即可</li></ul><h2 id="_0d-21-如何清理运行工程日志和临时文件" tabindex="-1"><a class="header-anchor" href="#_0d-21-如何清理运行工程日志和临时文件" aria-hidden="true">#</a> 0D.21.如何清理运行工程日志和临时文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 清理log和tmp文件</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;*.log&#39;</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;*.tmp&#39;</span>  <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> 
<span class="token comment"># 重新flatten</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;.pom.xml&#39;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_0d-22-json的泛型和泛型类的反序列化" tabindex="-1"><a class="header-anchor" href="#_0d-22-json的泛型和泛型类的反序列化" aria-hidden="true">#</a> 0D.22.json的泛型和泛型类的反序列化</h2><p>spring中，使用ResolvableType和TypeDescriptor描述类型。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">TypeDescriptor</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> strTd<span class="token punctuation">,</span> strTd<span class="token punctuation">)</span>
<span class="token class-name">TypeDescriptor</span><span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> strTd<span class="token punctuation">)</span>
<span class="token class-name">ResolvableType</span><span class="token punctuation">.</span><span class="token function">forClassWithGenerics</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">Dto</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>FastJson中，使用com.alibaba.fastjson.TypeReference， 注意，TypeReference一定要单行声明，避免自动推导，而丢失类型。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 以下类型等价，</span>
<span class="token class-name">Type</span> tp1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TypeReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">R</span><span class="token punctuation">&lt;</span><span class="token class-name">Dto</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Type</span> tp2 <span class="token operator">=</span> <span class="token class-name">ResolvableType</span><span class="token punctuation">.</span><span class="token function">forClassWithGenerics</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">Dto</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_0d-23-kotlin可能编译失败" tabindex="-1"><a class="header-anchor" href="#_0d-23-kotlin可能编译失败" aria-hidden="true">#</a> 0D.23.kotlin可能编译失败</h2><ul><li>kotlin-maven-plugin 插件，要同时编译java和kotlin</li><li>kotlin-stdlib-jdk8 这是最新的stdlib</li><li>mvn profile中的maven.compiler.target 优先与pom.xml</li><li>JAVA_HOME是否指定正确的jdk版本</li><li>kotlin-support profile，需要存在src/test/kotlin目录才自动生效</li></ul><h2 id="_0d-24-applicationcontexthelper空指针" tabindex="-1"><a class="header-anchor" href="#_0d-24-applicationcontexthelper空指针" aria-hidden="true">#</a> 0D.24.ApplicationContextHelper空指针</h2><p>Silencer的ApplicationContextHelper提供了静态的Ioc能力，有空指针情况</p><ul><li>在SpringBoot生命周期的PreparedEvent之前使用</li><li>在不同的classloader中使用，比如devtool的restart</li></ul><h2 id="_0d-25-idea无法打开工程-错误classformaterror" tabindex="-1"><a class="header-anchor" href="#_0d-25-idea无法打开工程-错误classformaterror" aria-hidden="true">#</a> 0D.25.IDEA无法打开工程，错误ClassFormatError</h2><p>IDEA无法正常显示项目，关闭后也无法打开，但命令行下mvn正常。 Errors中有以下信息，升级IDEA或避免其Maven插件升级。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java.lang.ClassFormatError: 
Illegal exception table range in class file 
kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_0d-26-idea下properties文件乱码" tabindex="-1"><a class="header-anchor" href="#_0d-26-idea下properties文件乱码" aria-hidden="true">#</a> 0D.26.IDEA下properties文件乱码</h2><p>在<code>Preferences</code> | <code>Editor</code> | <code>File Encodings</code> 下， Default encoding for properties files 选择<code>UTF8</code></p><p>若已经是UTF8，但仍有部分文件乱码，可以先切到iso8859在切回utf8</p><h2 id="_0d-27-编译正常-但idea说找不到类" tabindex="-1"><a class="header-anchor" href="#_0d-27-编译正常-但idea说找不到类" aria-hidden="true">#</a> 0D.27.编译正常，但IDEA说找不到类</h2><p>可以在IDEA中清空当前工程的缓存和索引，File菜单下</p><ul><li>Cache Recovery / Rescan或Refresh试一下，若不好用，则</li><li>Invalidate Caches and Restart，若仍不好用，则</li><li>删除工程，清理<code>.idea</code>等文件，重新import</li></ul><h2 id="_0d-28-jooq-try-with-resources-warn" tabindex="-1"><a class="header-anchor" href="#_0d-28-jooq-try-with-resources-warn" aria-hidden="true">#</a> 0D.28.Jooq try-with-resources Warn</h2><p>Jooq的DSL代码是try-with-resources安全的，若IDE代码审查出现以下警告，可以安全关闭。</p><p>选择<code>ignore AutoCloseable returned by this method</code>即可按类别关闭。</p><blockquote><p>Warning:(62, 18) &#39;SelectSelectStep&lt;Record2&lt;Long, String&gt;&gt;&#39; used without &#39;try&#39;-with-resources statement</p></blockquote><h2 id="_0d-29-statement-with-empty-body" tabindex="-1"><a class="header-anchor" href="#_0d-29-statement-with-empty-body" aria-hidden="true">#</a> 0D.29.Statement with empty body</h2><p>若IDE代码审查出现以下警告，可编辑器规则，挑选<code>Comments count as content</code></p><h2 id="_0d-30-idea-inspect-code" tabindex="-1"><a class="header-anchor" href="#_0d-30-idea-inspect-code" aria-hidden="true">#</a> 0D.30.IDEA inspect code</h2><p>排除 observer下的submodlue内容，尤其docs中的node内容。</p><p>Custom Scope <code>WingsCode</code>，Pattern设置如下，</p><p><code>!file:*/docs//*&amp;&amp;!file:*/meepo//*&amp;&amp;!file:*/mirana//*</code></p><h2 id="_0d-31-lombok错误-cannot-find-symbol" tabindex="-1"><a class="header-anchor" href="#_0d-31-lombok错误-cannot-find-symbol" aria-hidden="true">#</a> 0D.31.lombok错误 cannot find symbol</h2><blockquote><p>cannot find symbol symbol: method onMethod_() location: @interface lombok.Setter</p></blockquote><p>当发生莫奇名秒的lombok编译错误时，需要按以下步骤排查，</p><ul><li>首先排除IDE影响，确认纯控制台下的mvn是否正常</li><li>优先解决非lombok的编译错误</li><li>优先解决静态编写的代码的错误</li></ul><h2 id="_0d-32-maven错误-non-resolvable-parent-pom" tabindex="-1"><a class="header-anchor" href="#_0d-32-maven错误-non-resolvable-parent-pom" aria-hidden="true">#</a> 0D.32.maven错误 Non-resolvable parent POM</h2><blockquote><p>FATAL Non-resolvable parent POM for com.x.xx:xxx:\${revision}: Could not find artifact pro.fessional:wings:pom:2.6.6.210-SNAPSHOT and &#39;parent.relativePath&#39; points at wrong local POM</p></blockquote><p>以上错误一般在首次安装中，原因是repository中找不到wings的pom，尝试以下方法，</p><ul><li>若存在历史repo，设定$MVN_HOME/conf/settings.xml的localRepository指向</li><li>在当前pom中设置wings的ossrh-snapshots。非最新wings</li><li>自行 <code>maven install</code> wings工程到本地，最新wings</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>ossrh-snapshots<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>https://oss.sonatype.org/content/repositories/snapshots<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>snapshots</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enabled</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enabled</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>snapshots</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>releases</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enabled</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enabled</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>releases</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,50);function ln(rn,pn){const s=o("ExternalLinkIcon"),l=o("RouterLink");return r(),p("div",null,[u,n("ul",null,[n("li",null,[n("a",h,[e("Quick Guide to MapStruct"),a(s)])]),n("li",null,[n("a",m,[e("Mapping Collections with MapStruct"),a(s)])]),n("li",null,[n("a",g,[e("MapStruct ide&mvn支持"),a(s)])])]),b,n("ul",null,[n("li",null,[n("a",v,[e("MapStruct 性能比较"),a(s)])]),n("li",null,[n("a",k,[e("java-object-mapper-benchmark"),a(s)])])]),_,n("ul",null,[n("li",null,[n("a",f,[e("https://docs.min.io/cn/"),a(s)]),e(" 推荐使用")]),n("li",null,[n("a",x,[e("https://github.com/happyfish100/fastdfs"),a(s)])])]),w,y,n("ul",null,[n("li",null,[n("a",j,[e("https://www.bitwalker.eu/software/user-agent-utils"),a(s)]),e(" 浏览器（停止维护）")]),n("li",null,[n("a",D,[e("https://github.com/browscap/browscap/wiki/Using-Browscap"),a(s)]),e(" 浏览器工具家族")]),n("li",null,[n("a",E,[e("https://github.com/blueconic/browscap-java"),a(s)]),e(" 浏览器（推荐）")])]),M,n("ul",null,[n("li",null,[n("a",q,[e("https://github.com/oshi/oshi"),a(s)]),e(" 系统信息")])]),S,n("ul",null,[C,T,A,n("li",null,[e("js侧md5需要支持UTF8，如 "),n("a",I,[e("https://github.com/emn178/js-md5"),a(s)])]),N]),P,R,n("ul",null,[F,n("li",null,[e("持久用 frp - "),n("a",O,[e("https://gofrp.org/docs/"),a(s)])]),n("li",null,[e("简单用 netapp - "),n("a",J,[e("https://natapp.cn/"),a(s)])])]),z,n("p",null,[n("a",H,[e("Automatic Property Expansion Using Maven"),a(s)])]),L,B,U,n("p",null,[e("更多信息，参考"),a(l,{to:"/en/2-faceless/2h-time-zone.html"},{default:c(()=>[e("时间和时区")]),_:1})]),W,n("p",null,[e("springfox的swagger3.0.0有bug，会在3.0.1修复， "),n("a",V,[e("https://github.com/springfox/springfox/issues/3452"),a(s)])]),Q,n("p",null,[e("不推荐在product环境使用devtool，参考springboot官方文档的"),n("a",G,[e("Known Limitations"),a(s)])]),K,$,X,Y,n("ul",null,[n("li",null,[n("a",Z,[e("https://hazelcast.com/blog/how-much-memory-do-i-need-for-my-data/"),a(s)])]),n("li",null,[n("a",nn,[e("https://docs.hazelcast.com/hazelcast/5.1/configuration/understanding-configuration"),a(s)])])]),en,an,sn,n("p",null,[n("a",tn,[e("https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_lower_case_table_names"),a(s)])]),on])}const dn=i(d,[["render",ln],["__file","0d-qa-devops.html.vue"]]);export{dn as default};
