TDLib / [Modules](modules.md)

# TDLib Native

[![Test Status](https://github.com/AlexXanderGrib/node-tdlib/actions/workflows/test.yml/badge.svg)](https://github.com/AlexXanderGrib/node-tdlib)
[![Downloads](https://img.shields.io/npm/dt/tdlib-native.svg)](https://npmjs.com/package/tdlib-native)
[![last commit](https://img.shields.io/github/last-commit/AlexXanderGrib/node-tdlib.svg)](https://github.com/AlexXanderGrib/node-tdlib)
[![codecov](https://img.shields.io/codecov/c/github/AlexXanderGrib/node-tdlib/main.svg)](https://codecov.io/gh/AlexXanderGrib/node-tdlib)
[![GitHub](https://img.shields.io/github/stars/AlexXanderGrib/node-tdlib.svg)](https://github.com/AlexXanderGrib/node-tdlib)
[![tdlib-native](https://snyk.io/advisor/npm-package/tdlib-native/badge.svg)](https://snyk.io/advisor/npm-package/tdlib-native)
[![Known Vulnerabilities](https://snyk.io/test/npm/tdlib-native/badge.svg)](https://snyk.io/test/npm/tdlib-native)
[![Quality](https://img.shields.io/npms-io/quality-score/tdlib-native.svg?label=quality%20%28npms.io%29&)](https://npms.io/search?q=tdlib-native)
[![npm](https://img.shields.io/npm/v/tdlib-native.svg)](https://npmjs.com/package/tdlib-native)
[![license MIT](https://img.shields.io/npm/l/tdlib-native.svg)](https://github.com/AlexXanderGrib/node-tdlib/blob/main/LICENSE.txt)
[![Size](https://img.shields.io/bundlephobia/minzip/tdlib-native)](https://bundlephobia.com/package/tdlib-native)

## Why use this package?

- **Fast.** `TDLib` is a fastest way to interact with Telegram on NodeJS. It's written in C++ with optimized network stack and caching.
  | API Type | Package | Method | Time |
  | --- | --- | --- | --- |
  | `TDLib` | [`tdl`](https://npmjs.com/package/tdl) | [`getChat`](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat.html#a830588ea8cd104a043c8617a8cebf153) | 21ms |
  | `Telegram API` | [`telegram (gram.js)`](https://npmjs.com/package/telegram) | [`messages.getChats`](https://core.telegram.org/method/messages.getChats) | 40ms |
  | `Telegram Bot API` | [`telegraf`](https://npmjs.com/package/telegraf) | [`getChat`](https://core.telegram.org/bots/api#getchat) | 30ms |

  <!-- TODO: get accurate statistic -->

- **Better DX.** Unlike [`tdl`](https://npmjs.com/package/tdl) this package declarations use dictionary for methods instead of intersection type, making editor hints load almost immediate.
- **Secure.** The library has only 1 dependency - `node-addon-api` for building TDLib addon

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

## ⚙️ Usage

This is raw wrapper of TDLib. It does not (yet) provide any mechanisms for authentication

```typescript
import { Client } from "tdlib-native";
import { TDLibAddon } from "tdlib-native/addon";

async function init() {
  // Loading addon
  const adapter = await TDLibAddon.create();

  // Make TDLib shut up. Immediately
  Client.execute(adapter, "setLogVerbosityLevel", {
    new_verbosity_level: 0
  })

  const client = new Client(adapter);

  // Start polling responses from TDLib
  client.start();

  // Call any tdlib method
  await client.api.getOption({ name: "version" });
  // => Promise { _: "optionValueString", value: "1.8.22" }

  // or use a wrapper 
  await client.tdlibOptions.get("version");
  // => Promise "1.8.22"

  // Subscribe to updates
  client.updates.subscribe(console.log);

  // Pause receiving updates. Will freeze method all running API calls
  // client.pause();
  // Resume pause
  // client.start();

  // Destroy
  await client.api.close({});
  client.destroy();
}
```

**Usage with RxJS**

```typescript
// Observable will complete after client.destroy() call 
const updates = new Observable(client.updates.toRxObserver());
```
