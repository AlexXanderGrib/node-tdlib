[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateMessageSendAcknowledged

# Type Alias: updateMessageSendAcknowledged

> **updateMessageSendAcknowledged**: `object`

A request to send a message has reached the Telegram server. This doesn't mean that the message will be sent successfully.

- This update is sent only if the option "use_quick_ack" is set to true. This update may be sent multiple times for the same message

## Type declaration

### \_

> **\_**: `"updateMessageSendAcknowledged"`

### chat\_id

> **chat\_id**: [`int53`](int53-1.md)

The chat identifier of the sent message

### message\_id

> **message\_id**: [`int53`](int53-1.md)

A temporary message identifier

## Defined in

dist/generated/types.d.ts:52681
