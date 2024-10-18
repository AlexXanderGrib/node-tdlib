[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / animation$Input

# Type Alias: animation$Input

> **animation$Input**: `object`

Version of [animation](animation.md) for method parameters.

Describes an animation file. The animation must be encoded in GIF or MPEG4 format

## Type declaration

### \_

> `readonly` **\_**: `"animation"`

### animation?

> `readonly` `optional` **animation**: [`file$Input`](file$Input.md)

File containing the animation

### duration?

> `readonly` `optional` **duration**: [`int32`](int32.md)

Duration of the animation, in seconds; as defined by the sender

### file\_name?

> `readonly` `optional` **file\_name**: `string`

Original name of the file; as defined by the sender

### has\_stickers?

> `readonly` `optional` **has\_stickers**: [`Bool$Input`](Bool$Input.md)

True, if stickers were added to the animation. The list of corresponding sticker set can be received using getAttachedStickerSets

### height?

> `readonly` `optional` **height**: [`int32`](int32.md)

Height of the animation

### mime\_type?

> `readonly` `optional` **mime\_type**: `string`

MIME type of the file, usually "image/gif" or "video/mp4"

### minithumbnail?

> `readonly` `optional` **minithumbnail**: [`minithumbnail$Input`](minithumbnail$Input.md) \| `null`

Animation minithumbnail; may be null

### thumbnail?

> `readonly` `optional` **thumbnail**: [`thumbnail$Input`](thumbnail$Input.md) \| `null`

Animation thumbnail in JPEG or MPEG4 format; may be null

### width?

> `readonly` `optional` **width**: [`int32`](int32.md)

Width of the animation

## Defined in

dist/generated/types.d.ts:4782
