---
isOriginal: true
icon: puzzle-piece
category:
  - Warlock
  - Security
---

# 4F.Open Api

Unlike user login (BindAuth), open Api is limited function, non-SecurityFilter system.

* BindAuth - Based on Filter and Cookie, it is the traditional Broswer-Server model, or BS for short
* ApiAuth - Based on Token and Signature, it is the external Server-Server model, or SS for short
* ServiceComb - internal ServerServer microservices and cloud model

After successful authentication (authn), full authorization (authz) is not performed,
Session is not written, and login logs are not recorded. BindAuth has full SecurityContext,
while ApiAuth has only TerminalContext.

ApiAuth model is bidirection, the response uses the same convention as the request reply, including,

* client - like the usename, also known as clientId, appId, accessKey
* secret - like the password, also known as clientSecret, appKey, accessSecret
* timestamp - the response uses the timestamp of the request, if not in the request, the response uses the current timestamp
* signature - the response uses the same algorithm as the request, based on the length
* digest - file digest, used when exchanging files
* secret - user set, exists in clear text, used for signing

A Request uses the following 3 parts to send a message, while a Response does not have a QuereyString

* Signature parameter - `key:value` format, getHeader to get it
* Business parameters - `k=v(&k1=v1)*` format, getParameterMap to get
* Business Body - getInputStream() to get Json, getParts to get File

As for the StatusCode of the response, it should return 200, except for the signature verification phase,
and define the error with the business code

* 400 - parameter parsing error, such as QueryString has unencoded json
* 401 - in case of client error
* 403 - If the signature verification fails, you can use the body to return the error details
* 200 - only indicates the success of the response, and the business result is defined by the business code in the body

## 4F.1.PostJson Model

By design, BS and SS are different in terms of service objects, request frequency, security level,
and functional granularity, and should not be mixed. API uses HTTP POST to send JSON data with a
tamper-proof signature, called `PostJson`. This approach is actually standard in domestic APIs, see the
[security specification - signature algorithm](https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=4_3)
of WeChat payments, with the following key point.

* key - sorted from small to large by ASCII code (dictionary order), ie. TreeMap
* value - use the original value, no UrlEncode, to avoid encoding differences
* null - not involved in the signature, but empty string does
* utf8 - data are encoded in UTF8, get bytes signature in UTF8

The signature data is, `param` + `body` + `secret` + `timestamp`

* param - business parameter `k=v(&k1=v1)*` format
* body - business body, json format
* secret - the client's password, don't leak it!
* timestamp - involved in the signature if available

Note that if param is involved in the signature, use its original value, not its  UrlEncode.
But as a QueryString request, UrlEncode is required, otherwise there will be 400 errors.

The signature verification parameters, all passed through the header, include four

* client - client identity, not involved in the signature. Customizable, eg. `Auth-Client`.
* signature - message signature, not involved in signing, case-insensitive. Customizable, e.g. `Auth-Signature`.
* timestamp - If available, also involved in signing. Customizable, e.g. `Auth-Timestamp`.
* digest - The body digest, used only for file downloads. Customizable, e.g. `Auth-Digest`

Regarding signature algorithms, the following 3 are supported, and are automatically adapted
according to the signature length,

* MD5 - digest (fingerprint) algorithm, historically compatible, 128bit, Hex length 32
* SHA1 - digest (fingerprint) algorithm, history-compatible, 160bit, Hex length 40
* HMAC-SHA256 - secure signature algorithm, 256bit, Hex length 64

When the response is Json, it uses the same algorithm and method as request, or if it is a file download,
it uses PostFile mode.

The following is java pseudo code, only to express the intent, not the optimal code,
shell commands in the comments can help with verification.

