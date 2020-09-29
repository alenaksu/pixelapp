function S(i,e,r,a){var t=k();if(a)for(var n=0;n<a.length;n++)t=a[n](t);var s=e(function(c){t.initializeInstanceElements(c,o.elements)},r),o=t.decorateClass(O(s.d.map(D)),i);return t.initializeClassElements(s.F,o.elements),t.runClassFinishers(s.F,o.finishers)}function k(){k=function(){return i};var i={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,r){["method","field"].forEach(function(a){r.forEach(function(t){t.kind===a&&t.placement==="own"&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,r){var a=e.prototype;["method","field"].forEach(function(t){r.forEach(function(n){var s=n.placement;if(n.kind===t&&(s==="static"||s==="prototype")){var o=s==="static"?e:a;this.defineClassElement(o,n)}},this)},this)},defineClassElement:function(e,r){var a=r.descriptor;if(r.kind==="field"){var t=r.initializer;a={enumerable:a.enumerable,writable:a.writable,configurable:a.configurable,value:t===void 0?void 0:t.call(e)}}Object.defineProperty(e,r.key,a)},decorateClass:function(e,r){var a=[],t=[],n={static:[],prototype:[],own:[]};if(e.forEach(function(o){this.addElementPlacement(o,n)},this),e.forEach(function(o){if(!p(o))return a.push(o);var d=this.decorateElement(o,n);a.push(d.element),a.push.apply(a,d.extras),t.push.apply(t,d.finishers)},this),!r)return{elements:a,finishers:t};var s=this.decorateConstructor(a,r);return t.push.apply(t,s.finishers),s.finishers=t,s},addElementPlacement:function(e,r,a){var t=r[e.placement];if(!a&&t.indexOf(e.key)!==-1)throw new TypeError("Duplicated element ("+e.key+")");t.push(e.key)},decorateElement:function(e,r){for(var a=[],t=[],n=e.decorators,s=n.length-1;s>=0;s--){var o=r[e.placement];o.splice(o.indexOf(e.key),1);var d=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[s])(d)||d);e=c.element,this.addElementPlacement(e,r),c.finisher&&t.push(c.finisher);var u=c.extras;if(u){for(var v=0;v<u.length;v++)this.addElementPlacement(u[v],r);a.push.apply(a,u)}}return{element:e,finishers:t,extras:a}},decorateConstructor:function(e,r){for(var a=[],t=r.length-1;t>=0;t--){var n=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,r[t])(n)||n);if(s.finisher!==void 0&&a.push(s.finisher),s.elements!==void 0){e=s.elements;for(var o=0;o<e.length-1;o++)for(var d=o+1;d<e.length;d++)if(e[o].key===e[d].key&&e[o].placement===e[d].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:a}},fromElementDescriptor:function(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor},a={value:"Descriptor",configurable:!0};return Object.defineProperty(r,Symbol.toStringTag,a),e.kind==="field"&&(r.initializer=e.initializer),r},toElementDescriptors:function(e){return e===void 0?void 0:A(e).map(function(r){var a=this.toElementDescriptor(r);return this.disallowProperty(r,"finisher","An element descriptor"),this.disallowProperty(r,"extras","An element descriptor"),a},this)},toElementDescriptor:function(e){var r=String(e.kind);if(r!=="method"&&r!=="field")throw new TypeError(`An element descriptor's .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "`+r+'"');var a=w(e.key),t=String(e.placement);if(t!=="static"&&t!=="prototype"&&t!=="own")throw new TypeError(`An element descriptor's .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "`+t+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:r,key:a,placement:t,descriptor:Object.assign({},n)};return r!=="field"?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){var r=this.toElementDescriptor(e),a=P(e,"finisher"),t=this.toElementDescriptors(e.extras);return{element:r,finisher:a,extras:t}},fromClassDescriptor:function(e){var r={kind:"class",elements:e.map(this.fromElementDescriptor,this)},a={value:"Descriptor",configurable:!0};return Object.defineProperty(r,Symbol.toStringTag,a),r},toClassDescriptor:function(e){var r=String(e.kind);if(r!=="class")throw new TypeError(`A class descriptor's .kind property must be "class", but a decorator created a class descriptor with .kind "`+r+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var a=P(e,"finisher"),t=this.toElementDescriptors(e.elements);return{elements:t,finisher:a}},runClassFinishers:function(e,r){for(var a=0;a<r.length;a++){var t=(0,r[a])(e);if(t!==void 0){if(typeof t!="function")throw new TypeError("Finishers must return a constructor.");e=t}}return e},disallowProperty:function(e,r,a){if(e[r]!==void 0)throw new TypeError(a+" can't have a ."+r+" property.")}};return i}function D(i){var e=w(i.key),r;i.kind==="method"?r={value:i.value,writable:!0,configurable:!0,enumerable:!1}:i.kind==="get"?r={get:i.value,configurable:!0,enumerable:!1}:i.kind==="set"?r={set:i.value,configurable:!0,enumerable:!1}:i.kind==="field"&&(r={configurable:!0,writable:!0,enumerable:!0});var a={kind:i.kind==="field"?"field":"method",key:e,placement:i.static?"static":i.kind==="field"?"own":"prototype",descriptor:r};return i.decorators&&(a.decorators=i.decorators),i.kind==="field"&&(a.initializer=i.value),a}function $(i,e){i.descriptor.get!==void 0?e.descriptor.get=i.descriptor.get:e.descriptor.set=i.descriptor.set}function O(i){for(var e=[],r=function(s){return s.kind==="method"&&s.key===t.key&&s.placement===t.placement},a=0;a<i.length;a++){var t=i[a],n;if(t.kind==="method"&&(n=e.find(r)))if(b(t.descriptor)||b(n.descriptor)){if(p(t)||p(n))throw new ReferenceError("Duplicated methods ("+t.key+") can't be decorated.");n.descriptor=t.descriptor}else{if(p(t)){if(p(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+t.key+").");n.decorators=t.decorators}$(t,n)}else e.push(t)}return e}function p(i){return i.decorators&&i.decorators.length}function b(i){return i!==void 0&&!(i.value===void 0&&i.writable===void 0)}function P(i,e){var r=i[e];if(r!==void 0&&typeof r!="function")throw new TypeError("Expected '"+e+"' to be a function");return r}function w(i){var e=T(i,"string");return typeof e=="symbol"?e:String(e)}function T(i,e){if(typeof i!="object"||i===null)return i;var r=i[Symbol.toPrimitive];if(r!==void 0){var a=r.call(i,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function A(i){return x(i)||z(i)||_(i)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(i,e){if(!i)return;if(typeof i=="string")return E(i,e);var r=Object.prototype.toString.call(i).slice(8,-1);if(r==="Object"&&i.constructor&&(r=i.constructor.name),r==="Map"||r==="Set")return Array.from(i);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(i,e)}function E(i,e){(e==null||e>i.length)&&(e=i.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=i[r];return a}function z(i){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(i))return Array.from(i)}function x(i){if(Array.isArray(i))return i}function h(i,e,r){return typeof Reflect!="undefined"&&Reflect.get?h=Reflect.get:h=function(t,n,s){var o=R(t,n);if(!o)return;var d=Object.getOwnPropertyDescriptor(o,n);return d.get?d.get.call(s):d.value},h(i,e,r||i)}function R(i,e){for(;!Object.prototype.hasOwnProperty.call(i,e)&&!(i=f(i),i===null););return i}function f(i){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},f(i)}import{LitElement as U,html as y,unsafeCSS as q,query as m,property as g}from"../../../../web_modules/lit-element.js";import{ImageCheckedOutIcon as F,MovieCameraIcon as L,VideoCheckedOutIcon as j,UndoIcon as M,MoveLeftRightIcon as V,FolderOpenIcon as W,PropertiesIcon as H,ColorPaletteIcon as B,RedoIcon as G,SaveToLightIcon as K}from"../../../../web_modules/@spectrum-web-components/icons-workflow.js";import N from"./styles.js";import{createEditor as J}from"../../../renderer/index.js";import{loadImage as Q,openFile as C,saveCanvas as X}from"../../../utils/index.js";import{MimeTypes as Y}from"../../../types.js";import l from"../../../store.js";import"../PalettePanel/index.js";import"../ImageComparison/index.js";import"../EditPanel/index.js";import"../Histogram/index.js";import"../SaveDialog/index.js";let Z=S(null,function(i,e){class r extends e{constructor(...a){super(...a);i(this)}}return{F:r,d:[{kind:"field",decorators:[m("#canvas")],key:"canvas",value:void 0},{kind:"field",decorators:[g({type:String,attribute:"image-src"})],key:"imageSrc",value(){return""}},{kind:"field",key:"video",value:void 0},{kind:"field",decorators:[m("pis-palette-panel")],key:"palettePanel",value:void 0},{kind:"field",decorators:[m("#histogram")],key:"histogram",value:void 0},{kind:"field",decorators:[m("#saveDialog")],key:"saveDialog",value:void 0},{kind:"field",key:"renderer",value:void 0},{kind:"field",decorators:[g({type:Boolean})],key:"imageComparison",value(){return!1}},{kind:"field",decorators:[g({type:String})],key:"currentPanelTab",value(){return"adjust"}},{kind:"get",static:!0,key:"styles",value:function(){return q(N)}},{kind:"method",key:"firstUpdated",value:function(){this.renderer=J(this.canvas),l.on("editParamsChanged",()=>{this.renderer.filters.light.parameters=l.state.editParams.light,this.renderer.filters.color.parameters=l.state.editParams.color,this.renderer.filters.edgeDetection.parameters=l.state.editParams.effects.edgeDetection,this.renderer.filters.pixelate.parameters.pixelSize=l.state.editParams.effects.pixelate,this.renderer.filters.unsharpMask.parameters=l.state.editParams.detail.sharpen,this.renderer.filters.dither.parameters.threshold=l.state.editParams.effects.dither.threshold,this.renderer.filters.dither.parameters.size=l.state.editParams.effects.dither.size,this.renderer.filters.blur.parameters.radius=l.state.editParams.detail.blur.radius,this.renderer.filters.blur.pass=l.state.editParams.detail.blur.pass*2,this.renderer.draw(),this.histogram.draw(this.canvas)}),l.on("updateui",()=>{this.requestUpdate()})}},{kind:"method",key:"clear",value:function(){const{video:t,imageSrc:n}=this;n&&n.startsWith("blob:")&&URL.revokeObjectURL(n),t&&(t.srcObject&&t.srcObject.getTracks().forEach(s=>s.stop()),t.src&&t.src.startsWith("blob:")&&URL.revokeObjectURL(t.src)),this.video=null,this.imageSrc=null}},{kind:"method",key:"handleOpenImage",value:function(){this.clear(),C().then(t=>{this.imageSrc=URL.createObjectURL(t)})}},{kind:"method",key:"handleOpenCamera",value:function(){this.clear(),navigator.mediaDevices.getUserMedia({video:!0}).then(t=>{const n=this.video=document.createElement("video");n.srcObject=t,n.play().then(()=>{n.width=n.videoWidth,n.height=n.videoHeight,this.renderer.setSource(n);const s=()=>{this.renderer.draw(),this.video&&requestAnimationFrame(s)};requestAnimationFrame(s)})},console.error)}},{kind:"method",key:"handleOpenVideo",value:function(){this.clear(),C(Y.Video).then(t=>{const n=this.video=document.createElement("video");n.src=URL.createObjectURL(t),n.play().then(()=>{n.width=n.videoWidth,n.height=n.videoHeight,this.renderer.setSource(n);const s=()=>{this.renderer.draw(),this.video&&requestAnimationFrame(s)};requestAnimationFrame(s)}),n.onended=n.play.bind(n)})}},{kind:"method",key:"handlePaletteChange",value:function(){const t=this.palettePanel.editor.palette;t&&t.length?(console.log(new ImageData(new Uint8ClampedArray(t.flat()),t.length,1)),this.renderer.filters.palette.setPalette(new ImageData(new Uint8ClampedArray(t.flat()),t.length,1))):this.renderer.filters.palette.setPalette(null),l.setEditParam({name:"effects.dither.threshold",value:t?1/t.length:0})}},{kind:"method",key:"update",value:function(t){h(f(r.prototype),"update",this).call(this,t),t.has("imageSrc")&&t.get("imageSrc")!==this.imageSrc&&Q(this.imageSrc).then(n=>{this.renderer.setSource(n),this.histogram.draw(this.renderer.canvas),this.palettePanel.editor.image=n})}},{kind:"method",key:"toggleImageComparison",value:function(){this.imageComparison=!this.imageComparison}},{kind:"method",key:"handleParamsChange",value:function(t){const n=t.composedPath()[0];l.setEditParam({name:n.getAttribute("name"),value:n.value}),l.saveSnapshot()}},{kind:"method",key:"renderEditPanel",value:function(){return y`
            <pis-edit-panel
                @input="${this.handleParamsChange}"
                .hidden=${this.currentPanelTab!=="adjust"}
                .params=${l.state.editParams}
            ></pis-edit-panel>
        `}},{kind:"method",key:"renderPalette",value:function(){return y`
            <pis-palette-panel
                @change="${this.handlePaletteChange}"
                .hidden=${this.currentPanelTab!=="palette"}
            >
            </pis-palette-panel>
        `}},{kind:"field",key:"handlePanelTabChange",value(){return a=>()=>{this.currentPanelTab=a}}},{kind:"method",key:"handleSaveClick",value:function(){this.saveDialog.open=!0}},{kind:"method",key:"handleSaveFile",value:function({detail:{quality:t}}){X(this.canvas,{quality:t})}},{kind:"method",key:"render",value:function(){return y`
            <div id="menuBar"></div>

            <div id="leftSidebar" class="scrollable sidebar">
                <sp-action-menu>
                    <sp-icon size="s" slot="icon">${W()}</sp-icon>
                    <!-- <span slot="label">Open</span> -->
                    <sp-menu>
                        <sp-menu-item @click="${this.handleOpenImage}">
                            <sp-icon size="s" slot="icon">${F()}</sp-icon>Image
                        </sp-menu-item>
                        <sp-menu-item>
                            <sp-icon size="s" slot="icon">${j()}</sp-icon>Video
                        </sp-menu-item>
                        <sp-menu-item @click="${this.handleOpenCamera}">
                            <sp-icon size="s" slot="icon">${L()}</sp-icon>Camera
                        </sp-menu-item>
                    </sp-menu>
                </sp-action-menu>

                <sp-action-button quiet @click="${this.handleSaveClick}">
                    <sp-icon size="s" slot="icon">${K()}</sp-icon>
                </sp-action-button>

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
                <pis-histogram id="histogram"></pis-histogram>
                ${this.renderEditPanel()} ${this.renderPalette()}
            </div>

            <div id="rightSidebar" class="sidebar">
                <sp-action-button
                    quiet
                    .selected=${this.currentPanelTab==="adjust"}
                    @click="${this.handlePanelTabChange("adjust")}"
                >
                    <sp-icon size="s" slot="icon">${H()}</sp-icon>
                </sp-action-button>

                <sp-action-button
                    quiet
                    .selected=${this.currentPanelTab==="palette"}
                    @click="${this.handlePanelTabChange("palette")}"
                >
                    <sp-icon size="s" slot="icon">${B()}</sp-icon>
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

            <pis-save-dialog id="saveDialog" @confirm="${this.handleSaveFile}"></pis-save-dialog>
        `}}]}},U);customElements.define("pis-app",Z);
