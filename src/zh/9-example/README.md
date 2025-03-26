---
isOriginal: true
icon: circle-play
category:
  - 实战
---

# 9.实战演示

运行`wings-init-project.sh`生成一个样板工程。

## 9.1.前置条件

基本知识及动手能力

* 了解 `maven`，缺什么，补什么。
* 了解 `spring*`，`看官方文档` x 3！
* 了解 `mysql*`数据库，mysql

目录约定

* `WINGS_DIR` - wings_boot的工程根目录
* `WINGS_BIN` - `WINGS_DIR`/observe/scripts
* `PROJECT_DIR` - 示例工程的目录，例如`good-demo`
* `PROJECT_PCD` - 示例工程的CodeName，例如`good`

## 9.2.自建环境

新建工程及打包的示例脚本

```bash
# asdf shell java temurin-17.0.9+9
mvn -v # 显示maven和java版本
#> Apache Maven 3.8.7 (b89d5959fcde851dcb1c8946a785a163f14e1e29)
#> Java version: 17.0.9, vendor: Eclipse Adoptium

WINGS_DIR=~/Workspace/github.com/professional-wings
WINGS_BIN=$WINGS_BOOT/observe/scripts
PROJECT_DIR=~/Workspace/good-demo
PROJECT_PCD=good

# 使用模板初始化工程
$WINGS_BIN/wings-init-project.sh
```

数据库，默认采用H2演示，可自建Docker演示Mysql，示例脚本如下。

```bash
# 设置变量
PASS=S4f3_Password@MoilionCircle

# 创建一个mysql数据库
docker run -d \
--name good-mysql-8.0 \
-e MYSQL_DATABASE=wings_example \
-e MYSQL_ROOT_PASSWORD=${PASS} \
-p 3306:3306 \
mysql:8.0
```

## 9.3.程序部署

软连接(`ln -s`)wings-starter.sh到某个执行位置，以good-devops为例。

```bash
cd $PROJECT_DIR
# 建立启动脚本，一个boot.jar对应一组.sh和.env
ln -s $WINGS_BIN/wings-starter.sh ${PROJECT_PCD}-devops-starter.sh
# 复制 wings-starter.env内容，与启动脚本同名(扩展名不同)
cp $WINGS_BIN/wings-starter.env ${PROJECT_PCD}-devops-starter.env
# good为默认项目代号，若已调整则要修改，否则找不到jar
sed -i '' "s:../../:./:" ${PROJECT_PCD}-devops-starter.env
sed -i '' "s:winx-:./${PROJECT_PCD}-:g" ${PROJECT_PCD}-devops-starter.env
```

在env中，port,jar,log容易理解，按项目需要配置即可。
BOOT_CNF是用来替换默认配置的运行时配置，结构如下。

```text
├── application.properties // 程序级设置
├── wings-conf // 自动配置，按需覆盖内部文件
│     └── spring-datasource.properties
```

## 9.4.反向代理

通常的配置参考，包括强制https，保护误操作.git，前后端分离。

```nginx
upstream good_admin {
    ip_hash;
    server good_appser_01:8090;
    server good_appser_02:8090;
    keepalive 300; # 长连接
}

server {
    listen       80;
    listen       443 ssl;
    server_name  admin.moilioncircle.com;

    access_log /data/logs/nginx/admin.moilioncircle.com-access.log;
    error_log  /data/logs/nginx/admin.moilioncircle.com-error.log;

    ssl_certificate     /data/nginx/cert/moilioncircle.com/fullchain.pem;
    ssl_certificate_key /data/nginx/cert/moilioncircle.com/privkey.pem;

    #if ($scheme = http) {
    #    return 301 https://$host$request_uri;
    #}

    # 防御性设置，禁止发布git工程
    location .git {
        access_log off;
        log_not_found off;
        deny all;
    }

    # 后端分流，proxy_pass 必须加 `/`
    location ^~ /api/v1/ {
        proxy_pass http://good_admin/;
        proxy_http_version  1.1;
        proxy_cache_bypass  $http_upgrade;

        proxy_set_header  Connection   "";            # 删除头，长连接
        #proxy_set_header Connection   "upgrade";     # ws
        #proxy_set_header Upgrade      $http_upgrade; # ws
        proxy_set_header  Host         $host;
        proxy_set_header  X-Real-IP    $remote_addr;
        proxy_redirect    http://      $scheme://;    # https
    }

    # 前端分流
    location / {
        #add_header 'Access-Control-Allow-Origin' '*'; #允许跨域
        root /data/static/good-admin-spa/;
        if ($request_filename ~* \.(html|htm)$){
            add_header Cache-Control no-cache,no-store,max-age=0,must-revalidate;
        }
    }
}
```

