(self.webpackChunkomkars_portfolio=self.webpackChunkomkars_portfolio||[]).push([[961],{961:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(363),o=(r(791),r(773)),a=r(187),i=r(184),s=function(){return(0,i.jsx)(o.Z,{icon:"toolbox",id:"tools-section",title:"Find me on",children:[{icon:a.zhw,id:1,image:"/assets/brand-logo/GitHub-Logo.svg",label:"Repo",link:"https://github.com/omkarpattanaik",name:"Github"},{icon:a.xDz,id:2,image:"/assets/brand-logo/Npm-logo.svg",label:"Registry",link:"https://www.npmjs.com/~omkarpattanaik",name:"NPM"},{icon:a.mGT,id:3,image:"/assets/brand-logo/StackOverflow-Logo.svg",label:"Q&A",link:"https://stackoverflow.com/users/13779639/omkar-pattanaik?tab=profile",name:"StackOverflow"},{icon:a.D9H,id:4,image:"/assets/brand-logo/LinkedIn-Logo.svg",label:"Social media",link:"https://www.linkedin.com/in/omkar-pattanaik-3b9b2512a/",name:"LinkedIn"}].map((function(e){var t={backgroundImage:"url(".concat(e.image,")"),backgroundColor:"white"};return(0,i.jsxs)("div",{className:"tool-card",onClick:function(t){!function(e){var t=window.open(e,"_blank");null!=t&&t.focus()}(e.link)},children:[(0,i.jsx)("div",{className:"tool-card-background background-image",style:t}),(0,i.jsxs)("div",{className:"tool-card-content",children:[(0,i.jsxs)("div",{className:"tool-card-content-header",children:[(0,i.jsx)("span",{className:"tool-card-label",children:e.label}),(0,i.jsx)("span",{className:"tool-card-name",children:e.name})]}),(0,i.jsx)(n.G,{size:"2x",icon:e.icon,color:"white"})]})]},e.id)}))})}},363:function(e,t,r){"use strict";r.d(t,{G:function(){return O}});var n=r(942),o=r(7),a=r.n(o),i=r(791);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var m=["style"];function y(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=d(t.slice(0,n)),a=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=a:e[o]=a,e}),{})}var h=!1;try{h=!0}catch(w){}function g(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function v(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?f({},e,t):{}}var O=i.forwardRef((function(e,t){var r=e.icon,o=e.mask,a=e.symbol,i=e.className,s=e.title,c=e.titleId,u=e.maskId,b=g(r),d=v("classes",[].concat(p(function(e){var t,r=e.beat,n=e.fade,o=e.beatFade,a=e.bounce,i=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,u=e.spinReverse,p=e.pulse,b=e.fixedWidth,d=e.inverse,m=e.border,y=e.listItem,h=e.flip,g=e.size,v=e.rotation,O=e.pull,k=(f(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":o,"fa-bounce":a,"fa-shake":i,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":b,"fa-inverse":d,"fa-border":m,"fa-li":y,"fa-flip":!0===h,"fa-flip-horizontal":"horizontal"===h||"both"===h,"fa-flip-vertical":"vertical"===h||"both"===h},"fa-".concat(g),"undefined"!==typeof g&&null!==g),f(t,"fa-rotate-".concat(v),"undefined"!==typeof v&&null!==v&&0!==v),f(t,"fa-pull-".concat(O),"undefined"!==typeof O&&null!==O),f(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(k).map((function(e){return k[e]?e:null})).filter((function(e){return e}))}(e)),p(i.split(" ")))),m=v("transform","string"===typeof e.transform?n.Qc.transform(e.transform):e.transform),y=v("mask",g(o)),w=(0,n.qv)(b,l(l(l(l({},d),m),y),{},{symbol:a,title:s,titleId:c,maskId:u}));if(!w)return function(){var e;!h&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",b),null;var x=w.abstract,j={ref:t};return Object.keys(e).forEach((function(t){O.defaultProps.hasOwnProperty(t)||(j[t]=e[t])})),k(x[0],j)}));O.displayName="FontAwesomeIcon",O.propTypes={beat:a().bool,border:a().bool,beatFade:a().bool,bounce:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),maskId:a().string,fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf([!0,!1,"horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),shake:a().bool,size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,titleId:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},O.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var k=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),a=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=y(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[d(t)]=n}return e}),{attrs:{}}),i=n.style,s=void 0===i?{}:i,c=u(n,m);return a.attrs.style=l(l({},a.attrs.style),s),t.apply(void 0,[r.tag,l(l({},a.attrs),c)].concat(p(o)))}.bind(null,i.createElement)},888:function(e,t,r){"use strict";var n=r(47);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},7:function(e,t,r){e.exports=r(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=961.27f4c3d9.chunk.js.map