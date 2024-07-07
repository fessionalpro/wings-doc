---
isOriginal: true
icon: bug-slash
category:
  - Warlock
  - Tweaking
---

# 4E.Dynamic Tweaking

The system clock, logging level, and exception stack can be set
dynamically at runtime, at global or thread level.

## 4E.1.Underlying Principle

In the SilencerCurse module, the following structurally similar classes for global control,

* TweakClock - tweak clock
* TweakLogger - tweak logging level, limited to Logback
* TweakStack - tweak stack of CodeException

The principle is to set param to static or ThreadLocal to get valid values on demand.

## 4E.2.Usage

Set up the URL of AdminTweakController and its permissions to avoid misuse and unwanted results.

To tweak the clock, the following substitution is required in the code

* System.currentTimeMillis - Now.millis()
* java.time.Xxxx.now - Now.xxx()
* Any date that needs to be debugged should be taken from Now

In Slardar, set the TerminalContext using TerminalIterceptor.
At this point, through the TweakEventListener and its Event, you can tweak of single application or cluster.

OkHttpTweakLogInterceptor can make okhttp log and TweakLogger work together.

And in WarlockShow, AdminTweakController is provided for administrators to easily debug by user.

Due to the large impact of system-level global settings, no default implementation is provided in Wings.

## 4E.3.Caution

Thread-level tweaking is mainly based on TransmittableThreadLocal, so its conventions should be
followed when using it. Especially for threads not from the wings preconfiged thread pool, you need to
pay attention to Context replication to avoid losing them.

Date and time in the business, try to use Now, use a very few performance cost can get the ability to cross timeline.
Try not to tweak the system clock to avoid causing confusion of events or even failure of checks at startup.
