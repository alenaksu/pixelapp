export default`:host {
    display: inline-block;
    position: relative;
    overflow: hidden;
}

.color {
    /* border-radius: var(--spectrum-alias-border-radius-regular); */
    height: var(--spectrum-actionbutton-height, var(--spectrum-alias-single-line-height));
    width: var(--spectrum-actionbutton-min-width, var(--spectrum-global-dimension-size-400));
    cursor: pointer;
}

.color:hover {
    opacity: 0.8;
}


input {
    visibility: hidden;
    position: absolute;
}`;
