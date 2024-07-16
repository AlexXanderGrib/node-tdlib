[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateSpeedLimitNotification

# Type Alias: updateSpeedLimitNotification

> **updateSpeedLimitNotification**: `object`

Download or upload file speed for the user was limited, but it can be restored by subscription to Telegram Premium. The notification can be postponed until a being downloaded or uploaded file is visible to the user

- Use getOption("premium_download_speedup") or getOption("premium_upload_speedup") to get expected speedup after subscription to Telegram Premium

## Type declaration

### \_

> **\_**: `"updateSpeedLimitNotification"`

### is\_upload

> **is\_upload**: [`Bool`](Bool.md)

True, if upload speed was limited; false, if download speed was limited

## Defined in

dist/generated/types.d.ts:57027
