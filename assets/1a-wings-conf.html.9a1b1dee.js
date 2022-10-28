import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{r,o as d,c as a,b as e,e as o,d as l,f as c}from"./app.d363b873.js";const s={},p=c('<h1 id="_1a-conf\u81EA\u52A8\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1a-conf\u81EA\u52A8\u914D\u7F6E" aria-hidden="true">#</a> 1A.Conf\u81EA\u52A8\u914D\u7F6E</h1><p>\u652F\u6301\u914D\u7F6E\u6587\u4EF6\u7684<code>\u5206\u5272</code>\uFF0C<code>\u8986\u76D6</code>\uFF0C<code>\u7981\u7528</code>\u548C<code>profile</code>\uFF0C\u66F4\u6709\u5229\u4E8E\u5DE5\u7A0B\u5316\u7684\u7BA1\u7406\u3002</p><ul><li>\u5206\u5272 - \u6307\u914D\u7F6E\u9879\u53EF\u4EE5\u6309\u6A21\u5757\uFF0C\u529F\u80FD\uFF0C\u81EA\u7531\u7EC4\u6210\u72EC\u7ACB\u7684\u914D\u7F6E\u6587\u4EF6</li><li>\u8986\u76D6 - \u914D\u7F6E\u9879\u6309\u4E00\u5B9A\u7684\u4F18\u5148\u7EA7\uFF08\u52A0\u8F7D\u987A\u5E8F\uFF09\u53EF\u4EE5\u8986\u76D6</li><li>\u7981\u7528 - \u53EF\u4EE5\u901A\u8FC7block-list\uFF0C\u7981\u6B62\u67D0\u914D\u7F6E\u6587\u4EF6\u52A0\u8F7D</li><li>profile\uFF0C\u540Cspring\u89C4\u5219\u3002</li></ul><p>wings\u5BF9\u914D\u7F6E\u6587\u4EF6\u7684\u5904\u7406\u65B9\u5F0F\uFF0C\u662F<code>\u5C42\u53E0</code>\u548C<code>\u8FC7\u6EE4</code>\uFF0C\u914D\u7F6E\u4EE5\u8DEF\u5F84\u987A\u5E8F\u548C\u7F16\u53F7\u5927\u5C0F\u6392\u5E8F\u3002</p><ul><li>\u5C42\u53E0 - \u6309\u4F18\u5148\u7EA7\uFF08\u524D\u9762\u7684\u9AD8\uFF09\u6392\u5E8F\uFF0C\u9AD8\u7684\u53E0\u4F4F\u4F4E\u7684</li><li>\u8FC7\u6EE4 - \u901A\u8FC7profile\u8FDB\u884C\u6392\u4ED6\u8FC7\u6EE4</li></ul><h2 id="_1a-1-\u5206\u5272config" tabindex="-1"><a class="header-anchor" href="#_1a-1-\u5206\u5272config" aria-hidden="true">#</a> 1A.1.\u5206\u5272Config</h2><p>\u5B9E\u9645\u9879\u76EE\u5F00\u53D1\u4E2D\uFF0C\u53EA\u6709\u4E00\u4E2A\u5927\u7684<code>application.*</code>\uFF0C\u4E0D\u5229\u4E8E\u5206\u5DE5\u548C\u534F\u4F5C\uFF0C\u5E94\u8BE5\u5206\u9694\uFF0C</p><ul><li>shardingsphere-datasource-79.properties</li><li>shardingsphere-sharding-79.properties</li><li>logger-logback-79.properties</li></ul>',8),t=e("code",null,"EnvironmentPostProcessor",-1),g=e("code",null,"\u5404\u8DEF\u5F84",-1),f=e("code",null,"/wings-conf/**/*.*",-1),h={href:"https://docs.spring.io/spring-boot/docs/2.6.6/reference/htmlsingle/#features.external-config",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"\u5404\u8DEF\u5F84",-1),_=c('<ol start="0"><li>\u8DEF\u5F84\u4E2D\uFF0C\u4F18\u5148\u52A0\u8F7D<code>application.*</code>\uFF0C\u6B21\u4E4B<code>wings-conf/**/*.*</code></li><li>\u4EE5<code>/</code>\u7ED3\u5C3E\u7684\u5F53\u505A\u76EE\u5F55\uFF0C\u5426\u5219\u4F5C\u4E3A\u6587\u4EF6</li><li>\u4EFB\u4F55\u975E<code>classpath:</code>,<code>classpath*:</code>\u7684\uFF0C\u90FD\u4EE5<code>file:</code>\u626B\u63CF</li><li><code>classpath:/</code>\u4F1A\u88AB\u4EE5<code>classpath*:/</code>\u626B\u63CF</li><li>default <code>classpath:/,classpath:/config/,file:./,file:./config/</code></li><li>OS environment variables. <code>SPRING_CONFIG_LOCATION</code></li><li>Java System properties <code>spring.config.location</code></li><li>Command line arguments. `--spring.config.location</li></ol><p>\u76EE\u524D\u53EA\u52A0\u8F7D <code>*.yml</code>, <code>*.yaml</code>,<code>*.xml</code>, <code>*.properties</code>\u6269\u5C55\u540D\u7684\u914D\u7F6E\u6587\u4EF6\u3002 \u5DE5\u7A0B\u63D0\u4F9B\u7684\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u6587\u4EF6\u540D\u5B57\u540E\u9762\u90FD\u4F1A\u52A0\u4E0A<code>-79</code>\uFF0C\u65B9\u4FBF\u6839\u636E\u6587\u4EF6\u540D\u6392\u5E8F\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u3002</p><p>\u6BCF\u4E2A\u914D\u7F6E\u6587\u4EF6\u90FD\u7531\u4EE5\u4E0B\u90E8\u5206\u6784\u6210:<code>dirname</code>+<code>basename</code>+<code>seq</code>+<code>profile</code>+<code>extname</code>\uFF0C \u4F8B\u5982\uFF0C<code>classpath:/wings-conf</code>+<code>/</code>+<code>wings-mirana</code>+<code>-</code>+<code>79</code>+<code>.</code>+<code>properties</code> \u76F8\u540C<code>basename</code>\u4E3A\u540C\u4E00\u914D\u7F6E\uFF0C\u65E0\u5E8F\u53F7\u7684\u89C6\u5E8F\u53F7\u4E3A<code>70</code>\uFF0C\u6BD4\u9ED8\u8BA4\u7684<code>79</code>\u8981\u9AD8\uFF0C\u4F1A\u8986\u76D6\u9ED8\u8BA4\u914D\u7F6E\u3002</p><p>\u914D\u7F6E\u6587\u4EF6\uFF0C\u4EE5Resource\u9996\u5148\u6309\u626B\u7801\u987A\u5E8F\u6392\u5E8F\uFF0C\u7136\u540E\u6309base\u5F52\u7C7B\uFF0C\u6309seq\u5347\u5E8F\u8C03\u6574\uFF08\u503C\u8986\u76D6\u6709\u5173\uFF09\u3002</p><p>\u6240\u6709\u914D\u7F6E\u6587\u4EF6\u5FC5\u987B\u4E3AUTF8\u7F16\u7801\uFF0C\u53EF\u4EE5\u66F4\u597D\u7684\u652F\u6301unicode\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5199\u4E2D\u6587\u6CE8\u91CA\u6216\u5185\u5BB9\u3002 Wings\u5728\u88C5\u8F7D\u914D\u7F6E\u65F6\u5BF9\u975Eascii\u8FDB\u884C\u81EA\u52A8\u8F6C\u4E49\uFF0C\u4EE5\u517C\u5BB9spring\u9ED8\u8BA4\u7684\u6309byte\u8BFB\u53D6\u884C\u4E3A\u3002</p><h2 id="_1a-2-\u914D\u7F6Eprofile" tabindex="-1"><a class="header-anchor" href="#_1a-2-\u914D\u7F6Eprofile" aria-hidden="true">#</a> 1A.2.\u914D\u7F6EProfile</h2><p>\u6587\u4EF6\u540D\u4E0D\u542B<code>@</code>\uFF0C<code>profile</code>\u540D\u4E0D\u5305\u62EC<code>.</code>\uFF0C\u4EE5\u907F\u514D\u89E3\u6790\u9519\u8BEF\u3002\u548Cspring\u5BF9\u6BD4\u5982\u4E0B\uFF0C</p><ul><li><code>application.properties</code></li><li><code>application-{profile}.properties</code></li><li><code>wings-conf/shardingsphere-datasource-79.properties</code></li><li><code>wings-conf/shardingsphere-datasource-79@{profile}.properties</code></li></ul><p>\u76F8\u540C<code>basename</code>+<code>seq</code>\u7684config\u89C6\u4E3A\u540C\u4E00\u7EC4\uFF0C\u5E76\u79FB\u9664\u975E\u6D3B\u52A8\u7684profile\u914D\u7F6E\uFF0C \u4EE5<code>@</code>\u533A\u5206profile\uFF0C\u56E0\u4E3Awings\u7684\u914D\u7F6E\u6587\u4EF6\u540D\u4E2D\u5B58\u5728<code>-</code>\uFF0C\u65E0\u6CD5\u517C\u5BB9spring\u683C\u5F0F\u3002 \u5728\u4F7F\u7528<code>spring.profiles.active</code>\u65F6\uFF0C\u8981\u786E\u4FDD\u914D\u7F6E\u6587\u4EF6\u6309spring\u7EA6\u5B9A\u52A0\u8F7D\u3002</p><p>wings\u548Cspring\u7684profile\u5728\u5904\u7406\u4E0A\u4E5F\u6709\u533A\u522B\uFF0C\u9ED8\u8BA4wings\u4F18\u5148\u4E8Espring\u5904\u7406\u3002</p><ul><li>application-{profile}\uFF0Cwings\u626B\u63CF\u6392\u5E8F\uFF0Cspring\u5904\u7406</li><li>wings-conf/layered-config@{profile}\uFF0Cwings\u626B\u63CF\u53CA\u5904\u7406</li><li>\u6709profile\u53E0\u4F4F\u65E0profile\u7684\u914D\u7F6E\uFF0C\u591A\u4E2A\u6FC0\u6D3Bprofile\u5C42\u53E0\u8986\u76D6</li><li>\u907F\u514D\u5728wings-conf/\u4E2D\u5B58\u5728application\u547D\u540D\u7684\u914D\u7F6E\uFF0C\u5BFC\u81F4spring\u548Cwings\u53CC\u91CD\u5904\u7406</li></ul><p>SpringBoot\u4EC5\u652F\u6301\u5355application\u914D\u7F6E\uFF0C\u591Aprofile\u5F62\u5F0F\uFF0C\u6240\u4EE5\u914D\u7F6E\u6587\u4EF6\u4E0A\u4EC5\u6709\u8DEF\u5F84\u4F18\u5148\u7EA7\u3002 \u591Aprofile\u65F6\uFF0C\u5904\u7406\u987A\u5E8F\u4E3A\u2460\u6392\u9664\u975E\u6FC0\u6D3B \u2461\u6FC0\u6D3B\u7684\u6392\u5B57\u7B26\u5E8F\uFF08\u540E\u8005\u4F18\u5148\uFF09\u2462\u65E0profile\u7684\u57AB\u5E95\u3002</p><p>Wings\u652F\u6301\u591A\u914D\u7F6E\uFF0C\u591Aprofile\uFF0C\u5176\u8DEF\u5F84\u4F18\u5148\u7EA7\u548Cprofile\u4F18\u5148\u7EA7\u4E0Espring\u4E00\u81F4\u3002 \u5728\u591A\u914D\u7F6E\u4F18\u5148\u7EA7\uFF0C\u5904\u7406\u987A\u5E8F\u4E3A \u2460profile \u2461\u8DEF\u5F84 \u2462\u6587\u4EF6\u5E8F\u53F7 \u2463\u5B57\u7B26\u987A\u5E8F\uFF08\u524D\u8005\u4F18\u5148\uFF09</p><h2 id="_1a-3-\u52A0\u8F7D\u9ED1\u540D\u5355" tabindex="-1"><a class="header-anchor" href="#_1a-3-\u52A0\u8F7D\u9ED1\u540D\u5355" aria-hidden="true">#</a> 1A.3.\u52A0\u8F7D\u9ED1\u540D\u5355</h2><p>\u5B58\u5728\u4E8E<code>/wings-conf/wings-conf-block-list.cnf</code>\u7684\u6587\u4EF6\u540D\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u52A0\u8F7D\u3002</p><ul><li>\u4E00\u884C\u4E00\u4E2A\u6587\u4EF6\u540D\uFF0C\u533A\u5206\u5927\u5C0F\u5199</li><li><code>#</code>\u5F00\u5934\u6807\u8BC6\u6CE8\u91CA\uFF0C\u81EA\u52A8\u5FFD\u7565\u9996\u5C3E\u7A7A\u767D</li><li>\u4EE5<code>String.endWith</code>\u5224\u65AD\uFF0C\u5168\u8DEF\u5F84\u7CBE\u786E\u5339\u914D</li><li>\u6392\u9664\u5355\u4E2A<code>@profile</code>\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u9700\u8981\u5355\u72EC\u6307\u5B9A</li></ul><h2 id="_1a-4-\u914D\u7F6E\u9879\u63D0\u5347" tabindex="-1"><a class="header-anchor" href="#_1a-4-\u914D\u7F6E\u9879\u63D0\u5347" aria-hidden="true">#</a> 1A.4.\u914D\u7F6E\u9879\u63D0\u5347</h2><p>\u6709\u4E9B\u975ESpring\u4F53\u7CFB\u7684\u529F\u80FD\uFF0C\u901A\u8FC7System.getProperties\u83B7\u5F97\u5C5E\u6027\u3002 \u56E0\u6B64\u9700\u8981\u628A\u9700\u8981\u7684\u914D\u7F6E\u9879\uFF0C\u4ECEspring\u5199\u5165System.properties\u3002</p><ul><li>System\u82E5\u4E0D\u5B58\u5728\uFF0C\u5219\u5199\u5165\uFF0C\u5373 <code>-Dkey=value</code>\u4F18\u5148\u7EA7\u6700\u9AD8</li><li>\u53D8\u91CF\u540D\u4FDD\u5B58\u5728<code>/wings-conf/wings-prop-promotion.cnf</code>\u4E2D</li><li>\u4E00\u884C\u4E00\u4E2A\u5C5E\u6027\u540D\uFF0C\u533A\u5206\u5927\u5C0F\u5199\uFF0C<code>#</code>\u8868\u6CE8\u91CA</li></ul><h2 id="_1a-5-logging-logback" tabindex="-1"><a class="header-anchor" href="#_1a-5-logging-logback" aria-hidden="true">#</a> 1A.5.logging/logback</h2><p>\u53C2\u8003<code>wings-logging-79.properties</code>\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u4F7F\u7528springboot\u914D\u7F6E\u3002</p><ul><li>\u53EA\u9700\u8981console\u8F93\u51FA\uFF08\u5982\u679Cdocker\u5185\uFF09\u4E0D\u9700\u8981\u989D\u5916\u8BBE\u7F6E</li><li>\u540C\u65F6\u9700\u8981console\u548Cfile\u65F6\uFF0C\u589E\u52A0\u4EE5\u4E0B\u914D\u7F6E<code>logging.file.name=/tmp/wings-example.log</code></li><li>\u53EA\u9700\u8981file\u65F6\uFF0C\u518D\u589E\u52A0<code>logging.config=classpath:logback-fileonly.xml</code></li><li>\u53EF\u6309\u540D\u5B57\u914D\u7F6Eappender\u65E5\u5FD7\u7EA7\u522B\uFF0C\u82E5\u5B58\u5728FILE\u65F6\uFF0CCONSOLE\u81EA\u52A8\u5207\u5230WARN\u4EE5\u4E0A(\u4EC5logback)</li></ul><p>\u63A8\u8350\u7684logging\u914D\u7F6E\uFF0C\u9ED8\u8BA4INFO\uFF0C\u6307\u5B9A\u5305\u540D\u7684DEBUG</p><ul><li>logging.level.root=INFO</li><li>logging.level.org.springframework.web=DEBUG</li><li>logging.level.org.jooq=DEBUG</li><li>logging.level.\u5FFD\u7565\u7684\u5305\u8DEF\u5F84=OFF</li></ul><p>\u63A8\u8350\u4F7F\u7528<code>wings-starter.sh</code>\u542F\u52A8\uFF0C\u7528<code>wings-starter.env</code>\u8BBE\u7F6E\u57FA\u7840\u53C2\u6570\u3002</p><h2 id="_1a-6-\u52A8\u6001\u8C03\u8BD5" tabindex="-1"><a class="header-anchor" href="#_1a-6-\u52A8\u6001\u8C03\u8BD5" aria-hidden="true">#</a> 1A.6.\u52A8\u6001\u8C03\u8BD5</h2><p>\u6839\u636E\u4E1A\u52A1\u9700\u6C42\uFF0C\u6309\u7279\u5B9A\u6761\u4EF6\uFF0C\u89E6\u53D1\u7EBF\u7A0B\u7EA7\u7684\u65E5\u5FD7\u8F93\u51FA\u3002</p><ul><li>LoggerDebug - \u4EC5\u652F\u6301logback\uFF0C\u901A\u8FC7LogbackFilter\u5B8C\u6210</li><li>NowDebug - \u5168\u5C40\u6216\u7EBF\u7A0B\u7EA7\u8C03\u6574\u65F6\u95F4</li><li>StackDebug - \u5168\u5C40\u6216\u7EBF\u7A0B\u7EA7\u662F\u5426\u8F93\u51FAStack</li></ul><h2 id="_1a-7-\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#_1a-7-\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> 1A.7.\u53C2\u8003\u8D44\u6599</h2>',29),m={href:"https://docs.spring.io/spring-boot/docs/2.6.6/reference/htmlsingle/",target:"_blank",rel:"noopener noreferrer"},b=e("ul",null,[e("li",null,'"4.1.6. Application Events and Listeners"'),e("li",null,'"4.2. Externalized Configuration"'),e("li",null,'"9.2.3. Change the Location of External Properties of an Application"'),e("li",null,'"9.1.3. Customize the Environment or ApplicationContext Before It Starts"')],-1);function w(x,k){const i=r("ExternalLinkIcon");return d(),a("div",null,[p,e("p",null,[o("\u901A\u8FC7"),t,o("\u626B\u63CF"),g,o("\u4E2D"),f,o("\uFF0C\u89C4\u5219\u540C "),e("a",h,[o("features.external-config"),l(i)]),o(" \uFF0C\u548C\u914D\u7F6E\u6587\u4EF6\u6709\u5173\u7684"),u,o("\u5982\u4E0B\uFF0C\u5176\u540E\u8005\u4F18\u5148\u7EA7\u9AD8\uFF08\u4E3A\u4E0Espring\u6587\u6863\u53D9\u8FF0\u4E00\u81F4\uFF0C\u7A0B\u5E8F\u4E2D\u5012\u5E8F\u6267\u884C\uFF0CFIFO\u4F18\u5148\u7EA7\uFF09\u3002")]),_,e("p",null,[e("a",m,[o("\u53C2\u8003\u8D44\u6599 docs.spring.io"),l(i)])]),b])}const A=n(s,[["render",w],["__file","1a-wings-conf.html.vue"]]);export{A as default};
