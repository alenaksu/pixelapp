export default`#define GLSLIFY 1
attribute float index;

uniform vec2 resolution;
uniform sampler2D image;
uniform float binsCount;

float luma(vec4 color) {
    return dot(color.rgb, vec3(0.2126, 0.7152, 0.0722));
}

float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

vec2 indexToCoord(float index, vec2 resolution) {
    return vec2(
        mod(index, resolution.x), 
        floor(index / resolution.y)
    ) / (resolution - vec2(1.0));
}

void main() {
    vec2 texCoord = indexToCoord(index, resolution);
    vec4 color = texture2D(image, texCoord);
    float l = luma(color);

    float binIndex = l;

    gl_Position = vec4(binIndex * 2.0 - 1.0, 0.5, 0.0, 1.0);
    gl_PointSize = 1.0;
}`;
