precision highp float;

varying vec2 texCoord;

uniform sampler2D image;
uniform float saturation;
uniform float temp;
uniform float tint;
uniform float hue;
uniform float vibrance;

#pragma glslify: luma = require(../../../utils/shaders/luma.glsl)
#pragma glslify: map = require(../../../utils/shaders/map.glsl)
#pragma glslify: logScale = require(../../../utils/shaders/logScale.glsl)
#pragma glslify: PI = require(../../../utils/shaders/PI.glsl)

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
}