[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateMessageSendFailed

# Type Alias: updateMessageSendFailed

> **updateMessageSendFailed**: `object`

A message failed to send. Be aware that some messages being sent can be irrecoverably deleted, in which case updateDeleteMessages will be received instead of this update

## Type declaration

### \_

> **\_**: `"updateMessageSendFailed"`

### error

> **error**: [`error`](error-1.md)

The cause of the message sending failure

### message

> **message**: [`message`](message-1.md)

The failed to send message

### old\_message\_id

> **old\_message\_id**: [`int53`](int53-1.md)

The previous temporary message identifier

## Defined in

dist/generated/types.d.ts:52751
