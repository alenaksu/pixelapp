import { LitElement, html, unsafeCSS, query, property } from 'lit-element';
import {
    ImageCheckedOutIcon,
    MovieCameraIcon,
    VideoCheckedOutIcon,
    UndoIcon,
    MoveLeftRightIcon,
    FolderOpenIcon,
    PropertiesIcon,
    ColorPaletteIcon,
    RedoIcon,
    SaveToLightIcon,
    CropRotateIcon,
    DeleteIcon,
} from '@spectrum-web-components/icons-workflow';
import styles from './styles.css';
import { createEditor, Renderer } from '../../../renderer';
import { rafThrottle, loadImage, openFile, saveImage } from '../../../utils';
import { MimeTypes } from '../../../types';
import store from '../../../store';

import '../panels/PalettePanel';
import '../ImageComparison';
import '../panels/EditPanel';
import '../Histogram';
import '../SaveDialog';
import '../CropTool';
import '../panels/CropPanel';
import '../SourceImage';

class App extends LitElement {
    @property({ type: String, attribute: 'image-src' })
    private imageSrc: string = '';

    private video?: HTMLVideoElement;

    @query('pis-palette-panel')
    private palettePanel;

    @query('#histogram')
    private histogram;

    @query('#saveDialog')
    private saveDialog;

    private renderer: Renderer = createEditor();

    @property({ type: Boolean })
    imageComparison: boolean = false;

    @property({ type: String })
    private activeTool: string = 'adjust';

    @property({ type: Boolean, attribute: false })
    private loading: boolean = false;

    static get styles() {
        return unsafeCSS(styles);
    }

    firstUpdated() {
        store.on(
            'editParamsChanged',
            rafThrottle(() => {
                this.renderer.filters.crop.parameters = store.state.editParams.crop;
                this.renderer.filters.light.parameters = store.state.editParams.light;
                this.renderer.filters.color.parameters = store.state.editParams.color;
                this.renderer.filters.edgeDetection.parameters =
                    store.state.editParams.effects.edgeDetection;
                this.renderer.filters.pixelate.parameters.pixelSize =
                    store.state.editParams.effects.pixelate;
                this.renderer.filters.unsharpMask.parameters =
                    store.state.editParams.detail.sharpen;
                this.renderer.filters.dither.parameters.threshold =
                    store.state.editParams.effects.dither.threshold;
                this.renderer.filters.dither.parameters.size =
                    store.state.editParams.effects.dither.size;
                this.renderer.filters.blur.parameters.radius =
                    store.state.editParams.detail.blur.radius;
                this.renderer.filters.blur.pass = store.state.editParams.detail.blur.pass * 2;
                this.renderer.draw();
                this.histogram.draw(this.renderer.canvas);
            }),
        );

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

        store.resetEditParams();
    }

    handleOpenImage() {
        openFile().then((file) => {
            this.clear();
            this.imageSrc = URL.createObjectURL(file);
        });
    }

