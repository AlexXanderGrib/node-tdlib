[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / notificationGroup

# Type Alias: notificationGroup

> **notificationGroup**: `object`

Describes a group of notifications

## Type declaration

### \_

> **\_**: `"notificationGroup"`

### chat\_id

> **chat\_id**: [`int53`](int53-1.md)

Identifier of a chat to which all notifications in the group belong

### id

> **id**: [`int32`](int32-1.md)

Unique persistent auto-incremented from 1 identifier of the notification group

### notifications

> **notifications**: [`vector`](vector.md)\<[`notification`](notification-1.md)\>

The list of active notifications

### total\_count

> **total\_count**: [`int32`](int32-1.md)

Total number of active notifications in the group

### type

> **type**: [`NotificationGroupType`](NotificationGroupType.md)

Type of the group

## Defined in

dist/generated/types.d.ts:45575
