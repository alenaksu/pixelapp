import { createShader, createProgram, setUniforms, setAttribArray } from '../utils';

export default class Filter {
    program: WebGLProgram;
    vertexShader: WebGLShader;
    fragmentShader: WebGLShader;
    positionLocation: number;
    parameters: object = {};
    enabled: boolean = true;
    name: string = 'Filter';
    pass: number = 1;

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

        const allUniforms = {
            ...parameters,
            resolution: [1 / gl.drawingBufferWidth, 1 / gl.drawingBufferHeight]
        };

        setUniforms(gl, allUniforms);
        setAttribArray(gl, 'position', 2);

        // const passLocation = gl.getUniformLocation(program, 'pass');
        // gl.uniform1f(passLocation, i);

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
