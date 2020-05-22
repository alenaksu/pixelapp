const kernels = {
    3: [
        [
            [1, 2, 1],
            [2, 4, 2],
            [1, 2, 1],
        ],
        1 / 16,
    ],
    5: [
        [
            [1, 4, 6, 4, 1],
            [4, 16, 24, 16, 4],
            [6, 24, 36, 24, 6],
            [4, 16, 24, 16, 4],
            [1, 4, 6, 4, 1],
        ],
        1 / 256,
    ],
};

/**
 * https://en.wikipedia.org/wiki/Kernel_(image_processing)#Convolution
 * @param m1
 * @param m2
 */
function convolute(m1: Array<Array<number>>, m2: Array<Array<number>>) {
    let result = 0;

    for (let i = 0; i < m1.length; i++) {
        for (let j = 0; j < m1.length; j++) {
            result += m1[i][j] * m2[i][j];
        }
    }

    return result;
}

function getMatrix(imageData: ImageData, offset: number, size: number) {
    const d = imageData.data;
    const i = offset;
    const y = imageData.width * 4;

    if (size === 3) {
        return [
            [d[i - 4 - y], d[i - y], d[i + 4 - y]].map((n) => n || d[i]),
            [d[i - 4], d[i], d[i + 4]].map((n) => n || d[i]),
            [d[i - 4 + y], d[i], d[i + 4 + y]].map((n) => n || d[i]),
        ];
    } else if (size === 5) {
        return [
            [
                d[i - 8 - y * 2],
                d[i - 4 - y * 2],
                d[i - y * 2],
                d[i + 4 - y * 2],
                d[i + 8 - y * 2],
            ].map((n) => n || d[i]),
            [d[i - 8 - y], d[i - 4 - y], d[i - y], d[i + 4 - y], d[i + 8 - y]].map(
                (n) => n || d[i],
            ),
            [d[i - 8], d[i - 4], d[i], d[i + 4], d[i + 8]].map((n) => n || d[i]),
            [d[i - 8 + y], d[i - 4 + y], d[i], d[i + 4 + y], d[i + 8 + y]].map((n) => n || d[i]),
            [d[i - 8 + y * 2], d[i - 4 + y * 2], d[i], d[i + 4 + y * 2], d[i + 8 + y * 2]].map(
                (n) => n || d[i],
            ),
        ];
    }
}

export function blur(imageData: ImageData, size: number = 3) {
    const resultData = Array(imageData.data.length);
    const d = imageData.data;

    const y = imageData.width * 4;
    for (let i = 0; i < d.length; i++) {
        const A = getMatrix(imageData, i, size);

        resultData[i] = convolute(A, kernels[size][0]) * kernels[size][1];
    }

    return resultData;
}
