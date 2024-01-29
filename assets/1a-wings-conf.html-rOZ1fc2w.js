import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as c,c as s,b as e,e as o,d as n,f as t}from"./app-mN42Vc4a.js";const r={},d=t('<h1 id="_1a-auto-cascade-config" tabindex="-1"><a class="header-anchor" href="#_1a-auto-cascade-config"><span>1A.Auto Cascade Config</span></a></h1><p>Supports <code>split</code>, <code>override</code>, <code>disable</code> and <code>profile</code> of config files, which is more conducive to engineering management.</p><ul><li>Split - config items can be freely separated in the file by module, function, or profile.</li><li>Override - config file can be overridden with a certain priority (loading order)</li><li>Disable - disable config loading by block-list</li><li>Profile, just like Spring rules.</li></ul><p>The way Wings handles profiles is <code>cascading</code> and <code>filtering</code>, with configurations ordered by path order and file number.</p><ul><li>Cascading - sorting by priority (higher in front), higher overrides lower</li><li>Filtering - filtering by profile</li></ul><h2 id="_1a-1-split-config" tabindex="-1"><a class="header-anchor" href="#_1a-1-split-config"><span>1A.1.Split Config</span></a></h2><p>In actual project development, there is only one big <code>application.*</code>, which is not conducive to teamwork of division and collaboration. Any big things should be broken down.</p><ul><li>spring-datasource.properties</li><li>spring-mail-79.properties</li><li>logger-logback-79.properties</li></ul>',8),p=e("code",null,"EnvironmentPostProcessor",-1),g=e("code",null,"/wings-conf/**/*. *",-1),h=e("code",null,"paths",-1),f={href:"https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#features.external-config",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"paths",-1),m=t('<ol><li>in the path, load all <code>application.*</code> first, then <code>wings-conf/**/*. *</code>.</li><li>path ending with <code>/</code> is a directory, otherwise a file</li><li>not <code>classpath:</code> or <code>classpath*:</code> is scanned with <code>file:</code></li><li><code>classpath:/</code> will be scanned with <code>classpath*:/</code></li><li>default <code>classpath:/,classpath:/config/,file:. /,file:. /config/</code></li><li>OS environment variables. <code>SPRING_CONFIG_LOCATION</code>.</li><li>Java System properties <code>spring.config.location</code></li><li>command line arguments. `--spring.config.location</li></ol><p>Each config filename is made up of <code>dirname</code> + <code>basename</code> + <code>seq</code> + <code>profile</code> + <code>extname</code>. For example, <code>classpath:/wings-conf/</code> + <code>wings-mirana</code> + <code>-79</code> + <code>@dev</code> + <code>.properties</code>.</p><p>Currently, only <code>*.yml</code>, <code>*.yaml</code>, <code>*.xml</code>, <code>*.properties</code> configs are loaded. The default config <code>seq</code> is set to <code>-79</code> to easily override according to the filename sorting.</p><p>The same <code>basename</code> means the same configuration. no <code>seq</code> means its <code>seq</code> is <code>70</code>, higher than the default <code>79</code>,will override the default configuration. Config file as Resource, first sorted by scan order, then grouped by basename, adjusted by <code>seq</code> in ascending order (item override related).</p><p>Config files are UTF8 encoded, can better support unicode, can write unicode comments or content directly. Wings automatically escapes non-ascii when loading config to be compatible with Spring&#39;s default read-by-byte behavior.</p><h2 id="_1a-2-config-profile" tabindex="-1"><a class="header-anchor" href="#_1a-2-config-profile"><span>1A.2.Config Profile</span></a></h2><p>The <code>basename</code> must not contain <code>@</code> and the <code>profile</code> name must not contain <code>.</code> to avoid parsing errors. Compare with spring as follows.</p><ul><li><code>application.properties</code></li><li><code>application-{profile}.properties</code></li><li><code>wings-conf/wings-test-module-79.properties</code></li><li><code>wings-conf/wings-test-module-79@{profile}.properties</code></li></ul><p>The configs with the same <code>basename</code> are treated as the same group and the inactive profile is removed from the configs. Distinguish profiles by <code>@</code>, because the presence of <code>-</code> in wings config is incompatible with the spring format. When using <code>spring.profiles.active</code>, make sure that the configuration files are loaded according to Spring conventions.</p><p>There is also a difference in the processing of wings and spring. By default wings takes precedence over spring.</p><ul><li>application-{profile}, wings scan and sort, then spring process</li><li>wings-conf/layered-config@{profile}, wings scan and process</li><li>with-profile overlay without-profile, multiple active profiles cascading overlay</li><li>Dont put <code>application.*</code> in wings-conf/, double processing by spring and wings</li></ul><p>SpringBoot supports only one application in multi-profile form, so the config file has only path priority. In the case of multiple profiles, the processing order is ① exclude inactive ② active charset ordered (the latter takes precedence) ③ no profile at the end.</p><p>Wings supports multiple configs and multiple profiles, and its path priority and profile priority are consistent with Spring. In the multi-config priority, the processing order is ①profile ②path ③file seq ④charset order (the former takes precedence)</p><h2 id="_1a-3-loading-blocklist" tabindex="-1"><a class="header-anchor" href="#_1a-3-loading-blocklist"><span>1A.3.Loading BlockList</span></a></h2><p>Filenames that exist in <code>/wings-conf/wings-conf-block-list.cnf</code> will not be loaded.</p><ul><li>One filename per line, case sensitive</li><li>Line starting with <code>#</code> is comment, auto ignore first and last whitespace</li><li>Use <code>String.endWith</code> to determine, full path exact match</li><li>Block single <code>@profile</code>, need to specify separately</li></ul><h2 id="_1a-4-config-item-promotion" tabindex="-1"><a class="header-anchor" href="#_1a-4-config-item-promotion"><span>1A.4.Config Item Promotion</span></a></h2><p>Some non-Spring features are configured through System.getProperties. So you need to put the required config items from Spring into System.properties.</p><ul><li>Put if System does not exist, i.e. <code>-Dkey=value</code> has the highest priority</li><li>Variable names are stored in <code>/wings-conf/wings-prop-promotion.cnf</code>.</li><li>One property name per line, case sensitive, <code>#</code> for comments</li></ul><h2 id="_1a-5-logging-logback" tabindex="-1"><a class="header-anchor" href="#_1a-5-logging-logback"><span>1A.5.logging/logback</span></a></h2><p>Recommend to start with <code>wings-starter.sh</code> and pass arguments with <code>wings-starter.env</code>.</p><p>See <code>wings-logging-79.properties</code>, use springboot configuration by default.</p><ul><li>Only console output (eg. inside docker) no additional settings needed</li><li>Need both console and file, add <code>logging.file.name=/tmp/wings-example.log</code>.</li><li>Need only file, add <code>logging.config=classpath:logback-fileonly.xml</code>.</li><li>Configure appender level by name, if FILE exists, CONSOLE will auto switch to WARN (logback only)</li></ul><p>Recommended logging config, INFO default, DEBUG for specified package name</p><ul><li>logging.level.root=INFO</li><li>logging.level.org.springframework.web=DEBUG</li><li>logging.level.org.jooq=DEBUG</li><li>logging.level.{package.path}=OFF</li></ul><p>It is recommended to use <code>wings-starter.sh</code> to start, use <code>wings-starter.env</code> to pass args.</p><h2 id="_1a-6-dynamic-tweaking" tabindex="-1"><a class="header-anchor" href="#_1a-6-dynamic-tweaking"><span>1A.6.Dynamic Tweaking</span></a></h2><p>Triggers thread-level logging output based on business requirements and under certain conditions.</p><ul><li>TweakLogger - supports logback only, done through LogbackFilter</li><li>TweakClock - global or thread level time adjustment</li><li>TweakStack - global or thread level whether to output Stack</li></ul><h2 id="_1a-7-references" tabindex="-1"><a class="header-anchor" href="#_1a-7-references"><span>1A.7.References</span></a></h2>',30),b={href:"https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/",target:"_blank",rel:"noopener noreferrer"},w=e("ul",null,[e("li",null,'"4.1.6. Application Events and Listeners"'),e("li",null,'"4.2. Externalized Configuration"'),e("li",null,'"9.2.3. Change the Location of External Properties of an Application"'),e("li",null,'"9.1.3. Customize the Environment or ApplicationContext Before It Starts"')],-1);function y(_,v){const i=l("ExternalLinkIcon");return c(),s("div",null,[d,e("p",null,[o("Using "),p,o(" to scan "),g,o(" in the application "),h,o(" , same rules as "),e("a",f,[o("Externalized Configuration"),n(i)]),o(", and the "),u,o(" related to the config file are as follows, the latter with high priority (for consistency with the Spring docs, the program is executed in reverse order, FIFO priority).")]),m,e("p",null,[e("a",b,[o("docs.spring.io"),n(i)])]),w])}const S=a(r,[["render",y],["__file","1a-wings-conf.html.vue"]]);export{S as default};
