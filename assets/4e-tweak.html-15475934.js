import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as r,c as l,b as e,e as t,d as i,f as s}from"./app-76302e33.js";const c={},d=s('<h1 id="_4e-动态调节" tabindex="-1"><a class="header-anchor" href="#_4e-动态调节" aria-hidden="true">#</a> 4E.动态调节</h1><p>可以在运行时，按全局或线程级别，动态的设置系统时钟，日志级别，异常堆栈。</p><h2 id="_4e-1-实现原理" tabindex="-1"><a class="header-anchor" href="#_4e-1-实现原理" aria-hidden="true">#</a> 4E.1.实现原理</h2><p>在SilencerCurse模块中，存在以下结构类似的类，用于全局控制</p><ul><li>TweakClock - 调试时钟</li><li>TweakLogger - 调试日志级别，仅限于Logback</li><li>TweakStack - 调试CodeException的异常堆栈</li></ul><p>其原理是，static或ThreadLocal设置参数，按需取得有效值。</p><h2 id="_4e-2-使用方法" tabindex="-1"><a class="header-anchor" href="#_4e-2-使用方法" aria-hidden="true">#</a> 4E.2.使用方法</h2><p>设置好AdminTweakController的URL及其权限，避免滥用，造成不良后果。</p><p>对于时钟的调试，需要在编码时，需要进行以下替换，</p>',9),_=e("li",null,"System.currentTimeMillis - Now.millis()",-1),h={href:"http://Now.xxx",target:"_blank",rel:"noopener noreferrer"},p=e("li",null,"任何需要调试的日期，都应该从Now取值",-1),u=e("p",null,"在Slardar中，通过TerminalIterceptor设置TerminalContext， 此时，通过TweakEventListener及对应的事件，可完成单应用或集群的调试控制。",-1),x=e("p",null,"OkHttpTweakLogInterceptor可以使okhttp日志与TweakLogger联动",-1),k=e("p",null,"而在WarlockShow中，提供了AdminTweakController，可供管理员按用户简单调试。",-1),m=e("p",null,"因系统级全局设置影响较大，Wings中没有提供默认实现。",-1),w=e("h2",{id:"_4e-3-注意事项",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4e-3-注意事项","aria-hidden":"true"},"#"),t(" 4E.3.注意事项")],-1),T=e("p",null,"线程级调试，主要基于TransmittableThreadLocal自动完成，使用时要遵守其约定， 尤其在Wings配置的线程池外，自行启动的线程，需要注意Context复制，避免丢失。",-1),f=e("p",null,"业务中的日期时间，尽量使用Now，其性能损失非常小，却可以为业务代理穿越时间线的能力。 不用轻易调制系统时钟，避免造成事件混乱，甚至启动时检查失败。",-1);function L(g,E){const a=n("ExternalLinkIcon");return r(),l("div",null,[d,e("ul",null,[_,e("li",null,[t("java.time.Xxxx.now - "),e("a",h,[t("Now.xxx"),i(a)]),t("()")]),p]),u,x,k,m,w,T,f])}const C=o(c,[["render",L],["__file","4e-tweak.html.vue"]]);export{C as default};
