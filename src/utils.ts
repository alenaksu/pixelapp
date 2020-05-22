export function getPixel(
    x: number,
    y: number,
    imageData: ImageData,
): [number, number, number, number] {
    const index = (y * imageData.width + x) * 4;
    return <[number, number, number, number]>[...imageData.data.slice(index, index + 4)];
}

export function* iteratePixels(
    imageData: ImageData,
): Generator<[[number, number, number, number], number, number, number]> {
    for (let x = 0; x < imageData.width; x++) {
        for (let y = 0; y < imageData.height; y++) {
            const index = (y * imageData.width + x) * 4;
            yield [getPixel(x, y, imageData), x, y, index];
        }
    }
}

export function toMatrix(imageData: ImageData) {
    const matrix = Array.from({ length: imageData.height }, () => Array(imageData.width).fill(0));

    for (const [rgba, x, y] of iteratePixels(imageData)) {
        matrix[y][x] = rgba;
    }

    return matrix;
}

export function getPixelMatrix(offset: number, size: number, imageData: ImageData) {
    const matrix = [];

    for (let y = -size; y <= size; y++) {
        const row = [];
        for (let x = -size; x <= size; x++) {
            const index = offset + (x + y * imageData.width) * 4;

            const [r, g, b, a] =
                index in imageData.data
                    ? [...imageData.data.slice(index, index + 3), 255]
                    : [0, 0, 0, 0];
            row.push((r + g + b + a) / 4);
        }
        matrix.push(row);
    }

    return matrix;
}
