import { createShader, createProgram } from './utils';

export default class Filter {
    program: WebGLProgram;
    vertexShader: WebGLShader;
    fragmentShader: WebGLShader;
    positionLocation: number;

    static get vertexShader() {
        return `
            attribute vec2 position;
            varying vec2 texCoords;
        
            void main() {
                texCoords = (position + 1.0) / 2.0;
                gl_Position = vec4(position, 0, 1.0);
            }
        `;
    }

    static get fragmentShader() {
        return `
            precision mediump float;
            varying vec2 texCoords;
            uniform sampler2D image;

            void main() {
                vec4 color = texture2D(image, texCoords);

                gl_FragColor = color;
            }
        `;
    }

    constructor(protected gl: WebGLRenderingContext) {
        this.vertexShader = createShader(
            gl,
            gl.VERTEX_SHADER,
            (<any>this.constructor).vertexShader,
        );
        this.fragmentShader = createShader(
            gl,
            gl.FRAGMENT_SHADER,
            (<any>this.constructor).fragmentShader,
        );
        this.program = createProgram(gl, this.vertexShader, this.fragmentShader);
    }

    get uniforms() {
        return {};
    }

    setupUniforms() {
        const { gl, program, uniforms } = this;

        // Turn on the position attribute
        const positionLocation = gl.getAttribLocation(this.program, 'position');
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        const allUniforms = {
            resolution: [1 / gl.drawingBufferWidth, 1 / gl.drawingBufferHeight],
            ...uniforms,
        };

        for (const name in allUniforms) {
            const location = gl.getUniformLocation(program, name);
            if (location === null) continue; // will be null if the uniform isn't used in the shader

            const value = allUniforms[name];
            if (Array.isArray(value)) {
                switch (value.length) {
                    case 1:
                        gl.uniform1fv(location, new Float32Array(value));
                        break;
                    case 2:
                        gl.uniform2fv(location, new Float32Array(value));
                        break;
                    case 3:
                        gl.uniform3fv(location, new Float32Array(value));
                        break;
                    case 4:
                        gl.uniform4fv(location, new Float32Array(value));
                        break;
                    case 9:
                        gl.uniformMatrix3fv(location, false, new Float32Array(value));
                        break;
                    case 16:
                        gl.uniformMatrix4fv(location, false, new Float32Array(value));
                        break;
                    default:
                        throw (
                            'dont\'t know how to load uniform "' +
                            name +
                            '" of length ' +
                            value.length
                        );
                }
            } else if (typeof value === 'number') {
                gl.uniform1f(location, value);
            } else {
                throw (
                    'attempted to set uniform "' +
                    name +
                    '" to invalid value ' +
                    (value || 'undefined').toString()
                );
            }
        }
    }

    use() {
        const { gl, program } = this;
        // Tell it to use our program (pair of shaders)
        gl.useProgram(program);

        this.setupUniforms();
    }
}
