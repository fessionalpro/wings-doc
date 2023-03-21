import{_ as r,X as n,Y as l,$ as e,a1 as a,a0 as t,a4 as i,a3 as s,C as d}from"./framework-a66c2b6a.js";const c={},h=s('<h1 id="_0g-ghostship-model" tabindex="-1"><a class="header-anchor" href="#_0g-ghostship-model" aria-hidden="true">#</a> 0G.GhostShip Model</h1><p>WingsBoot basic architectural idea is to do the model vertically and overlay the function horizontally. The codename has bean called CruiseModel, later in the Dota series, changed to GhostShip, more wings a little</p><h2 id="_0g-1-aboard-to-the-sea-gosea" tabindex="-1"><a class="header-anchor" href="#_0g-1-aboard-to-the-sea-gosea" aria-hidden="true">#</a> 0G.1.Aboard to the sea (GoSea)</h2><p>Chinglish says, <code>Go And Sea</code>，<code>Let&#39;s Me See Sea</code></p><p>In my experience with startups, almost everything is lacking and nothing is certain. The entire team is in the same boat, trying to survive and explore at sea, while trying not to get lost or sink.</p><h2 id="_0g-2-vertical-model-floor" tabindex="-1"><a class="header-anchor" href="#_0g-2-vertical-model-floor" aria-hidden="true">#</a> 0G.2.Vertical Model (Floor)</h2><p>The business architecture and model, program architecture and model, have strict boundaries and dependency requirements. Usually, from the bottom to the top like a building floor, they are called Floor-N (N is a natural number)</p><h3 id="unidirectional-call-avoid-crossing" tabindex="-1"><a class="header-anchor" href="#unidirectional-call-avoid-crossing" aria-hidden="true">#</a> Unidirectional Call, Avoid Crossing</h3><p>Usually, the upper layer can invoke the same layer or the lower layer, but not vice versa. For example, in the structure of Dao/Ser/Mvc:</p>',9),u=e("h3",{id:"unidirectional-flow-event-sourcing",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#unidirectional-flow-event-sourcing","aria-hidden":"true"},"#"),a(" Unidirectional Flow, Event Sourcing")],-1),p=e("p",null,"Data flow and business flow require unidirectional flow. In the case of turbulent flow, unambiguous events should be propagated and tracked.",-1),f=e("p",null,"For example, data flows from the bottom up, while business flows from the top down.",-1),g=e("h2",{id:"_0g-3-horizontal-functions-layer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_0g-3-horizontal-functions-layer","aria-hidden":"true"},"#"),a(" 0G.3.Horizontal Functions (Layer)")],-1),m=e("p",null,"Functions or modules can combine, inherit, overlay or filter to provide appropriate services to the outside world. Usually, from the inside to the outside, they are called Layer-N (N is a natural number)",-1);function _(v,b){const o=d("Badge");return n(),l("div",null,[h,e("ul",null,[e("li",null,[a("Service can call Dao and Service, but should avoid calling back. "),t(o,{type:"tip",vertical:"top"},{default:i(()=>[a("SHOULD")]),_:1})]),e("li",null,[a("Controller can call Service, but must not be called back. "),t(o,{type:"info",vertical:"top"},{default:i(()=>[a("MUST")]),_:1})]),e("li",null,[a("Controller should not call Dao. "),t(o,{type:"tip",vertical:"top"},{default:i(()=>[a("SHOULD")]),_:1})])]),u,p,f,g,m])}const w=r(c,[["render",_],["__file","0g-ghost-ship.html.vue"]]);export{w as default};
