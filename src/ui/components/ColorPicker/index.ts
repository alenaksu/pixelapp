import { LitElement, html, unsafeCSS, property, css, queryAll } from 'lit-element';
import styles from 'bundle-text:./styles.css';
import { hexToRgb } from '../../../utils';
import { Slider } from '@spectrum-web-components/slider';

class ColorPicker extends LitElement {
    static get styles() {
        return unsafeCSS(styles);
    }

    @property({ type: String })
    color: string = '#000000';

    handleColorChange = ({ currentTarget }) => {
        this.color =
            '#' +
            [...currentTarget.querySelectorAll('sp-slider')]
                .map((slider) => Number(slider.value).toString(16).padStart(2, '0'))
                .join('');
    };

    render() {
        const { color } = this;
        const colorParts = hexToRgb(color, false);

        return html`
            <overlay-trigger id="trigger" placement="left" offset="6">
                <div style="background-color: ${color}" class="color" slot="trigger"></div>
                <sp-popover dialog slot="click-content" direction="left" tip open>
                    <form class="options-popover-content" @input=${this.handleColorChange}>
                        <sp-slider
                            class="channel-red"
                            value="${colorParts[0]}"
                            step="1"
                            min="0"
                            max="255"
                            label="Red"
                            variant="color"
                        ></sp-slider>
                        <sp-slider
                            class="channel-green"
                            value="${colorParts[1]}"
                            step="1"
                            min="0"
                            max="255"
                            label="Green"
                            variant="color"
                        ></sp-slider>
                        <sp-slider
                            class="channel-blue"
                            value="${colorParts[2]}"
                            step="1"
                            min="0"
                            max="255"
                            label="Blue"
                            variant="color"
                        ></sp-slider>
                    </form>
                </sp-popover>
                <sp-tooltip slot="hover-content" delayed open>
                    Edit color
                </sp-tooltip>
            </overlay-trigger>
        `;
    }
}
customElements.define('pis-color-picker', ColorPicker);
