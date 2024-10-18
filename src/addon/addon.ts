/* eslint-disable @typescript-eslint/class-literal-property-style */
import path from "path";
import type { TDLib, TDLibClient } from "../shared/client";
import { getAddonFolderPath } from "./path";
import { createRequire } from "module";
import { assert } from "../assert";

export type Addon = {
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

const isGlibc = () =>
  !!(process.report?.getReport() as any)?.header?.glibcVersionRuntime;

/**
 *
 *
 * @returns {Promise<string>}  {Promise<string>}
 */
async function getTDLibPath(): Promise<string> {
  let packageName = `@tdlib-native/tdjson-${process.platform}-${process.arch}`;

  if (process.platform === "linux") {
    assert(
      isGlibc(),
      "TDLib build for MUSL libc is not ready yet. You can ask for do it quicker: https://github.com/AlexXanderGrib/node-tdlib/issues"
    );

    packageName += "-glibc";
  }

  try {
    const { tdlibPath } = await import(packageName);
    return tdlibPath;
  } catch(error) {
    console.log(error)
    throw new Error(
      `There is no prebuilt TDLib for your platform (${process.platform} ${process.arch}). You can ask for it: https://github.com/AlexXanderGrib/node-tdlib/issues`
    );
  }
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
  create(): TDLibClient {
    return this._addon.td_client_create();
  }

  /**
   *
   *
   * @param {TDLibClient} client
   * @memberof TDLibAddon
   * @returns {void}
   */
  destroy(client: TDLibClient): void {
    this._addon.td_client_destroy(client);
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
    return this._addon.td_client_execute(client, json);
  }

  /**
   *
   *
   * @param {TDLibClient} client
   * @param {number} timeout
   * @returns {Promise<string|null>}  {(Promise<string | null>)}
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
   * @returns {void}
   */
  send(client: TDLibClient, json: string): void {
    this._addon.td_client_send(client, json);
  }

  /**
   *
   *
   * @param {function(errorMessage: string): void=} callback
   * @memberof TDLibAddon
   * @returns {void}
   */
  setLogFatalErrorCallback(callback: ((errorMessage: string) => void) | null): void {
    this._addon.td_set_fatal_error_callback(callback);
  }
}
