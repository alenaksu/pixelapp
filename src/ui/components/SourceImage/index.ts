import { identityMatrix } from '../../../utils';
import store from '../../../store';

class SourceImage extends HTMLImageElement {
    constructor() {
        super();

        this.addEventListener('load', this.updateTransform);
    }

    connectedCallback() {
        store.on('editParamsChanged', this.updateTransform);
    }

    disconnectedCallback() {
        store.off('editParamsChanged', this.updateTransform);
    }

    updateTransform = () => {
        const { translate, rotate, scale, angle, flip } = store.state.editParams.crop;

        const matrix = identityMatrix()
            .rotateSelf(0, 0, rotate + angle)
            .translateSelf(translate[0] * this.width, translate[1] * this.height)
            .scaleSelf(scale, scale, 1);

        if (flip) {
            matrix.scaleSelf(flip === 1 || flip === 3 ? -1 : 1, flip === 2 || flip === 3 ? -1 : 1);
        }

        this.style.transform = `matrix3d(${matrix.toFloat32Array()})`;
    };
}
customElements.define('pis-source-image', SourceImage, { extends: 'img' });
