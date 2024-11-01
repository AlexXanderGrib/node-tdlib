import { fileURLToPath } from "url";

/**
 * @type {string}
 */
export const tdlibPath = fileURLToPath(new URL("libtdjson-arm64.dylib", import.meta.url));
/**
 * @type {string}
 * @default "1.8.39"
 */
export const version = "1.8.39";
/**
 * @type {string}
 * @default "056963e48fa8d3f89556239c22d6ac843d3c8a5b"
 */
export const commit = "056963e48fa8d3f89556239c22d6ac843d3c8a5b";
