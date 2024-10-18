[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputInlineQueryResultDocument

# Type Alias: inputInlineQueryResultDocument

> **inputInlineQueryResultDocument**: `object`

Represents a link to a file

## Type declaration

### \_

> **\_**: `"inputInlineQueryResultDocument"`

### description

> **description**: `string`

Represents a link to a file

### document\_url

> **document\_url**: `string`

URL of the file

### id

> **id**: `string`

Unique identifier of the query result

### input\_message\_content

> **input\_message\_content**: [`InputMessageContent`](InputMessageContent.md)

The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageDocument, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact

### mime\_type

> **mime\_type**: `string`

MIME type of the file content; only "application/pdf" and "application/zip" are currently allowed

### reply\_markup

> **reply\_markup**: [`ReplyMarkup`](ReplyMarkup.md) \| `null`

The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null

### thumbnail\_height

> **thumbnail\_height**: [`int32`](int32.md)

Height of the thumbnail

### thumbnail\_url

> **thumbnail\_url**: `string`

The URL of the file thumbnail, if it exists

### thumbnail\_width

> **thumbnail\_width**: [`int32`](int32.md)

Width of the thumbnail

### title

> **title**: `string`

Title of the resulting file

## Defined in

dist/generated/types.d.ts:38905
