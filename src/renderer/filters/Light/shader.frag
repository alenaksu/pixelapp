precision highp float;

varying vec2 texCoord;

uniform sampler2D image;
uniform vec2 resolution;
uniform float exposure;
uniform float contrast;
uniform float highlights;
uniform float shadows;
uniform float whites;
uniform float blacks;

const float PI = 3.1415926535897932384626433832795;

float luma(vec4 color) {
    return color.r * 0.2126 + color.g * 0.7152 + color.b * 0.722;
}

vec4 blur() {
    vec2 off = resolution;
    vec2 off2 = off * 2.0;
    
    // Why isn't this a loop? Some graphics chips can get be very slow if they
    // can't tell at compile time which texture reads are needed
    vec4 tex00 = texture2D(image, texCoord + vec2(-off2.x, -off2.y));
    vec4 tex10 = texture2D(image, texCoord + vec2(-off.x, -off2.y));
    vec4 tex20 = texture2D(image, texCoord + vec2(0.0, -off2.y));
    vec4 tex30 = texture2D(image, texCoord + vec2(off.x, -off2.y));
    vec4 tex40 = texture2D(image, texCoord + vec2(off2.x, -off2.y));
    
    vec4 tex01 = texture2D(image, texCoord + vec2(-off2.x, -off.y));
    vec4 tex11 = texture2D(image, texCoord + vec2(-off.x, -off.y));
    vec4 tex21 = texture2D(image, texCoord + vec2(0.0, -off.y));
    vec4 tex31 = texture2D(image, texCoord + vec2(off.x, -off.y));
    vec4 tex41 = texture2D(image, texCoord + vec2(off2.x, -off.y));
    
    vec4 tex02 = texture2D(image, texCoord + vec2(-off2.x, 0.0));
    vec4 tex12 = texture2D(image, texCoord + vec2(-off.x, 0.0));
    vec4 tex22 = texture2D(image, texCoord + vec2(0.0, 0.0));
    vec4 tex32 = texture2D(image, texCoord + vec2(off.x, 0.0));
    vec4 tex42 = texture2D(image, texCoord + vec2(off2.x, 0.0));
    
    vec4 tex03 = texture2D(image, texCoord + vec2(-off2.x, off.y));
    vec4 tex13 = texture2D(image, texCoord + vec2(-off.x, off.y));
    vec4 tex23 = texture2D(image, texCoord + vec2(0.0, off.y));
    vec4 tex33 = texture2D(image, texCoord + vec2(off.x, off.y));
    vec4 tex43 = texture2D(image, texCoord + vec2(off2.x, off.y));
    
    vec4 tex04 = texture2D(image, texCoord + vec2(-off2.x, off2.y));
    vec4 tex14 = texture2D(image, texCoord + vec2(-off.x, off2.y));
    vec4 tex24 = texture2D(image, texCoord + vec2(0.0, off2.y));
    vec4 tex34 = texture2D(image, texCoord + vec2(off.x, off2.y));
    vec4 tex44 = texture2D(image, texCoord + vec2(off2.x, off2.y));
    
    vec4 color = tex22;
    
    // Blur
    vec4 blurred = 1.0 * tex00 + 4.0 * tex10 + 6.0 * tex20 + 4.0 * tex30 + 1.0 * tex40
                + 4.0 * tex01 + 16.0 * tex11 + 24.0 * tex21 + 16.0 * tex31 + 4.0 * tex41
                + 6.0 * tex02 + 24.0 * tex12 + 36.0 * tex22 + 24.0 * tex32 + 6.0 * tex42
                + 4.0 * tex03 + 16.0 * tex13 + 24.0 * tex23 + 16.0 * tex33 + 4.0 * tex43
                + 1.0 * tex04 + 4.0 * tex14 + 6.0 * tex24 + 4.0 * tex34 + 1.0 * tex44;
    blurred /= 256.0;

    return blurred;
}

void main() {
    vec4 color = texture2D(image, texCoord);

    // Exposure
    color.rgb *= vec3(pow(2.0, exposure));

    // Contrast
    float slant = tan((contrast / 2.0 + 1.0) * (PI / 4.0));
    color.rgb = (color.rgb - 0.5) * slant + 0.5;

    // Highlights / Shadows
    float luminance = luma(color);

    float slope = 0.1;
    float t = luminance - 0.5;
    float k = -slope - 0.5;
    float l = ((k * t) / (k - abs(t) + 0.5)) + 0.5;
    float s = (1.0 - l) * (shadows + 1.0);
    float h = l * (highlights + 1.0);

    color.rgb = s * color.rgb + h * color.rgb;
    
    gl_FragColor = color;
}