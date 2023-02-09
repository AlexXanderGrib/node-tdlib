import { AsyncData, AsyncState } from "./shared/async";

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
  private readonly _onComplete: Set<Subscription<void>> = new Set();
  private _completed = false;
  /**
   *
   *
   * @param {T} value
   * @return {this}
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
   * @return {Unsubscribe}  {Unsubscribe}
   * @memberof EventBus
   */
  subscribe(handler: Subscription<T>): Unsubscribe {
    if (this._completed) {
      throw new Error("Completed");
    }

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
   */
  complete() {
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
      this._onComplete.add(() => subscriber.complete?.());

      return this.subscribe((value) => subscriber.next(value));
    };
  }

  /**
   *
   *
   * @memberof EventBus
   */
  async *[Symbol.asyncIterator]() {
    if (this._completed) return;

    const queue: AsyncData<T>[] = [new AsyncData()];
    this.subscribe((value) => {
      queue.push(new AsyncData());
      const available = queue.find((async) => async.state === AsyncState.PENDING);

      if (!available) return;

      available.resolve(value);
    });

    this._onComplete.add(() => {
      const error = new Error("Completed");

      for (const async of queue) {
        async.reject(error);
      }
    });

    while (!this._completed) {
      const async = queue.find((async) => async.state === AsyncState.PENDING);
      if (!async) break;

      try {
        const value = (await async) as T;
        const index = queue.indexOf(async);
        if (index !== -1) queue.splice(index, 1);

        yield value;
      } catch {
        return;
      }
    }
  }
}
