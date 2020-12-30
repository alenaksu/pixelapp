export default`:host {
    display: block;
    position: relative;
    --thumb-size: 50px;
    --separator-size: 4px;
    contain: content;
}

.image {
    line-height: 0;
    /* contain: strict; */
}

.image.original {
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    clip-path: inset(0 0 0 var(--split-point, 50%));
}

.image.original ::slotted(*) {
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
}

.separator {
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    padding: 0 15px;
    cursor: move;
    left: var(--split-point, 50%);
    transform-box: inherit;
    transform: translateX(-50%);
    align-items: center;
    justify-content: center;
}

.separator::after {
    content: ' ';
    background-color: var(--spectrum-global-color-gray-75);
    width: var(--separator-size);
    height: 100%;
}

.thumb {
    line-height: 0;
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    padding: 5px;
    border-radius: 50%;
    width: var(--thumb-size);
    height: var(--thumb-size);
    display: flex;
    align-items: center;
    justify-content: space-between;
}`;
