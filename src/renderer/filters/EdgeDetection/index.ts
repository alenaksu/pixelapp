import fragment from './shader.frag';
import Filter from '../../Filter';

export default class Sobel extends Filter {
    name: string = 'edgeDetection';
    
    parameters = {
        radius: 1,
        threshold: 0.3,
        blend: 0.0,
    };

    static get fragmentShader() {
        return fragment;
    }
}
