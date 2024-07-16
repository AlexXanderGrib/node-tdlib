[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pinChatMessage$DirectInput

# Type Alias: pinChatMessage$DirectInput

> **pinChatMessage$DirectInput**: `object`

Pins a message in a chat; requires can_pin_messages member right if the chat is a basic group or supergroup, or can_edit_messages administrator right if the chat is a channel

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat

### disable\_notification?

> `readonly` `optional` **disable\_notification**: [`Bool$Input`](Bool$Input.md)

Pass true to disable notification about the pinned message. Notifications are always disabled in channels and private chats

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Identifier of the new pinned message

### only\_for\_self?

> `readonly` `optional` **only\_for\_self**: [`Bool$Input`](Bool$Input.md)

Pass true to pin the message only for self; private chats only

## Defined in

dist/generated/types.d.ts:86141
