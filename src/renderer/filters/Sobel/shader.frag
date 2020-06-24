precision mediump float;
varying vec2 texCoord;
uniform sampler2D image;
uniform sampler2D source;
uniform vec2 resolution;
uniform float size;
uniform float threshold;
uniform float multiplier;

float convolute(mat3 kernel, sampler2D image, vec2 pos)
{
    vec4 color = vec4(0);
    float sum = 0.0;
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            vec2 samplePos = pos + vec2(i - 1, j - 1) * resolution * size;
            vec4 sampleColor = texture2D(image, samplePos);

            color += sampleColor * kernel[i][j];
            sum = kernel[i][j];
        }
    }

    return (color.r + color.g + color.b) / sum / 3.0;
}

float sobel(sampler2D image, vec2 pos)
{
    // mat3 kernelX = mat3(
    //     1.0, 0.0, -1.0,
    //     2.0, 0.0, -2.0,
    //     1.0, 0.0, -1.0);
        
    // mat3 kernelY = mat3(
    //     1.0, 2.0, 1.0,
    //     0.0, 0.0, 0.0,
    //     -1.0, -2.0, -1.0);

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
}