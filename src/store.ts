import { throttle } from './utils';
import { clone, createStore, Store } from './utils/store';

const consolePlugin = (store: Store) => store.on('@@update', console.log);

const editParams = {
    light: {
        exposure: 0,
        contrast: 0,
        highlights: 0,
        shadows: 0,
        whites: 0,
        blacks: 0,
    },
    color: {
        temp: 0,
        tint: 0,
        vibrance: 0,
        saturation: 0,
    },
    detail: {
        sharpen: {
            amount: 0,
            radius: 3,
        },
        blur: {
            radius: 0,
            pass: 1,
        },
    },
    effects: {
        edgeDetection: {
            threshold: 0.3,
            radius: 1,
            blend: 0,
        },
        dither: {
            threshold: 0,
            size: 1,
        },
        pixelate: 1,
    },
};
export const initialState = {
    history: {
        stack: [clone(editParams)],
        cursor: 0,
        canUndo: false,
        canRedo: false,
        maxEntries: 20,
    },
    editParams,
};

export default createStore({
    initialState,
    actions: {
        saveSnapshot: throttle((store) => {
            store.commit('saveSnapshot', clone(store.state.editParams));
            store.commit('historyState');
        }),
        setEditParam(store, { name, value }) {
            store.commit('setEditParam', { name, value });
        },
        resetEditParams(store) {
            store.commit('setEditParams', clone(initialState.editParams));
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
    },
    mutations: {
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
    },
    events: {
        editParamsChanged: ['setEditParam', 'setEditParams', 'undo', 'redo'],
        updateui: ['saveSnapshot', 'redo', 'undo']
    },
    plugins: [consolePlugin],
});
