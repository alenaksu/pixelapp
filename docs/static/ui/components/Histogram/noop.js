export default`#define GLSLIFY 1
attribute vec2 position;
varying vec2 texCoord;

void main() {
    texCoord = (position + 1.0) / 2.0;

    gl_Position = vec4(position, 0.0, 1.0);
}`;
