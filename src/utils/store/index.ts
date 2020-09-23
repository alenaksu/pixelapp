import { createEventEmitter } from '../events';
import {
    Action,
    StoreConfig,
    StoreInterface,
    Mutation,
    MutationHandler,
    StoreEvent,
    ActionHandler,
    StateEvent,
} from './types';

export type EventsMap = Map<string, StateEvent>;

export const UPDATE_EVENT = '@@update';

export function normalizeEvent(fn) {
    return (event: string | StoreEvent, data?: any) => {
        if (typeof event === 'string') event = { type: event, data };

        return fn(event);
    };
}

const objToMap = (obj: any, map: Map<any, any>) => {
    for (const key in obj) map.set(key, obj[key]);
};

export class Store<S = any> implements StoreInterface {
    readonly mutations: Map<string, MutationHandler> = new Map();
    readonly actions: Map<string, ActionHandler> = new Map();
    readonly events: Map<string, StateEvent> = new Map();
    readonly emitter = createEventEmitter();
    private updatePending = false;

    state: S = {} as S;

    constructor(config: StoreConfig<S> = {}) {
        objToMap(config.mutations, this.mutations);
        objToMap(config.actions, this.actions);
        objToMap(config.events, this.events);

        this.state = Object.freeze({ ...config.initialState });

        if (config.plugins) config.plugins!.forEach((plugin) => plugin(this));
    }

    requestUpdate(state, prevState) {
        if (this.updatePending) return;

        this.updatePending = true;
        queueMicrotask(() => {
            this.emitter.emit(UPDATE_EVENT, { state, prevState });
            this.events.forEach((event, name) => {
                const prevValue = event.reducer(prevState);
                const value = event.reducer(state);
        
                if (!event.compare(prevValue, value))
                    this.emitter.emit(name, { value, prevValue });
            });
            this.updatePending = false;
        });
    }

    on = this.emitter.on;
    off = this.emitter.off;

    dispatch = normalizeEvent((action: Action) => {
        const actions = this.actions;
        const prevState = this.state;

        this.state = { ...prevState };

        if (actions.has(action.type))
            actions.get(action.type)!(this, action.data);
    });

    commit = normalizeEvent((mutation: Mutation) => {
        const prevState = this.state;
        const mutations = this.mutations;

        this.state = { ...prevState };
        if (mutations.has(mutation.type)) {
            mutations.get(mutation.type)!(this.state, mutation.data);
        }

        this.requestUpdate(this.state, prevState);
    });
}

export function createStore<S>(store: StoreConfig<S>): Store<S> & any {
    return new Proxy(new Store(store), {
        get(target, name, receiver) {
            if (target.actions.has(<string>name)) 
                return target.actions.get(<string>name).bind(null, target);

            return Reflect.get(target, name, receiver);
        }
    })
}
