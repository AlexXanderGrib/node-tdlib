import { fileURLToPath } from "url";

/**
 * @type {string}
 */
export const tdlibPath = fileURLToPath(
  new URL("libtdjson-x64-glibc.so", import.meta.url)
);
/**
 * @type {string}
 * @default "1.8.67"
 */
export const version = "1.8.67";
/**
 * @type {string}
 * @default "42e6a5259551178d1dab54a22ad96d14bd906e20"
 */
export const commit = "42e6a5259551178d1dab54a22ad96d14bd906e20";
