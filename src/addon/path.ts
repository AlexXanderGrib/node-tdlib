/* eslint-disable unicorn/prefer-module */
import path from "path";

function getCurrentFile() {
  if (typeof __filename !== "undefined") {
    return __filename;
  }

  return new URL("", import.meta.url).pathname;
}

/**
 *
 *
 * @returns {string}  {string}
 */
export function getAddonFolderPath(): string {
  return path.dirname(getCurrentFile());
}
