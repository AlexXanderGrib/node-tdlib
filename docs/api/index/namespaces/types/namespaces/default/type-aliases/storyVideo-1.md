[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / storyVideo

# Type Alias: storyVideo

> **storyVideo**: `object`

Describes a video file sent in a story

## Type declaration

### \_

> **\_**: `"storyVideo"`

### duration

> **duration**: [`double`](double-1.md)

Duration of the video, in seconds

### has\_stickers

> **has\_stickers**: [`Bool`](Bool.md)

True, if stickers were added to the video. The list of corresponding sticker sets can be received using getAttachedStickerSets

### height

> **height**: [`int32`](int32-1.md)

Video height

### is\_animation

> **is\_animation**: [`Bool`](Bool.md)

True, if the video has no sound

### minithumbnail

> **minithumbnail**: [`minithumbnail`](minithumbnail-1.md) \| `null`

Video minithumbnail; may be null

### preload\_prefix\_size

> **preload\_prefix\_size**: [`int32`](int32-1.md)

Size of file prefix, which is supposed to be preloaded, in bytes

### thumbnail

> **thumbnail**: [`thumbnail`](thumbnail-1.md) \| `null`

Video thumbnail in JPEG or MPEG4 format; may be null

### video

> **video**: [`file`](file-1.md)

File containing the video

### width

> **width**: [`int32`](int32-1.md)

Video width

## Defined in

dist/generated/types.d.ts:32351
