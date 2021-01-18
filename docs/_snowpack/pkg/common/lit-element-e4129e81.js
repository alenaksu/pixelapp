import{i as $,m as U,T as R,r as N,N as B,a as D}from"./lit-html-6ec30b87.js";/**
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
 */const _=133;function x(r,e){const{element:{content:t},parts:s}=r,n=document.createTreeWalker(t,_,null,!1);let i=u(s),o=s[i],a=-1,c=0;const d=[];let l=null;for(;n.nextNode();){a++;const p=n.currentNode;for(p.previousSibling===l&&(l=null),e.has(p)&&(d.push(p),l===null&&(l=p)),l!==null&&c++;o!==void 0&&o.index===a;)o.index=l!==null?-1:o.index-c,i=u(s,i),o=s[i]}d.forEach(p=>p.parentNode.removeChild(p))}const J=r=>{let e=r.nodeType===11?0:1;const t=document.createTreeWalker(r,_,null,!1);for(;t.nextNode();)e++;return e},u=(r,e=-1)=>{for(let t=e+1;t<r.length;t++){const s=r[t];if($(s))return t}return-1};function W(r,e,t=null){const{element:{content:s},parts:n}=r;if(t==null){s.appendChild(e);return}const i=document.createTreeWalker(s,_,null,!1);let o=u(n),a=0,c=-1;for(;i.nextNode();)for(c++,i.currentNode===t&&(a=J(e),t.parentNode.insertBefore(e,t));o!==-1&&n[o].index===c;){if(a>0){for(;o!==-1;)n[o].index+=a,o=u(n,o);return}o=u(n,o)}}/**
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
 */function H(r){let e=f.get(r.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},f.set(r.type,e));let t=e.stringsArray.get(r.strings);if(t!==void 0)return t;const s=r.strings.join(U);return t=e.keyString.get(s),t===void 0&&(t=new R(r,r.getTemplateElement()),e.keyString.set(s,t)),e.stringsArray.set(r.strings,t),t}const f=new Map;/**
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
 */const h=new WeakMap,K=(r,e,t)=>{let s=h.get(e);s===void 0&&(N(e,e.firstChild),h.set(e,s=new B(Object.assign({templateFactory:H},t))),s.appendInto(e)),s.setValue(r),s.commit()};/**
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
 */const O=(r,e)=>`${r}--${e}`;let y=!0;typeof window.ShadyCSS=="undefined"?y=!1:typeof window.ShadyCSS.prepareTemplateDom=="undefined"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),y=!1);const Q=r=>e=>{const t=O(e.type,r);let s=f.get(t);s===void 0&&(s={stringsArray:new WeakMap,keyString:new Map},f.set(t,s));let n=s.stringsArray.get(e.strings);if(n!==void 0)return n;const i=e.strings.join(U);if(n=s.keyString.get(i),n===void 0){const o=e.getTemplateElement();y&&window.ShadyCSS.prepareTemplateDom(o,r),n=new R(e,o),s.keyString.set(i,n)}return s.stringsArray.set(e.strings,n),n},G=["html","svg"],Y=r=>{G.forEach(e=>{const t=f.get(O(e,r));t!==void 0&&t.keyString.forEach(s=>{const{element:{content:n}}=s,i=new Set;Array.from(n.querySelectorAll("style")).forEach(o=>{i.add(o)}),x(s,i)})})},q=new Set,X=(r,e,t)=>{q.add(r);const s=t?t.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:i}=n;if(i===0){window.ShadyCSS.prepareTemplateStyles(s,r);return}const o=document.createElement("style");for(let d=0;d<i;d++){const l=n[d];l.parentNode.removeChild(l),o.textContent+=l.textContent}Y(r);const a=s.content;t?W(t,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,r);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&c!==null)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(t){a.insertBefore(o,a.firstChild);const d=new Set;d.add(o),x(t,d)}},Z=(r,e,t)=>{if(!t||typeof t!="object"||!t.scopeName)throw new Error("The `scopeName` option is required.");const s=t.scopeName,n=h.has(e),i=y&&e.nodeType===11&&!!e.host,o=i&&!q.has(s),a=o?document.createDocumentFragment():e;if(K(r,a,Object.assign({templateFactory:Q(s)},t)),o){const c=h.get(a);h.delete(a);const d=c.value instanceof D?c.value.template:void 0;X(s,a,d),N(e,e.firstChild),e.appendChild(a),h.set(e,c)}!n&&i&&window.ShadyCSS.styleElement(e.host)};/**
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
 */var v;window.JSCompiler_renameProperty=(r,e)=>r;const m={toAttribute(r,e){switch(e){case Boolean:return r?"":null;case Object:case Array:return r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){switch(e){case Boolean:return r!==null;case Number:return r===null?null:Number(r);case Object:case Array:return JSON.parse(r)}return r}},I=(r,e)=>e!==r&&(e===e||r===r),g={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:I},w=1,P=1<<2,b=1<<3,C=1<<4,T="finalized";class j extends HTMLElement{constructor(){super();this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const n=this._attributeNameForProperty(s,t);n!==void 0&&(this._attributeToPropertyMap.set(n,s),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((t,s)=>this._classProperties.set(s,t))}}static createProperty(e,t=g){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s=typeof e=="symbol"?Symbol():`__${e}`,n=this.getPropertyDescriptor(e,s,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this.requestUpdateInternal(e,i,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||g}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(T)||e.finalize(),this[T]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(t):[]];for(const n of s)this.createProperty(n,t[n])}}static _attributeNameForProperty(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=I){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,n=t.converter||m,i=typeof n=="function"?n:n.fromAttribute;return i?i(e,s):e}static _propertyValueToAttribute(e,t){if(t.reflect===void 0)return;const s=t.type,n=t.converter;return(n&&n.toAttribute||m.toAttribute)(e,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const s=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,s)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=g){const n=this.constructor,i=n._attributeNameForProperty(e,s);if(i!==void 0){const o=n._propertyValueToAttribute(t,s);if(o===void 0)return;this._updateState=this._updateState|b,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._updateState=this._updateState&~b}}_attributeToProperty(e,t){if(this._updateState&b)return;const s=this.constructor,n=s._attributeToPropertyMap.get(e);if(n!==void 0){const i=s.getPropertyOptions(n);this._updateState=this._updateState|C,this[n]=s._propertyValueFromAttribute(t,i),this._updateState=this._updateState&~C}}requestUpdateInternal(e,t,s){let n=!0;if(e!==void 0){const i=this.constructor;s=s||i.getPropertyOptions(e),i._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),s.reflect===!0&&!(this._updateState&C)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|P;try{await this._updatePromise}catch(t){}const e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&P}get hasUpdated(){return this._updateState&w}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(s){throw e=!1,this._markUpdated(),s}e&&(this._updateState&w||(this._updateState=this._updateState|w,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~P}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,s)=>this._propertyToAttribute(s,this[s],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}v=T,j[v]=!0;/**
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
 */const ee=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(t){t.createProperty(e.key,r)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}},te=(r,e,t)=>{e.constructor.createProperty(t,r)};function se(r){return(e,t)=>t!==void 0?te(r,e,t):ee(r,e)}function re(r,e){return(t,s)=>{const n={get(){return this.renderRoot.querySelector(r)},enumerable:!0,configurable:!0};if(e){const i=typeof s=="symbol"?Symbol():`__${s}`;n.get=function(){return this[i]===void 0&&(this[i]=this.renderRoot.querySelector(r)),this[i]}}return s!==void 0?M(n,t,s):F(n,t)}}const M=(r,e,t)=>{Object.defineProperty(e,t,r)},F=(r,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:r}),z=Element.prototype,ne=z.msMatchesSelector||z.webkitMatchesSelector;function ie(r="",e=!1,t=""){return(s,n)=>{const i={get(){const o=`slot${r?`[name=${r}]`:":not([name])"}`,a=this.renderRoot.querySelector(o);let c=a&&a.assignedNodes({flatten:e});return c&&t&&(c=c.filter(d=>d.nodeType===Node.ELEMENT_NODE&&d.matches?d.matches(t):ne.call(d,t))),c},enumerable:!0,configurable:!0};return n!==void 0?M(i,s,n):F(i,s)}}/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const S=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,E=Symbol();class A{constructor(e,t){if(t!==E)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(S?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const V=r=>new A(String(r),E),oe=r=>{if(r instanceof A)return r.cssText;if(typeof r=="number")return r;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${r}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},ae=(r,...e)=>{const t=e.reduce((s,n,i)=>s+oe(n)+r[i+1],r[0]);return new A(t,E)};/**
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
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const L={};class k extends j{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(i,o)=>i.reduceRight((a,c)=>Array.isArray(c)?t(c,a):(a.add(c),a),o),s=t(e,new Set),n=[];s.forEach(i=>n.unshift(i)),this._styles=n}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!S){const s=Array.prototype.slice.call(t.cssRules).reduce((n,i)=>n+i.cssText,"");return V(s)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;e.length!==0&&(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(t=>t.cssText),this.localName):S?this.renderRoot.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==L&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(s=>{const n=document.createElement("style");n.textContent=s.cssText,this.renderRoot.appendChild(n)}))}render(){return L}}k.finalized=!0,k.render=Z;export{k as L,re as a,ae as c,se as p,ie as q,S as s,V as u};
