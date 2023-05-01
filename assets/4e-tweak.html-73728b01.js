import{_ as n,Y as o,Z as r,a0 as e,a2 as a,a1 as i,a4 as l,C as s}from"./framework-3a8f5b7b.js";const c={},d=l('<h1 id="_4e-dynamic-tweaking" tabindex="-1"><a class="header-anchor" href="#_4e-dynamic-tweaking" aria-hidden="true">#</a> 4E.Dynamic Tweaking</h1><p>可以在运行时，按全局或线程级别，动态的设置系统时钟，日志级别，异常堆栈。</p><h2 id="_4e-1-实现原理" tabindex="-1"><a class="header-anchor" href="#_4e-1-实现原理" aria-hidden="true">#</a> 4E.1.实现原理</h2><p>在SilencerCurse模块中，存在以下结构类似的类，用于全局控制</p><ul><li>TweakClock - 调试时钟</li><li>TweakLogger - 调试日志级别，仅限于Logback</li><li>TweakStack - 调试CodeException的异常堆栈</li></ul><p>其原理是，static或ThreadLocal设置参数，按需取得有效值。</p><h2 id="_4e-2-使用方法" tabindex="-1"><a class="header-anchor" href="#_4e-2-使用方法" aria-hidden="true">#</a> 4E.2.使用方法</h2><p>设置好AdminTweakController的URL及其权限，避免滥用，造成不良后果。</p><p>对于时钟的调试，需要在编码时，需要进行以下替换，</p>',9),_=e("li",null,"System.currentTimeMillis - Now.millis()",-1),h={href:"http://Now.xxx",target:"_blank",rel:"noopener noreferrer"},p=e("li",null,"任何需要调试的日期，都应该从Now取值",-1),k=e("p",null,"在Slardar中，通过TerminalIterceptor设置TerminalContext， 此时，通过TweakEventListener及对应的事件，可完成但应用或集群的调试控制。",-1),u=e("p",null,"OkHttpTweakLogInterceptor可以使okhttp日志与TweakLogger联动",-1),x=e("p",null,"而在WarlockShow中，提供了AdminTweakController，可供管理员按用户简单调试。",-1),m=e("p",null,"因系统级全局设置影响较大，Wings中没有提供默认实现。",-1),w=e("h2",{id:"_4e-3-注意事项",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4e-3-注意事项","aria-hidden":"true"},"#"),a(" 4E.3.注意事项")],-1),T=e("p",null,"线程级调试，主要基于TransmittableThreadLocal自动完成，使用时要准寻其约定， 尤其在Wings配置的线程池外，自行启动线程，需要主要Context复制，避免丢失。",-1),f=e("p",null,"业务中的日期时间，尽量使用Now，其性能损失非常小，却可以为业务代理穿越时间线的能力。 不用轻易调制系统时钟，避免造成事件混乱，甚至启动时检查失败。",-1);function g(L,C){const t=s("ExternalLinkIcon");return o(),r("div",null,[d,e("ul",null,[_,e("li",null,[a("java.time.Xxxx.now - "),e("a",h,[a("Now.xxx"),i(t)]),a("()")]),p]),k,u,x,m,w,T,f])}const N=n(c,[["render",g],["__file","4e-tweak.html.vue"]]);export{N as default};
