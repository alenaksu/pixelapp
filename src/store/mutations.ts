import { degToRad } from "../utils";
import { clamp } from "../utils";
import { clone } from "../utils/store";

export default {
    setUIParams(state, params) {
        state.ui = params;
    },
    setEditParams(state, params) {
        state.editParams = params;
    },
    setEditParam(state, { name, value }) {
        let params = clone(state.editParams);
        state.editParams = params;

        const path = name.split('.');

        for (let i = 0; i < path.length - 1; i++) {
            params = params[path[i]];
        }
        params[path[path.length - 1]] = value;
    },
    historyState(state) {
        state.history.canUndo = state.history.cursor < state.history.stack.length - 1;
        state.history.canRedo = state.history.cursor > 0;
    },
    undo(state) {
        state.history.cursor++;
        state.editParams = clone(state.history.stack[state.history.cursor]);
    },
    redo(state) {
        state.history.cursor--;
        state.editParams = clone(state.history.stack[state.history.cursor]);
    },
    saveSnapshot(state, editParams) {
        state.history.stack.splice(0, state.history.cursor);
        state.history.cursor = 0;
        state.history.stack.unshift(editParams);
    },
    setImageData(state, image: ImageData) {
        state.image = {
            width: image.width,
            height: image.height,
        };
    },
    setCropParams(state, params) {
        params = {
            ...state.editParams.crop,
            ...params,
        };

        const { width, height } = state.image;
        const rotate = degToRad(params.angle + params.rotate);

        const theta = Math.abs(rotate);
        const fitWidth = (Math.cos(theta) * width + Math.sin(theta) * height) / width;
        const fitHeight = (Math.sin(theta) * width + Math.cos(theta) * height) / height;
        const scale = Math.max(params.scale, fitWidth, fitHeight);

        const maxX = (scale - fitWidth) / 2;
        const maxY = (scale - fitHeight) / 2;

        const [x, y] = params.translate;
        const translate = [clamp(x, -maxX, maxX), clamp(y, -maxY, maxY)];

        state.editParams.crop = {
            ...params,
            scale,
            translate,
        };
    },
};
