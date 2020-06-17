import Filter from '../Filter';

export default class Posterize extends Filter {
    parameters = {
        levels: 10
    };

    static get fragmentShader() {
        return `
            precision mediump float;

            varying vec2 texCoord;
            uniform sampler2D image;
            uniform vec2 resolution;
            uniform float levels;

            void main() {
                vec3 color = texture2D(image, texCoord).rgb;
                /*
                vec3 coefficients = vec3(0.2126, 0.7152, 0.0722);

                color = pow(color, vec3(0.8));
                color = floor(color * levels) / levels;
                color = pow(color, vec3(1.0 / 0.8));

                gl_FragColor = vec4(color.rgb, 1.0);
*/
               
               float greyscale = max(color.r, max(color.b, color.g));

               float lower = floor(greyscale * levels) / levels;
               float lowerDiff = abs(greyscale - lower);

               float upper = ceil(greyscale * levels) / levels;
               float upperDiff = abs(upper - greyscale);

               float level = lowerDiff <= upperDiff ? lower : upper;
               float adjustment = level / greyscale;

               gl_FragColor = vec4(color.rgb * adjustment, 1.0);
               
            }
        `;
    }
}
