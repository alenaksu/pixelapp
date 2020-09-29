import Filter from '../../Filter';
import fragment from './shader.frag';

export default class Blur extends Filter {
    name: string = 'blur';

    pass: number = 0;

    parameters = {
        radius: 1
    };

    static get fragmentShader() {
        return fragment;
    }
}

