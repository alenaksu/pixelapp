import{createTexture as m,createFramebuffer as d,createPlane as g,setUniforms as c,setAttribArray as E,bindTexture as F}from"../utils/index.js";import T from"./filters/Light/index.js";import p from"./filters/Color/index.js";import R from"./filters/Crop/index.js";import b from"./filters/EdgeDetection/index.js";import B from"./filters/UnsharpMask/index.js";import x from"./filters/Pixelate.js";import w from"./filters/Palette/index.js";import A from"./filters/Dither/index.js";import D from"./filters/Blur/index.js";import U from"./filters/FlipY.js";export class Renderer{constructor(e=document.createElement("canvas")){this.canvas=e,this.source=void 0,this.gl=void 0,this.filters=[],this.debug=!1,this.frameBuffers=void 0,this.draw=()=>{console.time("renderer::draw");const{gl:t,source:l,filters:u,debug:a,frameBuffers:f}=this;if(!l)return;this.clear(t.drawingBufferWidth,t.drawingBufferHeight),this.drawSource();const h=u.filter(({enabled:o})=>o);a&&console.group("draw");for(const o of h){a&&console.time(o.name);for(let n=0;n<o.pass;n++)t.bindFramebuffer(t.FRAMEBUFFER,f[0].buffer),o.use(),c(t,{resolution:[1/t.drawingBufferWidth,1/t.drawingBufferHeight],image:0,source:1,pass:n}),E(t,"position",2),t.drawArrays(t.TRIANGLE_STRIP,0,4),t.bindTexture(t.TEXTURE_2D,f[0].texture),o.clear(),[f[0],f[1]]=[f[1],f[0]];a&&console.timeEnd(o.name)}a&&console.groupEnd(),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,f[0].texture),t.drawArrays(t.TRIANGLE_STRIP,0,4),console.timeEnd("renderer::draw")};const r=e.getContext("webgl",{antialias:!1,preserveDrawingBuffer:!0,depth:!1});if(!r)throw new Error("WebGL is not available");this.gl=r;const i=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,i),r.bufferData(r.ARRAY_BUFFER,g(),r.STATIC_DRAW)}registerFilter(e){const r=new e(this.gl);this.filters[r.name]=r,this.filters.push(r)}clear(e,r){const i=this.gl;i.viewport(0,0,e,r);for(const t of this.frameBuffers)i.bindFramebuffer(i.FRAMEBUFFER,t.buffer),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT);i.disable(i.BLEND),i.disable(i.DEPTH_TEST),i.disable(i.DITHER)}drawSource(){const{gl:e,source:r}=this;e.activeTexture(e.TEXTURE0);const i=m(e,r.width,r.height);e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r),F(e,i,e.TEXTURE1)}setSource(e){const{gl:r,canvas:i,frameBuffers:t}=this;if(this.source=e,i.width=e.width,i.height=e.height,t)for(const l of t)r.deleteFramebuffer(l.buffer),r.deleteTexture(l.texture);this.frameBuffers=[d(r,e.width,e.height),d(r,e.width,e.height)],this.draw()}}export function createEditor(){const s=new Renderer;return s.registerFilter(R),s.registerFilter(T),s.registerFilter(p),s.registerFilter(D),s.registerFilter(B),s.registerFilter(b),s.registerFilter(x),s.registerFilter(A),s.registerFilter(w),s.registerFilter(U),s}