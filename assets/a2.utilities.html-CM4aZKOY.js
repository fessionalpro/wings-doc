import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,e as t}from"./app-Bq2ogDBv.js";const l={},n=t('<h1 id="a2-mirana-utility" tabindex="-1"><a class="header-anchor" href="#a2-mirana-utility"><span>A2.Mirana Utility</span></a></h1><p>Mirana provides useful utilities.</p><h2 id="a2-1-anti-anti-engineering" tabindex="-1"><a class="header-anchor" href="#a2-1-anti-anti-engineering"><span>A2.1.<code>anti/</code> Anti-engineering</span></a></h2><ul><li>BeanVisitor - Visist the fields of a bean via reflection, mainly for property formatting</li><li>G - Anti-pattern, passing values across layers</li><li>L - Anti-pattern, gathering message across layers</li></ul><h2 id="a2-2-best-high-qulity-code" tabindex="-1"><a class="header-anchor" href="#a2-2-best-high-qulity-code"><span>A2.2.<code>best/</code> High Qulity Code</span></a></h2><ul><li>AssertArgs - Pre-assertion, IllegalArgumentException, BadArgsException</li><li>AssertMessage - Assertion, MessageException</li><li>AssertState Mid/Post-assertion - IllegalStateException, BadStateException</li><li>DummyBlock - Turn off some warns of safe code blocks</li><li>Param - Annotate whether param is modified</li><li>TypedKey - Value registration of a Map with type</li><li>TypedReg - Key and Value registration of a Map with type</li></ul><h2 id="a2-3-bits-binary-byte-related" tabindex="-1"><a class="header-anchor" href="#a2-3-bits-binary-byte-related"><span>A2.3.<code>bits/</code> Binary, Byte-related</span></a></h2><ul><li>Aes - Aes128 and Aes256 utility</li><li>Aes128 - jdk AES/CBC/PKCS5Padding, PKCS7Padding with bouncycastle</li><li>Aes256 - jdk AES/CBC/PKCS5Padding, Recommended for java1.8.0_162+</li><li>Base64 - RFC4648_URLSAFE and UTF8 by default, <code>+/</code> and <code>-_</code> are supported</li><li>Bytes - Hex and Unicode, eg. <code>我</code>(25105)=&gt;&#39;\\u6211&#39;</li><li>HmacHelp - MessageAuthenticationCode HmacMD5, HmacSHA1, HmacSHA256</li><li>Md5 - md5sum, md5check</li><li>HdHelp - MessageDigest MD5, SHA1, SHA256</li></ul><h2 id="a2-4-cast-type-cast-convert" tabindex="-1"><a class="header-anchor" href="#a2-4-cast-type-cast-convert"><span>A2.4.<code>cast/</code> Type Cast/Convert</span></a></h2><ul><li>BiConvertor - bi-direction converter</li><li>BoxedCastUtil - Conversion of wrapper and primitive</li><li>BoxedTypeUtil - Wrapper compatible instanceOf, isAssignable</li><li>EnumConvertor - enum serialization by name or qualified path</li><li>MethodConvertor - compact serialization of Method</li><li>StringCastUtil - Conversion of strings and other types</li><li>TypedCastUtil - Conversion of type parameters and generic types</li></ul><h2 id="a2-5-code-encode-and-decode" tabindex="-1"><a class="header-anchor" href="#a2-5-code-encode-and-decode"><span>A2.5.<code>code/</code> Encode and Decode</span></a></h2><h3 id="_5a-crc4int-int32-with-crc" tabindex="-1"><a class="header-anchor" href="#_5a-crc4int-int32-with-crc"><span>5a.Crc4Int - int32 with CRC</span></a></h3><p>Based on the original int value, generate a pseudo-random verifiable number that can decrypt the original value.</p><p>try to improve human readability and pseudo-randomness.</p><h3 id="_5b-crc8long-crc8longutil-int64-with-crc" tabindex="-1"><a class="header-anchor" href="#_5b-crc8long-crc8longutil-int64-with-crc"><span>5b.Crc8Long, Crc8LongUtil - int64 with CRC</span></a></h3><p>Based on the original long value, generate a pseudo-random verifiable number that can decrypt the original value.</p><p>The bit layout can be customized, there are 3 types by default, see Crc8LongUtil.</p><p>The applicable scenario is exposed ID number without high security and be efficiently parsed and verified in both directions.</p><h3 id="_5c-excel26az-excel-column-naming" tabindex="-1"><a class="header-anchor" href="#_5c-excel26az-excel-column-naming"><span>5c.Excel26Az - Excel Column Naming</span></a></h3><p>Two-way parsing by Excel column naming (A:1,B:2,... ,Z:26,AA:27)</p><h3 id="_5d-leapcode-pseudo-random-highly-readable-code" tabindex="-1"><a class="header-anchor" href="#_5d-leapcode-pseudo-random-highly-readable-code"><span>5d.LeapCode - Pseudo-random Highly Readable Code</span></a></h3><p>A textual 32-symbol notation for expressing numbers, consisting of 22 letters (minus UOIL for confusion) and 10 numbers. The encoded string looks more random, can be decrypted to its original value, and can be filled to a fixed length.</p><p>see <a href="https://www.crockford.com/base32.html" target="_blank" rel="noopener noreferrer">https://www.crockford.com/base32.html</a></p><p>The applicable scenario is exposed ID number without high security and be efficiently parsed and verified in both directions.</p><h3 id="_5e-other-codes" tabindex="-1"><a class="header-anchor" href="#_5e-other-codes"><span>5e.Other Codes</span></a></h3><ul><li>Mod10Code - Checking algorithm from USPS</li><li>RandCode - Some random numbers with better human readability</li><li>SlotCode - Random assignment of fixed positions, such as pickup number</li></ul><h2 id="a2-6-cond-condition-assertion" tabindex="-1"><a class="header-anchor" href="#a2-6-cond-condition-assertion"><span>A2.6. <code>cond/</code> Condition assertion</span></a></h2><ul><li>EqualsUtil - Equivals Condition</li><li>StaticFlag - Global Flag</li><li>IfSetter - Conditional setter util</li></ul><h2 id="a2-7-data-data-transfer" tabindex="-1"><a class="header-anchor" href="#a2-7-data-data-transfer"><span>A2.7.<code>data/</code> Data Transfer</span></a></h2><ul><li>Arr - Some Array manipulations</li><li>CodeEnum - Biz enum, such as I18n, status</li><li>DataResult - Common DTO with biz data</li><li>Diff - diff 2 collections, such as insertion, update, deletion</li><li>Null - null-safe is our goal</li><li>Q - Single-parameter Query Class</li><li>R - Scenario classes for DataResult</li><li>Rank - Sort by multi-conditional order</li><li>U - Tuple, Either for internal data transfer</li><li>Z - The first conditional data (such as non-null)</li></ul><h2 id="a2-8-dync-dynamic-compliation" tabindex="-1"><a class="header-anchor" href="#a2-8-dync-dynamic-compliation"><span>A2.8.<code>dync/</code> Dynamic Compliation</span></a></h2><ul><li>Java - Dynamic compilation and creation of java</li><li>OrderedSpi - order and get 1st SPI</li></ul><h2 id="a2-9-evil-use-with-caution" tabindex="-1"><a class="header-anchor" href="#a2-9-evil-use-with-caution"><span>A2.9.<code>evil</code> Use with Caution</span></a></h2><ul><li>Attention - Tagging method should follow some pattern to prevent misuse</li><li>StartStageAttention - Methods called during the startup, do not call frequently</li><li>ThreadLocalAttention - Note the ThreadLocal mode</li><li>ThreadLocalProvider - OrderedSpi to provide ThreadLocal</li><li>ThreadLocalSoft - ThreadLocal using SoftReference</li><li>TweakingContext - Contextual configuration for debugging</li></ul><h2 id="a2-a-fake-fake-data" tabindex="-1"><a class="header-anchor" href="#a2-a-fake-fake-data"><span>A2.A.<code>fake/</code> Fake Data</span></a></h2><ul><li>FakeDate - Generate a pseudo-random date around the given offset, guarante idempotent</li><li>FakeName - Generate a random chines name</li></ul><h2 id="a2-b-flow-flow-control" tabindex="-1"><a class="header-anchor" href="#a2-b-flow-flow-control"><span>A2.B.<code>flow/</code> Flow Control</span></a></h2><p>In high level architecture design, high-order function calls, stream processing, usually use exceptions to break in the process. Similar to the <code>spring security</code> system, scala&#39;s <code>break</code> syntax, kotlin&#39;s <code>return@</code>.</p><p>The following are some low-cost no-stack exceptions that control the flow, which is an anti-pattern and not recommended if not necessary.</p><ul><li>FlowBreak - Static util</li><li>FlowBreakException - Break process with exceptions of the Enum</li><li>FlowEnum - flow control enum</li><li>FlowReturnException - Break process with return value</li><li>ReturnOrException - Either an exception with a return or an exception only</li></ul><h2 id="a2-c-func-function-and-lambda" tabindex="-1"><a class="header-anchor" href="#a2-c-func-function-and-lambda"><span>A2.C.<code>func/</code> Function and Lambda</span></a></h2><ul><li>Clz - Class Util</li><li>Dcl - DCL of Runnable</li><li>Fn - Distinct and duplicate</li><li>Lam - Get object and method references via lambda</li></ul><h2 id="a2-d-i18n-multiple-languages" tabindex="-1"><a class="header-anchor" href="#a2-d-i18n-multiple-languages"><span>A2.D.<code>i18n/</code> Multiple Languages</span></a></h2><ul><li>I18nAware - Marking interface</li><li>I18nEnum - Provide i18n capability for common enum</li><li>I18nString - String with i18n support</li><li>LocaleResolver - Support <code>-</code> and <code>_</code></li><li>ZoneIdResolver - Case-insensitive, partial name support</li></ul><h2 id="a2-e-id-identity" tabindex="-1"><a class="header-anchor" href="#a2-e-id-identity"><span>A2.E.<code>id/</code> Identity</span></a></h2><h3 id="e1-lightid-lightweight-distributed-id" tabindex="-1"><a class="header-anchor" href="#e1-lightid-lightweight-distributed-id"><span>e1.LightId - Lightweight Distributed ID</span></a></h3><p>Lightweight distributed primary key with double buffering, using sequence to efficiently generate 64bit digital ID. ID can guarantee strict <code>monotonic incremental</code> (ascending order), but not continuous, and its long type 64bit composition is as follows.</p><ul><li>long = <code>1-bit:0 fixed</code>+<code>8-bit: Crc</code>+<code>1-bit: Layout</code>+<code>54-bit:Seq</code></li><li><code>0 Fixed</code>, guarante non-negative.</li><li><code>Crc</code>, <code>0</code> padding default, use Crc8Long to gen pseudo-random numbers.</li><li><code>Layout</code>, Provide <code>full sequence</code> and <code>block sequence</code> layouts. <ul><li><code>full sequence</code>=<code>1bit(0)</code> + <code>sequence(54bit)</code></li><li><code>block sequence</code>=<code>1bit(1)</code> + <code>block(9bit)</code> + <code>sequence(45bit)</code></li></ul></li><li><code>Seq</code>, Dependent on the layout, the following are its constraints <ul><li><code>block</code>=<code>block(9bit=512)</code>, distinguish different ID centers.</li><li><code>sequence</code>=<code>sequence(45bit|54bit)</code>, The unique incremental number within <code>block</code>.</li><li>The Range of <code>block</code> is <code>[1,512]</code>, and <code>0</code> means <code>full sequence</code></li></ul></li></ul><p>Since there are only 55 effective bits, the following characters are useful.</p><ul><li>ID centers, up to 512. Usually one data center with one ID center.</li><li>Using 50k ID/s, ID can be used for 22 years, (2^45 - 1)/(365x24x3600x50,000) = 22.3</li><li>In the case of the max-seq layout, the above capacity increase 512 times.</li><li>The sequence is not time-based, so the limit and lifetime depend only on the ID consumer.</li><li>The sequence is process independent, so it can generate different IDs in key-value form.</li></ul><p>The default double-buffering implementation allows <code>Loader</code> to guarantee a unique ASC order, as well,</p><ul><li>guarantee the global block-name generates the unique ID.</li><li>Intra-thread id ascending order, NO guaranteed for different threads.</li><li>Async id fetch when the remaining reaches the threshold (80%), no lock (non-read/write lock)</li><li>When switching ID segments, the minimum sync block is guaranteed for the protected resources.</li><li>Dynamically adjust based on the speed of ID consumption , reserving 60 seconds of use.</li><li>When the buffered ID are exhausted, only one Loader will load while others wait or timeout.</li><li>Support manual preload of all available ids.</li><li>Support manual or timed error clearing.</li><li>Support manual adjustment of runtime parameters.</li></ul><h3 id="e2-lightidbufferedprovider-high-performance-lightweight" tabindex="-1"><a class="header-anchor" href="#e2-lightidbufferedprovider-high-performance-lightweight"><span>e2.LightIdBufferedProvider - High performance, lightweight</span></a></h3><p>Lightweight locking, high-performance, double-buffered light-id provider.</p><p>Measured performance is higher than busy-wait + read/write locks and big sync block with combined locks. The bottleneck is on the IO of the loader, which needs to be optimized for maxCount depending on the consumption.</p><p>There are 3 types of threads in total, and the read threads can be upgraded to write threads and even to loader threads. At the same time, there are multiple read threads, but only unique write threads and unique load threads.</p><ul><li>Read thread, normal light-id caller</li><li>Write thread, read thread upgraded or load thread, append segment to buffer</li><li>Load thread, async thread or read thread upgraded, loading segment via loader</li></ul><p>The double buffering works as follows, which will track the id consumption and automatically control the preload amount, but not exceed maxCount.</p><ul><li>If the remaining ID is less than 20%, the only async preload <code>maximum usage in 60s</code> or <code>maxCount</code>.</li><li>If the ID is exhausted, the read thread is upgraded to the write thread and the other read threads wait until they are woken up or timed out</li><li>If the read thread upgrades to the write thread, and there is a loader, this read thread will switch buffers after a spin busy waiting.</li></ul><h3 id="e3-lightidutil-lightid-as-long-number" tabindex="-1"><a class="header-anchor" href="#e3-lightidutil-lightid-as-long-number"><span>e3.LightIdUtil - lightId as long number</span></a></h3><p>Util to verify and convert lightId, long and sequence. It can also change LightId&#39;s layout and seq order globally.</p><ul><li>forceBlockBit - adjust the bits count of <code>block</code></li><li>forceBlockFirst - which layout first, <code>Block</code> or <code>Sequence</code></li></ul><h3 id="e4-ulid-simple-ulid-implement" tabindex="-1"><a class="header-anchor" href="#e4-ulid-simple-ulid-implement"><span>e4.Ulid - Simple ULID implement</span></a></h3><p>Generate ULIDs quickly only withou validation and parsing. Used for sequential random numbers, global IDs, etc.</p><h2 id="a2-f-img-image" tabindex="-1"><a class="header-anchor" href="#a2-f-img-image"><span>A2.F.<code>img/</code> Image</span></a></h2><ul><li>ImageIoFix - problem-using-imageio-write-jpg-file</li><li>StreamJpg - BufferedImage Writing</li><li>Watermark - Watermark</li><li>ZoomRotateCrop - Zoom Rotate and Crop</li></ul><h2 id="a2-g-io-io-and-file-system" tabindex="-1"><a class="header-anchor" href="#a2-g-io-io-and-file-system"><span>A2.G.<code>io/</code> IO and File system</span></a></h2><ul><li>CircleInputStream - Circular Read InputStream</li><li>CompatibleObjectStream - Use local class to deserialize if the serialVersionUID is not compatible</li><li>DirHasher - Local file system cannot save too many files</li><li>Exec - Single thread sync execution, use Apache Commons Exec for more feature</li><li>InputStreams - Stream operatioin when there&#39;s no <code>commons-*</code></li><li>NonCloseStream - Ignore stream close</li><li>Zipper - Recursive zip/unzip</li></ul><h2 id="a2-h-jaxb-xml" tabindex="-1"><a class="header-anchor" href="#a2-h-jaxb-xml"><span>A2.H.<code>jaxb/</code> xml</span></a></h2><p>Note: jaxb is removed in Java 11 and need manually add the dependency.</p><ul><li>StringMapXmlWriter - top-level element into a key-value map, mostly used in parameter signatures.</li></ul><h2 id="a2-i-lock-locks" tabindex="-1"><a class="header-anchor" href="#a2-i-lock-locks"><span>A2.I.<code>lock/</code> Locks</span></a></h2><ul><li>GlobalLock - Global lock interface</li><li>JvmStaticGlobalLock - Jvm global lock using WeakReference</li></ul><h2 id="a2-j-math-domain-s-algorithms" tabindex="-1"><a class="header-anchor" href="#a2-j-math-domain-s-algorithms"><span>A2.J.<code>math/</code> Domain&#39;s Algorithms</span></a></h2><ul><li>AnyIntegerUtil - int, long, Number and String</li><li>AverageDecimal - Average 20/6=<code>[3.33, 3.33, 3.34, 3.33, 3.33, 3.34]</code></li><li>BalanceDecimal - Balance is Weighted Average</li><li>BigDecimalUtil - <code>null</code> friendly Decimal Utility</li><li>ComparableUtil - Comparator without <code>null</code></li><li>RatioNumber - Relationship between two units and their carrying and borrowing</li></ul><h2 id="a2-k-netx-network" tabindex="-1"><a class="header-anchor" href="#a2-k-netx-network"><span>A2.K.<code>netx/</code> Network</span></a></h2><ul><li>SslTrustAll - Trust all the certs to ignore crawler ssl errors</li><li>SslVersion - jdk-8-will-use-tls-12-as-default</li></ul><h2 id="a2-l-page-paginate" tabindex="-1"><a class="header-anchor" href="#a2-l-page-paginate"><span>A2.L.<code>page/</code> Paginate</span></a></h2><ul><li>PageQuery - Paginated query</li><li>PageResult - Paginated result</li><li>PageUtil - Pagination with <code>-1+1</code> algorithm, Not if-else</li></ul><h2 id="a2-m-pain-exception" tabindex="-1"><a class="header-anchor" href="#a2-m-pain-exception"><span>A2.M.<code>pain/</code> Exception</span></a></h2><ul><li>BadArgsException - i18n, enum no-stackable IllegalArgumentException</li><li>BadStateException - i18n, enum no-stackable IllegalStateException</li><li>CodeException - i18n, enum no-stackable RuntimeException</li><li>DebugException - Only for debug or testing code</li><li>HttpStatusException - HttpStatus no-stackable RuntimeException</li><li>IllegalRequestException - IllegalRequest</li><li>IllegalResponseException - IllegalResponse</li><li>IORuntimeException - Runtime of IOException</li><li>MessageException - no-stackable message</li><li>NoStackRuntimeException - no-stack, Used for performance-first stack-useless scenarios</li><li>ThrowableUtil - stack and cause util</li><li>TimeoutRuntimeException - Runtime of TimeoutException</li><li>UncheckedException - wrapping a checked exception as RuntimeException</li><li>WaitingTimeoutException - stackless WaitingTimeoutException</li></ul><h2 id="a2-n-stat-statistics-and-monitoring" tabindex="-1"><a class="header-anchor" href="#a2-n-stat-statistics-and-monitoring"><span>A2.N.<code>stat/</code> Statistics and Monitoring</span></a></h2><ul><li>GitStat - stats git by date author, can save it to mysql</li><li>JvmStat - Cpu, Mem and Thread of the JVM</li><li>LogStat - Collect log growth and keywords</li></ul><h2 id="a2-o-text-full-half-white-char-and-formatter" tabindex="-1"><a class="header-anchor" href="#a2-o-text-full-half-white-char-and-formatter"><span>A2.O.<code>text/</code> Full/Half White Char and Formatter</span></a></h2><ul><li>BarString - Bar delimited string and Bar can be customized</li><li>BuilderHelper - <code>null</code> friendly fragment-less StringBuilder</li><li>BuilderHolder - StringBuilder to reduce mem fragmentation</li><li>CaseSwitcher - Camel, snake, pascal, kebab naming convertor</li><li>FormatUtil - support printf&#39;s <code>%</code>;logbak&#39;s <code>{}</code>;message&#39;s <code>{0}</code></li><li>FullCharUtil - Full char util</li><li>HalfCharUtil - Half char util</li><li>JsonTemplate - Make simple json with template</li><li>StringTemplate - No replace, good readability and performance</li><li>WhiteUtil - Make up for java trim, more Whitespace handling</li><li>Wildcard - Fast wildcard match, only <code>?</code> and <code>*</code> are supported</li></ul><h2 id="a2-p-time-date-and-time" tabindex="-1"><a class="header-anchor" href="#a2-p-time-date-and-time"><span>A2.P.<code>time/</code> Date and Time</span></a></h2><ul><li>DateFormatter - Thread safed more faster formatter</li><li>DateLocaling - LocalDateTime and TimeZone</li><li>DateNumber - Two-way conversion of date to number</li><li>DateParser - More efficient compatible date parsing</li><li>Sleep - Wrapper of Thread.sleep</li><li>SlideDate - Accounting Date Tool with OffsetClock</li><li>StopWatch - Stopwatch for time tracking of code</li><li>ThreadNow - Thread-level tuning clocks</li></ul><h2 id="a2-q-tk-token-and-ticket" tabindex="-1"><a class="header-anchor" href="#a2-q-tk-token-and-ticket"><span>A2.Q.<code>tk</code> Token and Ticket</span></a></h2><p>Used for private key credentials that sometimes require central control and sometimes do not, in the scenario between the meaningless session and the popular JWT system.</p><p>Session replication and sticky are very stable and widely used in horizontal extensions such as redis and Hazelcast.</p><p>JsonWeb ecosystem is powerful in most data exchange and security requirements scenarios, but the credential is its new domain.</p><p>The applicable scenarios are RememberMe or A credential to read the result of async tasks.</p><p>In RememberMe, the biz-data can contain uid, while in sig-data the user secret and salt must be checked against the ticket. the validation must be evaluated when relogin, password change, or credential expiration.</p><h3 id="q1-ticket-distrib-credential-with-centralized-authority" tabindex="-1"><a class="header-anchor" href="#q1-ticket-distrib-credential-with-centralized-authority"><span>q1.Ticket - Distrib credential with centralized authority</span></a></h3><p>The features are short, expireable, kickable, sign-checkable, and have some business meaning instead of meaningless random tokens.</p><p>Where the <code>Data</code> suffix is the business semantics, the <code>Part</code> suffix is the transfer semantics, and the layout of different perspectives is,</p><ul><li>Business layout: SigData + <code>~</code> + SigPart</li><li>SigData = PubPart + (<code>~</code> + BizData)?</li><li>PubPart = <code>mod</code> + <code>-</code> + <code>due</code> + <code>-</code> + <code>seq</code></li><li>BizData: business data, such as plaintext Json</li><li>Transfer layout: PubPart + <code>~</code> + SecPart</li><li>SecPart = (BizPart + <code>~</code>)? + SigPart</li><li>BizPart: encrypted BizData</li><li>SigPart: signed data, sign the SigData</li><li><code>mod</code>: predefined pattern of encryption, signature and BizPart type for deserialization. English number</li><li><code>due</code>: expiration date, number of seconds from 1970-01-01, used to determine time expiration. Positive integer</li><li><code>seq</code>: serial number of issue, used to determine old and new, business expiration, positive integer</li><li><code>salt</code> - encryption or signature secret key, such as symmetric secret or asymmetric private key</li></ul><p>The public part of business scenarios and descriptions are as follows.</p><ul><li><p><code>mod</code> The encryption and signature algorithms, data formats, user fields etc. are developed by the server or negotiated with the user</p><ul><li>any = only parse text and merge fields</li><li>am0 = aes256(biz-data, salt) + md5(sig-data) Md5 without salt</li><li>am1 = aes256(biz-data, salt) + md5(sig-data + salt) Md5 with salt</li><li>ah1 = aes256(biz-data, salt) + HmacSha1(sig-data, salt) Hmac signature check</li><li>ah2 = aes256(biz-data, salt) + HmacSha256(sig-data, salt) Hmac signature check</li></ul></li><li><p><code>due</code> The <code>seconds</code> from 1970-01-01 that the credential expires in, not milliseconds.</p><ul><li>Expired credentials, the client must go to the server to renew</li><li>The server determines its own actions, such as renew, reject, resend, etc.</li></ul></li><li><p><code>seq</code> Issue serial number. Increment when generating, and unchanged when renewing. if the seq is different, the credential must be reacquired.</p><ul><li>When the user login, the credential is generated. When the other endpoint login again, the seq is incremented, then the old credentials can be kicked out.</li><li>When a credential expires without another login occurring, it can be renewed with seq for a new credential.</li><li>0 means no need to verify serial number, generally used for weak privileges, such as temporary credentials</li></ul></li></ul><p>Credentials can be passed in the http header, session and url-string.</p><ul><li>Without the private key, you cannot verify the signature and decryption, and you can only use the PubPart information.</li><li>With the private key, you can verify the credentials and obtain the business content through signature verification and decryption.</li><li>If you don&#39;t have a private key and you need to check the signature, you can leave it unsalted and don&#39;t use hmac signature.</li></ul><h3 id="q2-default-implementation-and-tool" tabindex="-1"><a class="header-anchor" href="#q2-default-implementation-and-tool"><span>q2.Default Implementation and Tool</span></a></h3><ul><li><code>AnyTicket</code> - Can parse tickets of any mod</li><li><code>TicketHelp</code> - basic tool for ticket parsing and verification</li></ul>',103),o=[n];function r(d,s){return a(),i("div",null,o)}const u=e(l,[["render",r],["__file","a2.utilities.html.vue"]]),p=JSON.parse(`{"path":"/a-mirana/a2.utilities.html","title":"A2.Mirana Utility","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"cat","category":["Mirana","Utility"],"description":"A2.Mirana Utility Mirana provides useful utilities. A2.1.anti/ Anti-engineering BeanVisitor - Visist the fields of a bean via reflection, mainly for property formatting G - Anti...","GIT_REPO_HEAD":"2024-08-01 05107706255cba83dc5ec76e359d3302df867736","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/a-mirana/a2.utilities.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/a-mirana/a2.utilities.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"A2.Mirana Utility"}],["meta",{"property":"og:description","content":"A2.Mirana Utility Mirana provides useful utilities. A2.1.anti/ Anti-engineering BeanVisitor - Visist the fields of a bean via reflection, mainly for property formatting G - Anti..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-29T12:05:33.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-07-29T12:05:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"A2.Mirana Utility\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-29T12:05:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"A2.1.anti/ Anti-engineering","slug":"a2-1-anti-anti-engineering","link":"#a2-1-anti-anti-engineering","children":[]},{"level":2,"title":"A2.2.best/ High Qulity Code","slug":"a2-2-best-high-qulity-code","link":"#a2-2-best-high-qulity-code","children":[]},{"level":2,"title":"A2.3.bits/ Binary, Byte-related","slug":"a2-3-bits-binary-byte-related","link":"#a2-3-bits-binary-byte-related","children":[]},{"level":2,"title":"A2.4.cast/ Type Cast/Convert","slug":"a2-4-cast-type-cast-convert","link":"#a2-4-cast-type-cast-convert","children":[]},{"level":2,"title":"A2.5.code/ Encode and Decode","slug":"a2-5-code-encode-and-decode","link":"#a2-5-code-encode-and-decode","children":[{"level":3,"title":"5a.Crc4Int - int32 with CRC","slug":"_5a-crc4int-int32-with-crc","link":"#_5a-crc4int-int32-with-crc","children":[]},{"level":3,"title":"5b.Crc8Long, Crc8LongUtil - int64 with CRC","slug":"_5b-crc8long-crc8longutil-int64-with-crc","link":"#_5b-crc8long-crc8longutil-int64-with-crc","children":[]},{"level":3,"title":"5c.Excel26Az - Excel Column Naming","slug":"_5c-excel26az-excel-column-naming","link":"#_5c-excel26az-excel-column-naming","children":[]},{"level":3,"title":"5d.LeapCode - Pseudo-random Highly Readable Code","slug":"_5d-leapcode-pseudo-random-highly-readable-code","link":"#_5d-leapcode-pseudo-random-highly-readable-code","children":[]},{"level":3,"title":"5e.Other Codes","slug":"_5e-other-codes","link":"#_5e-other-codes","children":[]}]},{"level":2,"title":"A2.6. cond/ Condition assertion","slug":"a2-6-cond-condition-assertion","link":"#a2-6-cond-condition-assertion","children":[]},{"level":2,"title":"A2.7.data/ Data Transfer","slug":"a2-7-data-data-transfer","link":"#a2-7-data-data-transfer","children":[]},{"level":2,"title":"A2.8.dync/ Dynamic Compliation","slug":"a2-8-dync-dynamic-compliation","link":"#a2-8-dync-dynamic-compliation","children":[]},{"level":2,"title":"A2.9.evil Use with Caution","slug":"a2-9-evil-use-with-caution","link":"#a2-9-evil-use-with-caution","children":[]},{"level":2,"title":"A2.A.fake/ Fake Data","slug":"a2-a-fake-fake-data","link":"#a2-a-fake-fake-data","children":[]},{"level":2,"title":"A2.B.flow/ Flow Control","slug":"a2-b-flow-flow-control","link":"#a2-b-flow-flow-control","children":[]},{"level":2,"title":"A2.C.func/ Function and Lambda","slug":"a2-c-func-function-and-lambda","link":"#a2-c-func-function-and-lambda","children":[]},{"level":2,"title":"A2.D.i18n/ Multiple Languages","slug":"a2-d-i18n-multiple-languages","link":"#a2-d-i18n-multiple-languages","children":[]},{"level":2,"title":"A2.E.id/ Identity","slug":"a2-e-id-identity","link":"#a2-e-id-identity","children":[{"level":3,"title":"e1.LightId - Lightweight Distributed ID","slug":"e1-lightid-lightweight-distributed-id","link":"#e1-lightid-lightweight-distributed-id","children":[]},{"level":3,"title":"e2.LightIdBufferedProvider - High performance, lightweight","slug":"e2-lightidbufferedprovider-high-performance-lightweight","link":"#e2-lightidbufferedprovider-high-performance-lightweight","children":[]},{"level":3,"title":"e3.LightIdUtil - lightId as long number","slug":"e3-lightidutil-lightid-as-long-number","link":"#e3-lightidutil-lightid-as-long-number","children":[]},{"level":3,"title":"e4.Ulid - Simple ULID implement","slug":"e4-ulid-simple-ulid-implement","link":"#e4-ulid-simple-ulid-implement","children":[]}]},{"level":2,"title":"A2.F.img/ Image","slug":"a2-f-img-image","link":"#a2-f-img-image","children":[]},{"level":2,"title":"A2.G.io/ IO and File system","slug":"a2-g-io-io-and-file-system","link":"#a2-g-io-io-and-file-system","children":[]},{"level":2,"title":"A2.H.jaxb/ xml","slug":"a2-h-jaxb-xml","link":"#a2-h-jaxb-xml","children":[]},{"level":2,"title":"A2.I.lock/ Locks","slug":"a2-i-lock-locks","link":"#a2-i-lock-locks","children":[]},{"level":2,"title":"A2.J.math/ Domain's Algorithms","slug":"a2-j-math-domain-s-algorithms","link":"#a2-j-math-domain-s-algorithms","children":[]},{"level":2,"title":"A2.K.netx/ Network","slug":"a2-k-netx-network","link":"#a2-k-netx-network","children":[]},{"level":2,"title":"A2.L.page/ Paginate","slug":"a2-l-page-paginate","link":"#a2-l-page-paginate","children":[]},{"level":2,"title":"A2.M.pain/ Exception","slug":"a2-m-pain-exception","link":"#a2-m-pain-exception","children":[]},{"level":2,"title":"A2.N.stat/ Statistics and Monitoring","slug":"a2-n-stat-statistics-and-monitoring","link":"#a2-n-stat-statistics-and-monitoring","children":[]},{"level":2,"title":"A2.O.text/ Full/Half White Char and Formatter","slug":"a2-o-text-full-half-white-char-and-formatter","link":"#a2-o-text-full-half-white-char-and-formatter","children":[]},{"level":2,"title":"A2.P.time/ Date and Time","slug":"a2-p-time-date-and-time","link":"#a2-p-time-date-and-time","children":[]},{"level":2,"title":"A2.Q.tk Token and Ticket","slug":"a2-q-tk-token-and-ticket","link":"#a2-q-tk-token-and-ticket","children":[{"level":3,"title":"q1.Ticket - Distrib credential with centralized authority","slug":"q1-ticket-distrib-credential-with-centralized-authority","link":"#q1-ticket-distrib-credential-with-centralized-authority","children":[]},{"level":3,"title":"q2.Default Implementation and Tool","slug":"q2-default-implementation-and-tool","link":"#q2-default-implementation-and-tool","children":[]}]}],"git":{"createdTime":1656934972000,"updatedTime":1722254733000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":15}]},"readingTime":{"minutes":7.73,"words":2318},"filePathRelative":"a-mirana/a2.utilities.md","localizedDate":"July 4, 2022","autoDesc":true}`);export{u as comp,p as data};
