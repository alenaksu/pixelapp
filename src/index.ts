/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import * as dat from 'dat.gui';
import { medianCut } from './filters/index';
import quantize from './filters/octree';
import './filters/pix';
import { iteratePixels, getImageData } from './utils';
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
const paletteFile = <HTMLInputElement>document.querySelector('#paletteInput')!;
const canvas = <HTMLCanvasElement>document.querySelector('#canvas');
// const context = canvas.getContext('2d')!;
const preview = <HTMLImageElement>document.querySelector('#image');
const palette = <HTMLDivElement>document.querySelector('#palette');
const generatePalette = <HTMLButtonElement>document.querySelector('#generatePalette');
const resetPalette = <HTMLButtonElement>document.querySelector('#resetPalette');
let image: HTMLImageElement;
let paletteImage: HTMLImageElement;
const transform = {
    maxSize: 800,
    colors: 24,
    pixelate: 1,
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
const renderer = create(canvas);
const update = debounce(() => {
    requestAnimationFrame(renderer.draw.bind(renderer));
}, 50);

function setupGui() {
    gui.add(transform, 'maxSize', 64, 2048, 8).onChange(update);
    // gui.add(transform, 'colors', 2, 256, 2).onChange(update);

    const edges = gui.addFolder('Edges');

    edges.add(renderer.Sobel.parameters, 'size', 0, 3, 0.01).onChange(update);
    edges.add(renderer.Sobel.parameters, 'threshold', 0, 3, 0.01).onChange(update);
    edges.add(renderer.Sobel.parameters, 'multiplier', 0, 2, 0.01).onChange(update);

    gui.add(renderer.Pixelate.parameters, 'pixelSize', 1, 15, 1).onChange(update);
    // gui.add(renderer.Posterize.parameters, 'levels', 1, 24, 1).onChange(update);
    document.querySelector('#controls').appendChild(gui.domElement);

    const transformFolder = gui.addFolder('Transform');
    transformFolder.open();
    transformFolder.add(renderer.Transform.parameters, 'blur', 0, 5, 0.01).onChange(update);
    transformFolder.add(renderer.Transform.parameters, 'sharpen', -2, 2, 0.01).onChange(update);
    transformFolder.add(renderer.Transform.parameters, 'saturation', 0, 2, 0.01).onChange(update);
    transformFolder
        .add(renderer.Transform.parameters, 'warmth', -0.08, 0.08, 0.001)
        .onChange(update);
    transformFolder.add(renderer.Transform.parameters, 'brightness', 0, 2, 0.01).onChange(update);
    transformFolder.add(renderer.Transform.parameters, 'contrast', 0, 2, 0.01).onChange(update);
    transformFolder.add(renderer.Transform.parameters, 'grey', 0, 1, 0.01).onChange(update);
    // transform.add(renderer.Transform.parameters, 'gamma', 0.1, 10, 0.1).onChange(update);

    gui.add(renderer.Palette.parameters, 'ditherThreshold', 0, 0.5, 0.001).listen().onChange(update);
    gui.add(renderer.Palette.parameters, 'ditherSize', 0, 15, 1).listen().onChange(update);
}
setupGui();

function loadImage(file: File) {
    URL.revokeObjectURL(preview.src);

    image = new Image();
    image.onload = () => {
        // const canvas = document.createElement('canvas');
        // const context = canvas.getContext()
        const ratio = Math.min(
            transform.maxSize / (image.width > image.height ? image.width : image.height),
            1,
        );

       const imageData = getImageData(image, image.width * ratio, image.height * ratio);

        renderer.setSource(imageData);
    };
    image.src = URL.createObjectURL(file);

    preview.src = image.src;
}

function renderPalette(paletteData: ImageData) {
    const html = [];

    for (const [rgb] of iteratePixels(paletteData)) {
        html.push(`<div style="background-color: rgb(${rgb})"></div>`);
    }

    palette.innerHTML = html.join('');
}

inputFile.addEventListener('change', (event) => {
    const imageFile = inputFile.files.item(0);
    inputFile.value = '';

    loadImage(imageFile);
});

paletteFile.addEventListener('change', (event) => {
    const imageFile = paletteFile.files.item(0);
    paletteFile.value = '';

    const paletteImage = new Image();
    paletteImage.onload = () => {
        const palette = getImageData(paletteImage);

        renderer.Palette.parameters.ditherThreshold = 1 / palette.width;
        //palette.data.set(palette);
        renderPalette(palette);

        renderer.Palette.setPalette(palette);
        renderer.draw();
    };
    paletteImage.src = URL.createObjectURL(imageFile);
});

resetPalette.addEventListener('click', (e) => {
    e.preventDefault();
    renderer.Palette.setPalette(null);
    update();
});

generatePalette.addEventListener('click', (e) => {
    e.preventDefault();
    const method = Number(prompt('Choose a method: 1 = median-cut, 2 = octree', '1'));
    const colors = Number(prompt('How many colors?', '24'));

    const imageData = renderer.source;

    const palette = method === 1 ? medianCut(imageData, colors) : quantize(imageData, colors);
    // const q =  medianCut(imageData, 256); //quantize(imageData, 128);
    // const p = new ImageData(q.length, 1);
    // p.data.set(q.flat());
    // const palette = quantize(p, colors);

    const paletteData = new ImageData(palette.length, 1);
    paletteData.data.set(palette.flat());

    console.log('Palette size: ', palette.length);

    renderer.Palette.parameters.ditherThreshold = 1 / palette.length;

    renderPalette(paletteData);

    renderer.Palette.setPalette(paletteData);
    renderer.draw();
});

fetch('./imgs/obama.png')
    .then((response) => response.blob())
    .then((blob) => {
        loadImage(new File([blob], 'image.jpg'));
    });
