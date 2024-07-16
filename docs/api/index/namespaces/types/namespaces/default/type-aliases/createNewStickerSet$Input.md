[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / createNewStickerSet$Input

# Type Alias: createNewStickerSet$Input

> **createNewStickerSet$Input**: `object`

Creates a new sticker set. Returns the newly created sticker set

## Type declaration

### \_

> `readonly` **\_**: `"createNewStickerSet"`

### name?

> `readonly` `optional` **name**: `string`

Sticker set name. Can contain only English letters, digits and underscores. Must end with *"_by_<bot username>"* (*<bot_username>* is case insensitive) for bots; 0-64 characters.

- If empty, then the name returned by getSuggestedStickerSetName will be used automatically

### needs\_repainting?

> `readonly` `optional` **needs\_repainting**: [`Bool$Input`](Bool$Input.md)

Pass true if stickers in the sticker set must be repainted; for custom emoji sticker sets only

### source?

> `readonly` `optional` **source**: `string`

Source of the sticker set; may be empty if unknown

### sticker\_type?

> `readonly` `optional` **sticker\_type**: [`StickerType$Input`](StickerType$Input.md)

Type of the stickers in the set

### stickers?

> `readonly` `optional` **stickers**: [`vector$Input`](vector$Input.md)\<[`inputSticker$Input`](inputSticker$Input-1.md)\>

List of stickers to be added to the set; 1-200 stickers for custom emoji sticker sets, and 1-120 stickers otherwise. For TGS stickers, uploadStickerFile must be used before the sticker is shown

### title?

> `readonly` `optional` **title**: `string`

Sticker set title; 1-64 characters

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53-1.md)

Sticker set owner; ignored for regular users

## Defined in

dist/generated/types.d.ts:99776
