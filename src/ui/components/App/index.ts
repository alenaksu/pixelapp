import { LitElement, html, unsafeCSS, query, property } from 'lit-element';
import { UploadToCloudOutlineIcon } from '@spectrum-web-components/icons-workflow';
import styles from 'bundle-text:./styles.css';
import { create, Renderer } from '../../../renderer';
import { loadImage, openImageFile } from '../../../utils';
import '../PaletteEditor';

const FilterKnobs = [
    {
        name: 'Pixelate.pixelSize',
        min: 1,
        max: 15,
        step: 1,
        value: 1,
        label: 'Pixel Size',
        variant: undefined,
    },
    { name: 'Transform.contrast', min: -1, max: 1, step: 0.01, value: 0, label: 'Contrast' },
    {
        name: 'Transform.brightness',
        min: -1,
        max: 1,
        step: 0.01,
        value: 0,
        label: 'Brightness',
    },
    { name: 'Transform.temperature', min: -1, max: 1, step: 0.01, value: 0, label: 'Temperature' },
    { name: 'Transform.saturation', min: 0, max: 2, step: 0.01, value: 1, label: 'Saturation' },
    // { name: 'grey', min: 0, max: 1, step: 0.01, value: 0.5, label: 'Grey' },
    { name: 'Transform.sharpen', min: -2, max: 2, step: 0.01, value: 0, label: 'Sharpen/Blur' },
    {
        name: 'Transform.blur',
        min: 0,
        max: 5,
        step: 0.01,
        value: 0,
        label: 'Sharpen/Blur intensity',
    },
    { name: 'Palette.ditherThreshold', min: 0, max: 1, step: 0.01, value: 0, label: 'Dither' },
    { name: 'Palette.ditherSize', min: 0, max: 15, step: 1, value: 1, label: 'Dither size' },
    { name: 'Sobel.threshold', min: 0, max: 1, step: 0.001, value: 0.3, label: 'Edge threshold' },
    { name: 'Sobel.size', min: 1, max: 15, step: 1, value: 1, label: 'Edge size' },
    { name: 'Sobel.multiplier', min: -1, max: 1, step: 0.01, value: 0, label: 'Edge multiplier' },
];

class App extends LitElement {
    @query('#canvas')
    canvas?: HTMLCanvasElement;

    @property({ type: String })
    private imageSrc: string = '';

    @query('pis-palette-editor')
    private paletteEditor;

    private renderer: Renderer;

    private knobs: object = {};

    static get styles() {
        return unsafeCSS(styles);
    }

    firstUpdated() {
        const knobs = {};
        this.renderer = create(this.canvas);
        this.renderer.filters.forEach((filter) => {
            const name = filter.constructor.name;
            for (const knobName of Object.keys(filter.parameters)) {
                knobs[`${name}.${knobName}`] = filter.parameters[knobName];
            }
        });

        this.knobs = knobs;
        this.update({ knobs });
    }

    handleUploadImage() {
        if (this.imageSrc.startsWith('blob:')) URL.revokeObjectURL(this.imageSrc);

        openImageFile().then((file) => {
            this.imageSrc = URL.createObjectURL(file);
        });
    }

    handleKnobChange(knobName) {
        return ({ target: { value } }) => {
            const { renderer, knobs } = this;

            knobs[knobName] = value;
            const [filterName, paramName] = knobName.split('.');
            renderer.filters[filterName].parameters[paramName] = value;

            renderer.draw();
        };
    }

    handlePaletteChange() {
        const palette = this.paletteEditor.palette;
        (<any>this.renderer.filters).Palette.setPalette(palette);

        this.knobs[
            'Palette.ditherThreshold'
        ] = this.renderer.filters.Palette.parameters.ditherThreshold = 1 / palette.width;

        this.requestUpdate();
        this.renderer.draw();
    }

    update(changedProperties) {
        super.update(changedProperties);

        loadImage(this.imageSrc).then((image: ImageData) => {
            this.renderer.setSource(image);
        });
    }

    renderKnobs() {
        return html`
            <form class="panel-group">
                ${FilterKnobs.map(
                    (knob) => html`
                        <sp-slider
                            @input=${this.handleKnobChange(knob.name)}
                            name="${knob.name}"
                            min="${knob.min}"
                            max="${knob.max}"
                            step="${knob.step}"
                            value="${this.knobs[knob.name]}"
                            variant="${knob.variant || 'filled'}"
                            label="${knob.label}"
                        ></sp-slider>
                    `,
                )}
            </form>
        `;
    }

    render() {
        return html`
            <div id="action-bar" class="scrollable">
                <sp-action-button quiet @click="${this.handleUploadImage}">
                    <span slot="icon">${UploadToCloudOutlineIcon()}</span>
                </sp-action-button>
            </div>
            <div id="main">
                <canvas id="canvas"></canvas>
            </div>
            <div id="sidebar" class="scrollable">
                ${this.imageSrc
                    ? html`
                          <div class="panel-group preview">
                              <img src="${this.imageSrc}" />
                          </div>
                      `
                    : null}
                ${this.renderKnobs()}

                <sp-rule size="medium"></sp-rule>
                <div class="panel-group">
                    <pis-palette-editor @change="${this.handlePaletteChange}"></pis-palette-editor>
                </div>
            </div>

            <sp-icons-medium></sp-icons-medium>
            <sp-icons-workflow></sp-icons-workflow>
        `;
    }
}
customElements.define('pis-app', App);
