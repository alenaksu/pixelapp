import { createStore } from './utils/store';

const consolePlugin = (store) => store.on('@@update', console.log);

const initialState = {
    editParams: {
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
                radius: 3
            }
        },
        effects: {
            edgeDetection: {
                threshold: 0.3,
                radius: 1,
                blend: 0
            },
            dither: {
                threshold: 0,
                size: 1
            },
            pixelate: 1
        },
    }
}

export default createStore({
    initialState,
    actions: {
        setEditParam(store, { name, value }) {
            store.commit('setEditParam', { name, value });
        },
    },
    mutations: {
        setEditParam(state, { name, value }) {
            let params = state.editParams;
            const path = name.split('.');

            for (let i  = 0; i < path.length - 1; i++) {
                params = params[path[i]];
            }
            params[path[path.length - 1]] = value;
        }
    },
    events: {
        editParamsChanged: {
            reducer: state => state.editParams,
            compare: (prevState, state) => state.editParams !== prevState.editParams
        }
    },
    plugins: [
        consolePlugin
    ]
});