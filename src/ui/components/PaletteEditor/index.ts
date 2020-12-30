import { LitElement, html, property, unsafeCSS } from 'lit-element';
import {
    rgbToHex,
    openFile,
    loadImage,
    iteratePixels,
    hexToRgb,
    getImageData,
} from '../../../utils';
import processing from '../../../processing';
import { AddIcon } from '@spectrum-web-components/icons-workflow';
import styles from './styles.css';

import '../ColorPicker';
import { RGBAColor } from '../../../types';

// TODO
class PaletteEditor extends LitElement {
    @property({ type: Array })
    palette: Array<RGBAColor> = [];

    @property({ type: Object, reflect: false })
    image: ImageData;

    static get styles() {
        return unsafeCSS(styles);
    }

    importPalette() {
        openFile()
            .then((file) => loadImage(URL.createObjectURL(file)))
            .then((image) => getImageData(image))
            .then((palette: ImageData) => {
                this.palette = [...iteratePixels(palette)].map(([color]) => color);
                this.fireChangeEvent();
            });
    }

    // TODO move outside
    createPalette() {
        const method = Number(prompt('Choose a method: 1 = median-cut, 2 = octree', '1'));
        const colors = Number(prompt('How many colors?', '24'));
        const imageData = this.image;
        const palette =
            method === 1
                ? processing.quantization.medianCut(imageData, colors)
                : processing.quantization.octree(imageData, colors);
        const paletteData = new ImageData(palette.length, 1);
        paletteData.data.set(palette.flat());
        // TODO
        this.palette = [...iteratePixels(paletteData)].map(([color]) => color);

        this.fireChangeEvent();
    }

    resetPalette() {
        this.palette = [];
        this.fireChangeEvent();
    }

    fireChangeEvent() {
        this.dispatchEvent(new Event('change', { composed: true }));
    }

    handleColorChange({ currentTarget }) {
        const i = Number(currentTarget.dataset.index);
        const color = hexToRgb(currentTarget.color, false);

        this.palette[i] = color;
        this.fireChangeEvent();
    }

    handleAddColorClick() {
        this.palette = [...this.palette, [0, 0, 0, 255]];
        this.fireChangeEvent();
    }

    renderColors() {
        const palette = this.palette;

        const templates = palette.map(
            (color, i) => html`
                <pis-color-picker
                    @change="${this.handleColorChange}"
                    data-index="${i}"
                    color="${rgbToHex(color, false)}"
                >
                </pis-color-picker>
            `,
        );

        return templates;
    }

    render() {
        const { palette } = this;
        return html`
            <div class="swatch">${palette && this.renderColors()}</div>
            <sp-action-button quiet id="addButton" @click="${this.handleAddColorClick}">
                <sp-icon slot="icon">${AddIcon()}</sp-icon>
            </sp-action-button>
        `;
    }
}
customElements.define('pis-palette-editor', PaletteEditor);
