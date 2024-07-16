[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getChatSimilarChatCount$Input

# Type Alias: getChatSimilarChatCount$Input

> **getChatSimilarChatCount$Input**: `object`

Returns approximate number of chats similar to the given chat

## Type declaration

### \_

> `readonly` **\_**: `"getChatSimilarChatCount"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the target chat; must be an identifier of a channel chat

### return\_local?

> `readonly` `optional` **return\_local**: [`Bool$Input`](Bool$Input.md)

Pass true to get the number of chats without sending network requests, or -1 if the number of chats is unknown locally

## Defined in

dist/generated/types.d.ts:75291
