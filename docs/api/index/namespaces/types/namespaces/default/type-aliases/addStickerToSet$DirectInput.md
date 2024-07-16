[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / addStickerToSet$DirectInput

# Type Alias: addStickerToSet$DirectInput

> **addStickerToSet$DirectInput**: `object`

Adds a new sticker to a set

## Type declaration

### name?

> `readonly` `optional` **name**: `string`

Sticker set name. The sticker set must be owned by the current user, and contain less than 200 stickers for custom emoji sticker sets and less than 120 otherwise

### sticker?

> `readonly` `optional` **sticker**: [`inputSticker$Input`](inputSticker$Input-1.md)

Sticker to add to the set

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53-1.md)

Sticker set owner; ignored for regular users

## Defined in

dist/generated/types.d.ts:99889
