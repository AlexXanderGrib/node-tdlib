[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sendQuickReplyShortcutMessages$DirectInput

# Type Alias: sendQuickReplyShortcutMessages$DirectInput

> **sendQuickReplyShortcutMessages$DirectInput**: `object`

Sends messages from a quick reply shortcut. Requires Telegram Business subscription

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat to which to send messages. The chat must be a private chat with a regular user

### sending\_id?

> `readonly` `optional` **sending\_id**: [`int32`](int32.md)

Non-persistent identifier, which will be returned back in messageSendingStatePending object and can be used to match sent messages and corresponding updateNewMessage updates

### shortcut\_id?

> `readonly` `optional` **shortcut\_id**: [`int32`](int32.md)

Unique identifier of the quick reply shortcut

## Defined in

dist/generated/types.d.ts:80484
