[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateActiveNotifications$Input

# Type Alias: updateActiveNotifications$Input

> **updateActiveNotifications$Input**: `object`

Version of [updateActiveNotifications](updateActiveNotifications.md) for method parameters.

Contains active notifications that were shown on previous application launches. This update is sent only if the message database is used. In that case it comes once before any updateNotification and updateNotificationGroup update

## Type declaration

### \_

> `readonly` **\_**: `"updateActiveNotifications"`

### groups?

> `readonly` `optional` **groups**: [`vector$Input`](vector$Input.md)\<[`notificationGroup$Input`](notificationGroup$Input-1.md)\>

Lists of active notification groups

## Defined in

dist/generated/types.d.ts:54832
