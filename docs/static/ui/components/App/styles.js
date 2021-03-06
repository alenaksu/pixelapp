export default`:host {
    width: 100vw;
    height: 100%;
    display: grid;
    grid-template-columns: auto 1fr 350px auto;
    grid-template-rows: auto 1fr;
    grid-template-areas: "menuBar menuBar menuBar menuBar" "leftSidebar main rightPanel rightSidebar";
}

#menuBar {
    grid-area: menuBar;
    background-color: var(--spectrum-global-color-gray-100);
    color: var(--spectrum-global-color-gray-800);
    padding: 10px;
}

.sidebar {
    padding: 5px 8px;
    background-color: var(--spectrum-global-color-gray-100);
    color: var(--spectrum-global-color-gray-800);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.sidebar sp-rule {
    margin: 5px 0;
}

.sidebar sp-action-menu {
    min-width: initial;
}

#main {
    grid-area: main;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

#rightPanel {
    grid-area: rightPanel;
    padding: 10px;
    background-color: var(--spectrum-global-color-gray-100);
    color: var(--spectrum-global-color-gray-800);
}

#rightSidebar {
    grid-area: rightSidebar;
    border-left: 2px solid var(--spectrum-global-color-gray-50);
}

#leftSidebar {
    grid-area: leftSidebar;
}

.scrollable {
    overflow-x: hidden;
    overflow-y: auto;
}

.panel-group {
    padding: 20px;
}

.preview {
    display: flex;
    justify-content: center;
}

.preview > img {
    max-width: 100%;
    height: 200px;
}

canvas {
    max-width: 100%;
    max-height: 100%;
}`;
