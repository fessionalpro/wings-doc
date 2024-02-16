import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as a,f as n}from"./app-RvkmO4dA.js";const i={},o=n('<h1 id="_4e-dynamic-tweaking" tabindex="-1"><a class="header-anchor" href="#_4e-dynamic-tweaking"><span>4E.Dynamic Tweaking</span></a></h1><p>The system clock, logging level, and exception stack can be set dynamically at runtime, at global or thread level.</p><h2 id="_4e-1-underlying-principle" tabindex="-1"><a class="header-anchor" href="#_4e-1-underlying-principle"><span>4E.1.Underlying Principle</span></a></h2><p>In the SilencerCurse module, the following structurally similar classes for global control,</p><ul><li>TweakClock - tweak clock</li><li>TweakLogger - tweak logging level, limited to Logback</li><li>TweakStack - tweak stack of CodeException</li></ul><p>The principle is to set param to static or ThreadLocal to get valid values on demand.</p><h2 id="_4e-2-usage" tabindex="-1"><a class="header-anchor" href="#_4e-2-usage"><span>4E.2.Usage</span></a></h2><p>Set up the URL of AdminTweakController and its permissions to avoid misuse and unwanted results.</p><p>To tweak the clock, the following substitution is required in the code</p><ul><li>System.currentTimeMillis - Now.millis()</li><li>java.time.Xxxx.now - Now.xxx()</li><li>Any date that needs to be debugged should be taken from Now</li></ul><p>In Slardar, set the TerminalContext using TerminalIterceptor. At this point, through the TweakEventListener and its Event, you can tweak of single application or cluster.</p><p>OkHttpTweakLogInterceptor can make okhttp log and TweakLogger work together.</p><p>And in WarlockShow, AdminTweakController is provided for administrators to easily debug by user.</p><p>Due to the large impact of system-level global settings, no default implementation is provided in Wings.</p><h2 id="_4e-3-caution" tabindex="-1"><a class="header-anchor" href="#_4e-3-caution"><span>4E.3.Caution</span></a></h2><p>Thread-level tweaking is mainly based on TransmittableThreadLocal, so its conventions should be followed when using it. Especially for threads not from the wings preconfiged thread pool, you need to pay attention to Context replication to avoid losing them.</p><p>Date and time in the business, try to use Now, use a very few performance cost can get the ability to cross timeline. Try not to tweak the system clock to avoid causing confusion of events or even failure of checks at startup.</p>',17),l=[o];function r(c,s){return t(),a("div",null,l)}const g=e(i,[["render",r],["__file","4e-tweak.html.vue"]]),m=JSON.parse('{"path":"/4-warlock/4e-tweak.html","title":"4E.Dynamic Tweaking","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"debug","category":["Warlock","Tweaking"],"description":"4E.Dynamic Tweaking The system clock, logging level, and exception stack can be set dynamically at runtime, at global or thread level. 4E.1.Underlying Principle In the SilencerC...","GIT_REPO_HEAD":"2024-02-16 3fdd45de377187002fd49a06332fb14346c10eb1","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/4-warlock/4e-tweak.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/4-warlock/4e-tweak.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"4E.Dynamic Tweaking"}],["meta",{"property":"og:description","content":"4E.Dynamic Tweaking The system clock, logging level, and exception stack can be set dynamically at runtime, at global or thread level. 4E.1.Underlying Principle In the SilencerC..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-18T08:37:26.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2023-06-18T08:37:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4E.Dynamic Tweaking\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-18T08:37:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"4E.1.Underlying Principle","slug":"_4e-1-underlying-principle","link":"#_4e-1-underlying-principle","children":[]},{"level":2,"title":"4E.2.Usage","slug":"_4e-2-usage","link":"#_4e-2-usage","children":[]},{"level":2,"title":"4E.3.Caution","slug":"_4e-3-caution","link":"#_4e-3-caution","children":[]}],"git":{"createdTime":1680228107000,"updatedTime":1687077446000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":4}]},"readingTime":{"minutes":0.88,"words":263},"filePathRelative":"4-warlock/4e-tweak.md","localizedDate":"March 31, 2023","autoDesc":true}');export{g as comp,m as data};
