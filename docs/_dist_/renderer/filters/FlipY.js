import o from"../Filter.js";export default class e extends o{constructor(...t){super(...t);this.name="FlipY"}static get vertexShader(){return`
            attribute vec2 position;
            varying vec2 texCoord;
        
            void main() {
                texCoord = (position + 1.0) / 2.0;
                texCoord.y = 1.0 - texCoord.y;

                gl_Position = vec4(position, 0, 1.0);
            }
        `}}
