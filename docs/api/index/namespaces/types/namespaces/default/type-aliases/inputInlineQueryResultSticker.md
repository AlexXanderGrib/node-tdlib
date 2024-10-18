[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputInlineQueryResultSticker

# Type Alias: inputInlineQueryResultSticker

> **inputInlineQueryResultSticker**: `object`

Represents a link to a WEBP, TGS, or WEBM sticker

## Type declaration

### \_

> **\_**: `"inputInlineQueryResultSticker"`

### id

> **id**: `string`

Unique identifier of the query result

### input\_message\_content

> **input\_message\_content**: [`InputMessageContent`](InputMessageContent.md)

The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageSticker, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact

### reply\_markup

> **reply\_markup**: [`ReplyMarkup`](ReplyMarkup.md) \| `null`

The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null

### sticker\_height

> **sticker\_height**: [`int32`](int32.md)

Height of the sticker

### sticker\_url

> **sticker\_url**: `string`

The URL of the WEBP, TGS, or WEBM sticker (sticker file size must not exceed 5MB)

### sticker\_width

> **sticker\_width**: [`int32`](int32.md)

Width of the sticker

### thumbnail\_url

> **thumbnail\_url**: `string`

URL of the sticker thumbnail, if it exists

## Defined in

dist/generated/types.d.ts:39271
