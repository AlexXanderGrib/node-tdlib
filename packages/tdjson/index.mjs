import { createRequire } from "module";
import { familySync } from "detect-libc";
const require = createRequire();
const libc = familySync();
const forwarded = (function requirePlatformTdlib() {
  if (process.platform === "darwin" && process.arch === "x64") {
    return require("@tdlib-native/tdjson-darwin-x64");
  } else if (process.platform === "darwin" && process.arch === "arm64") {
    return require("@tdlib-native/tdjson-darwin-arm64");
  } else if (
    process.platform === "linux" &&
    process.arch === "x64" &&
    libc === "glibc"
  ) {
    return require("@tdlib-native/tdjson-linux-x64-glibc");
  } else if (
    process.platform === "linux" &&
    process.arch === "arm64" &&
    libc === "glibc"
  ) {
    return require("@tdlib-native/tdjson-linux-arm64-glibc");
  } else if (
    process.platform === "linux" &&
    process.arch === "x64" &&
    libc === "musl"
  ) {
    return require("@tdlib-native/tdjson-linux-x64-musl");
  } else if (
    process.platform === "linux" &&
    process.arch === "arm64" &&
    libc === "musl"
  ) {
    return require("@tdlib-native/tdjson-linux-arm64-musl");
  } else if (
    process.platform === "android" &&
    process.arch === "arm64" &&
    (libc === "glibc" || libc === null || libc === undefined)
  ) {
    return require("@tdlib-native/tdjson-android-arm64-glibc");
  } else if (
    process.platform === "android" &&
    process.arch === "arm64" &&
    libc === "musl"
  ) {
    return require("@tdlib-native/tdjson-android-arm64-musl");
  } else if (process.platform === "win32" && process.arch === "x64") {
    return require("@tdlib-native/tdjson-win32-x64");
  } else if (process.platform === "win32" && process.arch === "ia32") {
    return require("@tdlib-native/tdjson-win32-ia32");
  } else {
    let sysInfo = process.platform + " " + process.arch;

    if (libc) {
      sysInfo += " " + libc;
    }

    throw new Error(
      "Your system (" +
        sysInfo +
        ") is not supported yet. You can ask for support here: https://github.com/AlexXanderGrib/node-tdlib/issues"
    );
  }
})();
export const { tdlibPath, version, commit } = forwarded;
