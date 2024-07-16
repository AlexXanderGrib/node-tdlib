[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / scopeNotificationSettings

# Type Alias: scopeNotificationSettings

> **scopeNotificationSettings**: `object`

Contains information about notification settings for several chats

## Type declaration

### \_

> **\_**: `"scopeNotificationSettings"`

### disable\_mention\_notifications

> **disable\_mention\_notifications**: [`Bool`](Bool.md)

True, if notifications for messages with mentions will be created as for an ordinary unread message

### disable\_pinned\_message\_notifications

> **disable\_pinned\_message\_notifications**: [`Bool`](Bool.md)

True, if notifications for incoming pinned messages will be created as for an ordinary unread message

### mute\_for

> **mute\_for**: [`int32`](int32-1.md)

Time left before notifications will be unmuted, in seconds

### mute\_stories

> **mute\_stories**: [`Bool`](Bool.md)

True, if story notifications are disabled

### show\_preview

> **show\_preview**: [`Bool`](Bool.md)

True, if message content must be displayed in notifications

### show\_story\_sender

> **show\_story\_sender**: [`Bool`](Bool.md)

True, if the sender of stories must be displayed in notifications

### sound\_id

> **sound\_id**: [`int64`](int64-1.md)

Identifier of the notification sound to be played; 0 if sound is disabled

### story\_sound\_id

> **story\_sound\_id**: [`int64`](int64-1.md)

Identifier of the notification sound to be played for stories; 0 if sound is disabled

### use\_default\_mute\_stories

> **use\_default\_mute\_stories**: [`Bool`](Bool.md)

If true, story notifications are received only for the first 5 chats from topChatCategoryUsers regardless of the value of mute_stories

## Defined in

dist/generated/types.d.ts:15035
