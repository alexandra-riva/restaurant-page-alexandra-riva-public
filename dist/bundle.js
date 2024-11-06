(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>i});var o=t(601),r=t.n(o),c=t(314),a=t.n(c)()(r());a.push([e.id,"\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n    background-color: black;\n    color: white;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nh1 {\n    text-align: center;\n}\n\n\nimg {\n    display: block;\n    max-width: 100%;\n    height: 300px;\n    margin: 20px auto;\n    border-radius: 12px;\n}\n\n\np {\n    text-align: center;\n    margin: 10px 20px;\n    font-size: 1.2rem; \n}\n\n\nnav {\n    text-align: center;\n    margin: 20px 0;\n}\n\nbutton {\n    background-color: grey; \n    color: white;\n    border: none;\n    padding: 10px 20px;\n    font-size: 1rem;\n    cursor: pointer;\n    border-radius: 5px; \n    margin: 0 10px; \n    transition: background-color 0.3s;\n}\n\nbutton:hover {\n    background-color: darkgrey; \n}\n",""]);const i=a},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);o&&a[u[0]]||(void 0!==c&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=c),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),n.push(u))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var c={},a=[],i=0;i<e.length;i++){var d=e[i],s=o.base?d[0]+o.base:d[0],u=c[s]||0,l="".concat(s," ").concat(u);c[s]=u+1;var p=t(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=r(m,o);o.byIndex=i,n.splice(i,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=t(c[a]);n[i].references--}for(var d=o(e,r),s=0;s<c.length;s++){var u=t(c[s]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}c=d}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var c=n[o]={id:o,exports:{}};return e[o](c,c.exports,t),c.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.p="/",t.nc=void 0;var o=t(72),r=t.n(o),c=t(825),a=t.n(c),i=t(659),d=t.n(i),s=t(56),u=t.n(s),l=t(540),p=t.n(l),m=t(113),f=t.n(m),h=t(365),v={};v.styleTagTransform=f(),v.setAttributes=u(),v.insert=d().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),r()(h.A,v),h.A&&h.A.locals&&h.A.locals;const C=t.p+"6aefa5ce8345539b8499.jpg",x=function e(){const n=document.querySelector("#content");n.textContent="";const t=document.createElement("h1");t.textContent="Contact",n.appendChild(t);const o=document.createElement("img");o.src=C,o.alt="sancocho",n.appendChild(o);const r=document.createElement("p");r.textContent="Can't get enough of sancocho? Who can blame you! Slide into our DMs on Instagram and get your sancocho fix!",n.appendChild(r);const c=document.createElement("nav");n.appendChild(c);const a=document.createElement("button");a.textContent="Home",c.appendChild(a),a.addEventListener("click",b);const i=document.createElement("button");i.textContent="Menu",c.appendChild(i),i.addEventListener("click",g);const d=document.createElement("button");d.textContent="Contact",c.appendChild(d),d.addEventListener("click",e)},g=function e(){const n=document.querySelector("#content");n.textContent="";const t=document.createElement("h1");t.textContent="Menu",n.appendChild(t);const o=document.createElement("img");o.src=C,o.alt="sancocho",n.appendChild(o);const r=document.createElement("p");r.textContent="Sancocho is our one and only love! Your taste buds will throw a fiesta!",n.appendChild(r);const c=document.createElement("nav");n.appendChild(c);const a=document.createElement("button");a.textContent="Home",c.appendChild(a),a.addEventListener("click",b);const i=document.createElement("button");i.textContent="Menu",c.appendChild(i),i.addEventListener("click",e);const d=document.createElement("button");d.textContent="Contact",c.appendChild(d),d.addEventListener("click",x)},b=function(){const e=document.querySelector("#content");if(!e)return void console.error('Element with id "content" not found');e.textContent="";const n=document.createElement("h1");n.textContent="One-Dish Wonder Restaurant",e.appendChild(n);const t=document.createElement("img");t.src=C,t.alt="sancocho",e.appendChild(t);const o=document.createElement("p");o.textContent="Welcome to our One-Dish Wonder Restaurant, where our flavorful Sancocho is the star, serving up a comforting taste of Dominican tradition in every bowl!",e.appendChild(o);const r=document.createElement("nav");e.appendChild(r);const c=document.createElement("button");c.textContent="Home",r.appendChild(c);const a=document.createElement("button");a.textContent="Menu",r.appendChild(a),a.addEventListener("click",g);const i=document.createElement("button");i.textContent="Contact",r.appendChild(i),i.addEventListener("click",x)};document.addEventListener("DOMContentLoaded",(()=>{console.log("DOM fully loaded and parsed");const e=document.querySelector("#content");console.log(e),e?b():console.error('Element with id "content" not found')}))})();