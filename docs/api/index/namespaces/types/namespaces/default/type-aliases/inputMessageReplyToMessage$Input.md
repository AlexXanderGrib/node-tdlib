[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageReplyToMessage$Input

# Type Alias: inputMessageReplyToMessage$Input

> **inputMessageReplyToMessage$Input**: `object`

Version of [inputMessageReplyToMessage](inputMessageReplyToMessage.md) for method parameters.

Describes a message to be replied in the same chat and forum topic

## Type declaration

### \_

> `readonly` **\_**: `"inputMessageReplyToMessage"`

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

The identifier of the message to be replied in the same chat and forum topic

### quote?

> `readonly` `optional` **quote**: [`inputTextQuote$Input`](inputTextQuote$Input-1.md) \| `null`

Quote from the message to be replied; pass null if none. Must always be null for replies in secret chats

## Defined in

dist/generated/types.d.ts:13273
