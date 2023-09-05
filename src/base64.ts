const base64abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

/**
 * Encodes
 *
 * @export
 * @param {Uint8Array} bytes
 * @return {string}  {string}
 */
export function encode(bytes: ArrayLike<number>): string {
  let result = "";
  let index;
  const l = bytes.length;
  for (index = 2; index < l; index += 3) {
    result += base64abc[bytes[index - 2] >> 2];
    result += base64abc[((bytes[index - 2] & 0x03) << 4) | (bytes[index - 1] >> 4)];
    result += base64abc[((bytes[index - 1] & 0x0f) << 2) | (bytes[+index] >> 6)];
    result += base64abc[bytes[+index] & 0x3f];
  }
  if (index === l + 1) {
    // 1 octet yet to write
    result += base64abc[bytes[index - 2] >> 2];
    result += base64abc[(bytes[index - 2] & 0x03) << 4];
    result += "==";
  }
  if (index === l) {
    // 2 octets yet to write
    result += base64abc[bytes[index - 2] >> 2];
    result += base64abc[((bytes[index - 2] & 0x03) << 4) | (bytes[index - 1] >> 4)];
    result += base64abc[(bytes[index - 1] & 0x0f) << 2];
    result += "=";
  }
  return result;
}
