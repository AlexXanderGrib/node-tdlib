/* eslint-disable unicorn/prefer-module */
import path from "path";

/**
 *
 *
 * @return {string}  {string}
 */
export function getAddonFolderPath(): string {
  return path.dirname(
    typeof __filename === "string" ? __filename : (process.env.__filename as string)
  );
}
