[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / notificationGroup$Input

# Type Alias: notificationGroup$Input

> **notificationGroup$Input**: `object`

Version of [notificationGroup](notificationGroup.md) for method parameters.

Describes a group of notifications

## Type declaration

### \_

> `readonly` **\_**: `"notificationGroup"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of a chat to which all notifications in the group belong

### id?

> `readonly` `optional` **id**: [`int32`](int32.md)

Unique persistent auto-incremented from 1 identifier of the notification group

### notifications?

> `readonly` `optional` **notifications**: [`vector$Input`](vector$Input.md)\<[`notification$Input`](notification$Input.md)\>

The list of active notifications

### total\_count?

> `readonly` `optional` **total\_count**: [`int32`](int32.md)

Total number of active notifications in the group

### type?

> `readonly` `optional` **type**: [`NotificationGroupType$Input`](NotificationGroupType$Input.md)

Type of the group

## Defined in

dist/generated/types.d.ts:47134
