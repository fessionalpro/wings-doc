import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as c,c as o,b as n,e as s,d as t,f as l}from"./app-371aab79.js";const u={},i=l(`<h1 id="_9b1-webservice-wsdl" tabindex="-1"><a class="header-anchor" href="#_9b1-webservice-wsdl" aria-hidden="true">#</a> 9B1.WebService Wsdl</h1><p>Many large systems that provide WebService, such as fedex. In this case, using springboot as a soap client is sufficient.</p><h2 id="_9b1-1-wsdl-to-java" tabindex="-1"><a class="header-anchor" href="#_9b1-1-wsdl-to-java" aria-hidden="true">#</a> 9B1.1.Wsdl to Java</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- pom.xml --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-oxm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web-services<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.jvnet.jaxb2.maven2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>maven-jaxb2-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.14.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executions</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>generate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>schemaIncludes</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>wsdl-client/fedex/advanced/PickupService_v22.wsdl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>wsdl-client/fedex/advanced/ShipService_v26.wsdl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>wsdl-client/fedex/standard/RateService_v28.wsdl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>wsdl-client/fedex/standard/TrackService_v19.wsdl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>schemaIncludes</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bindingIncludes</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>wsdl-client/bind/fedex.xjb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bindingIncludes</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executions</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9b1-2-wsdl-and-package" tabindex="-1"><a class="header-anchor" href="#_9b1-2-wsdl-and-package" aria-hidden="true">#</a> 9B1.2.Wsdl and Package</h2><ul><li>dep on <code>spring-boot-starter-web-services</code></li><li>use <code>maven-jaxb2-plugin</code></li><li>Configure xjb for wsdl, specifying the packages separately</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- wsdl-client/bind/fedex.xjb --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">jxb:</span>bindings</span> <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2.1<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name"><span class="token namespace">xmlns:</span>jxb</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://java.sun.com/xml/ns/jaxb<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name"><span class="token namespace">xmlns:</span>xjc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://java.sun.com/xml/ns/jaxb/xjc<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name"><span class="token namespace">xmlns:</span>xs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name"><span class="token namespace">jxb:</span>extensionBindingPrefixes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xjc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">jxb:</span>globalBindings</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xjc:</span>simple</span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">jxb:</span>javaType</span> <span class="token attr-name">xmlType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xs:integer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>java.lang.Integer<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">jxb:</span>javaType</span> <span class="token attr-name">xmlType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xs:positiveInteger<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>java.lang.Integer<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">jxb:</span>javaType</span> <span class="token attr-name">xmlType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xs:nonNegativeInteger<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>java.lang.Integer<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xjc:</span>javaType</span> <span class="token attr-name">xmlType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xs:date<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>java.time.LocalDate<span class="token punctuation">&quot;</span></span> <span class="token attr-name">adapter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pro.fessional.mirana.jaxb.LocalDateXmlAdapter<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xjc:</span>javaType</span> <span class="token attr-name">xmlType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xs:time<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>java.time.LocalTime<span class="token punctuation">&quot;</span></span> <span class="token attr-name">adapter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pro.fessional.mirana.jaxb.LocalTimeXmlAdapter<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xjc:</span>javaType</span> <span class="token attr-name">xmlType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xs:dateTime<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>java.time.LocalDateTime<span class="token punctuation">&quot;</span></span> <span class="token attr-name">adapter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pro.fessional.mirana.jaxb.LocalDateTimeXmlAdapter<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xjc:</span>javaType</span> <span class="token attr-name">xmlType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xs:duration<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>java.time.Duration<span class="token punctuation">&quot;</span></span> <span class="token attr-name">adapter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pro.fessional.mirana.jaxb.DurationXmlAdapter<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">jxb:</span>globalBindings</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">jxb:</span>bindings</span> <span class="token attr-name">schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../fedex/advanced/PickupService_v22.wsdl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">node</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//xs:schema<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">jxb:</span>schemaBindings</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">jxb:</span>package</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.moilioncircle.fedex.wsdl.pickup<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">jxb:</span>schemaBindings</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">jxb:</span>bindings</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">jxb:</span>bindings</span> <span class="token attr-name">schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../fedex/advanced/ShipService_v26.wsdl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">node</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//xs:schema<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">jxb:</span>schemaBindings</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">jxb:</span>package</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.moilioncircle.fedex.wsdl.ship<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">jxb:</span>schemaBindings</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">jxb:</span>bindings</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">jxb:</span>bindings</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then execute <code>mvn compile</code> to automatically generate the code in <code>target/generated-sources</code>. In the <code>operation</code> tag of <code>wsdl</code>, you can find the methods and their requests and responses, and generate the Client as needed.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FedexPickupClient</span> <span class="token keyword">extends</span> <span class="token class-name">WebServiceGatewaySupport</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">CreatePickupReply</span> <span class="token function">createPickup</span><span class="token punctuation">(</span><span class="token class-name">CreatePickupRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">CreatePickupReply</span><span class="token punctuation">)</span> <span class="token function">getWebServiceTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">marshalSendAndReceive</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9b1-3-xmlrootelement" tabindex="-1"><a class="header-anchor" href="#_9b1-3-xmlrootelement" aria-hidden="true">#</a> 9B1.3.@XmlRootElement</h2><p>Method ①, xjc generation, global simple, save time.</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">jxb:</span>bindings</span> <span class="token attr-name">schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>path/to/myschema.xsd<span class="token punctuation">&quot;</span></span> <span class="token attr-name">node</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/xs:schema<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">jxb:</span>globalBindings</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xjc:</span>simple</span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">jxb:</span>globalBindings</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">jxb:</span>bindings</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Method ②, use ObjectFactory and JAXBElement to wrap the request.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">JAXBElement</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PickupAvailabilityRequest</span><span class="token punctuation">&gt;</span></span> query <span class="token operator">=</span> objectFactory<span class="token punctuation">.</span><span class="token function">createPickupAvailabilityRequest</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">final</span> <span class="token class-name">JAXBElement</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PickupAvailabilityReply</span><span class="token punctuation">&gt;</span></span> reply <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">JAXBElement</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PickupAvailabilityReply</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> 
<span class="token function">getWebServiceTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">marshalSendAndReceive</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> reply<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Method ③, configure anno in bindings for each wsdl, the configuration is verbose and not recommended.</p><h2 id="_9b1-4-reference" tabindex="-1"><a class="header-anchor" href="#_9b1-4-reference" aria-hidden="true">#</a> 9B1.4.Reference</h2>`,16),k={href:"https://github.com/highsource/maven-jaxb2-plugin/wiki/Configuration-Cheat-Sheet",target:"_blank",rel:"noopener noreferrer"},r={href:"https://stackoverflow.com/questions/819720/no-xmlrootelement-generated-by-jaxb/2172942#2172942",target:"_blank",rel:"noopener noreferrer"},d={href:"https://docs.oracle.com/javase/tutorial/jaxb/intro/custom.html",target:"_blank",rel:"noopener noreferrer"};function g(m,v){const a=e("ExternalLinkIcon");return c(),o("div",null,[i,n("ul",null,[n("li",null,[n("a",k,[s("https://github.com/highsource/maven-jaxb2-plugin/wiki/Configuration-Cheat-Sheet"),t(a)])]),n("li",null,[n("a",r,[s("https://stackoverflow.com/questions/819720/no-xmlrootelement-generated-by-jaxb/2172942#2172942"),t(a)])]),n("li",null,[n("a",d,[s("https://docs.oracle.com/javase/tutorial/jaxb/intro/custom.html"),t(a)])])])])}const q=p(u,[["render",g],["__file","9b1.web-service.html.vue"]]);export{q as default};