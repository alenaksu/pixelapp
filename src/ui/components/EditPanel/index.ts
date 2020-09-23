import { LitElement, html, property, unsafeCSS } from 'lit-element';

const LightControls = [
    { name: 'light.exposure', min: -1, max: 1, defaultValue: 0, label: 'Exposure', step: 0.01 },
    { name: 'light.contrast', min: -1, max: 1, defaultValue: 0, label: 'Contrast', step: 0.01 },
    { name: 'light.highlights', min: -1, max: 1, defaultValue: 0, label: 'Highlights', step: 0.01 },
    { name: 'light.shadows', min: -1, max: 1, defaultValue: 0, label: 'Shadows', step: 0.01 },
    // { name: 'light.whites', min: -1, max: 1, defaultValue: 0, label: 'Whites', step: 0.01 },
    // { name: 'light.blacks', min: -1, max: 1, defaultValue: 0, label: 'Blacks', step: 0.01 },
];

const ColorControls = [
    { name: 'color.temperature', min: -1, max: 1, defaultValue: 0, label: 'Temp', step: 0.01 },
    { name: 'color.hue', min: -1, max: 1, defaultValue: 0, label: 'Tint', step: 0.01 },
    { name: 'color.vibrance', min: -1, max: 1, defaultValue: 0, label: 'Vibrance', step: 0.01 },
    { name: 'color.saturation', min: -1, max: 1, defaultValue: 0, label: 'Saturation', step: 0.01 }
];

const SharpenControls = [
    { name: 'detail.sharpen.amount', min: 0, max: 5, defaultValue: 0, label: 'Amount', step: 0.01 },
    { name: 'detail.sharpen.radius', min: 0.1, max: 10, defaultValue: 5, label: 'Radius', step: 0.01 }
];

const BlurControls = [
    { name: 'detail.blur.amount', min: 0, max: 5, defaultValue: 0, label: 'Amount', step: 0.01 },
    { name: 'detail.blur.pass', min: 0.1, max: 10, defaultValue: 5, label: 'Pass', step: 0.01 },
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

const Slider = ({ name, handleChange, min, max, step, value, variant = 'filled', label }) => html`
    <sp-slider
        @input=${handleChange}
        name="${name}"
        min="${min}"
        max="${max}"
        step="${step}"
        value="${value}"
        variant="${variant}"
        label="${label}"
    ></sp-slider>
`

class EditPanel extends LitElement {
    @property({ type: Object, attribute: false })
    params = {};

    render() {
        return html`
            <h3>Edit</h3>
            <sp-rule size="medium"></sp-rule>

            <form class="panel-group">
                <sp-accordion>
                    <sp-accordion-item .open=${true} label="Light">
                        ${LightControls.map(control => Slider({
                            ...control,
                            handleChange: null,
                            value: control.defaultValue
                        }))}
                    </sp-accordion-item>

                    <sp-accordion-item label="Color">
                        ${ColorControls.map(control => Slider({
                            ...control,
                            handleChange: null,
                            value: control.defaultValue
                        }))}
                    </sp-accordion-item>

                    <sp-accordion-item label="Detail">
                        <h4>Sharpen</h3>
                        ${SharpenControls.map(control => Slider({
                            ...control,
                            handleChange: null,
                            value: control.defaultValue
                        }))}
                    </sp-accordion-item>

                    <sp-accordion-item label="Effects">
                        <h4>Edge detection</h3>
                        ${EdgeDetectionControls.map(control => Slider({
                            ...control,
                            handleChange: null,
                            value: control.defaultValue
                        }))}

                        <p>
                            <sp-rule size="small"></sp-rule>
                        </p>

                        <h4>Dither</h4>
                        ${DitherControls.map(control => Slider({
                            ...control,
                            handleChange: null,
                            value: control.defaultValue
                        }))}

                        <p>
                            <sp-rule size="small"></sp-rule>
                        </p>
                        ${EffectsControls.map(control => Slider({
                            ...control,
                            handleChange: null,
                            value: control.defaultValue
                        }))}
                    </sp-accordion-item>
                </sp-accordion>
            </form>
        `;
    }
}
customElements.define('pis-edit-panel', EditPanel);