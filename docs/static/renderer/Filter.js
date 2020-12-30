import{createShader as e,createProgram as i,setUniforms as o}from"../utils/index.js";export default class s{static get vertexShader(){return`
            precision highp float;
            attribute vec2 position;
            varying vec2 texCoord;
        
            void main() {
                texCoord = (position + 1.0) / 2.0;

                gl_Position = vec4(position, 0, 1.0);
            }
        `}static get fragmentShader(){return`
            precision mediump float;
            varying vec2 texCoord;
            uniform sampler2D image;

            void main() {
                vec4 color = texture2D(image, texCoord);

                gl_FragColor = color;
            }
        `}constructor(t){this.gl=t,this.program=void 0,this.vertexShader=void 0,this.fragmentShader=void 0,this.positionLocation=void 0,this.parameters={},this.enabled=!0,this.name="Filter",this.pass=1,this.vertexShader=e(t,t.VERTEX_SHADER,this.constructor.vertexShader),this.fragmentShader=e(t,t.FRAGMENT_SHADER,this.constructor.fragmentShader),this.program=i(t,this.vertexShader,this.fragmentShader)}setupUniforms(){const{gl:t,parameters:r}=this;o(t,r)}use(){const{gl:t,program:r}=this;t.useProgram(r),this.setupUniforms()}clear(){}}
