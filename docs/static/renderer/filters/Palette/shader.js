export default`precision mediump float;
#define GLSLIFY 1

varying vec2 texCoord;
uniform vec2 resolution;
uniform float paletteSize;
uniform sampler2D image;
uniform sampler2D source;
uniform sampler2D palette;
const int MAX_COLORS = 256;

float colorDistance(vec4 c0, vec4 c1) {
    float rMean = (c0.r + c1.r) / 2.0;
    float r = pow(c0.r - c1.r, 2.0);
    float g = pow(c0.g - c1.g, 2.0);
    float b = pow(c0.b - c1.b, 2.0);

    return sqrt((2.0 + rMean) * r + 4.0 * g + (2.0 + 1.0 - rMean) * b);
}

vec4 getClosestColor(vec4 color) {
    vec4 closestColor = vec4(0.0, 0, 0, 1.0);

    int s = int(paletteSize);
    float best = 100.0;
    for(int i = 0; i < MAX_COLORS; i++) {
        if (i <= s) {
            vec4 paletteColor = texture2D(palette, vec2(float(i) / paletteSize, 0.5));
            float distance = colorDistance(paletteColor, color);

            if (distance < best) {
                best = distance;
                closestColor = paletteColor;
            }
        } else return closestColor;
    }

    return closestColor;
}

void main() {                    
    vec4 color = texture2D(image, texCoord);

    gl_FragColor = getClosestColor(color);
}`;
