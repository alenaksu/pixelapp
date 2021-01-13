import{LitElement as x,html as B,unsafeCSS as R}from"../../../../web_modules/lit-element.js";import{createArrayBuffer as m,createFramebuffer as E,createPlane as T,createProgram as d,createShader as o,createTexture as F,setUniforms as f,setAttribArray as c,enableExtensions as A,bindTexture as p,debounce as w}from"../../../utils/index.js";import{LineIcon as _,LightIcon as S}from"../../../../web_modules/@spectrum-web-components/icons-workflow.js";import v from"./histogram.js";import I from"./drawConstant.js";import b from"./noop.js";import P from"./render.js";import M from"./maxValue.js";import V from"./styles.js";class L extends x{static get styles(){return R(V)}constructor(){super();this.canvas=document.createElement("canvas"),this.gl=void 0,this.infoProgram=void 0,this.renderProgram=void 0,this.maxValueProgram=void 0,this.binsBuffer=void 0,this.maxValueBuffer=void 0,this.planeBuffer=void 0,this.pointBuffer=void 0,this.indexesBuffer=void 0,this.pixelIds=new Float32Array(0),this.imageTexture=void 0,this.binsCount=256,this.logarithmicScale=!1,this.colorMode=!0,this.image=void 0,this.draw=w(t=>{console.time("histogram"),t&&this.setupImage(t),this.collectHistogramInfo(),this.computeMaxValue(),this.renderHistogram(),console.timeEnd("histogram")},200);const e=this.canvas.getContext("webgl",{depth:!1,stencil:!1});if(!e)throw new Error("WebGL is not available");A(e,["OES_texture_float"]),this.gl=e,e.disable(e.DEPTH_TEST),this.infoProgram=d(e,o(e,e.VERTEX_SHADER,v),o(e,e.FRAGMENT_SHADER,I)),this.renderProgram=d(e,o(e,e.VERTEX_SHADER,b),o(e,e.FRAGMENT_SHADER,P)),this.maxValueProgram=d(e,o(e,e.VERTEX_SHADER,b),o(e,e.FRAGMENT_SHADER,M)),this.binsBuffer=E(e,this.binsCount,1,null,{type:e.FLOAT}),this.maxValueBuffer=E(e,1,1,null,{type:e.FLOAT}),this.planeBuffer=m(e,T()),this.pointBuffer=m(e,new Float32Array([0,0]))}setupImage(e){const t=e.width*e.height;t!==this.pixelIds.length&&(this.pixelIds=new Float32Array(Array.from({length:t},(r,i)=>i)),this.gl.deleteTexture(this.imageTexture),this.gl.deleteBuffer(this.indexesBuffer),this.indexesBuffer=m(this.gl,this.pixelIds),this.imageTexture=F(this.gl,e.width,e.height,e)),this.image=e}collectHistogramInfo(){const{gl:e,infoProgram:t,binsBuffer:r,imageTexture:i,pixelIds:s,indexesBuffer:a,binsCount:u,colorMode:h,image:n}=this;e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE),e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n),e.useProgram(t),e.bindBuffer(e.ARRAY_BUFFER,a),e.bindFramebuffer(e.FRAMEBUFFER,r.buffer),f(e,{colorMode:h,resolution:[n.width,n.height],binsCount:u}),c(e,"index",1),e.viewport(0,0,u,1),e.clear(e.COLOR_BUFFER_BIT);for(let l=0;l<3;l++){const g=[l===0,l===1,l===2,!1];e.colorMask(...g),f(e,{mask:g.map(Number)}),e.drawArrays(e.POINTS,0,s.length)}e.colorMask(!0,!0,!0,!0),e.disable(e.BLEND),e.blendFunc(e.ONE,e.ZERO)}computeMaxValue(){const{gl:e,pointBuffer:t,maxValueBuffer:r,binsBuffer:i,maxValueProgram:s,binsCount:a}=this;e.useProgram(s),f(e,{binsCount:a}),c(e,"position",2),e.bindBuffer(e.ARRAY_BUFFER,t),e.bindFramebuffer(e.FRAMEBUFFER,r.buffer),e.bindTexture(e.TEXTURE_2D,i.texture),e.viewport(0,0,1,1),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.POINTS,0,1)}renderHistogram(){const{gl:e,renderProgram:t,canvas:r,binsBuffer:i,planeBuffer:s,logarithmicScale:a,maxValueBuffer:u,colorMode:h,binsCount:n}=this;r.width=r.clientWidth,r.height=r.clientHeight,e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),e.bindBuffer(e.ARRAY_BUFFER,s),p(e,i.texture,e.TEXTURE0),p(e,u.texture,e.TEXTURE1),e.bindFramebuffer(e.FRAMEBUFFER,null),e.useProgram(t),c(e,"position",2),f(e,{colorMode:h,resolution:[1/e.drawingBufferWidth,1/e.drawingBufferHeight],logarithmicScale:a,histogramInfo:0,maxValue:1,binsCount:n}),e.drawArrays(e.TRIANGLE_STRIP,0,4)}toggleLogScale(){this.logarithmicScale=!this.logarithmicScale,this.draw()}toggleColorMode(){this.colorMode=!this.colorMode,this.draw()}render(){return B`
            <sp-action-group id="options">
                <sp-action-button label="Linear/Logarithmic" @click=${this.toggleLogScale}>
                    <sp-icon slot="icon" size="xs">${_()}</sp-icon>
                </sp-action-button>
                <sp-action-button label="Color/Luma" @click=${this.toggleColorMode}>
                    <sp-icon slot="icon" size="xs">${S()}</sp-icon>
                </sp-action-button>
            </sp-action-group>
            ${this.canvas}
        `}}customElements.define("pis-histogram",L);