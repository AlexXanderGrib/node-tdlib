[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatNotificationSettings$Input

# Type Alias: chatNotificationSettings$Input

> **chatNotificationSettings$Input**: `object`

Version of [chatNotificationSettings](chatNotificationSettings.md) for method parameters.

Contains information about notification settings for a chat or a forum topic

## Type declaration

### \_

> `readonly` **\_**: `"chatNotificationSettings"`

### disable\_mention\_notifications?

> `readonly` `optional` **disable\_mention\_notifications**: [`Bool$Input`](Bool$Input.md)

If true, notifications for messages with mentions will be created as for an ordinary unread message

### disable\_pinned\_message\_notifications?

> `readonly` `optional` **disable\_pinned\_message\_notifications**: [`Bool$Input`](Bool$Input.md)

If true, notifications for incoming pinned messages will be created as for an ordinary unread message

### mute\_for?

> `readonly` `optional` **mute\_for**: [`int32`](int32.md)

Time left before notifications will be unmuted, in seconds

### mute\_stories?

> `readonly` `optional` **mute\_stories**: [`Bool$Input`](Bool$Input.md)

True, if story notifications are disabled for the chat

### show\_preview?

> `readonly` `optional` **show\_preview**: [`Bool$Input`](Bool$Input.md)

True, if message content must be displayed in notifications

### show\_story\_sender?

> `readonly` `optional` **show\_story\_sender**: [`Bool$Input`](Bool$Input.md)

True, if the sender of stories must be displayed in notifications

### sound\_id?

> `readonly` `optional` **sound\_id**: [`int64$Input`](int64$Input.md)

Identifier of the notification sound to be played for messages; 0 if sound is disabled

### story\_sound\_id?

> `readonly` `optional` **story\_sound\_id**: [`int64$Input`](int64$Input.md)

Identifier of the notification sound to be played for stories; 0 if sound is disabled

### use\_default\_disable\_mention\_notifications?

> `readonly` `optional` **use\_default\_disable\_mention\_notifications**: [`Bool$Input`](Bool$Input.md)

If true, the value for the relevant type of chat or the forum chat is used instead of disable_mention_notifications

### use\_default\_disable\_pinned\_message\_notifications?

> `readonly` `optional` **use\_default\_disable\_pinned\_message\_notifications**: [`Bool$Input`](Bool$Input.md)

If true, the value for the relevant type of chat or the forum chat is used instead of disable_pinned_message_notifications

### use\_default\_mute\_for?

> `readonly` `optional` **use\_default\_mute\_for**: [`Bool$Input`](Bool$Input.md)

If true, the value for the relevant type of chat or the forum chat is used instead of mute_for

### use\_default\_mute\_stories?

> `readonly` `optional` **use\_default\_mute\_stories**: [`Bool$Input`](Bool$Input.md)

If true, the value for the relevant type of chat is used instead of mute_stories

### use\_default\_show\_preview?

> `readonly` `optional` **use\_default\_show\_preview**: [`Bool$Input`](Bool$Input.md)

If true, the value for the relevant type of chat or the forum chat is used instead of show_preview

### use\_default\_show\_story\_sender?

> `readonly` `optional` **use\_default\_show\_story\_sender**: [`Bool$Input`](Bool$Input.md)

If true, the value for the relevant type of chat is used instead of show_story_sender

### use\_default\_sound?

> `readonly` `optional` **use\_default\_sound**: [`Bool$Input`](Bool$Input.md)

If true, the value for the relevant type of chat or the forum chat is used instead of sound_id

### use\_default\_story\_sound?

> `readonly` `optional` **use\_default\_story\_sound**: [`Bool$Input`](Bool$Input.md)

If true, the value for the relevant type of chat is used instead of story_sound_id

## Defined in

dist/generated/types.d.ts:15541
