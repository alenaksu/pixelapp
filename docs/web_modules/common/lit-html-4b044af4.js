/**
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
 */const k=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,W=(e,t,n=null,i=null)=>{for(;t!==n;){const s=t.nextSibling;e.insertBefore(t,i),t=s}},O=(e,t,n=null)=>{for(;t!==n;){const i=t.nextSibling;e.removeChild(t),t=i}};/**
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
 */const p=`{{lit-${String(Math.random()).slice(2)}}}`,M=`<!--${p}-->`,R=new RegExp(`${p}|${M}`),v="$lit$";class ${constructor(e,t){this.parts=[],this.element=t;const n=[],i=[],s=document.createTreeWalker(t.content,133,null,!1);let l=0,a=-1,r=0;const{strings:w,values:{length:F}}=e;for(;r<F;){const o=s.nextNode();if(o===null){s.currentNode=i.pop();continue}if(a++,o.nodeType===1){if(o.hasAttributes()){const d=o.attributes,{length:x}=d;let f=0;for(let u=0;u<x;u++)L(d[u].name,v)&&f++;for(;f-- >0;){const u=w[r],b=_.exec(u)[2],y=b.toLowerCase()+v,g=o.getAttribute(y);o.removeAttribute(y);const c=g.split(R);this.parts.push({type:"attribute",index:a,name:b,strings:c}),r+=c.length-1}}o.tagName==="TEMPLATE"&&(i.push(o),s.currentNode=o.content)}else if(o.nodeType===3){const d=o.data;if(d.indexOf(p)>=0){const x=o.parentNode,f=d.split(R),u=f.length-1;for(let b=0;b<u;b++){let y,g=f[b];if(g==="")y=m();else{const c=_.exec(g);c!==null&&L(c[2],v)&&(g=g.slice(0,c.index)+c[1]+c[2].slice(0,-v.length)+c[3]),y=document.createTextNode(g)}x.insertBefore(y,o),this.parts.push({type:"node",index:++a})}f[u]===""?(x.insertBefore(m(),o),n.push(o)):o.data=f[u],r+=u}}else if(o.nodeType===8)if(o.data===p){const d=o.parentNode;(o.previousSibling===null||a===l)&&(a++,d.insertBefore(m(),o)),l=a,this.parts.push({type:"node",index:a}),o.nextSibling===null?o.data="":(n.push(o),a--),r++}else{let d=-1;for(;(d=o.data.indexOf(p,d+1))!==-1;)this.parts.push({type:"node",index:-1}),r++}}for(const o of n)o.parentNode.removeChild(o)}}const L=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},V=e=>e.index!==-1,m=()=>document.createComment(""),_=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
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
 */const j=new WeakMap,G=e=>(...t)=>{const n=e(...t);return j.set(n,!0),n},T=e=>typeof e=="function"&&j.has(e);/**
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
 */const h={},N={};/**
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
 */class E{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)n!==void 0&&n.setValue(e[t]),t++;for(const n of this.__parts)n!==void 0&&n.commit()}_clone(){const e=k?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let s=0,l=0,a,r=i.nextNode();for(;s<n.length;){if(a=n[s],!V(a)){this.__parts.push(void 0),s++;continue}for(;l<a.index;)l++,r.nodeName==="TEMPLATE"&&(t.push(r),i.currentNode=r.content),(r=i.nextNode())===null&&(i.currentNode=t.pop(),r=i.nextNode());if(a.type==="node"){const w=this.processor.handleTextExpression(this.options);w.insertAfterNode(r.previousSibling),this.__parts.push(w)}else this.__parts.push(...this.processor.handleAttributeExpressions(r,a.name,a.strings,this.options));s++}return k&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
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
 */const H=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),q=` ${p} `;class A{constructor(e,t,n,i){this.strings=e,this.values=t,this.type=n,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let i=0;i<e;i++){const s=this.strings[i],l=s.lastIndexOf("<!--");n=(l>-1||n)&&s.indexOf("-->",l+1)===-1;const a=_.exec(s);a===null?t+=s+(n?q:M):t+=s.substr(0,a.index)+a[1]+a[2]+v+a[3]+p}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return H!==void 0&&(t=H.createHTML(t)),e.innerHTML=t,e}}class z extends A{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),W(t,n.firstChild),e}}/**
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
 */const P=e=>e===null||!(typeof e=="object"||typeof e=="function"),S=e=>Array.isArray(e)||!!(e&&e[Symbol.iterator]);class B{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let i=0;i<n.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new C(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(t===1&&e[0]===""&&e[1]===""){const s=n[0].value;if(typeof s=="symbol")return String(s);if(typeof s=="string"||!S(s))return s}let i="";for(let s=0;s<t;s++){i+=e[s];const l=n[s];if(l!==void 0){const a=l.value;if(P(a)||!S(a))i+=typeof a=="string"?a:String(a);else for(const r of a)i+=typeof r=="string"?r:String(r)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==h&&(!P(e)||e!==this.value)&&(this.value=e,T(e)||(this.committer.dirty=!0))}commit(){for(;T(this.value);){const e=this.value;this.value=h,e(this)}if(this.value===h)return;this.committer.commit()}}class I{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(m()),this.endNode=e.appendChild(m())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=m()),e.__insert(this.endNode=m())}insertAfterPart(e){e.__insert(this.startNode=m()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;T(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=h,t(this)}const e=this.__pendingValue;if(e===h)return;P(e)?e!==this.value&&this.__commitText(e):e instanceof A?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):S(e)?this.__commitIterable(e):e===N?(this.value=N,this.clear()):this.__commitText(e)}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){if(this.value===e)return;this.clear(),this.__insert(e),this.value=e}__commitText(e){const t=this.startNode.nextSibling;e=e??"";const n=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof E&&this.value.template===t)this.value.update(e.values);else{const n=new E(t,e.processor,this.options),i=n._clone();n.update(e.values),this.__commitNode(i),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n=0,i;for(const s of e)i=t[n],i===void 0&&(i=new I(this.options),t.push(i),n===0?i.appendIntoPart(this):i.insertAfterPart(t[n-1])),i.setValue(s),i.commit(),n++;n<t.length&&(t.length=n,this.clear(i&&i.endNode))}clear(e=this.startNode){O(this.startNode.parentNode,e.nextSibling,this.endNode)}}class X{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,n.length!==2||n[0]!==""||n[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;T(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=h,t(this)}if(this.__pendingValue===h)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=h}}class K extends B{constructor(e,t,n){super(e,t,n);this.single=n.length===2&&n[0]===""&&n[1]===""}_createPart(){return new J(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class J extends C{}let U=!1;(()=>{try{const e={get capture(){return U=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class Q{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=i=>this.handleEvent(i)}setValue(e){this.__pendingValue=e}commit(){for(;T(this.__pendingValue);){const s=this.__pendingValue;this.__pendingValue=h,s(this)}if(this.__pendingValue===h)return;const e=this.__pendingValue,t=this.value,n=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=e!=null&&(t==null||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=Y(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=h}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Y=e=>e&&(U?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);/**
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
 */class Z{handleAttributeExpressions(e,t,n,i){const s=t[0];if(s==="."){const a=new K(e,t.slice(1),n);return a.parts}if(s==="@")return[new Q(e,t.slice(1),i.eventContext)];if(s==="?")return[new X(e,t.slice(1),n)];const l=new B(e,t,n);return l.parts}handleTextExpression(e){return new I(e)}}const D=new Z;/**
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
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const ee=(e,...t)=>new A(e,t,"html",D),te=(e,...t)=>new z(e,t,"svg",D);export{C as A,I as N,$ as T,E as a,G as d,ee as h,V as i,p as m,N as n,O as r,te as s};
