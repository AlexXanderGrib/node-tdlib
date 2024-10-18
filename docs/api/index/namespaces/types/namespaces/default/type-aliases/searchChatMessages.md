[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchChatMessages

# Type Alias: searchChatMessages()

> **searchChatMessages**: (`parameters`) => [`FoundChatMessages`](FoundChatMessages-1.md)

Searches for messages with given words in the chat. Returns the results in reverse chronological order, i.e. in order of decreasing message_id. Cannot be used in secret chats with a non-empty query

- (searchSecretMessages must be used instead), or without an enabled message database. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit.

- A combination of query, sender_id, filter and message_thread_id search criteria is expected to be supported, only if it is required for Telegram official application implementation

## Parameters

• **parameters**: [`searchChatMessages$Input`](searchChatMessages$Input.md)

[searchChatMessages$Input](searchChatMessages$Input.md)

## Returns

[`FoundChatMessages`](FoundChatMessages-1.md)

[FoundChatMessages](FoundChatMessages-1.md)

## Defined in

dist/generated/types.d.ts:78435
