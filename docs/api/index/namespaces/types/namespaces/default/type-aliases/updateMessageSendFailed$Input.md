[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateMessageSendFailed$Input

# Type Alias: updateMessageSendFailed$Input

> **updateMessageSendFailed$Input**: `object`

Version of [updateMessageSendFailed](updateMessageSendFailed.md) for method parameters.

A message failed to send. Be aware that some messages being sent can be irrecoverably deleted, in which case updateDeleteMessages will be received instead of this update

## Type declaration

### \_

> `readonly` **\_**: `"updateMessageSendFailed"`

### error?

> `readonly` `optional` **error**: [`error$Input`](error$Input-1.md)

The cause of the message sending failure

### message?

> `readonly` `optional` **message**: [`message$Input`](message$Input-1.md)

The failed to send message

### old\_message\_id?

> `readonly` `optional` **old\_message\_id**: [`int53`](int53-1.md)

The previous temporary message identifier

## Defined in

dist/generated/types.d.ts:52774
