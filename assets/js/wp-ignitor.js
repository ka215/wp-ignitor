!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(3)},,,function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise((function(t){setTimeout((function(){t()}),e)}))}function a(e){try{return e instanceof HTMLElement}catch(t){return"object"===r(e)&&1===e.nodeType&&"object"===r(e.style)&&"object"===r(e.ownerDocument)||!(!e||!(e.nodeName||e.prop&&e.attr&&e.find))}}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error";if("error"===t)throw new Error(e);console[t](e)}function i(e){var t,n=this,r={};try{r=JSON.parse(e)}catch(o){r=(t=(t=(t=e.trim().replace(/^(\{|\[)+|(\]|\})+$/g,"").split(",")).map((function(e){var t=e.match(/^[^:]*:/);return t?[t[0].replace(":",""),e.replace(t[0],"")]:[e]})).map((function(e){return e||e.trim()}))).reduce((function(e,t,r){if(t[0]&&t[1]){var o=t[0].trim().replace(/^('|")+|("|')+$/g,""),a=t[1].trim().replace(/^('|")+|("|')+$/g,"");/^callback$/i.test(o)?e[o]=Function.call(n,"return ".concat(a))():e[o]=a}else if(1==t.length&&t[0]){var c=t[0].trim().replace(/^('|")+|("|')+$/g,"");e[r]=c}else e=null;return e}),{}))?Object.assign(r,t):r}return r}function l(e,t){if(document.createEvent){var n=document.createEvent("HTMLEvents");return n.initEvent(t,!0,!0),e.dispatchEvent(n)}var r=document.createEventObject();return e.fireEvent("on".concat(t),r)}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#ccc",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:4,a="http://www.w3.org/2000/svg",c=document.createElementNS(a,"svg"),i=document.createElement("div"),l=6,u=(n-o*l)/(o+1);c.setAttributeNS(null,"version","1.1"),c.setAttribute("xmlns",a),c.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),c.setAttributeNS(null,"x","0px"),c.setAttributeNS(null,"y","0px"),c.setAttributeNS(null,"viewBox","0 0 ".concat(n," ").concat(r)),c.setAttributeNS(null,"enable-background","new 0 0 0 0"),c.setAttribute("xml:space","preserve");for(var s=1;s<=o;s++){var d=document.createElementNS(a,"circle"),f=document.createElementNS(a,"animate"),p=u*s+6*(s-1);d.setAttributeNS(null,"fill",t),d.setAttributeNS(null,"stroke","none"),d.setAttributeNS(null,"cx",p),d.setAttributeNS(null,"cy",(r-l)/2),d.setAttributeNS(null,"r",l),f.setAttributeNS(null,"attributeName","opacity"),f.setAttributeNS(null,"dur","1s"),f.setAttributeNS(null,"values","0;1;0"),f.setAttributeNS(null,"repeatCount","indefinite"),f.setAttributeNS(null,"begin",.1+.1*s),d.appendChild(f),c.appendChild(d)}return i.appendChild(c),i.classList.add("loader-container"),e&&i.setAttribute("id",e),i}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=document.createElement("div"),o=document.createElement("p");return t&&r.appendChild(t),o.classList.add("notice-message"),o.textContent=e,o.style.textAlign="center",r.appendChild(o),n&&r.appendChild(n),r}function d(e,t,n,r,o,a,c){try{var i=e[a](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,o)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){d(a,r,o,c,i,"next",e)}function i(e){d(a,r,o,c,i,"throw",e)}c(void 0)}))}}function p(){return m.apply(this,arguments)}function m(){return(m=f(regeneratorRuntime.mark((function e(){var t,n,r,o,a,c,i,l,u,s,d=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=d.length>0&&void 0!==d[0]?d[0]:"",n=d.length>1&&void 0!==d[1]?d[1]:{},r=d.length>2&&void 0!==d[2]?d[2]:"json",o=d.length>3&&void 0!==d[3]?d[3]:15e3,a=new AbortController,c=setTimeout((function(){a.abort()}),o),(i=new URLSearchParams).append("action","wpignitor_ajax"),i.append("nonce",document.getElementById("_wpnonce").value),n)for(l in n)Object.prototype.hasOwnProperty.call(n,l)&&i.append(l,n[l]);return e.prev=9,e.next=12,fetch(t,{method:"POST",mode:"cors",cache:"default",credentials:"same-origin",redirect:"follow",referrerPolicy:"no-referrer-when-downgrade",signal:a.signal,body:i});case 12:if((u=e.sent).ok){e.next=16;break}throw s="status code: ".concat(u.status,", text: ").concat(u.statusText),new Error(s);case 16:if("json"!==r){e.next=22;break}return e.next=19,u.json();case 19:e.t0=e.sent,e.next=25;break;case 22:return e.next=24,u.text();case 24:e.t0=e.sent;case 25:return e.abrupt("return",e.t0);case 26:return e.prev=26,clearTimeout(c),e.finish(26);case 29:case"end":return e.stop()}}),e,null,[[9,,26,29]])})))).apply(this,arguments)}n.r(t);var b={moveInstallPath:function(){return s("Currently being processed, please wait.",u("move-install-path","#c0c0c0",120,60,5))},moveWpConfig:function(){return s("Currently being processed, please wait.",null,u("move-wp-config","#c0c0c0",120,60,5))},selfRedirect:function(){},selfReload:function(){window.location.reload(!0)},disableButton:function(){document.querySelector(".wpignitor-dialog .dialog-footer button").disabled=!0},reloadPreviewHtaccess:function(){l(document.getElementById("btn-reload-preview-htaccess"),"click")}};function y(e,t,n,r,o,a,c){try{var i=e[a](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,o)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){y(a,r,o,c,i,"next",e)}function i(e){y(a,r,o,c,i,"throw",e)}c(void 0)}))}}function v(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=/iP(hone|(o|a)d)/.test(navigator.userAgent);Array.prototype.forEach.call(document.querySelectorAll("[data-fixed-backdrop]"),(function(r){var o=window.pageYOffset,a=window.pageXOffset,c=r.getBoundingClientRect(),i=c.left+a,l=c.top+o,u=/^(true|1)$/i.test(r.dataset.fixedBackdrop),s=window.getComputedStyle(r),d=parseInt(s.getPropertyValue("margin-top"),10),f=parseInt(s.getPropertyValue("margin-left"),10);u&&!n&&(e?(r.classList.add("fixed-backdrop"),r.style.top="".concat(l-d,"px"),r.style.left="".concat(i-f,"px")):(r.classList.remove("fixed-backdrop"),r.removeAttribute("style"),window.scrollTo(-1*i,-1*l)),t&&"function"==typeof t&&t())}))}function E(e){return new Promise((function(t){var n=document.getElementsByClassName("wpignitor-dialog"),r=document.getElementsByClassName("dialog-backdrop");n.length>0&&Array.prototype.forEach.call(n,(function(e){e.remove()})),r.length>0&&Array.prototype.forEach.call(r,(function(e){e.remove()}));var o,l,u=document.createElement("div"),s=document.createElement("div"),d=document.createElement("div"),f=window.innerWidth,p=new MutationObserver((function(n,r){n.forEach((function(n){switch(n.type){case"childList":Array.prototype.forEach.call(n.addedNodes,(function(n){n.classList&&n.classList.contains("dialog-content")&&(!function(){var t=e.title?e.title.toString():null;if(t){var n=document.createElement("h3");n.classList.add("dialog-header"),n.innerHTML=t,s.append(n)}}(),function(){var t=e.content?"string"==typeof e.content&&/^\{+.*\}$/.test(e.content)?i(e.content):e.content:null;if(t){var n=document.createElement("div");n.classList.add("dialog-body"),"string"==typeof t?n.innerHTML=t.replace(/\\(.)/gm,"$1"):"object"===w(t)?a(t)?n.append(t):0!=Object.keys(t).length&&(t.remote&&t.url?(t.loader?n.innerHTML=t.loader.replace(/\\(.)/gm,"$1"):n.innerHTML='<div style="text-align:center;color:#ddd;">Now Loading...</div>',fetch(t.url,{method:t.remote,mode:t.mode||"cors",headers:{"X-Requested-With":"XMLHttpRequest"}}).then((function(e){return e.json()})).then((function(e){n.innerHTML=e.content})).catch((function(e){c(e)}))):t[0]?n.innerHTML=t[0]:n.innerHTML=Object.values(t).join("")):n.textContent=t,s.append(n)}}(),function(){var t=!e.foot||("string"==typeof e.foot&&/^\{+.*\}$/.test(e.foot)?i(e.foot):e.foot),n=document.createElement("div"),r=document.createElement("button"),o=function(){return!0},c=e.button||"button button-secondary",l=!1,d=!1;if(t){var f;if(n.classList.add("dialog-footer"),r.setAttribute("type","button"),c)(f=r.classList).add.apply(f,v(c.split(" ")));if("string"==typeof t)switch(!0){case/^none$/i.test(t):l=!0;break;case/^dismiss-outside$/i.test(t):d=!0,r.classList.add(t),r.innerHTML='<span title="Close"></span>';break;default:r.innerHTML=t.replace(/\\(.)/gm,"$1")}else if("object"===w(t)){if(a(t))r=t;else if(0!=Object.keys(t).length){var p;if(Object.prototype.hasOwnProperty.call(t,"class"))r.removeAttribute("class"),(p=r.classList).add.apply(p,v(t.class.split(" ")));if(Object.prototype.hasOwnProperty.call(t,"label")&&(r.innerHTML=t.label.replace(/\\(.)/gm,"$1")),Object.prototype.hasOwnProperty.call(t,"callback")&&(o=t.callback),Object.prototype.hasOwnProperty.call(t,"0"))switch(!0){case/^none$/i.test(t[0]):l=!0;break;case/^dismiss-outside$/i.test(t[0]):d=!0,r.classList.add(t[0]),r.innerHTML='<span title="Close"></span>';break;default:r.innerHTML=t[0].replace(/\\(.)/gm,"$1")}}}else r.textContent="Close";l||(r.addEventListener("click",(function(){o(),A(!1,(function(){u.classList.remove("show")}))}),!1),d?s.append(r):(n.append(r),s.append(n)))}}(),t(u))}));break;case"attributes":n.oldValue&&n.target.classList.contains("show")?e.shown&&Object.prototype.hasOwnProperty.call(window.callback,e.shown)&&"function"==typeof window.callback[e.shown]&&window.callback[e.shown]():n.oldValue?(e.hidden&&Object.prototype.hasOwnProperty.call(window.callback,e.hidden)&&"function"==typeof window.callback[e.hidden]&&window.callback[e.hidden](),r.disconnect()):e.beforeShow&&Object.prototype.hasOwnProperty.call(window.callback,e.beforeShow)&&"function"==typeof window.callback[e.beforeShow]&&window.callback[e.beforeShow]()}}))}));switch(!0){case/^(2|slide-?in-right)$/i.test(e.effect):o="effect-2";break;case/^(3|slide-?in-bottom)$/i.test(e.effect):o="effect-3";break;case/^(4|sticky-?up)$/i.test(e.effect):o="effect-4";break;case/^(5|full-?wide)$/i.test(e.effect):o="effect-5";break;default:o="effect-1"}switch(!0){case/^(xl|xlarge)$/i.test(e.size):l="size-xl";break;case/^(lg|large)$/i.test(e.size):l="size-lg";break;case/^(md|medium)$/i.test(e.size):l="size-md";break;case/^(sm|small)$/i.test(e.size):l="size-sm";break;case/^auto$/i.test(e.size):default:l=f<481?"size-xl":f>768?"":"size-lg"}p.observe(u,{attributes:!0,attributeOldValue:!0,childList:!0,subtree:!0}),u.classList.add("wpignitor-dialog",o),""!==l&&u.classList.add(l),s.classList.add("dialog-content"),d.classList.add("dialog-backdrop"),u.append(s),document.body.append(u),document.body.append(d),e.persistent||d.addEventListener("click",(function(){if(!u.classList.contains("show"))return!1;A(!1,(function(){e.beforeHide&&Object.prototype.hasOwnProperty.call(window.callback,e.beforeHide)&&"function"==typeof window.callback[e.beforeHide]&&window.callback[e.beforeHide](),u.classList.remove("show")}))}),!1)}))}function k(){return(k=h(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){(function(e){return k.apply(this,arguments)})(e).then((function(t){return setTimeout((function(){null!=e.reinit&&!0!==e.reinit||window.location.reload(!0),t.classList.add("show"),A(!0)}),300)})).then((function(e){window.dialogStackTimer.push(e);var t,n=window.dialogStackTimer.length-1;for(t=0;t<n;t++)clearTimeout(window.dialogStackTimer.shift())}))}function L(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(){Array.prototype.forEach.call(document.querySelectorAll(".fluctuation"),(function(e){e.addEventListener("click",(function(e){var t,n,r,c=e.target,i=c.dataset.fromId,l=document.getElementById(i),u=a(l)?l.value:null,s=a(l)&&l.getAttribute("pattern")||null,d=c.dataset.insertTo,f={id:c.dataset.insertId,name:c.dataset.insertName,classes:c.dataset.insertClasses,callback:c.dataset.callback};if(u){if(s)if(!RegExp(s).test(u))return n=(t=l).parentNode,r=document.createElement("span"),t.style.borderColor="#bb2124",t.addEventListener("focus",(function(e){e.target.removeAttribute("style")}),!1),n.querySelector(".short-lived")||(r.classList.add("surfix","text-alert","short-lived"),r.textContent="Incorrect format of inputted",n.appendChild(r),o(1200).then((function(){r.style.opacity=0,o(200).then((function(){n.removeChild(r)}))}))),!1;l.setAttribute("value",""),l.value="",function(e,t,n){var r=document.getElementById(e);if(r){var o,a=document.createElement(["UL","OL","DL"].includes(r.nodeName)?"li":"div"),c=document.createElement("input"),i=document.createElement("button"),l=/%d/.test(n.name)?n.name.replace("%d",r.children.length+1):n.name;c.type="text",c.id="".concat(n.id,"-").concat(r.children.length+1),c.name=l,c.setAttribute("value",t),(o=c.classList).add.apply(o,L(n.classes.split(" "))),c.setAttribute("readonly",!0),i.type="button",i.id="remove-fluctuation-".concat(n.id,"-").concat(r.children.length+1),i.classList.add("button","button-secondary"),i.setAttribute("aria-label","Remove Item"),i.setAttribute("data-callback",n.callback),i.innerHTML='<i class="mdi mdi-close"></i>',i.addEventListener("click",(function(e){j(e.target)}),!1),a.appendChild(c),a.appendChild(i),r.appendChild(a),b[n.callback]()}}(d,u,f)}}),!1)})),Array.prototype.forEach.call(document.querySelectorAll('[id^="remove-fluctuation-"]'),(function(e){e.addEventListener("click",(function(e){j(e.target)}),!1)}))}function j(e){var t=e.parentNode;t.style.opacity=0,o(200).then((function(){t.parentNode.removeChild(t),b[e.dataset.callback]()}))}function I(e){return function(e){if(Array.isArray(e))return P(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||B(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}(e,t)||B(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=B(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw a}}}}function B(e,t){if(e){if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function N(){var e=window.ajaxurl||null,t=new URL(window.location.href);if(window.callback=b,Array.prototype.forEach.call(document.querySelectorAll("[data-bind=dialog]"),(function(e){e.addEventListener("click",(function(e){var t=e.target,n={title:t.dataset.title||null,content:t.dataset.content||null,foot:t.dataset.foot||null,button:t.dataset.button||null,effect:t.dataset.effect||1,size:t.dataset.dialogSize||null,reinit:t.dataset.reinit||!1,persistent:t.dataset.persistent||!1,shown:t.dataset.shown||null,hidden:t.dataset.hidden||null,beforeShow:t.dataset.beforeShow||null,beforeHide:t.dataset.beforeHide||null};n.content&&Object.prototype.hasOwnProperty.call(window.callback,n.content)&&(n.content="function"==typeof window.callback[n.content]?window.callback[n.content]():window.callback[n.content]),S(n)}),!1)})),O(),Array.prototype.forEach.call(document.querySelectorAll(".toggle-option"),(function(e){e.addEventListener("change",(function(){M()}),!1)})),Array.prototype.forEach.call(document.querySelectorAll('input[name^="wp_config["]'),(function(e){e.addEventListener("change",(function(e){document.getElementById("chk-".concat(e.target.id)).checked&&M()}),!1)})),M(),Array.prototype.forEach.call(document.querySelectorAll('input[id^="advanced-option-"]'),(function(e){e.addEventListener("change",(function(){l(document.getElementById("btn-reload-preview-htaccess"),"click")}),!1)})),Array.prototype.forEach.call(document.querySelectorAll("[data-follow-color]"),(function(e){var t=e.querySelector("input"),n=function(e){var t=e.dataset.followColor,n=e.classList,r=!(!e.querySelector("input")||!e.querySelector("input").checked);"inherit"===t?r&&!n.contains("txt-prim")?n.add("txt-prim"):n.remove("txt-prim"):""!==t&&(r&&e.style.color!==t?e.style.color=t:e.style.color="unset")};null!=t&&(t.addEventListener("change",(function(e){n(e.target.closest("label"))}),!1),n(e))})),document.getElementById("target-page-path")&&document.getElementById("target-page-path").addEventListener("change",(function(){l(document.getElementById("btn-commit-to-cleanup"),"click")}),!1),document.getElementById("rest-namespaces")&&Array.prototype.forEach.call(document.querySelectorAll('[name^="namespaces["]'),(function(e){e.addEventListener("change",(function(e){var t=e.target.id.replace("rest-namespace-",""),n=document.getElementById("http-code-".concat(t));"allow_all"===e.target.value?(n.value="200",n.setAttribute("disabled",!0)):(n.removeAttribute("disabled"),n.value="404")}),!1)})),""!==t.hash){var n=document.getElementById(t.hash.replace("#",""));n&&(n.classList.add("focus","focus-active"),n.addEventListener("mouseout",(function(e){e.target.classList.remove("focus-active")}),!1),setTimeout((function(){n.classList.remove("focus-active")}),5e3))}Array.prototype.forEach.call(document.querySelectorAll('[id^="btn-"]'),(function(t){t.addEventListener("click",(function(t){var n,r=t.target,o=document.getElementById("wpignitor-form"),a=new FormData(o),i={},l=T(a.entries());try{for(l.s();!(n=l.n()).done;){var u=C(n.value,2),s=u[0],d=u[1];if(d){if("btn-update-htaccess"!==r.id&&"htaccess"===s)continue;i[s]=d}}}catch(f){l.e(f)}finally{l.f()}switch(r.id){case"btn-move-install-path":var f=new Error,m="Close";i.method="move-install-path",p(e,i).then((function(e){var t,n;if(t="button_text",(n=e)&&Object.prototype.hasOwnProperty.call(n,t)&&(m=e.button_text),!e.result)throw f.message=e.message,f;$("move-install-path",e.message,["text-success"],e.button_text,["button-primary"],(function(){var t,n=T(e.auth_cookies);try{for(n.s();!(t=n.n()).done;){var r=t.value;document.cookie="".concat(r,"=;domain=").concat(location.hostname,";max-age=0")}}catch(e){n.e(e)}finally{n.f()}window.location.href=e.redirect_to}))})).catch((function(e){c(e),$("move-install-path","".concat(e.name,": ").concat(e.message),["text-alert"],m,["button-secondary"])}));break;case"btn-move-wp-config":i.method="move-wp-config",p(e,i).then((function(e){var t=e.result?["text-success"]:["text-alert"];$("move-wp-config",e.message,t)})).catch((function(e){c(e)}));break;case"btn-update-wp-config":document.getElementById("htaccess").setAttribute("disabled",!0),document.querySelector("input[name=method]").setAttribute("value",r.id.replace("btn-","")),Array.prototype.forEach.call(document.querySelectorAll('input[name^="wp_config["]'),(function(e){if(document.getElementById("chk-".concat(e.id)).checked){var t=null;t="checkbox"===e.type?e.checked:e.getAttribute("value"),o.appendChild((n=e.getAttribute("name"),r=t,(a=document.createElement("input")).setAttribute("type","hidden"),a.setAttribute("name",n),a.setAttribute("value",r),a))}var n,r,a;e.setAttribute("disabled",!0)})),o.submit();break;case"btn-restore-wp-config":document.getElementById("preview-wp-config").setAttribute("disabled",!0),document.getElementById("htaccess").setAttribute("disabled",!0),document.querySelector("input[name=method]").setAttribute("value",r.id.replace("btn-","")),o.submit();break;case"btn-reload-preview-htaccess":for(var b in i.method="reload-preview-htaccess",i)Object.hasOwnProperty.call(i,b)&&/^(add_config_fulltext|optimize_htaccess|without_subdir|wp_config\[.*\])$/.test(b)&&delete i[b];p(e,i).then((function(e){e.result&&(document.getElementById("htaccess").textContent=e.htaccess)})).catch((function(e){c(e)}));break;case"btn-update-htaccess":document.getElementById("preview-wp-config").setAttribute("disabled",!0),document.querySelector("input[name=method]").setAttribute("value",r.id.replace("btn-","")),o.submit();break;case"btn-restore-htaccess":case"btn-clear-all-settings":document.getElementById("preview-wp-config").setAttribute("disabled",!0),document.getElementById("htaccess").setAttribute("disabled",!0),document.querySelector("input[name=method]").setAttribute("value",r.id.replace("btn-","")),o.submit();break;case"btn-commit-to-cleanup":i.method="cleanup-html",Array.prototype.forEach.call(document.querySelectorAll('[name^="cleanup["]'),(function(e){i[e.getAttribute("name")]=e.checked})),p(e,i).then((function(e){e.result&&(document.getElementById("html").innerHTML=e.html)})).catch((function(e){c(e)}));break;case"btn-save-rest-behavior":document.querySelector("input[name=method]").setAttribute("value","rest-behavior"),o.submit();break;case"btn-commit-login-settings":if(1==parseInt(i.new_login_on)&&!i.new_login_path){var y=document.getElementById("new-login-path"),h={title:'<label class="fw600 text-alert myh">'.concat(y.dataset.errorTitle,"</label>"),content:'<div class="text-alert align-center">'.concat(y.dataset.blankError,"</div>"),reinit:!1,size:"medium"};return y.style.borderColor="#bb2124",y.addEventListener("focus",(function(e){e.target.removeAttribute("style")}),!1),S(h),t.preventDefault(),!1}document.querySelector("input[name=method]").setAttribute("value","login-setting"),o.submit();break;case"btn-unlock-core-updater":document.querySelector("input[name=method]").setAttribute("value",r.id.replace("btn-","")),o.submit();break;default:return!1}}),!1)}))}function $(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:["button-secondary"],c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,i=document.getElementById(e).closest(".dialog-body"),l=document.createElement("div"),u=document.createElement("p"),s=document.createElement("div"),d=document.createElement("button");(u.classList.add("mxa","align-center"),r.length>0)&&(t=u.classList).add.apply(t,I(r));if(u.innerHTML=n,l.appendChild(u),o){var f;if(d.setAttribute("type","button"),d.classList.add("button","mxa"),a.length>0)(f=d.classList).add.apply(f,I(a));d.textContent=o,c&&"function"==typeof c?d.addEventListener("click",c,!1):d.addEventListener("click",(function(){document.querySelector(".wpignitor-dialog").classList.remove("show")}),!1),s.classList.add("mt1","align-center"),s.appendChild(d),l.appendChild(s)}i.innerHTML="",i.appendChild(l)}function M(){var e=document.getElementById("preview-wp-config"),t=["# BEGIN WP Ignitor"];e&&(Array.prototype.forEach.call(document.querySelectorAll(".toggle-option"),(function(e){if(e.checked){var n=e.id.replace("chk-",""),r=document.getElementById(n),o=n.toUpperCase(),a=null;if("checkbox"===r.type?a=r.checked?"true":"false":"number"===r.type?a=["wp_memory_limit","wp_max_memory_limit"].includes(n)?"'".concat(r.value,"M'"):parseInt(r.value,10):(a="'".concat(r.value,"'"),r.dataset.pair&&(a=a.replace(/\\/g,"/").replace(/\/$/,""))),t.push("defined( '".concat(o,"' ) or define( '").concat(o,"', ").concat(a," );")),r.dataset.pair){var c=a.replace(r.dataset.docroot,"".concat(location.origin));t.push("defined( '".concat(r.dataset.pair,"' ) or define( '").concat(r.dataset.pair,"', ").concat(c," );"))}}})),t.push("# END WP Ignitor"),e.textContent="",e.textContent=t.join("\n"),e.setAttribute("rows",Math.max(t.length,3)))}window.dialogStackTimer=[],"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?N():document.addEventListener?document.addEventListener("DOMContentLoaded",N,!1):window.onload=N}]);