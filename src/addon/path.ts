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

  return fileURLToPath(import.meta.url);
}

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
