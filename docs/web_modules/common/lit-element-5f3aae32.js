import{i as W,m as k,T as A,r as N,N as L,a as H}from"./lit-html-4b044af4.js";/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const g=133;function R(e,t){const{element:{content:s},parts:r}=e,o=document.createTreeWalker(s,g,null,!1);let n=u(r),a=r[n],i=-1,d=0;const l=[];let p=null;for(;o.nextNode();){i++;const h=o.currentNode;for(h.previousSibling===p&&(p=null),t.has(h)&&(l.push(h),p===null&&(p=h)),p!==null&&d++;a!==void 0&&a.index===i;)a.index=p!==null?-1:a.index-d,n=u(r,n),a=r[n]}l.forEach(h=>h.parentNode.removeChild(h))}const G=e=>{let t=e.nodeType===11?0:1;const s=document.createTreeWalker(e,g,null,!1);for(;s.nextNode();)t++;return t},u=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const r=e[s];if(W(r))return s}return-1};function V(e,t,s=null){const{element:{content:r},parts:o}=e;if(s==null){r.appendChild(t);return}const n=document.createTreeWalker(r,g,null,!1);let a=u(o),i=0,d=-1;for(;n.nextNode();){d++;const l=n.currentNode;for(l===s&&(i=G(t),s.parentNode.insertBefore(t,s));a!==-1&&o[a].index===d;){if(i>0){for(;a!==-1;)o[a].index+=i,a=u(o,a);return}a=u(o,a)}}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function J(e){let t=m.get(e.type);t===void 0&&(t={stringsArray:new WeakMap,keyString:new Map},m.set(e.type,t));let s=t.stringsArray.get(e.strings);if(s!==void 0)return s;const r=e.strings.join(k);return s=t.keyString.get(r),s===void 0&&(s=new A(e,e.getTemplateElement()),t.keyString.set(r,s)),t.stringsArray.set(e.strings,s),s}const m=new Map;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const c=new WeakMap,$=(e,t,s)=>{let r=c.get(t);r===void 0&&(N(t,t.firstChild),c.set(t,r=new L(Object.assign({templateFactory:J},s))),r.appendInto(t)),r.setValue(e),r.commit()};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const O=(e,t)=>`${e}--${t}`;let y=!0;typeof window.ShadyCSS=="undefined"?y=!1:typeof window.ShadyCSS.prepareTemplateDom=="undefined"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),y=!1);const K=e=>t=>{const s=O(t.type,e);let r=m.get(s);r===void 0&&(r={stringsArray:new WeakMap,keyString:new Map},m.set(s,r));let o=r.stringsArray.get(t.strings);if(o!==void 0)return o;const n=t.strings.join(k);if(o=r.keyString.get(n),o===void 0){const a=t.getTemplateElement();y&&window.ShadyCSS.prepareTemplateDom(a,e),o=new A(t,a),r.keyString.set(n,o)}return r.stringsArray.set(t.strings,o),o},Q=["html","svg"],Y=e=>{Q.forEach(t=>{const s=m.get(O(t,e));s!==void 0&&s.keyString.forEach(r=>{const{element:{content:o}}=r,n=new Set;Array.from(o.querySelectorAll("style")).forEach(a=>{n.add(a)}),R(r,n)})})},I=new Set,X=(e,t,s)=>{I.add(e);const r=s?s.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:n}=o;if(n===0){window.ShadyCSS.prepareTemplateStyles(r,e);return}const a=document.createElement("style");for(let l=0;l<n;l++){const p=o[l];p.parentNode.removeChild(p),a.textContent+=p.textContent}Y(e);const i=r.content;s?V(s,a,i.firstChild):i.insertBefore(a,i.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const d=i.querySelector("style");if(window.ShadyCSS.nativeShadow&&d!==null)t.insertBefore(d.cloneNode(!0),t.firstChild);else if(s){i.insertBefore(a,i.firstChild);const l=new Set;l.add(a),R(s,l)}},Z=(e,t,s)=>{if(!s||typeof s!="object"||!s.scopeName)throw new Error("The `scopeName` option is required.");const r=s.scopeName,o=c.has(t),n=y&&t.nodeType===11&&!!t.host,a=n&&!I.has(r),i=a?document.createDocumentFragment():t;if($(e,i,Object.assign({templateFactory:K(r)},s)),a){const d=c.get(i);c.delete(i);const l=d.value instanceof H?d.value.template:void 0;X(r,i,l),N(t,t.firstChild),t.appendChild(i),c.set(t,d)}!o&&n&&window.ShadyCSS.styleElement(t.host)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var U;window.JSCompiler_renameProperty=(e,t)=>e;const b={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return e!==null;case Number:return e===null?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},M=(e,t)=>t!==e&&(t===t||e===e),S={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:M},w=1,v=1<<2,T=1<<3,C=1<<4,P="finalized";class D extends HTMLElement{constructor(){super();this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const r=this._attributeNameForProperty(s,t);r!==void 0&&(this._attributeToPropertyMap.set(r,s),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((t,s)=>this._classProperties.set(s,t))}}static createProperty(e,t=S){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s=typeof e=="symbol"?Symbol():`__${e}`,r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(r){const o=this[e];this[t]=r,this.requestUpdateInternal(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||S}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(P)||e.finalize(),this[P]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(t):[]];for(const r of s)this.createProperty(r,t[r])}}static _attributeNameForProperty(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=M){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,r=t.converter||b,o=typeof r=="function"?r:r.fromAttribute;return o?o(e,s):e}static _propertyValueToAttribute(e,t){if(t.reflect===void 0)return;const s=t.type,r=t.converter,o=r&&r.toAttribute||b.toAttribute;return o(e,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const s=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,s)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=S){const r=this.constructor,o=r._attributeNameForProperty(e,s);if(o!==void 0){const n=r._propertyValueToAttribute(t,s);if(n===void 0)return;this._updateState=this._updateState|T,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._updateState=this._updateState&~T}}_attributeToProperty(e,t){if(this._updateState&T)return;const s=this.constructor,r=s._attributeToPropertyMap.get(e);if(r!==void 0){const o=s.getPropertyOptions(r);this._updateState=this._updateState|C,this[r]=s._propertyValueFromAttribute(t,o),this._updateState=this._updateState&~C}}requestUpdateInternal(e,t,s){let r=!0;if(e!==void 0){const o=this.constructor;s=s||o.getPropertyOptions(e),o._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),s.reflect===!0&&!(this._updateState&C)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|v;try{await this._updatePromise}catch(t){}const e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&v}get hasUpdated(){return this._updateState&w}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(s){throw e=!1,this._markUpdated(),s}e&&(this._updateState&w||(this._updateState=this._updateState|w,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~v}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,s)=>this._propertyToAttribute(s,this[s],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}U=P,D[U]=!0;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ee=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(s){s.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}},te=(e,t,s)=>{t.constructor.createProperty(s,e)};function se(e){return(t,s)=>s!==void 0?te(e,t,s):ee(e,t)}function re(e,t){return(s,r)=>{const o={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};if(t){const n=typeof r=="symbol"?Symbol():`__${r}`;o.get=function(){return this[n]===void 0&&(this[n]=this.renderRoot.querySelector(e)),this[n]}}return r!==void 0?j(o,s,r):q(o,s)}}const j=(e,t,s)=>{Object.defineProperty(t,s,e)},q=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),z=Element.prototype,oe=z.msMatchesSelector||z.webkitMatchesSelector;function ne(e="",t=!1,s=""){return(r,o)=>{const n={get(){const a=`slot${e?`[name=${e}]`:":not([name])"}`,i=this.renderRoot.querySelector(a);let d=i&&i.assignedNodes({flatten:t});return d&&s&&(d=d.filter(l=>l.nodeType===Node.ELEMENT_NODE&&l.matches?l.matches(s):oe.call(l,s))),d},enumerable:!0,configurable:!0};return o!==void 0?j(n,r,o):q(n,r)}}/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const f=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_=Symbol();class E{constructor(e,t){if(t!==_)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(f?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const B=e=>new E(String(e),_),ae=e=>{if(e instanceof E)return e.cssText;if(typeof e=="number")return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},ie=(e,...t)=>{const s=t.reduce((r,o,n)=>r+ae(o)+e[n+1],e[0]);return new E(s,_)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const F={};class x extends D{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(o,n)=>o.reduceRight((a,i)=>Array.isArray(i)?t(i,a):(a.add(i),a),n),s=t(e,new Set),r=[];s.forEach(o=>r.unshift(o)),this._styles=r}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!f){const s=Array.prototype.slice.call(t.cssRules).reduce((r,o)=>r+o.cssText,"");return B(s)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;if(e.length===0)return;window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(t=>t.cssText),this.localName):f?this.renderRoot.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==F&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(s=>{const r=document.createElement("style");r.textContent=s.cssText,this.renderRoot.appendChild(r)}))}render(){return F}}x.finalized=!0,x.render=Z;export{x as L,ne as a,ie as c,se as p,re as q,f as s,B as u};
