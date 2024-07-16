[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputInlineQueryResultDocument$Input

# Type Alias: inputInlineQueryResultDocument$Input

> **inputInlineQueryResultDocument$Input**: `object`

Version of [inputInlineQueryResultDocument](inputInlineQueryResultDocument.md) for method parameters.

Represents a link to a file

## Type declaration

### \_

> `readonly` **\_**: `"inputInlineQueryResultDocument"`

### description?

> `readonly` `optional` **description**: `string`

Represents a link to a file

### document\_url?

> `readonly` `optional` **document\_url**: `string`

URL of the file

### id?

> `readonly` `optional` **id**: `string`

Unique identifier of the query result

### input\_message\_content?

> `readonly` `optional` **input\_message\_content**: [`InputMessageContent$Input`](InputMessageContent$Input.md)

The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageDocument, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact

### mime\_type?

> `readonly` `optional` **mime\_type**: `string`

MIME type of the file content; only "application/pdf" and "application/zip" are currently allowed

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null

### thumbnail\_height?

> `readonly` `optional` **thumbnail\_height**: [`int32`](int32-1.md)

Height of the thumbnail

### thumbnail\_url?

> `readonly` `optional` **thumbnail\_url**: `string`

The URL of the file thumbnail, if it exists

### thumbnail\_width?

> `readonly` `optional` **thumbnail\_width**: [`int32`](int32-1.md)

Width of the thumbnail

### title?

> `readonly` `optional` **title**: `string`

Title of the resulting file

## Defined in

dist/generated/types.d.ts:37593
