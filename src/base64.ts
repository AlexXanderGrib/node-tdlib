const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

/**
 * Encodes
 *
 * @export
 * @param {Uint8Array} bytes
 * @returns {string}  {string}
 */
export function encode(bytes: ArrayLike<number>): string {
  let result = "";
  let index;

  /* eslint-disable security/detect-object-injection */
  for (index = 2; index < bytes.length; index += 3) {
    result += alphabet[bytes[index - 2] >> 2];
    result += alphabet[((bytes[index - 2] & 0x03) << 4) | (bytes[index - 1] >> 4)];
    result += alphabet[((bytes[index - 1] & 0x0f) << 2) | (bytes[index] >> 6)];
    result += alphabet[bytes[index] & 0x3f];
  }

  if (index === bytes.length + 1) {
    // 1 octet yet to write
    result += alphabet[bytes[index - 2] >> 2];
    result += alphabet[(bytes[index - 2] & 0x03) << 4];
    result += "==";
  } else if (index === bytes.length) {
    // 2 octets yet to write
    result += alphabet[bytes[index - 2] >> 2];
    result += alphabet[((bytes[index - 2] & 0x03) << 4) | (bytes[index - 1] >> 4)];
    result += alphabet[(bytes[index - 1] & 0x0f) << 2];
    result += "=";
  }
  return result;
}
