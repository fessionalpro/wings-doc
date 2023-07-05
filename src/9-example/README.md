---
isOriginal: true
icon: actions
category:
  - Practice
  - Home
---

# 9.Practice and Sample

Execute `wings-init-project.sh` to generate a template project.

## 9.1.Pre-Requisite

Basic knowledge and hands-on ability,

* Understand `maven`, what is missing, what to learn.
* Understand `spring*`, `see official documentation` x 3!
* Understand `mysql*` mysql database

Directory conventions

* `WINGS_DIR` - the project root of wings_boot
* `WINGS_BIN` - `WINGS_DIR`/observe/scripts
* `PROJECT_DIR` - the directory of the sample project, e.g. `good-demo`
* `PROJECT_PCD` - CodeName of the sample project, e.g. `good`

## 9.2.DIY Environment

Sample scripts for new project and command to package,

```bash
sdk use java 17.0.6-tem # switch JDK to 17
mvn -v # show version of maven and java
#> Apache Maven 3.8.7 (b89d5959fcde851dcb1c8946a785a163f14e1e29)
#> Java version: 17.0.6, vendor: Eclipse Adoptium

WINGS_DIR=~/Workspace/github.com/pro.fessional.wings
WINGS_BIN=$WINGS_BOOT/observe/scripts
PROJECT_DIR=~/Workspace/good-demo
PROJECT_PCD=good

# create new project by template
$WINGS_BIN/wings-init-project.sh
```

Database, default H2, you can build Mysql Docker, the sample script as follows,

```bash
# set env
PASS=S4f3_Password@MoilionCircle

# create a mysql docker
docker run -d \
--name good-mysql-8.0 \
-e MYSQL_DATABASE=wings_example \
-e MYSQL_ROOT_PASSWORD=${PASS} \
-p 3306:3306 \
mysql:8.0
```

## 9.3.App Deployment

Softlink(`ln -s`) wings-starter.sh to some execution location, using `good-devops` as an example.

```bash
cd $PROJECT_DIR
# Create a boot script, one boot.jar corresponds to one pair of `.sh` and `.env`
ln -s $WINGS_BIN/wings-starter.sh ${PROJECT_PCD}-devops-starter.sh
# Copy the content of wings-starter.env and 
# save it with the same name as the boot script (different extname)
cp $WINGS_BIN/wings-starter.env ${PROJECT_PCD}-devops-starter.env
# good is the default codename, if it has been changed, it must be modified,
# otherwise the jar cannot be found
sed -i '' "s:../../:./:" ${PROJECT_PCD}-devops-starter.env
sed -i '' "s:winx-:./${PROJECT_PCD}-:g" ${PROJECT_PCD}-devops-starter.env
```

In env, port,jar,log is easy to understand and can be configured according to project needs.
BOOT_CNF is used to replace the default config at runtime, the structure is as follows.

```text
├── application.properties // application level config
├── wings-conf // auto config, override on demand
│     └── spring-datasource.properties
```

## 9.4.Reverse Proxy

The general config, including forced https, .git protection, and frontend and backend separation.

```nginx
upstream good_admin {
    ip_hash;
    server good_appser_01:8090;
    server good_appser_02:8090;
    keepalive 300; # long conn
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
    
    # Defensive settings to protect .git
    location .git {
        access_log off;
        log_not_found off;
        deny all;
    }

    # backend, resource url in res-id-{base64_urlsafe}.{pdf} format
    location ~* (\.json|/res-id-[\-=_0-9a-z]+\.[0-9a-z]+)$ {
        proxy_pass http://good_admin;
        proxy_http_version  1.1;
        proxy_cache_bypass  $http_upgrade;
    
        proxy_set_header  Connection   "";            # long conn
        #proxy_set_header Connection   "upgrade";     # ws
        #proxy_set_header Upgrade      $http_upgrade; # ws
        proxy_set_header  Host         $host;
        proxy_set_header  X-Real-IP    $remote_addr;
        proxy_redirect    http://      $scheme://;    # https
    }

    # frontend
    location / {
        #add_header 'Access-Control-Allow-Origin' '*'; #Allow CORS
        root /data/static/good-admin-spa/;
        if ($request_filename ~* \.(html|htm)$){
            add_header Cache-Control no-cache,no-store,max-age=0,must-revalidate;
        }
    }
}
```

## 9.5.Stress Testing

Stress test, must be `ulimit -n` above 10k, same intranet to ignore bandwidth limit.

```bash
cd $PROJECT_DIR
# package and start
mvn -U clean package
./${PROJECT_PCD}-devops-starter.sh start
# Ctrl-C to stop log output
./${PROJECT_PCD}-devops-starter.sh stop
```

Using jmeter to simulate 10K*50 requests

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

## 9.6.Security Option

The default password in wings project is `${random.uuid}` or environment variable.
In actual production, some need to set to fixed password. Password strength,
must be more than 32-bit random characters, alphanumeric case mix is best.

* `DING_TALK_TOKEN` - System variable, boot-admin login password
* `wings.silencer.encrypt.leap-code` - Pseudo-random number, can keep it
* `wings.silencer.encrypt.crc8-long` - Add crc checksum to number, can keep it
* `wings.silencer.encrypt.aes-key.*` - ^SHOULD^ change
* `wings.slardar.hazelcast.cluster-name` - hazelcast clust name, ^MUST^ change

In example project, use `DING_TALK_TOKEN` as default password

* `spring.boot.admin.client.username` - boot.admin server-side username, ^SHOULD^ change
* `spring.boot.admin.client.password` - boot.admin server-side password, ^MUST^ change
* `spring.boot.admin.client.instance.metadata.user.name` - client-side username, ^SHOULD^ change
* `spring.boot.admin.client.instance.metadata.user.password` - client-side password, ^MUST^ change

The default values for all of the above config items should be based on the corresponding manual or source code
to avoid the security implications of outdated documentation.

## 9.7.Start-up Args

In springboot3(after java17), `add-opens` must be set correctly to avoid `illegal-access`.
Wings set correctly in pom.xml and starter.sh, with the following files and variable names.

* `/pom.xml` - `wings.java-opens` with reason
* `/observe/scripts/wings-starter.sh` - `JDK9_ARG`
* `<arg>` - must be specified with `=`, space is supported in shell

The details of `add-opens` are as follows, handle line breaks when using

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
