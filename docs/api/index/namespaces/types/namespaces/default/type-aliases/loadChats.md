[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / loadChats

# Type Alias: loadChats()

> **loadChats**: (`parameters`) => [`Ok`](Ok-1.md)

Loads more chats from a chat list. The loaded chats and their positions in the chat list will be sent through updates. Chats are sorted by the pair (chat.position.order, chat.id) in descending order. Returns a 404 error if all chats have been loaded

## Parameters

• **parameters**: [`loadChats$Input`](loadChats$Input.md)

[loadChats$Input](loadChats$Input.md)

## Returns

[`Ok`](Ok-1.md)

[Ok](Ok-1.md)

## Defined in

dist/generated/types.d.ts:77058
