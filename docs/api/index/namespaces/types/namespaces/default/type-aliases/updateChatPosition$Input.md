[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateChatPosition$Input

# Type Alias: updateChatPosition$Input

> **updateChatPosition$Input**: `object`

Version of [updateChatPosition](updateChatPosition.md) for method parameters.

The position of a chat in a chat list has changed. An updateChatLastMessage or updateChatDraftMessage update might be sent instead of the update

## Type declaration

### \_

> `readonly` **\_**: `"updateChatPosition"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### position?

> `readonly` `optional` **position**: [`chatPosition$Input`](chatPosition$Input.md)

New chat position. If new order is 0, then the chat needs to be removed from the list

## Defined in

dist/generated/types.d.ts:55059
