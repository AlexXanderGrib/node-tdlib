const { readFileSync } = require("fs");
const { readFile } = require("fs/promises");
const path = require("path");
const { resolve } = require("path");
const { pathToFileURL } = require("url");

class Downloader {
  /**
   * @private
   * @type {Map<string, Buffer>}
   */
  _cache = new Map();

  /**
   *
   * @param {string} baseUrl
   */
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  /**
   *
   * @param {string} filename
   * @returns {Promise<Buffer>}
   */
  async get(filename) {
    const cached = this._cache.get(filename);
    if (cached) {
      console.log("[Downloader] Got", filename, "from cache");
      return cached;
    }

    if (filename.startsWith("/")) filename = filename.slice(1);

    let baseUrl = this.baseUrl;
    if (!baseUrl.endsWith("/")) baseUrl += "/";

    const url = new URL(baseUrl + filename);
    console.log("[Downloader] Downloading", url.toString());

    /**
     * @type {Buffer}
     */
    let content;

    if (url.protocol === "file:") {
      content = await readFile(url.pathname);
    } else {
      const response = await fetch(url);
      const buffer = await response.arrayBuffer();
      content = Buffer.from(buffer);
    }

    this._cache.set(filename, content);
    return content;
  }
}

const packagePath = resolve(__dirname, "../package.json");
const packageJson = JSON.parse(readFileSync(packagePath, "utf-8"));
// const repo = packageJson.config.tdlib_prebuilt_repository;
// const tag = packageJson.config.tdlib_prebuilt_tag;

const directoryPath = path.resolve(process.cwd(), "./prebuilt-tdlib/td");
const url = pathToFileURL(directoryPath);

const downloader = new Downloader(url.toString());

/**
 * @type {{ os: NodeJS.Platform; cpu: NodeJS.Architecture; file: string; libc?: "glibc" | "musl" }[]}
 */
const builds = [
  { os: "darwin", cpu: "x64", file: "libtdjson-x64.dylib" },
  { os: "darwin", cpu: "arm64", file: "libtdjson-arm64.dylib" },
  { os: "linux", cpu: "x64", file: "libtdjson-x64-glibc.so", libc: "glibc" },
  { os: "linux", cpu: "arm64", file: "libtdjson-arm64-glibc.so", libc: "glibc" },
  { os: "linux", cpu: "x64", file: "libtdjson-x64-musl.so", libc: "musl" },
  { os: "linux", cpu: "arm64", file: "libtdjson-arm64-musl.so", libc: "musl" },
  { os: "android", cpu: "arm64", file: "libtdjson-arm64-glibc.so", libc: "glibc" },
  { os: "android", cpu: "arm64", file: "libtdjson-arm64-musl.so", libc: "musl" },
  { os: "win32", cpu: "x64", file: "tdjson-x64.dll" },
  { os: "win32", cpu: "ia32", file: "tdjson-x32.dll" }
];

module.exports.downloader = downloader;
module.exports.packageJson = packageJson;
module.exports.packagePath = packagePath;
module.exports.builds = builds;
