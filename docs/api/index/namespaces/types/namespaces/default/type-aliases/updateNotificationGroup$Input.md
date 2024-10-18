[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateNotificationGroup$Input

# Type Alias: updateNotificationGroup$Input

> **updateNotificationGroup$Input**: `object`

Version of [updateNotificationGroup](updateNotificationGroup.md) for method parameters.

A list of active notifications in a notification group has changed

## Type declaration

### \_

> `readonly` **\_**: `"updateNotificationGroup"`

### added\_notifications?

> `readonly` `optional` **added\_notifications**: [`vector$Input`](vector$Input.md)\<[`notification$Input`](notification$Input.md)\>

List of added group notifications, sorted by notification identifier

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of a chat to which all notifications in the group belong

### notification\_group\_id?

> `readonly` `optional` **notification\_group\_id**: [`int32`](int32.md)

Unique notification group identifier

### notification\_settings\_chat\_id?

> `readonly` `optional` **notification\_settings\_chat\_id**: [`int53`](int53.md)

Chat identifier, which notification settings must be applied to the added notifications

### notification\_sound\_id?

> `readonly` `optional` **notification\_sound\_id**: [`int64$Input`](int64$Input.md)

Identifier of the notification sound to be played; 0 if sound is disabled

### removed\_notification\_ids?

> `readonly` `optional` **removed\_notification\_ids**: [`vector$Input`](vector$Input.md)\<[`int32`](int32.md)\>

Identifiers of removed group notifications, sorted by notification identifier

### total\_count?

> `readonly` `optional` **total\_count**: [`int32`](int32.md)

Total number of unread notifications in the group, can be bigger than number of active notifications

### type?

> `readonly` `optional` **type**: [`NotificationGroupType$Input`](NotificationGroupType$Input.md)

New type of the notification group

## Defined in

dist/generated/types.d.ts:56389
