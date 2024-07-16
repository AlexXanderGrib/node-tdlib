[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / editMessageMedia$Input

# Type Alias: editMessageMedia$Input

> **editMessageMedia$Input**: `object`

Edits the content of a message with an animation, an audio, a document, a photo or a video, including message caption. If only the caption needs to be edited, use editMessageCaption instead.

- The media can't be edited if the message was set to self-destruct or to a self-destructing media. The type of message content in an album can't be changed with exception of replacing a photo with a video or vice versa.

- Returns the edited message after the edit is completed on the server side. Can be used only if message.can_be_edited == true

## Type declaration

### \_

> `readonly` **\_**: `"editMessageMedia"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

The chat the message belongs to

### input\_message\_content?

> `readonly` `optional` **input\_message\_content**: [`InputMessageContent$Input`](InputMessageContent$Input.md)

New content of the message. Must be one of the following types: inputMessageAnimation, inputMessageAudio, inputMessageDocument, inputMessagePhoto or inputMessageVideo

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Identifier of the message

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

The new message reply markup; pass null if none; for bots only

## Defined in

dist/generated/types.d.ts:78934
