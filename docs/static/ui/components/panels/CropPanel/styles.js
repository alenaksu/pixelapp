export default`.panel-group {
    padding: var(
        --spectrum-accordion-item-content-padding,
        var(--spectrum-global-dimension-size-200)
    );
}

.panel-group-control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.panel-group-control > * {
    flex: 1;
}

.panel-group-control:not(:last-child) {
    padding-bottom: var(--spectrum-global-dimension-size-300);
}

.panel-group-control label {
    padding-top: var(--spectrum-fieldlabel-padding-top, var(--spectrum-global-dimension-size-50));
    font-size: var(--spectrum-label-text-size, var(--spectrum-global-dimension-font-size-75));
    line-height: var(
        --spectrum-label-text-line-height,
        var(--spectrum-global-font-line-height-small)
    );
    color: var(--spectrum-label-text-color, var(--spectrum-alias-label-text-color));
}
`;
