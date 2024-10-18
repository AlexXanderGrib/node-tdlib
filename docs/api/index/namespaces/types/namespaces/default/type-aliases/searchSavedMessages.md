[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchSavedMessages

# Type Alias: searchSavedMessages()

> **searchSavedMessages**: (`parameters`) => [`FoundChatMessages`](FoundChatMessages-1.md)

Searches for messages tagged by the given reaction and with the given words in the Saved Messages chat; for Telegram Premium users only.

- Returns the results in reverse chronological order, i.e. in order of decreasing message_id

- For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit

## Parameters

• **parameters**: [`searchSavedMessages$Input`](searchSavedMessages$Input.md)

[searchSavedMessages$Input](searchSavedMessages$Input.md)

## Returns

[`FoundChatMessages`](FoundChatMessages-1.md)

[FoundChatMessages](FoundChatMessages-1.md)

## Defined in

dist/generated/types.d.ts:78701
