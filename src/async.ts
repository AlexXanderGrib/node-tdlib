type Resolve<T> = (value: T | PromiseLike<T>) => void;
type Reject = (reason: unknown) => void;
type Executor<T> = (resolve: Resolve<T>, reject: Reject) => void;

const noop = () => {
  /** nothing */
};

/**
 *
 *
 * @export
 * @class AsyncData
 * @extends {Promise<T>}
 * @template T
 */
export class AsyncData<T = any> extends Promise<T> {
  private _resolve: Resolve<T>;
  private _reject: Reject;

  /**
   * Creates an instance of AsyncData.
   * @param {function(): void} executor
   * @memberof AsyncData
   */
  constructor(executor: Executor<T>) {
    let _resolve: Resolve<T> = noop;
    let _reject: Reject = noop;

    super((resolve, reject) => {
      _resolve = resolve;
      _reject = reject;

      return executor(resolve, reject);
    });

    this._resolve = _resolve;
    this._reject = _reject;
  }

  /**
   *
   *
   * @param {(T | PromiseLike<T>)} value
   * @return {AsyncData}  {this}
   * @memberof AsyncData
   */
  resolve(value: T | PromiseLike<T>): this {
    this._resolve?.(value);
    return this;
  }

  /**
   *
   *
   * @param {unknown} reason
   * @return {AsyncData}  {this}
   * @memberof AsyncData
   */
  reject(reason: unknown): this {
    this._reject?.(reason);
    return this;
  }
}
