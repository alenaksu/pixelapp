import { EventEmitter, EventHandler } from '../events';
export interface StoreEvent {
    type: string;
    data: any;
}

export type Action = StoreEvent;
export type Mutation = StoreEvent;

export type SubcribeCallback = (state: any, mutation?: Mutation) => void;

export type StateEvent = {
    reducer: Function;
    compare: Function;
};

export interface StoreInterface {
    state: any;
    mutations: Map<string, MutationHandler>;
    actions: Map<string, ActionHandler>;
    events: Map<string, StateEvent>;
    emitter: EventEmitter;
    dispatch(action: string | Action, payload?: any);
    commit(mutation: string | Mutation, payload?: any);
    on(type: string, handler: EventHandler): void;
    off(type: string, handler: EventHandler): void;
}

export type MutationHandler = (state?: any, data?: any) => void;
export type ActionHandler = (store: StoreInterface, payload: any) => void;
export type PluginHandler = (store: StoreInterface) => void;

export type StoreConfig<S> = {
    actions?: { [name: string]: ActionHandler };
    mutations?: { [name: string]: MutationHandler };
    initialState?: S;
    plugins?: Array<PluginHandler>;
    events?: { [name: string]: StateEvent };
};