```java
final TreeMap<String, Object> queryString = new TreeMap<>();
queryString.put("query", "string"); // normal para
queryString.put("null", null); // ignore null

final String para = queryString
        .entrySet().stream()
        .filter(e -> e.getValue() != null)
        .map(e -> e.getKey() + '=' + e.getValue())
        .reduce((s1, s2) -> s1 + '&' + s2)
        .orElse("");
// Dictionary order, ignore null
assertEquals("query=string", para);

final String secret = "高密级";
final String body = "{\"try\":\"dofor\"}";
final long timestamp = 1668167709172L; // Timestamp, signed if available

// concat string
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

## 4F.2.PostFile Model

Upload the file using `multipart/form-data` and submit the file using the `field` of the form.
The signature of the parameters is the same as PostJson, except that there is no Json Body and
the Digest header.

* without file - just sort, concat and sign the parameters except the file
* with file - submit with `field.sum`=`file fingerprint` as parameter, involved in signature
* Response signature - file fingerprint (digest) when replying with a file, involved in signature

Since the fingerprint of the file is only for its content completeness, only the Digest algorithm
is needed, not the Hmac algorithm. Also to avoid confusion with HMAC-SHA256, the content fingerprint
does not support the Sha256 algorithm.

It can be seen that in ApiAuth, the file is optional as an attachment to the message.
Hmac in order to verify the identity, while Digest is only for completeness.
Also considering that files are generally large in size, so Digest also automatically skip
fingerprint and verification for files that exceed the specified size.

Here is the java pseudo-code, and the demo shell command, where the fingerprint of the file is read in binary

```java
final TreeMap<String, Object> queryString = new TreeMap<>();
queryString.put("query", "string"); // normal para
// md5sum trydofor.txt # suppose the 1st file, the field of form is file1
queryString.put("file1.sum", "EE048AF1B8AB675654DDB522F6575909");
// sha1sum trydofor.txt # suppose the 2nd file, the field of form is file2
queryString.put("file2.sum", "62FC6660706728022C6B5FF4AAA03D9E8C30F830");
```

When downloading files, response as `application/octet-stream`, content signed in header signature

* No signature - history compatible, no verification required
* MD5 signature - the request is MD5 signature
* SHA1 signature - the request is SHA1 signature

The general rule is that the signature is verified when the header of the signature exists,
and the algorithm is chosen according to the length.

## 4F.3.Signature Api

ApiAuth supports both PostJson and PostFile models, has the following participants and approximate process

* service provider - the provider of ApiAuth
* client side - the user of ApiAuth
* client - a fixed clientId generated by the service provider
* secret - service provider generates or client writes clientSecret

Now assume that the service provider and client side are configured as follows.

```java
// server https://wings.fessional.pro/api/test.json
String client = "wings-trydofor";
String secret = "高密级";
```

### 3a.Post Json

According to the java pseudo-code assumptions in the `PostJson` model,
then the data prepared by the client side is,

```java
final String para = "query=string";
final String body = "{\"try\":\"dofor\"}";
final String signData = para + body + secret + timestamp;
final HmacHelp hmac256 = HmacHelp.sha256(secret.getBytes(StandardCharsets.UTF_8));
final String signature = hmac256.sum(signData);
```
http post data as follows,

```bash
curl -i -X POST \
   -H "Content-Type:application/json" \
   -H "Auth-Client:wings-trydofor" \
   -H "Auth-Timestamp:1668167709172" \
   -H "Auth-Signature:6A5CC747FCEE6999094A331F88D723BA682C5163BBB08D73B97C55E1A45DC372" \
   -d '{"try":"dofor"}' \
 'https://wings.fessional.pro/api/test.json?query=string'
```

### 3b.Receive Json

The server side, presumably have the following method to receive the client request,

```java
// example only, non-optimal
@PostMapping(value = "/api/test.json", consumes = MediaType.APPLICATION_JSON_VALUE)
public ResponseEntity<String> testJsonApi(
    @RequestHeader("Auth-Client") String client,
    @RequestHeader("Auth-Signature") String signature,
    @RequestHeader(value = "Auth-Timestamp", required = false) Long timestamp,
    @RequestParam Map<String, String> para,
    @RequestBody String body
)
```

Then perform authentication, fingerprinting, signature verification, etc., the steps are roughly as follows

* Get client identity and secret information
* Construct the signatureData, timestamp=null is not involved
* Automatically sign the signatureData according to the length of the signature.
* Verify that the signature is correct.
* Perform body deserialization and construct business data

At the end of normal business, the steps of response are as follows.

* business processing result, json serialization, as body1
* Sign with the method of request, sign1 = sign(body1 + secret + timestamp)
* Set the header `Content-Type: application/json`
* Set header `Auth-Client: ${client}`
* Set header `Auth-Signature: ${sign1}`
* Set the header `Auth-Timestamp: ${timestamp}`, if any
* response body1
* The client receives the response, verifies the signature, and subsequent operations

### 3c.Post File

```java
// put the file name and its contents fingerprint
queryString.put("file1.sum", "EE048AF1B8AB675654DDB522F6575909"); // fingerprint
assertEquals("file1.sum=EE048AF1B8AB675654DDB522F6575909&query=string", para);

