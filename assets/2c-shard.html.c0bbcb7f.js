import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as a,b as e,e as o,d as c,f as t,r}from"./app.9a05138f.js";const i={},s=e("h1",{id:"_2c-按需分表分库",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2c-按需分表分库","aria-hidden":"true"},"#"),o(" 2C.按需分表分库")],-1),_=e("blockquote",null,[e("p",null,"对膨胀的数据增加一个状态，时间在此停止，分而治之，合而用之。")],-1),h=e("p",null,"使用ShardingJdbc完成数据的分表分库功能，平稳处理大数据量。",-1),u=e("h2",{id:"_2c-1-分表分库的不足",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2c-1-分表分库的不足","aria-hidden":"true"},"#"),o(" 2C.1.分表分库的不足")],-1),L=e("code",null,"ShardingJdbc",-1),p=e("code",null,"journal",-1),D=e("code",null,"flywave",-1),E={href:"https://shardingsphere.apache.org/document/current/cn/features/sharding/principle/parse/",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,[o("业务开始可能不必须考虑分表，当需要时，可使用"),e("code",null,"flywave"),o("工具生成表和迁移数据。 "),e("s",null,"DQL,DML,DDL,TCL,DAL,DCL,GENERAL中，DDL和DCL使用真实数据源，其他使用sharding数据源。"),o(" 默认下，DDL,DCL使用"),e("code",null,"plain数据源"),o("，DML等使用"),e("code",null,"shard数据源"),o("执行， 也可以手动指定数据源，以完成定制的数据操作。")],-1),m=e("h2",{id:"_2c-2-执行sql中的事项",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2c-2-执行sql中的事项","aria-hidden":"true"},"#"),o(" 2C.2.执行SQL中的事项")],-1),T={href:"https://dev.mysql.com/doc/refman/8.0/en/sql-syntax-data-definition.html",target:"_blank",rel:"noopener noreferrer"},C=t("<ul><li><code>ALTER TABLE</code></li><li><code>CREATE INDEX</code></li><li><code>CREATE TABLE</code></li><li><code>CREATE TRIGGER</code></li><li><code>DROP INDEX</code></li><li><code>DROP TABLE</code> 只可以一次一个table</li><li><code>DROP TRIGGER</code> 需要手动指定本表，系统根据本表和分表命名规则执行</li><li><code>TRUNCATE TABLE</code></li></ul><p>其中，除系统为<code>journal</code>生成的trigger外，手写删除容易出现数据不一致。</p>",2),A={href:"https://dev.mysql.com/doc/refman/8.0/en/sql-syntax-data-manipulation.html",target:"_blank",rel:"noopener noreferrer"},R=t("<ul><li><code>DELETE</code></li><li><code>INSERT</code></li><li><code>REPLACE</code></li><li><code>UPDATE</code></li></ul><p>以上类型之外的SQL，请使用注解来强制指定<code>数据源</code>和<code>本表名</code>，跳过SQL自动解析。 理论上，不应该使用flywave执行DDL,DCL和DML之外的SQL，不属于版本管理范围。</p>",2);function S(g,x){const n=r("ExternalLinkIcon");return d(),a("div",null,[s,_,h,u,e("p",null,[o("因为"),L,o("在执行SCHEMA变更时，存在一定的SQL解析问题(index,trigger)， 所以在做SCHEMA和"),p,o("功能时，使用普通数据源，通过"),D,o("完成。 "),e("a",E,[o("参考SQL解析引擎"),c(n)])]),f,m,e("p",null,[e("a",T,[o("DDL - Data Definition Statements"),c(n)])]),C,e("p",null,[e("a",A,[o("DML - Data Manipulation Statements"),c(n)])]),R])}const k=l(i,[["render",S],["__file","2c-shard.html.vue"]]);export{k as default};
