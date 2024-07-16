[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / photo$Input

# Type Alias: photo$Input

> **photo$Input**: `object`

Version of [photo](photo-1.md) for method parameters.

Describes a photo

## Type declaration

### \_

> `readonly` **\_**: `"photo"`

### has\_stickers?

> `readonly` `optional` **has\_stickers**: [`Bool$Input`](Bool$Input.md)

True, if stickers were added to the photo. The list of corresponding sticker sets can be received using getAttachedStickerSets

### minithumbnail?

> `readonly` `optional` **minithumbnail**: [`minithumbnail$Input`](minithumbnail$Input-1.md) \| `null`

Photo minithumbnail; may be null

### sizes?

> `readonly` `optional` **sizes**: [`vector$Input`](vector$Input.md)\<[`photoSize$Input`](photoSize$Input-1.md)\>

Available variants of the photo, in different sizes

## Defined in

dist/generated/types.d.ts:4978
