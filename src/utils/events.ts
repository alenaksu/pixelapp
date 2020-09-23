export type EventHandler<T = any> = (event: T) => void;

export interface EventEmitter {
    on(type: string, handler: EventHandler): void;
    off(type: string, handler: EventHandler): void;
    emit(type: string, event: any): void;
}

export function createEventEmitter<T>(
    events: Map<string, EventHandler<T>[]> = new Map()
) {
    return {
        on(name: string, handler: EventHandler<T>) {
            if (!events.has(name)) events.set(name, []);
            events.get(name).push(handler);
        },

        off(name: string, handler: EventHandler<T>) {
            if (events.has(name)) {
                const handlers = events.get(name);
                handlers.splice(handlers.indexOf(handler), 1);
            }
        },

        emit(name: string, event: T) {
            if (events.has(name)) {
                events.get(name).forEach((handler) => handler(event));
            }
        },
    };
}
