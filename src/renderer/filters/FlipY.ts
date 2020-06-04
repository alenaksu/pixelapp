import Filter from '../Filter';

export default class FlipY extends Filter {
    static get vertexShader() {
        return `
            attribute vec2 position;
            varying vec2 texCoords;
        
            void main() {
                texCoords = (position + 1.0) / 2.0;
                texCoords.y = 1.0 - texCoords.y;

                gl_Position = vec4(position, 0, 1.0);
            }
        `;
    }

    get uniforms() {
        return {
            u_flipY: -1,
        };
    }
}
