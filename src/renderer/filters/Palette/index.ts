import Filter from '../../Filter';
import { createFramebuffer } from '../../utils';
import fragment from 'bundle-text:./shader.frag';

export default class Palette extends Filter {
    name: string = 'Palette';

    paletteTexture: WebGLTexture = null;
    parameters = {
        paletteSize: 0,
        ditherMatrix: [
            [1, 48, 12, 60, 3, 51, 15, 63],
            [32, 16, 44, 28, 35, 19, 47, 31],
            [8, 56, 4, 52, 11, 59, 7, 55],
            [40, 24, 36, 20, 43, 27, 39, 23],
            [2, 50, 14, 62, 1, 49, 13, 61],
            [34, 18, 46, 30, 33, 17, 45, 29],
            [10, 58, 6, 54, 9, 57, 5, 53],
            [42, 26, 38, 22, 41, 25, 37, 21],
        ]
            .flat()
            .map((n) => (n + 1) / 64 - 0.5),
        ditherThreshold: 0,
        ditherSize: 1.0,
    };

    static get fragmentShader() {
        return fragment;
    }

    setPalette(palette: ImageData | HTMLImageElement) {
        if (palette) {
            const gl = this.gl;
            const fb = createFramebuffer(gl, 256, 1);

            gl.bindFramebuffer(gl.FRAMEBUFFER, fb.buffer);
            gl.bindTexture(gl.TEXTURE_2D, fb.texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, palette);
            //gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, palette.width, 1, gl.RGBA, gl.UNSIGNED_BYTE, palette);

            gl.bindTexture(gl.TEXTURE_2D, null);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            gl.deleteFramebuffer(fb.buffer);

            this.parameters.paletteSize = palette.width;
            this.paletteTexture = fb.texture;
        } else {
            this.parameters.paletteSize = 0;
            this.paletteTexture = null;
        }
    }

    use() {
        const { gl, paletteTexture, program } = this;
        if (!paletteTexture) {
            return;
        }

        super.use();

        gl.activeTexture(gl.TEXTURE2);
        gl.bindTexture(gl.TEXTURE_2D, paletteTexture);
        gl.activeTexture(gl.TEXTURE0);

        const paletteLocation = gl.getUniformLocation(program, 'palette');
        gl.uniform1i(paletteLocation, 2);
    }

    clear() {
        const { gl } = this;
        gl.activeTexture(gl.TEXTURE2);
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.activeTexture(gl.TEXTURE0);
    }
}
