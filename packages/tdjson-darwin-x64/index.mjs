import { fileURLToPath } from "url";

/**
 * @type {string}
 */
export const tdlibPath = fileURLToPath(
  new URL("libtdjson-x64.dylib", import.meta.url)
);
/**
 * @type {string}
 * @default "1.8.70"
 */
export const version = "1.8.70";
/**
 * @type {string}
 * @default "c8828d50f5eac2fc7089ce1089d7ce9095c61b5e"
 */
export const commit = "c8828d50f5eac2fc7089ce1089d7ce9095c61b5e";
