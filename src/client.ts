import type { TDLib, TDLibClient } from "./shared/client";
import type {
  error,
  Update,
  $MethodsDict,
  $SyncMethodsDict
} from "./generated/types";
import * as JSON from "./json";
import { AsyncData } from "./shared/async";
import { EventBus, Observable } from "./event-bus";

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
  private _state = ClientState.PAUSED;

  /**
   * Creates an instance of Client.
   * @param {TDLib} _adapter
   * @memberof Client
   */
  constructor(private readonly _adapter: TDLib) {
    this._client = _adapter.create();
  }

  readonly api = new Proxy(
    Object.freeze({}) as {
      readonly [key in keyof $MethodsDict]: (
        parameters: OmitType<Parameters<$MethodsDict[key]>[0]>
      ) => Promise<ReturnType<$MethodsDict[key]>>;
    },
    {
      get: (_target, method) => {
        return (parameters: any) =>
          this.invoke(method as keyof $MethodsDict, parameters);
      }
    }
  );

  readonly syncApi = new Proxy(
    Object.freeze({}) as {
      readonly [key in keyof $SyncMethodsDict]: (
        parameters: OmitType<Parameters<$SyncMethodsDict[key]>[0]>
      ) => ReturnType<$SyncMethodsDict[key]>;
    },
    {
      get: (_target, method) => {
        return (parameters: any) =>
          this.execute(method as keyof $SyncMethodsDict, parameters);
      }
    }
  );

  /**
   *
   *
   * @template {keyof $MethodsDict} T
   * @param {T} method
   * @param {object} parameters
   * @return {object}  {Promise<ReturnType<$MethodsDict[T]>>}
   * @throws {TDError} - {@link TDError}
   * @memberof Client
   */
  async invoke<T extends keyof $MethodsDict>(
    method: T,
    parameters: OmitType<Parameters<$MethodsDict[T]>[0]>
  ): Promise<ReturnType<$MethodsDict[T]>> {
    const extra = Math.random();

    assignTemporary(parameters, { _: method, "@extra": extra }, (merged) => {
      this._adapter.send(this._client, JSON.serialize(merged));
    });

    const result = new AsyncData<ReturnType<$MethodsDict[T]>>();

    this._requests.set(extra, result);
    return result.catch((error: error) => {
      throw new TDError(error.message, { code: error.code, method, parameters });
    });
  }

  /**
   *
   *
   * @template {keyof $SyncMethodsDict} T
   * @param {TDLib|Client} executor
   * @param {T} method
   * @param {object} parameters
   * @return {object}  {Promise<ReturnType<$SyncMethodsDict[T]>>}
   * @throws {TDError} - {@link TDError}
   * @memberof Client
   */
  static execute<T extends keyof $SyncMethodsDict>(
    executor: TDLib | Client,
    method: T,
    parameters: OmitType<Parameters<$MethodsDict[T]>[0]>
  ): ReturnType<$SyncMethodsDict[T]> {
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
        // eslint-disable-next-line unicorn/no-null
        return adapter.execute(client ?? null, JSON.serialize(merged));
      }
    );

    if (!value) {
      throw new TDError("Method returned null", { method, parameters });
    }

    let data: unknown;

    try {
      data = JSON.deserialize(value);

      if (typeof data !== "object" || !data || !("_" in data)) {
        throw new Error("Returned not an object");
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

    return data as ReturnType<$SyncMethodsDict[T]>;
  }

  /**
   *
   *
   * @template {keyof $SyncMethodsDict} T
   * @param {T} method
   * @param {object} parameters
   * @return {object}  {Promise<ReturnType<$SyncMethodsDict[T]>>}
   * @throws {TDError} - {@link TDError}
   * @memberof Client
   */
  execute<T extends keyof $SyncMethodsDict>(
    method: T,
    parameters: OmitType<Parameters<$MethodsDict[T]>[0]>
  ): ReturnType<$SyncMethodsDict[T]> {
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
   * @return {this}
   * @memberof Client
   */
  start() {
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
  pause() {
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
