type Bucket = Array<[number, number, number, number]>;

export function quantize(bucket: Bucket, imageData: ImageData) {
    let mr = 0;
    let mg = 0;
    let mb = 0;
    for (const [r, g, b, i] of bucket) {
        mr += r;
        mg += g;
        mb += b;
    }

    mr /= bucket.length;
    mg /= bucket.length;
    mb /= bucket.length;

    const color = [mr, mg, mb];
    for (const [r, g, b, i] of bucket) {
        imageData.data[i] = mr;
        imageData.data[i + 1] = mg;
        imageData.data[i + 2] = mb;
    }

    return color;
}

export function splitBucket(bucket: Bucket, imageData: ImageData, depth = 0) {
    if (depth === 0) return [quantize(bucket, imageData)];

    const minMax = (range, value) => {
        range[0] = Math.min(range[0], value);
        range[1] = Math.max(range[1], value);
    };

    const rangeR = [Infinity, -Infinity];
    const rangeG = [Infinity, -Infinity];
    const rangeB = [Infinity, -Infinity];

    for (const [r, g, b] of bucket) {
        minMax(rangeR, r);
        minMax(rangeG, g);
        minMax(rangeB, b);
    }

    const r = rangeR[1] - rangeR[0];
    const g = rangeG[1] - rangeG[0];
    const b = rangeB[1] - rangeB[0];
    const max = Math.max(r, g, b);

    const channel = r === max ? 0 : g === max ? 1 : 2;

    const mean = bucket.reduce((sum, rgb) => sum + rgb[channel], 0) / bucket.length;
    // bucket.sort((a, b) => a[channel] - b[channel]);

    // const median = Math.ceil(bucket.length / 2);

    return [
        // ...splitBucket(bucket.slice(0, median), imageData, depth - 1),
        // ...splitBucket(bucket.slice(median), imageData, depth - 1),
        ...splitBucket(bucket.filter(rgb => rgb[channel] < mean), imageData, depth - 1),
        ...splitBucket(bucket.filter(rgb => rgb[channel] >= mean), imageData, depth - 1),
    ];
}

export default function medianCut(imageData: ImageData, colors: number = 256) {
    const bucket: Bucket = [];
    for (let i = 0; i < imageData.data.length; i += 4) {
        const [r, g, b] = imageData.data.slice(i, i + 4);

        bucket.push([r, g, b, i]);
    }

    const palette = splitBucket(bucket, imageData, Math.ceil(Math.log2(colors)));

    return palette;
}
