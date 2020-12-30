import { degToRad, rotatePoint, throttle } from '../utils';
import { clone } from '../utils/store';
import initialState from './state';

export default {
    setImageData(store, image: ImageData) {
        store.commit('setImageData', image);
    },
    saveSnapshot: throttle((store) => {
        store.commit('saveSnapshot', clone(store.state.editParams));
        store.commit('historyState');
    }),
    setEditParam(store, { name, value }) {
        store.commit('setEditParam', { name, value });
        store.commit('setCropParams');
    },
    resetEditParams(store) {
        const params = clone(initialState.editParams);

        store.commit('setEditParams', params);
        store.commit('saveSnapshot', clone(params));
        store.commit('historyState');
        store.emit('updateui');
    },
    undo(store) {
        const history = store.state.history;

        if (history.canUndo) {
            store.commit('undo');
            store.commit('historyState');
        }
    },
    redo(store) {
        const history = store.state.history;

        if (history.canRedo) {
            store.commit('redo');
            store.commit('historyState');
        }
    },
    cropSetAdjusting(store, adjusting) {
        store.commit('setUIParams', {
            ...store.state.ui,
            cropAdjusting: adjusting,
        });
    },
    cropTranslateBy(store, { x, y }) {
        const crop = store.state.editParams.crop;

        [x, y] = rotatePoint(degToRad(-(crop.angle + crop.rotate)), [x, y]);

        const newX = crop.translate[0] + x;
        const newY = crop.translate[1] + y;

        store.commit('setCropParams', {
            translate: [newX, newY],
        });
    },
    cropScaleBy(store, scale) {
        const oldScale = store.state.editParams.crop.scale;
        const [x, y] = store.state.editParams.crop.translate;
        const newScale = scale * oldScale + oldScale;

        const newX = (x / oldScale) * newScale;
        const newY = (y / oldScale) * newScale;

        store.commit('setCropParams', {
            scale: newScale,
            translate: [newX, newY],
        });
    },
    cropSetAngle(store, deg) {
        store.commit('setCropParams', {
            angle: deg,
        });
    },
    cropSetScale(store, scale) {
        store.commit('setCropParams', {
            scale,
        });
    },
    cropSetFlip(store, flip) {
        store.commit('setCropParams', {
            flip,
        });
    },
};
