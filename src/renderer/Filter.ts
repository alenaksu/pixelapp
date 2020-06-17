import { createShader, createProgram } from './utils';

export default class Filter {
    program: WebGLProgram;
    vertexShader: WebGLShader;
    fragmentShader: WebGLShader;
    positionLocation: number;
    parameters: object = {};
    enabled: boolean = true;

    static get vertexShader() {
        return `
            precision highp float;
            attribute vec2 position;
            varying vec2 texCoord;
        
            void main() {
                texCoord = (position + 1.0) / 2.0;
                gl_Position = vec4(position, 0, 1.0);
            }
        `;
    }

    static get fragmentShader() {
        return `
            precision mediump float;
            varying vec2 texCoord;
            uniform sampler2D image;

            void main() {
                vec4 color = texture2D(image, texCoord);

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

    setupUniforms() {
        const { gl, program, parameters } = this;

        // Turn on the position attribute
        const positionLocation = gl.getAttribLocation(this.program, 'position');
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        const allUniforms = {
            resolution: [1 / gl.drawingBufferWidth, 1 / gl.drawingBufferHeight],
            ...parameters,
        };

        for (const name in allUniforms) {
            const location = gl.getUniformLocation(program, name);
            if (location === null) continue; // will be null if the uniform isn't used in the shader

            const value = allUniforms[name];
            if (Array.isArray(value)) {
                const array = new  Float32Array(value);
                switch (value.length) {
                    case 1:
                        gl.uniform1fv(location, array);
                        break;
                    case 2:
                        gl.uniform2fv(location, array);
                        break;
                    case 3:
                        gl.uniform3fv(location, array);
                        break;
                    case 4:
                        gl.uniform4fv(location, array);
                        break;
                    case 9:
                        gl.uniformMatrix3fv(location, false, array);
                        break;
                    case 16:
                        gl.uniformMatrix4fv(location, false, array);
                        break;
                    default:
                        gl.uniform1fv(location, array);
                    // throw (
                    //     'dont\'t know how to load uniform "' +
                    //     name +
                    //     '" of length ' +
                    //     value.length
                    // );
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

        const imageLocation = gl.getUniformLocation(program, 'image');
        gl.uniform1i(imageLocation, 0);

        const sourceLocation = gl.getUniformLocation(program, 'source');
        gl.uniform1i(sourceLocation, 1);
    }

    use() {
        const { gl, program } = this;
        // Tell it to use our program (pair of shaders)
        gl.useProgram(program);

        this.setupUniforms();
    }

    clear() {}
}
