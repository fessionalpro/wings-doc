import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c as a,d as s,f as p}from"./app-371aab79.js";const t={},l=p('<h1 id="_4h-union-login" tabindex="-1"><a class="header-anchor" href="#_4h-union-login" aria-hidden="true">#</a> 4H.Union Login</h1><p>Association login in wings app union. A user logged in App1 can auto login other apps of the union by App1&#39;s session.</p><h2 id="login-process" tabindex="-1"><a class="header-anchor" href="#login-process" aria-hidden="true">#</a> Login Process</h2><p>Suppose there are 2 apps, App1 and App2, in the wings union, when the user logins App1 and gets TK1, User can login App2 automatically by TK1, and then App1 and App2 session are bound as follows,</p><ul><li>User logins App1 and gets TK1 with authType(TP) and SessionId(ID) information</li><li>User accesses App2 using TK1, it happens that <ul><li>When logined App2 and TK2 is available, TK1 is bound directly</li><li>App2 is not logined, App1 auto login, gets TK2 and binds TK1</li></ul></li><li>If you log out on any App#, TK1 and TK2 are destroyed on App# respectively.</li></ul>',5);function r(d,u){const e=i("Mermaid");return o(),a("div",null,[l,s(e,{id:"mermaid-41",code:"eJyNkT9vgzAQxfd8ipMqRKuEAdShYkhUNUvVJQPtbuCaWAWb+k9bCfHde8aBQKKqYcH2/e6957PGT4uiwC1ne8XqBUAQtFxwk0IbmgPWGKYQ5kxjuPL7N6Y4yyvUVGiJDyspmwx/zJOspHL0zT3L3x9YSMWu64JgQQtmjRS2zlG5TWGkglfdbxqmDC94w4SBx6aJL48SJ+BoiNZrWDoohUruuRga3A8iV40cl0L2Et9mu+Xz9u6iN0nhi2vuleGbm4Oj+4yV8bJYelvov56bOBMN8gM2kHNR0i45Om1O/BDG2x25GJjnV6DQKCtIhVqw0ghCeud/LGcOp/uMsxjus5vpEOmSkM6fSWh9nv668KJ0kxt9hvkTY5VjZgM+fwfKLa0Z+6kwvu30fKJLpr849cKv"})])}const g=n(t,[["render",r],["__file","4h-uni-auth.html.vue"]]);export{g as default};