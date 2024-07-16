[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputInlineQueryResultContact$Input

# Type Alias: inputInlineQueryResultContact$Input

> **inputInlineQueryResultContact$Input**: `object`

Version of [inputInlineQueryResultContact](inputInlineQueryResultContact.md) for method parameters.

Represents a user contact

## Type declaration

### \_

> `readonly` **\_**: `"inputInlineQueryResultContact"`

### contact?

> `readonly` `optional` **contact**: [`contact$Input`](contact$Input-1.md)

User contact

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

## Defined in

dist/generated/types.d.ts:37494
