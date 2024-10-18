[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / stickerSetInfo$Input

# Type Alias: stickerSetInfo$Input

> **stickerSetInfo$Input**: `object`

Version of [stickerSetInfo](stickerSetInfo.md) for method parameters.

Represents short information about a sticker set

## Type declaration

### \_

> `readonly` **\_**: `"stickerSetInfo"`

### covers?

> `readonly` `optional` **covers**: [`vector$Input`](vector$Input.md)\<[`sticker$Input`](sticker$Input.md)\>

Up to the first 5 stickers from the set, depending on the context. If the application needs more stickers the full sticker set needs to be requested

### id?

> `readonly` `optional` **id**: [`int64$Input`](int64$Input.md)

Identifier of the sticker set

### is\_allowed\_as\_chat\_emoji\_status?

> `readonly` `optional` **is\_allowed\_as\_chat\_emoji\_status**: [`Bool$Input`](Bool$Input.md)

True, if stickers in the sticker set are custom emoji that can be used as chat emoji status; for custom emoji sticker sets only

### is\_archived?

> `readonly` `optional` **is\_archived**: [`Bool$Input`](Bool$Input.md)

True, if the sticker set has been archived. A sticker set can't be installed and archived simultaneously

### is\_installed?

> `readonly` `optional` **is\_installed**: [`Bool$Input`](Bool$Input.md)

True, if the sticker set has been installed by the current user

### is\_official?

> `readonly` `optional` **is\_official**: [`Bool$Input`](Bool$Input.md)

True, if the sticker set is official

### is\_owned?

> `readonly` `optional` **is\_owned**: [`Bool$Input`](Bool$Input.md)

True, if the sticker set is owned by the current user

### is\_viewed?

> `readonly` `optional` **is\_viewed**: [`Bool$Input`](Bool$Input.md)

True for already viewed trending sticker sets

### name?

> `readonly` `optional` **name**: `string`

Name of the sticker set

### needs\_repainting?

> `readonly` `optional` **needs\_repainting**: [`Bool$Input`](Bool$Input.md)

True, if stickers in the sticker set are custom emoji that must be repainted; for custom emoji sticker sets only

### size?

> `readonly` `optional` **size**: [`int32`](int32.md)

Total number of stickers in the set

### sticker\_type?

> `readonly` `optional` **sticker\_type**: [`StickerType$Input`](StickerType$Input.md)

Type of the stickers in the set

### thumbnail?

> `readonly` `optional` **thumbnail**: [`thumbnail$Input`](thumbnail$Input.md) \| `null`

Sticker set thumbnail in WEBP, TGS, or WEBM format with width and height 100; may be null. The file can be downloaded only before the thumbnail is changed

### thumbnail\_outline?

> `readonly` `optional` **thumbnail\_outline**: [`vector$Input`](vector$Input.md)\<[`closedVectorPath$Input`](closedVectorPath$Input.md)\>

Sticker set thumbnail's outline represented as a list of closed vector paths; may be empty. The coordinate system origin is in the upper-left corner

### title?

> `readonly` `optional` **title**: `string`

Title of the sticker set

## Defined in

dist/generated/types.d.ts:32592
