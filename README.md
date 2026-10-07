# TDLib Native

> Cross platform TDLib wrapper

<img src="https://alexxandergrib.github.io/node-tdlib/icons/tdlib-native-logo.svg" align="right"
     alt="Logo" width="96" height="96">

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

Requires Node.js 18 or later and a C++ build toolchain for the native addon.

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

## 4.0 changes

- TDLib 1.8.67 with matching generated types and prebuilt platform packages.
- Public clients use the modern JSON API and share one native receiver across
  Node workers. Each worker owns its clients and authentication state.
- `destroy()` waits for TDLib's final closed update. Receive queue overflow
  closes the affected client and rejects pending requests.
- Static loading and `load_tdjson_static` are removed. The library stays loaded
  after a modern client is created; `unload_tdjson()` rejects attempts to unload it.
- The raw `tdn_*` receiver cannot run alongside public managed clients.

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
  // => Promise { _: "optionValueString", value: "1.8.67" }

  // or use a wrapper
  await client.tdlibOptions.get("version");
  // => Promise "1.8.67"

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

### Worker threads

Create the adapter and clients inside each worker. Public clients share one native
TDLib receiver across the process; each worker receives only its clients' events.
No JavaScript broker is required. A worker can own one or several clients.

For example, start a worker for each bot from your main script:

```javascript
const { Worker } = require("node:worker_threads");

for (const bot of bots) {
  new Worker(require.resolve("./bot-worker.cjs"), {
    workerData: bot // { token, apiId, apiHash, directory }
  });
}
```

In `bot-worker.cjs`:

```javascript
const path = require("node:path");
const { workerData, parentPort } = require("node:worker_threads");
const { Client, Authenticator } = require("tdlib-native");
const { TDLibAddon } = require("tdlib-native/addon");

async function run() {
  const adapter = await TDLibAddon.create();
  const client = new Client(adapter);
  const auth = Authenticator.create(client)
    .tdlibParameters({
      api_id: workerData.apiId,
      api_hash: workerData.apiHash,
      database_directory: path.resolve(workerData.directory, "db"),
      files_directory: path.resolve(workerData.directory, "files"),
      system_language_code: "en",
      device_model: "Node worker",
      application_version: "1.0"
    })
    .token(workerData.token);

  try {
    await Promise.all([client.start(), auth.authenticate()]);
  } catch (error) {
    await client.destroy();
    parentPort.close();
    throw error;
  }
  // Subscribe to updates and run this bot's application logic here.

  parentPort.once("message", async () => {
    await client.destroy(); // Waits for TDLib's final closed state.
    parentPort.close();
  });
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

Give each active auth a unique database directory. Tokens and auth state are per
client; logging and the loaded TDLib library are process-wide. Configure logging
centrally. Prefer graceful destruction before worker termination; forced worker
termination also closes its clients and can wait for TDLib shutdown.

Receive backlogs default to 256 messages and 8 MiB per client. You can adjust them
with `TDLibAddon.create(undefined, undefined, { maxQueuedResponses: 1024,
maxQueuedBytes: 16 * 1024 * 1024 })`. Overflow closes the affected client and rejects
its pending calls with an explicit error. Paused consumers can overflow. These
limits cover addon queues; Node worker memory limits do not cap TDLib's native RAM.

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
