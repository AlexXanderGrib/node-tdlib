[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / openChatSimilarChat$DirectInput

# Type Alias: openChatSimilarChat$DirectInput

> **openChatSimilarChat$DirectInput**: `object`

Informs TDLib that a chat was opened from the list of similar chats. The method is independent of openChat and closeChat methods

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the original chat, which similar chats were requested

### opened\_chat\_id?

> `readonly` `optional` **opened\_chat\_id**: [`int53`](int53.md)

Identifier of the opened chat

## Defined in

dist/generated/types.d.ts:77371
