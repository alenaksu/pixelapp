import { identityMatrix, setUniforms } from '../../../utils';
import Filter from '../../Filter';
import vertexShader from './shader.vert.glsl';

export default class Crop extends Filter {
    name: string = 'crop';
    enabled = true;
    parameters = {
        translate: [0, 0],
        rotate: 0,
        scale: 1,
        angle: 0,
        flip: 0,
    };

    static get vertexShader() {
        return vertexShader;
    }

    setupUniforms() {
        const gl = this.gl;
        const { translate, rotate, scale, angle, flip } = this.parameters;

        const aspect = gl.drawingBufferWidth / gl.drawingBufferHeight;
        const projection = identityMatrix();
        const model = identityMatrix()
            .scaleSelf(1 / aspect, 1)
            .rotateSelf(0, 0, rotate + angle)
            .translateSelf(translate[0] * 2 * aspect, translate[1] * 2)
            .scaleSelf(scale, scale, 1)
            .scaleSelf(aspect, 1);

        if (flip) {
            model.scaleSelf(flip === 1 || flip === 3 ? -1 : 1, flip === 2 || flip === 3 ? -1 : 1);
        }

        setUniforms(gl, {
            model: model.toFloat32Array(),
            projection: projection.toFloat32Array(),
        });
    }
}
