precision mediump float;

uniform vec2 resolution;
uniform sampler2D histogramInfo;
uniform sampler2D maxValue;
varying vec2 texCoord;
uniform bool colorMode;
uniform int binsCount;

uniform bool logarithmicScale;

#pragma glslify: logScale = require(../../../utils/shaders/logScale.glsl)
#pragma glslify: luma = require(../../../utils/shaders/luma.glsl)
#define SMOOTH_SIZE 3

float lineSegment(vec2 p, vec2 a, vec2 b) {
    float thickness = 10.0 * resolution.x;

    // P - A :)
    vec2 pa = p - a;

    // Direction
    vec2 m = b - a;

    // Orthogonal intersection
    float h = clamp(
        dot(pa, m) / dot(m, m),
        0.0,
        1.0
    );

    // Distance
    float d = length(pa - m * h);

    return smoothstep(0.0, thickness, d);
}

float fill(vec2 p, vec2 a, vec2 b) {
    float thickness = 1.0 * resolution.x;

    return smoothstep(0.0, thickness, mix(a, b, p.x).y - p.y);
}

float draw(vec2 p, vec2 a, vec2 b) {
    float color = fill(p, a, b);
    // float line = max(1.0 - lineSegment(p, a, b), 0.1);

    return color;
}

vec4 normalizeValue(vec4 value, vec4 m) {
    return logarithmicScale
        ? log(value) / log(m)
        : value / m;
}

void main() {
    vec4 m = texture2D(maxValue, vec2(0.0));

    float x0 = floor(texCoord.x * float(binsCount)) / float(binsCount);
    float x1 = ceil(texCoord.x * float(binsCount)) / float(binsCount);
    vec4 value0 = texture2D(histogramInfo, vec2(x0, 0.0));
    vec4 value1 = texture2D(histogramInfo, vec2(x1, 0.0));
    // vec4 value = texture2D(histogramInfo, texCoord);

    // padding
    m *= 1.1;

    value0 = normalizeValue(value0, m);
    value1 = normalizeValue(value1, m);
    // value = normalizeValue(value, m);

    vec4 color = vec4(
        draw(texCoord, vec2(x0, value0.r), vec2(x1, value1.r)),
        draw(texCoord, vec2(x0, value0.g), vec2(x1, value1.g)),
        draw(texCoord, vec2(x0, value0.b), vec2(x1, value1.b)),
        0.0
    );

    gl_FragColor = color;
}
