function S(i,e,r,n){var t=g();if(n)for(var a=0;a<n.length;a++)t=n[a](t);var s=e(function(c){t.initializeInstanceElements(c,o.elements)},r),o=t.decorateClass(T(s.d.map(D)),i);return t.initializeClassElements(s.F,o.elements),t.runClassFinishers(s.F,o.finishers)}function g(){g=function(){return i};var i={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,r){["method","field"].forEach(function(n){r.forEach(function(t){t.kind===n&&t.placement==="own"&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,r){var n=e.prototype;["method","field"].forEach(function(t){r.forEach(function(a){var s=a.placement;if(a.kind===t&&(s==="static"||s==="prototype")){var o=s==="static"?e:n;this.defineClassElement(o,a)}},this)},this)},defineClassElement:function(e,r){var n=r.descriptor;if(r.kind==="field"){var t=r.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:t===void 0?void 0:t.call(e)}}Object.defineProperty(e,r.key,n)},decorateClass:function(e,r){var n=[],t=[],a={static:[],prototype:[],own:[]};if(e.forEach(function(o){this.addElementPlacement(o,a)},this),e.forEach(function(o){if(!p(o))return n.push(o);var d=this.decorateElement(o,a);n.push(d.element),n.push.apply(n,d.extras),t.push.apply(t,d.finishers)},this),!r)return{elements:n,finishers:t};var s=this.decorateConstructor(n,r);return t.push.apply(t,s.finishers),s.finishers=t,s},addElementPlacement:function(e,r,n){var t=r[e.placement];if(!n&&t.indexOf(e.key)!==-1)throw new TypeError("Duplicated element ("+e.key+")");t.push(e.key)},decorateElement:function(e,r){for(var n=[],t=[],a=e.decorators,s=a.length-1;s>=0;s--){var o=r[e.placement];o.splice(o.indexOf(e.key),1);var d=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,a[s])(d)||d);e=c.element,this.addElementPlacement(e,r),c.finisher&&t.push(c.finisher);var u=c.extras;if(u){for(var m=0;m<u.length;m++)this.addElementPlacement(u[m],r);n.push.apply(n,u)}}return{element:e,finishers:t,extras:n}},decorateConstructor:function(e,r){for(var n=[],t=r.length-1;t>=0;t--){var a=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,r[t])(a)||a);if(s.finisher!==void 0&&n.push(s.finisher),s.elements!==void 0){e=s.elements;for(var o=0;o<e.length-1;o++)for(var d=o+1;d<e.length;d++)if(e[o].key===e[d].key&&e[o].placement===e[d].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor},n={value:"Descriptor",configurable:!0};return Object.defineProperty(r,Symbol.toStringTag,n),e.kind==="field"&&(r.initializer=e.initializer),r},toElementDescriptors:function(e){return e===void 0?void 0:A(e).map(function(r){var n=this.toElementDescriptor(r);return this.disallowProperty(r,"finisher","An element descriptor"),this.disallowProperty(r,"extras","An element descriptor"),n},this)},toElementDescriptor:function(e){var r=String(e.kind);if(r!=="method"&&r!=="field")throw new TypeError(`An element descriptor's .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "`+r+'"');var n=P(e.key),t=String(e.placement);if(t!=="static"&&t!=="prototype"&&t!=="own")throw new TypeError(`An element descriptor's .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "`+t+'"');var a=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:r,key:n,placement:t,descriptor:Object.assign({},a)};return r!=="field"?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(a,"get","The property descriptor of a field descriptor"),this.disallowProperty(a,"set","The property descriptor of a field descriptor"),this.disallowProperty(a,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){var r=this.toElementDescriptor(e),n=b(e,"finisher"),t=this.toElementDescriptors(e.extras);return{element:r,finisher:n,extras:t}},fromClassDescriptor:function(e){var r={kind:"class",elements:e.map(this.fromElementDescriptor,this)},n={value:"Descriptor",configurable:!0};return Object.defineProperty(r,Symbol.toStringTag,n),r},toClassDescriptor:function(e){var r=String(e.kind);if(r!=="class")throw new TypeError(`A class descriptor's .kind property must be "class", but a decorator created a class descriptor with .kind "`+r+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=b(e,"finisher"),t=this.toElementDescriptors(e.elements);return{elements:t,finisher:n}},runClassFinishers:function(e,r){for(var n=0;n<r.length;n++){var t=(0,r[n])(e);if(t!==void 0){if(typeof t!="function")throw new TypeError("Finishers must return a constructor.");e=t}}return e},disallowProperty:function(e,r,n){if(e[r]!==void 0)throw new TypeError(n+" can't have a ."+r+" property.")}};return i}function D(i){var e=P(i.key),r;i.kind==="method"?r={value:i.value,writable:!0,configurable:!0,enumerable:!1}:i.kind==="get"?r={get:i.value,configurable:!0,enumerable:!1}:i.kind==="set"?r={set:i.value,configurable:!0,enumerable:!1}:i.kind==="field"&&(r={configurable:!0,writable:!0,enumerable:!0});var n={kind:i.kind==="field"?"field":"method",key:e,placement:i.static?"static":i.kind==="field"?"own":"prototype",descriptor:r};return i.decorators&&(n.decorators=i.decorators),i.kind==="field"&&(n.initializer=i.value),n}function O(i,e){i.descriptor.get!==void 0?e.descriptor.get=i.descriptor.get:e.descriptor.set=i.descriptor.set}function T(i){for(var e=[],r=function(s){return s.kind==="method"&&s.key===t.key&&s.placement===t.placement},n=0;n<i.length;n++){var t=i[n],a;if(t.kind==="method"&&(a=e.find(r)))if(k(t.descriptor)||k(a.descriptor)){if(p(t)||p(a))throw new ReferenceError("Duplicated methods ("+t.key+") can't be decorated.");a.descriptor=t.descriptor}else{if(p(t)){if(p(a))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+t.key+").");a.decorators=t.decorators}O(t,a)}else e.push(t)}return e}function p(i){return i.decorators&&i.decorators.length}function k(i){return i!==void 0&&!(i.value===void 0&&i.writable===void 0)}function b(i,e){var r=i[e];if(r!==void 0&&typeof r!="function")throw new TypeError("Expected '"+e+"' to be a function");return r}function P(i){var e=$(i,"string");return typeof e=="symbol"?e:String(e)}function $(i,e){if(typeof i!="object"||i===null)return i;var r=i[Symbol.toPrimitive];if(r!==void 0){var n=r.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function A(i){return R(i)||z(i)||_(i)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(i,e){if(!i)return;if(typeof i=="string")return w(i,e);var r=Object.prototype.toString.call(i).slice(8,-1);if(r==="Object"&&i.constructor&&(r=i.constructor.name),r==="Map"||r==="Set")return Array.from(i);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(i,e)}function w(i,e){(e==null||e>i.length)&&(e=i.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=i[r];return n}function z(i){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(i))return Array.from(i)}function R(i){if(Array.isArray(i))return i}function f(i,e,r){return typeof Reflect!="undefined"&&Reflect.get?f=Reflect.get:f=function(t,a,s){var o=U(t,a);if(!o)return;var d=Object.getOwnPropertyDescriptor(o,a);return d.get?d.get.call(s):d.value},f(i,e,r||i)}function U(i,e){for(;!Object.prototype.hasOwnProperty.call(i,e)&&!(i=h(i),i===null););return i}function h(i){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},h(i)}import{LitElement as x,html as v,unsafeCSS as q,query as E,property as y}from"../../../../web_modules/lit-element.js";import{ImageCheckedOutIcon as L,MovieCameraIcon as F,VideoCheckedOutIcon as j,UndoIcon as M,MoveLeftRightIcon as V,FolderOpenIcon as W,GearsIcon as B,ColorPaletteIcon as H,RedoIcon as G}from"../../../../web_modules/@spectrum-web-components/icons-workflow.js";import K from"./styles.js";import{create as N}from"../../../renderer/index.js";import{loadImage as J,openFile as C}from"../../../utils/index.js";import{MimeTypes as Q}from"../../../types.js";import l from"../../../store.js";import"../PalettePanel/index.js";import"../ImageComparison/index.js";import"../EditPanel/index.js";let X=S(null,function(i,e){class r extends e{constructor(...n){super(...n);i(this)}}return{F:r,d:[{kind:"field",decorators:[E("#canvas")],key:"canvas",value:void 0},{kind:"field",decorators:[y({type:String,attribute:"image-src"})],key:"imageSrc",value(){return""}},{kind:"field",key:"video",value:void 0},{kind:"field",decorators:[E("pis-palette-panel")],key:"palettePanel",value:void 0},{kind:"field",key:"renderer",value:void 0},{kind:"field",decorators:[y({type:Boolean})],key:"imageComparison",value(){return!1}},{kind:"field",decorators:[y({type:String})],key:"currentPanelTab",value(){return"adjust"}},{kind:"get",static:!0,key:"styles",value:function(){return q(K)}},{kind:"method",key:"firstUpdated",value:function(){this.renderer=N(this.canvas),l.on("editParamsChanged",()=>{this.renderer.filters.light.parameters=l.state.editParams.light,this.renderer.filters.color.parameters=l.state.editParams.color,this.renderer.filters.edgeDetection.parameters=l.state.editParams.effects.edgeDetection,this.renderer.filters.pixelate.parameters.pixelSize=l.state.editParams.effects.pixelate,this.renderer.filters.unsharpMask.parameters=l.state.editParams.detail.sharpen,this.renderer.filters.dither.parameters.threshold=l.state.editParams.effects.dither.threshold,this.renderer.filters.dither.parameters.size=l.state.editParams.effects.dither.size,this.renderer.filters.blur.parameters.radius=l.state.editParams.detail.blur.radius,this.renderer.filters.blur.pass=l.state.editParams.detail.blur.pass*2,this.renderer.draw()}),l.on("updateui",()=>{this.requestUpdate()})}},{kind:"method",key:"clear",value:function(){const{video:t,imageSrc:a}=this;a&&a.startsWith("blob:")&&URL.revokeObjectURL(a),t&&(t.srcObject&&t.srcObject.getTracks().forEach(s=>s.stop()),t.src&&t.src.startsWith("blob:")&&URL.revokeObjectURL(t.src)),this.video=null,this.imageSrc=null}},{kind:"method",key:"handleOpenImage",value:function(){this.clear(),C().then(t=>{this.imageSrc=URL.createObjectURL(t)})}},{kind:"method",key:"handleOpenCamera",value:function(){this.clear(),navigator.mediaDevices.getUserMedia({video:!0}).then(t=>{const a=this.video=document.createElement("video");a.srcObject=t,a.play().then(()=>{a.width=a.videoWidth,a.height=a.videoHeight,this.renderer.setSource(a);const s=()=>{this.renderer.draw(),this.video&&requestAnimationFrame(s)};requestAnimationFrame(s)})},console.error)}},{kind:"method",key:"handleOpenVideo",value:function(){this.clear(),C(Q.Video).then(t=>{const a=this.video=document.createElement("video");a.src=URL.createObjectURL(t),a.play().then(()=>{a.width=a.videoWidth,a.height=a.videoHeight,this.renderer.setSource(a);const s=()=>{this.renderer.draw(),this.video&&requestAnimationFrame(s)};requestAnimationFrame(s)}),a.onended=a.play.bind(a)})}},{kind:"method",key:"handlePaletteChange",value:function(){const t=this.palettePanel.editor.palette;t&&t.length?(console.log(new ImageData(new Uint8ClampedArray(t.flat()),t.length,1)),this.renderer.filters.palette.setPalette(new ImageData(new Uint8ClampedArray(t.flat()),t.length,1))):this.renderer.filters.palette.setPalette(null),l.setEditParam({name:"effects.dither.threshold",value:t?1/t.length:0})}},{kind:"method",key:"update",value:function(t){f(h(r.prototype),"update",this).call(this,t),t.has("imageSrc")&&t.get("imageSrc")!==this.imageSrc&&J(this.imageSrc).then(a=>{this.renderer.setSource(a),this.palettePanel.editor.image=a})}},{kind:"method",key:"toggleImageComparison",value:function(){this.imageComparison=!this.imageComparison}},{kind:"method",key:"handleParamsChange",value:function(t){const a=t.composedPath()[0];l.setEditParam({name:a.getAttribute("name"),value:a.value}),l.saveSnapshot()}},{kind:"method",key:"renderEditPanel",value:function(){return v`
            <pis-edit-panel
                @input="${this.handleParamsChange}"
                .hidden=${this.currentPanelTab!=="adjust"}
                .params=${l.state.editParams}
            ></pis-edit-panel>
        `}},{kind:"method",key:"renderPalette",value:function(){return v`
            <pis-palette-panel
                @change="${this.handlePaletteChange}"
                .hidden=${this.currentPanelTab!=="palette"}
            >
            </pis-palette-panel>
        `}},{kind:"field",key:"handlePanelTabChange",value(){return n=>()=>{this.currentPanelTab=n}}},{kind:"method",key:"render",value:function(){return v`
            <div id="menuBar"></div>

            <div id="leftSidebar" class="scrollable sidebar">
                <sp-action-menu>
                    <sp-icon size="s" slot="icon">${W()}</sp-icon>
                    <!-- <span slot="label">Open</span> -->
                    <sp-menu>
                        <sp-menu-item @click="${this.handleOpenImage}">
                            <sp-icon size="s" slot="icon">${L()}</sp-icon>Image
                        </sp-menu-item>
                        <sp-menu-item>
                            <sp-icon size="s" slot="icon">${j()}</sp-icon>Video
                        </sp-menu-item>
                        <sp-menu-item @click="${this.handleOpenCamera}">
                            <sp-icon size="s" slot="icon">${F()}</sp-icon>Camera
                        </sp-menu-item>
                    </sp-menu>
                </sp-action-menu>

                <sp-rule size="small"></sp-rule>

                <sp-action-button
                    .disabled="${!l.state.history.canUndo}"
                    quiet
                    @click="${l.undo}"
                >
                    <sp-icon size="s" slot="icon">${M()}</sp-icon>
                </sp-action-button>

                <sp-action-button
                    .disabled="${!l.state.history.canRedo}"
                    quiet
                    @click="${l.redo}"
                >
                    <sp-icon size="s" slot="icon">${G()}</sp-icon>
                </sp-action-button>
            </div>

            <div id="main">
                <pis-image-comparison .enable="${this.imageComparison}">
                    <img slot="original" src="${this.imageSrc}" />
                    <canvas slot="modified" id="canvas"></canvas>
                </pis-image-comparison>
            </div>

            <div id="rightPanel" class="scrollable">
                ${this.renderEditPanel()} ${this.renderPalette()}
            </div>

            <div id="rightSidebar" class="sidebar">
                <sp-action-button
                    quiet
                    .selected=${this.currentPanelTab==="adjust"}
                    @click="${this.handlePanelTabChange("adjust")}"
                >
                    <sp-icon size="s" slot="icon">${B()}</sp-icon>
                </sp-action-button>

                <sp-action-button
                    quiet
                    .selected=${this.currentPanelTab==="palette"}
                    @click="${this.handlePanelTabChange("palette")}"
                >
                    <sp-icon size="s" slot="icon">${H()}</sp-icon>
                </sp-action-button>

                <sp-action-button
                    quiet
                    toggles
                    .selected=${this.imageComparison}
                    @click="${this.toggleImageComparison}"
                >
                    <sp-icon size="s" slot="icon">${V()}</sp-icon>
                </sp-action-button>
            </div>

            <sp-icons-medium></sp-icons-medium>
            <sp-icons-workflow></sp-icons-workflow>
        `}}]}},x);customElements.define("pis-app",X);
