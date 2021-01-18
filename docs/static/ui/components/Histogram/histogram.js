export default`#define GLSLIFY 1
attribute float index;

uniform vec2 resolution;
uniform sampler2D image;
uniform vec4 mask;
uniform bool colorMode;
uniform int binsCount;

float luma(vec4 color) {
    return dot(color.rgb, vec3(0.2126, 0.7152, 0.0722));
}

float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

vec2 indexToCoord(float index, vec2 resolution) {
    vec2 pixelCoord = vec2(
        mod(index, resolution.x),
        floor(index / resolution.x)
    );
    return (pixelCoord + 0.5) / resolution;
}

void main() {
    vec2 texCoord = indexToCoord(index, resolution);
    vec4 color = texture2D(image, texCoord);

    float binIndex;
    if (colorMode) {
        color *= mask;
        binIndex = (color.r + color.g + color.b);
    } else {
        binIndex = luma(color);
    }

    // binIndex = floor(binIndex * float(binsCount) + 0.5) / float(binsCount);
    gl_Position = vec4(binIndex * 2.0 - 1.0, 0.5, 0.0, 1.0);
    gl_PointSize = 1.0;
}
`;
