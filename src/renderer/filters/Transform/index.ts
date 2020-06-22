import Filter from '../../Filter';
import fragment from 'bundle-text:./shader.frag';

export default class Transform extends Filter {
    parameters = {
        blur: 1,
        saturation: 1,
        temperature: 0,
        sharpen: 0,
        brightness: 0,
        contrast: 0,
        grey: 0.5,
        gamma: 1.0,
    };

    static get fragmentShader() {
        return fragment;
    }
}
