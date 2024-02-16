import{_ as o}from"./warlock_icon-bdRrkanv.js";import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as n,o as c,c as s,b as t,d as r,w as l,e,f as p}from"./app-RvkmO4dA.js";const d={},h=p('<h1 id="_4-术士大叔" tabindex="-1"><a class="header-anchor" href="#_4-术士大叔"><span>4.术士大叔</span></a></h1><p><img src="'+o+'" alt="warlock"></p><blockquote><p>无视魔免的地狱火加上致命链接，可以瞬间改变局势。</p></blockquote><p>基于Faceless和Slardar，提供了基本用户，鉴权授权，访问控制，数据隔离等功能。</p><h2 id="_4-1-模块划分" tabindex="-1"><a class="header-anchor" href="#_4-1-模块划分"><span>4.1.模块划分</span></a></h2><ul><li>warlock - 集成jooq和slardar</li><li>warlock-shadow - 集成slardar-sprint</li><li>warlock-bond - 集成登录授权的实现</li><li>warlock-codegen - 工程代码生成</li><li>warlock-test - 测试包，安全的登录</li></ul><h2 id="_4-2-访问控制" tabindex="-1"><a class="header-anchor" href="#_4-2-访问控制"><span>4.2.访问控制</span></a></h2><p>Warlock的访问控制，聚焦在以下几个场景和技术层面，</p><ul><li>Filter(Url) - 粗粒度控制场景，如角色，职能</li><li>Method(Aop) - 细粒度控制功能，如读取，写入，删除</li><li>Data - 数据隔离，如对象控制，ACL</li></ul><p>通过Url前缀特征，比较集中和简单，推荐使用。而Aop比较分散，粒度更细致。</p><p>在做Url的Matcher时，尽量避免规则交叉，特殊配置在前，AnyRequest在最后做默认配置， 当规则有交叉时，按FIFO匹配，spring中的调用关系如下，其底层数据结构是LinkedHashMap。</p><ul><li>FilterSecurityInterceptor.beforeInvocation</li><li>DefaultFilterInvocationSecurityMetadataSource.getAttributes</li></ul><p>wings配置顺序由宽松到严格(PermitAll &gt; Authenticated &gt; Authority)，最后AnyRequest收尾。 在Authority配置时，会按URL分组合并权限，以URL的ascii倒序排序，即英数先于<code>*</code>，宽松规则在后。</p><h2 id="_4-3-部分使用" tabindex="-1"><a class="header-anchor" href="#_4-3-部分使用"><span>4.3.部分使用</span></a></h2><p>Warlock提供了一套预定义的auth-perm-role体系，包括表结构，数据关系等。</p><p>默认实现的authn-authz和perm-role体系，依赖于全局UserId，具有一定限制。 任何系统中，登录及权限都有重要的安防和性能意义，通常有较高的集成度和复杂度。 所以，在部分使用此功能时，需要逐一排查配置项及注入的Bean。</p><p>默认实现中，读取及累积计数时，若数据库不存在对应表，则返回empty或忽略。</p><h2 id="_4-4-全部使用" tabindex="-1"><a class="header-anchor" href="#_4-4-全部使用"><span>4.4.全部使用</span></a></h2><p>WebSecurity在SpringBoot(3.0以前)需要继承Adapter实现配置，其约束很多， 因此在使用wings提供的自动配置功能时，需要注意以下特殊Bean的声明。</p><ul><li>WebSecurity - expose WebSecurityCustomizer Bean</li><li>HttpWebSecurity - expose HttpSecurityCustomizer Bean</li></ul><p>自定义WebSecurityConfigurerAdapter，需要注意Bean的生命周期和顺序关系。</p><blockquote><p>Is there an unresolvable circular reference? Error creating bean with name &#39;springSecurityFilterChain&#39;: Requested bean is currently in creation.</p></blockquote><p>以上错误，会发生在注入WebSecurityConfiguration的<code>@Bean</code>时。 总之，WebSecurity有特殊Bean，Configurer的链式调用也有顺序要求。</p><h2 id="_4-5-更多章节" tabindex="-1"><a class="header-anchor" href="#_4-5-更多章节"><span>4.5.更多章节</span></a></h2>',24);function u(m,_){const a=n("RouteLink");return c(),s("div",null,[h,t("ul",null,[t("li",null,[r(a,{to:"/zh/4-warlock/4a-authn.html"},{default:l(()=>[e("集成登录")]),_:1}),e(" - 多种登录方式，身份验证和令牌策略")]),t("li",null,[r(a,{to:"/zh/4-warlock/4b-authz.html"},{default:l(()=>[e("组合授权")]),_:1}),e(" - 权限(Perm)和角色(Role)的令牌体系")]),t("li",null,[r(a,{to:"/zh/4-warlock/4c-security.html"},{default:l(()=>[e("安全定制")]),_:1}),e(" - 定制登录，验证，授权")]),t("li",null,[r(a,{to:"/zh/4-warlock/4e-tweak.html"},{default:l(()=>[e("动态调节")]),_:1}),e(" - 全局及线程级调试时间，日志和异常")]),t("li",null,[r(a,{to:"/zh/4-warlock/4f-api-oauth.html"},{default:l(()=>[e("对外Api")]),_:1}),e(" - 限定功能的对外Api")]),t("li",null,[r(a,{to:"/zh/4-warlock/4g-watching.html"},{default:l(()=>[e("调用计时")]),_:1}),e(" - 对慢请求做计时及日志")]),t("li",null,[r(a,{to:"/zh/4-warlock/4h-uni-auth.html"},{default:l(()=>[e("联合登录")]),_:1}),e(" - 在wings应用能实现联合登录")])])])}const k=i(d,[["render",u],["__file","index.html.vue"]]),y=JSON.parse('{"path":"/zh/4-warlock/","title":"4.术士大叔","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"proxy","category":["术士","首页"],"description":"4.术士大叔 warlock 无视魔免的地狱火加上致命链接，可以瞬间改变局势。 基于Faceless和Slardar，提供了基本用户，鉴权授权，访问控制，数据隔离等功能。 4.1.模块划分 warlock - 集成jooq和slardar warlock-shadow - 集成slardar-sprint warlock-bond - 集成登录授权的实...","GIT_REPO_HEAD":"2024-02-16 3fdd45de377187002fd49a06332fb14346c10eb1","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/4-warlock/"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/4-warlock/"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"4.术士大叔"}],["meta",{"property":"og:description","content":"4.术士大叔 warlock 无视魔免的地狱火加上致命链接，可以瞬间改变局势。 基于Faceless和Slardar，提供了基本用户，鉴权授权，访问控制，数据隔离等功能。 4.1.模块划分 warlock - 集成jooq和slardar warlock-shadow - 集成slardar-sprint warlock-bond - 集成登录授权的实..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://wings.fessional.pro/warlock_icon.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-06-18T08:37:26.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"4.术士大叔"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2023-06-18T08:37:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4.术士大叔\\",\\"image\\":[\\"https://wings.fessional.pro/warlock_icon.png\\"],\\"dateModified\\":\\"2023-06-18T08:37:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"4.1.模块划分","slug":"_4-1-模块划分","link":"#_4-1-模块划分","children":[]},{"level":2,"title":"4.2.访问控制","slug":"_4-2-访问控制","link":"#_4-2-访问控制","children":[]},{"level":2,"title":"4.3.部分使用","slug":"_4-3-部分使用","link":"#_4-3-部分使用","children":[]},{"level":2,"title":"4.4.全部使用","slug":"_4-4-全部使用","link":"#_4-4-全部使用","children":[]},{"level":2,"title":"4.5.更多章节","slug":"_4-5-更多章节","link":"#_4-5-更多章节","children":[]}],"git":{"createdTime":1687077446000,"updatedTime":1687077446000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":1}]},"readingTime":{"minutes":2.4,"words":720},"filePathRelative":"zh/4-warlock/README.md","localizedDate":"2023年6月18日","autoDesc":true}');export{k as comp,y as data};
