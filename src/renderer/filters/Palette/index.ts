import Filter from '../../Filter';
import { createFramebuffer } from '../../../utils';
import fragment from './shader.frag';

export default class Palette extends Filter {
    name: string = 'palette';

    paletteTexture: WebGLTexture = null;
    parameters = {
        paletteSize: 0,
    }

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