// no Body, use file fingerprint instead
final String signData = para + secret + timestamp;
assertEquals("file1.sum=EE048AF1B8AB675654DDB522F6575909&query=string高密级1668167709172", signData);
// echo -n 'file1.sum=EE048AF1B8AB675654DDB522F6575909&query=string高密级1668167709172' > goodman.txt

// HMAC-SHA256 UTF8
final HmacHelp hmac256 = HmacHelp.sha256(secret.getBytes(StandardCharsets.UTF_8));
final String signSha2 = hmac256.sum(signData);
assertEquals("98FC3ADF6CE1DAC02C9C377FF6625B10B98546667A1A8905799CDC2B8EF9B0C2", signSha2);
// hmac256 高密级 goodman.txt
```

post file

```bash
curl -i -X POST \
   -H "Content-Type:multipart/form-data" \
   -H "Auth-Client:wings-trydofor" \
   -H "Auth-Timestamp:1668167709172" \
   -H "Auth-Signature:98FC3ADF6CE1DAC02C9C377FF6625B10B98546667A1A8905799CDC2B8EF9B0C2" \
   -F "file1=@\"./trydofor.txt\";type=text/plain;filename=\"trydofor.txt\"" \
 'https://wings.fessional.pro/api/test.json?query=string&file1.sum=EE048AF1B8AB675654DDB522F6575909'
