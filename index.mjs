// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.2.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function l(a){var j,h,u,c,p,v,g,f;if(!r(a))throw new TypeError(m("invalid argument. First argument must be an array-like object. Value: `%s`.",a));if(arguments.length>1){if(!t(c=arguments[1]))throw new TypeError(m("invalid argument. Second argument must be a function. Value: `%s`.",c));j=arguments[2]}return p=a.length,f=p,e(h={},"next",c?b:y),e(h,"return",x),n&&e(h,n,w),g=o(a),v=s(a)?i(g):d(g),h;function b(){return f+=a.length-p-1,p=a.length,u||f<0?(u=!0,{done:!0}):{value:c.call(j,v(a,f),f,a),done:!1}}function y(){return f+=a.length-p-1,p=a.length,u||f<0?(u=!0,{done:!0}):{value:v(a,f),done:!1}}function x(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}}function w(){return c?l(a,c,j):l(a)}}export{l as default};
//# sourceMappingURL=index.mjs.map
