import {
    createTexture,
    createFramebuffer,
    createPlane,
    setUniforms,
    setAttribArray,
    bindTexture,
} from '../utils';

import Filter from './Filter';
import Light from './filters/Light';
import Color from './filters/Color';
import Crop from './filters/Crop';
import EdgeDetection from './filters/EdgeDetection';
import UnsharpMask from './filters/UnsharpMask';
import Pixelate from './filters/Pixelate';
import Palette from './filters/Palette';
import Dither from './filters/Dither';
import Blur from './filters/Blur';
import FlipY from './filters/FlipY';

type FiltersArray = Array<Filter> & {
    [name: string]: any;
};

export class Renderer {
    [name: string]: Filter | any;
    source?: TexImageSource;
    gl: WebGLRenderingContext;
    filters: FiltersArray = <FiltersArray>[];
    debug: boolean = false;
    frameBuffers: [any, any];

    constructor(public canvas: HTMLCanvasElement = document.createElement('canvas')) {
        const gl: WebGLRenderingContext = canvas.getContext('webgl', {
            antialias: false,
            preserveDrawingBuffer: true,
            depth: false,
        });

        if (!gl) throw new Error('WebGL is not available');

        this.gl = gl;

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, createPlane(), gl.STATIC_DRAW);
    }

    registerFilter(FilterClass: typeof Filter) {
        const instance = new FilterClass(this.gl);
        this.filters[instance.name] = instance;
        this.filters.push(instance);
    }

    clear(width, height) {
        const gl = this.gl;

        gl.viewport(0, 0, width, height);
        // Clear the buffers
        for (const frameBuffer of this.frameBuffers) {
            gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer.buffer);
            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);
        }

        gl.disable(gl.BLEND);
        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.DITHER);
    }

    drawSource() {
        // TODO drawImage(gl, image);
        const { gl, source } = this;

        gl.activeTexture(gl.TEXTURE0);

        // create a new texture for the source image
        const texture = createTexture(gl, source.width, source.height);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        // draw the original image first
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);

        bindTexture(gl, texture, gl.TEXTURE1);
    }

    draw = () => {
        console.time('renderer::draw');

        const { gl, source, filters, debug, frameBuffers } = this;

        if (!source) return;

        this.clear(gl.drawingBufferWidth, gl.drawingBufferHeight);

        this.drawSource();

        const enabledFilters = filters.filter(({ enabled }) => enabled);

        debug && console.group('draw');
        for (const filter of enabledFilters) {
            debug && console.time(filter.name);
            for (let i = 0; i < filter.pass; i++) {
                // set the framebuffer to render to
                gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffers[0].buffer);
                // this.clear(gl.drawingBufferWidth, gl.drawingBufferHeight);

                // "Activate" the filter
                filter.use();

                // Setup uniforms
                setUniforms(gl, {
                    resolution: [1 / gl.drawingBufferWidth, 1 / gl.drawingBufferHeight],
                    image: 0,
                    source: 1,
                    pass: i,
                });
                setAttribArray(gl, 'position', 2);

                // Draw to fbo
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

                // send result to framebuffer texture
                gl.bindTexture(gl.TEXTURE_2D, frameBuffers[0].texture);

                // Clear filter changes
                filter.clear();

                [frameBuffers[0], frameBuffers[1]] = [frameBuffers[1], frameBuffers[0]];
            }
            debug && console.timeEnd(filter.name);
        }
        debug && console.groupEnd();

        // const data = new Uint8ClampedArray(gl.drawingBufferWidth * gl.drawingBufferHeight * 4);
        // gl.readPixels(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight, gl.RGBA, gl.UNSIGNED_BYTE, data);
        // console.log(data);

        // unbind the framebuffer
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);

        // get last drawed texture
        gl.bindTexture(gl.TEXTURE_2D, frameBuffers[0].texture);

        // gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

        console.timeEnd('renderer::draw');
    };

    setSource(newSource: TexImageSource) {
        const { gl, canvas, frameBuffers } = this;

        this.source = newSource;

        canvas.width = newSource.width;
        canvas.height = newSource.height;

        if (frameBuffers) {
            for (const fb of frameBuffers) {
                gl.deleteFramebuffer(fb.buffer);
                gl.deleteTexture(fb.texture);
            }
        }

        this.frameBuffers = [
            createFramebuffer(gl, newSource.width, newSource.height),
            createFramebuffer(gl, newSource.width, newSource.height),
        ];

        this.draw();
    }
}

export function createEditor() {
    const renderer = new Renderer();
    renderer.registerFilter(Crop);
    renderer.registerFilter(Light);
    renderer.registerFilter(Color);
    renderer.registerFilter(Blur);
    renderer.registerFilter(UnsharpMask);
    renderer.registerFilter(EdgeDetection);
    renderer.registerFilter(Pixelate);
    renderer.registerFilter(Dither);
    renderer.registerFilter(Palette);
    // renderer.registerFilter(Posterize);
    renderer.registerFilter(FlipY);

    return renderer;
}
