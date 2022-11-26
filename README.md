# Quality Package Template

> Package template that can get you `99%` quality and `33%` maintenance on `npm`

[![Test Status](https://github.com/AlexXanderGrib/package-template/actions/workflows/test.yml/badge.svg)](https://github.com/AlexXanderGrib/package-template)
[![Downloads](https://img.shields.io/npm/dt/package_template.svg)](https://npmjs.com/package/package_template)
[![last commit](https://img.shields.io/github/last-commit/AlexXanderGrib/package-template.svg)](https://github.com/AlexXanderGrib/package-template)
[![codecov](https://img.shields.io/codecov/c/github/AlexXanderGrib/package-template/main.svg)](https://codecov.io/gh/AlexXanderGrib/package-template)
[![GitHub](https://img.shields.io/github/stars/AlexXanderGrib/package-template.svg)](https://github.com/AlexXanderGrib/package-template)
[![package_template](https://snyk.io/advisor/npm-package/package_template/badge.svg)](https://snyk.io/advisor/npm-package/package_template)
[![Known Vulnerabilities](https://snyk.io/test/npm/package_template/badge.svg)](https://snyk.io/test/npm/package_template)
[![Quality](https://img.shields.io/npms-io/quality-score/package_template.svg?label=quality%20%28npms.io%29&)](https://npms.io/search?q=package_template)
[![npm](https://img.shields.io/npm/v/package_template.svg)](https://npmjs.com/package/package_template)
[![license MIT](https://img.shields.io/npm/l/package_template.svg)](https://github.com/AlexXanderGrib/package-template/blob/main/LICENSE.txt)
[![Size](https://img.shields.io/bundlephobia/minzip/package_template)](https://bundlephobia.com/package/package_template)

## Why use this package?

- **Fast.** `TDLib` is a fastest way to interact with Telegram on NodeJS. It's written in C++ with optimized network stack and caching.
  | API Type | Package | Method | Time |
  | --- | --- | --- | --- |
  | `TDLib` | [`tdl`](https://npmjs.com/package/tdl) | [`getChat`](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat.html#a830588ea8cd104a043c8617a8cebf153) | 21ms |
  | `Telegram API` | [`telegram (gram.js)`](https://npmjs.com/package/telegram) | [`messages.getChats`](https://core.telegram.org/method/messages.getChats) | 40ms |
  | `Telegram Bot API` | [`telegraf`](https://npmjs.com/package/telegraf) | [`getChat`](https://core.telegram.org/bots/api#getchat) | 30ms |

  <!-- TODO: get accurate statistic -->

- **TS friendly.** Unlike [`tdl`](https://npmjs.com/package/tdl) this package declarations use dictionary for methods instead of intersection type, making editor hints load almost immediate.
- **Secure.** The library has only 1 dependency - `node-addon-api` for building TDLib addon
## 📦 Installation

- **Using `npm`**
  ```shell
  npm i package_template
  ```
- **Using `Yarn`**
  ```shell
  yarn add package_template
  ```
- **Using `pnpm`**
  ```shell
  pnpm add package_template
  ```

## ⚙️ Usage

```javascript
import { Example } from "package_template";

const container = new Example(10);

console.log(container);
// Example { value: 10 }
```
