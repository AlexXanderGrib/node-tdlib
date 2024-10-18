[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pinChatMessage$Input

# Type Alias: pinChatMessage$Input

> **pinChatMessage$Input**: `object`

Pins a message in a chat. A message can be pinned only if messageProperties.can_be_pinned

## Type declaration

### \_

> `readonly` **\_**: `"pinChatMessage"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat

### disable\_notification?

> `readonly` `optional` **disable\_notification**: [`Bool$Input`](Bool$Input.md)

Pass true to disable notification about the pinned message. Notifications are always disabled in channels and private chats

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Identifier of the new pinned message

### only\_for\_self?

> `readonly` `optional` **only\_for\_self**: [`Bool$Input`](Bool$Input.md)

Pass true to pin the message only for self; private chats only

## Defined in

dist/generated/types.d.ts:88414
