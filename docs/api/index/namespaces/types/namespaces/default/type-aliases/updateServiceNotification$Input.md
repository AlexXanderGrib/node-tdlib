[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateServiceNotification$Input

# Type Alias: updateServiceNotification$Input

> **updateServiceNotification$Input**: `object`

Version of [updateServiceNotification](updateServiceNotification.md) for method parameters.

A service notification from the server was received. Upon receiving this the application must show a popup with the content of the notification

## Type declaration

### \_

> `readonly` **\_**: `"updateServiceNotification"`

### content?

> `readonly` `optional` **content**: [`MessageContent$Input`](MessageContent$Input.md)

Notification content

### type?

> `readonly` `optional` **type**: `string`

Notification type. If type begins with "AUTH_KEY_DROP_", then two buttons "Cancel" and "Log out" must be shown under notification; if user presses the second, all local data must be destroyed using Destroy method

## Defined in

dist/generated/types.d.ts:55235
