import{S as D,w as K,x as Z,y as P,z as j,A as g,B as T,U as l,C as b,D as B,F as z,G as V,I as $,J as H,L as J,K as Q,R as W,M,t as X,P as k,N as p,O as ee,v as U,Q as Y,T as re,V as ne,W as te,X as ae,Y as ie,Z as fe}from"./runtime.tVg_jNck.js";function O(a,u=null,y){if(typeof a!="object"||a===null||D in a)return a;const o=V(a);if(o!==K&&o!==Z)return a;var f=new Map,c=$(a),w=P(0);c&&f.set("length",P(a.length));var I;return new Proxy(a,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&j();var t=f.get(e);return t===void 0?(t=P(r.value),f.set(e,t)):g(t,O(r.value,I)),!0},deleteProperty(i,e){var r=f.get(e);if(r===void 0)e in i&&f.set(e,P(l));else{if(c&&typeof e=="string"){var t=f.get("length"),n=Number(e);Number.isInteger(n)&&n<t.v&&g(t,n)}g(r,l),q(w)}return!0},get(i,e,r){var _;if(e===D)return a;var t=f.get(e),n=e in i;if(t===void 0&&(!n||(_=T(i,e))!=null&&_.writable)&&(t=P(O(n?i[e]:l,I)),f.set(e,t)),t!==void 0){var s=b(t);return s===l?void 0:s}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var t=f.get(e);t&&(r.value=b(t))}else if(r===void 0){var n=f.get(e),s=n==null?void 0:n.v;if(n!==void 0&&s!==l)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return r},has(i,e){var s;if(e===D)return!0;var r=f.get(e),t=r!==void 0&&r.v!==l||Reflect.has(i,e);if(r!==void 0||B!==null&&(!t||(s=T(i,e))!=null&&s.writable)){r===void 0&&(r=P(t?O(i[e],I):l),f.set(e,r));var n=b(r);if(n===l)return!1}return t},set(i,e,r,t){var m;var n=f.get(e),s=e in i;if(c&&e==="length")for(var _=r;_<n.v;_+=1){var R=f.get(_+"");R!==void 0?g(R,l):_ in i&&(R=P(l),f.set(_+"",R))}n===void 0?(!s||(m=T(i,e))!=null&&m.writable)&&(n=P(void 0),g(n,O(r,I)),f.set(e,n)):(s=n.v!==l,g(n,O(r,I)));var d=Reflect.getOwnPropertyDescriptor(i,e);if(d!=null&&d.set&&d.set.call(t,r),!s){if(c&&typeof e=="string"){var S=f.get("length"),E=Number(e);Number.isInteger(E)&&E>=S.v&&g(S,E+1)}q(w)}return!0},ownKeys(i){b(w);var e=Reflect.ownKeys(i).filter(n=>{var s=f.get(n);return s===void 0||s.v!==l});for(var[r,t]of f)t.v!==l&&!(r in i)&&e.push(r);return e},setPrototypeOf(){z()}})}function q(a,u=1){g(a,a.v+u)}let N=!1;function se(a){var u=N;try{return N=!1,[a(),N]}finally{N=u}}function G(a){for(var u=B,y=B;u!==null&&!(u.f&(Q|W));)u=u.parent;try{return M(u),a()}finally{M(y)}}function ve(a,u,y,o){var F;var f=(y&ae)!==0,c=!X||(y&k)!==0,w=(y&p)!==0,I=(y&ie)!==0,i=!1,e;w?[e,i]=se(()=>a[u]):e=a[u];var r=D in a||ee in a,t=((F=T(a,u))==null?void 0:F.set)??(r&&w&&u in a?v=>a[u]=v:void 0),n=o,s=!0,_=!1,R=()=>(_=!0,s&&(s=!1,I?n=U(o):n=o),n);e===void 0&&o!==void 0&&(t&&c&&H(),e=R(),t&&t(e));var d;if(c)d=()=>{var v=a[u];return v===void 0?R():(s=!0,_=!1,v)};else{var S=G(()=>(f?Y:re)(()=>a[u]));S.f|=J,d=()=>{var v=b(S);return v!==void 0&&(n=void 0),v===void 0?n:v}}if(!(y&ne))return d;if(t){var E=a.$$legacy;return function(v,h){return arguments.length>0?((!c||!h||E||i)&&t(h?d():v),v):d()}}var m=!1,C=!1,L=fe(e),A=G(()=>Y(()=>{var v=d(),h=b(L);return m?(m=!1,C=!0,h):(C=!1,L.v=v)}));return f||(A.equals=te),function(v,h){if(arguments.length>0){const x=h?b(A):c&&w?O(v):v;return A.equals(x)||(m=!0,g(L,x),_&&n!==void 0&&(n=x),U(()=>b(A))),v}return b(A)}}export{O as a,ve as p};
