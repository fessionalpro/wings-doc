import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as e,f as l}from"./app.d5a1af4c.js";const n={},r=l('<h1 id="_8a-小小任务" tabindex="-1"><a class="header-anchor" href="#_8a-小小任务" aria-hidden="true">#</a> 8A.小小任务</h1><p>基于Spring Schedule提供的以database为中心的任务调度</p><ul><li>自动发现和执行</li><li>中途取消，启动，修改配置</li><li>设置任务通知</li><li>查询任务执行历史</li></ul><h2 id="_8a-1-设计要求" tabindex="-1"><a class="header-anchor" href="#_8a-1-设计要求" aria-hidden="true">#</a> 8A.1.设计要求</h2><p>TinyTask设计为强类型，静态的，因为默认限制了动态添加任务。</p><ul><li>任务对象必须是SpringBean</li><li>使用@TinyTask.Auto注解的类可自动发现</li><li>入口方法必须使用@TinyTask注解标注</li><li>通过配置文件设置任务属性</li><li>最终配置以database为准，除非version覆盖</li><li>任务仅在限定的app和run mode中启动</li><li>任务自身可进行并发控制(Jvm及Database)</li></ul><h2 id="_8a-2-配置覆盖" tabindex="-1"><a class="header-anchor" href="#_8a-2-配置覆盖" aria-hidden="true">#</a> 8A.2.配置覆盖</h2><p>任务可自动或手动添加，以@TinyTask.Auto注解的Bean会自动开始， 此外，通过TinyTaskService.schedule方法手动开始。</p><p>任务的配置会首先进行合并，优先级为从高到底依次位。</p><ul><li>任务自身key的属性值</li><li>任务的default值</li><li>annotation注解值</li></ul><p>以上合并后的配置文件，成为property配置，会和database中当前值比较version 以version大者优先，相等时，以database（win_task_define表）优先。</p><h2 id="_8a-3-任务调度" tabindex="-1"><a class="header-anchor" href="#_8a-3-任务调度" aria-hidden="true">#</a> 8A.3.任务调度</h2><p>任务按执行时间，分为light和heavy任务，对应2个不同的线程池。 一般任务秒级完成的为轻任务，在fast线程池中执行，否则则heavy中执行。</p><p>一个任务必须设置cron/idle/rate中任意一个值，以进行任务调度， 如果同时设置，则cron高于idle，高于rate覆盖。</p><h2 id="_8a-4-任务控制" tabindex="-1"><a class="header-anchor" href="#_8a-4-任务控制" aria-hidden="true">#</a> 8A.4.任务控制</h2><p>TinyTask默认提供了控制的Controller</p><ul><li>运行中的任务列表 task-running</li><li>定义的任务列表 task-defined</li><li>任务历史列表 task-result</li><li>取消一个任务 task-cancel</li><li>启动任务 task-launch</li><li>强制执行任务 task-force</li><li>启动或禁用任务 task-enable</li><li>更新任务配置 task-prop-save</li><li>任务载入属性 task-prop-load</li><li>任务配置属性 task-prop-conf</li><li>任务属性差异 task-prop-diff</li></ul><p>推荐在编码中进行任务控制，比较安全和强类型</p><ul><li>TinyTaskConfService - 配置相关服务</li><li>TinyTaskExecService - 执行相关服务</li><li>TinyTaskService - 调度任务入口</li></ul>',19),t=[r];function s(d,o){return i(),e("div",null,t)}const p=a(n,[["render",s],["__file","8a-tinytask.html.vue"]]);export{p as default};
