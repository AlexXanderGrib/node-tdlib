[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sendQuickReplyShortcutMessages$Input

# Type Alias: sendQuickReplyShortcutMessages$Input

> **sendQuickReplyShortcutMessages$Input**: `object`

Sends messages from a quick reply shortcut. Requires Telegram Business subscription

## Type declaration

### \_

> `readonly` **\_**: `"sendQuickReplyShortcutMessages"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat to which to send messages. The chat must be a private chat with a regular user

### sending\_id?

> `readonly` `optional` **sending\_id**: [`int32`](int32-1.md)

Non-persistent identifier, which will be returned back in messageSendingStatePending object and can be used to match sent messages and corresponding updateNewMessage updates

### shortcut\_id?

> `readonly` `optional` **shortcut\_id**: [`int32`](int32-1.md)

Unique identifier of the quick reply shortcut

## Defined in

dist/generated/types.d.ts:78454
