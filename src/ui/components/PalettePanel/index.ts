import { LitElement, html, property, unsafeCSS, query } from 'lit-element';
import '../PaletteEditor';
import styles from './styles.css';

class PalettePanel extends LitElement {
    @query('pis-palette-editor')
    public editor;

    static get styles() {
        return unsafeCSS(styles);
    }

    handleImportClick() {
        this.editor.importPalette();
    }

    handleCreateClick() {
        this.editor.createPalette();
    }

    handleResetClick() {
        this.editor.resetPalette();
    }

    render() {
        return html`
            <div class="header">
                <h3>Palette</h3>
                <sp-quick-actions opened text-only>
                    <sp-action-button quiet @click="${this.handleImportClick}">
                        import
                    </sp-action-button>
                    <sp-action-button quiet @click="${this.handleCreateClick}">
                        Create
                    </sp-action-button>
                    <sp-action-button quiet @click="${this.handleResetClick}">
                        Reset
                    </sp-action-button>
                </sp-quick-actions>
            </div>
            <sp-rule size="medium"></sp-rule>
            <pis-palette-editor class="panel-group"></pis-palette-editor>
        `;
    }
}
customElements.define('pis-palette-panel', PalettePanel);