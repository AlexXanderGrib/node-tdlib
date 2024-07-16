[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / loadChats$DirectInput

# Type Alias: loadChats$DirectInput

> **loadChats$DirectInput**: `object`

Loads more chats from a chat list. The loaded chats and their positions in the chat list will be sent through updates. Chats are sorted by the pair (chat.position.order, chat.id) in descending order. Returns a 404 error if all chats have been loaded

## Type declaration

### chat\_list?

> `readonly` `optional` **chat\_list**: [`ChatList$Input`](ChatList$Input.md) \| `null`

The chat list in which to load chats; pass null to load chats from the main chat list

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of chats to be loaded. For optimal performance, the number of loaded chats is chosen by TDLib and can be smaller than the specified limit, even if the end of the list is not reached

## Defined in

dist/generated/types.d.ts:75014
