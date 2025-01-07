import { fileURLToPath } from "url";

/**
 * @type {string}
 */
export const tdlibPath = fileURLToPath(new URL("libtdjson-x64.dylib", import.meta.url));
/**
 * @type {string}
 * @default "1.8.41"
 */
export const version = "1.8.41";
/**
 * @type {string}
 * @default "eb98bbe611e1132f98914e4cd4e2c727079cc84d"
 */
export const commit = "eb98bbe611e1132f98914e4cd4e2c727079cc84d";
