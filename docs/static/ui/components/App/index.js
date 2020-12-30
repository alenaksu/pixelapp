var k=(a,e,r)=>new Promise((i,t)=>{var n=d=>{try{o(r.next(d))}catch(c){t(c)}},s=d=>{try{o(r.throw(d))}catch(c){t(c)}},o=d=>d.done?i(d.value):Promise.resolve(d.value).then(n,s);o((r=r.apply(a,e)).next())});function $(a,e,r,i){var t=P();if(i)for(var n=0;n<i.length;n++)t=i[n](t);var s=e(function(c){t.initializeInstanceElements(c,o.elements)},r),o=t.decorateClass(I(s.d.map(T)),a);return t.initializeClassElements(s.F,o.elements),t.runClassFinishers(s.F,o.finishers)}function P(){P=function(){return a};var a={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,r){["method","field"].forEach(function(i){r.forEach(function(t){t.kind===i&&t.placement==="own"&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,r){var i=e.prototype;["method","field"].forEach(function(t){r.forEach(function(n){var s=n.placement;if(n.kind===t&&(s==="static"||s==="prototype")){var o=s==="static"?e:i;this.defineClassElement(o,n)}},this)},this)},defineClassElement:function(e,r){var i=r.descriptor;if(r.kind==="field"){var t=r.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:t===void 0?void 0:t.call(e)}}Object.defineProperty(e,r.key,i)},decorateClass:function(e,r){var i=[],t=[],n={static:[],prototype:[],own:[]};if(e.forEach(function(o){this.addElementPlacement(o,n)},this),e.forEach(function(o){if(!u(o))return i.push(o);var d=this.decorateElement(o,n);i.push(d.element),i.push.apply(i,d.extras),t.push.apply(t,d.finishers)},this),!r)return{elements:i,finishers:t};var s=this.decorateConstructor(i,r);return t.push.apply(t,s.finishers),s.finishers=t,s},addElementPlacement:function(e,r,i){var t=r[e.placement];if(!i&&t.indexOf(e.key)!==-1)throw new TypeError("Duplicated element ("+e.key+")");t.push(e.key)},decorateElement:function(e,r){for(var i=[],t=[],n=e.decorators,s=n.length-1;s>=0;s--){var o=r[e.placement];o.splice(o.indexOf(e.key),1);var d=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[s])(d)||d);e=c.element,this.addElementPlacement(e,r),c.finisher&&t.push(c.finisher);var h=c.extras;if(h){for(var g=0;g<h.length;g++)this.addElementPlacement(h[g],r);i.push.apply(i,h)}}return{element:e,finishers:t,extras:i}},decorateConstructor:function(e,r){for(var i=[],t=r.length-1;t>=0;t--){var n=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,r[t])(n)||n);if(s.finisher!==void 0&&i.push(s.finisher),s.elements!==void 0){e=s.elements;for(var o=0;o<e.length-1;o++)for(var d=o+1;d<e.length;d++)if(e[o].key===e[d].key&&e[o].placement===e[d].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor},i={value:"Descriptor",configurable:!0};return Object.defineProperty(r,Symbol.toStringTag,i),e.kind==="field"&&(r.initializer=e.initializer),r},toElementDescriptors:function(e){return e===void 0?void 0:_(e).map(function(r){var i=this.toElementDescriptor(r);return this.disallowProperty(r,"finisher","An element descriptor"),this.disallowProperty(r,"extras","An element descriptor"),i},this)},toElementDescriptor:function(e){var r=String(e.kind);if(r!=="method"&&r!=="field")throw new TypeError(`An element descriptor's .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "`+r+'"');var i=E(e.key),t=String(e.placement);if(t!=="static"&&t!=="prototype"&&t!=="own")throw new TypeError(`An element descriptor's .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "`+t+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:r,key:i,placement:t,descriptor:Object.assign({},n)};return r!=="field"?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){var r=this.toElementDescriptor(e),i=w(e,"finisher"),t=this.toElementDescriptors(e.extras);return{element:r,finisher:i,extras:t}},fromClassDescriptor:function(e){var r={kind:"class",elements:e.map(this.fromElementDescriptor,this)},i={value:"Descriptor",configurable:!0};return Object.defineProperty(r,Symbol.toStringTag,i),r},toClassDescriptor:function(e){var r=String(e.kind);if(r!=="class")throw new TypeError(`A class descriptor's .kind property must be "class", but a decorator created a class descriptor with .kind "`+r+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=w(e,"finisher"),t=this.toElementDescriptors(e.elements);return{elements:t,finisher:i}},runClassFinishers:function(e,r){for(var i=0;i<r.length;i++){var t=(0,r[i])(e);if(t!==void 0){if(typeof t!="function")throw new TypeError("Finishers must return a constructor.");e=t}}return e},disallowProperty:function(e,r,i){if(e[r]!==void 0)throw new TypeError(i+" can't have a ."+r+" property.")}};return a}function T(a){var e=E(a.key),r;a.kind==="method"?r={value:a.value,writable:!0,configurable:!0,enumerable:!1}:a.kind==="get"?r={get:a.value,configurable:!0,enumerable:!1}:a.kind==="set"?r={set:a.value,configurable:!0,enumerable:!1}:a.kind==="field"&&(r={configurable:!0,writable:!0,enumerable:!0});var i={kind:a.kind==="field"?"field":"method",key:e,placement:a.static?"static":a.kind==="field"?"own":"prototype",descriptor:r};return a.decorators&&(i.decorators=a.decorators),a.kind==="field"&&(i.initializer=a.value),i}function D(a,e){a.descriptor.get!==void 0?e.descriptor.get=a.descriptor.get:e.descriptor.set=a.descriptor.set}function I(a){for(var e=[],r=function(s){return s.kind==="method"&&s.key===t.key&&s.placement===t.placement},i=0;i<a.length;i++){var t=a[i],n;if(t.kind==="method"&&(n=e.find(r)))if(b(t.descriptor)||b(n.descriptor)){if(u(t)||u(n))throw new ReferenceError("Duplicated methods ("+t.key+") can't be decorated.");n.descriptor=t.descriptor}else{if(u(t)){if(u(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+t.key+").");n.decorators=t.decorators}D(t,n)}else e.push(t)}return e}function u(a){return a.decorators&&a.decorators.length}function b(a){return a!==void 0&&!(a.value===void 0&&a.writable===void 0)}function w(a,e){var r=a[e];if(r!==void 0&&typeof r!="function")throw new TypeError("Expected '"+e+"' to be a function");return r}function E(a){var e=A(a,"string");return typeof e=="symbol"?e:String(e)}function A(a,e){if(typeof a!="object"||a===null)return a;var r=a[Symbol.toPrimitive];if(r!==void 0){var i=r.call(a,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function _(a){return R(a)||O(a)||x(a)||z()}function z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(a,e){if(!a)return;if(typeof a=="string")return C(a,e);var r=Object.prototype.toString.call(a).slice(8,-1);if(r==="Object"&&a.constructor&&(r=a.constructor.name),r==="Map"||r==="Set")return Array.from(a);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C(a,e)}function C(a,e){(e==null||e>a.length)&&(e=a.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=a[r];return i}function O(a){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(a))return Array.from(a)}function R(a){if(Array.isArray(a))return a}function f(a,e,r){return typeof Reflect!="undefined"&&Reflect.get?f=Reflect.get:f=function(t,n,s){var o=U(t,n);if(!o)return;var d=Object.getOwnPropertyDescriptor(o,n);return d.get?d.get.call(s):d.value},f(a,e,r||a)}function U(a,e){for(;!Object.prototype.hasOwnProperty.call(a,e)&&!(a=m(a),a===null););return a}function m(a){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},m(a)}import{LitElement as q,html as p,unsafeCSS as j,query as y,property as v}from"../../../../web_modules/lit-element.js";import{UndoIcon as L,MoveLeftRightIcon as F,FolderOpenIcon as B,PropertiesIcon as M,ColorPaletteIcon as W,RedoIcon as H,SaveToLightIcon as G,CropRotateIcon as K,DeleteIcon as N}from"../../../../web_modules/@spectrum-web-components/icons-workflow.js";import J from"./styles.js";import{createEditor as Q}from"../../../renderer/index.js";import{rafThrottle as V,loadImage as S,openFile as X,saveImage as Y}from"../../../utils/index.js";import l from"../../../store/index.js";import"../panels/PalettePanel/index.js";import"../ImageComparison/index.js";import"../panels/EditPanel/index.js";import"../Histogram/index.js";import"../SaveDialog/index.js";import"../CropTool/index.js";import"../panels/CropPanel/index.js";import"../SourceImage/index.js";let Z=$(null,function(a,e){class r extends e{constructor(...t){super(...t);a(this)}}return{F:r,d:[{kind:"field",decorators:[v({type:String,attribute:"image-src"})],key:"imageSrc",value(){return""}},{kind:"field",key:"video",value:void 0},{kind:"field",decorators:[y("pis-palette-panel")],key:"palettePanel",value:void 0},{kind:"field",decorators:[y("#histogram")],key:"histogram",value:void 0},{kind:"field",decorators:[y("#saveDialog")],key:"saveDialog",value:void 0},{kind:"field",key:"renderer",value(){return Q()}},{kind:"field",decorators:[v({type:Boolean})],key:"imageComparison",value(){return!1}},{kind:"field",decorators:[v({type:String})],key:"activeTool",value(){return"adjust"}},{kind:"field",decorators:[v({type:Boolean,attribute:!1})],key:"loading",value(){return!1}},{kind:"get",static:!0,key:"styles",value:function(){return j(J)}},{kind:"method",key:"firstUpdated",value:function(){l.on("editParamsChanged",V(()=>{this.renderer.filters.crop.parameters=l.state.editParams.crop,this.renderer.filters.light.parameters=l.state.editParams.light,this.renderer.filters.color.parameters=l.state.editParams.color,this.renderer.filters.edgeDetection.parameters=l.state.editParams.effects.edgeDetection,this.renderer.filters.pixelate.parameters.pixelSize=l.state.editParams.effects.pixelate,this.renderer.filters.unsharpMask.parameters=l.state.editParams.detail.sharpen,this.renderer.filters.dither.parameters.threshold=l.state.editParams.effects.dither.threshold,this.renderer.filters.dither.parameters.size=l.state.editParams.effects.dither.size,this.renderer.filters.blur.parameters.radius=l.state.editParams.detail.blur.radius,this.renderer.filters.blur.pass=l.state.editParams.detail.blur.pass*2,this.renderer.draw(),this.histogram.draw(this.renderer.canvas)})),l.on("updateui",()=>{this.requestUpdate()})}},{kind:"method",key:"clear",value:function(){const{video:t,imageSrc:n}=this;n&&n.startsWith("blob:")&&URL.revokeObjectURL(n),t&&(t.srcObject&&t.srcObject.getTracks().forEach(s=>s.stop()),t.src&&t.src.startsWith("blob:")&&URL.revokeObjectURL(t.src)),this.video=null,this.imageSrc=null,l.resetEditParams()}},{kind:"method",key:"handleOpenImage",value:function(){X().then(t=>{this.clear(),this.imageSrc=URL.createObjectURL(t)})}},{kind:"method",key:"handlePaletteChange",value:function(){const t=this.palettePanel.editor.palette;t&&t.length?this.renderer.filters.palette.setPalette(new ImageData(new Uint8ClampedArray(t.flat()),t.length,1)):this.renderer.filters.palette.setPalette(null),l.setEditParam({name:"effects.dither.threshold",value:t?1/t.length:0})}},{kind:"method",key:"update",value:function(t){f(m(r.prototype),"update",this).call(this,t),t.has("imageSrc")&&this.imageSrc&&this.loadPreview()}},{kind:"method",key:"loadPreview",value:function(){this.loading=!0,S(this.imageSrc,1980).then(t=>{l.setImageData(t),this.renderer.setSource(t),this.histogram.draw(this.renderer.canvas),this.loading=!1})}},{kind:"method",key:"toggleImageComparison",value:function(){this.imageComparison=!this.imageComparison}},{kind:"method",key:"handleParamsChange",value:function(t){const n=t.composedPath()[0];l.setEditParam({name:n.getAttribute("name"),value:n.value}),l.saveSnapshot()}},{kind:"method",key:"renderCropPanel",value:function(){return p`
            <pis-crop-panel
                @input="${this.handleParamsChange}"
                @change="${this.handleParamsChange}"
                .hidden=${this.activeTool!=="crop"}
                .params=${l.state.editParams}
            ></pis-crop-panel>
        `}},{kind:"method",key:"renderEditPanel",value:function(){return p`
            <pis-edit-panel
                @input="${this.handleParamsChange}"
                @change="${this.handleParamsChange}"
                .hidden=${this.activeTool!=="adjust"}
                .params=${l.state.editParams}
            ></pis-edit-panel>
        `}},{kind:"method",key:"renderPalette",value:function(){return p`
            <pis-palette-panel
                @change="${this.handlePaletteChange}"
                .hidden=${this.activeTool!=="palette"}
            >
            </pis-palette-panel>
        `}},{kind:"method",key:"renderPanel",value:function(){switch(this.activeTool){case"adjust":return this.renderEditPanel();case"crop":return this.renderCropPanel();case"palette":return this.renderPalette()}}},{kind:"field",key:"handlePanelTabChange",value(){return i=>()=>{this.activeTool=i}}},{kind:"method",key:"handleSaveClick",value:function(){this.saveDialog.open=!0}},{kind:"method",key:"handleSaveFile",value:function(n){return k(this,arguments,function*({detail:{quality:t}}){this.loading=!0;const s=yield S(this.imageSrc);l.setImageData(s),this.renderer.setSource(s),this.renderer.draw(),yield Y(this.renderer.canvas,{quality:t}),this.loadPreview(),this.loading=!1})}},{kind:"method",key:"handleResetChanges",value:function(){l.resetEditParams()}},{kind:"method",key:"renderActiveTool",value:function(){this.renderer.canvas.slot="modified";switch(this.activeTool){case"crop":return p`
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
                        <sp-icon size="s" slot="icon">${B()}</sp-icon>
                    </sp-action-button>

                    <sp-action-button quiet @click="${this.handleSaveClick}">
                        <sp-icon size="s" slot="icon">${G()}</sp-icon>
                    </sp-action-button>
                </sp-action-group>

                <sp-rule size="small"></sp-rule>
                <sp-action-group vertical>
                    <sp-action-button
                        .disabled="${!l.state.history.canUndo}"
                        quiet
                        @click="${l.undo}"
                    >
                        <sp-icon size="s" slot="icon">${L()}</sp-icon>
                    </sp-action-button>

                    <sp-action-button
                        .disabled="${!l.state.history.canRedo}"
                        quiet
                        @click="${l.redo}"
                    >
                        <sp-icon size="s" slot="icon">${H()}</sp-icon>
                    </sp-action-button>

                    <sp-action-button
                        quiet
                        toggles
                        .selected=${this.imageComparison}
                        @click="${this.toggleImageComparison}"
                    >
                        <sp-icon size="s" slot="icon">${F()}</sp-icon>
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
                        <sp-icon size="s" slot="icon">${M()}</sp-icon>
                    </sp-action-button>

                    <sp-action-button
                        quiet
                        .selected=${this.activeTool==="crop"}
                        @click="${this.handlePanelTabChange("crop")}"
                    >
                        <sp-icon size="s" slot="icon">${K()}</sp-icon>
                    </sp-action-button>

                    <sp-action-button
                        quiet
                        .selected=${this.activeTool==="palette"}
                        @click="${this.handlePanelTabChange("palette")}"
                    >
                        <sp-icon size="s" slot="icon">${W()}</sp-icon>
                    </sp-action-button>

                    <sp-action-button quiet @click="${this.handleResetChanges}">
                        <sp-icon size="s" slot="icon">${N()}</sp-icon>
                    </sp-action-button>
                </sp-action-group>
            </div>

            <sp-icons-medium></sp-icons-medium>
            <sp-icons-workflow></sp-icons-workflow>

            <pis-save-dialog id="saveDialog" @confirm="${this.handleSaveFile}"></pis-save-dialog>
        `}}]}},q);customElements.define("pis-app",Z);
