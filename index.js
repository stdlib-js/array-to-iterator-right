// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).array2iteratorRight=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var l,c,y,s;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(r,e)||f.call(r,e)?(l=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=l):r[e]=t.value),y="get"in t,s="set"in t,c&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,e,t.get),s&&a&&a.call(r,e,t.set),r};var l=e;function c(r,e,t){l(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=/./;function s(r){return"boolean"==typeof r}var h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return h&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function b(r,e){return null!=r&&g.call(r,e)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var v=p()?function(r){var e,t,n;if(null==r)return m.call(r);t=r[w],e=b(r,w);try{r[w]=void 0}catch(e){return m.call(r)}return n=m.call(r),e?r[w]=t:delete r[w],n}:function(r){return m.call(r)},d=Boolean.prototype.toString;var E=p();function A(r){return"object"==typeof r&&(r instanceof Boolean||(E?function(r){try{return d.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===v(r)))}function _(r){return s(r)||A(r)}function T(){return new Function("return this;")()}c(_,"isPrimitive",s),c(_,"isObject",A);var j="object"==typeof self?self:null,x="object"==typeof window?window:null,B="object"==typeof global?global:null;var L=function(r){if(arguments.length){if(!s(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return T()}if(j)return j;if(x)return x;if(B)return B;throw new Error("unexpected error. Unable to resolve global object.")}(),R=L.document&&L.document.childNodes,S=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var k=/^\s*function\s*([^(]*)/i;c(V,"REGEXP",k);var I=Array.isArray?Array.isArray:function(r){return"[object Array]"===v(r)};function O(r){return null!==r&&"object"==typeof r}function C(r){return O(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function M(r){var e,t,n;if(("Object"===(t=v(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=k.exec(n.toString()))return e[1]}return C(r)?"Buffer":t}c(O,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!I(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(O));var U="function"==typeof y||"object"==typeof S||"function"==typeof R?function(r){return M(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?M(r).toLowerCase():e};function N(r){return"function"===U(r)}var F=Math.floor;function P(r){return F(r)===r}function Y(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&P(r.length)&&r.length>=0&&r.length<=9007199254740991}var W="function";function G(r){return typeof r.get===W&&typeof r.set===W}function X(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&b(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}var J=X()?Symbol.iterator:null,H={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function q(r){var e=H[r];return"function"==typeof e?e:H.default}var z={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function D(r){var e=z[r];return"function"==typeof e?e:z.default}var K={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},Q="function"==typeof Float64Array;var Z="function"==typeof Float64Array?Float64Array:null;var $="function"==typeof Float64Array?Float64Array:void 0;var rr=function(){var r,e,t;if("function"!=typeof Z)return!1;try{e=new Z([1,3.14,-3.14,NaN]),t=e,r=(Q&&t instanceof Float64Array||"[object Float64Array]"===v(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?$:function(){throw new Error("not implemented")},er="function"==typeof Float32Array;var tr=Number.POSITIVE_INFINITY,nr="function"==typeof Float32Array?Float32Array:null;var or="function"==typeof Float32Array?Float32Array:void 0;var ir=function(){var r,e,t;if("function"!=typeof nr)return!1;try{e=new nr([1,3.14,-3.14,5e40]),t=e,r=(er&&t instanceof Float32Array||"[object Float32Array]"===v(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===tr}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")},ar="function"==typeof Uint32Array;var ur="function"==typeof Uint32Array?Uint32Array:null;var fr="function"==typeof Uint32Array?Uint32Array:void 0;var lr=function(){var r,e,t;if("function"!=typeof ur)return!1;try{e=new ur(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(ar&&t instanceof Uint32Array||"[object Uint32Array]"===v(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")},cr="function"==typeof Int32Array;var yr="function"==typeof Int32Array?Int32Array:null;var sr="function"==typeof Int32Array?Int32Array:void 0;var hr=function(){var r,e,t;if("function"!=typeof yr)return!1;try{e=new yr([1,3.14,-3.14,2147483648]),t=e,r=(cr&&t instanceof Int32Array||"[object Int32Array]"===v(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")},pr="function"==typeof Uint16Array;var mr="function"==typeof Uint16Array?Uint16Array:null;var gr="function"==typeof Uint16Array?Uint16Array:void 0;var br=function(){var r,e,t;if("function"!=typeof mr)return!1;try{e=new mr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(pr&&t instanceof Uint16Array||"[object Uint16Array]"===v(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")},wr="function"==typeof Int16Array;var vr="function"==typeof Int16Array?Int16Array:null;var dr="function"==typeof Int16Array?Int16Array:void 0;var Er=function(){var r,e,t;if("function"!=typeof vr)return!1;try{e=new vr([1,3.14,-3.14,32768]),t=e,r=(wr&&t instanceof Int16Array||"[object Int16Array]"===v(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")},Ar="function"==typeof Uint8Array;var _r="function"==typeof Uint8Array?Uint8Array:null;var Tr="function"==typeof Uint8Array?Uint8Array:void 0;var jr=function(){var r,e,t;if("function"!=typeof _r)return!1;try{e=new _r(e=[1,3.14,-3.14,256,257]),t=e,r=(Ar&&t instanceof Uint8Array||"[object Uint8Array]"===v(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Tr:function(){throw new Error("not implemented")},xr="function"==typeof Uint8ClampedArray;var Br="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Lr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Rr=function(){var r,e,t;if("function"!=typeof Br)return!1;try{e=new Br([-1,0,1,3.14,4.99,255,256]),t=e,r=(xr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===v(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Lr:function(){throw new Error("not implemented")},Sr="function"==typeof Int8Array;var Vr="function"==typeof Int8Array?Int8Array:null;var kr="function"==typeof Int8Array?Int8Array:void 0;var Ir=function(){var r,e,t;if("function"!=typeof Vr)return!1;try{e=new Vr([1,3.14,-3.14,128]),t=e,r=(Sr&&t instanceof Int8Array||"[object Int8Array]"===v(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?kr:function(){throw new Error("not implemented")};function Or(r){return"number"==typeof r}var Cr=Number,Mr=Cr.prototype.toString;var Ur=p();function Nr(r){return"object"==typeof r&&(r instanceof Cr||(Ur?function(r){try{return Mr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===v(r)))}function Fr(r){return Or(r)||Nr(r)}c(Fr,"isPrimitive",Or),c(Fr,"isObject",Nr);var Pr=Cr.NEGATIVE_INFINITY;function Yr(r){return r<tr&&r>Pr&&P(r)}function Wr(r){return Or(r)&&Yr(r)}function Gr(r){return Nr(r)&&Yr(r.valueOf())}function Xr(r){return Wr(r)||Gr(r)}function Jr(r){return Wr(r)&&r>=0}function Hr(r){return Gr(r)&&r.valueOf()>=0}function qr(r){return Jr(r)||Hr(r)}c(Xr,"isPrimitive",Wr),c(Xr,"isObject",Gr),c(qr,"isPrimitive",Jr),c(qr,"isObject",Hr);function zr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&P(r.length)&&r.length>=0&&r.length<=4294967295}var Dr="function"==typeof ArrayBuffer;function Kr(r){return Dr&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===v(r)}function Qr(r){return"object"==typeof r&&null!==r&&!I(r)}function Zr(r,e){if(!(this instanceof Zr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Or(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!Or(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}c(Zr,"BYTES_PER_ELEMENT",8),c(Zr.prototype,"BYTES_PER_ELEMENT",8),c(Zr.prototype,"byteLength",16),c(Zr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),c(Zr.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var $r="function"==typeof Math.fround?Math.fround:null,re=new ir(1);var ee="function"==typeof $r?$r:function(r){return re[0]=r,re[0]};function te(r,e){if(!(this instanceof te))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Or(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!Or(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:ee(r)}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:ee(e)}),this}function ne(r){return r instanceof Zr||r instanceof te||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function oe(r){return P(r/2)}function ie(r,e,t){l(r,e,{configurable:!1,enumerable:!1,get:t})}function ae(r){return r.re}function ue(r){return r.im}function fe(r,e){return new ir(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function le(r,e){return new rr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function ce(r,e){return r[e]}function ye(r,e){return r.get(e)}function se(r,e,t){r[e]=t}function he(r,e,t){r.set(t,e)}function pe(r){var e=Boolean(r.get&&r.set);return{data:r,accessors:e,getter:e?ye:ce,setter:e?he:se}}function me(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(zr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!ne(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(ae(n),ue(n))}return e}function ge(r,e,t){var n,o,i,a;for(n=[],a=-1;!(o=r.next()).done;)if(a+=1,zr(i=e.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!ne(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(ae(i),ue(i))}return n}function be(r,e){var t,n,o,i;for(t=e.length,i=0,o=0;o<t;o++){if(!ne(n=e[o]))return null;r[i]=ae(n),r[i+1]=ue(n),i+=2}return r}c(te,"BYTES_PER_ELEMENT",4),c(te.prototype,"BYTES_PER_ELEMENT",4),c(te.prototype,"byteLength",8),c(te.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),c(te.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var we=2*ir.BYTES_PER_ELEMENT,ve=X();function de(r){return r instanceof Te||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function Ee(r){return r===Te||"Complex128Array"===r.name}function Ae(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===we}function _e(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*we}function Te(){var r,e,t,n;if(e=arguments.length,!(this instanceof Te))return 0===e?new Te:1===e?new Te(arguments[0]):2===e?new Te(arguments[0],arguments[1]):new Te(arguments[0],arguments[1],arguments[2]);if(0===e)t=new ir(0);else if(1===e)if(Jr(arguments[0]))t=new ir(2*arguments[0]);else if(Y(arguments[0]))if((n=(t=arguments[0]).length)&&I(t)&&ne(t[0])){if(null===(t=be(new ir(2*n),t))){if(!oe(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new ir(arguments[0])}}else{if(Ae(t))t=fe(t,0);else if(_e(t))t=le(t,0);else if(!oe(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new ir(t)}else if(Kr(arguments[0])){if(!P((t=arguments[0]).byteLength/we))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+we+". Byte length: `"+t.byteLength+"`.");t=new ir(t)}else{if(!Qr(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===ve)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!N(t[J]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!N((t=t[J]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=me(t))instanceof Error)throw t;t=new ir(t)}else{if(!Kr(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Jr(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!P(r/we))throw new RangeError("invalid argument. Byte offset must be a multiple of "+we+". Value: `"+r+"`.");if(2===e){if(!P((n=t.byteLength-r)/we))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+we+". View byte length: `"+n+"`.");t=new ir(t,r)}else{if(!Jr(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*we>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*we+"`.");t=new ir(t,r,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}function je(r){return r.re}function xe(r){return r.im}function Be(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(zr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!ne(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(je(n),xe(n))}return e}function Le(r,e,t){var n,o,i,a;for(n=[],a=-1;!(o=r.next()).done;)if(a+=1,zr(i=e.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!ne(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(je(i),xe(i))}return n}function Re(r,e){var t,n,o,i;for(t=e.length,i=0,o=0;o<t;o++){if(!ne(n=e[o]))return null;r[i]=je(n),r[i+1]=xe(n),i+=2}return r}c(Te,"BYTES_PER_ELEMENT",we),c(Te,"name","Complex64Array"),c(Te,"from",(function(r){var e,t,n,o,i,a,u,f,l,c,y;if(!N(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ee(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!N(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(e=arguments[2])}if(de(r)){if(u=r.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(ne(l=n.call(e,r.get(c),c)))i[y]=ae(l),i[y+1]=ue(l);else{if(!(zr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(Y(r)){if(n){for(u=r.length,a=pe(r),c=0;c<u;c++)if(!ne(a.getter(r,c))){f=!0;break}if(f){if(!oe(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(e,a.getter(r,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(ne(l=n.call(e,a.getter(r,c),c)))i[y]=ae(l),i[y+1]=ue(l);else{if(!(zr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(Qr(r)&&ve&&N(r[J])){if(!N((i=r[J]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?ge(i,n,e):me(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),c(Te,"of",(function(){var r,e;if(!N(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ee(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),ie(Te.prototype,"buffer",(function(){return this._buffer.buffer})),ie(Te.prototype,"byteLength",(function(){return this._buffer.byteLength})),ie(Te.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(Te.prototype,"BYTES_PER_ELEMENT",Te.BYTES_PER_ELEMENT),c(Te.prototype,"copyWithin",(function(r,e){if(!de(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),c(Te.prototype,"entries",(function(){var r,e,t,n,o,i,a;if(!de(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var e;if(i+=1,o||i>=n)return{done:!0};return e=new te(r[a+=2],r[a+1]),{value:[i,e],done:!1}})),c(t,"return",(function(r){if(o=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),J&&c(t,J,(function(){return e.entries()})),t})),c(Te.prototype,"get",(function(r){var e;if(!de(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Jr(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new te((e=this._buffer)[r*=2],e[r+1])})),ie(Te.prototype,"length",(function(){return this._length})),c(Te.prototype,"set",(function(r){var e,t,n,o,i,a,u,f,l;if(!de(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Jr(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(ne(r)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=ae(r),void(n[t+1]=ue(r))}if(de(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*we,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new ir(e.length),f=0;f<e.length;f++)o[f]=e[f];e=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!Y(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(a=r.length,f=0;f<a;f++)if(!ne(r[f])){i=!0;break}if(i){if(!oe(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*we,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new ir(a),f=0;f<a;f++)o[f]=e[f];e=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=ae(u),n[t+1]=ue(u),t+=2}}));var Se=2*rr.BYTES_PER_ELEMENT,Ve=X();function ke(r){return r instanceof Me||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function Ie(r){return r===Me||"Complex64Array"===r.name}function Oe(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Se/2}function Ce(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Se}function Me(){var r,e,t,n;if(e=arguments.length,!(this instanceof Me))return 0===e?new Me:1===e?new Me(arguments[0]):2===e?new Me(arguments[0],arguments[1]):new Me(arguments[0],arguments[1],arguments[2]);if(0===e)t=new rr(0);else if(1===e)if(Jr(arguments[0]))t=new rr(2*arguments[0]);else if(Y(arguments[0]))if((n=(t=arguments[0]).length)&&I(t)&&ne(t[0])){if(null===(t=Re(new rr(2*n),t))){if(!oe(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new rr(arguments[0])}}else{if(Oe(t))t=fe(t,0);else if(Ce(t))t=le(t,0);else if(!oe(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new rr(t)}else if(Kr(arguments[0])){if(!P((t=arguments[0]).byteLength/Se))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Se+". Byte length: `"+t.byteLength+"`.");t=new rr(t)}else{if(!Qr(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Ve)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!N(t[J]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!N((t=t[J]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=Be(t))instanceof Error)throw t;t=new rr(t)}else{if(!Kr(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Jr(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!P(r/Se))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Se+". Value: `"+r+"`.");if(2===e){if(!P((n=t.byteLength-r)/Se))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Se+". View byte length: `"+n+"`.");t=new rr(t,r)}else{if(!Jr(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Se>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Se+"`.");t=new rr(t,r,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}c(Me,"BYTES_PER_ELEMENT",Se),c(Me,"name","Complex128Array"),c(Me,"from",(function(r){var e,t,n,o,i,a,u,f,l,c,y;if(!N(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ie(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!N(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(e=arguments[2])}if(ke(r)){if(u=r.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(ne(l=n.call(e,r.get(c),c)))i[y]=je(l),i[y+1]=xe(l);else{if(!(zr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(Y(r)){if(n){for(u=r.length,a=pe(r),c=0;c<u;c++)if(!ne(a.getter(r,c))){f=!0;break}if(f){if(!oe(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(e,a.getter(r,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(ne(l=n.call(e,a.getter(r,c),c)))i[y]=je(l),i[y+1]=xe(l);else{if(!(zr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(Qr(r)&&Ve&&N(r[J])){if(!N((i=r[J]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?Le(i,n,e):Be(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),c(Me,"of",(function(){var r,e;if(!N(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ie(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),ie(Me.prototype,"buffer",(function(){return this._buffer.buffer})),ie(Me.prototype,"byteLength",(function(){return this._buffer.byteLength})),ie(Me.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(Me.prototype,"BYTES_PER_ELEMENT",Me.BYTES_PER_ELEMENT),c(Me.prototype,"copyWithin",(function(r,e){if(!ke(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),c(Me.prototype,"entries",(function(){var r,e,t,n,o,i,a;if(!ke(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var e;if(i+=1,o||i>=n)return{done:!0};return e=new Zr(r[a+=2],r[a+1]),{value:[i,e],done:!1}})),c(t,"return",(function(r){if(o=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),J&&c(t,J,(function(){return e.entries()})),t})),c(Me.prototype,"get",(function(r){var e;if(!ke(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Jr(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new Zr((e=this._buffer)[r*=2],e[r+1])})),ie(Me.prototype,"length",(function(){return this._length})),c(Me.prototype,"set",(function(r){var e,t,n,o,i,a,u,f,l;if(!ke(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Jr(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(ne(r)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=je(r),void(n[t+1]=xe(r))}if(ke(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*Se,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new rr(e.length),f=0;f<e.length;f++)o[f]=e[f];e=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!Y(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(a=r.length,f=0;f<a;f++)if(!ne(r[f])){i=!0;break}if(i){if(!oe(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*Se,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new rr(a),f=0;f<a;f++)o[f]=e[f];e=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=je(u),n[t+1]=xe(u),t+=2}}));var Ue=[rr,ir,hr,lr,Er,br,Ir,jr,Rr,Te,Me],Ne=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],Fe=Ne.length;function Pe(r){var e;if(I(r))return"generic";if(C(r))return null;for(e=0;e<Fe;e++)if(r instanceof Ue[e])return Ne[e];return K[M(r)]||null}function Ye(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}return function r(e){var t,n,o,i,a,u,f,l;if(!Y(e))throw new TypeError(Ye("01X2O,GW",e));if(arguments.length>1){if(!N(i=arguments[1]))throw new TypeError(Ye("01X2H,G6",i));t=arguments[2]}return a=e.length,l=a,c(n={},"next",i?y:s),c(n,"return",h),J&&c(n,J,p),f=Pe(e),u=G(e)?q(f):D(f),n;function y(){return l+=e.length-a-1,a=e.length,o||l<0?(o=!0,{done:!0}):{value:i.call(t,u(e,l),l,e),done:!1}}function s(){return l+=e.length-a-1,a=e.length,o||l<0?(o=!0,{done:!0}):{value:u(e,l),done:!1}}function h(r){return o=!0,arguments.length?{value:r,done:!0}:{done:!0}}function p(){return i?r(e,i,t):r(e)}}}));
//# sourceMappingURL=index.js.map
