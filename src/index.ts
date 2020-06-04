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
import { create } from './renderer/index';

const MAX_SIZE = 600;

const debounce = (fn: Function, timeout = 500) => {
    let timeoutId: any;

    return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(fn.bind(null, ...args), timeout);
    };
};

const inputFile = <HTMLInputElement>document.querySelector('#fileInput')!;
const canvas = <HTMLCanvasElement>document.querySelector('#canvas');
// const context = canvas.getContext('2d')!;
const preview = <HTMLImageElement>document.querySelector('#image');
const palette = <HTMLDivElement>document.querySelector('#palette');
let image: HTMLImageElement;
const transform = {
    maxSize: 1024,
    colors: 24,
    pixelate: 0,
    blur: 1,
    medianSize: 1,
    saturation: 1.6,
    hue: 0,
    brightness: 1,
    edge: 1,
    edgeThreshold: 0.7,
    edgeMultiplier: 0.7,
    posterize: 10,
};

const gui = new dat.GUI({ autoPlace: false });
gui.add(transform, 'maxSize', 64, 2048, 8).onChange(debounce(drawImage));
gui.add(transform, 'colors', 2, 256, 2).onChange(debounce(drawImage));
// gui.add(transform, 'pixelate', 0, 10, 1).onChange(handleChange);
// gui.add(transform, 'blurPass', 0, 20, 1).onChange(handleChange);
// // gui.add(transform, 'medianSize', 1, 15, 1).onChange(handleChange);
// gui.add(transform, 'hue', 0, 1, 0.01).onChange(handleChange);
// gui.add(transform, 'saturation', 0.1, 2, 0.1).onChange(handleChange);
// gui.add(transform, 'brightness', 0.1, 2, 0.1).onChange(handleChange);
// gui.add(transform, 'edgeFilter', 0, 10, 1).onChange(handleChange);
// gui.add(transform, 'edgeThreshold', 0, 255, 1).onChange(handleChange);
// gui.add(transform, 'edgeModifier', 0, 2, 0.1).onChange(handleChange);

gui.add(transform, 'edge', 0, 3, 0.01).onChange((v) => {
    instance.Sobel.size = v;
    update();
});
gui.add(transform, 'edgeThreshold', 0, 3, 0.01).onChange((v) => {
    instance.Sobel.threshold = v;
    update();
});
gui.add(transform, 'edgeMultiplier', 0, 2, 0.01).onChange((v) => {
    instance.Sobel.multiplier = v;
    update();
});

gui.add(transform, 'pixelate', 0, 50, 1).onChange((v) => {
    instance.Pixelate.size = v;
    update();
});
gui.add(transform, 'posterize', 1, 50, 1).onChange((v) => {
    instance.Posterize.levels = v;
    update();
});
document.querySelector('#controls').appendChild(gui.domElement);

const instance = create(canvas);
const update = requestAnimationFrame.bind(null, instance.draw.bind(instance));

gui.add(instance.Transform, 'blur', 0, 5, 0.01).onChange(update);
gui.add(instance.Transform, 'saturation', 0, 2, 0.01).onChange(update);
gui.add(instance.Transform, 'warmth', -0.08, 0.08, 0.001).onChange(update);
gui.add(instance.Transform, 'sharpen', -2, 2, 0.01).onChange(update);
gui.add(instance.Transform, 'brightness', 0, 2, 0.01).onChange(update);
gui.add(instance.Transform, 'contrast', 0, 2, 0.01).onChange(update);
gui.add(instance.Transform, 'grey', 0, 1, 0.01).onChange(update);

function drawImage() {
    const ratio = Math.min(transform.maxSize / (image.width > image.height ? image.width : image.height), 1);

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = image.width * ratio;
    canvas.height = image.height * ratio;

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const paletteColors = medianCut(imageData, transform.colors);
    palette.innerHTML = paletteColors
        .map((color: Array<number>) => `<div style="background-color: rgb(${color})"></div>`)
        .join('');

    instance.setSource(imageData);
}

function loadImage(file: File) {
    URL.revokeObjectURL(preview.src);

    image = new Image();
    image.onload = () => {
        drawImage();
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

// const render = debounce((image) => {
//     const ratio = transform.maxSize / (image.width > image.height ? image.width : image.height);

//     context.imageSmoothingEnabled = false;
//     canvas.width = image.width * ratio;
//     canvas.height = image.height * ratio;

//     requestAnimationFrame(async () => {
//         context.drawImage(image, 0, 0, canvas.width, canvas.height);
//         const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
//         let edgeData;

//         await renderStep(() => {
//             color(imageData, transform.hue, transform.saturation, transform.brightness);
//             context.putImageData(imageData, 0, 0);
//         });

//         await renderStep(() => {
//             // median(imageData, 1);
//             const data = context.createImageData(imageData.width, imageData.height);
//             data.data.set(new Uint8ClampedArray([...imageData.data]));

//             for (let i = 0; i < transform.edgeFilter; i++) {
//                 data.data.set(blur(data, 5));
//             }

//             edgeData = edges(data, transform.edgeThreshold, transform.edgeModifier);
//             // context.putImageData(imageData, 0, 0);
//         });

//         await renderStep(() => {
//             for (let i = 0; i < transform.blurPass; i++) {
//                 const result = blur(imageData, 3);
//                 imageData.data.set(result);
//             }
//             context.putImageData(imageData, 0, 0);
//         });

//         await renderStep(() => {
//             for (let i = 0; i < imageData.data.length; i++) {
//                 imageData.data[i] = Math.round(edgeData[i] * imageData.data[i]);
//             }
//             context.putImageData(imageData, 0, 0);
//         });

//         await renderStep(() => {
//             const paletteColors = medianCut(imageData, transform.colors);
//             context.putImageData(imageData, 0, 0);

//             palette.innerHTML = paletteColors
//                 .map(
//                     (color: Array<number>) => `<div style="background-color: rgb(${color})"></div>`,
//                 )
//                 .join('');
//         });

//         await renderStep(() => {
//             pixelate(imageData, transform.pixelate);
//             context.putImageData(imageData, 0, 0);
//         });

//         // for (let x = 0; x < imageData.width; x++) {
//         //     for (let y = 0; y < imageData.height; y++) {
//         //         const index = (y * imageData.width + x) * 4;

//         //         const [r, g, b, a] = [
//         //             imageData.data[index],
//         //             imageData.data[index + 1],
//         //             imageData.data[index + 2],
//         //             imageData.data[index + 3],
//         //         ];

//         //         let color = r * 0xffff + g * 0xff + b;
//         //         let xp = color % 0xff;
//         //         let yp = Math.floor(color / 0xff);

//         //         xp = Math.floor(xp / colors);
//         //         yp = Math.floor(yp / colors);

//         //         color -= color % colors;

//         //         imageData.data[index] = color & 0xff0000;
//         //         imageData.data[index + 1] = color & 0x00ff00;
//         //         imageData.data[index + 2] = color & 0x0000ff;

//         //         // imageData.data[index] -= r % colors;
//         //         // imageData.data[index + 1] -= g % colors;
//         //         // imageData.data[index + 2] -= b % colors;
//         //         // imageData.data[index + 3] = a;
//         //     }
//         // }

//         context.putImageData(imageData, 0, 0);
//     });
// }, 500);

function handleChange() {
    instance.draw();
}

inputFile.addEventListener('change', (event) => {
    const imageFile = inputFile.files.item(0);
    inputFile.value = '';

    loadImage(imageFile);
});

fetch('./imgs/ricci.jpg')
    .then((response) => response.blob())
    .then((blob) => {
        loadImage(new File([blob], 'image.jpg'));
    });
