import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,f as s}from"./app-e023e888.js";const l={},p=s(`<h1 id="_4h-联合登录" tabindex="-1"><a class="header-anchor" href="#_4h-联合登录" aria-hidden="true">#</a> 4H.联合登录</h1><p>在wings应用中实现联合登录。一个在App1中登录的用户，可以通过App1的session，自动登录联合的其他应用。</p><h2 id="登录流程" tabindex="-1"><a class="header-anchor" href="#登录流程" aria-hidden="true">#</a> 登录流程</h2><p>假设有2个Wings应用，App1和App2，组成一个联合登录的Union，当用户登录App1获取TK1后， 用户在访问App2时，通过TK1可以在App2自动上完成登录及Session绑定，情况如下，</p><ul><li>User在App1上登录，并获得TK1，含authType(TP)和SessionId(ID)信息</li><li>User使用TK1访问App2时，会发生， <ul><li>App2上已登录，有TK2时，直接绑定TK1</li><li>App2上未登录，App1自动登录，获取TK2并绑定TK1</li></ul></li><li>任意App#上登出，则在App#上分别销毁TK1和TK2</li></ul><div class="language-sequence line-numbers-mode" data-ext="sequence"><pre class="language-sequence"><code>%%{init: {&#39;theme&#39;: &#39;base&#39;,&#39;themeVariables&#39;: {
&#39;loopTextColor&#39;: &#39;#4abf8a&#39;
}}}%%

autonumber
actor User
participant App1
participant App2

User -&gt;&gt; +App1: login App1
App1 --&gt;&gt; -User: TK1(TP+ID)

User -&gt;&gt; +App2: visit App2 with TK1

alt logined App2
    App2 -&gt;&gt; +App1: TK1 ok ? bind TK2(TP+ID)?
    App1 --&gt;&gt; -App2: bind TK1 and TK2, retrun ok
else no login
    App2 -&gt;&gt; +App1: TK1 ok ?
    App1 -&gt;&gt; +App2: login App2 with TP
    App2 --&gt;&gt;-App1: bind TK1 and TK2, retrun TK2
    App1 --&gt;&gt;-App2: bind TK1 and TK2, retrun ok
end

App2 --&gt;&gt; -User: return ok with TK1

User -&gt;&gt; +App2: logout
App2 -&gt;&gt; App1: logout
App2 --&gt;&gt; -User: ok
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d=[p];function a(r,t){return n(),e("div",null,d)}const u=i(l,[["render",a],["__file","4h-uni-auth.html.vue"]]);export{u as default};
