var On=Array.isArray,kn=Array.from,Cn=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,$t=Object.getOwnPropertyDescriptors,Nn=Object.prototype,Pn=Array.prototype,Kt=Object.getPrototypeOf;const bn=()=>{};function Fn(t){return t()}function Zt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,dt=4,H=8,lt=16,m=32,z=64,tt=128,O=256,G=512,h=1024,R=2048,j=4096,P=8192,b=16384,zt=32768,Et=65536,qn=1<<17,Wt=1<<19,yt=1<<20,ct=Symbol("$state"),Ln=Symbol("legacy props"),Mn=Symbol("");function wt(t){return t===this.v}function Xt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Tt(t){return!Xt(t,this.v)}function Jt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function tn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function nn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Yn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Hn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function jn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Bn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function rn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let W=!1;function Un(){W=!0}const Vn=1,Gn=2,$n=4,Kn=8,Zn=16,zn=1,Wn=2,Xn=4,Jn=8,Qn=16,tr=1,nr=2,sn="[",ln="[!",an="]",mt={},rr=Symbol();function at(t,n){var r={f:0,v:t,reactions:null,equals:wt,version:0};return r}function er(t){return un(at(t))}function sr(t,n=!1){var e;const r=at(t);return n||(r.equals=Tt),W&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function un(t){return o!==null&&o.f&y&&(T===null?mn([t]):T.push(t)),t}function lr(t,n){return o!==null&&it()&&o.f&(y|lt)&&(T===null||!T.includes(t))&&en(),on(t,n)}function on(t,n){return t.equals(n)||(t.v=n,t.version=Ht(),At(t,R),it()&&u!==null&&u.f&h&&!(u.f&m)&&(v!==null&&v.includes(t)?(A(u,R),Q(u)):g===null?An([t]):g.push(t))),n}function At(t,n){var r=t.reactions;if(r!==null)for(var e=it(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&R||!e&&a===u||(A(a,n),i&(h|O)&&(i&y?At(a,j):Q(a)))}}function gt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let x=!1;function ar(t){x=t}let w;function q(t){if(t===null)throw gt(),mt;return w=t}function ur(){return q(k(w))}function or(t){if(x){if(k(w)!==null)throw gt(),mt;w=t}}function ir(t=1){if(x){for(var n=t,r=w;n--;)r=k(r);w=r}}function fr(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===an){if(t===0)return n;t-=1}else(r===sn||r===ln)&&(t+=1)}var e=k(n);n.remove(),n=e}}var vt,fn,Rt,St;function _r(){if(vt===void 0){vt=window,fn=document;var t=Element.prototype,n=Node.prototype;Rt=_t(n,"firstChild").get,St=_t(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return Rt.call(t)}function k(t){return St.call(t)}function cr(t,n){if(!x)return rt(t);var r=rt(w);if(r===null)r=w.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),q(e),e}return q(r),r}function vr(t,n){if(!x){var r=rt(t);return r instanceof Comment&&r.data===""?k(r):r}return w}function pr(t,n=1,r=!1){let e=x?w:t;for(var s;n--;)s=e,e=k(e);if(!x)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=nt();return e===null?s==null||s.after(a):e.before(a),q(a),a}return q(e),e}function hr(t){t.textContent=""}function _n(t){var n=y|R;u===null?n|=O:u.f|=yt;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:wt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function dr(t){const n=_n(t);return n.equals=Tt,n}function Dt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ut(e):I(e)}}}function cn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function xt(t){var n,r=u;Z(cn(t));try{Dt(t),n=jt(t)}finally{Z(r)}return n}function It(t){var n=xt(t),r=(D||t.f&O)&&t.deps!==null?j:h;A(t,r),t.equals(n)||(t.v=n,t.version=Ht())}function ut(t){Dt(t),Y(t,0),A(t,b),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ot(t){u===null&&o===null&&tn(),o!==null&&o.f&O&&Qt(),ot&&Jt()}function vn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var s=(t&z)!==0,l=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=C;try{pt(!0),J(a),a.f|=zt}catch(_){throw I(a),_}finally{pt(i)}}else n!==null&&Q(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&yt)===0;if(!p&&!s&&e&&(l!==null&&vn(a,l),o!==null&&o.f&y)){var d=o;(d.children??(d.children=[])).push(a)}return a}function Er(t){const n=F(H,null,!1);return A(n,h),n.teardown=t,n}function yr(t){Ot();var n=u!==null&&(u.f&m)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=kt(t);return e}}function wr(t){return Ot(),pn(t)}function Tr(t){const n=F(z,t,!0);return(r={})=>new Promise(e=>{r.outro?En(n,()=>{I(n),e(void 0)}):(I(n),e(void 0))})}function kt(t){return F(dt,t,!1)}function pn(t){return F(H,t,!0)}function mr(t){return hn(t)}function hn(t,n=0){return F(H|lt|n,t,!0)}function Ar(t,n=!0){return F(H|m,t,!0,n)}function Ct(t){var n=t.teardown;if(n!==null){const r=ot,e=o;ht(!0),K(null);try{n.call(null)}finally{ht(r),K(e)}}}function Nt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ut(n[r])}}function Pt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;I(r,n),r=e}}function dn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&m||I(n),n=r}}function I(t,n=!0){var r=!1;if((n||t.f&Wt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:k(e);e.remove(),e=l}r=!0}Pt(t,n&&!r),Nt(t),Y(t,0),A(t,b);var a=t.transitions;if(a!==null)for(const p of a)p.stop();Ct(t);var i=t.parent;i!==null&&i.first!==null&&bt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function bt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function En(t,n){var r=[];Ft(t,r,!0),yn(r,()=>{I(t),n&&n()})}function yn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ft(t,n,r){if(!(t.f&P)){if(t.f^=P,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&Et)!==0||(e.f&m)!==0;Ft(e,n,l?r:!1),e=s}}}function gr(t){qt(t,!0)}function qt(t,n){if(t.f&P){B(t)&&J(t),t.f^=P;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&Et)!==0||(r.f&m)!==0;qt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let $=!1,et=[];function Lt(){$=!1;const t=et.slice();et=[],Zt(t)}function Rr(t){$||($=!0,queueMicrotask(Lt)),et.push(t)}function wn(){$&&Lt()}const Mt=0,Tn=1;let U=!1,V=Mt,L=!1,M=null,C=!1,ot=!1;function pt(t){C=t}function ht(t){ot=t}let S=[],N=0;let o=null;function K(t){o=t}let u=null;function Z(t){u=t}let T=null;function mn(t){T=t}let v=null,E=0,g=null;function An(t){g=t}let Yt=1,D=!1,f=null;function Ht(){return++Yt}function it(){return!W||f!==null&&f.l===null}function B(t){var a,i;var n=t.f;if(n&R)return!0;if(n&j){var r=t.deps,e=(n&O)!==0;if(r!==null){var s;if(n&G){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=G}for(s=0;s<r.length;s++){var l=r[s];if(B(l)&&It(l),e&&u!==null&&!D&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}(!e||u!==null&&!D)&&A(t,h)}return!1}function gn(t,n){for(var r=n;r!==null;){if(r.f&tt)try{r.fn(t);return}catch{r.f^=tt}r=r.parent}throw U=!1,t}function Rn(t){return(t.f&b)===0&&(t.parent===null||(t.parent.f&tt)===0)}function X(t,n,r,e){if(U){if(r===null&&(U=!1),Rn(n))throw t;return}r!==null&&(U=!0);{gn(t,n);return}}function jt(t){var ft;var n=v,r=E,e=g,s=o,l=D,a=T,i=f,p=t.f;v=null,E=0,g=null,o=p&(m|z)?null:t,D=!C&&(p&O)!==0,T=null,f=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(Y(t,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else t.deps=_=v;if(!D)for(c=E;c<_.length;c++)((ft=_[c]).reactions??(ft.reactions=[])).push(t)}else _!==null&&E<_.length&&(Y(t,E),_.length=E);return d}finally{v=n,E=r,g=e,o=s,D=l,T=a,f=i}}function Sn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(v===null||!v.includes(n))&&(A(n,j),n.f&(O|G)||(n.f^=G),Y(n,0))}function Y(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Sn(t,r[e])}function J(t){var n=t.f;if(!(n&b)){A(t,h);var r=u,e=f;u=t;try{n&lt?dn(t):Pt(t),Nt(t),Ct(t);var s=jt(t);t.teardown=typeof s=="function"?s:null,t.version=Yt}catch(l){X(l,t,r,e||t.ctx)}finally{u=r}}}function Bt(){if(N>1e3){N=0;try{nn()}catch(t){if(M!==null)X(t,M,null);else throw t}}N++}function Ut(t){var n=t.length;if(n!==0){Bt();var r=C;C=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var l=[];Vt(s,l),Dn(l)}}finally{C=r}}}function Dn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(b|P)))try{B(e)&&(J(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?bt(e):e.fn=null))}catch(s){X(s,e,null,e.ctx)}}}function xn(){if(L=!1,N>1001)return;const t=S;S=[],Ut(t),L||(N=0,M=null)}function Q(t){V===Mt&&(L||(L=!0,queueMicrotask(xn))),M=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(z|m)){if(!(r&h))return;n.f^=h}}S.push(n)}function Vt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&m)!==0,a=l&&(s&h)!==0,i=r.next;if(!a&&!(s&P))if(s&H){if(l)r.f^=h;else try{B(r)&&J(r)}catch(c){X(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&dt&&e.push(r);if(i===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=i}for(var _=0;_<e.length;_++)p=e[_],n.push(p),Vt(p,n)}function Gt(t){var n=V,r=S;try{Bt();const s=[];V=Tn,S=s,L=!1,Ut(r);var e=t==null?void 0:t();return wn(),(S.length>0||s.length>0)&&Gt(),N=0,M=null,e}finally{V=n,S=r}}async function Sr(){await Promise.resolve(),Gt()}function Dr(t){var _;var n=t.f,r=(n&y)!==0;if(r&&n&b){var e=xt(t);return ut(t),e}if(o!==null){T!==null&&T.includes(t)&&rn();var s=o.deps;v===null&&s!==null&&s[E]===t?E++:v===null?v=[t]:v.push(t),g!==null&&u!==null&&u.f&h&&!(u.f&m)&&g.includes(t)&&(A(u,R),Q(u))}else if(r&&t.deps===null)for(var l=t,a=l.parent,i=l;a!==null;)if(a.f&y){var p=a;i=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(i)||(d.deriveds??(d.deriveds=[])).push(i);break}return r&&(l=t,B(l)&&It(l)),t.v}function xr(t){const n=o;try{return o=null,t()}finally{o=n}}const In=~(R|j|h);function A(t,n){t.f=t.f&In|n}function Ir(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},W&&!n&&(f.l={s:null,u:null,r1:[],r2:at(!1)})}function Or(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];Z(l.effect),K(l.reaction),kt(l.fn)}}finally{Z(r),K(e)}}f=n.p,n.m=!0}return{}}function kr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)st(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ct in r&&st(r)}}}function st(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{st(t[e],n)}catch{}const r=Kt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=$t(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{Tt as $,or as A,mr as B,lr as C,W as D,Et as E,Nn as F,Pn as G,ln as H,at as I,jn as J,_t as K,u as L,Bn as M,Kt as N,On as O,Hn as P,qn as Q,m as R,ct as S,z as T,rr as U,Z as V,Wn as W,Jn as X,Ln as Y,dr as Z,Xn as _,yr as a,zn as a0,Qn as a1,sr as a2,bn as a3,I as a4,nt as a5,rt as a6,tr as a7,nr as a8,K as a9,Mn as aA,fn as aB,kt as aC,pn as aD,Gt as aE,Sr as aF,Xt as aG,o as aa,Er as ab,Rr as ac,Cn as ad,Wt as ae,sn as af,k as ag,_r as ah,mt as ai,an as aj,gt as ak,Yn as al,hr as am,kn as an,Tr as ao,ir as ap,$n as aq,P as ar,Vn as as,on as at,Gn as au,Ft as av,yn as aw,Kn as ax,Zn as ay,$t as az,xr as b,f as c,Fn as d,kr as e,_n as f,Dr as g,Un as h,hn as i,x as j,ur as k,fr as l,ar as m,gr as n,Ar as o,En as p,w as q,Zt as r,q as s,Ir as t,wr as u,vr as v,Or as w,er as x,pr as y,cr as z};
