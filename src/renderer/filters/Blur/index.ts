import Filter from '../../Filter';
import fragment from './shader.frag';

export default class Blur extends Filter {
    name: string = 'blur';

    pass: number = 2;

    parameters = {
        radius: 0
    };

    static get fragmentShader() {
        return fragment;
    }
}

