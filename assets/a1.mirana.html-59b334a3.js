import{_ as t}from"./mirana_icon-3b2b70a1.js";import{_ as o,X as c,Y as l,$ as a,a0 as e,a1 as n,a3 as p,F as i}from"./framework-e2173353.js";const r={},d=a("h1",{id:"a1-mirana-the-moon-princess",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#a1-mirana-the-moon-princess","aria-hidden":"true"},"#"),n(" A1.Mirana the Moon Princess")],-1),u=a("img",{src:"https://img.shields.io/maven-central/v/pro.fessional/mirana?color=00DD00",alt:"Maven Central"},null,-1),g=a("img",{src:"https://img.shields.io/nexus/s/pro.fessional/mirana?server=https%3A%2F%2Foss.sonatype.org",alt:"Sonatype Snapshots"},null,-1),k={href:"https://coveralls.io/github/trydofor/pro.fessional.mirana",target:"_blank",rel:"noopener noreferrer"},h=a("img",{src:"https://coveralls.io/repos/github/trydofor/pro.fessional.mirana/badge.svg",alt:"Coverage Status"},null,-1),m=p('<p><img src="'+t+`" alt="mirana"></p><blockquote><p><code>POM(.xml)</code>, the moon princess, she has a sacred arrow and a big cat.</p></blockquote><p>java8, 0-dependency, is an addition to guava, <code>commons-*</code>.</p><h2 id="a1-1-how-to-use" tabindex="-1"><a class="header-anchor" href="#a1-1-how-to-use" aria-hidden="true">#</a> A1.1.How to use</h2><p>① DIY <code>clone</code> and <code>install</code> is powerful.</p><p>② Using Maven Central is stable.</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>pro.fessional<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mirana<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>③ Using SNAPSHOT is the latest.</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>oss-sonatype<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>oss-sonatype<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>https://oss.sonatype.org/content/repositories/snapshots/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>snapshots</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enabled</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enabled</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>snapshots</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="a1-2-naming-convention" tabindex="-1"><a class="header-anchor" href="#a1-2-naming-convention" aria-hidden="true">#</a> A1.2.Naming convention</h2><ul><li>Null - The default value to replace null <code>null</code></li><li>None - the default value of empty</li><li>Sugar - static thread-safe tool can be used as kotlin Syntax-Sugar</li><li>Help - business-related or lifecycle helper class</li><li>Util - static thread-safe tool class</li></ul><h2 id="a1-3-square-root-sqrt" tabindex="-1"><a class="header-anchor" href="#a1-3-square-root-sqrt" aria-hidden="true">#</a> A1.3.Square Root (sqrt)</h2><p>The version number is <code>sqrt</code> + <code>3-part version</code> pattern, e.g. √2 are <code>1.4.0</code>, <code>1.4.1</code>, <code>1.4.14</code>. If the version is not enough, then write infinitely <code>1.4.14213562373095</code></p><ul><li>√1 = <code>1.0.0</code></li><li>√2 = <code>1.4.0</code>, <code>1.4.1</code>, <code>1.4.14</code></li><li>√3 = <code>1.7.0</code>, <code>1.7.3</code>, <code>1.7.32</code></li><li>√4 = <code>2.0.0</code></li><li>√5 = <code>2.2.0</code>, <code>2.2.3</code>, <code>2.2.4</code></li><li>√6 = <code>2.4.0</code>, <code>2.4.4</code>, <code>2.4.5</code></li><li>√7 = <code>2.6.0</code>, <code>2.6.4</code>, <code>2.6.5</code></li><li>√8 = <code>2.8.0</code>, <code>2.8.2</code>, <code>2.8.3</code></li><li>√9 = <code>3.0.0</code></li></ul><h2 id="a1-4-project-links" tabindex="-1"><a class="header-anchor" href="#a1-4-project-links" aria-hidden="true">#</a> A1.4.Project Links</h2>`,15),v={href:"https://github.com/trydofor/pro.fessional.mirana",target:"_blank",rel:"noopener noreferrer"},f={href:"https://gitee.com/trydofor/pro.fessional.mirana",target:"_blank",rel:"noopener noreferrer"};function b(_,x){const s=i("ExternalLinkIcon");return c(),l("div",null,[d,a("p",null,[u,g,a("a",k,[h,e(s)])]),m,a("ul",null,[a("li",null,[n("github - "),a("a",v,[n("https://github.com/trydofor/pro.fessional.mirana"),e(s)])]),a("li",null,[n("gitee - "),a("a",f,[n("https://gitee.com/trydofor/pro.fessional.mirana"),e(s)])])])])}const q=o(r,[["render",b],["__file","a1.mirana.html.vue"]]);export{q as default};
