export default`precision mediump float;
#define GLSLIFY 1
varying vec2 texCoord;
uniform sampler2D image;
uniform sampler2D source;
uniform vec2 resolution;
uniform float radius;
uniform float threshold;
uniform float blend;

const float PI = 3.1415926535897932384626433832795;

float convolute(mat3 kernel, sampler2D image, vec2 pos)
{
    vec4 tex00 = texture2D(image, pos + vec2(-1, -1) * resolution * radius) * kernel[0][0];
    vec4 tex01 = texture2D(image, pos + vec2(0, -1) * resolution * radius) * kernel[0][1];
    vec4 tex02 = texture2D(image, pos + vec2(1, -1) * resolution * radius) * kernel[0][2];

    vec4 tex10 = texture2D(image, pos + vec2(-1, 0) * resolution * radius) * kernel[1][0];
    vec4 tex11 = texture2D(image, pos + vec2(0, 0) * resolution * radius) * kernel[1][1];
    vec4 tex12 = texture2D(image, pos + vec2(1, 0) * resolution * radius) * kernel[1][2];

    vec4 tex20 = texture2D(image, pos + vec2(-1, 1) * resolution * radius) * kernel[2][0];
    vec4 tex21 = texture2D(image, pos + vec2(0, 1) * resolution * radius) * kernel[2][1];
    vec4 tex22 = texture2D(image, pos + vec2(1, 1) * resolution * radius) * kernel[2][2];

    float maxWeight = max(max(max(max(max(max(max(max(kernel[0][0], kernel[0][1]), kernel[0][2]), kernel[1][0]), kernel[1][1]), kernel[1][2]), kernel[2][0]), kernel[2][1]), kernel[2][2]);

    vec4 color = tex00 + tex01 + tex02 + tex10 + tex11 + tex12 + tex20 + tex21 + tex22;
    // Normalize value to 0..1
    color.rgb /= maxWeight;

    return (color.r + color.g + color.b) / 3.0;
}

float roundToN(float x, float n) {
    return floor(x / n + 0.5) * n;
}

vec2 sobel(sampler2D image, vec2 pos)
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

    float magnitude = length(vec2(gx, gy));
    float direction = atan(gy, gx);

    return vec2(magnitude, direction);
}

float nonMaximumSuppression(vec2 center) {
    float theta = mod(roundToN(center.y, PI / 4.0), PI);
    vec2 edge0;
    vec2 edge1;

    if (theta == 0.0) {
        // e-w
        edge0 = sobel(source, texCoord + vec2(-resolution.x, 0.0));
        edge1 = sobel(source, texCoord + vec2(resolution.x, 0.0));
    } else if (theta == PI / 4.0) {
        // ne-sw
        edge0 = sobel(source, texCoord + vec2(resolution.x, -resolution.y));
        edge1 = sobel(source, texCoord + vec2(-resolution.x, resolution.y));
    } else if (theta == PI / 2.0) {
        // n-s
        edge0 = sobel(source, texCoord + vec2(0.0, -resolution.y));
        edge1 = sobel(source, texCoord + vec2(0.0, resolution.y));
    } else if (theta == (3.0 * PI) / 4.0) {
        // nw-se
        edge0 = sobel(source, texCoord + vec2(-resolution.x, -resolution.y));
        edge1 = sobel(source, texCoord + vec2(resolution.x, resolution.y));
    }

    return center.x >= max(edge0.x, edge1.x) ? center.x : 0.0;
}

void main() {
    vec2 center = sobel(source, texCoord);

    // float x = nonMaximumSuppression(center);

    gl_FragColor = texture2D(image, texCoord) * (center.x > threshold ? (blend + 1.0) : 1.0);
    gl_FragColor.a = 1.0;
}`;
