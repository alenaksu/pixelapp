import { LitElement, html, property, css } from 'lit-element';
import { rgbToHex, openFile, loadImage, iteratePixels, hexToRgb } from '../../../utils';
import processing from '../../../processing';

import '../ColorPicker';

// TODO
class PaletteEditor extends LitElement {
    @property({ type: Array })
    palette: ImageData;

    @property({ type: Object, reflect: false })
    image: ImageData;

    static get styles() {
        return css`
            :host {
                display: block;
            }

            .swatch {
                margin-top: 20px;
            }
        `;
    }

    handleImportClick() {
        openFile()
            .then((file) => loadImage(URL.createObjectURL(file)))
            .then((palette: ImageData) => {
                this.palette = palette;
                this.fireChangeEvent();
            });
    }

    handleCreateClick() {
        const method = Number(prompt('Choose a method: 1 = median-cut, 2 = octree', '1'));
        const colors = Number(prompt('How many colors?', '24'));
        const imageData = this.image;
        const palette =
            method === 1
                ? processing.quantization.medianCut(imageData, colors)
                : processing.quantization.octree(imageData, colors);
        const paletteData = new ImageData(palette.length, 1);
        paletteData.data.set(palette.flat());
        this.palette = paletteData;

        this.fireChangeEvent();
    }

    handleResetClick() {
        this.palette = null;
        this.fireChangeEvent();
    }

    fireChangeEvent() {
        this.dispatchEvent(new Event('change'));
    }

    handleColorChange({ currentTarget }) {
        const i = Number(currentTarget.dataset.index);
        const color = hexToRgb(currentTarget.color, false);

        this.palette.data.set(color, i);
        this.fireChangeEvent();
    }

    renderColors() {
        const palette = this.palette;

        const templates = [];
        for (const [color, x, y, i] of iteratePixels(palette)) {
            templates.push(html`
                <pis-color-picker
                    @change="${this.handleColorChange}"
                    data-index="${i}"
                    color="${rgbToHex(color, false)}"
                >
                </pis-color-picker>
            `);
        }

        return templates;
    }

    render() {
        const { palette } = this;
        return html`
            <sp-button-group>
                <sp-action-button @click="${this.handleImportClick}">Import</sp-action-button>
                <sp-action-button @click="${this.handleCreateClick}">Create</sp-action-button>
                <sp-action-button @click="${this.handleResetClick}">Reset</sp-action-button>
            </sp-button-group>

            <div class="swatch">
                ${palette && this.renderColors()}
            </div>
        `;
    }
}
customElements.define('pis-palette-editor', PaletteEditor);
