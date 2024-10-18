[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputInlineQueryResultPhoto

# Type Alias: inputInlineQueryResultPhoto

> **inputInlineQueryResultPhoto**: `object`

Represents link to a JPEG image

## Type declaration

### \_

> **\_**: `"inputInlineQueryResultPhoto"`

### description

> **description**: `string`

Represents link to a JPEG image

### id

> **id**: `string`

Unique identifier of the query result

### input\_message\_content

> **input\_message\_content**: [`InputMessageContent`](InputMessageContent.md)

The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessagePhoto, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact

### photo\_height

> **photo\_height**: [`int32`](int32.md)

Height of the photo

### photo\_url

> **photo\_url**: `string`

The URL of the JPEG photo (photo size must not exceed 5MB)

### photo\_width

> **photo\_width**: [`int32`](int32.md)

Width of the photo

### reply\_markup

> **reply\_markup**: [`ReplyMarkup`](ReplyMarkup.md) \| `null`

The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null

### thumbnail\_url

> **thumbnail\_url**: `string`

URL of the photo thumbnail, if it exists

### title

> **title**: `string`

Title of the result, if known

## Defined in

dist/generated/types.d.ts:39167
