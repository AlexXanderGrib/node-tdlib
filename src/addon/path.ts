import path from "path";

/**
 *
 *
 * @returns {string}  {string}
 */
export function getAddonFolderPath(): string {
  return path.dirname(
    // eslint-disable-next-line unicorn/prefer-module
    typeof __filename === "string" ? __filename : (process.env.__filename as string)
  );
}
