[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageReplyToExternalMessage

# Type Alias: inputMessageReplyToExternalMessage

> **inputMessageReplyToExternalMessage**: `object`

Describes a message to be replied that is from a different chat or a forum topic; not supported in secret chats

## Type declaration

### \_

> **\_**: `"inputMessageReplyToExternalMessage"`

### chat\_id

> **chat\_id**: [`int53`](int53.md)

The identifier of the chat to which the message to be replied belongs

### message\_id

> **message\_id**: [`int53`](int53.md)

The identifier of the message to be replied in the specified chat. A message can be replied in another chat or forum topic only if messageProperties.can_be_replied_in_another_chat

### quote

> **quote**: [`inputTextQuote`](inputTextQuote.md) \| `null`

Quote from the message to be replied; pass null if none

## Defined in

dist/generated/types.d.ts:13991
