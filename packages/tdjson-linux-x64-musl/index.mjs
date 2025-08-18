import { fileURLToPath } from "url";

/**
 * @type {string}
 */
export const tdlibPath = fileURLToPath(
  new URL("libtdjson-x64-musl.so", import.meta.url)
);
/**
 * @type {string}
 * @default "1.8.52"
 */
export const version = "1.8.52";
/**
 * @type {string}
 * @default "18f6c78cfb736cb24db789534e7ff3d274df77b3"
 */
export const commit = "18f6c78cfb736cb24db789534e7ff3d274df77b3";
