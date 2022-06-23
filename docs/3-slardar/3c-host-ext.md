---
isOriginal: true
icon: extend
category:
  - 鱼人
  - 套壳
---

# 3C.Host继承和URL重载

基于Mvc特性实现了Host套壳功能。不同于反向代理(nginx)的rewrite，

* extend - 子domain拥有父domain的全部URL
* override - 子domain可以override父domain的URL
* 子domain有自己独立的URL
* domain的继承基于 host

## 3C.1.场景举例

假设`a.com`是一个有完整的功能domain，举例包括以下3个URL

* GET /user-list.json - 基于Controller
* GET /css/main.css - 静态资源
* GET /login.html - 基于Controller

此时，来个加盟商`b.com`，除了皮肤，顶级域名外，都和`a.com`一样。  
再后来，`b.com`有了自己的需求，部分界面和url和`a.com`的需求分叉了。 不同的功能自己实现，放在约定的prefix下，此时URL分布如下，

* GET /login.html - a.com(父)，b.com(子)
* GET /user-list.json - a.com(父)
* GET /css/main.css - a.com(父)
* GET /domain/b/user-list.json - b.com(子)
* GET /domain/b/css/main.css - b.com(子)

当用户访问以下URL时，按照java的父子类override规则，调用如下，

* a.com/login.html - /login.html(父)
* a.com/user-list.json - /user-info.list(父)
* a.com/css/main.css - /css/main.css(父)
* b.com/login.html - /login.html(父)
* b.com/user-list.json - /domain/b/user-list.json(子)
* b.com/css/main.css - /domain/b/css/main.css(子)

实际项目中，以上场景多发生在resource和controller的Mapping中。

* resource通常有`**`匹配，用反射ResourceHttpRequestHandler.getResource检查。
* 若非ResourceHttpRequestHandler且match`**`，需要自己设法检查资源是否存在
* 暂时不支持viewTemplate，同时也约定模板必须使用全路径。

根据wings mapping约定，避免使用相对路径，所以，b.com要在在class级做前缀。

```java
@Controller
@RequestMapping("/domain/b")
public class UserController {
 
    @GetMapping("/user-info.json")
    public String fetchUserInfo() {
        // 不支持view，需要手动指定
        return "/domain/b/user-info";
    }
}
```

## 3C.2.实现原理

在spring mvc体系中，一个请求进入servlet容器后，在worker线程中

* Filter#doFilter `before` chain.doFilter;
* DispatcherServlet#doService `call` doDispatch
* Filter#doFilter `after` chain.doFilter;

wings通过WingsDomainFilter，先检查host，如果是继承域，则构造子域全路径url，  
通过检查缓存和DispatchServlet中的HandlerMapping再构造RequestWrapper。

比如用户访问的URL为 /user/login.json，假设满足domain继承，host为trydofor， 在服务器端实际访问的资源是
/prefix/trydofor/user/login.json

即增加了 /${prefix}/${host}的路径在客户访问URI前。

知识点提示，

* 在FilterChain.doFilter调用之前Request可用，而其后Response可用的，注意线程安全和性能。
* 默认静态资源在classpath中的 `/static`, `/public`, `/resources`, `/META-INF/resources`
