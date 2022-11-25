const e=JSON.parse('{"key":"v-788196a2","path":"/b-meepo/b4.engine.html","title":"B4.执行引擎","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"palette","category":["米波","模板"],"description":"其中各引擎的实现和执行上下文是不一样的，即变量作用域不一样，存在以下2个级别， session级，一次merge内的多次eval，同一context，eval间有影响，如js。; nothing级，每次eval的上下文无关联，eval间无影响，如sh依赖于bash设置。; 执行中的引擎环境，在每次eval时，可以被context覆盖，也可以不覆盖，依赖...","head":[["meta",{"property":"og:url","content":"https://wings.fessional.pro/b-meepo/b4.engine.html"}],["meta",{"property":"og:site_name","content":"WingsBoot"}],["meta",{"property":"og:title","content":"B4.执行引擎"}],["meta",{"property":"og:description","content":"其中各引擎的实现和执行上下文是不一样的，即变量作用域不一样，存在以下2个级别， session级，一次merge内的多次eval，同一context，eval间有影响，如js。; nothing级，每次eval的上下文无关联，eval间无影响，如sh依赖于bash设置。; 执行中的引擎环境，在每次eval时，可以被context覆盖，也可以不覆盖，依赖..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-30T11:35:20.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-07-30T11:35:20.000Z"}]],"GIT_REPO_HEAD":"2022-11-25 161e1b478ea0d213fbab0fdb15b18716e4c8d088"},"excerpt":"","headers":[{"level":2,"title":"B4.1.字典引擎map","slug":"b4-1-字典引擎map","link":"#b4-1-字典引擎map","children":[{"level":3,"title":"以句点分隔的导航类对象","slug":"以句点分隔的导航类对象","link":"#以句点分隔的导航类对象","children":[]},{"level":3,"title":"管道符链接函数，链式处理","slug":"管道符链接函数-链式处理","link":"#管道符链接函数-链式处理","children":[]},{"level":3,"title":"内置以下变量","slug":"内置以下变量","link":"#内置以下变量","children":[]}]},{"level":2,"title":"B4.2.来啥回啥raw","slug":"b4-2-来啥回啥raw","link":"#b4-2-来啥回啥raw","children":[]},{"level":2,"title":"B4.3.内容引入uri","slug":"b4-3-内容引入uri","link":"#b4-3-内容引入uri","children":[]},{"level":2,"title":"B4.4.直接执行exe","slug":"b4-4-直接执行exe","link":"#b4-4-直接执行exe","children":[]},{"level":2,"title":"B4.5.执行js脚本js","slug":"b4-5-执行js脚本js","link":"#b4-5-执行js脚本js","children":[]},{"level":2,"title":"B4.6.动态java代码java","slug":"b4-6-动态java代码java","link":"#b4-6-动态java代码java","children":[]},{"level":2,"title":"B4.7.动态java函数fun","slug":"b4-7-动态java函数fun","link":"#b4-7-动态java函数fun","children":[]}],"git":{"createdTime":1658547848000,"updatedTime":1659180920000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":3}]},"readingTime":{"minutes":5.11,"words":1533},"filePathRelative":"b-meepo/b4.engine.md","localizedDate":"2022年7月23日"}');export{e as data};
