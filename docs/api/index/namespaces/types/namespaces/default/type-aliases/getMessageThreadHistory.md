[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getMessageThreadHistory

# Type Alias: getMessageThreadHistory()

> **getMessageThreadHistory**: (`parameters`) => [`Messages`](Messages-1.md)

Returns messages in a message thread of a message. Can be used only if messageProperties.can_get_message_thread == true. Message thread of a channel message is in the channel's linked supergroup.

- The messages are returned in reverse chronological order (i.e., in order of decreasing message_id). For optimal performance, the number of returned messages is chosen by TDLib

## Parameters

• **parameters**: [`getMessageThreadHistory$Input`](getMessageThreadHistory$Input.md)

[getMessageThreadHistory$Input](getMessageThreadHistory$Input.md)

## Returns

[`Messages`](Messages-1.md)

[Messages](Messages-1.md)

## Defined in

dist/generated/types.d.ts:78229
