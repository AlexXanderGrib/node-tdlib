// @ts-check
const { familySync } = require("detect-libc");
const { readFileSync } = require("fs");
const { readFile } = require("fs/promises");
const { resolve } = require("path");
const { fileURLToPath } = require("url");

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
   * @returns {URL}
   */
  resolve(filename) {
    if (filename.startsWith("/")) filename = filename.slice(1);

    let baseUrl = this.baseUrl;
    if (!baseUrl.endsWith("/")) baseUrl += "/";

    return new URL(baseUrl + filename);
  }

  /**
   *
   * @param {string} filename
   * @returns {Promise<Buffer>}
   */
  async get(filename) {
    const cached = this._cache.get(filename);
    if (cached) {
      return cached;
    }

    const url = this.resolve(filename);

    /**
     * @type {Buffer}
     */
    let content;

    if (url.protocol === "file:") {
      const path = fileURLToPath(url);
      content = await readFile(path);
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
const repo = packageJson.config.tdlib_prebuilt_repository;
const tag = packageJson.config.tdlib_prebuilt_tag;

const downloader = new Downloader(
  `https://github.com/${repo}/releases/download/${tag}`
);

class PlatformLibrary {
  static builds = Object.freeze([
    new PlatformLibrary("darwin", "x64", "libtdjson-x64.dylib"),
    new PlatformLibrary("darwin", "arm64", "libtdjson-arm64.dylib"),
    new PlatformLibrary("linux", "x64", "libtdjson-x64-glibc.so", "glibc"),
    new PlatformLibrary("linux", "arm64", "libtdjson-arm64-glibc.so", "glibc"),
    new PlatformLibrary("linux", "x64", "libtdjson-x64-musl.so", "musl"),
    new PlatformLibrary("linux", "arm64", "libtdjson-arm64-musl.so", "musl"),
    new PlatformLibrary("android", "arm64", "libtdjson-arm64-glibc.so", "glibc"),
    new PlatformLibrary("android", "arm64", "libtdjson-arm64-musl.so", "musl"),
    new PlatformLibrary("win32", "x64", "tdjson-x64.dll"),
    new PlatformLibrary("win32", "ia32", "tdjson-x32.dll")
  ]);

  static getCurrentBuild() {
    const platform = process.env.TDN_PLATFORM ?? process.platform;
    const arch = process.env.TDN_ARCH ?? process.arch;
    const libc = process.env.TDN_LIBC ?? familySync() ?? undefined;

    const build = PlatformLibrary.builds.find((b) =>
      // @ts-ignore
      b.matches(platform, arch, libc)
    );
    return { platform, arch, libc, build };
  }

  /**
   *
   * @param {NodeJS.Platform} os
   * @param {NodeJS.Architecture} cpu
   * @param {string} tdlib
   * @param {"glibc" | "musl"} [libc]
   */
  constructor(os, cpu, tdlib, libc) {
    this.os = os;
    this.cpu = cpu;
    this.tdlib = tdlib;
    this.libc = libc;
  }

  get suffix() {
    return `${this.os}-${this.cpu}${this.libc ? `-${this.libc}` : ""}`;
  }

  get addonName() {
    return `td-${this.suffix}.node`;
  }

  get staticAddonName() {
    return `td-static-${this.suffix}.node`;
  }

  get tdlibPackageName() {
    return `tdjson-${this.suffix}`;
  }

  get staticAddonPackageName() {
    return `static-addon-${this.suffix}`;
  }

  get addonPackageName() {
    return `addon-${this.suffix}`;
  }

  getPackageFields() {
    return {
      os: [this.os],
      cpu: [this.cpu],
      libc: this.libc ? [this.libc] : undefined
    };
  }

  /**
   * **Variables: `platform`, `arch`, `libc` should be provided in scope**
   *
   * @returns {string} JS code - condition to check to check wether current build is correct one for provided system params
   */
  getJsCondition() {
    let condition = `platform === "${this.os}" && arch === "${this.cpu}"`;

    if (this.os === "android" && this.libc === "glibc") {
      condition += `&& (libc === "${this.libc}" || libc === null || libc === undefined)`;
    } else if (this.libc) {
      condition += `&& libc === "${this.libc}"`;
    }

    return condition;
  }

  /**
   *
   * @param {NodeJS.Platform} platform
   * @param {NodeJS.Architecture} arch
   * @param {"glibc" | "musl" | null} [libc]
   * @returns {boolean}
   */
  matches(platform, arch, libc) {
    void platform;
    void arch;
    void libc;

    return eval(this.getJsCondition());
  }

  toJSON() {
    return {
      os: this.os,
      cpu: this.cpu,
      libc: this.libc,

      tdlib: this.tdlib,
      addonName: this.addonName,
      staticAddonName: this.staticAddonName,

      tdlibPackageName: this.tdlibPackageName,
      addonPackageName: this.addonPackageName,
      staticAddonPackageName: this.staticAddonPackageName
    };
  }
}

module.exports.PlatformLibrary = PlatformLibrary;
module.exports.downloader = downloader;
module.exports.packageJson = packageJson;
module.exports.packagePath = packagePath;
module.exports.builds = PlatformLibrary.builds;
