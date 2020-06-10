import Filter from '../Filter';
import { createFramebuffer } from '../utils';

export default class Palette extends Filter {
    paletteTexture = null;
    parameters = {
        paletteSize: 0,
        ditherMatrix: [
            [0, 48, 12, 60, 3, 51, 15, 63],
            [32, 16, 44, 28, 35, 19, 47, 31],
            [8, 56, 4, 52, 11, 59, 7, 55],
            [40, 24, 36, 20, 43, 27, 39, 23],
            [2, 50, 14, 62, 1, 49, 13, 61],
            [34, 18, 46, 30, 33, 17, 45, 29],
            [10, 58, 6, 54, 9, 57, 5, 53],
            [42, 26, 38, 22, 41, 25, 37, 21],
        ]
            .flat()
            .map((n) => (n + 1) / 64),
        ditherThreshold: 0.5,
    };

    static get fragmentShader() {
        return `
            precision highp float;

            varying vec2 texCoords;
            uniform vec2 resolution;
            uniform float paletteSize;
            uniform sampler2D image;
            uniform sampler2D source;
            uniform sampler2D palette;
            uniform float ditherMatrix[64];
            uniform float ditherThreshold;
            uniform float ditherGamma;

            float luma(vec4 color) {
                return color.r * 0.2126 + color.g * 0.7152 + color.b * 0.722;
            }
            
            float colorDistance(vec4 c0, vec4 c1) {
                float rMean = (c0.r + c1.r) / 2.0;
                float r = pow(c0.r - c1.r, 2.0);
                float g = pow(c0.g - c1.g, 2.0);
                float b = pow(c0.b - c1.b, 2.0);

                return sqrt((2.0 + rMean) * r + 4.0 * g + (2.0 + 1.0 - rMean) * b);
            }

            float indexValue() {
                int x = int(mod(gl_FragCoord.x, 8.0));
                int y = int(mod(gl_FragCoord.y, 8.0));

                for (int i = 0; i < 8; i++) {
                    for(int j = 0; j < 8; j++) {
                        if (i == x && j == y) return ditherMatrix[(i + j * 8)];
                    }
                }
            }

            vec4 getClosestColor(vec4 color) {
                vec4 closestColor = vec4(0.0, 0, 0, 1.0);

                int s = int(paletteSize);
                float best = 100000.0;
                for(int i = 0; i < 128; i++) {
                    if (i < s) {
                        vec4 paletteColor = texture2D(palette, vec2(float(i) / paletteSize, 0.5));
                        float distance = colorDistance(paletteColor, color);

                        if (distance < best) {
                            best = distance;
                            closestColor = paletteColor;
                        }
                    }
                }

                return closestColor;

                // vec4 closest0 = vec4(0,0,0,1.0);
                // vec4 closest1 = vec4(0,0,0,1.0);

                // float best = 100.0;

                // int s = int(paletteSize);
                // for(int i = 0; i < 128; i++) {
                //     if (i < s) {
                //         vec4 paletteColor = texture2D(palette, vec2(float(i) / paletteSize, 0.5));
                //         float distance  = colorDistance(color, paletteColor);

                //         if (distance < best) {
                //             best = distance;
                //             closest1 = closest0;
                //             closest0 = paletteColor;
                //         }
                //     }
                // }

                // float diff = colorDistance(color, closest0) / colorDistance(closest0, closest1);
                
                // return  diff < dither ? closest0 : closest1;
            }
            
            vec4 dither(vec4 color) {
                float factor = indexValue() * ditherThreshold;
                vec4 ditherColor = clamp(vec4(color.rgb + factor, 1.0), 0.0, 1.0);
                
                return getClosestColor(ditherColor);
            }

            void main() {                    
                vec4 color = texture2D(image, texCoords);
                gl_FragColor = dither(color);
                gl_FragColor.a = 1.0;
            }
        `;
    }

    setPalette(palette: ImageData | HTMLImageElement) {
        const gl = this.gl;
        const fb = createFramebuffer(gl, 256, 1);

        gl.bindFramebuffer(gl.FRAMEBUFFER, fb.buffer);
        gl.bindTexture(gl.TEXTURE_2D, fb.texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, palette);

        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.deleteFramebuffer(fb.buffer);

        this.parameters.paletteSize = palette.width;
        this.paletteTexture = fb.texture;
    }

    use() {
        const { gl, paletteTexture, program } = this;
        if (!paletteTexture) return;

        super.use();

        gl.activeTexture(gl.TEXTURE2);
        gl.bindTexture(gl.TEXTURE_2D, paletteTexture);
        gl.activeTexture(gl.TEXTURE0);

        const paletteLocation = gl.getUniformLocation(program, 'palette');
        gl.uniform1i(paletteLocation, 2);

        //gl.activeTexture(gl.TEXTURE1);
        //gl.bindTexture(gl.TEXTURE_2D, null);
    }
}
