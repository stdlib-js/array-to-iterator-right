// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.0.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.0.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function l(a){var h,j,p,c,f,g,u,v;if(!r(a))throw new TypeError(m("01X2O,GW",a));if(arguments.length>1){if(!t(c=arguments[1]))throw new TypeError(m("01X2H,G6",c));h=arguments[2]}return f=a.length,v=f,e(j={},"next",c?b:x),e(j,"return",y),n&&e(j,n,w),u=d(a),g=s(a)?i(u):o(u),j;function b(){return v+=a.length-f-1,f=a.length,p||v<0?(p=!0,{done:!0}):{value:c.call(h,g(a,v),v,a),done:!1}}function x(){return v+=a.length-f-1,f=a.length,p||v<0?(p=!0,{done:!0}):{value:g(a,v),done:!1}}function y(e){return p=!0,arguments.length?{value:e,done:!0}:{done:!0}}function w(){return c?l(a,c,h):l(a)}}export{l as default};
//# sourceMappingURL=index.mjs.map
