[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getChatHistory

# Type Alias: getChatHistory()

> **getChatHistory**: (`parameters`) => [`Messages`](Messages-1.md)

Returns messages in a chat. The messages are returned in reverse chronological order (i.e., in order of decreasing message_id).

- For optimal performance, the number of returned messages is chosen by TDLib. This is an offline request if only_local is true

## Parameters

• **parameters**: [`getChatHistory$Input`](getChatHistory$Input.md)

[getChatHistory$Input](getChatHistory$Input.md)

## Returns

[`Messages`](Messages-1.md)

[Messages](Messages-1.md)

## Defined in

dist/generated/types.d.ts:78151
