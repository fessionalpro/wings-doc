import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o,c as d,b as e,e as r,d as i,f as t}from"./app-76302e33.js";const n={},h=e("h1",{id:"_5d-batrider-properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5d-batrider-properties","aria-hidden":"true"},"#"),r(" 5D.Batrider Properties")],-1),l=e("p",null,"Properties of servicecomb as microservices.",-1),p=e("h2",{id:"_5d-1-spring-servicecomb-79-properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5d-1-spring-servicecomb-79-properties","aria-hidden":"true"},"#"),r(" 5D.1.spring-servicecomb-79.properties")],-1),v={href:"https://servicecomb.apache.org/references/java-chassis/en_US/",target:"_blank",rel:"noopener noreferrer"},b=e("h3",{id:"servicecomb-service-application",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#servicecomb-service-application","aria-hidden":"true"},"#"),r(" servicecomb.service.application")],-1),m=e("p",null,[e("code",null,"String"),r("="),e("code",null,"${spring.application.name:batrider}"),r(" the name of the application that microservices belongs to.")],-1),u={id:"servicecomb-service-name",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#servicecomb-service-name","aria-hidden":"true"},"#",-1),f={href:"http://servicecomb.service.name",target:"_blank",rel:"noopener noreferrer"},_=t('<p><code>String</code>=<code>${spring.application.name:batrider}</code> microservice names, which should be unique within the application.</p><h3 id="servicecomb-service-version" tabindex="-1"><a class="header-anchor" href="#servicecomb-service-version" aria-hidden="true">#</a> servicecomb.service.version</h3><p><code>String</code>=<code>0.0.1</code>, microservice version.</p><h3 id="servicecomb-service-zero-config-enabled" tabindex="-1"><a class="header-anchor" href="#servicecomb-service-zero-config-enabled" aria-hidden="true">#</a> servicecomb.service.zero-config.enabled</h3><p><code>Boolean</code>=<code>true</code>, whether to use zero-config as the service-center.</p><h3 id="servicecomb-service-zero-config-multicast-address" tabindex="-1"><a class="header-anchor" href="#servicecomb-service-zero-config-multicast-address" aria-hidden="true">#</a> servicecomb.service.zero-config.multicast.address</h3><p><code>String</code>=<code>0.0.0.0:6666</code>, address for UDP.</p><h3 id="servicecomb-service-zero-config-multicast-group" tabindex="-1"><a class="header-anchor" href="#servicecomb-service-zero-config-multicast-group" aria-hidden="true">#</a> servicecomb.service.zero-config.multicast.group</h3><p><code>String</code>=<code>225.6.7.8</code>, multicast group address of UDP.</p><h3 id="servicecomb-service-registry-address" tabindex="-1"><a class="header-anchor" href="#servicecomb-service-registry-address" aria-hidden="true">#</a> servicecomb.service.registry.address</h3><p><code>List&lt;String&gt;</code>=<code>http://localhost:30100</code>, service center address, multiple addresses separated by commas.</p><h3 id="servicecomb-rest-address" tabindex="-1"><a class="header-anchor" href="#servicecomb-rest-address" aria-hidden="true">#</a> servicecomb.rest.address</h3><p><code>String</code>=<code>${server.address:localhost}:${server.port}</code>, service listen address, must be configured as the same as the web container.</p><h3 id="servicecomb-rest-servlet-urlpattern" tabindex="-1"><a class="header-anchor" href="#servicecomb-rest-servlet-urlpattern" aria-hidden="true">#</a> servicecomb.rest.servlet.urlPattern</h3><p><code>String</code>=<code>/servcomber/*</code>, coexisting paths with springMvc.</p><h3 id="server-servlet-path" tabindex="-1"><a class="header-anchor" href="#server-servlet-path" aria-hidden="true">#</a> server.servlet.path</h3><p><code>String</code>=<code>/</code>, default path of SpringMvc, in case of conflict <code>/mvc/</code> is recommended.</p><h3 id="servicecomb-provider-rest-scanrestcontroller" tabindex="-1"><a class="header-anchor" href="#servicecomb-provider-rest-scanrestcontroller" aria-hidden="true">#</a> servicecomb.provider.rest.scanRestController</h3><p><code>Boolean</code>=<code>false</code>, whether to scan the RestController, i.e. not distinguish from @RestSchma.</p><h3 id="servicecomb-handler-chain-consumer-default" tabindex="-1"><a class="header-anchor" href="#servicecomb-handler-chain-consumer-default" aria-hidden="true">#</a> servicecomb.handler.chain.Consumer.default</h3><p><code>List&lt;String&gt;</code>=<code>loadbalance, auth-consumer</code>, default handler chain of Consumer.</p><h3 id="servicecomb-handler-chain-provider-default" tabindex="-1"><a class="header-anchor" href="#servicecomb-handler-chain-provider-default" aria-hidden="true">#</a> servicecomb.handler.chain.Provider.default</h3><p><code>List&lt;String&gt;</code>=<code>auth9-provider</code>, default handler chain of Provider.</p><h2 id="_5d-2-spring-wings-enabled-79-properties" tabindex="-1"><a class="header-anchor" href="#_5d-2-spring-wings-enabled-79-properties" aria-hidden="true">#</a> 5D.2.spring-wings-enabled-79.properties</h2><h3 id="spring-wings-batrider-enabled-autoconf" tabindex="-1"><a class="header-anchor" href="#spring-wings-batrider-enabled-autoconf" aria-hidden="true">#</a> spring.wings.batrider.enabled.autoconf</h3><p><code>Boolean</code>=<code>true</code>, whether to enable auto config.</p><h2 id="_5d-3-wings-servicecomb-79-properties" tabindex="-1"><a class="header-anchor" href="#_5d-3-wings-servicecomb-79-properties" aria-hidden="true">#</a> 5D.3.wings-servicecomb-79.properties</h2><h3 id="wings-batrider-handler-auth-skip-schema" tabindex="-1"><a class="header-anchor" href="#wings-batrider-handler-auth-skip-schema" aria-hidden="true">#</a> wings.batrider.handler.auth-skip-schema</h3><p><code>Set&lt;String&gt;</code>=<code>scb-discovery</code>, which schemaId skip to auth.</p><h2 id="_5d-4-wings-warlock-security-79-properties" tabindex="-1"><a class="header-anchor" href="#_5d-4-wings-warlock-security-79-properties" aria-hidden="true">#</a> 5D.4.wings-warlock-security-79.properties</h2><h3 id="wings-warlock-security-web-ignore" tabindex="-1"><a class="header-anchor" href="#wings-warlock-security-web-ignore" aria-hidden="true">#</a> wings.warlock.security.web-ignore</h3><p><code>Map&lt;String, String&gt;</code>, <code>servicecomb</code>=<code>/servcomber/**</code>, RestSchema URLs without servlet processing.</p>',32);function w(x,S){const c=s("ExternalLinkIcon");return o(),d("div",null,[h,l,p,e("p",null,[r("Apache ServiceComb "),e("a",v,[r("Offical Document"),i(c)]),r(" Configuration.")]),b,m,e("h3",u,[g,r(),e("a",f,[r("servicecomb.service.name"),i(c)])]),_])}const z=a(n,[["render",w],["__file","5d-prop-batrider.html.vue"]]);export{z as default};
