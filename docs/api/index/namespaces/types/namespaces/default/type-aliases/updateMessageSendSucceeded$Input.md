[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateMessageSendSucceeded$Input

# Type Alias: updateMessageSendSucceeded$Input

> **updateMessageSendSucceeded$Input**: `object`

Version of [updateMessageSendSucceeded](updateMessageSendSucceeded.md) for method parameters.

A message has been successfully sent

## Type declaration

### \_

> `readonly` **\_**: `"updateMessageSendSucceeded"`

### message?

> `readonly` `optional` **message**: [`message$Input`](message$Input.md)

The sent message. Usually only the message identifier, date, and content are changed, but almost all other fields can also change

### old\_message\_id?

> `readonly` `optional` **old\_message\_id**: [`int53`](int53.md)

The previous temporary message identifier

## Defined in

dist/generated/types.d.ts:54351
