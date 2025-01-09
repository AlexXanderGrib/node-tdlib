# TDLib Native

> Cross platform TDLib wrapper

<img src="https://alexxandergrib.github.io/node-tdlib/icons/tdlib-native-logo.svg" align="right"
     alt="Logo" width="72" height="72">

[![Test Status](https://github.com/AlexXanderGrib/node-tdlib/actions/workflows/test.yml/badge.svg)](https://github.com/AlexXanderGrib/node-tdlib)
[![Downloads](https://img.shields.io/npm/dt/tdlib-native.svg)](https://npmjs.com/package/tdlib-native)
[![last commit](https://img.shields.io/github/last-commit/AlexXanderGrib/node-tdlib.svg)](https://github.com/AlexXanderGrib/node-tdlib)
[![codecov](https://img.shields.io/codecov/c/github/AlexXanderGrib/node-tdlib/main.svg)](https://codecov.io/gh/AlexXanderGrib/node-tdlib)
[![GitHub](https://img.shields.io/github/stars/AlexXanderGrib/node-tdlib.svg)](https://github.com/AlexXanderGrib/node-tdlib)
[![tdlib-native](https://snyk.io/advisor/npm-package/tdlib-native/badge.svg)](https://snyk.io/advisor/npm-package/tdlib-native)
[![Known Vulnerabilities](https://snyk.io/test/npm/tdlib-native/badge.svg)](https://snyk.io/test/npm/tdlib-native)
[![npm](https://img.shields.io/npm/v/tdlib-native.svg)](https://npmjs.com/package/tdlib-native)
[![license MIT](https://img.shields.io/npm/l/tdlib-native.svg)](https://github.com/AlexXanderGrib/node-tdlib/blob/main/LICENSE.txt)
[![Size](https://img.shields.io/bundlephobia/minzip/tdlib-native)](https://bundlephobia.com/package/tdlib-native)

## Why use this package?

- **Fast.** `TDLib` is a fastest way to interact with Telegram on NodeJS. It's written in C++ with optimized network stack and caching.
- **Better DX.** Easy, well documented API. Instant type completion
  ```typescript
  /**
   * Sends a message. Returns the sent message
   *
   * @throws {TDError}
   * @param {sendMessage$DirectInput} parameters {@link sendMessage$Input}
   * @returns {Promise<Message>} Promise<{@link Message}>
   */
  async sendMessage(parameters: sendMessage$DirectInput): Promise<Message>
  ```
- **Secure.**
  - Only 3 dependencies: `node-addon-api`, `debug`, `detect-libc`
  - Built on CI with provenance
- **Multi-Platform.** Supported platforms:
  - Linux: x64, arm64 (glibc, musl)
  - Android: arm64 (glibc, musl)
  - MacOS: x64, Apple Silicon (arm64)
  - Windows: x64, x32

## 📦 Installation

- **Using `npm`**
  ```shell
  npm i tdlib-native
  ```
- **Using `Yarn`**
  ```shell
  yarn add tdlib-native
  ```
- **Using `pnpm`**
  ```shell
  pnpm add tdlib-native
  ```

## 3.0 Changelog

- Made builds for linux arm64
- Made builds for musl libc
- Made builds for windows x32 (since tg desktop supports it)
- Fixed client thread safety, fixed disposal of tdlib clients
- Made `client.start()`, `client.pause()` and `client.destroy()` - async
- Upgraded TDLib to 1.8.37

## ⚙️ Usage

This is raw wrapper of TDLib

```typescript
import { Client, Authenticator } from "tdlib-native";
import { TDLibAddon } from "tdlib-native/addon";

async function init() {
  // Loading addon
  const adapter = await TDLibAddon.create();

  // Make TDLib shut up. Immediately
  Client.disableLogs(adapter);

  const client = new Client(adapter);
  const authenticator = Authenticator.create(client)
    .tdlibParameters({
      /* options */
    })
    .token(process.env.TELEGRAM_BOT_TOKEN);

  // Start polling responses from TDLib
  // And authenticate bot
  // THIS SHOULD BE USED via Promise.all
  // OR ELSE .authenticate() skips an update and hangs
  await Promise.all([client.start(), authenticator.authenticate()]);

  // client authorized as bot
  // Call any tdlib method
  await client.api.getOption({ name: "version" });
  // => Promise { _: "optionValueString", value: "1.8.37" }

  // or use a wrapper
  await client.tdlibOptions.get("version");
  // => Promise "1.8.22"

  // Subscribe to updates
  client.updates.subscribe(console.log);

  // Pause receiving updates. Will freeze method all running API calls
  // await client.pause();
  // Resume pause
  // await client.start();

  // Destroy
  await client.api.close({});
  await client.destroy();
}
```

**Usage with RxJS**

```typescript
// Observable will complete after client.destroy() call
const updates = new Observable(client.updates.toRxObserver());
```

### Projects built with `tdlib-native`

<table><tbody><tr><td align="center" valign="top" width="11%">
<a href="https://t.me/guardcore_bot">
<img
src="https://alexxandergrib.github.io/node-tdlib/icons/guardcore-bot.jpg"
width="75"
height="75"
alt="GuardCore Bot's Avatar"
/><br />
GuardCore Bot
</a>
</td><td align="center" valign="top" width="11%">
<a href="https://t.me/tvoya_statya_bot">
<img
src="https://alexxandergrib.github.io/node-tdlib/icons/tvoya-statya-bot.jpg"
width="75"
height="75"
alt="Твоя Статья УК РФ's Avatar"
/><br />
Твоя Статья УК РФ
</a>
</td><td align="center" valign="top" width="11%">
<a href="https://github.com/AlexXanderGrib/node-tdlib/issues/new">
<img
src="https://alexxandergrib.github.io/node-tdlib/icons/add.png"
width="75"
height="75"
alt=""
/><br />
Add your project
</a>
</td></tr></tbody></table>

## Credits

This package is based on [eilvelia/tdl](https://github.com/eilvelia/tdl)

Licenses:

- C++ addon - [MIT](./docs/licenses/addon.license.txt)
- Ci pipeline - [Blue Oak Model License 1.0.0](./docs/licenses/ci.license.md)
