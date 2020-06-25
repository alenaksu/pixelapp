import Filter from '../../Filter';
import fragment from 'bundle-text:./shader.frag';

export default class Transform extends Filter {
    parameters = {
        saturation: 1,
        hue: 0,
        temperature: 0,
        sharpen: 0,
        sharpenRadius: 1,
        brightness: 0,
        contrast: 0,
    };

    static get fragmentShader() {
        return fragment;
    }
}
