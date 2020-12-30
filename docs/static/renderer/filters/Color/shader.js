export default`precision highp float;
#define GLSLIFY 1

varying vec2 texCoord;

uniform sampler2D image;
uniform float saturation;
uniform float temp;
uniform float tint;
uniform float hue;
uniform float vibrance;

float luma(vec4 color) {
    return dot(color.rgb, vec3(0.2126, 0.7152, 0.0722));
}

float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float logScale(float value, float k) {
    return exp(log(abs(value)) / log(k)) * value;
}

float logScale(float value) {
    return logScale(value, 2.0);
}

const float PI = 3.1415926535897932384626433832795;

const vec3 saturationVector = vec3(0.2126, 0.7152, 0.0722);

void main() {
    vec4 color = texture2D(image, texCoord);

    // White balance
    // vec3 tempTint = vec3(+mappedTemp, -mappedTint, -mappedTemp);
    // color.rgb += tempTint;

    float mappedTemp = logScale(temp);
    float mappedTint = logScale(tint);
    vec4 tempTint = vec4(1.0 + mappedTemp, 1.0 - mappedTint, 1.0 - mappedTemp, 1.0);
    tempTint *= 1.0 / luma(tempTint);

    color.rgb *= tempTint.rgb;

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
    vec3 desaturated = vec3(luma(color));
    vec3 mixed = mix(desaturated, color.rgb, (saturation + 1.0));
    color = vec4(mixed, color.a);

    
    gl_FragColor = color;
}`;
