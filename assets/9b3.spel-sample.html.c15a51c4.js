import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as i,b as e,e as o,d as r,f as a,r as d}from"./app.9a05138f.js";const s={},n=e("h1",{id:"_9b3-spel实例",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_9b3-spel实例","aria-hidden":"true"},"#"),o(" 9B3.SpEl实例")],-1),p={href:"https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/expressions.html",target:"_blank",rel:"noopener noreferrer"},h=a('<h2 id="_9b3-1-aop中使用" tabindex="-1"><a class="header-anchor" href="#_9b3-1-aop中使用" aria-hidden="true">#</a> 9B3.1.Aop中使用</h2><p><code>@Cacheable</code>和<code>@DoubleKill</code>基于MethodBasedEvaluationContext存在以下内置变量</p><ul><li><code>#root.method</code> - 被Aop的method</li><li><code>#root.target</code> - method的执行对象</li><li><code>#root.caches</code> - 受影响的缓存（DK无）</li><li><code>#root.methodName</code> - method.getName</li><li><code>#root.targetClass</code> - target.getClass</li><li><code>#root.args</code> - method的所有参数</li><li><code>#root.args[0]</code>, <code>#p0</code> or <code>#a0</code>，都为第1个参数，0-based</li><li><code>#paraName</code> - 以参数名使用，通过ParameterNameDiscoverer</li><li><code>#result</code> - 调用结果（DK无）</li></ul><h2 id="_9b3-2-常用表达" tabindex="-1"><a class="header-anchor" href="#_9b3-2-常用表达" aria-hidden="true">#</a> 9B3.2.常用表达</h2><p>特殊引用和格式</p><ul><li><code>#this</code> - refers to the current evaluation object</li><li><code>#root</code> - refers to the root context object</li><li><code>@foo</code> - lookup bean named foo</li><li><code>T(xxx)</code> - refers to type</li><li><code>#{ ... }</code> - expression templating</li></ul><p>null检查及默认值 <code>@Value(&quot;#{systemProperties[&#39;pop3.port&#39;] ?: 25}&quot;)</code></p><ul><li><code>null?:&#39;Unknown&#39;</code> - name != null ? name : &quot;Unknown&quot;</li><li><code>PlaceOfBirth?.City</code> - PlaceOfBirth.City != null ? PlaceOfBirth.City : null</li></ul><p>类stream的filter和map操作</p><ul><li><code>Members.?[Nationality == &#39;Serbian&#39;]</code> - Members.filter</li><li><code>Members.![placeOfBirth.city]</code> - Members.map(it.placeOfBirth.city)</li></ul><p>常规列表类和对象类导航</p><ul><li><code>Members[0].Inventions[6]</code></li><li><code>Officers[&#39;president&#39;].PlaceOfBirth.City</code></li></ul><p>字面量构造List</p><ul><li><code>{1,2,3,4}</code> - <code>[1,2,3,4]</code>的<code>List&lt;Integer&gt;</code></li><li><code>{{&#39;a&#39;,&#39;b&#39;},{&#39;x&#39;,&#39;y&#39;}}</code> - <code>[[&#39;a&#39;,&#39;b&#39;],[&#39;x&#39;,&#39;y&#39;]]</code>的<code>List&lt;List&lt;String&gt;&gt;</code></li></ul>',14);function m(u,f){const t=d("ExternalLinkIcon");return c(),i("div",null,[n,e("p",null,[o("在Cachable，DoubleKill的Aop场景，Meepo中会用到"),e("a",p,[o("Spring Expression Language (SpEL)"),r(t)])]),h])}const g=l(s,[["render",m],["__file","9b3.spel-sample.html.vue"]]);export{g as default};
