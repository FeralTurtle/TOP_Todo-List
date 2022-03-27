(()=>{"use strict";var e,n,t,r,o,a,i,c,l,d,s,p,u,f,m={28:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,':root {\n  --white: #ffffff;\n  --red: #e60000;\n  --light-gray: #f2f2f2;\n  --gray: #808080;\n  --light-yellow: #ffffe6;\n  --box-shadow-color: 0px 5px 5px rgba(0, 0, 0, .38);\n}\n\nbody {\n  height: 100vh;\n  margin: 0;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 1fr 9fr;\n  grid-template-areas: "header header"\n    "categories display";\n  background-color: var(--white);\n}\n\nheader {\n  grid-area: header;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  background-color: var(--red);\n  box-shadow: var(--box-shadow-color);\n  color: var(--white);\n  z-index: 2;\n}\n\nheader img {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-content: center;\n  padding: 15px;\n}\n\nheader span {\n  align-self: center;\n  font-weight: bold;\n  font-size: 1.8rem;\n  padding: 15px;\n}\n\n/* To-do categories */\n.todo-categories-container {\n  grid-area: categories;\n  display: grid;\n  grid-template-rows: 38px 1fr 38px 1.5fr;\n  padding: 12px 0px;\n  background-color: var(--light-gray);\n}\n\n.list-header {\n  box-shadow: inset 0px -2px var(--gray);\n  margin: 6px 4px;\n  font-weight: bold;\n}\n\n.description {\n  margin: 0px 6px;\n}\n\n.item-partial {\n  margin: 0px 6px;\n}\n\n/* Main display */\n.todo-display-container {\n  grid-area: display;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  padding: 12px;\n}\n\n.todo-display-header {\n  height: 65px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n}\n\n.form-tools {\n  align-self: end;\n  justify-self: end;\n}\n\n/* Todo items */\n.todo-item {\n  display: grid;\n  grid-template-columns: .43fr .43fr 5fr 1fr 1fr;\n  margin-bottom: 9px;\n}\n\n.todo-item span {\n  padding: 6px;\n}\n\n/* Todo item info popup */\n.popup-form {\n  display: none;\n  position: absolute;\n  left: 50%;\n  transform: translate(-15%, -145%);\n  ;\n  flex-direction: column;\n  align-items: center;\n  padding: 12px;\n  height: 375px;\n  width: 400px;\n  background-color: var(--white);\n  white-space: pre-line;\n  border: 3px solid black;\n  box-shadow: 2px 2px 6px 2px var(--gray);\n}\n\n.radio {\n  display: flex;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n}\n\nform>label, form>input, form>.radio {\n  margin: 4px 0px;\n}\n\n.radio {\n  justify-content: space-evenly;\n}\n\n.form-buttons {\n  align-self: center;\n  margin: 6px;\n}\n\n.form-close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n  align-self: end;\n}\n\n.form-close:hover,\n.form-close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n/* Add button */\n.add-button {\n  width: 75px;\n  margin-right: 15px;\n  justify-self: end;\n  align-self: end;\n}\n\n.add-button:hover {\n  cursor: pointer;\n}\n\n.add-button-img {\n  width: 75px;\n}\n\n/* Tooltip */\n.tooltip .tooltip-text {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: relative;\n  right: 28px;\n  bottom: 5px;\n  z-index: 1;\n}\n\n.tooltip:hover .tooltip-text {\n  visibility: visible;\n}',""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],d=r.base?l[0]+r.base:l[0],s=a[d]||0,p="".concat(d," ").concat(s);a[d]=s+1;var u=t(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var l=r(e,o),d=0;d<a.length;d++){var s=t(a[d]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},g={};function y(e){var n=g[e];if(void 0!==n)return n.exports;var t=g[e]={id:e,exports:{}};return m[e](t,t.exports,y),t.exports}y.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return y.d(n,{a:n}),n},y.d=(e,n)=>{for(var t in n)y.o(n,t)&&!y.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},y.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e=y(379),n=y.n(e),t=y(795),r=y.n(t),o=y(569),a=y.n(o),i=y(565),c=y.n(i),l=y(216),d=y.n(l),s=y(589),p=y.n(s),u=y(28),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),n()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,(()=>{const e=document.querySelector(".add-button"),n=document.querySelector(".popup-form"),t=document.querySelector(".form-close"),r=document.querySelector("#form-btn"),o=document.querySelector("#form-reset"),a=document.querySelector("#title"),i=document.querySelector("#description"),c=document.querySelector("#due-date"),l=document.querySelector("#priority"),d=document.querySelector("#project"),s=[a,i,c,l,d];e.addEventListener("click",(()=>{n.style.display="flex"})),r.addEventListener("click",(()=>{console.log({title:a.value,description:i.value,dueDate:c.value,priority:l.value})})),t.addEventListener("click",(()=>{s.forEach((e=>e.value=null)),n.style.display="none"})),o.addEventListener("click",(()=>{s.forEach((e=>e.value=null));const e=document.querySelector("#project"),n=document.createElement("select");n.setAttribute("name","project"),n.setAttribute("id","project"),n.setAttribute("autocomplete","off");const t=document.createElement("option");t.setAttribute("value","add-project"),t.textContent="Add a project",e.replaceWith(n),n.append(t)})),d.addEventListener("click",(()=>{if("add-project"==d.value){for(;d.firstChild;)d.removeChild(d.firstChild);const e=document.createElement("input");e.setAttribute("type","text"),e.setAttribute("id","project"),e.setAttribute("autocomplete","off"),d.replaceWith(e),document.querySelector("label[for='project']").textContent="Project name"}}))})(),(()=>{const e=document.querySelectorAll(".list-container"),n=[];e.forEach((e=>n.push(Array.from(e.children))));const t=n[0];document.querySelector(".selected-project").style.backgroundColor="#ffffe6",t.forEach((e=>e.addEventListener("click",(()=>{const n=document.querySelector(".selected-project");n.style.backgroundColor=null,n.classList.remove("selected-project"),e.classList.add("selected-project"),e.style.backgroundColor="#ffffe6"})))),document.querySelector(".selected-todo").style.backgroundColor="#f2f2f2";const r=document.querySelector(".todo-display-main"),o=Array.from(r.children);for(let e=0;e<o.length;e++){const n=Array.from(o[e].children);for(let e=0;e<n.length;e++)e>1&&n[e].addEventListener("click",(()=>{const t=document.querySelector(".selected-todo");t.style.backgroundColor=null,t.classList.remove("selected-todo"),n[e].parentElement.classList.add("selected-todo"),n[e].parentElement.style.backgroundColor="#f2f2f2"}))}})()})();