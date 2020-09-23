export default`precision highp float;
#define GLSLIFY 1

varying vec2 texCoord;
uniform vec2 resolution;
uniform sampler2D image;
uniform sampler2D source;
uniform float ditherMatrix[64];
uniform float threshold;
uniform float size;
const int MAX_COLORS = 256;

float indexValue() {
    vec2 index = floor(gl_FragCoord.xy / size);
    int x = int(mod(index.x, 8.0));
    int y = int(mod(index.y, 8.0));

    for (int i = 0; i < 8; i++) {
        for(int j = 0; j < 8; j++) {
            if (i == y && j == x) return ditherMatrix[(i + j * 8)];
        }
    }
}

vec4 dither(vec4 color) {
    float factor = indexValue() * (threshold / 2.0);
    vec4 ditherColor = vec4(color.rgb + factor, color.a);
    
    return ditherColor;
}

void main() {                    
    vec4 color = texture2D(image, texCoord);

    gl_FragColor = dither(color);
}`;
