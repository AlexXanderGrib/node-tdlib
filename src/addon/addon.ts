/* eslint-disable @typescript-eslint/class-literal-property-style */
import path from "path";
import type { TDLib, TDLibClient } from "../shared/client";
import { getAddonFolderPath } from "./path";
import { createRequire } from "module";
import { promiseWithResolvers } from "../shared/async";
import { family } from "detect-libc";

type Addon = {
  td_json_client_create(timeoutMs: number): TDLibClient;
  td_json_client_send(client: TDLibClient, json: string): void;
  td_json_client_receive(client: TDLibClient): Promise<string | null>;
  td_json_client_execute(client: TDLibClient | null, json: string): string | null;
  td_json_client_destroy(client: TDLibClient): void;

  td_set_log_message_callback(
    level: number,
    callback: null | ((errorMessage: string) => void)
  ): void;

  td_create_client_id(): TDLibClient;
  td_send(client: TDLibClient, json: string): void;
  td_receive(): Promise<string | null>;
  td_execute(json: string): string;

  tdn_init(timeoutMs: number): void;
  tdn_ref(): void;
  tdn_unref(): void;

  load_tdjson(path: string): void;
};

const builtinAddonPath = path.resolve(
  getAddonFolderPath(),
  "../../build/Release/td.node"
);

/**
 *
 *
 * @param {string} [addonPath]
 * @returns {Addon}  {Addon}
 */
async function loadAddon(addonPath: string = builtinAddonPath): Promise<Addon> {
  const baseDirectory = getAddonFolderPath();

  const load = createRequire(baseDirectory);
  const addon: Addon = load(addonPath);

  return addon;
}

/**
 *
 *
 * @returns {Promise<string>}  {Promise<string>}
 */
async function getTDLibPath(): Promise<string> {
  let packageName = `@tdlib-native/tdjson-${process.platform}-${process.arch}`;

  if (process.platform === "android") {
    packageName += "-glibc";
  }

  if (process.platform === "linux") {
    packageName += `-${await family()}`;
  }

  try {
    const { tdlibPath } = await import(packageName);
    return tdlibPath;
  } catch (error) {
    throw new Error(
      `There is no prebuilt TDLib for your platform (${process.platform} ${process.arch}). You can ask for it: https://github.com/AlexXanderGrib/node-tdlib/issues`,
      {
        cause: error
      }
    );
  }
}

class ReceiveQueueEntry {
  constructor(
    public readonly client: TDLibClient,
    public readonly promise: PromiseWithResolvers<string | null>
  ) {
    Object.freeze(this);
  }
}

class ClientMeta {
  destroyed = false;

  constructor(public readonly timeout: number) {}
}

/**
 *
 *
 * @export
 * @class TDLibAddon
 * @implements {TDLib}
 */
export class TDLibAddon implements TDLib {
  /**
   *
   *
   * @static
   * @param {string} [tdlibPath] Resolves to prebuild TDLib for your platform
   * @param {string} [addonPath]
   * @returns {Promise<TDLib>}
   * @memberof TDLibAddon
   */
  static async create(tdlibPath?: string, addonPath?: string): Promise<TDLibAddon> {
    tdlibPath ??= await getTDLibPath();
    const addon = await loadAddon(addonPath);
    addon.load_tdjson(tdlibPath);

    return new TDLibAddon(addon);
  }

  /**
   * Creates an instance of TDLibAddon.
   * @param {Addon} _addon
   * @memberof TDLibAddon
   */
  private constructor(private readonly _addon: Addon) {}

  readonly _isTDLib = true;
  private readonly _clients = new WeakMap<TDLibClient, ClientMeta>();

  /**
   *
   *
   * @readonly
   * @memberof TDLibAddon
   */
  get name() {
    return "addon";
  }

  /**
   *
   *
   * @returns {TDLibClient}  {TDLibClient}
   * @memberof TDLibAddon
   */
  create(timeout: number): TDLibClient {
    const client = this._addon.td_json_client_create(timeout);
    this._clients.set(client, new ClientMeta(timeout));

    return client;
  }

  private _getMeta(client: TDLibClient): ClientMeta {
    const meta = this._clients.get(client);

    if (!meta) {
      throw new Error("Unknown client");
    }

    return meta;
  }

  /**
   *
   *
   * @param {TDLibClient} client
   * @memberof TDLibAddon
   * @returns {Promise<void>}
   */
  async destroy(client: TDLibClient): Promise<void> {
    if (this._getMeta(client).destroyed) {
      throw new Error("Client already destroyed");
    }

    for (const entry of this._queue) {
      if (entry.client === client) {
        entry.promise.reject(new Error("Client is destroyed"));
      }
    }

    await this._thread;
    this._addon.td_json_client_destroy(client);
  }

  /**
   *
   *
   * @param {(TDLibClient | null)} client
   * @param {string} json
   * @returns {(string | null)}  {(string | null)}
   * @memberof TDLibAddon
   */
  execute(client: TDLibClient | null, json: string): string | null {
    return this._addon.td_json_client_execute(client, json);
  }

  private readonly _queue: ReceiveQueueEntry[] = [];
  private _thread: Promise<void> | undefined;

  private async _receive() {
    while (this._queue.length > 0) {
      const task = this._queue.shift();
      if (!task) break;

      await this._addon
        .td_json_client_receive(task.client)
        .then(task.promise.resolve, task.promise.reject);
    }
  }

  /**
   *
   *
   * @param {TDLibClient} client
   * @returns {Promise<string|null>}  {(Promise<string | null>)}
   * @memberof TDLibAddon
   */
  receive(client: TDLibClient): Promise<string | null> {
    const meta = this._getMeta(client);

    if (meta.destroyed) {
      return Promise.reject(new Error("Client is destroyed"));
    }

    const entryWithSameClient = this._queue.find((entry) => entry.client === client);

    if (entryWithSameClient) {
      return Promise.reject(new Error("This client is already receiving updates"));
    }

    const promise = promiseWithResolvers<string | null>();
    const entry = new ReceiveQueueEntry(client, promise);
    this._queue.push(entry);

    if (!this._thread) {
      this._thread = this._receive().finally(() => {
        this._thread = undefined;
      });
    }

    return promise.promise;
  }

  /**
   *
   *
   * @param {TDLibClient} client
   * @param {string} json
   * @memberof TDLibAddon
   * @returns {void}
   */
  send(client: TDLibClient, json: string): void {
    if (this._getMeta(client).destroyed) {
      throw new Error("Client is destroyed");
    }

    this._addon.td_json_client_send(client, json);
  }

  /**
   *
   *
   * @param {function(errorMessage: string): void=} callback
   * @memberof TDLibAddon
   * @returns {void}
   */
  setLogMessageCallback(
    level: number,
    callback: ((errorMessage: string) => void) | null
  ): void {
    this._addon.td_set_log_message_callback(level, callback);
  }
}
