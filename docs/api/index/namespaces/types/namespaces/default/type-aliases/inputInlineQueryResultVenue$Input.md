[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputInlineQueryResultVenue$Input

# Type Alias: inputInlineQueryResultVenue$Input

> **inputInlineQueryResultVenue$Input**: `object`

Version of [inputInlineQueryResultVenue](inputInlineQueryResultVenue.md) for method parameters.

Represents information about a venue

## Type declaration

### \_

> `readonly` **\_**: `"inputInlineQueryResultVenue"`

### id?

> `readonly` `optional` **id**: `string`

Unique identifier of the query result

### input\_message\_content?

> `readonly` `optional` **input\_message\_content**: [`InputMessageContent$Input`](InputMessageContent$Input.md)

The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null

### thumbnail\_height?

> `readonly` `optional` **thumbnail\_height**: [`int32`](int32-1.md)

Thumbnail height, if known

### thumbnail\_url?

> `readonly` `optional` **thumbnail\_url**: `string`

URL of the result thumbnail, if it exists

### thumbnail\_width?

> `readonly` `optional` **thumbnail\_width**: [`int32`](int32-1.md)

Thumbnail width, if known

### venue?

> `readonly` `optional` **venue**: [`venue$Input`](venue$Input-1.md)

Venue result

## Defined in

dist/generated/types.d.ts:38028
