[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / addRecentSticker$Input

# Type Alias: addRecentSticker$Input

> **addRecentSticker$Input**: `object`

Manually adds a new sticker to the list of recently used stickers. The new sticker is added to the top of the list. If the sticker was already in the list, it is removed from the list first.

- Only stickers belonging to a sticker set or in WEBP or WEBM format can be added to this list. Emoji stickers can't be added to recent stickers

## Type declaration

### \_

> `readonly` **\_**: `"addRecentSticker"`

### is\_attached?

> `readonly` `optional` **is\_attached**: [`Bool$Input`](Bool$Input.md)

Pass true to add the sticker to the list of stickers recently attached to photo or video files; pass false to add the sticker to the list of recently sent stickers

### sticker?

> `readonly` `optional` **sticker**: [`InputFile$Input`](InputFile$Input.md)

Sticker file to add

## Defined in

dist/generated/types.d.ts:95653
