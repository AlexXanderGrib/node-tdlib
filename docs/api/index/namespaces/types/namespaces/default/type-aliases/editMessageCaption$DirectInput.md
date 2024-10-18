[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / editMessageCaption$DirectInput

# Type Alias: editMessageCaption$DirectInput

> **editMessageCaption$DirectInput**: `object`

Edits the message content caption. Returns the edited message after the edit is completed on the server side

## Type declaration

### caption?

> `readonly` `optional` **caption**: [`formattedText$Input`](formattedText$Input.md) \| `null`

New message content caption; 0-getOption("message_caption_length_max") characters; pass null to remove caption

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

The chat the message belongs to

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Identifier of the message. Use messageProperties.can_be_edited to check whether the message can be edited

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

The new message reply markup; pass null if none; for bots only

### show\_caption\_above\_media?

> `readonly` `optional` **show\_caption\_above\_media**: [`Bool$Input`](Bool$Input.md)

Pass true to show the caption above the media; otherwise, the caption will be shown below the media. Can be true only for animation, photo, and video messages

## Defined in

dist/generated/types.d.ts:81034
