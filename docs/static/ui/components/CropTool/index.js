function P(t,r,e,i){var n=g();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=r(function(l){n.initializeInstanceElements(l,a.elements)},e),a=n.decorateClass(S(s.d.map(A)),t);return n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}function g(){g=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(r,e){["method","field"].forEach(function(i){e.forEach(function(n){n.kind===i&&n.placement==="own"&&this.defineClassElement(r,n)},this)},this)},initializeClassElements:function(r,e){var i=r.prototype;["method","field"].forEach(function(n){e.forEach(function(o){var s=o.placement;if(o.kind===n&&(s==="static"||s==="prototype")){var a=s==="static"?r:i;this.defineClassElement(a,o)}},this)},this)},defineClassElement:function(r,e){var i=e.descriptor;if(e.kind==="field"){var n=e.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:n===void 0?void 0:n.call(r)}}Object.defineProperty(r,e.key,i)},decorateClass:function(r,e){var i=[],n=[],o={static:[],prototype:[],own:[]};if(r.forEach(function(a){this.addElementPlacement(a,o)},this),r.forEach(function(a){if(!p(a))return i.push(a);var c=this.decorateElement(a,o);i.push(c.element),i.push.apply(i,c.extras),n.push.apply(n,c.finishers)},this),!e)return{elements:i,finishers:n};var s=this.decorateConstructor(i,e);return n.push.apply(n,s.finishers),s.finishers=n,s},addElementPlacement:function(r,e,i){var n=e[r.placement];if(!i&&n.indexOf(r.key)!==-1)throw new TypeError("Duplicated element ("+r.key+")");n.push(r.key)},decorateElement:function(r,e){for(var i=[],n=[],o=r.decorators,s=o.length-1;s>=0;s--){var a=e[r.placement];a.splice(a.indexOf(r.key),1);var c=this.fromElementDescriptor(r),l=this.toElementFinisherExtras((0,o[s])(c)||c);r=l.element,this.addElementPlacement(r,e),l.finisher&&n.push(l.finisher);var d=l.extras;if(d){for(var f=0;f<d.length;f++)this.addElementPlacement(d[f],e);i.push.apply(i,d)}}return{element:r,finishers:n,extras:i}},decorateConstructor:function(r,e){for(var i=[],n=e.length-1;n>=0;n--){var o=this.fromClassDescriptor(r),s=this.toClassDescriptor((0,e[n])(o)||o);if(s.finisher!==void 0&&i.push(s.finisher),s.elements!==void 0){r=s.elements;for(var a=0;a<r.length-1;a++)for(var c=a+1;c<r.length;c++)if(r[a].key===r[c].key&&r[a].placement===r[c].placement)throw new TypeError("Duplicated element ("+r[a].key+")")}}return{elements:r,finishers:i}},fromElementDescriptor:function(r){var e={kind:r.kind,key:r.key,placement:r.placement,descriptor:r.descriptor},i={value:"Descriptor",configurable:!0};return Object.defineProperty(e,Symbol.toStringTag,i),r.kind==="field"&&(e.initializer=r.initializer),e},toElementDescriptors:function(r){return r===void 0?void 0:_(r).map(function(e){var i=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),i},this)},toElementDescriptor:function(r){var e=String(r.kind);if(e!=="method"&&e!=="field")throw new TypeError(`An element descriptor's .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "`+e+'"');var i=E(r.key),n=String(r.placement);if(n!=="static"&&n!=="prototype"&&n!=="own")throw new TypeError(`An element descriptor's .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "`+n+'"');var o=r.descriptor;this.disallowProperty(r,"elements","An element descriptor");var s={kind:e,key:i,placement:n,descriptor:Object.assign({},o)};return e!=="field"?this.disallowProperty(r,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),s.initializer=r.initializer),s},toElementFinisherExtras:function(r){var e=this.toElementDescriptor(r),i=w(r,"finisher"),n=this.toElementDescriptors(r.extras);return{element:e,finisher:i,extras:n}},fromClassDescriptor:function(r){var e={kind:"class",elements:r.map(this.fromElementDescriptor,this)},i={value:"Descriptor",configurable:!0};return Object.defineProperty(e,Symbol.toStringTag,i),e},toClassDescriptor:function(r){var e=String(r.kind);if(e!=="class")throw new TypeError(`A class descriptor's .kind property must be "class", but a decorator created a class descriptor with .kind "`+e+'"');this.disallowProperty(r,"key","A class descriptor"),this.disallowProperty(r,"placement","A class descriptor"),this.disallowProperty(r,"descriptor","A class descriptor"),this.disallowProperty(r,"initializer","A class descriptor"),this.disallowProperty(r,"extras","A class descriptor");var i=w(r,"finisher"),n=this.toElementDescriptors(r.elements);return{elements:n,finisher:i}},runClassFinishers:function(r,e){for(var i=0;i<e.length;i++){var n=(0,e[i])(r);if(n!==void 0){if(typeof n!="function")throw new TypeError("Finishers must return a constructor.");r=n}}return r},disallowProperty:function(r,e,i){if(r[e]!==void 0)throw new TypeError(i+" can't have a ."+e+" property.")}};return t}function A(t){var r=E(t.key),e;t.kind==="method"?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:t.kind==="get"?e={get:t.value,configurable:!0,enumerable:!1}:t.kind==="set"?e={set:t.value,configurable:!0,enumerable:!1}:t.kind==="field"&&(e={configurable:!0,writable:!0,enumerable:!0});var i={kind:t.kind==="field"?"field":"method",key:r,placement:t.static?"static":t.kind==="field"?"own":"prototype",descriptor:e};return t.decorators&&(i.decorators=t.decorators),t.kind==="field"&&(i.initializer=t.value),i}function T(t,r){t.descriptor.get!==void 0?r.descriptor.get=t.descriptor.get:r.descriptor.set=t.descriptor.set}function S(t){for(var r=[],e=function(s){return s.kind==="method"&&s.key===n.key&&s.placement===n.placement},i=0;i<t.length;i++){var n=t[i],o;if(n.kind==="method"&&(o=r.find(e)))if(k(n.descriptor)||k(o.descriptor)){if(p(n)||p(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(p(n)){if(p(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}T(n,o)}else r.push(n)}return r}function p(t){return t.decorators&&t.decorators.length}function k(t){return t!==void 0&&!(t.value===void 0&&t.writable===void 0)}function w(t,r){var e=t[r];if(e!==void 0&&typeof e!="function")throw new TypeError("Expected '"+r+"' to be a function");return e}function E(t){var r=C(t,"string");return typeof r=="symbol"?r:String(r)}function C(t,r){if(typeof t!="object"||t===null)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var i=e.call(t,r||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function _(t){return L(t)||I(t)||z(t)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z(t,r){if(!t)return;if(typeof t=="string")return b(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return b(t,r)}function b(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,i=new Array(r);e<r;e++)i[e]=t[e];return i}function I(t){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(t))return Array.from(t)}function L(t){if(Array.isArray(t))return t}import{LitElement as R,html as B,unsafeCSS as X,query as Y}from"../../../../web_modules/lit-element.js";import $ from"./styles.js";import u from"../../../store/index.js";import{absMax as q,classNames as D}from"../../../utils/index.js";let F=P(null,function(t,r){class e extends r{constructor(){super();t(this),this.renderRoot.addEventListener("mousedown",n=>{n.preventDefault();const o=n.target,s=o.matches(".corner"),a=c=>{if(!c.movementX&&!c.movementY)return;const l=c.movementX/this.clientWidth,d=c.movementY/this.clientHeight;if(s||u.cropTranslateBy({x:l,y:d}),s){const f=o.dataset.corner,v=["2","3"].indexOf(f)!==-1?-1:1,h=["3","4"].indexOf(f)!==-1?-1:1,y=q(l*v,d*h),m=-y/2;u.cropScaleBy(y),u.cropTranslateBy({x:m*v,y:m*h})}};document.addEventListener("mousemove",a),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",a)},{once:!0})}),u.on("updateui",()=>{this.requestUpdate()})}}return{F:e,d:[{kind:"get",static:!0,key:"styles",value:function(){return X($)}},{kind:"field",decorators:[Y("img")],key:"image",value:void 0},{kind:"method",key:"render",value:function(){return B`
            <div id="container">
                <div>
                    <slot name="original"></slot>
                    <slot name="modified"></slot>
                </div>
                <div class="${D("grid",u.state.ui.cropAdjusting&&"active")}">
                    <div data-corner="1" class="corner corner--tl"></div>
                    <div data-corner="2" class="corner corner--tr"></div>
                    <div data-corner="3" class="corner corner--br"></div>
                    <div data-corner="4" class="corner corner--bl"></div>

                    <div class="${D("lines",u.state.ui.cropAdjusting&&"all")}">
                        <div class="line line--h"></div>
                        <div class="line line--h"></div>
                        <div class="line line--h"></div>
                        <div class="line line--h"></div>
                        <div class="line line--h"></div>
                        <div class="line line--v"></div>
                        <div class="line line--v"></div>
                        <div class="line line--v"></div>
                        <div class="line line--v"></div>
                        <div class="line line--v"></div>
                    </div>
                </div>
            </div>
        `}}]}},R);customElements.define("pis-crop-tool",F);
