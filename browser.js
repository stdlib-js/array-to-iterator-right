// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(e){return"string"==typeof e}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,y=String.prototype.replace,h=/e\+(\d)$/,p=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,d=/(\..*[^0])0*e/;function v(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=y.call(n,d,"$1e"),n=y.call(n,b,"e"),n=y.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=y.call(n,h,"e+0$1"),n=y.call(n,p,"e-0$1"),e.alternate&&(n=y.call(n,g,"$1."),n=y.call(n,m,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):c.call(n)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function A(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var T=String.fromCharCode,_=isNaN,x=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,o,a,l,c,s,y;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",c=1,s=0;s<e.length;s++)if(f(n=e[s]))l+=n;else{if(r=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(o=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,_(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function L(e){var r,t,n,i;for(t=[],i=0,n=V.exec(e);n;)(r=e.slice(i,V.lastIndex-n[0].length)).length&&t.push(r),t.push(R(n)),i=V.lastIndex,n=V.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function S(e){return"string"==typeof e}function B(e){var r,t,n;if(!S(e))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=L(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var I,C=Object.prototype,F=C.toString,O=C.__defineGetter__,M=C.__defineSetter__,U=C.__lookupGetter__,N=C.__lookupSetter__;I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(U.call(e,r)||N.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&O&&O.call(e,r,t.get),a&&M&&M.call(e,r,t.set),e};var P=I;function Y(e,r,t){P(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W=/./;function $(e){return"boolean"==typeof e}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return G&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString,J=Object.prototype.hasOwnProperty;function z(e,r){return null!=e&&J.call(e,r)}var H="function"==typeof Symbol?Symbol:void 0,q="function"==typeof H?H.toStringTag:"",D=X()?function(e){var r,t,n;if(null==e)return Z.call(e);t=e[q],r=z(e,q);try{e[q]=void 0}catch(r){return Z.call(e)}return n=Z.call(e),r?e[q]=t:delete e[q],n}:function(e){return Z.call(e)},K=Boolean,Q=Boolean.prototype.toString,ee=X();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===D(e)))}function te(e){return $(e)||re(e)}function ne(){return new Function("return this;")()}Y(te,"isPrimitive",$),Y(te,"isObject",re);var ie="object"==typeof self?self:null,oe="object"==typeof window?window:null,ae="object"==typeof globalThis?globalThis:null,ue=function(e){if(arguments.length){if(!$(e))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ne()}if(ae)return ae;if(ie)return ie;if(oe)return oe;throw new Error("unexpected error. Unable to resolve global object.")}(),fe=ue.document&&ue.document.childNodes,le=Int8Array;function ce(){return/^\s*function\s*([^(]*)/i}var se=/^\s*function\s*([^(]*)/i;Y(ce,"REGEXP",se);var ye=Array.isArray?Array.isArray:function(e){return"[object Array]"===D(e)};function he(e){return null!==e&&"object"==typeof e}function pe(e){return he(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function ge(e){var r,t,n;if(("Object"===(t=D(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=se.exec(n.toString()))return r[1]}return pe(e)?"Buffer":t}Y(he,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ye(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(he));var me="function"==typeof W||"object"==typeof le||"function"==typeof fe?function(e){return ge(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?ge(e).toLowerCase():r};function we(e){return"function"===me(e)}var be=Math.floor;function de(e){return be(e)===e}function ve(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&de(e.length)&&e.length>=0&&e.length<=9007199254740991}var Ee="function";function Ae(e){return typeof e.get===Ee&&typeof e.set===Ee}function Te(){return"function"==typeof H&&"symbol"==typeof H("foo")&&z(H,"iterator")&&"symbol"==typeof H.iterator}var _e=Te()?Symbol.iterator:null,xe={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function je(e){var r=xe[e];return"function"==typeof r?r:xe.default}var ke={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function Ve(e){var r=ke[e];return"function"==typeof r?r:ke.default}var Re={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},Le="function"==typeof Float64Array,Se="function"==typeof Float64Array?Float64Array:null,Be="function"==typeof Float64Array?Float64Array:void 0,Ie=function(){var e,r,t;if("function"!=typeof Se)return!1;try{r=new Se([1,3.14,-3.14,NaN]),t=r,e=(Le&&t instanceof Float64Array||"[object Float64Array]"===D(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?Be:function(){throw new Error("not implemented")},Ce="function"==typeof Float32Array,Fe=Number.POSITIVE_INFINITY,Oe="function"==typeof Float32Array?Float32Array:null,Me="function"==typeof Float32Array?Float32Array:void 0,Ue=function(){var e,r,t;if("function"!=typeof Oe)return!1;try{r=new Oe([1,3.14,-3.14,5e40]),t=r,e=(Ce&&t instanceof Float32Array||"[object Float32Array]"===D(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Fe}catch(r){e=!1}return e}()?Me:function(){throw new Error("not implemented")},Ne="function"==typeof Uint32Array,Pe="function"==typeof Uint32Array?Uint32Array:null,Ye="function"==typeof Uint32Array?Uint32Array:void 0,We=function(){var e,r,t;if("function"!=typeof Pe)return!1;try{r=new Pe(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(Ne&&t instanceof Uint32Array||"[object Uint32Array]"===D(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ye:function(){throw new Error("not implemented")},$e="function"==typeof Int32Array,Ge="function"==typeof Int32Array?Int32Array:null,Xe="function"==typeof Int32Array?Int32Array:void 0,Ze=function(){var e,r,t;if("function"!=typeof Ge)return!1;try{r=new Ge([1,3.14,-3.14,2147483648]),t=r,e=($e&&t instanceof Int32Array||"[object Int32Array]"===D(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?Xe:function(){throw new Error("not implemented")},Je="function"==typeof Uint16Array,ze="function"==typeof Uint16Array?Uint16Array:null,He="function"==typeof Uint16Array?Uint16Array:void 0,qe=function(){var e,r,t;if("function"!=typeof ze)return!1;try{r=new ze(r=[1,3.14,-3.14,65536,65537]),t=r,e=(Je&&t instanceof Uint16Array||"[object Uint16Array]"===D(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?He:function(){throw new Error("not implemented")},De="function"==typeof Int16Array,Ke="function"==typeof Int16Array?Int16Array:null,Qe="function"==typeof Int16Array?Int16Array:void 0,er=function(){var e,r,t;if("function"!=typeof Ke)return!1;try{r=new Ke([1,3.14,-3.14,32768]),t=r,e=(De&&t instanceof Int16Array||"[object Int16Array]"===D(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?Qe:function(){throw new Error("not implemented")},rr="function"==typeof Uint8Array,tr="function"==typeof Uint8Array?Uint8Array:null,nr="function"==typeof Uint8Array?Uint8Array:void 0,ir=function(){var e,r,t;if("function"!=typeof tr)return!1;try{r=new tr(r=[1,3.14,-3.14,256,257]),t=r,e=(rr&&t instanceof Uint8Array||"[object Uint8Array]"===D(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?nr:function(){throw new Error("not implemented")},or="function"==typeof Uint8ClampedArray,ar="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,ur="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,fr=function(){var e,r,t;if("function"!=typeof ar)return!1;try{r=new ar([-1,0,1,3.14,4.99,255,256]),t=r,e=(or&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===D(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?ur:function(){throw new Error("not implemented")},lr="function"==typeof Int8Array,cr="function"==typeof Int8Array?Int8Array:null,sr="function"==typeof Int8Array?Int8Array:void 0,yr=function(){var e,r,t;if("function"!=typeof cr)return!1;try{r=new cr([1,3.14,-3.14,128]),t=r,e=(lr&&t instanceof Int8Array||"[object Int8Array]"===D(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?sr:function(){throw new Error("not implemented")};function hr(e){return"number"==typeof e}var pr=Number,gr=pr.prototype.toString,mr=X();function wr(e){return"object"==typeof e&&(e instanceof pr||(mr?function(e){try{return gr.call(e),!0}catch(e){return!1}}(e):"[object Number]"===D(e)))}function br(e){return hr(e)||wr(e)}Y(br,"isPrimitive",hr),Y(br,"isObject",wr);var dr=pr.NEGATIVE_INFINITY;function vr(e){return e<Fe&&e>dr&&de(e)}function Er(e){return hr(e)&&vr(e)}function Ar(e){return wr(e)&&vr(e.valueOf())}function Tr(e){return Er(e)||Ar(e)}function _r(e){return Er(e)&&e>=0}function xr(e){return Ar(e)&&e.valueOf()>=0}function jr(e){return _r(e)||xr(e)}function kr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&de(e.length)&&e.length>=0&&e.length<=4294967295}Y(Tr,"isPrimitive",Er),Y(Tr,"isObject",Ar),Y(jr,"isPrimitive",_r),Y(jr,"isObject",xr);var Vr="function"==typeof ArrayBuffer;function Rr(e){return Vr&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===D(e)}function Lr(e){return"object"==typeof e&&null!==e&&!ye(e)}function Sr(e,r){if(!(this instanceof Sr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!hr(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!hr(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}Y(Sr,"BYTES_PER_ELEMENT",8),Y(Sr.prototype,"BYTES_PER_ELEMENT",8),Y(Sr.prototype,"byteLength",16),Y(Sr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(Sr.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Br="function"==typeof Math.fround?Math.fround:null,Ir=new Ue(1),Cr="function"==typeof Br?Br:function(e){return Ir[0]=e,Ir[0]};function Fr(e,r){if(!(this instanceof Fr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!hr(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!hr(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Cr(e)}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Cr(r)}),this}function Or(e){return e instanceof Sr||e instanceof Fr||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function Mr(e){return de(e/2)}function Ur(e,r,t){P(e,r,{configurable:!1,enumerable:!1,get:t})}function Nr(e){return e.re}function Pr(e){return e.im}function Yr(e,r){return new Ue(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Wr(e,r){return new Ie(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function $r(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(kr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Or(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Nr(n),Pr(n))}return r}function Gr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,kr(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Or(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Nr(o),Pr(o))}return n}function Xr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Or(n=r[i]))return null;e[o]=Nr(n),e[o+1]=Pr(n),o+=2}return e}Y(Fr,"BYTES_PER_ELEMENT",4),Y(Fr.prototype,"BYTES_PER_ELEMENT",4),Y(Fr.prototype,"byteLength",8),Y(Fr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(Fr.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Zr=2*Ue.BYTES_PER_ELEMENT,Jr=Te();function zr(e){return e instanceof Kr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Hr(e){return e===Kr||"Complex128Array"===e.name}function qr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Zr}function Dr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*Zr}function Kr(){var e,r,t,n;if(r=arguments.length,!(this instanceof Kr))return 0===r?new Kr:1===r?new Kr(arguments[0]):2===r?new Kr(arguments[0],arguments[1]):new Kr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new Ue(0);else if(1===r)if(_r(arguments[0]))t=new Ue(2*arguments[0]);else if(ve(arguments[0]))if((n=(t=arguments[0]).length)&&ye(t)&&Or(t[0])){if(null===(t=Xr(new Ue(2*n),t))){if(!Mr(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Ue(arguments[0])}}else{if(qr(t))t=Yr(t,0);else if(Dr(t))t=Wr(t,0);else if(!Mr(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Ue(t)}else if(Rr(arguments[0])){if(!de((t=arguments[0]).byteLength/Zr))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Zr,t.byteLength));t=new Ue(t)}else{if(!Lr(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===Jr)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!we(t[_e]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!we((t=t[_e]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=$r(t))instanceof Error)throw t;t=new Ue(t)}else{if(!Rr(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!_r(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!de(e/Zr))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Zr,e));if(2===r){if(!de((n=t.byteLength-e)/Zr))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Zr,n));t=new Ue(t,e)}else{if(!_r(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Zr>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Zr));t=new Ue(t,e,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}function Qr(e){return e.re}function et(e){return e.im}function rt(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(kr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Or(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Qr(n),et(n))}return r}function tt(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,kr(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Or(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Qr(o),et(o))}return n}function nt(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Or(n=r[i]))return null;e[o]=Qr(n),e[o+1]=et(n),o+=2}return e}Y(Kr,"BYTES_PER_ELEMENT",Zr),Y(Kr,"name","Complex64Array"),Y(Kr,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!we(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Hr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!we(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(zr(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Or(c=n.call(r,e.get(s),s)))o[y]=Nr(c),o[y+1]=Pr(c);else{if(!(kr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(ve(e)){if(n){for(f=e.length,u=e.get&&e.set?je("default"):Ve("default"),s=0;s<f;s++)if(!Or(u(e,s))){l=!0;break}if(l){if(!Mr(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Or(c=n.call(r,u(e,s),s)))o[y]=Nr(c),o[y+1]=Pr(c);else{if(!(kr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(Lr(e)&&Jr&&we(e[_e])){if(!we((o=e[_e]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?Gr(o,n,r):$r(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Y(Kr,"of",(function(){var e,r;if(!we(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Hr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Ur(Kr.prototype,"buffer",(function(){return this._buffer.buffer})),Ur(Kr.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ur(Kr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(Kr.prototype,"BYTES_PER_ELEMENT",Kr.BYTES_PER_ELEMENT),Y(Kr.prototype,"copyWithin",(function(e,r){if(!zr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Y(Kr.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!zr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Fr(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),Y(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),_e&&Y(t,_e,(function(){return r.entries()})),t})),Y(Kr.prototype,"get",(function(e){var r;if(!zr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!_r(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Fr((r=this._buffer)[e*=2],r[e+1])})),Ur(Kr.prototype,"length",(function(){return this._length})),Y(Kr.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!zr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!_r(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Or(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Nr(e),void(n[t+1]=Pr(e))}if(zr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Zr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Ue(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!ve(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Or(e[f])){o=!0;break}if(o){if(!Mr(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Zr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Ue(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Nr(u),n[t+1]=Pr(u),t+=2}}));var it=2*Ie.BYTES_PER_ELEMENT,ot=Te();function at(e){return e instanceof ct||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function ut(e){return e===ct||"Complex64Array"===e.name}function ft(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===it/2}function lt(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===it}function ct(){var e,r,t,n;if(r=arguments.length,!(this instanceof ct))return 0===r?new ct:1===r?new ct(arguments[0]):2===r?new ct(arguments[0],arguments[1]):new ct(arguments[0],arguments[1],arguments[2]);if(0===r)t=new Ie(0);else if(1===r)if(_r(arguments[0]))t=new Ie(2*arguments[0]);else if(ve(arguments[0]))if((n=(t=arguments[0]).length)&&ye(t)&&Or(t[0])){if(null===(t=nt(new Ie(2*n),t))){if(!Mr(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Ie(arguments[0])}}else{if(ft(t))t=Yr(t,0);else if(lt(t))t=Wr(t,0);else if(!Mr(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Ie(t)}else if(Rr(arguments[0])){if(!de((t=arguments[0]).byteLength/it))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",it,t.byteLength));t=new Ie(t)}else{if(!Lr(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===ot)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!we(t[_e]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!we((t=t[_e]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=rt(t))instanceof Error)throw t;t=new Ie(t)}else{if(!Rr(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!_r(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!de(e/it))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",it,e));if(2===r){if(!de((n=t.byteLength-e)/it))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",it,n));t=new Ie(t,e)}else{if(!_r(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*it>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*it));t=new Ie(t,e,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}Y(ct,"BYTES_PER_ELEMENT",it),Y(ct,"name","Complex128Array"),Y(ct,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!we(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!we(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(at(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Or(c=n.call(r,e.get(s),s)))o[y]=Qr(c),o[y+1]=et(c);else{if(!(kr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(ve(e)){if(n){for(f=e.length,u=e.get&&e.set?je("default"):Ve("default"),s=0;s<f;s++)if(!Or(u(e,s))){l=!0;break}if(l){if(!Mr(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Or(c=n.call(r,u(e,s),s)))o[y]=Qr(c),o[y+1]=et(c);else{if(!(kr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(Lr(e)&&ot&&we(e[_e])){if(!we((o=e[_e]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?tt(o,n,r):rt(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Y(ct,"of",(function(){var e,r;if(!we(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Ur(ct.prototype,"buffer",(function(){return this._buffer.buffer})),Ur(ct.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ur(ct.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(ct.prototype,"BYTES_PER_ELEMENT",ct.BYTES_PER_ELEMENT),Y(ct.prototype,"copyWithin",(function(e,r){if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Y(ct.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Sr(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),Y(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),_e&&Y(t,_e,(function(){return r.entries()})),t})),Y(ct.prototype,"get",(function(e){var r;if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!_r(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Sr((r=this._buffer)[e*=2],r[e+1])})),Ur(ct.prototype,"length",(function(){return this._length})),Y(ct.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!_r(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Or(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Qr(e),void(n[t+1]=et(e))}if(at(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*it,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Ie(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!ve(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Or(e[f])){o=!0;break}if(o){if(!Mr(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*it,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Ie(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Qr(u),n[t+1]=et(u),t+=2}}));var st=[Ie,Ue,Ze,We,er,qe,yr,ir,fr,Kr,ct],yt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],ht=yt.length;function pt(e){var r;if(ye(e))return"generic";if(pe(e))return null;for(r=0;r<ht;r++)if(e instanceof st[r])return yt[r];return Re[ge(e)]||null}function gt(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}return function e(r){var t,n,i,o,a,u,f,l;if(!ve(r))throw new TypeError(gt("01X2O,GW",r));if(arguments.length>1){if(!we(o=arguments[1]))throw new TypeError(gt("01X2H,G6",o));t=arguments[2]}return a=r.length,l=a,Y(n={},"next",o?c:s),Y(n,"return",y),_e&&Y(n,_e,h),f=pt(r),u=Ae(r)?je(f):Ve(f),n;function c(){return l+=r.length-a-1,a=r.length,i||l<0?(i=!0,{done:!0}):{value:o.call(t,u(r,l),l,r),done:!1}}function s(){return l+=r.length-a-1,a=r.length,i||l<0?(i=!0,{done:!0}):{value:u(r,l),done:!1}}function y(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function h(){return o?e(r,o,t):e(r)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).array2iteratorRight=r();
//# sourceMappingURL=browser.js.map