```

* Kv business parameters, flattened to Form fields submitted and involved in the signature
* Multiple files have multiple File fields, one-to-one and unique, such as `file1..n`
* Json business body, submitted as `FILE_JSON_BODY`, can do fingerprinting of the content
* Simultaneous submission of multiple files, also send Json case, that is, combined with the above 2

### 3d.Receive File

The server side accepts `multipart/form-data` and receives the file via `file` and the fingerprint via `param`.

```java
// example only, non-optimal
@PostMapping(value = "/api/test.json", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
public ResponseEntity<String> testFileApi(
    @RequestHeader("Auth-Client") String client,
    @RequestHeader("Auth-Signature") String signature,
    @RequestHeader(value = "Auth-Timestamp", required = false) Long timestamp,
    @RequestParam Map<String, String> para,
    @RequestParam Map<String, MultipartFile> file // Notice here
)
```

When constructing the signature verification, it is the same as the Json part,
except that the following file verification part is added

* Take the key in `file`, construct `${key}.sum` to find the fingerprint in `param`
* If the fingerprint exists, verify the content of the MultipartFile in the `file`, and 403 for errors.

Response file, do not sign the body directly, except adding the following steps, the Json part are the same.

* The business side returns the file, noted as bytes, and fingerprints it, noted as digest.
* If it is a File request and has a file fingerprint, the same fingerprinting algorithm is used
* If it is a Json request and has json `Auth-Digest`, then the same fingerprint algorithm is used
* no digest for oversize, and no fingerprint when there is no fingerprint in the request
* sign with method from request, sign1 = sign(digest + secret + timestamp)
* Set the header `Content-Type: application/octet-stream`
* Set header `Content-Disposition: attachment; filename="filename.jpg"`
* Set header `Auth-Digest: ${digest}`
* The client receives the file and checks the digest first, then the Signature, and subsequent operations

`Auth-Digest` must be the fingerprint of the business body (requested Json or response file), sometimes it can be omitted

* JsonJson - can be omitted, as the signature already includes Json verification
* JsonFile - if the fingerprint is required for the response, the request has to set the fingerprint on the Json
* FileFile - the fingerprint of the request is in the Param of `*.sum`, set on demand when response
* FileJson - the fingerprint of the request is in the Param of `*.sum`, not required on response

## 4F.4.OAuth Api

If you don't want to use client as the identity, you can use OAuth's AccessToken instead.

Suppose the client's id is `wings-trydofor` and the AccessToken is `win-access-token`.
the original `Auth-Client:wings-trydofor` becomes `Auth-Client:win-access-token`

### 4a.OAuth functionality

In WarlockShadow, the authorization code mode of OAuth is simulated with Ticket,
which is enabled by default but not available.

* SimpleOauthController - issue and revoke tickets
* wings.warlock.urlmap.oauth-# - url configuration
* wings-warlock-ticket-77.properties - ticket property settings
* wings.enabled.warlock.mvc-oauth - module switch

To use this feature, you need to manually customize the client configuration or
implement your own loader, such as a database.

### 4b.Get Token

Support OAuth authorization_code and client_credentials type, automatically switching according to
the presence or absence of the `code` parameter.

* authorization_code - client uses other user's resources
* client_credentials - client uses its own resources, Api recommended

#### authorization_code

```bash
curl -X 'GET' \
'http://127.0.0.1:8084/oauth/authorize'\
'?client_id=wings-trydofor'\
'&state=random-state' \
-H 'accept: application/json'
```

Get the code, and within the validity period, exchange for token. here only test function,
get default authorization, normal business, need user to confirm on  authorization page.

```json
{
  "code": "win-1668319076-2.bYSYPc_WnsGgfQ8yet24WQ.vudkIaJMn70sd_noTLNwWnQ4y9k",
  "state": "random-state",
  "expires_in": 60
}
```

#### Subsequent of client_credentials or code

Use the code from the previous step, if no code (no or empty value) equals client_credentials type.

```bash
curl -X 'POST' \
'http://127.0.0.1:8084/oauth/access-token'\
'?client_id=wings-trydofor'\
'&client_secret=wings-trydofor-secret'\
'&code=win-1668319076-2.bYSYPc_WnsGgfQ8yet24WQ.vudkIaJMn70sd_noTLNwWnQ4y9k' \
-H 'accept: application/json'
```

Get access_token, you can get a new token within the validity period, note that there is no refresh_token

```json
{
  "access_token": "win-1668315293-1.0PlxZv8st-msI0UOvXYj7w.aU5orGbDmRrZlVauWsDam4rXBPg",
  "scope": "",
  "expires_in": 3600
}
```

### 4c.Revoke Token

Revoke any token will invalidate all tokens that are smaller than the current serial number under that account.

```bash
curl -X 'POST' \
'http://127.0.0.1:8084/oauth/revoke-token'\
'?client_id=wings-trydofor'\
'&code=win-1668322635-1.0PlxZv8st-msI0UOvXYj7w.SHKXS5j8huvTrMOYa3_eeeyx0yU' \
-H 'accept: application/json'

# {"access_token":"","scope":"","expires_in":0}
```

## 4F.5.OkHttpClient

If the 3rd Api does not have SDK and needs Http calls, it is recommended to use OkHttp,
and Wings also made the following utility.

* OkHttpClientHelper - can get the Wings configured HttpClient and helper methods
* OkHttpTokenClient - automatically complete the Header-based Token authentication
* OkHttpTokenizeLogin - Token validation for traditional Form login
* OkHttpTokenizeOauth - Token authentication for OAuth2
* OkHttpRedirectNopInterceptor - Whether to temporarily not follow when follow redirects

## 4F.6.Wings Impl

Wings simply implements the server side of the API, see the following code and comments.

```java
@RestController
@Slf4j
public class TestToyApiController extends AbstractApiAuthController {

  // add Controller Annotations, eg. `@RequestMapping`
  @Override
  @PostMapping(ApiSimple)
  public void requestMapping(@NotNull HttpServletRequest request, @NotNull HttpServletResponse response) {
    log.info("ApiRequestMapping...");
    super.requestMapping(request, response);
  }

  // handle business logic and return the result
  @Override
  public boolean handle(@NotNull HttpServletRequest request, @NotNull ApiEntity entity) throws IOException {
    // biz logic to handle entity
    return true;
  }
}
```
