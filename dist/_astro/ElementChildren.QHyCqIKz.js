import{r as y}from"./index.BWzv4sAt.js";var o={},u;function E(){if(u)return o;u=1,o.__esModule=!0,o.forEach=d,o.hasChildOfType=s,o.map=c;var a=p(y);function f(e){if(typeof WeakMap!="function")return null;var n=new WeakMap,r=new WeakMap;return(f=function(t){return t?r:n})(e)}function p(e,n){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=f(n);if(r&&r.has(e))return r.get(e);var t={__proto__:null},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var l=h?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(t,i,l):t[i]=e[i]}return t.default=e,r&&r.set(e,t),t}function c(e,n){let r=0;return a.Children.map(e,t=>a.isValidElement(t)?n(t,r++):t)}function d(e,n){let r=0;a.Children.forEach(e,t=>{a.isValidElement(t)&&n(t,r++)})}function s(e,n){return a.Children.toArray(e).some(r=>a.isValidElement(r)&&r.type===n)}return o}export{E as r};