import path from "path";
import { fileURLToPath } from "url";

function getCurrentFile() {
  /* eslint-disable unicorn/prefer-module */
  if (typeof __filename !== "undefined") {
    return __filename;
  }
  /* eslint-enable unicorn/prefer-module */

  if (typeof import.meta.filename === "string") {
    return import.meta.filename;
  }

  // Ignore while supporting node 18
  // eslint-disable-next-line unicorn/prefer-import-meta-properties
  return fileURLToPath(import.meta.url);
}

/**
 * Used to compile getCurrentFile() by replacing it
 * see vite.config.mjs
 * 
 * compilerMagic$(getCurrentFile()) is replaced by
 * - __filename for cjs
 * - fileURLToPath(import.meta.url) for esm
 * 
 * it still just a normal function for tests, where replace does not happen
 */
function compilerMagic$<T>(value: T): T {
  return value;
}

/**
 *
 *
 * @returns {string}  {string}
 */
export function getAddonFolderPath(): string {
  return path.dirname(compilerMagic$(getCurrentFile()));
}
