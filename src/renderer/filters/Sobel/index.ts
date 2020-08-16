import fragment from 'bundle-text:./shader.frag';
import Filter from '../../Filter';

export default class Sobel extends Filter {
    name: string = 'Sobel';
    
    parameters = {
        size: 1,
        threshold: 0.3,
        multiplier: 0.0,
    };

    static get fragmentShader() {
        return fragment;
    }
}
