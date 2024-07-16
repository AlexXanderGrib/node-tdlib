[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / notification$Input

# Type Alias: notification$Input

> **notification$Input**: `object`

Version of [notification](notification-1.md) for method parameters.

Contains information about a notification

## Type declaration

### \_

> `readonly` **\_**: `"notification"`

### date?

> `readonly` `optional` **date**: [`int32`](int32-1.md)

Notification date

### id?

> `readonly` `optional` **id**: [`int32`](int32-1.md)

Unique persistent identifier of this notification

### is\_silent?

> `readonly` `optional` **is\_silent**: [`Bool$Input`](Bool$Input.md)

True, if the notification was explicitly sent without sound

### type?

> `readonly` `optional` **type**: [`NotificationType$Input`](NotificationType$Input.md)

Notification type

## Defined in

dist/generated/types.d.ts:45549
