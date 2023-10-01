import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,f as s}from"./app-371aab79.js";const o={},t=s(`<h1 id="_4b-组合授权" tabindex="-1"><a class="header-anchor" href="#_4b-组合授权" aria-hidden="true">#</a> 4B.组合授权</h1><p>授权由权限(Perm)和角色(Role)组合而成。都在db中定义，通过模板自动生成java类</p><ul><li>功能权限 - role继承和扩展，身份马甲，临时增减，超级用户</li><li>数据隔离 - 管辖隔离，职能继承，助理扩展，临时授权</li></ul><h2 id="_4b-1-权限perm" tabindex="-1"><a class="header-anchor" href="#_4b-1-权限perm" aria-hidden="true">#</a> 4B.1 权限Perm</h2><p><code>Perm</code>由scope和action构成，都采用<code>英句号</code>分隔<code>全小写</code>命名法，参考java变量命名。</p><p>格式为<code>scope + (&#39;.&#39; + scope )* + &#39;.&#39; + action</code>，即多个级联scope，最后一个action</p><ul><li>scope是一个名词，支持所属关系，使用<code>.</code>分隔，<code>system.menu</code>属于<code>system</code></li><li>第一个scope不可以是ROLE前缀（spring默认是ROLE_）</li><li>action是一个动词，支持scope的所属关系，如<code>system.menu.read</code>属于<code>system.read</code></li><li><code>*</code>表示包含所有动作，仅用来配置所属关系，不能用在具体方法上</li></ul><p><code>Perm</code>主要用在方法级的鉴权上，即在方法上增加的注解，如<code>@Secured</code>，<code>@Pre*</code>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html</span>

<span class="token comment">// 推荐，通过SecuredAuthorizationManager调用hasAnyAuthority</span>
<span class="token annotation punctuation">@Secured</span><span class="token punctuation">(</span><span class="token class-name">PermConstant<span class="token punctuation">.</span>System<span class="token punctuation">.</span>User</span><span class="token punctuation">.</span>read<span class="token punctuation">)</span>

<span class="token comment">// JSR250 仅作用于ROLE</span>
<span class="token annotation punctuation">@RolesAllowed</span> <span class="token annotation punctuation">@PermitAll</span> <span class="token annotation punctuation">@DenyAll</span>

<span class="token comment">// 不推荐，因为比较长，且SpEL过于强大</span>
<span class="token annotation punctuation">@PreAuthorize</span><span class="token punctuation">(</span>hasAuthority <span class="token operator">+</span> <span class="token class-name">PermConstant<span class="token punctuation">.</span>System<span class="token punctuation">.</span>Perm</span><span class="token punctuation">.</span>create <span class="token operator">+</span> <span class="token class-name">End</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@PreAuthorize</span><span class="token punctuation">(</span><span class="token string">&quot;hasAuthority(&#39;&quot;</span> <span class="token operator">+</span> <span class="token class-name">PermConstant<span class="token punctuation">.</span>System<span class="token punctuation">.</span>Perm</span><span class="token punctuation">.</span>create <span class="token operator">+</span> <span class="token string">&quot;&#39;)&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@PreAuthorize</span><span class="token punctuation">(</span><span class="token string">&quot;hasAnyAuthority(T(pro.fessional.wings.warlock.security.autogen.PermConstant$System$User).read)&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4b-2-角色role" tabindex="-1"><a class="header-anchor" href="#_4b-2-角色role" aria-hidden="true">#</a> 4B.2.角色Role</h2><p><code>Role</code>不支持继承，是<code>全大写</code>无分隔的命名法（区分权限），参考java变量命名。</p><ul><li>在自动生成的java类中，采用和spring相同的<code>ROLE_</code>前缀。</li><li>Role是扁平的，但可配置隶属关系，如LEADER包括MEMBER</li><li>无分隔符，指以<code>_</code>连接的词，当做同一个词看待。</li><li>db中不建议使用前缀，加载时是自动增加默认前缀的（Spring默认是ROLE_）</li></ul><p><code>Role</code>主要用在filter级的配置上，如在配置url权限时。当然也可用在方法级。 在配置文件中使用时，需要带上spring的前缀，建议使用前缀，以区分Perm。</p><h2 id="_4b-3-运行机制" tabindex="-1"><a class="header-anchor" href="#_4b-3-运行机制" aria-hidden="true">#</a> 4B.3.运行机制</h2><p>Warlock在用户通过身份鉴别（renew）后，会分别加载同用户关联的Perm和Role， 并扁平化其各自的所属和继承关系，全部加载到SecurityContext中。</p><p>当<code>Perm</code>和<code>Role</code>(含前缀)的字符串以<code>-</code>开头时，表示排除此权限，其优先级最高。</p><p>可以通过配置<code>mem-auth</code>，进而修改用户不同登录方式的权限。 例如，实现ComboWarlockAuthzService.Combo 也可以按条件调整权限。</p><h2 id="_4b-4-数据权限" tabindex="-1"><a class="header-anchor" href="#_4b-4-数据权限" aria-hidden="true">#</a> 4B.4.数据权限</h2><p>数据权限，包括了用户，部门，公司，三个层级的可见性。</p><ul><li>用户(User)，以user_id为主，同时包括子账号</li><li>部门(Dept)，以dept_id为主，包括了部门间所属关系</li><li>公司(Corp)，以corp_id为主，通常和domain有关</li><li>租户(Saas)，以saas_id为主，通常在tenant的SaaS系统</li></ul>`,20),c=[t];function i(p,l){return a(),e("div",null,c)}const u=n(o,[["render",i],["__file","4b-authz.html.vue"]]);export{u as default};
