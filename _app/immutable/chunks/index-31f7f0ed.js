function W(){}function lt(t,e){for(const n in e)t[n]=e[n];return t}function V(t){return t()}function R(){return Object.create(null)}function $(t){t.forEach(V)}function at(t){return typeof t=="function"}function St(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ut(t){return Object.keys(t).length===0}function X(t,...e){if(t==null)return W;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Mt(t){let e;return X(t,n=>e=n)(),e}function jt(t,e,n){t.$$.on_destroy.push(X(e,n))}function Ct(t,e,n,i){if(t){const s=Y(t,e,n,i);return t[0](s)}}function Y(t,e,n,i){return t[1]&&i?lt(n.ctx.slice(),t[1](i(e))):n.ctx}function Ht(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)c[l]=e.dirty[l]|s[l];return c}return e.dirty|s}return e.dirty}function Lt(t,e,n,i,s,c){if(s){const r=Y(e,n,i,c);t.p(r,s)}}function zt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Dt(t,e,n){return t.set(n),e}let M=!1;function ft(){M=!0}function dt(){M=!1}function _t(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function ht(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const a=e[o].claim_order,f=(s>0&&e[n[s]].claim_order<=a?s+1:_t(1,s,d=>e[n[d]].claim_order,a))-1;i[o]=n[f]+1;const _=f+1;n[_]=o,s=Math.max(_,s)}const c=[],r=[];let l=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((o,a)=>o.claim_order-a.claim_order);for(let o=0,a=0;o<r.length;o++){for(;a<c.length&&r[o].claim_order>=c[a].claim_order;)a++;const f=a<c.length?c[a]:null;t.insertBefore(r[o],f)}}function mt(t,e){t.appendChild(e)}function pt(t,e){if(M){for(ht(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function yt(t,e,n){t.insertBefore(e,n||null)}function gt(t,e,n){M&&!n?pt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function x(t){t.parentNode.removeChild(t)}function Ot(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function I(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function q(t){return document.createTextNode(t)}function Pt(){return q(" ")}function Bt(){return q("")}function U(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Wt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function tt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function It(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:tt(t,i,e[i])}function qt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:tt(t,e,n)}function Gt(t){return t===""?null:+t}function bt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,s=!1){et(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function it(t,e,n,i){return nt(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Ft(t,e,n){return it(t,e,n,I)}function Rt(t,e,n){return it(t,e,n,Z)}function wt(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>q(e),!0)}function Ut(t){return wt(t," ")}function J(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Jt(t,e){const n=J(t,"HTML_TAG_START",0),i=J(t,"HTML_TAG_END",n);if(n===i)return new K(void 0,e);et(t);const s=t.splice(n,i-n+1);x(s[0]),x(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new K(c,e)}function Kt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Qt(t,e){t.value=e==null?"":e}function Vt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Xt(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function Yt(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let T;function xt(){if(T===void 0){T=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{T=!0}}return T}function Zt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=I("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=xt();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=U(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=U(i.contentWindow,"resize",e)}),mt(t,i),()=>{(s||c&&i.contentWindow)&&c(),x(i)}}function te(t,e,n){t.classList[n?"add":"remove"](e)}function vt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}class $t{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Z(n.nodeName):this.e=I(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)yt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(x)}}class K extends $t{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)gt(this.t,this.n[n],e)}}let v;function w(t){v=t}function j(){if(!v)throw new Error("Function called outside component initialization");return v}function ee(t){j().$$.before_update.push(t)}function ne(t){j().$$.on_mount.push(t)}function ie(t){j().$$.after_update.push(t)}function se(){const t=j();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=vt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}const b=[],Q=[],N=[],O=[],st=Promise.resolve();let P=!1;function rt(){P||(P=!0,st.then(ot))}function re(){return rt(),st}function B(t){N.push(t)}function oe(t){O.push(t)}const D=new Set;let A=0;function ot(){const t=v;do{for(;A<b.length;){const e=b[A];A++,w(e),Et(e.$$)}for(w(null),b.length=0,A=0;Q.length;)Q.pop()();for(let e=0;e<N.length;e+=1){const n=N[e];D.has(n)||(D.add(n),n())}N.length=0}while(b.length);for(;O.length;)O.pop()();P=!1,D.clear(),w(t)}function Et(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const S=new Set;let g;function ce(){g={r:0,c:[],p:g}}function le(){g.r||$(g.c),g=g.p}function ct(t,e){t&&t.i&&(S.delete(t),t.i(e))}function kt(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),g.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ae=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ue(t,e){kt(t,1,1,()=>{e.delete(t.key)})}function fe(t,e,n,i,s,c,r,l,o,a,f,_){let d=t.length,m=c.length,h=d;const C={};for(;h--;)C[t[h].key]=h;const E=[],H=new Map,L=new Map;for(h=m;h--;){const u=_(s,c,h),p=n(u);let y=r.get(p);y?i&&y.p(u,e):(y=a(p,u),y.c()),H.set(p,E[h]=y),p in C&&L.set(p,Math.abs(h-C[p]))}const G=new Set,F=new Set;function z(u){ct(u,1),u.m(l,f),r.set(u.key,u),f=u.first,m--}for(;d&&m;){const u=E[m-1],p=t[d-1],y=u.key,k=p.key;u===p?(f=u.first,d--,m--):H.has(k)?!r.has(y)||G.has(y)?z(u):F.has(k)?d--:L.get(y)>L.get(k)?(F.add(y),z(u)):(G.add(k),d--):(o(p,r),d--)}for(;d--;){const u=t[d];H.has(u.key)||o(u,r)}for(;m;)z(E[m-1]);return E}function de(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],l=e[c];if(l){for(const o in r)o in l||(i[o]=1);for(const o in l)s[o]||(n[o]=l[o],s[o]=1);t[c]=l}else for(const o in r)s[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}function _e(t){return typeof t=="object"&&t!==null?t:{}}function he(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function me(t){t&&t.c()}function pe(t,e){t&&t.l(e)}function Tt(t,e,n,i){const{fragment:s,on_mount:c,on_destroy:r,after_update:l}=t.$$;s&&s.m(e,n),i||B(()=>{const o=c.map(V).filter(at);r?r.push(...o):$(o),t.$$.on_mount=[]}),l.forEach(B)}function At(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Nt(t,e){t.$$.dirty[0]===-1&&(b.push(t),rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ye(t,e,n,i,s,c,r,l=[-1]){const o=v;w(t);const a=t.$$={fragment:null,ctx:null,props:c,update:W,not_equal:s,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:R(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};r&&r(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return a.ctx&&s(a.ctx[_],a.ctx[_]=h)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](h),f&&Nt(t,_)),d}):[],a.update(),f=!0,$(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){ft();const _=bt(e.target);a.fragment&&a.fragment.l(_),_.forEach(x)}else a.fragment&&a.fragment.c();e.intro&&ct(t.$$.fragment),Tt(t,e.target,e.anchor,e.customElement),dt(),ot()}w(o)}class ge{$destroy(){At(this,1),this.$destroy=W}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{he as $,W as A,pt as B,Mt as C,Qt as D,U as E,$ as F,jt as G,se as H,Gt as I,Yt as J,B as K,Xt as L,Ot as M,at as N,de as O,_e as P,lt as Q,Q as R,ge as S,Ct as T,Lt as U,zt as V,Ht as W,te as X,ae as Y,K as Z,Jt as _,Pt as a,oe as a0,ee as a1,Z as a2,Rt as a3,qt as a4,Zt as a5,fe as a6,ue as a7,It as a8,Wt as a9,Dt as aa,gt as b,Ut as c,le as d,Bt as e,ct as f,ce as g,x as h,ye as i,ie as j,I as k,Ft as l,bt as m,tt as n,ne as o,Vt as p,q,wt as r,St as s,kt as t,Kt as u,me as v,pe as w,Tt as x,At as y,re as z};
