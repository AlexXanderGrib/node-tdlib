[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputInlineQueryResultVenue

# Type Alias: inputInlineQueryResultVenue

> **inputInlineQueryResultVenue**: `object`

Represents information about a venue

## Type declaration

### \_

> **\_**: `"inputInlineQueryResultVenue"`

### id

> **id**: `string`

Unique identifier of the query result

### input\_message\_content

> **input\_message\_content**: [`InputMessageContent`](InputMessageContent.md)

The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact

### reply\_markup

> **reply\_markup**: [`ReplyMarkup`](ReplyMarkup.md) \| `null`

The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null

### thumbnail\_height

> **thumbnail\_height**: [`int32`](int32.md)

Thumbnail height, if known

### thumbnail\_url

> **thumbnail\_url**: `string`

URL of the result thumbnail, if it exists

### thumbnail\_width

> **thumbnail\_width**: [`int32`](int32.md)

Thumbnail width, if known

### venue

> **venue**: [`venue`](venue.md)

Venue result

## Defined in

dist/generated/types.d.ts:39355
