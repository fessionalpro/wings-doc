import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o,c as r,b as e,e as i,d,f as a}from"./app-20203b64.js";const s={},c=a('<h1 id="a2-mirana-utility" tabindex="-1"><a class="header-anchor" href="#a2-mirana-utility" aria-hidden="true">#</a> A2.Mirana Utility</h1><p>Mirana provides useful utilities.</p><h2 id="a2-1-anti-anti-engineering" tabindex="-1"><a class="header-anchor" href="#a2-1-anti-anti-engineering" aria-hidden="true">#</a> A2.1.<code>anti/</code> Anti-engineering</h2><ul><li>BeanVisitor - Visist the fields of a bean via reflection, mainly for property formatting</li><li>G - Anti-pattern, passing values across layers</li><li>L - Anti-pattern, gathering message across layers</li></ul><h2 id="a2-2-best-high-qulity-code" tabindex="-1"><a class="header-anchor" href="#a2-2-best-high-qulity-code" aria-hidden="true">#</a> A2.2.<code>best/</code> High Qulity Code</h2><ul><li>AssertArgs - Pre-assertion, IllegalArgumentException, BadArgsException</li><li>AssertMessage - Assertion, MessageException</li><li>AssertState Mid/Post-assertion - IllegalStateException, BadStateException</li><li>DummyBlock - Turn off some warns of safe code blocks</li><li>Param - Annotate whether param is modified</li><li>TypedKey - Value registration of a Map with type</li><li>TypedReg - Key and Value registration of a Map with type</li></ul><h2 id="a2-3-bits-binary-byte-related" tabindex="-1"><a class="header-anchor" href="#a2-3-bits-binary-byte-related" aria-hidden="true">#</a> A2.3.<code>bits/</code> Binary, Byte-related</h2><ul><li>Aes - Aes128 and Aes256 utility</li><li>Aes128 - jdk AES/CBC/PKCS5Padding, PKCS7Padding with bouncycastle</li><li>Aes256 - jdk AES/CBC/PKCS5Padding, Recommended for java1.8.0_162+</li><li>Base64 - RFC4648_URLSAFE and UTF8 by default, <code>+/</code> and <code>-_</code> are supported</li><li>Bytes - Hex and Unicode, eg. <code>我</code>(25105)=&gt;&#39;\\u6211&#39;</li><li>HmacHelp - MessageAuthenticationCode HmacMD5, HmacSHA1, HmacSHA256</li><li>Md5 - md5sum, md5check</li><li>HdHelp - MessageDigest MD5, SHA1, SHA256</li></ul><h2 id="a2-4-cast-type-cast-convert" tabindex="-1"><a class="header-anchor" href="#a2-4-cast-type-cast-convert" aria-hidden="true">#</a> A2.4.<code>cast/</code> Type Cast/Convert</h2><ul><li>BiConvertor - bi-direction converter</li><li>BoxedCastUtil - Conversion of wrapper and primitive</li><li>BoxedTypeUtil - Wrapper compatible instanceOf, isAssignable</li><li>EnumConvertor - enum serialization by name or qualified path</li><li>StringCastUtil - Conversion of strings and other types</li><li>TypedCastUtil - Conversion of type parameters and generic types</li></ul><h2 id="a2-5-code-encode-and-decode" tabindex="-1"><a class="header-anchor" href="#a2-5-code-encode-and-decode" aria-hidden="true">#</a> A2.5.<code>code/</code> Encode and Decode</h2><h3 id="crc4int-int32-with-crc" tabindex="-1"><a class="header-anchor" href="#crc4int-int32-with-crc" aria-hidden="true">#</a> Crc4Int - int32 with CRC</h3><p>Based on the original int value, generate a pseudo-random verifiable number that can decrypt the original value.</p><p>try to improve human readability and pseudo-randomness.</p><h3 id="crc8long-crc8longutil-int64-with-crc" tabindex="-1"><a class="header-anchor" href="#crc8long-crc8longutil-int64-with-crc" aria-hidden="true">#</a> Crc8Long, Crc8LongUtil - int64 with CRC</h3><p>Based on the original long value, generate a pseudo-random verifiable number that can decrypt the original value.</p><p>The bit layout can be customized, there are 3 types by default, see Crc8LongUtil.</p><p>The applicable scenario is exposed ID number without high security and be efficiently parsed and verified in both directions.</p><h3 id="excel26az-excel-column-naming" tabindex="-1"><a class="header-anchor" href="#excel26az-excel-column-naming" aria-hidden="true">#</a> Excel26Az - Excel Column Naming</h3><p>Two-way parsing by Excel column naming (A:1,B:2,... ,Z:26,AA:27)</p><h3 id="leapcode-pseudo-random-highly-readable-code" tabindex="-1"><a class="header-anchor" href="#leapcode-pseudo-random-highly-readable-code" aria-hidden="true">#</a> LeapCode - Pseudo-random Highly Readable Code</h3><p>A textual 32-symbol notation for expressing numbers, consisting of 22 letters (minus UOIL for confusion) and 10 numbers. The encoded string looks more random, can be decrypted to its original value, and can be filled to a fixed length.</p>',22),h={href:"https://www.crockford.com/base32.html",target:"_blank",rel:"noopener noreferrer"},u=a('<p>The applicable scenario is exposed ID number without high security and be efficiently parsed and verified in both directions.</p><h3 id="other-codes" tabindex="-1"><a class="header-anchor" href="#other-codes" aria-hidden="true">#</a> Other Codes</h3><ul><li>Mod10Code - Checking algorithm from USPS</li><li>RandCode - Some random numbers with better human readability</li><li>SlotCode - Random assignment of fixed positions, such as pickup number</li></ul><h2 id="a2-6-cond-condition-assertion" tabindex="-1"><a class="header-anchor" href="#a2-6-cond-condition-assertion" aria-hidden="true">#</a> A2.6. <code>cond/</code> Condition assertion</h2><ul><li>EqualsUtil - Equivals Condition</li><li>StaticFlag - Global Flag</li></ul><h2 id="a2-7-data-data-transfer" tabindex="-1"><a class="header-anchor" href="#a2-7-data-data-transfer" aria-hidden="true">#</a> A2.7.<code>data/</code> Data Transfer</h2><ul><li>Arr - Some Array manipulations</li><li>CodeEnum - Biz enum, such as I18n, status</li><li>DataResult - Common DTO with biz data</li><li>Diff - diff 2 collections, such as insertion, update, deletion</li><li>Null - null-safe is our goal</li><li>Q - Single-parameter Query Class</li><li>R - Scenario classes for DataResult</li><li>Rank - Sort by multi-conditional order</li><li>U - Tuple, Either for internal data transfer</li><li>Z - The first conditional data (such as non-null)</li></ul><h2 id="a2-8-dync-dynamic-compliation" tabindex="-1"><a class="header-anchor" href="#a2-8-dync-dynamic-compliation" aria-hidden="true">#</a> A2.8.<code>dync/</code> Dynamic Compliation</h2><ul><li>Java - Dynamic compilation and creation of java</li><li>Js - Use java ScriptEngine to execute js code</li></ul><h2 id="a2-9-evil-use-with-caution" tabindex="-1"><a class="header-anchor" href="#a2-9-evil-use-with-caution" aria-hidden="true">#</a> A2.9.<code>evil</code> Use with Caution</h2><ul><li>Attention - Tagging method should follow some pattern to prevent misuse</li><li>StartStageAttention - Methods called during the startup, do not call frequently</li><li>ThreadLocalAttention - Note the ThreadLocal mode</li><li>ThreadLocalProxy - ThreadLocal that can be subsequently replaced</li><li>ThreadLocalSoft - ThreadLocal using SoftReference</li><li>TweakingContext - Contextual configuration for debugging</li></ul><h2 id="a2-a-fake-fake-data" tabindex="-1"><a class="header-anchor" href="#a2-a-fake-fake-data" aria-hidden="true">#</a> A2.A.<code>fake/</code> Fake Data</h2><ul><li>FakeDate - Generate a pseudo-random date around the given offset, guarante idempotent</li><li>FakeName - Generate a random chines name</li></ul><h2 id="a2-b-flow-flow-control" tabindex="-1"><a class="header-anchor" href="#a2-b-flow-flow-control" aria-hidden="true">#</a> A2.B.<code>flow/</code> Flow Control</h2><p>In high level architecture design, high-order function calls, stream processing, usually use exceptions to break in the process. Similar to the <code>spring security</code> system, scala&#39;s <code>break</code> syntax, kotlin&#39;s <code>return@</code>.</p><p>The following are some low-cost no-stack exceptions that control the flow, which is an anti-pattern and not recommended if not necessary.</p><ul><li>FlowBreak - Static util</li><li>FlowBreakException - Break process with exceptions of the Enum</li><li>FlowReturnException - Break process with return value</li><li>LoopControl - Loop control with enum</li><li>ReturnOrException - Either an exception with a return or an exception only</li></ul><h2 id="a2-c-func-function-and-lambda" tabindex="-1"><a class="header-anchor" href="#a2-c-func-function-and-lambda" aria-hidden="true">#</a> A2.C.<code>func/</code> Function and Lambda</h2><ul><li>Clz - Class Util</li><li>Dcl - DCL of Runnable</li><li>Fn - Distinct and duplicate</li><li>Lam - Get object and method references via lambda</li></ul><h2 id="a2-d-i18n-multiple-languages" tabindex="-1"><a class="header-anchor" href="#a2-d-i18n-multiple-languages" aria-hidden="true">#</a> A2.D.<code>i18n/</code> Multiple Languages</h2><ul><li>I18nAware - Marking interface</li><li>I18nEnum - Provide i18n capability for common enum</li><li>I18nString - String with i18n support</li><li>LocaleResolver - Support <code>-</code> and <code>_</code></li><li>ZoneIdResolver - Case-insensitive, partial name support</li></ul><h2 id="a2-e-id-identity" tabindex="-1"><a class="header-anchor" href="#a2-e-id-identity" aria-hidden="true">#</a> A2.E.<code>id/</code> Identity</h2><h3 id="lightid-lightweight-distributed-id" tabindex="-1"><a class="header-anchor" href="#lightid-lightweight-distributed-id" aria-hidden="true">#</a> LightId - Lightweight Distributed ID</h3><p>Lightweight distributed primary key with double buffering, using sequence to efficiently generate 64bit digital ID. ID can guarantee strict <code>monotonic incremental</code> (ascending order), but not continuous, and its long type 64bit composition is as follows.</p><ul><li>long = <code>1-bit:0 fixed</code>+<code>8-bit: Crc</code>+<code>1-bit: Layout</code>+<code>54-bit:Seq</code></li><li><code>0 Fixed</code>, guarante non-negative.</li><li><code>Crc</code>, <code>0</code> padding default, use Crc8Long to gen pseudo-random numbers.</li><li><code>Layout</code>, Provide <code>full sequence</code> and <code>block sequence</code> layouts. <ul><li><code>full sequence</code>=<code>1bit(0)</code> + <code>sequence(54bit)</code></li><li><code>block sequence</code>=<code>1bit(1)</code> + <code>block(9bit)</code> + <code>sequence(45bit)</code></li></ul></li><li><code>Seq</code>, Dependent on the layout, the following are its constraints <ul><li><code>block</code>=<code>block(9bit=512)</code>, distinguish different ID centers.</li><li><code>sequence</code>=<code>sequence(45bit|54bit)</code>, The unique incremental number within <code>block</code>.</li><li>The Range of <code>block</code> is <code>[1,512]</code>, and <code>0</code> means <code>full sequence</code></li></ul></li></ul><p>Since there are only 55 effective bits, the following characters are useful.</p><ul><li>ID centers, up to 512. Usually one data center with one ID center.</li><li>Using 50k ID/s, ID can be used for 22 years, (2^45 - 1)/(365x24x3600x50,000) = 22.3</li><li>In the case of the max-seq layout, the above capacity increase 512 times.</li><li>The sequence is not time-based, so the limit and lifetime depend only on the ID consumer.</li><li>The sequence is process independent, so it can generate different IDs in key-value form.</li></ul><p>The default double-buffering implementation allows <code>Loader</code> to guarantee a unique ASC order, as well,</p><ul><li>guarantee the global block-name generates the unique ID.</li><li>Intra-thread id ascending order, NO guaranteed for different threads.</li><li>Async id fetch when the remaining reaches the threshold (80%), no lock (non-read/write lock)</li><li>When switching ID segments, the minimum sync block is guaranteed for the protected resources.</li><li>Dynamically adjust based on the speed of ID consumption , reserving 60 seconds of use.</li><li>When the buffered ID are exhausted, only one Loader will load while others wait or timeout.</li><li>Support manual preload of all available ids.</li><li>Support manual or timed error clearing.</li><li>Support manual adjustment of runtime parameters.</li></ul><h3 id="lightidbufferedprovider-high-performance-lightweight" tabindex="-1"><a class="header-anchor" href="#lightidbufferedprovider-high-performance-lightweight" aria-hidden="true">#</a> LightIdBufferedProvider - High performance, lightweight</h3><p>Lightweight locking, high-performance, double-buffered light-id provider.</p><p>Measured performance is higher than busy-wait + read/write locks and big sync block with combined locks. The bottleneck is on the IO of the loader, which needs to be optimized for maxCount depending on the consumption.</p><p>There are 3 types of threads in total, and the read threads can be upgraded to write threads and even to loader threads. At the same time, there are multiple read threads, but only unique write threads and unique load threads.</p><ul><li>Read thread, normal light-id caller</li><li>Write thread, read thread upgraded or load thread, append segment to buffer</li><li>Load thread, async thread or read thread upgraded, loading segment via loader</li></ul><p>The double buffering works as follows, which will track the id consumption and automatically control the preload amount, but not exceed maxCount.</p><ul><li>If the remaining ID is less than 20%, the only async preload <code>maximum usage in 60s</code> or <code>maxCount</code>.</li><li>If the ID is exhausted, the read thread is upgraded to the write thread and the other read threads wait until they are woken up or timed out</li><li>If the read thread upgrades to the write thread, and there is a loader, this read thread will switch buffers after a spin busy waiting.</li></ul><h3 id="lightidutil-lightid-as-long-number" tabindex="-1"><a class="header-anchor" href="#lightidutil-lightid-as-long-number" aria-hidden="true">#</a> LightIdUtil - lightId as long number</h3><p>Util to verify and convert lightId, long and sequence. It can also change LightId&#39;s layout and seq order globally.</p><ul><li>forceBlockBit - adjust the bits count of <code>block</code></li><li>forceBlockFirst - which layout first, <code>Block</code> or <code>Sequence</code></li></ul><h3 id="ulid-simple-ulid-implement" tabindex="-1"><a class="header-anchor" href="#ulid-simple-ulid-implement" aria-hidden="true">#</a> Ulid - Simple ULID implement</h3><p>Generate ULIDs quickly only withou validation and parsing. Used for sequential random numbers, global IDs, etc.</p><h2 id="a2-f-img-image" tabindex="-1"><a class="header-anchor" href="#a2-f-img-image" aria-hidden="true">#</a> A2.F.<code>img/</code> Image</h2><ul><li>ImageIoFix - problem-using-imageio-write-jpg-file</li><li>StreamJpg - BufferedImage Writing</li><li>Watermark - Watermark</li><li>ZoomRotateCrop - Zoom Rotate and Crop</li></ul><h2 id="a2-g-io-io-and-file-system" tabindex="-1"><a class="header-anchor" href="#a2-g-io-io-and-file-system" aria-hidden="true">#</a> A2.G.<code>io/</code> IO and File system</h2><ul><li>CircleInputStream - Circular Read InputStream</li><li>CompatibleObjectStream - Use local class to deserialize if the serialVersionUID is not compatible</li><li>DirHasher - Local file system cannot save too many files</li><li>Exec - Single thread sync execution, use Apache Commons Exec for more feature</li><li>InputStreams - Stream operatioin when there&#39;s no <code>commons-*</code></li><li>NonCloseStream - Ignore stream close</li><li>Zipper - Recursive zip/unzip</li></ul><h2 id="a2-h-jaxb-xml" tabindex="-1"><a class="header-anchor" href="#a2-h-jaxb-xml" aria-hidden="true">#</a> A2.H.<code>jaxb/</code> xml</h2><p>Note: jaxb is removed in Java 11 and need manually add the dependency.</p><ul><li>StringMapXmlWriter - top-level element into a key-value map, mostly used in parameter signatures.</li></ul><h2 id="a2-i-lock-locks" tabindex="-1"><a class="header-anchor" href="#a2-i-lock-locks" aria-hidden="true">#</a> A2.I.<code>lock/</code> Locks</h2><ul><li>GlobalLock - Global lock interface</li><li>JvmStaticGlobalLock - Jvm global lock using WeakReference</li></ul><h2 id="a2-j-math-domain-s-algorithms" tabindex="-1"><a class="header-anchor" href="#a2-j-math-domain-s-algorithms" aria-hidden="true">#</a> A2.J.<code>math/</code> Domain&#39;s Algorithms</h2><ul><li>AnyIntegerUtil - int, long, Number and String</li><li>AverageDecimal - Average 20/6=<code>[3.33, 3.33, 3.34, 3.33, 3.33, 3.34]</code></li><li>BalanceDecimal - Balance is Weighted Average</li><li>BigDecimalUtil - <code>null</code> friendly Decimal Utility</li><li>ComparableUtil - Comparator without <code>null</code></li><li>RatioNumber - Relationship between two units and their carrying and borrowing</li></ul><h2 id="a2-k-netx-network" tabindex="-1"><a class="header-anchor" href="#a2-k-netx-network" aria-hidden="true">#</a> A2.K.<code>netx/</code> Network</h2><ul><li>SslTrustAll - Trust all the certs to ignore crawler ssl errors</li><li>SslVersion - jdk-8-will-use-tls-12-as-default</li></ul><h2 id="a2-l-page-paginate" tabindex="-1"><a class="header-anchor" href="#a2-l-page-paginate" aria-hidden="true">#</a> A2.L.<code>page/</code> Paginate</h2><ul><li>PageQuery - Paginated query</li><li>PageResult - Paginated result</li><li>PageUtil - Pagination with <code>-1+1</code> algorithm, Not if-else</li></ul><h2 id="a2-m-pain-exception" tabindex="-1"><a class="header-anchor" href="#a2-m-pain-exception" aria-hidden="true">#</a> A2.M.<code>pain/</code> Exception</h2><ul><li>BadArgsException - i18n, enum no-stackable IllegalArgumentException</li><li>BadStateException - i18n, enum no-stackable IllegalStateException</li><li>CodeException - i18n, enum no-stackable RuntimeException</li><li>DebugException - Only for debug or testing code</li><li>HttpStatusException - HttpStatus no-stackable RuntimeException</li><li>IllegalRequestException - IllegalRequest</li><li>IllegalResponseException - IllegalResponse</li><li>IORuntimeException - Runtime of IOException</li><li>MessageException - no-stackable message</li><li>NoStackRuntimeException - no-stack, Used for performance-first stack-useless scenarios</li><li>ThrowableUtil - stack and cause util</li><li>TimeoutRuntimeException - Runtime of TimeoutException</li></ul><h2 id="a2-n-stat-statistics-and-monitoring" tabindex="-1"><a class="header-anchor" href="#a2-n-stat-statistics-and-monitoring" aria-hidden="true">#</a> A2.N.<code>stat/</code> Statistics and Monitoring</h2><ul><li>GitStat - stats git by date author, can save it to mysql</li><li>JvmStat - Cpu, Mem and Thread of the JVM</li><li>LogStat - Collect log growth and keywords</li></ul><h2 id="a2-o-text-full-half-white-char-and-formatter" tabindex="-1"><a class="header-anchor" href="#a2-o-text-full-half-white-char-and-formatter" aria-hidden="true">#</a> A2.O.<code>text/</code> Full/Half White Char and Formatter</h2><ul><li>BarString - Bar delimited string and Bar can be customized</li><li>BuilderHelper - <code>null</code> friendly fragment-less StringBuilder</li><li>BuilderHolder - StringBuilder to reduce mem fragmentation</li><li>CaseSwitcher - Camel, snake, pascal, kebab naming convertor</li><li>FormatUtil - support printf&#39;s <code>%</code>;logbak&#39;s <code>{}</code>;message&#39;s <code>{0}</code></li><li>FullCharUtil - Full char util</li><li>HalfCharUtil - Half char util</li><li>JsonTemplate - Make simple json with template</li><li>StringTemplate - No replace, good readability and performance</li><li>WhiteUtil - Make up for java trim, more Whitespace handling</li><li>Wildcard - Fast wildcard match, only <code>?</code> and <code>*</code> are supported</li></ul><h2 id="a2-p-time-date-and-time" tabindex="-1"><a class="header-anchor" href="#a2-p-time-date-and-time" aria-hidden="true">#</a> A2.P.<code>time/</code> Date and Time</h2><ul><li>DateFormatter - Thread safed more faster formatter</li><li>DateLocaling - LocalDateTime and TimeZone</li><li>DateNumber - Two-way conversion of date to number</li><li>DateParser - More efficient compatible date parsing</li><li>Sleep - Wrapper of Thread.sleep</li><li>SlideDate - Accounting Date Tool with OffsetClock</li><li>StopWatch - Stopwatch for time tracking of code</li><li>ThreadNow - Thread-level tuning clocks</li></ul><h2 id="a2-q-tk-token-and-ticket" tabindex="-1"><a class="header-anchor" href="#a2-q-tk-token-and-ticket" aria-hidden="true">#</a> A2.Q.<code>tk</code> Token and Ticket</h2><p>Used for private key credentials that sometimes require central control and sometimes do not, in the scenario between the meaningless session and the popular JWT system.</p><p>Session replication and sticky are very stable and widely used in horizontal extensions such as redis and Hazelcast.</p><p>JsonWeb ecosystem is powerful in most data exchange and security requirements scenarios, but the credential is its new domain.</p><p>The applicable scenarios are RememberMe or A credential to read the result of async tasks.</p><p>In RememberMe, the biz-data can contain uid, while in sig-data the user secret and salt must be checked against the ticket. the validation must be evaluated when relogin, password change, or credential expiration.</p><h3 id="ticket-distrib-credential-with-centralized-authority" tabindex="-1"><a class="header-anchor" href="#ticket-distrib-credential-with-centralized-authority" aria-hidden="true">#</a> Ticket - Distrib credential with centralized authority</h3><p>The features are short, expireable, kickable, sign-checkable, and have some business meaning instead of meaningless random tokens.</p><p>Where the <code>Data</code> suffix is the business semantics, the <code>Part</code> suffix is the transfer semantics, and the layout of different perspectives is,</p><ul><li>Business layout: SigData + <code>.</code> + SigPart</li><li>SigData = PubPart + (<code>.</code> + BizData)?</li><li>PubPart = <code>mod</code> + <code>-</code> + <code>due</code> + <code>-</code> + <code>seq</code></li><li>BizData: business data, such as plaintext Json</li><li>Transfer layout: PubPart + <code>.</code> + SecPart</li><li>SecPart = (BizPart + <code>.</code>)? + SigPart</li><li>BizPart: encrypted BizData</li><li>SigPart: signed data, sign the SigData</li><li><code>mod</code>: predefined pattern of encryption, signature and BizPart type for deserialization. English number</li><li><code>due</code>: expiration date, number of seconds from 1970-01-01, used to determine time expiration. Positive integer</li><li><code>seq</code>: serial number of issue, used to determine old and new, business expiration, positive integer</li><li><code>salt</code> - encryption or signature secret key, such as symmetric secret or asymmetric private key</li></ul><p>The public part of business scenarios and descriptions are as follows.</p><ul><li><p><code>mod</code> The encryption and signature algorithms, data formats, user fields etc. are developed by the server or negotiated with the user</p><ul><li>any = only parse text and merge fields</li><li>am0 = aes256(biz-data, salt) + md5(sig-data) Md5 without salt</li><li>am1 = aes256(biz-data, salt) + md5(sig-data + salt) Md5 with salt</li><li>ah1 = aes256(biz-data, salt) + HmacSha1(sig-data, salt) Hmac signature check</li><li>ah2 = aes256(biz-data, salt) + HmacSha256(sig-data, salt) Hmac signature check</li></ul></li><li><p><code>due</code> The <code>seconds</code> from 1970-01-01 that the credential expires in, not milliseconds.</p><ul><li>Expired credentials, the client must go to the server to renew</li><li>The server determines its own actions, such as renew, reject, resend, etc.</li></ul></li><li><p><code>seq</code> Issue serial number. Increment when generating, and unchanged when renewing. if the seq is different, the credential must be reacquired.</p><ul><li>When the user login, the credential is generated. When the other endpoint login again, the seq is incremented, then the old credentials can be kicked out.</li><li>When a credential expires without another login occurring, it can be renewed with seq for a new credential.</li><li>0 means no need to verify serial number, generally used for weak privileges, such as temporary credentials</li></ul></li></ul><p>Credentials can be passed in the http header, session and url-string.</p><ul><li>Without the private key, you cannot verify the signature and decryption, and you can only use the PubPart information.</li><li>With the private key, you can verify the credentials and obtain the business content through signature verification and decryption.</li><li>If you don&#39;t have a private key and you need to check the signature, you can leave it unsalted and don&#39;t use hmac signature.</li></ul><h3 id="default-implementation-and-tool" tabindex="-1"><a class="header-anchor" href="#default-implementation-and-tool" aria-hidden="true">#</a> Default Implementation and Tool</h3><ul><li><code>AnyTicket</code> - Can parse tickets of any mod</li><li><code>TicketHelp</code> - basic tool for ticket parsing and verification</li></ul>',80);function m(p,g){const t=n("ExternalLinkIcon");return o(),r("div",null,[c,e("p",null,[i("see "),e("a",h,[i("https://www.crockford.com/base32.html"),d(t)])]),u])}const y=l(s,[["render",m],["__file","a2.utilities.html.vue"]]);export{y as default};
