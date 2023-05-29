import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as r,b as e,e as o,d as n,w as s,f as t}from"./app-76302e33.js";const u={},h=t('<h1 id="b4-execution-engine" tabindex="-1"><a class="header-anchor" href="#b4-execution-engine" aria-hidden="true">#</a> B4.Execution Engine</h1><p>The implementation and execution context of each <code>engine</code> is different, i.e. the scope of variables is different, and there are 2 levels, as follows</p><ul><li><code>session</code> level, multiple evals within a merge, in the same context, with influence on each other, e.g. <code>js</code>.</li><li><code>nothing</code> level, no context associated with each <code>eval</code>, no influence between evals, e.g. <code>sh</code> depends on bash settings.</li></ul><p>The executing engine environment, which may or may not be overwritten by the context at each <code>eval</code>, depends on the engine implementation.</p><h2 id="b4-1-dictionary-engine-map" tabindex="-1"><a class="header-anchor" href="#b4-1-dictionary-engine-map" aria-hidden="true">#</a> B4.1.Dictionary Engine <code>map</code></h2><p><code>session</code> level, each <code>eval</code> shares the context, and the context does not override the engine environment.</p><ul><li>Take <code>func</code> as <code>parameter</code> (<code>key</code>), look it up in order, find non-<code>null</code> and return</li><li>The order is context,System.property,System.env,Builtin</li><li><code>key</code> must not contain the pipe character <code>|</code>, or use the <code>\\</code> escape</li><li>Quotes <code>&#39;&quot;</code> in <code>key</code> are used as variable bounds, or escaped with <code>\\</code></li><li>Escapes like <code>\\t\\r\\n</code>, otherwise, just keep the char after <code>\\</code></li></ul><h3 id="period-separated-object-navigation" tabindex="-1"><a class="header-anchor" href="#period-separated-object-navigation" aria-hidden="true">#</a> Period Separated Object Navigation</h3><p>Support for simple object <code>navigation</code>, i.e., key separated by <code>.</code>, there will be interference cases as follows,</p><ul><li>The java <code>System</code> has many variables whose name contains <code>.</code> such as <code>os.name</code>, <code>user.home</code></li><li>If the user has <code>os</code> or <code>user</code>, and use <code>.</code> to navigate, there will be confusion</li></ul><p>Because of the <code>.</code> separated variable names, the use of environment variables in any engine implementation should follow the rules below.</p><p>During put, make sure the entire key and object navigation can be read correctly, eg.</p><ul><li>Must store the entire key.</li><li><code>.</code> separated key, store them split-by-split (<code>map</code> engine not implemented)</li></ul><p>During get/use, read entire key first, if not found, read the navigation split-by-split.</p><ul><li>If there is a non-<code>null</code> value by key, then return</li><li>If <code>:</code> exists in the key, such as <code>out:it:name</code> separate into <code>out</code>, <code>it</code> and <code>name</code></li><li>Find objects recursively with <code>out</code> and <code>it</code> as object keys <ul><li>If <code>null</code> is returned in any recursion, return <code>empty</code> string</li><li>If the object is Map, retrieve the value by getKey</li><li>Other types, retrieve by reflection, looked up Getter or Field</li></ul></li><li>The final object in the recursion, taking <code>name</code> as key (map or reflection)</li></ul><h3 id="pipelined-functions-chained-processing" tabindex="-1"><a class="header-anchor" href="#pipelined-functions-chained-processing" aria-hidden="true">#</a> Pipelined Functions, Chained Processing</h3><p>Multiple processing functions can be piped with <code>|</code>, where the first one is the key and all the subsequent are <code>function</code>, in the following format,</p><p><code>key</code> <code>|</code> <code>funA</code> <code>|</code> <code>funB arg1 &quot;arg 2&quot;</code></p><p>The above equals the chain call <code>funB(ctx, funA(ctx.get(&quot;key&quot;)), &quot;arg1&quot;, &quot;arg 2&quot;)</code></p><ul><li><code>key</code> - String key, can be in <code>.</code> seperated object navigation <ul><li>The value of the key can be <code>Object</code>, <code>Supplier&lt;Object&gt;</code> or <code>fun arg</code></li></ul></li><li><code>fun</code> - The first string of the pipeline syntax <ul><li>Must be <code>Function</code> or <code>JavaEval</code></li><li>function name should not use <code>.</code>, start with <code>fun:</code> recommended</li><li>Function.apply(obj), obj is the pipeline output or <code>key</code> or <code>arg</code></li><li>JavaEval.eval(ctx, obj, arg...);</li></ul></li><li><code>arg</code> - User-defined variables, from the second string of the pipeline syntax <ul><li>The default type of arg is a string. It can be enclosed in quotes (<code>&quot;</code> or <code>&#39;</code>)</li><li>If there are spaces in arg, they must be quoted, and the quotes inside can be escaped with <code>\\</code>.</li><li><code>,_</code> can separate number, <code>^([-+])?([0-9_,.]+)([DFNL]?)$</code></li><li><code>1,000</code>, <code>1_0000</code>, <code>10,000.0</code>, <code>1_0000.00</code> (Integer or Float)</li><li>Suffixes can indicate types BigDecimal(N), Double(D), Float(F), Long(L)</li><li><code>1,000.00D</code>,<code>1_0000.00F</code>,<code>1_0000N</code>,<code>1_0000L</code></li><li><code>TRUE</code> and <code>FALSE</code> are boolean type, a string type must be enclosed in quotes</li><li>Does not support scientific notation number</li></ul></li></ul><p>function can be set the following 3 ways,</p><ul><li>Register globally with RnaManager, see built-in <code>variable</code> or function</li><li>Register to the context when merging, such as the java lambda</li><li>Dynamically compile and register using the <code>RNA:PUT</code> and <code>fun</code> engine</li><li>The registered name must start with <code>fun:</code> to avoid conflicts with other namespaces</li><li>When used, <code>fun:</code> can be omitted (it is recommended)</li></ul>',22),p=t('<h3 id="built-in-variables-as-follows" tabindex="-1"><a class="header-anchor" href="#built-in-variables-as-follows" aria-hidden="true">#</a> Built-in Variables as Follows</h3><p>Meepo has few built-in variables and functions, examples of java system.property and env</p><ul><li><code>user.name</code> - String, current user, java built-in</li><li><code>user.dir</code> - String, current woring dir, java built-in</li></ul><p>Here are, the built-in date and time variables</p><ul><li><code>now.date</code> - String:Supplier, dynamic calculation, system date in <code>yyyy-MM-dd</code></li><li><code>now.time</code> - String:Supplier, dynamic calculation, system time in <code>HH:mm:ss</code></li></ul><h2 id="b4-2-output-the-input-raw" tabindex="-1"><a class="header-anchor" href="#b4-2-output-the-input-raw" aria-hidden="true">#</a> B4.2.Output the Input <code>raw</code></h2><p><code>nothing</code> level, return <code>func</code> as string directly, but return <code>empty</code> string when muted.</p><h2 id="b4-3-importing-content-uri" tabindex="-1"><a class="header-anchor" href="#b4-3-importing-content-uri" aria-hidden="true">#</a> B4.3.Importing Content <code>uri</code></h2><p><code>nothing</code> level, output the content form uri as a string in UTF8. read in then cache. Note: string type only, no parsing and dynamic execution.</p><ul><li><code>http://</code>,<code>https://</code>, read by GET request</li><li><code>file://</code>,<code>/</code>, read from file system</li><li><code>classpath:</code>, read from the classloader, Note no <code>//</code> here</li><li>Others, read by URLConnection with 3 second timeout</li><li>Starting with <code>/</code> or <code>.</code> means the relative path to app, but is not recommended.</li><li>The read content is cached in the context with uri as the key</li></ul><h2 id="b4-4-direct-execution-exe" tabindex="-1"><a class="header-anchor" href="#b4-4-direct-execution-exe" aria-hidden="true">#</a> B4.4.Direct Execution <code>exe</code></h2><p><code>nothing</code> level, parse quoted blocks or escapes, and capture std_out output. Note: The engine overwrite environment with eval context every time.</p><ul><li><code>exe</code> - Execute commands directly</li><li><code>cmd</code> - In window, execute using <code>cmd /c</code></li><li><code>sh</code> - In unix-like, execute using <code>bash -c</code></li></ul><h2 id="b4-5-execute-js-script-js" tabindex="-1"><a class="header-anchor" href="#b4-5-execute-js-script-js" aria-hidden="true">#</a> B4.5.Execute js Script <code>js</code></h2><p><code>session</code> level, run js scripts with java&#39;s ScriptEngine, capture the last evaluation result. Execute context is stored in js environment as <code>ctx</code> object, you can get <code>xxx</code> variables by <code>ctx.xxx</code> syntax.</p><p>For reading and writing <code>navigation</code> style objects in context, see to the rules of the map engine.</p><p><strong>Note:</strong> Java 15 removed Nashorn JavaScript Engine</p><h2 id="b4-6-dynamic-java-code-java" tabindex="-1"><a class="header-anchor" href="#b4-6-dynamic-java-code-java" aria-hidden="true">#</a> B4.6.Dynamic Java Code <code>java</code></h2><p><code>session</code> level, Meepo dynamically compiles and executes Java code with context as parameter.</p>',19),m=e("li",null,[o("import "),e("code",null,","),o(" separated classes at head, eg. "),e("code",null,"import java.util.*,java.util.Map;")],-1),f=e("li",null,"Simple code use single line (java not simple), complex code use multi lines for readability",-1),b=e("li",null,[e("code",null,"return obj"),o(" at the end, and "),e("code",null,";"),o(" can be omitted")],-1),g={href:"https://github.com/trydofor/pro.fessional.meepo/tree/master/meepo/src/main/resources/pro/fessional/meepo/poof/impl/java/JavaName.java",target:"_blank",rel:"noopener noreferrer"},v=e("li",null,[o("The compiled java implements the "),e("code",null,"pro.professional.meepo.eval.JavaEval"),o(" interface")],-1),y=e("li",null,"Pass `RngContext ctx' for context reading",-1),x=e("li",null,[o("the following classes are already imported "),e("ul",null,[e("li",null,"org.jetbrains.annotations.NotNull;"),e("li",null,"pro.fessional.meepo.poof.impl.JavaEngine;"),e("li",null,"java.util.Map;")])],-1),w=t('<h2 id="b4-7-dynamic-java-function-fun" tabindex="-1"><a class="header-anchor" href="#b4-7-dynamic-java-function-fun" aria-hidden="true">#</a> B4.7.Dynamic Java Function <code>fun</code></h2><p>Custom Java functions can be flexibly registered into the template engine as the follows. However, it is not recommended to use complex logic functions in templates because the templates are intended for display only.</p><ul><li>Use <code>PUT fun/</code> to dynamically compile the java code inside the template, then <code>USE</code> can execute that function.</li><li>Register global function via <code>RnaManager.register</code></li><li>In the context (the Map), put the java function prefixed with <code>fun:</code></li><li>A function registered at runtime, typically a lambda of type Function or JavaEval</li></ul>',3);function j(_,k){const a=i("RouterLink"),c=i("ExternalLinkIcon");return l(),r("div",null,[h,e("p",null,[o("For a list of built-in functions, see "),n(a,{to:"/en/b-meepo/b5.function.html"},{default:s(()=>[o("Function List")]),_:1})]),p,e("ul",null,[m,f,b,e("li",null,[o("Dynamic compilation of Java via "),e("a",g,[o("Java Template"),n(c)])]),v,y,x]),w])}const T=d(u,[["render",j],["__file","b4.engine.html.vue"]]);export{T as default};
