[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateSpeedLimitNotification$Input

# Type Alias: updateSpeedLimitNotification$Input

> **updateSpeedLimitNotification$Input**: `object`

Version of [updateSpeedLimitNotification](updateSpeedLimitNotification.md) for method parameters.

Download or upload file speed for the user was limited, but it can be restored by subscription to Telegram Premium. The notification can be postponed until a being downloaded or uploaded file is visible to the user

- Use getOption("premium_download_speedup") or getOption("premium_upload_speedup") to get expected speedup after subscription to Telegram Premium

## Type declaration

### \_

> `readonly` **\_**: `"updateSpeedLimitNotification"`

### is\_upload?

> `readonly` `optional` **is\_upload**: [`Bool$Input`](Bool$Input.md)

True, if upload speed was limited; false, if download speed was limited

## Defined in

dist/generated/types.d.ts:58682
