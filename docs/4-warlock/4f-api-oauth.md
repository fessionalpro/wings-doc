---
isOriginal: true
icon: command
category:
  - 术士
  - 安全
---

# 4F.对外Api

不同于用户登录(BindAuth)，外Api是限定功能的，非SecurityFilter体系。

* BindAuth - 以Filter和Cookie为基础，是传统的Broswer-Server模式，简称BS
* ApiAuth - 以Token和Signature为基础，是外部的Server-Server模式，简称SS
* ServiceComb - 内部的ServerServer微服务及云模式

验证(authn)成功后，不进行全面授权(authz)，不写入Session，不记录登录日志。
BindAuth有完整的SecurityContext，而ApiAuth仅有TerminalContext。

ApiAuth的模式约定是双向的，response采用request相同的约定回复，包括，

* 签名方式 - response使用request的签名算法，根据长度判定
* timestamp - response和request一致，同有同无
* digest - 文件摘要，交换文件时使用
* secret - 用户设定，明文存在，用于签名

关于status code，除了验签阶段，都应该返回200，并以业务code定义错误

* 401 - client错误时
* 403 - 验签失败时，可以使用body返回错误细节
* 200 - 仅表示response成功，而业务成功与否由body中的业务code定义

## 4F.1.PostJson模式

设计上，BS和SS在服务对象，请求频次，安全等级，功能粒度都是不同的，不应该混用。
Api采用HTTP的POST发送JSON数据，并签名防伪，简称`PostJson`，参数有，

* client - 相当于登录名，也称为clientId, appId, accessKey
* secret - 相当于密码，也称为clientSecret, appKey, accessSecret
* timestamp - 当前毫秒时间戳，用辅助签名，消息时序等
* signature - 消息体签名，验证消息有消息

此种方式以成为国内API的事实标准，参考微信付款的[安全规范-签名算法](https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=4_3)，重点如下，

* key - 以ASCII码从小到大排序（字典序），TreeMap即可
* value - 使用原值，不需要URL Encode，避免编码差异
* null - 不参与签名，字符串空可参与
* utf8 - 数据都为UTF8编码，以UTF8获取bytes签名

签名数据为，`param`+`body`+`secret`+`timestamp`，算法为MD5或HMAC-SHA256

* param - 业务参数`k=v(&k1=v1)*`格式的QueryString
* body - 业务载荷，json格式的body
* secret - 客户的密码，不要外泄！
* timestamp - 有则也参与签名

验签参数，都通过header传递，包括4个，

* client - 客户身份，不参与签名。可自定义，如`Auth-Client`
* signature - 消息签名，不参与签名，不区分大小写。可自定义，如`Auth-Signature`
* timestamp - 有则也参与签名。可自定义，如`Auth-Timestamp`
* digest - body摘要，仅用在文件下载。可自定义，如`Auth-Digest`

关于签名算法，支持以下3种，并根据签名长度自动适配

* MD5 - 摘要算法，历史兼容，128bit，Hex长度32
* SHA1 - 摘要算法，历史兼容，160bit，Hex长度40
* HMAC-SHA256 - 安全的签名算法，256bit，Hex长度64

response为Json时，采用和request相同的算法和方式，若为文件下载，则使用PostFile模式。

以下是java伪代码，仅表达意图，并非最优代码，注释内shell命令可以辅助验证。

```java
final TreeMap<String, Object> queryString = new TreeMap<>();
queryString.put("query", "string"); // 普通参数
queryString.put("null", null); // 忽略null

final String para = queryString
        .entrySet().stream()
        .filter(e -> e.getValue() != null)
        .map(e -> e.getKey() + '=' + e.getValue())
        .reduce((s1, s2) -> s1 + '&' + s2)
        .orElse("");
// 字典序，忽略null
assertEquals("query=string", para);

final String secret = "高密级";
final String body = "{\"try\":\"dofor\"}";
final long timestamp = 1668167709172L; // 时间戳，有则签名

// 直接拼接字符串
final String signData = para + body + secret + timestamp;
assertEquals("query=string{\"try\":\"dofor\"}高密级1668167709172", signData);
// echo -n 'query=string{"try":"dofor"}高密级1668167709172' > trydofor.txt

// MD5 UTF8
final String signMd5 = Md5.sum(signData);
assertEquals("EE048AF1B8AB675654DDB522F6575909", signMd5);
// md5sum trydofor.txt

// SHA1 UTF8
final String signSha1 = MdHelp.sha1.sum(signData);
assertEquals("62FC6660706728022C6B5FF4AAA03D9E8C30F830", signSha1);
// sha1sum trydofor.txt

// HMAC-SHA256 UTF8
final HmacHelp hmac256 = HmacHelp.sha256(secret.getBytes(StandardCharsets.UTF_8));
final String signSha2 = hmac256.sum(signData);
assertEquals("6A5CC747FCEE6999094A331F88D723BA682C5163BBB08D73B97C55E1A45DC372", signSha2);
// hmac256 高密级 trydofor.txt
```

