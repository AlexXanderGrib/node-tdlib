import path from "path";
import { fileURLToPath } from "url";

/**
 *
 *
 * @return {string}  {string}
 */
export function getAddonFolderPath(): string {
  try {
    return eval("__dirname");
  } catch {
    /** unused */
  }

  try {
    return path.dirname(fileURLToPath(eval("import.meta.url")));
  } catch {
    /** unused */
  }

  throw new Error("Unable to get current path");
}
