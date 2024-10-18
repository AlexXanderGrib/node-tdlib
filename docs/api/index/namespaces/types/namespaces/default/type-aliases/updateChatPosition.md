[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateChatPosition

# Type Alias: updateChatPosition

> **updateChatPosition**: `object`

The position of a chat in a chat list has changed. An updateChatLastMessage or updateChatDraftMessage update might be sent instead of the update

## Type declaration

### \_

> **\_**: `"updateChatPosition"`

### chat\_id

> **chat\_id**: [`int53`](int53.md)

Chat identifier

### position

> **position**: [`chatPosition`](chatPosition.md)

New chat position. If new order is 0, then the chat needs to be removed from the list

## Defined in

dist/generated/types.d.ts:55041