    handlePaletteChange() {
        const palette = this.palettePanel.editor.palette;
        if (palette && palette.length) {
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

        if (changedProperties.has('imageSrc') && this.imageSrc) {
            this.loadPreview();
        }
    }

    loadPreview() {
        this.loading = true;
        loadImage(this.imageSrc, Math.max(window.screen.width, window.screen.height)).then(
            (image: ImageData) => {
                store.setImageData(image);
                this.renderer.setSource(image);
                this.histogram.draw(this.renderer.canvas);
                // this.palettePanel.editor.image = image;
                this.loading = false;
            },
        );
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

    renderCropPanel() {
        return html`
            <pis-crop-panel
                @input="${this.handleParamsChange}"
                @change="${this.handleParamsChange}"
                .hidden=${this.activeTool !== 'crop'}
                .params=${store.state.editParams}
            ></pis-crop-panel>
        `;
    }

    renderEditPanel() {
        return html`
            <pis-edit-panel
                @input="${this.handleParamsChange}"
                @change="${this.handleParamsChange}"
                .hidden=${this.activeTool !== 'adjust'}
                .params=${store.state.editParams}
            ></pis-edit-panel>
        `;
    }

    renderPalette() {
        return html`
            <pis-palette-panel
                @change="${this.handlePaletteChange}"
                .hidden=${this.activeTool !== 'palette'}
            >
            </pis-palette-panel>
        `;
    }

    renderPanel() {
        switch (this.activeTool) {
            case 'adjust':
                return this.renderEditPanel();
            case 'crop':
                return this.renderCropPanel();
            case 'palette':
                return this.renderPalette();
        }
    }

    handlePanelTabChange = (tabName: string) => () => {
        this.activeTool = tabName;
    };

    handleSaveClick() {
        this.saveDialog.open = true;
    }

    async handleSaveFile({ detail: { quality } }) {
        this.loading = true;

        const image = await loadImage(this.imageSrc);

        store.setImageData(image);
        this.renderer.setSource(image);
        this.renderer.draw();

        await saveImage(this.renderer.canvas, {
            quality,
        });

        this.loadPreview();

        this.loading = false;
    }

    handleResetChanges() {
        store.resetEditParams();
    }

    renderActiveTool() {
        this.renderer.canvas.slot = 'modified';

        switch (this.activeTool) {
            case 'crop':
                return html`
                    <pis-crop-tool>
                        <img slot="original" is="pis-source-image" src="${this.imageSrc}" />
                        ${this.renderer.canvas}
                    </pis-crop-tool>
                `;
            default:
                return html`
                    <pis-image-comparison .enable="${this.imageComparison}">
                        <img slot="original" is="pis-source-image" src="${this.imageSrc}" />
                        ${this.renderer.canvas}
                    </pis-image-comparison>
                `;
        }
    }

    render() {
        return html`
            <div id="menuBar"></div>

            <div id="leftSidebar" class="scrollable sidebar">
                <sp-action-group vertical>
                    <sp-action-button quiet @click="${this.handleOpenImage}">
                        <sp-icon size="s" slot="icon">${FolderOpenIcon()}</sp-icon>
                    </sp-action-button>

                    <sp-action-button quiet @click="${this.handleSaveClick}">
                        <sp-icon size="s" slot="icon">${SaveToLightIcon()}</sp-icon>
                    </sp-action-button>
                </sp-action-group>

                <sp-rule size="small"></sp-rule>
                <sp-action-group vertical>
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

                    <sp-action-button
                        quiet
                        toggles
                        .selected=${this.imageComparison}
                        @click="${this.toggleImageComparison}"
                    >
                        <sp-icon size="s" slot="icon">${MoveLeftRightIcon()}</sp-icon>
                    </sp-action-button>
                </sp-action-group>
            </div>

            <div id="main">${this.renderActiveTool()}</div>

            <div id="rightPanel" class="scrollable">
                <pis-histogram id="histogram"></pis-histogram>
                ${this.renderPanel()}
            </div>

            <div id="rightSidebar" class="sidebar">
                <sp-action-group vertical>
                    <sp-action-button
                        quiet
                        .selected=${this.activeTool === 'adjust'}
                        @click="${this.handlePanelTabChange('adjust')}"
                    >
                        <sp-icon size="s" slot="icon">${PropertiesIcon()}</sp-icon>
                    </sp-action-button>

                    <sp-action-button
                        quiet
                        .selected=${this.activeTool === 'crop'}
                        @click="${this.handlePanelTabChange('crop')}"
                    >
                        <sp-icon size="s" slot="icon">${CropRotateIcon()}</sp-icon>
                    </sp-action-button>

                    <sp-action-button
                        quiet
                        .selected=${this.activeTool === 'palette'}
                        @click="${this.handlePanelTabChange('palette')}"
                    >
                        <sp-icon size="s" slot="icon">${ColorPaletteIcon()}</sp-icon>
                    </sp-action-button>

                    <sp-action-button quiet @click="${this.handleResetChanges}">
                        <sp-icon size="s" slot="icon">${DeleteIcon()}</sp-icon>
                    </sp-action-button>
                </sp-action-group>
            </div>

            <sp-icons-medium></sp-icons-medium>
            <sp-icons-workflow></sp-icons-workflow>

            <pis-save-dialog id="saveDialog" @confirm="${this.handleSaveFile}"></pis-save-dialog>
        `;
    }
}
customElements.define('pis-app', App);
