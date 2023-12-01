import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,f as s}from"./app-6c801206.js";const l={},a=s(`<h1 id="_4h-union-login" tabindex="-1"><a class="header-anchor" href="#_4h-union-login" aria-hidden="true">#</a> 4H.Union Login</h1><p>Association login in wings app union. A user logged in App1 can auto login other apps of the union by App1&#39;s session.</p><h2 id="login-process" tabindex="-1"><a class="header-anchor" href="#login-process" aria-hidden="true">#</a> Login Process</h2><p>Suppose there are 2 apps, App1 and App2, in the wings union, when the user logins App1 and gets TK1, User can login App2 automatically by TK1, and then App1 and App2 session are bound as follows,</p><ul><li>User logins App1 and gets TK1 with authType(TP) and SessionId(ID) information</li><li>User accesses App2 using TK1, it happens that <ul><li>When logined App2 and TK2 is available, TK1 is bound directly</li><li>App2 is not logined, App1 auto login, gets TK2 and binds TK1</li></ul></li><li>If you log out on any App#, TK1 and TK2 are destroyed on App# respectively.</li></ul><div class="language-sequence line-numbers-mode" data-ext="sequence"><pre class="language-sequence"><code>%%{init: {&#39;theme&#39;: &#39;base&#39;,&#39;themeVariables&#39;: {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d=[a];function p(t,r){return i(),e("div",null,d)}const c=n(l,[["render",p],["__file","4h-uni-auth.html.vue"]]);export{c as default};
