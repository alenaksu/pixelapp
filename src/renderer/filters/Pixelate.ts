import Filter from '../Filter';

export default class Pixelate extends Filter {
    name: string = 'pixelate';

    parameters = {
        pixelSize: 1,
    };

    static get fragmentShader() {
        return `
            precision highp float;

            varying vec2 texCoord;
            uniform sampler2D image;
            uniform sampler2D source;
            uniform vec2 resolution;
            uniform float pixelSize;

            void main() {
                vec2 tileSize = vec2(pixelSize) * resolution;
                vec2 tile = floor(texCoord / tileSize) * tileSize;
                vec2 coord = (tile + (tileSize / 2.0));
                vec4 color = texture2D(image, coord);

                gl_FragColor = color;
            }
        `;
    }
}
