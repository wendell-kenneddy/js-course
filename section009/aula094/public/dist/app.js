(()=>{function n(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function e(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var t=[{name:"John",age:16},{name:"Mary",age:19},{name:"Liz",age:21}];!function(){var r,a=function(){function n(e,t){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.name=e,this.age=t}var t,r;return t=n,(r=[{key:"greeting",value:function(){console.log("Hi, my name is ".concat(this.name,". How are you?"))}}])&&e(t.prototype,r),n}(),o=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,f=!1;return{s:function(){r=r.call(e)},n:function(){var n=r.next();return u=n.done,n},e:function(n){f=!0,i=n},f:function(){try{u||null==r.return||r.return()}finally{if(f)throw i}}}}(t);try{for(o.s();!(r=o.n()).done;){var i=r.value;new a(i.name,i.age).greeting()}}catch(n){o.e(n)}finally{o.f()}}()})();
//# sourceMappingURL=app.js.map