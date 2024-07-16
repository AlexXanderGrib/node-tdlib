[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputInlineQueryResultPhoto$Input

# Type Alias: inputInlineQueryResultPhoto$Input

> **inputInlineQueryResultPhoto$Input**: `object`

Version of [inputInlineQueryResultPhoto](inputInlineQueryResultPhoto.md) for method parameters.

Represents link to a JPEG image

## Type declaration

### \_

> `readonly` **\_**: `"inputInlineQueryResultPhoto"`

### description?

> `readonly` `optional` **description**: `string`

Represents link to a JPEG image

### id?

> `readonly` `optional` **id**: `string`

Unique identifier of the query result

### input\_message\_content?

> `readonly` `optional` **input\_message\_content**: [`InputMessageContent$Input`](InputMessageContent$Input.md)

The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessagePhoto, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact

### photo\_height?

> `readonly` `optional` **photo\_height**: [`int32`](int32-1.md)

Height of the photo

### photo\_url?

> `readonly` `optional` **photo\_url**: `string`

The URL of the JPEG photo (photo size must not exceed 5MB)

### photo\_width?

> `readonly` `optional` **photo\_width**: [`int32`](int32-1.md)

Width of the photo

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null

### thumbnail\_url?

> `readonly` `optional` **thumbnail\_url**: `string`

URL of the photo thumbnail, if it exists

### title?

> `readonly` `optional` **title**: `string`

Title of the result, if known

## Defined in

dist/generated/types.d.ts:37850
