type Resolve<T> = (value: T | PromiseLike<T>) => void;
type Reject = (reason: unknown) => void;

const noop = () => {
  /** nothing */
};

export type PromiseWithResolvers<T> = {
  promise: Promise<T>;
  resolve: Resolve<T>;
  reject: Reject;
};

/**
 *
 *
 * @export
 * @template T
 * @returns {PromiseWithResolvers<T>}  {PromiseWithResolvers<T>}
 */
export function promiseWithResolvers<T>(): PromiseWithResolvers<T> {
  let _resolve: Resolve<T> = noop;
  let _reject: Reject = noop;

  const promise = new Promise<T>((resolve, reject) => {
    _resolve = resolve;
    _reject = reject;
  });

  return { promise, reject: _reject, resolve: _resolve };
}
