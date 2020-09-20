import { html, LitElement, unsafeCSS, property } from 'lit-element';
import styles from './styles.css';
import {
    ChevronLeftIcon,
    ChevronRightIcon,
} from '@spectrum-web-components/icons-workflow';

export class ImageComparison extends LitElement {
    static get styles() {
        return unsafeCSS(styles);
    }

    @property({ type: Boolean })
    enable: boolean = false;

    handleDrag = (e: MouseEvent) => {
        const position = Math.max(Math.min(e.offsetX / this.offsetWidth, 0.95), 0.05) * 100;
        this.style.setProperty(
            '--split-point',
            `${position}%`,
        );
    };

    handleDragEnd = () => {
        this.removeEventListener('mousemove', this.handleDrag);
    };

    handleDragStart(e) {
        e.preventDefault();
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
                      <div class="image original">
                          <slot name="original"></slot>
                      </div>
                      <div class="separator" @mousedown="${this.handleDragStart}">
                          <div class="thumb">
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
