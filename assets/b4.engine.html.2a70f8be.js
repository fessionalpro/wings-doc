import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as r,b as e,e as o,d,w as u,f as c,r as l}from"./app.9a05138f.js";const s={},p=c('<h1 id="b4-执行引擎" tabindex="-1"><a class="header-anchor" href="#b4-执行引擎" aria-hidden="true">#</a> B4.执行引擎</h1><p>其中各<code>引擎</code>的实现和执行上下文是不一样的，即变量作用域不一样，存在以下2个级别，</p><ul><li><code>session</code>级，一次merge内的多次eval，同一context，eval间有影响，如<code>js</code>。</li><li><code>nothing</code>级，每次eval的上下文无关联，eval间无影响，如<code>sh</code>依赖于bash设置。</li></ul><p>执行中的引擎环境，在每次eval时，可以被context覆盖，也可以不覆盖，依赖于引擎实现。</p><h2 id="b4-1-字典引擎map" tabindex="-1"><a class="header-anchor" href="#b4-1-字典引擎map" aria-hidden="true">#</a> B4.1.字典引擎<code>map</code></h2><p><code>session</code>级，每次eval共享context，context不覆盖引擎环境。</p><ul><li>以<code>功能体</code>为<code>参数</code>（<code>key</code>)，依次查找，找到<code>非null</code>即返回</li><li>顺序为context,System.property,System.env,Builtin</li><li><code>key</code>中不可包含管道符<code>|</code>，或使用<code>\\</code>转义</li><li><code>key</code>中的引号<code>&#39;&quot;</code>作为变量边界，或使用<code>\\</code>转义。</li><li>转义如<code>\\t</code>,<code>\\r</code>,<code>\\n</code>，此外仅保留<code>\\</code>后字符。</li></ul><h3 id="以句点分隔的导航类对象" tabindex="-1"><a class="header-anchor" href="#以句点分隔的导航类对象" aria-hidden="true">#</a> 以句点分隔的导航类对象</h3><p>支持简单的<code>导航类</code>对象，即key中以<code>.</code>分隔对象，会存在以下干扰情况，</p><ul><li>java的System中有大量<code>.</code>型变量，如<code>os.name</code>，<code>user.home</code></li><li>如果用户存有<code>os</code>或<code>user</code>，使用<code>.</code>导航，则会发生混乱</li></ul><p>因为有<code>.</code>分隔的字符串变量存在，所以在各实现引擎中对环境变量的使用，遵循以下规则。</p><p>存入（put）时，尽量保证读取时，以整key和对象导航方式都可正确读取。</p><ul><li>必须以整key存入。</li><li>可以<code>.</code>分隔，逐级存入分段的key（map引擎未实现）</li></ul><p>读取（get）时，优先使用整key读取，不存在则使用对象导航形式读取。</p><ul><li>以key直接查找，有<code>非null</code>值，则return</li><li>如key中存在<code>:</code>，以<code>:</code>分隔成<code>out</code>，<code>it</code>和<code>name</code></li><li>依次以<code>out</code>和<code>it</code>为对象key递归查找对象。 <ul><li>若为任意递归中返回null，则return<code>字符串空</code>。</li><li>若为Map类型，则以getKey的方式取值。</li><li>其他类型，通过反射取值，以Getter命名规则和Field查找。</li></ul></li><li>递归中的最终对象，以<code>name</code>为key取值（map或反射）</li></ul><h3 id="管道符链接函数-链式处理" tabindex="-1"><a class="header-anchor" href="#管道符链接函数-链式处理" aria-hidden="true">#</a> 管道符链接函数，链式处理</h3><p>可以用<code>|</code>分隔多个处理函数，第一个为key，其后的都是<code>函数</code>，格式下。</p><p><code>key</code> <code>|</code> <code>funA</code> <code>|</code> <code>funB arg1 &quot;arg 2&quot;</code></p><p>以上等同于调用链，<code>funB(ctx, funA(ctx.get(&quot;key&quot;)), &quot;arg1&quot;, &quot;arg 2&quot;)</code></p><ul><li><code>key</code> - 字符串key，可以是<code>.</code>的对象导航格式。 <ul><li>key对应的值可以是<code>Object</code>，<code>Supplier&lt;Object&gt;</code>或<code>fun arg</code>。</li></ul></li><li><code>fun</code> - 管道语法的第一个字符串 <ul><li>必须<code>Function</code>或<code>JavaEval</code>类型</li><li>函数名字，不用使用<code>.</code>，建议以<code>fun:</code>开头</li><li>Function.apply(obj)，obj为管道输出或<code>key</code>或<code>arg</code></li><li>JavaEval.eval(ctx, obj, arg...);</li></ul></li><li><code>arg</code> - 用户定义的变量，即管道语法的第二个参数起。 <ul><li>arg默认类型为字符串，可使用引号（<code>&quot;</code>或<code>&#39;</code>）括起来</li><li>若arg中需要保留空格，需要引号括起来，其内的引号用<code>\\</code>转义。</li><li>数值类型，可<code>,_</code>分隔数字，<code>^([-+])?([0-9_,.]+)([DFNL]?)$</code></li><li><code>1,000</code>,<code>1_0000</code>,<code>10,000.0</code>,<code>1_0000.00</code>（Integer和Float）</li><li>可分别使用后缀，表示具体类型BigDecimal(N)，Double(D), Float(F)，Long(L)</li><li><code>1,000.00D</code>,<code>1_0000.00F</code>,<code>1_0000N</code>,<code>1_0000L</code></li><li><code>TRUE</code>和<code>FALSE</code>表示boolean行，要表达字符串需要引号括起来</li><li>不支持科学记数法</li></ul></li></ul><p>函数，可以通过以下3中方式设置，</p><ul><li>RnaManager全局注册，如内置<code>变量</code>或方法</li><li>merger时存入context中注册，如java的lambda</li><li>可以通过<code>RNA:PUT</code>指令<code>fun</code>引擎，动态编译注册</li><li>注册的方法名，必须以<code>fun:</code>为前缀，以避免与其他变量冲突</li><li>使用时，<code>fun:</code>可以省略，也建议省略。</li></ul>',22),h=c('<h3 id="内置以下变量" tabindex="-1"><a class="header-anchor" href="#内置以下变量" aria-hidden="true">#</a> 内置以下变量</h3><p>米波内置了很少侧变量和方法，以下是java system.property和env的举例</p><ul><li><code>user.name</code> - String, 当前系统用户，java内置</li><li><code>user.dir</code> - String, 当前的工作目录，java内置</li></ul><p>以下是，内置日期和时间的变量</p><ul><li><code>now.date</code> - String:Supplier, 动态计算，系统日期 <code>yyyy-MM-dd</code></li><li><code>now.time</code> - String:Supplier, 动态计算，系统时间 <code>HH:mm:ss</code></li></ul><h2 id="b4-2-来啥回啥raw" tabindex="-1"><a class="header-anchor" href="#b4-2-来啥回啥raw" aria-hidden="true">#</a> B4.2.来啥回啥<code>raw</code></h2><p><code>nothing</code>级，直接把<code>功能体</code>当字符串返回，但mute时返回<code>字符串空</code>。</p><h2 id="b4-3-内容引入uri" tabindex="-1"><a class="header-anchor" href="#b4-3-内容引入uri" aria-hidden="true">#</a> B4.3.内容引入<code>uri</code></h2><p><code>nothing</code>级，把uri的内容以UTF8输出为字符串。首次读入，后续缓存。 注意，仅作为String类型，不会做任何解析和动态执行。</p><ul><li><code>http://</code>,<code>https://</code>时，以GET读取</li><li><code>file://</code>时，从file system读取</li><li><code>classpath:</code>时，从classloader读入，注意没有<code>//</code></li><li>其他，以URLConnection读取，超时为3秒</li><li>以<code>/</code>或<code>.</code>开头，在程序pwd为相对路径，但不建议使用。</li><li>读入的内容，会以uri为key，缓存到context中</li></ul><h2 id="b4-4-直接执行exe" tabindex="-1"><a class="header-anchor" href="#b4-4-直接执行exe" aria-hidden="true">#</a> B4.4.直接执行<code>exe</code></h2><p><code>nothing</code>级，解析引号块和转义，捕获std_out输出。 注意的是，每次eval时，engine会用context覆盖环境变量。</p><ul><li><code>exe</code> - 直接执行命令。</li><li><code>cmd</code> - 在window系，以<code>cmd /c</code>执行。</li><li><code>sh</code> - 在unx系，以<code>bash -c</code>执行。</li></ul><h2 id="b4-5-执行js脚本js" tabindex="-1"><a class="header-anchor" href="#b4-5-执行js脚本js" aria-hidden="true">#</a> B4.5.执行js脚本<code>js</code></h2><p><code>session</code>级，以java的ScriptEngine执行js脚本，捕获最后一个求值。 执行context，以<code>ctx</code>对象存在于js环境，可以通过<code>ctx.xxx</code>获得环境变量。</p><p>对于在context读入和写入<code>导航类</code>对象，参考map引擎的规则。</p><p><strong>注意：</strong> Java 15 removed Nashorn JavaScript Engine</p><h2 id="b4-6-动态java代码java" tabindex="-1"><a class="header-anchor" href="#b4-6-动态java代码java" aria-hidden="true">#</a> B4.6.动态java代码<code>java</code></h2><p><code>session</code>级，通过米波模板动态编译java代码，并以context为参加执行。</p>',19),v=e("li",null,[o("头部"),e("code",null,"import java.util.*,java.util.Map;"),o("，可以"),e("code",null,","),o("分隔多个")],-1),m=e("li",null,"简单方法体单行（java不能简单），复杂的多行，以增加可读性。",-1),f=e("li",null,[o("尾部以"),e("code",null,"return obj"),o("返回，"),e("code",null,";"),o("可以省略。")],-1),b={href:"https://github.com/trydofor/pro.fessional.meepo/tree/master/meepo/src/main/resources/pro/fessional/meepo/poof/impl/java/JavaName.java",target:"_blank",rel:"noopener noreferrer"},_=e("li",null,[o("编译的java实现了"),e("code",null,"pro.fessional.meepo.eval.JavaEval"),o("接口")],-1),x=e("li",null,[o("传入"),e("code",null,"RngContext ctx"),o("，可读取context")],-1),g=e("li",null,[o("已经import的class有， "),e("ul",null,[e("li",null,"org.jetbrains.annotations.NotNull;"),e("li",null,"pro.fessional.meepo.poof.impl.JavaEngine;"),e("li",null,"java.util.Map;")])],-1),j=c('<h2 id="b4-7-动态java函数fun" tabindex="-1"><a class="header-anchor" href="#b4-7-动态java函数fun" aria-hidden="true">#</a> B4.7.动态java函数<code>fun</code></h2><p>可以通过以下方式，灵活的将自定义java函数注册到模板引擎。但不建议在模板中使用函数，模板应该只负责显示。</p><ul><li>模板内动态编译java代码，并<code>PUT fun/</code>，供<code>USE</code>执行。</li><li>通过<code>RnaManager.register</code> 全局注册函数</li><li>在context的Map中，put以<code>fun:</code>前缀的java函数</li><li>运行时注册的函数，一般是Function或JavaEval类型的lambda，</li></ul>',3);function y(k,S){const a=l("RouterLink"),i=l("ExternalLinkIcon");return t(),r("div",null,[p,e("p",null,[o("内置函数列表，参考"),d(a,{to:"/b-meepo/b5.function.html"},{default:u(()=>[o("函数列表")]),_:1})]),h,e("ul",null,[v,m,f,e("li",null,[o("通过"),e("a",b,[o("Java模板"),d(i)]),o("动态编译java。")]),_,x,g]),j])}const N=n(s,[["render",y],["__file","b4.engine.html.vue"]]);export{N as default};
