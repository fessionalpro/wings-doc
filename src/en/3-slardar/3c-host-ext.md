---
isOriginal: true
icon: extend
category:
  - Slardar
  - Tenant
---

# 3C.Host Extend and URL Override

Based on Mvc features to achieve the same backend app multiple different frontend host tenant function.
Unlike reverse proxy (nginx) rewrite,

* extend - the child domain has all the URLs of the parent domain
* override - the child domain can override the URL of the parent domain
* child domains have their own separate URLs
* domain inheritance is based on host

## 3C.1.Scenario Example

Assuming that `a.com` is a fully functional website, an example would include the following 3 URLs,

* GET /user-list.json - controller based
* GET /css/main.css - static resource
* GET /login.html - controller based

At this point, we have a franchisee `b.com`, which is all the same as `a.com` except for the skin,
and its own domain. Later on, `b.com` has its own requirements, and some of function and Url are
different from `a.com`. The different functions are implemented independently and put under the
convention prefix, at this time the URLs are distributed as follows.

* GET /login.html - `a.com`(parent)，`b.com`(child)
* GET /user-list.json - `a.com`(parent)
* GET /css/main.css - `a.com`(parent)
* GET /domain/b/user-list.json - `b.com`(child)
* GET /domain/b/css/main.css - `b.com`(child)

When the user visits the following URL, according to the parent-child override rules of Java,
the following is called,

* `a.com/login.html` - /login.html(parent)
* `a.com/user-list.json` - /user-info.list(parent)
* `a.com/css/main.css` - /css/main.css(parent)
* `b.com/login.html` - /login.html(parent)
* `b.com/user-list.json` - /domain/b/user-list.json(child)
* `b.com/css/main.css` - /domain/b/css/main.css(child)

In the actual project, the above scenario mostly happens in the Mapping of resource and controller.

* Resource usually has a `**` match, use reflection in ResourceHttpRequestHandler.getResource to check
* If not ResourceHttpRequestHandler and match `**`, you need to try the resource exists by yourself
* temporarily do not support viewTemplate, but also suggest that templates must use the full path

According to Wings mapping convention, avoid using relative paths, so b.com be prefixed at the class level

```java
@Controller
@RequestMapping("/domain/b")
public class UserController {
 
    @GetMapping("/user-info.json")
    public String fetchUserInfo() {
        // View has no support and must be set manually
        return "/domain/b/user-info";
    }
}
```

## 3C.2.Backend Principle

In SpringMvc system, a request enters the servlet container in the worker thread,

* Filter#doFilter `before` chain.doFilter
* DispatcherServlet#doService `call` doDispatch
* Filter#doFilter `after` chain.doFilter

Wings use WingsDomainFilter, first check the host, if it is an inherited domain, then construct
the subdomain full path url. By checking the cache and the HandlerMapping in DispatchServlet,
construct a RequestWrapper.

For example, the user visits the URL /user/login.json, assuming that the domain is inheritance
and the host is trydofor. The actual resource accessed on the server side is /prefix/trydofor/user/login.json

That is, the path `/${prefix}/${host}` is added before the client request the URI. Knowledge extension.

* Request is available before the FilterChain.doFilter call, and Response is available afterwards,
  with thread safety and performance in mind.
* Default static resources in the classpath `/static`, `/public`, `/resources`, `/META-INF/resources`
