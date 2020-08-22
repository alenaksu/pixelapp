precision mediump float;

varying vec2 texCoord;
uniform vec2 resolution;
uniform float paletteSize;
uniform sampler2D image;
uniform sampler2D source;
uniform sampler2D palette;
uniform float ditherMatrix[64];
uniform float ditherThreshold;
uniform float ditherSize;
const int MAX_COLORS = 256;

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
    vec2 index = floor(gl_FragCoord.xy / ditherSize);
    int x = int(mod(index.x, 8.0));
    int y = int(mod(index.y, 8.0));

    for (int i = 0; i < 8; i++) {
        for(int j = 0; j < 8; j++) {
            if (i == y && j == x) return ditherMatrix[(i + j * 8)];
        }
    }
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

vec4 dither(vec4 color) {
    float factor = indexValue() * (ditherThreshold / 2.0);
    vec4 ditherColor = vec4(color.rgb + factor, 1.0);
    
    return getClosestColor(ditherColor);
}

void main() {                    
    vec4 color = texture2D(image, texCoord);

    gl_FragColor = dither(color);
    gl_FragColor.a = 1.0;
}