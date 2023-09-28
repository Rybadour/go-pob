var Gt=Object.defineProperty;var qt=(e,t,n)=>t in e?Gt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var C=(e,t,n)=>(qt(e,typeof t!="symbol"?t+"":t,n),n);import{S as Xe,i as Ge,s as qe,W as bt,k as be,a as vt,l as ve,m as Ie,h as J,c as It,n as H,p as K,b as ce,G as f,a7 as Ce,R as T,X as kt,Y as St,Z as Lt,g as V,d as se,I as Et,ad as jt,o as st,a2 as Rt,ae as Bt,ac as d,w as $e,N as Ze,O as zt,v as At,f as Mt,J as ye,$ as Jt,y as it,z as at,A as rt,E as Ut,B as ot,e as ft}from"../chunks/index.3d9c3a98.js";import{r as Vt,w as lt}from"../chunks/index.6c284d28.js";import{s as et,c as Wt}from"../chunks/global.4e98742d.js";class Ht{constructor(){C(this,"currentLayerId");C(this,"setups");C(this,"renderers");C(this,"dispatchers");C(this,"needsSetup");C(this,"needsRedraw");C(this,"context");C(this,"width");C(this,"height");C(this,"autoclear");C(this,"pixelRatio");C(this,"renderLoop");C(this,"layerObserver");C(this,"layerRef");C(this,"layerSequence");C(this,"renderingLayerId");C(this,"activeLayerId");C(this,"activeLayerDispatcher");this.register=this.register.bind(this),this.unregister=this.unregister.bind(this),this.redraw=this.redraw.bind(this),this.getRenderingLayerId=this.getRenderingLayerId.bind(this),this.currentLayerId=1,this.setups=new Map,this.renderers=new Map,this.dispatchers=new Map,this.needsSetup=!1,this.needsRedraw=!0,this.renderingLayerId=0,this.activeLayerId=0,this.layerSequence=[]}redraw(){this.needsRedraw=!0}register({setup:t,render:n,dispatcher:a}){return t&&(this.setups.set(this.currentLayerId,t),this.needsSetup=!0),this.renderers.set(this.currentLayerId,n),this.dispatchers.set(this.currentLayerId,a),this.needsRedraw=!0,this.currentLayerId++}unregister(t){this.renderers.delete(t),this.dispatchers.delete(t),this.needsRedraw=!0}setup(t,n){this.context=t,this.layerRef=n,this.observeLayerSequence(),this.startRenderLoop()}observeLayerSequence(){this.layerObserver=new MutationObserver(this.getLayerSequence.bind(this)),this.layerObserver.observe(this.layerRef,{childList:!0}),this.getLayerSequence()}getLayerSequence(){const t=[...this.layerRef.children];this.layerSequence=t.map(n=>+(n.dataset.layerId??-1)),this.redraw()}startRenderLoop(){this.render(),this.renderLoop=requestAnimationFrame(()=>this.startRenderLoop())}render(){var u;const t=this.context,n=this.width,a=this.height,c=this.pixelRatio;if(this.needsSetup){for(const[o,r]of this.setups)r({context:t,width:n,height:a}),this.setups.delete(o);this.needsSetup=!1}if(this.needsRedraw){t.setTransform(c,0,0,c,0,0),this.autoclear&&t.clearRect(0,0,n,a);for(const o of this.layerSequence)this.renderingLayerId=o,(u=this.renderers.get(o))==null||u({context:t,width:n,height:a});this.needsRedraw=!1}}setActiveLayer(t,n){this.activeLayerId!==t&&(n instanceof MouseEvent&&(this.dispatchLayerEvent(new PointerEvent("pointerleave",n)),this.dispatchLayerEvent(new MouseEvent("mouseleave",n))),this.activeLayerId=t,this.activeLayerDispatcher=this.dispatchers.get(t),n instanceof MouseEvent&&(this.dispatchLayerEvent(new PointerEvent("pointerenter",n)),this.dispatchLayerEvent(new MouseEvent("mouseenter",n))))}dispatchLayerEvent(t){if(this.activeLayerDispatcher){if(window.TouchEvent&&t instanceof TouchEvent){const{left:n,top:a}=t.target.getBoundingClientRect(),{clientX:c,clientY:u}=t.changedTouches[0],o={x:c-n,y:u-a,originalEvent:t};this.activeLayerDispatcher(t.type,o)}else if(t instanceof MouseEvent){const n={x:t.offsetX,y:t.offsetY,originalEvent:t};this.activeLayerDispatcher(t.type,n)}}}getRenderingLayerId(){return this.renderingLayerId}destroy(){typeof window>"u"||(this.layerObserver.disconnect(),cancelAnimationFrame(this.renderLoop))}}const Kt=e=>{const t=e*2,n=t>>16&255,a=t>>8&255,c=t&255;return`rgb(${n}, ${a}, ${c})`},Zt=(e,t,n)=>{const a=(e<<16|t<<8|n)/2;return a%1?0:a},Qt=["drawImage"],xt=["filter","shadowBlur","globalCompositeOperation","globalAlpha"],$t=["drawImage","fill","fillRect","fillText","stroke","strokeRect","strokeText"],en=e=>{let t;const n=document.createElement("canvas"),a=n.getContext("2d",{willReadFrequently:!0}),c=()=>{n.width=e.canvas.width,n.height=e.canvas.height};return new MutationObserver(c).observe(e.canvas,{attributeFilter:["width","height"]}),c(),new Proxy(e,{get(o,r){if(r==="_getLayerIdAtPixel")return(w,E)=>{const[S,v,m]=a.getImageData(w,E,1,1).data;return Zt(S,v,m)};const h=o[r];return typeof h!="function"?h:function(...w){if($t.includes(r)){const E=Kt(t());a.fillStyle=E,a.strokeStyle=E}if(r==="drawImage"){const E=w.slice(1);a.fillRect(...E)}return Qt.includes(r)||Reflect.apply(h,a,w),Reflect.apply(h,o,w)}},set(o,r,h){return r==="_renderingLayerId"?(t=h,!0):(o[r]=h,xt.includes(r)||(a[r]=h),!0)}})};function tn(e){let t,n,a,c=`${e[0]}px`,u=`${e[1]}px`,o,r,h,w,E;const S=e[18].default,v=bt(S,e,e[17],null);return{c(){t=be("canvas"),o=vt(),r=be("div"),v&&v.c(),this.h()},l(m){t=ve(m,"CANVAS",{width:!0,height:!0,class:!0,style:!0}),Ie(t).forEach(J),o=It(m),r=ve(m,"DIV",{});var I=Ie(r);v&&v.l(I),I.forEach(J),this.h()},h(){H(t,"width",n=e[0]*e[5]),H(t,"height",a=e[1]*e[5]),H(t,"class",e[4]),H(t,"style",e[2]),K(t,"display","block"),K(t,"width",c),K(t,"height",u),K(r,"display","none")},m(m,I){ce(m,t,I),e[64](t),ce(m,o,I),ce(m,r,I),v&&v.m(r,null),e[65](r),h=!0,w||(E=[f(t,"touchstart",Ce(function(){T(e[3]?e[9]:null)&&(e[3]?e[9]:null).apply(this,arguments)})),f(t,"mousemove",function(){T(e[3]?e[8]:null)&&(e[3]?e[8]:null).apply(this,arguments)}),f(t,"pointermove",function(){T(e[3]?e[8]:null)&&(e[3]?e[8]:null).apply(this,arguments)}),f(t,"click",function(){T(e[3]?e[10]:null)&&(e[3]?e[10]:null).apply(this,arguments)}),f(t,"contextmenu",function(){T(e[3]?e[10]:null)&&(e[3]?e[10]:null).apply(this,arguments)}),f(t,"dblclick",function(){T(e[3]?e[10]:null)&&(e[3]?e[10]:null).apply(this,arguments)}),f(t,"mousedown",function(){T(e[3]?e[10]:null)&&(e[3]?e[10]:null).apply(this,arguments)}),f(t,"mouseenter",function(){T(e[3]?e[10]:null)&&(e[3]?e[10]:null).apply(this,arguments)}),f(t,"mouseleave",function(){T(e[3]?e[10]:null)&&(e[3]?e[10]:null).apply(this,arguments)}),f(t,"mouseup",function(){T(e[3]?e[10]:null)&&(e[3]?e[10]:null).apply(this,arguments)}),f(t,"wheel",function(){T(e[3]?e[10]:null)&&(e[3]?e[10]:null).apply(this,arguments)}),f(t,"touchcancel",Ce(function(){T(e[3]?e[10]:null)&&(e[3]?e[10]:null).apply(this,arguments)})),f(t,"touchend",Ce(function(){T(e[3]?e[10]:null)&&(e[3]?e[10]:null).apply(this,arguments)})),f(t,"touchmove",Ce(function(){T(e[3]?e[10]:null)&&(e[3]?e[10]:null).apply(this,arguments)})),f(t,"pointerenter",function(){T(e[3]?e[10]:null)&&(e[3]?e[10]:null).apply(this,arguments)}),f(t,"pointerleave",function(){T(e[3]?e[10]:null)&&(e[3]?e[10]:null).apply(this,arguments)}),f(t,"pointerdown",function(){T(e[3]?e[10]:null)&&(e[3]?e[10]:null).apply(this,arguments)}),f(t,"pointerup",function(){T(e[3]?e[10]:null)&&(e[3]?e[10]:null).apply(this,arguments)}),f(t,"pointercancel",function(){T(e[3]?e[10]:null)&&(e[3]?e[10]:null).apply(this,arguments)}),f(t,"focus",e[19]),f(t,"blur",e[20]),f(t,"fullscreenchange",e[21]),f(t,"fullscreenerror",e[22]),f(t,"scroll",e[23]),f(t,"cut",e[24]),f(t,"copy",e[25]),f(t,"paste",e[26]),f(t,"keydown",e[27]),f(t,"keypress",e[28]),f(t,"keyup",e[29]),f(t,"auxclick",e[30]),f(t,"click",e[31]),f(t,"contextmenu",e[32]),f(t,"dblclick",e[33]),f(t,"mousedown",e[34]),f(t,"mouseenter",e[35]),f(t,"mouseleave",e[36]),f(t,"mousemove",e[37]),f(t,"mouseover",e[38]),f(t,"mouseout",e[39]),f(t,"mouseup",e[40]),f(t,"select",e[41]),f(t,"wheel",e[42]),f(t,"drag",e[43]),f(t,"dragend",e[44]),f(t,"dragenter",e[45]),f(t,"dragstart",e[46]),f(t,"dragleave",e[47]),f(t,"dragover",e[48]),f(t,"drop",e[49]),f(t,"touchcancel",e[50]),f(t,"touchend",e[51]),f(t,"touchmove",e[52]),f(t,"touchstart",e[53]),f(t,"pointerover",e[54]),f(t,"pointerenter",e[55]),f(t,"pointerdown",e[56]),f(t,"pointermove",e[57]),f(t,"pointerup",e[58]),f(t,"pointercancel",e[59]),f(t,"pointerout",e[60]),f(t,"pointerleave",e[61]),f(t,"gotpointercapture",e[62]),f(t,"lostpointercapture",e[63])],w=!0)},p(m,I){e=m,(!h||I[0]&33&&n!==(n=e[0]*e[5]))&&H(t,"width",n),(!h||I[0]&34&&a!==(a=e[1]*e[5]))&&H(t,"height",a),(!h||I[0]&16)&&H(t,"class",e[4]),(!h||I[0]&4)&&H(t,"style",e[2]);const b=I[0]&4;b&&K(t,"display","block"),(b||I[0]&5&&c!==(c=`${e[0]}px`))&&K(t,"width",c),(b||I[0]&6&&u!==(u=`${e[1]}px`))&&K(t,"height",u),v&&v.p&&(!h||I[0]&131072)&&kt(v,S,e,e[17],h?Lt(S,e[17],I,null):St(e[17]),null)},i(m){h||(V(v,m),h=!0)},o(m){se(v,m),h=!1},d(m){m&&J(t),e[64](null),m&&J(o),m&&J(r),v&&v.d(m),e[65](null),w=!1,Et(E)}}}const Nt=Symbol(),nn=()=>Bt(Nt);function sn(e,t,n){let a,{$$slots:c={},$$scope:u}=t,{width:o=640,height:r=640,pixelRatio:h=null,style:w="",autoclear:E=!0,layerEvents:S=!1}=t,{class:v=""}=t,m,I=null,b;const g=new Ht;function Y(){g.redraw()}function Z(){return m}function ie(){return I}h==null&&(typeof window<"u"?h=window.devicePixelRatio:h=2),jt(Nt,{register:g.register,unregister:g.unregister,redraw:g.redraw}),st(()=>{const s=m.getContext("2d");S?(I=en(s),I._renderingLayerId=g.getRenderingLayerId):I=s,g.setup(I,b)}),Rt(()=>g.destroy());const k=s=>{const we=s.offsetX*a,de=s.offsetY*a,Ke=I._getLayerIdAtPixel(we,de);g.setActiveLayer(Ke,s),g.dispatchLayerEvent(s)},je=s=>{const{clientX:we,clientY:de}=s.changedTouches[0],{left:Ke,top:Dt}=m.getBoundingClientRect(),Ft=(we-Ke)*a,Yt=(de-Dt)*a,Xt=I._getLayerIdAtPixel(Ft,Yt);g.setActiveLayer(Xt,s),g.dispatchLayerEvent(s)},F=s=>{window.TouchEvent&&s instanceof TouchEvent&&s.preventDefault(),g.dispatchLayerEvent(s)};function pe(s){d.call(this,e,s)}function fe(s){d.call(this,e,s)}function X(s){d.call(this,e,s)}function G(s){d.call(this,e,s)}function ke(s){d.call(this,e,s)}function Se(s){d.call(this,e,s)}function Le(s){d.call(this,e,s)}function Ee(s){d.call(this,e,s)}function me(s){d.call(this,e,s)}function Be(s){d.call(this,e,s)}function ze(s){d.call(this,e,s)}function Je(s){d.call(this,e,s)}function Ue(s){d.call(this,e,s)}function Q(s){d.call(this,e,s)}function Re(s){d.call(this,e,s)}function Ae(s){d.call(this,e,s)}function he(s){d.call(this,e,s)}function ge(s){d.call(this,e,s)}function Ve(s){d.call(this,e,s)}function i(s){d.call(this,e,s)}function U(s){d.call(this,e,s)}function x(s){d.call(this,e,s)}function $(s){d.call(this,e,s)}function q(s){d.call(this,e,s)}function j(s){d.call(this,e,s)}function ae(s){d.call(this,e,s)}function R(s){d.call(this,e,s)}function l(s){d.call(this,e,s)}function y(s){d.call(this,e,s)}function A(s){d.call(this,e,s)}function _(s){d.call(this,e,s)}function p(s){d.call(this,e,s)}function L(s){d.call(this,e,s)}function O(s){d.call(this,e,s)}function P(s){d.call(this,e,s)}function W(s){d.call(this,e,s)}function D(s){d.call(this,e,s)}function B(s){d.call(this,e,s)}function ee(s){d.call(this,e,s)}function z(s){d.call(this,e,s)}function Me(s){d.call(this,e,s)}function te(s){d.call(this,e,s)}function ne(s){d.call(this,e,s)}function Ne(s){d.call(this,e,s)}function We(s){d.call(this,e,s)}function He(s){$e[s?"unshift":"push"](()=>{m=s,n(6,m)})}function Pe(s){$e[s?"unshift":"push"](()=>{b=s,n(7,b)})}return e.$$set=s=>{"width"in s&&n(0,o=s.width),"height"in s&&n(1,r=s.height),"pixelRatio"in s&&n(11,h=s.pixelRatio),"style"in s&&n(2,w=s.style),"autoclear"in s&&n(12,E=s.autoclear),"layerEvents"in s&&n(3,S=s.layerEvents),"class"in s&&n(4,v=s.class),"$$scope"in s&&n(17,u=s.$$scope)},e.$$.update=()=>{e.$$.dirty[0]&2048&&n(5,a=h??1),e.$$.dirty[0]&1&&n(16,g.width=o,g),e.$$.dirty[0]&2&&n(16,g.height=r,g),e.$$.dirty[0]&32&&n(16,g.pixelRatio=a,g),e.$$.dirty[0]&4096&&n(16,g.autoclear=E,g),e.$$.dirty[0]&71683&&g.redraw()},[o,r,w,S,v,a,m,b,k,je,F,h,E,Y,Z,ie,g,u,c,pe,fe,X,G,ke,Se,Le,Ee,me,Be,ze,Je,Ue,Q,Re,Ae,he,ge,Ve,i,U,x,$,q,j,ae,R,l,y,A,_,p,L,O,P,W,D,B,ee,z,Me,te,ne,Ne,We,He,Pe]}class an extends Xe{constructor(t){super(),Ge(this,t,sn,tn,qe,{width:0,height:1,pixelRatio:11,style:2,autoclear:12,layerEvents:3,class:4,redraw:13,getCanvas:14,getContext:15},null,[-1,-1,-1])}get redraw(){return this.$$.ctx[13]}get getCanvas(){return this.$$.ctx[14]}get getContext(){return this.$$.ctx[15]}}function rn(e){let t;return{c(){t=be("div"),this.h()},l(n){t=ve(n,"DIV",{"data-layer-id":!0}),Ie(t).forEach(J),this.h()},h(){H(t,"data-layer-id",e[0])},m(n,a){ce(n,t,a)},p:Ze,i:Ze,o:Ze,d(n){n&&J(t)}}}function on(e,t,n){const{register:a,unregister:c,redraw:u}=nn(),o=zt();let{setup:r=void 0}=t,{render:h=()=>{}}=t;const w=a({setup:r,render:h,dispatcher:o});return Rt(()=>c(w)),e.$$set=E=>{"setup"in E&&n(1,r=E.setup),"render"in E&&n(2,h=E.render)},e.$$.update=()=>{e.$$.dirty&4&&u()},[w,r,h]}class ln extends Xe{constructor(t){super(),Ge(this,t,on,rn,qe,{setup:1,render:2})}}let ht;const Pt=Date.now(),Ct=e=>(e(Date.now()-Pt),ht=window.requestAnimationFrame(()=>Ct(e)),()=>window.cancelAnimationFrame(ht));function cn(){}Vt(Date.now()-Pt,typeof window>"u"?cn:Ct);const ct=lt(void 0),ut=lt(void 0);let N;const ue={},oe={},re={},Tt=new Set,Fe={},tt={},_e={},Ot={},M={};let Te=.3835;const dt={Juggernaut:{x:-10400,y:5200},Berserker:{x:-10400,y:3700},Chieftain:{x:-10400,y:2200},Raider:{x:10200,y:5200},Deadeye:{x:10200,y:2200},Pathfinder:{x:10200,y:3700},Occultist:{x:-1500,y:-9850},Elementalist:{x:0,y:-9850},Necromancer:{x:1500,y:-9850},Slayer:{x:1500,y:9800},Gladiator:{x:-1500,y:9800},Champion:{x:0,y:9800},Inquisitor:{x:-10400,y:-2200},Hierophant:{x:-10400,y:-3700},Guardian:{x:-10400,y:-5200},Assassin:{x:10200,y:-5200},Trickster:{x:10200,y:-3700},Saboteur:{x:10200,y:-2200},Ascendant:{x:-7800,y:7200}},le={},un=async e=>{var n,a,c,u;if(!et)return;const t=await et.GetTree(e);N=JSON.parse(t),console.log("Loaded skill tree",N),N.imageZoomLevels&&(Te=N.imageZoomLevels[N.imageZoomLevels.length-1]),Object.keys(N.groups).forEach(o=>{var w;const r=N.groups[o],h=parseInt(o);ue[h]=r,(w=r.nodes)==null||w.forEach(E=>{const S=N.nodes[E];if(oe[parseInt(E)]=S,S.classStartIndex!==void 0){Fe[h]=S.classStartIndex;for(const v of[...S.out||[],...S.in||[]]){const m=N.nodes[v];m.skill&&m.ascendancyName===void 0&&(tt[S.classStartIndex]=[...tt[S.classStartIndex]||[],m.skill])}}S.ascendancyName!==void 0&&(re[h]=S.ascendancyName),S.isAscendancyStart&&(Tt.add(h),S.ascendancyName&&(le[S.ascendancyName]={x:dt[S.ascendancyName].x-r.x,y:dt[S.ascendancyName].y-r.y}))})});for(const o of["keystoneInactive","notableInactive","normalInactive","masteryInactive"]){const r=(n=N.sprites[o])==null?void 0:n[Te];Object.keys((r==null?void 0:r.coords)||{}).forEach(h=>r&&(_e[h]=r))}for(const o of["keystoneActive","notableActive","normalActive","masteryActiveSelected"]){const r=(a=N.sprites[o])==null?void 0:a[Te];Object.keys(r.coords).forEach(h=>r&&(Ot[h]=r))}for(const o of["background","mastery","masteryConnected","ascendancyBackground","ascendancy","startNode","groupBackground","frame","jewel","line","jewelRadius"]){let r=(c=N.sprites[o])==null?void 0:c[Te];r||(r=(u=N.sprites[o])==null?void 0:u[Object.keys(N.sprites[o])[0]]),Object.keys((r==null?void 0:r.coords)||{}).forEach(h=>r&&(M[h]=r))}ct.set(N),ut.set(e)},Ye=(e,t,n,a,c)=>({x:(Math.abs(N.min_x)+e+n)/c,y:(Math.abs(N.min_y)+t+a)/c}),fn=(e,t,n)=>{const a=Math.PI/180*n,c=Math.cos(a),u=Math.sin(a),o=c*(t.x-e.x)+u*(t.y-e.y)+e.x,r=c*(t.y-e.y)-u*(t.x-e.x)+e.y;return{x:o,y:r}},yt=[0,30,45,60,90,120,135,150,180,210,225,240,270,300,315,330],pt=[0,10,20,30,40,45,50,60,70,80,90,100,110,120,130,135,140,150,160,170,180,190,200,210,220,225,230,240,250,260,270,280,290,300,310,315,320,330,340,350],nt=(e,t)=>{var a;const n=(a=N.constants.skillsPerOrbit)==null?void 0:a[e];return n==16?yt[yt.length-t]||0:n==40?pt[pt.length-t]||0:360-360/(n||1)*t},Oe={},Qe=(e,t,n,a)=>{var c,u;if(e.group===void 0||e.orbit===void 0||e.orbitIndex===void 0||e.skill===void 0||!N.groups||!N.constants.orbitRadii)return{x:0,y:0};if(!(e.skill in Oe)){const o=N.groups[e.group],r=(e.ascendancyName&&((c=le[e.ascendancyName])==null?void 0:c.x)||0)+o.x,h=(e.ascendancyName&&((u=le[e.ascendancyName])==null?void 0:u.y)||0)+o.y,w=nt(e.orbit,e.orbitIndex);Oe[e.skill]=fn({x:r,y:h},{x:r,y:h-N.constants.orbitRadii[e.orbit]},w)}return Ye(Oe[e.skill].x,Oe[e.skill].y,t,n,a)},hn=(e,t)=>Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)),{window:xe}=Jt;function mt(e){let t,n,a,c;n=new an({props:{width:e[0],height:e[1],$$slots:{default:[dn]},$$scope:{ctx:e}}}),n.$on("pointerdown",e[6]),n.$on("wheel",e[9]);const u=e[26].default,o=bt(u,e,e[28],null);return{c(){t=be("div"),it(n.$$.fragment),a=vt(),o&&o.c(),this.h()},l(r){t=ve(r,"DIV",{style:!0});var h=Ie(t);at(n.$$.fragment,h),a=It(h),o&&o.l(h),h.forEach(J),this.h()},h(){K(t,"touch-action","none"),K(t,"cursor",e[2])},m(r,h){ce(r,t,h),rt(n,t,null),Ut(t,a),o&&o.m(t,null),c=!0},p(r,h){const w={};h[0]&1&&(w.width=r[0]),h[0]&2&&(w.height=r[1]),h[0]&268435472&&(w.$$scope={dirty:h,ctx:r}),n.$set(w),o&&o.p&&(!c||h[0]&268435456)&&kt(o,u,r,r[28],c?Lt(u,r[28],h,null):St(r[28]),null),(!c||h[0]&4)&&K(t,"cursor",r[2])},i(r){c||(V(n.$$.fragment,r),V(o,r),c=!0)},o(r){se(n.$$.fragment,r),se(o,r),c=!1},d(r){r&&J(t),ot(n),o&&o.d(r)}}}function dn(e){let t,n;return t=new ln({props:{render:e[4]}}),{c(){it(t.$$.fragment)},l(a){at(t.$$.fragment,a)},m(a,c){rt(t,a,c),n=!0},p(a,c){const u={};c[0]&16&&(u.render=a[4]),t.$set(u)},i(a){n||(V(t.$$.fragment,a),n=!0)},o(a){se(t.$$.fragment,a),n=!1},d(a){ot(t,a)}}}function yn(e){let t,n,a,c,u=e[0]&&e[1]&&mt(e);return{c(){t=be("div"),u&&u.c(),this.h()},l(o){t=ve(o,"DIV",{class:!0});var r=Ie(t);u&&u.l(r),r.forEach(J),this.h()},h(){H(t,"class","w-full h-full max-w-full max-h-full overflow-hidden")},m(o,r){ce(o,t,r),u&&u.m(t,null),e[27](t),n=!0,a||(c=[f(xe,"pointerup",e[7]),f(xe,"pointermove",e[8]),f(xe,"resize",e[10])],a=!0)},p(o,r){o[0]&&o[1]?u?(u.p(o,r),r[0]&3&&V(u,1)):(u=mt(o),u.c(),V(u,1),u.m(t,null)):u&&(At(),se(u,1,1,()=>{u=null}),Mt())},i(o){n||(V(u),n=!0)},o(o){se(u),n=!1},d(o){o&&J(t),u&&u.d(),e[27](null),a=!1,Et(c)}}}const gt="25px Roboto Flex",wt="17px Roboto Flex",De=2.6;function pn(e,t,n){let a,c,u,o,r,h,w;ye(e,ct,i=>n(22,o=i)),ye(e,ut,i=>n(23,r=i)),ye(e,Wt,i=>n(25,w=i));let{$$slots:E={},$$scope:S}=t,v,m,{clickNode:I=console.log}=t,b=10,g=0,Y=0;const Z={},ie={},k=(i,U,x,$,q=!1,j=!1,ae=!1)=>{const R=$[U];if(!R)return;const l=R.filename,y=new URL(l).pathname,A=y.substring(y.lastIndexOf("/")+1),_=c+A;_ in Z||(Z[_]=new Image,Z[_].src=_);const p=R.coords[U],L=p.w/b*De,O=p.h/b*De,P=x.x-L/2,W=x.y-O/2;let D=W;if(q&&(D=W-O/2),j&&Z[_].complete){const B=_+":"+U;if(!(B in ie)||!(ae in ie[B])){const ee=document.createElement("canvas"),z=ee.getContext("2d");ee.width=p.w,ee.height=p.h,z.save(),z.beginPath(),z.arc(p.w/2,p.h/2,p.w/2,0,Math.PI*2,!0),z.closePath(),z.clip(),ae||(z.filter="brightness(50%) opacity(50%)"),z.drawImage(Z[_],p.x,p.y,p.w,p.h,0,0,p.w,p.h),B in ie||(ie[B]={}),ie[B][ae]=ee}i.drawImage(ie[B][ae],0,0,p.w,p.h,P,D,L,O)}else i.drawImage(Z[_],p.x,p.y,p.w,p.h,P,D,L,O);q&&(i.save(),i.translate(P,W),i.rotate(Math.PI),i.drawImage(Z[_],p.x,p.y,p.w,p.h,-L,-(O/2),L,-O),i.restore())},je=(i,U,x)=>{const $=[];let q="";return i.split(" ").forEach(j=>{U.measureText(q+j).width<x?q+=" "+j:($.push(q.trim()),q=j)}),q.length>0&&$.push(q.trim()),$};let F={x:Number.MIN_VALUE,y:Number.MIN_VALUE},pe="unset";const fe=lt([]);ye(e,fe,i=>n(24,h=i));const X={};let G,ke=0,Se=0,Le=0,Ee=0,me=!1;const Be=i=>{me=!0,ke=i.offsetX,Se=i.offsetY,Le=g,Ee=Y,n(17,F={x:i.offsetX,y:i.offsetY}),G&&I(G)},ze=i=>{i.type==="pointerup"&&(me=!1),n(17,F={x:i.offsetX,y:i.offsetY})},Je=i=>{me&&(n(15,g=Le-(ke-i.offsetX)*b),n(16,Y=Ee-(Se-i.offsetY)*b)),n(17,F={x:i.offsetX,y:i.offsetY})},Ue=i=>{i.deltaY>0?b<30&&(n(15,g+=i.offsetX),n(16,Y+=i.offsetY)):b>3&&(n(15,g-=i.offsetX),n(16,Y-=i.offsetY)),n(14,b=Math.min(30,Math.max(3,b+i.deltaY/100))),i.preventDefault(),i.stopPropagation(),i.stopImmediatePropagation()};let Q,Re=0,Ae=0;const he=()=>{Q&&(n(0,Re=Q.offsetWidth),n(1,Ae=Q.offsetHeight))};let ge=!1;st(()=>{new ResizeObserver(he).observe(Q),he()});function Ve(i){$e[i?"unshift":"push"](()=>{Q=i,n(3,Q)})}return e.$$set=i=>{"clickNode"in i&&n(11,I=i.clickNode),"$$scope"in i&&n(28,S=i.$$scope)},e.$$.update=()=>{e.$$.dirty[0]&33554432&&(w==null||w.Build.ClassName.then(i=>n(12,v=i))),e.$$.dirty[0]&33554432&&(w==null||w.Build.AscendClassName.then(i=>n(13,m=i))),e.$$.dirty[0]&8388608&&n(21,a=`https://go-pob-data.pages.dev/data/${(r||"3_18").replace("_",".")}`),e.$$.dirty[0]&2097152&&(c=a+"/tree/assets/"),e.$$.dirty[0]&5259264&&(!ge&&o&&(n(20,ge=!0),n(15,g=o.min_x+window.innerWidth/2*b),n(16,Y=o.min_y+window.innerHeight/2*b)),he()),e.$$.dirty[0]&32501760&&n(4,u=({context:i,width:U,height:x})=>{const $=window.performance.now();if(i.clearRect(0,0,U,x),i.fillStyle="#080c11",i.fillRect(0,0,U,x),v){const R=o.classes.findIndex(l=>l.name===v);if(R in o.extraImages){const l=o.extraImages[R];if(l.image in X||(n(18,X[l.image]=new Image,X),n(18,X[l.image].src=a+"/raw/"+l.image,X)),X[l.image].complete){const y=X[l.image].width/b*De*.5,A=X[l.image].height/b*De*.5,_=Ye(l.x,l.y,g,Y,b);i.drawImage(X[l.image],0,0,X[l.image].width,X[l.image].height,_.x,_.y,y,A)}}}const q={};Object.keys(ue).forEach(R=>{var O,P;const l=parseInt(R),y=ue[R],A=(l in re&&((O=le[re[l]])==null?void 0:O.x)||0)+y.x,_=(l in re&&((P=le[re[l]])==null?void 0:P.y)||0)+y.y,p=Ye(A,_,g,Y,b),L=Math.max(...y.orbits);l in Fe?v===o.classes[Fe[l]].name?k(i,"center"+o.classes[Fe[l]].name.toLowerCase(),p,M):k(i,"PSStartNodeBackgroundInactive",p,M,!1,!0):l in re?Tt.has(l)&&k(i,"Classes"+re[l],p,M,!1,!0,m===re[l]):L==1?k(i,"PSGroupBackground1",p,M):L==2?k(i,"PSGroupBackground2",p,M):(L==3||y.orbits.length>1)&&k(i,"PSGroupBackground3",p,M,!0)}),Object.keys(oe).forEach(R=>{var p;const l=oe[R],y=nt(l.orbit,l.orbitIndex),A=Qe(l,g,Y,b);if(l.classStartIndex!==void 0)return;const _=h.indexOf(l.skill)>=0;(p=l.out)==null||p.forEach(L=>{var z,Me;if(!oe[parseInt(L)])return;const O=Math.min(parseInt(L),parseInt(R)),P=Math.max(parseInt(L),parseInt(R)),W=O+":"+P;if(W in q)return;q[W]=!0;const D=oe[parseInt(L)];if(!D||D.isMastery||l.ascendancyName!==D.ascendancyName||D.classStartIndex!==void 0)return;const B=nt(D.orbit,D.orbitIndex),ee=Qe(D,g,Y,b);if(i.beginPath(),l.group!=D.group||l.orbit!=D.orbit)i.moveTo(A.x,A.y),i.lineTo(ee.x,ee.y);else{let te=Math.PI/180-Math.PI/180*y,ne=Math.PI/180-Math.PI/180*B;te-=Math.PI/2,ne-=Math.PI/2;const Ne=Math.abs(Math.max(te,ne)-Math.min(te,ne)),We=Ne>Math.PI?Math.max(te,ne):Math.min(te,ne),He=Ne>Math.PI?Math.min(te,ne):Math.max(te,ne),Pe=ue[l.group],s=(l.ascendancyName&&((z=le[l.ascendancyName])==null?void 0:z.x)||0)+Pe.x,we=(l.ascendancyName&&((Me=le[l.ascendancyName])==null?void 0:Me.y)||0)+Pe.y,de=Ye(s,we,g,Y,b);i.arc(de.x,de.y,o.constants.orbitRadii[l.orbit]/b+1,We,He)}_&&h.indexOf(D.skill)>=0?i.strokeStyle="#c89c01":i.strokeStyle="#524518",i.lineWidth=6/b,i.stroke()})});let j;if(Object.keys(oe).forEach(R=>{const l=oe[R],y=Qe(l,g,Y,b);let A=0;l.classStartIndex!==void 0||l.isAscendancyStart||(l.isKeystone?A=110:l.isNotable||l.isJewelSocket?A=70:l.isMastery?A=85:A=50),hn(y,F)<A/b&&(j=l);const _=h.indexOf(l.skill)>=0||j===l;l.classStartIndex!==void 0||(l.isAscendancyStart?k(i,"AscendancyMiddle",y,M):l.isKeystone?(k(i,l.icon,y,_e),_?k(i,"KeystoneFrameAllocated",y,M):k(i,"KeystoneFrameUnallocated",y,M)):l.isNotable?(k(i,l.icon,y,_e),l.ascendancyName?_?k(i,"AscendancyFrameLargeAllocated",y,M):k(i,"AscendancyFrameLargeNormal",y,M):_?k(i,"NotableFrameAllocated",y,M):k(i,"NotableFrameUnallocated",y,M)):l.isJewelSocket?l.expansionJewel?_?k(i,"JewelSocketAltActive",y,M):k(i,"JewelSocketAltNormal",y,M):_?k(i,"JewelFrameAllocated",y,M):k(i,"JewelFrameUnallocated",y,M):l.isMastery?_?k(i,l.activeIcon,y,Ot):k(i,l.inactiveIcon,y,_e):(k(i,l.icon,y,_e),l.ascendancyName?_?k(i,"AscendancyFrameSmallAllocated",y,M):k(i,"AscendancyFrameSmallNormal",y,M):_?k(i,"PSSkillFrameActive",y,M):k(i,"PSSkillFrame",y,M)))}),G!=j)if(n(19,G=j),G!==void 0&&v){const R=tt[o.classes.findIndex(y=>y.name===v)],l=G.skill;et.CalculateTreePath(r||"3_18",R,l).then(y=>{fe.set(y)})}else fe.set([]);if(G){const R=G.name,l=(G.stats||[]).map(P=>({text:P,special:!1}));i.font=gt;const y=i.measureText(R),A=Math.max(y.width+50,600);i.font=wt;const _=[],p=30;let L=85;l&&l.length>0?l.forEach(P=>{_.length>0&&(L+=5),P.text.split(`
`).forEach(W=>{_.length>0&&(L+=10),je(W,i,A-p).forEach(B=>{_.push({text:B,offset:L,special:P.special}),L+=20})})}):G.isJewelSocket&&(_.push({text:"Click to select this socket",offset:L,special:!0}),L+=20);const O=55;i.fillStyle="rgba(75,63,24,0.9)",i.fillRect(F.x,F.y,A,O),i.fillStyle="#ffffff",i.font=gt,i.textAlign="center",i.fillText(R,F.x+A/2,F.y+35),i.fillStyle="rgba(0,0,0,0.8)",i.fillRect(F.x,F.y+O,A,L-O),i.font=wt,i.textAlign="left",_.forEach(P=>{P.special?i.fillStyle="#8cf34c":i.fillStyle="#ffffff",i.fillText(P.text,F.x+p/2,F.y+P.offset)})}G?n(2,pe="pointer"):n(2,pe="unset"),i.fillStyle="#ffffff",i.textAlign="right",i.font="12px Roboto Mono";const ae=window.performance.now();i.fillText(`${(ae-$).toFixed(1)}ms`,U-5,17)})},[Re,Ae,pe,Q,u,fe,Be,ze,Je,Ue,he,I,v,m,b,g,Y,F,X,G,ge,a,o,r,h,w,E,Ve,S]}class mn extends Xe{constructor(t){super(),Ge(this,t,pn,yn,qe,{clickNode:11},null,[-1,-1])}}function _t(e){let t,n;return t=new mn({}),{c(){it(t.$$.fragment)},l(a){at(t.$$.fragment,a)},m(a,c){rt(t,a,c),n=!0},i(a){n||(V(t.$$.fragment,a),n=!0)},o(a){se(t.$$.fragment,a),n=!1},d(a){ot(t,a)}}}function gn(e){let t=e[1]&&e[0]&&Object.keys(ue).length>0,n,a,c=t&&_t();return{c(){c&&c.c(),n=ft()},l(u){c&&c.l(u),n=ft()},m(u,o){c&&c.m(u,o),ce(u,n,o),a=!0},p(u,[o]){o&3&&(t=u[1]&&u[0]&&Object.keys(ue).length>0),t?c?o&3&&V(c,1):(c=_t(),c.c(),V(c,1),c.m(n.parentNode,n)):c&&(At(),se(c,1,1,()=>{c=null}),Mt())},i(u){a||(V(c),a=!0)},o(u){se(c),a=!1},d(u){c&&c.d(u),u&&J(n)}}}function wn(e,t,n){let a,c;return ye(e,ut,u=>n(0,a=u)),ye(e,ct,u=>n(1,c=u)),st(()=>{(!c||!a||Object.keys(ue).length===0)&&un("3_18")}),[a,c]}class kn extends Xe{constructor(t){super(),Ge(this,t,wn,gn,qe,{})}}export{kn as default};
