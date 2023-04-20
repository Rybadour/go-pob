import{w as A}from"./index.6c284d28.js";function D(){return new Worker(""+new URL("../workers/sync_worker-721a9c4c.js",import.meta.url).href)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const C=Symbol("Comlink.proxy"),v=Symbol("Comlink.endpoint"),Q=Symbol("Comlink.releaseProxy"),b=Symbol("Comlink.finalizer"),w=Symbol("Comlink.thrown"),j=e=>typeof e=="object"&&e!==null||typeof e=="function",J={canHandle:e=>j(e)&&e[C],serialize(e){const{port1:t,port2:r}=new MessageChannel;return V(e,t),[r,[r]]},deserialize(e){return e.start(),O(e)}},U={canHandle:e=>j(e)&&w in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},T=new Map([["proxy",J],["throw",U]]);function Y(e,t){for(const r of e)if(t===r||r==="*"||r instanceof RegExp&&r.test(t))return!0;return!1}function V(e,t=globalThis,r=["*"]){t.addEventListener("message",function u(n){if(!n||!n.data)return;if(!Y(r,n.origin)){console.warn(`Invalid origin '${n.origin}' for comlink proxy`);return}const{id:g,type:s,path:i}=Object.assign({path:[]},n.data),l=(n.data.argumentList||[]).map(p);let a;try{const o=i.slice(0,-1).reduce((c,d)=>c[d],e),f=i.reduce((c,d)=>c[d],e);switch(s){case"GET":a=f;break;case"SET":o[i.slice(-1)[0]]=p(n.data.value),a=!0;break;case"APPLY":a=f.apply(o,l);break;case"CONSTRUCT":{const c=new f(...l);a=X(c)}break;case"ENDPOINT":{const{port1:c,port2:d}=new MessageChannel;V(e,d),a=W(c,[c])}break;case"RELEASE":a=void 0;break;default:return}}catch(o){a={value:o,[w]:0}}Promise.resolve(a).catch(o=>({value:o,[w]:0})).then(o=>{const[f,c]=E(o);t.postMessage(Object.assign(Object.assign({},f),{id:g}),c),s==="RELEASE"&&(t.removeEventListener("message",u),G(t),b in e&&typeof e[b]=="function"&&e[b]())}).catch(o=>{const[f,c]=E({value:new TypeError("Unserializable return value"),[w]:0});t.postMessage(Object.assign(Object.assign({},f),{id:g}),c)})}),t.start&&t.start()}function B(e){return e.constructor.name==="MessagePort"}function G(e){B(e)&&e.close()}function O(e,t){return k(e,[],t)}function y(e){if(e)throw new Error("Proxy has been released and is not useable")}function x(e){return m(e,{type:"RELEASE"}).then(()=>{G(e)})}const R=new WeakMap,h="FinalizationRegistry"in globalThis&&new FinalizationRegistry(e=>{const t=(R.get(e)||0)-1;R.set(e,t),t===0&&x(e)});function N(e,t){const r=(R.get(t)||0)+1;R.set(t,r),h&&h.register(e,t,e)}function H(e){h&&h.unregister(e)}function k(e,t=[],r=function(){}){let u=!1;const n=new Proxy(r,{get(g,s){if(y(u),s===Q)return()=>{H(n),x(e),u=!0};if(s==="then"){if(t.length===0)return{then:()=>n};const i=m(e,{type:"GET",path:t.map(l=>l.toString())}).then(p);return i.then.bind(i)}return k(e,[...t,s])},set(g,s,i){y(u);const[l,a]=E(i);return m(e,{type:"SET",path:[...t,s].map(o=>o.toString()),value:l},a).then(p)},apply(g,s,i){y(u);const l=t[t.length-1];if(l===v)return m(e,{type:"ENDPOINT"}).then(p);if(l==="bind")return k(e,t.slice(0,-1));const[a,o]=z(i);return m(e,{type:"APPLY",path:t.map(f=>f.toString()),argumentList:a},o).then(p)},construct(g,s){y(u);const[i,l]=z(s);return m(e,{type:"CONSTRUCT",path:t.map(a=>a.toString()),argumentList:i},l).then(p)}});return N(n,e),n}function F(e){return Array.prototype.concat.apply([],e)}function z(e){const t=e.map(E);return[t.map(r=>r[0]),F(t.map(r=>r[1]))]}const P=new WeakMap;function W(e,t){return P.set(e,t),e}function X(e){return Object.assign(e,{[C]:!0})}function E(e){for(const[t,r]of T)if(r.canHandle(e)){const[u,n]=r.serialize(e);return[{type:"HANDLER",name:t,value:u},n]}return[{type:"RAW",value:e},P.get(e)||[]]}function p(e){switch(e.type){case"HANDLER":return T.get(e.name).deserialize(e.value);case"RAW":return e.value}}function m(e,t,r){return new Promise(u=>{const n=q();e.addEventListener("message",function g(s){!s.data||!s.data.id||s.data.id!==n||(e.removeEventListener("message",g),u(s.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:n},t),r)})}function q(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}function I(){if(typeof globalThis<"u"&&"cachedWorker"in globalThis)return globalThis.cachedWorker;console.log("Creating sync worker");const e=new D,t=O(e),r={syncWorker:e,syncWrap:t};return typeof globalThis<"u"&&(globalThis.cachedWorker=r),r}const{syncWorker:ee,syncWrap:_}=I(),te=A(),re=A();let S=!1,M=!1,L="";const Z=e=>{if(_){if(S){M=!0,L=e;return}S=!0,_.Tick(e).catch(t=>{console.error(t)}).then(()=>{S=!1,M&&(M=!1,Z(L))})}},K=A(parseFloat(localStorage.getItem("options:fontScaling")||"12"));K.subscribe(e=>localStorage.setItem("options:fontScaling",e.toString(10)));const ne="eJzsW21v2zgS_pz-CkFfD41jp0nchd2FYzuJcXHXF6XtHQ6HgpbGNjcUqZKUU--vP5DUqyNZtLJ3V-zeYrGwh_PMcB4OyRk6O_j5e0icLXCBGR263dMz1wHqswDT9dD99Hjztu_-_OHNYIHk5pfVdYyJGvnw5mSgPzs-QUJ8RCEMXc_HjLqORHwN8nNq8fzrmessEQ2wHLofGQXXiRCVG2B0jn5l_JYFL-SYluQEtkCGbtd1QoSpx_wnkLecxZGWbTE8z1mgJvDX2f295zpI-ECDcT4zbebDm5OTwYKgHXBPIulsEYlBRdzvX1x13_X0f89dR0gkh-5oCxytYYJCtAa3UwvupQAvAghqFc9StQWH6WoFvsRbGHMsxxtE_XoHGc5Ct3t6UdSex0TiiGDgtYj371PAXaP13mnvspczlQIfmURksvCaIzCaTB7r4QuWm2sCEBzycgA7W1MsoSV4wbBg9Kj4rJTHMSGYrlvMaszCJaaH2cjczBFFYybqOc807_EK7DSnnp3eA1pbWlSzXAD3gUr7yR4FSDx44DMaHOXjGEghjnbOWiCnXhuAvaNeBvRk_UGSa03ge_0B1c2y-AG-HdLM7c1o_dy6FxcFe4c0C9PbMqmuqTrNy_PSfp7eLepV80N9sxPYR2SOvuMwDu-wfERPUO_k_Co_qu_xeiMppus24BvMoQ1uzEjQCrdBTNgCL0vp3bw2XgT-T0p1Rn1Lo58oBwF8e-DmLQMewGfqZl-SA_foWY2PZOPYbecHWB_gpqR6D-BvbhGmD0jWT-uidM5Y0qlUD9FZNmpBZ4GcMqKRnNP3RaAlPUrVjp4M8gVxizpsSoGvd94GAzlSO0mh3RhFlotQRB9ajBp3VkQVIXaEdS8z7BaJQ2fiXjRG2yqQORCA6RYFYFvnLjj7VVXH5DjYiIcsrr-fyhEYZasA0pPd9AEPEMT-wesjA14T5j_Zzt6LgJCjECMpkf80YcHamiLt5HiEF0cRB6GWvAH3Nj9q1b30AALbFCS57i9b4Id2VcGBusBsHeS6RzjIrmVbL3uAY2JRl6p1MLlyk4us2MoazjnbQghU6l51ziwOvpuY2HV3C_YMfLxRvb-oLyWqtOeovg7M58GB_raztl9St3IwpUHMVXpb-9hH5G4ecQgEhJggiRwBiPubeyzk0NXjg45-OVGfZmHEuNTCMaMrvNbwGY1i6QjJ9ROMeQKh-h3DPKMkXurV9t9X7AHJw0sevA8bRgLgDo3DJfChe5FigEK4q3qVeAE5P3uB2X9WeYG5OiuD8teVQSejavDIARykU1sd7CrltUX1pfgKNAv0SlMWgBi6F_3--bnrhEhI4DuzOcTQdR3JAQrvVt2-a563DFxZPhl8erjXH042Ukbip07n-fn5NEJyw1bwHRM49VnYiZAQeAtvxRMm5K0y2xmNRqPr9Uj_ow11UksD86AlDBkdNXcdpgpOZwYivigsYEpRNyVIe_lqxJVLPb25mY4fZ5-nKSLEwv-6jFerOQvSVfBA32wODoaupyx6QMCXriPipTBjQ_czhmc9OAGJMBGu4zNCUCQgGLorRESVtbtsvUu2tJ3CmIWlL4j7HIMoG5p-By4xXeejFqYmTFZMx8xFlXdqD1sZMplZMmUu5zESUhdgNlbUpigbURK7UGZhhMgeuanMJgAV-OMuAnXKiQpS5C4CEYGPV9hPdOxWPTkZytz4fsyRv7OyoZ_9yvhEZAE2T3dldCqzYVU_G-6xmshs8gt8tCujE5EFOCvgywYyMaN3Kl0sLE0JjDBRd_7eyn5kVCc7putcwcLgHAs_OTLLBn-RG-DZiIWlkZQcL2O5v52Lchuu8GpvlYzEJhbVR5egRmLDa7F9LJ9GpRG7Q23PhJHYUGi6njJ9icwmiKTvK88_FVoYSIrWEt7I7NZOtzz7-1uL2oHN3nhpQvK4LpcnsALq7-egTuZ8yHJfVNsyd8poy3BgjsNXWdMzqzbWLspk91cGe7RF3V6-MsL9rtPuuNUkm_fICvaTgVcbwnR9Z3st11rK2rE7QERuFoyR1xncf5B9XZxMCkSDCayB1gU66KRF6eAjk6CrUyVNvwx03SCcAFYoJvIWwvvCT7jS36SSR6aaJ-RL4ImGceKIDXseEfm3GBEsd7cQimwoN5qM6to-6QJM4SpN88u40hLXu8nCS5K5LLxRh3T5JzXtWWWf0VN1kRi6o_v7pLNIHGgOu0lPoIUOQUsVwDSM5M78Uj3K5zR0KSauAxQtSbaz9pU0qYkmpj6JA5jRpAM34k6Fw392_-XcYA5LREiF366l126VT0O5aXgGtxAmpm4JWyLSSw0Whd1UqDoN05Tlk9OdygJxsz4-i6msmqBWm2OKGZ1JCNP1zP8M4JtZ-Jmus3Q2FGzn8RTsDF0vDkNGIVhsEJVIhMmwspFPcA2hEsxBogBJ1FHuRUflS0dzdQthrvwtT79kXYxS1Rr1zv5oi5SsRu_swHL8GNwX9ofzF0d9HQUBBM6YkcBJu88_0JIc2iD_xRVpH3jF8rwmZiVJTnRtWRlO7R4KMbsEXqDa7vw_Rfr9KCfC75p___Gba5-YmQ-3jED4Q-aw-v7_JP5zJvFRzPxPszj56IHULYvpSdKfDT5jeE5-m_EkH7pJ4S-RnODVCrhuTFNGfmMs7WD6RvEOkJyjKGtKlMbfh2632z_tvT_r9_u9q-6lEf9j6F5dnr7rnr-7enem_zU9lA4w6VuKPMcCzN9lfQEUMarF-V4YJKpJA9KgfTLwCJPJq_81Y1I4o-VOCEQc86uD8851sDTUZxQ2YS4OY8xMnK73jKJ9aLfBHRD5O0B6x0POj4c0UVcBeQVzDd4OQRu8XrNg56TPhm19XNpBj1zcOljDAtfBGha5DtZA_R2QEGQ703a09VpspUNQO_oqoXYUVkLtMrgS2pDBozAmlivQa0ljSwpb0teSunbHzQtYQ1KafD-Sx2pQA4vVoAYOq0FWe_hI_qpBDewVTttjb7p6ZNOFV49suvfqkY2VQy3S_j46kttbwrbwolxpoLUa1MBoNaiBzGpQA4_VoAYKq0GNmVlR6zXmZAWmMRsrMJZXs92BdljrAdN1kyWt02DnhiDxZKfUEJ1RakgEo2RZQTrqFrU8_ZtVjesWhXhTxgGxrJvaVzEvSq7G04dJ0b5SabPHLGvnFuWYOQde6Aw6SRepG2PdiH54M-js_z-e_w4AAP__S2Sp7g==";export{Z as U,ne as a,re as c,K as f,te as o,X as p,_ as s};
