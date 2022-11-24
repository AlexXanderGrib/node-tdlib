/* eslint-disable unicorn/prefer-module */
import path from "path";
import url from "url";
import type { TDLib, TDLibClient } from "../shared/client";

export interface Addon {
  td_client_create(): TDLibClient;
  td_client_send(client: TDLibClient, json: string): void;
  td_client_receive(
    client: TDLibClient,
    timeoutMs: number,
    callback: (error: Error | null, result: string) => void
  ): void;
  td_client_execute(client: TDLibClient | null, json: string): string | null;
  td_client_destroy(client: TDLibClient): void;
  td_set_fatal_error_callback(
    callback: null | ((errorMessage: string) => void)
  ): void;
  load_tdjson(path: string): void;
}

/**
 *
 *
 * @return {string}  {string}
 */
function getCurrentPath(): string {
  if (typeof __dirname === "string") {
    return __dirname;
  }

  if (typeof import.meta?.url === "string") {
    return url.fileURLToPath(import.meta.url);
  }

  throw new Error("Unable to get current path");
}

/**
 *
 *
 * @param {string} [addonPath]
 * @return {Addon}  {Addon}
 */
async function loadAddon(addonPath?: string): Promise<Addon> {
  addonPath ??= path.resolve(getCurrentPath(), "../../build/Release/td.node");
  const addon: Addon = await import(addonPath);

  return addon;
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
   * @param {string} tdlibPath
   * @param {string} [addonPath]
   * @return {Promise<TDLib>}
   * @memberof TDLibAddon
   */
  static async create(tdlibPath: string, addonPath?: string): Promise<TDLib> {
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
   * @return {TDLibClient}  {TDLibClient}
   * @memberof TDLibAddon
   */
  create(): TDLibClient {
    return this._addon.td_client_create();
  }

  /**
   *
   *
   * @param {TDLibClient} client
   * @memberof TDLibAddon
   */
  destroy(client: TDLibClient): void {
    this._addon.td_client_destroy(client);
  }

  /**
   *
   *
   * @param {(TDLibClient | null)} client
   * @param {string} json
   * @return {(string | null)}  {(string | null)}
   * @memberof TDLibAddon
   */
  execute(client: TDLibClient | null, json: string): string | null {
    return this._addon.td_client_execute(client, json);
  }

  /**
   *
   *
   * @param {TDLibClient} client
   * @param {number} timeout
   * @return {Promise<string|null>}  {(Promise<string | null>)}
   * @memberof TDLibAddon
   */
  receive(client: TDLibClient, timeout: number): Promise<string | null> {
    return new Promise((resolve, reject) => {
      this._addon.td_client_receive(client, timeout, (error, result) => {
        if (error) return reject(error);

        resolve(result);
      });
    });
  }

  /**
   *
   *
   * @param {TDLibClient} client
   * @param {string} json
   * @memberof TDLibAddon
   */
  send(client: TDLibClient, json: string): void {
    this._addon.td_client_send(client, json);
  }

  /**
   *
   *
   * @param {function(errorMessage: string): void=} callback
   * @memberof TDLibAddon
   */
  setLogFatalErrorCallback(callback: ((errorMessage: string) => void) | null): void {
    this._addon.td_set_fatal_error_callback(callback);
  }
}
