precision lowp float;

uniform vec2 resolution;
uniform sampler2D histogramInfo;
uniform float maxValue;

uniform bool logaritmicScale;

void main() {
    vec2 texCoord = gl_FragCoord.xy * resolution;
    vec4 value = texture2D(histogramInfo, texCoord);
    vec4 value1 = texture2D(histogramInfo, texCoord - resolution);
    vec4 value2 = texture2D(histogramInfo, texCoord + resolution);

    value = (value + value1 + value2) / vec4(3.0);

    value = logaritmicScale 
        ? log(value) / log(maxValue) 
        : value / maxValue;

    vec4 color = vec4(0.8, 0.8, 0.8, 1.0) * step(0.0, value.x - texCoord.y);

    // color.rgb *= (gl_FragCoord.x * resolution.x) + 0.2;

    gl_FragColor = color;
}