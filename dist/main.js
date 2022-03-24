(()=>{"use strict";var e,t,r,n,a,o,i,s,c,u,d,l,p,f,v={28:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(81),a=r.n(n),o=r(645),i=r.n(o)()(a());i.push([e.id,'body {\n    height: 100vh;\n    margin: 0;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 9fr;\n    grid-template-areas: "header header"\n                          "categories display";\n    background-color: #808080;\n  }\n  \n  header {\n    grid-area: header;\n  }\n  \n  div {\n  }\n  \n  .todo-categories {\n    grid-area: categories;\n  }\n  \n  .todo-display {\n    grid-area: display;\n  }\n  ',""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);n&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],u=n.base?c[0]+n.base:c[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var p=r(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var v=a(f,n);n.byIndex=s,t.splice(s,0,{identifier:l,updater:v,references:1})}i.push(l)}return i}function a(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=r(o[i]);t[s].references--}for(var c=n(e,a),u=0;u<o.length;u++){var d=r(o[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=c}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},h={};function m(e){var t=h[e];if(void 0!==t)return t.exports;var r=h[e]={id:e,exports:{}};return v[e](r,r.exports,m),r.exports}m.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return m.d(t,{a:t}),t},m.d=(e,t)=>{for(var r in t)m.o(t,r)&&!m.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},m.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=m(379),t=m.n(e),r=m(795),n=m.n(r),a=m(569),o=m.n(a),i=m(565),s=m.n(i),c=m(216),u=m.n(c),d=m(589),l=m.n(d),p=m(28),(f={}).styleTagTransform=l(),f.setAttributes=s(),f.insert=o().bind(null,"head"),f.domAPI=n(),f.insertStyleElement=u(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,console.log("hi")})();