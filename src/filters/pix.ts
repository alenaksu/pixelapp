import { iteratePixels } from '../utils';
import * as mathjs from 'mathjs';

type RGBColor = [number, number, number];

type Superpixel = {
    color: RGBColor;
    x: number;
    y: number;
};

function generateSuperpixels(width: number, height: number, color: RGBColor): Superpixel[] {
    return <Superpixel[]>Array.from({ length: width * height }, (_, i) => ({
        color: color,
        x: i % width,
        y: Math.floor(i / width),
    }));
}

function computeMeanColor(imageData: ImageData): RGBColor {
    const size = imageData.width * imageData.height;
    const mean: RGBColor = [0, 0, 0];
    for (const [rgb, x, y] of iteratePixels(imageData)) {
        mean[0] = rgb[0];
        mean[1] = rgb[1];
        mean[2] = rgb[2];
    }
    mean[0] /= size;
    mean[1] /= size;
    mean[2] /= size;

    return mean;
}

export default function convert(input: ImageData, output: ImageData, colors: number = 256) {
    const wRatio = Math.floor(output.width / input.width);
    const hRatio = Math.floor(output.height / input.height);

    const meanColor = computeMeanColor(input);

    const palette = [meanColor];
    const superpixels = generateSuperpixels(output.width, output.height, meanColor);
    
}

