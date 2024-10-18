import type { TDLib, TDLibClient } from "./shared/client";
import {
  error,
  Update,
  $AsyncApi,
  $SyncApi,
  $MethodsDict,
  typename
} from "./generated/types";
import { deserialize, serialize } from "./json";
import { PromiseWithResolvers, promiseWithResolvers } from "./shared/async";
import { EventBus, Observable } from "./event-bus";
import debug from "debug";
import { TDLibOptions } from "./options";
import { assert } from "./assert";

const debugJson = debug("tdlib-native:json");

const tag = "@extra";

type OmitType<T extends { [typename]: string }> = Omit<T, typename>;

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
  readonly [typename] = "error";
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
   * @returns {object}
   * @memberof TDError
   */
  toJSON() {
    return {
      // eslint-disable-next-line security/detect-object-injection
      [typename]: this[typename],
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
  private readonly _requests = new Map<number, PromiseWithResolvers<any>>();
  private readonly _updates = new EventBus<Update>();
  private readonly _adapter: TDLib;
  private _state = ClientState.PAUSED;

  /**
   * Creates an instance of Client.
   * @param {TDLib} adapter
   * @memberof Client
   */
  constructor(adapter: TDLib) {
    this._adapter = adapter;
    this._client = adapter.create(3000);
    Object.seal(this);
  }

  readonly api = new $AsyncApi(this);
  readonly syncApi = new $SyncApi(this);
  readonly _tdlibOptions = new TDLibOptions(this.api);

  /**
   *
   *
   * @template {keyof $AsyncApi} T
   * @param {T} method
   * @param {object} parameters
   * @returns {object}  {Promise<ReturnType<$AsyncApi[T]>>}
   * @throws {TDError} - {@link TDError}
   * @memberof Client
   */
  async invoke<T extends keyof $AsyncApi>(
    method: T,
    parameters: Parameters<$AsyncApi[T]>[0]
  ): Promise<ReturnType<$MethodsDict[T]>> {
    const extra = Math.random();
    const data = promiseWithResolvers<any>();

    assignTemporary(parameters, { [typename]: method, [tag]: extra }, (merged) => {
      const value = serialize(merged);
      debugJson("Sent %s", value);
      this._adapter.send(this._client, value);
    });

    this._requests.set(extra, data);

    try {
      return await data.promise;
    } catch (error) {
      if (typeof error === "object" && error && typename in error) {
        const value = error as error;
        throw new TDError(value.message, { code: value.code, method, parameters });
      }

      throw error;
    }
  }

  /**
   * Disables logging of TDLib instance
   *
   * @static
   * @param {TDLib} lib
   * @memberof Client
   * @returns {void}
   */
  static disableLogs(lib: TDLib): void {
    Client.execute(lib, "setLogVerbosityLevel", { new_verbosity_level: 0 });
  }

  /**
   *
   *
   * @template {keyof $SyncApi} T
   * @param {TDLib|Client} executor
   * @param {T} method
   * @param {object} parameters
   * @returns {object}  {Promise<ReturnType<$SyncMethodsDict[T]>>}
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
      { [typename]: method, [tag]: extra },
      (merged) => {
        const value = serialize(merged);
        debugJson("Sent sync %s", value);

        // eslint-disable-next-line unicorn/no-null
        return adapter.execute(client ?? null, value);
      }
    );

    debugJson("Received sync %s", value);

    assert(value, new TDError("Method returned null", { method, parameters }));

    let data: unknown;

    try {
      data = deserialize(value);
    } catch {
      throw new TDError("Method returned invalid json", { method, parameters });
    }

    assert(
      typeof data === "object" && data && typename in data,
      new TDError("Returned not an object", { method, parameters })
    );

    /* eslint-disable security/detect-object-injection */
    if (data[typename] === "error") {
      const error = data as error;
      throw new TDError(error.message, { code: error.code, method, parameters });
    }

    if (tag in data && data[tag]) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete data[tag];
    }
    /* eslint-enable security/detect-object-injection */

    return data as ReturnType<$SyncApi[T]>;
  }

  /**
   *
   *
   * @template {keyof $SyncApi} T
   * @param {T} method
   * @param {object} parameters
   * @returns {object}  {Promise<ReturnType<$SyncApi[T]>>}
   * @throws {TDError} - {@link TDError}
   * @memberof Client
   */
  execute<T extends keyof $SyncApi>(
    method: T,
    parameters: OmitType<Parameters<$MethodsDict[T]>[0]>
  ): ReturnType<$SyncApi[T]> {
    return Client.execute(this, method, parameters);
  }

  private _running: Promise<void> | undefined;

  /**
   *
   *
   * @private
   * @returns {Promise<void>}
   * @memberof Client
   */
  private async _thread(): Promise<void> {
    while (this._state === ClientState.RUNNING) {
      let value: string | null | undefined;

      try {
        value = await this._adapter.receive(this._client);
      } catch (error) {
        if (error instanceof Error && error.message.includes("destroyed")) {
          break;
        }

        throw error;
      }

      debugJson("Received %s", value);

      if (!value) {
        continue;
      }

      let data: any;
      try {
        data = deserialize(value);
      } catch {
        continue;
      }

      if (typeof data !== "object" || !data) {
        continue;
      }

      /* eslint-disable security/detect-object-injection */

      const extra = data?.[tag];

      if (extra) {
        const async = this._requests.get(extra);
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete data[tag];

        if (data[typename] === "error") {
          async?.reject(data);
        } else {
          async?.resolve(data);
        }

        this._requests.delete(extra);

        continue;
      }

      if (data[typename].startsWith("update")) {
        this._updates.emit(data);
      }
    }

    /* eslint-enable security/detect-object-injection */
  }

  /**
   *
   * @see https://core.telegram.org/tdlib/options
   * @readonly
   * @memberof Client
   */
  get tdlibOptions(): TDLibOptions {
    return this._tdlibOptions;
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
   * @returns {Promise<void>}
   * @memberof Client
   */
  async start(): Promise<void> {
    assert(
      this._state === ClientState.PAUSED && !this._running,
      "Cannot start: This client is running or destroyed"
    );

    this._state = ClientState.RUNNING;
    this._running = this._thread().finally(() => {
      this._running = undefined;
    });

    await this.api.testCallEmpty({});
  }

  /**
   *
   *
   * @returns {this}
   * @memberof Client
   */
  async pause(): Promise<void> {
    assert(
      this._state === ClientState.RUNNING,
      "Cannot pause: This client is paused or destroyed"
    );

    this._state = ClientState.PAUSED;
    await this._running;
  }

  /**
   *
   *
   * @returns {void}
   * @memberof Client
   */
  async destroy(): Promise<void> {
    if (this._state === ClientState.STOPPED) return;

    this._state = ClientState.STOPPED;
    this._updates.complete();

    for (const async of this._requests.values()) {
      async.reject(new TDError("Client is destroyed", { code: -1 }));
    }

    this._requests.clear();
    await this._adapter.destroy(this._client);
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
 * @returns {R}
 */
function assignTemporary<T extends {}, X extends Record<string, unknown>, R = void>(
  object: T,
  data: X,
  callback: (merged: X & T) => R
): R {
  const merged = Object.assign(object, data);
  const result = callback(merged);

  for (const key of Object.keys(data)) {
    // eslint-disable-next-line security/detect-object-injection, @typescript-eslint/no-dynamic-delete
    delete (object as any)[key];
  }

  return result;
}
