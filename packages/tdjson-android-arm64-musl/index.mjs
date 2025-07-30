import { fileURLToPath } from "url";

/**
 * @type {string}
 */
export const tdlibPath = fileURLToPath(new URL("libtdjson-arm64-musl.so", import.meta.url));
/**
 * @type {string}
 * @default "1.8.46"
 */
export const version = "1.8.46";
/**
 * @type {string}
 * @default "b498497bbfd6b80c86f800b3546a0170206317d3"
 */
export const commit = "b498497bbfd6b80c86f800b3546a0170206317d3";
