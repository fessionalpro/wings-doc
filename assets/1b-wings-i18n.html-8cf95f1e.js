import{_ as e,X as a,Y as i,a3 as n}from"./framework-e38ae8ee.js";const s={},t=n('<h1 id="_1b-auto-i18n-message" tabindex="-1"><a class="header-anchor" href="#_1b-auto-i18n-message" aria-hidden="true">#</a> 1B.Auto I18n Message</h1><p>Multinational language (I18n) is a more important feature in the Wings.</p><ul><li>Can be separated and cascaded as Conf</li><li>Dynamic business message with Ii8nString and I18nException</li><li>Consider I18n and timezone together</li></ul><h2 id="_1b-1-language-and-timezone" tabindex="-1"><a class="header-anchor" href="#_1b-1-language-and-timezone" aria-hidden="true">#</a> 1B.1.Language and Timezone</h2><p>The locale and zoneid of the system can be changed at wings startup by the following config, and the empty value means do nothing.</p><ul><li>wings.silencer.i18n.locale=zh_CN</li><li>wings.silencer.i18n.zoneid=Asia/Shanghai</li><li>wings.silencer.i18n.bundle=classpath*:/wings-i18n/**/*.properties</li></ul><p>Also, Spring itself has good support for I18N, and can be better engineered with a little customization.</p><ul><li>Auto scan for <code>wings.silencer.i18n.bundle</code> config (comma separated paths)</li><li>Load separated i18n messages, path priority cascading like auto-config</li></ul><h2 id="_1b-2-sping-mechanism" tabindex="-1"><a class="header-anchor" href="#_1b-2-sping-mechanism" aria-hidden="true">#</a> 1B.2.Sping Mechanism</h2><p>Spring&#39;s loading MessageSource is different from that of configuration, and does not require Unicode escaping.</p><p>Language configuration starts with <code>spring.messages.basename=messages,basic</code>, separated by commas. Chars after basename is considered a language tag, which can exist in a variety of formats (do not contain <code>.</code>, it will be replaced with <code>/</code> to scan)</p><ul><li>message.properties - must exist, with the default of bundle name</li><li>message_en.properties - Recommend, without country, for all english</li><li>message_en_US.properties</li><li>message_en_US_UNIX.properties</li></ul><h2 id="_1b-3-dynamic-message" tabindex="-1"><a class="header-anchor" href="#_1b-3-dynamic-message" aria-hidden="true">#</a> 1B.3.Dynamic Message</h2><p>In addition to the static configuration, wings provides CombinableMessageSource. You can programmatically add I18n messages dynamically, such as loading from database.</p>',14),o=[t];function r(l,d){return a(),i("div",null,o)}const g=e(s,[["render",r],["__file","1b-wings-i18n.html.vue"]]);export{g as default};
