precision highp float;

varying vec2 texCoord;

uniform sampler2D image;
uniform vec2 resolution;
uniform float radius;
uniform float pass;

const float PI = 3.1415926535897932384626433832795;

vec4 blur(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
    vec4 color = vec4(0.0);
    vec2 off1 = vec2(1.3846153846) * direction * resolution;
    vec2 off2 = vec2(3.2307692308) * direction * resolution;
    color += texture2D(image, uv) * 0.2270270270;
    color += texture2D(image, uv + off1) * 0.3162162162;
    color += texture2D(image, uv - off1) * 0.3162162162;
    color += texture2D(image, uv + off2) * 0.0702702703;
    color += texture2D(image, uv - off2) * 0.0702702703;

    return color;
}

void main() {
    if (radius == 0.0) {
        gl_FragColor = texture2D(image, texCoord);
    } else {
        gl_FragColor = blur(image, texCoord, resolution, mod(pass, 2.0) == 0.0 ? vec2(radius, 0.0) : vec2(0.0, radius));
    }
}