import { LitElement, html, property, css } from 'lit-element';
import { RGBAColor } from '../../../types';
import '../ColorPicker';
import { rgbToHex, openImageFile, getImageData, loadImage, iteratePixels } from '../../../utils';

class PaletteEditor extends LitElement {
    @property({ type: Array })
    palette: ImageData;

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
        openImageFile()
            .then((file) => loadImage(URL.createObjectURL(file)))
            .then((palette: ImageData) => {
                this.palette = palette;
            });
    }

    handleCreateClick() {
        // const method = Number(prompt('Choose a method: 1 = median-cut, 2 = octree', '1'));
        // const colors = Number(prompt('How many colors?', '24'));
        // const imageData = renderer.source;
        // const palette = method === 1 ? medianCut(imageData, colors) : quantize(imageData, colors);
        // // const q =  medianCut(imageData, 256); //quantize(imageData, 128);
        // // const p = new ImageData(q.length, 1);
        // // p.data.set(q.flat());
        // // const palette = quantize(p, colors);
        // const paletteData = new ImageData(palette.length, 1);
        // paletteData.data.set(palette.flat());
    }

    handleResetClick() {
        this.palette = null;
    }

    updated(changed) {
        if (changed.get('palette') !== this.palette) {
            this.dispatchEvent(new Event('change'));
        }
    }

    renderColors() {
        const palette = this.palette;

        const templates = [];
        for (const [color] of iteratePixels(palette)) {
            templates.push(html`
                <pis-color-picker color="${rgbToHex(color, false)}"> </pis-color-picker>
            `);
        }

        return templates;
    }

    render() {
        const { palette } = this;
        return html`
            <h2>Palette</h2>
            <sp-button-group>
                <sp-action-button @click="${this.handleImportClick}">Import</sp-action-button>
                <sp-action-button>Create</sp-action-button>
                <sp-action-button @click="${this.handleResetClick}">Reset</sp-action-button>
            </sp-button-group>

            <div class="swatch">
                ${palette && this.renderColors()}
            </div>
        `;
    }
}
customElements.define('pis-palette-editor', PaletteEditor);
