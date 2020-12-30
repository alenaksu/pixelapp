export function createShader(r,n,t){const e=r.createShader(n);r.shaderSource(e,t),r.compileShader(e);const a=r.getShaderParameter(e,r.COMPILE_STATUS);return a?e:(console.error(`An error occured compiling the shader: ${r.getShaderInfoLog(e)}`),r.deleteShader(e),null)}export function createFramebuffer(r,n,t,e=null,a={}){const f=r.createFramebuffer(),o=createTexture(r,n,t,e,a);return r.bindFramebuffer(r.FRAMEBUFFER,f),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,o,0),{texture:o,buffer:f}}export function createArrayBuffer(r,n){const t=r.createBuffer();return r.bindBuffer(r.ARRAY_BUFFER,t),r.bufferData(r.ARRAY_BUFFER,n,r.STATIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,null),t}export function setAttribArray(r,n,t,e=r.FLOAT){const a=r.getAttribLocation(r.getParameter(r.CURRENT_PROGRAM),n);r.enableVertexAttribArray(a),r.vertexAttribPointer(a,t,e,!1,0,0)}export function createProgram(r,n,t){const e=r.createProgram();r.attachShader(e,n),r.attachShader(e,t),r.linkProgram(e);const a=r.getProgramParameter(e,r.LINK_STATUS);return a||(console.error(`Unable to initialize the shader program: ${r.getProgramInfoLog(e)}`),r.deleteProgram(e)),e}export function createTexture(r,n,t,e=null,{wrap:a=r.CLAMP_TO_EDGE,filter:f=r.NEAREST,type:o=r.UNSIGNED_BYTE}={}){const i=r.createTexture();return r.bindTexture(r.TEXTURE_2D,i),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,a),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,a),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,f),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,f),e?r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,o,e):r.texImage2D(r.TEXTURE_2D,0,r.RGBA,n,t,0,r.RGBA,o,null),r.bindTexture(r.TEXTURE_2D,null),i}export function setUniform(r,n,t,e){switch(n){case r.FLOAT:return(Array.isArray(e)?r.uniform1fv:r.uniform1f).call(r,t,e);case r.FLOAT_VEC2:return r.uniform2fv(t,e);case r.FLOAT_VEC3:return r.uniform3fv(t,e);case r.FLOAT_VEC4:return r.uniform4fv(t,e);case r.INT:return(Array.isArray(e)?r.uniform1iv:r.uniform1i).call(r,t,e);case r.INT_VEC2:return r.uniform2iv(t,e);case r.INT_VEC3:return r.uniform3iv(t,e);case r.INT_VEC4:return r.uniform4iv(t,e);case r.BOOL:return r.uniform1i(t,e);case r.BOOL_VEC2:return r.uniform2iv(t,e);case r.BOOL_VEC3:return r.uniform3iv(t,e);case r.BOOL_VEC4:return r.uniform4iv(t,e);case r.FLOAT_MAT2:return r.uniformMatrix2fv(t,!1,e);case r.FLOAT_MAT3:return r.uniformMatrix3fv(t,!1,e);case r.FLOAT_MAT4:return r.uniformMatrix4fv(t,!1,e);case(r.SAMPLER_2D||n==r.SAMPLER_CUBE):return r.uniform1i(t,e);default:throw"unknown type: 0x"+n.toString(16)}}export function setUniforms(r,n){const t=r.getParameter(r.CURRENT_PROGRAM),e=r.getProgramParameter(t,r.ACTIVE_UNIFORMS);for(let a=0;a<e;++a){const{name:f,type:o}=r.getActiveUniform(t,a),i=f.replace("[0]","");if(i in n){const T=r.getUniformLocation(t,i);setUniform(r,o,T,n[i])}}}export function createPlane(){return new Float32Array([-1,1,1,1,-1,-1,1,-1])}export function enableExtensions(r,n){for(const t of n){const e=r.getExtension(t);if(!e)throw new Error(`Extension not available: ${t}`)}}export function bindTexture(r,n,t=r.TEXTURE0){r.activeTexture(t),r.bindTexture(r.TEXTURE_2D,n),r.activeTexture(r.TEXTURE0)}
