/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import * as dat from 'dat.gui';
import { medianCut } from './filters/index';
import median from './filters/median';
import pixelate from './filters/pixelate';
import './filters/pix';
import color from './filters/color';
import edges from './filters/edges';
import { iteratePixels, toMatrix } from './utils';
import { blur } from './filters/blur';

const gui = new dat.GUI({ autoPlace: false });
document.querySelector('#controls').appendChild(gui.domElement);

const MAX_SIZE = 1024;

const inputFile = <HTMLInputElement>document.querySelector('#fileInput')!;
const canvas = <HTMLCanvasElement>document.querySelector('#canvas');
const context = canvas.getContext('2d')!;
const preview = <HTMLImageElement>document.querySelector('#image');
const palette = <HTMLDivElement>document.querySelector('#palette');
let image: HTMLImageElement;
const transform = {
    maxSize: 600,
    colors: 24,
    pixelate: 3,
    blurPass: 3,
    medianSize: 1,
    saturation: 1.6,
    hue: 0,
    brightness: 1,
    edgeFilter: 1,
    edgeThreshold: 90,
    edgeModifier: 0.7,
};

const debounce = (fn: Function, timeout = 500) => {
    let timeoutId: any;

    return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(fn.bind(null, ...args), timeout);
    };
};

function loadImage(file: File) {
    URL.revokeObjectURL(preview.src);

    image = new Image();
    image.onload = () => {
        render(image);
    };
    image.src = URL.createObjectURL(file);

    preview.src = image.src;
}

function reduceColors() {}

function renderStep(fn) {
    console.time('step');
    return new Promise((resolve) => {
        requestAnimationFrame(() => {
            fn();
            resolve();
            console.timeEnd('step');
        });
    });
}

const render = debounce((image) => {
    const ratio = transform.maxSize / (image.width > image.height ? image.width : image.height);

    context.imageSmoothingEnabled = false;
    canvas.width = image.width * ratio;
    canvas.height = image.height * ratio;

    requestAnimationFrame(async () => {
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        let edgeData;

        await renderStep(() => {
            color(imageData, transform.hue, transform.saturation, transform.brightness);
            context.putImageData(imageData, 0, 0);
        });

        await renderStep(() => {
            // median(imageData, 1);
            const data = context.createImageData(imageData.width, imageData.height);
            data.data.set(new Uint8ClampedArray([...imageData.data]));

            for (let i = 0; i < transform.edgeFilter; i++) {
                data.data.set(blur(data, 5));
            }

            edgeData = edges(data, transform.edgeThreshold, transform.edgeModifier);
            // context.putImageData(imageData, 0, 0);
        });

        await renderStep(() => {
            for (let i = 0; i < transform.blurPass; i++) {
                const result = blur(imageData, 3);
                imageData.data.set(result);
            }
            context.putImageData(imageData, 0, 0);
        });

        await renderStep(() => {
            for (let i = 0; i < imageData.data.length; i++) {
                imageData.data[i] = Math.round(edgeData[i] * imageData.data[i]);
            }
            context.putImageData(imageData, 0, 0);
        });

        await renderStep(() => {
            const paletteColors = medianCut(imageData, transform.colors);
            context.putImageData(imageData, 0, 0);

            palette.innerHTML = paletteColors
                .map(
                    (color: Array<number>) => `<div style="background-color: rgb(${color})"></div>`,
                )
                .join('');
        });

        await renderStep(() => {
            pixelate(imageData, transform.pixelate);
            context.putImageData(imageData, 0, 0);
        });

        // for (let x = 0; x < imageData.width; x++) {
        //     for (let y = 0; y < imageData.height; y++) {
        //         const index = (y * imageData.width + x) * 4;

        //         const [r, g, b, a] = [
        //             imageData.data[index],
        //             imageData.data[index + 1],
        //             imageData.data[index + 2],
        //             imageData.data[index + 3],
        //         ];

        //         let color = r * 0xffff + g * 0xff + b;
        //         let xp = color % 0xff;
        //         let yp = Math.floor(color / 0xff);

        //         xp = Math.floor(xp / colors);
        //         yp = Math.floor(yp / colors);

        //         color -= color % colors;

        //         imageData.data[index] = color & 0xff0000;
        //         imageData.data[index + 1] = color & 0x00ff00;
        //         imageData.data[index + 2] = color & 0x0000ff;

        //         // imageData.data[index] -= r % colors;
        //         // imageData.data[index + 1] -= g % colors;
        //         // imageData.data[index + 2] -= b % colors;
        //         // imageData.data[index + 3] = a;
        //     }
        // }

        context.putImageData(imageData, 0, 0);
    });
}, 500);

function handleChange() {
    render(image);
}

gui.add(transform, 'maxSize', 64, 1024, 8).onChange(handleChange);
gui.add(transform, 'colors', 2, 256, 2).onChange(handleChange);
gui.add(transform, 'pixelate', 0, 10, 1).onChange(handleChange);
gui.add(transform, 'blurPass', 0, 20, 1).onChange(handleChange);
// gui.add(transform, 'medianSize', 1, 15, 1).onChange(handleChange);
gui.add(transform, 'hue', 0, 1, 0.01).onChange(handleChange);
gui.add(transform, 'saturation', 0.1, 2, 0.1).onChange(handleChange);
gui.add(transform, 'brightness', 0.1, 2, 0.1).onChange(handleChange);
gui.add(transform, 'edgeFilter', 0, 10, 1).onChange(handleChange);
gui.add(transform, 'edgeThreshold', 0, 255, 1).onChange(handleChange);
gui.add(transform, 'edgeModifier', 0, 2, 0.1).onChange(handleChange);

inputFile.addEventListener('change', (event) => {
    const imageFile = inputFile.files.item(0);
    inputFile.value = '';

    loadImage(imageFile);
});

fetch('./imgs/torre_di_pisa.jpg')
    .then((response) => response.blob())
    .then((blob) => {
        loadImage(new File([blob], 'image.jpg'));
    });
