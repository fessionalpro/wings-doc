---
isOriginal: true
icon: fab fa-dev
category:
  - 神翼
  - 工具
---

# 0C.开发工具

工欲善其事，必先利其器，推荐的工具及配置。

## 0C.1.Java开发

使用`IntelliJIdea`作为开发`IDE`，可使用`code style`和`live templates`。

* `wings-idea-style.xml`在`Setting/Editor/Code Style`导入。
* `wings-idea-live.xml`需要手动放到`$config/templates/`，没有则新建。

```bash
cd wings
id_config=~/Library/ApplicationSupport/JetBrains/IntelliJIdea2023.2
# 通过复制，备份
cat $id_config/templates/wings.xml > wings-idea-live.xml
cat $id_config/codestyles/Wings-Idea.xml > wings-idea-style.xml
# 通过复制，还原
cat wings-idea-live.xml  > $id_config/templates/wings.xml
cat wings-idea-style.xml > $id_config/codestyles/Wings-Idea.xml
# 若重新导入工程，清除idea配置
find . -name '*.iml' -o -name '.idea' | tr '\n' '\0' | xargs -0 rm -r
```

关于live-template的使用，分为Insert和Surround，对应插入和编辑，一般选择文本时，
`Surround... ⌥⌘J`，无选择文本时，使用 `Insert... ⌘J`

* WIN `%HOMEPATH%\.IntelliJIdea2023.2\config`
* LIN `~/.IntelliJIdea2023.2/config`
* MAC `~/Library/Preferences/IntelliJIdea2023.2`
* MAC `~/Library/ApplicationSupport/JetBrains/IntelliJIdea2023.2`

参考资料

* [sharing-live-templates](https://www.jetbrains.com/help/idea/sharing-live-templates.html)
* [2020.1 and above versions](https://www.jetbrains.com/help/idea/tuning-the-ide.html#default-dirs)
* [2019.3.x and below versions](https://www.jetbrains.com/help/idea/2019.3/tuning-the-ide.html#default-dirs)

安装以下插件

* .ignore - 和版本管理中ignore有关的
* Any2dto - 支持jooq, sql查询直接生成dto，减少复制和赋值
* CheckStyle - 代码质量
* Comments Highlighter - 注释中划重点
* GenerateAllSetter - alt-enter 生成全部 po.setXxx("")
* Git Flow Integration - 集成了git-flow
* GitToolBox - 自动 fetch
* Git Commit Guide - gitmoji.dev 辅助
* Grep Console - 控制台的日志分颜色显示和过滤
* Indent Rainbow - 使缩进有颜色
* kotlin - 默认安装了
* lombok - IntelliJ Lombok plugin
* MapStruct Support - 静态强类型DTO转换，减少复制和赋值
* Maven Helper - 帮助管理maven
* Maven Dependency Checker - 检查依赖的最新版本
* Quick File Preview - 单击快速浏览文件
* Rainbow Brackets - 彩虹括号
* Request mapper - 快速查找 mapping
* Statistic - 统计一下自己的代码
* String Manipulation - 对字符串的各种操作和转换
* HTTP Client - 官方对`*.http`文件格式的支持
* Test Management - 处理 `*.t.md`

## 0C.2.Kotlin开发

wings支持java和kotlin混合开发，但更主张优先写好java，以避免过渡语法糖及过于灵活。
所以，工程默认为java编译，以下任一条件，均可激活kotlin编译。

* 自动激活 - 存在`src/test/kotlin`或`src/main/kotlin`时，分别激活
* 手动激活 - 指定`wings-kotlin-1test`或`wings-kotlin-2main`
* 注意顺序，必须先test后main，如数字所示。因maven不支持多条件激活 MNG-5909

当profile激活时，会生成`wings-kotlin-scope`属性，配置stdlib的scope为compile/test
检查当前项目是否激活kotlin，进入工程目录，执行一下mvn命令，

```bash
# 自动激活
mvn help:active-profiles
# 手动激活，逗号分隔，不用有空白
mvn help:active-profiles -P wings-kotlin-1test,wings-kotlin-2main
# 查看最终 pom.xml
mvn help:effective-pom
```

## 0C.3.SQL工具

* [Mysql Workbench](https://www.mysql.com/products/workbench/) - SQL优先的场景，如DDL，Admin，权限等
* [DBeaver](https://dbeaver.io) - 支持颜色标识，eclipse风格
* DataGrid - 支持颜色标识，数据优先的场景，如查询，局部导出等

## 0C.4.文本工具

* VsCode - 前端，markdown等，不适应于大文件
* Sublime - 文本处理

## 0C.5.Http测试

推荐在每个工程test下建立idea支持的 `*.http` 接口描述和测试脚本，官方文档如下

* <https://www.jetbrains.com/help/idea/http-client-in-product-code-editor.html>
* <https://www.jetbrains.com/help/idea/exploring-http-syntax.html>
* <https://www.jetbrains.com/help/idea/http-response-handling-api-reference.html>
* <https://www.jetbrains.com/help/idea/http-client-reference.html>
* <https://www.jetbrains.com/help/idea/http-response-reference.html>

使用建议如下

* 使用`*.http`时，通常先从chrome中抓取 cURL 命令，复制过来即可
* 变量`{{variable_name}}`，来自`http-client*.env.json`，`client.global.`或系统自带
* 处理Response. prepend it with `>` and enclose it in `{%` `%}`
* 很长的请求折多个短行. Indent all query string lines but the first one
* HTTP Response Handler 的2个对象 client 和 response
* <https://www.jetbrains.com/help/idea/http-response-handling-examples.html>

## 0C.6.Wings测试

Wings的测试依赖于mysql服务，当前通过docker的compose自动启动，若无需docker，
可通过`spring.docker.compose.enabled=false`禁用。其默认的jdbc配置如下，

```properties
spring.datasource.url=jdbc:mysql://localhost:51487/wings_example\
?connectionTimeZone=%2B08:00&forceConnectionTimeZoneToSession=true\
&autoReconnect=true&useSSL=false&allowPublicKeyRetrieval=true\
&characterEncoding=UTF-8&useUnicode=true

spring.datasource.username=trydofor
spring.datasource.password=moilioncircle
```

新的mysql服务器，需要完成以下准备，才能够使用。

* 设置用户权限，访问wings数据库
* 创建空数据库，保证各模块数据隔离
* 初始化表结构，为sharding提供meta缓存

具体执行方式，参考一下脚本及注释，

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

## 0C.7.Git流程

Git流程需要根据项目实际情况来选择，如提交频度，提交者数量等，主要因素有，

* 可读性 - 线性历史的可读性最好
* 冲突少 - 开发中，快速查找，合并，Squash，回退
* 修复 - 发布后，容易修补bug

提交时，建议Squash或rebase，减少无意义的提交，减少提交耦合度。

* 一个提交，一个Issue，并通过单元测试
* 一次合并，一个功能，并通过集成测试

业内常用的Git流程有，

* [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/)
* [GitHub Flow](https://guides.github.com/introduction/flow/)
* [OneFlow](https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow)
* [Forking Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow)
* [Trunk-Based Development](https://trunkbaseddevelopment.com/)
