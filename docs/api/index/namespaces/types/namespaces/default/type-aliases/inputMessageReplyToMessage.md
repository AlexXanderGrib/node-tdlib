[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageReplyToMessage

# Type Alias: inputMessageReplyToMessage

> **inputMessageReplyToMessage**: `object`

Describes a message to be replied in the same chat and forum topic

## Type declaration

### \_

> **\_**: `"inputMessageReplyToMessage"`

### message\_id

> **message\_id**: [`int53`](int53-1.md)

The identifier of the message to be replied in the same chat and forum topic

### quote

> **quote**: [`inputTextQuote`](inputTextQuote-1.md) \| `null`

Quote from the message to be replied; pass null if none. Must always be null for replies in secret chats

## Defined in

dist/generated/types.d.ts:13255
