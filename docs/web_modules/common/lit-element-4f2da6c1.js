var Q=(n,e,t)=>new Promise((s,i)=>{var r=l=>{try{o(t.next(l))}catch(d){i(d)}},a=l=>{try{o(t.throw(l))}catch(d){i(d)}},o=l=>l.done?s(l.value):Promise.resolve(l.value).then(r,a);o((t=t.apply(n,e)).next())});/**
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
 */const Y=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,we=(n,e,t=null,s=null)=>{for(;e!==t;){const i=e.nextSibling;n.insertBefore(e,s),e=i}},R=(n,e,t=null)=>{for(;e!==t;){const s=e.nextSibling;n.removeChild(e),e=s}};/**
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
 */const y=`{{lit-${String(Math.random()).slice(2)}}}`,X=`<!--${y}-->`,Z=new RegExp(`${y}|${X}`),x="$lit$";class ee{constructor(e,t){this.parts=[],this.element=t;const s=[],i=[],r=document.createTreeWalker(t.content,133,null,!1);let a=0,o=-1,l=0;const{strings:d,values:{length:h}}=e;for(;l<h;){const c=r.nextNode();if(c===null){r.currentNode=i.pop();continue}if(o++,c.nodeType===1){if(c.hasAttributes()){const p=c.attributes,{length:N}=p;let g=0;for(let f=0;f<N;f++)te(p[f].name,x)&&g++;for(;g-- >0;){const f=d[l],w=V.exec(f)[2],b=w.toLowerCase()+x,S=c.getAttribute(b);c.removeAttribute(b);const m=S.split(Z);this.parts.push({type:"attribute",index:o,name:w,strings:m}),l+=m.length-1}}c.tagName==="TEMPLATE"&&(i.push(c),r.currentNode=c.content)}else if(c.nodeType===3){const p=c.data;if(p.indexOf(y)>=0){const N=c.parentNode,g=p.split(Z),f=g.length-1;for(let w=0;w<f;w++){let b,S=g[w];if(S==="")b=_();else{const m=V.exec(S);m!==null&&te(m[2],x)&&(S=S.slice(0,m.index)+m[1]+m[2].slice(0,-x.length)+m[3]),b=document.createTextNode(S)}N.insertBefore(b,c),this.parts.push({type:"node",index:++o})}g[f]===""?(N.insertBefore(_(),c),s.push(c)):c.data=g[f],l+=f}}else if(c.nodeType===8)if(c.data===y){const p=c.parentNode;(c.previousSibling===null||o===a)&&(o++,p.insertBefore(_(),c)),a=o,this.parts.push({type:"node",index:o}),c.nextSibling===null?c.data="":(s.push(c),o--),l++}else{let p=-1;for(;(p=c.data.indexOf(y,p+1))!==-1;)this.parts.push({type:"node",index:-1}),l++}}for(const c of s)c.parentNode.removeChild(c)}}const te=(n,e)=>{const t=n.length-e.length;return t>=0&&n.slice(t)===e},se=n=>n.index!==-1,_=()=>document.createComment(""),V=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
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
 */const U=133;function ne(n,e){const{element:{content:t},parts:s}=n,i=document.createTreeWalker(t,U,null,!1);let r=T(s),a=s[r],o=-1,l=0;const d=[];let h=null;for(;i.nextNode();){o++;const c=i.currentNode;for(c.previousSibling===h&&(h=null),e.has(c)&&(d.push(c),h===null&&(h=c)),h!==null&&l++;a!==void 0&&a.index===o;)a.index=h!==null?-1:a.index-l,r=T(s,r),a=s[r]}d.forEach(c=>c.parentNode.removeChild(c))}const be=n=>{let e=n.nodeType===11?0:1;const t=document.createTreeWalker(n,U,null,!1);for(;t.nextNode();)e++;return e},T=(n,e=-1)=>{for(let t=e+1;t<n.length;t++){const s=n[t];if(se(s))return t}return-1};function Pe(n,e,t=null){const{element:{content:s},parts:i}=n;if(t==null){s.appendChild(e);return}const r=document.createTreeWalker(s,U,null,!1);let a=T(i),o=0,l=-1;for(;r.nextNode();){l++;const d=r.currentNode;for(d===t&&(o=be(e),t.parentNode.insertBefore(e,t));a!==-1&&i[a].index===l;){if(o>0){for(;a!==-1;)i[a].index+=o,a=T(i,a);return}a=T(i,a)}}}/**
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
 */const ie=new WeakMap,xe=n=>(...e)=>{const t=n(...e);return ie.set(t,!0),t},v=n=>typeof n=="function"&&ie.has(n);/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const u={},I={};/**
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
 */class O{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)s!==void 0&&s.setValue(e[t]),t++;for(const s of this.__parts)s!==void 0&&s.commit()}_clone(){const e=Y?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let r=0,a=0,o,l=i.nextNode();for(;r<s.length;){if(o=s[r],!se(o)){this.__parts.push(void 0),r++;continue}for(;a<o.index;)a++,l.nodeName==="TEMPLATE"&&(t.push(l),i.currentNode=l.content),(l=i.nextNode())===null&&(i.currentNode=t.pop(),l=i.nextNode());if(o.type==="node"){const d=this.processor.handleTextExpression(this.options);d.insertAfterNode(l.previousSibling),this.__parts.push(d)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));r++}return Y&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
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
 */const re=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:n=>n}),Te=` ${y} `;class M{constructor(e,t,s,i){this.strings=e,this.values=t,this.type=s,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let i=0;i<e;i++){const r=this.strings[i],a=r.lastIndexOf("<!--");s=(a>-1||s)&&r.indexOf("-->",a+1)===-1;const o=V.exec(r);o===null?t+=r+(s?Te:X):t+=r.substr(0,o.index)+o[1]+o[2]+x+o[3]+y}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return re!==void 0&&(t=re.createHTML(t)),e.innerHTML=t,e}}class ve extends M{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,s=t.firstChild;return t.removeChild(s),we(t,s.firstChild),e}}/**
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
 */const L=n=>n===null||!(typeof n=="object"||typeof n=="function"),q=n=>Array.isArray(n)||!!(n&&n[Symbol.iterator]);class oe{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let i=0;i<s.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new F(this)}_getValue(){const e=this.strings,t=e.length-1,s=this.parts;if(t===1&&e[0]===""&&e[1]===""){const r=s[0].value;if(typeof r=="symbol")return String(r);if(typeof r=="string"||!q(r))return r}let i="";for(let r=0;r<t;r++){i+=e[r];const a=s[r];if(a!==void 0){const o=a.value;if(L(o)||!q(o))i+=typeof o=="string"?o:String(o);else for(const l of o)i+=typeof l=="string"?l:String(l)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class F{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==u&&(!L(e)||e!==this.value)&&(this.value=e,v(e)||(this.committer.dirty=!0))}commit(){for(;v(this.value);){const e=this.value;this.value=u,e(this)}if(this.value===u)return;this.committer.commit()}}class E{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(_()),this.endNode=e.appendChild(_())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=_()),e.__insert(this.endNode=_())}insertAfterPart(e){e.__insert(this.startNode=_()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;v(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=u,t(this)}const e=this.__pendingValue;if(e===u)return;L(e)?e!==this.value&&this.__commitText(e):e instanceof M?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):q(e)?this.__commitIterable(e):e===I?(this.value=I,this.clear()):this.__commitText(e)}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){if(this.value===e)return;this.clear(),this.__insert(e),this.value=e}__commitText(e){const t=this.startNode.nextSibling;e=e==null?"":e;const s=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof O&&this.value.template===t)this.value.update(e.values);else{const s=new O(t,e.processor,this.options),i=s._clone();s.update(e.values),this.__commitNode(i),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s=0,i;for(const r of e)i=t[s],i===void 0&&(i=new E(this.options),t.push(i),s===0?i.appendIntoPart(this):i.insertAfterPart(t[s-1])),i.setValue(r),i.commit(),s++;s<t.length&&(t.length=s,this.clear(i&&i.endNode))}clear(e=this.startNode){R(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Ce{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,s.length!==2||s[0]!==""||s[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;v(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=u,t(this)}if(this.__pendingValue===u)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=u}}class Ne extends oe{constructor(e,t,s){super(e,t,s);this.single=s.length===2&&s[0]===""&&s[1]===""}_createPart(){return new ae(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ae extends F{}let le=!1;(()=>{try{const n={get capture(){return le=!0,!1}};window.addEventListener("test",n,n),window.removeEventListener("test",n,n)}catch(n){}})();class Ee{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=i=>this.handleEvent(i)}setValue(e){this.__pendingValue=e}commit(){for(;v(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=u,r(this)}if(this.__pendingValue===u)return;const e=this.__pendingValue,t=this.value,s=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=e!=null&&(t==null||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=Ae(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=u}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Ae=n=>n&&(le?{capture:n.capture,passive:n.passive,once:n.once}:n.capture);/**
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
 */function ke(n){let e=C.get(n.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},C.set(n.type,e));let t=e.stringsArray.get(n.strings);if(t!==void 0)return t;const s=n.strings.join(y);return t=e.keyString.get(s),t===void 0&&(t=new ee(n,n.getTemplateElement()),e.keyString.set(s,t)),e.stringsArray.set(n.strings,t),t}const C=new Map;/**
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
 */const P=new WeakMap,Re=(n,e,t)=>{let s=P.get(e);s===void 0&&(R(e,e.firstChild),P.set(e,s=new E(Object.assign({templateFactory:ke},t))),s.appendInto(e)),s.setValue(n),s.commit()};/**
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
 */class Ve{handleAttributeExpressions(e,t,s,i){const r=t[0];if(r==="."){const o=new Ne(e,t.slice(1),s);return o.parts}if(r==="@")return[new Ee(e,t.slice(1),i.eventContext)];if(r==="?")return[new Ce(e,t.slice(1),s)];const a=new oe(e,t,s);return a.parts}handleTextExpression(e){return new E(e)}}const ce=new Ve;/**
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
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const Ue=(n,...e)=>new M(n,e,"html",ce),Ie=(n,...e)=>new ve(n,e,"svg",ce);/**
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
 */const de=(n,e)=>`${n}--${e}`;let A=!0;typeof window.ShadyCSS=="undefined"?A=!1:typeof window.ShadyCSS.prepareTemplateDom=="undefined"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),A=!1);const Oe=n=>e=>{const t=de(e.type,n);let s=C.get(t);s===void 0&&(s={stringsArray:new WeakMap,keyString:new Map},C.set(t,s));let i=s.stringsArray.get(e.strings);if(i!==void 0)return i;const r=e.strings.join(y);if(i=s.keyString.get(r),i===void 0){const a=e.getTemplateElement();A&&window.ShadyCSS.prepareTemplateDom(a,n),i=new ee(e,a),s.keyString.set(r,i)}return s.stringsArray.set(e.strings,i),i},Me=["html","svg"],Le=n=>{Me.forEach(e=>{const t=C.get(de(e,n));t!==void 0&&t.keyString.forEach(s=>{const{element:{content:i}}=s,r=new Set;Array.from(i.querySelectorAll("style")).forEach(a=>{r.add(a)}),ne(s,r)})})},he=new Set,qe=(n,e,t)=>{he.add(n);const s=t?t.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:r}=i;if(r===0){window.ShadyCSS.prepareTemplateStyles(s,n);return}const a=document.createElement("style");for(let d=0;d<r;d++){const h=i[d];h.parentNode.removeChild(h),a.textContent+=h.textContent}Le(n);const o=s.content;t?Pe(t,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(s,n);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&l!==null)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(t){o.insertBefore(a,o.firstChild);const d=new Set;d.add(a),ne(t,d)}},Fe=(n,e,t)=>{if(!t||typeof t!="object"||!t.scopeName)throw new Error("The `scopeName` option is required.");const s=t.scopeName,i=P.has(e),r=A&&e.nodeType===11&&!!e.host,a=r&&!he.has(s),o=a?document.createDocumentFragment():e;if(Re(n,o,Object.assign({templateFactory:Oe(s)},t)),a){const l=P.get(o);P.delete(o);const d=l.value instanceof O?l.value.template:void 0;qe(s,o,d),R(e,e.firstChild),e.appendChild(o),P.set(e,l)}!i&&r&&window.ShadyCSS.styleElement(e.host)};/**
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
 */var ue;window.JSCompiler_renameProperty=(n,e)=>n;const j={toAttribute(n,e){switch(e){case Boolean:return n?"":null;case Object:case Array:return n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){switch(e){case Boolean:return n!==null;case Number:return n===null?null:Number(n);case Object:case Array:return JSON.parse(n)}return n}},pe=(n,e)=>e!==n&&(e===e||n===n),$={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:pe},H=1,B=1<<2,z=1<<3,W=1<<4,D="finalized";class fe extends HTMLElement{constructor(){super();this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const i=this._attributeNameForProperty(s,t);i!==void 0&&(this._attributeToPropertyMap.set(i,s),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((t,s)=>this._classProperties.set(s,t))}}static createProperty(e,t=$){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s=typeof e=="symbol"?Symbol():`__${e}`,i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(i){const r=this[e];this[t]=i,this.requestUpdateInternal(e,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||$}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(D)||e.finalize(),this[D]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(t):[]];for(const i of s)this.createProperty(i,t[i])}}static _attributeNameForProperty(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=pe){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,i=t.converter||j,r=typeof i=="function"?i:i.fromAttribute;return r?r(e,s):e}static _propertyValueToAttribute(e,t){if(t.reflect===void 0)return;const s=t.type,i=t.converter,r=i&&i.toAttribute||j.toAttribute;return r(e,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const s=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,s)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=$){const i=this.constructor,r=i._attributeNameForProperty(e,s);if(r!==void 0){const a=i._propertyValueToAttribute(t,s);if(a===void 0)return;this._updateState=this._updateState|z,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._updateState=this._updateState&~z}}_attributeToProperty(e,t){if(this._updateState&z)return;const s=this.constructor,i=s._attributeToPropertyMap.get(e);if(i!==void 0){const r=s.getPropertyOptions(i);this._updateState=this._updateState|W,this[i]=s._propertyValueFromAttribute(t,r),this._updateState=this._updateState&~W}}requestUpdateInternal(e,t,s){let i=!0;if(e!==void 0){const r=this.constructor;s=s||r.getPropertyOptions(e),r._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),s.reflect===!0&&!(this._updateState&W)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}_enqueueUpdate(){return Q(this,null,function*(){this._updateState=this._updateState|B;try{yield this._updatePromise}catch(t){}const e=this.performUpdate();return e!=null&&(yield e),!this._hasRequestedUpdate})}get _hasRequestedUpdate(){return this._updateState&B}get hasUpdated(){return this._updateState&H}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(s){throw e=!1,this._markUpdated(),s}e&&(this._updateState&H||(this._updateState=this._updateState|H,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~B}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,s)=>this._propertyToAttribute(s,this[s],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}ue=D,fe[ue]=!0;/**
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
 */const je=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(t){t.createProperty(e.key,n)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}},$e=(n,e,t)=>{e.constructor.createProperty(t,n)};function He(n){return(e,t)=>t!==void 0?$e(n,e,t):je(n,e)}function Be(n,e){return(t,s)=>{const i={get(){return this.renderRoot.querySelector(n)},enumerable:!0,configurable:!0};if(e){const r=typeof s=="symbol"?Symbol():`__${s}`;i.get=function(){return this[r]===void 0&&(this[r]=this.renderRoot.querySelector(n)),this[r]}}return s!==void 0?me(i,t,s):ye(i,t)}}const me=(n,e,t)=>{Object.defineProperty(e,t,n)},ye=(n,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:n}),_e=Element.prototype,ze=_e.msMatchesSelector||_e.webkitMatchesSelector;function We(n="",e=!1,t=""){return(s,i)=>{const r={get(){const a=`slot${n?`[name=${n}]`:":not([name])"}`,o=this.renderRoot.querySelector(a);let l=o&&o.assignedNodes({flatten:e});return l&&t&&(l=l.filter(d=>d.nodeType===Node.ELEMENT_NODE&&d.matches?d.matches(t):ze.call(d,t))),l},enumerable:!0,configurable:!0};return i!==void 0?me(r,s,i):ye(r,s)}}/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const k=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol();class G{constructor(e,t){if(t!==J)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(k?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ge=n=>new G(String(n),J),De=n=>{if(n instanceof G)return n.cssText;if(typeof n=="number")return n;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${n}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},Je=(n,...e)=>{const t=e.reduce((s,i,r)=>s+De(i)+n[r+1],n[0]);return new G(t,J)};/**
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
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const Se={};class K extends fe{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(r,a)=>r.reduceRight((o,l)=>Array.isArray(l)?t(l,o):(o.add(l),o),a),s=t(e,new Set),i=[];s.forEach(r=>i.unshift(r)),this._styles=i}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!k){const s=Array.prototype.slice.call(t.cssRules).reduce((i,r)=>i+r.cssText,"");return ge(s)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;if(e.length===0)return;window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(t=>t.cssText),this.localName):k?this.renderRoot.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==Se&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(s=>{const i=document.createElement("style");i.textContent=s.cssText,this.renderRoot.appendChild(i)}))}render(){return Se}}K.finalized=!0,K.render=Fe;export{F as A,K as L,ae as P,Be as a,k as b,Je as c,xe as d,Ue as h,I as n,He as p,We as q,Ie as s,ge as u};
