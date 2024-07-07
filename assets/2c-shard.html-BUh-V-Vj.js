import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as a,e as o}from"./app-BcJ4NaN5.js";const r={},c=o('<h1 id="_2c-按需分表分库" tabindex="-1"><a class="header-anchor" href="#_2c-按需分表分库"><span>2C.按需分表分库</span></a></h1><blockquote><p>对膨胀的数据增加一个状态，时间在此停止，分而治之，合而用之。</p></blockquote><p>使用ShardingJdbc完成数据的分表分库功能，平稳处理大数据量。 Wings使用shard广泛表示DataSharding，ReadWrite Splitting/Separation。</p><h2 id="_2c-1-分表分库的不足" tabindex="-1"><a class="header-anchor" href="#_2c-1-分表分库的不足"><span>2C.1.分表分库的不足</span></a></h2><p>因为<code>ShardingJdbc</code>在执行SCHEMA变更时，存在一定的SQL解析问题(index,trigger)， 所以在做SCHEMA和<code>journal</code>功能时，使用普通数据源，通过<code>flywave</code>完成。 <a href="https://shardingsphere.apache.org/document/current/cn/features/sharding/principle/parse/" target="_blank" rel="noopener noreferrer">参考SQL解析引擎</a></p><p>业务开始可能不必须考虑分表，当需要时，可使用<code>flywave</code>工具生成表和迁移数据。 <s>DQL,DML,DDL,TCL,DAL,DCL,GENERAL中，DDL和DCL使用真实数据源，其他使用sharding数据源。</s> 默认下，DDL,DCL使用<code>plain数据源</code>，DML等使用<code>shard数据源</code>执行， 也可以手动指定数据源，以完成定制的数据操作。</p><h2 id="_2c-2-执行sql中的事项" tabindex="-1"><a class="header-anchor" href="#_2c-2-执行sql中的事项"><span>2C.2.执行SQL中的事项</span></a></h2><p><a href="https://dev.mysql.com/doc/refman/8.0/en/sql-syntax-data-definition.html" target="_blank" rel="noopener noreferrer">DDL - Data Definition Statements</a></p><ul><li><code>ALTER TABLE</code></li><li><code>CREATE INDEX</code></li><li><code>CREATE TABLE</code></li><li><code>CREATE TRIGGER</code></li><li><code>DROP INDEX</code></li><li><code>DROP TABLE</code> 只可以一次一个table</li><li><code>DROP TRIGGER</code> 需要手动指定本表，系统根据本表和分表命名规则执行</li><li><code>TRUNCATE TABLE</code></li></ul><p>其中，除系统为<code>journal</code>生成的trigger外，手写删除容易出现数据不一致。</p><p><a href="https://dev.mysql.com/doc/refman/8.0/en/sql-syntax-data-manipulation.html" target="_blank" rel="noopener noreferrer">DML - Data Manipulation Statements</a></p><ul><li><code>DELETE</code></li><li><code>INSERT</code></li><li><code>REPLACE</code></li><li><code>UPDATE</code></li></ul><p>以上类型之外的SQL，请使用注解来强制指定<code>数据源</code>和<code>本表名</code>，跳过SQL自动解析。 理论上，不应该使用flywave执行DDL,DCL和DML之外的SQL，不属于版本管理范围。</p>',13),n=[c];function i(d,l){return a(),t("div",null,n)}const h=e(r,[["render",i],["__file","2c-shard.html.vue"]]),m=JSON.parse('{"path":"/zh/2-faceless/2c-shard.html","title":"2C.按需分表分库","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"layer-group","category":["虚空","分表"],"description":"2C.按需分表分库 对膨胀的数据增加一个状态，时间在此停止，分而治之，合而用之。 使用ShardingJdbc完成数据的分表分库功能，平稳处理大数据量。 Wings使用shard广泛表示DataSharding，ReadWrite Splitting/Separation。 2C.1.分表分库的不足 因为ShardingJdbc在执行SCHEMA变更时...","GIT_REPO_HEAD":"2024-07-07 fbb1f4817448a18f6c9bd497c9b5837508d2198e","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/2-faceless/2c-shard.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/2-faceless/2c-shard.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"2C.按需分表分库"}],["meta",{"property":"og:description","content":"2C.按需分表分库 对膨胀的数据增加一个状态，时间在此停止，分而治之，合而用之。 使用ShardingJdbc完成数据的分表分库功能，平稳处理大数据量。 Wings使用shard广泛表示DataSharding，ReadWrite Splitting/Separation。 2C.1.分表分库的不足 因为ShardingJdbc在执行SCHEMA变更时..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2C.按需分表分库\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"2C.1.分表分库的不足","slug":"_2c-1-分表分库的不足","link":"#_2c-1-分表分库的不足","children":[]},{"level":2,"title":"2C.2.执行SQL中的事项","slug":"_2c-2-执行sql中的事项","link":"#_2c-2-执行sql中的事项","children":[]}],"git":{"createdTime":1655901635000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":2}]},"readingTime":{"minutes":1.32,"words":397},"filePathRelative":"zh/2-faceless/2c-shard.md","localizedDate":"2022年6月22日","autoDesc":true}');export{h as comp,m as data};
