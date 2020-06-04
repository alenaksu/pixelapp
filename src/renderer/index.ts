import { createTexture, createFramebuffer } from './utils';
import Filter from './Filter';
import Blur from './filters/Blur';
import FlipY from './filters/FlipY';
import Sobel from './filters/Sobel/index';

interface Renderer {
    setSource(image: HTMLImageElement);
    registerFilter(FilterClass: typeof Filter);
}

class Renderer {
    [name: string]: Filter | any;
    source?: HTMLImageElement;
    gl: WebGLRenderingContext;
    filters: Filter[] = [];

    constructor(public canvas: HTMLCanvasElement) {
        const gl: WebGLRenderingContext = canvas.getContext('webgl');

        if (!gl) throw new Error('WebGL is not available');

        this.gl = gl;

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

        const planeCoords = [-1.0, 1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(planeCoords), gl.STATIC_DRAW);

        this.registerFilter(Filter);
        this.registerFilter(Blur);
        this.registerFilter(Sobel);
        this.registerFilter(FlipY);
    }

    registerFilter(FilterClass: typeof Filter) {
        const instance = new FilterClass(this.gl);
        this[FilterClass.name] = instance;
        this.filters.push(instance);
    }

    clear(width, height) {
        const gl = this.gl;

        gl.viewport(0, 0, width, height);
        // Clear the canvas
        gl.clearColor(0, 1.0, 0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }

    drawSource() {
        // TODO drawImage(gl, image);
        const { gl, source } = this;

        // create a new texture for the source image
        const texture = createTexture(gl, source.width, source.height);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        // draw the original image first
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
    }

    draw() {
        const { gl, source, filters } = this;

        this.clear(gl.drawingBufferWidth, gl.drawingBufferHeight);

        let frameBuffers = [
            createFramebuffer(gl, source.width, source.height),
            createFramebuffer(gl, source.width, source.height),
        ];

        this.drawSource();

        for (const filter of filters) {
            // set the framebuffer to render to
            gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffers[0].buffer);
            // this.clear(gl.drawingBufferWidth, gl.drawingBufferHeight);

            // "Activate" the filter
            filter.use();

            // Draw to fbo
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

            // send result to framebuffer texture
            gl.bindTexture(gl.TEXTURE_2D, frameBuffers[0].texture);

            [frameBuffers[0], frameBuffers[1]] = [frameBuffers[1], frameBuffers[0]];
        }

        // unbind the framebuffer
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);

        // get last drawed texture
        gl.bindTexture(gl.TEXTURE_2D, frameBuffers[0].texture);

        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

        for (const fb of frameBuffers) {
            gl.deleteFramebuffer(fb.buffer);
            gl.deleteTexture(fb.texture);
        }
    }

    setSource(newSource: HTMLImageElement) {
        this.source = newSource;

        this.canvas.width = newSource.width;
        this.canvas.height = newSource.height;

        this.draw();
    }
}

export function create(canvas) {
    return new Renderer(canvas);
}
