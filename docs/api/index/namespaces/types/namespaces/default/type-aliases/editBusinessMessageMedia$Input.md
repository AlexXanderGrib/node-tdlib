[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / editBusinessMessageMedia$Input

# Type Alias: editBusinessMessageMedia$Input

> **editBusinessMessageMedia$Input**: `object`

Edits the content of a message with an animation, an audio, a document, a photo or a video in a message sent on behalf of a business account; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"editBusinessMessageMedia"`

### business\_connection\_id?

> `readonly` `optional` **business\_connection\_id**: `string`

Unique identifier of business connection on behalf of which the message was sent

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

The chat the message belongs to

### input\_message\_content?

> `readonly` `optional` **input\_message\_content**: [`InputMessageContent$Input`](InputMessageContent$Input.md)

New content of the message. Must be one of the following types: inputMessageAnimation, inputMessageAudio, inputMessageDocument, inputMessagePhoto or inputMessageVideo

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Identifier of the message

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

The new message reply markup; pass null if none; for bots only

## Defined in

dist/generated/types.d.ts:81851
