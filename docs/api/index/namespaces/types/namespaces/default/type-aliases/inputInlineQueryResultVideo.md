[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputInlineQueryResultVideo

# Type Alias: inputInlineQueryResultVideo

> **inputInlineQueryResultVideo**: `object`

Represents a link to a page containing an embedded video player or a video file

## Type declaration

### \_

> **\_**: `"inputInlineQueryResultVideo"`

### description

> **description**: `string`

Represents a link to a page containing an embedded video player or a video file

### id

> **id**: `string`

Unique identifier of the query result

### input\_message\_content

> **input\_message\_content**: [`InputMessageContent`](InputMessageContent.md)

The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageVideo, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact

### mime\_type

> **mime\_type**: `string`

MIME type of the content of the video URL, only "text/html" or "video/mp4" are currently supported

### reply\_markup

> **reply\_markup**: [`ReplyMarkup`](ReplyMarkup.md) \| `null`

The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null

### thumbnail\_url

> **thumbnail\_url**: `string`

The URL of the video thumbnail (JPEG), if it exists

### title

> **title**: `string`

Title of the result

### video\_duration

> **video\_duration**: [`int32`](int32.md)

Video duration, in seconds

### video\_height

> **video\_height**: [`int32`](int32.md)

Height of the video

### video\_url

> **video\_url**: `string`

URL of the embedded video player or video file

### video\_width

> **video\_width**: [`int32`](int32.md)

Width of the video

## Defined in

dist/generated/types.d.ts:39439
