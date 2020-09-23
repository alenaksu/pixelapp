import Filter from '../../Filter';
import fragment from './shader.frag';

export default class Dither extends Filter {
    name: string = 'dither';

    parameters = {
        ditherMatrix: [
            [1, 48, 12, 60, 3, 51, 15, 63],
            [32, 16, 44, 28, 35, 19, 47, 31],
            [8, 56, 4, 52, 11, 59, 7, 55],
            [40, 24, 36, 20, 43, 27, 39, 23],
            [2, 50, 14, 62, 1, 49, 13, 61],
            [34, 18, 46, 30, 33, 17, 45, 29],
            [10, 58, 6, 54, 9, 57, 5, 53],
            [42, 26, 38, 22, 41, 25, 37, 21],
        ]
            .flat()
            .map((n) => (n + 1) / 64 - 0.5),
        threshold: 0,
        size: 1.0,
    };

    static get fragmentShader() {
        return fragment;
    }
}
