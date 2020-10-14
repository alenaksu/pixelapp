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
        const position = Math.min(1, Math.max(0, (e.clientX - this.offsetLeft) / this.offsetWidth)) * 100;
        this.style.setProperty(
            '--split-point',
            `${position}%`,
        );
    };

    handleDragEnd = () => {
        this.removeEventListener('pointermove', this.handleDrag);
    };

    handleDragStart(e: PointerEvent) {
        e.preventDefault();
        e.stopPropagation();

        this.addEventListener('pointermove', this.handleDrag);
        document.documentElement.addEventListener('pointerup', this.handleDragEnd, { once: true });
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
                      <div class="separator" @pointerdown="${this.handleDragStart}">
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
