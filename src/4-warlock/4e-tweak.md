---
isOriginal: true
icon: debug
category:
  - 术士
  - 调试
---

# 4E.动态调节

可以在运行时，按全局或线程级别，动态的设置系统时钟，日志级别，异常堆栈。

## 4E.1.实现原理

在SilencerCurse模块中，存在以下结构类似的类，用于全局控制

* TweakClock - 调试时钟
* TweakLogger - 调试日志级别，仅限于Logback
* TweakStack - 调试CodeException的异常堆栈

其原理是，static或ThreadLocal设置参数，按需取得有效值。

## 4E.2.使用方法

设置好AdminTweakController的URL及其权限，避免滥用，造成不良后果。

对于时钟的调试，需要在编码时，需要进行以下替换，

* System.currentTimeMillis - Now.millis()
* java.time.Xxxx.now - Now.xxx()
* 任何需要调试的日期，都应该从Now取值

在Slardar中，通过TerminalIterceptor设置TerminalContext，
此时，通过TweakEventListener及对应的事件，可完成单应用或集群的调试控制。

OkHttpTweakLogInterceptor可以使okhttp日志与TweakLogger联动

而在WarlockShow中，提供了AdminTweakController，可供管理员按用户简单调试。

因系统级全局设置影响较大，Wings中没有提供默认实现。

## 4E.3.注意事项

线程级调试，主要基于TransmittableThreadLocal自动完成，使用时要遵守其约定，
尤其在Wings配置的线程池外，自行启动的线程，需要注意Context复制，避免丢失。

业务中的日期时间，尽量使用Now，其性能损失非常小，却可以为业务代理穿越时间线的能力。
不用轻易调制系统时钟，避免造成事件混乱，甚至启动时检查失败。
