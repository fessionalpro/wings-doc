import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c as r,b as e,e as n,d as i,f as a}from"./app-371aab79.js";const c={},d=a(`<h1 id="_0c-dev-tool" tabindex="-1"><a class="header-anchor" href="#_0c-dev-tool" aria-hidden="true">#</a> 0C.Dev Tool</h1><p>The recommended tools and configs for the efficient work.</p><h2 id="_0c-1-java-development" tabindex="-1"><a class="header-anchor" href="#_0c-1-java-development" aria-hidden="true">#</a> 0C.1.Java Development</h2><p>Use <code>IntelliJIdea</code> as <code>IDE</code> with <code>code style</code> and <code>live templates</code>,</p><ul><li><code>wings-idea-style.xml</code> imports in <code>Setting/Editor/Code Style</code>.</li><li><code>wings-idea-live.xml</code> place manually in <code>$config/templates/</code>, or create it if not found.</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> wings
<span class="token assign-left variable">id_config</span><span class="token operator">=~</span>/Library/ApplicationSupport/JetBrains/IntelliJIdea2021.1
<span class="token comment"># Backup by copying</span>
<span class="token function">cat</span> <span class="token variable">$id_config</span>/templates/wings.xml <span class="token operator">&gt;</span> wings-idea-live.xml
<span class="token function">cat</span> <span class="token variable">$id_config</span>/codestyles/Wings-Idea.xml <span class="token operator">&gt;</span> wings-idea-style.xml
<span class="token comment"># Restore by copying</span>
<span class="token function">cat</span> wings-idea-live.xml  <span class="token operator">&gt;</span> <span class="token variable">$id_config</span>/templates/wings.xml
<span class="token function">cat</span> wings-idea-style.xml <span class="token operator">&gt;</span> <span class="token variable">$id_config</span>/codestyles/Wings-Idea.xml
<span class="token comment"># Re-import the project, clear the idea configuration</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;*.iml&#39;</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;.idea&#39;</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">&#39;\\n&#39;</span> <span class="token string">&#39;\\0&#39;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-0</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The use of the live-template has 2 types, Insert and Surround, corresponding to insert and edit, and generally when selecting text <code>Surround... ⌥⌘J</code>, when no selected text, use <code>Insert... ⌘J</code></p><ul><li>WIN <code>%HOMEPATH%\\.IntelliJIdea2019.2\\config</code></li><li>LIN <code>~/.IntelliJIdea2019.2/config</code></li><li>MAC <code>~/Library/Preferences/IntelliJIdea2019.2</code></li><li>MAC <code>~/Library/ApplicationSupport/JetBrains/IntelliJIdea2021.1</code></li></ul><p>References</p>`,9),p={href:"https://www.jetbrains.com/help/idea/sharing-live-templates.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.jetbrains.com/help/idea/tuning-the-ide.html#default-dirs",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.jetbrains.com/help/idea/2019.3/tuning-the-ide.html#default-dirs",target:"_blank",rel:"noopener noreferrer"},u=a(`<p>Useful plug-ins</p><ul><li>.ignore - ignore file in versioning</li><li>Any2dto - jooq, sql generate dto, reduce copy and assignment</li><li>CheckStyle - code quality</li><li>Comments Highlighter - highlighting in comments</li><li>GenerateAllSetter - alt-enter generates all po.setXxx(&quot;&quot;)</li><li>Git Flow Integration - integrates with git-flow</li><li>GitToolBox - automatic fetch</li><li>Git Commit Guide - gitmoji.dev helper</li><li>Grep Console - Console logs are color-coded and filtered</li><li>Indent Rainbow - makes indentation colorful</li><li>kotlin - installed by default</li><li>lombok - IntelliJ Lombok plugin</li><li>MapStruct Support - Static strong typed DTO conversion to reduce copying and assignment</li><li>Maven Helper - Helps manage maven</li><li>Maven Dependency Checker - check latest version of deps</li><li>Quick File Preview - Quick file preview with one click</li><li>Rainbow Brackets - Colorful brackets</li><li>Request mapper - Quickly find mapping</li><li>Statistic - count your code</li><li>String Manipulation - Various operations and conversions on strings</li><li>HTTP Client - official support for the <code>*.http</code> file format</li></ul><h2 id="_0c-2-kotlin-development" tabindex="-1"><a class="header-anchor" href="#_0c-2-kotlin-development" aria-hidden="true">#</a> 0C.2.Kotlin Development</h2><p>Wings supports mixed java and kotlin development, but prefers to write java in order to avoid too much syntax sugar and flexibility. Therefore, the project is compiled for java by default, and kotlin compilation can be enabled by one of the following conditions.</p><ul><li>Automatic activation - activate respectively when <code>src/test/kotlin</code> or <code>src/main/kotlin</code> exists</li><li>Manual activation - specify <code>wings-kotlin-1test</code> or <code>wings-kotlin-2main</code></li><li>Note the order, must be test before main, as shown in the numbers. Since maven does not support multi-conditional activation, see MNG-5909</li></ul><p>When profile is activated, <code>wings-kotlin-scope</code> property is generated, configure dep&#39;s scope as compile/test, To check if kotlin is activated in the current project, go to the project directory and execute the mvn command.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Auto active</span>
mvn help:active-profiles
<span class="token comment"># Manual active, comma separated, no whitespace</span>
mvn help:active-profiles <span class="token parameter variable">-P</span> wings-kotlin-1test,wings-kotlin-2main
<span class="token comment"># check final pom.xml</span>
mvn help:effective-pom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_0c-3-sql-utility" tabindex="-1"><a class="header-anchor" href="#_0c-3-sql-utility" aria-hidden="true">#</a> 0C.3.SQL Utility</h2>`,8),f={href:"https://www.mysql.com/products/workbench/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://dbeaver.io",target:"_blank",rel:"noopener noreferrer"},v=e("li",null,"DataGrid - Support for color markup, data-first scenarios such as query, partial export, etc.",-1),b=e("h2",{id:"_0c-4-text-editor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_0c-4-text-editor","aria-hidden":"true"},"#"),n(" 0C.4.Text Editor")],-1),k=e("ul",null,[e("li",null,"VsCode - frontend, markdown, etc., not suitable for large files"),e("li",null,"Sublime - Text Processing")],-1),w=e("h2",{id:"_0c-5-http-testing",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_0c-5-http-testing","aria-hidden":"true"},"#"),n(" 0C.5.Http Testing")],-1),_=e("p",null,[n("It is recommended to create "),e("code",null,"*.http"),n(" supported by IDEA to descript and test web interface under each project test, the official documentation is as follows,")],-1),y={href:"https://www.jetbrains.com/help/idea/http-client-in-product-code-editor.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.jetbrains.com/help/idea/exploring-http-syntax.html",target:"_blank",rel:"noopener noreferrer"},j={href:"https://www.jetbrains.com/help/idea/http-response-handling-api-reference.html",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.jetbrains.com/help/idea/http-client-reference.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.jetbrains.com/help/idea/http-response-reference.html",target:"_blank",rel:"noopener noreferrer"},C=e("p",null,"Suggestions for use are as follows,",-1),T=a("<li>When using <code>*.http</code>, usually grab the cURL command from chrome and copy it</li><li>Variable <code>{{variable_name}}</code>, from <code>http-client*.env.json</code>, <code>client.global.</code> or the system&#39;s builtin</li><li>Process the Response. prepend it with <code>&gt;</code> and enclose it in <code>{%</code> and <code>%}</code></li><li>Fold long requests into multiple short lines. Indent all query string lines but the first one</li><li>HTTP Response Handler handle 2 objects: client and response</li>",5),q={href:"https://www.jetbrains.com/help/idea/http-response-handling-examples.html",target:"_blank",rel:"noopener noreferrer"};function D(J,A){const t=l("ExternalLinkIcon");return o(),r("div",null,[d,e("ul",null,[e("li",null,[e("a",p,[n("sharing-live-templates"),i(t)])]),e("li",null,[e("a",h,[n("2020.1 and above versions"),i(t)])]),e("li",null,[e("a",m,[n("2019.3.x and below versions"),i(t)])])]),u,e("ul",null,[e("li",null,[e("a",f,[n("Mysql Workbench"),i(t)]),n(" - SQL-first scenarios, such as DDL, Admin, permissions, etc.")]),e("li",null,[e("a",g,[n("DBeaver"),i(t)]),n(" - Support for color markup, eclipse style")]),v]),b,k,w,_,e("ul",null,[e("li",null,[e("a",y,[n("https://www.jetbrains.com/help/idea/http-client-in-product-code-editor.html"),i(t)])]),e("li",null,[e("a",x,[n("https://www.jetbrains.com/help/idea/exploring-http-syntax.html"),i(t)])]),e("li",null,[e("a",j,[n("https://www.jetbrains.com/help/idea/http-response-handling-api-reference.html"),i(t)])]),e("li",null,[e("a",I,[n("https://www.jetbrains.com/help/idea/http-client-reference.html"),i(t)])]),e("li",null,[e("a",S,[n("https://www.jetbrains.com/help/idea/http-response-reference.html"),i(t)])])]),C,e("ul",null,[T,e("li",null,[e("a",q,[n("https://www.jetbrains.com/help/idea/http-response-handling-examples.html"),i(t)])])])])}const B=s(c,[["render",D],["__file","0c-dev-tool.html.vue"]]);export{B as default};