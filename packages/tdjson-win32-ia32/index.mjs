import { fileURLToPath } from "url";

/**
 * @type {string}
 */
export const tdlibPath = fileURLToPath(new URL("tdjson-x32.dll", import.meta.url));
/**
 * @type {string}
 * @default "1.8.42"
 */
export const version = "1.8.42";
/**
 * @type {string}
 * @default "2be9e799a2bc523550d4f83f4d2d66d41c9573b9"
 */
export const commit = "2be9e799a2bc523550d4f83f4d2d66d41c9573b9";
