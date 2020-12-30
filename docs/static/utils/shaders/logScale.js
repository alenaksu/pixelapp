export default`#define GLSLIFY 1
float logScale(float value, float k) {
    return exp(log(abs(value)) / log(k)) * value;
}

float logScale(float value) {
    return logScale(value, 2.0);
}

`;
