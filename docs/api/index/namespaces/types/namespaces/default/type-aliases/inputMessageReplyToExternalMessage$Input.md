[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageReplyToExternalMessage$Input

# Type Alias: inputMessageReplyToExternalMessage$Input

> **inputMessageReplyToExternalMessage$Input**: `object`

Version of [inputMessageReplyToExternalMessage](inputMessageReplyToExternalMessage.md) for method parameters.

Describes a message to be replied that is from a different chat or a forum topic; not supported in secret chats

## Type declaration

### \_

> `readonly` **\_**: `"inputMessageReplyToExternalMessage"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

The identifier of the chat to which the message to be replied belongs

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

The identifier of the message to be replied in the specified chat. A message can be replied in another chat or topic only if message.can_be_replied_in_another_chat

### quote?

> `readonly` `optional` **quote**: [`inputTextQuote$Input`](inputTextQuote$Input-1.md) \| `null`

Quote from the message to be replied; pass null if none

## Defined in

dist/generated/types.d.ts:13312
