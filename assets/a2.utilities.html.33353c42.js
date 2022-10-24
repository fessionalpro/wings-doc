import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as l,f as a}from"./app.cf3f8f96.js";const d={},c=a('<h1 id="a2-\u7C73\u62C9\u5A1C\u5DE5\u5177\u5305" tabindex="-1"><a class="header-anchor" href="#a2-\u7C73\u62C9\u5A1C\u5DE5\u5177\u5305" aria-hidden="true">#</a> A2.\u7C73\u62C9\u5A1C\u5DE5\u5177\u5305</h1><p>Mirana\u63D0\u4F9B\u7684\u5DE5\u5177\u7C7B</p><h2 id="a2-1-anti-\u53CD\u5DE5\u7A0B\u5316" tabindex="-1"><a class="header-anchor" href="#a2-1-anti-\u53CD\u5DE5\u7A0B\u5316" aria-hidden="true">#</a> A2.1.<code>anti/</code> \u53CD\u5DE5\u7A0B\u5316</h2><ul><li>BeanVisitor - \u53CD\u5C04\u904D\u5386Bean\u7684Field\uFF0C\u4E3B\u8981\u7528\u4E8E\u5C5E\u6027\u683C\u5F0F\u5316\u3002</li><li>G - \u53CD\u6A21\u5F0F\uFF0C\u8DE8\u5C42\u4F20\u503C</li><li>L - \u53CD\u6A21\u5F0F\uFF0C\u8DE8\u5C42\u6536\u96C6\u4FE1\u606F</li><li>S - \u53CD\u6A21\u5F0F\uFF0CThreadLocal\u6309\u56FA\u5B9A\u6A21\u5F0F\u4F7F\u7528</li></ul><h2 id="a2-2-best-\u9AD8\u8D28\u91CF\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#a2-2-best-\u9AD8\u8D28\u91CF\u4EE3\u7801" aria-hidden="true">#</a> A2.2.<code>best/</code> \u9AD8\u8D28\u91CF\u4EE3\u7801</h2><ul><li>ArgsAssert \u524D\u7F6E\u65AD\u8A00 - IllegalArgumentException\u6216\u65E0\u5806\u6808BadArgsException</li><li>DummyBlock - \u5173\u95ED\u5B89\u5168\u4EE3\u7801\u5757\u7684IDEA\u8B66\u62A5\uFF0C\u4E0D\u53EF\u7528\u4EE3\u7801\u5757\u7684\u6807\u8BB0</li><li>StateAssert \u4E2D\u95F4\u6216\u540E\u7F6E\u65AD\u8A00 - IllegalStateException\u6216\u65E0\u5806\u6808BadStateException</li></ul><h2 id="a2-3-bits-\u4E8C\u8FDB\u5236-\u5B57\u8282\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#a2-3-bits-\u4E8C\u8FDB\u5236-\u5B57\u8282\u76F8\u5173" aria-hidden="true">#</a> A2.3.<code>bits/</code> \u4E8C\u8FDB\u5236\uFF0C\u5B57\u8282\u76F8\u5173</h2><ul><li>Aes128 - jdk AES/CBC/PKCS5Padding\uFF0C\u82E5AES/CBC/PKCS7Padding\uFF0C\u7528bouncycastle</li><li>Base64 - \u9ED8\u8BA4\u4F7F\u7528 RFC4648_URLSAFE \u548C UTF8\u3002\u652F\u6301<code>+/</code>\u548C<code>-_</code></li><li>Bytes - Hex\u548Cunicode(<code>\u6211</code>(25105)=&gt;&#39;\\u6211&#39;)</li><li>HmacHelp - MessageAuthenticationCode HmacMD5, HmacSHA1, HmacSHA256</li><li>Md5 - md5sum, md5check</li><li>HdHelp - MessageDigest MD5, SHA1, SHA256</li></ul><h2 id="a2-4-cast-\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#a2-4-cast-\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> A2.4.<code>cast/</code> \u7C7B\u578B\u8F6C\u6362</h2><ul><li>BiConvertor - \u53CC\u5411converter</li><li>BoxedCastUtil - \u5305\u88C5\u7C7B\u548C\u539F\u59CB\u7C7B\u578B\u7684\u8F6C\u6362</li><li>BoxedTypeUtil - \u5305\u88C5\u7C7B\u517C\u5BB9\u7684instanceOf\uFF0CisAssignable</li><li>EnumConvertor - \u652F\u6301enum\u5168\u8DEF\u5F84\u6A21\u7CCA\u5E8F\u5217\u5316\u548C\u5177\u540D\u7CBE\u786E\u5E8F\u5217\u5316</li><li>StringCastUtil - \u5B57\u7B26\u4E32\u548C\u5176\u4ED6\u7C7B\u578B\u7684\u8F6C\u6362</li><li>TypedCastUtil - \u7C7B\u578B\u53C2\u6570\uFF0C\u6CDB\u578B\u7684\u8F6C\u6362</li></ul><h2 id="a2-5-code-\u7F16\u7801\u8F6C\u7801" tabindex="-1"><a class="header-anchor" href="#a2-5-code-\u7F16\u7801\u8F6C\u7801" aria-hidden="true">#</a> A2.5.<code>code/</code> \u7F16\u7801\u8F6C\u7801</h2><h3 id="crc4int-\u5E26crc\u7684int32" tabindex="-1"><a class="header-anchor" href="#crc4int-\u5E26crc\u7684int32" aria-hidden="true">#</a> Crc4Int - \u5E26crc\u7684int32</h3><p>\u6839\u636Eint\u6570\u503C\uFF0C\u751F\u6210\u4E00\u4E2A\u4F2A\u968F\u673A\uFF0C\u53EF\u6821\u9A8C\u7684\uFF0C\u53EF\u89E3\u5BC6\u51FA\u539F\u503C\u7684int\u6570\u5B57\u3002 \u5C3D\u91CF\u63D0\u9AD8\u4EBA\u7C7B\u53EF\u8BFB\u6027\u548C\u4F2A\u968F\u673A\u6027\u3002</p><h3 id="crc8long-crc8longutil-\u5E26crc\u7684int64" tabindex="-1"><a class="header-anchor" href="#crc8long-crc8longutil-\u5E26crc\u7684int64" aria-hidden="true">#</a> Crc8Long, Crc8LongUtil - \u5E26crc\u7684int64</h3><p>\u6839\u636Elong\u6570\u503C\uFF0C\u751F\u6210\u4E00\u4E2A\u4F2A\u968F\u673A\uFF0C\u53EF\u6821\u9A8C\u7684\uFF0C\u53EF\u89E3\u5BC6\u51FA\u539F\u503C\u7684long\u6570\u5B57\u3002 \u7528\u6237\u53EF\u4EE5\u81EA\u5B9A\u4E49bit\u4F4D\u5E8F\u5217\uFF0C\u7CFB\u7EDF\u9ED8\u8BA4\u63D0\u4F9B\u4E09\u79CD\uFF0C\u53C2\u8003Crc8LongUtil\u3002</p><p>\u9002\u7528\u573A\u666F\uFF0C\u5B89\u5168\u8981\u6C42\u4E00\u822C\uFF0C\u66B4\u9732\u7684\u6570\u5B57ID\u4FE1\u606F\u3002\u53EF\u4EE5\u9AD8\u6548\u7684\u53CC\u5411\u89E3\u6790\u548C\u6821\u9A8C\u3002</p><h3 id="excel26az-excel\u768426\u8FDB\u5236\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#excel26az-excel\u768426\u8FDB\u5236\u7D22\u5F15" aria-hidden="true">#</a> Excel26Az - excel\u768426\u8FDB\u5236\u7D22\u5F15</h3><p>\u6309Excel\u5217\u547D\u540D\u65B9\u5F0F\u8FDB\u884C\u53CC\u5411\u89E3\u6790\uFF08A:1,B:2,...,Z:26,AA:27\uFF09</p><h3 id="leapcode-\u4F2A\u968F\u673A\u9AD8\u53EF\u8BFBcode" tabindex="-1"><a class="header-anchor" href="#leapcode-\u4F2A\u968F\u673A\u9AD8\u53EF\u8BFBcode" aria-hidden="true">#</a> LeapCode - \u4F2A\u968F\u673A\u9AD8\u53EF\u8BFBcode</h3><p>\u63D0\u4F9B26\u5B57\u6BCD\u548C10\u6570\u5B57\uFF08\u53BB\u638901OI\u6613\u6DF7\u6DC6\uFF09\u7684\u6784\u6210\u768432\u4F4D\u5B57\u6BCD\u6570\u5B57\u7F16\u7801\u3002 \u7F16\u7801\u540E\u7684\u5B57\u7B26\u4E32\u770B\u8D77\u6765\u6BD4\u8F83\u968F\u673A\uFF0C\u53EF\u89E3\u5BC6\u51FA\u539F\u503C\uFF0C\u53EF\u586B\u5145\u5230\u56FA\u5B9A\u957F\u5EA6\u3002 \u7528\u6237\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6570\u5B57\u5B57\u5178\uFF0C\u4EE5\u5B9E\u73B0\u6BD4\u8F83\u5B89\u5168\u7684\u6548\u679C\u3002</p><p>\u9002\u7528\u573A\u666F\uFF0C\u4F2A\u968F\u673A\u9A8C\u8BC1\u7801\uFF0C\u5B89\u5168\u8981\u6C42\u4E00\u822C\uFF0C\u9AD8\u6548\u53CC\u5411\u89E3\u6790\u7684\u7F16\u7801\u3002</p><h3 id="\u5176\u4ED6\u7F16\u7801" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u7F16\u7801" aria-hidden="true">#</a> \u5176\u4ED6\u7F16\u7801</h3><ul><li>Mod10Code - usps \u7684\u6821\u9A8C\u7B97\u6CD5</li><li>RandCode - \u57FA\u4E8ERandom\u7684\u4E00\u4E9B\u4EBA\u7C7B\u53EF\u8BFB\u6027\u66F4\u597D\u7684\u968F\u673A\u6570</li><li>SlotCode - \u56FA\u5B9A\u4ED3\u4F4D\u7684\u968F\u673A\u5206\u914D\uFF0C\u6BD4\u5982\u53D6\u4EF6\u7801</li></ul><h2 id="a2-6-cond-\u6761\u4EF6\u65AD\u8A00" tabindex="-1"><a class="header-anchor" href="#a2-6-cond-\u6761\u4EF6\u65AD\u8A00" aria-hidden="true">#</a> A2.6. <code>cond/</code> \u6761\u4EF6\u65AD\u8A00</h2><ul><li>EqualsUtil - \u7B49\u503C\u5224\u65AD</li><li>StaticFlag - \u5168\u5C40Flag</li></ul><h2 id="a2-7-data-\u6570\u636E\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#a2-7-data-\u6570\u636E\u4F20\u9012" aria-hidden="true">#</a> A2.7.<code>data/</code> \u6570\u636E\u4F20\u9012</h2><ul><li>Arr - \u4E00\u4E9BArray\u7684\u64CD\u4F5C</li><li>CodeEnum - \u4E1A\u52A1code\u679A\u4E3E\uFF0C\u5982\u591A\u56FD\u8BED\uFF0C\u72B6\u6001</li><li>DataResult - \u643A\u5E26data\u7684DTO</li><li>Diff - diff2\u4E2A\u96C6\u5408\uFF0C\u5982\u6570\u636E\u96C6\u4E2D\u5224\u65AD\u63D2\u5165\uFF0C\u66F4\u65B0\uFF0C\u5220\u9664</li><li>Null - \u4EE5<code>\u7A7A</code>\u6D88\u9664null\u662F\u6211\u4EEC\u7684\u76EE\u6807\u3002</li><li>Q - \u5355\u53C2\u6570Query\u7C7B</li><li>R - Result\u7684\u573A\u666F\u7C7B</li><li>Rank - \u6309\u591A\u6761\u4EF6\u987A\u5E8F\u6765\u6392\u5E8F</li><li>U - \u5185\u90E8\u4F20\u9012\u6570\u636E\u7684Tuple,Either</li><li>Z - \u7B2C\u4E00\u4E2A\u6EE1\u8DB3\u6761\u4EF6(\u5982\u975Enull)\u7684\u6570\u636E\u64CD\u4F5C</li></ul><h2 id="a2-8-dync-\u52A8\u6001\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#a2-8-dync-\u52A8\u6001\u7F16\u8BD1" aria-hidden="true">#</a> A2.8.<code>dync/</code> \u52A8\u6001\u7F16\u8BD1</h2><ul><li>Java - \u52A8\u6001\u7F16\u8BD1\u548C\u521B\u5EFAjava</li><li>Js - \u4F7F\u7528java\u7684ScriptEngine\u6267\u884Cjs\u4EE3\u7801</li></ul><h2 id="a2-9-fake-\u4F2A\u88C5\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#a2-9-fake-\u4F2A\u88C5\u6570\u636E" aria-hidden="true">#</a> A2.9.<code>fake/</code> \u4F2A\u88C5\u6570\u636E</h2><ul><li>FakeDate - \u751F\u6210\u6307\u5B9A\u504F\u79FB\u91CF\u9644\u8FD1\u7684\u4F2A\u968F\u673A\u65E5\u671F\uFF0C\u4FDD\u8BC1\u7ED3\u679C\u7B49\u5E42\u3002</li><li>FakeName - \u751F\u6210\u968F\u673A\u4E2D\u6587\u59D3\u540D</li></ul><h2 id="a2-a-flow-\u6D41\u7A0B\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#a2-a-flow-\u6D41\u7A0B\u63A7\u5236" aria-hidden="true">#</a> A2.A.<code>flow/</code> \u6D41\u7A0B\u63A7\u5236</h2><p>\u5728\u9AD8\u5C42\u67B6\u6784\u8BBE\u8BA1\uFF0C\u9AD8\u4EF7\u51FD\u6570\u8C03\u7528\uFF0C\u6D41\u5904\u7406\u4E2D\uFF0C\u9700\u8981\u4F7F\u7528\u5F02\u5E38\u53C2\u4E0E\u6D41\u7A0B\u4E2D\u65AD\u3002 \u7C7B\u4F3Cspring security\u4F53\u7CFB\uFF0Cscala\u7684break\u8BED\u6CD5\uFF0Ckotlin\u7684<code>return@</code>\u3002 \u4EE5\u4E0B\u4E3A\u4F4E\u6D88\u8017\u7684\u65E0\u6808\u5F02\u5E38\uFF0C\u4E2D\u65AD\u6D41\u7A0B\u7684\u573A\u666F\uFF0C\u5C5E\u53CD\u6A21\u5F0F\uFF0C\u82E5\u975E\u5FC5\u987B\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u3002</p><ul><li>FlowBreak - \u9759\u6001\u5DE5\u5177\u7C7B</li><li>FlowBreakException - \u7528Enum\u7C7B\u7684\u5F02\u5E38\u53C2\u4E0E\u63A7\u5236\u6D41\u7A0B\u3002</li><li>FlowReturnException - \u5177\u6709\u8FD4\u56DE\u503C</li><li>LoopControl - \u5FAA\u73AF\u63A7\u5236enum</li><li>ReturnOrException - \u662F\u7834\u4F8B\u8FD4\u56DE\u8FD8\u662F\u5F02\u5E38</li></ul><h2 id="a2-b-func-function\u6784\u9020" tabindex="-1"><a class="header-anchor" href="#a2-b-func-function\u6784\u9020" aria-hidden="true">#</a> A2.B.<code>func/</code> function\u6784\u9020</h2><ul><li>Dcl - DCL of Runnable</li><li>Fn - distinct\u548Cduplicate</li></ul><h2 id="a2-c-i18n-\u591A\u56FD\u8BED" tabindex="-1"><a class="header-anchor" href="#a2-c-i18n-\u591A\u56FD\u8BED" aria-hidden="true">#</a> A2.C.<code>i18n/</code> \u591A\u56FD\u8BED</h2><ul><li>I18nAware - \u6807\u8BB0\u578B\u63A5\u53E3</li><li>I18nEnum - \u4E3A\u666E\u901Aenum\u7684\u63D0\u4F9Bi18n\u80FD\u529B</li><li>I18nString - \u652F\u6301 i18n\u7684String</li><li>LocaleResolver - \u652F\u6301 <code>-</code>\u548C<code>_</code></li><li>ZoneIdResolver - \u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u652F\u6301\u90E8\u5206\u547D\u540D</li></ul><h2 id="a2-d-id-\u4E3B\u952E" tabindex="-1"><a class="header-anchor" href="#a2-d-id-\u4E3B\u952E" aria-hidden="true">#</a> A2.D.<code>id/</code> \u4E3B\u952E</h2><h3 id="lightid-\u8F7B\u91CF\u7EA7\u5206\u5E03\u5F0F\u4E3B\u952E" tabindex="-1"><a class="header-anchor" href="#lightid-\u8F7B\u91CF\u7EA7\u5206\u5E03\u5F0F\u4E3B\u952E" aria-hidden="true">#</a> LightId - \u8F7B\u91CF\u7EA7\u5206\u5E03\u5F0F\u4E3B\u952E</h3><p>\u8F7B\u91CF\u7EA7\u5206\u5E03\u5F0F\u4E3B\u952E\uFF0C\u91C7\u7528\u53CC\u7F13\u51B2\u673A\u5236\uFF0C\u4F7F\u7528sequence\u9AD8\u6548\u751F\u621064bit\u6570\u5B57\u4E3B\u952E\u3002 ID\u80FD\u4FDD\u8BC1\u4E25\u683C\u7684<code>\u5355\u8C03\u9012\u589E</code>(\u5347\u5E8F)\uFF0C\u4F46\u4E0D\u4FDD\u8BC1\u8FDE\u7EED\uFF0C\u5176long\u578B\u768464bit\u6784\u6210\u5982\u4E0B\u3002</p><ul><li>long = <code>1-bit:0\u56FA\u5B9A</code>+<code>8-bit:\u9A8C\u8BC1</code>+<code>1-bit:\u5E03\u5C40</code>+<code>54-bit:\u5E8F\u5217</code></li><li><code>0\u56FA\u5B9A</code>\uFF0C\u4FDD\u8BC1ID\u4E3A\u975E\u8D1F\u6570\u3002</li><li><code>\u9A8C\u8BC1</code>\uFF0C\u9ED8\u8BA4\u4E3A<code>0</code>\u586B\u5145\uFF0C\u7528Crc8Long\u751F\u6210\u6784\u9020\u4F2A\u968F\u673A\u6570\u3002</li><li><code>\u5E03\u5C40</code>\uFF0C\u63D0\u4F9B<code>\u5168\u5E8F\u5217</code>\u548C<code>\u533A\u5E8F\u5217</code>\u4E24\u79CD\u5E03\u5C40\u3002 <ul><li><code>\u5168\u5E8F\u5217</code>=<code>1bit(0)</code> + <code>sequence(54bit)</code></li><li><code>\u533A\u5E8F\u5217</code>=<code>1bit(1)</code> + <code>block(9bit)</code> + <code>sequence(45bit)</code></li></ul></li><li><code>\u5E8F\u5217</code>\uFF0C\u4F9D\u8D56\u4E8E\u5E03\u5C40\uFF0C\u4EE5\u4E0B\u662F\u5176\u7EA6\u675F <ul><li><code>\u533A\u5757</code>=<code>block(9bit=512)</code>\uFF0C\u7528\u6765\u533A\u5206\u4E0D\u540C\u7684\u4E3B\u952E\u751F\u4EA7\u4E2D\u5FC3\u3002</li><li><code>\u5E8F\u53F7</code>=<code>sequence(45bit|54bit)</code>\uFF0C<code>\u533A\u5757</code>\u5185\u552F\u4E00\u9012\u589E\u5E8F\u53F7\u3002</li><li><code>\u533A\u5757</code>\u7684\u533A\u95F4\u4E3A<code>[1,512]</code>\uFF0C<code>0</code>\u8868\u793A<code>\u5168\u5E8F\u5217</code></li></ul></li></ul><p>\u56E0\u4E3A\u6709\u6548\u4F4D\u53EA\u670955bit\uFF0C\u6240\u4EE5\u5B58\u5728\u4EE5\u4E0B\u7279\u70B9\u3002</p><ul><li>\u751F\u4EA7\u4E2D\u5FC3\uFF0C\u6700\u591A512\u4E2A\u3002\u901A\u5E38\u4E00\u4E2A\u6570\u636E\u4E2D\u5FC3\uFF0C\u6709\u4E00\u4E2A\u751F\u4EA7\u4E2D\u5FC3\u3002</li><li>\u82E5\u6BCF\u79D2\u6D88\u8D395\u4E07ID\uFF0C\u80FD\u8FDE\u7EED22\u5E74\uFF0C(2^45 -1)/(365x24x3600x50000)=22.3</li><li>\u5982\u4E3A\u6700\u5927\u5E8F\u5217\u5E03\u5C40\uFF0C\u5219\u5728\u4E0A\u8BC9\u80FD\u529B\u4E0A\uFF0C\u589E\u52A0512\u500D\u3002</li><li>sequence\u548C\u65F6\u95F4\u65E0\u5173\uFF0C\u6240\u4EE5\u5E76\u53D1\u4E0A\u9650\u548C\u4F7F\u7528\u5E74\u9650\uFF0C\u53EA\u6839ID\u6D88\u8D39\u8005\u80FD\u529B\u6709\u5173\u3002</li><li>sequence\u548C\u8FDB\u7A0B\u65E0\u5173\uFF0C\u6240\u4EE5\u80FD\u4EE5key-value\u5F62\u5F0F\uFF0C\u4EA7\u751F\u4E0D\u540C\u7C7B\u522B\u7684ID\u3002</li></ul><p>\u7CFB\u7EDF\u63D0\u4F9B\u9ED8\u8BA4\u7684\u53CC\u7F13\u51B2\u5B9E\u73B0\uFF0C\u5728<code>Loader</code>\u4FDD\u8BC1\u552F\u4E00\u5347\u5E8F\u7684\u60C5\u51B5\u4E0B\uFF0C\u80FD\u591F\u3002</p><ul><li>\u4FDD\u8BC1\u5168\u5C40block-name\u751F\u6210\u552F\u4E00id\u3002</li><li>\u7EBF\u7A0B\u5185id\u5347\u5E8F\uFF0C\u4E0D\u540C\u7EBF\u7A0B\u65E0\u6CD5\u4FDD\u8BC1\u5347\u5E8F\u3002</li><li>\u5F53id\u5269\u4F59\u4E0D\u8DB3\u67D0\u503C\uFF0880%\uFF09\u65F6\uFF0C\u5F02\u6B65\u8865\u5145id\uFF0C\u65E0\u9501\uFF08\u975E\u8BFB\u5199\u9501\uFF09</li><li>\u5207\u6362id\u6BB5\u65F6\uFF0C\u4FDD\u8BC1\u6700\u5C0F\u540C\u6B65\u6BB5\uFF0C\u63A7\u5236\u4FDD\u62A4\u8D44\u6E90\u7684\u8303\u56F4\u3002</li><li>\u6839\u636Eid\u7684\u6BCF\u79D2\u6D88\u8017\u6570\u52A8\u6001\u8C03\u6574\u8BF7\u6C42\u6570\u91CF\uFF0C\u9884\u755960\u79D2\u7684\u4F7F\u7528\u91CF\u3002</li><li>\u5F53\u7F13\u51B2id\u5B8C\u5168\u8017\u5C3D\u65F6\uFF0C\u4FDD\u8BC1\u53EA\u6709\u4E00\u4E2A\u52A0\u8F7D\uFF0C\u5176\u4ED6\u7B49\u5019\u6210\u529F\u6216\u8D85\u65F6\u3002</li><li>\u652F\u6301\u624B\u52A8\u8FDB\u884C\u9884\u52A0\u8F7D(preload)\u6240\u6709\u53EF\u7528id\u3002</li><li>\u652F\u6301\u624B\u52A8\u6216\u5B9A\u65F6\u6E05\u9664\u9519\u8BEF\u3002</li><li>\u652F\u6301\u624B\u52A8\u8C03\u6574\u8FD0\u884C\u65F6\u53C2\u6570\u3002</li></ul><h3 id="lightidbufferedprovider-\u9AD8\u6027\u80FD-\u8F7B\u91CF\u7EA7\u9501-\u53CC\u7F13\u51B2" tabindex="-1"><a class="header-anchor" href="#lightidbufferedprovider-\u9AD8\u6027\u80FD-\u8F7B\u91CF\u7EA7\u9501-\u53CC\u7F13\u51B2" aria-hidden="true">#</a> LightIdBufferedProvider - \u9AD8\u6027\u80FD\uFF0C\u8F7B\u91CF\u7EA7\u9501\uFF0C\u53CC\u7F13\u51B2</h3><p>\u8F7B\u91CF\u7EA7\u9501\uFF0C\u9AD8\u6027\u80FD\uFF0C\u53CC\u7F13\u51B2 light-id \u63D0\u4F9B\u8005\u3002</p><p>\u5B9E\u6D4B\u6027\u80FD\uFF0C\u9AD8\u4E8Ebusy-wait+\u8BFB\u5199\u9501\u6216\u5927\u7C92\u5EA6\u7684\u7EC4\u5408\u9501\u6216\u540C\u6B65\u5757\u3002 \u6548\u80FD\u74F6\u9888\u5728loader\u7684io\u4E0A\uFF0C\u9700\u8981\u6839\u636E\u6D88\u8017\u91CF\uFF0C\u4F18\u5316maxCount\u3002</p><p>\u5171\u5B58\u5728\u4EE5\u4E0B3\u7C7B\u7EBF\u7A0B\uFF0C\u4E14\u8BFB\u7EBF\u7A0B\u4F1A\u5347\u7EA7\u4E3A\u5199\u7EBF\u7A0B\uFF0C\u751A\u81F3\u52A0\u8F7D\u7EBF\u7A0B\u3002 \u540C\u4E00\u65F6\u523B\uFF0C\u6709\u591A\u4E2A\u8BFB\u7EBF\u7A0B\uFF0C\u4F46\u53EA\u6709\u552F\u4E00\u5199\u7EBF\u7A0B\uFF0C\u552F\u4E00\u7684\u52A0\u8F7D\u7EBF\u7A0B\u3002</p><ul><li>\u8BFB\u7EBF\u7A0B\uFF0C\u6B63\u5E38\u7684light-id\u8C03\u7528\u8005</li><li>\u5199\u7EBF\u7A0B\uFF0C\u8BFB\u7EBF\u7A0B\u5347\u7EA7\u6216\u52A0\u8F7D\u7EBF\u7A0B\uFF0C\u4E3Abuffer\u8FFD\u52A0\u7247\u6BB5(segment)</li><li>\u52A0\u8F7D\u7EBF\u7A0B\uFF0C\u5F02\u6B65\u7EBF\u7A0B\u6216\u8BFB\u7EBF\u7A0B\u5347\u7EA7\uFF0C\u901A\u8FC7loader\u52A0\u8F7Dsegment</li></ul><p>\u53CC\u7F13\u51B2\u7684\u8FD0\u884C\u673A\u5236\u5982\u4E0B\uFF0C\u4F1A\u8DDF\u8FDBid\u7684\u4F7F\u7528\u91CF\uFF0C\u81EA\u52A8\u63A7\u5236\u9884\u52A0\u8F7D\u91CF\uFF0C\u4F46\u4E0D\u8D85\u8FC7maxCount\u3002</p><ul><li>\u5F53Id\u4F59\u91CF\u4F4E\u4E8E20%\u65F6\uFF0C\u552F\u4E00\u5F02\u6B65\u9884\u52A0\u8F7D<code>60s\u5185\u6700\u5927\u4F7F\u7528\u91CF</code>\u6216<code>maxCount</code></li><li>\u5F53Id\u4F59\u91CF\u7528\u5C3D\u65F6\uFF0C\u8BFB\u7EBF\u7A0B\u5347\u7EA7\u4E3A\u5199\u7EBF\u7A0B\uFF0C\u5176\u4ED6\u8BFB\u7EBF\u7A0B\u7B49\u5F85\uFF0C\u76F4\u5230\u88AB\u5524\u9192\u6216\u8D85\u65F6</li><li>\u5F53\u8BFB\u7EBF\u7A0B\u5347\u7EA7\u5199\u7EBF\u7A0B\u65F6\uFF0C\u5B58\u5728loader\uFF0C\u6B64\u8BFB\u7EBF\u7A0B\u81EA\u65CB\u5FD9\u7B49\u540E\uFF0C\u5207\u6362buffer\u3002</li></ul><h3 id="lightidutil-\u5BF9lightid\u7279\u5F81long\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#lightidutil-\u5BF9lightid\u7279\u5F81long\u64CD\u4F5C" aria-hidden="true">#</a> LightIdUtil - \u5BF9lightId\u7279\u5F81long\u64CD\u4F5C</h3><p>\u5BF9 lightId\uFF0Clong\u548Csequence\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u8F6C\u6362\u7684\u5DE5\u5177\u7C7B\u3002 \u53EF\u80FD\u591F\u5168\u5C40\u6539\u53D8LightId\u4E2D\u5E8F\u5217\u7684\u9ED8\u8BA4\u5E03\u5C40\u53CA\u5176\u987A\u5E8F\u3002</p><ul><li>forceBlockBit - \u8C03\u6574<code>\u533A\u5757</code>\u7684bit\u6570</li><li>forceBlockFirst - \u4F7F\u7528\u5148<code>\u533A\u5757</code>\u5E03\u5C40\uFF0C\u8FD8\u662F\u5148<code>\u5E8F\u53F7</code>\u5E03\u5C40</li></ul><h3 id="ulid-\u7B80\u5355\u7684ulid\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#ulid-\u7B80\u5355\u7684ulid\u5B9E\u73B0" aria-hidden="true">#</a> Ulid - \u7B80\u5355\u7684ULID\u5B9E\u73B0</h3><p>\u4EC5\u5FEB\u901F\u751F\u6210ULID\uFF0C\u4E0D\u652F\u6301\u9A8C\u8BC1\u53CA\u89E3\u6790\u3002\u7528\u4E8E\u6709\u5E8F\u968F\u673A\u6570\uFF0C\u5168\u5C40\u7B49ID\u3002</p><h2 id="a2-e-img-\u4E3B\u952E" tabindex="-1"><a class="header-anchor" href="#a2-e-img-\u4E3B\u952E" aria-hidden="true">#</a> A2.E.<code>img/</code> \u4E3B\u952E</h2><ul><li>ImageIoFix - problem-using-imageio-write-jpg-file</li><li>StreamJpg - BufferedImage \u5199\u5165</li><li>Watermark - \u6C34\u5370</li><li>ZoomRotateCrop - \u7F29\u653E\u65CB\u8F6C\u526A\u5207</li></ul><h2 id="a2-f-io-io\u53CAfs\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#a2-f-io-io\u53CAfs\u64CD\u4F5C" aria-hidden="true">#</a> A2.F.<code>io/</code> IO\u53CAfs\u64CD\u4F5C</h2><ul><li>CircleInputStream - \u53EF\u5FAA\u73AF\u8BFB\u53D6\u7684\u6D41</li><li>CompatibleObjectStream - \u5F53serialVersionUID\u4E0D\u517C\u5BB9\u65F6\uFF0C\u91C7\u7528\u672C\u5730Class\u53CD\u5E8F\u5217\u5316</li><li>DirHasher \u672C\u5730\u6587\u4EF6\u7CFB\u7EDF\u4E0D\u53EF\u4FDD\u5B58\u592A\u591A\u6587\u4EF6</li><li>Exec - \u5355\u7EBF\u7A0B\u540C\u6B65\u6267\u884C\uFF0C\u9AD8\u7EA7\u529F\u80FD\u7528Apache Commons Exec</li><li>InputStreams - \u4E0D\u4F7F\u7528commons\u7684\u8865\u4F4D</li><li>NonCloseStream - \u5C4F\u853D\u6389close\u7684\u6D41</li><li>Zipper \u9012\u5F52zip/unzip</li></ul><h2 id="a2-g-jaxb-xml" tabindex="-1"><a class="header-anchor" href="#a2-g-jaxb-xml" aria-hidden="true">#</a> A2.G.<code>jaxb/</code> xml</h2><p>\u6CE8\u610F\uFF0Cjaxb\u4EE5\u5728Java11\u4E2D\u79FB\u9664\uFF0C\u4F30\u9700\u8981\u5355\u72EC\u4F9D\u8D56\u3002</p><ul><li>StringMapXmlWriter - \u53EA\u628A\u9876\u5C42\u5143\u7D20\u53D8\u6210key-value\u7684map\uFF0C\u7528\u6765\u505A\u53C2\u6570\u7B7E\u540D</li></ul><h2 id="a2-h-lock-\u9501" tabindex="-1"><a class="header-anchor" href="#a2-h-lock-\u9501" aria-hidden="true">#</a> A2.H.<code>lock/</code> \u9501</h2><ul><li>GlobalLock - \u5168\u5C40\u9501\u63A5\u53E3</li><li>JvmStaticGlobalLock - \u57FA\u4E8EWeakReference\u7684Jvm\u5168\u5C40\u9501</li></ul><h2 id="a2-i-math-\u884C\u4E1A\u4E2D\u7684\u6570\u5B66\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#a2-i-math-\u884C\u4E1A\u4E2D\u7684\u6570\u5B66\u7B97\u6CD5" aria-hidden="true">#</a> A2.I.<code>math/</code> \u884C\u4E1A\u4E2D\u7684\u6570\u5B66\u7B97\u6CD5</h2><ul><li>AnyIntegerUtil - int,long,Number,String\u95F4\u7684\u6069\u6028</li><li>AverageDecimal - \u5E73\u5747\u6570 20/6=<code>[3.33, 3.33, 3.34, 3.33, 3.33, 3.34]</code></li><li>BalanceDecimal - \u5E73\u8861\u6570\uFF0C \u6309\u6743\u91CD\u5206\u5272\u6570\u503C</li><li>BigDecimalUtil - \u5904\u7406null\u7684Decimal\u8FD0\u7B97\u5DE5\u5177</li><li>ComparableUtil - Null \u4E0D\u53C2\u4E0E\u6BD4\u8F83\u7684\u6BD4\u8F83\u5668</li><li>RatioNumber - \u6BD4\u4F8B\u6570\uFF0C\u7269\u54C1\u6D88\u8017\u7684\u6362\u7B97\u8868\u793A\u6CD5\u3002</li></ul><h2 id="a2-j-netx-\u7F51\u7EDC\u901A\u8BAF" tabindex="-1"><a class="header-anchor" href="#a2-j-netx-\u7F51\u7EDC\u901A\u8BAF" aria-hidden="true">#</a> A2.J.<code>netx/</code> \u7F51\u7EDC\u901A\u8BAF</h2><ul><li>SslTrustAll - \u4FE1\u4EFB\u6240\u4EE5\u8BC1\u4E66\uFF0C\u4F7F\u722C\u866B\u4E0D\u62A5\u9519</li><li>SslVersion - jdk-8-will-use-tls-12-as-default</li></ul><h2 id="a2-k-page-\u5206\u9875\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#a2-k-page-\u5206\u9875\u529F\u80FD" aria-hidden="true">#</a> A2.K.<code>page/</code> \u5206\u9875\u529F\u80FD</h2><ul><li>PageQuery - \u5206\u9875\u67E5\u8BE2</li><li>PageResult - \u5206\u9875\u7ED3\u679C</li><li>PageUtil - \u5206\u9875\u5DE5\u5177\uFF0C\u4F7F\u7528<code>-1+1</code>\u7B97\u6CD5\uFF0C\u4E0D\u662Fif-else</li></ul><h2 id="a2-l-pain-\u5F02\u5E38\u75DB\u82E6" tabindex="-1"><a class="header-anchor" href="#a2-l-pain-\u5F02\u5E38\u75DB\u82E6" aria-hidden="true">#</a> A2.L.<code>pain/</code> \u5F02\u5E38\u75DB\u82E6</h2><ul><li>BadArgsException - \u591A\u56FD\u8BED\u548C\u679A\u4E3E\u7248\u7684\u53EF\u65E0\u5806\u6808\u7684IllegalArgumentException</li><li>BadStateException - \u591A\u56FD\u8BED\u548C\u679A\u4E3E\u7248\u7684\u53EF\u65E0\u5806\u6808\u7684IllegalStateException</li><li>CodeException - \u591A\u56FD\u8BED\u548C\u679A\u4E3E\u7248\u7684\u53EF\u65E0\u5806\u6808\u7684RuntimeException</li><li>HttpStatusException - \u63D0\u4F9BHttpStatus\u7684\u65E0\u5806\u6808\u5F02\u5E38</li><li>IllegalRequestException - \u4E0D\u5408\u6CD5\u7684\u8BF7\u6C42</li><li>IllegalResponseException - \u56E0\u72B6\u6001\u95EE\u9898\u65E0\u6CD5\u6B63\u5E38\u54CD\u5E94</li><li>IORuntimeException - Runtime\u7248IOException</li><li>MessageException - \u9ED8\u8BA4\u65E0\u5806\u6808\u6D88\u606F\u5F02\u5E38</li><li>NoStackRuntimeException - \u65E0\u9700\u586B\u5145\u5806\u6808\u7684\u5F02\u5E38\uFF0C\u7528\u4E8E\u6027\u80FD\u4F18\u5148\u573A\u666F\uFF0C\u5806\u6808\u65E0\u7528\u7684\u573A\u666F</li><li>ThrowableUtil - Throwable\u5806\u6808\u548Ccause\u5DE5\u5177</li><li>TimeoutRuntimeException - Runtime\u7248TimeoutException</li></ul><h2 id="a2-m-stat-\u7EDF\u8BA1\u4E0E\u76D1\u63A7" tabindex="-1"><a class="header-anchor" href="#a2-m-stat-\u7EDF\u8BA1\u4E0E\u76D1\u63A7" aria-hidden="true">#</a> A2.M.<code>stat/</code> \u7EDF\u8BA1\u4E0E\u76D1\u63A7</h2><ul><li>GitStat - \u5BF9git\u63D0\u4EA4\u6309\u65E5\u671F\u4F5C\u8005\u7EDF\u8BA1\uFF0C\u6216\u5728mysql\u5EFA\u8868\u4FDD\u5B58</li><li>JvmStat - \u8FD4\u56DE\u5F53\u524Djvm\u7684Cpu\uFF0CMem\uFF0CThread\u4FE1\u606F</li><li>LogStat - \u5BF9\u65E5\u5FD7\u589E\u957F\uFF0C\u5173\u952E\u8BCD\u8FDB\u884C\u6536\u96C6</li></ul><h2 id="a2-n-text-\u5168\u534A\u89D2-\u767D\u5B57\u7B26-\u683C\u5F0F\u5316\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#a2-n-text-\u5168\u534A\u89D2-\u767D\u5B57\u7B26-\u683C\u5F0F\u5316\u5DE5\u5177" aria-hidden="true">#</a> A2.N.<code>text/</code> \u5168\u534A\u89D2\uFF0C\u767D\u5B57\u7B26\uFF0C\u683C\u5F0F\u5316\u5DE5\u5177</h2><ul><li>BuilderHelper - null\u53CB\u597D\u788E\u7247\u5C11\u7684StringBuilder\u64CD\u4F5C</li><li>BuilderHolder - \u51CF\u5C11\u788E\u7247\u7684StringBuilder</li><li>CaseSwitcher - camel,snake,pascal,kebab\u547D\u540D\u8F6C\u6362</li><li>FormatUtil - printf\u7684<code>%</code>;logbak\u7684<code>{}</code>;message\u7684<code>{0}</code>\uFF0C\u53C2\u6570\u586B\u5145</li><li>FullCharUtil - \u5168\u89D2\u5B57\u7B26\u5DE5\u5177</li><li>HalfCharUtil - \u534A\u89D2\u5B57\u7B26\u5DE5\u5177</li><li>JsonTemplate - \u6784\u9020Json\u7684\u6A21\u677F</li><li>StringTemplate - \u5B57\u7B26\u4E32\u6A21\u677F\uFF0C\u514D\u66FF\u6362\u5C34\u5C2C\uFF0C\u53EF\u8BFB\u6027\u597D\uFF0C\u6027\u80FD\u4F18</li><li>WhiteUtil - \u5F25\u8865java trim\u7684\u4E0D\u8DB3\uFF0C\u66F4\u591AWhitespace\u5904\u7406</li><li>Wildcard - \u5FEB\u901F\u7684\u901A\u914D\u7B26\u5339\u914D\uFF0C\u4EC5\u652F\u6301<code>?</code>\u548C<code>*</code></li></ul><h2 id="a2-o-time-\u65F6\u95F4\u65E5\u671F" tabindex="-1"><a class="header-anchor" href="#a2-o-time-\u65F6\u95F4\u65E5\u671F" aria-hidden="true">#</a> A2.O.<code>time/</code> \u65F6\u95F4\u65E5\u671F</h2><ul><li>DateFormatter - \u7EBF\u7A0B\u5B89\u5168\u7684\uFF0C\u6BD4\u6B63\u5E38formatter\u8981\u5FEB</li><li>DateLocaling - LocalDateTime\u548C\u65F6\u533A\u7684\u6545\u4E8B</li><li>DateNumber - \u65E5\u671F\u8F6C\u5316\u6210\u6570\u5B57\u7684\u53CC\u5411\u8F6C\u5316</li><li>DateParser - \u66F4\u9AD8\u6548\u517C\u5BB9\u7684\u89E3\u6790\u65E5\u671F\u6570\u5B57\u7684\u5B57\u7B26\u4E32</li><li>SlideDate - \u5305\u88C5\u4E86OffsetClock\u7684\u4F1A\u8BA1\u65E5\u671F\u5DE5\u5177</li><li>ThreadNow - \u63D0\u4F9B\u7EBF\u7A0B\u7EA7\u7684\u8C03\u51C6\u65F6\u949F</li></ul><h2 id="a2-p-tk-token\u548Cticket" tabindex="-1"><a class="header-anchor" href="#a2-p-tk-token\u548Cticket" aria-hidden="true">#</a> A2.P.<code>tk</code> token\u548Cticket</h2><p>\u7528\u4E8E\u79C1\u94A5\u51ED\u8BC1\uFF0C\u9700\u8981\u4E2D\u5FC3\u63A7\u5236\u53C8\u53BB\u4E2D\u5FC3\u7684\u51ED\u8BC1\uFF0C\u5728\u65E0\u610F\u4E49session\u548C\u5E9E\u5927jwt\u4F53\u7CFB\u4E4B\u95F4\u7684\u573A\u666F\u3002 session\u7684replication\u548Csticky\u5728\u6C34\u5E73\u6269\u5C55\u4E0A\u5341\u5206\u7A33\u5B9A\u6210\u719F\uFF0C\u5982redis\u548CHazelcast\u3002 JsonWeb\u7CFB\u5217\u4F53\u7CFB\u5F3A\u5927\uFF0C\u591A\u5728\u6570\u636E\u4EA4\u6362\u4E14\u5B89\u5168\u8981\u6C42\u8F83\u9AD8\u7684\u573A\u666F\uFF0C\u51ED\u8BC1\u9886\u57DF\u5E76\u975E\u5176\u5F3A\u9879\u3002</p><p>\u573A\u666F\u7684\u5E94\u7528\u573A\u666F\u662FRememberMe\u6216\u8BFB\u53D6\u5F02\u6B65\u4EFB\u52A1\u7ED3\u679C\u7684\u51ED\u8BC1\u3002</p><p>\u5728RememberMe\u4E2D\uFF0Cbiz-data\u53EF\u5305\u62ECuid\uFF0C\u800Csig-data\u4E2D\uFF0C\u9700\u8981\u628A\u7528\u6237\u5BC6\u7801\u548C\u76D0\u8FFD\u52A0\u8FDB\u884C\u9A8C\u7B7E\u3002 \u5F53\u7528\u6237\u518D\u6B21\u767B\u5F55\uFF0C\u5BC6\u7801\u4FEE\u6539\uFF0C\u6216\u51ED\u8BC1\u8FC7\u671F\u65F6\uFF0C\u90FD\u53EF\u4EE5\u5BF9ticket\u7684\u6709\u6548\u6027\u8FDB\u884C\u5224\u65AD\u3002</p><h3 id="ticket-\u6709\u4E2D\u5FC3\u6743\u529B\u7684\u53BB\u4E2D\u5FC3\u51ED\u8BC1" tabindex="-1"><a class="header-anchor" href="#ticket-\u6709\u4E2D\u5FC3\u6743\u529B\u7684\u53BB\u4E2D\u5FC3\u51ED\u8BC1" aria-hidden="true">#</a> Ticket - \u6709\u4E2D\u5FC3\u6743\u529B\u7684\u53BB\u4E2D\u5FC3\u51ED\u8BC1</h3><p>\u7279\u70B9\u662F\u77ED\u5C0F\uFF0C\u53EF\u8FC7\u671F\uFF0C\u53EF\u8E22\u4EBA\uFF0C\u53EF\u9A8C\u7B7E\uFF0C\u6709\u4E00\u5B9A\u4E1A\u52A1\u610F\u4E49\uFF0C\u4EE3\u66FF\u65E0\u610F\u4E49\u7684\u968F\u673Atoken\uFF0C\u683C\u5F0F\u5927\u6982\u5982\u4E0B\u3002</p><p><code>pub-part</code> + <code>.</code> + <code>biz-part</code> + <code>.</code> + <code>sig-part</code>\uFF0Cbiz-part\u4E3A\u53EF\u9009\u9879\u3002</p><ul><li>\u516C\u5F00\u90E8\u5206(pub-part) - \u5FC5\u9009\uFF0C\u4EE5<code>-</code>\u5206\u9694\u7684\u5B57\u6BCD\u6570\u5B57\uFF0C\u542B\u4EE5\u4E0B\u5B57\u6BB5 <ul><li>mod - <code>az09</code>\uFF0C\u7EA6\u5B9A\u6A21\u5F0F\uFF0C\u5BF9\u52A0\u5BC6\uFF0C\u7B7E\u540D\uFF0Cbiz\u7ED3\u6784\u7684\u7EA6\u5B9A</li><li>exp - long\uFF0C\u8FC7\u671F\u65F6\u70B9\uFF0C\u4ECE1970-01-01\u8D77\u7684\u79D2\u6570</li><li>seq - int\uFF0C\u7B7E\u53D1\u5E8F\u53F7\uFF0C\u9012\u589E\u4E0D\u8FDE\u7EED\uFF0C\u4E00\u822C\u5C0F\u4E8E10\u6709\u7279\u522B\u5B9A\u4E49\u3002</li></ul></li><li>\u4E1A\u52A1\u90E8\u5206(biz-part) - <code>az09-_</code>\uFF0C\u53EF\u9009\uFF0C\u4E0D\u8D85\u8FC71k\uFF0C\u5728mod\u4E2D\u5B9A\u4E49 <ul><li>base64\u4E3Aurl-safe\uFF0Cno pad\u683C\u5F0F</li></ul></li><li>\u7B7E\u540D\u90E8\u5206(sig-part) - <code>az09-_</code>\uFF0C\u53EF\u9009\uFF0C\u4E00\u822C50\u5B57\u7B26\u5185\uFF0C\u5728mod\u4E2D\u5B9A\u4E49 <ul><li>base64\u540C\u4E0A</li></ul></li></ul><p>\u4EE5\u4E0B\u5B57\u6BB5\u7EA6\u5B9A\uFF0C\u7528\u9014\u5206\u522B\u89E3\u91CA\uFF0C\u4F7F\u7528\u65F6\u9700\u8981\u5B58\u5728\u4EE5\u4E0B\u7EA6\u5B9A\u6570\u636E\u3002</p><ul><li>salt - \u52A0\u5BC6\u6216\u7B7E\u540D\u79D8\u94A5\uFF0C\u5982<code>\u52A0\u76D0</code>\uFF0C\u5BF9\u79F0\u79D8\u94A5\uFF0C\u975E\u5BF9\u79F0\u79C1\u94A5\u3002</li><li>biz-data - \u52A0\u5BC6\u524D\u7684\u4E1A\u52A1\u6570\u636E\uFF0C\u52A0\u5BC6\u540E\u4E3Abiz-part</li><li>sig-data - \u7B7E\u540D\u4FE1\u606F\uFF0C<code>pub-part</code> + (<code>.</code> + <code>biz-part</code>)?\u3002</li></ul><p>\u5219\uFF0C\u516C\u5F00\u90E8\u5206\u5BF9\u5E94\u7684\u4E1A\u52A1\u573A\u666F\u548C\u8BF4\u660E\u5982\u4E0B\uFF0C</p><ul><li><p><code>mod</code> \u670D\u52A1\u7AEF\u6216\u540C\u7528\u6237\u534F\u5546\u5236\u5B9A\uFF0C\u5305\u62EC\u52A0\u5BC6\u548C\u7B7E\u540D\u7B97\u6CD5\uFF0C\u6570\u636E\u683C\u5F0F\uFF0C\u7528\u6237\u5B57\u6BB5\u7B49\uFF0C\u5982\u5185\u5B9A\u3002</p><ul><li>any = \u4EC5\u539F\u6587\u89E3\u6790\u548C\u5408\u5E76\u5404\u4E2A\u5B57\u6BB5\u3002</li><li>am0 = aes128(biz-data, salt) + md5(sig-data) \u65E0\u76D0Md5</li><li>am1 = aes128(biz-data, salt) + md5(sig-data + salt) \u52A0\u76D0Md5</li><li>ah1 = aes128(biz-data, salt) + HmacMd5(sig-data, salt) Hmac\u9A8C\u7B7E</li></ul></li><li><p><code>exp</code> \u51ED\u8BC1\u8FC7\u671F\u7684\u79D2\u6570\uFF0C\u4ECE1970-01-01\u8D77\u7684<code>\u79D2\u6570</code>\uFF0C\u4E0D\u662F\u6BEB\u79D2\u3002</p><ul><li>\u5230\u671F\u51ED\u8BC1\uFF0Cclient\u9700\u8981\u5230\u670D\u52A1\u5668\u7EED\u7B7E\u3002</li><li>\u670D\u52A1\u5668\u7AEF\u81EA\u884C\u786E\u5B9A\u884C\u4E3A\uFF0C\u5982\u7EED\u7B7E\uFF0C\u62D2\u7EDD\uFF0C\u91CD\u53D1\u7B49\u3002</li></ul></li><li><p><code>seq</code> \u7B7E\u53D1\u5E8F\u53F7\uFF0C\u751F\u6210\u51ED\u8BC1\u65F6\u9012\u589E\uFF0C\u7EED\u7B7E\u65F6\u4E0D\u53D8\uFF0Cseq\u4E0D\u540C\u65F6\uFF0C\u987B\u91CD\u65B0\u83B7\u5F97\u51ED\u8BC1\u3002</p><ul><li>\u5F53\u7528\u6237\u767B\u5F55\u65F6\uFF0C\u751F\u6210\u51ED\u8BC1\uFF0C\u5176\u4ED6\u7AEF\u518D\u6B21\u767B\u5F55\u65F6\uFF0Cseq\u589E\u52A0\uFF0C\u5219\u53EF\u8E22\u51FA\u5176\u4ED6\u7AEF\u51ED\u8BC1\u3002</li><li>\u5F53\u51ED\u8BC1\u8FC7\u671F\u65F6\uFF0C\u672A\u53D1\u751F\u518D\u6B21\u767B\u5F55\uFF0C\u53EF\u4EE5\u540Cseq\u7EED\u7B7E\u65B0\u51ED\u8BC1\u3002</li><li>0 \u8868\u793A\u65E0\u9700\u9A8C\u8BC1\u5E8F\u53F7\uFF0C\u4E00\u822C\u7528\u4E8E\u5F31\u6743\u9650\u573A\u5408\uFF0C\u5982\u4E34\u65F6\u51ED\u8BC1</li></ul></li></ul><p>\u51ED\u8BC1\uFF0C\u53EF\u4EE5\u5728http\u7684header\uFF0Csession\u548Curl-string\u4E2D\u4F20\u9012\u3002</p><ul><li>\u65E0\u79C1\u94A5\u8005\uFF0C\u65E0\u6CD5\u9A8C\u7B7E\u548C\u89E3\u5BC6\uFF0C\u4EC5\u53EF\u4EE5\u4F7F\u7528pub-part\u4FE1\u606F\u3002</li><li>\u6709\u79C1\u94A5\u8005\uFF0C\u901A\u8FC7\u9A8C\u7B7E\u548C\u89E3\u5BC6\uFF0C\u5224\u65AD\u51ED\u8BC1\u6709\u6548\u6027\uFF0C\u83B7\u53D6\u4E1A\u52A1\u5185\u5BB9\u3002</li><li>\u65E0\u79C1\u94A5\u8005\uFF0C\u4E14\u9700\u8981\u9A8C\u7B7E\u7684\u60C5\u51B5\uFF0C\u53EF\u4E0D\u52A0\u76D0\uFF0C\u4E0D\u7528hmac\u7B7E\u540D</li></ul><h3 id="\u9ED8\u8BA4\u7684\u57FA\u672C\u5B9E\u73B0\u548C\u5DE5\u5177\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u7684\u57FA\u672C\u5B9E\u73B0\u548C\u5DE5\u5177\u7C7B" aria-hidden="true">#</a> \u9ED8\u8BA4\u7684\u57FA\u672C\u5B9E\u73B0\u548C\u5DE5\u5177\u7C7B</h3><ul><li><code>AnyTicket</code> - \u53EF\u4EE5\u89E3\u6790\u4EFB\u4F55mod\u7684ticket</li><li><code>TicketHelp</code> - \u63D0\u4F9B\u4E86ticket\u89E3\u6790\uFF0C\u9A8C\u7B7E\u7684\u57FA\u672C\u5DE5\u5177\u7C7B</li></ul>',97),t=[c];function o(r,n){return i(),l("div",null,t)}const u=e(d,[["render",o],["__file","a2.utilities.html.vue"]]);export{u as default};
