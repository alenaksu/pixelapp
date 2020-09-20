export function createShader(e,t,a){const r=e.createShader(t);e.shaderSource(r,a),e.compileShader(r);const o=e.getShaderParameter(r,e.COMPILE_STATUS);return o?r:(console.error(`An error occured compiling the shader: ${e.getShaderInfoLog(r)}`),e.deleteShader(r),null)}export function createFramebuffer(e,t,a){const r=createTexture(e,t,a),o=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),{texture:r,buffer:o}}export function createProgram(e,t,a){const r=e.createProgram();e.attachShader(r,t),e.attachShader(r,a),e.linkProgram(r);const o=e.getProgramParameter(r,e.LINK_STATUS);return o||(console.error(`Unable to initialize the shader program: ${e.getProgramInfoLog(r)}`),e.deleteProgram(r)),r}export function createTexture(e,t,a){const r=e.createTexture();return e.bindTexture(e.TEXTURE_2D,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t,a,0,e.RGBA,e.UNSIGNED_BYTE,null),e.bindTexture(e.TEXTURE_2D,null),r}
