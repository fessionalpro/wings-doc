import{_ as t,X as i,Y as c,$ as e,a1 as s,a0 as o,a3 as a,C as l}from"./framework-e38ae8ee.js";const r={},p=a(`<h1 id="_2h-datetime-and-timezone" tabindex="-1"><a class="header-anchor" href="#_2h-datetime-and-timezone" aria-hidden="true">#</a> 2H.Datetime and Timezone</h1><p>Database related time, timezone, zero-value conventions.</p><p><code>TimeZone</code> or <code>timezone</code>?, upper <code>Z</code> or lower <code>z</code>, it&#39;s a question 😃</p><p>First of all, <code>TimeZone</code> and <code>ZoneId</code> in java are both capitalized in the middle, they are two words combined. However, to avoid having <code>time_zone</code> or <code>time-zone</code> in the name conversion, Wings does all the word processing for <code>timezone</code> and <code>Zoneid</code> at the config and data layer.</p><p>The same treatment is sometimes applied to <code>DateTime</code>.</p><h2 id="_2h-1-zero-daytime-and-timezone" tabindex="-1"><a class="header-anchor" href="#_2h-1-zero-daytime-and-timezone" aria-hidden="true">#</a> 2H.1. Zero Daytime and Timezone</h2><p>The execution environment and the database should be in the same timezone, otherwise jooq and jdbc will automatically switch timezone during the following process and cause problems.</p><p>If timezones are not the same, you can coordinate them in the following way.</p><ul><li>Set the timezone through wings config <code>wings.silencer.i18n.zoneid=Asia/Shanghai</code></li><li>java&#39;s startup parameter <code>-Duser.timezone=Asia/Shanghai</code></li><li>url parameter for mysql jdbc <code>-connectionTimeZone=%2B08:00&amp;forceConnectionTimeZoneToSession=true</code></li><li>java hardcode parameter <code>TimeZone.setDefault(TimeZone.getTimeZone(&quot;Asia/Shanghai&quot;));</code></li></ul><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">wings.silencer.i18n.zoneid</span><span class="token punctuation">=</span><span class="token value attr-value">Asia/Shanghai</span>
<span class="token comment"># Frequently used jdbc parameters</span>
<span class="token key attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost:3306/wings_example\\
  ?autoReconnect=true&amp;useSSL=false&amp;allowPublicKeyRetrieval=true\\
  &amp;useUnicode=true&amp;characterEncoding=UTF-8\\
  &amp;connectionTimeZone=Asia/Shanghai</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The cause of the problem, currently, is the jdbc and timestamp history problems (after wings 210 with mysql8, the problem has been fixed)</p><ul><li>jooq - convert localDatetime to timestamp, then pass to preparedStatement</li><li>jdbc - setTimestamp(int parameterIndex, Timestamp x), the JDBC driver uses the time zone of the virtual machine to calculate the date and time of the timestamp in that time zone.</li></ul><p>The following SQL can examine the DB execution on the mysql client.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--  check timezone of system, server, session </span>
<span class="token keyword">SELECT</span> @<span class="token variable">@system_time_zone</span><span class="token punctuation">,</span>  @<span class="token variable">@global.time_zone</span><span class="token punctuation">,</span> @<span class="token variable">@session.time_zone</span><span class="token punctuation">;</span>
<span class="token comment">-- @@system_time_zone, @@global.time_zone, @@session.time_zone</span>
<span class="token comment">-- UTC, Asia/Shanghai, Asia/Shanghai</span>

<span class="token comment">-- mysql exec log (UTC)</span>
<span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">\`</span>win_user<span class="token punctuation">\`</span></span> <span class="token keyword">where</span> <span class="token identifier"><span class="token punctuation">\`</span>delete_dt<span class="token punctuation">\`</span></span> <span class="token operator">&lt;=</span> <span class="token string">&#39;0999-12-31 16:00:00.0&#39;</span><span class="token punctuation">;</span>
<span class="token comment">-- jooq sql log (GMT+8)</span>
<span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">\`</span>win_user<span class="token punctuation">\`</span></span> <span class="token keyword">where</span> <span class="token identifier"><span class="token punctuation">\`</span>delete_dt<span class="token punctuation">\`</span></span> <span class="token operator">&lt;=</span> <span class="token string">&#39;1000-01-01 00:00:00.0&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- turn on log, argument is blob</span>
<span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> log_output <span class="token operator">=</span> <span class="token string">&#39;TABLE&#39;</span><span class="token punctuation">;</span><span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> general_log <span class="token operator">=</span> <span class="token string">&#39;ON&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">from</span> mysql<span class="token punctuation">.</span>general_log <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> event_time <span class="token keyword">DESC</span><span class="token punctuation">;</span>
<span class="token comment">-- turn off log and clean all</span>
<span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> log_output <span class="token operator">=</span> <span class="token string">&#39;TABLE&#39;</span><span class="token punctuation">;</span> <span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> general_log <span class="token operator">=</span> <span class="token string">&#39;OFF&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">truncate</span> <span class="token keyword">table</span> mysql<span class="token punctuation">.</span>general_log<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The session time zone setting affects display and storage of time values that are zone-sensitive. This includes the values displayed by functions such as NOW() or CURTIME(), and values stored in and retrieved from TIMESTAMP columns. Values for TIMESTAMP columns are converted from the session time zone to UTC for storage, and from UTC to the session time zone for retrieval.</p><p>For mysql, NOW(fsp) is recommended, as it is short and cached, SYSDATE(fsp) is not necessary, see,</p>`,16),d={href:"https://dev.mysql.com/doc/refman/8.0/en/time-zone-support.html#time-zone-variables",target:"_blank",rel:"noopener noreferrer"},m={href:"https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_now",target:"_blank",rel:"noopener noreferrer"},u={href:"https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-configuration-properties.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-connp-props-datetime-types-processing.html",target:"_blank",rel:"noopener noreferrer"},f=a('<h2 id="_2h-2-timezone-of-db-and-jvm" tabindex="-1"><a class="header-anchor" href="#_2h-2-timezone-of-db-and-jvm" aria-hidden="true">#</a> 2H.2.Timezone of DB and Jvm</h2><p>There are 2 types of timezones, whichever type, it is recommended to use stable time zones, such as stable policies and without daylight saving time.</p><ul><li>geographic ZoneId - <code>Asia/Shanghai</code>, <code>America/New_York</code></li><li>Rule Offset - time offset to UTC, <code>UTC</code>, <code>+08:00</code></li></ul><p>Wings uses DatabaseChecker to check whether the following ② ③ ④ are consistent, it is recommended that they are all consistent.</p><ul><li>①system_time_zone - mysql host machine</li><li>②time_zone - mysql current time zone</li><li>③connectionTimeZone - jdbc connectionTimeZone/serverTimezone</li><li>④jvm TimeZone - jvm DefaultTimeZone</li><li>⑤host TimeZone - java host machine</li></ul><p>Among them, ③ is only for jdbc, similar to session timezone, but more powerful than <code>SET time_zone = timezone</code>. If ③ and ④ are consistent, it does not affect the usage, but in the non-wings environment, if ③ is not set will cause mysql to use ② by default, there will be a timezone problem.</p><p>Be aware of the timezone when using NOW() and TIMESTAMP, they are affected by ③.</p><blockquote><p>The session time zone setting affects display and storage of time values that are zone-sensitive. This includes the values displayed by functions such as NOW() or CURTIME(), and values stored in and retrieved from TIMESTAMP columns. Values for TIMESTAMP columns are converted from the session time zone to UTC for storage, and from UTC to the session time zone for retrieval.</p></blockquote><p>Try using DATE, TIME, DATETIME, they are timezone independent.</p><blockquote><p>The session time zone setting does not affect values displayed by functions such as UTC_TIMESTAMP() or values in DATE, TIME, or DATETIME columns. Nor are values in those data types stored in UTC; the time zone applies for them only when converting from TIMESTAMP values. If you want locale-specific arithmetic for DATE, TIME, or DATETIME values, convert them to UTC, perform the arithmetic, and then convert back.</p></blockquote><p>The above are attention to the database, while the following are the points in the jdbc and java systems.</p><ul><li>connectionTimeZone and forceConnectionTimeZoneToSession are used together</li><li>Offset form is recommended for connectionTimeZone , <code>UTC</code>, <code>-40:00</code>, <code>+80:00</code>.</li><li>In the jdbc url, you need to escape <code>+</code> to <code>%2B08:00</code> for <code>+80:00</code></li><li>ZoneId form is for business side, and Offset form is for mysql configuration.</li></ul><p>connectionTimeZone parameter (before 8.0 is serverTimezone) can coordinate the time zone of Jvm and Mysql. Using connectionTimeZone alone will not change the session-level time_zone. You must use forceConnectionTimeZoneToSession to achieve the effect of consistent session and jdbc.</p><p>Although the above settings can meet the project requirements, the unified timezone should be preferred because the scope of action is not as stable and reliable as the unified timezone. In addition, in mysql configuration, it is recommended to use offset format timezone, while the business side uses ZoneId format.</p><p>When configuring JdbcUrl, if <code>+</code> is used (as shown below), a DateTimeException will occur because <code>+</code> identifies a space in the URL. It must be escaped to <code>%2B</code>, i.e. the correct format is connectionTimeZone=%2B08:00</p><blockquote><p>wings?connectionTimeZone=+08:00 Invalid ID for region-based ZoneId, invalid format: 08:00</p></blockquote>',16);function v(k,b){const n=l("ExternalLinkIcon");return i(),c("div",null,[p,e("ul",null,[e("li",null,[e("a",d,[s("https://dev.mysql.com/doc/refman/8.0/en/time-zone-support.html#time-zone-variables"),o(n)])]),e("li",null,[e("a",m,[s("https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_now"),o(n)])]),e("li",null,[e("a",u,[s("https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-configuration-properties.html"),o(n)])]),e("li",null,[e("a",h,[s("https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-connp-props-datetime-types-processing.html"),o(n)])])]),f])}const g=t(r,[["render",v],["__file","2h-time-zone.html.vue"]]);export{g as default};
