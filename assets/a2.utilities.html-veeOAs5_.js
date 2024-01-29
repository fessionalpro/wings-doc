import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as d,o,c as t,b as e,e as i,d as n,f as l}from"./app-mN42Vc4a.js";const s={},r=l('<h1 id="a2-米拉娜工具包" tabindex="-1"><a class="header-anchor" href="#a2-米拉娜工具包"><span>A2.米拉娜工具包</span></a></h1><p>Mirana提供的工具类</p><h2 id="a2-1-anti-反工程化" tabindex="-1"><a class="header-anchor" href="#a2-1-anti-反工程化"><span>A2.1.<code>anti/</code> 反工程化</span></a></h2><ul><li>BeanVisitor - 反射遍历Bean的Field，主要用于属性格式化。</li><li>G - 反模式，跨层传值</li><li>L - 反模式，跨层收集信息</li></ul><h2 id="a2-2-best-高质量代码" tabindex="-1"><a class="header-anchor" href="#a2-2-best-高质量代码"><span>A2.2.<code>best/</code> 高质量代码</span></a></h2><ul><li>AssertArgs - 前置断言 IllegalArgumentException或BadArgsException</li><li>AssertMessage - 断言 MessageException</li><li>AssertState - 中间或后置断言 IllegalStateException或BadStateException</li><li>DummyBlock - 关闭安全代码块的IDEA警报，不可用代码块的标记</li><li>Param - 注解param是否被修改</li><li>TypedKey - 有类型的Map的Value注册</li><li>TypedReg - 有类型的Map的Key和Value注册</li></ul><h2 id="a2-3-bits-二进制-字节相关" tabindex="-1"><a class="header-anchor" href="#a2-3-bits-二进制-字节相关"><span>A2.3.<code>bits/</code> 二进制，字节相关</span></a></h2><ul><li>Aes - Aes128及Aes256公共类</li><li>Aes128 - jdk AES/CBC/PKCS5Padding，若AES/CBC/PKCS7Padding，用bouncycastle</li><li>Aes256 - jdk AES/CBC/PKCS5Padding，java1.8.0_162以上推荐使用</li><li>Base64 - 默认使用 RFC4648_URLSAFE 和 UTF8。支持<code>+/</code>和<code>-_</code></li><li>Bytes - Hex和unicode(<code>我</code>(25105)=&gt;&#39;\\u6211&#39;)</li><li>HmacHelp - MessageAuthenticationCode HmacMD5, HmacSHA1, HmacSHA256</li><li>Md5 - md5sum, md5check</li><li>HdHelp - MessageDigest MD5, SHA1, SHA256</li></ul><h2 id="a2-4-cast-类型转换" tabindex="-1"><a class="header-anchor" href="#a2-4-cast-类型转换"><span>A2.4.<code>cast/</code> 类型转换</span></a></h2><ul><li>BiConvertor - 双向converter</li><li>BoxedCastUtil - 包装类和原始类型的转换</li><li>BoxedTypeUtil - 包装类兼容的instanceOf，isAssignable</li><li>EnumConvertor - 支持enum全路径模糊序列化和具名精确序列化</li><li>StringCastUtil - 字符串和其他类型的转换</li><li>TypedCastUtil - 类型参数，泛型的转换</li></ul><h2 id="a2-5-code-编码转码" tabindex="-1"><a class="header-anchor" href="#a2-5-code-编码转码"><span>A2.5.<code>code/</code> 编码转码</span></a></h2><h3 id="crc4int-带crc的int32" tabindex="-1"><a class="header-anchor" href="#crc4int-带crc的int32"><span>Crc4Int - 带crc的int32</span></a></h3><p>根据int数值，生成一个伪随机，可校验的，可解密出原值的int数字。 尽量提高人类可读性和伪随机性。</p><h3 id="crc8long-crc8longutil-带crc的int64" tabindex="-1"><a class="header-anchor" href="#crc8long-crc8longutil-带crc的int64"><span>Crc8Long, Crc8LongUtil - 带crc的int64</span></a></h3><p>根据long数值，生成一个伪随机，可校验的，可解密出原值的long数字。 用户可以自定义bit位序列，系统默认提供三种，参考Crc8LongUtil。</p><p>适用场景，安全要求一般，暴露的数字ID信息。可以高效的双向解析和校验。</p><h3 id="excel26az-excel的26进制索引" tabindex="-1"><a class="header-anchor" href="#excel26az-excel的26进制索引"><span>Excel26Az - excel的26进制索引</span></a></h3><p>按Excel列命名方式进行双向解析（A:1,B:2,...,Z:26,AA:27）</p><h3 id="leapcode-伪随机高可读code" tabindex="-1"><a class="header-anchor" href="#leapcode-伪随机高可读code"><span>LeapCode - 伪随机高可读code</span></a></h3><p>提供26字母和10数字（去掉UOIL易混淆）的构成的32位字母数字编码。 编码后的字符串看起来比较随机，可解密出原值，可填充到固定长度。 用户可以自定义数字字典，以实现比较安全的效果。</p>',20),h={href:"https://www.crockford.com/base32.html",target:"_blank",rel:"noopener noreferrer"},p=l('<p>适用场景，伪随机验证码，安全要求一般，高效双向解析的编码。</p><h3 id="其他编码" tabindex="-1"><a class="header-anchor" href="#其他编码"><span>其他编码</span></a></h3><ul><li>Mod10Code - usps 的校验算法</li><li>RandCode - 基于Random的一些人类可读性更好的随机数</li><li>SlotCode - 固定仓位的随机分配，比如取件码</li></ul><h2 id="a2-6-cond-条件断言" tabindex="-1"><a class="header-anchor" href="#a2-6-cond-条件断言"><span>A2.6. <code>cond/</code> 条件断言</span></a></h2><ul><li>EqualsUtil - 等值判断</li><li>StaticFlag - 全局Flag</li></ul><h2 id="a2-7-data-数据传递" tabindex="-1"><a class="header-anchor" href="#a2-7-data-数据传递"><span>A2.7.<code>data/</code> 数据传递</span></a></h2><ul><li>Arr - 一些Array的操作</li><li>CodeEnum - 业务code枚举，如多国语，状态</li><li>DataResult - 携带data的DTO</li><li>Diff - diff2个集合，如数据集中判断插入，更新，删除</li><li>Null - 以<code>空</code>消除null是我们的目标。</li><li>Q - 单参数Query类</li><li>R - Result的场景类</li><li>Rank - 按多条件顺序来排序</li><li>U - 内部传递数据的Tuple,Either</li><li>Z - 第一个满足条件(如非null)的数据操作</li></ul><h2 id="a2-8-dync-动态编译" tabindex="-1"><a class="header-anchor" href="#a2-8-dync-动态编译"><span>A2.8.<code>dync/</code> 动态编译</span></a></h2><ul><li>Java - 动态编译和创建java</li><li>Js - 使用java的ScriptEngine执行js代码</li></ul><h2 id="a2-9-evil-谨慎使用" tabindex="-1"><a class="header-anchor" href="#a2-9-evil-谨慎使用"><span>A2.9.<code>evil</code> 谨慎使用</span></a></h2><ul><li>Attention - 被标记的方法应该遵循固定模式，避免误用</li><li>StartStageAttention - 启动阶段调用的方法，勿频繁使用</li><li>ThreadLocalAttention - 注意ThreadLocal模式</li><li>ThreadLocalProxy - 可后续被替换的ThreadLocal</li><li>ThreadLocalSoft - SoftReference的ThreadLocal</li><li>TweakingContext - 用来调试的上下文配置</li></ul><h2 id="a2-a-fake-伪装数据" tabindex="-1"><a class="header-anchor" href="#a2-a-fake-伪装数据"><span>A2.A.<code>fake/</code> 伪装数据</span></a></h2><ul><li>FakeDate - 生成指定偏移量附近的伪随机日期，保证结果的幂等性。</li><li>FakeName - 生成随机中文姓名</li></ul><h2 id="a2-b-flow-流程控制" tabindex="-1"><a class="header-anchor" href="#a2-b-flow-流程控制"><span>A2.B.<code>flow/</code> 流程控制</span></a></h2><p>在高层架构设计，高阶函数调用，流处理中，需要使用异常参与流程中断。 类似spring security体系，scala的break语法，kotlin的<code>return@</code>。 以下为低消耗的无栈异常，中断流程的场景，属反模式，若非必须不建议使用。</p><ul><li>FlowBreak - 静态工具类</li><li>FlowBreakException - 用Enum类的异常参与控制流程。</li><li>FlowEnum - 流程控制enum</li><li>FlowReturnException - 具有返回值</li><li>ReturnOrException - 是破例返回还是异常</li></ul><h2 id="a2-c-func-function构造" tabindex="-1"><a class="header-anchor" href="#a2-c-func-function构造"><span>A2.C.<code>func/</code> function构造</span></a></h2><ul><li>Clz - Class工具类</li><li>Dcl - DCL of Runnable</li><li>Fn - distinct和duplicate</li><li>Lam - 通过lambda获取对象及方法的引用</li></ul><h2 id="a2-d-i18n-多国语" tabindex="-1"><a class="header-anchor" href="#a2-d-i18n-多国语"><span>A2.D.<code>i18n/</code> 多国语</span></a></h2><ul><li>I18nAware - 标记型接口</li><li>I18nEnum - 为普通enum的提供i18n能力</li><li>I18nString - 支持 i18n的String</li><li>LocaleResolver - 支持 <code>-</code>和<code>_</code></li><li>ZoneIdResolver - 不区分大小写，支持部分命名</li></ul><h2 id="a2-e-id-主键" tabindex="-1"><a class="header-anchor" href="#a2-e-id-主键"><span>A2.E.<code>id/</code> 主键</span></a></h2><h3 id="lightid-轻量级分布式主键" tabindex="-1"><a class="header-anchor" href="#lightid-轻量级分布式主键"><span>LightId - 轻量级分布式主键</span></a></h3><p>轻量级分布式主键，采用双缓冲机制，使用sequence高效生成64bit数字主键。 ID能保证严格的<code>单调递增</code>(升序)，但不保证连续，其long型的64bit构成如下。</p><ul><li>long = <code>1-bit:0固定</code>+<code>8-bit:验证</code>+<code>1-bit:布局</code>+<code>54-bit:序列</code></li><li><code>0固定</code>，保证ID为非负数。</li><li><code>验证</code>，默认为<code>0</code>填充，用Crc8Long生成构造伪随机数。</li><li><code>布局</code>，提供<code>全序列</code>和<code>区序列</code>两种布局。 <ul><li><code>全序列</code>=<code>1bit(0)</code> + <code>sequence(54bit)</code></li><li><code>区序列</code>=<code>1bit(1)</code> + <code>block(9bit)</code> + <code>sequence(45bit)</code></li></ul></li><li><code>序列</code>，依赖于布局，以下是其约束 <ul><li><code>区块</code>=<code>block(9bit=512)</code>，用来区分不同的主键生产中心。</li><li><code>序号</code>=<code>sequence(45bit|54bit)</code>，<code>区块</code>内唯一递增序号。</li><li><code>区块</code>的区间为<code>[1,512]</code>，<code>0</code>表示<code>全序列</code></li></ul></li></ul><p>因为有效位只有55bit，所以存在以下特点。</p><ul><li>生产中心，最多512个。通常一个数据中心，有一个生产中心。</li><li>若每秒消费5万ID，能连续22年，(2^45 -1)/(365x24x3600x50000)=22.3</li><li>如为最大序列布局，则在上诉能力上，增加512倍。</li><li>sequence和时间无关，所以并发上限和使用年限，只根ID消费者能力有关。</li><li>sequence和进程无关，所以能以key-value形式，产生不同类别的ID。</li></ul><p>系统提供默认的双缓冲实现，在<code>Loader</code>保证唯一升序的情况下，能够。</p><ul><li>保证全局block-name生成唯一id。</li><li>线程内id升序，不同线程无法保证升序。</li><li>当id剩余不足某值（80%）时，异步补充id，无锁（非读写锁）</li><li>切换id段时，保证最小同步段，控制保护资源的范围。</li><li>根据id的每秒消耗数动态调节请求数量，预留60秒的使用量。</li><li>当缓冲id完全耗尽时，保证只有一个加载，其他等候成功或超时。</li><li>支持手动进行预加载(preload)所有可用id。</li><li>支持手动或定时清除错误。</li><li>支持手动调整运行时参数。</li></ul><h3 id="lightidbufferedprovider-高性能-轻量级锁-双缓冲" tabindex="-1"><a class="header-anchor" href="#lightidbufferedprovider-高性能-轻量级锁-双缓冲"><span>LightIdBufferedProvider - 高性能，轻量级锁，双缓冲</span></a></h3><p>轻量级锁，高性能，双缓冲 light-id 提供者。</p><p>实测性能，高于busy-wait+读写锁或大粒度的组合锁或同步块。 效能瓶颈在loader的io上，需要根据消耗量，优化maxCount。</p><p>共存在以下3类线程，且读线程会升级为写线程，甚至加载线程。 同一时刻，有多个读线程，但只有唯一写线程，唯一的加载线程。</p><ul><li>读线程，正常的light-id调用者</li><li>写线程，读线程升级或加载线程，为buffer追加片段(segment)</li><li>加载线程，异步线程或读线程升级，通过loader加载segment</li></ul><p>双缓冲的运行机制如下，会跟进id的使用量，自动控制预加载量，但不超过maxCount。</p><ul><li>当Id余量低于20%时，唯一异步预加载<code>60s内最大使用量</code>或<code>maxCount</code></li><li>当Id余量用尽时，读线程升级为写线程，其他读线程等待，直到被唤醒或超时</li><li>当读线程升级写线程时，存在loader，此读线程自旋忙等后，切换buffer。</li></ul><h3 id="lightidutil-对lightid特征long操作" tabindex="-1"><a class="header-anchor" href="#lightidutil-对lightid特征long操作"><span>LightIdUtil - 对lightId特征long操作</span></a></h3><p>对 lightId，long和sequence进行验证，转换的工具类。 可能够全局改变LightId中序列的默认布局及其顺序。</p><ul><li>forceBlockBit - 调整<code>区块</code>的bit数</li><li>forceBlockFirst - 使用先<code>区块</code>布局，还是先<code>序号</code>布局</li></ul><h3 id="ulid-简单的ulid实现" tabindex="-1"><a class="header-anchor" href="#ulid-简单的ulid实现"><span>Ulid - 简单的ULID实现</span></a></h3><p>仅快速生成ULID，不支持验证及解析。用于有序随机数，全局ID等。</p><h2 id="a2-f-img-图片" tabindex="-1"><a class="header-anchor" href="#a2-f-img-图片"><span>A2.F.<code>img/</code> 图片</span></a></h2><ul><li>ImageIoFix - problem-using-imageio-write-jpg-file</li><li>StreamJpg - BufferedImage 写入</li><li>Watermark - 水印</li><li>ZoomRotateCrop - 缩放旋转剪切</li></ul><h2 id="a2-g-io-io及fs操作" tabindex="-1"><a class="header-anchor" href="#a2-g-io-io及fs操作"><span>A2.G.<code>io/</code> IO及fs操作</span></a></h2><ul><li>CircleInputStream - 可循环读取的流</li><li>CompatibleObjectStream - 当serialVersionUID不兼容时，采用本地Class反序列化</li><li>DirHasher - 本地文件系统不可保存太多文件</li><li>Exec - 单线程同步执行，高级功能用Apache Commons Exec</li><li>InputStreams - 不使用<code>commons-*</code>的补位</li><li>NonCloseStream - 屏蔽掉close的流</li><li>Zipper - 递归zip/unzip</li></ul><h2 id="a2-h-jaxb-xml" tabindex="-1"><a class="header-anchor" href="#a2-h-jaxb-xml"><span>A2.H.<code>jaxb/</code> xml</span></a></h2><p>注意，jaxb以在Java11中移除，故需要单独依赖。</p><ul><li>StringMapXmlWriter - 只把顶层元素变成key-value的map，用来做参数签名</li></ul><h2 id="a2-i-lock-锁" tabindex="-1"><a class="header-anchor" href="#a2-i-lock-锁"><span>A2.I.<code>lock/</code> 锁</span></a></h2><ul><li>GlobalLock - 全局锁接口</li><li>JvmStaticGlobalLock - 基于WeakReference的Jvm全局锁</li></ul><h2 id="a2-j-math-行业中的数学算法" tabindex="-1"><a class="header-anchor" href="#a2-j-math-行业中的数学算法"><span>A2.J.<code>math/</code> 行业中的数学算法</span></a></h2><ul><li>AnyIntegerUtil - int,long,Number,String间的恩怨</li><li>AverageDecimal - 平均数 20/6=<code>[3.33, 3.33, 3.34, 3.33, 3.33, 3.34]</code></li><li>BalanceDecimal - 平衡数， 按权重分割数值</li><li>BigDecimalUtil - <code>null</code>友好的的Decimal运算工具</li><li>ComparableUtil - <code>null</code>不参与比较的比较器</li><li>RatioNumber - 比例数，物品消耗的换算表示法。</li></ul><h2 id="a2-k-netx-网络通讯" tabindex="-1"><a class="header-anchor" href="#a2-k-netx-网络通讯"><span>A2.K.<code>netx/</code> 网络通讯</span></a></h2><ul><li>SslTrustAll - 信任所以证书，使爬虫不报错</li><li>SslVersion - jdk-8-will-use-tls-12-as-default</li></ul><h2 id="a2-l-page-分页功能" tabindex="-1"><a class="header-anchor" href="#a2-l-page-分页功能"><span>A2.L.<code>page/</code> 分页功能</span></a></h2><ul><li>PageQuery - 分页查询</li><li>PageResult - 分页结果</li><li>PageUtil - 分页工具，使用<code>-1+1</code>算法，不是if-else</li></ul><h2 id="a2-m-pain-异常痛苦" tabindex="-1"><a class="header-anchor" href="#a2-m-pain-异常痛苦"><span>A2.M.<code>pain/</code> 异常痛苦</span></a></h2><ul><li>BadArgsException - 多国语和枚举版的可无堆栈的IllegalArgumentException</li><li>BadStateException - 多国语和枚举版的可无堆栈的IllegalStateException</li><li>CodeException - 多国语和枚举版的可无堆栈的RuntimeException</li><li>DebugException - 测试及调试跟踪专用</li><li>HttpStatusException - 提供HttpStatus的无堆栈异常</li><li>IllegalRequestException - 不合法的请求</li><li>IllegalResponseException - 因状态问题无法正常响应</li><li>IORuntimeException - Runtime版IOException</li><li>MessageException - 默认无堆栈消息异常</li><li>NoStackRuntimeException - 无需填充堆栈的异常，用于性能优先场景，堆栈无用的场景</li><li>ThrowableUtil - Throwable堆栈和cause工具</li><li>TimeoutRuntimeException - Runtime版TimeoutException</li></ul><h2 id="a2-n-stat-统计与监控" tabindex="-1"><a class="header-anchor" href="#a2-n-stat-统计与监控"><span>A2.N.<code>stat/</code> 统计与监控</span></a></h2><ul><li>GitStat - 对git提交按日期作者统计，或在mysql建表保存</li><li>JvmStat - 返回当前jvm的Cpu，Mem，Thread信息</li><li>LogStat - 对日志增长，关键词进行收集</li></ul><h2 id="a2-o-text-全半角-白字符-格式化工具" tabindex="-1"><a class="header-anchor" href="#a2-o-text-全半角-白字符-格式化工具"><span>A2.O.<code>text/</code> 全半角，白字符，格式化工具</span></a></h2><ul><li>BarString - 构造Bar分隔的字符串，自动调整Bar字符。</li><li>BuilderHelper - null友好碎片少的StringBuilder操作</li><li>BuilderHolder - 减少碎片的StringBuilder</li><li>CaseSwitcher - camel,snake,pascal,kebab命名转换</li><li>FormatUtil - printf的<code>%</code>;logbak的<code>{}</code>;message的<code>{0}</code>，参数填充</li><li>FullCharUtil - 全角字符工具</li><li>HalfCharUtil - 半角字符工具</li><li>JsonTemplate - 构造Json的模板</li><li>StringTemplate - 字符串模板，免替换尴尬，可读性好，性能优</li><li>WhiteUtil - 弥补java trim的不足，更多Whitespace处理</li><li>Wildcard - 快速的通配符匹配，仅支持<code>?</code>和<code>*</code></li></ul><h2 id="a2-p-time-时间日期" tabindex="-1"><a class="header-anchor" href="#a2-p-time-时间日期"><span>A2.P.<code>time/</code> 时间日期</span></a></h2><ul><li>DateFormatter - 线程安全的，比正常formatter要快</li><li>DateLocaling - LocalDateTime和时区的故事</li><li>DateNumber - 日期转化成数字的双向转化</li><li>DateParser - 更高效兼容的解析日期数字的字符串</li><li>Sleep - Thread.sleep的一点包装</li><li>SlideDate - 包装了OffsetClock的会计日期工具</li><li>StopWatch - 对代码进行计时跟踪的秒表</li><li>ThreadNow - 提供线程级的调准时钟</li></ul><h2 id="a2-q-tk-token和ticket" tabindex="-1"><a class="header-anchor" href="#a2-q-tk-token和ticket"><span>A2.Q.<code>tk</code> token和ticket</span></a></h2><p>用于私钥凭证，需要中心控制又去中心的凭证，在无意义session和庞大jwt体系之间的场景。 session的replication和sticky在水平扩展上十分稳定成熟，如redis和Hazelcast。 JsonWeb系列体系强大，多在数据交换且安全要求较高的场景，凭证领域也是新杀出的战场。</p><p>应用场景是RememberMe或读取异步任务结果的凭证。</p><p>在RememberMe中，biz-data可包括uid，而sig-data中，需要把用户密码和盐追加进行验签。 当用户再次登录，密码修改，或凭证过期时，都可以对ticket的有效性进行判断。</p><h3 id="ticket-有中心权力的去中心凭证" tabindex="-1"><a class="header-anchor" href="#ticket-有中心权力的去中心凭证"><span>Ticket - 有中心权力的去中心凭证</span></a></h3><p>特点是短小，可过期，可踢人，可验签，有一定业务意义，代替无意义的随机token。</p><p>其中，Data后缀为业务语义，Part后缀为传输语义，不同视角的布局为，</p><ul><li>业务布局：SigData + <code>.</code> + SigPart</li><li>SigData = PubPart + (<code>.</code> + BizData)?</li><li>PubPart = <code>mod</code> + <code>-</code> + <code>due</code> + <code>-</code> + <code>seq</code></li><li>BizData: 业务数据，如明文的Json</li><li>传输布局：PubPart + <code>.</code> + SecPart</li><li>SecPart = (BizPart + <code>.</code>)? + SigPart</li><li>BizPart: 加密后的BizData</li><li>SigPart: 签名数据，对SigData数据签名</li><li><code>mod</code>: 约定模式，加密及签名，BizPart类型等，用于反序列化。英数</li><li><code>due</code>: 有效期，从1970-01-01起的秒数，用于判断时间过期。正整数</li><li><code>seq</code>: 签发序号，用于判定新旧，业务过期，正整数</li><li><code>salt</code> - 加密或签名秘钥，如<code>加盐</code>，对称秘钥，非对称私钥。</li></ul><p>公开部分对应的业务场景和说明如下，</p><ul><li><p><code>mod</code> 服务端或同用户协商制定，包括加密和签名算法，数据格式，用户字段等，如内定。</p><ul><li>any = 仅原文解析和合并各个字段。</li><li>am0 = aes256(biz-data, salt) + md5(sig-data) 无盐Md5</li><li>am1 = aes256(biz-data, salt) + md5(sig-data + salt) 加盐Md5</li><li>ah1 = aes256(biz-data, salt) + HmacSha1(sig-data, salt) Hmac验签</li><li>ah2 = aes256(biz-data, salt) + HmacSha256(sig-data, salt) Hmac验签</li></ul></li><li><p><code>due</code> 凭证过期的秒数，从1970-01-01起的<code>秒数</code>，不是毫秒。</p><ul><li>到期凭证，client需要到服务器续签。</li><li>服务器端自行确定行为，如续签，拒绝，重发等。</li></ul></li><li><p><code>seq</code> 签发序号，生成凭证时递增，续签时不变，seq不同时，须重新获得凭证。</p><ul><li>当用户登录时，生成凭证，其他端再次登录时，seq增加，则可踢出旧凭证。</li><li>当凭证过期时，未发生再次登录，可以同seq续签新凭证。</li><li>0 表示无需验证序号，一般用于弱权限场合，如临时凭证</li></ul></li></ul><p>凭证，可以在http的header，session和url-string中传递。</p><ul><li>无私钥者，无法验签和解密，仅可以使用PubPart信息。</li><li>有私钥者，通过验签和解密，判断凭证有效性，获取业务内容。</li><li>无私钥者，且需要验签的情况，可不加盐，不用hmac签名</li></ul><h3 id="默认的基本实现和工具类" tabindex="-1"><a class="header-anchor" href="#默认的基本实现和工具类"><span>默认的基本实现和工具类</span></a></h3><ul><li><code>AnyTicket</code> - 可以解析任何mod的ticket</li><li><code>TicketHelp</code> - 提供了ticket解析，验签的基本工具类</li></ul>',77);function u(m,g){const a=d("ExternalLinkIcon");return o(),t("div",null,[r,e("p",null,[i("参考 "),e("a",h,[i("https://www.crockford.com/base32.html"),n(a)])]),p])}const f=c(s,[["render",u],["__file","a2.utilities.html.vue"]]);export{f as default};
