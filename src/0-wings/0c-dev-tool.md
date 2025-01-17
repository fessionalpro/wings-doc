---
isOriginal: true
icon: fab fa-dev
category:
  - WingsGod
  - Tool
---

# 0C.Dev Tool

The recommended tools and configs for the efficient work.

## 0C.1.Java Development

Use `IntelliJIdea` as `IDE` with `code style` and `live templates`,

* `wings-idea-style.xml` imports in `Setting/Editor/Code Style`.
* `wings-idea-live.xml` place manually in `$config/templates/`, or create it if not found.

```bash
cd wings
id_config=~/Library/ApplicationSupport/JetBrains/IntelliJIdea2023.2
# Backup by copying
cat $id_config/templates/wings.xml > wings-idea-live.xml
cat $id_config/codestyles/Wings-Idea.xml > wings-idea-style.xml
# Restore by copying
cat wings-idea-live.xml  > $id_config/templates/wings.xml
cat wings-idea-style.xml > $id_config/codestyles/Wings-Idea.xml
# Re-import the project, clear the idea configuration
find . -name '*.iml' -o -name '.idea' | tr '\n' '\0' | xargs -0 rm -r
```

The use of the live-template has 2 types, Insert and Surround, corresponding to insert and edit,
and generally when selecting text `Surround... ⌥⌘J`, when no selected text, use `Insert... ⌘J`

* WIN `%HOMEPATH%\.IntelliJIdea2023.2\config`
* LIN `~/.IntelliJIdea2023.2/config`
* MAC `~/Library/Preferences/IntelliJIdea2023.2`
* MAC `~/Library/ApplicationSupport/JetBrains/IntelliJIdea2023.2`

References

* [sharing-live-templates](https://www.jetbrains.com/help/idea/sharing-live-templates.html)
* [2020.1 and above versions](https://www.jetbrains.com/help/idea/tuning-the-ide.html#default-dirs)
* [2019.3.x and below versions](https://www.jetbrains.com/help/idea/2019.3/tuning-the-ide.html#default-dirs)

Useful plug-ins

* .ignore - ignore file in versioning
* Any2dto - jooq, sql generate dto, reduce copy and assignment
* CheckStyle - code quality
* Comments Highlighter - highlighting in comments
* GenerateAllSetter - alt-enter generates all po.setXxx("")
* Git Flow Integration - integrates with git-flow
* GitToolBox - automatic fetch
* Git Commit Guide - gitmoji.dev helper
* Grep Console - Console logs are color-coded and filtered
* Indent Rainbow - makes indentation colorful
* kotlin - installed by default
* lombok - IntelliJ Lombok plugin
* MapStruct Support - Static strong typed DTO conversion to reduce copying and assignment
* Maven Helper - Helps manage maven
* Maven Dependency Checker - check latest version of deps
* Quick File Preview - Quick file preview with one click
* Rainbow Brackets - Colorful brackets
* Request mapper - Quickly find mapping
* Statistic - count your code
* String Manipulation - Various operations and conversions on strings
* HTTP Client - official support for the `*.http` file format
* Test Management - handle `*.t.md`

## 0C.2.Kotlin Development

Wings supports mixed java and kotlin development, but prefers to write java in order to avoid
too much syntax sugar and flexibility. Therefore, the project is compiled for java by default,
and kotlin compilation can be enabled by one of the following conditions.

* Automatic activation - activate respectively when `src/test/kotlin` or `src/main/kotlin` exists
* Manual activation - specify `wings-kotlin-1test` or `wings-kotlin-2main`
* Note the order, must be test before main, as shown in the numbers. Since maven does not
  support multi-conditional activation, see MNG-5909

When profile is activated, `wings-kotlin-scope` property is generated, configure dep's
scope as compile/test, To check if kotlin is activated in the current project,
go to the project directory and execute the mvn command.

```bash
# Auto active
mvn help:active-profiles
# Manual active, comma separated, no whitespace
mvn help:active-profiles -P wings-kotlin-1test,wings-kotlin-2main
# check final pom.xml
mvn help:effective-pom
```

## 0C.3.SQL Utility

* [Mysql Workbench](https://www.mysql.com/products/workbench/) - SQL-first scenarios, such as DDL, Admin, permissions, etc.
* [DBeaver](https://dbeaver.io) - Support for color markup, eclipse style
* DataGrid - Support for color markup, data-first scenarios such as query, partial export, etc.

## 0C.4.Text Editor

* VsCode - frontend, markdown, etc., not suitable for large files
* Sublime - Text Processing

## 0C.5.Http Testing

It is recommended to create `*.http` supported by IDEA to describe and test web interface under each project test,
the official documentation is as follows,

* <https://www.jetbrains.com/help/idea/http-client-in-product-code-editor.html>
* <https://www.jetbrains.com/help/idea/exploring-http-syntax.html>
* <https://www.jetbrains.com/help/idea/http-response-handling-api-reference.html>
* <https://www.jetbrains.com/help/idea/http-client-reference.html>
* <https://www.jetbrains.com/help/idea/http-response-reference.html>

Suggestions for use are as follows,

* When using `*.http`, usually grab the cURL command from chrome and copy it
* Variable `{{variable_name}}`, from `http-client*.env.json`, `client.global.` or the system's builtin
* Process the Response. prepend it with `>` and enclose it in `{%` and `%}`
* Fold long requests into multiple short lines. Indent all query string lines but the first one
* HTTP Response Handler handle 2 objects: client and response
* <https://www.jetbrains.com/help/idea/http-response-handling-examples.html>

## 0C.6.Wings Testing

Wings testing deps on the mysql service, which is managed by docker's compose.
If no docker is available, you can disable it with `spring.docker.compose.enabled=false`.
The default jdbc configuration is as follows.

```properties
spring.datasource.url=jdbc:mysql://localhost:51487/wings_example\
?connectionTimeZone=%2B08:00&forceConnectionTimeZoneToSession=true\
&autoReconnect=true&useSSL=false&allowPublicKeyRetrieval=true\
&characterEncoding=UTF-8&useUnicode=true

spring.datasource.username=trydofor
spring.datasource.password=moilioncircle
```

To use the new mysql server, the following steps must be taken.

* Create a user to access the wings database
* Create some empty schemas to isolate modules
* Create tables, provide meta cache for sharding

For details, see the following script and comments.

```bash
## grant and create schema
# observe/docker/mysql/init/*.sql

## create table and data
mvn -pl ':devs-codegen' -am \
-Ddevs-codegen.test.skip=false \
-Ddevs-initdb=true \
-Dwings.test.skip=true \
clean test

## wings test and coverage
mvn -P 'coverage,!example' clean test
```

## 0C.7. Git Flows

Which git flow is better depends on the actual project situation, such as commit frequency,
number of committers, etc. The main factors are,

* Easy to read - linear history is best for readability
* Less conflict - in developing, quick find, merge, squash, revert
* Fix bugs - after release, easy to fix bugs

When committing, squash/rebase is recommended to reduce transition commits and commit coupling.

* One commit, one issue, and pass unit tests
* One merge, one feature, and pass integration tests

Common practices used flows are,

* [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/)
* [GitHub Flow](https://guides.github.com/introduction/flow/)
* [OneFlow](https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow)
* [Forking Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow)
* [Trunk-Based Development](https://trunkbaseddevelopment.com/)
