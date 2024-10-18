[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / addFavoriteSticker$Input

# Type Alias: addFavoriteSticker$Input

> **addFavoriteSticker$Input**: `object`

Adds a new sticker to the list of favorite stickers. The new sticker is added to the top of the list. If the sticker was already in the list, it is removed from the list first.

- Only stickers belonging to a sticker set or in WEBP or WEBM format can be added to this list. Emoji stickers can't be added to favorite stickers

## Type declaration

### \_

> `readonly` **\_**: `"addFavoriteSticker"`

### sticker?

> `readonly` `optional` **sticker**: [`InputFile$Input`](InputFile$Input.md)

Sticker file to add

## Defined in

dist/generated/types.d.ts:95780
