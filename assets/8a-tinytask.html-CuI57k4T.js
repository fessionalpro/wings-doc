import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as a,e as i}from"./app-DEdToB0k.js";const n={},o=i('<h1 id="_8a-tinytask-component" tabindex="-1"><a class="header-anchor" href="#_8a-tinytask-component"><span>8A.TinyTask Component</span></a></h1><p>Based on Spring Schedule, provides database-centric task scheduling.</p><ul><li>Auto discovery and execution</li><li>Can cancel, start, change config at runtime</li><li>Enable task notification</li><li>Query task execution history</li></ul><h2 id="_8a-1-design-requirement" tabindex="-1"><a class="header-anchor" href="#_8a-1-design-requirement"><span>8A.1.Design Requirement</span></a></h2><p>TinyTask is designed to be strongly typed and static, so by default it is limited to dynamically adding tasks.</p><ul><li>The task object must be a SpringBean</li><li>Use @TinyTask.Auto to auto discover</li><li>Entry methods must be annotated with @TinyTask</li><li>Set task properties via configuration file</li><li>Final configuration is based on database unless version overrides</li><li>Tasks can only be started in restricted app and run modes</li><li>Task itself can be concurrency controlled (Jvm and Database)</li></ul><h2 id="_8a-2-config-override" tabindex="-1"><a class="header-anchor" href="#_8a-2-config-override"><span>8A.2.Config Override</span></a></h2><p>Tasks can be added automatically or manually. Beans with @TinyTask.Auto are started automatically. They can also be started manually using the TinyTaskService.schedule method.</p><p>The task configuration is merged first, with priority from highest to lowest.</p><ul><li>property value of the task&#39;s own key</li><li>default value of the task</li><li>value from the annotation</li></ul><p>The above merged config becomes the tasks properties and will be compared with the current value in the database. The larger version takes precedence, and if equal, the database (win_task_define table) takes precedence.</p><h2 id="_8a-3-task-schedule" tabindex="-1"><a class="header-anchor" href="#_8a-3-task-schedule"><span>8A.3.Task Schedule</span></a></h2><p>Tasks by execution time are divided into <code>fast</code> and <code>@Scheduled</code>, corresponding to 2 thread pools. Tasks that generally finish in seconds are fast tasks and run in the <code>fast</code> thread pool, otherwise they run in the <code>@Scheduled</code> default.</p><p>A task must set one of cron/idle/rate for task scheduling. If both are set, cron overrides idle, idle overrides rate.</p><h2 id="_8a-4-task-control" tabindex="-1"><a class="header-anchor" href="#_8a-4-task-control"><span>8A.4.Task Control</span></a></h2><p>TinyTask provides a Controller to control task by default</p><ul><li>task-running - list of running tasks</li><li>task-defined - list of defined tasks</li><li>task-result - list of task history</li><li>task-cancel - cancels a task</li><li>task-launch - starts a task</li><li>task-force - forces a task to start</li><li>task-enable - enable or disable a task</li><li>task-prop-save - update a task&#39;s properties</li><li>task-prop-load - load properties of a task</li><li>task-prop-conf - task configuration properties</li><li>task-prop-diff - task property differences</li></ul><p>Recommended to control task in hardcoding, for more secure and strongly typed,</p><ul><li>TinyTaskConfService - configuration related service</li><li>TinyTaskExecService - execute related services</li><li>TinyTaskService - scheduling task entry</li></ul><h2 id="_8a-5-execute-flow" tabindex="-1"><a class="header-anchor" href="#_8a-5-execute-flow"><span>8A.5.execute flow</span></a></h2><p>normal schedule (launch)</p><img src="https://www.plantuml.com/plantuml/svg/bLF1QiCm3BttAtGg7MJidiCeMyTWZ3BMmiwg_TAOEd9mdD3-_Uoa6mpIa5tY-5dlwKcMrqrW7zhABlP6BdjkJYzdg1ryPnJe_f56u9mijwBAbT5t6NbKhWCzioZSL7dhgbVh3cpVdJf5VlmczgtmBoC9tQ0mWWsxn63z5wR3XOp-bst5Lcrn3cGAWl31WfPBuhfEYszblfs6Oyb9AaLIG5MFSvEJqeFrXtCsdUvK2TrQ-AXn_Ls5Y6SaKIqsP3owBoa2y4a-foF2i7q2onHfwq8qCf3wgpPo9Ed1URae9oETEu6IJQeGIgVdPlHeMXkk-JBIJl1GiB5J_F5cV_PA6IaR2_xj_6G9OnFWCOnkce2V_Y_M41rVm3S0" alt=""><p>force execute (force)</p><img src="https://www.plantuml.com/plantuml/svg/ZL4zYm8n4Etz5LCgx66VGaIyLkGKhiubRzt1E0D9Tj5_Vybg8xSdTicRl8zvMQTiO-ulONPakHrjEdzUuGw80plGnuecO4EjHeSv-yL_h6-MYcxHic1hrL1GwvzX-haH-sc5Qjn5MBzN3NLwS1ry7n0DfSTndWlUaE2QIuxfr-C61K2iyePEoFVh1bPUaNQQIv0xQQo8vKGoWkzvaI6MGS-W6fCko9twTnqZKX_omwyXhu9bQpcyul-jFDa1NwDIGowKXMbNkgeEipN4bq__1G00" alt="">',24),s=[o];function r(l,c){return a(),t("div",null,s)}const h=e(n,[["render",r],["__file","8a-tinytask.html.vue"]]),u=JSON.parse('{"path":"/8-radiant/8a-tinytask.html","title":"8A.TinyTask Component","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"clock","category":["Tiny","Task"],"description":"8A.TinyTask Component Based on Spring Schedule, provides database-centric task scheduling. Auto discovery and execution Can cancel, start, change config at runtime Enable task n...","GIT_REPO_HEAD":"2025-01-17 e638e7035dc7958e3f145793e37c871eb02f12d5","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/8-radiant/8a-tinytask.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/8-radiant/8a-tinytask.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"8A.TinyTask Component"}],["meta",{"property":"og:description","content":"8A.TinyTask Component Based on Spring Schedule, provides database-centric task scheduling. Auto discovery and execution Can cancel, start, change config at runtime Enable task n..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-09T11:57:11.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2025-01-09T11:57:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"8A.TinyTask Component\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-09T11:57:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"8A.1.Design Requirement","slug":"_8a-1-design-requirement","link":"#_8a-1-design-requirement","children":[]},{"level":2,"title":"8A.2.Config Override","slug":"_8a-2-config-override","link":"#_8a-2-config-override","children":[]},{"level":2,"title":"8A.3.Task Schedule","slug":"_8a-3-task-schedule","link":"#_8a-3-task-schedule","children":[]},{"level":2,"title":"8A.4.Task Control","slug":"_8a-4-task-control","link":"#_8a-4-task-control","children":[]},{"level":2,"title":"8A.5.execute flow","slug":"_8a-5-execute-flow","link":"#_8a-5-execute-flow","children":[]}],"git":{"createdTime":1672191701000,"updatedTime":1736423831000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":7}]},"readingTime":{"minutes":1.57,"words":472},"filePathRelative":"8-radiant/8a-tinytask.md","localizedDate":"December 28, 2022","autoDesc":true}');export{h as comp,u as data};
