[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / video$Input

# Type Alias: video$Input

> **video$Input**: `object`

Version of [video](video.md) for method parameters.

Describes a video file

## Type declaration

### \_

> `readonly` **\_**: `"video"`

### duration?

> `readonly` `optional` **duration**: [`int32`](int32.md)

Duration of the video, in seconds; as defined by the sender

### file\_name?

> `readonly` `optional` **file\_name**: `string`

Original name of the file; as defined by the sender

### has\_stickers?

> `readonly` `optional` **has\_stickers**: [`Bool$Input`](Bool$Input.md)

True, if stickers were added to the video. The list of corresponding sticker sets can be received using getAttachedStickerSets

### height?

> `readonly` `optional` **height**: [`int32`](int32.md)

Video height; as defined by the sender

### mime\_type?

> `readonly` `optional` **mime\_type**: `string`

MIME type of the file; as defined by the sender

### minithumbnail?

> `readonly` `optional` **minithumbnail**: [`minithumbnail$Input`](minithumbnail$Input.md) \| `null`

Video minithumbnail; may be null

### supports\_streaming?

> `readonly` `optional` **supports\_streaming**: [`Bool$Input`](Bool$Input.md)

True, if the video is supposed to be streamed

### thumbnail?

> `readonly` `optional` **thumbnail**: [`thumbnail$Input`](thumbnail$Input.md) \| `null`

Video thumbnail in JPEG or MPEG4 format; as defined by the sender; may be null

### video?

> `readonly` `optional` **video**: [`file$Input`](file$Input.md)

File containing the video

### width?

> `readonly` `optional` **width**: [`int32`](int32.md)

Video width; as defined by the sender

## Defined in

dist/generated/types.d.ts:5217
