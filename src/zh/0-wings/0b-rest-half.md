---
isOriginal: true
icon: brush
category:
  - 神翼
  - 规范
---

# 0B.RestHalf规范

场景化业务的URL命名规范，参考了RESTFul和GraphQL，适用于无法资源化的业务，故取名叫`RestHalf`。

## 0B.1.业务场景化

在`RestHalf`实践中，业务的复杂性主要来自于 ①业务自身在演化 ②人员认知在涌现。

* 做着做着，东西就变了，从轮子做到了自行车，这是演化
* 写着写着，思路清晰了，从摸象到最后摸全了，这是涌现

在技术领域，没有银弹。wings实践注重场景化，任一方案都必须在具体场景中讨论。

* RESTFul的不够用在于其简单，而资源仅是业务的参与者之一
* GraphQL的不好用在于其万能，问题尚未分解，只是多一种QL

对于复杂的东西，唯有分解，对于变化的东西，唯有适应。
所谓场景化，就是把变化切片，固定上下文和寻找确定性，通常从以下方面入手。

* 资源 - 数据流，任何资源都有唯一id，即便是从属关系
* 事件 - 业务流，事件触发数据的产生，变化和消失
* 功能 - 场景框，输入了什么，输出了什么，限定了界限

场景化应遵循以下原则，以便容易跟上变化，容易分解和理解。

* 能简单，就不要复杂。不要创造概念，持续奥卡姆"剃头"
* 能强关联，就不要弱关联。多路径时使用关键/强路径
* 能明示，就不要暗示。限定边界/输入/输出/异常

## 0B.2.请求能POST，就别GET

除了资源类型，及特定场景用GET外，全部使用POST

* 无POST环境的，如邮件中的下载 `/label/res-id-{tk}.pdf`
* 约定重定向的，如SSO/OAuth登录，需要多次302
* 静态资源，如图片，样式等。

此外，因GET请求全部信息都在URL中（cookie外），可被历史及缓存，
所以，任何敏感的请求，都必须有token防护，如次数，期限，权限等。

抽象化及资源化，容易有歧义，且与场景化原则略有冲突，因此建议全POST。

## 0B.3.传参能Head/Body，就别path/query

考虑到网关/切面处理，排错分析等，保持path及query参数简洁。

* path参数，最好没有或只有1个，超过1个时，需要考虑必要性
* query string，应仅限功能参数，如分页及简单搜索
* 业务参数，应封装在Http body中，如Json
* 会话参数，应封装在Http Header中，如Token

一个参数的Post请求，推荐直接传递。server端常见类型举例，

* Boolean:boolean - `true`
* Long/Integer:number/string - `123` / `"123"`
* BigDecimal/Double/Float:string - `"3.14159"`
* String:string - `"string"`
* LocalDateTime:string - `"2023-04-05 06:07:08"`
* ZonedDateTime:string - `"2023-04-05 06:07:08 Asia/Shanghai"`
* OffsetDateTime:string - `"2023-04-05 06:07:08 +08:00"`
* LogLevel.TRACE:string - `"TRACE"`

其中的boolean和number，输入时可接受字符串形式（带双引号）

* bool 布尔 - 输入 `"true"`/`true`, 输出 `true`
* number 整型 - 输入 `"123"`/`123`, 输出 `123`/`"123"` (溢出)
* number 浮点型 - 输入 `"3.14"`/`3.14`, 输出 `"3.14"` (精度)

client端的常见类型举例，

* JSON.stringify("string") - `"string"`
* JSON.stringify(123) - `123`
* JSON.stringify(true) - `true`
* JSON.stringify({str:"string",dec:123,bol:true}) - `{"str":"string","dec":123,"bol":true}`

## 0B.4.网址要明确身份，有前缀和后缀

场景化中，每个URL都是具体的角色，有其家族和职业。

