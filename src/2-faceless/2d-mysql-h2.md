---
isOriginal: true
icon: database
category:
  - Faceless
  - Database
---

# 2D.Mysql-Like Database

MySql serial refers to mysql and its branches (Percona, MariaDB) or a  protocol compatible database,
wings use mysql 8/5.7 (has been fully tested).

In principle, DB should not encapsulate business logic (custom function or procedure), but can use the
functions provided by db to simplify the work to achieve business goals.
[Mysql 8.0 Official Documentation](https://dev.mysql.com/doc/refman/8.0/en/)

## 2D.1.Mysql in Docker

Wings requires the following key settings in mysqld, including lowercase names, language, timezone, user privilege,
[wordseg for full-text search](https://dev.mysql.com/doc/refman/8.0/en/fulltext-boolean.html)

The following configuration is suitable for mysql 8/5.7, native/cloud,

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
innodb_strict_mode          = 0
#skip_grant_tables
EOF

# start docker
sudo docker run -d \
 --name mysql \
 --restart=unless-stopped \
 -e MYSQL_ALLOW_EMPTY_PASSWORD=yes \
 -v /data/docker/mysql/conf:/etc/mysql/conf.d \
 -v /data/docker/mysql/data:/var/lib/mysql \
 -p 3306:3306 \
mysql:8.0
```

Create high privilege users with the following sql. It is recommended to use
wings-mysql-user.sh to manage users with different privileges

```sql
CREATE USER 'trydofor'@'%' IDENTIFIED BY 'moilioncircle';
GRANT ALL ON *.*  TO 'trydofor'@'%'; -- usually syntax
-- GRANT ALL  ON `%`.*  TO 'trydofor'@'%'; -- when above error
SHOW GRANTS FOR 'trydofor'@'%';
-- DROP USER 'trydofor'@'%';
FLUSH PRIVILEGES;
```

The Wings isolates databases for project and requires the following named databases,

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

## 2D.2.High Quality SQL

In wings, the database is only used to persist data, and should avoid using function and business logic in DB/SQL.

* Must know the indexing of where condition
* Change field comparison to fixed value comparison after equation transformation
* Avoid complex SQL and encourage single table query.
* When paging, set the paged data first, then select the related data directly.
* Avoid circular and N+1 queries

## 2D.2.MySql Unusual Usage

Not recommended, but sometimes works great.

### 01.FIND_IN_SET

FIND_IN_SET(str,strlist), more precise find than like and match, strlist is comma separated, no comma in str.
Returns the coordinates of 1-base in strlist. 0 means not found or strlist is empty. NULL if str or strlist is NULL.

```sql
SELECT FIND_IN_SET('b','a,b,c,d')
-- 2, most scenarios as where condition, as follows
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

### 03.MATCH AGAINST

Need to build full text index. Note: for the Chinese chars, it better  to use plug-ins or  seg word  in java.

### 04.REPLACE IGNORE

`replace into` and `insert ignore`

### 05.Caution with Json Type

Starting with 5.7.8, MySQL supports a native JSON data type defined by RFC 7159

The new operators `->` and `->>` may be incompatible with the lexical analysis framework,
so they are more appropriately handled in java.

### 06.Explain and BENCHMARK

```sql
-- Repeated execution of a single express, note that select can only return unique values
SELECT BENCHMARK(1000000,(
    SELECT count(author_name) FROM git_log_jetplus
));
-- Show Index Usage
explain
    SELECT author_name FROM git_log_jetplus;
```

### 07.Limit and FOUND_ROWS()

```sql
-- add SQL_CALC_FOUND_ROWS option first
SELECT SQL_CALC_FOUND_ROWS * FROM tbl_name WHERE id > 100 LIMIT 10;
-- then fetch
SELECT FOUND_ROWS();
```

### 08.AUTO_INCREMENT and LAST_INSERT_ID()

Avoid using auto-incrementing primary keys in projects. and use the method in title for special cases.
Note that when multiple values are inserted, only the first one is returned.

### 09.CONCAT and CONCAT_WS

```sql
-- Note the handling of null
SELECT CONCAT('My', NULL, 'QL');
-- NULL, returns NULL if any argument is NULL.
SELECT CONCAT_WS(',','First name',NULL,'Last Name');
-- 'First name,Last Name', skip any NULL values
```

### 10.CONVERT_TZ

A conversion operation should be performed on writes, and this method should be used on
temporary reads. Note that leap seconds `:59:60` or `:59:61` are returned as `:59:59`.

```sql
SELECT  CONVERT_TZ('2007-03-11 2:00:00','America/New_york','Asia/Shanghai') AS time_cn
```

### 11.FORMAT and DATE_FORMAT

```sql
-- '#,###,###.##'
SELECT FORMAT(12332.123456, 4);
-- '12,332.1235'
SELECT FORMAT(12332.1,4);
-- '12,332.1000'
```

### 12.Global GET_LOCK

This function can do global pessimistic locking across jvm.

```sql
-- A statement that gets a lock without blocking
SELECT IF(IS_FREE_LOCK('10')=1, GET_LOCK('10',10), -1);
-- detect lock, 1 if the lock is free
SELECT IS_FREE_LOCK('lock1');
-- block 10 seconds, 1 if successfully, 0 timed out
SELECT GET_LOCK('lock1',10);
-- release lock, or session break
SELECT RELEASE_LOCK('lock1');
-- RELEASE_ALL_LOCKS()
```

### 13.REGEXP and RLIKE

Note that mysql is byte-based, not char-based, so it is possible that
multi-byte characters may not work properly.

```sql
-- 1 for matching, 0 for not matching
SELECT 'Michael!' NOT REGEXP '.*';
```

### 14.VarChar and Text

* VarChar has a limit length and with default value,
  consistent with the Wings NotNull convention
* TEXT can be considered unlimited and without default value,
  inconsistent with the Wings convention
* MySQL has hard limit of 4096 columns
* Maximum row size limit of 65535 bytes

### 15.ONLY_FULL_GROUP_BY and nonaggregated

> is not in GROUP BY clause and contains nonaggregated column
> which is not functionally dependent on columns in GROUP BY clause;
> this is incompatible with sql_mode=only_full_group_by

As of MySQL 5.7.5, the default SQL mode includes ONLY_FULL_GROUP_BY.

```sql
-- ① disable ONLY_FULL_GROUP_BY in current session
SET @@sql_mode = sys.list_drop(@@sql_mode, 'ONLY_FULL_GROUP_BY');
--
SELECT name, address, MAX(age) FROM t GROUP BY name;
-- enable
SET @@sql_mode = sys.list_add(@@sql_mode, 'ONLY_FULL_GROUP_BY');

-- ②, use ANY_VALUE
SELECT name, ANY_VALUE(address), MAX(age) FROM t GROUP BY name;
```

## 2D.3.Local/Memory H2

If it is not convenient to get a mysql database, such as a demo or local application,
you can use H2 with the following configuration.

```text
jdbc:h2:~/wings-init
;USER=trydofor;PASSWORD=moilioncircle
;MODE=MySQL;CASE_INSENSITIVE_IDENTIFIERS=TRUE;IGNORECASE=TRUE
;AUTO_RECONNECT=TRUE;AUTO_SERVER=TRUE
```
H2 is most compatible with mysql, eg. splitting and sharding work well, but trigger is not supported. [H2 Official Documentation](http://h2database.com/html/features.html)
