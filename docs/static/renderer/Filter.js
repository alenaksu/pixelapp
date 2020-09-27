import{createShader as o,createProgram as n,setUniforms as m,setAttribArray as c}from"../utils/index.js";export default class h{static get vertexShader(){return`
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
        `}constructor(r){this.gl=r,this.program=void 0,this.vertexShader=void 0,this.fragmentShader=void 0,this.positionLocation=void 0,this.parameters={},this.enabled=!0,this.name="Filter",this.pass=1,this.vertexShader=o(r,r.VERTEX_SHADER,this.constructor.vertexShader),this.fragmentShader=o(r,r.FRAGMENT_SHADER,this.constructor.fragmentShader),this.program=n(r,this.vertexShader,this.fragmentShader)}setupUniforms(){const{gl:r,program:t,parameters:i}=this,e={...i,resolution:[1/r.drawingBufferWidth,1/r.drawingBufferHeight]};m(r,e),c(r,"position",2);const s=r.getUniformLocation(t,"image");r.uniform1i(s,0);const a=r.getUniformLocation(t,"source");r.uniform1i(a,1)}use(){const{gl:r,program:t}=this;r.useProgram(t),this.setupUniforms()}clear(){}}
