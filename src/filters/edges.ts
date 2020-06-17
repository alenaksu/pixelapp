/*
1. Apply Gaussian filter to smooth the image in order to remove the noise
2. Find the intensity gradients of the image
3. Apply non-maximum suppression to get rid of spurious response to edge detection
4. Apply double threshold to determine potential edges
5. Track edge by hysteresis: Finalize the detection of edges by suppressing all the other edges that are weak and not connected to strong edges.
 */
import { getPixelMatrix } from '../utils';

const kernelX = [
    [-1, 0, 1],
    [-2, 0, 2],
    [-1, 0, 1],
];

const kernelY = [
    [-1, -2, -1],
    [0, 0, 0],
    [1, 2, 1],
];

/**
 * https://en.wikipedia.org/wiki/Kernel_(image_processing)#Convolution
 * @param m1
 * @param m2
 */
function convolute(m1: Array<Array<number>>, m2: Array<Array<number>>) {
    let result =
        m1[0][0] * m2[0][0] +
        m1[0][1] * m2[0][1] +
        m1[0][2] * m2[0][2] +
        m1[1][0] * m2[1][0] +
        m1[1][1] * m2[1][1] +
        m1[1][2] * m2[1][2] +
        m1[2][0] * m2[2][0] +
        m1[2][1] * m2[2][1] +
        m1[2][2] * m2[2][2];

    return result;
}

export default function edges(imageData: ImageData, threshold: number, modifier: number) {
    if (!threshold) return;

    // const greyscale = generateGreyscaleData(imageData);
    const sobelData = Array(imageData.width * imageData.height);
    for (let y = 0; y < imageData.height; y++) {
        for (let x = 0; x < imageData.width; x++) {
            const index = (x + y * imageData.width) * 4;
            const A = getPixelMatrix(index, 1, imageData);

            const Gx = convolute(kernelX, A);
            const Gy = convolute(kernelY, A);

            const magnitude = Math.sqrt(Gx ** 2 + Gy ** 2) >>> 0;

            const value = magnitude > threshold ? modifier : 1;
            sobelData[index] = value;
            sobelData[index + 1] = value;
            sobelData[index + 2] = value;
            sobelData[index + 3] = 1;
        }
    }

    return sobelData;
}
