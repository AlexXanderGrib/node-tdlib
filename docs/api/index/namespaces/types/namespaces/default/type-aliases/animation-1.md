[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / animation

# Type Alias: animation

> **animation**: `object`

Describes an animation file. The animation must be encoded in GIF or MPEG4 format

## Type declaration

### \_

> **\_**: `"animation"`

### animation

> **animation**: [`file`](file-1.md)

File containing the animation

### duration

> **duration**: [`int32`](int32-1.md)

Duration of the animation, in seconds; as defined by the sender

### file\_name

> **file\_name**: `string`

Original name of the file; as defined by the sender

### has\_stickers

> **has\_stickers**: [`Bool`](Bool.md)

True, if stickers were added to the animation. The list of corresponding sticker set can be received using getAttachedStickerSets

### height

> **height**: [`int32`](int32-1.md)

Height of the animation

### mime\_type

> **mime\_type**: `string`

MIME type of the file, usually "image/gif" or "video/mp4"

### minithumbnail

> **minithumbnail**: [`minithumbnail`](minithumbnail-1.md) \| `null`

Animation minithumbnail; may be null

### thumbnail

> **thumbnail**: [`thumbnail`](thumbnail-1.md) \| `null`

Animation thumbnail in JPEG or MPEG4 format; may be null

### width

> **width**: [`int32`](int32-1.md)

Width of the animation

## Defined in

dist/generated/types.d.ts:4683
