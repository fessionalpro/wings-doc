---
isOriginal: true
icon: cache
category:
  - Batrider
  - Provider
---

# 5A.Serivce Provider

Use SpringMvc annotations to provide services and cowork with WebMvc.

## 5A.1.Provider Convention

* Pure interface and pojo definition the `contract` to avoid Overloading, e.g. `HelloContract`
* `SchemaId` and `path` are kebab-case, i.e. lowercase hyphens
* Contractor `@RestSchema` implements the `contract`, such as `HelloContractor`
* Overloading methods are identified by different suffixes, path is globally unique
* Use only `@RestSchema`, disable scanning of `@RestController`

## 5A.2.DataType Convention

Data type follow the Json convention of Wings to avoid using complex types and structures.

When pure String is used as body, both Request's `consumes` and Response's `produces` must use
`MediaType.TEXT_PLAIN_VALUE`, which is different from Spring.

## 5A.3.Contract Style

The contract is available in both Mvc and Rpc styles, both of which can be easily located and understood.

### Mvc Style, Root is BasePath

Consistent with the Controller and RequestMapping conventions in wings.

* The basePath on the class is `/` or `/v1`, i.e. root path or version
* `@RequestMapping` of the method is the full path, starting with `SchemaId`.

```java
@RestSchema(schemaId = "batrider-hello")
@RequestMapping(path = "/")
public class BatriderContractor implements HelloContract {

    @RequestMapping(path = "/batrider-hello/say-hello", 
    method = RequestMethod.GET, produces = MediaType.TEXT_PLAIN_VALUE)
    @ResponseBody
    @Override
    public String sayHello(@RequestParam(name = "name") String name) {
        return "Batrider: Hello " + name;
    }
}
```

### Rpc Style, SchemaId is basePath

Easier to locate by IDE association, placing the SchemaId in the contract interface

```java
public interface HelloContract {
    String SchemaId = "winx-hello";
    String sayHello(String name);
}
```

In the implementation, the provider uses the contract's SchemaId directly

```java
@RestSchema(schemaId = HelloContract.SchemaId)
@RequestMapping(path = HelloContract.SchemaId)
public class HelloContractor implements HelloContract {

    @RequestMapping(path = "/say-hello", 
    method = RequestMethod.GET, produces = MediaType.TEXT_PLAIN_VALUE)
    @ResponseBody
    @Override
    public String sayHello(@RequestParam(name = "name") String name) {
        return "Winx: Hello " + name;
    }
}
```
