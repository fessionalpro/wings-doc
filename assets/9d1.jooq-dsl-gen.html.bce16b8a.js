import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as e,o,c,b as n,d as t,f as s,e as l}from"./app.def9aef9.js";const u={},i=n("h1",{id:"_9d1-jooq\u6700\u4F73\u5B9E\u64CD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_9d1-jooq\u6700\u4F73\u5B9E\u64CD","aria-hidden":"true"},"#"),s(" 9D1.Jooq\u6700\u4F73\u5B9E\u64CD")],-1),k=n("p",null,"WingsBoot\u4F53\u7CFB\u5185\u5BF9Jooq\u8FDB\u884C\u4E86\u7B80\u5316\uFF0C\u5728\u5B9E\u8DF5\u4E2D\u6709\u4EE5\u4E0B\u7EA6\u5B9A\u548C\u8BED\u6CD5\u7CD6",-1),d={href:"https://gitee.com/trydofor/pro.fessional.wings/blob/master/wings/faceless-jooq/src/test/java/pro/fessional/wings/faceless/sample/JooqDslAndDaoSample.java",target:"_blank",rel:"noopener noreferrer"},r=s("JooqDslAndDaoSample.java"),m={href:"https://gitee.com/trydofor/pro.fessional.wings/blob/master/wings/faceless-jooq/src/test/java/pro/fessional/wings/faceless/sample/JooqMostSelectSample.java",target:"_blank",rel:"noopener noreferrer"},v=s("JooqMostSelectSample.java"),b={href:"https://gitee.com/trydofor/pro.fessional.wings/blob/master/wings/faceless-jooq/src/test/java/pro/fessional/wings/faceless/jooq/JooqDeleteListenerTest.java",target:"_blank",rel:"noopener noreferrer"},f=s("JooqDeleteListenerTest"),g=l(`<h2 id="_9d1-1-\u4EE3\u7801\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#_9d1-1-\u4EE3\u7801\u751F\u6210" aria-hidden="true">#</a> 9D1.1.\u4EE3\u7801\u751F\u6210</h2><p>\u63A8\u8350\u4F7F\u7528<code>Warlock3JooqGenerator</code>\uFF0C\u5176\u8FDB\u4E00\u6B65\u5C01\u88C5\u4E86<code>WingsCodeGenerator</code>\uFF0C</p><ul><li>databaseIncludes - \u57FA\u4E8E\u6B63\u5219\uFF0C\u6307\u5B9A\u751F\u6210\u4EE3\u7801\u7684\u8868</li><li>setGlobalSuffix - \u53EF\u5BF9\u5168\u5C40\u5BF9\u8C61\u589E\u52A0\u540E\u7F00\uFF0C\u4EE5\u533A\u5206\u540C\u5305\u4E0D\u540C\u5DE5\u7A0B</li><li>forcedStrCodeEnum - \u7ED1\u5B9Avarchar\u548Cenum\u7C7B\u578B</li><li>forcedIntConsEnum - \u7ED1\u5B9Aint\u548Cemum\u7C7B\u578B</li><li>forcedLocale - \u7ED1\u5B9Avarchar\u548CLocale\u7C7B\u578B</li><li>forcedZoneId - \u7ED1\u5B9Aint\u548CZoneId\u7C7B\u578B</li><li>forcedZoneStr - \u7ED1\u5B9Avarchar\u548CZoneId\u7C7B\u578B</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Warlock3JooqGenerator</span> generator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Warlock3JooqGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
generator<span class="token punctuation">.</span><span class="token function">setTargetDir</span><span class="token punctuation">(</span>JAVA<span class="token punctuation">)</span><span class="token punctuation">;</span>
generator<span class="token punctuation">.</span><span class="token function">gen</span><span class="token punctuation">(</span>JDBC<span class="token punctuation">,</span> USER<span class="token punctuation">,</span> PASS<span class="token punctuation">,</span>
        <span class="token class-name">Warlock3JooqGenerator</span><span class="token punctuation">.</span><span class="token function">includeWarlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        bd <span class="token operator">-&gt;</span> bd<span class="token punctuation">.</span><span class="token function">setGlobalSuffix</span><span class="token punctuation">(</span><span class="token string">&quot;Warlock&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9ED8\u8BA4\u914D\u7F6E\u4E2D\uFF0C\u5BF9\u4EE5\u4E0B\u7C7B\u578B\u505A\u4E86\u6620\u5C04</p><ul><li>Boolean - <code>TINYINT(\\(1\\))?</code>\uFF0C\u6240\u6709\u5B57\u6BB5</li><li>Integer - <code>TINYINT[2-9()]*</code>\uFF0C\u6240\u6709\u5B57\u6BB5</li><li>Locale - \u5B57\u6BB5<code>.*\\.locale</code>\uFF0C\u6240\u6709\u7C7B\u578B</li><li>ZoneId - \u5B57\u6BB5<code>*\\.zoneid</code>\uFF0C\u7C7B\u578B<code>INT.*</code>\u548C<code>(VAR)?CHAR.*</code></li></ul><h2 id="_9d1-2-dao\u548Cdsl" tabindex="-1"><a class="header-anchor" href="#_9d1-2-dao\u548Cdsl" aria-hidden="true">#</a> 9D1.2.Dao\u548CDsl</h2><p>Jooq\u5B98\u65B9\u793A\u4F8B\u4E2D\uFF0C\u90FD\u91C7\u7528\u4E86\u9759\u6001\u5F15\u5165Table\uFF0C\u6CE8\u5165Dsl\u7684\u5F62\u5F0F\uFF0C\u4F46\u5728wings\u4E2D\u63A8\u8350\u4ECEDao\u5165\u624B\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u4EE5lombok\u5B8C\u6210Setter\u6CE8\u5165\uFF0C\u5FC5\u987Bsetter\u6CE8\u5165</span>
<span class="token annotation punctuation">@Setter</span><span class="token punctuation">(</span>onMethod_ <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token annotation punctuation">@Autowired</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">WinConfRuntimeDao</span> dao<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u68C0\u67E5\u8868\u662F\u5426\u5B58\u5728</span>
dao<span class="token punctuation">.</span><span class="token function">notTableExist</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u901A\u8FC7Dao\u83B7\u53D6Table\u548CDsl</span>
<span class="token class-name">WinConfRuntimeTable</span> a <span class="token operator">=</span> dao<span class="token punctuation">.</span><span class="token function">getAlias</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">WinConfRuntimeTable</span> t <span class="token operator">=</span> dao<span class="token punctuation">.</span><span class="token function">getTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">DSLContext</span> dsl <span class="token operator">=</span> dao<span class="token punctuation">.</span><span class="token function">ctx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>WingsJooqDaoAliasImpl\u548CWingsJooqDaoJournalImpl\u4E2D\u5B58\u5728\u5927\u91CF\u65B9\u6CD5</p><ul><li>batchXX - \u6279\u91CF\u63D2\u5165\uFF0C\u5408\u5E76\uFF0C\u66F4\u65B0\u7B49\u64CD\u4F5C\u6709\u5173</li><li>fetchXX - \u6309\u7C7B\u578B\u6216\u81EA\u52A8\u8BFB\u53D6\u6570\u636E</li><li>countXX - count\u8BB0\u5F55\u6570</li><li>insertXX - \u63D2\u5165\u6709\u5173</li><li>updateXX - \u66F4\u65B0\u6709\u5173</li><li>deleteXX - \u903B\u8F91\u6216\u7269\u7406\u5220\u9664</li></ul><p>Dsl\u548CDao\u7B49\u4EF7\uFF0C\u90FD\u5728service\u5C42\u4EE5\u4E0B\u4F7F\u7528\u3002</p><ul><li>\u7B80\u5355\u64CD\u4F5C\u7528Dao\uFF0C\u590D\u6742\u7684\u7528Dsl</li><li>Dao\u66F4\u50CFjava\uFF0CDsl\u66F4\u50CFSql</li><li>\u5F53\u6709\u6761\u4EF6\u548C\u5B57\u6BB5\u65F6\uFF0C\u4E24\u8005\u90FD\u8981\u660E\u786Etable\u6216alias</li><li>Dsl\u53EF\u4EE5getSql\uFF0C\u4E5F\u53EF\u7528Any2Dto\u628ASql\u53D8\u4E3ADsl</li></ul><h2 id="_9d1-3-\u7CBE\u786E\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#_9d1-3-\u7CBE\u786E\u67E5\u627E" aria-hidden="true">#</a> 9D1.3.\u7CBE\u786E\u67E5\u627E</h2><p>\u7528\u4EC0\u4E48\u5C31\u83B7\u53D6\u4EC0\u4E48\uFF0C\u7528pojo\u6216record\u63A5\u6536\uFF0C\u786E\u4FDD\u5F3A\u7C7B\u578B\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">WinUserLoginTable</span> t <span class="token operator">=</span> winUserLoginDao<span class="token punctuation">.</span><span class="token function">getTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Dao </span>
dao<span class="token punctuation">.</span><span class="token function">fetch</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">t<span class="token punctuation">.</span></span>Id</span><span class="token punctuation">.</span><span class="token function">gt</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">t<span class="token punctuation">.</span></span>CommitId</span><span class="token punctuation">.</span><span class="token function">lt</span><span class="token punctuation">(</span><span class="token number">200L</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name"><span class="token namespace">t<span class="token punctuation">.</span></span>Id</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">t<span class="token punctuation">.</span></span>CommitId</span><span class="token punctuation">,</span>
    <span class="token class-name"><span class="token namespace">t<span class="token punctuation">.</span></span>Id</span><span class="token punctuation">.</span><span class="token function">desc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Dao lambda</span>
dao<span class="token punctuation">.</span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> t <span class="token operator">-&gt;</span> <span class="token class-name">SelectOrderCondition</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>
                <span class="token class-name"><span class="token namespace">t<span class="token punctuation">.</span></span>Id</span><span class="token punctuation">.</span><span class="token function">gt</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">t<span class="token punctuation">.</span></span>CommitId</span><span class="token punctuation">.</span><span class="token function">lt</span><span class="token punctuation">(</span><span class="token number">200L</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name"><span class="token namespace">t<span class="token punctuation">.</span></span>Id</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">t<span class="token punctuation">.</span></span>CommitId</span><span class="token punctuation">,</span>
                <span class="token class-name"><span class="token namespace">t<span class="token punctuation">.</span></span>Id</span><span class="token punctuation">.</span><span class="token function">desc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Dsl</span>
winUserLoginDao
    <span class="token punctuation">.</span><span class="token function">ctx</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">t<span class="token punctuation">.</span></span>AuthType</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">t<span class="token punctuation">.</span></span>LoginIp</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">t<span class="token punctuation">.</span></span>LoginDt</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">t<span class="token punctuation">.</span></span>Terminal</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">t<span class="token punctuation">.</span></span>Failed</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">orderBy</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">t<span class="token punctuation">.</span></span>LoginDt</span><span class="token punctuation">.</span><span class="token function">desc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span>query<span class="token punctuation">.</span><span class="token function">toOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> query<span class="token punctuation">.</span><span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token class-name">Item</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9d1-4-\u7CBE\u786E\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#_9d1-4-\u7CBE\u786E\u66F4\u65B0" aria-hidden="true">#</a> 9D1.4.\u7CBE\u786E\u66F4\u65B0</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">WinUserBasisTable</span> tu <span class="token operator">=</span> winUserBasisDao<span class="token punctuation">.</span><span class="token function">getTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Dao map</span>
<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Field</span><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> setter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
setter<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">tu<span class="token punctuation">.</span></span>Nickname</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getNickname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
setter<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">tu<span class="token punctuation">.</span></span>CommitId</span><span class="token punctuation">,</span> commit<span class="token punctuation">.</span><span class="token function">getCommitId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
winUserBasisDao<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>tu<span class="token punctuation">,</span> setter<span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">tu<span class="token punctuation">.</span></span>Id</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Dao pojo</span>
<span class="token class-name">WinUserBasisTable</span> upo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WinUserBasisTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
upo<span class="token punctuation">.</span><span class="token function">setNickname</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getNickname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
upo<span class="token punctuation">.</span><span class="token function">setCommitId</span><span class="token punctuation">(</span>commit<span class="token punctuation">.</span><span class="token function">getCommitId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
winUserBasisDao<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>tu<span class="token punctuation">,</span> upo<span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">tu<span class="token punctuation">.</span></span>Id</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Dsl</span>
winPermEntryDao
    <span class="token punctuation">.</span><span class="token function">ctx</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>tu<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">tu<span class="token punctuation">.</span></span>CommitId</span><span class="token punctuation">,</span> commit<span class="token punctuation">.</span><span class="token function">getCommitId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">tu<span class="token punctuation">.</span></span>ModifyDt</span><span class="token punctuation">,</span> commit<span class="token punctuation">.</span><span class="token function">getCommitDt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">tu<span class="token punctuation">.</span></span>Remark</span><span class="token punctuation">,</span> remark<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">tu<span class="token punctuation">.</span></span>Id</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span>permId<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9d1-5-\u5206\u9875\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_9d1-5-\u5206\u9875\u67E5\u8BE2" aria-hidden="true">#</a> 9D1.5.\u5206\u9875\u67E5\u8BE2</h2><p>\u5206\u9875\u67E5\u8BE2\u4F7F\u7528<code>PageJooqHelper</code>\u6216<code>PageJdbcHelper</code>\uFF0C \u4E24\u8005\u90FD\u8FDB\u884C\u4E86\u67E5\u8BE2\u4F18\u5316\uFF0C\u53EF\u4F7F\u7528\u7F13\u5B58\u7684\u603B\u8BB0\u5F55\u6570total\u3002</p><ul><li>total &lt; 0\uFF0CDB\u6267\u884Ccount\u548Cselect</li><li>total = 0\uFF0CDB\u4E0Dcount\uFF0C\u4E0Dselect</li><li>total &gt; 0\uFF0CDB\u4E0Dcount\uFF0C\u4F46select</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">WinUserBasisTable</span> t1 <span class="token operator">=</span> winUserBasisDao<span class="token punctuation">.</span><span class="token function">getTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// dao dsl</span>
<span class="token class-name">PageJooqHelper</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>dao<span class="token punctuation">,</span> page<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>t1<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">t1<span class="token punctuation">.</span></span>Id</span><span class="token punctuation">.</span><span class="token function">ge</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">order</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">t1<span class="token punctuation">.</span></span>Id</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">t1<span class="token punctuation">.</span></span>CommitId</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token class-name">WinUserBasisTable</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// wrap query</span>
val qry4 <span class="token operator">=</span> dsl<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span>t1<span class="token punctuation">.</span><span class="token function">asterisk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>t1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">t1<span class="token punctuation">.</span></span>Id</span><span class="token punctuation">.</span><span class="token function">ge</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">PageJooqHelper</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>dao<span class="token punctuation">,</span> page<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">wrap</span><span class="token punctuation">(</span>qry4<span class="token punctuation">,</span> order<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token class-name">WinUserBasisTable</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9d1-6-\u903B\u8F91\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#_9d1-6-\u903B\u8F91\u5220\u9664" aria-hidden="true">#</a> 9D1.6.\u903B\u8F91\u5220\u9664</h2><p>\u903B\u8F91\u5220\u9664\u4F7F\u7528<code>WingsJooqDaoJournal</code>\u5373\u53EF\uFF0C\u4E0D\u8FC7wings\u63A8\u8350\u7269\u7406\u5220\u9664\u3002</p><ul><li>dao.delete - by condition</li><li>dao.deleteById - by id</li></ul><p>\u4F7F\u7528<code>JournalJooqHelp</code>\u6216<code>JournalJdbcHelp</code>\uFF0C\u53EF\u4EE5\u89E6\u53D1jooq\u76D1\u542C\u548Ctrigger\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">JournalJooqHelp</span><span class="token punctuation">.</span><span class="token function">deleteByIds</span><span class="token punctuation">(</span>dsl<span class="token punctuation">,</span> <span class="token class-name">Tst</span>\u4E2D\u6587\u4E5F\u5206\u8868<span class="token class-name">Table<span class="token punctuation">.</span>Tst</span>\u4E2D\u6587\u4E5F\u5206\u8868<span class="token punctuation">,</span> <span class="token number">12L</span><span class="token punctuation">,</span> <span class="token number">1L</span><span class="token punctuation">,</span> <span class="token number">2L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">JournalJooqHelp</span><span class="token punctuation">.</span><span class="token function">deleteByIds</span><span class="token punctuation">(</span>tmpl<span class="token punctuation">,</span> <span class="token string">&quot;\`tst_\u4E2D\u6587\u4E5F\u5206\u8868\`&quot;</span><span class="token punctuation">,</span> <span class="token number">34L</span><span class="token punctuation">,</span> <span class="token number">3L</span><span class="token punctuation">,</span> <span class="token number">4L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// UPDATE \`tst_\u4E2D\u6587\u4E5F\u5206\u8868\` SET commit_id=34, delete_dt=NOW(3)  WHERE id IN (3,4)</span>
<span class="token comment">// DELETE FROM \`tst_\u4E2D\u6587\u4E5F\u5206\u8868\`  WHERE id IN (3,4)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function h(D,_){const a=e("ExternalLinkIcon");return o(),c("div",null,[i,k,n("ul",null,[n("li",null,[n("a",d,[r,t(a)])]),n("li",null,[n("a",m,[v,t(a)])]),n("li",null,[n("a",b,[f,t(a)])])]),g])}const j=p(u,[["render",h],["__file","9d1.jooq-dsl-gen.html.vue"]]);export{j as default};