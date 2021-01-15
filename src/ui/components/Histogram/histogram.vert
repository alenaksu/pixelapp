attribute float index;

uniform vec2 resolution;
uniform sampler2D image;
uniform vec4 mask;
uniform bool colorMode;
uniform int binsCount;

#pragma glslify: luma = require(../../../utils/shaders/luma.glsl)
#pragma glslify: map = require(../../../utils/shaders/map.glsl)

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
