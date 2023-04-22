/*! For license information please see 125.5ea1aefc.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkomkars_portfolio=self.webpackChunkomkars_portfolio||[]).push([[125,582],{125:function(t,r,e){e.r(r),e.d(r,{LogInUtility:function(){return d},default:function(){return v}});var n,o=e(152),i=e(214),a=e(861),u=e(791),c=e(327),s=e(683),f=e(184),l=(0,u.lazy)((function(){return e.e(422).then(e.bind(e,422))})),h=function(t,r){return(0,f.jsx)(u.Suspense,{fallback:null,children:(0,f.jsx)(l,(0,s.Z)({focused:t.focused,value:t.value},r))})},p=e(582);!function(t){t.PIN="1234"}(n||(n={}));var d={verify:function(){var t=(0,a.Z)((0,i.Z)().mark((function t(r){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){setTimeout((function(){r===n.PIN?t(!0):e("Invalid pin: ".concat(r))}),p.N.rand(300,700))})));case 1:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},v=function(){var t=u.useContext(c.Il),r=t.userStatus,e=t.setUserStatusTo,n=u.useState(""),s=(0,o.Z)(n,2),l=s[0],p=s[1],v=u.useRef({});u.useEffect((function(){r===c.J0.LoggingIn||r===c.J0.LogInError?v.current.focus():p("")}),[r]),u.useEffect((function(){if(4===l.length){var t=function(){var t=(0,a.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e(c.J0.VerifyingLogIn),t.next=4,d.verify(l);case 4:if(!t.sent){t.next=6;break}e(c.J0.LoggedIn);case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0),e(c.J0.LogInError);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}r===c.J0.LogInError&&e(c.J0.LoggingIn)}),[l]);var y=function(){e(c.J0.LoggedOut)};return(0,f.jsxs)("div",{id:"app-pin-wrapper",children:[(0,f.jsx)("input",{disabled:r!==c.J0.LoggingIn&&r!==c.J0.LogInError,id:"app-pin-hidden-input",maxLength:4,ref:v,type:"number",value:l,onChange:function(t){t.target.value.length<=4&&p(t.target.value.toString())}}),(0,f.jsxs)("div",{id:"app-pin",onClick:function(){v.current.focus()},children:[(0,f.jsx)(h,{focused:0===l.length,value:l[0]}),(0,f.jsx)(h,{focused:1===l.length,value:l[1]}),(0,f.jsx)(h,{focused:2===l.length,value:l[2]}),(0,f.jsx)(h,{focused:3===l.length,value:l[3]})]}),(0,f.jsxs)("h3",{id:"app-pin-label",children:["Enter PIN (1234) ",r===c.J0.LogInError?(0,f.jsx)("span",{id:"app-pin-error-text",children:"Invalid"}):(0,f.jsx)("span",{})," ",(0,f.jsx)("span",{id:"app-pin-cancel-text",onClick:y,children:"Cancel"})]})]})}},582:function(t,r,e){e.r(r),e.d(r,{N:function(){return a},default:function(){return u}});var n=e(152),o=e(791),i=e(184),a={clamp:function(t,r,e){return Math.min(Math.max(t,r),e)},rand:function(t,r){return Math.floor(Math.random()*(r-t+1)+t)}},u=function(){var t=o.useState(a.rand(65,85));(0,n.Z)(t,1)[0];return(0,i.jsxs)("span",{className:"weather",children:[(0,i.jsx)("span",{className:"weather-temperature-value",children:"Portfolio"}),(0,i.jsx)("span",{className:"weather-temperature-unit",children:"\u23ec"})]})}},861:function(t,r,e){function n(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void e(s)}u.done?r(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}e.d(r,{Z:function(){return o}})},214:function(t,r,e){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(_){s=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof p?r:p,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=b(a,e);if(u){if(u===h)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=l(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}(t,e,a),i}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(_){return{type:"throw",arg:_}}}t.wrap=f;var h={};function p(){}function d(){}function v(){}var y={};s(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(I([])));m&&m!==r&&e.call(m,a)&&(y=m);var w=v.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function L(t,r){function o(i,a,u,c){var s=l(t[i],t,a);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==n(h)&&e.call(h,"__await")?r.resolve(h.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):r.resolve(h).then((function(t){f.value=t,u(f)}),(function(t){return o("throw",t,u,c)}))}c(s.arg)}var i;this._invoke=function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}}function b(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,b(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=l(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function I(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=v,s(w,"constructor",v),s(v,"constructor",d),d.displayName=s(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(L.prototype),s(L.prototype,u,(function(){return this})),t.AsyncIterator=L,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new L(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),s(w,c,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=I,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:I(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}e.d(r,{Z:function(){return o}})}}]);
//# sourceMappingURL=125.5ea1aefc.chunk.js.map