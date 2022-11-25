import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as l,b as e,e as a,d as o,f as r,r as d}from"./app.9a05138f.js";const t={},s=r(`<h1 id="_4g-调用计时" tabindex="-1"><a class="header-anchor" href="#_4g-调用计时" aria-hidden="true">#</a> 4G.调用计时</h1><p>开箱即用的简单的性能分析，慢请求记录，属于调试功能，默认关闭。</p><ul><li>模块开关 - spring.wings.warlock.enabled.watching</li><li>数据层 - wings.warlock.watching.jooq-threshold</li><li>服务层 - wings.warlock.watching.service-threshold</li><li>Web层 - wings.warlock.watching.controller-threshold</li></ul><p>通过以上配置文件，设置模块是否开启，以及各层的慢响应的阈值， <code>-1</code>表示关闭，而<code>0</code>表示全部开启，其他正式值是slow的阈值，毫秒数。</p><h2 id="_4g-1-实现原理" tabindex="-1"><a class="header-anchor" href="#_4g-1-实现原理" aria-hidden="true">#</a> 4G.1.实现原理</h2><p>各层面的<code>计时</code>功能，分散在不同的工程模块中，在Warlock实现了自动配置。</p><ul><li>Controller层，基于Interceptor实现，默认对全部URL生效</li><li>Service层，基于AOP实现，需要手动使用@Watching注解标记方法</li><li>Database层，基于Jooq的ExecuteListener，对所有jooq生效</li></ul><p><code>计时</code>在Wings体系的Context自动开启，以调用的计数为基础，计数为0则视为结束。 不管是运行中还是已结束，都可以在日志中输出如下统计，默认会自动在结束时输出。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+--s--ms------ns-+---%-+---------------+---------------
|  1,426,497,039 | 100 | thread  | task and timing 
|    922,167,066 |  64 | XNIO-4  | /test/watching.json
|    504,329,973 |  35 | wings-1 | AsyncWatch.BadSelect
|    504,059,463 |  35 | wings-1 | ¦-AsyncWatch.sleep
|    663,100,505 |  46 | XNIO-4  | ¦-Service#normalFetch
|    128,767,339 |   9 | XNIO-4  | ¦-¦-JooqSlowSql:SelectQuery
|    213,964,147 |  14 | XNIO-4  | ¦-Service#errorFetch
|    199,774,730 |  14 | XNIO-4  | ¦-¦-JooqSlowSql:SelectQuery
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第1列为耗时，最多999秒，精确到ns</li><li>第2列为占比，以百分比显示，基数为level0的耗时之和</li><li>第3列为线程，计时所在的线程</li><li>第4列为<code>区间关系</code>及名字备注，用于分析调用关系</li></ul><p><code>计时</code>按照<code>开始时间</code>到<code>结束时间</code>形成<code>区间关系</code>，并以树状结构显示， 在线性调用中，<code>区间关系</code>也等于执行关系。但多线程下需要按线程分类。</p><h2 id="_4g-2-使用方法" tabindex="-1"><a class="header-anchor" href="#_4g-2-使用方法" aria-hidden="true">#</a> 4G.2.使用方法</h2><p>首先要开启watching模块，以便Warlock自动配置，然后设置各个threshold，非负时为开启。</p><p>默认的WebMvc体系中，<code>Controller</code>，<code>Service</code>，<code>Database</code>属于包含关系， 因此简单的慢响应分析，掌控Controller和Database即可。</p><p>假设，在Controller层定义3秒为阈值，在Database层定义100ms为阈值，直接设置配置即可。</p><p>当需要对Service层统计时，需要手动为需要关注的方法加上<code>@Watching</code>注解。</p><h2 id="_4g-3-注意事项" tabindex="-1"><a class="header-anchor" href="#_4g-3-注意事项" aria-hidden="true">#</a> 4G.3.注意事项</h2><p>此功能具有一定的入侵性，主要开发过程中的调优，当线上产品建议关闭，避免无意义的资源消耗。</p>`,18),h={href:"https://github.com/alibaba/arthas",target:"_blank",rel:"noopener noreferrer"};function g(p,u){const i=d("ExternalLinkIcon");return n(),l("div",null,[s,e("p",null,[a("无入侵的动态的程序诊断，推荐使用"),e("a",h,[a("Arthas"),o(i)])])])}const b=c(t,[["render",g],["__file","4g-watching.html.vue"]]);export{b as default};
