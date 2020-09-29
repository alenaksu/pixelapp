export default`precision highp float;
#define GLSLIFY 1

varying vec2 texCoord;

uniform sampler2D image;
uniform float saturation;
uniform float temperature;
uniform float tint;
uniform float hue;
uniform float vibrance;

const vec3 saturationVector = vec3(0.299, 0.587, 0.114);
const float PI = 3.1415926535897932384626433832795;

void main() {
    vec4 color = texture2D(image, texCoord);

    // Temperature
    float t = temperature / 4.0;
    color.r += t;
    // color.g += t;
    color.b -= t;

    // Tint
    t = tint / 4.0;
    // color.r += t;
    color.g -= t;
    // color.b += t;

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

    // Vibrance
    float average = (color.r + color.g + color.b) / 3.0;
    float maxChannel = max(color.r, max(color.g, color.b));
    float vibranceAmount = (maxChannel - average) * (-vibrance * 3.0);
    color.rgb = mix(color.rgb, vec3(maxChannel), vibranceAmount);
    
    
    // Saturation
    vec3 desaturated = vec3(dot(saturationVector, color.rgb));
    vec3 mixed = mix(desaturated, color.rgb, (saturation + 1.0));
    color = vec4(mixed, color.a);

    
    gl_FragColor = color;
}`;
