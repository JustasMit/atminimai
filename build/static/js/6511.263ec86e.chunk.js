/*! For license information please see 6511.263ec86e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkvilniausdnr=self.webpackChunkvilniausdnr||[]).push([[6511],{26511:function(t,e,n){n.r(e),n.d(e,{CalciteNotice:function(){return K},defineCustomElement:function(){return J}});var i=n(15861),a=n(4942),o=n(15671),r=n(43144),c=n(97326),s=n(60136),l=n(29388),m=n(61120),u=n(89611);var f=n(78814);function p(t,e,n){return p=(0,f.Z)()?Reflect.construct:function(t,e,n){var i=[null];i.push.apply(i,e);var a=new(Function.bind.apply(t,i));return n&&(0,u.Z)(a,n.prototype),a},p.apply(null,arguments)}function h(t){var e="function"===typeof Map?new Map:void 0;return h=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return p(t,arguments,(0,m.Z)(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),(0,u.Z)(i,t)},h(t)}var d,g=n(87757),b=n.n(g),k=n(51554);!function(t){t.green="checkCircle",t.yellow="exclamationMarkTriangle",t.red="exclamationMarkTriangle",t.blue="lightbulb"}(d||(d={}));var v=n(93433),w="calcite--rtl";function y(t){var e=z(t,"[".concat("dir","]"));return e?e.getAttribute("dir"):"ltr"}function x(t){return t.getRootNode()}function D(t){return t.host||null}function z(t,e){return function t(n){return n?n.closest(e)||t(D(x(n))):null}(t)}function Z(t,e,n){var i='[slot="'.concat(e,'"]');return(null===n||void 0===n?void 0:n.all)?function(t,e,n){var i=Array.from(t.querySelectorAll(e));i=n&&!1===n.direct?i:i.filter((function(e){return e.parentElement===t}));var a=null===n||void 0===n?void 0:n.selector;return a?i.map((function(t){return Array.from(t.querySelectorAll(a))})).reduce((function(t,e){return[].concat((0,v.Z)(t),(0,v.Z)(e))}),[]).filter((function(t){return!!t})):i}(t,i,n):function(t,e,n){var i=t.querySelector(e);i=n&&!1===n.direct||(null===i||void 0===i?void 0:i.parentElement)===t?i:null;var a=null===n||void 0===n?void 0:n.selector;return a?i.querySelector(a):i}(t,i,n)}function _(t,e,n){return"string"===typeof e&&""!==e?e:""===e?t[n]:void 0}function C(t,e,n){var i=function(t){return"intersection"===t?IntersectionObserver:"mutation"===t?MutationObserver:ResizeObserver}(t);return k.Z5.isBrowser?new i(e,n):void 0}var E="flip-rtl",I={},O={},q={s:16,m:24,l:32};function L(t){return A.apply(this,arguments)}function A(){return(A=(0,i.Z)(b().mark((function t(e){var n,i,a,o,r,c,s,l;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.icon,i=e.scale,a=q[i],o=M(n),r="F"===o.charAt(o.length-1),c=r?o.substring(0,o.length-1):o,s="".concat(c).concat(a).concat(r?"F":""),!I[s]){t.next=8;break}return t.abrupt("return",I[s]);case 8:return O[s]||(O[s]=fetch((0,k.K3)("./assets/calcite-icon/".concat(s,".json"))).then((function(t){return t.json()})).catch((function(){return console.error('"'.concat(s,'" is not a valid calcite-ui-icon name')),""}))),t.next=11,O[s];case 11:return l=t.sent,I[s]=l,t.abrupt("return",l);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function M(t){var e=!isNaN(Number(t.charAt(0))),n=t.split("-");return 1===n.length?e?"i".concat(t):t:n.map((function(t,n){return 0===n?e?"i".concat(t.toUpperCase()):t:t.charAt(0).toUpperCase()+t.slice(1)})).join("")}var N=function(t){(0,s.Z)(n,t);var e=(0,l.Z)(n);function n(){var t;return(0,o.Z)(this,n),(t=e.call(this)).__registerHost(),t.__attachShadow(),t.icon=null,t.flipRtl=!1,t.scale="m",t.visible=!1,t}return(0,r.Z)(n,[{key:"connectedCallback",value:function(){var t=this;this.waitUntilVisible((function(){t.visible=!0,t.loadIconPathData()}))}},{key:"disconnectedCallback",value:function(){var t;null===(t=this.intersectionObserver)||void 0===t||t.disconnect(),this.intersectionObserver=null}},{key:"componentWillLoad",value:function(){var t=(0,i.Z)(b().mark((function t(){return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.loadIconPathData();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e=this.el,n=this.flipRtl,i=this.pathData,o=this.scale,r=this.textLabel,c=y(e),s=q[o],l=!!r,m=[].concat(i||"");return(0,k.h)(k.AA,{"aria-hidden":(!l).toString(),"aria-label":l?r:null,role:l?"img":null},(0,k.h)("svg",{class:(t={},(0,a.Z)(t,E,"rtl"===c&&n),(0,a.Z)(t,"svg",!0),t),fill:"currentColor",height:"100%",viewBox:"0 0 ".concat(s," ").concat(s),width:"100%",xmlns:"http://www.w3.org/2000/svg"},m.map((function(t){return"string"===typeof t?(0,k.h)("path",{d:t}):(0,k.h)("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})}))))}},{key:"loadIconPathData",value:function(){var t=(0,i.Z)(b().mark((function t(){var e,n,i;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.icon,n=this.scale,i=this.visible,k.Z5.isBrowser&&e&&i){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,L({icon:e,scale:n});case 5:this.pathData=t.sent;case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"waitUntilVisible",value:function(t){var e=this;this.intersectionObserver=C("intersection",(function(n){n.forEach((function(n){n.isIntersecting&&(e.intersectionObserver.disconnect(),e.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}},{key:"el",get:function(){return this}}],[{key:"assetsDirs",get:function(){return["assets"]}},{key:"watchers",get:function(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}},{key:"style",get:function(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex}:host([scale=s]){width:1rem;height:1rem;min-width:1rem;min-height:1rem}:host([scale=m]){width:1.5rem;height:1.5rem;min-width:1.5rem;min-height:1.5rem}:host([scale=l]){width:2rem;height:2rem;min-width:2rem;min-height:2rem}.flip-rtl{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}"}}]),n}(h(HTMLElement));function S(){["calcite-icon"].forEach((function(t){if("calcite-icon"===t)customElements.get(t)||customElements.define(t,N)}))}N=(0,k.GH)(N,[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]),S();var R="Close",B="title",F="message",H="link",P="actions-end",T="actions-end",j="notice-close",U="container",G="notice-content",V="notice-icon",W=function(t){(0,s.Z)(n,t);var e=(0,l.Z)(n);function n(){var t;return(0,o.Z)(this,n),(t=e.call(this)).__registerHost(),t.__attachShadow(),t.calciteNoticeClose=(0,k.yM)((0,c.Z)(t),"calciteNoticeClose",7),t.calciteNoticeOpen=(0,k.yM)((0,c.Z)(t),"calciteNoticeOpen",7),t.active=!1,t.color="blue",t.dismissible=!1,t.intlClose=R,t.scale="m",t.width="auto",t.close=function(){t.active=!1,t.calciteNoticeClose.emit()},t}return(0,r.Z)(n,[{key:"updateRequestedIcon",value:function(){this.requestedIcon=_(d,this.icon,this.color)}},{key:"componentWillLoad",value:function(){this.requestedIcon=_(d,this.icon,this.color)}},{key:"componentDidLoad",value:function(){this.noticeLinkEl=this.el.querySelector("calcite-link")}},{key:"render",value:function(){var t,e=this,n=this.el,i=y(n),o=(0,k.h)("button",{"aria-label":this.intlClose,class:j,onClick:this.close,ref:function(t){return e.closeButton=t}},(0,k.h)("calcite-icon",{icon:"x",scale:"l"===this.scale?"m":"s"})),r=Z(n,P);return(0,k.h)("div",{class:(t={},(0,a.Z)(t,U,!0),(0,a.Z)(t,w,"rtl"===i),t)},this.requestedIcon?(0,k.h)("div",{class:V},(0,k.h)("calcite-icon",{icon:this.requestedIcon,scale:"l"===this.scale?"m":"s"})):null,(0,k.h)("div",{class:G},(0,k.h)("slot",{name:B}),(0,k.h)("slot",{name:F}),(0,k.h)("slot",{name:H})),r?(0,k.h)("div",{class:T},(0,k.h)("slot",{name:P})):null,this.dismissible?o:null)}},{key:"setFocus",value:function(){var t=(0,i.Z)(b().mark((function t(){return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.closeButton||this.noticeLinkEl){t.next=2;break}return t.abrupt("return");case 2:this.noticeLinkEl?this.noticeLinkEl.setFocus():this.closeButton&&this.closeButton.focus();case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"el",get:function(){return this}}],[{key:"watchers",get:function(){return{icon:["updateRequestedIcon"],color:["updateRequestedIcon"]}}},{key:"style",get:function(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){font-size:var(--calcite-font-size--1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){font-size:var(--calcite-font-size--2);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=s]) ::slotted(calcite-link){font-size:var(--calcite-font-size--2);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){font-size:var(--calcite-font-size--1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=m]) ::slotted(calcite-link){font-size:var(--calcite-font-size--1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){font-size:var(--calcite-font-size-1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){font-size:var(--calcite-font-size-0);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=l]) ::slotted(calcite-link){font-size:var(--calcite-font-size-0);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{display:none;margin-left:auto;margin-right:auto;max-width:100%;-ms-flex-align:center;align-items:center;width:var(--calcite-notice-width)}.container{display:none;text-align:left;margin-top:0;margin-bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;opacity:0;pointer-events:none;background-color:var(--calcite-ui-foreground-1);max-height:0;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;border-left:0px solid;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent}.notice-close{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.notice-close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host{display:-ms-flexbox;display:flex}:host([active]) .container{display:-ms-flexbox;display:flex;-webkit-box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);-ms-flex-align:center;align-items:center;opacity:1;max-height:100%;border-width:2px;pointer-events:auto}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){display:inline;margin:0;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);margin-right:var(--calcite-notice-spacing-token-small)}.calcite--rtl slot[name=message]::slotted(*),.calcite--rtl *::slotted([slot=message]){margin-right:0;margin-left:var(--calcite-notice-spacing-token-small)}.notice-content{-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;overflow-wrap:break-word;-ms-flex:1 1 0px;flex:1 1 0;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) 0}.notice-content:first-of-type:not(:only-child){padding-left:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large)}.notice-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out}.notice-close{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-item-align:stretch;align-self:stretch;background-color:transparent;border-style:none;outline:2px solid transparent;outline-offset:2px;cursor:pointer;color:var(--calcite-ui-text-3);-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.notice-close:active{background-color:var(--calcite-ui-foreground-3)}.actions-end{display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch}.calcite--rtl{text-align:right;border-left:none;border-right:0px solid}.calcite--rtl .notice-content{padding:var(--calcite-notice-spacing-token-small) 0 var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small)}.calcite--rtl .notice-content:first-of-type:not(:only-child){padding-right:var(--calcite-notice-spacing-token-large)}.calcite--rtl .notice-content:only-of-type{padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large)}:host([color=blue]) .container{border-color:var(--calcite-ui-brand)}:host([color=blue]) .container .notice-icon{color:var(--calcite-ui-brand)}:host([color=red]) .container{border-color:var(--calcite-ui-danger)}:host([color=red]) .container .notice-icon{color:var(--calcite-ui-danger)}:host([color=yellow]) .container{border-color:var(--calcite-ui-warning)}:host([color=yellow]) .container .notice-icon{color:var(--calcite-ui-warning)}:host([color=green]) .container{border-color:var(--calcite-ui-success)}:host([color=green]) .container .notice-icon{color:var(--calcite-ui-success)}"}}]),n}(h(HTMLElement));function X(){["calcite-notice","calcite-icon"].forEach((function(t){switch(t){case"calcite-notice":customElements.get(t)||customElements.define(t,W);break;case"calcite-icon":customElements.get(t)||S()}}))}W=(0,k.GH)(W,[1,"calcite-notice",{active:[1540],color:[513],dismissible:[516],icon:[520],intlClose:[1,"intl-close"],scale:[513],width:[513],setFocus:[64]}]),X();var K=W,J=X}}]);
//# sourceMappingURL=6511.263ec86e.chunk.js.map