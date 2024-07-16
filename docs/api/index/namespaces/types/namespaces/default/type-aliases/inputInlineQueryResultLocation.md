[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputInlineQueryResultLocation

# Type Alias: inputInlineQueryResultLocation

> **inputInlineQueryResultLocation**: `object`

Represents a point on the map

## Type declaration

### \_

> **\_**: `"inputInlineQueryResultLocation"`

### id

> **id**: `string`

Unique identifier of the query result

### input\_message\_content

> **input\_message\_content**: [`InputMessageContent`](InputMessageContent.md)

The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact

### live\_period

> **live\_period**: [`int32`](int32-1.md)

Amount of time relative to the message sent time until the location can be updated, in seconds

### location

> **location**: [`location`](location-1.md)

Location result

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

## Defined in

dist/generated/types.d.ts:37693
