!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.linearGradientPicker=e(require("react")):t.linearGradientPicker=e(t.react)}(global,(function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=33)}([function(e,n){e.exports=t},function(t,e,n){t.exports=n(15)()},function(t,e,n){var r=n(12),o=n(13),i=n(10),a=n(14);t.exports=function(t,e){return r(t)||o(t,e)||i(t,e)||a()}},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){var r=n(19);t.exports=function(t,e){if(null==t)return{};var n,o,i=r(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}},function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function c(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function u(t,e){for(var n={},r=[],o=0;o<t.length;o++){var i=t[o],u=e.base?i[0]+e.base:i[0],s=n[u]||0,l="".concat(u," ").concat(s);n[u]=s+1;var f=c(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(p)):a.push({identifier:l,updater:b(p,e),references:1}),r.push(l)}return r}function s(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,f=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function p(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var g=null,v=0;function b(t,e){var n,r,o;if(e.singleton){var i=v++;n=g||(g=s(e)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=s(e),r=d.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=u(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=u(t,e),s=0;s<n.length;s++){var l=c(n[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,u;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),e.push(u))}},e}},function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n.apply(this,arguments)}t.exports=n},function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(){return n={},t.m=e=[function(t,e,n){"use strict";function r(t){return parseInt(t.repeat(3-t.length),16)}n.r(e);var o=new RegExp(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i),i=new RegExp(/^#?([a-f\d])([a-f\d])([a-f\d])$/i);function a(t){return Number(t)}var c=new RegExp(/\d+/g),u=[{regexps:[o,i],handler:function(t,e){var n=1<arguments.length&&void 0!==e?e:1,a=o.exec(t)||i.exec(t);return a?{r:r(a[1]),g:r(a[2]),b:r(a[3]),a:n}:void 0}},{regexps:[c],handler:function(t){var e=function(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(t.match(c)),n=e[0],r=e[1],o=e[2],i=e.slice(3).join(".")||1;return function(t,e,n,r){return[t,e,n].every((function(t){return 0<=t&&t<=255}))&&(!r||0<=r&&r<=1)}(n,r,o,i)?{r:a(n),g:a(r),b:a(o),a:a(i)}:void 0}}],s=function(t,e){var n=u.find((function(e){return e.regexps.some((function(e){return e.test(t)}))}));if(!n)throw new Error("Stop color - ".concat(t," does not follow one of the accepted formats Hex / Rgb / Rgba "));return function(t){var e=t.r,n=t.g,r=t.b,o=t.a,i=void 0===o?1:o;return 1!==i?"rgba(".concat(e,", ").concat(n,", ").concat(r,", ").concat(i,")"):"rgb(".concat(e,", ").concat(n,", ").concat(r,")")}(n.handler(t,e))},l=function(t){return null!=t};function f(t){return Number("".concat(t).trim().endsWith("%")?t.trim().replace("%",""):t)}function p(t){return t<=0||Math.abs(t)<=x?0:t}function d(t){return{x:p(Math.cos(t)),y:p(Math.sin(t))}}function g(t){return t*Math.PI/180}var v=function(t){var e=t.x1,n=t.x2,r=t.y1,o=t.y2,i=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}([e,n,r,o].map(f),4);e=i[0],n=i[1],r=i[2];var a=n-e,c=(o=i[3])-r;return 0==c?n<e?270:90:0==a?o<r?0:180:function(t,e,n){return t<(1<arguments.length&&void 0!==e?e:0)?360+t:(2<arguments.length&&void 0!==n?n:360)<t?t-360:t}(180*Math.atan2(c,a)/Math.PI+90)},b="style",m="stop-color",y="stop-opacity",h=["x1","x2","y1","y2"],O=function(t){return Array.from(t.querySelectorAll("stop")).map((function(t){var e=j(t.getAttribute("offset")),n=function(t){var e=t.getAttribute(m);if(e){var n=t.getAttribute(y);return s(e,n)}var r=function(t){var e=document.createElement("div");return e.setAttribute("style",t),e.style}(t.getAttribute(b)),o=r[m],i=r[y];return o?s(o,i):void 0}(t);return{offset:Number(e),color:n}}))},x=Math.pow(2,-52),j=function(t){return(t=t.toString().trim()).endsWith("%")?Number(t.replace("%","")):100*Number(t)};function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var E=new DOMParser;function M(t){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var T={string:function(t){var e=E.parseFromString(t,"image/svg+xml").querySelector("linearGradient");if(!e)throw new Error("Couldn't parse svg string into linearGradient SVGElement");return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(n,!0).forEach((function(e){w(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},function(t){return h.reduce((function(e,n){return Object.assign(e,w({},n,t.getAttribute(n)))}),{})}(e),{stops:O(e).filter((function(t){var e=t.offset,n=t.color;return l(e)&&l(n)}))})},object:function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(n,!0).forEach((function(e){S(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t,{stops:t.stops.map((function(t){var e=t.offset,n=t.color,r=t.opacity;return{offset:j(e),color:s(n,r)}}))})}},P={getBackground:function(t){var e=M(t),n=T[e];if(!n)throw new Error("Cannot parse non JSON / SVG String input");var r=(t=n(t)).stops||t.children,o=v(t);return{angle:o,background:function(t){var e=t.angle,n=t.stops;return 1===n.length?n[0].color:"linear-gradient(".concat(e,"deg, ").concat(n.map((function(t){return"".concat(t.color," ").concat(t.offset,"%")})).join(", "),")")}({angle:o,stops:r})}},getGradientCords:function(t){var e=function(t){var e=(360-(0<arguments.length&&void 0!==t?t:0))%360;return{startPoint:d(g(90-e)),endPoint:d(g(270-e))}}(t),n=e.startPoint,r=e.endPoint;return{x1:n.x,y1:n.y,x2:r.x,y2:r.y}}};e.default=P}],t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},t.p="",t(t.s=0);function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e,n}()},function(t,e,n){var r=n(20),o=n(21),i=n(10),a=n(22);t.exports=function(t){return r(t)||o(t)||i(t)||a()}},function(t,e,n){var r=n(11);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,n){"use strict";var r=n(16);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){var r=n(5),o=n(18);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},function(t,e,n){(e=n(6)(!1)).push([t.i,".ap {\n    flex: none;\n    box-sizing: border-box;\n    background-color: #fff;\n    border: 1px solid #d2d5dc;\n    border-radius: 50%;\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n}\n\n.ap .apc {\n    width: 6px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n}\n\n.ap .aph {\n    width: 6px;\n    height: 6px;\n    background-color: #4374AD;\n    display: inline-block;\n    border-radius: 50%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 4px;\n    margin: auto;\n    cursor: pointer;\n}",""]),t.exports=e},function(t,e){t.exports=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}},function(t,e,n){var r=n(11);t.exports=function(t){if(Array.isArray(t))return r(t)}},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,n){var r=n(5),o=n(24);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},function(t,e,n){var r=n(6),o=n(25),i=n(26);e=r(!1);var a=o(i);e.push([t.i,".cs {\n    height: 17px;\n    position: absolute;\n    width: 11px;\n    cursor: pointer;\n    background: url("+a+") right center;\n}\n\n.cs div {\n    height: 7px;\n    left: 2px;\n    width: 7px;\n    position: absolute;\n    top: 8px;\n}\n\n.active {\n    background-position: left center;\n}",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAARCAQAAABzuJQIAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAB7SURBVCjP3c7BDQMhDETRP4gyUlb6SEphe9w+JgdArIMPm2uGizV6MpbpERgBzGb0tuZcLvTbDSoHrMUMQmFrY/IaaOeKB7yE+1yTz43irZNXbXcCFosuXqFt9g0cyZICT7LkrU+b62vGeVv4IX+Phc+tfABZK3xj5cgHC29ECUeufxkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDUtMzFUMTg6NDE6MzIrMDI6MDD31tLGAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA1LTMxVDE4OjQxOjMyKzAyOjAwhotqegAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII="},function(t,e,n){var r=n(5),o=n(28);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},function(t,e,n){(e=n(6)(!1)).push([t.i,".cp div {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-block;\n  height: 16px;\n  width: 16px;\n}\n.cp div:hover {\n  border: 1px solid #fff;\n}\n",""]),t.exports=e},function(t,e,n){var r=n(5),o=n(30);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},function(t,e,n){(e=n(6)(!1)).push([t.i,".gp {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.gp .gp-flat {\n    margin: 0 auto;\n    padding: 10px 0 0!important;\n    box-shadow: none!important;\n    transform: none!important;\n}",""]),t.exports=e},function(t,e,n){var r=n(5),o=n(32);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},function(t,e,n){(e=n(6)(!1)).push([t.i,".gpw {\n    padding: 20px;\n}\n\n.gpw .trigger {\n    padding: 5px;\n    background: rgb(255, 255, 255);\n    border-radius: 1px;\n    box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 1px;\n    display: inline-block;\n    cursor: pointer;\n}\n\n.gpw .trigger .inner {\n    width: 36px;\n    height: 14px;\n    border-radius: 2px;\n}\n\n.gpw .popover {\n    z-index: 2;\n    margin-top: 6px;\n    box-shadow: rgba(0, 0, 0, 0.15) 0 0 0 1px,\n    rgba(0, 0, 0, 0.15) 0 8px 16px;\n    padding: 12px;\n    border-radius: 4px;\n    position: absolute;\n}\n\n.gpw .popover .angle-holder {\n    margin: 0 -10px;\n    padding: 10px 0 0 10px;\n    border-top: 1px solid rgb(238, 238, 238);\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap;\n    position: relative;\n}\n\n.gpw .popover .angle-inputs {\n    border-radius: 4px;\n    background: #f2f2f2;\n    display: flex;\n    flex: 1;\n    margin: 0 20px;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.gpw .popover .angle-inputs input {\n    border: none;\n    text-align: center;\n    width: 48px;\n    color: #0C0C09;\n    background: inherit;\n}\n\n.gpw .popover .angle-inputs span {\n    padding: 5px;\n    cursor: pointer;\n    user-select: none;\n}\n\n.gpw .overlay {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}",""]),t.exports=e},function(t,e,n){"use strict";n.r(e),n.d(e,"GradientPicker",(function(){return st})),n.d(e,"GradientPickerPopover",(function(){return pt})),n.d(e,"AnglePicker",(function(){return F})),n.d(e,"getGradientPreview",(function(){return b}));var r=function(t,e){return t.offset-e.offset},o=function(t){return t.sort(r)},i=function(){},a=function(t){return t<0?360+t:t>360?t-360:t},c=function(t){if(!t)return{y:0,x:0};var e=t.getBoundingClientRect(),n=e.top,r=e.left;return{y:n+e.height/2,x:r+e.width/2}},u=function(t,e,n){var r=e-n.y,o=t-n.x,i=Math.atan2(r,o);return Math.round(i*(180/Math.PI))+90},s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=t%e;if(0===n)return t;var r=n>e/2?e-n:-1*n;return t+r},l=n(3),f=n.n(l),p=n(8),d=n.n(p);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){f()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:90,n=d.a.getGradientCords(e),r=d.a.getBackground(v(v({},n),{},{stops:t})),o=r.background;return{gradient:n,background:o,angle:e}},m=n(2),y=n.n(m),h=n(0),O=n.n(h),x=n(1),j=n.n(x);function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){f()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var E=Object(x.shape)({id:x.number.isRequired,color:x.string.isRequired,offset:x.number.isRequired,isActive:x.bool.isRequired,pointX:x.number}),M=Object(x.shape)({min:x.number.isRequired,max:x.number.isRequired,drop:x.number}),D=Object(x.shape)({id:x.number,color:x.string.isRequired,offset:x.string.isRequired,opacity:x.number}),S={stop:E.isRequired,limits:M.isRequired,onPosChange:x.func.isRequired,onDeleteColor:x.func.isRequired,onDragStart:x.func,onDragEnd:x.func},T={width:x.number.isRequired,stops:Object(x.arrayOf)(E),limits:M,disabled:x.bool,onPosChange:x.func.isRequired,onAddColor:x.func.isRequired,onDeleteColor:x.func.isRequired,onDragStart:x.func,onDragEnd:x.func},P={width:x.number.isRequired,height:x.number.isRequired,palette:Object(x.arrayOf)(D).isRequired},C={onPaletteChange:x.func.isRequired,paletteHeight:x.number,width:x.number,stopRemovalDrop:x.number,maxStops:x.number,minStops:x.number,flatStyle:x.bool,palette:Object(x.arrayOf)(D)},I={angle:x.number.isRequired,setAngle:x.func.isRequired,size:x.number,snap:x.number},N=w(w(w({},C),I),{},{showAnglePicker:x.bool,open:x.bool.isRequired,setOpen:x.func.isRequired,trigger:x.func}),k="touchstart",R={MOUSE:{stop:function(t){t.preventDefault(),t.stopPropagation()},coordinates:function(t){return{clientX:t.clientX,clientY:t.clientY}},dragEvent:{name:"mousemove"},dragEndEvent:{name:"mouseup"}},TOUCH:{stop:i,coordinates:function(t){var e=y()(t.touches,1)[0];return{clientX:e.clientX,clientY:e.clientY}},dragEvent:{name:"touchmove",options:{cancelable:!0,passive:!0}},dragEndEvent:{name:"touchend"}}},L=function(t){var e=t.onDragStart,n=void 0===e?i:e,r=t.onDrag,o=t.onDragEnd,a=void 0===o?i:o,c=Object(h.useState)({}),u=y()(c,2),s=u[0],l=u[1],f=Object(h.useState)(!1),p=y()(f,2),d=p[0],g=p[1],v=function(t,e){g(!0),s.handler=e,n(e.coordinates(t))},b=function(){g(!1),a(s.change),l({})},m=function(t){var e=s.handler;d&&(s.change=r(e.coordinates(t)))};return Object(h.useEffect)((function(){var t=s.handler;if(t){var e=t.dragEvent,n=t.dragEndEvent;return d&&(document.addEventListener(e.name,m,n.options),document.addEventListener(n.name,b)),function(){document.removeEventListener(e.name,m,n.options),document.removeEventListener(n.name,b)}}}),[d]),[function(t){var e=function(t){return t.type===k}(t)?R.TOUCH:R.MOUSE;e.stop(t),t.button||v(t,e)},v,b]},z=(n(17),function(t){var e=t.angle,n=t.setAngle,r=t.size,o=void 0===r?48:r,i=t.snap,l=void 0===i?5:i,f=t.setDragOverPopover,p=Object(h.useRef)(),d={height:o,width:o},g=function(t){var e=t.clientX,r=t.clientY,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=c(p.current),f=u(e,r,i),d=a(f),g=o?s(d,l):d;return n(g),g},v=L({onDragStart:function(t){f(!0),g(t,!0)},onDrag:g,onDragEnd:function(t){if(t){var e=s(t,l);f(!1),n(e)}}}),b=y()(v,1)[0];return O.a.createElement("div",{className:"ap",ref:p,onMouseDown:b,onTouchStart:b,style:d},O.a.createElement("span",{className:"apc",style:{transform:"rotate(".concat(e,"deg)"),height:o}},O.a.createElement("i",{className:"aph"})))});z.propTypes=I;var F=z,q=n(4),U=n.n(q),_=n(9),Q=n.n(_),B=n(7),Y=n.n(B),G=function(t){var e=t.limits,n=t.stop,r=t.initialPos,o=t.colorStopRef,i=t.onPosChange,a=t.onDragStart,c=t.onDragEnd,u=t.onDeleteColor,s=Object(h.useState)(r),l=y()(s,2),f=l[0],p=l[1],d=L({onDragStart:function(t){var e=t.clientX;p(e),a(n.id)},onDrag:function(t){var r,a=t.clientX,c=t.clientY,s=n.id,l=n.offset,p=e.min,d=e.max,g=(r=o).current?r.current.getBoundingClientRect().top:0;if(Math.abs(c-g)>e.drop)return u(s);var v=function(t,e,n){return Math.max(Math.min(t,n),e)}(l-f+a,p,d);i({id:s,offset:v})},onDragEnd:function(){return c(n.id)}});return[y()(d,1)[0]]},H=(n(23),function(t){var e=t.stop,n=t.limits,r=t.onPosChange,o=t.onDeleteColor,a=t.onDragStart,c=void 0===a?i:a,u=t.onDragEnd,s=void 0===u?i:u,l=Object(h.useRef)(),f=G({stop:e,limits:n,onPosChange:r,onDragStart:c,onDragEnd:s,onDeleteColor:o,colorStopRef:l}),p=y()(f,1)[0],d=e.offset,g=e.color,v=e.isActive;return O.a.createElement("div",{className:v?"cs active":"cs",ref:l,style:{left:d},onMouseDown:p,onTouchStart:p},O.a.createElement("div",{style:{backgroundColor:g}}))});H.propTypes=S;var X=H,W=function(t,e){return{width:t,height:17,position:"relative",cursor:e?"default":"crosshair"}},V=function(t){var e=t.width,n=t.stops,r=t.disabled,o=void 0!==r&&r,i=t.onAddColor,a=U()(t,["width","stops","disabled","onAddColor"]);return O.a.createElement("div",{className:"csh",style:W(e,o),onMouseDown:function(t){if(t.preventDefault(),!t.button){var e=t.clientX-t.target.getBoundingClientRect().left;i({offset:e})}}},n.map((function(t){return O.a.createElement(X,Y()({key:t.id,stop:t},a))})))};V.propTypes=T;var Z=V,J=function(){return""+Math.random().toString(36).substr(2,9)},K=function(t){var e=t.palette,n=t.width,r=t.height,i=o(e),a=Object(h.useMemo)(J,[e.length]);return O.a.createElement("div",{className:"palette",style:{width:n,height:r,float:"left"}},O.a.createElement("svg",{width:"100%",height:"100%"},O.a.createElement("defs",null,O.a.createElement("linearGradient",{id:a,x1:"0",y1:"0.5",x2:"1",y2:"0.5"}," ",i.map((function(t){var e=t.id,n=t.offset,r=t.color,o=t.opacity,i=void 0===o?1:o;return O.a.createElement("stop",{key:e,offset:n,style:{stopColor:r,stopOpacity:i}})})))),O.a.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url(#".concat(a,")")})))};K.propTypes=P;var $=K,tt=[{value:"#000000",name:"black"},{value:"#808080",name:"gray"},{value:"#C0C0C0",name:"silver"},{value:"#FFFFFF",name:"white"},{value:"#FF0000",name:"red"},{value:"#800000",name:"maroon"},{value:"#FFFF00",name:"yellow"},{value:"#808000",name:"olive"},{value:"#00FF00",name:"lime"},{value:"#008000",name:"green"},{value:"#00FFFF",name:"aqua"},{value:"#008080",name:"teal"},{value:"#0000FF",name:"blue"},{value:"#000080",name:"navy"},{value:"#FF00FF",name:"fuchsia"},{value:"#800080",name:"purple"}],et=(n(27),function(t){var e=t.onSelect;return O.a.createElement("div",{className:"cp"},tt.map((function(t){var n=t.value,r=t.name;return O.a.createElement("div",{onClick:function(){return e(n)},key:r,title:r,style:{backgroundColor:n}})})))});et.propTypes={color:j.a.string.isRequired,onSelect:j.a.func.isRequired};var nt=et;n(29);function rt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ot(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?rt(Object(n),!0).forEach((function(e){f()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var it=function(t){return Math.max.apply(Math,Q()(t.map((function(t){return t.id}))))+1},at=function(t){var e=t.palette,n=t.activeId,r=t.width;return e.map((function(t){return ot(ot({},t),{},{id:t.id,offset:r*t.offset-5,isActive:t.id===n})}))},ct=function(t,e){var n=t.find((function(t){return t.id===e}));return ot(ot({},n),{},{offset:Number(n.offset)})},ut=function(t){var e=t.palette,n=t.paletteHeight,r=void 0===n?32:n,i=t.width,a=void 0===i?220:i,c=t.stopRemovalDrop,u=void 0===c?50:c,s=t.minStops,l=void 0===s?2:s,f=t.maxStops,p=void 0===f?5:f,d=t.children,g=t.flatStyle,v=void 0!==g&&g,b=t.onPaletteChange,m=t.setDragOverPopover,x=e=function(t){return t.map((function(t,e){return ot(ot({},t),{},{id:t.id||e+1})}))}(e),j=y()(x,1)[0],A=Object(h.useState)(j.id),w=y()(A,2),E=w[0],M=w[1],D=Object(h.useMemo)((function(){return{min:-5,max:a-5,drop:u}}),[a]),S=function(t){if(!(e.length<=l)){var n=e.filter((function(e){return e.id!==t})),r=n.reduce((function(t,e){return e.offset<t.offset?e:t}),n[0]).id;M(r),P(n)}},T=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e=e.map((function(e){return E===e.id?ot(ot({},e),{},{color:t,opacity:n}):e})),P(e)},P=function(t){var e=o(t).map((function(t){var e=t.offset,n=U()(t,["offset"]);return ot({offset:Number(e).toFixed(3)},n)}));b(e)},C=a-5,I=e.length>=p;return O.a.createElement("div",{className:"gp"},O.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"left",width:C}},O.a.createElement($,{width:C-40,height:r,palette:e}),O.a.createElement("div",{style:{position:"fixed",height:r,marginTop:1,width:C}},O.a.createElement("button",{className:"icon-trash",onClick:function(){S(E)}},O.a.createElement("div",{className:"icon-trash-background"}))),O.a.createElement(Z,{width:C-40,disabled:I,stops:at({palette:e,width:C-40,activeId:E}),limits:D,onPosChange:function(t){var n=t.id,r=t.offset,o=e.map((function(t){return n===t.id?ot(ot({},t),{},{offset:(r+5)/a}):t}));P(o)},onAddColor:function(t){var n=t.offset;if(!(e.length>=p)){var r=ct(e,E).color,o={id:it(e),offset:n/a,color:r},i=[].concat(Q()(e),[o]);M(o.id),P(i)}},onDeleteColor:S,onDragStart:function(t){M(t),m(!0)},onDragEnd:function(t){m(!1)}})),function(){var t=ct(e,E),n=ot(ot({color:t.color,opacity:t.opacity},v&&{width:a,className:"gp-flat"}),{},{onSelect:T});if(!d)return O.a.createElement(nt,n);var r=O.a.Children.only(d);return O.a.cloneElement(r,n)}(),O.a.createElement("style",{jsx:!0,global:!0},"\n\t\t\t\t\t.icon-trash {\n\t\t\t\t\t\twidth: 20px;\n\t\t\t\t\t\theight: 20px;\n\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\toverflow: hidden;\n\t\t\t\t\t\tpadding: 15px;\n\t\t\t\t\t\tborder: 1px solid #a7a2a2;\n\t\t\t\t\t\tbackground: transparent;\n\t\t\t\t\t\tfloat: right;\n\t\t\t\t\t\tborder-radius: 3px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.icon-trash-background {\n\t\t\t\t\t\tmargin-top: -10px;\n    \t\t\t\t\tmargin-left: -10px;\n\t\t\t\t\t\twidth: 20px;\n\t\t\t\t\t\theight: 20px;\n\t\t\t\t\t\tbackground-size: contain;\n\t\t\t\t\t\tbackground-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTc5MiIgdmlld0JveD0iMCAwIDE3OTIgMTc5MiIgd2lkdGg9IjE3OTIiPjxwYXRoIGQ9Ik03MDQgNzM2djU3NnEwIDE0LTkgMjN0LTIzIDloLTY0cS0xNCAwLTIzLTl0LTktMjN2LTU3NnEwLTE0IDktMjN0MjMtOWg2NHExNCAwIDIzIDl0OSAyM3ptMjU2IDB2NTc2cTAgMTQtOSAyM3QtMjMgOWgtNjRxLTE0IDAtMjMtOXQtOS0yM3YtNTc2cTAtMTQgOS0yM3QyMy05aDY0cTE0IDAgMjMgOXQ5IDIzem0yNTYgMHY1NzZxMCAxNC05IDIzdC0yMyA5aC02NHEtMTQgMC0yMy05dC05LTIzdi01NzZxMC0xNCA5LTIzdDIzLTloNjRxMTQgMCAyMyA5dDkgMjN6bTEyOCA3MjR2LTk0OGgtODk2djk0OHEwIDIyIDcgNDAuNXQxNC41IDI3IDEwLjUgOC41aDgzMnEzIDAgMTAuNS04LjV0MTQuNS0yNyA3LTQwLjV6bS02NzItMTA3Nmg0NDhsLTQ4LTExN3EtNy05LTE3LTExaC0zMTdxLTEwIDItMTcgMTF6bTkyOCAzMnY2NHEwIDE0LTkgMjN0LTIzIDloLTk2djk0OHEwIDgzLTQ3IDE0My41dC0xMTMgNjAuNWgtODMycS02NiAwLTExMy01OC41dC00Ny0xNDEuNXYtOTUyaC05NnEtMTQgMC0yMy05dC05LTIzdi02NHEwLTE0IDktMjN0MjMtOWgzMDlsNzAtMTY3cTE1LTM3IDU0LTYzdDc5LTI2aDMyMHE0MCAwIDc5IDI2dDU0IDYzbDcwIDE2N2gzMDlxMTQgMCAyMyA5dDkgMjN6IiBzdHlsZT0iJiMxMDsgICAgZmlsbDogIzQwM2MzYzsmIzEwOyIvPjwvc3ZnPg==')\n\t\t\t\t\t}\n\n\t\t\t\t\t.icon-trash:hover, .icon-trash:focus, .icon-trash:active {\n\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t\tbackground: transparent;\n\t\t\t\t\t\toutline: 0;\n\t\t\t\t\t}\n\n\t\t\t\t"))};ut.propTypes=C;var st=ut,lt=(n(31),function(t,e){return O.a.createElement("div",{className:"trigger",onClick:e},O.a.createElement("div",{className:"inner",style:{background:t}}))}),ft=function(t){var e=t.palette,n=t.open,r=void 0!==n&&n,o=t.setOpen,i=t.trigger,a=void 0===i?lt:i,c=t.showAnglePicker,u=void 0!==c&&c,s=t.angle,l=t.setAngle,f=U()(t,["palette","open","setOpen","trigger","showAnglePicker","angle","setAngle"]),p=b(e,s).background,d=function(t){l(t=(t=t>360?t-360:t)<0?t+360:t)};return O.a.createElement("div",{className:"gpw"},a(p,(function(){return o(!r)})),r&&O.a.createElement(O.a.Fragment,null,O.a.createElement("div",{className:"overlay",onClick:function(){return o(!1)}}),O.a.createElement("div",{className:"popover"},O.a.createElement(st,Y()({},f,{palette:e,flatStyle:!0})),u&&O.a.createElement("div",{className:"angle-holder"},O.a.createElement(F,{angle:s,setAngle:l,size:32}),O.a.createElement("div",{className:"angle-inputs"},O.a.createElement("span",{onClick:function(){return d(s-1)}},"−"),O.a.createElement("input",{value:"".concat(s,"°"),disabled:!0}),O.a.createElement("span",{onClick:function(){return d(s+1)}},"+"))))))};ft.propTypes=N;var pt=ft}])}));
//# sourceMappingURL=index.js.map