* 前缀如，业务类别`admin`，版本号`v1`等
* 后缀如，应答内容扩展名`.pdf`
* 从后往前做时，建议与项目分包一致
* 从前往后做时，建议与页面功能一致

## 0B.5.请求数据叫Body，应答数据叫Data

考虑到类型自动合并，在ts中，使用interface而不是type定义数据类型。
为了标识为网络请求和应答，采用`Api`前置和`Body`和`Data`后缀，

* Request - interface ApiXxxBody
* Response - interface ApiXxxData

在Response时，业务Data由三个层级的状态表示，

* 网络层的status - 网络请求是否成功
* 业务层的errors - 是否因error终止（一定没有data）
* 业务层的success - 业务结果是否成功（可能存在data）

在网络层，以下http状态外，视为Error，由errorHandler统一处理，

* 200 - 网络请求成功
* 301,302 - 自动跟随

业务层的结果，为便于说明，约定以下数据结构表示，

```ts
interface I18nMessage {
  message?: string; // 默认多国语信息或模板
  i18nCode?: string; // 多国语模板代码
  i18nArgs?: unknown[]; //多国语模板参数
}

interface I18nNotice extends I18nMessage {
  type: string; // 消息类型, 'Validation', 'IllegalArgument'
  target?: string; // 输入项名字, 'city', 'tab1.zipcode'
}

interface ActionResult {
  success: boolean; // 是否成功，默认false
  code?: string; // 给调用者的业务码或错误码，空时应该设置null
}

interface ErrorResult extends ActionResult, I18nMessage {
  errors: I18nNotice[]; //  导致业务失败的错误，空时应该设置null
}

interface DataResult<T> extends ActionResult, I18nMessage {
  data?: T; // 给调用者的业务数据
}

type ApiResult<T=unknown> = DataResult<T> | ErrorResult;

class ApiResultError extends Error {
  public falseResult: DataResult | undefined | null;
  public errorResult: ErrorResult | undefined | null;
  // constructor(result: ApiResult) ....
}
```

这里用ApiResult表示应答数据，根据是否存在`errors`分为两种，

* `ErrorResult` 有 `errors` -  服务异常终止，未完成。
  - `success` - 必须为 `false`
  - 若有 `message` - 应该是第一个错误的 `message`
  - 若有 `code` - 错误代码，用来明确详细错误。
* `DataResult` 没有 `errors` - 服务正常结束，已完成。
  - `success` - 可以是 `true` 或 `false`
  - 若有 `message` -  为使用者提供更多信息。
  - 若有 `code` - 业务代码，用来明确详细数据。
  - 若有 `data` - 业务数据，不过`success`与否。

当简单`message`或`code`不能满足复杂业务时，应该在`data`中包含他们，比如，

* 多条业务消息，需要分步，或非常规处理
* 多个业务代码，需要执行不同的业务逻辑

综合以上，在前端处理应答的流程应该为，

* 统一的fetchApi，拦截response，解析ApiResult并处理
  - 当存在`errors`时，throw `ApiResultError(errorResult)`
  - 当`success=false`时，throw `ApiResultError(falseResult)`
  - 当存在`message`时，默认emit全局的i18n消息
  - 存在`options`，可**事前**处理以上行为
* 统一的errorHandler，在**事后**处理`ApiResultError`
* 正常的业务代码，`try fetchApi(body,opts)`
* 一定是`success=true`，进行`data`正常的业务逻辑
* 若自行处理`ApiResultError`，若catch, 不能处理的throw
* 中断业务逻辑，可以throw error，交给 errorHandler 统一处理

```ts
try {
  const dataResult = fetchLoginApi(loginBody);
  // 正常的业务逻辑
}
catch (err) {
  // 抛给全局errorHandler处理
  if (!(err instanceof ApiResultError)) throw err;

  if (err.errorResult != null) {
    // 处理 errors
  }
  else {
    // 处理 success=false
  }
}
```
