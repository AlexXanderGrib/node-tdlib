export type Subscription<T> = (value: T) => void;
export type Unsubscribe = () => void;

export interface Observable<T> {
  subscribe(handler: Subscription<T>): Unsubscribe;
  toRxObserver(): (subscriber: Subscriber<T>) => Unsubscribe;
}

interface Subscriber<T> {
  next(value?: T): void;
  error?(error: any): void;
  complete?(): void;
}

/**
 *
 *
 * @export
 * @class EventBus
 * @implements {Observable<T>}
 * @template T
 */
export class EventBus<T> implements Observable<T> {
  private readonly _subscriptions: Map<Subscription<T>, Unsubscribe> = new Map();

  /**
   *
   *
   * @param {T} value
   * @memberof EventBus
   */
  emit(value: T): void {
    for (const subscription of this._subscriptions.keys()) {
      subscription(value);
    }
  }

  /**
   *
   *
   * @param {Subscription<T>} handler
   * @return {Unsubscribe}  {Unsubscribe}
   * @memberof EventBus
   */
  subscribe(handler: Subscription<T>): Unsubscribe {
    const cached = this._subscriptions.get(handler);
    if (cached) return cached;

    const unsubscribe = () => {
      this._subscriptions.delete(handler);
    };

    this._subscriptions.set(handler, unsubscribe);
    return unsubscribe;
  }

  /**
   *
   *
   * @return {function(subscriber: Subscriber<T>): Unsubscribe}
   * @example
   * import { Observable } from "rxjs";
   *
   * const bus = new EventBus<number>();
   * const observable = new Observable(bus.toRxObserver());
   * // Observable<number>
   */
  toRxObserver(): (subscriber: Subscriber<T>) => Unsubscribe {
    return (subscriber: Subscriber<T>): Unsubscribe => {
      return this.subscribe((value) => subscriber.next(value));
    };
  }
}
