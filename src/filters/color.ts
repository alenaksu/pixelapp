import { iteratePixels } from '../utils';
import { rgbToHsl, hslToRgb } from '../colors';

export default function color(
    imageData: ImageData,
    hue: number,
    saturation: number,
    brightness: number,
) {
    for (const [rgb, x, y, i] of iteratePixels(imageData)) {
        const hsl = rgbToHsl(rgb[0], rgb[1], rgb[2]);

        hsl[0] = Math.abs((hsl[0] + hue) % 1);
        hsl[1] *= saturation;
        hsl[2] *= brightness;

        const newRgb = <any>hslToRgb(hsl[0], hsl[1], hsl[2]);
        imageData.data[i] = newRgb[0];
        imageData.data[i + 1] = newRgb[1];
        imageData.data[i + 2] = newRgb[2];
    }
}
