[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / video

# Type Alias: video

> **video**: `object`

Describes a video file

## Type declaration

### \_

> **\_**: `"video"`

### duration

> **duration**: [`int32`](int32.md)

Duration of the video, in seconds; as defined by the sender

### file\_name

> **file\_name**: `string`

Original name of the file; as defined by the sender

### has\_stickers

> **has\_stickers**: [`Bool`](Bool.md)

True, if stickers were added to the video. The list of corresponding sticker sets can be received using getAttachedStickerSets

### height

> **height**: [`int32`](int32.md)

Video height; as defined by the sender

### mime\_type

> **mime\_type**: `string`

MIME type of the file; as defined by the sender

### minithumbnail

> **minithumbnail**: [`minithumbnail`](minithumbnail.md) \| `null`

Video minithumbnail; may be null

### supports\_streaming

> **supports\_streaming**: [`Bool`](Bool.md)

True, if the video is supposed to be streamed

### thumbnail

> **thumbnail**: [`thumbnail`](thumbnail.md) \| `null`

Video thumbnail in JPEG or MPEG4 format; as defined by the sender; may be null

### video

> **video**: [`file`](file.md)

File containing the video

### width

> **width**: [`int32`](int32.md)

Video width; as defined by the sender

## Defined in

dist/generated/types.d.ts:5159
