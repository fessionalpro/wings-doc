import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as o,f as a}from"./app.9a05138f.js";const c={},s=a(`<h1 id="b3-语法概要" tabindex="-1"><a class="header-anchor" href="#b3-语法概要" aria-hidden="true">#</a> B3.语法概要</h1><p>在使用模板的场景中，特别希望<code>模板语法</code>不要破坏<code>目标文件</code>的语法，两者无入侵的共存， 如用velocity生成java时，希望模板，同时受velocity和java语法检查和加持。 如生成html时，也希望模板能够不破坏html语法，能够直接在浏览器中预览。</p><ul><li><code>模板语法</code> - 底层模板的语法，如 FreeMarker, Velocity</li><li><code>目标语法</code> - <code>母版语法</code>，有自己语法的目标文件，如java，html</li><li><code>米波语法</code> - 利用母版语法的注释，做的简单标记指令，完成翻译</li><li>文字语序均为从左至右，不支持从右至左语言。</li></ul><p>在<code>母版</code>中通过<code>注释</code>做语法标记，逐行处理规则替换，以输出<code>底层模板(backend)</code>。 母版的处理分为<code>解析parse</code>和<code>合并merge</code>两个过程，解析时的查找依赖正则表达式。 合并时，除了部分<code>RNA</code>外，都是直接输出，效能等于<code>StringBuilder.append</code>。</p><p>在RNA中没有复杂的<code>流程控制</code>及<code>执行函数</code>的功能，所以一次<code>解析</code>后，后续<code>合并</code>非常高效，</p><ul><li>没有<code>RNA</code>时，相当于幂等操作的静态字符串，仅merge一次，后续直接使用。</li><li><code>RNA</code>依赖于<code>执行引擎</code>，除动态语言外，相当于<code>Map</code>+<code>StringBuilder</code></li><li><code>java</code>执行引擎，动态编译成字节码，首次编译后等于原生java class</li><li><code>StringBuilder</code>预先计算长度，以避免过程中扩容复制。</li></ul><h2 id="b3-1-模板特性" tabindex="-1"><a class="header-anchor" href="#b3-1-模板特性" aria-hidden="true">#</a> B3.1.模板特性</h2><p>米波模板语法中，存在以下基础语素和约定。</p><ul><li><code>空白</code> - 一个<code>0x20</code>或<code>0x09</code>，即英文空格或<code>\\t</code></li><li><code>英数</code> - <code>[a-zA-z0-9]</code>，英文字母和数字，区分大小写</li><li><code>母版注释</code> - 母版语言的注释，如,<code>//</code>，<code>/*</code>和<code>*/</code></li><li><code>指令</code> - 米波语法中特殊意义的特征标记，如前缀</li><li><code>DNA</code> - Defined Native Annotation</li><li><code>RNA</code> - Runnable Native Annotation</li><li><code>?+*</code> - 分别为<code>[0,1]</code>，<code>[1,∞)</code>，<code>[0,∞)</code></li><li><code>指令行</code> - 米波指令所在行，只被<code>米波</code>解析，merge后不可见</li><li><code>行</code> - 指<code>[^\\n]\\n</code>或<code>[^\\n]$</code>两者格式。</li></ul><p>为了简化，后续举例中，省略领起<code>指令</code>的<code>母版注释</code>+<code>空白</code></p><ul><li><code>HI-MEEPO</code> 嗨！米波，用来定义<code>母版注释</code>，以便后续解析</li><li><code>DNA:SET</code> 设定替换，在一个范围内定义一个模板替换。</li><li><code>DNA:END</code> 结束作用，结束多个<code>作用</code>的作用域。</li><li><code>DNA:BKB</code> 免疫区域，被<code>END</code>之前的区域不进行解析。</li><li><code>DNA:RAW</code> 原生模板，执行后面的原生模板语法。</li><li><code>DNA:SON</code> 子模板，可以在解析时引入其他魔板，作为组件使用。</li><li><code>RNA:PUT</code> 存入变量，使用引擎运行<code>执行体</code>，结果存入环境。</li><li><code>RNA:USE</code> 使用变量，使用环境变量，内置或<code>PUT</code>的变量。</li><li><code>RNA:RUN</code> 每次执行，每次都会执行功能体，比如计数器。</li><li><code>RNA:WHEN</code> 条件执行，组合成if-elseif-else逻辑块。</li><li><code>RNA:EACH</code> 循环执行，应用于数组或集合，循环输出。</li><li><code>RNA:ELSE</code> 否则条件，对<code>WHEN</code>和<code>EACH</code>执行否则分支。</li><li><code>RNA:DONE</code> 结束执行，结束<code>WHEN</code>和<code>EACH</code>的作用域。</li></ul><p>在处理<code>行符</code>时，以<code>\\n</code>断行，window的<code>\\r\\n</code>也做<code>\\n</code>处理。 单行注释型，若结尾有<code>\\n</code>，会作为语法的结束符，即合并时不会输出。</p><p>因为解析时使用了java的RegExp作为底层实现，所以需要一定的基础。</p><ul><li>查找中，常误用字符有<code>.^$?+*{}()[]\\|</code>。<code>[]</code>内字符有些不用转义。</li><li>替换中，<code>\\</code>主要用作<code>反向引用</code>，部分<code>()</code>组合有特殊含义。</li></ul><p>正则的compile选项是<code>UNIX_LINES</code>和<code>MULTILINE</code>，通过<code>embedded flag</code>设定</p><ul><li><code>(?idmsuxU-idmsuxU)</code> Nothing, but turns match <code>flags</code> on - off</li><li><code>(?idmsux-idmsux:X)</code> X, as a non-capturing group with the given <code>flags</code> on - off</li><li>i Pattern.CASE_INSENSITIVE 不区分大小写，默认关闭</li><li>d Pattern.UNIX_LINES 只有<code>\\n</code>作为<code>行符</code>，默认开启</li><li>m Pattern.MULTILINE <code>^</code>和<code>$</code>会匹配<code>行符</code>，默认开启</li><li>s Pattern.DOTTAL <code>.</code>匹配<code>行符</code>，默认关闭</li><li>u Pattern.UNICODE_CASE 如全角字母的大小写，默认关闭</li><li>x Pattern.COMMENTS 忽略空白，支持行注释，默认关闭</li><li>U Pattern.UNICODE_CHARACTER_CLASS，默认关闭</li></ul><h2 id="b3-2-hi-meepo-嗨-米波" tabindex="-1"><a class="header-anchor" href="#b3-2-hi-meepo-嗨-米波" aria-hidden="true">#</a> B3.2.HI-MEEPO 嗨，米波</h2><p>语法：<code>注释头</code> <code>空白</code>+ <code>HI-MEEPO</code> <code>!</code>? <code>空白</code>+ <code>注释尾</code>?</p><p>定义<code>注释</code>并标识此文件为<code>米波</code>模板，以解析其后续<code>母版</code>。</p><ul><li><code>注释头</code> - 单行注释或多行注释的首部，前一个非<code>空白</code>字符串</li><li><code>HI-MEEPO</code> - 这么怪的名字(hi meepo)，主要是避免重复和转义。</li><li><code>!</code> - 如果存在<code>!</code>，表示保留指令前后的<code>空白</code>，后详述。</li><li><code>注释尾</code> - 多行注释的结尾，后一个非<code>空白</code>字符串</li></ul><p><code>嗨！米波</code>必须独占一行，最好有<code>空白</code>分割，以便阅读时清晰。 类似sql的<code>DELIMITER</code>定义结束符的用法和作用，举例如下，</p><ul><li>java - <code>// HI-MEEPO</code>，以<code>//</code>为注释</li><li>java - <code>/* HI-MEEPO */</code>，又以<code>/*</code>和<code>*/</code>为注释</li><li>sql - <code>-- HI-MEEPO</code>，以<code>--</code>为注释</li><li>bash - <code># HI-MEEPO</code>，以<code>#</code>为注释</li><li>html = <code>&lt;!-- HI-MEEPO --&gt;</code></li></ul><p>注意，<code>注释头</code>存在尾字符叠字的情况，米波只处理同字符的叠字，举例如下，</p><ul><li><code>/*</code> - <code>/***** DNA:RAW</code>，无效，不处理</li><li><code>//</code> - <code>////// DNA:RAW</code>，处理叠字</li><li><code>#</code> - <code>##### DNA:RAW</code>，处理叠字</li></ul><p>对于后续文本（DNA和RNA）的解析，存在行解析和块解析2种，规则如下</p><ul><li><code>HI-MEEPO</code> 始终是行解析，必须独占一行。</li><li><code>单行注释</code>型米波，会按行解析，按行解析。</li><li><code>多行注释</code>型米波，会跨行读取，按块解析。</li><li>因非按行解析，故正则匹配时<code>^</code>和<code>$</code>不定未行首和行尾。</li></ul><p>关于<code>HI-MEEPO!</code>和<code>HI-MEEPO</code>处理指令行的首位<code>空白</code>存在以下规则。</p><ul><li>无<code>!</code>，并且指令独占一行，输出时忽略本行，即指令行后的第一个<code>\\n</code>。</li><li>有<code>!</code>时，只处理米波头尾直接的指令，前后空白保留。</li><li><code>DNA:RAW</code>比较特殊，无视<code>!</code>设置，保留指令外，移除指令内的首位空白。</li><li><code>@&lt;!--_DNA:RAW_SUPER_--&gt;@</code>中<code>@</code>和<code>_</code>分别标识保留和移除的空白。</li></ul><p>后续举例中，都以<code>// HI-MEEPO</code> 为例，但省略书写。</p><h2 id="b3-3-厂长dna-静态替换" tabindex="-1"><a class="header-anchor" href="#b3-3-厂长dna-静态替换" aria-hidden="true">#</a> B3.3.厂长DNA，静态替换</h2><p>DNA好比一个厂长，定义替换指令，在parse时，进行高效的静态文本替换。</p><h2 id="b3-4-dna-set-设定替换" tabindex="-1"><a class="header-anchor" href="#b3-4-dna-set-设定替换" aria-hidden="true">#</a> B3.4.DNA:SET 设定替换</h2><p>语法：<code>DNA:SET</code> <code>空白</code>+ <code>界定</code> <code>查找</code> <code>界定</code> <code>替换</code> <code>界定</code> <code>作用</code>?</p><p>在一定作用域内，把符合特征的字符串替换成底层模板的字符串。其中，</p><ul><li><code>界定</code> - 第1个非(<code>空白</code>,<code>!</code>,<code>英数</code>)1-2字节的char，常用的如<code>/</code>，汉字。</li><li><code>查找</code> - 不含<code>界定</code>的正则特征，存在分组时参考<code>分组引用</code>。</li><li><code>查找</code>为空时，忽略此<code>SET</code>。</li><li><code>替换</code> - 不含<code>界定</code>的正则特征，存在引用时参考<code>分组引用</code>。</li><li><code>替换</code>为空时，表示删除，即替换成空。</li><li><code>作用</code> - 生效的作用次数，即到何时结束作用，非<code>空白</code>。</li></ul><p><code>分组引用</code>指查找时有<code>()</code>的group或替换时使用<code>\\1</code>的反向引用的情况。 这会对特征字符串的边界有影响，也要避开书写复杂的表达式，约定规则如下，</p><ul><li>如果<code>查找</code>中无group，在使用group(0)，即全部匹配。</li><li>如果<code>查找</code>有group时，取第一个<code>(</code>，即group(1)内容。</li><li>如<code>((A)(B(C)))</code>，按<code>(</code>从左到右出现的顺序计数。 <ul><li>group(1) - ((A)(B(C)))</li><li>group(2) - (A)</li><li>group(3) - (B(C))</li><li>group(4) - (C)</li></ul></li></ul><p><code>作用</code>即<code>作用次数</code>或<code>作用域</code>，默认作用<code>1</code>次，<code>*</code>表示<code>匿名</code>的无限次。</p><ul><li><code>次数</code>，以<code>,</code>分隔的单次或<code>-</code>连接的闭区间，如<code>1-3,15</code>。</li><li><code>命名</code>的无限次作用，可被<code>END</code>结束。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// DNA:SET /false/{{user.male}}/</span>
<span class="token keyword">var</span> isMale <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token comment">/* 只把此行的false替换为user.male模板变量。底层模板输出为:
var isMale = {{user.male}};
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="b3-5-dna-end-结束作用" tabindex="-1"><a class="header-anchor" href="#b3-5-dna-end-结束作用" aria-hidden="true">#</a> B3.5.DNA:END 结束作用</h2><p>语法：<code>DNA:END</code> (<code>空白</code>+ <code>作用</code>)+</p><p>结束多个指令产生的<code>作用</code>的作用域，如<code>SET</code>的命名作用域。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// DNA:SET /1010100/{{id}}/id</span>
<span class="token comment">// DNA:SET /&quot;(性别)&quot;/{{desc}}/1</span>
<span class="token comment">// DNA:SET /性别/{{info}}/2</span>
<span class="token constant">SUPER</span><span class="token punctuation">(</span><span class="token number">1010100</span><span class="token punctuation">,</span> <span class="token string">&quot;ConstantEnumTemplate&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;性别&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;性别&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// DNA:END id</span>
<span class="token comment">/* 分别定义，命名的id；group(1)的desc；第2次匹配的info。底层模板输出为:
SUPER({{id}}, &quot;ConstantEnumTemplate&quot;, &quot;{{desc}}&quot;, &quot;{{info}}&quot;)
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="b3-6-dna-bkb-免疫区域" tabindex="-1"><a class="header-anchor" href="#b3-6-dna-bkb-免疫区域" aria-hidden="true">#</a> B3.6.DNA:BKB 免疫区域</h2><p>语法：<code>DNA:BKB</code> <code>空白</code>+ <code>作用</code></p><p>定义一个<code>命名</code>的全局免疫作用，可以被<code>END</code>结束，之间的文本和指令不会被处理。</p><ul><li>文本 - 任何非米波指令格式的文本</li><li>指令 - 除了当前生效的BKB对应的END外，都视为文本处理。</li><li>当前只能有一个生效的BKB</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// DNA:BKB 黑皇杖</span>
<span class="token comment">// DNA:SET /&quot;(性别)&quot;/desc/1</span>
<span class="token constant">SUPER</span><span class="token punctuation">(</span><span class="token number">1010100</span><span class="token punctuation">,</span> <span class="token string">&quot;ConstantEnumTemplate&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;性别&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;性别&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// DNA:END 黑皇杖</span>
<span class="token comment">/* 无视了SET指令，底层模板输出为:
// DNA:SET /&quot;(性别)&quot;/desc/1
SUPER(1010100, &quot;ConstantEnumTemplate&quot;, &quot;性别&quot;, &quot;性别&quot;)
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="b3-7-dna-raw-原生模板" tabindex="-1"><a class="header-anchor" href="#b3-7-dna-raw-原生模板" aria-hidden="true">#</a> B3.7.DNA:RAW 原生模板</h2><p>语法：<code>DNA:RAW</code> <code>空白</code>+ <code>原生模板</code></p><p>用注释的语法定义一个<code>模板</code>，用以弥补<code>母版</code>语法不支持的情况。 使用单行注释表意清晰，多行注释时，只保留头尾直接的内容。 效果是，删除<code>注释头</code>,<code>DNA:RAW</code> 和<code>注释尾</code>及之间的<code>空白</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* 以下两行具有相同的输出效果，即删除了\`// DNA:RAW \` */</span>
<span class="token constant">SUPER</span><span class="token punctuation">(</span><span class="token number">1010100</span><span class="token punctuation">,</span> <span class="token string">&quot;ConstantEnumTemplate&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;性别&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;性别&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// DNA:RAW SUPER(1010100, &quot;ConstantEnumTemplate&quot;, &quot;性别&quot;, &quot;性别&quot;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="b3-8-dna-son-子模板" tabindex="-1"><a class="header-anchor" href="#b3-8-dna-son-子模板" aria-hidden="true">#</a> B3.8.DNA:SON 子模板</h2><p>语法：<code>DNA:SON</code> <code>空白</code>+ <code>路径</code></p><p>把路径资源以UTF8读取，并在当前位置展开，作为模板解析。 路径可包含协议部分，默认classpath。仅支持一下协议。</p><ul><li><code>http://</code>,<code>https://</code>时，以GET读取</li><li><code>file://</code>,<code>/</code>时，从file system读取</li><li><code>classpath:</code>时，从classloader读入，注意没有<code>//</code></li><li>以<code>/</code>或<code>.</code>开头，在以父模板起相对路径，但不建议使用。</li></ul><p>需要注意，子模板需要单独声明<code>HI-MEEPO</code>，属于静态解析， 在独立的context中解析，之后并入到当前的父模板中。</p><h2 id="b3-9-主任rna-动态执行" tabindex="-1"><a class="header-anchor" href="#b3-9-主任rna-动态执行" aria-hidden="true">#</a> B3.9.主任RNA，动态执行</h2><p>RNA好比车间主任，定义执行指令，在merge时调用<code>执行引擎</code>，用其结果做替换。</p><ul><li>一个<code>执行引擎</code>可以执行多种<code>类型</code>的<code>功能体</code>，一种类型简称一个<code>引擎</code>。</li><li><code>引擎</code>的命名，必须为<code>英数</code>，区分大小写，如<code>js</code>。</li><li>命名可以用<code>!</code>结尾，如<code>js!</code>，执行时错误继续进行，返回<code>null</code></li><li>执行结果为<code>null</code>时，在模板合并时会使用<code>字符串空</code>代替。</li></ul><p>RNA中默认的<code>引擎</code>默认为<code>map</code>。用户可以通过RnaManager注册引擎，后详述。</p><ul><li><code>map</code> - <code>session</code>级，以<code>功能体</code>为key，到<code>环境</code>中取值，没有则输出key。</li><li><code>raw</code> - <code>nothing</code>级，直接把<code>功能体</code>当字符串返回，不会展开转义字符。</li></ul><p>米波在多行注释时，使用多行的块解析，所以<code>功能体</code>天然支持多行，提高可读性。</p><h2 id="b3-a-rna-use-使用变量" tabindex="-1"><a class="header-anchor" href="#b3-a-rna-use-使用变量" aria-hidden="true">#</a> B3.A.RNA:USE 使用变量</h2><p>语法：<code>RNA:USE</code> <code>空白</code>+ <code>界定</code> <code>查找</code> <code>界定</code> <code>变量</code> <code>界定</code> <code>作用</code>?</p><p><code>SET</code>的<code>RNA</code>版本，区别在于从<code>map</code>引擎中取得<code>变量</code>值，而非底层模板的字面量替换。 变量获取规则（如，导航类对象，管道处理函数），详见map引擎说明。</p><p>在<code>变量</code>合并时，会根据<code>变量值</code>的类型进行自动<code>多段缩排</code>支持，同时满足，</p><ul><li><code>被查找</code>的字符串前有缩排的空白。</li><li><code>变量值</code>是Array和Collection时，其内条目数大于1个。</li></ul><p>对2个起的元素进行缩进，和第1个元素列对齐。缩排后会出现不智能的情况，影响了美观。</p><ul><li>缩排的对象，没有<code>\\n</code>结尾，不换行，出现斑马线效果。</li><li>未缩排对象，包含<code>\\n</code>，换行了，出现呲牙的效果。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// DNA:USE /meepo/user.home/</span>
<span class="token keyword">var</span> userHome <span class="token operator">=</span> <span class="token string">&quot;meepo&quot;</span><span class="token punctuation">;</span>
<span class="token comment">/* 读取System.getProperty(&quot;user.home&quot;)。底层模板输出为:
var userHome = &quot;/home/trydofor&quot;;
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="b3-b-rna-put-存入变量" tabindex="-1"><a class="header-anchor" href="#b3-b-rna-put-存入变量" aria-hidden="true">#</a> B3.B.RNA:PUT 存入变量</h2><p>语法：<code>RNA:PUT</code> <code>空白</code>+ <code>引擎</code>? <code>界定</code> <code>变量</code> <code>界定</code> <code>功能体</code> <code>界定</code></p><p>指定<code>引擎</code>执行<code>功能体</code>，把<code>函数</code>或<code>执行结果</code>存入<code>环境</code>（参加map引擎），以便其他<code>RNA</code>取值。</p><ul><li><code>环境</code>指米波context和部分脚本引擎上下文。</li><li><code>引擎</code>，参考引擎说明。</li><li><code>界定</code>同<code>SET</code>。</li><li><code>变量</code>指存入上下文的变量，非母版字面量。</li><li><code>功能体</code>由具体的执行引擎执行，如spring，则可当做SpEL执行。</li><li><code>变量</code>或<code>功能体</code>为空时，不进行任何操作。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// DNA:PUT os/who/basename $(pwd)/</span>
<span class="token comment">/* 把\`basename $(pwd)\`的输出，以\`who\`为key存入context中 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="b3-c-rna-run-每次执行" tabindex="-1"><a class="header-anchor" href="#b3-c-rna-run-每次执行" aria-hidden="true">#</a> B3.C.RNA:RUN 每次执行</h2><p>语法：<code>RNA:RUN</code> <code>空白</code>+ <code>引擎</code>? <code>界定</code> <code>查找</code> <code>界定</code> <code>功能体</code> <code>界定</code> <code>作用</code>?</p><p><code>PUT</code>和<code>USE</code>的结合体，同样支持缩排，区别在于，</p><ul><li><code>查找</code>为空时，表示仅执行，不替换</li><li><code>功能体</code>执行结果立即使用，不存入<code>变量</code></li><li>每次都执行，类似计数器功能，每次调用都会自增，无缓存。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// DNA:RUN os/rand/echo $RANDOM/1-3</span>
<span class="token keyword">var</span> userName <span class="token operator">=</span> <span class="token string">&quot;meepo-rand&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> userPass <span class="token operator">=</span> <span class="token string">&quot;rand-rand&quot;</span><span class="token punctuation">;</span>
<span class="token comment">/* 每次都获得随机数，输出3次。底层模板输出为:
var userName = &quot;meepo-12599&quot;;
var userPass = &quot;16345-31415&quot;;
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="b3-d-rna-when-条件执行" tabindex="-1"><a class="header-anchor" href="#b3-d-rna-when-条件执行" aria-hidden="true">#</a> B3.D.RNA:WHEN 条件执行</h2><p>语法：<code>RNA:WHEN</code> <code>空白</code>+ <code>引擎</code>? <code>界定</code> <code>真假</code> <code>界定</code> <code>功能体</code> <code>界定</code> <code>归组</code></p><p>可以使用多个<code>WHEN</code>组合成<code>if</code>-<code>else if</code>-<code>else</code>逻辑块。</p><ul><li><code>真假</code> - 必须是<code>y|yes|n|no|not</code>，表示求值的<code>取真</code>或<code>取假</code>。</li><li><code>功能体</code> - 引擎执行结果，并对结果求值。</li><li><code>归组</code> - 必须是<code>英数</code>，可别<code>ELSE</code>和<code>DONE</code>归组。</li></ul><p>求值时，以下情况为<code>false</code>，对<code>false</code>执行<code>n</code>则为<code>true</code></p><ul><li>boolean的<code>false</code></li><li>对象 <code>null</code></li><li>Number的double值是<code>NaN</code>或在正负<code>0.000000001</code>间（9位）</li><li><code>empty</code> 空字符串，空数组，空Collection，空Map</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- RNA:WHEN /yes/it.rem0/bg --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>code<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>rem0-name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- RNA:WHEN /not/it.rem1/bg --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>code<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>rem2-name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- RNA:ELSE bg --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>code<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>rem1-name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- RNA:DONE bg --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等同于以下js的伪代码的<code>if(a){}else if(!b){}else{}</code> 分支逻辑</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>it<span class="token punctuation">.</span>rem0<span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;li value=&quot;code&quot;&gt;rem0-name&lt;/li&gt;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>it<span class="token punctuation">.</span>rem1<span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;li value=&quot;code&quot;&gt;rem2-name&lt;/li&gt;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;li value=&quot;code&quot;&gt;rem1-name&lt;/li&gt;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="b3-e-rna-each-循环执行" tabindex="-1"><a class="header-anchor" href="#b3-e-rna-each-循环执行" aria-hidden="true">#</a> B3.E.RNA:EACH 循环执行</h2><p>语法：<code>RNA:EACH</code> <code>空白</code>+ <code>引擎</code>? <code>界定</code> <code>步长</code> <code>界定</code> <code>功能体</code> <code>界定</code> <code>归组</code></p><p>通过<code>归组</code>做为元素引用的循环体。若<code>归组</code>名为<code>it</code>，则<code>it.x</code>表示当前元素的<code>x</code>属性。</p><ul><li><code>步长</code> - 必须<code>-</code>和<code>数字</code>，表示循环顺序和步长，负数表示<code>倒序</code></li><li><code>功能体</code> - 引擎执行结果，需要是数组或集合，否则等同于<code>RNA:PUT</code>效果。</li><li><code>归组</code> - 必须是<code>英数</code>，可别<code>ELSE</code>和<code>DONE</code>归组，引用当前元素和内置状态属性。</li></ul><p>根据不同的数据类型，执行不同的循环处理，空或null跳过，可被<code>ELSE</code>执行。</p><ul><li>Array - Class.isArray()</li><li><code>Collection&lt;E&gt;</code> - instance of Collection</li><li>其他类型，不做任何循环</li><li>倒序循环时，非RandomAccess和ReverseIterator，会toArray</li></ul><p>循环体中，存在以下内置属性，用来表示循环的状态，若<code>归组</code>名为<code>it</code>，则，</p><ul><li><code>it</code> - 当前循环的元素，避免同名，而产生环境污染</li><li>引用当前元素的<code>x</code>属性时，其格式为<code>it.x</code></li><li><code>it._count</code> - 内置变量，当前循环计数，1-base，未循环时为0</li><li><code>it._total</code> - 内置变量，<code>归组</code>内所有元素的数量</li><li><code>it._first</code> - 内置变量，当前是否第一个</li><li><code>it._last</code> - 内置变量，当前是否最后一个</li><li>内置变量在循环结束后不移除，可以在循环外部使用。</li></ul><p>因为米波是<code>专业</code>的<code>非专业</code>模板引擎，所以此<code>for-each</code>十分低级，</p><ul><li>支持有限的对象导航，使用<code>.</code>分隔对象，详见<code>map</code>引擎。</li><li>集合内元素仅支持<code>Map&lt;String,?&gt;</code>和JavaBean的Getter取值。</li><li>没有作用域隔离，<code>归组</code>的名称，会造成context内变量覆盖。</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- RNA:EACH map/2/items/it --&gt;</span>
<span class="token comment">&lt;!-- RNA:USE /name/it.name/* --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>code<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>rem0-name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- RNA:ELSE it --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>no item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- RNA:DONE it --&gt;</span>
<span class="token comment">&lt;!-- RNA:USE /total/it._total/ --&gt;</span>
<span class="token comment">&lt;!-- RNA:USE /count/it._count/ --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>result=count/total<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等同于以下js的伪代码的<code>for(;;)</code>或<code>for-in</code>循环逻辑，依<code>集合</code>类型和<code>步长</code>正负而定</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> step<span class="token operator">=</span><span class="token number">2</span> <span class="token comment">// 循环步长，负数为倒序，不可为0</span>
<span class="token keyword">let</span> index<span class="token operator">=</span><span class="token number">0</span> <span class="token comment">// 过程量</span>
<span class="token keyword">let</span> it <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> count<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> total<span class="token operator">=</span>items<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 内置变量</span>
<span class="token keyword">for</span><span class="token punctuation">(</span>it <span class="token keyword">in</span> items<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>index<span class="token operator">++</span> <span class="token operator">%</span> step <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">continue</span> <span class="token comment">// 控制步长</span>
    count<span class="token operator">++</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;li value=&quot;code&quot;&gt;rem0-&#39;</span><span class="token operator">+</span>it<span class="token punctuation">.</span>name<span class="token operator">+</span><span class="token string">&#39;&lt;/li&gt;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;li&gt;no item&lt;/li&gt;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;div&gt;result=&#39;</span><span class="token operator">+</span>count<span class="token operator">+</span><span class="token string">&#39;/&#39;</span><span class="token operator">+</span>total<span class="token operator">+</span><span class="token string">&#39;&lt;/div&gt;&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="b3-f-rna-else-否则条件" tabindex="-1"><a class="header-anchor" href="#b3-f-rna-else-否则条件" aria-hidden="true">#</a> B3.F.RNA:ELSE 否则条件</h2><p>语法：<code>RNA:ELSE</code> <code>空白</code>+ <code>归组</code></p><p>通过<code>作用</code>归组，对同组的<code>WHEN</code>或<code>EACH</code>执行否则分支，情况如何。</p><ul><li><code>WHEN</code>时，表示没有任何一个<code>WHEN</code>被执行。</li><li><code>EACH</code>时，表示循环体从未执行（如集合无元素）</li><li><code>EACH-ELSE</code>和<code>pebble</code>语义相同，和python的<code>for-else</code>不同。</li></ul><h2 id="b3-g-rna-done-结束执行" tabindex="-1"><a class="header-anchor" href="#b3-g-rna-done-结束执行" aria-hidden="true">#</a> B3.G.RNA:DONE 结束执行</h2><p>语法：<code>RNA:DONE</code> (<code>空白</code>+ <code>归组</code>)+</p><p>通过<code>归组</code>归组，结束一个或多个<code>WHEN</code>和<code>EACH</code>的<code>归组</code>。</p><h2 id="b3-h-占位符模板" tabindex="-1"><a class="header-anchor" href="#b3-h-占位符模板" aria-hidden="true">#</a> B3.H.占位符模板</h2><p>简化模板，只进行表达式级的变量替换或函数处理，而非完整的Meepo模板语法。 比如，配置文件中的占位符，通常需要简单的替换或字符转换。</p><p>使用时，自定义变量的前后界定符即可，默认是<code>{{</code>和<code>}}</code>，界定符可以是多组。</p><p>定义<code>转义符</code>可转义界定符，默认是<code>空</code>，不转义。转义有以下特点，以<code>\\</code>为例，</p><ul><li>只对<code>界定符</code>有效，如 <code>\\{{</code>和<code>\\}}</code>，解析后为<code>{{</code>和<code>}}</code></li><li>界定符前的自身转义，如<code>\\\\{{var}}</code>，解析后为<code>\\</code>+<code>var</code>变量值</li><li>占位符，从左到右配对最相邻，不匹配内容做普通字符处理。</li><li>其他情况无效，如<code>\\n</code></li><li>不支持占位符嵌套</li><li>变量名不能有空格，否则会按函数解析</li></ul><h2 id="b3-i-rna的使用限制" tabindex="-1"><a class="header-anchor" href="#b3-i-rna的使用限制" aria-hidden="true">#</a> B3.I.RNA的使用限制</h2><p>因模板在静态解析是生成语法树，所以RAN中的条件及循环执行不能识别运行时结构。 以下模板，模板意图为，对hash值，使用GitHash，ModTime中第一个truthy值。 直觉上比较符合面向过程的条件赋值，但会引起校验时的作用域交叉语法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// HI-MEEPO
// RNA:WHEN /yes/GitHash/bg
//   RNA:USE /hash/GitHash/
// RNA:ELSE bg
//   RNA:USE /hash/ModTime/
// RNA:DONE bg
project hash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出现交叉错误，是因为<code>hash</code>这个特征，存在2个<code>RNA:USE</code>与之对应， 在静态解析时获得运行时的条件值，便无法确定其归属的语法树。修改如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// HI-MEEPO
// RNA:USE /hash/GitHash/
// RNA:USE /time/ModTime/

// RNA:WHEN /yes/GitHash/bg
project hash
// RNA:ELSE bg
project time
// RNA:DONE bg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>fun:see</code>函数辅助完成</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// HI-MEEPO
// RNA:USE /hash/fun:see GitHash ModTime/
project hash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,123),d=[s];function l(t,i){return n(),o("div",null,d)}const r=e(c,[["render",l],["__file","b3.syntax.html.vue"]]);export{r as default};
