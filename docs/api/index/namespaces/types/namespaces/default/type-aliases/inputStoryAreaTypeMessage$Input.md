[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputStoryAreaTypeMessage$Input

# Type Alias: inputStoryAreaTypeMessage$Input

> **inputStoryAreaTypeMessage$Input**: `object`

Version of [inputStoryAreaTypeMessage](inputStoryAreaTypeMessage.md) for method parameters.

An area pointing to a message

## Type declaration

### \_

> `readonly` **\_**: `"inputStoryAreaTypeMessage"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat with the message. Currently, the chat must be a supergroup or a channel chat

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Identifier of the message. Only successfully sent non-scheduled messages can be specified

## Defined in

dist/generated/types.d.ts:32237
