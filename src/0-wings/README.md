---
isOriginal: true
icon: compass
category:
  - WingsGod
  - Home
---

# 0.WingsBoot

![wings ti6](/wings-ti6-champion.png)

WingsBoot(code WingsGod) is a bootstrap for SpringBoot, no magic and no customization,
with the following main features:

* Real multi lang & timezone solution (dynamic i18n, timezone, DST, leap seconds)
* Versioning of data and database (safe table changes, safe data maintenance)
* Conservative conventions and robust engineering practices (enum, config, template)
* Solved the most difficult things: naming (can be non-english, industry jargon)
* Deep hero pool and unique skill understanding (read official docs 3 times, debug the source code)
* read the docs then read the code, no read, no use (your homework, the passing grade)

The goal is to enable small startup teams to smoothly evolve from single app, to data sharding and RW splitting,
to microservices. At any project stage and business size, it can:

* Safe and rapid business refactoring and data model changes
* Versioning of business and data to ensure compatibility
* Runtime data changes can be traced, reviewed, and recovered
* Technical debt against rapid business change and poor design

## 0.1.Version Number

Wings version is [3-segment](https://semver.org), the first 2 is SpringBoot's,
the 3rd is Wings `BUILD` number. For example, `3.2.100-SNAPSHOT` are,

* `3.2` - SpringBoot's `MAJOR` and `MINOR`
* `100` - 3 digits, should reset to `100` when `MAJOR` changed
  - first 2, range [10-99], semver's `MINOR` meaning
  - last 1, range [0-9], semver's `PATCH` meaning
* `SNAPSHOT` - maven's SNAPSHOT

Wings uses the `revision` and `changelist` CI placeholders, requires Maven 3.5.0+.

## 0.2.Project Structure

Wings consists of several subprojects, all with Dota-related naming, mainly including the following,

* wings/silencer - Engineering auto-config, auto-I18n of springboot
* wings/faceless - Data access layer, RW-split, sharding, versioning
* wings/slardar - Conventions and encapsulation of Servlet WebMvc
* wings/warlock - Bootstrap integration with above modules and features
* wings/batrider - RPC and Microservice
* example - Sample and template project
* observe - Related projects of dota ecology
* radiant - Out-of-the-box and plug-and-play biz component

## 0.3.Technology Selection

Follows the Unix philosophy and partially answers `why` and `why not`?

* SpringBoot - Factual standards, a large practice, easy team pulling and knowledge transfer
* Jooq/QueryDsl - Based on the `Art of Constraint`, type-safe over the popular mybatis.
  strong type empowered by the IDE, hard to write complex SQL, good for RW split and microservice.
* Kotlin - Assisted language, as a better java than `scala`, use only in the flywave subproject.
  we still advocate "eat less sugar, write good java"
* WebMvc - Although `webflux` has better design and performance than servlet,
  the TX scenario is currently more of blocking IO, multi-threaded.
* Lombok - Make java code simple, aslo with the experimental feature, need to add them to pom manually.
* Git-flow - Best practices for git management.
* Trunk-based - CI/CD Best practices.
* Guava, commons-lang3, commons-io - Must-have toolkits for engineers.
* ShardingSphere - RW split and data sharding is enough to solve 90% of the `data big` problems.
* Hazelcast - Compared to Redis, Hazelcast is simpler and more integrated.
* ServiceComb - more engineering and compact microservice/cloud solution

## 0.4.Module Dependencies

`lib` means dependent on lib, otherwise it is a Wings module or component,
and is abbreviated if no ambiguity, such as curse, flywave, etc.

* silencer ← mirana | `boot-starter` | spring auto config
* silencer-curse ← silencer | `aop` | Wings basic feature
* faceless ← curse | meepo | `jdbc` | type and Id
* faceless-codegen ← faceless-jooq | `jooq-codegen` | Code generation utility
* faceless-flywave ← faceless | `kotlin` | data/schema versioning
* faceless-jooq ← faceless-awesome | `jooq` | Jooq customizing
* faceless-shard ← faceless-awesome | `shardingsphere` | RW split and sharding
* slardar ← curse | `jackson` | `fastjson` | `okhttp` | `cache` | `sentry` | biz basement
* slardar-hazel-caching ← slardar | `hazelcast` | multi-level caching
* slardar-hazel-session ← hazel-caching | slardar-webmvc | distributed session
* slardar-webmvc ← slardar | `starter-json` | `starter-web` | `undertow` | `security-web` |
  `springdoc` | WebMvc enhancement
* slardar-sprint ← hazel-caching | hazel-session | slardar-webmvc | `starter-security` |
  `starter-actuator` | `boot-admin` | WebMvc integration
* warlock ← slardar | faceless-jooq | db-based features
* warlock-codegen ← warlock-awesome | faceless-codegen | flywave
* warlock-shadow ← slardar-sprint | warlock-awesome | `JustAuth` | Db|Web|Permission
* warlock-bond ← warlock-shadow | auth-perm system

## 0.5.More Sections

* [Coding Style](./0a-code-style.md) - values, philosophy, style
* [RestHalf Spec](./0b-rest-half.md) - URL spec for scenario-based biz
* [Dev Tool](./0c-dev-tool.md) - To do a good job, sharpen the tools first
* [DevOps Topics](./0d-qa-devops.md) - Coding, operation and other topics
* [Config Topics](./0e-qa-config.md) - maven, properties, spring topics
* [Other Topics](./0f-qa-others.md) - Uncategorized topics
* [GhostShip Model](./0g-ghost-ship.md) - The basic building model for Wings
* [Properties Index](./0h-prop-index.md) - All properties of wings configuration
* [I18n Message](./0i-i18n-message.md) - Matching Rule and Builtin Message
* [Code Pattern](./0j-code-pattern.md) - practice of coding, naming
