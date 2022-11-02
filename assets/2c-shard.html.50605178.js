import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as d,o as a,c as r,b as e,e as o,d as c,f as t}from"./app.a11079fa.js";const i={},s=e("h1",{id:"_2c-\u6309\u9700\u5206\u8868\u5206\u5E93",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2c-\u6309\u9700\u5206\u8868\u5206\u5E93","aria-hidden":"true"},"#"),o(" 2C.\u6309\u9700\u5206\u8868\u5206\u5E93")],-1),_=e("blockquote",null,[e("p",null,"\u5BF9\u81A8\u80C0\u7684\u6570\u636E\u589E\u52A0\u4E00\u4E2A\u72B6\u6001\uFF0C\u65F6\u95F4\u5728\u6B64\u505C\u6B62\uFF0C\u5206\u800C\u6CBB\u4E4B\uFF0C\u5408\u800C\u7528\u4E4B\u3002")],-1),h=e("p",null,"\u4F7F\u7528ShardingJdbc\u5B8C\u6210\u6570\u636E\u7684\u5206\u8868\u5206\u5E93\u529F\u80FD\uFF0C\u5E73\u7A33\u5904\u7406\u5927\u6570\u636E\u91CF\u3002",-1),u=e("h2",{id:"_2c-1-\u5206\u8868\u5206\u5E93\u7684\u4E0D\u8DB3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2c-1-\u5206\u8868\u5206\u5E93\u7684\u4E0D\u8DB3","aria-hidden":"true"},"#"),o(" 2C.1.\u5206\u8868\u5206\u5E93\u7684\u4E0D\u8DB3")],-1),L=e("code",null,"ShardingJdbc",-1),p=e("code",null,"journal",-1),D=e("code",null,"flywave",-1),E={href:"https://shardingsphere.apache.org/document/current/cn/features/sharding/principle/parse/",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,[o("\u4E1A\u52A1\u5F00\u59CB\u53EF\u80FD\u4E0D\u5FC5\u987B\u8003\u8651\u5206\u8868\uFF0C\u5F53\u9700\u8981\u65F6\uFF0C\u53EF\u4F7F\u7528"),e("code",null,"flywave"),o("\u5DE5\u5177\u751F\u6210\u8868\u548C\u8FC1\u79FB\u6570\u636E\u3002 "),e("s",null,"DQL,DML,DDL,TCL,DAL,DCL,GENERAL\u4E2D\uFF0CDDL\u548CDCL\u4F7F\u7528\u771F\u5B9E\u6570\u636E\u6E90\uFF0C\u5176\u4ED6\u4F7F\u7528sharding\u6570\u636E\u6E90\u3002"),o(" \u9ED8\u8BA4\u4E0B\uFF0CDDL,DCL\u4F7F\u7528"),e("code",null,"plain\u6570\u636E\u6E90"),o("\uFF0CDML\u7B49\u4F7F\u7528"),e("code",null,"shard\u6570\u636E\u6E90"),o("\u6267\u884C\uFF0C \u4E5F\u53EF\u4EE5\u624B\u52A8\u6307\u5B9A\u6570\u636E\u6E90\uFF0C\u4EE5\u5B8C\u6210\u5B9A\u5236\u7684\u6570\u636E\u64CD\u4F5C\u3002")],-1),m=e("h2",{id:"_2c-2-\u6267\u884Csql\u4E2D\u7684\u4E8B\u9879",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2c-2-\u6267\u884Csql\u4E2D\u7684\u4E8B\u9879","aria-hidden":"true"},"#"),o(" 2C.2.\u6267\u884CSQL\u4E2D\u7684\u4E8B\u9879")],-1),T={href:"https://dev.mysql.com/doc/refman/8.0/en/sql-syntax-data-definition.html",target:"_blank",rel:"noopener noreferrer"},C=t("<ul><li><code>ALTER TABLE</code></li><li><code>CREATE INDEX</code></li><li><code>CREATE TABLE</code></li><li><code>CREATE TRIGGER</code></li><li><code>DROP INDEX</code></li><li><code>DROP TABLE</code> \u53EA\u53EF\u4EE5\u4E00\u6B21\u4E00\u4E2Atable</li><li><code>DROP TRIGGER</code> \u9700\u8981\u624B\u52A8\u6307\u5B9A\u672C\u8868\uFF0C\u7CFB\u7EDF\u6839\u636E\u672C\u8868\u548C\u5206\u8868\u547D\u540D\u89C4\u5219\u6267\u884C</li><li><code>TRUNCATE TABLE</code></li></ul><p>\u5176\u4E2D\uFF0C\u9664\u7CFB\u7EDF\u4E3A<code>journal</code>\u751F\u6210\u7684trigger\u5916\uFF0C\u624B\u5199\u5220\u9664\u5BB9\u6613\u51FA\u73B0\u6570\u636E\u4E0D\u4E00\u81F4\u3002</p>",2),A={href:"https://dev.mysql.com/doc/refman/8.0/en/sql-syntax-data-manipulation.html",target:"_blank",rel:"noopener noreferrer"},R=t("<ul><li><code>DELETE</code></li><li><code>INSERT</code></li><li><code>REPLACE</code></li><li><code>UPDATE</code></li></ul><p>\u4EE5\u4E0A\u7C7B\u578B\u4E4B\u5916\u7684SQL\uFF0C\u8BF7\u4F7F\u7528\u6CE8\u89E3\u6765\u5F3A\u5236\u6307\u5B9A<code>\u6570\u636E\u6E90</code>\u548C<code>\u672C\u8868\u540D</code>\uFF0C\u8DF3\u8FC7SQL\u81EA\u52A8\u89E3\u6790\u3002 \u7406\u8BBA\u4E0A\uFF0C\u4E0D\u5E94\u8BE5\u4F7F\u7528flywave\u6267\u884CDDL,DCL\u548CDML\u4E4B\u5916\u7684SQL\uFF0C\u4E0D\u5C5E\u4E8E\u7248\u672C\u7BA1\u7406\u8303\u56F4\u3002</p>",2);function S(g,x){const n=d("ExternalLinkIcon");return a(),r("div",null,[s,_,h,u,e("p",null,[o("\u56E0\u4E3A"),L,o("\u5728\u6267\u884CSCHEMA\u53D8\u66F4\u65F6\uFF0C\u5B58\u5728\u4E00\u5B9A\u7684SQL\u89E3\u6790\u95EE\u9898(index,trigger)\uFF0C \u6240\u4EE5\u5728\u505ASCHEMA\u548C"),p,o("\u529F\u80FD\u65F6\uFF0C\u4F7F\u7528\u666E\u901A\u6570\u636E\u6E90\uFF0C\u901A\u8FC7"),D,o("\u5B8C\u6210\u3002 "),e("a",E,[o("\u53C2\u8003SQL\u89E3\u6790\u5F15\u64CE"),c(n)])]),f,m,e("p",null,[e("a",T,[o("DDL - Data Definition Statements"),c(n)])]),C,e("p",null,[e("a",A,[o("DML - Data Manipulation Statements"),c(n)])]),R])}const k=l(i,[["render",S],["__file","2c-shard.html.vue"]]);export{k as default};