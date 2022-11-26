import type { TDLib, TDLibClient } from "./shared/client";
import type { error, Update, __functions } from "./generated/types";
import * as JSON from "./json";
import { AsyncData } from "./async";
import { EventBus, Observable } from "./event-bus";

type OmitType<T extends { _: string }> = Omit<T, "_">;

/**
 *
 *
 * @export
 * @class TDError
 * @extends {Error}
 * @implements {error}
 */
export class TDError extends Error implements error {
  readonly _ = "error";
  readonly code: number;
  readonly method: string;
  readonly parameters: unknown;

  /**
   * Creates an instance of TDError.
   * @param {string} message
   * @param {*} [options={}]
   * @memberof TDError
   */
  constructor(
    message: string,
    { code = 0, method = "[Placeholder]", parameters = {} as unknown } = {}
  ) {
    super(message);
    this.code = code;
    this.method = method;
    this.parameters = parameters;
  }
}

/**
 *
 *
 * @export
 * @class Client
 */
export class Client {
  private readonly _client: TDLibClient;
  private readonly _requests: Map<number, AsyncData> = new Map();
  private readonly _updates: EventBus<Update> = new EventBus();
  private _stopped = false;

  /**
   * Creates an instance of Client.
   * @param {TDLib} _adapter
   * @memberof Client
   */
  constructor(private readonly _adapter: TDLib) {
    this._client = _adapter.create();
  }

  /**
   *
   *
   * @template {keyof __functions} T
   * @param {T} method
   * @param {object} parameters
   * @return {object}  {Promise<ReturnType<__functions[T]>>}
   * @throws {TDError} - {@link TDError}
   * @memberof Client
   */
  async invoke<T extends keyof __functions>(
    method: T,
    parameters: OmitType<Parameters<__functions[T]>[0]>
  ): Promise<ReturnType<__functions[T]>> {
    const extra = Math.random();
    Object.assign(parameters, { _: method, "@extra": extra });
    this._adapter.send(this._client, JSON.serialize(parameters));

    const result = new AsyncData<ReturnType<__functions[T]>>(() => {
      /** empty */
    });

    this._requests.set(extra, result);
    return result.catch((error: error) => {
      throw new TDError(error.message, { code: error.code, method, parameters });
    });
  }

  /**
   *
   *
   * @private
   * @memberof Client
   */
  private async _thread() {
    while (!this._stopped) {
      const value = await this._adapter.receive(this._client, 3000);
      if (!value) {
        continue;
      }

      let data: any;
      try {
        data = JSON.deserialize(value);
      } catch {
        continue;
      }

      if (typeof data !== "object" || !data) {
        continue;
      }

      const extra = data?.["@extra"];

      if (extra) {
        const async = this._requests.get(extra);
        delete data["@extra"];

        if (data._ === "error") {
          async?.reject(data);
        } else {
          async?.resolve(data);
        }

        this._requests.delete(extra);

        continue;
      }

      if (data._.startsWith("update")) {
        this._updates.emit(data);
      }
    }
  }

  /**
   *
   *
   * @readonly
   * @type {Observable<Update>}
   * @memberof Client
   */
  get updates(): Observable<Update> {
    return this._updates;
  }

  /**
   *
   *
   * @memberof Client
   */
  start() {
    this._thread();
  }

  /**
   *
   *
   * @return {void}
   * @memberof Client
   */
  stop(): void {
    if (this._stopped) return;

    this._stopped = true;
    this._adapter.destroy(this._client);
  }
}
