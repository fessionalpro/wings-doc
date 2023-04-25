import{_ as n,X as t,Y as o,$ as e,a1 as i,a0 as r,a3 as s,C as d}from"./framework-e38ae8ee.js";const h={},c=s('<h1 id="_2g-sharding-faq-topic" tabindex="-1"><a class="header-anchor" href="#_2g-sharding-faq-topic" aria-hidden="true">#</a> 2G.Sharding Faq Topic</h1><p>Topics about database sharding and splitting.</p><h2 id="_2g-01-no-implementation-spi" tabindex="-1"><a class="header-anchor" href="#_2g-01-no-implementation-spi" aria-hidden="true">#</a> 2G.01. No implementation SPI</h2><p>No implementation class load from SPI with type <code>null</code></p><p>Avoid using Chinese in naming, for boundary test, find shardingsphere can directly handle Chinese table name, but for other naming will cause some parsing error.</p><p>Such as <code>sharding-algorithms.[中文也分表-inline]</code>, it will fail and make its <code>.type=null</code>, thus reporting an error.</p><p>No implementation class load from SPI <code>org.apache.shardingsphere.sharding.spi.ShardingAlgorithm</code> with type <code>null</code></p><h2 id="_2g-02-on-duplicate-key-update" tabindex="-1"><a class="header-anchor" href="#_2g-02-on-duplicate-key-update" aria-hidden="true">#</a> 2G.02.ON DUPLICATE KEY UPDATE</h2><p>INSERT INTO ... ON DUPLICATE KEY UPDATE can not support update for sharding column</p><p>then append sharding column and value to WHERE Clause</p>',10),p={href:"https://github.com/apache/shardingsphere/issues/14025",target:"_blank",rel:"noopener noreferrer"},l=e("p",null,"This feature was released around 5.1.0",-1);function u(g,m){const a=d("ExternalLinkIcon");return t(),o("div",null,[c,e("p",null,[e("a",p,[i("https://github.com/apache/shardingsphere/issues/14025"),r(a)])]),l])}const f=n(h,[["render",u],["__file","2g-qa-shard.html.vue"]]);export{f as default};
