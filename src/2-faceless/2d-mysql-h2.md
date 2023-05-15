---
isOriginal: true
icon: mysql
category:
  - 虚空
  - 数据
---

# 2D.Mysql体系的知识

MySql体系指其分支(Percona,MariaDB)或兼容协议的数据库，wings使用mysql8（5.7已充分测试）

原则上DB不应该封装（自定义function或procedure）业务逻辑，但可以使用db提供的功能，简化工作实现业务目标。
[mysql 8.0 官方文档](https://dev.mysql.com/doc/refman/8.0/en/)

## 2D.1.创建Mysql Docker

wings需要mysqld中以下的重点设置项，包括命名小写，语言时区，用户权限，[全文检索的分词](https://dev.mysql.com/doc/refman/8.0/en/fulltext-boolean.html)
以下配置适应于mysql5.7, mysql8, native, cloud

```bash
sudo tee /data/docker/mysql/conf/moilioncircle.cnf << EOF
[mysqld]
max_allowed_packet          = 16777216
max_connections             = 1024
group_concat_max_len        = 16777216
## table store lowercase compare case-sensitive
lower_case_table_names      = 1
## FULLTEXT indexes by MeCab parser and ngram parser
innodb_ft_min_token_size    = 2
ft_min_word_len             = 2
ngram_token_size            = 2
## default charset and timezone
character_set_server        = utf8mb4
default-time-zone           = +00:00
## binary log
log_bin_trust_function_creators = 1
binlog-format               = MIXED
## local
innodb_file_per_table       = 1
#skip_grant_tables
EOF

# 启动docker
sudo docker run -d \
 --name mysql \
 --restart=unless-stopped \
 -e MYSQL_ALLOW_EMPTY_PASSWORD=yes \
 -v /data/docker/mysql/conf:/etc/mysql/conf.d \
 -v /data/docker/mysql/data:/var/lib/mysql \
 -p 3306:3306 \
mysql:8.0
```

通过以下sql创建高权限用户，建议使用wings-mysql-user.sh管理不同权限的用户

```sql
CREATE USER 'trydofor'@'%' IDENTIFIED BY 'moilioncircle';
GRANT ALL ON *.*  TO 'trydofor'@'%'; -- 通常写法
-- GRANT ALL  ON `%`.*  TO 'trydofor'@'%'; -- 上述有语法错误时
SHOW GRANTS FOR 'trydofor'@'%';
-- DROP USER 'trydofor'@'%';
FLUSH PRIVILEGES;
```

Wings工程区分数据库，需要以下命名的数据库

```sql
-- DROP DATABASE IF EXISTS wings;
CREATE DATABASE wings DEFAULT CHARACTER SET utf8mb4;

-- wings /* auto codegen */
-- wings_shard_0 /* sharding test */
-- wings_shard_1 /* sharding test */
-- wings_faceless /* faceless */
-- wings_warlock /* warlock */
-- wings_example /* winx example */
-- wings_tiny /* winx tiny component */
```

## 2D.2.写高质量的SQL

wings中，数据库仅用持久化功能，估应避免SQL含有运算和业务逻辑。

* 必须知道where条件的索引情况
* 把字段运算比较，做等式变换后，变为定值比较
* 避免复杂SQL，鼓励单表查询
* 分页时，先定分页数据，再定向补充关联数据
* 避免循环查询和N+1查询

## 2D.2.MySql非通常用法

不推荐使用，但有时非常好用。

### 01.FIND_IN_SET

FIND_IN_SET(str,strlist)，比like和match更精准的查找，strlist以逗号分隔，str中不能有逗号。
返回strlist中1-base的坐标。0表示没找到或strlist为空。NULL如果str或strlist为NULL。

```sql
SELECT FIND_IN_SET('b','a,b,c,d')
-- 2，多数场景还是作为where条件，如下
WHERE FIND_IN_SET(role, role_set);
```

### 02.GROUP_CONCAT

```sql
GROUP_CONCAT([DISTINCT] expr [,expr ...]
    [ORDER BY {unsigned_integer | col_name | expr}
        [ASC | DESC] [,col_name ...]]
    [SEPARATOR str_val]
)

SELECT 
    GROUP_CONCAT(CONCAT_WS(', ', contactLastName, contactFirstName)
        SEPARATOR ';')
FROM customers;
```

### 03.全文检索，MATCH AGAINST

需要建立full text index，注意汉字分词，用插件或在java中分比较好

### 04.替换和忽略 REPLACE IGNORE

`replace into`和`insert ignore`

### 05.慎用Json数据类型

As of MySQL 5.7.8, MySQL supports a native JSON data type defined by RFC 7159  
新的操作符`->`和`->>`，需要注意词法分析框架的兼容性，所以在java中处理更为妥当。

### 06.性能分析explain和BENCHMARK

```sql
-- 单个express重复执行，注意，select只能返回唯一值
SELECT BENCHMARK(1000000,(
    SELECT count(author_name) FROM git_log_jetplus
));
-- 查看索引使用情况
explain 
    SELECT author_name FROM git_log_jetplus;
```

### 07.分页limit和FOUND_ROWS()记录总数

```sql
-- 先增加SQL_CALC_FOUND_ROWS选项，
SELECT SQL_CALC_FOUND_ROWS * FROM tbl_name WHERE id > 100 LIMIT 10;
-- 然后获取
SELECT FOUND_ROWS();
```

### 08.自增主键AUTO_INCREMENT和LAST_INSERT_ID()

项目中避免使用自增主键，特事特办的时候，可以采用标题的写法。
注意value多值插入时，只返回第一个。

### 09.字符串/字段链接 CONCAT和CONCAT_WS

```sql
-- 注意对null的处理
SELECT CONCAT('My', NULL, 'QL');
-- NULL, returns NULL if any argument is NULL.
SELECT CONCAT_WS(',','First name',NULL,'Last Name');
-- 'First name,Last Name', skip any NULL values
```

### 10.时区转换CONVERT_TZ

应该在write时执行转换类操作，此方法应在临时性读取时使用。
注意闰秒(leap second) `:59:60`或`:59:61`都以`:59:59`返回

```sql
SELECT  CONVERT_TZ('2007-03-11 2:00:00','America/New_york','Asia/Shanghai') AS time_cn
```

### 11.格式化输出FORMAT,DATE_FORMAT

```sql
-- '#,###,###.##'
SELECT FORMAT(12332.123456, 4);
-- '12,332.1235'
SELECT FORMAT(12332.1,4);
-- '12,332.1000'
```

### 12.全局悲观锁GET_LOCK

此功能在做跨jvm全局悲观锁时可用。

```sql
-- 一条语句，无阻塞获得锁
SELECT IF(IS_FREE_LOCK('10')=1, GET_LOCK('10',10), -1);
-- 检测锁，1 if the lock is free
SELECT IS_FREE_LOCK('lock1');
-- 阻塞10秒，1 if successfully, 0 timed out
SELECT GET_LOCK('lock1',10);
-- 释放锁，或session中断
SELECT RELEASE_LOCK('lock1');
-- RELEASE_ALL_LOCKS()
```

### 13.正则匹配REGEXP和RLIKE

注意，mysql是基于byte-wise的，不是char，所以多字节字符有可能不正常。

```sql
-- 1为匹配，0为不匹配
SELECT 'Michael!' NOT REGEXP '.*';
```

### 14.VarChar和Text类型

* VarChar 有长度限制，能够设置默认值，这符合wings的NotNull约定
* TEXT可认为无限制，不能设置默认值，不符合wings约定
* MySQL has hard limit of 4096 columns
* maximum row size limit of 65535 bytes

### 15.ONLY_FULL_GROUP_BY 和 nonaggregated

> is not in GROUP BY clause and contains nonaggregated column
> which is not functionally dependent on columns in GROUP BY clause;
> this is incompatible with sql_mode=only_full_group_by

从MySQL 5.7.5起 ONLY_FULL_GROUP_BY 默认开启，可避免获取无用字段。

```sql
-- 方案①，临时关闭
-- disable ONLY_FULL_GROUP_BY in current session
SET @@sql_mode = sys.list_drop(@@sql_mode, 'ONLY_FULL_GROUP_BY');
-- 
SELECT name, address, MAX(age) FROM t GROUP BY name;
-- enable ONLY_FULL_GROUP_BY
SET @@sql_mode = sys.list_add(@@sql_mode, 'ONLY_FULL_GROUP_BY');

-- 方案②，使用ANY_VALUE
SELECT name, ANY_VALUE(address), MAX(age) FROM t GROUP BY name;
```

## 2D.3.本地/内存H2

在不方便提供mysql数据库的时候，如演示或本地数据库应用，可以使用H2，配置如下。

```text
jdbc:h2:~/wings-init
;USER=trydofor;PASSWORD=moilioncircle
;MODE=MySQL;CASE_INSENSITIVE_IDENTIFIERS=TRUE
;AUTO_RECONNECT=TRUE;AUTO_SERVER=TRUE
```
其中，H2对mysql做了部分兼容，分表分库可以，trigger不支持，参考配置，
[H2官方文档](http://h2database.com/html/features.html)