## 4F.2.PostFile模式

上传文件的场景，使用`multipart/form-data`，即表单提交文件的方式。
除了没有Json的Body，增加Digest头外，参数的签名和PostJson相同，

* 不含文件 - 仅对文件之外的参数，排序，拼接，签名
* 包含文件 - 以`字段.sum`为key，`文件签名`为value，参与签名
* 应答签名 - 以文件回复时，文件内容的digest，参与签名

因文件内容的签名仅为了其完整性，所以不需要使用Hmac算法，
同时为了避免混淆HMAC-SHA256，内容签名也没有支持Sha256算法。

以下是java伪代码，及演示的shell命令，文件的签名是以二进制读取的

```java
final TreeMap<String, Object> queryString = new TreeMap<>();
queryString.put("query", "string"); // 普通参数
// md5sum trydofor.txt # 假设第1个文件，form的字段为file1
queryString.put("file1.sum", "EE048AF1B8AB675654DDB522F6575909");
// sha1sum trydofor.txt # 假设第2个文件，form的字段为file2
queryString.put("file2.sum", "62FC6660706728022C6B5FF4AAA03D9E8C30F830");
```

当下载文件时，以`application/octet-stream`输出，内容签名为header的signature

* 无签名 - 历史兼容，不需要验证
* MD5签名 - request的签名算法为MD5
* SHA1签名 - request的签名算法为SHA1

一般规则为，存在signature的header时，就进行验签，算法根据长度判断。

## 4F.3.Signature Api

一个Request用以下3个部分用来发送信息，而Response没有QuereyString，

* Header - `key:value`格式，验签参数
* QuereyString - `k=v(&k1=v1)*`格式，业务参数
* Body - 有效载荷，分为Json和File

同时支持PostJson和PostFile模式，便是ApiAuth，其参与者和大概流程如下，

* 服务商 - ApiAuth的提供者，server
* 客户端 - ApiAuth的使用者，client
* client - 服务商生成固定不变的clientId
* secret - 服务商生成或客户端写入clientSecret
* 设置约定 - 确定version及签名算法（自动）

现假设，服务商和客户端的配置如下，

```java
// 服务地址为 https://wings.fessional.pro/api/test.json
String client = "wings-trydofor";
String secret = "高密级";
```

### 发送Json

根据`PostJson模式`中的java伪代码假设，则客户端准备的数据为

```java
final String para = "query=string";
final String body = "{\"try\":\"dofor\"}";
final String signData = para + body + secret + timestamp;
final HmacHelp hmac256 = HmacHelp.sha256(secret.getBytes(StandardCharsets.UTF_8));
final String signature = hmac256.sum(signData);
```
发送http post请求数据如下，

```bash
curl -i -X POST \
   -H "Content-Type:application/json" \
   -H "Auth-Client:wings-trydofor" \
   -H "Auth-Timestamp:1668167709172" \
   -H "Auth-Signature:6A5CC747FCEE6999094A331F88D723BA682C5163BBB08D73B97C55E1A45DC372" \
   -d '{"try":"dofor"}' \
 'https://wings.fessional.pro/api/test.json?query=string'
```

### 接收Json

服务端，大概实现以下方法，收到客户端请求，

```java
// 举例说明，非最优写法
@PostMapping(value = "/api/test.json", consumes = MediaType.APPLICATION_JSON_VALUE)
public ResponseEntity<String> testJsonApi(
    @RequestHeader("Auth-Client") String client,
    @RequestHeader("Auth-Signature") String signature,
    @RequestHeader(value = "Auth-Timestamp", required = false) Long timestamp,
    @RequestParam Map<String, String> para,
    @RequestBody String body
)
```

再进行身份验证和签名验证等，步骤大概如下，

* 获取client身份及secret信息
* 构造signData，timestamp=null时不参与
* 根据signature长度，对signData自动签名
* 验证signature是否正确
* 进行body反序列化，构造业务数据

正常业务结束时，response的步骤如下，

* 业务处理结果，进行json序列化，作为body1
* 用request的方法签名，sign1=sign(body1 + secret + timestamp)
* 设置头 `Content-Type: application/json`
* 设置头 `Auth-Client: ${client}`
* 设置头 `Auth-Signature: ${sign1}`
* 设置头 `Auth-Timestamp: ${timestamp}`，如果有
* response body1
* 客户端收到response，进行验签，及后续业务

### 发送File

