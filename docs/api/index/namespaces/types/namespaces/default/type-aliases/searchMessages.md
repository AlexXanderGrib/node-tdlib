[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchMessages

# Type Alias: searchMessages()

> **searchMessages**: (`parameters`) => [`FoundMessages`](FoundMessages-1.md)

Searches for messages in all chats except secret chats. Returns the results in reverse chronological order (i.e., in order of decreasing (date, chat_id, message_id)).

- For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit

## Parameters

• **parameters**: [`searchMessages$Input`](searchMessages$Input.md)

[searchMessages$Input](searchMessages$Input.md)

## Returns

[`FoundMessages`](FoundMessages-1.md)

[FoundMessages](FoundMessages-1.md)

## Defined in

dist/generated/types.d.ts:78539
