import Filter from '../../Filter';

export default class Sobel extends Filter {
    size: number = 1;
    threshold: number = 0.7;

    static get fragmentShader() {
        return `
            precision mediump float;
            varying vec2 texCoords;
            uniform sampler2D image;
            uniform vec2 resolution;
            uniform float size;
            uniform float threshold;
        
            float convolute(mat3 kernel, sampler2D image, vec2 pos)
            {
                vec4 color = vec4(0);
                for (int i = 0; i < 3; i++)
                {
                    for (int j = 0; j < 3; j++)
                    {
                        vec2 samplePos = pos + vec2(i - 1, j - 1) * resolution * size;
                        vec4 sampleColor = texture2D(image, samplePos);
            
                        color += sampleColor * kernel[i][j];
                    }
                }
            
                return (color.r + color.g + color.b) / 3.0;
            }
            
            float sobel(sampler2D image, vec2 pos)
            {
                mat3 kernelX = mat3(
                    1.0, 0.0, -1.0,
                    2.0, 0.0, -2.0,
                    1.0, 0.0, -1.0);
                mat3 kernelY = mat3(
                    1.0, 2.0, 1.0,
                    0.0, 0.0, 0.0,
                    -1.0, -2.0, -1.0);
            
                float gx = convolute(kernelX, image, pos);
                float gy = convolute(kernelY, image, pos);
            
                return sqrt(pow(gx, 2.0) + pow(gy, 2.0));
            }
            
            void main() {
                float magnitude = sobel(image, texCoords);
        
                gl_FragColor = texture2D(image, texCoords) * (magnitude > threshold ? 0.1 : 1.0);
                gl_FragColor.a = 1.0;
            }
        `;
    }

    get uniforms() {
        return {
            size: this.size,
            threshold: this.threshold,
        };
    }
}
