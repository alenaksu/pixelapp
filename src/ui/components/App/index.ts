import { LitElement, html, unsafeCSS, query, property } from 'lit-element';
import {
    ImageCheckedOutIcon,
    MovieCameraIcon,
    VideoCheckedOutIcon,
    UndoIcon,
    MoveLeftRightIcon,
    FolderOpenIcon,
    CompareIcon,
} from '@spectrum-web-components/icons-workflow';
import styles from './styles.css';
import { create, Renderer } from '../../../renderer';
import { loadImage, openFile } from '../../../utils';
import { MimeTypes } from '../../../types';
import '../PaletteEditor';
import '../ImageComparison';

const FilterKnobs = [
    {
        name: 'Pixelate.pixelSize',
        min: 1,
        max: 15,
        step: 1,
        value: 1,
        label: 'Pixel Size',
        variant: 'ramp',
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
    { name: 'Transform.hue', min: -1, max: 1, step: 0.01, value: 0, label: 'Hue' },
    { name: 'Transform.saturation', min: 0, max: 2, step: 0.01, value: 1, label: 'Saturation' },
    { name: 'Transform.vibrance', min: -1, max: 1, step: 0.01, value: 0, label: 'Vibrance' },
    // { name: 'grey', min: 0, max: 1, step: 0.01, value: 0.5, label: 'Grey' },
    { name: 'Transform.sharpen', min: -2, max: 2, step: 0.01, value: 0, label: 'Unsharp mask' },
    {
        name: 'Transform.sharpenRadius',
        min: 0,
        max: 10,
        step: 0.1,
        value: 1,
        label: 'Unsharp mask size',
        variant: 'ramp',
    },
    { name: 'Palette.ditherThreshold', min: 0, max: 1, step: 0.01, value: 0, label: 'Dither' },
    {
        name: 'Palette.ditherSize',
        min: 0,
        max: 15,
        step: 1,
        value: 1,
        label: 'Dither size',
        variant: 'ramp',
    },
    { name: 'Sobel.threshold', min: 0, max: 1, step: 0.001, value: 0.3, label: 'Edge threshold' },
    { name: 'Sobel.size', min: 1, max: 15, step: 1, value: 1, label: 'Edge size', variant: 'ramp' },
    { name: 'Sobel.multiplier', min: -1, max: 1, step: 0.01, value: 0, label: 'Edge multiplier' },
];

class App extends LitElement {
    @query('#canvas')
    canvas?: HTMLCanvasElement;

    @property({ type: String, attribute: 'image-src' })
    private imageSrc: string = '';

    private video?: HTMLVideoElement;

    @query('pis-palette-editor')
    private paletteEditor;

    private renderer: Renderer;

    @property({ type: Object, attribute: false })
    private knobs: object = {};

    @property({ type: Boolean })
    imageComparison: boolean = false;

    @property({ type: String })
    private currentPanelTab: string = 'adjust';

    static get styles() {
        return unsafeCSS(styles);
    }

    firstUpdated() {
        const knobs = {};
        this.renderer = create(this.canvas);
        this.renderer.filters.forEach((filter) => {
            const name = filter.name;
            for (const knobName of Object.keys(filter.parameters)) {
                knobs[`${name}.${knobName}`] = filter.parameters[knobName];
            }
        });

        this.knobs = knobs;
    }

    clear() {
        const { video, imageSrc } = this;

        if (imageSrc && imageSrc.startsWith('blob:')) URL.revokeObjectURL(imageSrc);
        if (video) {
            if (video.srcObject)
                (<MediaStream>video.srcObject).getTracks().forEach((t) => t.stop());
            if (video.src && video.src.startsWith('blob:')) URL.revokeObjectURL(video.src);
        }
        this.video = null;
        this.imageSrc = null;
    }

    handleOpenImage() {
        this.clear();

        openFile().then((file) => {
            this.imageSrc = URL.createObjectURL(file);
        });
    }

    // TODO sistemare
    handleOpenCamera() {
        this.clear();

        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
            const video = (this.video = document.createElement('video'));

            video.srcObject = stream;
            video.play().then(() => {
                video.width = video.videoWidth;
                video.height = video.videoHeight;

                this.renderer.setSource(video);

                const update = () => {
                    this.renderer.draw();
                    this.video && requestAnimationFrame(update);
                };

                requestAnimationFrame(update);
            });
        }, console.error);
    }

    // TODO sistemare
    handleOpenVideo() {
        this.clear();

        openFile(MimeTypes.Video).then((file) => {
            const video = (this.video = document.createElement('video'));
            video.src = URL.createObjectURL(file);

            video.play().then(() => {
                video.width = video.videoWidth;
                video.height = video.videoHeight;

                this.renderer.setSource(video);

                const update = () => {
                    this.renderer.draw();
                    this.video && requestAnimationFrame(update);
                };

                requestAnimationFrame(update);
            });
            video.onended = video.play.bind(video);
        });
    }

    handleKnobChange(knobName) {
        return ({ target: { value } }) => {
            this.setKnob(knobName, value);
        };
    }

    handlePaletteChange() {
        const palette = this.paletteEditor.palette;
        if (palette && palette.length) {
            console.log(new ImageData(new Uint8ClampedArray(palette.flat()), palette.length, 1));
            (<any>this.renderer.filters).Palette.setPalette(
                new ImageData(new Uint8ClampedArray(palette.flat()), palette.length, 1),
            );
        } else {
            (<any>this.renderer.filters).Palette.setPalette(null);
        }

        this.setKnob('Palette.ditherThreshold', palette ? 1 / palette.length : 0);
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (
            changedProperties.has('imageSrc') &&
            changedProperties.get('imageSrc') !== this.imageSrc
        ) {
            loadImage(this.imageSrc).then((image: ImageData) => {
                this.renderer.setSource(image);
                this.paletteEditor.image = image;
            });
        }

        if (this.renderer && changedProperties.has('knobs')) {
            this.renderer.draw();
        }
    }

    handleResetFiltersClick() {
        for (const knob of FilterKnobs) {
            this.setKnob(knob.name, knob.value);
        }
    }

    toggleImageComparison() {
        this.imageComparison = !this.imageComparison;
    }

    setKnob(name, value) {
        this.knobs = {
            ...this.knobs,
            [name]: value,
        };
        const [filterName, propName] = name.split('.');
        this.renderer.filters[filterName].parameters[propName] = value;
    }

    renderKnobs() {
        return html`
            <form class="panel-group" .hidden=${this.currentPanelTab !== 'adjust'}>
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

    renderPalette() {
        return html`
            <div class="panel-group" .hidden=${this.currentPanelTab !== 'palette'}>
                <pis-palette-editor @change="${this.handlePaletteChange}"></pis-palette-editor>
            </div>
        `;
    }

    handlePanelTabChange(e) {
        this.currentPanelTab = e.target.selected;
    }

    render() {
        return html`
            <div id="menuBar"></div>

            <div id="leftSidebar" class="scrollable sidebar">
                <sp-action-menu>
                    <sp-icon slot="icon">${FolderOpenIcon()}</sp-icon>
                    <!-- <span slot="label">Open</span> -->
                    <sp-menu>
                        <sp-menu-item @click="${this.handleOpenImage}">
                            <sp-icon slot="icon">${ImageCheckedOutIcon()}</sp-icon>Image
                        </sp-menu-item>
                        <sp-menu-item>
                            <sp-icon slot="icon">${VideoCheckedOutIcon()}</sp-icon>Video
                        </sp-menu-item>
                        <sp-menu-item @click="${this.handleOpenCamera}">
                            <sp-icon slot="icon">${MovieCameraIcon()}</sp-icon>Camera
                        </sp-menu-item>
                    </sp-menu>
                </sp-action-menu>

                <sp-action-button quiet @click="${this.handleResetFiltersClick}">
                    <sp-icon slot="icon">${UndoIcon()}</sp-icon>
                </sp-action-button>

                <sp-rule size="small"></sp-rule>

                <sp-action-button
                    quiet
                    toggles
                    .selected=${this.imageComparison}
                    @click="${this.toggleImageComparison}"
                >
                    <sp-icon slot="icon">${MoveLeftRightIcon()}</sp-icon>
                </sp-action-button>
            </div>

            <div id="main">
                <pis-image-comparison .enable="${this.imageComparison}">
                    <img slot="original" src="${this.imageSrc}" />
                    <canvas slot="modified" id="canvas"></canvas>
                </pis-image-comparison>
            </div>

            <div id="rightPanel" class="scrollable">
                <sp-tabs
                    selected="${this.currentPanelTab}"
                    @change=${this.handlePanelTabChange}
                    quiet
                >
                    <sp-tab label="Adjust" value="adjust"></sp-tab>
                    <sp-tab label="Palette" value="palette"></sp-tab>
                </sp-tabs>

                ${this.renderKnobs()} ${this.renderPalette()}
            </div>

            <sp-icons-medium></sp-icons-medium>
            <sp-icons-workflow></sp-icons-workflow>
        `;
    }
}
customElements.define('pis-app', App);
