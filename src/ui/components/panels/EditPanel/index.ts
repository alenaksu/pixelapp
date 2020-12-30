import { LitElement, html, property, unsafeCSS } from 'lit-element';
import { getFromPath } from '../../../../utils';
import styles from './styles.css';

const LightControls = [
    { name: 'light.exposure', min: -3, max: 3, defaultValue: 0, label: 'Exposure', step: 0.01 },
    { name: 'light.brightness', min: -1, max: 1, defaultValue: 0, label: 'Brightness', step: 0.01 },
    { name: 'light.contrast', min: -1, max: 1, defaultValue: 0, label: 'Contrast', step: 0.01 },
    { name: 'light.highlights', min: -1, max: 1, defaultValue: 0, label: 'Highlights', step: 0.01 },
    { name: 'light.shadows', min: -1, max: 1, defaultValue: 0, label: 'Shadows', step: 0.01 },
    // { name: 'light.whites', min: -1, max: 1, defaultValue: 0, label: 'Whites', step: 0.01 },
    // { name: 'light.blacks', min: -1, max: 1, defaultValue: 0, label: 'Blacks', step: 0.01 },
];

const ColorControls = [
    { name: 'color.temp', min: -1, max: 1, defaultValue: 0, label: 'Temp', step: 0.01, variant: '' },
    { name: 'color.tint', min: -1, max: 1, defaultValue: 0, label: 'Tint', step: 0.01, variant: '' },
    { name: 'color.hue', min: -1, max: 1, defaultValue: 0, label: 'Hue', step: 0.01, variant: '' },
    { name: 'color.vibrance', min: -1, max: 1, defaultValue: 0, label: 'Vibrance', step: 0.01 },
    { name: 'color.saturation', min: -1, max: 1, defaultValue: 0, label: 'Saturation', step: 0.01 }
];

const SharpenControls = [
    { name: 'detail.sharpen.amount', min: 0, max: 5, defaultValue: 0, label: 'Amount', step: 0.01 },
    { name: 'detail.sharpen.radius', min: 1, max: 10, defaultValue: 5, label: 'Radius', step: 1 }
];

const BlurControls = [
    { name: 'detail.blur.radius', min: 0, max: 5, defaultValue: 0, label: 'Radius', step: 1 },
    { name: 'detail.blur.pass', min: 0, max: 10, defaultValue: 1, label: 'Pass', step: 1 },
];

const EdgeDetectionControls = [
    { name: 'effects.edgeDetection.threshold', min: 0, max: 1, defaultValue: 0.3, label: 'Threshold', step: 0.001 },
    { name: 'effects.edgeDetection.radius', min: 1, max: 15, defaultValue: 1, label: 'Radius', step: 1 },
    { name: 'effects.edgeDetection.blend', min: -1, max: 1, defaultValue: 0, label: 'Blend', step: 0.01 },
];

const EffectsControls = [
    { name: 'effects.pixelate', min: 1, max: 15, defaultValue: 1, label: 'Pixelate', step: 1, variant: 'ramp' },
];


const DitherControls = [
    { name: 'effects.dither.threshold', min: 0, max: 1, step: 0.01, defaultValue: 0, label: 'Threshold' },
    {
        name: 'effects.dither.size',
        min: 1,
        max: 15,
        step: 1,
        defaultValue: 1,
        label: 'Size',
        variant: 'ramp',
    },
];

const Slider = ({ name, handleChange, min, max, step, value, variant = '', label }) => html`
    <sp-slider
        @input=${handleChange}
        name="${name}"
        min="${min}"
        max="${max}"
        step="${step}"
        .value="${value}"
        variant="${variant}"
        label="${label}"
    ></sp-slider>
`

class EditPanel extends LitElement {
    @property({ type: Object, attribute: false })
    params = {};

    static get styles() {
        return unsafeCSS(styles);
    }

    render() {
        const params = this.params;

        return html`
            <h3>Edit</h3>
            <sp-rule size="medium"></sp-rule>

            <form class="panel-group">
                <sp-accordion>
                    <sp-accordion-item .open=${true} label="Light">
                        ${LightControls.map(control => Slider({
                            ...control,
                            handleChange: null,
                            value: getFromPath(params, control.name, control.defaultValue)
                        }))}
                    </sp-accordion-item>

                    <sp-accordion-item label="Color">
                        ${ColorControls.map(control => Slider({
                            ...control,
                            handleChange: null,
                            value: getFromPath(params, control.name, control.defaultValue)
                        }))}
                    </sp-accordion-item>

                    <sp-accordion-item label="Detail">
                        <h4>Blur</h3>
                        ${BlurControls.map(control => Slider({
                            ...control,
                            handleChange: null,
                            value: getFromPath(params, control.name, control.defaultValue)
                        }))}

                        <h4>Sharpen</h3>
                        ${SharpenControls.map(control => Slider({
                            ...control,
                            handleChange: null,
                            value: getFromPath(params, control.name, control.defaultValue)
                        }))}
                    </sp-accordion-item>

                    <sp-accordion-item label="Effects">
                        <h4>Edge detection</h3>
                        ${EdgeDetectionControls.map(control => Slider({
                            ...control,
                            handleChange: null,
                            value: getFromPath(params, control.name, control.defaultValue)
                        }))}

                        <p>
                            <sp-rule size="small"></sp-rule>
                        </p>

                        <h4>Dither</h4>
                        ${DitherControls.map(control => Slider({
                            ...control,
                            handleChange: null,
                            value: getFromPath(params, control.name, control.defaultValue)
                        }))}

                        <p>
                            <sp-rule size="small"></sp-rule>
                        </p>
                        ${EffectsControls.map(control => Slider({
                            ...control,
                            handleChange: null,
                            value: getFromPath(params, control.name, control.defaultValue)
                        }))}
                    </sp-accordion-item>
                </sp-accordion>
            </form>
        `;
    }
}
customElements.define('pis-edit-panel', EditPanel);
