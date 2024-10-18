[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / removeNotificationGroup$Input

# Type Alias: removeNotificationGroup$Input

> **removeNotificationGroup$Input**: `object`

Removes a group of active notifications. Needs to be called only if the notification group is removed by the current user

## Type declaration

### \_

> `readonly` **\_**: `"removeNotificationGroup"`

### max\_notification\_id?

> `readonly` `optional` **max\_notification\_id**: [`int32`](int32.md)

The maximum identifier of removed notifications

### notification\_group\_id?

> `readonly` `optional` **notification\_group\_id**: [`int32`](int32.md)

Notification group identifier

## Defined in

dist/generated/types.d.ts:79629
