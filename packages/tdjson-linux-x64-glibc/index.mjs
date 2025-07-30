import { fileURLToPath } from "url";

/**
 * @type {string}
 */
export const tdlibPath = fileURLToPath(new URL("libtdjson-x64-glibc.so", import.meta.url));
/**
 * @type {string}
 * @default "1.8.51"
 */
export const version = "1.8.51";
/**
 * @type {string}
 * @default "6d74326c5ce53aeb52496f157f0080d9b8515970"
 */
export const commit = "6d74326c5ce53aeb52496f157f0080d9b8515970";
