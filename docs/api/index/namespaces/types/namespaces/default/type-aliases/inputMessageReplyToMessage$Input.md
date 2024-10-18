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

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

The identifier of the message to be replied in the same chat and forum topic. A message can be replied in the same chat and forum topic only if messageProperties.can_be_replied

### quote?

> `readonly` `optional` **quote**: [`inputTextQuote$Input`](inputTextQuote$Input.md) \| `null`

Quote from the message to be replied; pass null if none. Must always be null for replies in secret chats

## Defined in

dist/generated/types.d.ts:13975
