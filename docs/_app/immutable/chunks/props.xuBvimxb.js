import{a4 as N,a5 as j,a6 as G,a1 as P,a7 as K,a8 as g,a9 as D,U as l,h as b,O as x,aa as Z,m as $,J as z,ab as H,ac as J,ad as V,ae as Q,af as F,F as W,ag as X,ah as k,ai as p,e as U,k as q,aj as ee,ak as ae,al as re,am as ne,an as te,a0 as ie}from"./runtime.C8hakOeC.js";import{c as fe}from"./store.Cv-9RcV1.js";function O(t,v=null,y){if(typeof t!="object"||t===null||N in t)return t;const m=$(t);if(m!==j&&m!==G)return t;var f=new Map,c=z(t),o=P(0);c&&f.set("length",P(t.length));var h;return new Proxy(t,{defineProperty(i,e,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&K();var n=f.get(e);return n===void 0?(n=P(a.value),f.set(e,n)):g(n,O(a.value,h)),!0},deleteProperty(i,e){var a=f.get(e);if(a===void 0)e in i&&f.set(e,P(l));else{if(c&&typeof e=="string"){var n=f.get("length"),r=Number(e);Number.isInteger(r)&&r<n.v&&g(n,r)}g(a,l),M(o)}return!0},get(i,e,a){var _;if(e===N)return t;var n=f.get(e),r=e in i;if(n===void 0&&(!r||(_=D(i,e))!=null&&_.writable)&&(n=P(O(r?i[e]:l,h)),f.set(e,n)),n!==void 0){var u=b(n);return u===l?void 0:u}return Reflect.get(i,e,a)},getOwnPropertyDescriptor(i,e){var a=Reflect.getOwnPropertyDescriptor(i,e);if(a&&"value"in a){var n=f.get(e);n&&(a.value=b(n))}else if(a===void 0){var r=f.get(e),u=r==null?void 0:r.v;if(r!==void 0&&u!==l)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return a},has(i,e){var u;if(e===N)return!0;var a=f.get(e),n=a!==void 0&&a.v!==l||Reflect.has(i,e);if(a!==void 0||x!==null&&(!n||(u=D(i,e))!=null&&u.writable)){a===void 0&&(a=P(n?O(i[e],h):l),f.set(e,a));var r=b(a);if(r===l)return!1}return n},set(i,e,a,n){var I;var r=f.get(e),u=e in i;if(c&&e==="length")for(var _=a;_<r.v;_+=1){var w=f.get(_+"");w!==void 0?g(w,l):_ in i&&(w=P(l),f.set(_+"",w))}r===void 0?(!u||(I=D(i,e))!=null&&I.writable)&&(r=P(void 0),g(r,O(a,h)),f.set(e,r)):(u=r.v!==l,g(r,O(a,h)));var d=Reflect.getOwnPropertyDescriptor(i,e);if(d!=null&&d.set&&d.set.call(n,a),!u){if(c&&typeof e=="string"){var E=f.get("length"),S=Number(e);Number.isInteger(S)&&S>=E.v&&g(E,S+1)}M(o)}return!0},ownKeys(i){b(o);var e=Reflect.ownKeys(i).filter(r=>{var u=f.get(r);return u===void 0||u.v!==l});for(var[a,n]of f)n.v!==l&&!(a in i)&&e.push(a);return e},setPrototypeOf(){Z()}})}function M(t,v=1){g(t,t.v+v)}function Y(t){for(var v=x,y=x;v!==null&&!(v.f&(V|Q));)v=v.parent;try{return F(v),t()}finally{F(y)}}function ve(t,v,y,m){var C;var f=(y&ne)!==0,c=!W||(y&X)!==0,o=(y&k)!==0,h=(y&te)!==0,i=!1,e;o?[e,i]=fe(()=>t[v]):e=t[v];var a=N in t||p in t,n=((C=D(t,v))==null?void 0:C.set)??(a&&o&&v in t?s=>t[v]=s:void 0),r=m,u=!0,_=!1,w=()=>(_=!0,u&&(u=!1,h?r=U(m):r=m),r);e===void 0&&m!==void 0&&(n&&c&&H(),e=w(),n&&n(e));var d;if(c)d=()=>{var s=t[v];return s===void 0?w():(u=!0,_=!1,s)};else{var E=Y(()=>(f?q:ee)(()=>t[v]));E.f|=J,d=()=>{var s=b(E);return s!==void 0&&(r=void 0),s===void 0?r:s}}if(!(y&ae))return d;if(n){var S=t.$$legacy;return function(s,R){return arguments.length>0?((!c||!R||S||i)&&n(R?d():s),s):d()}}var I=!1,B=!1,T=ie(e),A=Y(()=>q(()=>{var s=d(),R=b(T);return I?(I=!1,B=!0,R):(B=!1,T.v=s)}));return f||(A.equals=re),function(s,R){if(arguments.length>0){const L=R?b(A):c&&o?O(s):s;return A.equals(L)||(I=!0,g(T,L),_&&r!==void 0&&(r=L),U(()=>b(A))),s}return b(A)}}export{O as a,ve as p};
