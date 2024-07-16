[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputInlineQueryResultSticker$Input

# Type Alias: inputInlineQueryResultSticker$Input

> **inputInlineQueryResultSticker$Input**: `object`

Version of [inputInlineQueryResultSticker](inputInlineQueryResultSticker.md) for method parameters.

Represents a link to a WEBP, TGS, or WEBM sticker

## Type declaration

### \_

> `readonly` **\_**: `"inputInlineQueryResultSticker"`

### id?

> `readonly` `optional` **id**: `string`

Unique identifier of the query result

### input\_message\_content?

> `readonly` `optional` **input\_message\_content**: [`InputMessageContent$Input`](InputMessageContent$Input.md)

The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageSticker, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null

### sticker\_height?

> `readonly` `optional` **sticker\_height**: [`int32`](int32-1.md)

Height of the sticker

### sticker\_url?

> `readonly` `optional` **sticker\_url**: `string`

The URL of the WEBP, TGS, or WEBM sticker (sticker file size must not exceed 5MB)

### sticker\_width?

> `readonly` `optional` **sticker\_width**: [`int32`](int32-1.md)

Width of the sticker

### thumbnail\_url?

> `readonly` `optional` **thumbnail\_url**: `string`

URL of the sticker thumbnail, if it exists

## Defined in

dist/generated/types.d.ts:37944
