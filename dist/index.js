!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.linearGradientPicker=t(require("react")):e.linearGradientPicker=t(e.react)}(global,(function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=33)}([function(t,n){t.exports=e},function(e,t,n){e.exports=n(15)()},function(e,t,n){var r=n(12),o=n(13),i=n(10),a=n(14);e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||a()}},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){var r=n(19);e.exports=function(e,t){if(null==e)return{};var n,o,i=r(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],u=t.base?i[0]+t.base:i[0],s=n[u]||0,l="".concat(u," ").concat(s);n[u]=s+1;var f=c(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(p)):a.push({identifier:l,updater:v(p,t),references:1}),r.push(l)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var g=null,b=0;function v(e,t){var n,r,o;if(t.singleton){var i=b++;n=g||(g=s(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=s(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=u(e,t),s=0;s<n.length;s++){var l=c(n[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(){return n={},e.m=t=[function(e,t,n){"use strict";function r(e){return parseInt(e.repeat(3-e.length),16)}n.r(t);var o=new RegExp(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i),i=new RegExp(/^#?([a-f\d])([a-f\d])([a-f\d])$/i);function a(e){return Number(e)}var c=new RegExp(/\d+/g),u=[{regexps:[o,i],handler:function(e,t){var n=1<arguments.length&&void 0!==t?t:1,a=o.exec(e)||i.exec(e);return a?{r:r(a[1]),g:r(a[2]),b:r(a[3]),a:n}:void 0}},{regexps:[c],handler:function(e){var t=function(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(e.match(c)),n=t[0],r=t[1],o=t[2],i=t.slice(3).join(".")||1;return function(e,t,n,r){return[e,t,n].every((function(e){return 0<=e&&e<=255}))&&(!r||0<=r&&r<=1)}(n,r,o,i)?{r:a(n),g:a(r),b:a(o),a:a(i)}:void 0}}],s=function(e,t){var n=u.find((function(t){return t.regexps.some((function(t){return t.test(e)}))}));if(!n)throw new Error("Stop color - ".concat(e," does not follow one of the accepted formats Hex / Rgb / Rgba "));return function(e){var t=e.r,n=e.g,r=e.b,o=e.a,i=void 0===o?1:o;return 1!==i?"rgba(".concat(t,", ").concat(n,", ").concat(r,", ").concat(i,")"):"rgb(".concat(t,", ").concat(n,", ").concat(r,")")}(n.handler(e,t))},l=function(e){return null!=e};function f(e){return Number("".concat(e).trim().endsWith("%")?e.trim().replace("%",""):e)}function p(e){return e<=0||Math.abs(e)<=x?0:e}function d(e){return{x:p(Math.cos(e)),y:p(Math.sin(e))}}function g(e){return e*Math.PI/180}var b=function(e){var t=e.x1,n=e.x2,r=e.y1,o=e.y2,i=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}([t,n,r,o].map(f),4);t=i[0],n=i[1],r=i[2];var a=n-t,c=(o=i[3])-r;return 0==c?n<t?270:90:0==a?o<r?0:180:function(e,t,n){return e<(1<arguments.length&&void 0!==t?t:0)?360+e:(2<arguments.length&&void 0!==n?n:360)<e?e-360:e}(180*Math.atan2(c,a)/Math.PI+90)},v="style",m="stop-color",y="stop-opacity",h=["x1","x2","y1","y2"],O=function(e){return Array.from(e.querySelectorAll("stop")).map((function(e){var t=j(e.getAttribute("offset")),n=function(e){var t=e.getAttribute(m);if(t){var n=e.getAttribute(y);return s(t,n)}var r=function(e){var t=document.createElement("div");return t.setAttribute("style",e),t.style}(e.getAttribute(v)),o=r[m],i=r[y];return o?s(o,i):void 0}(e);return{offset:Number(t),color:n}}))},x=Math.pow(2,-52),j=function(e){return(e=e.toString().trim()).endsWith("%")?Number(e.replace("%","")):100*Number(e)};function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=new DOMParser;function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C={string:function(e){var t=P.parseFromString(e,"image/svg+xml").querySelector("linearGradient");if(!t)throw new Error("Couldn't parse svg string into linearGradient SVGElement");return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},function(e){return h.reduce((function(t,n){return Object.assign(t,A({},n,e.getAttribute(n)))}),{})}(t),{stops:O(t).filter((function(e){var t=e.offset,n=e.color;return l(t)&&l(n)}))})},object:function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{stops:e.stops.map((function(e){var t=e.offset,n=e.color,r=e.opacity;return{offset:j(t),color:s(n,r)}}))})}},R={getBackground:function(e){var t=S(e),n=C[t];if(!n)throw new Error("Cannot parse non JSON / SVG String input");var r=(e=n(e)).stops||e.children,o=b(e);return{angle:o,background:function(e){var t=e.angle,n=e.stops;return 1===n.length?n[0].color:"linear-gradient(".concat(t,"deg, ").concat(n.map((function(e){return"".concat(e.color," ").concat(e.offset,"%")})).join(", "),")")}({angle:o,stops:r})}},getGradientCords:function(e){var t=function(e){var t=(360-(0<arguments.length&&void 0!==e?e:0))%360;return{startPoint:d(g(90-t)),endPoint:d(g(270-t))}}(e),n=t.startPoint,r=t.endPoint;return{x1:n.x,y1:n.y,x2:r.x,y2:r.y}}};t.default=R}],e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(e){return t[e]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e.p="",e(e.s=0);function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t,n}()},function(e,t,n){var r=n(20),o=n(21),i=n(10),a=n(22);e.exports=function(e){return r(e)||o(e)||i(e)||a()}},function(e,t,n){var r=n(11);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){"use strict";var r=n(16);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){var r=n(5),o=n(18);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){(t=n(6)(!1)).push([e.i,".ap {\n    flex: none;\n    box-sizing: border-box;\n    background-color: #fff;\n    border: 1px solid #d2d5dc;\n    border-radius: 50%;\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n}\n\n.ap .apc {\n    width: 6px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n}\n\n.ap .aph {\n    width: 6px;\n    height: 6px;\n    background-color: #4374AD;\n    display: inline-block;\n    border-radius: 50%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 4px;\n    margin: auto;\n    cursor: pointer;\n}",""]),e.exports=t},function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},function(e,t,n){var r=n(11);e.exports=function(e){if(Array.isArray(e))return r(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){var r=n(5),o=n(24);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){var r=n(6),o=n(25),i=n(26);t=r(!1);var a=o(i);t.push([e.i,".cs {\n    height: 17px;\n    position: absolute;\n    width: 11px;\n    cursor: pointer;\n    background: url("+a+") right center;\n}\n\n.cs div {\n    height: 7px;\n    left: 2px;\n    width: 7px;\n    position: absolute;\n    top: 8px;\n}\n\n.active {\n    background-position: left center;\n}",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAARCAQAAABzuJQIAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAB7SURBVCjP3c7BDQMhDETRP4gyUlb6SEphe9w+JgdArIMPm2uGizV6MpbpERgBzGb0tuZcLvTbDSoHrMUMQmFrY/IaaOeKB7yE+1yTz43irZNXbXcCFosuXqFt9g0cyZICT7LkrU+b62vGeVv4IX+Phc+tfABZK3xj5cgHC29ECUeufxkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDUtMzFUMTg6NDE6MzIrMDI6MDD31tLGAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA1LTMxVDE4OjQxOjMyKzAyOjAwhotqegAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII="},function(e,t,n){var r=n(5),o=n(28);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){(t=n(6)(!1)).push([e.i,".cp div {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-block;\n  height: 16px;\n  width: 16px;\n}\n.cp div:hover {\n  border: 1px solid #fff;\n}\n",""]),e.exports=t},function(e,t,n){var r=n(5),o=n(30);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){(t=n(6)(!1)).push([e.i,".gp {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.gp .gp-flat {\n    margin: 0 auto;\n    padding: 10px 0 0!important;\n    box-shadow: none!important;\n    transform: none!important;\n}",""]),e.exports=t},function(e,t,n){var r=n(5),o=n(32);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){(t=n(6)(!1)).push([e.i,".gpw {\n    padding: 20px;\n}\n\n.gpw .trigger {\n    padding: 5px;\n    background: rgb(255, 255, 255);\n    border-radius: 1px;\n    box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 1px;\n    display: inline-block;\n    cursor: pointer;\n}\n\n.gpw .trigger .inner {\n    width: 36px;\n    height: 14px;\n    border-radius: 2px;\n}\n\n.gpw .popover {\n    z-index: 2;\n    margin-top: 6px;\n    box-shadow: rgba(0, 0, 0, 0.15) 0 0 0 1px,\n    rgba(0, 0, 0, 0.15) 0 8px 16px;\n    padding: 12px;\n    border-radius: 4px;\n    position: absolute;\n}\n\n.gpw .popover .angle-holder {\n    margin: 0 -10px;\n    padding: 10px 0 0 10px;\n    border-top: 1px solid rgb(238, 238, 238);\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap;\n    position: relative;\n}\n\n.gpw .popover .angle-inputs {\n    border-radius: 4px;\n    background: #f2f2f2;\n    display: flex;\n    flex: 1;\n    margin: 0 20px;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.gpw .popover .angle-inputs input {\n    border: none;\n    text-align: center;\n    width: 48px;\n    color: #0C0C09;\n    background: inherit;\n}\n\n.gpw .popover .angle-inputs span {\n    padding: 5px;\n    cursor: pointer;\n    user-select: none;\n}\n\n.gpw .overlay {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}",""]),e.exports=t},function(e,t,n){"use strict";n.r(t),n.d(t,"GradientPicker",(function(){return ue})),n.d(t,"GradientPickerPopover",(function(){return fe})),n.d(t,"AnglePicker",(function(){return I})),n.d(t,"getGradientPreview",(function(){return v}));var r=function(e,t){return e.offset-t.offset},o=function(e){return e.sort(r)},i=function(){},a=function(e){return e<0?360+e:e>360?e-360:e},c=function(e){if(!e)return{y:0,x:0};var t=e.getBoundingClientRect(),n=t.top,r=t.left;return{y:n+t.height/2,x:r+t.width/2}},u=function(e,t,n){var r=t-n.y,o=e-n.x,i=Math.atan2(r,o);return Math.round(i*(180/Math.PI))+90},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e%t;if(0===n)return e;var r=n>t/2?t-n:-1*n;return e+r},l=n(3),f=n.n(l),p=n(8),d=n.n(p);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:90,n=d.a.getGradientCords(t),r=d.a.getBackground(b({},n,{stops:e})),o=r.background;return{gradient:n,background:o,angle:t}},m=n(2),y=n.n(m),h=n(0),O=n.n(h),x=n(1),j=n.n(x);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var A=Object(x.shape)({id:x.number.isRequired,color:x.string.isRequired,offset:x.number.isRequired,isActive:x.bool.isRequired,pointX:x.number}),P=Object(x.shape)({min:x.number.isRequired,max:x.number.isRequired,drop:x.number}),S=Object(x.shape)({id:x.number,color:x.string.isRequired,offset:x.string.isRequired,opacity:x.number}),E={stop:A.isRequired,limits:P.isRequired,onPosChange:x.func.isRequired,onDeleteColor:x.func.isRequired,onDragStart:x.func,onDragEnd:x.func},D={width:x.number.isRequired,stops:Object(x.arrayOf)(A),limits:P,disabled:x.bool,onPosChange:x.func.isRequired,onAddColor:x.func.isRequired,onDeleteColor:x.func.isRequired,onDragStart:x.func,onDragEnd:x.func},C={width:x.number.isRequired,height:x.number.isRequired,palette:Object(x.arrayOf)(S).isRequired},R={onPaletteChange:x.func.isRequired,paletteHeight:x.number,width:x.number,stopRemovalDrop:x.number,maxStops:x.number,minStops:x.number,flatStyle:x.bool,palette:Object(x.arrayOf)(S)},M={angle:x.number.isRequired,setAngle:x.func.isRequired,size:x.number,snap:x.number},k=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},R,{},M,{showAnglePicker:x.bool,open:x.bool.isRequired,setOpen:x.func.isRequired,trigger:x.func});function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e){var t=e.onDragStart,n=void 0===t?i:t,r=e.onDrag,o=e.onDragEnd,a=void 0===o?i:o,c=Object(h.useState)({}),u=y()(c,2),s=u[0],l=u[1],f=Object(h.useState)(!1),p=y()(f,2),d=p[0],g=p[1],b=Object(h.useState)(!1),v=y()(b,2),m=v[0],O=v[1],x=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];g(!0),n(t?F({},e,{clientX:e.touches[0].pageX,clientY:e.touches[0].pageY}):e)},j=function(){g(!1),a(s.change),l({})},w=function(e){d&&(s.change=r(m?F({},e,{clientX:e.touches[0].pageX,clientY:e.touches[0].pageY}):e))};return Object(h.useEffect)((function(){return d&&(document.addEventListener(m?"touchend":"mouseup",j),document.addEventListener(m?"touchmove":"mousemove",w,m?{cancelable:!0,passive:!1}:null)),function(){document.removeEventListener(m?"touchend":"mouseup",j),document.removeEventListener(m?"touchmove":"mousemove",w)}}),[d,m]),[function(e){var t="touchstart"===e.type;O(t),t||(e.preventDefault(),e.stopPropagation()),e.button||x(e,t)},x,j]},q=(n(17),function(e){var t=e.angle,n=e.setAngle,r=e.size,o=void 0===r?48:r,i=e.snap,l=void 0===i?5:i,f=Object(h.useRef)(),p={height:o,width:o},d=function(e){var t=e.clientX,r=e.clientY,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=c(f.current),p=u(t,r,i),d=a(p),g=o?s(d,l):d;return n(g),g},g=N({onDragStart:function(e){return d(e,!0)},onDrag:d,onDragEnd:function(e){if(e){var t=s(e,l);n(t)}}}),b=y()(g,1)[0];return O.a.createElement("div",{className:"ap",ref:f,onMouseDown:b,onTouchStart:b,style:p},O.a.createElement("span",{className:"apc",style:{transform:"rotate(".concat(t,"deg)"),height:o}},O.a.createElement("i",{className:"aph"})))});q.propTypes=M;var I=q,_=n(4),B=n.n(_),U=n(9),X=n.n(U),G=n(7),L=n.n(G),Y=function(e){var t=e.limits,n=e.stop,r=e.initialPos,o=e.colorStopRef,i=e.onPosChange,a=e.onDragStart,c=e.onDragEnd,u=e.onDeleteColor,s=Object(h.useState)(r),l=y()(s,2),f=l[0],p=l[1],d=N({onDragStart:function(e){var t=e.clientX;p(t),a(n.id)},onDrag:function(e){var r,a=e.clientX,c=e.clientY,s=n.id,l=n.offset,p=t.min,d=t.max,g=(r=o).current?r.current.getBoundingClientRect().top:0;if(Math.abs(c-g)>t.drop)return u(s);var b=function(e,t,n){return Math.max(Math.min(e,n),t)}(l-f+a,p,d);i({id:s,offset:b})},onDragEnd:function(){return c(n.id)}}),g=y()(d,2),b=g[0],v=g[1];return Object(h.useEffect)((function(){var e=n.pointX;e&&v({clientX:e})}),[]),[b]},z=(n(23),function(e){var t=e.stop,n=e.limits,r=e.onPosChange,o=e.onDeleteColor,a=e.onDragStart,c=void 0===a?i:a,u=e.onDragEnd,s=void 0===u?i:u,l=Object(h.useRef)(),f=Y({stop:t,limits:n,onPosChange:r,onDragStart:c,onDragEnd:s,onDeleteColor:o,colorStopRef:l}),p=y()(f,1)[0],d=t.offset,g=t.color,b=t.isActive;return O.a.createElement("div",{className:b?"cs active":"cs",ref:l,style:{left:d},onMouseDown:p,onTouchStart:p},O.a.createElement("div",{style:{backgroundColor:g}}))});z.propTypes=E;var V=z,H=function(e,t){return{width:e,height:17,position:"relative",cursor:t?"default":"crosshair"}},J=function(e){var t=e.width,n=e.stops,r=e.disabled,o=void 0!==r&&r,i=e.onAddColor,a=B()(e,["width","stops","disabled","onAddColor"]);return O.a.createElement("div",{className:"csh",style:H(t,o),onMouseDown:function(e){if(e.preventDefault(),!e.button){var t=e.clientX-e.target.getBoundingClientRect().left;i({offset:t,pointX:e.clientX})}}},n.map((function(e){return O.a.createElement(V,L()({key:e.id,stop:e},a))})))};J.propTypes=D;var Q=J,W=function(){return""+Math.random().toString(36).substr(2,9)},Z=function(e){var t=e.palette,n=e.width,r=e.height,i=o(t),a=Object(h.useMemo)(W,[t.length]);return O.a.createElement("div",{className:"palette",style:{width:n,height:r}},O.a.createElement("svg",{width:"100%",height:"100%"},O.a.createElement("defs",null,O.a.createElement("linearGradient",{id:a,x1:"0",y1:"0.5",x2:"1",y2:"0.5"}," ",i.map((function(e){var t=e.id,n=e.offset,r=e.color,o=e.opacity,i=void 0===o?1:o;return O.a.createElement("stop",{key:t,offset:n,style:{stopColor:r,stopOpacity:i}})})))),O.a.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url(#".concat(a,")")})))};Z.propTypes=C;var K=Z,$=[{value:"#000000",name:"black"},{value:"#808080",name:"gray"},{value:"#C0C0C0",name:"silver"},{value:"#FFFFFF",name:"white"},{value:"#FF0000",name:"red"},{value:"#800000",name:"maroon"},{value:"#FFFF00",name:"yellow"},{value:"#808000",name:"olive"},{value:"#00FF00",name:"lime"},{value:"#008000",name:"green"},{value:"#00FFFF",name:"aqua"},{value:"#008080",name:"teal"},{value:"#0000FF",name:"blue"},{value:"#000080",name:"navy"},{value:"#FF00FF",name:"fuchsia"},{value:"#800080",name:"purple"}],ee=(n(27),function(e){var t=e.onSelect;return O.a.createElement("div",{className:"cp"},$.map((function(e){var n=e.value,r=e.name;return O.a.createElement("div",{onClick:function(){return t(n)},key:r,title:r,style:{backgroundColor:n}})})))});ee.propTypes={color:j.a.string.isRequired,onSelect:j.a.func.isRequired};var te=ee;n(29);function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var oe=function(e){return Math.max.apply(Math,X()(e.map((function(e){return e.id}))))+1},ie=function(e){var t=e.palette,n=e.activeId,r=e.activePoint,o=e.width;return t.map((function(e){return re({},e,{id:e.id,offset:o*e.offset-5,isActive:e.id===n,pointX:r})}))},ae=function(e,t){var n=e.find((function(e){return e.id===t}));return re({},n,{offset:Number(n.offset)})},ce=function(e){var t=e.palette,n=e.paletteHeight,r=void 0===n?32:n,i=e.width,a=void 0===i?220:i,c=e.stopRemovalDrop,u=void 0===c?50:c,s=e.minStops,l=void 0===s?2:s,f=e.maxStops,p=void 0===f?5:f,d=e.children,g=e.flatStyle,b=void 0!==g&&g,v=e.onPaletteChange;t=function(e){return e.map((function(e,t){return re({},e,{id:e.id||t+1})}))}(t);var m=Object(h.useState)(1),x=y()(m,2),j=x[0],w=x[1],A=Object(h.useState)(),P=y()(A,2),S=P[0],E=P[1],D=Object(h.useMemo)((function(){return{min:-5,max:a-5,drop:u}}),[a]),C=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;t=t.map((function(t){return j===t.id?re({},t,{color:e,opacity:n}):t})),R(t)},R=function(e){var t=o(e).map((function(e){var t=e.offset,n=B()(e,["offset"]);return re({offset:Number(t).toFixed(3)},n)}));v(t)},M=a-5,k=t.length>=p;return O.a.createElement("div",{className:"gp"},O.a.createElement(K,{width:M,height:r,palette:t}),O.a.createElement(Q,{width:M,disabled:k,stops:ie({activePoint:S,palette:t,width:M,activeId:j}),limits:D,onPosChange:function(e){var n=e.id,r=e.offset,o=t.map((function(e){return n===e.id?re({},e,{offset:(r+5)/a}):e}));R(o)},onAddColor:function(e){var n=e.offset,r=e.pointX;if(!(t.length>=p)){var o=ae(t,j).color,i={id:oe(t),offset:n/a,color:o},c=[].concat(X()(t),[i]);E(r),R(c)}},onDeleteColor:function(e){if(!(t.length<=l)){var n=t.filter((function(t){return t.id!==e})),r=n.reduce((function(e,t){return t.offset<e.offset?t:e}),n[0]).id;w(r),R(n)}},onDragStart:function(e){w(e)}}),function(){var e=ae(t,j),n=re({color:e.color,opacity:e.opacity},b&&{width:a,className:"gp-flat"},{onSelect:C});if(!d)return O.a.createElement(te,n);var r=O.a.Children.only(d);return O.a.cloneElement(r,n)}())};ce.propTypes=R;var ue=ce,se=(n(31),function(e,t){return O.a.createElement("div",{className:"trigger",onClick:t},O.a.createElement("div",{className:"inner",style:{background:e}}))}),le=function(e){var t=e.palette,n=e.open,r=void 0!==n&&n,o=e.setOpen,i=e.trigger,a=void 0===i?se:i,c=e.showAnglePicker,u=void 0!==c&&c,s=e.angle,l=e.setAngle,f=B()(e,["palette","open","setOpen","trigger","showAnglePicker","angle","setAngle"]),p=v(t,s).background,d=function(e){l(e=(e=e>360?e-360:e)<0?e+360:e)};return O.a.createElement("div",{className:"gpw"},a(p,(function(){return o(!r)})),r&&O.a.createElement(O.a.Fragment,null,O.a.createElement("div",{className:"overlay",onClick:function(){return o(!1)}}),O.a.createElement("div",{className:"popover"},O.a.createElement(ue,L()({},f,{palette:t,flatStyle:!0})),u&&O.a.createElement("div",{className:"angle-holder"},O.a.createElement(I,{angle:s,setAngle:l,size:32}),O.a.createElement("div",{className:"angle-inputs"},O.a.createElement("span",{onClick:function(){return d(s-1)}},"−"),O.a.createElement("input",{value:"".concat(s,"°"),disabled:!0}),O.a.createElement("span",{onClick:function(){return d(s+1)}},"+"))))))};le.propTypes=k;var fe=le}])}));
//# sourceMappingURL=index.js.map