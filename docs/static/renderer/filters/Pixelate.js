import i from"../Filter.js";export default class r extends i{constructor(...e){super(...e);this.name="pixelate",this.parameters={pixelSize:1}}static get fragmentShader(){return`
            precision highp float;

            varying vec2 texCoord;
            uniform sampler2D image;
            uniform sampler2D source;
            uniform vec2 resolution;
            uniform float pixelSize;

            void main() {
                vec2 tileSize = vec2(pixelSize);
                vec2 tile = floor(gl_FragCoord.xy / tileSize) * tileSize;
                vec2 coord = (tile + (tileSize / 2.0)) * resolution;
                vec4 color = texture2D(image, coord);

                gl_FragColor = color;
            }
        `}}
