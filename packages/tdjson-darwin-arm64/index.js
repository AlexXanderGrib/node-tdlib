/**
 * @type {string}
 */
module.exports.tdlibPath = require("path").resolve(
  __dirname,
  "libtdjson-arm64.dylib"
);
/**
 * @type {string}
 * @default "1.8.52"
 */
module.exports.version = "1.8.52";
/**
 * @type {string}
 * @default "18f6c78cfb736cb24db789534e7ff3d274df77b3"
 */
module.exports.commit = "18f6c78cfb736cb24db789534e7ff3d274df77b3";
