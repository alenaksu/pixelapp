import{createShader as f,createProgram as h}from"./utils.js";export default class l{static get vertexShader(){return`
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
        `}constructor(t){this.gl=t,this.program=void 0,this.vertexShader=void 0,this.fragmentShader=void 0,this.positionLocation=void 0,this.parameters={},this.enabled=!0,this.name="Filter",this.vertexShader=f(t,t.VERTEX_SHADER,this.constructor.vertexShader),this.fragmentShader=f(t,t.FRAGMENT_SHADER,this.constructor.fragmentShader),this.program=h(t,this.vertexShader,this.fragmentShader)}setupUniforms(){const{gl:t,program:i,parameters:m}=this,n=t.getAttribLocation(this.program,"position");t.enableVertexAttribArray(n),t.vertexAttribPointer(n,2,t.FLOAT,!1,0,0);const s={resolution:[1/t.drawingBufferWidth,1/t.drawingBufferHeight],...m};for(const a in s){const r=t.getUniformLocation(i,a);if(r===null)continue;const o=s[a];if(Array.isArray(o)){const e=new Float32Array(o);switch(o.length){case 1:t.uniform1fv(r,e);break;case 2:t.uniform2fv(r,e);break;case 3:t.uniform3fv(r,e);break;case 4:t.uniform4fv(r,e);break;case 9:t.uniformMatrix3fv(r,!1,e);break;case 16:t.uniformMatrix4fv(r,!1,e);break;default:t.uniform1fv(r,e)}}else if(typeof o=="number")t.uniform1f(r,o);else throw'attempted to set uniform "'+a+'" to invalid value '+(o||"undefined").toString()}const c=t.getUniformLocation(i,"image");t.uniform1i(c,0);const u=t.getUniformLocation(i,"source");t.uniform1i(u,1)}use(){const{gl:t,program:i}=this;t.useProgram(i),this.setupUniforms()}clear(){}}
