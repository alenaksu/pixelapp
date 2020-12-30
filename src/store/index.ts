import { clone, createStore, Store } from '../utils/store';
import actions from './actions';
import mutations from './mutations';
import state from './state';

const consolePlugin = (store: Store) => store.on('@@update', console.log);

// TODO implement modules
export default createStore({
    state: clone(state),
    actions,
    mutations,

    // TODO deprecate automatic events
    events: {
        editParamsChanged: ['setEditParam', 'setEditParams', 'setCropParams', 'undo', 'redo'],
        updateui: ['saveSnapshot', 'redo', 'undo', 'setCropParams', 'setUIParams'],
    },
    // plugins: [consolePlugin],
});
