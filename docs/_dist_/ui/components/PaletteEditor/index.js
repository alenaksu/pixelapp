function b(n,e,t,r){var i=u();if(r)for(var o=0;o<r.length;o++)i=r[o](i);var a=e(function(c){i.initializeInstanceElements(c,s.elements)},t),s=i.decorateClass(P(a.d.map(C)),n);return i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}function u(){u=function(){return n};var n={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(r){t.forEach(function(i){i.kind===r&&i.placement==="own"&&this.defineClassElement(e,i)},this)},this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach(function(i){t.forEach(function(o){var a=o.placement;if(o.kind===i&&(a==="static"||a==="prototype")){var s=a==="static"?e:r;this.defineClassElement(s,o)}},this)},this)},defineClassElement:function(e,t){var r=t.descriptor;if(t.kind==="field"){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:i===void 0?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],o={static:[],prototype:[],own:[]};if(e.forEach(function(s){this.addElementPlacement(s,o)},this),e.forEach(function(s){if(!d(s))return r.push(s);var l=this.decorateElement(s,o);r.push(l.element),r.push.apply(r,l.extras),i.push.apply(i,l.finishers)},this),!t)return{elements:r,finishers:i};var a=this.decorateConstructor(r,t);return i.push.apply(i,a.finishers),a.finishers=i,a},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&i.indexOf(e.key)!==-1)throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],o=e.decorators,a=o.length-1;a>=0;a--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var l=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,o[a])(l)||l);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var p=c.extras;if(p){for(var f=0;f<p.length;f++)this.addElementPlacement(p[f],t);r.push.apply(r,p)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var o=this.fromClassDescriptor(e),a=this.toClassDescriptor((0,t[i])(o)||o);if(a.finisher!==void 0&&r.push(a.finisher),a.elements!==void 0){e=a.elements;for(var s=0;s<e.length-1;s++)for(var l=s+1;l<e.length;l++)if(e[s].key===e[l].key&&e[s].placement===e[l].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor},r={value:"Descriptor",configurable:!0};return Object.defineProperty(t,Symbol.toStringTag,r),e.kind==="field"&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){return e===void 0?void 0:T(e).map(function(t){var r=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),r},this)},toElementDescriptor:function(e){var t=String(e.kind);if(t!=="method"&&t!=="field")throw new TypeError(`An element descriptor's .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "`+t+'"');var r=m(e.key),i=String(e.placement);if(i!=="static"&&i!=="prototype"&&i!=="own")throw new TypeError(`An element descriptor's .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "`+i+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var a={kind:t,key:r,placement:i,descriptor:Object.assign({},o)};return t!=="field"?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),a.initializer=e.initializer),a},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),r=y(e,"finisher"),i=this.toElementDescriptors(e.extras);return{element:t,finisher:r,extras:i}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)},r={value:"Descriptor",configurable:!0};return Object.defineProperty(t,Symbol.toStringTag,r),t},toClassDescriptor:function(e){var t=String(e.kind);if(t!=="class")throw new TypeError(`A class descriptor's .kind property must be "class", but a decorator created a class descriptor with .kind "`+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=y(e,"finisher"),i=this.toElementDescriptors(e.elements);return{elements:i,finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(i!==void 0){if(typeof i!="function")throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(e[t]!==void 0)throw new TypeError(r+" can't have a ."+t+" property.")}};return n}function C(n){var e=m(n.key),t;n.kind==="method"?t={value:n.value,writable:!0,configurable:!0,enumerable:!1}:n.kind==="get"?t={get:n.value,configurable:!0,enumerable:!1}:n.kind==="set"?t={set:n.value,configurable:!0,enumerable:!1}:n.kind==="field"&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:n.kind==="field"?"field":"method",key:e,placement:n.static?"static":n.kind==="field"?"own":"prototype",descriptor:t};return n.decorators&&(r.decorators=n.decorators),n.kind==="field"&&(r.initializer=n.value),r}function D(n,e){n.descriptor.get!==void 0?e.descriptor.get=n.descriptor.get:e.descriptor.set=n.descriptor.set}function P(n){for(var e=[],t=function(a){return a.kind==="method"&&a.key===i.key&&a.placement===i.placement},r=0;r<n.length;r++){var i=n[r],o;if(i.kind==="method"&&(o=e.find(t)))if(h(i.descriptor)||h(o.descriptor)){if(d(i)||d(o))throw new ReferenceError("Duplicated methods ("+i.key+") can't be decorated.");o.descriptor=i.descriptor}else{if(d(i)){if(d(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+i.key+").");o.decorators=i.decorators}D(i,o)}else e.push(i)}return e}function d(n){return n.decorators&&n.decorators.length}function h(n){return n!==void 0&&!(n.value===void 0&&n.writable===void 0)}function y(n,e){var t=n[e];if(t!==void 0&&typeof t!="function")throw new TypeError("Expected '"+e+"' to be a function");return t}function m(n){var e=A(n,"string");return typeof e=="symbol"?e:String(e)}function A(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function T(n){return z(n)||x(n)||_(n)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(n,e){if(!n)return;if(typeof n=="string")return v(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(n,e)}function v(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function x(n){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(n))return Array.from(n)}function z(n){if(Array.isArray(n))return n}import{LitElement as I,html as k,property as g,unsafeCSS as R}from"../../../../web_modules/lit-element.js";import{rgbToHex as $,openFile as O,loadImage as N,iteratePixels as w,hexToRgb as q}from"../../../utils.js";import E from"../../../processing/index.js";import{AddIcon as F}from"../../../../web_modules/@spectrum-web-components/icons-workflow.js";import H from"./styles.js";import"../ColorPicker/index.js";let L=b(null,function(n,e){class t extends e{constructor(...r){super(...r);n(this)}}return{F:t,d:[{kind:"field",decorators:[g({type:Array})],key:"palette",value(){return[]}},{kind:"field",decorators:[g({type:Object,reflect:!1})],key:"image",value:void 0},{kind:"get",static:!0,key:"styles",value:function(){return R(H)}},{kind:"method",key:"handleImportClick",value:function(){O().then(i=>N(URL.createObjectURL(i))).then(i=>{this.palette=[...w(i)].map(([o])=>o),this.fireChangeEvent()})}},{kind:"method",key:"handleCreateClick",value:function(){const i=Number(prompt("Choose a method: 1 = median-cut, 2 = octree","1")),o=Number(prompt("How many colors?","24")),a=this.image,s=i===1?E.quantization.medianCut(a,o):E.quantization.octree(a,o),l=new ImageData(s.length,1);l.data.set(s.flat()),this.palette=[...w(l)].map(([c])=>c),this.fireChangeEvent()}},{kind:"method",key:"handleResetClick",value:function(){this.palette=[],this.fireChangeEvent()}},{kind:"method",key:"fireChangeEvent",value:function(){this.dispatchEvent(new Event("change"))}},{kind:"method",key:"handleColorChange",value:function({currentTarget:i}){const o=Number(i.dataset.index),a=q(i.color,!1);this.palette[o]=a,this.fireChangeEvent()}},{kind:"method",key:"handleAddColorClick",value:function(){this.palette=[...this.palette,[0,0,0,255]],this.fireChangeEvent()}},{kind:"method",key:"renderColors",value:function(){const i=this.palette,o=i.map((a,s)=>k`
                <pis-color-picker
                    @change="${this.handleColorChange}"
                    data-index="${s}"
                    color="${$(a,!1)}"
                >
                </pis-color-picker>
            `);return o}},{kind:"method",key:"render",value:function(){const{palette:i}=this;return k`
            <sp-button-group>
                <sp-action-button @click="${this.handleImportClick}">Import</sp-action-button>
                <sp-action-button @click="${this.handleCreateClick}">Create</sp-action-button>
                <sp-action-button @click="${this.handleResetClick}">Reset</sp-action-button>
            </sp-button-group>

            <div class="swatch">
                ${i&&this.renderColors()}
                <sp-action-button quiet id="addButton" @click="${this.handleAddColorClick}">
                    <sp-icon slot="icon">${F()}</sp-icon>
                </sp-action-button>
            </div>
        `}}]}},I);customElements.define("pis-palette-editor",L);
