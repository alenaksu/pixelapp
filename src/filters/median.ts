export function computeMedian(offset: number, size: number, imageData: ImageData) {
    const values = [];
    for (let x = -size; x <= size; x++) {
        for (let y = -size; y <= size; y++) {
            const index = offset + (x + y * imageData.width) * 4;

            if (index in imageData.data) values.push(imageData.data.slice(index, index + 3));
        }
    }

    values.sort((a, b) =>
        a[0] !== b[0] ? a[0] - b[0] : a[1] !== b[1] ? a[1] - b[1] : a[2] - b[2],
    );

    const right = values[Math.floor(values.length / 2)];
    const left = values[Math.ceil(values.length / 2) - 1];

    const color = [(left[0] + right[0]) / 2, (left[1] + right[1]) / 2, (left[2] + right[2]) / 2];

    return color;
}

export default function median(imageData: ImageData, size: number = 1) {
    if (!size) return;

    const result = Array.from(imageData.data);

    for (let x = 0; x < imageData.width; x++) {
        for (let y = 0; y < imageData.height; y++) {
            const index = (y * imageData.width + x) * 4;
            const color = computeMedian(index, size, imageData);

            result[index] = color[0];
            result[index + 1] = color[1];
            result[index + 2] = color[2];
        }
    }

    return result;
}
