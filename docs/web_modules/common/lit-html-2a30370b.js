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
 */const M=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,z=(n,t,e=null,s=null)=>{for(;t!==e;){const i=t.nextSibling;n.insertBefore(t,s),t=i}},k=(n,t,e=null)=>{for(;t!==e;){const s=t.nextSibling;n.removeChild(t),t=s}};/**
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
 */const m=`{{lit-${String(Math.random()).slice(2)}}}`,I=`<!--${m}-->`,H=new RegExp(`${m}|${I}`),N="$lit$";class J{constructor(t,e){this.parts=[],this.element=e;const s=[],i=[],o=document.createTreeWalker(e.content,133,null,!1);let c=0,r=-1,a=0;const{strings:y,values:{length:q}}=t;for(;a<q;){const l=o.nextNode();if(l===null){o.currentNode=i.pop();continue}if(r++,l.nodeType===1){if(l.hasAttributes()){const d=l.attributes,{length:b}=d;let _=0;for(let u=0;u<b;u++)R(d[u].name,N)&&_++;for(;_-- >0;){const u=y[a],x=E.exec(u)[2],v=x.toLowerCase()+N,g=l.getAttribute(v);l.removeAttribute(v);const p=g.split(H);this.parts.push({type:"attribute",index:r,name:x,strings:p}),a+=p.length-1}}l.tagName==="TEMPLATE"&&(i.push(l),o.currentNode=l.content)}else if(l.nodeType===3){const d=l.data;if(d.indexOf(m)>=0){const b=l.parentNode,_=d.split(H),u=_.length-1;for(let x=0;x<u;x++){let v,g=_[x];if(g==="")v=f();else{const p=E.exec(g);p!==null&&R(p[2],N)&&(g=g.slice(0,p.index)+p[1]+p[2].slice(0,-N.length)+p[3]),v=document.createTextNode(g)}b.insertBefore(v,l),this.parts.push({type:"node",index:++r})}_[u]===""?(b.insertBefore(f(),l),s.push(l)):l.data=_[u],a+=u}}else if(l.nodeType===8)if(l.data===m){const d=l.parentNode;(l.previousSibling===null||r===c)&&(r++,d.insertBefore(f(),l)),c=r,this.parts.push({type:"node",index:r}),l.nextSibling===null?l.data="":(s.push(l),r--),a++}else{let d=-1;for(;(d=l.data.indexOf(m,d+1))!==-1;)this.parts.push({type:"node",index:-1}),a++}}for(const l of s)l.parentNode.removeChild(l)}}const R=(n,t)=>{const e=n.length-t.length;return e>=0&&n.slice(e)===t},$=n=>n.index!==-1,f=()=>document.createComment(""),E=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
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
 */const B=new WeakMap,K=n=>(...t)=>{const e=n(...t);return B.set(e,!0),e},w=n=>typeof n=="function"&&B.has(n);/**
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
 */const h={},A={};/**
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
 */class P{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)s!==void 0&&s.setValue(t[e]),e++;for(const s of this.__parts)s!==void 0&&s.commit()}_clone(){const t=M?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let o=0,c=0,r,a=i.nextNode();for(;o<s.length;){if(r=s[o],!$(r)){this.__parts.push(void 0),o++;continue}for(;c<r.index;)c++,a.nodeName==="TEMPLATE"&&(e.push(a),i.currentNode=a.content),(a=i.nextNode())===null&&(i.currentNode=e.pop(),a=i.nextNode());if(r.type==="node"){const y=this.processor.handleTextExpression(this.options);y.insertAfterNode(a.previousSibling),this.__parts.push(y)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,r.name,r.strings,this.options));o++}return M&&(document.adoptNode(t),customElements.upgrade(t)),t}}/**
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
 */const O=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:n=>n}),Q=` ${m} `;class T{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let i=0;i<t;i++){const o=this.strings[i],c=o.lastIndexOf("<!--");s=(c>-1||s)&&o.indexOf("-->",c+1)===-1;const r=E.exec(o);r===null?e+=o+(s?Q:I):e+=o.substr(0,r.index)+r[1]+r[2]+N+r[3]+m}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return O!==void 0&&(e=O.createHTML(e)),t.innerHTML=e,t}}class F extends T{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,s=e.firstChild;return e.removeChild(s),z(e,s.firstChild),t}}/**
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
 */const S=n=>n===null||!(typeof n=="object"||typeof n=="function"),L=n=>Array.isArray(n)||!!(n&&n[Symbol.iterator]);class W{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let i=0;i<s.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new C(this)}_getValue(){const t=this.strings,e=t.length-1,s=this.parts;if(e===1&&t[0]===""&&t[1]===""){const o=s[0].value;if(typeof o=="symbol")return String(o);if(typeof o=="string"||!L(o))return o}let i="";for(let o=0;o<e;o++){i+=t[o];const c=s[o];if(c!==void 0){const r=c.value;if(S(r)||!L(r))i+=typeof r=="string"?r:String(r);else for(const a of r)i+=typeof a=="string"?a:String(a)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(t){this.value=void 0,this.committer=t}setValue(t){t!==h&&(!S(t)||t!==this.value)&&(this.value=t,w(t)||(this.committer.dirty=!0))}commit(){for(;w(this.value);){const t=this.value;this.value=h,t(this)}if(this.value===h)return;this.committer.commit()}}class V{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(f()),this.endNode=t.appendChild(f())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=f()),t.__insert(this.endNode=f())}insertAfterPart(t){t.__insert(this.startNode=f()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(this.startNode.parentNode===null)return;for(;w(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=h,e(this)}const t=this.__pendingValue;if(t===h)return;S(t)?t!==this.value&&this.__commitText(t):t instanceof T?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):L(t)?this.__commitIterable(t):t===A?(this.value=A,this.clear()):this.__commitText(t)}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){if(this.value===t)return;this.clear(),this.__insert(t),this.value=t}__commitText(t){const e=this.startNode.nextSibling;t=t==null?"":t;const s=typeof t=="string"?t:String(t);e===this.endNode.previousSibling&&e.nodeType===3?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof P&&this.value.template===e)this.value.update(t.values);else{const s=new P(e,t.processor,this.options),i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s=0,i;for(const o of t)i=e[s],i===void 0&&(i=new V(this.options),e.push(i),s===0?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(o),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){k(this.startNode.parentNode,t.nextSibling,this.endNode)}}class U{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,s.length!==2||s[0]!==""||s[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;w(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=h,e(this)}if(this.__pendingValue===h)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=h}}class X extends W{constructor(t,e,s){super(t,e,s);this.single=s.length===2&&s[0]===""&&s[1]===""}_createPart(){return new D(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class D extends C{}let j=!1;(()=>{try{const n={get capture(){return j=!0,!1}};window.addEventListener("test",n,n),window.removeEventListener("test",n,n)}catch(n){}})();class Y{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=i=>this.handleEvent(i)}setValue(t){this.__pendingValue=t}commit(){for(;w(this.__pendingValue);){const o=this.__pendingValue;this.__pendingValue=h,o(this)}if(this.__pendingValue===h)return;const t=this.__pendingValue,e=this.value,s=t==null||e!=null&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=t!=null&&(e==null||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=Z(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=h}handleEvent(t){typeof this.value=="function"?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const Z=n=>n&&(j?{capture:n.capture,passive:n.passive,once:n.once}:n.capture);/**
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
 */class tt{handleAttributeExpressions(t,e,s,i){const o=e[0];if(o==="."){const r=new X(t,e.slice(1),s);return r.parts}if(o==="@")return[new Y(t,e.slice(1),i.eventContext)];if(o==="?")return[new U(t,e.slice(1),s)];const c=new W(t,e,s);return c.parts}handleTextExpression(t){return new V(t)}}const G=new tt;/**
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
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const et=(n,...t)=>new T(n,t,"html",G),st=(n,...t)=>new F(n,t,"svg",G);export{C as A,V as N,D as P,F as S,J as T,P as a,T as b,K as d,et as h,$ as i,m,A as n,k as r,st as s};
