precision mediump float;

varying vec2 texCoord;

uniform sampler2D image;
uniform vec2 resolution;
uniform float saturation;
uniform float temperature;
uniform float sharpen;
uniform float brightness;
uniform float contrast;
uniform float sharpenRadius;
uniform float hue;
uniform float vibrance;

const vec3 saturationVector = vec3(0.299, 0.587, 0.114);
const float PI = 3.1415926535897932384626433832795;

void main() {
    vec2 off = resolution * sharpenRadius;
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
    
    // Unsharp mask
    color += (color - blurred) * sharpen;

    // Hue - Rotate color cube along {1,1,1} vector (Wolframe alpha: RotationTransform[theta, {1, 1, 1}][{x, y, z}])
    float theta = hue * PI;
    float s = sin(theta);
    float c = cos(theta);
    vec3 w = (vec3(2.0 * c, -sqrt(3.0) * s - c, sqrt(3.0) * s - c) + 1.0) / 3.0;
    color.rgb = vec3(
        dot(color.rgb, w.xyz),
        dot(color.rgb, w.zxy),
        dot(color.rgb, w.yzx)
    );
    
    // Saturation
    vec3 desaturated = vec3(dot(saturationVector, color.rgb));
    vec3 mixed = mix(desaturated, color.rgb, saturation);
    color = vec4(mixed, color.a);

    // Vibrance
    float average = (color.r + color.g + color.b) / 3.0;
    float maxChannel = max(color.r, max(color.g, color.b));
    float vibranceAmount = (maxChannel - average) * (-vibrance * 3.0);
    color.rgb = mix(color.rgb, vec3(maxChannel), vibranceAmount);
    
    // Temperature
    float t = temperature / 4.0;
    color.r += t;
    color.b -= t;

    // Brightness
    color.rgb = brightness < 0.0 ? color.rgb * (1.0 + brightness) : color.rgb + ((1.0 - color.rgb) * brightness);

    // Contrast
    // color.rgb = (color.rgb - 0.5) * (tan((contrast + 1.0) * (PI / 4.0))) + 0.5;
    color.rgb = (color.rgb - 0.5) * (contrast + 1.0) + 0.5;

    // color.rgb = pow(color.rgb, vec3(1.0 / gamma));
    
    gl_FragColor = color;
}