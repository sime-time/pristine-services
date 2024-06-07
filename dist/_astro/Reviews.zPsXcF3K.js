import{j as o}from"./jsx-runtime.vwwm0Fto.js";import{r as V,g as it}from"./index.BwLlk1gw.js";import{r as ut,a as ve,b as me,i as he,c as lt,d as ct,e as dt,f as ft,g as pt,h as vt,j as mt}from"./Anchor.COX7TSBk.js";import{r as ht}from"./useWillUnmount.CWpPwgkE.js";import{r as xt}from"./ElementChildren.B4z-k8q3.js";import{a as X}from"./index.Cx-JV2k0.js";import"./extends.DMG7GgI3.js";var pe={exports:{}},K={},De;function yt(){if(De)return K;De=1,K.__esModule=!0,K.default=void 0;var m=V;function u(y,_){const j=(0,m.useRef)(!0);(0,m.useEffect)(()=>{if(j.current){j.current=!1;return}return y()},_)}var l=u;return K.default=l,K}var G={},Pe;function _t(){if(Pe)return G;Pe=1,G.__esModule=!0,G.default=k;var m=V,u=y(ut()),l=y(ht());function y(c){return c&&c.__esModule?c:{default:c}}const _=2**31-1;function j(c,p,r){const e=r-Date.now();c.current=e<=_?setTimeout(p,e):setTimeout(()=>j(c,p,r),_)}function k(){const c=(0,u.default)(),p=(0,m.useRef)();return(0,l.default)(()=>clearTimeout(p.current)),(0,m.useMemo)(()=>{const r=()=>clearTimeout(p.current);function e(d,s=0){c()&&(r(),s<=_?p.current=setTimeout(d,s):j(p,d,Date.now()+s))}return{set:e,clear:r,handleRef:p}},[])}return G}var J={exports:{}},Se;function jt(){return Se||(Se=1,function(m,u){"use client";var l=he;u.__esModule=!0,u.default=void 0;var y=p(V),_=l(ve()),j=me(),k=o;function c(e){if(typeof WeakMap!="function")return null;var d=new WeakMap,s=new WeakMap;return(c=function(i){return i?s:d})(e)}function p(e,d){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var s=c(d);if(s&&s.has(e))return s.get(e);var i={__proto__:null},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in e)if(f!=="default"&&Object.prototype.hasOwnProperty.call(e,f)){var b=C?Object.getOwnPropertyDescriptor(e,f):null;b&&(b.get||b.set)?Object.defineProperty(i,f,b):i[f]=e[f]}return i.default=e,s&&s.set(e,i),i}const r=y.forwardRef(({className:e,bsPrefix:d,as:s="div",...i},C)=>(d=(0,j.useBootstrapPrefix)(d,"carousel-caption"),(0,k.jsx)(s,{ref:C,className:(0,_.default)(e,d),...i})));r.displayName="CarouselCaption",u.default=r,m.exports=u.default}(J,J.exports)),J.exports}var Q={exports:{}},We;function Ct(){return We||(We=1,function(m,u){"use client";var l=he;u.__esModule=!0,u.default=void 0;var y=l(ve()),_=p(V),j=me(),k=o;function c(e){if(typeof WeakMap!="function")return null;var d=new WeakMap,s=new WeakMap;return(c=function(i){return i?s:d})(e)}function p(e,d){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var s=c(d);if(s&&s.has(e))return s.get(e);var i={__proto__:null},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in e)if(f!=="default"&&Object.prototype.hasOwnProperty.call(e,f)){var b=C?Object.getOwnPropertyDescriptor(e,f):null;b&&(b.get||b.set)?Object.defineProperty(i,f,b):i[f]=e[f]}return i.default=e,s&&s.set(e,i),i}const r=_.forwardRef(({as:e="div",bsPrefix:d,className:s,...i},C)=>{const f=(0,y.default)(s,(0,j.useBootstrapPrefix)(d,"carousel-item"));return(0,k.jsx)(e,{ref:C,...i,className:f})});r.displayName="CarouselItem",u.default=r,m.exports=u.default}(Q,Q.exports)),Q.exports}(function(m,u){"use client";var l=he;u.__esModule=!0,u.default=void 0;var y=l(lt()),_=l(yt()),j=l(ct()),k=l(_t()),c=l(dt()),p=l(ve()),r=Ae(V),e=r,d=mt,s=l(jt()),i=l(Ct()),C=xt(),f=me(),b=l(ft()),Ue=l(pt()),$e=l(vt()),h=o;function xe(n){if(typeof WeakMap!="function")return null;var M=new WeakMap,R=new WeakMap;return(xe=function(N){return N?R:M})(n)}function Ae(n,M){if(n&&n.__esModule)return n;if(n===null||typeof n!="object"&&typeof n!="function")return{default:n};var R=xe(M);if(R&&R.has(n))return R.get(n);var N={__proto__:null},ee=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in n)if(x!=="default"&&Object.prototype.hasOwnProperty.call(n,x)){var P=ee?Object.getOwnPropertyDescriptor(n,x):null;P&&(P.get||P.set)?Object.defineProperty(N,x,P):N[x]=n[x]}return N.default=n,R&&R.set(n,N),N}const Le=40;function He(n){if(!n||!n.style||!n.parentNode||!n.parentNode.style)return!1;const M=getComputedStyle(n);return M.display!=="none"&&M.visibility!=="hidden"&&getComputedStyle(n.parentNode).display!=="none"}const ye=e.forwardRef(({defaultActiveIndex:n=0,...M},R)=>{const{as:N="div",bsPrefix:ee,slide:x=!0,fade:P=!1,controls:Be=!0,indicators:te=!0,indicatorLabels:re=[],activeIndex:O,onSelect:q,onSlide:A,onSlid:L,interval:H=5e3,keyboard:_e=!0,onKeyDown:ne,pause:S="hover",onMouseOver:ae,onMouseOut:se,wrap:B=!0,touch:je=!0,onTouchStart:oe,onTouchMove:ie,onTouchEnd:ue,prevIcon:Fe=(0,h.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:Ce="Previous",nextIcon:Xe=(0,h.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:be="Next",variant:we,className:Ke,children:le,...Ve}=(0,d.useUncontrolled)({defaultActiveIndex:n,...M},{activeIndex:"onSelect"}),T=(0,f.useBootstrapPrefix)(ee,"carousel"),W=(0,f.useIsRTL)(),U=(0,r.useRef)(null),[ge,Re]=(0,r.useState)("next"),[Ye,Y]=(0,r.useState)(!1),[$,Ne]=(0,r.useState)(!1),[v,ze]=(0,r.useState)(O||0);(0,r.useEffect)(()=>{!$&&O!==v&&(U.current?Re(U.current):Re((O||0)>v?"next":"prev"),x&&Ne(!0),ze(O||0))},[O,$,v,x]),(0,r.useEffect)(()=>{U.current&&(U.current=null)});let I=0,Te;(0,C.forEach)(le,(t,a)=>{++I,a===O&&(Te=t.props.interval)});const Ee=(0,j.default)(Te),w=(0,r.useCallback)(t=>{if($)return;let a=v-1;if(a<0){if(!B)return;a=I-1}U.current="prev",q?.(a,t)},[$,v,q,B,I]),g=(0,y.default)(t=>{if($)return;let a=v+1;if(a>=I){if(!B)return;a=0}U.current="next",q?.(a,t)}),ce=(0,r.useRef)();(0,r.useImperativeHandle)(R,()=>({element:ce.current,prev:w,next:g}));const Me=(0,y.default)(()=>{!document.hidden&&He(ce.current)&&(W?w():g())}),D=ge==="next"?"start":"end";(0,_.default)(()=>{x||(A?.(v,D),L?.(v,D))},[v]);const Ge=`${T}-item-${ge}`,Je=`${T}-item-${D}`,Qe=(0,r.useCallback)(t=>{(0,Ue.default)(t),A?.(v,D)},[A,v,D]),Ze=(0,r.useCallback)(()=>{Ne(!1),L?.(v,D)},[L,v,D]),et=(0,r.useCallback)(t=>{if(_e&&!/input|textarea/i.test(t.target.tagName))switch(t.key){case"ArrowLeft":t.preventDefault(),W?g(t):w(t);return;case"ArrowRight":t.preventDefault(),W?w(t):g(t);return}ne?.(t)},[_e,ne,w,g,W]),tt=(0,r.useCallback)(t=>{S==="hover"&&Y(!0),ae?.(t)},[S,ae]),rt=(0,r.useCallback)(t=>{Y(!1),se?.(t)},[se]),Oe=(0,r.useRef)(0),z=(0,r.useRef)(0),qe=(0,k.default)(),nt=(0,r.useCallback)(t=>{Oe.current=t.touches[0].clientX,z.current=0,S==="hover"&&Y(!0),oe?.(t)},[S,oe]),at=(0,r.useCallback)(t=>{t.touches&&t.touches.length>1?z.current=0:z.current=t.touches[0].clientX-Oe.current,ie?.(t)},[ie]),st=(0,r.useCallback)(t=>{if(je){const a=z.current;Math.abs(a)>Le&&(a>0?w(t):g(t))}S==="hover"&&qe.set(()=>{Y(!1)},H||void 0),ue?.(t)},[je,S,w,g,qe,H,ue]),ke=H!=null&&!Ye&&!$,de=(0,r.useRef)();(0,r.useEffect)(()=>{var t,a;if(!ke)return;const E=W?w:g;return de.current=window.setInterval(document.visibilityState?Me:E,(t=(a=Ee.current)!=null?a:H)!=null?t:void 0),()=>{de.current!==null&&clearInterval(de.current)}},[ke,w,g,Ee,H,Me,W]);const Ie=(0,r.useMemo)(()=>te&&Array.from({length:I},(t,a)=>E=>{q?.(a,E)}),[te,I,q]);return(0,h.jsxs)(N,{ref:ce,...Ve,onKeyDown:et,onMouseOver:tt,onMouseOut:rt,onTouchStart:nt,onTouchMove:at,onTouchEnd:st,className:(0,p.default)(Ke,T,x&&"slide",P&&`${T}-fade`,we&&`${T}-${we}`),children:[te&&(0,h.jsx)("div",{className:`${T}-indicators`,children:(0,C.map)(le,(t,a)=>(0,h.jsx)("button",{type:"button","data-bs-target":"","aria-label":re!=null&&re.length?re[a]:`Slide ${a+1}`,className:a===v?"active":void 0,onClick:Ie?Ie[a]:void 0,"aria-current":a===v},a))}),(0,h.jsx)("div",{className:`${T}-inner`,children:(0,C.map)(le,(t,a)=>{const E=a===v;return x?(0,h.jsx)($e.default,{in:E,onEnter:E?Qe:void 0,onEntered:E?Ze:void 0,addEndListener:b.default,children:(F,ot)=>e.cloneElement(t,{...ot,className:(0,p.default)(t.props.className,E&&F!=="entered"&&Ge,(F==="entered"||F==="exiting")&&"active",(F==="entering"||F==="exiting")&&Je)})}):e.cloneElement(t,{className:(0,p.default)(t.props.className,E&&"active")})})}),Be&&(0,h.jsxs)(h.Fragment,{children:[(B||O!==0)&&(0,h.jsxs)(c.default,{className:`${T}-control-prev`,onClick:w,children:[Fe,Ce&&(0,h.jsx)("span",{className:"visually-hidden",children:Ce})]}),(B||O!==I-1)&&(0,h.jsxs)(c.default,{className:`${T}-control-next`,onClick:g,children:[Xe,be&&(0,h.jsx)("span",{className:"visually-hidden",children:be})]})]})]})});ye.displayName="Carousel",u.default=Object.assign(ye,{Caption:s.default,Item:i.default}),m.exports=u.default})(pe,pe.exports);var bt=pe.exports;const Z=it(bt);function fe({reviewer:m,review:u}){return o.jsxs(o.Fragment,{children:[o.jsx("p",{className:"mb-4",children:u}),o.jsx("div",{className:"d-flex align-items-center justify-content-center fs-4",children:o.jsxs("div",{className:"rounded-3 bg-body-secondary shadow text-black w-md-25 py-3 px-4",children:[o.jsx("div",{className:"pb-3 ",children:m}),o.jsxs("div",{className:"p-3 border-top text-primary d-flex gap-2 align-items-center justify-content-center",children:[o.jsx(X,{}),o.jsx(X,{}),o.jsx(X,{}),o.jsx(X,{}),o.jsx(X,{})]})]})})]})}function Ot(){return o.jsx("div",{className:"container my-5 py-3",children:o.jsxs("div",{className:"d-flex flex-column align-items-center gap-4",children:[o.jsx("h1",{className:"display-4 text-center",children:"Hear what others say about us"}),o.jsxs(Z,{className:"rounded-4 bg-primary-subtle",children:[o.jsx(Z.Item,{className:"h-100 p-5 fs-3 text-center",children:o.jsx(fe,{reviewer:"Bobby Hensley",review:"I called on a tuesday afternoon strapped to find a last minute cleaner for after rehearsal, for my sisters beautfil wedding. THANK you to Pristine Clean team. Katie and her were on time and our studio space turn out spotless!"})}),o.jsx(Z.Item,{className:"h-100 p-5 fs-3 text-center",children:o.jsx(fe,{reviewer:"Myra Ansley",review:"We loved the team this morning! The girls did a wonderful job. Our house looks brand new, and really baseboard are restored. Thank you again!"})}),o.jsx(Z.Item,{className:"h-100 p-5 fs-3 text-center",children:o.jsx(fe,{reviewer:"Destiny Dossett",review:"I just love how detailed oriented my crew was with cleaning. Showed up on time! Very kind with great hospitality. Love the updates from cleaners via their app!! Would highly recommend and will indubitably use there services for the future!"})})]})]})})}export{Ot as default};