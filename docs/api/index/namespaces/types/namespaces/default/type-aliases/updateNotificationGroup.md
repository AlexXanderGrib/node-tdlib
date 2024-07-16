[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateNotificationGroup

# Type Alias: updateNotificationGroup

> **updateNotificationGroup**: `object`

A list of active notifications in a notification group has changed

## Type declaration

### \_

> **\_**: `"updateNotificationGroup"`

### added\_notifications

> **added\_notifications**: [`vector`](vector.md)\<[`notification`](notification-1.md)\>

List of added group notifications, sorted by notification identifier

### chat\_id

> **chat\_id**: [`int53`](int53-1.md)

Identifier of a chat to which all notifications in the group belong

### notification\_group\_id

> **notification\_group\_id**: [`int32`](int32-1.md)

Unique notification group identifier

### notification\_settings\_chat\_id

> **notification\_settings\_chat\_id**: [`int53`](int53-1.md)

Chat identifier, which notification settings must be applied to the added notifications

### notification\_sound\_id

> **notification\_sound\_id**: [`int64`](int64-1.md)

Identifier of the notification sound to be played; 0 if sound is disabled

### removed\_notification\_ids

> **removed\_notification\_ids**: [`vector`](vector.md)\<[`int32`](int32-1.md)\>

Identifiers of removed group notifications, sorted by notification identifier

### total\_count

> **total\_count**: [`int32`](int32-1.md)

Total number of unread notifications in the group, can be bigger than number of active notifications

### type

> **type**: [`NotificationGroupType`](NotificationGroupType.md)

New type of the notification group

## Defined in

dist/generated/types.d.ts:54725
