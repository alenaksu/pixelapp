import { LitElement, html, property, unsafeCSS, query } from 'lit-element';

import styles from './styles.css';
import store from '../../../store';
import { absMax, classNames } from '../../../utils';

class CropTool extends LitElement {
    static get styles() {
        return unsafeCSS(styles);
    }

    @query('img')
    image: HTMLImageElement;

    constructor() {
        super();

        this.renderRoot.addEventListener('mousedown', (e: MouseEvent) => {
            e.preventDefault();

            const target = <HTMLElement>e.target;
            const isScale = target.matches('.corner');

            const onDrag = (e: MouseEvent) => {
                if (!e.movementX && !e.movementY) return;

                const x = e.movementX / this.clientWidth;
                const y = e.movementY / this.clientHeight;

                if (!isScale) store.cropTranslateBy({ x, y });

                if (isScale) {
                    const corner = target.dataset.corner;
                    const signX = (['2', '3'].indexOf(corner) !== -1 ? -1 : 1)
                    const signY = (['3', '4'].indexOf(corner) !== -1 ? -1 : 1)
                    const scale = absMax(
                        x * signX,
                        y * signY,
                    );

                    const t = -scale / 2;
                    store.cropScaleBy(scale);
                    store.cropTranslateBy({
                        x: t * signX,
                        y: t * signY,
                    });
                }
            };

            document.addEventListener('mousemove', onDrag);

            document.addEventListener(
                'mouseup',
                () => {
                    document.removeEventListener('mousemove', onDrag);
                },
                { once: true },
            );
        });

        // TODO refactor after store
        store.on('updateui', ()=>{
            this.requestUpdate();
        });
    }

    render() {
        return html`
            <div id="container">
                <div>
                    <slot name="original"></slot>
                    <slot name="modified"></slot>
                </div>
                <div class="${classNames('grid', store.state.ui.cropAdjusting && 'active')}">
                    <div data-corner="1" class="corner corner--tl"></div>
                    <div data-corner="2" class="corner corner--tr"></div>
                    <div data-corner="3" class="corner corner--br"></div>
                    <div data-corner="4" class="corner corner--bl"></div>

                    <div class="${classNames('lines', store.state.ui.cropAdjusting && 'all')}">
                        <div class="line line--h"></div>
                        <div class="line line--h"></div>
                        <div class="line line--h"></div>
                        <div class="line line--h"></div>
                        <div class="line line--h"></div>
                        <div class="line line--v"></div>
                        <div class="line line--v"></div>
                        <div class="line line--v"></div>
                        <div class="line line--v"></div>
                        <div class="line line--v"></div>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('pis-crop-tool', CropTool);
