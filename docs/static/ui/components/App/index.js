function S(a,e,r,i){var t=k();if(i)for(var n=0;n<i.length;n++)t=i[n](t);var s=e(function(c){t.initializeInstanceElements(c,l.elements)},r),l=t.decorateClass(D(s.d.map($)),a);return t.initializeClassElements(s.F,l.elements),t.runClassFinishers(s.F,l.finishers)}function k(){k=function(){return a};var a={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,r){["method","field"].forEach(function(i){r.forEach(function(t){t.kind===i&&t.placement==="own"&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,r){var i=e.prototype;["method","field"].forEach(function(t){r.forEach(function(n){var s=n.placement;if(n.kind===t&&(s==="static"||s==="prototype")){var l=s==="static"?e:i;this.defineClassElement(l,n)}},this)},this)},defineClassElement:function(e,r){var i=r.descriptor;if(r.kind==="field"){var t=r.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:t===void 0?void 0:t.call(e)}}Object.defineProperty(e,r.key,i)},decorateClass:function(e,r){var i=[],t=[],n={static:[],prototype:[],own:[]};if(e.forEach(function(l){this.addElementPlacement(l,n)},this),e.forEach(function(l){if(!u(l))return i.push(l);var d=this.decorateElement(l,n);i.push(d.element),i.push.apply(i,d.extras),t.push.apply(t,d.finishers)},this),!r)return{elements:i,finishers:t};var s=this.decorateConstructor(i,r);return t.push.apply(t,s.finishers),s.finishers=t,s},addElementPlacement:function(e,r,i){var t=r[e.placement];if(!i&&t.indexOf(e.key)!==-1)throw new TypeError("Duplicated element ("+e.key+")");t.push(e.key)},decorateElement:function(e,r){for(var i=[],t=[],n=e.decorators,s=n.length-1;s>=0;s--){var l=r[e.placement];l.splice(l.indexOf(e.key),1);var d=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[s])(d)||d);e=c.element,this.addElementPlacement(e,r),c.finisher&&t.push(c.finisher);var h=c.extras;if(h){for(var g=0;g<h.length;g++)this.addElementPlacement(h[g],r);i.push.apply(i,h)}}return{element:e,finishers:t,extras:i}},decorateConstructor:function(e,r){for(var i=[],t=r.length-1;t>=0;t--){var n=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,r[t])(n)||n);if(s.finisher!==void 0&&i.push(s.finisher),s.elements!==void 0){e=s.elements;for(var l=0;l<e.length-1;l++)for(var d=l+1;d<e.length;d++)if(e[l].key===e[d].key&&e[l].placement===e[d].placement)throw new TypeError("Duplicated element ("+e[l].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor},i={value:"Descriptor",configurable:!0};return Object.defineProperty(r,Symbol.toStringTag,i),e.kind==="field"&&(r.initializer=e.initializer),r},toElementDescriptors:function(e){if(e!==void 0)return A(e).map(function(r){var i=this.toElementDescriptor(r);return this.disallowProperty(r,"finisher","An element descriptor"),this.disallowProperty(r,"extras","An element descriptor"),i},this)},toElementDescriptor:function(e){var r=String(e.kind);if(r!=="method"&&r!=="field")throw new TypeError(`An element descriptor's .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "`+r+'"');var i=w(e.key),t=String(e.placement);if(t!=="static"&&t!=="prototype"&&t!=="own")throw new TypeError(`An element descriptor's .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "`+t+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:r,key:i,placement:t,descriptor:Object.assign({},n)};return r!=="field"?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){var r=this.toElementDescriptor(e),i=b(e,"finisher"),t=this.toElementDescriptors(e.extras);return{element:r,finisher:i,extras:t}},fromClassDescriptor:function(e){var r={kind:"class",elements:e.map(this.fromElementDescriptor,this)},i={value:"Descriptor",configurable:!0};return Object.defineProperty(r,Symbol.toStringTag,i),r},toClassDescriptor:function(e){var r=String(e.kind);if(r!=="class")throw new TypeError(`A class descriptor's .kind property must be "class", but a decorator created a class descriptor with .kind "`+r+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=b(e,"finisher"),t=this.toElementDescriptors(e.elements);return{elements:t,finisher:i}},runClassFinishers:function(e,r){for(var i=0;i<r.length;i++){var t=(0,r[i])(e);if(t!==void 0){if(typeof t!="function")throw new TypeError("Finishers must return a constructor.");e=t}}return e},disallowProperty:function(e,r,i){if(e[r]!==void 0)throw new TypeError(i+" can't have a ."+r+" property.")}};return a}function $(a){var e=w(a.key),r;a.kind==="method"?r={value:a.value,writable:!0,configurable:!0,enumerable:!1}:a.kind==="get"?r={get:a.value,configurable:!0,enumerable:!1}:a.kind==="set"?r={set:a.value,configurable:!0,enumerable:!1}:a.kind==="field"&&(r={configurable:!0,writable:!0,enumerable:!0});var i={kind:a.kind==="field"?"field":"method",key:e,placement:a.static?"static":a.kind==="field"?"own":"prototype",descriptor:r};return a.decorators&&(i.decorators=a.decorators),a.kind==="field"&&(i.initializer=a.value),i}function T(a,e){a.descriptor.get!==void 0?e.descriptor.get=a.descriptor.get:e.descriptor.set=a.descriptor.set}function D(a){for(var e=[],r=function(s){return s.kind==="method"&&s.key===t.key&&s.placement===t.placement},i=0;i<a.length;i++){var t=a[i],n;if(t.kind==="method"&&(n=e.find(r)))if(P(t.descriptor)||P(n.descriptor)){if(u(t)||u(n))throw new ReferenceError("Duplicated methods ("+t.key+") can't be decorated.");n.descriptor=t.descriptor}else{if(u(t)){if(u(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+t.key+").");n.decorators=t.decorators}T(t,n)}else e.push(t)}return e}function u(a){return a.decorators&&a.decorators.length}function P(a){return a!==void 0&&!(a.value===void 0&&a.writable===void 0)}function b(a,e){var r=a[e];if(r!==void 0&&typeof r!="function")throw new TypeError("Expected '"+e+"' to be a function");return r}function w(a){var e=I(a,"string");return typeof e=="symbol"?e:String(e)}function I(a,e){if(typeof a!="object"||a===null)return a;var r=a[Symbol.toPrimitive];if(r!==void 0){var i=r.call(a,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function A(a){return O(a)||x(a)||z(a)||_()}function _(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z(a,e){if(!!a){if(typeof a=="string")return E(a,e);var r=Object.prototype.toString.call(a).slice(8,-1);if(r==="Object"&&a.constructor&&(r=a.constructor.name),r==="Map"||r==="Set")return Array.from(a);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(a,e)}}function E(a,e){(e==null||e>a.length)&&(e=a.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=a[r];return i}function x(a){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(a))return Array.from(a)}function O(a){if(Array.isArray(a))return a}function f(a,e,r){return typeof Reflect!="undefined"&&Reflect.get?f=Reflect.get:f=function(t,n,s){var l=R(t,n);if(!!l){var d=Object.getOwnPropertyDescriptor(l,n);return d.get?d.get.call(s):d.value}},f(a,e,r||a)}function R(a,e){for(;!Object.prototype.hasOwnProperty.call(a,e)&&(a=m(a),a!==null););return a}function m(a){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},m(a)}import{LitElement as U,html as p,unsafeCSS as q,query as y,property as v}from"../../../../_snowpack/pkg/lit-element.js";import{UndoIcon as j,MoveLeftRightIcon as L,FolderOpenIcon as F,PropertiesIcon as B,ColorPaletteIcon as M,RedoIcon as W,SaveToLightIcon as H,CropRotateIcon as G,DeleteIcon as K}from"../../../../_snowpack/pkg/@spectrum-web-components/icons-workflow.js";import N from"./styles.js";import{createEditor as J}from"../../../renderer/index.js";import{rafThrottle as Q,loadImage as C,openFile as V,saveImage as X}from"../../../utils/index.js";import o from"../../../store/index.js";import"../panels/PalettePanel/index.js";import"../ImageComparison/index.js";import"../panels/EditPanel/index.js";import"../Histogram/index.js";import"../SaveDialog/index.js";import"../CropTool/index.js";import"../panels/CropPanel/index.js";import"../SourceImage/index.js";let Y=S(null,function(a,e){class r extends e{constructor(...t){super(...t);a(this)}}return{F:r,d:[{kind:"field",decorators:[v({type:String,attribute:"image-src"})],key:"imageSrc",value(){return""}},{kind:"field",key:"video",value:void 0},{kind:"field",decorators:[y("pis-palette-panel")],key:"palettePanel",value:void 0},{kind:"field",decorators:[y("#histogram")],key:"histogram",value:void 0},{kind:"field",decorators:[y("#saveDialog")],key:"saveDialog",value:void 0},{kind:"field",key:"renderer",value(){return J()}},{kind:"field",decorators:[v({type:Boolean})],key:"imageComparison",value(){return!1}},{kind:"field",decorators:[v({type:String})],key:"activeTool",value(){return"adjust"}},{kind:"field",decorators:[v({type:Boolean,attribute:!1})],key:"loading",value(){return!1}},{kind:"get",static:!0,key:"styles",value:function(){return q(N)}},{kind:"method",key:"firstUpdated",value:function(){o.on("editParamsChanged",Q(()=>{this.renderer.filters.crop.parameters=o.state.editParams.crop,this.renderer.filters.light.parameters=o.state.editParams.light,this.renderer.filters.color.parameters=o.state.editParams.color,this.renderer.filters.edgeDetection.parameters=o.state.editParams.effects.edgeDetection,this.renderer.filters.pixelate.parameters.pixelSize=o.state.editParams.effects.pixelate,this.renderer.filters.unsharpMask.parameters=o.state.editParams.detail.sharpen,this.renderer.filters.dither.parameters.threshold=o.state.editParams.effects.dither.threshold,this.renderer.filters.dither.parameters.size=o.state.editParams.effects.dither.size,this.renderer.filters.blur.parameters.radius=o.state.editParams.detail.blur.radius,this.renderer.filters.blur.pass=o.state.editParams.detail.blur.pass*2,this.renderer.draw(),this.histogram.draw(this.renderer.canvas)})),o.on("updateui",()=>{this.requestUpdate()})}},{kind:"method",key:"clear",value:function(){const{video:t,imageSrc:n}=this;n&&n.startsWith("blob:")&&URL.revokeObjectURL(n),t&&(t.srcObject&&t.srcObject.getTracks().forEach(s=>s.stop()),t.src&&t.src.startsWith("blob:")&&URL.revokeObjectURL(t.src)),this.video=null,this.imageSrc=null,o.resetEditParams()}},{kind:"method",key:"handleOpenImage",value:function(){V().then(t=>{this.clear(),this.imageSrc=URL.createObjectURL(t)})}},{kind:"method",key:"handlePaletteChange",value:function(){const t=this.palettePanel.editor.palette;t&&t.length?this.renderer.filters.palette.setPalette(new ImageData(new Uint8ClampedArray(t.flat()),t.length,1)):this.renderer.filters.palette.setPalette(null),o.setEditParam({name:"effects.dither.threshold",value:t?1/t.length:0})}},{kind:"method",key:"update",value:function(t){f(m(r.prototype),"update",this).call(this,t),t.has("imageSrc")&&this.imageSrc&&this.loadPreview()}},{kind:"method",key:"loadPreview",value:function(){this.loading=!0,C(this.imageSrc,Math.min(window.screen.width,window.screen.height)).then(t=>{o.setImageData(t),this.renderer.setSource(t),this.histogram.draw(this.renderer.canvas),this.loading=!1})}},{kind:"method",key:"toggleImageComparison",value:function(){this.imageComparison=!this.imageComparison}},{kind:"method",key:"handleParamsChange",value:function(t){const n=t.composedPath()[0];o.setEditParam({name:n.getAttribute("name"),value:n.value}),o.saveSnapshot()}},{kind:"method",key:"renderCropPanel",value:function(){return p`
            <pis-crop-panel
                @input="${this.handleParamsChange}"
                @change="${this.handleParamsChange}"
                .hidden=${this.activeTool!=="crop"}
                .params=${o.state.editParams}
            ></pis-crop-panel>
        `}},{kind:"method",key:"renderEditPanel",value:function(){return p`
            <pis-edit-panel
                @input="${this.handleParamsChange}"
                @change="${this.handleParamsChange}"
                .hidden=${this.activeTool!=="adjust"}
                .params=${o.state.editParams}
            ></pis-edit-panel>
        `}},{kind:"method",key:"renderPalette",value:function(){return p`
            <pis-palette-panel
                @change="${this.handlePaletteChange}"
                .hidden=${this.activeTool!=="palette"}
            >
            </pis-palette-panel>
        `}},{kind:"method",key:"renderPanel",value:function(){switch(this.activeTool){case"adjust":return this.renderEditPanel();case"crop":return this.renderCropPanel();case"palette":return this.renderPalette()}}},{kind:"field",key:"handlePanelTabChange",value(){return i=>()=>{this.activeTool=i}}},{kind:"method",key:"handleSaveClick",value:function(){this.saveDialog.open=!0}},{kind:"method",key:"handleSaveFile",value:async function({detail:{quality:t}}){this.loading=!0;const n=await C(this.imageSrc);o.setImageData(n),this.renderer.setSource(n),this.renderer.draw(),await X(this.renderer.canvas,{quality:t}),this.loadPreview(),this.loading=!1}},{kind:"method",key:"handleResetChanges",value:function(){o.resetEditParams()}},{kind:"method",key:"renderActiveTool",value:function(){switch(this.renderer.canvas.slot="modified",this.activeTool){case"crop":return p`
                    <pis-crop-tool>
                        <img slot="original" is="pis-source-image" src="${this.imageSrc}" />
                        ${this.renderer.canvas}
                    </pis-crop-tool>
                `;default:return p`
                    <pis-image-comparison .enable="${this.imageComparison}">
                        <img slot="original" is="pis-source-image" src="${this.imageSrc}" />
                        ${this.renderer.canvas}
                    </pis-image-comparison>
                `}}},{kind:"method",key:"render",value:function(){return p`
            <div id="menuBar"></div>

            <div id="leftSidebar" class="scrollable sidebar">
                <sp-action-group vertical>
                    <sp-action-button quiet @click="${this.handleOpenImage}">
                        <sp-icon size="s" slot="icon">${F()}</sp-icon>
                    </sp-action-button>

                    <sp-action-button quiet @click="${this.handleSaveClick}">
                        <sp-icon size="s" slot="icon">${H()}</sp-icon>
                    </sp-action-button>
                </sp-action-group>

                <sp-rule size="small"></sp-rule>
                <sp-action-group vertical>
                    <sp-action-button
                        .disabled="${!o.state.history.canUndo}"
                        quiet
                        @click="${o.undo}"
                    >
                        <sp-icon size="s" slot="icon">${j()}</sp-icon>
                    </sp-action-button>

                    <sp-action-button
                        .disabled="${!o.state.history.canRedo}"
                        quiet
                        @click="${o.redo}"
                    >
                        <sp-icon size="s" slot="icon">${W()}</sp-icon>
                    </sp-action-button>

                    <sp-action-button
                        quiet
                        toggles
                        .selected=${this.imageComparison}
                        @click="${this.toggleImageComparison}"
                    >
                        <sp-icon size="s" slot="icon">${L()}</sp-icon>
                    </sp-action-button>
                </sp-action-group>
            </div>

            <div id="main">${this.renderActiveTool()}</div>

            <div id="rightPanel" class="scrollable">
                <pis-histogram id="histogram"></pis-histogram>
                ${this.renderPanel()}
            </div>

            <div id="rightSidebar" class="sidebar">
                <sp-action-group vertical>
                    <sp-action-button
                        quiet
                        .selected=${this.activeTool==="adjust"}
                        @click="${this.handlePanelTabChange("adjust")}"
                    >
                        <sp-icon size="s" slot="icon">${B()}</sp-icon>
                    </sp-action-button>

                    <sp-action-button
                        quiet
                        .selected=${this.activeTool==="crop"}
                        @click="${this.handlePanelTabChange("crop")}"
                    >
                        <sp-icon size="s" slot="icon">${G()}</sp-icon>
                    </sp-action-button>

                    <sp-action-button
                        quiet
                        .selected=${this.activeTool==="palette"}
                        @click="${this.handlePanelTabChange("palette")}"
                    >
                        <sp-icon size="s" slot="icon">${M()}</sp-icon>
                    </sp-action-button>

                    <sp-action-button quiet @click="${this.handleResetChanges}">
                        <sp-icon size="s" slot="icon">${K()}</sp-icon>
                    </sp-action-button>
                </sp-action-group>
            </div>

            <sp-icons-medium></sp-icons-medium>
            <sp-icons-workflow></sp-icons-workflow>

            <pis-save-dialog id="saveDialog" @confirm="${this.handleSaveFile}"></pis-save-dialog>
        `}}]}},U);customElements.define("pis-app",Y);
