export default`#define GLSLIFY 1
attribute vec2 position;
varying vec2 texCoord;
uniform mat4 model;
uniform mat4 projection;

void main() {
    texCoord = (position + 1.0) / 2.0;

    gl_Position = projection * model * vec4(position, -1.0, 1.0);
}`;
