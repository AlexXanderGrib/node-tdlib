import { fileURLToPath } from "url";

/**
 * @type {string}
 */
export const tdlibPath = fileURLToPath(new URL("libtdjson-x64-glibc.so", import.meta.url));
/**
 * @type {string}
 * @default "1.8.44"
 */
export const version = "1.8.44";
/**
 * @type {string}
 * @default "28c6f2e9c045372d50217919bf5768b7fbbe0294"
 */
export const commit = "28c6f2e9c045372d50217919bf5768b7fbbe0294";
