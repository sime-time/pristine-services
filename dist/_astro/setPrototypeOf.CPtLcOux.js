import{r as l}from"./index.Dv_IU83w.js";var _={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O=l,c=Symbol.for("react.element"),m=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,b=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,n){var t,o={},f=null,p=null;n!==void 0&&(f=""+n),r.key!==void 0&&(f=""+r.key),r.ref!==void 0&&(p=r.ref);for(t in r)y.call(r,t)&&!v.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)o[t]===void 0&&(o[t]=r[t]);return{$$typeof:c,type:e,key:f,ref:p,props:o,_owner:b.current}}s.Fragment=m;s.jsx=u;s.jsxs=u;_.exports=s;var x=_.exports;function i(){return i=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(this,arguments)}function d(e,r){if(e==null)return{};var n={};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){if(r.indexOf(t)>=0)continue;n[t]=e[t]}return n}function a(e,r){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},a(e,r)}export{d as _,i as a,a as b,x as j};
