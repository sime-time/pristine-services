function f(n,r){if(n==null)return{};var e={};for(var t in n)if(Object.prototype.hasOwnProperty.call(n,t)){if(r.indexOf(t)>=0)continue;e[t]=n[t]}return e}function o(n,r){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,i){return t.__proto__=i,t},o(n,r)}function a(){return a=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}return n},a.apply(this,arguments)}export{o as _,f as a,a as b};