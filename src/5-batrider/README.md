---
isOriginal: true
icon: screwdriver-wrench
category:
  - Batrider
  - Home
---

# 5.Batrider

![batrider](/batrider_icon.png)

> Once he takes to the skies, Batrider can strike from any direction.

ServiceComb, a lightweight but full-stack microservice solution.

## 5.1.Module Project

* batrider - servicecomb basic setting
* batrider-zero - registry-zero-config
* batrider-test - testing utility (rest and rpc)

## 5.2.Microservice Convention

* communication model, `RestOverServlet` when coexisting with SpringMvc
* Programming model, `SpringMvc` for providers and `Rpc` for consumers
* Authentication, as public-private key `handler-publickey-auth`
* rest.urlPattern is `/servcomber/*`
* Contract as pure `interface` with a `Contract` suffix (opposed to `Service`)
* Provider with a suffix of `Contractor` (vs. `Controller`) and a package of `contractor`
* Consumer, with the `Contract` suffix for the interface and injected fields
* default `registry-zero-config`, recommended `servicecomb-service-center`
* No external gateway by default, coexists with springMvc
* Asynchronous is only implemented on the consumer side, providers are synchronous by default

## 5.3.Basic Demo Project

start the `winx-api` and `batrider-test` projects, and then visit swagger

* <http://localhost:8085/swagger-ui/index.html#/batrider-controller> - swagger page
* /batrider/batx-hello-pxy - access batrider service by Invoker
* /batrider/winx-hello-cse - access winx service by Rest's cse
* /batrider/winx-hello-rpc - access winx service by Rpc
