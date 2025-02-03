---
isOriginal: true
icon: brush
category:
  - WingsGod
  - Standard
---

# 0B.RestHalf Spec

The URL naming specification of the scenario-based business, referring to RESTFul and GraphQL,
is applicable to the business that cannot be resourced, so it is named `RestHalf`.

## 0B.1.Scenarioizing Business

In the `RestHalf` practice, the complexity of the business comes from
① the business itself is evolving ② people's perceptions are emerging.

* As you keep doing, things change, from making a wheel to a bicycle, this is evolution.
* As you keep coding, ideas get clearer, from groping in the dark to
  finally understanding everything, this is emergence.

There is no silver bullet in technology. The Wings methodology emphasizes contextualization,
and each solution must be discussed in the context of a specific scenario.

* RESTFul is not enough because it is too standard, and resources are only one of the participants in the business.
* GraphQL is too enough because it is a jack of all trades, the problem is still there, it is just another QL.

For complexity, the only way is to breakdown, and for change, the only way is to adapt.
By scenarioizing, we mean slicing and dicing change, fixing context and finding certainty,
usually starting with the following.

* Resources - data flow, any resource has a unique id, even if it is affiliation
* Events - business flow, event drives data to be created, change and disappear
* Functions - scenario boxes, what is input, what is output, boundaries

The scenario should follow the following principles so that it is easy to keep up with
changes and easy to break down and understand

* Don't be complex when it can be simple. Don't create concepts, always use Occam's Razor.
* Don't use weak connections when there are strong ones. Use critical/strong path when there are multiple paths
* Don't imply when you can make it explicit. Define boundaries/inputs/outputs/exceptions.

## 0B.2.No GET if Request Can Post

All POST except for resource types and GET for special scenarios.

* No POST, such as download in email `/label/res-id-{tk}.pdf`
* Contracted redirects, such as SSO/OAuth logins that require 302
* Static resources, such as images, styles, etc.

In addition, since the GET request all information is in the URL (except cookie), can be history and cached.
Therefore, any sensitive requests, must have token protection, such as the number of times, duration, permissions, etc.

Abstraction and resourcing, easy ambiguity, and easy conflict with the principle of scenario,
so it is recommended that all POST.

## 0B.3.No path/query if Params Can Head/Body

Keep path and query parameters simple considering gateway/aspect processing, error analysis, etc.

* path parameters, preferably no or only 1, more than 1, need to consider the necessity
* query string, should be limited to functional parameters, such as paging and basic search
* business parameters, should be encapsulated in the http body, such as json
* session parameters, should be encapsulated in the http header, such as token

POST with single parameter is recommended to post data directly, eg. common types in server,

* Boolean:boolean - `true`
* Long/Integer:number/string - `123`/`"123"`
* BigDecimal/Double/Float:string - `"3.14159"`
* String:string - `"string"`
* LocalDateTime:string - `"2023-04-05 06:07:08"`
* ZonedDateTime:string - `"2023-04-05 06:07:08 Asia/Shanghai"`
* OffsetDateTime:string - `"2023-04-05 06:07:08 +08:00"`
* LogLevel.TRACE:string - `"TRACE"`

where boolean and number, the input accepts string form (with double quotes)

* bool - input `"true"`/`true`, output `true`
* number int - input `"123"`/`123`, output `123`/`"123"` (overflow)
* number float - input `"3.14"`/`3.14`, output `"3.14"` (precision)

eg. common types in client,

* JSON.stringify("string") - `"string"`
* JSON.stringify(123) - `123`
* JSON.stringify(true) - `true`
* JSON.stringify({str:"string",dec:123,bol:true}) - `{"str":"string","dec":123,"bol":true}`

## 0B.4.Prefix and Suffix Identity URLs

In the scenario, each URL is a specific role, with its family and profession.

* Prefix such as, business `admin`, version `v1`, etc.
* Suffix such as, response content extension `.pdf`
* When from backend to frontend, consistent with the project package
* When from frontend to backend, consistent with the page feature

## 0B.5.RequestData as Body, ResponseData as Data

Considering the type merging of ts, use interface instead of type to define
data structures, and prefix the network request/response with `Api`,
suffix with `Body` and `Data`,

* Request - interface ApiXxxBody
* Response - interface ApiXxxData

For responses, biz-data is represented with 3 layers of status,

* net-layer (status) - whether the request is successful
* biz-layer (errors) - whether the biz has failed due to errors (no data)
* biz-layer (success) - whether the biz result is successful (possible with data)

At the net-layer, any HTTP status other than the following is treated as an error
and will be handled by a unified errorHandler,

* 200 - network request successful
* 301, 302 - automatically followed

At the biz-layer, the result structures are represented as follows,

```ts
interface I18nMessage {
  message?: string; // default i18n message or template
  i18nCode?: string; // i18n template code
  i18nArgs?: unknown[]; // i18n template args
}

interface I18nNotice extends I18nMessage {
  type: string; // message type, 'Validation', 'IllegalArgument'
  target?: string; // target input name, 'city', 'tab1.zipcode'
}

interface ActionResult {
  success: boolean; // whether the result is success, default false.
  code?: string; // biz-code/err-code to the caller, should be null if empty
}

interface ErrorResult extends ActionResult, I18nMessage {
  errors: I18nNotice[]; //  errors cause success to be false, should be null if empty.
}

interface DataResult<T> extends ActionResult, I18nMessage {
  data?: T; // biz-data to the caller
}

type ApiResult<T=unknown> = DataResult<T> | ErrorResult;

class ApiResultError extends Error {
  public falseResult: DataResult | undefined | null;
  public errorResult: ErrorResult | undefined | null;
  // constructor(result: ApiResult) ....
}
```

The `ApiResult` is used to represent the response data, which is divided into 2 types according to `errors`.

* `ErrorResult` with `errors` -  the service is abnormal and incomplete.
  - `success` - must be `false`.
  - if has `message` - should be the 1st error message.
  - if has `code` - the err-code to clarify the detailed error.
* `DataResult` without `errors` - the service is normal and complete.
  - `success` - can be `true` or `false`.
  - if has `message` -  give more information to the user.
  - if has `code` - the biz-code to clarify the detailed data.
  - if has `data` - the biz-data to the user, regardless of `success`.

When a simple `message` or `code` cannot satisfy complex business, they should be
included in `data`, for example.

* multiple biz messages that require step-by-step, or non-routine processing
* multiple biz codes that need to execute different business logic

Combining the above, the front-end response handling should be, for example,

* unified fetchApi, intercept the response, parse and process the ApiResult,
  - When there are `errors`, throw `ApiResultError(errorResult)
  - when `success=false`, throw `ApiResultError(falseResult)`
  - When `message` is present, emit global i18n messages by default
  - use `options` to **pre** handle the above processes
* unified errorHandler, catch `ApiResultError` globally **post** handle it
* the normal biz code, `try fetchApi(body,opts)`
* must be `success=true` for `data` normal business logic
* catch `ApiResultError` if handle by yourself, throw if you can't
* to interrupt business logic, throw error to the unified errorHandler

```ts
try {
  const dataResult = fetchLoginApi(loginBody);
  // normal biz-logic
}
catch (err) {
  // rethrow to default errorHandlers
  if (!(err instanceof ApiResultError)) throw err;

  if (err.errorResult != null) {
    // handle errors
  }
  else {
    // handle success=false
  }
}
```
