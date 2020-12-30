export default`#define GLSLIFY 1
float luma(vec4 color) {
    return dot(color.rgb, vec3(0.2126, 0.7152, 0.0722));
}
`;
