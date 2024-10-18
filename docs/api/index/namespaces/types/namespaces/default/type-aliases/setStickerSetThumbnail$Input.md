[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setStickerSetThumbnail$Input

# Type Alias: setStickerSetThumbnail$Input

> **setStickerSetThumbnail$Input**: `object`

Sets a sticker set thumbnail

## Type declaration

### \_

> `readonly` **\_**: `"setStickerSetThumbnail"`

### format?

> `readonly` `optional` **format**: [`StickerFormat$Input`](StickerFormat$Input.md) \| `null`

Format of the thumbnail; pass null if thumbnail is removed

### name?

> `readonly` `optional` **name**: `string`

Sticker set name. The sticker set must be owned by the current user

### thumbnail?

> `readonly` `optional` **thumbnail**: [`InputFile$Input`](InputFile$Input.md) \| `null`

Thumbnail to set; pass null to remove the sticker set thumbnail

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53.md)

Sticker set owner; ignored for regular users

## Defined in

dist/generated/types.d.ts:102753
