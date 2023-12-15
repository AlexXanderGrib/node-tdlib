import type { TDLib, TDLibClient } from "./shared/client";
import { error, Update, $AsyncApi, $SyncApi, $MethodsDict } from "./generated/types";
import * as JSON from "./json";
import { AsyncData } from "./shared/async";
import { EventBus, Observable } from "./event-bus";
import debug from "debug";
import { TDLibOptions } from "./options";

const debugJson = debug("tdlib-native:json");

type OmitType<T extends { _: string }> = Omit<T, "_">;

const enum ClientState {
  RUNNING = "RUNNING",
  STOPPED = "STOPPED",
  PAUSED = "PAUSED"
}

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

  override name = "TDError";

  /**
   * Creates an instance of TDError.
   * @param {string} message
   * @param {*} [options={}]
   * @memberof TDError
   */
  constructor(
    message: string,
    { code = Number.NaN, method = "unknown method", parameters = {} as unknown } = {}
  ) {
    super(message);
    this.code = code;
    this.method = method;
    this.parameters = parameters;
  }

  /**
   *
   *
   * @return {object}
   * @memberof TDError
   */
  toJSON() {
    return {
      _: this._,
      name: this.name,
      message: this.message,
      code: this.code,
      method: this.method,
      parameters: this.parameters
    };
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
  private readonly _requests: Map<number, AsyncData<any>> = new Map();
  private readonly _updates: EventBus<Update> = new EventBus();
  private readonly _adapter: TDLib;
  private _state = ClientState.PAUSED;

  /**
   * Creates an instance of Client.
   * @param {TDLib} adapter
   * @memberof Client
   */
  constructor(adapter: TDLib) {
    this._adapter = adapter;
    this._client = adapter.create();
    Object.seal(this);
  }

  readonly api = new $AsyncApi(this);
  readonly syncApi = new $SyncApi(this);

  /**
   *
   *
   * @template {keyof $AsyncApi} T
   * @param {T} method
   * @param {object} parameters
   * @return {object}  {Promise<ReturnType<$AsyncApi[T]>>}
   * @throws {TDError} - {@link TDError}
   * @memberof Client
   */
  async invoke<T extends keyof $AsyncApi>(
    method: T,
    parameters: Parameters<$AsyncApi[T]>[0]
  ): Promise<ReturnType<$MethodsDict[T]>> {
    const extra = Math.random();
    const data = new AsyncData();

    assignTemporary(parameters, { _: method, "@extra": extra }, (merged) => {
      const value = JSON.serialize(merged);
      debugJson("Sent %s", value);
      this._adapter.send(this._client, value);
    });

    this._requests.set(extra, data);

    try {
      return await data;
    } catch (error) {
      if (typeof error === "object" && error && "_" in error) {
        const value = error as error;
        throw new TDError(value.message, { code: value.code, method, parameters });
      }

      throw error;
    }
  }

  /**
   *
   *
   * @template {keyof $SyncApi} T
   * @param {TDLib|Client} executor
   * @param {T} method
   * @param {object} parameters
   * @return {object}  {Promise<ReturnType<$SyncMethodsDict[T]>>}
   * @throws {TDError} - {@link TDError}
   * @memberof Client
   */
  static execute<T extends keyof $SyncApi>(
    executor: TDLib | Client,
    method: T,
    parameters: Parameters<$SyncApi[T]>[0]
  ): ReturnType<$SyncApi[T]> {
    let adapter: TDLib;
    let client: TDLibClient | undefined;

    if (executor instanceof Client) {
      adapter = executor._adapter;
      client = executor._client;
    } else if (executor._isTDLib) {
      adapter = executor;
    } else {
      throw new TDError("Invalid executor passed", {
        code: -100,
        method,
        parameters
      });
    }

    const extra = Math.random();

    const value = assignTemporary(
      parameters,
      { _: method, "@extra": extra },
      (merged) => {
        const value = JSON.serialize(merged);
        debugJson("Sent sync %s", value);

        // eslint-disable-next-line unicorn/no-null
        return adapter.execute(client ?? null, value);
      }
    );

    debugJson("Received sync %s", value);

    if (!value) {
      throw new TDError("Method returned null", { method, parameters });
    }

    let data: unknown;

    try {
      data = JSON.deserialize(value);

      if (typeof data !== "object" || !data || !("_" in data)) {
        throw new TDError("Returned not an object", { method, parameters });
      }
    } catch {
      throw new TDError("Method returned invalid json", { method, parameters });
    }

    if (data._ === "error") {
      const error = data as error;
      throw new TDError(error.message, { code: error.code, method, parameters });
    }

    if ("@extra" in data && data["@extra"]) {
      delete data["@extra"];
    }

    return data as ReturnType<$SyncApi[T]>;
  }

  /**
   *
   *
   * @template {keyof $SyncApi} T
   * @param {T} method
   * @param {object} parameters
   * @return {object}  {Promise<ReturnType<$SyncApi[T]>>}
   * @throws {TDError} - {@link TDError}
   * @memberof Client
   */
  execute<T extends keyof $SyncApi>(
    method: T,
    parameters: OmitType<Parameters<$MethodsDict[T]>[0]>
  ): ReturnType<$SyncApi[T]> {
    return Client.execute(this, method, parameters);
  }

  /**
   *
   *
   * @private
   * @memberof Client
   */
  private async _thread() {
    while (this._state === ClientState.RUNNING) {
      const value = await this._adapter.receive(this._client, 3000);
      debugJson("Received %s", value);

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
   * @see https://core.telegram.org/tdlib/options
   * @readonly
   * @memberof Client
   */
  get tdlibOptions(): TDLibOptions {
    return TDLibOptions.for(this.api);
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
   * @return {this}
   * @memberof Client
   */
  start(): this {
    if (this._state === ClientState.PAUSED) {
      this._state = ClientState.RUNNING;
      this._thread();
      return this;
    }

    throw new Error("Cannot start: This client is running or destroyed");
  }

  /**
   *
   *
   * @return {this}
   * @memberof Client
   */
  pause(): this {
    if (this._state === ClientState.RUNNING) {
      this._state = ClientState.PAUSED;
      return this;
    }

    throw new Error("Cannot pause: This client is paused or destroyed");
  }

  /**
   *
   *
   * @return {void}
   * @memberof Client
   */
  destroy(): void {
    if (this._state === ClientState.STOPPED) return;

    this._state = ClientState.STOPPED;
    this._updates.complete();

    for (const async of this._requests.values()) {
      async.reject(new TDError("Client is destroyed", { code: -1 }));
    }

    this._requests.clear();
    this._adapter.destroy(this._client);
  }
}

/**
 *
 *
 * @template T
 * @template X
 * @template R
 * @param {T} object
 * @param {X} data
 * @param {function(merged: X): R} callback
 * @return {R}
 */
function assignTemporary<T extends {}, X extends Record<string, unknown>, R = void>(
  object: T,
  data: X,
  callback: (merged: X & T) => R
): R {
  const merged = Object.assign(object, data);
  const result = callback(merged);

  for (const key of Object.keys(data)) {
    // eslint-disable-next-line security/detect-object-injection
    delete (object as any)[key];
  }

  return result;
}
