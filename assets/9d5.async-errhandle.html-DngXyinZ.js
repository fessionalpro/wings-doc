import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,f as a}from"./app-D2c23tTX.js";const t={},c=a(`<h1 id="_9d5-异步及异常处理" tabindex="-1"><a class="header-anchor" href="#_9d5-异步及异常处理"><span>9D5.异步及异常处理</span></a></h1><p>实践中，我们主张同步优先，能同步的尽量同步。使用异步处理时，遵循以下实践。</p><ul><li>异步方法 - 命名和签名</li><li>异常处理 - 不应该吞掉异常</li><li>线程池 - 线程池分配</li></ul><h2 id="_9d5-1-async注解" tabindex="-1"><a class="header-anchor" href="#_9d5-1-async注解"><span>9D5.1.Async注解</span></a></h2><p>使用<code>@Async</code>注解的方法，会在<code>taskExecutor</code>线程池中执行，默认前缀为<code>exec-</code>，</p><ul><li>方法名，建议使用 <code>Async</code>后缀，如<code>orderAsync</code></li><li>返回值，使用<code>Future</code>，如 <code>CompletableFuture</code></li></ul><p>如下代码，不建议使用<code>void</code>方法，而以<code>Future&lt;Void&gt;</code>和<code>.complete(null)</code>替代， 他们的主要区别在于未捕获异常的处理，<code>void</code>会吃掉异常，不能传递给调用者。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Async</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">badAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// exception handled by AsyncConfigurer#getAsyncUncaughtExceptionHandler</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Async</span>
<span class="token keyword">public</span> <span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Void</span><span class="token punctuation">&gt;</span></span> <span class="token function">goodAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// exception handled by caller via AOP/ExceptionHandler</span>
  <span class="token keyword">return</span> <span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">completedFuture</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9d5-2-异步请求" tabindex="-1"><a class="header-anchor" href="#_9d5-2-异步请求"><span>9D5.2.异步请求</span></a></h2><p>SpringMvc的RequestMapping方法不可使用<code>@Async</code>，通过返回值完成异步处理。</p><ul><li><code>Future</code> - 组合使用异步Service</li><li><code>Callable</code> - 组合同步service，使用 <code>applicationTaskExecutor</code> 线程池，默认前缀<code>app-exec-</code></li><li><code>DeferredResult</code> - 相当于Context传入，不建议使用</li></ul><p>在SpringBoot3.2中，线程池和异常的处理过程如下，其中，</p><ul><li>request和response分别使用mvc的线程池</li><li>service方法根据调用方式，使用<code>app-exec-</code>或<code>exec-</code></li><li>UncaughtException仅<code>void</code>时，使用 <code>AsyncUncaughtExceptionHandler</code></li><li>FailedFuture或非<code>void</code>UncaughtException，使用 <code>ExceptionHandler</code></li></ul><p>日志输出，大概如下，详见 <code>AsyncControllerTest</code></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>## \`Future\` runs in 3 threads
XNIO-1 o.s.web.servlet.DispatcherServlet
XNIO-1 s.w.s.m.m.a.RequestMappingHandlerMapping
XNIO-1 p.f.w.s.a.c.TestAsyncController
exec-2 p.f.w.s.app.service.TestAsyncService
XNIO-1 o.s.w.c.request.async.WebAsyncManager : Async result set
XNIO-1 o.s.web.servlet.DispatcherServlet : Exiting but response remains open
## UncaughtException in exec thread-pool
exec-2 o.s.w.c.request.async.WebAsyncManager : Async error, dispatch
## FailedFuture in exec thread-pool
exec-2 o.s.w.c.request.async.WebAsyncManager : Async error, dispatch
XNIO-3 o.s.web.servlet.DispatcherServlet : &quot;ASYNC&quot; dispatch
XNIO-3 s.w.s.m.m.a.RequestMappingHandlerAdapter : Resume with async result

## \`Callable\` runs in 3 threads, with \`applicationTaskExecutor\`
XNIO-1 o.s.web.servlet.DispatcherServlet
XNIO-1 s.w.s.m.m.a.RequestMappingHandlerMapping
app-exec-2 p.f.w.s.app.service.TestAsyncService
app-exec-2 o.s.w.c.request.async.WebAsyncManager : Async result set
## sync Exception in exec thread-pool
app-exec-2 o.s.w.c.request.async.WebAsyncManager : Async error, dispatch
XNIO-3 o.s.web.servlet.DispatcherServlet : &quot;ASYNC&quot; dispatch
XNIO-3 s.w.s.m.m.a.RequestMappingHandlerAdapter : Resume with async result

## \`DeferredResult\` runs in 3 threads
XNIO-1 o.s.web.servlet.DispatcherServlet
XNIO-1 s.w.s.m.m.a.RequestMappingHandlerMapping
XNIO-1 p.f.w.s.a.c.TestAsyncController
exec-2 p.f.w.s.app.service.TestAsyncService
exec-2 o.s.w.c.request.async.WebAsyncManager : Async result set
XNIO-1 o.s.web.servlet.DispatcherServlet : Exiting but response remains open
## UncaughtException in web thread-pool
XNIO-1 o.s.w.c.request.async.WebAsyncManager : Async error, dispatch
## FailedFuture in exec thread-pool
exec-2 o.s.w.c.request.async.WebAsyncManager : Async error, dispatch
XNIO-3 o.s.web.servlet.DispatcherServlet : &quot;ASYNC&quot; dispatch
XNIO-3 s.w.s.m.m.a.RequestMappingHandlerAdapter : Resume with async result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),i=[c];function l(r,o){return n(),s("div",null,i)}const u=e(t,[["render",l],["__file","9d5.async-errhandle.html.vue"]]),v=JSON.parse('{"path":"/zh/9-example/9d.wings-boot/9d5.async-errhandle.html","title":"9D5.异步及异常处理","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"async","category":["实战","手册","异步"],"description":"9D5.异步及异常处理 实践中，我们主张同步优先，能同步的尽量同步。使用异步处理时，遵循以下实践。 异步方法 - 命名和签名 异常处理 - 不应该吞掉异常 线程池 - 线程池分配 9D5.1.Async注解 使用@Async注解的方法，会在taskExecutor线程池中执行，默认前缀为exec-， 方法名，建议使用 Async后缀，如orderAsy...","GIT_REPO_HEAD":"2024-06-10 b1ec3d73a48e6ec52c12b931d1822da253f48375","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/9-example/9d.wings-boot/9d5.async-errhandle.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/9-example/9d.wings-boot/9d5.async-errhandle.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"9D5.异步及异常处理"}],["meta",{"property":"og:description","content":"9D5.异步及异常处理 实践中，我们主张同步优先，能同步的尽量同步。使用异步处理时，遵循以下实践。 异步方法 - 命名和签名 异常处理 - 不应该吞掉异常 线程池 - 线程池分配 9D5.1.Async注解 使用@Async注解的方法，会在taskExecutor线程池中执行，默认前缀为exec-， 方法名，建议使用 Async后缀，如orderAsy..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T10:07:45.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-05-08T10:07:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9D5.异步及异常处理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T10:07:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"9D5.1.Async注解","slug":"_9d5-1-async注解","link":"#_9d5-1-async注解","children":[]},{"level":2,"title":"9D5.2.异步请求","slug":"_9d5-2-异步请求","link":"#_9d5-2-异步请求","children":[]}],"git":{"createdTime":1715162865000,"updatedTime":1715162865000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":1}]},"readingTime":{"minutes":1.73,"words":518},"filePathRelative":"zh/9-example/9d.wings-boot/9d5.async-errhandle.md","localizedDate":"2024年5月8日","autoDesc":true}');export{u as comp,v as data};
