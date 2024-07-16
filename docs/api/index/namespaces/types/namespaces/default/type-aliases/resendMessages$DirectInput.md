[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / resendMessages$DirectInput

# Type Alias: resendMessages$DirectInput

> **resendMessages$DirectInput**: `object`

Resends messages which failed to send. Can be called only for messages for which messageSendingStateFailed.can_retry is true and after specified in messageSendingStateFailed.retry_after time passed.

- If a message is re-sent, the corresponding failed to send message is deleted. Returns the sent messages in the same order as the message identifiers passed in message_ids. If a message can't be re-sent, null will be returned instead of the message

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat to send messages

### message\_ids?

> `readonly` `optional` **message\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53-1.md)\>

Identifiers of the messages to resend. Message identifiers must be in a strictly increasing order

### quote?

> `readonly` `optional` **quote**: [`inputTextQuote$Input`](inputTextQuote$Input-1.md) \| `null`

New manually chosen quote from the message to be replied; pass null if none. Ignored if more than one message is re-sent, or if messageSendingStateFailed.need_another_reply_quote == false

## Defined in

dist/generated/types.d.ts:78527
