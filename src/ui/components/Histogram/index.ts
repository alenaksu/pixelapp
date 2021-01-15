import { LitElement, html, unsafeCSS, svg } from 'lit-element';

import {
    createArrayBuffer,
    createFramebuffer,
    createPlane,
    createProgram,
    createShader,
    createTexture,
    setUniforms,
    setAttribArray,
    enableExtensions,
    bindTexture,
    debounce
} from '../../../utils';
import { LineIcon, LightIcon } from '@spectrum-web-components/icons-workflow';

import histogramColorVertex from './histogram.vert';
import drawConstantFragment from './drawConstant.frag';
import noopVertex from './noop.vert';
import renderFragment from './render.frag';
import maxValueFragment from './maxValue.frag';

import styles from './styles.css';

// https://developer.amd.com/wordpress/media/2012/10/GPUHistogramGeneration_preprint.pdf

class Histogram extends LitElement {
    canvas: HTMLCanvasElement = document.createElement('canvas');
    gl: WebGLRenderingContext;
    infoProgram: WebGLProgram;
    renderProgram: WebGLProgram;
    maxValueProgram: WebGLProgram;
    binsBuffer;
    maxValueBuffer;
    planeBuffer: WebGLBuffer;
    pointBuffer: WebGLBuffer;
    indexesBuffer: WebGLBuffer;
    pixelIds: Float32Array = new Float32Array(0);
    imageTexture: WebGLTexture;
    binsCount = 256;
    logarithmicScale = false;
    colorMode: boolean = true;
    image: TexImageSource;

    static get styles() {
        return unsafeCSS(styles);
    }

    constructor() {
        super();

        const gl: WebGLRenderingContext = this.canvas.getContext('webgl', {
            depth: false,
            stencil: false,
            // alpha: false,
            // premultipliedAlpha: false,
        });
        if (!gl) throw new Error('WebGL is not available');

        enableExtensions(gl, ['OES_texture_float']);

        this.gl = gl;
        gl.disable(gl.DEPTH_TEST);

        this.infoProgram = createProgram(
            gl,
            createShader(gl, gl.VERTEX_SHADER, histogramColorVertex),
            createShader(gl, gl.FRAGMENT_SHADER, drawConstantFragment),
        );

        this.renderProgram = createProgram(
            gl,
            createShader(gl, gl.VERTEX_SHADER, noopVertex),
            createShader(gl, gl.FRAGMENT_SHADER, renderFragment),
        );

        this.maxValueProgram = createProgram(
            gl,
            createShader(gl, gl.VERTEX_SHADER, noopVertex),
            createShader(gl, gl.FRAGMENT_SHADER, maxValueFragment),
        );

        this.binsBuffer = createFramebuffer(gl, this.binsCount, 1, null, { type: gl.FLOAT });
        this.maxValueBuffer = createFramebuffer(gl, 1, 1, null, { type: gl.FLOAT });
        this.planeBuffer = createArrayBuffer(gl, createPlane());
        this.pointBuffer = createArrayBuffer(gl, new Float32Array([0, 0]));
    }

    private setupImage(image: TexImageSource) {
        const size = image.width * image.height;

        if (size !== this.pixelIds.length) {
            this.pixelIds = new Float32Array(Array.from({ length: size }, (_, i) => i));
            this.gl.deleteTexture(this.imageTexture);
            this.gl.deleteBuffer(this.indexesBuffer);
            this.indexesBuffer = createArrayBuffer(this.gl, this.pixelIds);
            this.imageTexture = createTexture(this.gl, image.width, image.height, image);
        }

        this.image = image;
    }

    private collectHistogramInfo() {
        const {
            gl,
            infoProgram,
            binsBuffer,
            imageTexture,
            pixelIds,
            indexesBuffer,
            binsCount,
            colorMode,
            image,
        } = this;

        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE);

        // Upload the image
        bindTexture(gl, imageTexture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

        gl.useProgram(infoProgram);

        gl.bindBuffer(gl.ARRAY_BUFFER, indexesBuffer);
        gl.bindFramebuffer(gl.FRAMEBUFFER, binsBuffer.buffer);
        setUniforms(gl, {
            colorMode,
            resolution: [image.width, image.height],
            binsCount,
        });
        setAttribArray(gl, 'index', 1);

        gl.viewport(0, 0, binsCount, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);

        for (let i = 0; i < 3; i++) {
            // gl.clear(gl.COLOR_BUFFER_BIT);
            const rgba: [boolean, boolean, boolean, boolean] = [i === 0, i === 1, i === 2, false];
            gl.colorMask(...rgba);
            setUniforms(gl, {
                mask: rgba.map(Number),
            });
            gl.drawArrays(gl.POINTS, 0, pixelIds.length);
        }

        gl.colorMask(true, true, true, true);
        gl.disable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ZERO);
    }

    private computeMaxValue() {
        const { gl, pointBuffer, maxValueBuffer, binsBuffer, maxValueProgram, binsCount } = this;

        gl.useProgram(maxValueProgram);

        setUniforms(gl, {
            binsCount,
        });

        gl.bindBuffer(gl.ARRAY_BUFFER, pointBuffer);
        gl.bindFramebuffer(gl.FRAMEBUFFER, maxValueBuffer.buffer);
        bindTexture(gl, binsBuffer.texture);

        setAttribArray(gl, 'position', 2);

        gl.viewport(0, 0, 1, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.drawArrays(gl.POINTS, 0, 1);
    }

    private renderHistogram() {
        const {
            gl,
            renderProgram,
            canvas,
            binsBuffer,
            planeBuffer,
            logarithmicScale,
            maxValueBuffer,
            colorMode,
            binsCount,
        } = this;

        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

        gl.bindBuffer(gl.ARRAY_BUFFER, planeBuffer);
        bindTexture(gl, binsBuffer.texture, gl.TEXTURE0);
        bindTexture(gl, maxValueBuffer.texture, gl.TEXTURE1);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);

        gl.useProgram(renderProgram);

        setAttribArray(gl, 'position', 2);
        setUniforms(gl, {
            colorMode,
            resolution: [1 / gl.drawingBufferWidth, 1 / gl.drawingBufferHeight],
            logarithmicScale,
            histogramInfo: 0,
            maxValue: 1,
            binsCount,
        });

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    draw = debounce((image: TexImageSource) => {
        console.time('histogram');

        image && this.setupImage(image);
        this.collectHistogramInfo();
        this.computeMaxValue();
        this.renderHistogram();

        console.timeEnd('histogram');
    }, 200);

    toggleLogScale() {
        this.logarithmicScale = !this.logarithmicScale;
        this.draw();
    }

    toggleColorMode() {
        this.colorMode = !this.colorMode;
        this.draw();
    }

    render() {
        return html`
            <sp-action-group id="options">
                <sp-action-button label="Linear/Logarithmic" @click=${this.toggleLogScale}>
                    <sp-icon slot="icon" size="xs">${LineIcon()}</sp-icon>
                </sp-action-button>
                <sp-action-button label="Color/Luma" @click=${this.toggleColorMode}>
                    <sp-icon slot="icon" size="xs">${LightIcon()}</sp-icon>
                </sp-action-button>
            </sp-action-group>
            ${this.canvas}
        `;
    }
}
customElements.define('pis-histogram', Histogram);
