[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / storyVideo$Input

# Type Alias: storyVideo$Input

> **storyVideo$Input**: `object`

Version of [storyVideo](storyVideo-1.md) for method parameters.

Describes a video file sent in a story

## Type declaration

### \_

> `readonly` **\_**: `"storyVideo"`

### duration?

> `readonly` `optional` **duration**: [`double`](double-1.md)

Duration of the video, in seconds

### has\_stickers?

> `readonly` `optional` **has\_stickers**: [`Bool$Input`](Bool$Input.md)

True, if stickers were added to the video. The list of corresponding sticker sets can be received using getAttachedStickerSets

### height?

> `readonly` `optional` **height**: [`int32`](int32-1.md)

Video height

### is\_animation?

> `readonly` `optional` **is\_animation**: [`Bool$Input`](Bool$Input.md)

True, if the video has no sound

### minithumbnail?

> `readonly` `optional` **minithumbnail**: [`minithumbnail$Input`](minithumbnail$Input-1.md) \| `null`

Video minithumbnail; may be null

### preload\_prefix\_size?

> `readonly` `optional` **preload\_prefix\_size**: [`int32`](int32-1.md)

Size of file prefix, which is supposed to be preloaded, in bytes

### thumbnail?

> `readonly` `optional` **thumbnail**: [`thumbnail$Input`](thumbnail$Input-1.md) \| `null`

Video thumbnail in JPEG or MPEG4 format; may be null

### video?

> `readonly` `optional` **video**: [`file$Input`](file$Input-1.md)

File containing the video

### width?

> `readonly` `optional` **width**: [`int32`](int32-1.md)

Video width

## Defined in

dist/generated/types.d.ts:32404
