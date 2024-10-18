[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / scopeNotificationSettings$Input

# Type Alias: scopeNotificationSettings$Input

> **scopeNotificationSettings$Input**: `object`

Version of [scopeNotificationSettings](scopeNotificationSettings.md) for method parameters.

Contains information about notification settings for several chats

## Type declaration

### \_

> `readonly` **\_**: `"scopeNotificationSettings"`

### disable\_mention\_notifications?

> `readonly` `optional` **disable\_mention\_notifications**: [`Bool$Input`](Bool$Input.md)

True, if notifications for messages with mentions will be created as for an ordinary unread message

### disable\_pinned\_message\_notifications?

> `readonly` `optional` **disable\_pinned\_message\_notifications**: [`Bool$Input`](Bool$Input.md)

True, if notifications for incoming pinned messages will be created as for an ordinary unread message

### mute\_for?

> `readonly` `optional` **mute\_for**: [`int32`](int32.md)

Time left before notifications will be unmuted, in seconds

### mute\_stories?

> `readonly` `optional` **mute\_stories**: [`Bool$Input`](Bool$Input.md)

True, if story notifications are disabled

### show\_preview?

> `readonly` `optional` **show\_preview**: [`Bool$Input`](Bool$Input.md)

True, if message content must be displayed in notifications

### show\_story\_sender?

> `readonly` `optional` **show\_story\_sender**: [`Bool$Input`](Bool$Input.md)

True, if the sender of stories must be displayed in notifications

### sound\_id?

> `readonly` `optional` **sound\_id**: [`int64$Input`](int64$Input.md)

Identifier of the notification sound to be played; 0 if sound is disabled

### story\_sound\_id?

> `readonly` `optional` **story\_sound\_id**: [`int64$Input`](int64$Input.md)

Identifier of the notification sound to be played for stories; 0 if sound is disabled

### use\_default\_mute\_stories?

> `readonly` `optional` **use\_default\_mute\_stories**: [`Bool$Input`](Bool$Input.md)

If true, story notifications are received only for the first 5 chats from topChatCategoryUsers regardless of the value of mute_stories

## Defined in

dist/generated/types.d.ts:15680
