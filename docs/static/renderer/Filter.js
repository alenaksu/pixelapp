import{createShader as f,createProgram as l}from"./utils.js";export default class g{static get vertexShader(){return`
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
        `}constructor(t){this.gl=t,this.program=void 0,this.vertexShader=void 0,this.fragmentShader=void 0,this.positionLocation=void 0,this.parameters={},this.enabled=!0,this.name="Filter",this.pass=1,this.vertexShader=f(t,t.VERTEX_SHADER,this.constructor.vertexShader),this.fragmentShader=f(t,t.FRAGMENT_SHADER,this.constructor.fragmentShader),this.program=l(t,this.vertexShader,this.fragmentShader)}setupUniforms(){const{gl:t,program:r,parameters:c}=this,n={...c};for(const a in n){const o=t.getUniformLocation(r,a);if(o===null)continue;const i=n[a];if(Array.isArray(i)){const e=new Float32Array(i);switch(i.length){case 1:t.uniform1fv(o,e);break;case 2:t.uniform2fv(o,e);break;case 3:t.uniform3fv(o,e);break;case 4:t.uniform4fv(o,e);break;case 9:t.uniformMatrix3fv(o,!1,e);break;case 16:t.uniformMatrix4fv(o,!1,e);break;default:t.uniform1fv(o,e)}}else if(typeof i=="number")t.uniform1f(o,i);else throw'attempted to set uniform "'+a+'" to invalid value '+(i||"undefined").toString()}const s=t.getAttribLocation(r,"position");t.enableVertexAttribArray(s),t.vertexAttribPointer(s,2,t.FLOAT,!1,0,0);const m=t.getUniformLocation(r,"resolution");t.uniform2fv(m,[1/t.drawingBufferWidth,1/t.drawingBufferHeight]);const u=t.getUniformLocation(r,"image");t.uniform1i(u,0);const h=t.getUniformLocation(r,"source");t.uniform1i(h,1)}use(){const{gl:t,program:r}=this;t.useProgram(r),this.setupUniforms()}clear(){}}
