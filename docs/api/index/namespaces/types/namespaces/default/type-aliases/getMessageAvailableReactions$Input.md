[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getMessageAvailableReactions$Input

# Type Alias: getMessageAvailableReactions$Input

> **getMessageAvailableReactions$Input**: `object`

Returns reactions, which can be added to a message. The list can change after updateActiveEmojiReactions, updateChatAvailableReactions for the chat, or updateMessageInteractionInfo for the message

## Type declaration

### \_

> `readonly` **\_**: `"getMessageAvailableReactions"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat to which the message belongs

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Identifier of the message

### row\_size?

> `readonly` `optional` **row\_size**: [`int32`](int32-1.md)

Number of reaction per row, 5-25

## Defined in

dist/generated/types.d.ts:81197
