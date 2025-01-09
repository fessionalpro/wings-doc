---
isOriginal: true
icon: bug-slash
category:
  - 术士
  - 安全
---

# 4H.联合登录

在wings应用中实现联合登录。一个在App1中登录的用户，可以通过App1的session，自动登录联合的其他应用。

## 登录流程

假设有2个Wings应用，App1和App2，组成一个联合登录的Union，当用户登录App1获取TK1后，
用户在访问App2时，通过TK1可以在App2自动上完成登录及Session绑定，情况如下，

* User在App1上登录，并获得TK1，含authType(TP)和SessionId(ID)信息
* User使用TK1访问App2时，会发生，
  - App2上已登录，有TK2时，直接绑定TK1
  - App2上未登录，App1自动登录，获取TK2并绑定TK1
* 任意App#上登出，则在App#上分别销毁TK1和TK2

```sequence
%%{init: {'theme': 'base','themeVariables': {
'loopTextColor': '#4abf8a'
}}}%%

autonumber
actor User
participant App1
participant App2

User ->> +App1: login App1
App1 -->> -User: TK1(TP+ID)

User ->> +App2: visit App2 with TK1

alt logined App2
    App2 ->> +App1: TK1 ok ? bind TK2(TP+ID)?
    App1 -->> -App2: bind TK1 and TK2, return ok
else no login
    App2 ->> +App1: TK1 ok ?
    App1 ->> +App2: login App2 with TP
    App2 -->>-App1: bind TK1 and TK2, return TK2
    App1 -->>-App2: bind TK1 and TK2, return ok
end

App2 -->> -User: return ok with TK1

User ->> +App2: logout
App2 ->> App1: logout
App2 -->> -User: ok
```
