import { encode } from "./base64";

const mainKey = /"_":/g;
const tdKey = /"@type":/g;

/**
 *
 *
 * @param {*} _key
 * @param {*} value
 * @returns {*}  {*}
 */
function replacer(_key: keyof any, value: unknown): any {
  if (typeof value === "bigint") {
    return value.toString();
  }

  if (typeof value === "object" && value instanceof Uint8Array) {
    return encode(value);
  }

  if (
    typeof value === "object" &&
    value &&
    "type" in value &&
    value.type === "Buffer" &&
    "data" in value &&
    Array.isArray(value.data)
  ) {
    return encode(value.data);
  }

  return value;
}

/**
 *
 *
 * @export
 * @param {*} data
 * @returns {string}  {string}
 */
export function serialize(data: unknown): string {
  const json = JSON.stringify(data, replacer);
  return json.replace(mainKey, '"@type":');
}

/**
 *
 *
 * @export
 * @template T
 * @param {string} json
 * @returns {T}  {T}
 */
export function deserialize<T = unknown>(json: string): T {
  return JSON.parse(json.replace(tdKey, '"_":'));
}
