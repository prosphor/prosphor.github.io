import{_ as H,$ as D,M as O,I as P,a0 as Y,D as I,a1 as b,o as $,m as q,n as C,a2 as T,d as g,c as A,a as j,i as v,a3 as B,a4 as W,a5 as z,a6 as F,a7 as G,a8 as J,k as K,g as Q,a9 as U,h as E,aa as X,q as Z}from"./runtime.CF7OMWs4.js";import{r as x}from"./svelte-head.CUOkHvBk.js";import{b as rr}from"./disclose-version.ur1VVt_r.js";const ar=["touchstart","touchmove"];function er(r){return ar.includes(r)}const k=new Set,S=new Set;function ir(r){for(var a=0;a<r.length;a++)k.add(r[a]);for(var t of S)t(r)}function m(r){var R;var a=this,t=a.ownerDocument,c=r.type,i=((R=r.composedPath)==null?void 0:R.call(r))||[],e=i[0]||r.target,f=0,_=r.__root;if(_){var u=i.indexOf(_);if(u!==-1&&(a===document||a===window)){r.__root=a;return}var h=i.indexOf(a);if(h===-1)return;u<=h&&(f=u)}if(e=i[f]||r.target,e!==a){H(r,"currentTarget",{configurable:!0,get(){return e||t}});var w=Y,o=I;D(null),O(null);try{for(var n,s=[];e!==null;){var d=e.assignedSlot||e.parentNode||e.host||null;try{var l=e["__"+c];if(l!==void 0&&!e.disabled)if(P(l)){var[M,...V]=l;M.apply(e,[r,...V])}else l.call(e,r)}catch(y){n?s.push(y):n=y}if(r.cancelBubble||d===a||d===null)break;e=d}if(n){for(let y of s)queueMicrotask(()=>{throw y});throw n}}finally{r.__root=a,delete r.currentTarget,D(w),O(o)}}}function dr(r,a){var t=a==null?"":typeof a=="object"?a+"":a;t!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=t,r.nodeValue=t==null?"":t+"")}function tr(r,a){return L(r,a)}function fr(r,a){b(),a.intro=a.intro??!1;const t=a.target,c=E,i=v;try{for(var e=$(t);e&&(e.nodeType!==8||e.data!==q);)e=C(e);if(!e)throw T;g(!0),A(e),j();const f=L(r,{...a,anchor:e});if(v===null||v.nodeType!==8||v.data!==B)throw W(),T;return g(!1),f}catch(f){if(f===T)return a.recover===!1&&z(),b(),F(t),g(!1),tr(r,a);throw f}finally{g(c),A(i),x()}}const p=new Map;function L(r,{target:a,anchor:t,props:c={},events:i,context:e,intro:f=!0}){b();var _=new Set,u=o=>{for(var n=0;n<o.length;n++){var s=o[n];if(!_.has(s)){_.add(s);var d=er(s);a.addEventListener(s,m,{passive:d});var l=p.get(s);l===void 0?(document.addEventListener(s,m,{passive:d}),p.set(s,1)):p.set(s,l+1)}}};u(G(k)),S.add(u);var h=void 0,w=J(()=>{var o=t??a.appendChild(K());return Q(()=>{if(e){U({});var n=Z;n.c=e}i&&(c.$$events=i),E&&rr(o,null),h=r(o,c)||{},E&&(I.nodes_end=v),e&&X()}),()=>{var d;for(var n of _){a.removeEventListener(n,m);var s=p.get(n);--s===0?(document.removeEventListener(n,m),p.delete(n)):p.set(n,s)}S.delete(u),o!==t&&((d=o.parentNode)==null||d.removeChild(o))}});return N.set(h,w),h}let N=new WeakMap;function ur(r,a){const t=N.get(r);return t?(N.delete(r),t(a)):Promise.resolve()}export{ir as d,fr as h,tr as m,dr as s,ur as u};
