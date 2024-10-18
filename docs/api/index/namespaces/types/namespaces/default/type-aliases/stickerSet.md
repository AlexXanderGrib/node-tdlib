[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / stickerSet

# Type Alias: stickerSet

> **stickerSet**: `object`

Represents a sticker set

## Type declaration

### \_

> **\_**: `"stickerSet"`

### emojis

> **emojis**: [`vector`](vector.md)\<[`emojis`](emojis.md)\>

A list of emojis corresponding to the stickers in the same order. The list is only for informational purposes, because a sticker is always sent with a fixed emoji from the corresponding Sticker object

### id

> **id**: [`int64`](int64.md)

Identifier of the sticker set

### is\_allowed\_as\_chat\_emoji\_status

> **is\_allowed\_as\_chat\_emoji\_status**: [`Bool`](Bool.md)

True, if stickers in the sticker set are custom emoji that can be used as chat emoji status; for custom emoji sticker sets only

### is\_archived

> **is\_archived**: [`Bool`](Bool.md)

True, if the sticker set has been archived. A sticker set can't be installed and archived simultaneously

### is\_installed

> **is\_installed**: [`Bool`](Bool.md)

True, if the sticker set has been installed by the current user

### is\_official

> **is\_official**: [`Bool`](Bool.md)

True, if the sticker set is official

### is\_owned

> **is\_owned**: [`Bool`](Bool.md)

True, if the sticker set is owned by the current user

### is\_viewed

> **is\_viewed**: [`Bool`](Bool.md)

True for already viewed trending sticker sets

### name

> **name**: `string`

Name of the sticker set

### needs\_repainting

> **needs\_repainting**: [`Bool`](Bool.md)

True, if stickers in the sticker set are custom emoji that must be repainted; for custom emoji sticker sets only

### sticker\_type

> **sticker\_type**: [`StickerType`](StickerType.md)

Type of the stickers in the set

### stickers

> **stickers**: [`vector`](vector.md)\<[`sticker`](sticker.md)\>

List of stickers in this set

### thumbnail

> **thumbnail**: [`thumbnail`](thumbnail.md) \| `null`

Sticker set thumbnail in WEBP, TGS, or WEBM format with width and height 100; may be null. The file can be downloaded only before the thumbnail is changed

### thumbnail\_outline

> **thumbnail\_outline**: [`vector`](vector.md)\<[`closedVectorPath`](closedVectorPath.md)\>

Sticker set thumbnail's outline represented as a list of closed vector paths; may be empty. The coordinate system origin is in the upper-left corner

### title

> **title**: `string`

Title of the sticker set

## Defined in

dist/generated/types.d.ts:32345
