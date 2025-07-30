/**
 *
 *
 * @export
 * @param {unknown} value
 * @param {(string | Error)} [error]
 * @returns {void}  {asserts}
 */
export function assert(value: unknown, error?: string | Error): asserts value {
  error ??= new Error("Assertion failed");

  if (typeof error === "string") {
    error = new Error(error);
  }

  if (!value) {
    throw error;
  }
}
