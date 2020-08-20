import { html, LitElement, unsafeCSS, property, query } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map.js';
import styles from 'bundle-text:./styles.css';
import {
    MoveLeftRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from '@spectrum-web-components/icons-workflow';

export class ImageComparison extends LitElement {
    static get styles() {
        return unsafeCSS(styles);
    }

    @property({ type: Number })
    position: number = 0.5;

    @property({ type: Boolean })
    enable: boolean = false;

    handleDrag = (e: MouseEvent) => {
        this.position = Math.max(Math.min(e.offsetX / this.offsetWidth, 0.95), 0.05);
    };

    handleDragEnd = () => {
        this.removeEventListener('mousemove', this.handleDrag);
    };

    handleDragStart() {
        this.addEventListener('mousemove', this.handleDrag, { passive: true });
        document.documentElement.addEventListener('mouseup', this.handleDragEnd, { once: true });
    }

    render() {
        return html`
            <div class="image modified">
                <slot name="modified"></slot>
            </div>
            ${this.enable
                ? html`
                      <div
                          class="image original"
                          style=${styleMap({ width: `${100 - this.position * 100}%` })}
                      >
                          <slot name="original"></slot>
                      </div>
                      <div
                          class="separator"
                          style=${styleMap({ left: `${this.position * 100}%` })}
                          @mousedown="${this.handleDragStart}"
                      >
                          <div class="dragger">
                              <sp-icon>${ChevronLeftIcon()}</sp-icon>
                              <sp-icon>${ChevronRightIcon()}</sp-icon>
                          </div>
                      </div>
                  `
                : null}
        `;
    }
}
customElements.define('pis-image-comparison', ImageComparison);
