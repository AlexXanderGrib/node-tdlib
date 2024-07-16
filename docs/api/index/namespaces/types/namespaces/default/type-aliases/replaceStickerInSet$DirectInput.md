[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / replaceStickerInSet$DirectInput

# Type Alias: replaceStickerInSet$DirectInput

> **replaceStickerInSet$DirectInput**: `object`

Replaces existing sticker in a set. The function is equivalent to removeStickerFromSet, then addStickerToSet, then setStickerPositionInSet

## Type declaration

### name?

> `readonly` `optional` **name**: `string`

Sticker set name. The sticker set must be owned by the current user

### new\_sticker?

> `readonly` `optional` **new\_sticker**: [`inputSticker$Input`](inputSticker$Input-1.md)

Sticker to add to the set

### old\_sticker?

> `readonly` `optional` **old\_sticker**: [`InputFile$Input`](InputFile$Input.md)

Sticker to remove from the set

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53-1.md)

Sticker set owner; ignored for regular users

## Defined in

dist/generated/types.d.ts:99942