## 9.5.压力测试

压力测试，必须`ulimit -n`在10k以上，同一内网以忽略带宽限制。

```bash
cd $PROJECT_DIR
# 打包和启动
mvn -U clean package
./${PROJECT_PCD}-devops-starter.sh start
# Ctrl-C停止日志输出
./${PROJECT_PCD}-devops-starter.sh stop
```

使用jmeter 模拟10K*50请求

```bash
ulimit -n 45535
JVM_ARGS="-Xmx8G -XX:+UseG1GC -XX:MaxGCPauseMillis=100 -XX:G1ReservePercent=20"

rm -rf ${PROJECT_PCD}-devops/target/load-test/ &&\
mkdir -p ${PROJECT_PCD}-devops/target/load-test/report

jmeter -n \
-t ${PROJECT_PCD}-devops/src/test/jmeter/load-test.jmx \
-l ${PROJECT_PCD}-devops/target/load-test/load-test.jtl \
-j ${PROJECT_PCD}-devops/target/load-test/load-test.log \
-e -o ${PROJECT_PCD}-devops/target/load-test/report
```

## 9.6.安全选项

wings工程中的默认密码均为`${random.uuid}`或环境变量。实际生产中，有些需要设置为固定密码。
密码强度，必须在32位以上的随机字符，字母数字大小写混合最好。

* `DING_TALK_TOKEN` - 系统变量，boot-admin登录密码
* `wings.silencer.encrypt.leap-code` - 伪随机数，可不更换
* `wings.silencer.encrypt.crc8-long` - 数字增加crc校验，可不更换
* `wings.silencer.encrypt.aes-key.*` - ^建议^更换
* `wings.slardar.hazelcast.cluster-name` - hazelcast集群名，^必须^更换

example中的配置，默认以`DING_TALK_TOKEN`为密码

* `spring.boot.admin.client.username` - boot.admin server端用户，^建议^更换
* `spring.boot.admin.client.password` - boot.admin server端密码，^必须^更换
* `spring.boot.admin.client.instance.metadata.user.name` - client端用户，^建议^更换
* `spring.boot.admin.client.instance.metadata.user.password` - client端密码，^必须^更换

上述全部配置项的默认值，以对应的配置项的手册或源代码为准，避免文档过期影响安全性。

## 9.7.启动参数

在springboot3，即java17后，必须正确设置`add-opens`，以避免`illegal-access`。
Wings在pom.xml和starter.sh中已进行了正确的设置，其文件及变量名字如下，

* `/pom.xml` - `javaopenArgLine` 有原因说明
* `/observe/scripts/wings-starter.sh` - `JDK9_ARG`
* `<arg>` - 参数必须使用`=`指定。在shell解析中支持空格分隔

`add-opens`的具体内容如下，使用时按需处理换行

```text
--add-modules=java.se
--add-exports=java.base/jdk.internal.ref=ALL-UNNAMED
--add-opens=java.base/java.io=ALL-UNNAMED
--add-opens=java.base/java.lang.invoke=ALL-UNNAMED
--add-opens=java.base/java.lang=ALL-UNNAMED
--add-opens=java.base/java.net=ALL-UNNAMED
--add-opens=java.base/java.nio=ALL-UNNAMED
--add-opens=java.base/java.util=ALL-UNNAMED
--add-opens=java.base/sun.nio.ch=ALL-UNNAMED
--add-opens=java.base/sun.security.x509=ALL-UNNAMED
--add-opens=java.management/sun.management=ALL-UNNAMED
--add-opens=jdk.management/com.sun.management.internal=ALL-UNNAMED
--add-opens=jdk.unsupported/sun.misc=ALL-UNNAMED
```
