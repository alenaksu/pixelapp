import { LitElement, html, property, query } from 'lit-element';

class SaveDialog extends LitElement {
    @property({ type: Boolean })
    open: boolean = false;

    @query('#quality')
    private qualitySlider;

    close() {
        this.open = false;
    }

    handelCancelClick() {
        this.close();
    }

    handleSaveClick() {
        this.dispatchEvent(
            new CustomEvent('confirm', {
                detail: {
                    quality: this.qualitySlider.value,
                },
            }),
        );
        this.close();
    }

    render() {
        return html`
            <sp-dialog-wrapper
                id="saveDialog"
                headline="Save image..."
                confirm-label="Save"
                cancel-label="Cancel"
                underlay
                size="small"
                .open="${this.open}"
                @cancel="${this.handelCancelClick}"
                @confirm="${this.handleSaveClick}"
            >
                <sp-slider
                    id="quality"
                    label="Quality"
                    variant="filled"
                    max="100"
                    min="0"
                    value="80"
                ></sp-slider>
            </sp-dialog-wrapper>
        `;
    }
}
customElements.define('pis-save-dialog', SaveDialog);
