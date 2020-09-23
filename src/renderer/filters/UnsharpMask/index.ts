import Filter from '../../Filter';
import fragment from './shader.frag';

export default class UnsharpMark extends Filter {
    name: string = 'unsharpMask';

    parameters = {
        amount: 0,
        radius: 5
    };

    static get fragmentShader() {
        return fragment;
    }
}
