[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputInlineQueryResultArticle

# Type Alias: inputInlineQueryResultArticle

> **inputInlineQueryResultArticle**: `object`

Represents a link to an article or web page

## Type declaration

### \_

> **\_**: `"inputInlineQueryResultArticle"`

### description

> **description**: `string`

Represents a link to an article or web page

### hide\_url

> **hide\_url**: [`Bool`](Bool.md)

True, if the URL must be not shown

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

> **thumbnail\_height**: [`int32`](int32-1.md)

Thumbnail height, if known

### thumbnail\_url

> **thumbnail\_url**: `string`

URL of the result thumbnail, if it exists

### thumbnail\_width

> **thumbnail\_width**: [`int32`](int32-1.md)

Thumbnail width, if known

### title

> **title**: `string`

Title of the result

### url

> **url**: `string`

URL of the result, if it exists

## Defined in

dist/generated/types.d.ts:37253
