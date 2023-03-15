import{_ as e,X as a,Y as i,a3 as s}from"./framework-a66c2b6a.js";const n={},o=s(`<h1 id="_4c-customize-security" tabindex="-1"><a class="header-anchor" href="#_4c-customize-security" aria-hidden="true">#</a> 4C.Customize Security</h1><p>在Wings所有工程中，配置<code>*.properties</code>和声明<code>@Bean</code>都可以定制功能。 但很多功能间存在复杂依赖，需要使用者自行关照，需要阅读代码。</p><h2 id="_4c-1-定制登录" tabindex="-1"><a class="header-anchor" href="#_4c-1-定制登录" aria-hidden="true">#</a> 4C.1.定制登录</h2><p>登录页面<code>login-page*</code>（带<code>page</code>的）和处理接口<code>*login*</code>，区别如下，</p><ul><li>login-page - 展示给用户的登录页面，一般是401时自动302重定向</li><li>login - 为提交凭证后的处理或回调接口，由filter执行</li></ul><p>可以通过以下4种方式，不同程度的改变Warlock提供的默认登录页面和返回结果。</p><ul><li>expose ComboWingsAuthPageHandler.Combo，增加处理细节</li><li>expose WingsAuthPageHandler，替换处理细节</li><li>指定 wings.warlock.security.login-page，定向到自定义页面</li><li>expose AuthenticationSuccessHandler，AuthenticationFailureHandler处理登录事件</li><li>expose LogoutSuccessHandler 处理登出的事件</li></ul><p>默认实现中，login时在cookie和header中放置sessionId，logout时清空session。</p><p>需要注意的，http协议的header和cookie的大小写问题，因此建议全小写。</p><ul><li>header RFC2616 <em>不</em>区分大小写，有些代理或工具会自动转为全小写</li><li>cookie RFC2019 区分大小写，一般保存原样</li><li>已知header默认自动转小写有swagger-ui和webpack-dev-server(node http)</li></ul><p>NonceLoginSuccessHandler配合NonceTokenSessionHelper实现了oauth一次性token换取session的功能。 所以如果需要此功能，需要自行实现AuthenticationSuccessHandler继承NonceLoginSuccessHandler。</p><p>Oauth通过定制host和state参数，构造指令，完成重定向定制，参考 AuthStateBuilder 类。</p><ul><li>重定向 - <code>http</code>或<code>/</code>开头的302跳转</li><li>回写 - 非空的内容，直接写回到response</li><li>考虑到安全性，以上必须预设在配置文件中，参考<code>wings.warlock.just-auth.safe-*</code></li></ul><p>注意，<code>safe-host</code>对以下功能有约束。</p><ul><li>用request有host参数时，检查redirect-uri的<code>{host}</code>，通过则使用host参数构造uri</li><li>state中重定向是以http开头时，检查host，不通过时，直接回写，而非重定向。</li></ul><h2 id="_4c-2-定制验证" tabindex="-1"><a class="header-anchor" href="#_4c-2-定制验证" aria-hidden="true">#</a> 4C.2.定制验证</h2><ul><li>expose ComboWingsAuthDetailsSource.Combo，增加details</li><li>expose WingsAuthDetailsSource 替换处理细节</li><li>expose ComboWingsUserDetailsService.Combo，增加加载细节</li><li>expose WingsUserDetailsService，替换用户加载</li></ul><h2 id="_4c-3-定制授权" tabindex="-1"><a class="header-anchor" href="#_4c-3-定制授权" aria-hidden="true">#</a> 4C.3.定制授权</h2><p>除了默认实现的User，Role，Perm体系外，Warlock支持以下用户和权限的细粒度定制，</p><ul><li>NonceUserDetailsCombo - 一次性登录</li><li>MemoryUserDetailsCombo - 按uid，登录名，登录方式，挂载用户和权限</li><li>NonceTokenSessionHelper - oauth2流程外，通过一次性state换取SessionId</li></ul><h2 id="_4c-4-登录时验证权限" tabindex="-1"><a class="header-anchor" href="#_4c-4-登录时验证权限" aria-hidden="true">#</a> 4C.4.登录时验证权限</h2><p>因为wings的用户及权限，在一个数据库中统一管理，不同的app可能需要不同的权限。 比如admin中，必须具有ROLE_ADMIN才可以访问，否则登录成功后，所有功能都是403，并不友好。</p><p>所以在登录时，使用authType前缀，可以直接验证基本权限，如果不具备，则登录失败。</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">wings.warlock.security.zone-perm.admin</span><span class="token punctuation">=</span><span class="token value attr-value">ROLE_ADMIN</span>
<span class="token comment"># 支持变量\`authType\`和\`authZone\`，可以通过param或path获得（PathPattern）</span>
<span class="token key attr-name">wings.warlock.security.login-proc-url</span><span class="token punctuation">=</span><span class="token value attr-value">/auth/{authType}-{authZone}/login.json</span>
<span class="token comment"># 兼容性更好，通过路径参数同时支持authType和authZone</span>
<span class="token comment">#/auth/{authType:[^-]+}{splitter:-?}{authZone:[^-]*}/login.json</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下URL都能传递authZone，推荐QueryString，不支持时使用PathVariable，</p><ul><li>QueryString - /auth/username/login.json?authZone=admin</li><li>PathVariable - /auth/username-admin/login.json</li></ul><p>此外，也可以在登录成功后，使用authedPerm验证权限，也具备自动登出功能，其区别是，</p><ul><li>authZone以登录失败返回，没有写入session，是一般的登录动作，即加载信息并验证</li><li>authedPerm则先登录成功，写入session，无权限时再登出session，是登录+登出2个动作</li></ul><h2 id="_4c-5-按appname设定" tabindex="-1"><a class="header-anchor" href="#_4c-5-按appname设定" aria-hidden="true">#</a> 4C.5.按appName设定</h2><p>此功能，默认未实现，开启时，需要遵守以下基本原则，以避免误用。</p><ul><li>从安全角度，不可扩大授权，应该最小化权限。</li><li>从使用角度，精简权限的数据结构，每app应独立，混用容易复杂化。</li></ul><p>需要定制 ComboWarlockAuthzService.Combo，来根据spring.application.name调整权限。</p><h2 id="_4c-6-按登录ip设定" tabindex="-1"><a class="header-anchor" href="#_4c-6-按登录ip设定" aria-hidden="true">#</a> 4C.6.按登录ip设定</h2><p>可以通过remote ip控制登录或权限集大小。不过要考虑代理和移动网络等动态ip的情况。</p>`,34),l=[o];function t(r,c){return a(),i("div",null,l)}const u=e(n,[["render",t],["__file","4c-security.html.vue"]]);export{u as default};
