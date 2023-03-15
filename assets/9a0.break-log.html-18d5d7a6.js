import{_ as r,X as a,Y as l,$ as e,a1 as o,a0 as n,a3 as i,C as s}from"./framework-a66c2b6a.js";const d={},c=e("h1",{id:"_9a0-breaking-changlog",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_9a0-breaking-changlog","aria-hidden":"true"},"#"),o(" 9A0.Breaking Changlog")],-1),h=e("p",null,"Incompatible and important features grouped by feather branch in reverse order.",-1),g={id:"ongoing-earthspirit",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#ongoing-earthspirit","aria-hidden":"true"},"#",-1),_={href:"https://github.com/trydofor/pro.fessional.wings/tree/feature/EarthSpirit",target:"_blank",rel:"noopener noreferrer"},f=e("ul",null,[e("li",null,"💥 upgrade shardingsphere 5.3, refactor DataSourceContext"),e("li",null,"💥 refactor ModifyAssert to DaoAssert")],-1),p={id:"_230301-dragonknight",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#_230301-dragonknight","aria-hidden":"true"},"#",-1),b={href:"https://github.com/trydofor/pro.fessional.wings/tree/337162eb619aa57112c73c08c5ef1386d64e4d2b",target:"_blank",rel:"noopener noreferrer"},k=i("<ul><li>💥 Dao.onlyDiedData to DiedDataCondition</li><li>📌 Jooq<code>3.17</code> instead of <code>3.14</code></li><li>📌 SpringBoot use <code>3.0.3</code></li><li>💥 wings.slardar.cache.nulls to null-live and null-size</li><li>💥 cache2k instead of caffeine</li><li>💥 <code>wings.tiny.*.enabled.</code> properties, add <code>spring.</code> prefix <ul><li><code>wings.tiny.mail.enabled.</code> to <code>spring.wings.tiny.mail.enabled.</code></li><li><code>wings.tiny.task.enabled.</code> to <code>spring.wings.tiny.task.enabled.</code></li></ul></li><li>💥 derive autogen and awesome project as dependences</li><li>🚚 rename jooqgen to codegen</li><li>🔥 remove errorprone</li><li>🔥 remove javax&#39;s persistence and validation</li></ul>",1),y={id:"_230118-doom",tabindex:"-1"},w=e("a",{class:"header-anchor",href:"#_230118-doom","aria-hidden":"true"},"#",-1),x={href:"https://github.com/trydofor/pro.fessional.wings/tree/2ed42921c0a460f5caf6144378ff1c927cc8d093",target:"_blank",rel:"noopener noreferrer"},S=i("<ul><li>💥 DingTalkNotice interface, add msg-type</li><li>♻️ change threadpool prefix，task to async，cron to task</li><li>💥 centrally manage AesKey，prefix from mirana to encrypt <ul><li>spring.wings.silencer.enabled.auto-log to autolog</li><li>spring.wings.silencer.enabled.mirana to encrypt</li><li>wings.silencer.mirana.code to wings.silencer.encrypt</li><li>wings.silencer.mirana.auto-log to wings.silencer.autolog</li><li>wings...aes-key.system to ..silencer.mirana.code.aes-key</li><li>wings...aes-key.cookie to ..slardar.cookie.aes-key</li><li>wings...aes-key.ticket to ..warlock.ticket.aes-key</li></ul></li><li>💥 DingTalkNotice property key，use monitor first, then default <ul><li>wings.slardar.monitor.ding-talk to wings.slardar.ding-notice.default</li></ul></li><li>💥 RuntimeMode move to Silencer</li><li>✨ TinyTask batch component</li><li>✨ TinyMail mail component</li></ul>",1),C={id:"_221130-dawnbreaker",tabindex:"-1"},A=e("a",{class:"header-anchor",href:"#_221130-dawnbreaker","aria-hidden":"true"},"#",-1),v={href:"https://github.com/trydofor/pro.fessional.wings/tree/7a681ea30f77399bfc8461b4d1249b45eea6e8e8",target:"_blank",rel:"noopener noreferrer"},D=e("ul",null,[e("li",null,"💥 wings.silencer.debug to tweak"),e("li",null,"💥 Aes256 instead of Aes128"),e("li",null,"💥 wings.warlock.error.all-exception to default-exception"),e("li",null,"🔥 remove login(Builder) from TerminalContext"),e("li",null,"🔥 remove RolesByUid from GlobalAttribute"),e("li",null,"💥 Split okhttp, group by feature, change class name")],-1),T={id:"_221030-ti11",tabindex:"-1"},B=e("a",{class:"header-anchor",href:"#_221030-ti11","aria-hidden":"true"},"#",-1),I={href:"https://github.com/trydofor/pro.fessional.wings/tree/760f545810420084733f7d8aa9390fdbb6b71246",target:"_blank",rel:"noopener noreferrer"},N=e("ul",null,[e("li",null,'💥 SecurityContextUtil to @Contract("true -> !null")'),e("li",null,"💥 RighterInterceptor encrypt by HttpSession instead of Security"),e("li",null,"💥 GlobalAttributeHolder rename tryAttr and add getAttr"),e("li",null,"💥 unite DefaultUserId and Terminal, Unknown to Guest"),e("li",null,"💥 XxxHelp rename to XxxHelper"),e("li",null,"💥 refactory TweakingContext and TypedReg")],-1),E={id:"_221014-clockwerk",tabindex:"-1"},j=e("a",{class:"header-anchor",href:"#_221014-clockwerk","aria-hidden":"true"},"#",-1),L={href:"https://github.com/trydofor/pro.fessional.wings/tree/4ff27bf31299303956b5e63999a3183d2c474d36",target:"_blank",rel:"noopener noreferrer"},H={href:"http://starter.sh",target:"_blank",rel:"noopener noreferrer"},R=i("<li>💥 standard_i18n template change, refactor codegen</li><li>🔧 unbound cache by default, capacity set 10-20M</li><li>💥 DingTalk config <code>report-keyword</code> to <code>notice-keyword</code></li><li>💥 I18nString&#39;s code and args are immutable</li><li>💥 @JsonI18nString to @AutoI18nString</li><li>✨ 3 DateTime and I18nString can annotate to Dto</li><li>🔥 remove unmaintained SimpleFlatMapper</li><li>💥 SelectOrderCondition instead of BiConsume</li><li>✨ <code>Now</code> util, system and thread-level tweaked clocks</li><li>💥 rename <code>wings.slardar.error.</code> → <code>wings.warlock.error.</code></li><li>💥 LeapCode&#39;s code32 refer to ulid</li>",11),M={id:"_220913-chaosknight",tabindex:"-1"},O=e("a",{class:"header-anchor",href:"#_220913-chaosknight","aria-hidden":"true"},"#",-1),U={href:"https://github.com/trydofor/pro.fessional.wings/tree/731a61c9aea5f5c7bbc6a0ce69f379f14b85a0c9",target:"_blank",rel:"noopener noreferrer"},G=e("ul",null,[e("li",null,[o("💥 EnumUtil enhancement, "),e("code",null,"_"),o(" instead of "),e("code",null,"𓃬")]),e("li",null,"💥 derive slardar, warlock project, better compoment support"),e("li",null,"💥 adjust Bean的Ordered const, WarlockOrderConst"),e("li",null,"📌 import retrofit2, remove xxl-job"),e("li",null,"unify logger to log, spring use common-log and business use @Slf4j"),e("li",null,"ALLOW_BACKSLASH_ESCAPING_ANY_CHARACTER true → false")],-1);function K(V,X){const t=s("ExternalLinkIcon");return a(),l("div",null,[c,h,e("h2",g,[u,o(" Ongoing "),e("a",_,[o("EarthSpirit"),n(t)])]),f,e("h2",p,[m,o(" 230301 "),e("a",b,[o("DragonKnight"),n(t)])]),k,e("h2",y,[w,o(" 230118 "),e("a",x,[o("Doom"),n(t)])]),S,e("h2",C,[A,o(" 221130 "),e("a",v,[o("Dawnbreaker"),n(t)])]),D,e("h2",T,[B,o(" 221030 "),e("a",I,[o("Ti11"),n(t)])]),N,e("h2",E,[j,o(" 221014 "),e("a",L,[o("Clockwerk"),n(t)])]),e("ul",null,[e("li",null,[o("🚀 "),e("a",H,[o("starter.sh"),n(t)]),o(" add extra args and remote debug")]),R]),e("h2",M,[O,o(" 220913 "),e("a",U,[o("ChaosKnight"),n(t)])]),G])}const J=r(d,[["render",K],["__file","9a0.break-log.html.vue"]]);export{J as default};
