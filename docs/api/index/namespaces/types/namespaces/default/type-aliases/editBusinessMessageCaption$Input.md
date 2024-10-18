[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / editBusinessMessageCaption$Input

# Type Alias: editBusinessMessageCaption$Input

> **editBusinessMessageCaption$Input**: `object`

Edits the caption of a message sent on behalf of a business account; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"editBusinessMessageCaption"`

### business\_connection\_id?

> `readonly` `optional` **business\_connection\_id**: `string`

Unique identifier of business connection on behalf of which the message was sent

### caption?

> `readonly` `optional` **caption**: [`formattedText$Input`](formattedText$Input.md) \| `null`

New message content caption; pass null to remove caption; 0-getOption("message_caption_length_max") characters

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

The chat the message belongs to

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Identifier of the message

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

The new message reply markup; pass null if none

### show\_caption\_above\_media?

> `readonly` `optional` **show\_caption\_above\_media**: [`Bool$Input`](Bool$Input.md)

Pass true to show the caption above the media; otherwise, the caption will be shown below the media. Can be true only for animation, photo, and video messages

## Defined in

dist/generated/types.d.ts:81919
