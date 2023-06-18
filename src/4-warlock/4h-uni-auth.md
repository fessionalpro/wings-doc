---
isOriginal: true
icon: debug
category:
  - Warlock
  - Security
---

# 4H.Union Login

Association login in wings app union. A user logged in App1 can auto login other apps of the union by App1's session.

## Login Process

Suppose there are 2 apps, App1 and App2, in the wings union, when the user logins App1 and gets TK1,
User can login App2 automatically by TK1, and then App1 and App2 session are bound as follows,

* User logins App1 and gets TK1 with authType(TP) and SessionId(ID) information
* User accesses App2 using TK1, it happens that
  - When logined App2 and TK2 is available, TK1 is bound directly
  - App2 is not logined, App1 auto login, gets TK2 and binds TK1
* If you log out on any App#, TK1 and TK2 are destroyed on App# respectively.

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
    App1 -->> -App2: bind TK1 and TK2, retrun ok
else no login
    App2 ->> +App1: TK1 ok ?
    App1 ->> +App2: login App2 with TP
    App2 -->>-App1: bind TK1 and TK2, retrun TK2
    App1 -->>-App2: bind TK1 and TK2, retrun ok
end

App2 -->> -User: return ok with TK1

User ->> +App2: logout
App2 ->> App1: logout
App2 -->> -User: ok
```
