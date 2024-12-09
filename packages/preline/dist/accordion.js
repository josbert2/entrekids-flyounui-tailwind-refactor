!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(self,(()=>(()=>{"use strict";var t={740:function(t,e,n){
/*
 * HSAccordion
 * @version: 2.6.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
var o,i=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)},l=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=n(292),c=function(t){function e(e,n,o){var i=t.call(this,e,n,o)||this;return i.toggle=i.el.querySelector(".hs-accordion-toggle")||null,i.content=i.el.querySelector(".hs-accordion-content")||null,i.update(),i.isToggleStopPropagated=(0,s.stringToBoolean)((0,s.getClassProperty)(i.toggle,"--stop-propagation","false")||"false"),i.toggle&&i.content&&i.init(),i}return i(e,t),e.prototype.init=function(){var t=this;this.createCollection(window.$hsAccordionCollection,this),this.onToggleClickListener=function(e){return t.toggleClick(e)},this.toggle.addEventListener("click",this.onToggleClickListener)},e.prototype.toggleClick=function(t){this.isToggleStopPropagated&&t.stopPropagation(),this.el.classList.contains("active")?this.hide():this.show()},e.prototype.show=function(){var t,e=this;this.group&&!this.isAlwaysOpened&&this.group.querySelector(":scope > .hs-accordion.active")&&this.group.querySelector(":scope > .hs-accordion.active")!==this.el&&window.$hsAccordionCollection.find((function(t){return t.element.el===e.group.querySelector(":scope > .hs-accordion.active")})).element.hide();if(this.el.classList.contains("active"))return!1;this.el.classList.add("active"),(null===(t=null==this?void 0:this.toggle)||void 0===t?void 0:t.ariaExpanded)&&(this.toggle.ariaExpanded="true"),this.content.style.display="block",this.content.style.height="0",setTimeout((function(){e.content.style.height="".concat(e.content.scrollHeight,"px"),(0,s.afterTransition)(e.content,(function(){e.content.style.display="block",e.content.style.height="",e.fireEvent("open",e.el),(0,s.dispatch)("open.hs.accordion",e.el,e.el)}))}))},e.prototype.hide=function(){var t,e=this;if(!this.el.classList.contains("active"))return!1;this.el.classList.remove("active"),(null===(t=null==this?void 0:this.toggle)||void 0===t?void 0:t.ariaExpanded)&&(this.toggle.ariaExpanded="false"),this.content.style.height="".concat(this.content.scrollHeight,"px"),setTimeout((function(){e.content.style.height="0"})),(0,s.afterTransition)(this.content,(function(){e.content.style.display="",e.content.style.height="0",e.fireEvent("close",e.el),(0,s.dispatch)("close.hs.accordion",e.el,e.el)}))},e.prototype.update=function(){var t=this;if(this.group=this.el.closest(".hs-accordion-group")||null,!this.group)return!1;this.isAlwaysOpened=this.group.hasAttribute("data-hs-accordion-always-open")||!1,window.$hsAccordionCollection.map((function(e){return e.id===t.el.id&&(e.element.group=t.group,e.element.isAlwaysOpened=t.isAlwaysOpened),e}))},e.prototype.destroy=function(){var t,n=this;(null===(t=null==e?void 0:e.selectable)||void 0===t?void 0:t.length)&&e.selectable.forEach((function(t){t.listeners.forEach((function(t){var e=t.el,n=t.listener;e.removeEventListener("click",n)}))})),this.onToggleClickListener&&this.toggle.removeEventListener("click",this.onToggleClickListener),this.toggle=null,this.content=null,this.group=null,this.onToggleClickListener=null,window.$hsAccordionCollection=window.$hsAccordionCollection.filter((function(t){return t.element.el!==n.el}))},e.getInstance=function(t,e){var n=window.$hsAccordionCollection.find((function(e){return e.element.el===("string"==typeof t?document.querySelector(t):t)}));return n?e?n:n.element.el:null},e.show=function(t){var e=window.$hsAccordionCollection.find((function(e){return e.element.el===("string"==typeof t?document.querySelector(t):t)}));e&&"block"!==e.element.content.style.display&&e.element.show()},e.hide=function(t){var e=window.$hsAccordionCollection.find((function(e){return e.element.el===("string"==typeof t?document.querySelector(t):t)}));e&&"block"===e.element.content.style.display&&e.element.hide()},e.autoInit=function(){window.$hsAccordionCollection||(window.$hsAccordionCollection=[]),window.$hsAccordionCollection&&(window.$hsAccordionCollection=window.$hsAccordionCollection.filter((function(t){var e=t.element;return document.contains(e.el)}))),document.querySelectorAll(".hs-accordion:not(.--prevent-on-load-init)").forEach((function(t){window.$hsAccordionCollection.find((function(e){var n;return(null===(n=null==e?void 0:e.element)||void 0===n?void 0:n.el)===t}))||new e(t)}))},e.treeView=function(){var t=this;if(!document.querySelectorAll(".hs-accordion-treeview-root").length)return!1;this.selectable=[],document.querySelectorAll(".hs-accordion-treeview-root").forEach((function(e){var n=null==e?void 0:e.getAttribute("data-hs-accordion-options"),o=n?JSON.parse(n):{};t.selectable.push({el:e,options:r({},o),listeners:[]})})),this.selectable.length&&this.selectable.forEach((function(e){e.el.querySelectorAll(".hs-accordion-selectable").forEach((function(n){var o=function(o){return t.onSelectableClick(o,e,n)};n.addEventListener("click",o),e.listeners.push({el:n,listener:o})}))}))},e.toggleSelected=function(t,e){e.classList.contains("selected")?e.classList.remove("selected"):(t.el.querySelectorAll(".hs-accordion-selectable").forEach((function(t){return t.classList.remove("selected")})),e.classList.add("selected"))},e.on=function(t,e,n){var o=window.$hsAccordionCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));o&&(o.element.events[t]=n)},e.onSelectableClick=function(t,n,o){t.stopPropagation(),e.toggleSelected(n,o)},e}(l(n(961)).default);window.addEventListener("load",(function(){c.autoInit(),document.querySelectorAll(".hs-accordion-treeview-root").length&&c.treeView()})),"undefined"!=typeof window&&(window.HSAccordion=c),e.default=c},961:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e,n){this.el=t,this.options=e,this.events=n,this.el=t,this.options=e,this.events={}}return t.prototype.createCollection=function(t,e){var n;t.push({id:(null===(n=null==e?void 0:e.el)||void 0===n?void 0:n.id)||t.length+1,element:e})},t.prototype.fireEvent=function(t,e){if(void 0===e&&(e=null),this.events.hasOwnProperty(t))return this.events[t](e)},t.prototype.on=function(t,e){this.events[t]=e},t}();e.default=n},292:function(t,e){
/*
 * @version: 2.6.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
var n=this;Object.defineProperty(e,"__esModule",{value:!0}),e.menuSearchHistory=e.classToClassList=e.htmlToElement=e.afterTransition=e.dispatch=e.debounce=e.isJson=e.isDirectChild=e.isFormElement=e.isParentOrElementHidden=e.isEnoughSpace=e.isIpadOS=e.isIOS=e.getZIndex=e.getClassPropertyAlt=e.getClassProperty=e.stringToBoolean=void 0,e.getHighestZIndex=function(t){var e=Number.NEGATIVE_INFINITY;return t.forEach((function(t){var n=o(t);"auto"!==n&&(n=parseInt(n,10))>e&&(e=n)})),e};e.stringToBoolean=function(t){return"true"===t};e.getClassProperty=function(t,e,n){return void 0===n&&(n=""),(window.getComputedStyle(t).getPropertyValue(e)||n).replace(" ","")};e.getClassPropertyAlt=function(t,e,n){void 0===n&&(n="");var o="";return t.classList.forEach((function(t){t.includes(e)&&(o=t)})),o.match(/:(.*)]/)?o.match(/:(.*)]/)[1]:n};var o=function(t){return window.getComputedStyle(t).getPropertyValue("z-index")};e.getZIndex=o;e.isIOS=function(){return!!/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)};e.isIpadOS=function(){return navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)};e.isDirectChild=function(t,e){for(var n=t.children,o=0;o<n.length;o++)if(n[o]===e)return!0;return!1};e.isEnoughSpace=function(t,e,n,o,i){void 0===n&&(n="auto"),void 0===o&&(o=10),void 0===i&&(i=null);var r=e.getBoundingClientRect(),l=i?i.getBoundingClientRect():null,s=window.innerHeight,c=l?r.top-l.top:r.top,a=(i?l.bottom:s)-r.bottom,u=t.clientHeight+o;return"bottom"===n?a>=u:"top"===n?c>=u:c>=u||a>=u};e.isFormElement=function(t){return t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement};var i=function(t){return!!t&&("none"===window.getComputedStyle(t).display||i(t.parentElement))};e.isParentOrElementHidden=i;e.isJson=function(t){if("string"!=typeof t)return!1;var e=t.trim()[0],n=t.trim().slice(-1);if("{"===e&&"}"===n||"["===e&&"]"===n)try{return JSON.parse(t),!0}catch(t){return!1}return!1};e.debounce=function(t,e){var o;return void 0===e&&(e=200),function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];clearTimeout(o),o=setTimeout((function(){t.apply(n,i)}),e)}};e.dispatch=function(t,e,n){void 0===n&&(n=null);var o=new CustomEvent(t,{detail:{payload:n},bubbles:!0,cancelable:!0,composed:!1});e.dispatchEvent(o)};e.afterTransition=function(t,e){var n=function(){e(),t.removeEventListener("transitionend",n,!0)},o=window.getComputedStyle(t),i=o.getPropertyValue("transition-duration");"none"!==o.getPropertyValue("transition-property")&&parseFloat(i)>0?t.addEventListener("transitionend",n,!0):e()};e.htmlToElement=function(t){var e=document.createElement("template");return t=t.trim(),e.innerHTML=t,e.content.firstChild};e.classToClassList=function(t,e,n,o){void 0===n&&(n=" "),void 0===o&&(o="add"),t.split(n).forEach((function(t){return"add"===o?e.classList.add(t):e.classList.remove(t)}))};e.menuSearchHistory={historyIndex:-1,addHistory:function(t){this.historyIndex=t},existsInHistory:function(t){return t>this.historyIndex},clearHistory:function(){this.historyIndex=-1}}}},e={};var n=function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}(740);return n})()));