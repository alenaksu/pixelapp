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

    const color = [mr, mg, mb, 255].map(Math.round);

    return color;
}

export function splitBucket(bucket: Bucket, imageData: ImageData, depth = 0) {
    if (depth === 0 || bucket.length === 1) return [quantize(bucket, imageData)];

    const rangeR = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
    const rangeG = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
    const rangeB = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];

    for (const [r, g, b] of bucket) {
        rangeR[0] = Math.min(rangeR[0], r);
        rangeR[1] = Math.max(rangeR[1], r);

        rangeG[0] = Math.min(rangeG[0], g);
        rangeG[1] = Math.max(rangeG[1], g);

        rangeB[0] = Math.min(rangeB[0], b);
        rangeB[1] = Math.max(rangeB[1], b);
    }

    const r = rangeR[1] - rangeR[0];
    const g = rangeG[1] - rangeG[0];
    const b = rangeB[1] - rangeB[0];
    const max = Math.max(r, g, b);

    const channel = r === max ? 0 : g === max ? 1 : 2;

    //const mean = bucket.reduce((sum, rgb) => sum + rgb[channel], 0) / bucket.length;
    bucket.sort((a, b) => a[channel] - b[channel]);

    const median = Math.ceil(bucket.length / 2);

    return [
        ...splitBucket(bucket.slice(0, median), imageData, depth - 1),
        ...splitBucket(bucket.slice(median), imageData, depth - 1),
        // ...splitBucket(bucket.filter(rgb => rgb[channel] < mean), imageData, depth - 1),
        // ...splitBucket(bucket.filter(rgb => rgb[channel] >= mean), imageData, depth - 1),
    ];
}

export default function medianCut(imageData: ImageData, colors: number = 256): Array<number> {
    const bucket: Bucket = [];
    for (let i = 0; i < imageData.data.length; i += 4) {
        const [r, g, b] = imageData.data.slice(i, i + 4);

        bucket.push([r, g, b, i]);
    }

    const palette = splitBucket(bucket, imageData, Math.round(Math.log2(colors)));

    return palette;
}