```java
// 放入文件名及其内容的签名
queryString.put("file1.sum", "EE048AF1B8AB675654DDB522F6575909"); // 文件签名
assertEquals("file1.sum=EE048AF1B8AB675654DDB522F6575909&query=string", para);

// 没有Body，使用了文件签名代替
final String signData = para + secret + timestamp;
assertEquals("file1.sum=EE048AF1B8AB675654DDB522F6575909&query=string高密级1668167709172", signData);
// echo -n 'file1.sum=EE048AF1B8AB675654DDB522F6575909&query=string高密级1668167709172' > goodman.txt

// HMAC-SHA256 UTF8
final HmacHelp hmac256 = HmacHelp.sha256(secret.getBytes(StandardCharsets.UTF_8));
final String signSha2 = hmac256.sum(signData);
assertEquals("98FC3ADF6CE1DAC02C9C377FF6625B10B98546667A1A8905799CDC2B8EF9B0C2", signSha2);
// hmac256 高密级 goodman.txt
```

发送文件

```bash
curl -i -X POST \
   -H "Content-Type:multipart/form-data" \
   -H "Auth-Client:wings-trydofor" \
   -H "Auth-Timestamp:1668167709172" \
   -H "Auth-Signature:98FC3ADF6CE1DAC02C9C377FF6625B10B98546667A1A8905799CDC2B8EF9B0C2" \
   -F "file1=@\"./trydofor.txt\";type=text/plain;filename=\"trydofor.txt\"" \
 'https://wings.fessional.pro/api/test.json?query=string&file1.sum=EE048AF1B8AB675654DDB522F6575909'
```

### 接受File

服务器端接受MULTIPART_FORM_DATA_VALUE，并通过file接收文件，para接收签名。

```java
// 举例说明，非最优写法
@PostMapping(value = "/api/test.json", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
public ResponseEntity<String> testFileApi(
    @RequestHeader("Auth-Client") String client,
    @RequestHeader("Auth-Signature") String signature,
    @RequestHeader(value = "Auth-Timestamp", required = false) Long timestamp,
    @RequestParam Map<String, String> para,
    @RequestParam Map<String, MultipartFile> file //注意此处
)
```

构造签名验证时，除了增加以下文件验签部分，和Json部分一样，

* 以file中的key，构造`${key}.sum`到param中查找签名
* 若存在签名，验证file中的MultipartFile内容，错误则403

response文件时，不对body直接签名，增加以下步骤外，和Json部分一样。

* 业务侧返回文件，记作bytes
* 若请求中有文件签名，则以相同算法对bytes签名，记作digest
* 用request的方法签名，sign1=sign(digest + secret + timestamp)
* 设置头 `Content-Type: application/octet-stream`
* 设置头 `Content-Disposition: attachment; filename="filename.jpg"`
* 设置头 `Auth-Digest: ${digest}`
* 客户端收到文件是，先验签digest，再验签Signature，及后续业务

## 4F.4.OAuth Api

若不希望以client作为身份标识的时候，可以使用OAuth的AccessToken代替，

假设client的id为`wings-trydofor`，AccesssToken为`win-access-token`，
原`Auth-Client:wings-trydofor`变为`Auth-Client:win-access-token`

### OAuth功能

在WarlockShadow中，以Ticket模拟了OAuth的授权码模式，默认开启，但不能使用。

* SimpleOauthController - 发行及回收ticket
* wings.warlock.urlmap.oauth-# - url配置
* wings-warlock-ticket-77.properties - ticket属性设置
* spring.wings.warlock.enabled.controller-oauth - 模块开关

使用此功能，需要手动自定client配置，或自行实现其他加载机制，如数据库。

### 获取Token

同OAuth的AuthorizationCode，首先获取code，然后获取token。

```bash
curl -X 'GET' \
'http://127.0.0.1:8084/oauth/authorize'\
'?client_id=wings-trydofor'\
'&state=random-state' \
-H 'accept: application/json'
```

取得code，并在有效期内，换取token

```json
{
  "code": "win-1668319076-2.bYSYPc_WnsGgfQ8yet24WQ.vudkIaJMn70sd_noTLNwWnQ4y9k",
  "state": "random-state",
  "expires_in": 60
}
```

使用上一步的code

```bash
curl -X 'POST' \
'http://127.0.0.1:8084/oauth/access-token'\
'?client_id=wings-trydofor'\
'&client_secret=wings-trydofor-secret'\
'&code=win-1668319076-2.bYSYPc_WnsGgfQ8yet24WQ.vudkIaJMn70sd_noTLNwWnQ4y9k' \
-H 'accept: application/json'
```

得到access_token，可以在有效期内获取新token，注意没有refresh_token

```json
{
  "access_token": "win-1668315293-1.0PlxZv8st-msI0UOvXYj7w.aU5orGbDmRrZlVauWsDam4rXBPg",
  "scope": "",
  "expires_in": 3600
}
```

### 吊销Token

revoke任意token，会使改账号下所有小于当前序号的token失效。

```bash
curl -X 'POST' \
'http://127.0.0.1:8084/oauth/revoke-token'\
'?client_id=wings-trydofor'\
'&code=win-1668322635-1.0PlxZv8st-msI0UOvXYj7w.SHKXS5j8huvTrMOYa3_eeeyx0yU' \
-H 'accept: application/json'

# {"access_token":"","scope":"","expires_in":0}
```
