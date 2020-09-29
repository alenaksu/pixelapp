import { RGBAColor, MimeTypes } from '../types';

export * from './events';
export * from './webgl';

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

export function luma(color) {
    return color[0] * 0.2126 + color[1] * 0.7152 + color[2] * 0.0722;
}

export function loadImage(imageSrc: string, maxSize: number = 2048) {
    return new Promise((resolve) => {
        const image = new Image();
        image.onload = () => {
            const ratio = Math.min(
                maxSize / (image.width > image.height ? image.width : image.height),
                1,
            );

            const imageData = getImageData(image, image.width * ratio, image.height * ratio);

            resolve(imageData);
        };
        image.src = imageSrc;
    });
}

export function getImageData(image: HTMLImageElement, width = image.width, height = image.height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    return imageData;
}

export function rgbToHsl(r, g, b) {
    (r /= 255), (g /= 255), (b /= 255);
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h;
    let s;
    const l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    return [h, s, l];
}

export function hslToRgb(h, s, l) {
    let r, g, b;

    if (s == 0) {
        r = g = b = l; // achromatic
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

export function openFile(type: MimeTypes = MimeTypes.Image) {
    return new Promise((resolve, reject) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = type;

        input.onchange = () => {
            resolve(input.files.item(0));
        };

        input.onblur = reject;

        input.click();
    });
}

export function rgbToHex(color: RGBAColor, denormalize: boolean = true): string {
    const d = denormalize ? 255 : 1;
    return `#${color
        .slice(0, 3)
        .map((n) => (n * d).toString(16).padStart(2, '0'))
        .join('')}`;
}

export function hexToRgb(color: string, normalize: boolean = true): RGBAColor {
    const d = normalize ? 255 : 1;
    return [
        parseInt(color.slice(1, 3), 16) / d,
        parseInt(color.slice(3, 5), 16) / d,
        parseInt(color.slice(5, 7), 16) / d,
        d,
    ];
}

export function getFromPath(obj: object, path: string | Array<string>, defaultValue: any): any {
    if (!Array.isArray(path)) path = path.split('.');

    for (const node of path) {
        if (!obj || !(node in obj)) return defaultValue;
        obj = obj[node];
    }

    return obj;
}

export default function rafThrottle(fn: Function) {
    let rafRequest;
    let lastArgs;
    return (...args) => {
        lastArgs = args;

        if (rafRequest) return;
        rafRequest = requestAnimationFrame(() => {
            fn(...lastArgs);
            rafRequest = null;
        });
    };
}

export function throttle(fn: Function, delay: number = 1000) {
    let timeoutRequest;
    return (...args) => {
        if (timeoutRequest) return;
        timeoutRequest = setTimeout(() => {
            timeoutRequest = null;
            fn(...args);
        }, delay);
    };
}

export function saveCanvas(canvas: HTMLCanvasElement, { name = 'image.jpg', quality = 80 } = {}) {
    return new Promise((resolve) => {
        canvas.toBlob(
            (blob) => {
                const a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = 'image.jpg';
                a.click();

                setTimeout(() => {
                    URL.revokeObjectURL(a.href);
                    resolve();
                });
            },
            'image/jpeg',
            quality / 100,
        );
    });
}
