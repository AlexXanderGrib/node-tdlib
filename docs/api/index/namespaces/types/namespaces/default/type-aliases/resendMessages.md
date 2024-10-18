[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / resendMessages

# Type Alias: resendMessages()

> **resendMessages**: (`parameters`) => [`Messages`](Messages-1.md)

Resends messages which failed to send. Can be called only for messages for which messageSendingStateFailed.can_retry is true and after specified in messageSendingStateFailed.retry_after time passed.

- If a message is re-sent, the corresponding failed to send message is deleted. Returns the sent messages in the same order as the message identifiers passed in message_ids. If a message can't be re-sent, null will be returned instead of the message

## Parameters

• **parameters**: [`resendMessages$Input`](resendMessages$Input.md)

[resendMessages$Input](resendMessages$Input.md)

## Returns

[`Messages`](Messages-1.md)

[Messages](Messages-1.md)

## Defined in

dist/generated/types.d.ts:80561
