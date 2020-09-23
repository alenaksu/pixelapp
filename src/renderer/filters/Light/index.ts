import Filter from '../../Filter';
import fragment from './shader.frag';

export default class Light extends Filter {
    name: string = 'light';

    parameters = {
        exposure: 0,
        contrast: 0,
        highlights: 0,
        shadows: 0,
        whites: 0,
        blacks: 0
    };

    static get fragmentShader() {
        return fragment;
    }
}
