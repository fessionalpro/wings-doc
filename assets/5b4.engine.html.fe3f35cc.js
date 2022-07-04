import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as d,o as n,c as r,a as e,b as l,w as s,d as c,e as o}from"./app.0d9a5ee9.js";const u={},h=c('<h1 id="_5b4-\u6267\u884C\u5F15\u64CE" tabindex="-1"><a class="header-anchor" href="#_5b4-\u6267\u884C\u5F15\u64CE" aria-hidden="true">#</a> 5B4.\u6267\u884C\u5F15\u64CE</h1><p>\u5176\u4E2D\u5404<code>\u5F15\u64CE</code>\u7684\u5B9E\u73B0\u548C\u6267\u884C\u4E0A\u4E0B\u6587\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u5373\u53D8\u91CF\u4F5C\u7528\u57DF\u4E0D\u4E00\u6837\uFF0C\u5B58\u5728\u4EE5\u4E0B2\u4E2A\u7EA7\u522B\uFF0C</p><ul><li><code>session</code>\u7EA7\uFF0C\u4E00\u6B21merge\u5185\u7684\u591A\u6B21eval\uFF0C\u540C\u4E00context\uFF0Ceval\u95F4\u6709\u5F71\u54CD\uFF0C\u5982<code>js</code>\u3002</li><li><code>nothing</code>\u7EA7\uFF0C\u6BCF\u6B21eval\u7684\u4E0A\u4E0B\u6587\u65E0\u5173\u8054\uFF0Ceval\u95F4\u65E0\u5F71\u54CD\uFF0C\u5982<code>sh</code>\u4F9D\u8D56\u4E8Ebash\u8BBE\u7F6E\u3002</li></ul><p>\u6267\u884C\u4E2D\u7684\u5F15\u64CE\u73AF\u5883\uFF0C\u5728\u6BCF\u6B21eval\u65F6\uFF0C\u53EF\u4EE5\u88ABcontext\u8986\u76D6\uFF0C\u4E5F\u53EF\u4EE5\u4E0D\u8986\u76D6\uFF0C\u4F9D\u8D56\u4E8E\u5F15\u64CE\u5B9E\u73B0\u3002</p><h2 id="_5b4-1-\u5B57\u5178\u5F15\u64CEmap" tabindex="-1"><a class="header-anchor" href="#_5b4-1-\u5B57\u5178\u5F15\u64CEmap" aria-hidden="true">#</a> 5B4.1.\u5B57\u5178\u5F15\u64CE<code>map</code></h2><p><code>session</code>\u7EA7\uFF0C\u6BCF\u6B21eval\u5171\u4EABcontext\uFF0Ccontext\u4E0D\u8986\u76D6\u5F15\u64CE\u73AF\u5883\u3002</p><ul><li>\u4EE5<code>\u529F\u80FD\u4F53</code>\u4E3A<code>\u53C2\u6570</code>\uFF08<code>key</code>)\uFF0C\u4F9D\u6B21\u67E5\u627E\uFF0C\u627E\u5230<code>\u975Enull</code>\u5373\u8FD4\u56DE</li><li>\u987A\u5E8F\u4E3Acontext,System.property,System.env,Builtin</li><li><code>key</code>\u4E2D\u4E0D\u53EF\u5305\u542B\u7BA1\u9053\u7B26<code>|</code>\uFF0C\u6216\u4F7F\u7528<code>\\</code>\u8F6C\u4E49</li><li><code>key</code>\u4E2D\u7684\u5F15\u53F7<code>&#39;&quot;</code>\u4F5C\u4E3A\u53D8\u91CF\u8FB9\u754C\uFF0C\u6216\u4F7F\u7528<code>\\</code>\u8F6C\u4E49\u3002</li><li>\u8F6C\u4E49\u5982<code>\\t</code>,<code>\\r</code>,<code>\\n</code>\uFF0C\u6B64\u5916\u4EC5\u4FDD\u7559<code>\\</code>\u540E\u5B57\u7B26\u3002</li></ul><h3 id="\u4EE5\u53E5\u70B9\u5206\u9694\u7684\u5BFC\u822A\u7C7B\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u4EE5\u53E5\u70B9\u5206\u9694\u7684\u5BFC\u822A\u7C7B\u5BF9\u8C61" aria-hidden="true">#</a> \u4EE5\u53E5\u70B9\u5206\u9694\u7684\u5BFC\u822A\u7C7B\u5BF9\u8C61</h3><p>\u652F\u6301\u7B80\u5355\u7684<code>\u5BFC\u822A\u7C7B</code>\u5BF9\u8C61\uFF0C\u5373key\u4E2D\u4EE5<code>.</code>\u5206\u9694\u5BF9\u8C61\uFF0C\u4F1A\u5B58\u5728\u4EE5\u4E0B\u5E72\u6270\u60C5\u51B5\uFF0C</p><ul><li>java\u7684System\u4E2D\u6709\u5927\u91CF<code>.</code>\u578B\u53D8\u91CF\uFF0C\u5982<code>os.name</code>\uFF0C<code>user.home</code></li><li>\u5982\u679C\u7528\u6237\u5B58\u6709<code>os</code>\u6216<code>user</code>\uFF0C\u4F7F\u7528<code>.</code>\u5BFC\u822A\uFF0C\u5219\u4F1A\u53D1\u751F\u6DF7\u4E71</li></ul><p>\u56E0\u4E3A\u6709<code>.</code>\u5206\u9694\u7684\u5B57\u7B26\u4E32\u53D8\u91CF\u5B58\u5728\uFF0C\u6240\u4EE5\u5728\u5404\u5B9E\u73B0\u5F15\u64CE\u4E2D\u5BF9\u73AF\u5883\u53D8\u91CF\u7684\u4F7F\u7528\uFF0C\u9075\u5FAA\u4EE5\u4E0B\u89C4\u5219\u3002</p><p>\u5B58\u5165\uFF08put\uFF09\u65F6\uFF0C\u5C3D\u91CF\u4FDD\u8BC1\u8BFB\u53D6\u65F6\uFF0C\u4EE5\u6574key\u548C\u5BF9\u8C61\u5BFC\u822A\u65B9\u5F0F\u90FD\u53EF\u6B63\u786E\u8BFB\u53D6\u3002</p><ul><li>\u5FC5\u987B\u4EE5\u6574key\u5B58\u5165\u3002</li><li>\u53EF\u4EE5<code>.</code>\u5206\u9694\uFF0C\u9010\u7EA7\u5B58\u5165\u5206\u6BB5\u7684key\uFF08map\u5F15\u64CE\u672A\u5B9E\u73B0\uFF09</li></ul><p>\u8BFB\u53D6\uFF08get\uFF09\u65F6\uFF0C\u4F18\u5148\u4F7F\u7528\u6574key\u8BFB\u53D6\uFF0C\u4E0D\u5B58\u5728\u5219\u4F7F\u7528\u5BF9\u8C61\u5BFC\u822A\u5F62\u5F0F\u8BFB\u53D6\u3002</p><ul><li>\u4EE5key\u76F4\u63A5\u67E5\u627E\uFF0C\u6709<code>\u975Enull</code>\u503C\uFF0C\u5219return</li><li>\u5982key\u4E2D\u5B58\u5728<code>:</code>\uFF0C\u4EE5<code>:</code>\u5206\u9694\u6210<code>out</code>\uFF0C<code>it</code>\u548C<code>name</code></li><li>\u4F9D\u6B21\u4EE5<code>out</code>\u548C<code>it</code>\u4E3A\u5BF9\u8C61key\u9012\u5F52\u67E5\u627E\u5BF9\u8C61\u3002 <ul><li>\u82E5\u4E3A\u4EFB\u610F\u9012\u5F52\u4E2D\u8FD4\u56DEnull\uFF0C\u5219return<code>\u5B57\u7B26\u4E32\u7A7A</code>\u3002</li><li>\u82E5\u4E3AMap\u7C7B\u578B\uFF0C\u5219\u4EE5getKey\u7684\u65B9\u5F0F\u53D6\u503C\u3002</li><li>\u5176\u4ED6\u7C7B\u578B\uFF0C\u901A\u8FC7\u53CD\u5C04\u53D6\u503C\uFF0C\u4EE5Getter\u547D\u540D\u89C4\u5219\u548CField\u67E5\u627E\u3002</li></ul></li><li>\u9012\u5F52\u4E2D\u7684\u6700\u7EC8\u5BF9\u8C61\uFF0C\u4EE5<code>name</code>\u4E3Akey\u53D6\u503C\uFF08map\u6216\u53CD\u5C04\uFF09</li></ul><h3 id="\u7BA1\u9053\u7B26\u94FE\u63A5\u51FD\u6570-\u94FE\u5F0F\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u9053\u7B26\u94FE\u63A5\u51FD\u6570-\u94FE\u5F0F\u5904\u7406" aria-hidden="true">#</a> \u7BA1\u9053\u7B26\u94FE\u63A5\u51FD\u6570\uFF0C\u94FE\u5F0F\u5904\u7406</h3><p>\u53EF\u4EE5\u7528<code>|</code>\u5206\u9694\u591A\u4E2A\u5904\u7406\u51FD\u6570\uFF0C\u7B2C\u4E00\u4E2A\u4E3Akey\uFF0C\u5176\u540E\u7684\u90FD\u662F<code>\u51FD\u6570</code>\uFF0C\u683C\u5F0F\u4E0B\u3002</p><p><code>key</code> <code>|</code> <code>funA</code> <code>|</code> <code>funB arg1 &quot;arg 2&quot;</code></p><p>\u4EE5\u4E0A\u7B49\u540C\u4E8E\u8C03\u7528\u94FE\uFF0C<code>funB(ctx, funA(ctx.get(&quot;key&quot;)), &quot;arg1&quot;, &quot;arg 2&quot;)</code></p><ul><li><code>key</code> - \u5B57\u7B26\u4E32key\uFF0C\u53EF\u4EE5\u662F<code>.</code>\u7684\u5BF9\u8C61\u5BFC\u822A\u683C\u5F0F\u3002 <ul><li>key\u5BF9\u5E94\u7684\u503C\u53EF\u4EE5\u662F<code>Object</code>\uFF0C<code>Supplier&lt;Object&gt;</code>\u6216<code>fun arg</code>\u3002</li></ul></li><li><code>fun</code> - \u7BA1\u9053\u8BED\u6CD5\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u4E32 <ul><li>\u5FC5\u987B<code>Function</code>\u6216<code>JavaEval</code>\u7C7B\u578B</li><li>\u51FD\u6570\u540D\u5B57\uFF0C\u4E0D\u7528\u4F7F\u7528<code>.</code>\uFF0C\u5EFA\u8BAE\u4EE5<code>fun:</code>\u5F00\u5934</li><li>Function.apply(obj)\uFF0Cobj\u4E3A\u7BA1\u9053\u8F93\u51FA\u6216<code>key</code>\u6216<code>arg</code></li><li>JavaEval.eval(ctx, obj, arg...);</li></ul></li><li><code>arg</code> - \u7528\u6237\u5B9A\u4E49\u7684\u53D8\u91CF\uFF0C\u5373\u7BA1\u9053\u8BED\u6CD5\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u8D77\u3002 <ul><li>arg\u9ED8\u8BA4\u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\uFF0C\u53EF\u4F7F\u7528\u5F15\u53F7\uFF08<code>&quot;</code>\u6216<code>&#39;</code>\uFF09\u62EC\u8D77\u6765</li><li>\u82E5arg\u4E2D\u9700\u8981\u4FDD\u7559\u7A7A\u683C\uFF0C\u9700\u8981\u5F15\u53F7\u62EC\u8D77\u6765\uFF0C\u5176\u5185\u7684\u5F15\u53F7\u7528<code>\\</code>\u8F6C\u4E49\u3002</li><li>\u6570\u503C\u7C7B\u578B\uFF0C\u53EF<code>,_</code>\u5206\u9694\u6570\u5B57\uFF0C<code>^([-+])?([0-9_,.]+)([DFNL]?)$</code></li><li><code>1,000</code>,<code>1_0000</code>,<code>10,000.0</code>,<code>1_0000.00</code>\uFF08Integer\u548CFloat\uFF09</li><li>\u53EF\u5206\u522B\u4F7F\u7528\u540E\u7F00\uFF0C\u8868\u793A\u5177\u4F53\u7C7B\u578BBigDecimal(N)\uFF0CDouble(D), Float(F)\uFF0CLong(L)</li><li><code>1,000.00D</code>,<code>1_0000.00F</code>,<code>1_0000N</code>,<code>1_0000L</code></li><li><code>TRUE</code>\u548C<code>FALSE</code>\u8868\u793Aboolean\u884C\uFF0C\u8981\u8868\u8FBE\u5B57\u7B26\u4E32\u9700\u8981\u5F15\u53F7\u62EC\u8D77\u6765</li><li>\u4E0D\u652F\u6301\u79D1\u5B66\u8BB0\u6570\u6CD5</li></ul></li></ul><p>\u51FD\u6570\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B3\u4E2D\u65B9\u5F0F\u8BBE\u7F6E\uFF0C</p><ul><li>RnaManager\u5168\u5C40\u6CE8\u518C\uFF0C\u5982\u5185\u7F6E<code>\u53D8\u91CF</code>\u6216\u65B9\u6CD5</li><li>merger\u65F6\u5B58\u5165context\u4E2D\u6CE8\u518C\uFF0C\u5982java\u7684lambda</li><li>\u53EF\u4EE5\u901A\u8FC7<code>RNA:PUT</code>\u6307\u4EE4<code>fun</code>\u5F15\u64CE\uFF0C\u52A8\u6001\u7F16\u8BD1\u6CE8\u518C</li><li>\u6CE8\u518C\u7684\u65B9\u6CD5\u540D\uFF0C\u5FC5\u987B\u4EE5<code>fun:</code>\u4E3A\u524D\u7F00\uFF0C\u4EE5\u907F\u514D\u4E0E\u5176\u4ED6\u53D8\u91CF\u51B2\u7A81</li><li>\u4F7F\u7528\u4E8B\uFF0C<code>fun:</code>\u53EF\u4EE5\u7701\u7565\uFF0C\u4E5F\u5EFA\u8BAE\u7701\u7565\u3002</li></ul>',22),p=o("\u5185\u7F6E\u51FD\u6570\u5217\u8868\uFF0C\u53C2\u8003"),_=o("\u51FD\u6570\u5217\u8868"),v=c('<h3 id="\u5185\u7F6E\u4EE5\u4E0B\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u4EE5\u4E0B\u53D8\u91CF" aria-hidden="true">#</a> \u5185\u7F6E\u4EE5\u4E0B\u53D8\u91CF</h3><p>\u7C73\u6CE2\u5185\u7F6E\u4E86\u5F88\u5C11\u4FA7\u53D8\u91CF\u548C\u65B9\u6CD5\uFF0C\u4EE5\u4E0B\u662Fjava system.property\u548Cenv\u7684\u4E3E\u4F8B</p><ul><li><code>user.name</code> - String, \u5F53\u524D\u7CFB\u7EDF\u7528\u6237\uFF0Cjava\u5185\u7F6E</li><li><code>user.dir</code> - String, \u5F53\u524D\u7684\u5DE5\u4F5C\u76EE\u5F55\uFF0Cjava\u5185\u7F6E</li></ul><p>\u4EE5\u4E0B\u662F\uFF0C\u5185\u7F6E\u65E5\u671F\u548C\u65F6\u95F4\u7684\u53D8\u91CF</p><ul><li><code>now.date</code> - String:Supplier, \u52A8\u6001\u8BA1\u7B97\uFF0C\u7CFB\u7EDF\u65E5\u671F <code>yyyy-MM-dd</code></li><li><code>now.time</code> - String:Supplier, \u52A8\u6001\u8BA1\u7B97\uFF0C\u7CFB\u7EDF\u65F6\u95F4 <code>HH:mm:ss</code></li></ul><h2 id="_5b4-2-\u6765\u5565\u56DE\u5565raw" tabindex="-1"><a class="header-anchor" href="#_5b4-2-\u6765\u5565\u56DE\u5565raw" aria-hidden="true">#</a> 5B4.2.\u6765\u5565\u56DE\u5565<code>raw</code></h2><p><code>nothing</code>\u7EA7\uFF0C\u76F4\u63A5\u628A<code>\u529F\u80FD\u4F53</code>\u5F53\u5B57\u7B26\u4E32\u8FD4\u56DE\uFF0C\u4F46mute\u65F6\u8FD4\u56DE<code>\u5B57\u7B26\u4E32\u7A7A</code>\u3002</p><h2 id="_5b4-3-\u5185\u5BB9\u5F15\u5165uri" tabindex="-1"><a class="header-anchor" href="#_5b4-3-\u5185\u5BB9\u5F15\u5165uri" aria-hidden="true">#</a> 5B4.3.\u5185\u5BB9\u5F15\u5165<code>uri</code></h2><p><code>nothing</code>\u7EA7\uFF0C\u628Auri\u7684\u5185\u5BB9\u4EE5UTF8\u8F93\u51FA\u4E3A\u5B57\u7B26\u4E32\u3002\u9996\u6B21\u8BFB\u5165\uFF0C\u540E\u7EED\u7F13\u5B58\u3002 \u6CE8\u610F\uFF0C\u4EC5\u4F5C\u4E3AString\u7C7B\u578B\uFF0C\u4E0D\u4F1A\u505A\u4EFB\u4F55\u89E3\u6790\u548C\u52A8\u6001\u6267\u884C\u3002</p><ul><li><code>http://</code>,<code>https://</code>\u65F6\uFF0C\u4EE5GET\u8BFB\u53D6</li><li><code>file://</code>\u65F6\uFF0C\u4ECEfile system\u8BFB\u53D6</li><li><code>classpath:</code>\u65F6\uFF0C\u4ECEclassloader\u8BFB\u5165\uFF0C\u6CE8\u610F\u6CA1\u6709<code>//</code></li><li>\u5176\u4ED6\uFF0C\u4EE5URLConnection\u8BFB\u53D6\uFF0C\u8D85\u65F6\u4E3A3\u79D2</li><li>\u4EE5<code>/</code>\u6216<code>.</code>\u5F00\u5934\uFF0C\u5728\u7A0B\u5E8Fpwd\u4E3A\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u4F46\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u3002</li><li>\u8BFB\u5165\u7684\u5185\u5BB9\uFF0C\u4F1A\u4EE5uri\u4E3Akey\uFF0C\u7F13\u5B58\u5230context\u4E2D</li></ul><h2 id="_5b4-4-\u76F4\u63A5\u6267\u884Cexe" tabindex="-1"><a class="header-anchor" href="#_5b4-4-\u76F4\u63A5\u6267\u884Cexe" aria-hidden="true">#</a> 5B4.4.\u76F4\u63A5\u6267\u884C<code>exe</code></h2><p><code>nothing</code>\u7EA7\uFF0C\u89E3\u6790\u5F15\u53F7\u5757\u548C\u8F6C\u4E49\uFF0C\u6355\u83B7std_out\u8F93\u51FA\u3002 \u6CE8\u610F\u7684\u662F\uFF0C\u6BCF\u6B21eval\u65F6\uFF0Cengine\u4F1A\u7528context\u8986\u76D6\u73AF\u5883\u53D8\u91CF\u3002</p><ul><li><code>exe</code> - \u76F4\u63A5\u6267\u884C\u547D\u4EE4\u3002</li><li><code>cmd</code> - \u5728window\u7CFB\uFF0C\u4EE5<code>cmd /c</code>\u6267\u884C\u3002</li><li><code>sh</code> - \u5728unx\u7CFB\uFF0C\u4EE5<code>bash -c</code>\u6267\u884C\u3002</li></ul><h2 id="_5b4-5-\u6267\u884Cjs\u811A\u672Cjs" tabindex="-1"><a class="header-anchor" href="#_5b4-5-\u6267\u884Cjs\u811A\u672Cjs" aria-hidden="true">#</a> 5B4.5.\u6267\u884Cjs\u811A\u672C<code>js</code></h2><p><code>session</code>\u7EA7\uFF0C\u4EE5java\u7684ScriptEngine\u6267\u884Cjs\u811A\u672C\uFF0C\u6355\u83B7\u6700\u540E\u4E00\u4E2A\u6C42\u503C\u3002 \u6267\u884Ccontext\uFF0C\u4EE5<code>ctx</code>\u5BF9\u8C61\u5B58\u5728\u4E8Ejs\u73AF\u5883\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>ctx.xxx</code>\u83B7\u5F97\u73AF\u5883\u53D8\u91CF\u3002</p><p>\u5BF9\u4E8E\u5728context\u8BFB\u5165\u548C\u5199\u5165<code>\u5BFC\u822A\u7C7B</code>\u5BF9\u8C61\uFF0C\u53C2\u8003map\u5F15\u64CE\u7684\u89C4\u5219\u3002</p><p><strong>\u6CE8\u610F\uFF1A</strong> Java 15 removed Nashorn JavaScript Engine</p><h2 id="_5b4-6-\u52A8\u6001java\u4EE3\u7801java" tabindex="-1"><a class="header-anchor" href="#_5b4-6-\u52A8\u6001java\u4EE3\u7801java" aria-hidden="true">#</a> 5B4.6.\u52A8\u6001java\u4EE3\u7801<code>java</code></h2><p><code>session</code>\u7EA7\uFF0C\u901A\u8FC7\u7C73\u6CE2\u6A21\u677F\u52A8\u6001\u7F16\u8BD1java\u4EE3\u7801\uFF0C\u5E76\u4EE5context\u4E3A\u53C2\u52A0\u6267\u884C\u3002</p>',19),m=e("li",null,[o("\u5934\u90E8"),e("code",null,"import java.util.*,java.util.Map;"),o("\uFF0C\u53EF\u4EE5"),e("code",null,","),o("\u5206\u9694\u591A\u4E2A")],-1),b=e("li",null,"\u7B80\u5355\u65B9\u6CD5\u4F53\u5355\u884C\uFF08java\u4E0D\u80FD\u7B80\u5355\uFF09\uFF0C\u590D\u6742\u7684\u591A\u884C\uFF0C\u4EE5\u589E\u52A0\u53EF\u8BFB\u6027\u3002",-1),f=e("li",null,[o("\u5C3E\u90E8\u4EE5"),e("code",null,"return obj"),o("\u8FD4\u56DE\uFF0C"),e("code",null,";"),o("\u53EF\u4EE5\u7701\u7565\u3002")],-1),x=o("\u901A\u8FC7"),g={href:"https://github.com/trydofor/pro.fessional.meepo/tree/master/meepo/src/main/resources/pro/fessional/meepo/poof/impl/java/JavaName.java",target:"_blank",rel:"noopener noreferrer"},j=o("\u6A21\u677F"),y=o("\u52A8\u6001\u7F16\u8BD1java\u3002"),k=e("li",null,[o("\u7F16\u8BD1\u7684java\u5B9E\u73B0\u4E86"),e("code",null,"pro.fessional.meepo.eval.JavaEval"),o("\u63A5\u53E3")],-1),S=e("li",null,[o("\u4F20\u5165"),e("code",null,"RngContext ctx"),o("\uFF0C\u53EF\u8BFB\u53D6context")],-1),B=e("li",null,[o("\u5DF2\u7ECFimport\u7684class\u6709\uFF0C "),e("ul",null,[e("li",null,"org.jetbrains.annotations.NotNull;"),e("li",null,"pro.fessional.meepo.poof.impl.JavaEngine;"),e("li",null,"java.util.Map;")])],-1),E=c('<h2 id="_5b4-7-\u52A8\u6001java\u51FD\u6570fun" tabindex="-1"><a class="header-anchor" href="#_5b4-7-\u52A8\u6001java\u51FD\u6570fun" aria-hidden="true">#</a> 5B4.7.\u52A8\u6001java\u51FD\u6570<code>fun</code></h2><p>\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\uFF0C\u7075\u6D3B\u7684\u5C06\u81EA\u5B9A\u4E49java\u51FD\u6570\u6CE8\u518C\u5230\u6A21\u677F\u5F15\u64CE\u3002\u4F46\u4E0D\u5EFA\u8BAE\u5728\u6A21\u677F\u4E2D\u4F7F\u7528\u51FD\u6570\uFF0C\u6A21\u677F\u5E94\u8BE5\u53EA\u8D1F\u8D23\u663E\u793A\u3002</p><ul><li>\u6A21\u677F\u5185\u52A8\u6001\u7F16\u8BD1java\u4EE3\u7801\uFF0C\u5E76<code>PUT fun/</code>\uFF0C\u4F9B<code>USE</code>\u6267\u884C\u3002</li><li>\u901A\u8FC7<code>RnaManager.register</code> \u5168\u5C40\u6CE8\u518C\u51FD\u6570</li><li>\u5728context\u7684Map\u4E2D\uFF0Cput\u4EE5<code>fun:</code>\u524D\u7F00\u7684java\u51FD\u6570</li><li>\u8FD0\u884C\u65F6\u6CE8\u518C\u7684\u51FD\u6570\uFF0C\u4E00\u822C\u662FFunction\u6216JavaEval\u7C7B\u578B\u7684lambda\uFF0C</li></ul>',3);function N(F,q){const a=d("RouterLink"),i=d("ExternalLinkIcon");return n(),r("div",null,[h,e("p",null,[p,l(a,{to:"/5-radiant/5b.meepo/5b5.function.html"},{default:s(()=>[_]),_:1})]),v,e("ul",null,[m,b,f,e("li",null,[x,e("a",g,[j,l(i)]),y]),k,S,B]),E])}var J=t(u,[["render",N],["__file","5b4.engine.html.vue"]]);export{J as default};
