[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputInlineQueryResultVideo$Input

# Type Alias: inputInlineQueryResultVideo$Input

> **inputInlineQueryResultVideo$Input**: `object`

Version of [inputInlineQueryResultVideo](inputInlineQueryResultVideo.md) for method parameters.

Represents a link to a page containing an embedded video player or a video file

## Type declaration

### \_

> `readonly` **\_**: `"inputInlineQueryResultVideo"`

### description?

> `readonly` `optional` **description**: `string`

Represents a link to a page containing an embedded video player or a video file

### id?

> `readonly` `optional` **id**: `string`

Unique identifier of the query result

### input\_message\_content?

> `readonly` `optional` **input\_message\_content**: [`InputMessageContent$Input`](InputMessageContent$Input.md)

The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageVideo, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact

### mime\_type?

> `readonly` `optional` **mime\_type**: `string`

MIME type of the content of the video URL, only "text/html" or "video/mp4" are currently supported

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null

### thumbnail\_url?

> `readonly` `optional` **thumbnail\_url**: `string`

The URL of the video thumbnail (JPEG), if it exists

### title?

> `readonly` `optional` **title**: `string`

Title of the result

### video\_duration?

> `readonly` `optional` **video\_duration**: [`int32`](int32-1.md)

Video duration, in seconds

### video\_height?

> `readonly` `optional` **video\_height**: [`int32`](int32-1.md)

Height of the video

### video\_url?

> `readonly` `optional` **video\_url**: `string`

URL of the embedded video player or video file

### video\_width?

> `readonly` `optional` **video\_width**: [`int32`](int32-1.md)

Width of the video

## Defined in

dist/generated/types.d.ts:38132
