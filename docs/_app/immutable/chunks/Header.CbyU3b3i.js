import{a as x,t as y}from"./disclose-version.yoHbpU2-.js";import"./legacy.CkEbuyeN.js";import{w as $,h as A,L as N,x as b,f as L,s as n,y as I,z as S,$ as k,A as i,B as c}from"./runtime.BNXvi4pi.js";import{h as B}from"./svelte-head.uLYpvHQy.js";import{p as g}from"./props.BwHlG9MQ.js";import{b as d}from"./paths.Dt-Oy9YD.js";function f(e,r,t,a){var s=e.__attributes??(e.__attributes={});A&&(s[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName==="LINK")||s[r]!==(s[r]=t)&&(r==="style"&&"__styles"in e&&(e.__styles={}),r==="loading"&&(e[N]=t),t==null?e.removeAttribute(r):typeof t!="string"&&H(e).includes(r)?e[r]=t:e.setAttribute(r,t))}var _=new Map;function H(e){var r=_.get(e.nodeName);if(r)return r;_.set(e.nodeName,r=[]);for(var t,a=e,s=Element.prototype;s!==a;){t=b(a);for(var o in t)t[o].set&&r.push(o);a=$(a)}return r}var M=y('<meta name="description"> <meta property="og:title"> <meta property="og:description"> <meta property="og:type" content="website"> <meta property="og:image"> <meta name="twitter:card" content="summary_large_image">',1);function K(e,r){let t=g(r,"title",8),a=g(r,"description",8);B(s=>{var o=M(),p=L(o),v=n(p,2),l=n(v,2);I(6),S(()=>{k.title=t(),f(p,"content",a()),f(v,"content",t()),f(l,"content",a())}),x(s,o)})}var O=y('<header class="text-lg font-freight font-bold mt-[calc(3vh+3vw)] mx-12 text-primary-100"><nav class="flex responsive-width"><div class="flex items-stretch mr-1 flex justify-center items-center"><a class="flex items-center justify-center"><img src="/favico.ico" alt="Icon" class="h-[calc(1.875rem+2px)] w-[calc(1.875rem+2px)] hover:filter hover:hue-rotate-[65deg] hover:saturate-[0.8] hover:brightness-[1.3]"></a></div> <ul class="flex flex-wrap gap-y-0.5 gap-x-0.5 w-full"><li class="border-dense-dotted flex-grow flex justify-center"><a class="px-3 py-1 hover:text-primary-110">projects</a></li> <li class="border-dense-dotted flex-grow flex justify-center"><a class="px-3 py-1 hover:text-primary-110">thoughts</a></li> <li class="border-dense-dotted flex-grow flex justify-center"><a class="px-3 py-1 hover:text-primary-110">favorites</a></li> <li class="border-dense-dotted flex-grow flex justify-center"><a target="_blank" rel="noopener noreferrer" class="px-3 py-1 hover:text-primary-110">cv</a></li></ul></nav></header>');function R(e){var r=O(),t=i(r),a=i(t),s=i(a);f(s,"href",`${d}/`),c(a);var o=n(a,2),p=i(o),v=i(p);f(v,"href",`${d}/projects`),c(p);var l=n(p,2),u=i(l);f(u,"href",`${d}/thoughts`),c(l);var h=n(l,2),w=i(h);f(w,"href",`${d}/favorites`),c(h);var m=n(h,2),j=i(m);f(j,"href",`${d}/pdf/Nick_Zhong_CV.pdf`),c(m),c(o),c(t),c(r),x(e,r)}export{R as H,K as S,f as s};
