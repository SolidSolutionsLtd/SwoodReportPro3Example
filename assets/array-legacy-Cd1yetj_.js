System.register([],(function(r,t){"use strict";return{execute:function(){r("applyPolyfill",(function(r,t){var e,n,o;
/*!
			Array.prototype.find
			*/
Array.prototype.find||Object.defineProperty(Array.prototype,"find",{writable:!0,configurable:!0,value:function(r,t){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),n=e.length>>>0;if("function"!=typeof r)throw new TypeError("predicate must be a function");for(var o=0;o<n;){var i=e[o];if(r.call(t,i,o,e))return i;o++}}}),
/*!
			Array.from
			*/
Array.from||(Array.from=(e=Object.prototype.toString,n=function(r){return"function"==typeof r||"[object Function]"===e.call(r)},o=Math.pow(2,53)-1,function(r){var t=Object(r);if(null==r)throw new TypeError("Array.from requires an array-like object - not null or undefined");var e,i=1<arguments.length?arguments[1]:void 0;if(void 0!==i){if(!n(i))throw new TypeError("Array.from: when provided, the second argument must be a function");2<arguments.length&&(e=arguments[2])}var a=Number(t.length);a=isNaN(a)?0:0!==a&&isFinite(a)?(0<a?1:-1)*Math.floor(Math.abs(a)):a,a=Math.min(Math.max(a,0),o);for(var f,u=n(this)?Object(new this(a)):Array(a),l=0;l<a;)f=t[l],u[l]=i?void 0===e?i(f,l):i.call(e,f,l):f,l+=1;return u.length=a,u})),
/*!
			Array.prototype.includes
			*/
Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{writable:!0,configurable:!0,value:function(r,t){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),n=e.length>>>0;if(0===n)return!1;for(var o,i,a=0|t,f=Math.max(0<=a?a:n-Math.abs(a),0);f<n;){if((o=e[f])===(i=r)||"number"==typeof o&&"number"==typeof i&&isNaN(o)&&isNaN(i))return!0;f++}return!1}})}))}}}));
