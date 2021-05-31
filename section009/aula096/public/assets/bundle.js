(()=>{"use strict";var n={122:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(15),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([n.id,"/*  Global */\n\n* {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  text-decoration: none;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #0093E9;\n  background-image: -webkit-linear-gradient(115deg, #0093E9 0%, #80D0C7 100%);\n  background-image: -moz-linear-gradient(115deg, #0093E9 0%, #80D0C7 100%);\n  background-image: -o-linear-gradient(115deg, #0093E9 0%, #80D0C7 100%);\n  background-image: linear-gradient(115deg, #0093E9 0%, #80D0C7 100%);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  font-family: 'Ubuntu', sans-serif;\n}\n\n.sr-only {\n  margin: 0;\n  padding: 0;\n  width: 1;\n  height: 1;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n\n  position: absolute;\n}\n\n.hide {\n  display: none;\n}\n\n.container {\n  background-color: #fff;\n  border: none;\n  border-radius: 0.25rem;\n  margin: 2rem auto;\n  padding: 1rem;\n  width: 90vw;\n  max-width: 600px;\n}\n\n.container p {\n  text-align: justify;\n}\n\nsection *+* {\n  margin-top: 1rem;\n}\n\nsection h2 {\n  font-size: 2rem;\n}\n\nform *+* {\n  margin-top: 0.4rem;\n}\n\ninput,\nlabel {\n  border: none;\n  border-radius: 0.25rem;\n  height: 2rem;\n  display: block;\n  width: 100%;\n}\n\nlabel {\n  font-size: 1.3rem;\n  font-weight: 500;\n}\n\ninput {\n  border: 1px solid #0093E9;\n  padding: 0 1rem;\n  box-sizing: border-box;\n}\n\ninput:invalid {\n  outline: 0;\n  border: 1px solid #ff0d0d;\n  box-shadow: 0 0 10px #ff0d0d;\n}\n\nbutton {\n  background-color: #0093E9;\n  border: none;\n  border-radius: 0.25rem;\n  margin-top: 1rem;\n  width: 40%;\n  height: 2.5rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #fff;\n  cursor: pointer;\n  transition: .3s ease-in-out;\n}\n\nbutton:hover {\n  background-color: rgba(0, 147, 233, 0.7);\n}\n\n#cpf-container {\n  padding: 0 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAAA,YAAY;;AAEZ;EACE,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,2EAA2E;EAC3E,wEAAwE;EACxE,sEAAsE;EACtE,mEAAmE;EACnE,4BAA4B;EAC5B,sBAAsB;EACtB,4BAA4B;EAC5B,iCAAiC;AACnC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,QAAQ;EACR,SAAS;EACT,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;;EAEf,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,sBAAsB;EACtB,iBAAiB;EACjB,aAAa;EACb,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,YAAY;EACZ,sBAAsB;EACtB,YAAY;EACZ,cAAc;EACd,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,UAAU;EACV,yBAAyB;EACzB,4BAA4B;AAC9B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,sBAAsB;EACtB,gBAAgB;EAChB,UAAU;EACV,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC",sourcesContent:["/*  Global */\n\n* {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  text-decoration: none;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #0093E9;\n  background-image: -webkit-linear-gradient(115deg, #0093E9 0%, #80D0C7 100%);\n  background-image: -moz-linear-gradient(115deg, #0093E9 0%, #80D0C7 100%);\n  background-image: -o-linear-gradient(115deg, #0093E9 0%, #80D0C7 100%);\n  background-image: linear-gradient(115deg, #0093E9 0%, #80D0C7 100%);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  font-family: 'Ubuntu', sans-serif;\n}\n\n.sr-only {\n  margin: 0;\n  padding: 0;\n  width: 1;\n  height: 1;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n\n  position: absolute;\n}\n\n.hide {\n  display: none;\n}\n\n.container {\n  background-color: #fff;\n  border: none;\n  border-radius: 0.25rem;\n  margin: 2rem auto;\n  padding: 1rem;\n  width: 90vw;\n  max-width: 600px;\n}\n\n.container p {\n  text-align: justify;\n}\n\nsection *+* {\n  margin-top: 1rem;\n}\n\nsection h2 {\n  font-size: 2rem;\n}\n\nform *+* {\n  margin-top: 0.4rem;\n}\n\ninput,\nlabel {\n  border: none;\n  border-radius: 0.25rem;\n  height: 2rem;\n  display: block;\n  width: 100%;\n}\n\nlabel {\n  font-size: 1.3rem;\n  font-weight: 500;\n}\n\ninput {\n  border: 1px solid #0093E9;\n  padding: 0 1rem;\n  box-sizing: border-box;\n}\n\ninput:invalid {\n  outline: 0;\n  border: 1px solid #ff0d0d;\n  box-shadow: 0 0 10px #ff0d0d;\n}\n\nbutton {\n  background-color: #0093E9;\n  border: none;\n  border-radius: 0.25rem;\n  margin-top: 1rem;\n  width: 40%;\n  height: 2.5rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #fff;\n  cursor: pointer;\n  transition: .3s ease-in-out;\n}\n\nbutton:hover {\n  background-color: rgba(0, 147, 233, 0.7);\n}\n\n#cpf-container {\n  padding: 0 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n"],sourceRoot:""}]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var A=[].concat(n[c]);t&&o[A[0]]||(r&&(A[2]?A[2]="".concat(r," and ").concat(A[2]):A[2]=r),e.push(A))}},e}},15:n=>{function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}n.exports=function(n){var r,t,o=(t=4,function(n){if(Array.isArray(n))return n}(r=n)||function(n,e){var r=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null!=r){var t,o,i=[],a=!0,c=!1;try{for(r=r.call(n);!(a=(t=r.next()).done)&&(i.push(t.value),!e||i.length!==e);a=!0);}catch(n){c=!0,o=n}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(r,t)||function(n,r){if(n){if("string"==typeof n)return e(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?e(n,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],a=o[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),u="/*# ".concat(A," */"),l=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[i].concat(l).concat([u]).join("\n")}return[i].join("\n")}},379:(n,e,r)=>{var t,o=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),i=[];function a(n){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===n){e=r;break}return e}function c(n,e){for(var r={},t=[],o=0;o<n.length;o++){var c=n[o],A=e.base?c[0]+e.base:c[0],u=r[A]||0,l="".concat(A," ").concat(u);r[A]=u+1;var s=a(l),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==s?(i[s].references++,i[s].updater(d)):i.push({identifier:l,updater:g(d,e),references:1}),t.push(l)}return t}function A(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=r.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,l=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function s(n,e,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function d(n,e,r){var t=r.css,o=r.media,i=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var f=null,p=0;function g(n,e){var r,t,o;if(e.singleton){var i=p++;r=f||(f=A(e)),t=s.bind(null,r,i,!1),o=s.bind(null,r,i,!0)}else r=A(e),t=d.bind(null,r,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var o=a(r[t]);i[o].references--}for(var A=c(n,e),u=0;u<r.length;u++){var l=a(r[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}r=A}}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{function n(n){return function(n){if(Array.isArray(n))return o(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||t(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function t(n,e){if(n){if("string"==typeof n)return o(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(n,e):void 0}}function o(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}var i={generateRandomNum:function(n){return Math.round(Math.random()*n)},generateRawDigits:function(){for(var n="",e=0;e<9;e++)n+=i.generateRandomNum(9);return n},placeCharInCpf:function(n,e){var r,o,i,a=Array.from(n),c=function(n,e){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=t(n))){r&&(n=r);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,A=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return c=n.done,n},e:function(n){A=!0,a=n},f:function(){try{c||null==r.return||r.return()}finally{if(A)throw a}}}}(e);try{for(c.s();!(r=c.n()).done;){var A=(o=r.value,i=2,function(n){if(Array.isArray(n))return n}(o)||function(n,e){var r=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null!=r){var t,o,i=[],a=!0,c=!1;try{for(r=r.call(n);!(a=(t=r.next()).done)&&(i.push(t.value),!e||i.length!==e);a=!0);}catch(n){c=!0,o=n}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(o,i)||t(o,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=A[0],l=A[1];a.splice(l,0,u)}}catch(n){c.e(n)}finally{c.f()}return a.join("")}},a=function(){function r(n){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),n&&(this.rawCpf=n,this.cleanCpf=n.replace(/\D+/g,""))}var t,o,a;return t=r,a=[{key:"generateCpf",value:function(){var e=i.generateRawDigits(),t=Array.from(e),o=i.placeCharInCpf(e,[[".",3],[".",7]]),a=r.getValidationDigit(t),c=r.getValidationDigit([].concat(n(t),[a]));return new r(o+"-".concat(a).concat(c))}},{key:"getValidationDigit",value:function(n){if(n&&Array.isArray(n)){var e=n.length+1,r=11-n.reduce((function(n,r){return n+=r*e,e--,n}),0)%11;return r>9?0:r}}},{key:"getCpfArray",value:function(n){if(n)return Array.from(n).map((function(n){return Number(n)}))}}],(o=[{key:"validateCpf",value:function(){var e=this.cleanCpf[0].repeat(11)===this.cleanCpf;if(!this.rawCpf)return"Nenhum CPF especificado.";if(11!=this.cleanCpf.length)return"CPF inválido.";if(e)return"O CPF especificado não pode ser uma sequência.";var t=r.getCpfArray(this.cleanCpf.slice(0,-2)),o=r.getValidationDigit(t),i=r.getValidationDigit([].concat(n(t),[o]));return"".concat(o).concat(i)===this.rawCpf.slice(-2)?"CPF válido.":"CPF inválido."}}])&&e(t.prototype,o),a&&e(t,a),r}();function c(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var A=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,r;return e=n,r=[{key:"init",value:function(){var n=document.getElementById("generated-cpf");document.getElementById("generate-cpf").addEventListener("click",(function(e){var r=a.generateCpf();n.innerHTML=r.rawCpf}))}}],null&&c(e.prototype,null),r&&c(e,r),n}(),u=r(379),l=r.n(u),s=r(122);l()(s.Z,{insert:"head",singleton:!1}),s.Z.locals,A.init()})()})();
//# sourceMappingURL=bundle.js.map