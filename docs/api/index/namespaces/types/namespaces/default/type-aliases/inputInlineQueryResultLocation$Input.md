[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputInlineQueryResultLocation$Input

# Type Alias: inputInlineQueryResultLocation$Input

> **inputInlineQueryResultLocation$Input**: `object`

Version of [inputInlineQueryResultLocation](inputInlineQueryResultLocation.md) for method parameters.

Represents a point on the map

## Type declaration

### \_

> `readonly` **\_**: `"inputInlineQueryResultLocation"`

### id?

> `readonly` `optional` **id**: `string`

Unique identifier of the query result

### input\_message\_content?

> `readonly` `optional` **input\_message\_content**: [`InputMessageContent$Input`](InputMessageContent$Input.md)

The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact

### live\_period?

> `readonly` `optional` **live\_period**: [`int32`](int32-1.md)

Amount of time relative to the message sent time until the location can be updated, in seconds

### location?

> `readonly` `optional` **location**: [`location$Input`](location$Input-1.md)

Location result

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

### title?

> `readonly` `optional` **title**: `string`

Title of the result

## Defined in

dist/generated/types.d.ts:37746
