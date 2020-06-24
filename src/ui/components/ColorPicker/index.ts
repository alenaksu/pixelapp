import { LitElement, html, unsafeCSS, property, query } from 'lit-element';
import styles from 'bundle-text:./styles.css';

// TODO sistemare
class ColorPicker extends LitElement {
    static get styles() {
        return unsafeCSS(styles);
    }

    @property({ type: String })
    color: string = '#000000';

    @query('input')
    private input: HTMLInputElement;

    handleColorChange = ({ currentTarget }) => {
        this.color = currentTarget.value;

        this.dispatchEvent(new Event('change'));
    };

    handleColorClick() {
        this.input.click();
    }

    render() {
        const { color } = this;

        return html`
            <div
                @click="${this.handleColorClick}"
                style="background-color: ${color}"
                class="color"
                slot="trigger"
            ></div>
            <input @input="${this.handleColorChange}" type="color" value="${color}" />
        `;
    }
}
customElements.define('pis-color-picker', ColorPicker);
