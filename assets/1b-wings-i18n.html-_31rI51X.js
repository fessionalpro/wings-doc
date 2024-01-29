import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,f as s}from"./app-mN42Vc4a.js";const a={},l=s('<h1 id="_1b-i18n自动配置" tabindex="-1"><a class="header-anchor" href="#_1b-i18n自动配置"><span>1B.I18n自动配置</span></a></h1><p>多国语（I18n），是wings体系中，比较重要的功能点。</p><ul><li>可以同Conf一样进行分隔，层叠</li><li>以Ii8nString和I18nException做动态业务信息</li><li>把I18n和timezone一并考虑</li></ul><h2 id="_1b-1-语言和时区" tabindex="-1"><a class="header-anchor" href="#_1b-1-语言和时区"><span>1B.1.语言和时区</span></a></h2><p>可在wings启动时，通过以下配置项，修改系统的locale和zoneid，空值为不修改系统默认。</p><ul><li>wings.silencer.i18n.locale=zh_CN</li><li>wings.silencer.i18n.zoneid=Asia/Shanghai</li><li>wings.silencer.i18n.bundle=classpath*:/wings-i18n/**/*.properties</li></ul><p>同时，spring自身对多国语(I18N)支持的很好，稍加组织就可以更好的工程化。</p><ul><li>自动扫描<code>wings.silencer.i18n.bundle</code>配置项（逗号分隔多个路径）</li><li>加载分隔成多份的配置，路径优先级层叠配置</li></ul><h2 id="_1b-2-sping的机制" tabindex="-1"><a class="header-anchor" href="#_1b-2-sping的机制"><span>1B.2.sping的机制</span></a></h2><p>spring对MessageSource的加载与configuration的机制不同，不需要unicode转义。</p><p>语言配置从<code>spring.messages.basename=messages,basic</code>入手，逗号分隔， basename后视为语言标记，可以存在多种格式的文件（命名中不要有<code>.</code>，会被换成<code>/</code>扫描)</p><ul><li>message.properties 必须存在，以bundle名的默认文件</li><li>message_en.properties 推荐这种，不带国家，为所有en提供默认值</li><li>message_en_US.properties</li><li>message_en_US_UNIX.properties</li></ul><h2 id="_1b-3-动态添加配置" tabindex="-1"><a class="header-anchor" href="#_1b-3-动态添加配置"><span>1B.3.动态添加配置</span></a></h2><p>除了静态的配置外，wings提供了CombinableMessageSource， 可以用编程的方式，动态的添加多国语信息，如从数据库加载。</p>',14),o=[l];function r(c,p){return i(),n("div",null,o)}const _=e(a,[["render",r],["__file","1b-wings-i18n.html.vue"]]);export{_ as default};
