float convolute(mat3 kernel, sampler2D image, vec2 pos, vec2 ratio)
{
    vec4 color = vec4(0);
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            vec2 samplePos = pos + vec2(i - 1, j - 1) * ratio;
            vec4 sampleColor = texture2D(image, samplePos);

            color += sampleColor * kernel[i][j];
        }
    }

    return (color.r + color.g + color.b) / 3.0;
}

float sobel(sampler2D image, vec2 pos, vec2 ratio)
{
    mat3 kernelX = mat3(
        1.0, 0.0, -1.0,
        2.0, 0.0, -2.0,
        1.0, 0.0, -1.0);
    mat3 kernelY = mat3(
        1.0, 2.0, 1.0,
        0.0, 0.0, 0.0,
        -1.0, -2.0, -1.0);

    float gx = convolute(kernelX, image, pos, ratio);
    float gy = convolute(kernelY, image, pos, ratio);

    return sqrt(pow(gx, 2.0) + pow(gy, 2.0));
}


const sobelSource = `

precision mediump float;
    varying vec2 v_coord;
    uniform sampler2D u_image;
    uniform vec2 u_resolution;


float convolute(mat3 kernel, sampler2D image, vec2 pos, vec2 ratio)
{
    vec4 color = vec4(0);
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            vec2 samplePos = pos + vec2(i - 1, j - 1) * ratio;
            vec4 sampleColor = texture2D(image, samplePos);

            color += sampleColor * kernel[i][j];
        }
    }

    return (color.r + color.g + color.b) / 3.0;
}

float sobel(sampler2D image, vec2 pos, vec2 ratio)
{
    mat3 kernelX = mat3(
        1.0, 0.0, -1.0,
        2.0, 0.0, -2.0,
        1.0, 0.0, -1.0);
    mat3 kernelY = mat3(
        1.0, 2.0, 1.0,
        0.0, 0.0, 0.0,
        -1.0, -2.0, -1.0);

    float gx = convolute(kernelX, image, pos, ratio);
    float gy = convolute(kernelY, image, pos, ratio);

    return sqrt(pow(gx, 2.0) + pow(gy, 2.0));
}

    void main() {
        vec2 pos = vec2(v_coord.x, 1.0 - v_coord.y);
        vec2 ratio = vec2(1, 1) / u_resolution;
        float magnitude = sobel(u_image, pos, ratio);

        gl_FragColor = texture2D(u_image, pos) * (magnitude > 0.7 ? 0.4 : 1);
        gl_FragColor.a = 1.0;
    }
`;

function flipY(gl) {
    const vertexShaderSource = `
        attribute vec4 a_position;
        varying vec2 v_coord;
        uniform float u_flipY;

        void main() {
            gl_Position = vec4(a_position.xy * vec2(1.0, u_flipY), 0.0, 1.0);
            v_coord = gl_Position.xy * 0.5 + 0.5;
        }
    `;

    const fragmentShaderSource = `
        precision mediump float;
        varying vec2 v_coord;
        uniform sampler2D u_image;

        void main() {
            gl_FragColor = texture2D(u_image, v_coord);
        }
    `;
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    const programInfo = createProgram(gl, vertexShader, fragmentShader);

    (<any>programInfo.uniforms).flipY = gl.getUniformLocation(programInfo.program, 'u_flipY');

    return ({}) => {
        gl.useProgram(programInfo.program);
        gl.uniform1f((<any>programInfo.uniforms).flipY, -1);

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
}

function defaultFilter(gl) {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    const programInfo = createProgram(gl, vertexShader, fragmentShader);

    return ({ gl, source }) => {
        gl.useProgram(programInfo.program);

        // gl.uniform1i(programInfo.uniforms.image, 0);

        gl.uniform2f(
            programInfo.uniforms.resolution,
            gl.drawingBufferWidth,
            gl.drawingBufferHeight,
        );

        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
}

function gaussian(gl) {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(
        gl,
        gl.FRAGMENT_SHADER,
        `

    precision mediump float;
        varying vec2 v_coord;
        uniform sampler2D u_image;
        uniform vec2 u_resolution;
    
    
    vec4 convolute(mat3 kernel, sampler2D image, vec2 pos, vec2 ratio)
    {
        vec4 color = vec4(0);
        for (int i = 0; i < 3; i++)
        {
            for (int j = 0; j < 3; j++)
            {
                vec2 samplePos = pos + vec2(i - 1, j - 1) * ratio;
                vec4 sampleColor = texture2D(image, samplePos);
    
                color += sampleColor * kernel[i][j];
            }
        }
    
        return color;
    }

        void main() {
            vec2 ratio = vec2(1, 1) / u_resolution;
            mat3 kernel = mat3(
                1.0, 2.0, 1.0,
                2.0, 4.0, 2.0,
                1.0, 2.0, 1.0);
            vec4 color = convolute(kernel, u_image, v_coord, ratio) * (1.0 / 16.0);
    
            gl_FragColor = color;
            gl_FragColor.a = 1.0;
        }
    `,
    );
    const programInfo = createProgram(gl, vertexShader, fragmentShader);

    return ({ gl, source }) => {
        gl.useProgram(programInfo.program);

        // gl.uniform1i(programInfo.uniforms.image, 0);

        gl.uniform2f(
            programInfo.uniforms.resolution,
            gl.drawingBufferWidth,
            gl.drawingBufferHeight,
        );

        // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
}

function sobel(gl) {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(
        gl,
        gl.FRAGMENT_SHADER,
        `

    precision mediump float;
        varying vec2 v_coord;
        uniform sampler2D u_image;
        uniform vec2 u_resolution;
    
    
    float convolute(mat3 kernel, sampler2D image, vec2 pos, vec2 ratio)
    {
        vec4 color = vec4(0);
        for (int i = 0; i < 3; i++)
        {
            for (int j = 0; j < 3; j++)
            {
                vec2 samplePos = pos + vec2(i - 1, j - 1) * ratio;
                vec4 sampleColor = texture2D(image, samplePos);
    
                color += sampleColor * kernel[i][j];
            }
        }
    
        return (color.r + color.g + color.b) / 3.0;
    }
    
    float sobel(sampler2D image, vec2 pos, vec2 ratio)
    {
        mat3 kernelX = mat3(
            1.0, 0.0, -1.0,
            2.0, 0.0, -2.0,
            1.0, 0.0, -1.0);
        mat3 kernelY = mat3(
            1.0, 2.0, 1.0,
            0.0, 0.0, 0.0,
            -1.0, -2.0, -1.0);
    
        float gx = convolute(kernelX, image, pos, ratio);
        float gy = convolute(kernelY, image, pos, ratio);
    
        return sqrt(pow(gx, 2.0) + pow(gy, 2.0));
    }
    
        void main() {
            vec2 ratio = vec2(1, 1) / u_resolution;
            float magnitude = sobel(u_image, v_coord, ratio);
    
            gl_FragColor = texture2D(u_image, v_coord) * (magnitude > 0.7 ? 0.1 : 1.0);
            gl_FragColor.a = 1.0;
        }
    `,
    );
    const programInfo = createProgram(gl, vertexShader, fragmentShader);

    return ({ gl, source }) => {
        gl.useProgram(programInfo.program);

        gl.uniform1i(programInfo.uniforms.image, 0);

        gl.uniform2f(
            programInfo.uniforms.resolution,
            gl.drawingBufferWidth,
            gl.drawingBufferHeight,
        );

        // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
}