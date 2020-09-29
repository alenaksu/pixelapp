import Filter from '../../Filter';
import fragment from './shader.frag';

export default class Color extends Filter {
    name: string = 'color';

    parameters = {
        temperature: 0,
        tint: 0,
        hue: 0,
        vibrance: 0,
        saturation: 0
    };

    static get fragmentShader() {
        return fragment;
    }
}
