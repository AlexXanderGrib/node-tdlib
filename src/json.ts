const mainKey = /"_":/g;
const tdKey = /"@type":/g;

/**
 *
 *
 * @param {*} _key
 * @param {*} value
 * @return {*}  {*}
 */
function replacer(_key: keyof any, value: unknown): any {
  if (typeof value === "bigint") {
    return value.toString();
  }

  if (typeof value === "object" && value instanceof Uint8Array) {
    return [...value].map((value) => value.toString(16).padStart(2, "0")).join("");
  }

  if (
    typeof value === "object" &&
    value &&
    "type" in value &&
    value.type === "Buffer" &&
    "data" in value &&
    Array.isArray(value.data)
  ) {
    return value.data.map((value) => value.toString(16).padStart(2, "0")).join("");
  }

  return value;
}

/**
 *
 *
 * @export
 * @param {*} data
 * @return {string}  {string}
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
 * @return {T}  {T}
 */
export function deserialize<T>(json: string): T {
  return JSON.parse(json.replace(tdKey, '"_":'));
}
