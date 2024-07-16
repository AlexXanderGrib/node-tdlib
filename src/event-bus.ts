import { assert } from "./assert";

export type Subscription<T> = (value: T) => void;
export type Unsubscribe = () => void;
type Observer<T> = (subscriber: Subscriber<T>) => Unsubscribe;
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
  private readonly _onComplete: Set<Subscription<void>> = new Set();
  private _completed = false;
  /**
   *
   *
   * @param {T} value
   * @returns {this}
   * @memberof EventBus
   */
  emit(value: T): this {
    for (const subscription of this._subscriptions.keys()) {
      subscription(value);
    }

    return this;
  }

  /**
   *
   *
   * @param {Subscription<T>} handler
   * @returns {Unsubscribe}  {Unsubscribe}
   * @memberof EventBus
   */
  subscribe(handler: Subscription<T>): Unsubscribe {
    assert(!this._completed, "Completed");

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
   * @memberof EventBus
   * @returns {void}
   */
  complete(): void {
    if (this._completed) return;

    this._completed = true;

    for (const unsubscribe of this._subscriptions.values()) {
      unsubscribe();
    }

    for (const complete of this._onComplete) {
      complete();
      this._onComplete.delete(complete);
    }
  }

  /**
   *
   *
   * @returns {Observer<T>}
   * @example
   * import { Observable } from "rxjs";
   *
   * const bus = new EventBus<number>();
   * const observable = new Observable(bus.toRxObserver());
   * // Observable<number>
   */
  toRxObserver(): Observer<T> {
    return (subscriber) => {
      this._onComplete.add(() => subscriber.complete?.());

      return this.subscribe((value) => subscriber.next(value));
    };
  }
}
