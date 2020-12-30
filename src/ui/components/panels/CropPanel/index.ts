import { LitElement, html, property, unsafeCSS } from 'lit-element';
import store from '../../../../store';
import styles from './styles.css';

class CropPanel extends LitElement {
    @property({ type: Object, attribute: false })
    params = {};

    static get styles() {
        return unsafeCSS(styles);
    }

    handleAngleChange(e) {
        store.cropSetAngle(e.target.value);
    }

    handleFlipChange(e) {
        store.cropSetFlip(Number(e.target.value));
    }

    handleScaleChange(e) {
        store.cropSetScale(Number(e.target.value));
    }

    render() {
        const state = store.state.editParams.crop;

        return html`
            <h3>Crop & Rotate</h3>
            <sp-rule size="medium"></sp-rule>

            <form class="panel-group">
                <div class="panel-group-control">
                    <label>Flip</label>
                    <sp-dropdown
                        label="Flip"
                        @change=${this.handleFlipChange}
                        .value="${String(state.flip)}"
                    >
                        <sp-menu>
                            <sp-menu-item value="0" selected> None </sp-menu-item>
                            <sp-menu-item value="1"> Horizontal </sp-menu-item>
                            <sp-menu-item value="2"> Vertical </sp-menu-item>
                            <sp-menu-item value="3"> Both </sp-menu-item>
                        </sp-menu>
                    </sp-dropdown>
                </div>
                <sp-slider
                    name="crop.angle"
                    min="${-45}"
                    max="${45}"
                    step="${0.1}"
                    .value="${state.angle}"
                    @mousedown="${() => store.cropSetAdjusting(true)}"
                    @mouseup="${() => store.cropSetAdjusting(false)}"
                    label="Angle"
                ></sp-slider>
                <sp-slider
                    name="crop.scale"
                    min="${1}"
                    max="${5}"
                    step="${0.1}"
                    .value="${state.scale}"
                    label="Scale"
                ></sp-slider>
            </form>
        `;
    }
}
customElements.define('pis-crop-panel', CropPanel);
