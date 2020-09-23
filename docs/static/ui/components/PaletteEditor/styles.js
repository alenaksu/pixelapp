export default`#addButton {
    height: var(--spectrum-actionbutton-height, var(--spectrum-alias-single-line-height));
    width: var(--spectrum-actionbutton-min-width, var(--spectrum-global-dimension-size-400));
}

.swatch {
    background-color: var(--spectrum-global-color-gray-50);;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 2px;
}

.swatch > * {
    width: 100%;
}`;
