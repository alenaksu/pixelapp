import { computeMedian } from './median';

function computeMean(offset: number, size: number, imageData: ImageData) {
    const values = [];

    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            const index = offset + (x + y * imageData.width) * 4;
            if (index in imageData.data) values.push(imageData.data.slice(index, index + 4));
        }
    }

    const minMax = (range, value) => {
        range[0] = Math.min(range[0], value);
        range[1] = Math.max(range[1], value);
    };

    const rangeR = [Infinity, -Infinity];
    const rangeG = [Infinity, -Infinity];
    const rangeB = [Infinity, -Infinity];

    for (const [r, g, b] of values) {
        minMax(rangeR, r);
        minMax(rangeG, g);
        minMax(rangeB, b);
    }

    const r = rangeR[1] - rangeR[0];
    const g = rangeG[1] - rangeG[0];
    const b = rangeB[1] - rangeB[0];
    const max = Math.max(r, g, b);

    const channel = r === max ? 0 : g === max ? 1 : 2;

    values.sort((a, b) => a[channel] - b[channel]);
    const right = values[Math.floor(values.length / 2)];
    const left = values[Math.ceil(values.length / 2) - 1];

    const color = [(left[0] + right[0]) / 2, (left[1] + right[1]) / 2, (left[2] + right[2]) / 2];

    return color;

    const sum = values.reduce(
        (sum, [r, g, b]) => {
            sum[0] += r;
            sum[1] += g;
            sum[2] += b;

            return sum;
        },
        [0, 0, 0],
    );

    return sum.map((c) => Math.round(c / values.length));
}

export default function pixelate(imageData: ImageData, size: number = 1) {
    if (!size) return;

    for (let x = 0; x < imageData.width; x += size) {
        for (let y = 0; y < imageData.height; y += size) {
            const index = (y * imageData.width + x) * 4;
            const color = computeMean(index, size, imageData);

            for (let x = 0; x < size; x++) {
                for (let y = 0; y < size; y++) {
                    const offset = index + (x + y * imageData.width) * 4;
                    imageData.data[offset] = color[0];
                    imageData.data[offset + 1] = color[1];
                    imageData.data[offset + 2] = color[2];
                }
            }

            // imageData.data[index] = color[0];
            // imageData.data[index + 1] = color[1];
            // imageData.data[index + 2] = color[2];
        }
    }
}
