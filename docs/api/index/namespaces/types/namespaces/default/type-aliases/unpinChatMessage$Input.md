[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / unpinChatMessage$Input

# Type Alias: unpinChatMessage$Input

> **unpinChatMessage$Input**: `object`

Removes a pinned message from a chat; requires can_pin_messages member right if the chat is a basic group or supergroup, or can_edit_messages administrator right if the chat is a channel

## Type declaration

### \_

> `readonly` **\_**: `"unpinChatMessage"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Identifier of the removed pinned message

## Defined in

dist/generated/types.d.ts:86173
