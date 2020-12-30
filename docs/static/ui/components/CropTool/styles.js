export default`:host {
    display: flex;
    position: relative;
    /* animation: 290ms ease-in forwards padding-animation;    */

    --corner-size: 24px;
    --corner-color: white;
    --corner-width: 3px;
    --border-color: white;
    --grid-line-color: rgba(255, 255, 255, 0.7);
}

@keyframes padding-animation {
    from {
        padding: 0;
    }
    to {
        padding: 5%;
    }
}

#container {
    position: relative;
}

::slotted(*) {
    line-height: 0;
}

::slotted(canvas) {
    max-width: 100%;
}

::slotted(img) {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.4;
}

.grid {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: 1px solid white;
    cursor: move;
}

.corner {
    position: absolute;
    width: var(--corner-size);
    height: var(--corner-size);
    margin: calc(var(--corner-width) * -1);
}

.corner--tl {
    top: 0;
    left: 0;
    border-top: var(--corner-width) solid var(--corner-color);
    border-left: var(--corner-width) solid var(--corner-color);
    cursor: nw-resize;
}

.corner--tr {
    top: 0;
    right: 0;
    border-top: var(--corner-width) solid var(--corner-color);
    border-right: var(--corner-width) solid var(--corner-color);
    cursor: ne-resize;
}

.corner--bl {
    bottom: 0;
    left: 0;
    border-bottom: var(--corner-width) solid var(--corner-color);
    border-left: var(--corner-width) solid var(--corner-color);
    cursor: sw-resize;
}

.corner--br {
    bottom: 0;
    right: 0;
    border-bottom: var(--corner-width) solid var(--corner-color);
    border-right: var(--corner-width) solid var(--corner-color);
    cursor: se-resize;
}

.line {
    transition: opacity 195ms ease-in;
    opacity: 0;
    will-change: opacity;
}

.grid.active .line,
.grid:hover .line {
    opacity: 1;
}

.lines:not(.all) > .line:nth-child(1),
.lines:not(.all) > .line:nth-child(3),
.lines:not(.all) > .line:nth-child(5),
.lines:not(.all) > .line:nth-child(6),
.lines:not(.all) > .line:nth-child(8),
.lines:not(.all) > .line:nth-child(10) {
    opacity: 0;
}

.line {
    background: var(--grid-line-color);
    position: absolute;
}

.line--h {
    left: 0;
    height: 1px;
    width: 100%;
}

.line--v {
    top: 0;
    width: 1px;
    height: 100%;
}

.line--h:nth-child(1) {
    top: 16.667%;
}

.line--h:nth-child(2) {
    top: 33.334%;
}

.line--h:nth-child(3) {
    top: 50%;
}

.line--h:nth-child(4) {
    top: 66.667%;
}

.line--h:nth-child(5) {
    top: 83.334%;
}

.line--v:nth-child(6) {
    left: 16.667%;
}

.line--v:nth-child(7) {
    left: 33.334%;
}

.line--v:nth-child(8) {
    left: 50%;
}

.line--v:nth-child(9) {
    left: 66.667%;
}

.line--v:nth-child(10) {
    left: 83.335%;
}
`;
