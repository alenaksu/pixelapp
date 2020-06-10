import Filter from '../Filter';

export default class Pixelate extends Filter {
    parameters = {
        pixelSize: 1,
    };

    static get fragmentShader() {
        return `
            precision mediump float;

            varying vec2 texCoords;
            uniform sampler2D image;
            uniform vec2 resolution;
            uniform float pixelSize;

            void main() {
                vec2 pos = texCoords.xy;

                vec2 dxy = pixelSize * resolution;
                vec2 coord = dxy * floor(texCoords / dxy) + dxy / 2.0;
                
                gl_FragColor = texture2D(image, coord);
            }
        `;
    }
}
