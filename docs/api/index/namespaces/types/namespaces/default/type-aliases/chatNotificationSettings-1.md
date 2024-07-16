[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatNotificationSettings

# Type Alias: chatNotificationSettings

> **chatNotificationSettings**: `object`

Contains information about notification settings for a chat or a forum topic

## Type declaration

### \_

> **\_**: `"chatNotificationSettings"`

### disable\_mention\_notifications

> **disable\_mention\_notifications**: [`Bool`](Bool.md)

If true, notifications for messages with mentions will be created as for an ordinary unread message

### disable\_pinned\_message\_notifications

> **disable\_pinned\_message\_notifications**: [`Bool`](Bool.md)

If true, notifications for incoming pinned messages will be created as for an ordinary unread message

### mute\_for

> **mute\_for**: [`int32`](int32-1.md)

Time left before notifications will be unmuted, in seconds

### mute\_stories

> **mute\_stories**: [`Bool`](Bool.md)

True, if story notifications are disabled for the chat

### show\_preview

> **show\_preview**: [`Bool`](Bool.md)

True, if message content must be displayed in notifications

### show\_story\_sender

> **show\_story\_sender**: [`Bool`](Bool.md)

True, if the sender of stories must be displayed in notifications

### sound\_id

> **sound\_id**: [`int64`](int64-1.md)

Identifier of the notification sound to be played for messages; 0 if sound is disabled

### story\_sound\_id

> **story\_sound\_id**: [`int64`](int64-1.md)

Identifier of the notification sound to be played for stories; 0 if sound is disabled

### use\_default\_disable\_mention\_notifications

> **use\_default\_disable\_mention\_notifications**: [`Bool`](Bool.md)

If true, the value for the relevant type of chat or the forum chat is used instead of disable_mention_notifications

### use\_default\_disable\_pinned\_message\_notifications

> **use\_default\_disable\_pinned\_message\_notifications**: [`Bool`](Bool.md)

If true, the value for the relevant type of chat or the forum chat is used instead of disable_pinned_message_notifications

### use\_default\_mute\_for

> **use\_default\_mute\_for**: [`Bool`](Bool.md)

If true, the value for the relevant type of chat or the forum chat is used instead of mute_for

### use\_default\_mute\_stories

> **use\_default\_mute\_stories**: [`Bool`](Bool.md)

If true, the value for the relevant type of chat is used instead of mute_stories

### use\_default\_show\_preview

> **use\_default\_show\_preview**: [`Bool`](Bool.md)

If true, the value for the relevant type of chat or the forum chat is used instead of show_preview

### use\_default\_show\_story\_sender

> **use\_default\_show\_story\_sender**: [`Bool`](Bool.md)

If true, the value for the relevant type of chat is used instead of show_story_sender

### use\_default\_sound

> **use\_default\_sound**: [`Bool`](Bool.md)

If true, the value for the relevant type of chat or the forum chat is used instead of sound_id

### use\_default\_story\_sound

> **use\_default\_story\_sound**: [`Bool`](Bool.md)

If true, the value for the relevant type of chat is used instead of story_sound_id

## Defined in

dist/generated/types.d.ts:14861
