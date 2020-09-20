import{createTexture as o,createFramebuffer as l}from"./utils.js";import n from"./Filter.js";import g from"./filters/Transform/index.js";import d from"./filters/FlipY.js";import h from"./filters/Sobel/index.js";import u from"./filters/Pixelate.js";import c from"./filters/Palette/index.js";export class Renderer{constructor(e){this.canvas=e,this.source=void 0,this.gl=void 0,this.filters=[],this.debug=!1;const r=e.getContext("webgl",{antialias:!1});if(!r)throw new Error("WebGL is not available");this.gl=r;const t=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,t);const a=[-1,1,1,1,-1,-1,1,-1];r.bufferData(r.ARRAY_BUFFER,new Float32Array(a),r.STATIC_DRAW),this.registerFilter(n),this.registerFilter(g),this.registerFilter(h),this.registerFilter(u),this.registerFilter(c),this.registerFilter(d)}registerFilter(e){const r=new e(this.gl);this.filters[r.name]=r,this.filters.push(r)}clear(e,r){const t=this.gl;t.viewport(0,0,e,r),t.clearColor(0,1,0,1),t.clear(t.COLOR_BUFFER_BIT),t.disable(t.BLEND),t.disable(t.DEPTH_TEST),t.disable(t.DITHER)}drawSource(){const{gl:e,source:r}=this;e.activeTexture(e.TEXTURE0);const t=o(e,r.width,r.height);e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,t),e.activeTexture(e.TEXTURE0)}draw(){const{gl:e,source:r,filters:t,debug:a}=this;if(!r)return;this.clear(e.drawingBufferWidth,e.drawingBufferHeight);let s=[l(e,r.width,r.height),l(e,r.width,r.height)];this.drawSource();const f=t.filter(({enabled:i})=>i);a&&console.group("draw");for(const i of f)e.bindFramebuffer(e.FRAMEBUFFER,s[0].buffer),a&&console.time(i.name),i.use(),e.drawArrays(e.TRIANGLE_STRIP,0,4),a&&console.timeEnd(i.name),e.bindTexture(e.TEXTURE_2D,s[0].texture),i.clear(),[s[0],s[1]]=[s[1],s[0]];a&&console.groupEnd(),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,s[0].texture),e.drawArrays(e.TRIANGLE_STRIP,0,4);for(const i of s)e.deleteFramebuffer(i.buffer),e.deleteTexture(i.texture)}setSource(e){this.source=e,this.canvas.width=e.width,this.canvas.height=e.height,this.draw()}}export function create(e){return new Renderer(e)}