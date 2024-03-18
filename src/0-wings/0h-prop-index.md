---
isOriginal: true
icon: enum
category:
  - WingsGod
  - Home
---

# 0H.Properties Index

Config is recommended in the properties flavor because it is easy to separate, cascade and lookup.
Each `*.properties` has a strong type key mapping`*Prop.java`.

[Properties File Format](https://docs.oracle.com/cd/E23095_01/Platform.93/ATGProgGuide/html/s0204propertiesfileformat01.html)

## 0H.1.Properties File

In Silencer, the default config naming rules are as follows.

* `wings-auto-config*.cnf` - Silencer config
* `wings-conf-block-list.cnf` - Block list of config
* `wings-prop-promotion.cnf` - Promote config items to system variables
* `spring-*.properties` - Spring config
* `wings-*.properties` - Wings config

## 0H.2.Item Annotation

To improve recognition and readability, the following annotations are included in the document.

* `String` - `NotNull` type of `String`
* `String?` - `Nullable` type of `String`
* `Boolean` - The primitive type and its wrapper class, non-null.
* `=` - Means `empty`, eg. `key=` means `key` is empty

The config value in the properties is usually a single line, and the multiple lines syntax as follows

* `\` - Backslash escape the new line
* `\n\` - Generate a line break in the prop to improve readability.

## 0H.3.Properties Files

* [Silencer Properties](../1-silencer/1d-prop-silencer.md) - Autoload default utility and feature
* [Faceless Properties](../2-faceless/2i-prop-faceless.md) - Database Acess, basic I18n configuration
* [Flywave Properties](../2-faceless/2j-prop-flywave.md) - Flywave's config for schema management
* [Jooq Properties](../2-faceless/2k-prop-jooq.md) - Jooq config
* [Slardar Properties](../3-slardar/3i-prop-slardar.md) - Basic config of Slardar and Spring
* [WebMvc Properties](../3-slardar/3j-prop-webmvc.md) - Basic config of Spring WebMvc
* [WebFun Properties](../3-slardar/3k-prop-function.md) - Basic config of Spring Web
* [Hazelcast Properties](../3-slardar/3l-prop-hazelcast.md) - Hazelcast config
* [Warlock Properties](../4-warlock/4d-prop-warlock.md) - Warlock login autnn config
* [TinyTask Properties](../8-radiant/8b-prop-tinytask.md) - TinyTask config
* [TinyMail Properties](../8-radiant/8d-prop-tinymail.md) - TinyMail config

## 0H.4.wings.enabled.pro.fessional.wings

`@ConditionalWingsEnabled` are grouped by module, orderd by ascii.

* `empty` means default true
* `(false)` means default false
* `= key` means `absolute-key`

### .silencer.spring

* .conf.SilencerAutoConfiguration
* .bean.SilencerConfiguration
  - .applicationInspectRunner
  - .messageSourceHelper
* .bean.SilencerRunnerConfiguration
  - $ReadyEvent - on ApplicationReadyEvent
  - $StartedEvent - on ApplicationStartedEvent
* .conf.SilencerCurseAutoConfiguration
* .bean.SilencerCurseConfiguration
  - .auditPropRunner (false) = `wings.enabled.silencer.audit-prop`
  - .muteConsoleRunner = `wings.enabled.silencer.mute-console`
  - .runtimeMode
* .bean.SilencerEncryptConfiguration
  - .aes256
  - .crc8Long
  - .leapCode
  - .secretProvider
* .bean.SilencerTweakConfiguration
  - $ClockWired =  `wings.enabled.silencer.tweak-clock`
  - $LogbackWired = `wings.enabled.silencer.tweak-logback`
  - $StackWired = `wings.enabled.silencer.tweak-stack`

### .faceless.spring

* .conf.FacelessAutoConfiguration
* .bean.FacelessConfiguration
  - .commitJournalModify
  - .dataSourceContext
  - .flakeIdService = `wings.enabled.faceless.simple-flakeid`
  - .journalService = `wings.enabled.faceless.simple-journal`
  - .standardI18nService
* .bean.FacelessLightIdConfiguration
  - $LayoutWired - init LightIdLayout
  - .blockProvider
  - .dbLightIdProvider
  - .jvmLightIdProvider
  - .lightIdLoader
  - .lightIdService
  - .lightSequenceModify
  - .lightSequenceSelect
* .conf.FlywaveAutoConfiguration (false)=`wings.enabled.faceless.flywave`
* .bean.FlywaveConfiguration
  - .revisionCheckerRunner = `wings.faceless.flywave.checker`
  - .schemaDefinitionLoader
  - .schemaFulldumpManager
  - .schemaJournalManager
  - .schemaShardingManager
  - .schemaVersionManger
  - .sqlSegmentProcessor
  - .sqlStatementParser
* .conf.FacelessJooqAutoConfiguration
* .bean.FacelessJooqConfiguration
  - .jooqAutoQualifyFieldListener = `wings.faceless.jooq.conf.auto-qualify`
  - .jooqWingsConfigCustomizer
* .bean.FacelessJooqCudConfiguration
  - $CudListenerBean = `wings.faceless.jooq.conf.listen-cud`
  - $JournalDiffWired
  - .jooqJournalDeleteListener = `wings.faceless.jooq.conf.journal-delete`
* .conf.FacelessShardAutoConfiguration
* .bean.FacelessShardingSphereConfiguration
  - .shardingDataSourceContext
  - .writeRouteOnlyAround

### .slardar.spring

* .conf.SlardarAsyncAutoConfiguration
* .bean.SlardarAsyncConfiguration
  - .applicationTaskExecutor
  - .slardarHeavyScheduler
  - .taskExecutor
  - .taskScheduler
  - .taskSchedulerHelper
* .conf.SlardarCacheAutoConfiguration
* .bean.SlardarCacheConfiguration
  - $CacheAop
  - $CacheMgr
  - .cache2kCacheManager
* .conf.SlardarAutoConfiguration
* .bean.SlardarDateTimeConfiguration
  - .localDateStringConverter
  - .localDateTimeStringConverter
  - .localTimeStringConverter
  - .offsetDateTimeStringConverter
  - .stringLocalDateConverter
  - .stringLocalDateTimeConverter
  - .stringLocalTimeConverter
  - .stringOffsetDateTimeConverter
  - .stringZonedDateTimeConverter
  - .zonedDateTimeStringConverter
* .bean.SlardarDingNoticeConfiguration
  - .dingTalkNotice
* .bean.SlardarDoubleKillConfiguration = `wings.enabled.slardar.double-kill`
  - .doubleKillAround
* .bean.SlardarEventConfiguration
  - .attributeEventListener
  - .eventPublishHelperRunner
  - .slardarEventExecutor
* .bean.SlardarI18nConfiguration
  - .autoDtoHelperRunner
  - .localValidatorFactoryBean
* .bean.SlardarJacksonConfiguration
  - .emptyValuePropertyFilter
  - .i18nResultPropertyFilter
* .bean.SlardarMonitorConfiguration
  - $LogMonitor = `wings.enabled.slardar.monitor-log`
  - .dingTalkReport
  - .jvmMonitor = `wings.enabled.slardar.monitor-jvm`
  - .monitorTask
* .bean.SlardarOkhttpConfiguration
  - .okhttpClient
  - .okhttpClientBuilder
  - .okhttpConnectionPool
  - .okhttpHelperRunner
  - .okhttpHostCookieJar
  - .okhttpRedirectNopInterceptor
* .bean.SlardarTweakConfiguration
  - .okhttpTweakLogInterceptor
  - .tweakEventListener
* .conf.SlardarHazelAutoConfiguration
* .bean.HazelcastConfigConfiguration
  - .wingsHazelcastAloneCustomizer (false) = `wings.enabled.slardar.hazelcast-standalone`
  - .wingsHazelcastCacheCustomizer
  - .wingsHazelcastGlobalSerializer
* .bean.HazelcastFacelessConfiguration
  - .flakeIdService
  - .hzLightIdProvider
* .bean.HazelcastServiceConfiguration
  - $GlobalPublisherWired
  - .hazelcastCacheManager
  - .hazelcastGlobalLock
* .conf.SlardarHazelSessionAutoConfiguration
* .bean.SlardarHazelSessionConfiguration
  - .sessionRegistry
  - .wingsSessionHelper
  - .wingsHazelcastSessionSerializer
* .conf.SlardarBootAdminAutoConfiguration
* .bean.SlardarBootAdminClientConfiguration
  - .registrationClient
* .bean.SlardarBootAdminServerConfiguration
  - .basicAuthHttpHeadersProvider
  - .bootAdminMappingOrderPostProcessor
  - .dingTalkNotifier
* .conf.SlardarSprintAutoConfiguration
* .bean.SlardarActuatorConfiguration
  - .slardarCacheManageEndpoint
* .bean.SlardarSecurityConfiguration
  - .httpSessionEventPublisher
  - .localeContextHolderTerminalContextListener
  - .passsaltEncoder
  - .passwordEncoder
  - .terminalContextListenerRunner
  - .wingsSecBeanInitConfigurer
* .conf.SlardarWebCnfAutoConfiguration
* .bean.SlardarLocaleConfiguration
  - .localeResolver
* .bean.SlardarOkhttpWebConfiguration
  - .okhttpRestTemplate
  - .restTemplateBuilder
* .conf.SlardarWebFunAutoConfiguration
* .bean.SlardarCookieConfiguration (false) = `wings.enabled.slardar.cookie`
  - .wingsCookieFilter
  - .wingsCookieInterceptor
* .bean.SlardarDebounceConfiguration = `wings.enabled.slardar.debounce`
  - .debounceInterceptor
* .bean.SlardarDomainExtendConfiguration (false) = `wings.enabled.slardar.domainx`
  - .wingsDomainExtendFilter
* .bean.SlardarDoubleKillWebConfiguration = `wings.enabled.slardar.double-kill`
  - .doubleKillExceptionResolver
* .bean.SlardarFirstBloodConfiguration (false) = `wings.enabled.slardar.first-blood`
  - .firstBloodImageHandler = `wings.enabled.slardar.first-blood-image`
  - .firstBloodInterceptor
* .bean.SlardarJacksonWebConfiguration
  - .customizeJacksonDatetime = `wings.enabled.slardar.jackson-datetime`
  - .customizeJacksonEmpty = `wings.enabled.slardar.jackson-empty`
  - .customizeJacksonNumber = `wings.enabled.slardar.jackson-number`
  - .customizeJacksonResource = `wings.enabled.slardar.jackson-resource`
  - .customizeJacksonResult = `wings.enabled.slardar.jackson-result`
  - .jacksonCustomizerFilter
  - .jacksonFilterProvider
  - .jacksonHelperRunner
* .bean.SlardarPageQueryConfiguration = `wings.enabled.slardar.pagequery`
  - .pageQueryArgumentResolver
* .bean.SlardarRemoteConfiguration
  - .wingsRemoteResolver
* .bean.SlardarReuseStreamConfiguration = `wings.enabled.slardar.restream`
  - .wingsReuseStreamFilter
* .bean.SlardarRighterConfiguration = `wings.enabled.slardar.righter`
  - .righterExceptionResolver
  - .righterInterceptor
* .bean.SlardarSessionConfiguration = `wings.enabled.slardar.session`
  - .httpSessionIdResolver
  - .slardarCookieSerializerCustomizer
* .bean.SlardarSwaggerConfiguration = `wings.enabled.slardar.swagger`
  - .slardarOpenApiCustomizer
* .bean.SlardarTerminalConfiguration = `wings.enabled.slardar.terminal`
  - .remoteTerminalBuilder
  - .securityTerminalBuilder
  - .terminalInterceptor
* .bean.SlardarUndertowConfiguration
  - .ut026010Customizer
* .bean.SlardarWebMvcConfiguration
* .monitor.viewer.LogViewer = `wings.slardar.monitor.view.enable`

### .warlock.spring

* .conf.WarlockAutoConfiguration
* .bean.WarlockAutoRunConfiguration
  - .databaseCheckerRunner
  - .registerEnumUtilRunner
* .bean.WarlockLockBeanConfiguration
  - .databaseGlobalLock
  - .jvmStaticGlobalLock
* .bean.WarlockTableChangeConfiguration
  - .tableChangePublisher
  - .wingsTableCudHandler
* .bean.WarlockWatchingConfiguration (false) = `wings.enabled.warlock.watching`
  - .slowSqlJooqListener
  - .watchingAround
* .conf.WarlockAwesomeAutoConfiguration
* .bean.WarlockAwesomeConfiguration
  - $JooqDaoScan
  - .registerRuntimeModeRunner
  - .runtimeConfService
* .conf.WarlockBondAutoConfiguration
* .bean.WarlockBondBeanConfiguration
  - autoRegisterCacheConst
  - defaultDaoAuthnCombo
  - warlockDangerService
  - warlockGrantService
  - warlockPermService
  - warlockPermServiceCaching
  - warlockRoleService
  - warlockRoleServiceCaching
  - warlockUserAuthnService
  - warlockUserBasisService
  - warlockUserLoginService
* .conf.WarlockShadowAutoConfiguration
* .bean.WarlockExceptionConfiguration
  - .defaultExceptionResolver
* .bean.WarlockJournalConfiguration
  - .terminalJournalService
* .bean.WarlockJustAuthConfiguration
  - .authStateCache
  - .justAuthRequestBuilder
  - .justAuthRequestSuccessHandler
* .bean.WarlockOauthTicketConfiguration
  - .warlockOauthService
  - .warlockTicketService
* .bean.WarlockOtherBeanConfiguration
  - $BindingErrorScan
  - $MvcRestScan
  - .righterSecretProvider
* .bean.WarlockWatching2Configuration
  - .slowResponseInterceptor
* .conf.WarlockSecurityAutoConfiguration
* .bean.WarlockSecurityBeanConfiguration
  - accessDeniedHandler
  - authAppPermChecker
  - authenticationEventPublisher
  - authStateBuilder
  - authZonePermChecker
  - comboWarlockAuthnService
  - comboWarlockAuthzService
  - comboWingsAuthCheckService
  - defaultPermRoleCombo
  - defaultUserAuthnAutoReg
  - defaultUserDetailsCombo
  - grantedAuthorityDefaults
  - justAuthLoginPageCombo
  - justAuthUserAuthnAutoReg
  - justAuthUserDetailsCombo
  - listAllLoginPageCombo
  - loginFailureHandler
  - loginFailureHandlerDefault
  - loginSuccessHandler
  - logoutSuccessHandler
  - memoryTypedAuthzCombo
  - memoryUserDetailsCombo
  - nonceUserDetailsCombo
  - warlockFailedLoginListener
  - warlockPermNormalizer
  - warlockSuccessLoginListener
  - wingsAuthDetailsSource
  - wingsAuthPageHandler
  - wingsAuthTypeParser
  - wingsUserDetailsService
* .bean.WarlockSecurityConfConfiguration
  - .securityCheckUrlRunner = `wings.enabled.warlock.sec-check-url`
  - .securityFilterChain = `wings.enabled.warlock.sec-http-chain`
  - .warlockSecurityAuthHttpConfigure = `wings.enabled.warlock.sec-http-auth`
  - .warlockSecurityAutoHttpConfigure = `wings.enabled.warlock.sec-http-auto`
  - .warlockSecurityBindHttpConfigure = `wings.enabled.warlock.sec-http-bind`
  - .warlockSecurityHttpBaseConfigure = `wings.enabled.warlock.sec-http-base`
  - .warlockWebCustomizer = `wings.enabled.warlock.sec-web-auto`
* .bean.WarlockSecurityDummyConfiguration (false) = `wings.enabled.warlock.dummy-service`
  - warlockGrantService
  - warlockPermService
  - warlockRoleService
  - warlockUserAuthnService
  - warlockUserBasisService
  - warlockUserLoginService
* .controller
  - .admin.AdminTweakController = `wings.enabled.warlock.mvc-tweak`
  - .auth.LoginPageController = `wings.enabled.warlock.mvc-login`
  - .auth.LoginProcController = `wings.enabled.warlock.mvc-proc`
  - .auth.SimpleOauthController = `wings.enabled.warlock.mvc-oauth`
  - .mock.MockSampleController = `wings.enabled.warlock.mvc-mock`
  - .test.TestEnvsController = `wings.enabled.warlock.mvc-test`
  - .user.AuthedUserController = `wings.enabled.warlock.mvc-user`
  - .admin.AdminAuthnController = `wings.enabled.warlock.mvc-auth`

### .tiny.mail

* .spring.conf.TinyMailAutoConfiguration
* .spring.bean.TinyMailConfiguration
  - $DaoServScan - scan `database` and `service`
  - $MvcRestScan - scan `controller`
  - .mailConfigProvider
  - .mailNotice
  - .mailSenderManager
  - .mailSenderProvider
* .controller
  - .MailListController = `wings.enabled.tiny.mail.mvc-list`
  - .controller.MailSendController = `wings.enabled.tiny.mail.mvc-send`
* .service.impl
  - .TinyMailListServiceImpl
  - .service.impl.TinyMailServiceImpl

### .tiny.task

* .spring.conf.TinyTaskAutoConfiguration
* .spring.bean.TinyTaskConfiguration
  - $DaoServScan - scan `database` and `service`
  - $MvcRestScan - scan `controller`
  - .tinyTaskerAutoRunner = `wings.enabled.tiny.task.autorun`
* .controller
  - .TaskConfController = `wings.enabled.tiny.task.mvc-conf`
  - .TaskExecController = `wings.enabled.tiny.task.mvc-exec`
  - .TaskListController = `wings.enabled.tiny.task.mvc-list`
* .service.impl
  - .TinyTaskBeatServiceImpl
  - .TinyTaskConfServiceImpl
  - .TinyTaskExecServiceImpl
  - .TinyTaskListServiceImpl
  - .TinyTaskServiceImpl
