[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / editInlineMessageCaption$DirectInput

# Type Alias: editInlineMessageCaption$DirectInput

> **editInlineMessageCaption$DirectInput**: `object`

Edits the caption of an inline message sent via a bot; for bots only

## Type declaration

### caption?

> `readonly` `optional` **caption**: [`formattedText$Input`](formattedText$Input.md) \| `null`

New message content caption; pass null to remove caption; 0-getOption("message_caption_length_max") characters

### inline\_message\_id?

> `readonly` `optional` **inline\_message\_id**: `string`

Inline message identifier

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

The new message reply markup; pass null if none

### show\_caption\_above\_media?

> `readonly` `optional` **show\_caption\_above\_media**: [`Bool$Input`](Bool$Input.md)

Pass true to show the caption above the media; otherwise, the caption will be shown below the media. Can be true only for animation, photo, and video messages

## Defined in

dist/generated/types.d.ts:81323
