import{_ as o}from"./silencer_icon-cb83ab84.js";import{_ as s,Y as l,Z as r,a0 as i,a1 as n,a5 as t,a2 as e,a4 as c,C as d}from"./framework-3a8f5b7b.js";const u={},p=c('<h1 id="_1-silencer" tabindex="-1"><a class="header-anchor" href="#_1-silencer" aria-hidden="true">#</a> 1.Silencer</h1><p><img src="'+o+'" alt="silencer"></p><blockquote><p>silence fool, All magic in front of him will be silenced.</p></blockquote><p>Minimize deps on SpringBoot to provide auto and cascade configuration.</p><h2 id="_1-1-module-project" tabindex="-1"><a class="header-anchor" href="#_1-1-module-project" aria-hidden="true">#</a> 1.1.Module Project</h2><ul><li>silencer - auto conf prop/yaml and i18n message</li><li>silencer-curse - code, log, datetime utility</li><li>silencer-test - test utility eg. i18n message</li></ul><h2 id="_1-2-cascade-config" tabindex="-1"><a class="header-anchor" href="#_1-2-cascade-config" aria-hidden="true">#</a> 1.2.Cascade Config</h2><p>Wings recommends splitting the large config(application.*) into separate smaller configs grouped by feature or project. and provides default values that apply in 80% of cases. use the priority and cascading of configs to provide the final effective configuration.</p><p>Similar to CSS (Cascading Style Sheets), multiple key-value configs can exist in different configs, and the highest priority value is provided to the application as the configuration value.</p><h2 id="_1-3-more-sections" tabindex="-1"><a class="header-anchor" href="#_1-3-more-sections" aria-hidden="true">#</a> 1.3.More Sections</h2>',10);function f(h,g){const a=d("RouterLink");return l(),r("div",null,[p,i("ul",null,[i("li",null,[n(a,{to:"/en/1-silencer/1a-wings-conf.html"},{default:t(()=>[e("Auto Cascade Config")]),_:1}),e(" - splitting, overriding, disabling and profiling")]),i("li",null,[n(a,{to:"/en/1-silencer/1b-wings-i18n.html"},{default:t(()=>[e("Auto I18n Message")]),_:1}),e(" - like Config, auto and dynamic config I18n")]),i("li",null,[n(a,{to:"/en/1-silencer/1c-spring-auto.html"},{default:t(()=>[e("Auto Config Mechanism")]),_:1}),e(" - how to auto config with SpringBoot's principle")])])])}const v=s(u,[["render",f],["__file","index.html.vue"]]);export{v as default};
