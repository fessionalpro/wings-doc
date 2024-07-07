import{_ as i}from"./faceless_icon-WJtzrDUE.js";import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,c as r,b as t,f as o,w as l,d as e,e as c,o as d}from"./app-BcJ4NaN5.js";const h={},p=c('<h1 id="_2-虚空假面" tabindex="-1"><a class="header-anchor" href="#_2-虚空假面"><span>2.虚空假面</span></a></h1><p><img src="'+i+'" alt="faceless_void"></p><blockquote><p><code>Void</code>，J8脸, <code>public static void main</code> 他是来自超维视界的一名访客，一个时间之外的境域。</p></blockquote><p>数据层（MySql兼容系，如H2)封装。支持表和数据的版本管理，强类型支持，分表分库能力。</p><h2 id="_2-1-模块划分" tabindex="-1"><a class="header-anchor" href="#_2-1-模块划分"><span>2.1.模块划分</span></a></h2><ul><li>faceless - 数据库基本功能和定义：锁，类型，enum和i18n等</li><li>faceless-flywave - 数据库版本管理</li><li>faceless-jooq - 基于Jooq的数据库访问层</li><li>faceless-jooqggen - jooq 代码生成</li><li>faceless-shard - 基于shardingsphere的分表分库配置</li><li>faceless-test - 测试包，含数据源</li></ul><h2 id="_2-2-分布式主键-lightid" tabindex="-1"><a class="header-anchor" href="#_2-2-分布式主键-lightid"><span>2.2.分布式主键(LightId)</span></a></h2><p>分布式主键有<code>snowflake</code>方案可选，但<code>LightId</code>支持CRC8做伪随机编码使用。 参考<a href="https://github.com/trydofor/professional-mirana" target="_blank" rel="noopener noreferrer">pro.fessioinal.mirana</a>项目。</p><p>实现了基于JDBC的LightId，在Jooq生成pojo时，自动继承<code>LightIdAware</code>，可以当作key使用。 具体细节参考<code>LightIdService</code>的实现。</p><h2 id="_2-3-数据库enum类和多国语" tabindex="-1"><a class="header-anchor" href="#_2-3-数据库enum类和多国语"><span>2.3.数据库Enum类和多国语</span></a></h2><p>schema版本2019_0521_01，定义了enum和i18n表，分别定义业务级枚举code，如状态， 可以使用<code>ConstantEnumGenerate</code>自动生成java类，保持db和java代码的一致。</p><p>i18n可以使用CombinableMessageSource动态添加，处理service内消息的多国语。</p><h2 id="_2-3-更多章节" tabindex="-1"><a class="header-anchor" href="#_2-3-更多章节"><span>2.3.更多章节</span></a></h2>',13);function f(m,u){const a=n("RouteLink");return d(),r("div",null,[p,t("ul",null,[t("li",null,[o(a,{to:"/zh/2-faceless/2a-flywave.html"},{default:l(()=>[e("表和数据的版本")]),_:1}),e(" - 以Sql和Git为核心，绑定表结构和代码关系")]),t("li",null,[o(a,{to:"/zh/2-faceless/2b-jooq.html"},{default:l(()=>[e("强类型及DSL能力")]),_:1}),e(" - 从数据库生成强类型代码：pojo, dao")]),t("li",null,[o(a,{to:"/zh/2-faceless/2c-shard.html"},{default:l(()=>[e("按需分表分库")]),_:1}),e(" - 完成数据的分表分库功能，平稳处理大数据量")]),t("li",null,[o(a,{to:"/zh/2-faceless/2d-mysql-h2.html"},{default:l(()=>[e("Mysql体系的知识")]),_:1}),e(" - Mysql系数据库有关知识")]),t("li",null,[o(a,{to:"/zh/2-faceless/2e-qa-flywave.html"},{default:l(()=>[e("Flywave话题")]),_:1}),e(" - Flywave版本及日志表有关")]),t("li",null,[o(a,{to:"/zh/2-faceless/2f-qa-jooq.html"},{default:l(()=>[e("Jooq使用话题")]),_:1}),e(" - Jooq有关的话题")]),t("li",null,[o(a,{to:"/zh/2-faceless/2g-qa-shard.html"},{default:l(()=>[e("分表分库话题")]),_:1}),e(" - Sharding有关的话题")]),t("li",null,[o(a,{to:"/zh/2-faceless/2h-time-zone.html"},{default:l(()=>[e("时间和时区")]),_:1}),e(" - 和数据库有关的时间和时区")])])])}const v=s(h,[["render",f],["__file","index.html.vue"]]),b=JSON.parse('{"path":"/zh/2-faceless/","title":"2.虚空假面","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"clock","category":["虚空","首页"],"description":"2.虚空假面 faceless_void Void，J8脸, public static void main 他是来自超维视界的一名访客，一个时间之外的境域。 数据层（MySql兼容系，如H2)封装。支持表和数据的版本管理，强类型支持，分表分库能力。 2.1.模块划分 faceless - 数据库基本功能和定义：锁，类型，enum和i18n等 face...","GIT_REPO_HEAD":"2024-07-07 fbb1f4817448a18f6c9bd497c9b5837508d2198e","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/2-faceless/"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/2-faceless/"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"2.虚空假面"}],["meta",{"property":"og:description","content":"2.虚空假面 faceless_void Void，J8脸, public static void main 他是来自超维视界的一名访客，一个时间之外的境域。 数据层（MySql兼容系，如H2)封装。支持表和数据的版本管理，强类型支持，分表分库能力。 2.1.模块划分 faceless - 数据库基本功能和定义：锁，类型，enum和i18n等 face..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://wings.fessional.pro/faceless_icon.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2.虚空假面\\",\\"image\\":[\\"https://wings.fessional.pro/faceless_icon.png\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"2.1.模块划分","slug":"_2-1-模块划分","link":"#_2-1-模块划分","children":[]},{"level":2,"title":"2.2.分布式主键(LightId)","slug":"_2-2-分布式主键-lightid","link":"#_2-2-分布式主键-lightid","children":[]},{"level":2,"title":"2.3.数据库Enum类和多国语","slug":"_2-3-数据库enum类和多国语","link":"#_2-3-数据库enum类和多国语","children":[]},{"level":2,"title":"2.3.更多章节","slug":"_2-3-更多章节","link":"#_2-3-更多章节","children":[]}],"git":{"createdTime":1655689944000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":3}]},"readingTime":{"minutes":1.54,"words":462},"filePathRelative":"zh/2-faceless/README.md","localizedDate":"2022年6月20日","autoDesc":true}');export{v as comp,b as data};
