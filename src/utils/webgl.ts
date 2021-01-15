/**
 * Creates a new shader of the given type, updates the source and compiles it
 * @param gl
 * @param type
 * @param shaderSource
 */
export function createShader(gl: WebGLRenderingContext, type: GLenum, shaderSource: string) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);

    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!success) {
        console.error(`An error occured compiling the shader: ${gl.getShaderInfoLog(shader)}`);
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

export function createFramebuffer(
    gl: WebGLRenderingContext,
    width: number,
    height: number,
    image: TexImageSource = null,
    options: object = {},
) {
    const buffer = gl.createFramebuffer();

    const texture = createTexture(gl, width, height, image, options);
    gl.bindFramebuffer(gl.FRAMEBUFFER, buffer);

    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

    return {
        texture,
        buffer,
    };
}

export function createArrayBuffer(gl: WebGLRenderingContext, data: BufferSource) {
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    return buffer;
}

export function setAttribArray(
    gl: WebGLRenderingContext,
    name: string,
    size: number,
    type: number = gl.FLOAT,
) {
    const location = gl.getAttribLocation(gl.getParameter(gl.CURRENT_PROGRAM), name);
    gl.enableVertexAttribArray(location);
    gl.vertexAttribPointer(location, size, type, false, 0, 0);
}

export function createProgram(
    gl: WebGLRenderingContext,
    vertexShader: WebGLShader,
    fragmentShader: WebGLShader,
) {
    const program = gl.createProgram();

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!success) {
        console.error(`Unable to initialize the shader program: ${gl.getProgramInfoLog(program)}`);
        gl.deleteProgram(program);
    }

    return program;
}

export function createTexture(
    gl: WebGLRenderingContext,
    width: number,
    height: number,
    image: TexImageSource = null,
    { wrap = gl.CLAMP_TO_EDGE, filter = gl.NEAREST, type = gl.UNSIGNED_BYTE } = {},
) {
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);

    // Set up texture so we can render any size image and so we are
    // working with pixels.
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrap);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrap);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);

    if (!image) {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, type, null);
    } else {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, type, image);
    }

    gl.bindTexture(gl.TEXTURE_2D, null);

    return texture;
}

export function setUniform(
    gl: WebGLRenderingContext,
    type: number,
    location: WebGLUniformLocation,
    value: any,
) {
    switch (type) {
        case gl.FLOAT:
            return (Array.isArray(value) ? gl.uniform1fv : gl.uniform1f).call(gl, location, value);
        case gl.FLOAT_VEC2:
            return gl.uniform2fv(location, value);
        case gl.FLOAT_VEC3:
            return gl.uniform3fv(location, value);
        case gl.FLOAT_VEC4:
            return gl.uniform4fv(location, value);
        case gl.INT:
            return (Array.isArray(value) ? gl.uniform1iv : gl.uniform1i).call(gl, location, value);
        case gl.INT_VEC2:
            return gl.uniform2iv(location, value);
        case gl.INT_VEC3:
            return gl.uniform3iv(location, value);
        case gl.INT_VEC4:
            return gl.uniform4iv(location, value);
        case gl.BOOL:
            return gl.uniform1i(location, value);
        case gl.BOOL_VEC2:
            return gl.uniform2iv(location, value);
        case gl.BOOL_VEC3:
            return gl.uniform3iv(location, value);
        case gl.BOOL_VEC4:
            return gl.uniform4iv(location, value);
        case gl.FLOAT_MAT2:
            return gl.uniformMatrix2fv(location, false, value);
        case gl.FLOAT_MAT3:
            return gl.uniformMatrix3fv(location, false, value);
        case gl.FLOAT_MAT4:
            return gl.uniformMatrix4fv(location, false, value);
        case gl.SAMPLER_2D || type == gl.SAMPLER_CUBE:
            return gl.uniform1i(location, value);
        default:
            throw 'unknown type: 0x' + type.toString(16);
    }
}

export function setUniforms(gl: WebGLRenderingContext, uniforms: object) {
    const program = gl.getParameter(gl.CURRENT_PROGRAM);

    const numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < numUniforms; ++i) {
        const { name, type } = gl.getActiveUniform(program, i);
        const sanitizedName = name.replace('[0]', '');
        if (sanitizedName in uniforms) {
            const location = gl.getUniformLocation(program, sanitizedName);
            setUniform(gl, type, location, uniforms[sanitizedName]);
        }
    }
}

export function createPlane() {
    return new Float32Array([-1.0, 1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0]);
}

export function enableExtensions(gl: WebGLRenderingContext, extensions: string[]) {
    for (const name of extensions) {
        const ext = gl.getExtension(name);
        if (!ext) {
            throw new Error(`Extension not available: ${name}`);
        }
    }
}

export function bindTexture(
    gl: WebGLRenderingContext,
    texture: WebGLTexture,
    position: number = gl.TEXTURE0,
) {
    gl.activeTexture(position);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.activeTexture(gl.TEXTURE0);
}

export function readPixels(gl: WebGLRenderingContext) {
    const [_left, _top, width, height] = gl.getParameter(gl.VIEWPORT);
    const data = new Float32Array(width * height * 4);
    gl.readPixels(0, 0, width, height, gl.RGBA, gl.FLOAT, data);

    return data;
}
