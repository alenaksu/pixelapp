precision highp float;

uniform sampler2D image;
uniform int binsCount;

#define MAX_BINS 2048

void main() {
    vec4 maxValue = vec4(0.0);

    for(int i = 0; i < MAX_BINS; i++) {
        if (i >= binsCount) break;

        vec2 texCoord = vec2((float(i) + 0.5) / float(binsCount), 0.5);
        vec4 value = texture2D(image, texCoord);
        maxValue = max(maxValue, value);
    }

    gl_FragColor = vec4(
        max(maxValue.r, max(maxValue.g, maxValue.b))
    );
}