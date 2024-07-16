[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputInlineQueryResultAnimation

# Type Alias: inputInlineQueryResultAnimation

> **inputInlineQueryResultAnimation**: `object`

Represents a link to an animated GIF or an animated (i.e., without sound) H.264/MPEG-4 AVC video

## Type declaration

### \_

> **\_**: `"inputInlineQueryResultAnimation"`

### id

> **id**: `string`

Unique identifier of the query result

### input\_message\_content

> **input\_message\_content**: [`InputMessageContent`](InputMessageContent.md)

The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageAnimation, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact

### reply\_markup

> **reply\_markup**: [`ReplyMarkup`](ReplyMarkup.md) \| `null`

The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null

### thumbnail\_mime\_type

> **thumbnail\_mime\_type**: `string`

MIME type of the video thumbnail. If non-empty, must be one of "image/jpeg", "image/gif" and "video/mp4"

### thumbnail\_url

> **thumbnail\_url**: `string`

URL of the result thumbnail (JPEG, GIF, or MPEG4), if it exists

### title

> **title**: `string`

Title of the query result

### video\_duration

> **video\_duration**: [`int32`](int32-1.md)

Duration of the video, in seconds

### video\_height

> **video\_height**: [`int32`](int32-1.md)

Height of the video

### video\_mime\_type

> **video\_mime\_type**: `string`

MIME type of the video file. Must be one of "image/gif" and "video/mp4"

### video\_url

> **video\_url**: `string`

The URL of the video file (file size must not exceed 1MB)

### video\_width

> **video\_width**: [`int32`](int32-1.md)

Width of the video

## Defined in

dist/generated/types.d.ts:37129
