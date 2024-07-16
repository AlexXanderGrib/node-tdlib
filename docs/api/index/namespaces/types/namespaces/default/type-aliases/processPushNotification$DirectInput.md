[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / processPushNotification$DirectInput

# Type Alias: processPushNotification$DirectInput

> **processPushNotification$DirectInput**: `object`

Handles a push notification. Returns error with code 406 if the push notification is not supported and connection to the server is required to fetch new data. Can be called before authorization

## Type declaration

### payload?

> `readonly` `optional` **payload**: `string`

JSON-encoded push notification payload with all fields sent by the server, and "google.sent_time" and "google.notification.sound" fields added

## Defined in

dist/generated/types.d.ts:97656
