import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as s,e as a}from"./app-DjJWubZm.js";const t={},l=a('<h1 id="_9c1-备份及恢复mysql" tabindex="-1"><a class="header-anchor" href="#_9c1-备份及恢复mysql"><span>9C1.备份及恢复mysql</span></a></h1><p>适用于 mysql 8.0/5.7，native/cloud数据库。适用mysqldump备份，适用mysql恢复</p><h2 id="_9c1-1-备份时事项" tabindex="-1"><a class="header-anchor" href="#_9c1-1-备份时事项"><span>9C1.1.备份时事项</span></a></h2><p>使用 wings-mysql-dump.sh 脚本进行备份，选择wings.dba权限即可。 若使用 mysqlpump，注意是<code>pump</code>不是<code>dump</code>，需要额外的权限。</p><p>根据dump文件中的<code>.tip</code>文件进行 scp，gzip 操作。</p><h2 id="_9c1-2-恢复时事项" tabindex="-1"><a class="header-anchor" href="#_9c1-2-恢复时事项"><span>9C1.2.恢复时事项</span></a></h2><p>使用mysqldump的备份时，在trigger时，需要调整其中的DEFINER <code>sed -E &#39;s/DEFINER=[^*]+//g&#39;</code></p><p>使用mysqlpump的备份时，需要注意sql中的原database限定，避免错库。 <code>sed -E &#39;s/`OLD_DB`/`NEW_DB`/g&#39;</code></p><h2 id="_9c1-3-数据脱敏" tabindex="-1"><a class="header-anchor" href="#_9c1-3-数据脱敏"><span>9C1.3.数据脱敏</span></a></h2><p>一般情况，需要对正式数据进行脱敏处理，包括但不限于，</p><ul><li>密码类，如dev中，统一设置，避免泄露或错误登录。</li><li>隐私类，如姓名，身份证，地址，合规性替换。</li><li>通讯类，如邮件，api地址</li></ul><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">UPDATE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> win_user_authn  </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SET</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> password</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;{noop}DevGr8Ag4in&#39;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_9c1-4-已知问题" tabindex="-1"><a class="header-anchor" href="#_9c1-4-已知问题"><span>9C1.4.已知问题</span></a></h2><p>云数据库的root，通常没有SHUTDOWN和SUPER权限，甚至更多，以避免破坏配置。</p><h3 id="_01-error-1227-the-super-privilege" tabindex="-1"><a class="header-anchor" href="#_01-error-1227-the-super-privilege"><span>01.<code>ERROR 1227: the SUPER privilege</code></span></a></h3><p>在wings体系内，恢复trigger时，因导出语句有<code>DEFINER=</code>，故提示权限不足。 需要设置trigger权限，并满足以下条件之一或全部。</p><ul><li>mysql导入时，按dump中的tip执行，或手工执行sed替换</li><li>服务器端 <code>log_bin_trust_function_creators = 1</code>，提示SUPER权限</li></ul><h3 id="_02-error-1071-max-key-length-is-767" tabindex="-1"><a class="header-anchor" href="#_02-error-1071-max-key-length-is-767"><span>02.<code>ERROR 1071: max key length is 767</code></span></a></h3><p>服务器端设置 <code>innodb_large_prefix = 1</code> 但某些云默认配置关闭了此选项。 可以通过控制台提交参数修改，无需重启。以下是字符集及char,byte的知识点。</p><ul><li>UTF-8MB4 - 767/4=191</li><li>UTF-8MB4 - 767/3=255</li><li>打开后，从 767 扩展到 3072 bytes</li></ul><h3 id="_03-reload-privilege-s-for-this" tabindex="-1"><a class="header-anchor" href="#_03-reload-privilege-s-for-this"><span>03.<code>RELOAD privilege(s) for this</code></span></a></h3><blockquote><p>Access denied; you need (at least one of) the RELOAD privilege(s) for this operation (1227)</p></blockquote><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">GRANT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> RELOAD </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ON</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> *.* </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">TO</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;maintain&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;%&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">FLUSH PRIVILEGES;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_04-server-that-has-gtids" tabindex="-1"><a class="header-anchor" href="#_04-server-that-has-gtids"><span>04.<code>server that has GTIDs</code></span></a></h3><blockquote><p>Warning: A partial dump from a server that has GTIDs will by default include the GTIDs of all transactions</p></blockquote><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[mysqldump]</span></span>\n<span class="line"><span>set-gtid-purged=OFF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_05-unknown-table-column-statistics" tabindex="-1"><a class="header-anchor" href="#_05-unknown-table-column-statistics"><span>05.<code>Unknown table &#39;column_statistics&#39;</code></span></a></h3><blockquote><p>Unknown table &#39;column_statistics&#39; in information_schema (1109)</p></blockquote><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[mysqldump]</span></span>\n<span class="line"><span>column-statistics=0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_06-row-size-too-large-8126" tabindex="-1"><a class="header-anchor" href="#_06-row-size-too-large-8126"><span>06.<code>Row size too large (&gt; 8126)</code></span></a></h3><blockquote><p>Row size too large (&gt; 8126). Changing some columns to TEXT or BLOB or using ROW_FORMAT=DYNAMIC or ROW_FORMAT=COMPRESSED may help. In current row format, BLOB prefix of 768 bytes is stored inline.</p></blockquote><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[mysqld]</span></span>\n<span class="line"><span>innodb_strict_mode=0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_07-public-key-retrieval-is-not-allowed" tabindex="-1"><a class="header-anchor" href="#_07-public-key-retrieval-is-not-allowed"><span>07.<code>Public Key Retrieval is not allowed</code></span></a></h3><blockquote><p>Public Key Retrieval is not allowed</p></blockquote><p>add <code>useSSL=false</code> and <code>allowPublicKeyRetrieval=true</code> to</p><ul><li>QueryString of jdbc url, or,</li><li>Driver properties of DBeaver</li></ul>',36),n=[l];function r(o,d){return s(),i("div",null,n)}const c=e(t,[["render",r],["__file","9c1.mysql-dump-restore.html.vue"]]),m=JSON.parse(`{"path":"/zh/9-example/9c.server-manual/9c1.mysql-dump-restore.html","title":"9C1.备份及恢复mysql","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"database","category":["实战","运维"],"description":"9C1.备份及恢复mysql 适用于 mysql 8.0/5.7，native/cloud数据库。适用mysqldump备份，适用mysql恢复 9C1.1.备份时事项 使用 wings-mysql-dump.sh 脚本进行备份，选择wings.dba权限即可。 若使用 mysqlpump，注意是pump不是dump，需要额外的权限。 根据dump文件...","GIT_REPO_HEAD":"2024-08-31 14ebccb0d5142c697c8e1c26714477f1e205282c","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/9-example/9c.server-manual/9c1.mysql-dump-restore.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/9-example/9c.server-manual/9c1.mysql-dump-restore.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"9C1.备份及恢复mysql"}],["meta",{"property":"og:description","content":"9C1.备份及恢复mysql 适用于 mysql 8.0/5.7，native/cloud数据库。适用mysqldump备份，适用mysql恢复 9C1.1.备份时事项 使用 wings-mysql-dump.sh 脚本进行备份，选择wings.dba权限即可。 若使用 mysqlpump，注意是pump不是dump，需要额外的权限。 根据dump文件..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9C1.备份及恢复mysql\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"9C1.1.备份时事项","slug":"_9c1-1-备份时事项","link":"#_9c1-1-备份时事项","children":[]},{"level":2,"title":"9C1.2.恢复时事项","slug":"_9c1-2-恢复时事项","link":"#_9c1-2-恢复时事项","children":[]},{"level":2,"title":"9C1.3.数据脱敏","slug":"_9c1-3-数据脱敏","link":"#_9c1-3-数据脱敏","children":[]},{"level":2,"title":"9C1.4.已知问题","slug":"_9c1-4-已知问题","link":"#_9c1-4-已知问题","children":[{"level":3,"title":"01.ERROR 1227: the SUPER privilege","slug":"_01-error-1227-the-super-privilege","link":"#_01-error-1227-the-super-privilege","children":[]},{"level":3,"title":"02.ERROR 1071: max key length is 767","slug":"_02-error-1071-max-key-length-is-767","link":"#_02-error-1071-max-key-length-is-767","children":[]},{"level":3,"title":"03.RELOAD privilege(s) for this","slug":"_03-reload-privilege-s-for-this","link":"#_03-reload-privilege-s-for-this","children":[]},{"level":3,"title":"04.server that has GTIDs","slug":"_04-server-that-has-gtids","link":"#_04-server-that-has-gtids","children":[]},{"level":3,"title":"05.Unknown table 'column_statistics'","slug":"_05-unknown-table-column-statistics","link":"#_05-unknown-table-column-statistics","children":[]},{"level":3,"title":"06.Row size too large (> 8126)","slug":"_06-row-size-too-large-8126","link":"#_06-row-size-too-large-8126","children":[]},{"level":3,"title":"07.Public Key Retrieval is not allowed","slug":"_07-public-key-retrieval-is-not-allowed","link":"#_07-public-key-retrieval-is-not-allowed","children":[]}]}],"git":{"createdTime":1656137116000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":3}]},"readingTime":{"minutes":1.9,"words":569},"filePathRelative":"zh/9-example/9c.server-manual/9c1.mysql-dump-restore.md","localizedDate":"2022年6月25日","autoDesc":true}`);export{c as comp,m as data};
