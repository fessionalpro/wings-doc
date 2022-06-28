---
isOriginal: true
icon: enum
category:
  - 虚空
  - 属性
---

# 2I.虚空的属性

有关数据库，数据操作，Db层面I18n的基本属性。

## 2I.1.spring-wings-enabled-79.properties

Faceless功能的默认开关，如下

### spring.wings.faceless.enabled.jdbctemplate

`Boolean`=`true`，是否注入 jdbcTemplate

### spring.wings.faceless.enabled.lightid

`Boolean`=`true`，是否注入lingthid

### spring.wings.faceless.enabled.journal

`Boolean`=`true`，是否注入journal

### spring.wings.faceless.enabled.enumi18n

`Boolean`=`false`，是否注入StandardI18nService

## 2I.2.spring-hikari-79.properties

为spring.datasource.hikari提供以下配置

* `spring.datasource.hikari.pool-name`=`wings-hikari-cp`
* `spring.datasource.hikari.maximum-pool-size`=`20`
* `spring.datasource.hikari.auto-commit`=`true`
* `spring.datasource.hikari.connection-timeout`=`30000`
* `spring.datasource.hikari.idle-timeout`=`600000`
* `spring.datasource.hikari.max-lifetime`=`1800000`
* `spring.datasource.hikari.leak-detection-threshold`=`15000`

## 2I.3.wings-flywave-fit-79.properties

通过flywave对faceless-id-log依赖的做数据库版本检查。

### wings.faceless.flywave.fit.faceless-id-log.path

`Set<String>`=`classpath*:/wings-flywave/master/01-light/*.sql`

sql扫描pattern，逗号分隔。PathMatchingResourcePatternResolver格式

### wings.faceless.flywave.fit.faceless-id-log.revi

`Set<String>`=`2019_0520_01L`。revision，逗号分隔。

### wings.faceless.flywave.fit.faceless-id-log.lost

`String`=`WARN`。`SKIP`-跳过|`WARN`-警告|`FAIL`-异常|`EXEC`-强制执行

补漏行为，任一指定revi未应用时，只升级不能降级，避免危险的删除动作

## 2I.4.wings-lightid-79.properties

对分布式主键lightid的设置。默认事务级别，Propagation.REQUIRES_NEW

### wings.faceless.lightid.insert.auto

`Boolean`=`true`，当前name和block的id不存在时，插入还是异常。

### wings.faceless.lightid.insert.next

`Long`=1000,自动insert时的首值，建议1000起，之下为手动生成。

### wings.faceless.lightid.insert.step

`Long`=100，自动insert时的步长。

### wings.faceless.lightid.loader.timeout

`Long`=5000，加载时视为超时的毫秒数

### wings.faceless.lightid.loader.max-error

`Integer`=5，加载错误时最大尝试次数

### wings.faceless.lightid.loader.max-count

`Integer`=10000，加载成功加载的最大数量

### wings.faceless.lightid.loader.err-alive

`Long`=120000，错误存在毫秒数，期间不尝试。

### wings.faceless.lightid.provider.block-type

`String`=`sql`，blockId提供方法

* `sql` - 查询数据库，唯一返回值为id
* `fix` - 固定数字，int

### wings.faceless.lightid.provider.block-para

`String`，提供方式的参数，sql时为select，fix为数字。

```sql
SELECT block_id
FROM sys_light_sequence 
WHERE seq_name = 'singleton_lightid_blockid'
```

### wings.faceless.lightid.provider.sequence-insert

`String`，插入语句。JdbcTemplate的sql，

```sql
INSERT INTO sys_light_sequence
(seq_name, block_id, next_val, step_val, comments) 
VALUES (?,?,?,?,?)
```

详见`LightSequenceModifyJdbc`，参数分别是，

* `String` seq_name - 序列名
* `int` block_id - 数据块id
* `long` next_val - 下一个seq
* `int` step_val - 步长
* `String` comments - 说明

### wings.faceless.lightid.provider.sequence-update

`String`，更新语句。JdbcTemplate的sql，

```sql
UPDATE sys_light_sequence 
SET next_val=? 
WHERE block_id=? AND seq_name=? AND next_val=?
```

详见`LightSequenceModifyJdbc`，参数分别是，

* `long` next_val_new - 新的seq值
* `int` block_id - 数据块id
* `String` seq_name - 序列名
* `long` next_val_old - 旧的seq值

### wings.faceless.lightid.provider.sequence-get-one

`String`，单次获取。JdbcTemplate的sql，

```sql
SELECT next_val, step_val 
FROM sys_light_sequence 
WHERE block_id=? AND seq_name=? FOR UPDATE
```

详见`LightSequenceSelectJdbc`，参数分别是，

* `int` block_id - 数据块id
* `String` seq_name - 序列名

### wings.faceless.lightid.provider.sequence-get-all

`String`，全部获取。JdbcTemplate的sql，

```sql
SELECT seq_name, next_val, step_val 
FROM sys_light_sequence 
WHERE block_id=? FOR UPDATE
```

详见`LightSequenceSelectJdbc`，参数分别是，

* `int` block_id - 数据块id

### wings.faceless.lightid.provider.sequence-adjust

`String`，尝试校验并调整数据库中id，使其正确。设置为`∅`，表示忽略此功能。

```sql
SELECT table_name, column_name 
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE table_schema = DATABASE() 
AND UPPER(column_key) = 'PRI' 
AND UPPER(column_type) like '%INT%' 
AND table_name = ?
```

输入`表名`（作为序列名），返回数据库中的`表名`和`列名`。
