import { createEventEmitter, EventEmitter } from '../events';
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

export const clone = (obj: any) => JSON.parse(JSON.stringify(obj));

export class Store<S = any> implements StoreInterface {
    readonly mutations: Map<string, MutationHandler> = new Map();
    readonly actions: Map<string, ActionHandler> = new Map();
    readonly events: Map<string, Array<string>> = new Map();
    readonly emitter = createEventEmitter();
    private eventsPending = false;

    state: S = {} as S;

    constructor(config: StoreConfig<S> = {}) {
        objToMap(config.mutations, this.mutations);
        objToMap(config.actions, this.actions);
        objToMap(config.events, this.events);

        this.state = config.state;

        if (config.plugins) config.plugins!.forEach((plugin) => plugin(this));
    }

    triggerEvents(mutation) {
        if (this.eventsPending) return;

        this.eventsPending = true;
        // TODO maybe deprecate
        queueMicrotask(() => {
            this.emitter.emit(UPDATE_EVENT, mutation);
            this.events.forEach((events, names) => {
                if (~events.indexOf(mutation.type)) {
                    this.emitter.emit(names, mutation);
                }
            });
            this.eventsPending = false;
        });
    }

    on = this.emitter.on;
    off = this.emitter.off;
    emit = this.emitter.emit;

    dispatch = normalizeEvent((action: Action) => {
        const actions = this.actions;

        if (actions.has(action.type)) actions.get(action.type)!(this, action.data);
    });

    commit = normalizeEvent((mutation: Mutation) => {
        const prevState = this.state;
        const mutations = this.mutations;

        if (mutations.has(mutation.type)) {
            this.state = { ...prevState };
            mutations.get(mutation.type)!(this.state, mutation.data);
            this.triggerEvents(mutation);
        }
    });
}

export function createStore<S>(store: StoreConfig<S>): Store<S> & any {
    return new Proxy<Store & EventEmitter>(<any>new Store(store), {
        get(target, name, receiver) {
            if (target.actions.has(<string>name))
                return target.actions.get(<string>name).bind(null, target);

            return Reflect.get(target, name, receiver);
        },
    });
}
