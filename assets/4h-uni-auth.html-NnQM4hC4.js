import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as a,c as s,d as n,f as o}from"./app-mN42Vc4a.js";const t={},l=o('<h1 id="_4h-联合登录" tabindex="-1"><a class="header-anchor" href="#_4h-联合登录"><span>4H.联合登录</span></a></h1><p>在wings应用中实现联合登录。一个在App1中登录的用户，可以通过App1的session，自动登录联合的其他应用。</p><h2 id="登录流程" tabindex="-1"><a class="header-anchor" href="#登录流程"><span>登录流程</span></a></h2><p>假设有2个Wings应用，App1和App2，组成一个联合登录的Union，当用户登录App1获取TK1后， 用户在访问App2时，通过TK1可以在App2自动上完成登录及Session绑定，情况如下，</p><ul><li>User在App1上登录，并获得TK1，含authType(TP)和SessionId(ID)信息</li><li>User使用TK1访问App2时，会发生， <ul><li>App2上已登录，有TK2时，直接绑定TK1</li><li>App2上未登录，App1自动登录，获取TK2并绑定TK1</li></ul></li><li>任意App#上登出，则在App#上分别销毁TK1和TK2</li></ul>',5);function r(h,c){const e=i("Mermaid");return a(),s("div",null,[l,n(e,{id:"mermaid-41",code:"eJyNkT9vgzAQxfd8ipMqRKuEAdShYkhUNUvVJQPtbuCaWAWb+k9bCfHde8aBQKKqYcH2/e6957PGT4uiwC1ne8XqBUAQtFxwk0IbmgPWGKYQ5kxjuPL7N6Y4yyvUVGiJDyspmwx/zJOspHL0zT3L3x9YSMWu64JgQQtmjRS2zlG5TWGkglfdbxqmDC94w4SBx6aJL48SJ+BoiNZrWDoohUruuRga3A8iV40cl0L2Et9mu+Xz9u6iN0nhi2vuleGbm4Oj+4yV8bJYelvov56bOBMN8gM2kHNR0i45Om1O/BDG2x25GJjnV6DQKCtIhVqw0ghCeud/LGcOp/uMsxjus5vpEOmSkM6fSWh9nv668KJ0kxt9hvkTY5VjZgM+fwfKLa0Z+6kwvu30fKJLpr849cKv"})])}const m=p(t,[["render",r],["__file","4h-uni-auth.html.vue"]]);export{m as default};
