import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as l,c as i,f as o}from"./app-mN42Vc4a.js";const t={},a=o('<h1 id="_0b-resthalf规范" tabindex="-1"><a class="header-anchor" href="#_0b-resthalf规范"><span>0B.RestHalf规范</span></a></h1><p>场景化业务的URL命名规范，参考了RESTFul和GraphQL，适用于无法资源化的业务，故取名叫<code>RestHalf</code>。</p><h2 id="_0b-1-业务场景化" tabindex="-1"><a class="header-anchor" href="#_0b-1-业务场景化"><span>0B.1.业务场景化</span></a></h2><p>在<code>RestHalf</code>实践中，业务的复杂性主要来自于 ①业务自身在演化 ②人员认知在涌现。</p><ul><li>做着做着，东西就变了，从轮子做到了自行车，这是演化</li><li>写着写着，思路清晰了，从摸象到最后摸全了，这是涌现</li></ul><p>在技术领域，没有银弹。wings实践注重场景化，任一方案都必须在具体场景中讨论。</p><ul><li>RESTFul的不够用在于其简单，而资源仅是业务的参与者之一</li><li>GraphQL的不好用在于其万能，问题尚未分解，只是多一种QL</li></ul><p>对于复杂的东西，唯有分解，对于变化的东西，唯有适应。 所谓场景化，就是把变化切片，固定上下文和寻找确定性，通常从以下方面入手。</p><ul><li>资源 - 数据流，任何资源都有唯一id，即便是从属关系</li><li>事件 - 业务流，事件触发数据的产生，变化和消失</li><li>功能 - 场景框，输入了什么，输出了什么，限定了界限</li></ul><p>场景化应遵循以下原则，以便容易跟上变化，容易分解和理解。</p><ul><li>能简单，就不要复杂。不要创造概念，持续奥卡姆&quot;剃头&quot;</li><li>能强关联，就不要弱关联。多路径时使用关键/强路径</li><li>能明示，就不要暗示。限定边界/输入/输出/异常</li></ul><h2 id="_0b-2-请求能post-就别get" tabindex="-1"><a class="header-anchor" href="#_0b-2-请求能post-就别get"><span>0B.2.请求能POST，就别GET</span></a></h2><p>除了资源类型，及特定场景用GET外，全部使用POST</p><ul><li>无POST环境的，如邮件中的下载 <code>/label/res-id-{tk}.pdf</code></li><li>约定重定向的，如SSO/OAuth登录，需要多次302</li><li>静态资源，如图片，样式等。</li></ul><p>此外，因GET请求全部信息都在URL中（cookie外），可被历史及缓存， 所以，任何敏感的请求，都必须有token防护，如次数，期限，权限等。</p><p>抽象化及资源化，容易有歧义，且与场景化原则略有冲突，因此建议全POST。</p><h2 id="_0b-3-传参能head-body-就别path-query" tabindex="-1"><a class="header-anchor" href="#_0b-3-传参能head-body-就别path-query"><span>0B.3.传参能Head/Body，就别path/query</span></a></h2><p>考虑到网关/切面处理，排错分析等，保持path及query参数简洁。</p><ul><li>path参数，最好没有或只有1个，超过1个时，需要考虑必要性</li><li>query string，应仅限功能参数，如分页及简单搜索</li><li>业务参数，应封装在Http body中，如Json</li><li>会话参数，应封装在Http Header中，如Token</li></ul><p>一个参数的Post请求，推荐直接传递。server端常见类型举例，</p><ul><li>Boolean:boolean - <code>true</code></li><li>BigDecimal/Long/Integer:number/string - <code>123</code> / <code>&quot;123&quot;</code></li><li>String:string - <code>&quot;string&quot;</code></li><li>LocalDateTime:string - <code>&quot;2021-06-06 06:06:06&quot;</code></li><li>LogLevel.TRACE:string - <code>&quot;TRACE&quot;</code></li></ul><p>client端的常见类型举例，</p><ul><li>JSON.stringify(&quot;string&quot;) - <code>&quot;string&quot;</code></li><li>JSON.stringify(123) - <code>123</code></li><li>JSON.stringify(true) - <code>true</code></li><li>JSON.stringify({str:&quot;string&quot;,dec:123,bol:true}) - <code>{&quot;str&quot;:&quot;string&quot;,&quot;dec&quot;:123,&quot;bol&quot;:true}</code></li></ul><h2 id="_0b-4-网址要明确身份-有前缀和后缀" tabindex="-1"><a class="header-anchor" href="#_0b-4-网址要明确身份-有前缀和后缀"><span>0B.4.网址要明确身份，有前缀和后缀</span></a></h2><p>场景化中，每个URL都是具体的角色，有其家族和职业。</p><ul><li>前缀如，业务类别<code>admin</code>，版本号<code>v1</code>等</li><li>后缀如，应答内容扩展名<code>.pdf</code></li><li>从后往前做时，建议与项目分包一致</li><li>从前往后做时，建议与页面功能一致</li></ul>',26),d=[a];function r(c,s){return l(),i("div",null,d)}const p=e(t,[["render",r],["__file","0b-rest-half.html.vue"]]);export{p as default};
