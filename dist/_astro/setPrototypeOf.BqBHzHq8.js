import{r as y}from"./index.BWzv4sAt.js";var _={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O;function b(){if(O)return s;O=1;var t=y,n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function c(u,e,l){var i,f={},p=null,m=null;l!==void 0&&(p=""+l),e.key!==void 0&&(p=""+e.key),e.ref!==void 0&&(m=e.ref);for(i in e)r.call(e,i)&&!R.hasOwnProperty(i)&&(f[i]=e[i]);if(u&&u.defaultProps)for(i in e=u.defaultProps,e)f[i]===void 0&&(f[i]=e[i]);return{$$typeof:n,type:u,key:p,ref:m,props:f,_owner:a.current}}return s.Fragment=o,s.jsx=c,s.jsxs=c,s}var x;function j(){return x||(x=1,_.exports=b()),_.exports}var h=j();function d(){return d=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},d.apply(this,arguments)}function E(t,n){if(t==null)return{};var o={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(n.indexOf(r)>=0)continue;o[r]=t[r]}return o}function v(t,n){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},v(t,n)}export{E as _,v as a,d as b,h as j,j as r};
