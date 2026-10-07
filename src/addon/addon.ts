/* eslint-disable @typescript-eslint/class-literal-property-style */
import path from "path";
import type { TDLib, TDLibClient } from "../shared/client";
import { getAddonFolderPath } from "./path";
import { createRequire } from "module";
import { Addon } from "./native-exports";

const builtinAddonPath = "tdlib-native/td.node";

/**
 *
 *
 * @param {string} [addonPath]
 * @returns {Addon}  {Addon}
 */
async function loadAddon(addonPath: string = builtinAddonPath): Promise<Addon> {
  const baseDirectory = getAddonFolderPath();

  const load = createRequire(path.join(baseDirectory, "package.json"));
  const addon: Addon = load(addonPath);

  return addon;
}

/**
 *
 *
 * @returns {Promise<string>}  {Promise<string>}
 */
async function getTDLibPath(): Promise<string> {
  // The dispatcher forwards module.exports, which Node cannot expose as named
  // exports through import() reliably. Use its supported CommonJS entry point.
  const load = createRequire(path.join(getAddonFolderPath(), "package.json"));
  const { tdlibPath }: typeof import("@tdlib-native/tdjson") = load(
    "@tdlib-native/tdjson"
  );
  return tdlibPath;
}

class ClientMeta {
  destroyed = false;
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
    this._clients.set(client, new ClientMeta());

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
    const meta = this._getMeta(client);
    if (meta.destroyed) {
      throw new Error("Client already destroyed");
    }
    // Mark first so receive loops cannot enqueue more work during destruction.
    meta.destroyed = true;
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
    if (client !== null && this._getMeta(client).destroyed) {
      throw new Error("Client is destroyed");
    }
    return this._addon.td_json_client_execute(client, json);
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

    return this._addon.td_json_client_receive(client);
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
    this._addon.td_set_log_message_callback(
      level,
      callback === null ? callback : (_level, message) => callback(message)
    );
  }
}
