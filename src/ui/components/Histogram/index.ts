import { LitElement, html, property, unsafeCSS } from 'lit-element';

import rafThrottle, {
    createArrayBuffer,
    createFramebuffer,
    createPlane,
    createProgram,
    createShader,
    createTexture,
    setUniforms,
    setAttribArray,
    enableExtensions,
} from '../../../utils';

import histogramVertex from './histogram.vert';
import drawConstant from './drawConstant.frag';
import noopVertex from './noop.vert';
import renderFragment from './render.frag';

import styles from './styles.css';

// https://developer.amd.com/wordpress/media/2012/10/GPUHistogramGeneration_preprint.pdf

class Histogram extends LitElement {
    canvas: HTMLCanvasElement = document.createElement('canvas');
    gl: WebGLRenderingContext;
    infoProgram: WebGLProgram;
    renderProgram: WebGLProgram;
    binsBuffer;
    planeBuffer: WebGLBuffer;
    indexesBuffer: WebGLBuffer;
    indexes: Float32Array = new Float32Array(0);
    imageTexture: WebGLTexture;
    samplesCount = 256;
    logaritmicScale = false;

    static get styles() {
        return unsafeCSS(styles);
    }

    constructor() {
        super();

        const gl: WebGLRenderingContext = this.canvas.getContext('webgl');
        if (!gl) throw new Error('WebGL is not available');

        enableExtensions(gl, ['OES_texture_float']);

        this.gl = gl;

        this.infoProgram = createProgram(
            gl,
            createShader(gl, gl.VERTEX_SHADER, histogramVertex),
            createShader(gl, gl.FRAGMENT_SHADER, drawConstant),
        );

        this.renderProgram = createProgram(
            gl,
            createShader(gl, gl.VERTEX_SHADER, noopVertex),
            createShader(gl, gl.FRAGMENT_SHADER, renderFragment),
        );

        this.binsBuffer = createFramebuffer(gl, this.samplesCount, 1, null, { type: gl.FLOAT });
        this.planeBuffer = createArrayBuffer(gl, createPlane());
    }

    private setupImage(image: TexImageSource) {
        const size = image.width * image.height;

        if (size !== this.indexes.length) {
            this.indexes = new Float32Array(Array.from({ length: size }, (_, i) => i));
            this.gl.deleteTexture(this.imageTexture);
            this.gl.deleteBuffer(this.indexesBuffer);
            this.indexesBuffer = createArrayBuffer(this.gl, this.indexes);
            this.imageTexture = createTexture(this.gl, image.width, image.height, image);
        }
    }

    private collectHistogramInfo(image: TexImageSource) {
        const {
            gl,
            infoProgram,
            binsBuffer,
            imageTexture,
            indexes,
            indexesBuffer,
            samplesCount,
        } = this;

        gl.blendFunc(gl.ONE, gl.ONE);
        gl.enable(gl.BLEND);
        gl.disable(gl.DEPTH_TEST);

        // Upload the image
        gl.bindTexture(gl.TEXTURE_2D, imageTexture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

        gl.useProgram(infoProgram);

        gl.bindBuffer(gl.ARRAY_BUFFER, indexesBuffer);
        gl.bindFramebuffer(gl.FRAMEBUFFER, binsBuffer.buffer);
        setUniforms(gl, {
            resolution: [image.width, image.height],
            samplesCount,
        });
        setAttribArray(gl, 'index', 1);

        gl.viewport(0, 0, samplesCount, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.drawArrays(gl.POINTS, 0, indexes.length);
    }

    private renderHistogram() {
        const {
            gl,
            renderProgram,
            canvas,
            binsBuffer,
            planeBuffer,
            samplesCount,
            logaritmicScale,
        } = this;

        // const maxValue = 1000;
        const data = new Float32Array(samplesCount * 1 * 4);
        gl.readPixels(0, 0, samplesCount, 1, gl.RGBA, gl.FLOAT, data);
        let maxValue = 0;
        for (const v of data) {
            maxValue = Math.max(maxValue, v);
        }
        // console.log(maxValue);

        gl.colorMask(true, true, true, true);
        gl.blendFunc(gl.ONE, gl.ZERO);
        gl.disable(gl.BLEND);

        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

        gl.bindBuffer(gl.ARRAY_BUFFER, planeBuffer);
        gl.bindTexture(gl.TEXTURE_2D, binsBuffer.texture);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);

        gl.useProgram(renderProgram);

        setAttribArray(gl, 'position', 2);
        setUniforms(gl, {
            resolution: [1 / gl.drawingBufferWidth, 1 / gl.drawingBufferHeight],
            logaritmicScale,
            maxValue
        });

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    draw = rafThrottle((image: TexImageSource) => {
        console.time('histogram');

        this.setupImage(image);
        this.collectHistogramInfo(image);
        this.renderHistogram();

        console.timeEnd('histogram');
    });

    render() {
        return html`${this.canvas}`;
    }
}
customElements.define('pis-histogram', Histogram);
