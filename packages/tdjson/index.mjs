import { createRequire } from "module";
import { familySync } from "detect-libc";
const require = createRequire();
const libc = familySync();
const forwarded = (function requirePlatformTdlib() {
  const { arch, platform } = process;

  if (platform === "darwin" && arch === "x64") {
    return require("@tdlib-native/tdjson-darwin-x64");
  } else if (platform === "darwin" && arch === "arm64") {
    return require("@tdlib-native/tdjson-darwin-arm64");
  } else if (platform === "linux" && arch === "x64" && libc === "glibc") {
    return require("@tdlib-native/tdjson-linux-x64-glibc");
  } else if (platform === "linux" && arch === "arm64" && libc === "glibc") {
    return require("@tdlib-native/tdjson-linux-arm64-glibc");
  } else if (platform === "linux" && arch === "x64" && libc === "musl") {
    return require("@tdlib-native/tdjson-linux-x64-musl");
  } else if (platform === "linux" && arch === "arm64" && libc === "musl") {
    return require("@tdlib-native/tdjson-linux-arm64-musl");
  } else if (
    platform === "android" &&
    arch === "arm64" &&
    (libc === "glibc" || libc === null || libc === undefined)
  ) {
    return require("@tdlib-native/tdjson-android-arm64-glibc");
  } else if (platform === "android" && arch === "arm64" && libc === "musl") {
    return require("@tdlib-native/tdjson-android-arm64-musl");
  } else if (platform === "win32" && arch === "x64") {
    return require("@tdlib-native/tdjson-win32-x64");
  } else if (platform === "win32" && arch === "ia32") {
    return require("@tdlib-native/tdjson-win32-ia32");
  } else {
    let sysInfo = platform + " " + arch;

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
