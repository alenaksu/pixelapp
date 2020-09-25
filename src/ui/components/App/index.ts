import { LitElement, html, unsafeCSS, query, property } from 'lit-element';
import {
    ImageCheckedOutIcon,
    MovieCameraIcon,
    VideoCheckedOutIcon,
    UndoIcon,
    MoveLeftRightIcon,
    FolderOpenIcon,
    GearsIcon,
    ColorPaletteIcon,
    RedoIcon,
} from '@spectrum-web-components/icons-workflow';
import styles from './styles.css';
import { createEditor, Renderer } from '../../../renderer';
import { loadImage, openFile } from '../../../utils';
import { MimeTypes } from '../../../types';
import store from '../../../store';

import '../PalettePanel';
import '../ImageComparison';
import '../EditPanel';
import '../Histogram';

class App extends LitElement {
    @query('#canvas')
    canvas?: HTMLCanvasElement;

    @property({ type: String, attribute: 'image-src' })
    private imageSrc: string = '';

    private video?: HTMLVideoElement;

    @query('pis-palette-panel')
    private palettePanel;

    @query('#histogram')
    private histogram;

    private renderer: Renderer;

    @property({ type: Boolean })
    imageComparison: boolean = false;

    @property({ type: String })
    private currentPanelTab: string = 'adjust';

    static get styles() {
        return unsafeCSS(styles);
    }

    firstUpdated() {
        this.renderer = createEditor(this.canvas);

        store.on('editParamsChanged', () => {
            this.renderer.filters.light.parameters = store.state.editParams.light;
            this.renderer.filters.color.parameters = store.state.editParams.color;
            this.renderer.filters.edgeDetection.parameters =
                store.state.editParams.effects.edgeDetection;
            this.renderer.filters.pixelate.parameters.pixelSize =
                store.state.editParams.effects.pixelate;
            this.renderer.filters.unsharpMask.parameters = store.state.editParams.detail.sharpen;
            this.renderer.filters.dither.parameters.threshold =
                store.state.editParams.effects.dither.threshold;
            this.renderer.filters.dither.parameters.size =
                store.state.editParams.effects.dither.size;
            this.renderer.filters.blur.parameters.radius =
                store.state.editParams.detail.blur.radius;
            this.renderer.filters.blur.pass = store.state.editParams.detail.blur.pass * 2;
            this.renderer.draw();
            this.histogram.draw(this.canvas);
        });

        store.on('updateui', () => {
            this.requestUpdate();
        });
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

    handlePaletteChange() {
        const palette = this.palettePanel.editor.palette;
        if (palette && palette.length) {
            console.log(new ImageData(new Uint8ClampedArray(palette.flat()), palette.length, 1));
            (<any>this.renderer.filters).palette.setPalette(
                new ImageData(new Uint8ClampedArray(palette.flat()), palette.length, 1),
            );
        } else {
            (<any>this.renderer.filters).palette.setPalette(null);
        }

        store.setEditParam({
            name: 'effects.dither.threshold',
            value: palette ? 1 / palette.length : 0,
        });
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (
            changedProperties.has('imageSrc') &&
            changedProperties.get('imageSrc') !== this.imageSrc
        ) {
            loadImage(this.imageSrc).then((image: ImageData) => {
                this.renderer.setSource(image);
                this.histogram.draw(this.renderer.canvas);
                this.palettePanel.editor.image = image;
            });
        }
    }

    toggleImageComparison() {
        this.imageComparison = !this.imageComparison;
    }

    handleParamsChange(e) {
        const slider = e.composedPath()[0];
        store.setEditParam({
            name: slider.getAttribute('name'),
            value: slider.value,
        });
        store.saveSnapshot();
    }

    renderEditPanel() {
        return html`
            <pis-edit-panel
                @input="${this.handleParamsChange}"
                .hidden=${this.currentPanelTab !== 'adjust'}
                .params=${store.state.editParams}
            ></pis-edit-panel>
        `;
    }

    renderPalette() {
        return html`
            <pis-palette-panel
                @change="${this.handlePaletteChange}"
                .hidden=${this.currentPanelTab !== 'palette'}
            >
            </pis-palette-panel>
        `;
    }

    handlePanelTabChange = (tabName: string) => () => {
        this.currentPanelTab = tabName;
    };

    render() {
        return html`
            <div id="menuBar"></div>

            <div id="leftSidebar" class="scrollable sidebar">
                <sp-action-menu>
                    <sp-icon size="s" slot="icon">${FolderOpenIcon()}</sp-icon>
                    <!-- <span slot="label">Open</span> -->
                    <sp-menu>
                        <sp-menu-item @click="${this.handleOpenImage}">
                            <sp-icon size="s" slot="icon">${ImageCheckedOutIcon()}</sp-icon>Image
                        </sp-menu-item>
                        <sp-menu-item>
                            <sp-icon size="s" slot="icon">${VideoCheckedOutIcon()}</sp-icon>Video
                        </sp-menu-item>
                        <sp-menu-item @click="${this.handleOpenCamera}">
                            <sp-icon size="s" slot="icon">${MovieCameraIcon()}</sp-icon>Camera
                        </sp-menu-item>
                    </sp-menu>
                </sp-action-menu>

                <sp-rule size="small"></sp-rule>

                <sp-action-button
                    .disabled="${!store.state.history.canUndo}"
                    quiet
                    @click="${store.undo}"
                >
                    <sp-icon size="s" slot="icon">${UndoIcon()}</sp-icon>
                </sp-action-button>

                <sp-action-button
                    .disabled="${!store.state.history.canRedo}"
                    quiet
                    @click="${store.redo}"
                >
                    <sp-icon size="s" slot="icon">${RedoIcon()}</sp-icon>
                </sp-action-button>
            </div>

            <div id="main">
                <pis-image-comparison .enable="${this.imageComparison}">
                    <img slot="original" src="${this.imageSrc}" />
                    <canvas slot="modified" id="canvas"></canvas>
                </pis-image-comparison>
            </div>

            <div id="rightPanel" class="scrollable">
                <pis-histogram id="histogram"></pis-histogram>
                ${this.renderEditPanel()} ${this.renderPalette()}
            </div>

            <div id="rightSidebar" class="sidebar">
                <sp-action-button
                    quiet
                    .selected=${this.currentPanelTab === 'adjust'}
                    @click="${this.handlePanelTabChange('adjust')}"
                >
                    <sp-icon size="s" slot="icon">${GearsIcon()}</sp-icon>
                </sp-action-button>

                <sp-action-button
                    quiet
                    .selected=${this.currentPanelTab === 'palette'}
                    @click="${this.handlePanelTabChange('palette')}"
                >
                    <sp-icon size="s" slot="icon">${ColorPaletteIcon()}</sp-icon>
                </sp-action-button>

                <sp-action-button
                    quiet
                    toggles
                    .selected=${this.imageComparison}
                    @click="${this.toggleImageComparison}"
                >
                    <sp-icon size="s" slot="icon">${MoveLeftRightIcon()}</sp-icon>
                </sp-action-button>
            </div>

            <sp-icons-medium></sp-icons-medium>
            <sp-icons-workflow></sp-icons-workflow>
        `;
    }
}
customElements.define('pis-app', App);
