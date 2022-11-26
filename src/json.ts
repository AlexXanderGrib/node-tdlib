const mainKey = /"_":/g;
const tdKey = /"@type":/g;

/**
 *
 *
 * @export
 * @param {*} data
 * @return {string}  {string}
 */
export function serialize(data: unknown): string {
  const json = JSON.stringify(data);
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
