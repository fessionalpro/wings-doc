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
