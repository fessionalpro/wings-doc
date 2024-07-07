import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as t,e as i}from"./app-BcJ4NaN5.js";const l={},n=i('<h1 id="_8a-小任务模块" tabindex="-1"><a class="header-anchor" href="#_8a-小任务模块"><span>8A.小任务模块</span></a></h1><p>基于Spring Schedule提供了以database为中心的任务调度</p><ul><li>自动发现和执行</li><li>中途取消，启动，修改配置</li><li>设置任务通知</li><li>查询任务执行历史</li></ul><h2 id="_8a-1-设计要求" tabindex="-1"><a class="header-anchor" href="#_8a-1-设计要求"><span>8A.1.设计要求</span></a></h2><p>TinyTask设计为强类型，静态的，因此默认限制了动态添加任务。</p><ul><li>任务对象必须是SpringBean</li><li>使用@TinyTask.Auto注解的类可自动发现</li><li>入口方法必须使用@TinyTask注解标注</li><li>通过配置文件设置任务属性</li><li>最终配置以database为准，除非version覆盖</li><li>任务仅在限定的app和run mode中启动</li><li>任务自身可进行并发控制(Jvm及Database)</li></ul><h2 id="_8a-2-配置覆盖" tabindex="-1"><a class="header-anchor" href="#_8a-2-配置覆盖"><span>8A.2.配置覆盖</span></a></h2><p>任务可自动或手动添加，以@TinyTask.Auto注解的Bean会自动开始， 此外，通过TinyTaskService.schedule方法手动开始。</p><p>任务的配置会首先进行合并，优先级为从高到低依次为。</p><ul><li>任务自身key的属性值</li><li>任务的default值</li><li>annotation注解值</li></ul><p>以上合并后的配置文件，成为taks的property，会和database中当前值比较version 以version大者优先，相等时，以database（win_task_define表）优先。</p><h2 id="_8a-3-任务调度" tabindex="-1"><a class="header-anchor" href="#_8a-3-任务调度"><span>8A.3.任务调度</span></a></h2><p>任务按执行时间，分为<code>fast</code>和<code>@Scheduled</code>默认任务，对应2个的线程池。 一般任务秒级完成的为轻任务，在fast线程池中执行，否则为默认任务。</p><p>一个任务必须设置cron/idle/rate中任意一个值，以进行任务调度， 如果同时设置，则cron高于idle，idle高于rate覆盖。</p><h2 id="_8a-4-任务控制" tabindex="-1"><a class="header-anchor" href="#_8a-4-任务控制"><span>8A.4.任务控制</span></a></h2><p>TinyTask默认提供了控制的Controller</p><ul><li>task-running - 运行中的任务列表</li><li>task-defined - 定义的任务列表</li><li>task-result - 任务历史列表</li><li>task-cancel - 取消一个任务</li><li>task-launch - 启动任务</li><li>task-force - 强制执行任务</li><li>task-enable - 启动或禁用任务</li><li>task-prop-save - 更新任务配置</li><li>task-prop-load - 任务载入属性</li><li>task-prop-conf - 任务配置属性</li><li>task-prop-diff - 任务属性差异</li></ul><p>推荐在编码中进行任务控制，比较安全和强类型</p><ul><li>TinyTaskConfService - 配置相关服务</li><li>TinyTaskExecService - 执行相关服务</li><li>TinyTaskService - 调度任务入口</li></ul><h2 id="_8a-5-执行流程" tabindex="-1"><a class="header-anchor" href="#_8a-5-执行流程"><span>8A.5.执行流程</span></a></h2><p>通常排定 (launch)</p><img src="https://www.plantuml.com/plantuml/svg/bLF1QiCm3BttAtGg7MJidiCeMyTWZ3BMmiwg_TAOEd9mdD3-_Uoa6mpIa5tY-5dlwKcMrqrW7zhABlP6BdjkJYzdg1ryPnJe_f56u9mijwBAbT5t6NbKhWCzioZSL7dhgbVh3cpVdJf5VlmczgtmBoC9tQ0mWWsxn63z5wR3XOp-bst5Lcrn3cGAWl31WfPBuhfEYszblfs6Oyb9AaLIG5MFSvEJqeFrXtCsdUvK2TrQ-AXn_Ls5Y6SaKIqsP3owBoa2y4a-foF2i7q2onHfwq8qCf3wgpPo9Ed1URae9oETEu6IJQeGIgVdPlHeMXkk-JBIJl1GiB5J_F5cV_PA6IaR2_xj_6G9OnFWCOnkce2V_Y_M41rVm3S0" alt=""><p>强制执行 (force)</p><img src="https://www.plantuml.com/plantuml/svg/ZL4zYm8n4Etz5LCgx66VGaIyLkGKhiubRzt1E0D9Tj5_Vybg8xSdTicRl8zvMQTiO-ulONPakHrjEdzUuGw80plGnuecO4EjHeSv-yL_h6-MYcxHic1hrL1GwvzX-haH-sc5Qjn5MBzN3NLwS1ry7n0DfSTndWlUaE2QIuxfr-C61K2iyePEoFVh1bPUaNQQIv0xQQo8vKGoWkzvaI6MGS-W6fCko9twTnqZKX_omwyXhu9bQpcyul-jFDa1NwDIGowKXMbNkgeEipN4bq__1G00" alt="">',24),r=[n];function o(s,c){return t(),e("div",null,r)}const h=a(l,[["render",o],["__file","8a-tinytask.html.vue"]]),m=JSON.parse('{"path":"/zh/8-radiant/8a-tinytask.html","title":"8A.小任务模块","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"clock","category":["小小","任务"],"description":"8A.小任务模块 基于Spring Schedule提供了以database为中心的任务调度 自动发现和执行 中途取消，启动，修改配置 设置任务通知 查询任务执行历史 8A.1.设计要求 TinyTask设计为强类型，静态的，因此默认限制了动态添加任务。 任务对象必须是SpringBean 使用@TinyTask.Auto注解的类可自动发现 入口方法必...","GIT_REPO_HEAD":"2024-07-07 fbb1f4817448a18f6c9bd497c9b5837508d2198e","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/8-radiant/8a-tinytask.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/8-radiant/8a-tinytask.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"8A.小任务模块"}],["meta",{"property":"og:description","content":"8A.小任务模块 基于Spring Schedule提供了以database为中心的任务调度 自动发现和执行 中途取消，启动，修改配置 设置任务通知 查询任务执行历史 8A.1.设计要求 TinyTask设计为强类型，静态的，因此默认限制了动态添加任务。 任务对象必须是SpringBean 使用@TinyTask.Auto注解的类可自动发现 入口方法必..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-13T09:24:36.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-13T09:24:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"8A.小任务模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-13T09:24:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"8A.1.设计要求","slug":"_8a-1-设计要求","link":"#_8a-1-设计要求","children":[]},{"level":2,"title":"8A.2.配置覆盖","slug":"_8a-2-配置覆盖","link":"#_8a-2-配置覆盖","children":[]},{"level":2,"title":"8A.3.任务调度","slug":"_8a-3-任务调度","link":"#_8a-3-任务调度","children":[]},{"level":2,"title":"8A.4.任务控制","slug":"_8a-4-任务控制","link":"#_8a-4-任务控制","children":[]},{"level":2,"title":"8A.5.执行流程","slug":"_8a-5-执行流程","link":"#_8a-5-执行流程","children":[]}],"git":{"createdTime":1672191701000,"updatedTime":1718270676000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":4}]},"readingTime":{"minutes":2.19,"words":657},"filePathRelative":"zh/8-radiant/8a-tinytask.md","localizedDate":"2022年12月28日","autoDesc":true}');export{h as comp,m as data};
