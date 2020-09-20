export default`precision mediump float;
#define GLSLIFY 1
varying vec2 texCoord;
uniform sampler2D image;
uniform sampler2D source;
uniform vec2 resolution;
uniform float size;
uniform float threshold;
uniform float multiplier;

float convolute(mat3 kernel, sampler2D image, vec2 pos)
{
    vec4 tex00 = texture2D(image, pos + vec2(-1, -1) * resolution * size) * kernel[0][0];
    vec4 tex01 = texture2D(image, pos + vec2(0, -1) * resolution * size) * kernel[0][1];
    vec4 tex02 = texture2D(image, pos + vec2(1, -1) * resolution * size) * kernel[0][2];

    vec4 tex10 = texture2D(image, pos + vec2(-1, 0) * resolution * size) * kernel[1][0];
    vec4 tex11 = texture2D(image, pos + vec2(0, 0) * resolution * size) * kernel[1][1];
    vec4 tex12 = texture2D(image, pos + vec2(1, 0) * resolution * size) * kernel[1][2];

    vec4 tex20 = texture2D(image, pos + vec2(-1, 1) * resolution * size) * kernel[2][0];
    vec4 tex21 = texture2D(image, pos + vec2(0, 1) * resolution * size) * kernel[2][1];
    vec4 tex22 = texture2D(image, pos + vec2(1, 1) * resolution * size) * kernel[2][2];

    float maxWeight = max(max(max(max(max(max(max(max(kernel[0][0], kernel[0][1]), kernel[0][2]), kernel[1][0]), kernel[1][1]), kernel[1][2]), kernel[2][0]), kernel[2][1]), kernel[2][2]);

    vec4 color = tex00 + tex01 + tex02 + tex10 + tex11 + tex12 + tex20 + tex21 + tex22;
    // Normalize value to 0..1
    color.rgb /= maxWeight;

    return (color.r + color.g + color.b) / 3.0;
}

float sobel(sampler2D image, vec2 pos)
{
    mat3 kernelX = mat3(
        47.0, 0.0, -47.0,
        162.0, 0.0, -162.0,
        47.0, 0.0, -47.0);
        
    mat3 kernelY = mat3(
        47.0, 162.0, 47.0,
        0.0, 0.0, 0.0,
        -47.0, -162.0, -47.0);

    float gx = convolute(kernelX, image, pos);
    float gy = convolute(kernelY, image, pos);

    return sqrt(pow(gx, 2.0) + pow(gy, 2.0));
}

void main() {
    float magnitude = sobel(source, texCoord);

    gl_FragColor = texture2D(image, texCoord) * (magnitude > threshold ? (multiplier + 1.0) : 1.0);
    gl_FragColor.a = 1.0;
}`;
